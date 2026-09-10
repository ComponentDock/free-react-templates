# Tarmac (ColorLib Autoroad) — Tasks & Design Notes

> Prep artifacts prepared on `main` under the ColorLib source name
> "autoroad"; the recreation ships as **Tarmac** on `feat/template-autoroad`
> (renamed to `apps/tarmac`, package `@free-react-templates/tarmac`).

## Design notes (replication findings)

- **Original:** ColorLib "Autoroad" — car rental website template
  (source: https://colorlib.com/wp/template/autoroad/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/autoroad/
  (HTTP 200, full rendered DOM + `css/style.css` extracted, ~3500 lines).
- **Visual design (from DOM + CSS tokens + screenshot):** modern car
  rental landing with warm **orange** accent (`#fc983c`) on white/dark
  scheme. Full-width hero with pickup truck on scenic road, white booking
  form overlay, play button. Poppins font throughout. Bootstrap blue
  `#007bff` for primary buttons. Dark sections (`#3c312e`, `#000`) in
  "How it works" and footer.
- **Structure (1:1, section order):**
  1. Navbar: dark bg, "Auto**road**" logo, Home / About / Pricing / Our
     Car / Blog / Contact.
  2. Hero: full-width bg image + dark overlay; left headline "Now It's
     easy for you rent a car" + blurb + video play button; right white
     booking form (pick-up/drop-off location, dates, time, "Search
     Vehicle" button).
  3. Search/filter bar: Select Model, Select Brand, Year Model, Price
     Limit dropdowns + "Search" button.
  4. Services ("Our Services"): 4 cards — 24/7 Car Support, Lots of
     locations, Reservation, Rental Cars.
  5. Choose Your Car: 4-column grid, each car card has bg image, price
     badge, name, brand, "Book now" + "Details" outline buttons.
  6. How It Works: dark bg image + overlay, 4 centered steps (Pick
     Destination, Select Term, Choose A Car, Enjoy The Ride).
  7. Testimonials ("Happy Clients"): owl-carousel of testimonial cards
     with circular user images.
  8. About ("Choose A Perfect Car"): split layout, image left, text +
     "Search Vehicle" button right.
  9. Blog ("Recent Blog"): 3 blog entry cards with thumbnails.
  10. Footer: dark `#3c312e`, 4 columns (About, Information, Customer
      Support, Contact), copyright → Component Dock.
- **Design tokens extracted from `style.css`:**
  - Primary **orange `#fc983c`** (subheadings, testimonial names, link
    hovers, pagination active).
  - Secondary **gold `#f7b71d`** (carousel active dot).
  - Primary button **blue `#007bff`**.
  - Dark bg **`#3c312e`** (`.ftco-bg-dark`).
  - Footer bg **`#000`**.
  - Font: **Poppins** (Google Fonts, weights 200–800).
  - Section padding: `6em 0`.
  - Heading subheading: 12px, 600, 2px letter-spacing, uppercase,
    `#fc983c`.
- **Recreation name:** Tarmac (original name — the ColorLib source name
  "Autoroad" is never reused). App folder `apps/tarmac`, package
  `@free-react-templates/tarmac`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/tarmac-<n>/<w>/<h>`); lucide-react icons;
  Poppins via Google Fonts; forms prevent default (no backend); orange
  primary in `@theme`; repo-standard Navbar (dark-mode toggle) + Footer
  chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-tarmac/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/tarmac` (copy the section-rich landing app pattern —
      Terracotta; rename package to `@free-react-templates/tarmac`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `bash scripts/verify-app.sh tarmac` + spec:validate.
- [ ] Push `feat/template-autoroad`, open PR (source template, preview
      URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
