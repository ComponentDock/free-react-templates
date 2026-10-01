# Wanderport — implementation tasks

Recreation of ColorLib "Travelasia" (travel agency booking). Spec:
`openspec/specs/template-wanderport/spec.md`. New name: **wanderport**
(source slug `travelasia` — never reuse it in app files; screenshot demo
brand "TRAVELASIA" is also never reused).

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/wanderport`
- [ ] Rename package to `@free-react-templates/wanderport`; set
      `"homepage": "https://wanderport.free.componentdock.com"`
- [ ] `public/CNAME` = `wanderport.free.componentdock.com`
- [ ] Run `npm install` at repo root; verify lockfile registers
      `@free-react-templates/wanderport`
      (`grep -c "free-react-templates/wanderport" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` for Poppins 300–700 in `index.html`
- [ ] `@theme` tokens in `src/index.css`: gradient stops `#9a52fd` /
      `#57ffed` (as a reusable `--gradient-brand: linear-gradient(0deg,
      #9a52fd 0%, #57ffed 100%)`), accent aqua `#5cf2ee`, heading `#222`,
      body `#777`, package title `#1a1a1a`, blog `#000`, footer `#222222`,
      newsletter input `#191919`, input border `rgba(111,117,152,0.3)`,
      hero overlay `rgba(0,0,0,0.8)`, tab inactive `#fff3`

## Sections (component order in `App.tsx`)

- [ ] `Navbar.tsx` — WHITE bar above hero; original gradient triangle mark
      + "wanderport" wordmark left; links Home / Booking / Packages /
      Contact (anchor scroll to `#home`/`#booking`/`#package`/`#contact`);
      hamburger (aria-expanded) below `lg` toggling the link list —
      matches the screenshot showing the hamburger at ~1200px
- [ ] `Hero.tsx` — ~700px photo (picsum `wanderport-hero`) cover/center +
      dark overlay (CSS says rgba(0,0,0,0.8); match the screenshot's
      dark-but-visible treatment); col ~75% offset 100px top: white
      Poppins h1 72px/700 lh 1.15 two lines "Wherever you go" / "it'll
      inside the World" (45px tablet / 36px mobile), grey lorem subtext,
      gradient pill "See Details" + ArrowRight icon sliding 10px left on
      hover
- [ ] `BookingCard.tsx` — white card overlapping hero (`-mt-[42px]`,
      col ~66% centered); 4-tab strip flights / hotels / flights+hotels /
      Holidays (React state; active solid white, inactive `#fff3`,
      radius 0); each panel: H4 "Book Your Flights|Hotels|Flights &
      Hotels|Holidays" + form From, To (md:1/2), Start, Return, Adults,
      Child (md:1/4) — sharp 13px/300 inputs mb-[30px] — + right-aligned
      gradient pill "Send Message" + ArrowRight; submit prevented
- [ ] `Features.tsx` — `section-gap` (120px); 4-up (2-up tablet, 1-up
      mobile): lucide icon ~35px grey `#777` → gradient-clip on card
      hover, H4 mt-10 mb-5: Easy Flight Search, Get Hotel Offers, Holiday
      Packages, Dedicated Support + grey blurbs (paraphrased)
- [ ] `Packages.tsx` — centered col-md-6 header (pb-20): H1 "Popular
      Packages" + grey lorem sub; 6-across desktop grid (2-up small), each
      card: photo (picsum `wanderport-pkg-1..6`) + gradient overlay
      fading in on hover + bottom-anchored white 18px/500 title "Resort
      Holiday package"; section pb-25 (100px)
- [ ] `Blogs.tsx` — solid `#000` band (120px padding); centered white H1
      "Our Recent Blogs" + white lorem sub; 3-up cards (picsum
      `wanderport-blog-1..3`): hover dim opacity .5 + scale 1.05, H4 white
      uppercase ls-[3px] "Summer ware are coming" (mt-[35px]), grey
      blurb, meta row between 1px `#222` rules (py-5): avatar (picsum
      `wanderport-author`) + "Mark Wiens" white left; "13th Dec" + Heart
      "15" + MessageCircle "04" white right
- [ ] `AboutSplit.tsx` — row items-end: LEFT lg:6 pl-[20%]: gradient-clip
      h1 25px three lines "Did not find your Package?" / "Feel free to
      ask us." / "We'll make it for you" + grey paragraphs (paraphrased)
      + black pill "Make Package of your own" (uppercase 14px, radius
      20px, py-3 px-7; hover invert white bg + `#222` text/border); RIGHT
      lg:6 full-bleed photo (picsum `wanderport-about`); stacks on
      mobile
- [ ] `ContactInfo.tsx` — `section-gap`; 4-up centered cards (2-up
      tablet, 1-up mobile): Visit Our Office (Dhaka-style address,
      paraphrased), Let's call us (Phone 01 / Phone 02 / FAX), Let's Email
      Us (3 emails), Customer Support (3 emails); H4 + grey detail lines
- [ ] `ContactFormSection.tsx` — white bg, id="contact": LEFT lg:6
      no-padding map placeholder ~545px (picsum `wanderport-map` or
      styled block — NO real map API); RIGHT lg:4 (py-25): name input
      "Enter your name", email input "Enter email address" (email
      pattern), textarea 150px "Messege" — border 1px
      `rgba(111,117,152,0.3)`, transparent bg, lh 48px (textarea p-[15px]
      25px), `#777`, radius 0 — + gradient pill "Send Message" +
      ArrowRight; submit prevented
- [ ] `Footer.tsx` — `#222222` bg pt-25 (100px); 4 widgets lg:3 (2-up
      small): About Us (grey blurb); Newsletter ("Stay update with our
      latest" + `#191919` input lh-[38px] no border pl-5 `#777` + square
      gradient ArrowRight submit overlapping right edge, mt-[-40px]);
      Instragram Feed (8 thumbs picsum `wanderport-insta-1..8`, w-1/4
      m-[5px], 2 rows × 4); Follow Us ("Let us be social" + 4 lucide
      social icons `#ccc` → white hover, gradient-clip on hover); bottom
      line centered pt-20 (80px): copyright with aqua `#5cf2ee` heart +
      link to `https://www.componentdock.com/` ("Component Dock") —
      never ColorLib

## Tests (TDD — red first, 100% coverage)

- [ ] Per-component tests mirroring the spec's Gherkin scenarios
      (query by role/text; `user-event` for tabs, burger, form submits)
- [ ] Navbar: hamburger toggle below lg (`aria-expanded`), anchor links
      present
- [ ] BookingCard: default tab = flights; switching tabs swaps panel H4 +
      form; submit prevented on each panel
- [ ] Packages: hover classes carry the gradient overlay; 6 cards render
- [ ] Blogs: meta shows date/likes/comments; 3 cards render
- [ ] Footer contains the Component Dock link; no `colorlib` string
      anywhere in the app (grep gate)
