# Juris (ColorLib Lawyerlegal) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-juris`.

## Design notes (replication findings)

- **Original:** ColorLib "Lawyerlegal" — classic, authoritative LAW FIRM
  one-pager (source: https://colorlib.com/wp/template/lawyerlegal/, Bootstrap
  5 category, `<title>Lawyer | Template</title>`). TEMPLATES.md has TWO copies
  of this item (lines 599, 2127 — mark ALL when done).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/lawyerlegal/
  (HTTP 200, ~29 KB HTML; `assets/css/style.css` ~72 KB parsed for tokens).
  Stack is jQuery + Bootstrap 5 + Owl Carousel (hero + testimonials) + Slick
  (brand strip) + NiceSelect + SlickNav — recreate all interactivity
  client-side in React.
- **Screenshot:** `lawyerlegal-free-template.jpg` (1200×946, viewed in
  browser) — thin dark top strip (contact + socials), white nav row ("LAWYER"
  wordmark + scales icon; Home, Practice Area, About, Blog, Contact; red
  "Make An Appointment" button), hero photo of a stone philosopher bust
  against floor-to-ceiling bookshelves with a dark left-side gradient
  overlay, white serif headline + lorem + flat CTA; white two-column about
  row with an arch-cropped professional portrait; flat rectangular buttons;
  elegant serif headings (Baskervville); red/white/near-black palette.
- **New name:** Juris (Latin for law — fits the legal theme). Single
  lowercase word, no collision with `apps/` or existing spec folders. NOT
  "lawyerlegal" — never reuse the source name.
- **Visual design (DOM + CSS tokens + screenshot):** BRICK RED `#B40000`
  brand (`.btn`, `.boxed-btn`, `#back-top`, `.img-cap` badge, `.form-wrapper`
  bg, nav hover + 3px underline sweep, `.btn_2` outline, "Why Choose Us?"
  h2) + ORANGE `#FF6F00` accent (`.submit-btn` bg, `.btn::before` hover
  sweep, bold text) on white/`#F8F4F4` canvas with near-black `#2D0000`
  headings + footer (header-top `#2e0000`). Headings "Baskervville" serif;
  body "Roboto" 300. All buttons radius 0 (flat). Distinctive: form panel
  radius `0 140px 0 0`; about portrait radius `140px 0 0 0`; red experience
  badge (white 76px 900 number) bottom-right of portrait; pill form inputs
  (25px radius, `#eaeaea` border); CTA band `#EFE2E2` with soft shadow.

## Structure (1:1, section order — from the live DOM)

1. **Header** (`div.header-area > .main-header`):
   - `header-top` (bg `#2e0000`): left phone "+1 (78) 673 3567" + email
     (white 14px, faint white dividers); right social icons.
   - `header-bottom.header-sticky` (white, sticky): logo "Juris" (scales
     icon) left; nav Home, Practice Area, About, Blog (submenu: Blog
     Details, Elements), Contact (Roboto 18px `#2D0000`, hover `#B40000` +
     3px underline sweep); right `a.btn_2` "Make An Appointment" +
     `a.header-btn2` "Call Us: <span>+1 (78) 673 3567</span>" (dotted
     `#B40000` underline span).
   - `mobile_menu` — hamburger for <lg (client-side toggle, `aria-expanded`).
2. **Hero** (`section.slider-area`, bg `#F8F4F4`) — full-width photo
   (philosopher bust + bookshelves) + `.hero-overly` left→right black
   gradient (`#000` → transparent), 750px cover; `hero-caption`: h1
   "Special Approach Dedicated Attorney" (white Baskervville 70px 400), p
   lorem (white 22px 300), `a.btn_1` "Our Practice Area" (white bg,
   `#B40000` text). NOTE: the CSS has a hero eyebrow pill (white bg,
   radius 17px) but the rendered caption has NO span — omit it.
3. **About** (`section.about-low-area.section-padding`, white) — left:
   portrait `border-radius:140px 0 0 0` + `.img-cap` badge (`#B40000`,
   "15" white 76px 900 + "Years of experience", absolute bottom-right);
   right (`padding-top:80px`): h2 "Why You Need the Top Lawyers in
   O'Renders" (46px 400 `#2D0000`), p lorem, signature block ("Reuben
   Sandwich — CEO of Colorlib" → paraphrase), `a.browse-btn` "Read More"
   (2px `#B40000` underline).
