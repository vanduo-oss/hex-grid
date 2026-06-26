import * as esbuild from 'esbuild';
import { copyFileSync, mkdirSync, rmSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');
const distDir = resolve(rootDir, 'dist');

function resetDistDirectory() {
  rmSync(distDir, { recursive: true, force: true });
  mkdirSync(distDir, { recursive: true });
}

async function buildEntry(inputFile, baseName, format, extra = {}) {
  await esbuild.build({
    entryPoints: [resolve(rootDir, 'src', inputFile)],
    outfile: resolve(distDir, `${baseName}.${format === 'esm' ? 'js' : 'cjs'}`),
    bundle: true,
    format,
    minify: false,
    sourcemap: true,
    target: ['es2020'],
    logLevel: 'warning',
    ...extra
  });
}

async function build() {
  resetDistDirectory();
  await buildEntry('index.js', 'index', 'esm');
  await buildEntry('index.js', 'index', 'cjs');
  await buildEntry('hex-math.js', 'hex-math', 'esm');
  await buildEntry('hex-math.js', 'hex-math', 'cjs');

  // Optional Vue 3 bindings — `vue` stays external (peer dependency).
  await buildEntry('vue.js', 'vue', 'esm', { external: ['vue'] });
  await buildEntry('vue.js', 'vue', 'cjs', { external: ['vue'] });
  copyFileSync(resolve(rootDir, 'src', 'vue.d.ts'), resolve(distDir, 'vue.d.ts'));

  console.log('Built @vanduo-oss/hex-grid dist artifacts.');
}

build();
