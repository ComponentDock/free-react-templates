# Beamline (Colorlib Archlab) — Tasks & Design Notes

> Recreation of ColorLib "Archlab" under the NEW name **Beamline** (the old
> prep spec kept the source name, which violates the mandatory new-name rule;
> renamed on the implementation branch).

## Design notes (replication findings)

- **Original:** ColorLib "Archlab" — Free Bootstrap 4 architecture template
  (source: https://colorlib.com/wp/template/archlab/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/archlab/
  (HTTP 200, full rendered DOM + `css/style.css` (74KB) extracted).
- **Visual design (from DOM + CSS tokens):** architecture landing with a
  **green** brand (`#96bb7c`), Nunito Sans font, a photo hero ("Modern
  Innovative Architecture"), a green process band, a request-quote form, a
  stats band, projects, testimonials, pricing, blog, and a near-black
  footer (`#0f101c`).
- **Structure (1:1, section order):**
  1. Navbar: dark bar, "Beamline." logo + Home, About, Team, Services,
     Project, Blog, Contact.
  2. Hero: photo background, "Modern Innovative Architecture" + blurb
     ("From as low as $20 …") + **Explore Projects** (green pill) /
     **Watch our video** (white pill with play glyph).
  3. Green process band (`#96bb7c`): Design Process, Supervision, Budget
     Planning (icon + title + blurb) + **Build a Home For You** CTA.
  4. Quote form: "Be Part of our Business" / "Request A Quote" — First
     Name, Last Name, Select Your Services (**Construction, Renovation,
     Interior Design, Exterior Design, Painting**), Phone, Message,
     submit "Request A Quote". Beside it an about column: "Beamline" +
     two blurbs.
  5. Stats band: 0 Years of Experienced / 0 Project Done / 0 Licensed
     Architect / 0 Happy Customers (static numbers in the recreation).
  6. Projects: "Projects" eyebrow + "Our Unique Latest Projects" — cards:
     Geometric Building (Exterior 12/07/2020), Twin Office (Furniture
     12/07/2020), Cultural Complex Centre (Building 12/07/2020) + View
     Portfolio.
  7. Testimonials (bg-light): "Testimonial" eyebrow + "Happy Clients" —
     Roger Scott, Marketing Manager.
  8. Pricing: "Pricing" eyebrow + "Price & Plans" — three "Planning
     Solution" plans at $78 / $88 / $98 per month, features (10
     Construction Drawings, Selection Materials, Unlimited Revision),
     Get Started.
  9. Blog: "Blog" eyebrow + "Recent Blog" — 4 posts (June 01, 2020,
     Admin, 3 comments, "Make Peace With Your Broken Pieces").
  10. Footer (`#0f101c`): "Beamline." + blurb + Community / About Us /
      Company link columns + "Have a Questions?" contact column +
      copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **green `#96bb7c`** (buttons, accents, process band, quote
    overlay).
  - Dark `#000`, `#212529`; muted `#6c757d`.
  - Font: **"Nunito Sans"** (Google Fonts `<link>`).
  - Footer `#0f101c`.
  - Buttons: green pill, white text; hover → transparent + green border.
- **Recreation name:** Beamline (NEW — the ColorLib source name "Archlab"
  must not be reused). App folder `apps/beamline`, package
  `@free-react-templates/beamline`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/beamline-<n>/<w>/<h>`); lucide-react icons
  (flaticon glyphs → lucide equivalents); Nunito Sans via Google Fonts;
  video button as styled play button; quote form prevents default (no
  backend); green primary in `@theme`; repo-standard components from
  `packages/ui`.

## Tasks outline

- [ ] Scaffold `apps/beamline` from `apps/keystone` (simplest matching
      architecture app), rename package + homepage.
- [ ] `index.css`: `@theme` tokens — brand `#96bb7c`, ink `#212529`, mist
      `#6c757d`, paper `#f8f9fa`, coal `#0f101c`, Nunito Sans fonts.
- [ ] Components (+ tests, 100% coverage): Navbar, Hero, Process, Quote,
      Stats, Projects, Testimonials, Pricing, Blog, Footer.
- [ ] `App.tsx` composition + title; `index.html` fonts + meta.
- [ ] `npm install` at root (lockfile), `bash scripts/verify-app.sh beamline`,
      `npm run spec:validate`.
- [ ] PR → merge immediately → bookkeeping (TEMPLATES.md `[x]` on BOTH
      Archlab lines + surge URL, homepage, `npm run readme:status`).
