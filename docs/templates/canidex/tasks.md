# Canidex (ColorLib Dingo) — Tasks & Design Notes

> Prep artifacts committed on `main` (prep stream). Implementation ships
> later on `feat/template-canidex` (implementer stream).

## Design notes (replication findings)

- **Original:** ColorLib "Dingo" — restaurant landing page template
  (source: https://colorlib.com/wp/template/dingo/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/dingo/
  (HTTP 200, full rendered HTML + `css/style.css` extracted; 10 sections
  on the homepage, Bootstrap 4 grid, jQuery carousel/plugins).
- **Visual design (screenshot + live render):** Warm restaurant aesthetic
  — cream/beige hero with decorative illustration on right, orange brand
  `#ff6426` accent, serif typography (Cardo headings, Lora body), gray
  `#f6f5f1` sections for menu and testimonials, dark photo-bg reservation
  form, warm off-white `#f9f8f3` footer. Clean, editorial food-magazine
  feel with soft color palette and generous whitespace.
- **Structure (1:1, section order):**
  1. Navbar (sticky, white, logo + nav + "book a table" pill button).
  2. Hero/Banner (cream bg `#f0eed4`, left text, right decorative
     illustration, tagline + h1 + blurb + Reservation link + video link).
  3. Exclusive Dishes ("Our Exclusive Items" — 3 food cards, image +
     title + blurb + "Read More" btn_3).
  4. About ("Our History" — split layout: left image, right text block
     with h5/h2/h4/p + "Read More").
  5. Video CTA (dark section, "Expect The Best", centered play button).
  6. Food Menu (gray bg `#f6f5f1`, tabbed: Special/Breakfast/Lunch/
     Dinner/Snacks, 6 items per tab with thumbnail + name + desc + price).
  7. Reservation Form (dark photo bg overlay, white text, 7-field form
     in 2-col grid + orange "Book A Table" submit btn_4).
  8. Testimonials (gray bg, carousel: 3 slides, client avatar + quote
     + name/title).
  9. Blog ("Latest From Blog" — 3 post cards, image + date/category +
     title + "Read More").
  10. Footer (warm off-white `#f9f8f3`, 4-column: About/Links/Contact/
      Newsletter, copyright bar + social icons).
- **Design tokens extracted from the CSS + DOM:**
  - Brand primary = **orange** `#ff6426` (buttons, link hovers, section
    title underline bars, play icons). Hover dark = `#e04000`.
  - Page bg = `#fff`. Gray sections = `#f6f5f1`. Banner = `#f0eed4`
    (cream). Footer = `#f9f8f3`.
  - Headings color = `#2c3033` (dark charcoal).
  - Body text = `#555555`. Links hover = `#ff6426`.
  - Heading font = **"Cardo"**, serif (400, 700).
  - Body font = **"Lora"**, serif (400, 400i, 700, 700i).
  - Buttons: `.btn_1` pill `border-radius: 50px`, white bg, orange text;
    `.btn_4` orange bg, white text, `border-radius: 4px` (reservation).
    Read-more links (`.btn_3`) have circular orange underline pseudo-el.
  - Section title `::after` = 90×10px orange `#ff6426` bar below h2.
  - Reservation form: transparent inputs, `border-bottom: 2px solid #a1a5a5`,
    white text on dark bg. Submit btn_4 with 4px radius.
  - Testimonial carousel: owl-carousel plugin, left-aligned client image
    + right-aligned text block.
- **Recreation name:** Canidex (single lowercase word, evokes "canid"
  (dog family) + "index" — a nod to the original "Dingo" name without
  reusing it; NO collision with `apps/` or existing spec folders).
  App folder `apps/canidex`, package `@free-react-templates/canidex`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/canidex-<n>/<w>/<h>`); lucide-react icons (Utensils,
  Play, ArrowRight, ChevronDown, Star, Quote, Mail, MapPin, Phone,
  Calendar, Clock, Users, Menu, X — VERIFY exports); Cardo + Lora via
  Google Fonts; repo-standard Navbar + Footer chrome; tabbed food menu
  with React state; reservation form with client-side validation;
  testimonial carousel (static or simple auto-rotate); no video embed
  (placeholder play button linking to #).
- Reuse `packages/ui` (Button, ButtonLink, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-canidex/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Create `apps/canidex` (copy the section-rich landing app pattern —
      Sooth or Sapphire; rename package to `@free-react-templates/canidex`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Gate: `scripts/verify-app.sh canidex` (typecheck → lint → 100%
      coverage tests → build) + `npm run spec:validate`.
- [ ] Push `feat/template-canidex`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main), `npm run readme:status`.
