import test from 'node:test';
import assert from 'node:assert/strict';
import { once } from 'node:events';
import { createSiteServer } from './server.js';

test('serves site assets and health without exposing repository files', async (t) => {
  const server = createSiteServer();
  server.listen(0, '127.0.0.1');
  await once(server, 'listening');
  t.after(() => new Promise(resolve => server.close(resolve)));
  const origin = `http://127.0.0.1:${server.address().port}`;
  const home = await fetch(origin);
  assert.equal(home.status, 200);
  const html = await home.text();
  assert.match(html, /Dave Alexander/);
  const bundlePaths = [...html.matchAll(/(?:src|href)="(\/assets\/[^\"]+)"/g)].map(match => match[1]);
  assert.ok(bundlePaths.some(path => path.endsWith('.js')));
  assert.ok(bundlePaths.some(path => path.endsWith('.css')));
  for (const [path, type] of [
    ...bundlePaths.map(path => [path, path.endsWith('.js') ? 'text/javascript' : 'text/css']),
    ['/fonts/Geist-Variable.woff2','font/woff2'], ['/family.jpg','image/jpeg'],
    ['/logo-samsara.png','image/png'], ['/logo-applied.png','image/png'], ['/logo-ezlynx.png','image/png'],
    ['/DaveAlexanderResume.pdf','application/pdf'], ['/excelsior-ambulance.webp','image/webp'],
  ]) {
    const response = await fetch(origin + path);
    assert.equal(response.status, 200);
    assert.ok(response.headers.get('content-type').includes(type));
  }
  assert.equal(await (await fetch(origin + '/health')).text(), 'ok');
  const head = await fetch(origin, { method: 'HEAD' });
  assert.equal(head.status, 200);
  assert.equal(await head.text(), '');
  assert.equal((await fetch(origin, { method: 'POST' })).status, 405);
  for (const path of ['/server.js', '/.env', '/package.json', '/%2e%2e/server.js', '/missing']) {
    assert.equal((await fetch(origin + path)).status, 404);
  }
});
