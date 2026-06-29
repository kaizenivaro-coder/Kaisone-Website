import {mkdir} from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import sharp from 'sharp';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const sourceLogo = path.join(root, 'assets', 'source', 'kaisone-logo-original.jpg');
const brandDir = path.join(root, 'public', 'brand');
const mediaDir = path.join(root, 'public', 'media');

await mkdir(brandDir, {recursive: true});
await mkdir(mediaDir, {recursive: true});

const {data, info} = await sharp(sourceLogo)
  .removeAlpha()
  .greyscale()
  .raw()
  .toBuffer({resolveWithObject: true});

const rgba = Buffer.alloc(info.width * info.height * 4);

for (let index = 0; index < data.length; index += 1) {
  const alpha = Math.max(0, Math.min(255, Math.round((data[index] - 18) * 1.22)));
  const target = index * 4;
  rgba[target] = 255;
  rgba[target + 1] = 255;
  rgba[target + 2] = 255;
  rgba[target + 3] = alpha;
}

const mark = sharp(rgba, {
  raw: {width: info.width, height: info.height, channels: 4},
}).trim({background: {r: 255, g: 255, b: 255, alpha: 0}, threshold: 8});

const whiteMark = await mark.clone().png().toBuffer();
const markMetadata = await sharp(whiteMark).metadata();
const padding = Math.max(24, Math.round(Math.max(markMetadata.width, markMetadata.height) * 0.08));
const canvasSize = 1024;
const markSize = canvasSize - padding * 2;

const buildMark = async (color) => {
  const {data: markData, info: markInfo} = await sharp(whiteMark)
    .resize(markSize, markSize, {fit: 'contain'})
    .ensureAlpha()
    .raw()
    .toBuffer({resolveWithObject: true});
  const [red, green, blue] = color;

  for (let index = 0; index < markData.length; index += 4) {
    markData[index] = red;
    markData[index + 1] = green;
    markData[index + 2] = blue;
  }

  return sharp(markData, {raw: markInfo})
    .extend({
      top: padding,
      right: padding,
      bottom: padding,
      left: padding,
      background: {r: 0, g: 0, b: 0, alpha: 0},
    })
    .png({compressionLevel: 9})
    .toBuffer();
};

await sharp(await buildMark([255, 255, 255]))
  .toFile(path.join(brandDir, 'kaisone-mark-white.png'));

await sharp(await buildMark([8, 10, 13]))
  .toFile(path.join(brandDir, 'kaisone-mark-ink.png'));

await sharp(whiteMark)
  .resize(24, 24, {fit: 'contain'})
  .extend({top: 4, right: 4, bottom: 4, left: 4, background: '#080A0D'})
  .png({compressionLevel: 9})
  .toFile(path.join(brandDir, 'favicon-32.png'));

await sharp(path.join(mediaDir, 'kaisone-hero-source.png'))
  .resize(1920, 1080, {fit: 'cover', position: 'center'})
  .webp({quality: 86, smartSubsample: true})
  .toFile(path.join(mediaDir, 'kaisone-hero.webp'));

await sharp(path.join(mediaDir, 'kaisone-education-source.png'))
  .resize(1440, 960, {fit: 'cover', position: 'center'})
  .webp({quality: 86, smartSubsample: true})
  .toFile(path.join(mediaDir, 'kaisone-education.webp'));

console.log('Kaisone brand and media assets generated.');
