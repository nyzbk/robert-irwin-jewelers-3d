import React, { useEffect, useRef, useState } from 'react';
import { Sparkles, Gem, ShieldCheck, ChevronDown, Award } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
  totalFrames?: number;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, totalFrames = 60 }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(1);

  const [, setCurrentFrame] = useState<number>(1);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeChapter, setActiveChapter] = useState<string>('Proprietary 100-Facet Diamond Pavilion & Micro-Girdle Cutting');
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  useEffect(() => {
    const total = totalFrames;
    const imgs: HTMLImageElement[] = new Array(total);

    // 1. Immediately fetch Frame 1 (<100ms first paint)
    const firstImg = new Image();
    firstImg.src = `/frames/frame_0001.webp?v=fast-v2`;
    firstImg.onload = () => {
      imgs[0] = firstImg;
      setIsLoaded(true);
      renderFrame(1);

      // 2. Progressive non-blocking preload for frames 2..total in small smooth batches
      let nextIdx = 2;
      const loadNextBatch = () => {
        const batchSize = 6;
        for (let b = 0; b < batchSize && nextIdx <= total; b++, nextIdx++) {
          const idx = nextIdx;
          const img = new Image();
          const frameStr = String(idx).padStart(4, '0');
          img.src = `/frames/frame_${frameStr}.webp?v=fast-v2`;
          img.onload = () => {
            if (currentFrameRef.current === idx) {
              renderFrame(idx);
            }
          };
          imgs[idx - 1] = img;
        }
        if (nextIdx <= total) {
          setTimeout(loadNextBatch, 15);
        }
      };
      loadNextBatch();
    };
    firstImg.onerror = () => {
      setIsLoaded(true);
    };
    imgs[0] = firstImg;
    imagesRef.current = imgs;}, [totalFrames]);

  const renderFrame = (frameIndex: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let img = imagesRef.current[frameIndex - 1];
    if (!img || !img.complete || img.naturalWidth === 0) {
      for (let offset = 1; offset < totalFrames; offset++) {
        const prev = imagesRef.current[frameIndex - 1 - offset];
        if (prev && prev.complete && prev.naturalWidth > 0) {
          img = prev;
          break;
        }
        const next = imagesRef.current[frameIndex - 1 + offset];
        if (next && next.complete && next.naturalWidth > 0) {
          img = next;
          break;
        }
      }
    }
    if (!img || !img.complete) return;

    const dpr = window.devicePixelRatio || 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    }

    const imgRatio = 1920 / 1080;
    const canvasRatio = width / height;

    let drawWidth = width;
    let drawHeight = height;
    let offsetX = 0;
    let offsetY = 0;

    if (canvasRatio > imgRatio) {
      drawWidth = width;
      drawHeight = width / imgRatio;
      offsetY = (height - drawHeight) / 2;
    } else {
      drawHeight = height;
      drawWidth = height * imgRatio;
      offsetX = (width - drawWidth) / 2;
    }

    ctx.clearRect(0, 0, width, height);
    ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);

    // Warm emerald & dark velvet vignette
    const gradient = ctx.createRadialGradient(
      width / 2, height / 2, width * 0.25,
      width / 2, height / 2, Math.max(width, height) * 0.75
    );
    gradient.addColorStop(0, 'rgba(3, 20, 14, 0.15)');
    gradient.addColorStop(0.7, 'rgba(3, 20, 14, 0.45)');
    gradient.addColorStop(1, 'rgba(3, 20, 14, 0.88)');

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, width, height);
  };

  useEffect(() => {
    const handleResize = () => {
      renderFrame(currentFrameRef.current);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const scrollableDistance = rect.height - window.innerHeight;
      const currentScroll = -rect.top;

      let progress = currentScroll / scrollableDistance;
      progress = Math.max(0, Math.min(1, progress));
      setScrollProgress(progress);

      const frameNumber = Math.max(1, Math.min(totalFrames, Math.floor(progress * (totalFrames - 1)) + 1));
      currentFrameRef.current = frameNumber;
      setCurrentFrame(frameNumber);
      renderFrame(frameNumber);

      if (progress < 0.25) {
        setActiveChapter('Proprietary 100-Facet Diamond Pavilion & Micro-Girdle Cutting');
      } else if (progress < 0.50) {
        setActiveChapter('Optical Scintillation: 100 Facets vs Standard 58 Facets');
      } else if (progress < 0.75) {
        setActiveChapter('Solid 950 Platinum & 18K Gold Cathedral Setting');
      } else {
        setActiveChapter('80 Years of Mid-South Master Goldsmithing (1946–2026)');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [totalFrames]);

  const activeFacets = Math.min(100, Math.round(58 + scrollProgress * 42));
  const lightDispersionIndex = Math.round(92 + scrollProgress * 7.9);

  return (
    <section id="diamond-tour" ref={containerRef} className="relative h-[450vh] bg-emerald-950">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between p-4 sm:p-8 md:p-12">
        {/* Spatial Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Top Header Telemetry (100 Facets & Mid-South Heritage) */}
        <div className="relative z-10 w-full flex items-center justify-between pt-16 sm:pt-20 text-[11px] font-mono tracking-widest text-slate-300">
          <div className="flex items-center gap-2 bg-emerald-950/85 border border-gold-mid/30 px-3.5 py-1.5 backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-gold-mid animate-pulse" />
            <span className="text-white font-semibold uppercase">
              ROBERT IRWIN // 100-FACET VAULT
            </span>
          </div>

          <div className="hidden md:flex items-center gap-6 bg-emerald-950/85 border border-gold-mid/30 px-4 py-1.5 backdrop-blur-md">
            <span>OPTICAL FACETS: <strong className="text-gold-mid">{activeFacets} FACETS</strong></span>
            <span>LIGHT REFRACTION: <strong className="text-white">{lightDispersionIndex}% DISPERSION</strong></span>
            <span>EXPERIENCE: {isLoaded ? <strong className="text-emerald-400">80 YRS • 98% RECOMMENDATION</strong> : <strong className="text-amber-400">ALIGNING OPTICS...</strong>}</span>
          </div>
        </div>

        {/* Center Spatial Narrative */}
        <div className="relative z-10 my-auto max-w-4xl space-y-6 pointer-events-none">
          <div className="space-y-4 pointer-events-auto">
            <div className="inline-flex items-center gap-2 bg-emerald-900/80 border border-gold-mid/50 px-3.5 py-1 text-gold-light font-sans text-xs tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5 text-gold-mid" />
              <span>Mid-South’s Most Recommended Diamond House Since 1946</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.08] drop-shadow-2xl">
              More Light. More Fire. <br />
              <span className="italic font-normal text-gold-light">
                The 100 Facet Diamond.
              </span>
            </h1>

            <p className="max-w-2xl text-sm sm:text-base text-slate-200 font-sans leading-relaxed drop-shadow">
              Standard diamonds possess 58 facets. Robert Irwin’s patented cut features 100 mathematically calibrated facets, releasing up to 38% more brilliance. Five regional showrooms in Memphis, Little Rock, and Southaven.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2 pointer-events-auto">
            <button
              onClick={onOpenBooking}
              className="px-8 py-4 bg-gradient-to-r from-emerald-900 to-emerald-850 hover:from-emerald-800 hover:to-emerald-800 text-white font-sans text-xs uppercase tracking-widest font-semibold border border-gold-mid transition-all duration-300 shadow-xl hover:shadow-facet-100-glow flex items-center gap-3"
            >
              <Gem className="w-4 h-4 text-gold-mid" />
              <span>Reserve Private Salon Viewing</span>
            </button>

            <a
              href="#optical-lab"
              className="px-6 py-4 bg-emerald-950/80 hover:bg-emerald-900 text-slate-200 hover:text-white font-sans text-xs uppercase tracking-widest font-medium border border-gold-mid/30 hover:border-gold-mid/60 transition-all duration-300 flex items-center gap-2 backdrop-blur-sm"
            >
              <Award className="w-4 h-4 text-gold-mid" />
              <span>Compare 100 vs 58 Facets</span>
            </a>
          </div>
        </div>

        {/* Bottom Scroll Chapter Progression & Specifications */}
        <div className="relative z-10 w-full flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pb-4">
          {/* Active Spatial Chapter */}
          <div className="bg-emerald-950/90 border border-gold-mid/25 p-4 max-w-md backdrop-blur-md space-y-1">
            <div className="flex items-center justify-between text-[10px] font-mono tracking-widest uppercase text-slate-400">
              <span>Diamond Motion Sequence</span>
              <span className="text-gold-mid">{Math.round(scrollProgress * 100)}%</span>
            </div>
            <div className="text-xs sm:text-sm font-serif font-semibold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
              <span>{activeChapter}</span>
            </div>
            <div className="w-full bg-emerald-900 h-1 mt-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-emerald-400 via-gold-mid to-gold-light h-full transition-all duration-200"
                style={{ width: `${Math.max(5, scrollProgress * 100)}%` }}
              />
            </div>
          </div>

          {/* Scroll Prompt */}
          <div className="hidden lg:flex items-center gap-3 text-[11px] font-mono tracking-widest uppercase text-slate-400 bg-emerald-950/80 border border-gold-mid/20 px-4 py-2 backdrop-blur-sm">
            <span>Scroll To Inspect 100 Facet Reflection</span>
            <ChevronDown className="w-4 h-4 text-gold-mid animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
};
