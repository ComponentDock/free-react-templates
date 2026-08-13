# Hiredly (ColorLib Joblab) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-hiredly`.

## Design notes (replication findings)

- **Original:** ColorLib "Joblab" — job board template
  (source: https://colorlib.com/wp/template/joblab/). TEMPLATES.md has TWO
  copies of this item (lines 594 and 1998 — mark ALL when done).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/joblab/
  (HTTP 200, ~94 KB HTML, `<title>Job Board</title>`). Main stylesheet
  `assets/css/style.css` (~107 KB) parsed for tokens. Stack is jQuery +
  Bootstrap 4 + owl-carousel + slicknav + nice-select — recreate all
  interactivity client-side in React.
- **Screenshot:** `joblab-colorlib-template.jpg` (1200×946, viewed in
  browser) — bright corporate job board: split hero (light-blue left with
  dark navy headline + white pill search bar; solid blue right with
  man-with-tablet photo), "Discover jobs for you" tabbed job cards with
  pastel category tags, white sections, solid-blue CTA band, light footer.
- **New name:** Hiredly ("hired" + -ly, matches Lendly/Stayly/Hoodly
  pattern). NOT "joblab" — never reuse the source name.
- **Visual design (DOM + CSS tokens + screenshot):** white canvas with
  `#007AFF` blue brand. Headings navy `#18304B` (Chivo), body Overpass.
  Buttons blue radius 5px; hero Search Job = purple→blue gradient
  (`#ca42f2 → #6a42f2 → #4294f2 → #42b5f2 → #7db9e8`), hover solid
  `#007AFF`. Light section bg `#F6F9FC`. Category chips pastel:
  orange/blue/green/indigo/pink.

## Structure (1:1, section order — from the live DOM)

1. **Header** — brand "Hiredly", nav Home/About/Job/Blog/Contact, "Join
   Now" outline button (white bg, blue border, uppercase), sticky state
   bg `#E1EEFF`, mobile hamburger.
2. **Hero (slider)** — bg `h1_hero.jpg` (picsum seed), headline
   "Searching for a job? Find the **best startup** job that fit you"
   (56px/700 `#18304B`), pill search bar: keyword input + location
   select (BD/PK/US/UK) + gradient "Search Job" button; hero-man photo
   right.
3. **Discover jobs for you** — heading + "Browse 200+ top jobs in your
   local city."; tabs: All Categories (active) / Creative & Art /
   Programming & IT / Corporate / Finance & Accounting / Medical /
   Marketing; job cards (3/row): pastel category chip + title + location +
   Full Time + company + time; hover → blue border.
4. **We help companies to find talents** — light `#F6F9FC` bg, 4 icon
   cards (lucide icons; source repeats one lorem blurb — paraphrase per
   card).
5. **Pricing** — "Choose a plan that right for your business"; Starter
   (Free) / Business ($39.00) / Premium ($59.00), Per month, "Start Now";
   white cards radius 8px.
6. **Why we are different** — light bg, 3 icon items (source repeats one
   blurb — write 3 distinct one-liners) + about image.
7. **Subscribe** — white band, top/bottom border `#f0f0ef`; h3 46px
   "Subscribe our newsletter to get updates about latest jobs", email +
   blue Subscribe button; success state on submit.
8. **CTA band** — solid `#007AFF`; "Start building your own job board
   now" (white 36px/700) + Search Job / Post a Job buttons.
9. **Footer** — brand + pera (`#4C5753`), Quick Links, For Employers, For
   Candidates; bottom bar copyright + social icons + Component Dock link
   (https://www.componentdock.com/).

## Todo (implementation order)

- [ ] `npm run spec:validate` passes (spec: `openspec/specs/template-hiredly/`)
- [ ] Scaffold `apps/hiredly` (copy simplest existing app; package
      `@free-react-templates/hiredly`; `public/CNAME` =
      `hiredly.free.componentdock.com`; homepage
      `https://hiredly.free.componentdock.com`); run `npm install` at root
      and verify lockfile registration
- [ ] `src/index.css`: `@theme` tokens — brand-blue `#007AFF`, ink
      `#18304B`, ink-dark `#071112`, light `#F6F9FC`, sticky-blue
      `#E1EEFF`, muted `#97A7AF`, footer-text `#4C5753`, 5 tag colors,
      gradient-btn; Chivo + Overpass `<link>` in index.html
- [ ] `Navbar` — brand, links, Join Now, mobile hamburger (aria-expanded)
- [ ] `Hero` — headline + pill search bar (keyword, location select,
      Search Job → success state) + hero image
- [ ] `JobListings` — tabs + 6 job cards per pane (category chip, title,
      location, Full Time, company, time; hover border)
- [ ] `Services` — 4 icon cards
- [ ] `Pricing` — 3 plan cards + Start Now
- [ ] `WhyDifferent` — 3 icon items + image
- [ ] `Subscribe` — email + Subscribe button → success state
- [ ] `CtaBand` — blue band + Search Job / Post a Job
- [ ] `Footer` — 4 columns + copyright + Component Dock link + social
      icons
- [ ] Tests per section (100% coverage) → `scripts/verify-app.sh hiredly`
- [ ] PR `feat/template-hiredly` → merge immediately; TEMPLATES.md rows
      594 + 1998 → `[x]` + surge URL + readme:status
