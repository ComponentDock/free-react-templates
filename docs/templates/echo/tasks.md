# Echo (Repeat) — Tasks & Design Notes

## Recreated From

- ColorLib Source: `Repeat` (`https://colorlib.com/wp/template/repeat/`)
- Preview URL: `https://preview.colorlib.com/theme/repeat/`

## Design & Architecture Notes

- **Color Palette:** Coral peach (`#ff8e71`) for primary buttons and accents, deep blue (`#003a70`) for headings/footer.
- **Typography:** Roboto sans-serif font imported via Google Fonts in `index.html`.
- **Components Structure:**
  - `Navbar.tsx`: Responsive navigation header.
  - `Hero.tsx`: Main banner with tagline and CTA button.
  - `About.tsx`: Multi-column introduction.
  - `Services.tsx`: Service offerings with interactive carousel slider.
  - `Stats.tsx`: Four-metric counter display.
  - `CtaBanner.tsx`: Bottom call-to-action block.
  - `Footer.tsx`: Comprehensive multi-column footer with contact info, source links, and mandatory Component Dock attribution.

## Implementation Tasks (for Implementer stream)

1. Initialize `apps/echo` workspace (copy from simplest template like `apps/aurora`).
2. Update `package.json` name to `@free-react-templates/echo`.
3. Configure `vite.config.ts` with `injectUiSource()`.
4. Create `public/CNAME` with `echo.free.componentdock.com`.
5. Implement components matching OpenSpec specs.
6. Write Vitest unit tests achieving 100% test coverage.
7. Run `npm run verify:app echo`.
