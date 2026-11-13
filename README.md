# Dave Alexander — Enterprise Sales

An interviewer-facing portfolio organized around seven enterprise sales pillars. Includes seven pillar pages, five linked case studies, win/loss filtering, an About page, and email/LinkedIn contact links. Responsive, keyboard accessible, and dependency-free at runtime.

## Run locally

Use Node.js 22 or newer:

```sh
npm start
```

Open http://localhost:3000. Run `npm run check` for syntax validation and `npm test` for HTTP behavior checks.

## Deploy to Railway

Connect this repository to the intended Railway service and select the `main` branch. Railway uses the included Dockerfile and railway.json. The server binds to `0.0.0.0` and the injected `PORT`; `/health` is the healthcheck endpoint. No secrets, database, install step, or build command are required.

To retain an existing Railway domain, change the source repository on that existing service rather than creating a separate service. Confirm the connected branch and review the deployment logs.

## Content and navigation

- `public/app.js`: pillar and case-study data, page rendering, and filters.
- `public/style.css`: responsive styles.
- `public/index.html`: navigation, metadata, and footer.
- `server.js`: static asset server and health endpoint.

Pages use shareable hash routes such as `/#/pillars/discovery` and `/#/stories/odom`. Fonts load from Google Fonts with local fallbacks. There are no analytics, trackers, forms, authentication, or private interview pages.

## Editorial status

The portfolio is a first draft based on supplied interview and deal-story material. Unreconciled career dates, current title, quota, ARR discrepancies, and attainment figures are omitted. A current resume has not yet been added.

Odom and Calfrac distinguish individual contributions from partner, SDR, and SE work. The Woodfield-derived story is anonymized and describes the team's approach because the supplied filename and document disagree on ownership, and the recorded close status conflicts with a later signature note. Kenco and TCW are anonymized. Modeled ROI is not presented as realized savings. Proposed lessons are not described as verified changes in practice.

Before adding exact metrics or a resume, confirm attribution, dates, definitions, and completed signature status. Raw PDFs, transcripts, customer incident details, internal concessions, and Sites hosting credentials are not part of this repository.
