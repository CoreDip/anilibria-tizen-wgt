// Builds a copy of the app for older Samsung TVs into dist/.
//
// The source uses modern syntax (optional chaining, nullish coalescing and so on). Tizen 5.x
// ships a Chromium 69 web engine that cannot parse it, so the whole page fails there with
// "Unexpected token". This script leaves the source untouched and writes a dist/ folder where
// every script is transpiled down to what Chromium 69 understands. Package dist/ as the .wgt.
//
//   npm install
//   npm run build:tizen

import { transform } from 'esbuild';
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { dirname, join, relative } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const OUT = join(ROOT, 'dist');
const TARGET = 'chrome69';

// Everything the widget needs; the rest (docs, MediaStationX config, tooling) stays out.
const INCLUDE = ['config.xml', 'index.html', 'icon.png', 'css', 'js', 'images'];

const lower = async (code) => (await transform(code, { loader: 'js', target: TARGET })).code;

const lowerHtml = async (html) => {
    const parts = [];
    let last = 0;
    const re = /<script(?![^>]*\bsrc=)([^>]*)>([\s\S]*?)<\/script>/g;
    for (const m of html.matchAll(re)) {
        parts.push(html.slice(last, m.index));
        const [, attrs, code] = m;
        parts.push(code.trim() && !/type=["']?module/.test(attrs)
            ? `<script${attrs}>${await lower(code)}</script>`
            : m[0]);
        last = m.index + m[0].length;
    }
    parts.push(html.slice(last));
    return parts.join('');
};

const walk = (dir) => readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
});

rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });

for (const entry of INCLUDE) {
    try { statSync(join(ROOT, entry)); } catch { continue; }
    cpSync(join(ROOT, entry), join(OUT, entry), { recursive: true });
}

let count = 0;
for (const file of walk(OUT)) {
    if (file.endsWith('.js')) {
        writeFileSync(file, await lower(readFileSync(file, 'utf8')));
        count++;
    } else if (file.endsWith('.html')) {
        writeFileSync(file, await lowerHtml(readFileSync(file, 'utf8')));
        count++;
    }
}

console.log(`dist/ ready for ${TARGET}: ${count} files transpiled (${relative(process.cwd(), OUT) || OUT})`);
