const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const PROJECT_ROOT = path.resolve(__dirname, '..');
const KEYFRAMES_DIR = path.join(PROJECT_ROOT, 'assets', 'keyframes');
const CLIPS_DIR = path.join(PROJECT_ROOT, 'assets', 'clips');
const FRAMES_DIR = path.join(PROJECT_ROOT, 'public', 'frames');
const MASTER_VIDEO = path.join(PROJECT_ROOT, 'assets', 'master_spatial_tour.mp4');

if (!fs.existsSync(CLIPS_DIR)) fs.mkdirSync(CLIPS_DIR, { recursive: true });
if (!fs.existsSync(FRAMES_DIR)) fs.mkdirSync(FRAMES_DIR, { recursive: true });

const keyframes = [
  path.join(KEYFRAMES_DIR, 'kf1_100facet_macro.jpg'),
  path.join(KEYFRAMES_DIR, 'kf2_emerald_velvet_ring.jpg'),
  path.join(KEYFRAMES_DIR, 'kf3_prismatic_scintillation.jpg'),
  path.join(KEYFRAMES_DIR, 'kf4_midsouth_bench.jpg')
];

for (const kf of keyframes) {
  if (!fs.existsSync(kf)) {
    console.error(`Missing keyframe: ${kf}`);
    process.exit(1);
  }
}

const clips = [
  {
    name: 'clip_01_to_02.mp4',
    title: '100-Facet Micro Focus to Emerald Velvet Ring Profile',
    startKf: keyframes[0],
    endKf: keyframes[1],
    duration: 3,
    fps: 20
  },
  {
    name: 'clip_02_to_03.mp4',
    title: 'Emerald Velvet Ring Profile to Prismatic Scintillation Dispersion',
    startKf: keyframes[1],
    endKf: keyframes[2],
    duration: 3,
    fps: 20
  },
  {
    name: 'clip_03_to_04.mp4',
    title: 'Prismatic Scintillation Dispersion to Mid-South Bench Masterwork',
    startKf: keyframes[2],
    endKf: keyframes[3],
    duration: 3,
    fps: 20
  }
];

const clipPaths = [];

clips.forEach((clip, index) => {
  const clipOutput = path.join(CLIPS_DIR, clip.name);
  clipPaths.push(clipOutput);

  console.log(`\n=== Generating Pair Motion Video: Clip ${index + 1}: ${clip.title} (60 frames) ===\n`);

  const tempDir = path.join(PROJECT_ROOT, 'assets', `temp_seg${index + 1}`);
  if (!fs.existsSync(tempDir)) fs.mkdirSync(tempDir, { recursive: true });

  const totalFramesPerClip = clip.duration * clip.fps; // 60 frames

  const renderScript = `
const sharp = require('/home/ubuntu/kontora-site10k/diana-hall-design-3d/node_modules/sharp');
const path = require('path');

async function renderTransition() {
  const startImg = sharp('${clip.startKf}').resize(1920, 1080, { fit: 'cover' });
  const endImg = sharp('${clip.endKf}').resize(1920, 1080, { fit: 'cover' });

  const startBuf = await startImg.toBuffer();
  const endBuf = await endImg.toBuffer();

  for (let i = 0; i < ${totalFramesPerClip}; i++) {
    const t = i / (${totalFramesPerClip} - 1);
    const ease = t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const zoomStart = 1.0 + 0.12 * ease;
    const zoomEnd = 1.12 - 0.12 * ease;

    const wStart = Math.round(1920 * zoomStart);
    const hStart = Math.round(1080 * zoomStart);
    const wEnd = Math.round(1920 * zoomEnd);
    const hEnd = Math.round(1080 * zoomEnd);

    const sBufResized = await sharp(startBuf)
      .resize(wStart, hStart, { fit: 'cover' })
      .extract({
        left: Math.round((wStart - 1920) / 2),
        top: Math.round((hStart - 1080) / 2),
        width: 1920,
        height: 1080
      })
      .toBuffer();

    const eBufResized = await sharp(endBuf)
      .resize(wEnd, hEnd, { fit: 'cover' })
      .extract({
        left: Math.round((wEnd - 1920) / 2),
        top: Math.round((hEnd - 1080) / 2),
        width: 1920,
        height: 1080
      })
      .toBuffer();

    const opacityEnd = ease;
    await sharp(sBufResized)
      .composite([{
        input: eBufResized,
        blend: 'over',
        opacity: opacityEnd
      }])
      .jpeg({ quality: 92 })
      .toFile(path.join('${tempDir}', 'frame_' + String(i + 1).padStart(4, '0') + '.jpg'));
  }
}

renderTransition().then(() => console.log('Clip ${index + 1} frames synthesized.')).catch(console.error);
`;

  const scriptPath = path.join(PROJECT_ROOT, 'assets', `render_seg${index + 1}.cjs`);
  fs.writeFileSync(scriptPath, renderScript);
  execSync(`node "${scriptPath}"`, { stdio: 'inherit' });

  const ffmpegCmd = `ffmpeg -y -framerate 20 -i "${path.join(tempDir, 'frame_%04d.jpg')}" -c:v libx264 -pix_fmt yuv420p -crf 14 "${clipOutput}"`;
  execSync(ffmpegCmd, { stdio: 'inherit' });
});

const concatList = path.join(CLIPS_DIR, 'concat.txt');
fs.writeFileSync(concatList, clipPaths.map(p => `file '${p}'`).join('\n'));

console.log('\n=== Assembling Master 180-Frame Spatial Tour Video ===\n');
execSync(`ffmpeg -y -f concat -safe 0 -i "${concatList}" -c copy "${MASTER_VIDEO}"`, { stdio: 'inherit' });

console.log('\n=== Extracting Clean 180 JPEGs to public/frames ===\n');
execSync(`ffmpeg -y -i "${MASTER_VIDEO}" -q:v 2 "${path.join(FRAMES_DIR, 'frame_%04d.jpg')}"`, { stdio: 'inherit' });

console.log("🎉 180 Frames and Master Diamond Light Tour created successfully for Robert Irwin Jewelers!");
