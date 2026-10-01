# Tripquest — implementation tasks

Recreation of ColorLib "Travel" (travel agency landing). Spec:
`openspec/specs/template-tripquest/spec.md`. New name: **tripquest**
(source slug `travel` — never reuse it in app files; screenshot demo
brand "Travelista" is also never reused).

## App setup

- [ ] Copy the simplest existing app scaffold → `apps/tripquest`
- [ ] Rename package to `@free-react-templates/tripquest`; set
      `"homepage": "https://tripquest.free.componentdock.com"`
- [ ] `public/CNAME` = `tripquest.free.componentdock.com`
- [ ] Run `npm install` at repo root; verify lockfile registers
      `@free-react-templates/tripquest`
      (`grep -c "free-react-templates/tripquest" package-lock.json`)
- [ ] `vite.config.ts` keeps `injectUiSource()` (copy pattern)
- [ ] Google Fonts `<link>` for Poppins 300–700 in `index.html`
- [ ] `@theme` tokens in `src/index.css`: yellow `#f8b600`, charcoal
      `#222222`, body `#777777`, light `#f9f9ff`, footer navy
      `#04091e`, overlay `rgba(4, 9, 30, 0.4)`, header-scrolled
      `rgba(34, 34, 34, 0.9)`, border `#eee`

## Sections (component order in `App.tsx`)

- [ ] `TopBar.tsx` + `Navbar.tsx` — fixed translucent header; top bar
      (Visit Us / Buy Tickets + social icons); menu bar: logo mark +
      "tripquest" wordmark; uppercase white 12px/500 links Home /
      About / Packages / Hotels / Insurance / Blog ▾ (Blog Home,
      Blog Single) / Pages ▾ (Elements, Level 2 ▸ Item One, Item Two)
      / Contact; hover yellow; scrolled state hides top bar + solid
      `rgba(34,34,34,0.9)` bar; mobile hamburger with `aria-expanded`
- [ ] `Hero.tsx` — full-bleed photo (`picsum seed tripquest-hero`)
      + `rgba(4,9,30,0.4)` overlay; left: eyebrow + uppercase h1
      "Magical Travel" (60px → responsive) + blurb + yellow "Get
      Started" (hover `#222`)
- [ ] `BookingWidget.tsx` — white card; tab strip Flights / Hotels /
      Holidays (active white, inactive `rgba(255,255,255,0.25)`);
      React-state tab switching; per-tab 6 square inputs (From, To,
      Start, Return, Adults, Child) + yellow uppercase submit
- [ ] `PopularDestinations.tsx` — centered title; 3 cards
      (Mountain River/Paraguay $150, Dream City/Paris $250, Cloud
      Mountain/Sri Lanka $350); hover: `rgba(4,9,30,0.4)` overlay +
      yellow price badge fade-in
- [ ] `PricePackages.tsx` — cover-image section bg (`tripquest-price-
      bg`); 3 white cards (Cheap / Luxury / Camping Packages), h4
      with 1px `#f8b600` underline; 6 destination rows each with
      light price pill (`#f9f9ff`/`#eee`, `$1500` pattern; Thailand
      spelled correctly)
- [ ] `OtherIssues.tsx` — centered title; 4-up cards (Rent a Car,
      Cruise Booking, To Do List, Food Features): image thumb with
      hover zoom, h4, grey blurb
- [ ] `Testimonials.tsx` — `#f9f9ff` band; slider of white cards:
      circular avatar left, quote, name, star row (lucide Star);
      arrows/autoplay via React state; 1-up on mobile
- [ ] `CustomPackageCta.tsx` — split band: dark left (stacked headline
      "Did not find your Package? / Feel free to ask us. We'll make
      it for you" + blurb + yellow "Request Custom Price"); full-bleed
      photo right (`tripquest-cta`); stacks on mobile
- [ ] `BlogCarousel.tsx` — centered title; post cards (image
      `tripquest-blog-<n>`, tag chips Travel/Life Style, h4 title,
      excerpt, date); React-state carousel; 1-up on mobile
- [ ] `Footer.tsx` — `#04091e` bg; About Agency / Navigation Links
      (2 cols) / Newsletter (input + yellow submit) / InstaFeed
      (4-image grid `tripquest-insta-<n>`); bottom bar: copyright +
      "Component Dock" link to `https://www.componentdock.com/` +
      social icons

## Tests (TDD — red first, 100% coverage)

- [ ] Per-component tests mirroring the spec's Gherkin scenarios
      (query by role/text; `user-event` for tabs, dropdowns, hamburger,
      sliders)
- [ ] Navbar: scrolled state, dropdown open/close, mobile toggle
      (`aria-expanded`)
- [ ] BookingWidget: tab switching swaps form + submit label
- [ ] Destination hover reveals overlay + price badge
- [ ] Footer contains the Component Dock link; no `colorlib` string
      anywhere in the app (grep gate)

## Verification

- [ ] `npm run test:coverage` — 100% lines/functions/branches/statements
- [ ] `bash scripts/verify-app.sh tripquest` passes (typecheck + lint +
      knip + fallow + tests + build)
- [ ] Visual pass against the preview/screenshot: section order, yellow
      `#f8b600` CTAs, square buttons, Poppins, `#04091e` footer
- [ ] Implementer flow: mark TEMPLATES.md line 3003 `[~]` when starting,
      `[x]` + surge URL + homepage + `npm run readme:status` when done
