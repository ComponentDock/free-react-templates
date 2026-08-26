# Template: Accordion Twelve — Tasks & Design Notes

## Source & Preview

- **Source Template:** ColorLib Accordion 12 (`https://colorlib.com/wp/template/accordion-12/`)
- **Live Preview URL:** `https://preview.colorlib.com/theme/bac/accordion-12/`
- **New App Name:** `accordion-twelve`

## Design & Layout Notes

- **Layout:** Centered single-column layout containing a prominent section header ("Bootstrap Accordion #2") followed by a list of vertical accordion cards.
- **Colors & Tokens:**
  - Active background: `#72c02c` (green) with white text (`#fff`).
  - Inactive border: `1px solid #efefef`, background `#fff`, text `#999`.
  - Body text: `#888`.
- **Interactions:** Clicking headers toggles open/closed state, swapping down-chevron (`\e313`) for up-chevron (`\e316`) and changing background color.

## Implementation Tasks (For Implementer Stream)

1. Copy template base structure to `apps/accordion-twelve/`.
2. Configure `package.json` with name `@free-react-templates/accordion-twelve`.
3. Add `public/CNAME` with `accordion-twelve.free.componentdock.com`.
4. Configure `vite.config.ts` with `injectUiSource()`.
5. Implement `Navbar`, `AccordionSection`, and `Footer` (linking Component Dock).
6. Write Vitest tests with 100% coverage matching spec scenarios.
7. Verify via `scripts/verify-app.sh accordion-twelve`.
