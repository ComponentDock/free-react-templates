# Outpost — implementation tasks

Recreation of ColorLib "Taxa" (Travel / adventure agency). Spec:
`openspec/specs/template-outpost/spec.md`. New name: **outpost**
(source slug `taxa` — never reuse it in app files).

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/outpost`
- [ ] Rename package to `@free-react-templates/outpost`; set
      `"homepage": "https://outpost.free.componentdock.com"`
- [ ] `public/CNAME` = `outpost.free.componentdock.com`
- [ ] Run `npm install` at repo root; verify lockfile registers
      `@free-react-templates/outpost`
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` for Playfair Display 700 + Roboto
      300/400/500/600 in `index.html`
- [ ] `@theme` tokens in `src/index.css`: brand gradient `#ff2f8b`→
      `#9035f9`, date-hover gradient `#fff098`→`#f54e71`, black `#000000`,
      footer navy `#04091e`, body `#777777`, feature panel `#f7f9fd`,
      border `#eeeeee`, newsletter input `#c251da`, title bar `#dddddd`,
      footer link `#999999`, hover shadow `rgba(129,74,255,0.2)`

## Sections (component order in `App.tsx`)

- [ ] `Navbar.tsx` — transparent over hero; "outpost" cube wordmark left;
      uppercase white Roboto 600 12px links Home/Packages/Pages/Blog/
      Contact (Pages + Blog dropdowns: white bg, `#ededed` item borders,
      active/hover bg `#ff2f8b` white text); outlined "BOOK A TRIP"
      button (1px white border, hover `#ff2f8b`) → newsletter section;
      search icon toggle (lucide Search) with overlay input "Search
      Here"; hamburger (lucide Menu/X, `aria-expanded`) on mobile;
      scrolled state → fixed black bar `#000000` + shadow
      `0px 3px 16px rgba(0,0,0,0.1)`, line-height 70px
- [ ] `Hero.tsx` — fullscreen (~900px/650px): illustrated treatment =
      signature gradient sky `#ff2f8b`→`#9035f9` + purple-tinted
      silhouette layer (picsum `outpost-hero` under heavy gradient
      overlay, or layered CSS gradients); centered white uppercase
      eyebrow "Plan a trip to Santorini Village" + white Playfair h2
      "Outpost" (120px/80px/50px)
- [ ] `Services.tsx` — centered eyebrow (gradient-clipped uppercase
      "We're Offering these Popular Services") + h1 "Getting Adventure
      with Services" (Playfair 48px) + 100×5px `#dddddd` bar; 3 cards
      (details FIRST: h5 21px title + lorem + gradient "Read More";
      illustration panel BELOW: bg `#f7f9fd`, padding 40px, picsum
      `outpost-service-1..3`); 1px `#eeeeee` border, hover → transparent
      border + `box-shadow 0 5px 50px rgba(129,74,255,0.2)`
- [ ] `CtaBand.tsx` — light illustrated band; h1 "Get Ready for Real
      time Adventure" + lorem + black `.primary-btn` "Book a Trip"
      (bg `#000000`, line-height 48px, padding 0 38px, letter-spacing
      2px, hover transparent/black text) → newsletter; floating
      illustration right (picsum `outpost-cta`, absolute overlapping
      top; hidden on mobile)
- [ ] `Packages.tsx` — eyebrow "We're Offering these Trip Packages" +
      h1 "Famous Trips Packages" + grey bar; 3 cards: image
      (`outpost-package-1..3`); `.date` badge absolute top-left
      (gradient `#ff2f8b`→`#9035f9`, white, day Playfair 32px + month
      13px; hover → `#fff098`→`#f54e71`); meta row (MapPin "Stockholmes"
      + Calendar "5 days 6 nights"); h4 Playfair title "Desert Riding
      Turning So much Flowery"; lorem; gradient "Read More"; 1px
      `#eeeeee` border
- [ ] `PopularPlaces.tsx` — eyebrow "We're Offering these Trip Packages" +
      h1 "Popular Places Around the World" + grey bar; 4 full-bleed image
      cards (`outpost-place-1..4`) with centered bottom text block
      (uppercase "Proper Guided Tour" + white h4 21px "Santorini Island
      Dream Holiday and Fun package"); hover → image darkens + text
      slides up (bottom 0→80px, opacity 0→1); React-state slider/grid —
      NO carousel library
- [ ] `Team.tsx` — eyebrow "We're Offering these Trip Packages" +
      h1 "Intelligent Team Members" + grey bar; 4 cards
      (`outpost-team-1..4`, 4/2/1 cols, 1px `#eeeeee` border); hover →
      white info box (width 90%, padding 20px) slides up from
      bottom -120px: h4 "Randy Weaver" + p "Senior Barrister at law"
- [ ] `NewsletterBand.tsx` — dark purple band (picsum
      `outpost-newsletter` under brand gradient, or gradient alone);
      left illustration (hidden mobile); right white Playfair h1
      "Subscribe for our Newsletter" + lorem; email input (bg `#c251da`,
      white placeholder "Enter Email Address", 60px tall, min-width
      ~390px, square) + gradient `.click-btn` "subscribe" overlapping
      right edge (left -45px, top 10px); zod/react-hook-form validation,
      per-field error + subscribed confirmation state (no MailChimp)
- [ ] `Testimonials.tsx` — centered slider (React state, 3 slides,
      distinct picsum avatars `outpost-testi-1..3`): quote icon (lucide
      Quote), h4 "Fanny Spencer", five filled Star icons, quote
      paragraph; circular thumbnails below (border-radius 50%, 2px
      transparent border → `#ff2f8b` on active/hover); active thumb gets
      the pink ring
- [ ] `BlogRow.tsx` — eyebrow "We're Offering these Trip Packages" +
      h1 "Latest Posts from Blog" + grey bar; 3 cards
      (`outpost-blog-1..3`): meta row (Calendar "13th Dec" + Heart "15"),
      h5 title link "Cruise Private Party Booking Available Now", lorem
      excerpt
- [ ] `Footer.tsx` — bg `#04091e`, ~120px top padding; About Agency
      paragraph; Navigation Links (two lists: Home/Features/Services/
      Portfolio + Team/Pricing/Blog/contact; `#999999` 14px, hover
      `#ff2f8b`); Newsletter (paragraph + email input "Enter Email" +
      gradient square `.click-btn` submit, client-side validation +
      confirmation); "Instagram Feed" (fix original "Instragram" typo;
      8 thumbs picsum `outpost-insta-1..8`, flex-wrap 4-per-row); footer
      bottom copyright + Component Dock link
      (`https://www.componentdock.com/`)

## Conventions gates

- [ ] Zero ColorLib strings in `apps/outpost` (no colorlib/preview URLs,
      no source-name "Taxa" in files/comments)
- [ ] `packages/ui` `cn()` for class composition; lucide-react only
      (no icon fonts); picsum seeds `outpost-*` only
- [ ] Tests mirror spec scenarios (scenario-style `it` blocks);
      `scripts/verify-app.sh outpost` green at 100% coverage
