# Novelist (ColorLib Mellisa) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-novelist`.

## Design notes (replication findings)

- **Original:** ColorLib "Mellisa" — editorial, literary ONE-PAGE AUTHOR
  PORTFOLIO (page title "Mellisa - Free Bootstrap 5 Template by Colorlib";
  source: https://colorlib.com/wp/template/mellisa/, appears 3× in
  TEMPLATES.md — line 605 (Bootstrap 5), 2340 (One Page), 2408 (Personal);
  mark ALL `[x]` when done).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/mellisa/
  (HTTP 200, ~64 KB HTML; `css/style.css` ~62 KB parsed for tokens). Stack:
  Bootstrap 5 + tiny-slider (testimonial) + glightbox + aos + countup + Font
  Awesome / ionicons / flaticon — recreate ALL interactivity client-side in
  React.
- **Screenshot:** `mellisa-colorlib-template.jpg` (1200×946 AVIF, viewed in
  browser) + live-preview visual: TOP AMBER band (black "MB" logo box, white
  uppercase nav links HOME/ABOUT/BOOKS/NEWS/CONTACT); giant BLACK serif name
  "Mellisa Berlusconi" directly over a dark wood desk flat-lay photo (black
  book "READ THIS IF YOU WANT TO TAKE GREAT PHOTOGRAPHS", ruler, succulent,
  keyboard edge); below: stark white intro section with the italic quote +
  ORANGE circular pulsing play button. The amber `#ffa62b` hero overlay sits
  at `z-index: -1` (behind the photo) — the dark photo dominates the hero;
  don't tint the hero amber.
- **New name:** Novelist (a writer of novels — the persona of the template).
  Single lowercase word, no collision with `apps/` or existing spec folders.
  NOT "mellisa" — never reuse the source name.
- **Visual design (DOM + CSS tokens + screenshot):** BRAND AMBER `#ffa62b`
  (navbar strip, CTA band, pulsing intro play circle, primary button fill,
  footer logo) + INK `#111111` (giant hero name, navbar brand, darken button
  fill, counter overlay at .9 opacity over photo) + `#f8f8f8` body + `#f8f9fa`
  light sections (testimonials, blog) + `#161616` footer with
  `rgba(255,255,255,.5)` text. Three fonts: Playfair Display (hero 11vw 700,
  headings, brand 800), Poppins (body 17px, nav, buttons), EB Garamond
  (italic quote accent). Nav links: 16px 600 uppercase letter-spacing 4px,
  `rgba(0,0,0,.7)`; active `#000`. Buttons: primary = amber fill + BLACK
  text, hover → transparent/amber; darken = ink fill + white text, hover →
  transparent/ink.
- **Section rhythm:** amber navbar → dark photo hero → white intro (play +
  quote) → about split (portrait + pitch + amber button) → books grid (8
  covers) → dark counter band (4 stats) → light testimonials carousel →
  light blog grid (8 cards) → contact (details + form + Follow me here
  socials) → AMBER CTA band → dark footer.

## Implementation tasks (order)

1. Scaffold app: `cp -r apps/<simplest-existing-app> apps/novelist`, rename
   package to `@free-react-templates/novelist` in package.json + lockfile
   (`npm install --package-lock-only`), set `public/CNAME` =
   `novelist.free.componentdock.com` + `"homepage"` =
   `https://novelist.free.componentdock.com`.
2. `src/index.css`: `@theme` tokens — `--color-amber: #ffa62b`,
   `--color-ink: #111111`, `--color-canvas: #f8f8f8`, `--color-soft: #f8f9fa`,
   `--color-inkfooter: #161616`; keep `injectUiSource()` in vite.config.ts.
3. `index.html`: Google Fonts `<link>` — Playfair Display 400/700/800,
   Poppins 400/600, EB Garamond 400 (italic).
4. `src/data.ts`: nav links, hero (sub-headline, name), quote, about (title,
   copy), 8 book titles (varied), 4 stats (number + caption + lucide icon),
   2 testimonial slides (quote + author), 8 blog posts (title, date,
   comments), contact details (address/email/phone — phone as spaced display
   string, NO literal `tel:` URI), social links (FACEBOOK/TWITTER/INSTAGRAM/
   DRIBBBLE + footer social icons).
5. Components (TDD, one per section):
   - `Navbar.tsx` — MB brand box + 5 uppercase links, amber strip, mobile
     "Menu" collapse (`aria-expanded`).
   - `Hero.tsx` — full-height dark picsum hero (`novelist-hero` seed), fixed
     attachment feel, serif sub-headline + 11vw Playfair ink name.
   - `Intro.tsx` — 80px amber pulsing play circle + italic quote.
   - `About.tsx` — portrait + heading + copy + amber "See More Works" button.
   - `Books.tsx` — "Books that I've Written" + responsive 8-card grid.
   - `Stats.tsx` — dark overlay band, kicker "GREAT REVIEWS FOR OUR
     SERVICES", "Technical Statistics", 4 counters (countup optional,
     client-side).
   - `Testimonials.tsx` — light bg, "Our Happy Readers", carousel ≥2 slides +
     pagination (plain React state).
   - `Blog.tsx` — light bg, "Recent From Blog", 8 cards (image, date,
     comments link, title).
   - `Contact.tsx` — "Contact us" + details + Name/Email/Subject/message form
     (client-side validation + success state, no navigation) + "Follow me
     here" text links.
   - `CtaBand.tsx` — amber bg, "You want to read my book?" + ink "Contact Me".
   - `Footer.tsx` — `#161616`: MB logo + blurb + social icons, Category
     column (Novels/Fiction/Arts/Fantasy), "Have a Questions?" column,
     copyright bar with Component Dock link.
6. `App.tsx` composes sections in the 1:1 DOM order.
7. Gate: `scripts/verify-app.sh novelist` (typecheck + lint + knip + fallow +
   100% coverage + build).
8. PR → squash merge → bookkeeping: TEMPLATES.md ALL THREE mellisa rows
   `[x]` + surge URL + `npm run readme:status`.
