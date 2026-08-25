# StartLine Implementation Tasks

1. **Scaffold Workspace**
   - Copy simplest existing app (e.g. `apps/abode` or `apps/boost`) to `apps/startline`.
   - Update `package.json` name to `@free-react-templates/startline`, homepage to `https://startline.free.componentdock.com`.
   - Create `public/CNAME` with `startline.free.componentdock.com`.
   - Register workspace in root `package.json` if needed (or verify via root install).

2. **Design Tokens & Theme**
   - Configure Tailwind v4 tokens in `src/index.css` matching `#f2ad5f` (amber) and `#10495c` (teal).
   - Ensure Google Fonts ("Poppins") is loaded in `index.html`.
   - Include `injectUiSource()` in `vite.config.ts`.

3. **Section Components (`src/components/`)**
   - `Navbar.tsx`: Sticky/fixed header with brand and navigation links.
   - `Hero.tsx`: Deep teal hero with headline, CTA, and amber image wrap.
   - `LogoCloud.tsx`: Media partner logos ("As seen on").
   - `SectionOne.tsx`: Split section with dark teal backdrop block on right.
   - `SectionTwo.tsx`: Productive feature block with testimonial.
   - `StatsBar.tsx`: Stats counter bar (Reviews, Downloads, Employees).
   - `FeaturesGrid.tsx`: 6 interactive feature cards with icon styling.
   - `Footer.tsx`: Multi-column links, newsletter form, and Component Dock footer link.

4. **Integration & Tests**
   - Compose sections in `src/App.tsx`.
   - Write comprehensive unit tests in `src/__tests__/` (or collocated) covering all sections.
   - Verify 100% test coverage and passing per-app gate (`scripts/verify-app.sh startline`).
