# Tasks for FreightFlow (ColorLib Thelogistico Recreation)

## Overview

Recreate ColorLib Thelogistico as `apps/freightflow` following OpenSpec spec and replication standards.

## Step-by-Step Implementation Plan

1. **Scaffold App Workspace**
   - Copy lightest existing app structure (e.g. `apps/orbiter` or `apps/aurora`) to `apps/freightflow`.
   - Update `package.json` with `@free-react-templates/freightflow`.
   - Configure `vite.config.ts` with `injectUiSource()`.
   - Set `public/CNAME` to `freightflow.free.componentdock.com`.
2. **Implement Components (TDD with 100% Coverage)**
   - `Navbar.tsx` + `Navbar.test.tsx`: Top bar with phone/socials, main nav links.
   - `Hero.tsx` + `Hero.test.tsx`: Hero banner with headline, subtitle, CTA button, and quick quote form.
   - `Services.tsx` + `Services.test.tsx`: Transport services cards (road, air, sea, logistics).
   - `About.tsx` + `About.test.tsx`: Professional transportation business overview and interactive tabs/accordions.
   - `WhyChooseUs.tsx` + `WhyChooseUs.test.tsx`: Shipment control metrics and solution steps.
   - `Testimonials.tsx` + `Testimonials.test.tsx`: Client testimonial carousel / feedback cards.
   - `Blog.tsx` + `Blog.test.tsx`: Latest news and freight insights cards.
   - `Footer.tsx` + `Footer.test.tsx`: Quick links, solutions, support, newsletter form, and mandatory Component Dock footer link (`https://www.componentdock.com/`).
3. **App Composition & Styling**
   - Wire all components in `src/App.tsx`.
   - Add Tailwind CSS theme tokens (`#FF6600` orange accent) in `src/index.css`.
   - Ensure 100% test coverage across all components and App.tsx.
4. **Verification & Registration**
   - Run `npm install` at root to register workspace in `package-lock.json`.
   - Run local per-app verification (`scripts/verify-app.sh freightflow`).
   - Run `npm run readme:status` to update documentation.
