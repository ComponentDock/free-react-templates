# DineCraft (Recreation of ColorLib Restauco)

## Tasks & Implementation Plan

1. **Scaffold App:**
   - Copy skeleton structure into `apps/dinecraft`.
   - Update `package.json` name to `@free-react-templates/dinecraft` and add `vite.config.ts` with `injectUiSource()`.
   - Register workspace in root `package.json` if needed (or verify workspaces).
2. **Design Tokens & Fonts:**
   - Configure Tailwind `@theme` in `src/index.css` with `#FE5F41` (primary), `#4D312C` (heading), `#94817E` (muted text), `#FFF4F2` (cream bg).
   - Load Google Fonts (`Mitr` and `Raleway`) in `index.html`.
3. **Components & TDD:**
   - `Navbar.tsx` + `Navbar.test.tsx`
   - `Hero.tsx` + `Hero.test.tsx`
   - `Services.tsx` + `Services.test.tsx`
   - `MenuSection.tsx` + `MenuSection.test.tsx` (tabbed dishes)
   - `ReservationForm.tsx` + `ReservationForm.test.tsx` (form validation & success state)
   - `Testimonials.tsx` + `Testimonials.test.tsx`
   - `Footer.tsx` + `Footer.test.tsx` (linking `https://www.componentdock.com/`)
4. **Integration & Verification:**
   - Assemble in `App.tsx`.
   - Run `scripts/verify-app.sh dinecraft`.
   - Ensure 100% test coverage.