4. **Practice areas** (`div.our-practice-area.section-bg.section-padding`,
   bg `#F8F4F4`) — centered h2 "Our Practice Area"; 2×2 grid of 4
   `single-services1` white cards (icon + h3 + p blurb `#66816A` 20px):
   Family Law / Corporate Law / Acidental Law / Finance Law; right column
   `div.form-wrapper` (bg `#B40000`, radius `0 140px 0 0`, padding
   44px 60px): h2 "Get Free Quote" (white 38px 600) + p; form: "Your
   name", "Email" (pill inputs), select Family Law (+1–3), "Message"
   textarea, `button.submit-btn` "Send Message" (orange full width, hover
   → white sweep, text turns `#B40000`).
5. **Brands** (`div.brand-area.border-top`) — 6 `single-brand` marks
   (demo repeats `brand1.png` — VARY: six text/logo marks), pt-50 pb-40.
6. **Testimonials** (`div.testimonial-area.testimonial-padding.section-img-
bg2`, dark photo bg cover) — carousel of 2 `single-testimonial`:
   `testimonial-top-cap`: h2 "What Client Says" + big quote; founder row:
   photo + "Jacson Kalish" + "Legal law Supporter" (VARY second).
7. **Recent News** (`div.services-area.section-padding`, white) — centered
   h2 "Recent News"; 2 `single-services` cards: photo + eyebrow span
   ("Tax I Information") + h3 title (24px 400) + p + `browse-btn` "Read
   More" (VARY second card).
8. **CTA band** (`section.wantToWork-area` > `div.want-wrapper`, bg
   `#EFE2E2`, `padding:20px 36px 10px 50px`, `box-shadow:0px 20px 30px
rgba(0,0,0,0.06)`) — left: h2 "Why Choose Us?" (Roboto `#B40000` 24px
   400), quote p (24px `#2D0000`), lorem p, `a.btn` "Learn More" (big
   red); right `contact-now`: span "Call For a Free Consulting" + phone
   button "(89) 673 378-309".
9. **Footer** (`div.footer-wrappper`, bg `#2D0000`) — centered: `footer-
logo`, `footer-pera` lorem (text `#AC9191`), `footer-menu` (Home,
   Practice Area, About, Blog, Contact); `footer-bottom-area`: 1px
   `rgba(255,255,255,0.2)` top/bottom borders, copyright bar — Colorlib
   credit REPLACED with **Component Dock link**
   (https://www.componentdock.com/).
10. **Back to top** (`div#back-top`) — fixed circular button (50×50,
    bg `#B40000`, white arrow, radius 50%, bottom-right), smooth scroll.

## Todo (implementation order)

- [ ] `npm run spec:validate` passes (spec: `openspec/specs/template-juris/`)
- [ ] Scaffold `apps/juris` (copy simplest existing app; package
      `@free-react-templates/juris`; `public/CNAME` =
      `juris.free.componentdock.com`; homepage
      `https://juris.free.componentdock.com`); run `npm install` at
      root and verify lockfile registration
- [ ] `src/index.css`: `@theme` tokens — brand `#B40000`, accent `#FF6F00`,
      ink `#2D0000`, header-top `#2e0000`, body-text `#6B5A5A`,
      section-bg `#F8F4F4`, cta-bg `#EFE2E2`, footer-muted `#AC9191`,
      card-blurb `#66816A`; Baskervville + Roboto Google Fonts `<link>` in
      index.html
- [ ] `Header` — dark top bar (phone/email + socials) + sticky white nav
      (logo + menu + Make An Appointment btn_2 + Call Us dotted link) +
      mobile hamburger toggle
- [ ] `Hero` — full-width law photo + left→right black gradient overlay
      (h1, lorem, white "Our Practice Area" button)
- [ ] `About` — arch-cropped portrait + red "15 Years of experience" badge,
      heading, lorem, signature block, Read More link
- [ ] `PracticeAreas` — `#F8F4F4` band, 2×2 white icon cards (Family /
      Corporate / Accidental / Finance Law)
- [ ] `QuoteForm` — red panel (`0 140px 0 0` corner), pill inputs + select + textarea, orange Send Message; zod validation + success state
- [ ] `BrandStrip` — 6 varied logo marks on a top border
- [ ] `Testimonials` — dark photo bg carousel (quote + founder photo/name/
      role), client-side cycling
- [ ] `RecentNews` — 2 photo cards (eyebrow + title + blurb + Read More)
- [ ] `CtaBand` — `#EFE2E2` shadow band (Why Choose Us + Learn More +
      Call For a Free Consulting phone CTA)
- [ ] `Footer` — dark centered logo/blurb/menu + copyright bar with
      Component Dock link + circular back-to-top button
- [ ] Tests per section (100% coverage) → `scripts/verify-app.sh juris`
- [ ] PR `feat/template-juris` → merge immediately; TEMPLATES.md rows
      599 + 2127 → `[x]` + surge URL + readme:status
