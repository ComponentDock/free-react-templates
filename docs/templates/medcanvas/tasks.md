# MedCanvas (Colorlib Medart) — Tasks & Design Notes

> Prep artifacts prepared on `main` under the source name (template-medart);
> renamed to the NEW name **MedCanvas** in the implementation PR.

## Design notes (replication findings)

- **Original:** ColorLib "Medart" — medical practice landing template
  (source: https://colorlib.com/wp/template/medart/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/medart/
  (HTTP 200, full rendered DOM + `style.css` extracted).
- **Visual design (from DOM + CSS tokens):** medical practice landing with a
  **blue-to-purple gradient** brand identity (`#32c8fa → #587de4`) on white
  backgrounds, **Raleway** font (200–700), rounded 20px UI elements, gradient
  CTA buttons, and a departments section with full gradient background.
- **Structure (1:1, section order):**
  1. Navbar: logo + Home, About us, Services, News, Contact + emergency call
     button with gradient bg.
  2. Hero Swiper Slider: 3 slides, "The Best Medical Services" + "Read More"
     CTA, vertical pagination on left.
  3. Homepage Boxes: Opening Hours (blue left border), Emergency (gradient
     call button), Make an Appointment form (selects + inputs + submit).
  4. Our Departments: 9 department cards (Cardiology, Gastroenterology,
     Medical Lab, Dental Care, Surgery, Neurology, Orthopaedy, Pediatry,
     Ophthalmology) on gradient background, white text.
  5. Testimonials: Swiper slider with user avatar, name, affiliation,
     quote text, white card with shadow on light bg.
  6. The News: 3 blog post cards (thumbnail, title, date/author/comments,
     excerpt).
  7. Subscribe Banner: dark background image, white heading, email input,
     gradient "Subscribe" button.
  8. Footer: 3-column (About/logo, Contact, Useful Links) + copyright
     with Component Dock link.
- **Design tokens extracted from `style.css`:**
  - Primary **sky blue `#18a3eb`** (nav active, pagination, opening hours
    border, barfiller).
  - Gradient: `linear-gradient(270deg, #32c8fa 0%, #587de4 100%)` — used
    on CTA buttons, departments section bg, form submits.
  - Body text `#404040`, muted `#828282`, headings `#262626`.
  - Light bg `#f0f4f8`, border `#dde4ea`.
  - Font: **"Raleway"** via Google Fonts `<link>` (weights 200–700).
  - Border radius: **20px** (buttons, info boxes, testimonial card).
  - Button: `padding: 12px 50px 10px`, default `border-bottom: 3px solid #18a3eb`.
  - Subscribe section: dark background image with overlay.
- **Recreation name:** MedCanvas (NEW — the ColorLib source is "Medart").
  App folder `apps/medcanvas`, package `@free-react-templates/medcanvas`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/medart-<n>/<w>/<h>`); lucide-react icons for
  department icons + phone; Raleway via Google Fonts; forms prevent default
  (no backend); gradient primary in `@theme`; repo-standard Navbar +
  Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Card, cn).

## Tasks

- [ ] Write `openspec/specs/template-medcanvas/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/medcanvas` (copy the simplest medical app pattern — medwell;
      rename package to `@free-react-templates/medcanvas`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh medcanvas` + `npm run spec:validate`.
- [ ] Push `feat/template-medcanvas`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
