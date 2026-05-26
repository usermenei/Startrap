# STARTRAP Ocean Intelligence — Frontend Prototype

This is a React + TailwindCSS prototype for the STARTRAP Ocean Intelligence Platform.

Quick start:

```bash
cd Startrap/frontend
npm install
npm run dev
```

Features included in this prototype:
- Desktop-first responsive dashboard layout
- Mission-Control style homepage with KPI cards and map stub
- Sidebar navigation and component structure for expansion
- TailwindCSS configuration and sample styling (glassmorphism)

Next steps (suggested):
- Integrate `react-leaflet` map layers and live device markers
- Add `react-chartjs-2` visualizations for analytics pages
- Implement AI Camera page with sample video overlays
- Connect to backend APIs for live data and authentication

This repo contains mock/sample data only — not production-ready.

## Deploying on Vercel

1. Push this repository to GitHub if it is not already hosted there.
2. In Vercel, create a new project and import the GitHub repository.
3. Set the project root to `Startrap/frontend`.
4. Use the following build settings:
	- Framework Preset: `Vite`
	- Build Command: `npm run build`
	- Output Directory: `dist`
5. Confirm the project uses the existing `vercel.json` file.
6. Deploy and verify the site loads correctly.

If you want the full repo deployed as a monorepo, use `Startrap/frontend` as the Vercel Root Directory and keep `npm install` / `npm run build`.
