# Dave Alexander — Enterprise Sales

An interviewer-facing portfolio organized around seven enterprise sales pillars. An editorial overview leads into an interactive seven-pillar guide, five detailed case studies, outcome and discipline filters, an About page, and email/LinkedIn contact links. Case studies offer a 30-second brief followed by the context, turning point, decisions, and reflection. Responsive, keyboard accessible, and dependency-free at runtime.

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

- `public/content.js`: seven disciplines, five stories, source-qualified metrics, and contact details.
- `public/app.js`: page rendering, accessible interactions, routing, and filters.
- `public/style.css`: responsive styles.
- `public/index.html`: navigation, metadata, and footer.
- `server.js`: static asset server and health endpoint.

Pages use shareable hash routes such as `/#/pillars/discovery` and `/#/stories/odom`. Story sections support deep links such as `/#/stories/odom?section=outcome`. Legacy story URLs still resolve. The case library separates closed wins, a team deal study, and closed-loss reflections. Fonts load from Google Fonts with local fallbacks. There are no analytics, trackers, forms, authentication, or private interview pages.

## Editorial status

The portfolio is based on supplied interview and deal-story material. Unreconciled career dates, current title, quota, ARR discrepancies, and attainment figures are omitted. A current resume has not yet been added.

Odom and Calfrac distinguish individual contributions from partner, SDR, and SE work. The Woodfield-derived story is anonymized and describes the team's approach because the supplied filename and document disagree on ownership, and the recorded close status conflicts with a later signature note. Kenco and TCW are anonymized. Modeled ROI is not presented as realized savings. Proposed lessons are not described as verified changes in practice.

Before adding exact metrics or a resume, confirm attribution, dates, definitions, and completed signature status. Raw PDFs, transcripts, customer incident details, internal concessions, and Sites hosting credentials are not part of this repository.
