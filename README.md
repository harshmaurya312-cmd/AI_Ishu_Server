# GeoShield AI — Landslide Early Warning & Risk Monitoring (India / North-East Region)

A full-stack disaster-management portal for AI-based landslide early warning and
risk monitoring across India, with special focus on the North-East Region (NER).

## Quick start (no database required)

```bash
npm install
npm run dev
```

Open http://localhost:3000 — the app boots in **in-memory demo mode** with the
full bundled dataset (regions, historical incidents, predictions, alerts). Every
feature works immediately:

- **Dashboard** — national command overview, live risk ticker, stats, NER spotlight.
- **Interactive Map** — clickable choropleth of India with NER city sensors.
- **AI Prediction** — sliders that recompute risk live + a "run model" simulation.
- **Alert Logs** — live feed + autonomous dispatch simulation.
- **Historical DB** — 25 documented events with charts and search.

## Optional: enable PostgreSQL persistence

1. Install and start PostgreSQL locally.
2. Create a database and copy the example env file:

   ```bash
   cp .env.example .env
   ```

3. Edit `.env` with your connection string, e.g.:

   ```
   DATABASE_URL=postgresql://postgres:postgres@127.0.0.1:5432/app_db
   ```

4. Apply the schema and restart:

   ```bash
   npx drizzle-kit push
   npm run dev
   ```

When `DATABASE_URL` is set and reachable, predictions and autonomous alerts are
persisted to PostgreSQL; otherwise the app transparently falls back to the
in-memory store.

## Fixing the "Blocked cross-origin request" warning

If you access the dev server via a LAN IP (e.g. `http://192.168.x.x:3000`), add
your IP to `allowedDevOrigins` in `next.config.ts` and restart the dev server.

## Tech stack

- **Next.js 16** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 4** (dark "mission-control" design system)
- **Drizzle ORM** + **PostgreSQL** (optional)
- **d3-geo** for the interactive India map, **Recharts** for analytics
