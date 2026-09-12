# Visaflow (ColorLib Immigration) — Tasks & Design Notes

> Recreation of ColorLib "Immigration" under the new name **Visaflow**
> (immigration & visa consultation landing page template).

## Design notes (replication findings)

- **Original:** ColorLib "Immigration" — immigration & visa consultation
  template (source: https://colorlib.com/wp/template/immigration/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/immigration/
  (HTTP 200, full rendered DOM + `css/main.css` (49KB) extracted).
- **Visual design (from DOM + CSS tokens):** a standard immigration landing
  page with a **red/pink `#f6214b`** brand palette, a hero banner with dark
  overlay and white text, a red call-to bar, country service cards with
  circular icons, a booking/contact section with form, a features grid with
  colored circular icons, a testimonial carousel, blog post cards, and a
  multi-column dark footer.
- **Structure (1:1, section order):**
  1. Navbar: "Visaflow" brand + navigation links (Home, About, Services,
     Features, Testimonials, Blog, Contact) + dark-mode toggle.
  2. Hero banner: "Immigrations & Visa Consultation" + "Process Visa
     within hours" + "Book Consultancy" CTA.
  3. Call-to bar: "Start planning your New Dream" + "Request Free
     Consultancy" CTA. Red background.
  4. Services by country: 4 cards — United States, Canada, Germany,
     Australia. Each with circular icon, title, description.
  5. Booking/contact section: "Globally Connected by Large Network" +
     "We are here to listen from you deliver excellence" + "Book Free
     Consultancy" form.
  6. Unique features grid: 6 items — Expert Technicians, Professional
     Service, Great Support, Technical Skills, Highly Recommended,
     Positive Reviews. Each with colored circular icon, title, description.
  7. Testimonials: "How Our Customers Treat Us" + carousel with author
     names and quotes.
  8. Blog section: "Latest News from our Blog" + 3 post cards with tags,
     titles, excerpts, dates.
  9. Footer: About Us, Contact Us (phone numbers), Newsletter, copyright.
     Links to componentdock.com.
- **Design tokens extracted from `main.css`:**
  - Primary **red/pink `#f6214b`**; light bg `#f9f9ff`; dark text `#222`;
    body text `#777777`; white `#fff`.
  - Buttons: red `#f6214b` bg + white text, radius 3px; hover darkens.
  - Circular icons: 50% radius, colored bg, white icon.
  - Font: **"Poppins"**, sans-serif.
  - Border radii: 3px (buttons), 5px (cards), 20px (feature icons),
    50% (circular elements).
  - Hero: full-width, dark overlay, white text, red CTA button.
  - Sections alternate white / light gray (`#f9f9ff`) backgrounds.
- **Recreation name:** Visaflow (NEW — the ColorLib source name
  "Immigration" is never reused). App folder `apps/visaflow`, package
  `@free-react-templates/visaflow`, homepage
  `https://visaflow.free.componentdock.com`.
- **Recreation approach:** full-page immigration landing with hero, CTA bar,
  country services, booking form, features grid, testimonials, blog, and
  footer; placeholder images via picsum.photos; lucide-react icons for
  services/features; red primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Card, cn).

## Tasks

- [ ] Write `openspec/specs/template-visaflow/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/visaflow` (copy the simplest app; rename package to
      `@free-react-templates/visaflow`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh visaflow` (typecheck + lint +
      100% coverage tests + build) + `npm run spec:validate`.
- [ ] Push `feat/template-visaflow`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
