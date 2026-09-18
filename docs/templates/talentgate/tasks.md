# TalentGate (ColorLib Jobportal) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-talentgate`. Recreation name: **TalentGate** (NEW
> name — the ColorLib source keeps its name "Jobportal").

## Source mapping

- **ColorLib item:** "Jobportal" (TEMPLATES.md line 1538).
  The `wp/template/jobportal/` slug appears exactly ONCE in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/jobportal/
- **Preview URL:** https://preview.colorlib.com/theme/jobportal/ (51,971 bytes
  HTML, verified 2026-09-19 by direct fetch).
- **Preview CSS:** `css/style.css` (71,587 bytes — the main template stylesheet)
  - Bootstrap 4. Fonts: "Work Sans" (primary), "Nunito Sans" (secondary).
    Icons: Font Awesome (replace with lucide-react).

## Reference research (done — do not redo)

### Live preview DOM structure (verified 2026-09-19)

Section order from the HTML:

1. **Navbar** — `<nav class="navbar navbar-expand-lg navbar-dark ftco-navbar
bg-dark">`. Dark bg, "Jobportal" brand, "Post a Job" (outline) and "Want
   a Job" (colored) CTAs. Collapses on mobile.
2. **Hero** — `<div class="hero-wrap js-fullheight">` with `background-image:
url('images/bg_2.jpg')` and overlay div. Contains counter text ("We have
   850,000 great job offers") and h1 "Your Dream Job is Waiting".
3. **Search tabs** — `<div class="ftco-search">` with nav-pills tabs
   ("Find Job" / "Find Candidate"). Each tab has form fields (keyword,
   location, job type/category). Tab pills are white text on dark bg, active
   tab switches to dark text on white bg.
4. **Services** — `<section class="ftco-section services-section bg-light">`.
   Four `.col-md-3` cards each with blue icon, title, description. Cards:
   "Easy To Manage Jobs", "Search Expert Candidates", plus two more.
5. **Job posts / Top Careers** — `<section class="ftco-section bg-light">`
   with heading "Current Job Posts". Contains `.job-post-item` cards: job
   title + type badge, company + location info, "Apply Job" btn-primary +
   heart btn-secondary (circular). Lists: "Frontend Development" (Partime),
   "Full Stack Developer", "Open Source Interactive Developer".
6. **Stats counter** — `<section class="ftco-section ftco-counter img">` with
   `background-image: url(images/bg_1.jpg)` parallax. Four counter items:
   number (34px white bold) + label (18px rgba white).
7. **Testimonials** — `<section class="ftco-section testimony-section">`.
   Heading "Happy Clients". Owl Carousel with `.testimony-wrap` items: circular
   user-img, quote icon, name + description. 3 testimonials.
8. **Blog** — `<section class="ftco-section bg-light">` with heading
   "Recent Blog". Four `.blog-entry` cards with `.block-20` thumbnail
   (250px height), date + author meta, heading + paragraph.
9. **Newsletter** — `<section class="ftco-section-parallax">` with parallax
   background. Heading "Subscribe to our Newsletter", email input + green
   subscribe button (`#5dd28e`).
10. **Footer** — `<footer class="ftco-footer ftco-bg-dark ftco-section">`.
    Dark bg (`#222831`). Three columns: About (text + social icons),
    Employers (link list), Workers (link list). Component Dock link.

### Design tokens (from css/style.css, 71,587 bytes)

- **Brand blue:** `#157efb` — service icons, nav active, accents (24 occurrences)
- **Brand green:** `#5dd28e` — subscribe button, badges (8 occurrences)
- **Cyan accent:** `#78d5ef` — hover states (11 occurrences)
- **Dark overlay:** `#3c312e` — hero overlay, ftco-bg-dark sections
- **Footer bg:** `#222831`
- **Light bg:** `#f8f9fa` (Bootstrap `.bg-light`)
- **Primary font:** `"Work Sans"` (3 occurrences, main font stack)
- **Secondary font:** `"Nunito Sans"` (1 occurrence, subheading class)
- **Border radius:** `0` on tabs and subscribe input (sharp corners)
- **Subscribe button:** `#5dd28e` green, white text, `border-radius: 0px 5px 5px 0px`
- **Counter numbers:** `font-size: 34px; font-weight: 600; color: #fff`
- **Section padding:** `7em 0` (standard), `6em 0` (mobile)

### Screenshot visual design

The TEMPLATES.md screenshot shows:

- Dark hero with large white headline text over a parallax background image
- Tabbed search form with white pill tabs on a dark overlay
- Light gray services section with four icon cards
- White job listing cards with blue CTA buttons
- Parallax stats counter on a dark background
- Testimonial carousel with circular avatars
- Blog grid on light background
- Newsletter section on dark parallax background
- Dark blue-gray footer with columns

## Implementation task breakdown

### Phase 1: Scaffold & shared setup

- [ ] Copy simplest existing app as template, rename package to
      `@free-react-templates/talentgate`
- [ ] Set `public/CNAME` to `talentgate.free.componentdock.com`
- [ ] Set `homepage` in package.json to `https://talentgate.free.componentdock.com`
- [ ] Register workspace and run `npm install` at repo root

### Phase 2: Design tokens & global styles

- [ ] Add Google Fonts link for "Work Sans" (400, 500, 600, 700) and
      "Nunito Sans" (400, 600) in `index.html`
- [ ] Define Tailwind theme tokens in `src/index.css`: - `--color-brand-blue: #157efb` - `--color-brand-green: #5dd28e` - `--color-brand-cyan: #78d5ef` - `--color-dark-overlay: #3c312e` - `--color-footer: #222831`
- [ ] Set font-family to Work Sans in theme config

### Phase 3: Components (section-by-section)

- [ ] `Navbar.tsx` — dark navbar with brand text, "Post a Job" and "Want a Job"
      CTAs, responsive collapse
- [ ] `Hero.tsx` — full-height hero with picsum background, overlay, headline,
      counter text
- [ ] `SearchTabs.tsx` — tabbed search form (Find Job / Find Candidate) with
      form fields and icons
- [ ] `Services.tsx` — four service cards with lucide icons, bg-light
- [ ] `JobListings.tsx` — job post cards with title, badge, company, location,
      apply button, favorite button
- [ ] `StatsCounter.tsx` — four stat items on parallax background
- [ ] `Testimonials.tsx` — carousel of testimonial cards with user photos
- [ ] `BlogGrid.tsx` — four blog cards with images, meta, heading, excerpt
- [ ] `Newsletter.tsx` — parallax section with email input + subscribe button
- [ ] `Footer.tsx` — dark footer with three columns, social links,
      Component Dock link

### Phase 4: Compose & verify

- [ ] Compose all sections in `App.tsx` in correct order
- [ ] Write tests for each component (Vitest + RTL)
- [ ] Achieve 100% test coverage
- [ ] Run `scripts/verify-app.sh talentgate`
- [ ] Commit as `feat: add TalentGate (ColorLib Jobportal) template`
- [ ] Open PR, merge, deploy

## Fidelity notes

- **Color match:** Use `#157efb` as primary brand (not Tailwind's default blue).
  Use `#5dd28e` for subscribe/CTA accents.
- **Font match:** "Work Sans" is the primary font (not Poppins or Inter). Load
  via Google Fonts `<link>`.
- **Hero:** Use `picsum.photos/seed/talentgate-bg/1920/1080` for the background
  image with a dark overlay div (`bg-dark-overlay/70`).
- **Tab styling:** The search tabs use sharp corners (radius 0), white text on
  transparent bg, active tab has dark text on white bg. Tailwind: use custom
  border-radius and conditional bg/text colors.
- **Stats counter:** Use `IntersectionObserver` to trigger count-up animation.
  Four stats: Happy Clients, Total Jobs, Job Seekers, Employers.
- **Testimonials:** Can use a simple CSS carousel or implement a lightweight
  auto-rotating component (no Owl Carousel dependency).
- **Blog:** Use `picsum.photos/seed/talentgate-blog-{1-4}/400/250` for
  thumbnails.
- **Newsletter subscribe:** Green button (`#5dd28e`) on the right side of
  the input, sharp corners (radius 0 on input, slight radius on button).
- **Footer:** Three columns matching the original: About + social icons,
  Employers links, Workers links. Dark bg `#222831`. Component Dock link
  replaces any original attribution.
