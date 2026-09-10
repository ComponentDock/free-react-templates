# Craver — Tasks

Source: ColorLib "Buri" (https://colorlib.com/wp/template/buri/)
New name: Craver (apps/craver, @free-react-templates/craver)
Preview: https://preview.colorlib.com/theme/buri/

## Prep status: DONE

## Implementation tasks (for implementers)

1. Create workspace `apps/craver/` — copy minimal starter app, rename package to `@free-react-templates/craver`
2. Set up `public/CNAME` → `craver.free.componentdock.com`
3. Set up `vite.config.ts` with `injectUiSource()` helper
4. Add Google Fonts link in `index.html`: Playfair Display + Montserrat
5. Configure `src/index.css` — Tailwind `@theme` block with:
   - `--color-brand: #d6ad86`
   - `--color-brand-hover: #ffb830`
   - `--color-heading: #2c3033`
   - `--color-body: #555555`
   - Font family: Montserrat (body), Playfair Display (headings)
6. Build components in `src/components/`:
   - Navbar.tsx
   - Hero.tsx
   - About.tsx
   - MenuGrid.tsx (with FoodItem sub-component)
   - VideoIntro.tsx
   - Testimonials.tsx (with TestimonialCard sub-component)
   - ContactInfo.tsx
   - Footer.tsx (with newsletter form)
7. Compose in `src/App.tsx`
8. Write colocated tests: `*.test.tsx` for every component
9. Run `npm run test:coverage` — must be 100%
10. Run `scripts/verify-app.sh craver`
11. Update `package.json` homepage to `https://craver.free.componentdock.com`
12. Commit as `feat: add Craver (ColorLib Buri) template`
