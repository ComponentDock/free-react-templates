# Wanderbug — implementation tasks

Recreation of ColorLib "Tralive" (Travel). Spec:
`openspec/specs/template-wanderbug/spec.md`. New name: **wanderbug**
(source slug `tralive` — never reuse it in app files).

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/wanderbug`
- [ ] Rename package to `@free-react-templates/wanderbug`; set
      `"homepage": "https://wanderbug.free.componentdock.com"`
- [ ] `public/CNAME` = `wanderbug.free.componentdock.com`
- [ ] Run `npm install` at repo root; verify lockfile registers
      `@free-react-templates/wanderbug`
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` for Josefin Sans 300–700 + Roboto 300–900 in
      `index.html`
- [ ] `@theme` tokens in `src/index.css`: navy `#00095e`, navy-deep
      `#0c0c1f`, indigo `#1f2b7b`, periwinkle `#7ea0ff`, yellow `#ffc800`,
      footer-start `#1a2d6d`, footer-end `#0c1534`, body `#677f8b`,
      footer-text `#8a8fbe`, light `#f9f9ff`

## Sections (component order in `App.tsx`)

- [ ] `Navbar.tsx` — white header; left logo mark + "wanderbug" wordmark;
      Josefin Sans navy links Home/Events/About/Blog (dropdown: Blog, Blog
      Details, Events Details, Element → reduced set ok)/Contact; growing
      periwinkle underline on hover; yellow phone button (Phone icon +
      "+10 (67) 678 2567", radius 5px); sticky → white bar + soft shadow,
      tightened padding on scroll; mobile hamburger (lucide Menu/X,
      `aria-expanded`)
- [ ] `Hero.tsx` — centered h1 "Lifelong memories just a few seconds
      away" (Josefin Sans 700, navy, 60px → responsive); `<mark>`-style
      yellow `#ffc800` highlighter bar behind "few seconds away" (11px,
      ~top 58%, z behind text); subtext "Let's start your journey with us,
      your dream will come true" (Roboto 20px navy); navy gradient button
      "Explore Destinations" (`#00095e → #0c0c1f`, radius 5px, hover →
      yellow)
- [ ] `HeroBusBand.tsx` — full-bleed illustration band (~880px desktop,
      responsive to ~300px): layered beach/mountain scene as picsum
      `wanderbug-hero` cover (or CSS-illustrated stand-in); camper-bus
      illustration bottom-right with nudge animation (±100px, 10s,
      alternate)
- [ ] `UpcomingEvents.tsx` — eyebrow "Check Our Best Promotional Tour"
      (periwinkle 16px) + h2 "Upcoming Events" (navy, 50px/700); 4 cards
      (3-up desktop → carousel on smaller): image top (radius 5px 5px 0 0,
      hover scale 1.05), caption (radius 0 0 5px 5px, shadow
      `0 10px 15px rgba(0,9,94,0.06)`): row of h3 name (Josefin 22px/700
      navy) + price `$1200` (periwinkle 22px/700); date "12 Jan - 18 Jan"
      link + "5 Days" (navy 14px/500). Names: Mega Turkey, Finlande,
      Spitzberg, Mega Turkey; images picsum `wanderbug-event-1..4`
- [ ] `AboutCta.tsx` — split: left picsum `wanderbug-about` illustration
      (~50%); right eyebrow "About Us", h2 "Get ready for real time
      adventure" (navy Josefin), paragraph (18px), yellow button "Book
      Your Destination" (`.btn` pattern, radius 5px, navy-gradient hover)
- [ ] `Testimonials.tsx` — centered h2 "What customers say" over cover
      bg (picsum `wanderbug-testimonial-bg`, padding ~139/130 desktop);
      slider (React state, ChevronLeft/Right): quote paragraph, circular
      portrait (picsum `wanderbug-founder`), name span (reference: Mark
      Anthony)
- [ ] `FaqAccordion.tsx` — eyebrow "FAQ", h2 "Full range of travel
      service"; 4 accordion items (button + `aria-expanded`, one open at a
      time ok): periwinkle `#7ea0ff` titles "Starts the automated
      process." / "The automated process starts." / "Automated process
      starts." / "Process the automated magic."; body paragraph per item
- [ ] `VideoCta.tsx` — ~560px band (responsive), radius 20px, cover bg
      (picsum `wanderbug-video-bg`); centered circular play button (lucide
      Play, white, aria-label) above white h3 "Watch our last tour" — no
      external popup
- [ ] `InstagramStrip.tsx` — full-bleed row of 6 images (picsum
      `wanderbug-insta-1..6`, cycled like the reference); hover/focus:
      yellow overlay `rgba(255,200,0,0.6)` + centered white lucide
      Instagram icon
- [ ] `Footer.tsx` — navy gradient bg `linear-gradient(135deg, #1a2d6d,
      #0c1534)`, ~114px top padding; 4 columns: (1) footer logo + blurb
      (`#8a8fbe`, lh 1.8) + 4 social icons (lucide stand-ins, white →
      yellow + lift on hover); (2) "Navigation" (Home, About, Services,
      Blog, Contact); (3) "Services" (Blackforest, …tour links); (4)
      "Contact Us" (address "76/A, Green Lane, Dhanmondi, NYC", email
      "demomail89@gmail.com", yellow phone link 22px); footer-bottom
      centered "Copyright © <year> All rights reserved | This template is
      made with ♥ by Component Dock" — Component Dock links
      https://www.componentdock.com/ (yellow link, periwinkle heart)

## Verification

- [ ] `scripts/verify-app.sh wanderbug` green (typecheck + lint + 100%
      coverage tests + build)
- [ ] No "tralive"/"Colorlib" strings anywhere in `apps/wanderbug`
- [ ] `npm run spec:validate` clean for this spec
- [ ] PR: source slug + preview URL + tokens + renames/placeholder notes
