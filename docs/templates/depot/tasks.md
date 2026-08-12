# Depot (ColorLib "Warehouse") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-depot` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Warehouse" — real estate website template
  (source: https://colorlib.com/wp/template/warehouse/). Listed in
  TEMPLATES.md line 528 (Bootstrap section); dup rows at lines 1223
  (Business) and 2619 (Real Estate) — same source, ONE implementation
  (line 528 is the claim row; mark ALL THREE `[x]` after merge).
- **Naming:** the source name "warehouse" must NOT be reused. New name =
  **Depot** (verified free in `apps/`, `openspec/specs/`,
  `docs/templates/`). Despite the source name, the design is a REAL ESTATE
  landing (property cards with prices, agents, property services) — keep
  the real-estate content; "Depot" fits both readings.
- **Preview URL:** https://preview.colorlib.com/theme/warehouse/ (HTTP 200,
  47.5 KB, title "Warehouse — Website Template by Colorlib"). Fetched:
  `/tmp/wh/preview.html`, `/tmp/wh/style.css` (27.5 KB), screenshot
  `/tmp/wh/shot.jpg` (1200×946, viewed in browser: industrial-loft hero
  photo with dark overlay, centered "BUY & SELL PROPERTY HERE" + teal
  "Get Started" + 2 dots, white uppercase nav over hero, 3 property
  thumbnails below; screenshot cropped after the property row — preview
  DOM authoritative for the rest).
- **Visual design:** clean real-estate landing on a teal `#37cfa2` brand.
  Signature elements: full-viewport photo hero carousel (2 slides) under a
  dark `rgba(0,0,0,0.4)` + top-gradient overlay, uppercase **Oswald**
  headings (hero h1 = 900, 3rem, white), body **Roboto** gray; 6 property
  cards whose hover slides out a black offset frame + shifts the details;
  the teal how-it-works band with numbered 01/02/03 steps; light
  `#f8f9fa` services + contact sections; 50px circular testimonial
  avatars; dark `#333333` footer with newsletter input + socials.
- **Font:** `"Oswald"` (headings + nav, uppercase, weight 300 default) and
  `"Roboto"` (body) via Google Fonts `<link>` in `index.html` (source uses
  the same Google Fonts).
- **Brand colors:** `#37cfa2` (teal — buttons, how-it-works bg, active
  dot, gototop), `#343a40` (button hover), `#333333` (footer), `#f8f9fa`
  (light sections), `#808080` gray body text, `#737373` footer text,
  `#939393` (property-card hover text), `#c4c4c4`/`#a2a2a2` (testimonial
  role/quote).
