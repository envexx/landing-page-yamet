const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const rootDir = path.join(__dirname, 'public');

function convertImage(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext !== '.png' && ext !== '.jpg' && ext !== '.jpeg') return;

  const webpPath = filePath.replace(ext, '.webp');
  if (fs.existsSync(webpPath)) {
    console.log(`WebP already exists: ${webpPath}`);
    return;
  }

  sharp(filePath)
    .webp({ quality: 85 })
    .toFile(webpPath)
    .then(() => console.log(`Converted: ${filePath} -> ${webpPath}`))
    .catch(err => console.error(`Error converting ${filePath}:`, err));
}

function walkDir(dir) {
  fs.readdirSync(dir).forEach(file => {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      walkDir(fullPath);
    } else {
      convertImage(fullPath);
    }
  });
}

walkDir(rootDir); 