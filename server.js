import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

const types = {
  html: 'text/html; charset=utf-8', js: 'text/javascript; charset=utf-8',
  css: 'text/css; charset=utf-8', svg: 'image/svg+xml', png: 'image/png',
  jpg: 'image/jpeg', webp: 'image/webp', woff2: 'font/woff2', pdf: 'application/pdf',
};
const assets = new Map();
function collectAssets(directory = '') {
  for (const entry of readdirSync(new URL(`./dist/${directory}`, import.meta.url), { withFileTypes: true })) {
    const name = directory + entry.name;
    if (entry.isDirectory()) collectAssets(name + '/');
    else if (entry.isFile()) assets.set('/' + name, [name, types[name.split('.').pop()] || 'application/octet-stream']);
  }
}
collectAssets();
assets.set('/', assets.get('/index.html'));
assets.set('/deals/odom', assets.get('/deals/odom/index.html'));
assets.set('/deals/odom/', assets.get('/deals/odom/index.html'));

export function createSiteServer() {
  return createServer(async (request, response) => {
    response.setHeader('X-Content-Type-Options', 'nosniff');
    response.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
    response.setHeader('X-Frame-Options', 'SAMEORIGIN');
    if (!['GET', 'HEAD'].includes(request.method)) {
      response.writeHead(405, { Allow: 'GET, HEAD' });
      response.end();
      return;
    }
    let path;
    try { path = new URL(request.url, 'http://localhost').pathname; }
    catch { response.writeHead(400); response.end(); return; }
    if (path === '/health') {
      response.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end(request.method === 'HEAD' ? undefined : 'ok');
      return;
    }
    const asset = assets.get(path);
    if (!asset) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end(request.method === 'HEAD' ? undefined : 'Page not found');
      return;
    }
    try {
      const data = await readFile(new URL(`./dist/${asset[0]}`, import.meta.url));
      response.writeHead(200, {
        'Content-Type': asset[1],
        'Content-Length': data.length,
        'Cache-Control': 'no-cache',
      });
      response.end(request.method === 'HEAD' ? undefined : data);
    } catch {
      response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
      response.end(request.method === 'HEAD' ? undefined : 'Unable to load page');
    }
  });
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const port = Number(process.env.PORT || 3000);
  if (!Number.isInteger(port) || port < 0 || port > 65535) {
    throw new Error('PORT must be a valid port number');
  }
  const server = createSiteServer();
  server.listen(port, '0.0.0.0', () => console.log(`Site running on port ${port}`));
  const stop = () => server.close(() => process.exit(0));
  process.on('SIGTERM', stop);
  process.on('SIGINT', stop);
}
