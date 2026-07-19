import { mkdir, readFile } from "node:fs/promises";
import { dirname, extname } from "node:path";
import sharp from "sharp";

const projectRoot = new URL("../", import.meta.url);
const productDataUrl = new URL("src/data/products.yaml", projectRoot);
const publicUrl = new URL("public/", projectRoot);
const productData = await readFile(productDataUrl, "utf8");
const imagePaths = [
  ...new Set(
    [...productData.matchAll(/^\s*image:\s*["']?(\/images\/products\/[^"'\n]+)["']?$/gm)]
      .map((match) => match[1]),
  ),
];

await Promise.all(
  imagePaths.map(async (imagePath) => {
    const relativeSource = imagePath.replace(/^\//, "");
    const sourcePath = new URL(relativeSource, publicUrl);
    const relativeOutput = relativeSource
      .replace(/^images\/products\//, "images/product-cards/")
      .replace(new RegExp(`${extname(relativeSource)}$`, "i"), ".webp");
    const outputPath = new URL(relativeOutput, publicUrl);

    await mkdir(dirname(outputPath.pathname), { recursive: true });
    await sharp(sourcePath.pathname)
      .rotate()
      .resize(640, 480, {
        fit: "cover",
        position: "centre",
      })
      .webp({ quality: 80, effort: 4, smartSubsample: true })
      .toFile(outputPath.pathname);
  }),
);

const homepageImages = [
  {
    source: "images/site/store.jpg",
    outputs: [
      { path: "images/site/optimized/store-720.webp", width: 720 },
      { path: "images/site/optimized/store-1200.webp", width: 1200 },
    ],
  },
];

await Promise.all(
  homepageImages.flatMap(({ source, outputs }) =>
    outputs.map(async ({ path, width }) => {
      const sourcePath = new URL(source, publicUrl);
      const outputPath = new URL(path, publicUrl);

      await mkdir(dirname(outputPath.pathname), { recursive: true });
      await sharp(sourcePath.pathname)
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality: 82, effort: 4, smartSubsample: true })
        .toFile(outputPath.pathname);
    }),
  ),
);

console.log(
  `Optimized ${imagePaths.length} product-card images and homepage hero variants.`,
);