- **Structure (1:1 from the preview DOM):**
  1. `div.site-navbar` (absolute over hero, transparent, sticky after
     scroll) — text logo "Depot"; Oswald uppercase links Home ·
     Properties · Agents · About · News · Contact; mobile = hamburger
     slide-in panel with close button.
  2. Hero `div.site-blocks-cover.overlay.overlay-2#home-section`
     (min-height 600px / 100vh) — owl carousel, 2 slides:
     "Buy & Sell Property Here" / "Find Your Perfect Property For Your
     Home", each: lorem + `a.btn.btn-primary.px-5.py-3` "Get Started";
     dot pagination, active dot teal.
  3. Properties `div.site-section#properties-section` — `row.large-gutters`
     of 6 `col-md-6.col-lg-4` `.ftco-media-1` cards: image link (source →
     property-single.html; NO subpages in recreation — keep a plain link
     or `#`), h3 title "HD17 19 Utica Ave.", p "New York - USA", strong
     "$20,000,000". Source reuses 3 photos — use 6 distinct
     picsum seeds. Hover: black frame + details slide right + white title.
  4. Agents `section.site-section#agents-section` — "Real Estate Agents" +
     subtext; 3 `col-md-4` cards: photo, name (Allison Holmes / Dave
     Simpson / Ben Thompson), "Real Estate Agent" role.
  5. How It Works `section.py-5.bg-primary.site-section.how-it-works
#howitworks-section` — teal bg, white text, "How It Works", steps
     "01./02./03." + icon + "Find Property." / "Buy Property." /
     "Outstanding Houses." + lorem; 1px black connector `:after` between
     steps on desktop.
  6. About `section.site-section#about-section` — left `col-md-6` photo;
     right: h2 "Depot Real Estate Template", 2 paragraphs, `ul-check`
     5 items, `a.btn.btn-primary` "Learn More".
  7. Services `section.site-section.bg-light#services-section` — "Services"
     - 6 `col-md-6.col-lg-4` icon cards: Find Property · Buy Property ·
       Beautiful Home · Buildings & Lands · Property Locator · Mobile Apps +
       lorem + "Learn More" text link.
  8. Testimonials `section.site-section.testimonial-wrap
#testimonials-section` — "Testimonials" + owl with-dots, 3 slides:
     50px circular photo + name + "Customer" + quote (Allison Holmes,
     James Phelps, Nestor Helsin). Static render OK (jsdom-safe).
  9. News & Events `section.site-section#news-section` — "News & Events" +
     3 `h-entry` cards: image, meta "Allison Holmes • Jan 18, 2019 •
     News", title "Popular Real Estate Properties for 2019", excerpt.
  10. Contact `section.site-section.bg-light.bg-image#contact-section` —
      "Contct Us" → FIX typo to "Contact Us"; subheading "Get In Touch";
      left form (First Name / Last Name / Email / Subject / Message /
      "Send Message" btn-primary, no-op submit); right info column
      (Address "203 Fake St. Mountain View, San Francisco, California,
      USA" · Phone "+1 232 3235 324" · Email "youremail@domain.com").
  11. Footer `footer.site-footer` (`#333333`) — "About Us" blurb ·
      "Quick Links" (About Us, Services, Testimonials, Contact Us) ·
      "Subscribe Newsletter" (transparent input + teal "Send") + "Follow
      Us" 3 social circles (facebook/twitter/instagram inline SVGs);
      bottom bar copyright + MANDATORY Component Dock link
      (https://www.componentdock.com/), NO ColorLib credit.
- **Source quirks:** "Contct Us" heading typo (fix); property cards link
  to a subpage (drop); footer copyright credits ColorLib (replace with
  Component Dock); hero + testimonials + news carousels (static render).

## Implementation tasks (for the implementer stream)

- [ ] Branch `feat/template-depot` off main; copy the simplest existing
      app; rename package to `@free-react-templates/depot`; `npm install`
      at root so package-lock.json registers the workspace.
- [ ] Write `apps/depot` tests FIRST (red): one `describe` per component,
      scenario-style `it` blocks mirroring the spec's Gherkin scenarios;
      100% lines/functions/branches/statements.
- [ ] `src/index.css` `@theme` tokens: `--color-brand: #37cfa2`,
      `--color-brand-dark: #343a40`, `--color-ink: #808080`, `--color-
    light: #f8f9fa`, `--color-footer: #333333`; fonts Oswald + Roboto
      via `<link>` in `index.html`.
- [ ] Components: `Navbar` (sticky-on-scroll + mobile panel),
      `Hero` (2 static slides + dots), `Properties` (6 cards + hover
      frame), `Agents`, `HowItWorks` (teal band), `About` (checklist),
      `Services`, `Testimonials`, `News`, `Contact` (form + info),
      `Footer` (widgets + newsletter + socials + Component Dock credit).
- [ ] Placeholder images `picsum.photos/seed/depot-<n>/<w>/<h>`; icons
      from lucide-react; no ColorLib assets/strings anywhere in `apps/`.
- [ ] `public/CNAME` = `depot.free.componentdock.com`; package.json
      `homepage` = `https://depot.free.componentdock.com`.
- [ ] Gate: `scripts/verify-app.sh depot` (typecheck + lint + 100%
      coverage + build) — FAST_MODE; full `npm run gate` runs in CI.
- [ ] PR description: source template, preview URL, design tokens, what
      differs (name, placeholders, typo fix, no subpage).
- [ ] After merge: mark TEMPLATES.md lines 528, 1223, 2619 `[x]` +
      surge URL + `npm run readme:status`.
