# DineCraft (Recreation of ColorLib Restauco)
<!-- prep-status: shipped-as=bonquet -->
> **SHIPPED-UNDER** — the ColorLib `restauco` design this prep describes already
> ships as `apps/bonquet` (<https://bonquet.free.componentdock.com>).
> Do not scaffold `apps/dinecraft`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-bonquet/spec.md`.

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
