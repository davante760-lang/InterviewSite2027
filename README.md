# Dave Alexander — Original Website

The original React website restored from `davante760-lang/limble` commit `cc8fa6d49ee0331b8c971edf4df320929f6812dd`. Its application source, copy, styles, animations, charts, images, and resume are unchanged.

## Run locally

Use Node.js 22.12 or newer:

```sh
npm ci
npm run dev
```

## Build and verify

```sh
npm run build
node --test server.test.js
node server.js
```

The production server serves only files from `dist/` and provides `/health`. It listens on Railway's `PORT`, or port 3000 locally.

## Deploy

Push to `main` in `davante760-lang/InterviewSite2027`. The existing Railway service builds with the two-stage Dockerfile and serves the compiled original site at `https://dalexander.up.railway.app`.

The original application files and package manifest are preserved. The Dockerfile, static server, health check, and HTTP verification support the existing deployment.
