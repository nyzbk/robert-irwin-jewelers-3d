
const sharp = require('/home/ubuntu/kontora-site10k/diana-hall-design-3d/node_modules/sharp');
const path = require('path');

async function renderTransition() {
  const startImg = sharp('/home/ubuntu/kontora-site10k/robert-irwin-jewelers-3d/assets/keyframes/kf2_emerald_velvet_ring.jpg').resize(1920, 1080, { fit: 'cover' });
  const endImg = sharp('/home/ubuntu/kontora-site10k/robert-irwin-jewelers-3d/assets/keyframes/kf3_prismatic_scintillation.jpg').resize(1920, 1080, { fit: 'cover' });

  const startBuf = await startImg.toBuffer();
  const endBuf = await endImg.toBuffer();

  for (let i = 0; i < 60; i++) {
    const t = i / (60 - 1);
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
      .toFile(path.join('/home/ubuntu/kontora-site10k/robert-irwin-jewelers-3d/assets/temp_seg2', 'frame_' + String(i + 1).padStart(4, '0') + '.jpg'));
  }
}

renderTransition().then(() => console.log('Clip 2 frames synthesized.')).catch(console.error);
