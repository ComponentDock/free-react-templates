# Voyara — implementation tasks

Recreation of ColorLib "Platina" (Travel). Spec:
`openspec/specs/template-voyara/spec.md`. New name: **voyara**
(source slug `platina` — never reuse it in app files).

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/voyara`
- [ ] Rename package to `@free-react-templates/voyara`; set
      `"homepage": "https://voyara.free.componentdock.com"`
- [ ] `public/CNAME` = `voyara.free.componentdock.com`
- [ ] Run `npm install` at repo root; verify lockfile registers
      `@free-react-templates/voyara`
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` for Poppins 300/400/500/600/700 in `index.html`
- [ ] `@theme` tokens in `src/index.css`: gradient pink `#f62e71`, peach
      `#f9ab72`, hover pink `#f7427f`, dark `#222222`, lavender `#f9f9ff`,
      body `#777777`

## Sections (component order in `App.tsx`)

- [ ] `Navbar.tsx` — white bar; bold letter-spaced "voyara" wordmark;
      hamburger (lucide Menu/X, `aria-expanded`); panel links
      Home/Facilities/Service/Book (smooth-scroll, close on click);
      sticky + soft shadow `-21.213px 21.213px 30px rgba(158,158,158,0.3)`
      on scroll
- [ ] `Hero.tsx` — full-viewport slider (2 slides, React state):
      picsum `voyara-hero-1..2` cover + gradient overlay
      `linear-gradient(to top, #f62e71, #f9ab72)` opacity 0.8; centered
      white h1 "Enjoy Holidays / with affordable Hotels" (72px/700,
      36px mobile); "Start Searching" white pill (uppercase, `#222`
      text, radius 20px, hover flips dark) → `#book`; stacked 40px
      white up/down triggers at right edge (ArrowUp/ArrowDown, hover
      `#f7427f`)
- [ ] `FacilitiesShowcase.tsx` — centered h1 "Superb Facilities" +
      lorem subtext; 3 image tiles (picsum `voyara-service-1..3`,
      max-w ~400px): hover gradient overlay fade + centered white h3
      "Resort Holiday package" fade-in (~0.4s)
- [ ] `WelcomeSplit.tsx` — two-column: left picsum `voyara-about`
      full-bleed; right h1 "A very Lovely Welcome / to our Hotel"
      (25px, gradient text via `background-clip: text`), paragraph,
      "Make Package of your own" dark pill (`#222` bg, `#777` border,
      white uppercase, radius 20px, hover inverts) → `#book`
- [ ] `FacilitiesGrid.tsx` — centered h1 "Superb Facilities" + lorem;
      6 cards (3 unique × 2, col-lg-4): Rocket/Wand2/Gift lucide
      icons 35px `#777` (hover → gradient text treatment), h4 18px
      (Easy Flight Search / Get Hotel Offers / Holiday Packages),
      short paragraphs
- [ ] `GalleryStrip.tsx` — full-width 6 tiles (picsum
      `voyara-gallery-1..6`; 6/3/2 cols) reusing the hover overlay
      pattern + "Resort Holiday package" title
- [ ] `BookingForm.tsx` — centered h1 "Book a Room" + lorem; two-column
      form: First/Last Name, Arrival/Departure (date), Room Type,
      Number Of Rooms, Adults, Childs (selects), Message textarea
      (placeholder "Message"); zod/react-hook-form validation, per-field
      errors; "Book Room" gradient pill (uppercase white + ArrowRight
      at right edge, radius 25px, arrow shifts right on hover); success
      message state on valid submit (no booking.php)
- [ ] `ContactBand.tsx` — bg `#f9f9ff`, ~100px padding; 4 centered
      columns: Visit Our Office / Let's call us / Let's Email Us /
      Customer Support (paraphrased demo data)
- [ ] `Footer.tsx` — bg `#222222`, white headings, padding-top ~100px;
      About Us paragraph; Newsletter ("Stay updated with our latest" +
      email input + square gradient ArrowRight submit, client-side
      email validation + confirmation); Instagram Feed (fix "Instragram"
      typo; 8 thumbs picsum `voyara-insta-1..8`); Follow Us ("Let us be
      social" + social icon links, gradient hover, `aria-label`s);
      footer-bottom copyright + Component Dock link
      (`https://www.componentdock.com/`)

## Conventions gates

- [ ] Zero ColorLib strings in `apps/voyara` (no colorlib/preview
      URLs, no source-name "Platina" in files/comments)
- [ ] `packages/ui` `cn()` for class composition; lucide-react only
      (no icon fonts); picsum seeds `voyara-*` only
- [ ] Tests mirror spec scenarios (scenario-style `it` blocks);
      `scripts/verify-app.sh voyara` green at 100% coverage
