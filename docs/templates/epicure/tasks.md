# Epicure (ColorLib Cuisines) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-epicure`. Source: ColorLib "Cuisines" — restaurant
> template (https://colorlib.com/wp/template/cuisines/). Preview:
> https://preview.colorlib.com/theme/cuisines/ (HTTP 200; 30.4 KB HTML,
> `css/style.css` 53 KB parsed).

## Design notes (replication findings)

- **Original:** ColorLib "Cuisines" — premium fine-dining restaurant
  website (Bootstrap 5 + tiny-slider + glightbox + AOS). Screenshot
  `cuisines-free-template.jpg` (1200×946, AVIF) viewed in browser: white
  fixed sidebar (logo, vertical uppercase nav, phone bottom), hero with
  deep indigo `#120078` panel + huge white uppercase headline + food
  photo right, light-grey SPECIAL OFFERS section with alternating
  image/text cells and `$9.00` green prices, dark indigo footer.
- **Visual design:** premium fine-dining editorial. Brand indigo
  `#120078` (hero panel, primary buttons, subheadings, footer bg,
  mobile-menu active links), accent green `#8bc34a` (prices, check
  list), section rhythm white → white → `#e6e6e6` → indigo footer.
  Oswald everywhere (headings uppercase; hero h1 5rem; `.heading` 3rem;
  sidebar nav uppercase weight 700; footer headings 13px bold
  letter-spacing .2rem). Poppins appears once as secondary fallback.
- **Layout quirk to preserve:** NOT a top navbar — a FIXED LEFT SIDEBAR
  (280px, white, Oswald) + main content shifted right
  (`width: calc(100% - 280px)`). On mobile the sidebar collapses to a
  right-slide off-canvas menu opened by a white burger top-right.
- **Structure (1:1, section order, home page):**
  1. Preloader (overlayer + spinner — optional, repo recreations usually
     skip).
  2. Mobile off-canvas menu (right slide-in 300px white, shadow
     `-10px 0 20px -10px rgba(0,0,0,0.1)`, close X, logo, stacked black
     links hover/active `#120078`) + burger toggle (top 20px right 20px,
     white variant over hero).
  3. Fixed left sidebar 280px: logo wordmark "EPICURE" top, 5 nav links
     (About Us / Our Menu / Special Offers / Gallery / Contact Us,
     centered, uppercase, weight 700, 2px underline animation), quick
     contact bottom ("Book A Table" caption, phone, "Mon - Sun,
     8:00AM - 11:00PM").
  4. Hero: indigo `:before` panel (70% width, z-index -1) behind intro
     (left 200px desktop / 0 mobile, margin-top 100px): h1 Oswald 5rem
     uppercase white "You don't need a silver fork to eat good food." +
     20px white subtext + white "See Our Menu" btn + white-outline
     "Special Offers" btn; absolute 900px food photo right (z-index -1).
  5. Special Offers (white): eyebrow "Offers" + h3 "Special Offers"
     (Oswald 3rem uppercase); 2 rows × 4 cells (25% each, 100% mobile),
     alternating img / white text cell (centered, padding 30px): h3 24px
     "Lorem ipsum dolor" + blurb + `$9.00` price in `#8bc34a` 20px.
  6. About (white): left — eyebrow "About Us" + "About Epicure" +
     paragraph + `ul-check` (4 items, green check icons) + indigo
     "See Our Menu" btn; right — image slider (2 images) with
     prev/next + dots (7px pills, bottom -60px).
  7. Testimonials (`#e6e6e6`): eyebrow "Testimonials" + "Happy
     Customers"; carousel of 3 centered items (square avatar, blockquote
     20px, bold name, "Customer" position); text max-width 500px.
  8. Footer (`#120078`, text `rgba(255,255,255,0.5)`, padding 7rem 0):
     About us (para + Read more), Links (Home / Our Menu / Special
     Offers / Gallery / Contact), Our Menu (Breakfast / Brunch / Dinner
     / Drinks), Opening Hours (Mon–Fri 8:00 am — 5:00pm; Sun 8:00 am —
     8:00pm); links white with 2px white underline hover; copyright bar
     → Component Dock credit (repo rule, NOT ColorLib).

## Implementation tasks

- [ ] Scaffold `apps/epicure` (copy simplest existing app, rename package
      to `@free-react-templates/epicure`, `public/CNAME` =
      `epicure.free.componentdock.com`, homepage
      `https://epicure.free.componentdock.com`); `npm install` at root
      to register the workspace in package-lock.json.
- [ ] `index.html`: title "Epicure — Cuisines Template", Google Fonts
      Oswald (400/500/700) link.
- [ ] `src/index.css`: `@theme` tokens — `--color-primary: #120078`
      (brand indigo), `--color-primary-deep: #0f0066`, `--color-accent:
    #8bc34a`, `--color-section-grey: #e6e6e6`, font Oswald.
- [ ] `src/components/Sidebar.tsx`: fixed white rail 280px — wordmark,
      5 uppercase links with animated 2px underline (active + hover),
      quick-contact block (caption / phone / hours). Mobile: hidden on
      <xl.
- [ ] `src/components/MobileMenu.tsx`: off-canvas right slide-in 300px
      (white, shadow), burger toggle (white bars), close X, stacked
      links; `aria-expanded`, Escape/backdrop close, body scroll lock.
- [ ] `src/components/Hero.tsx`: indigo panel (70% width) behind intro,
      headline, subtext, white + outline CTAs, absolute food photo right
      (picsum seed epicure-1).
- [ ] `src/components/SpecialOffers.tsx`: eyebrow + heading, 2×4 grid of
      alternating img/text cells, green `$9.00` prices.
- [ ] `src/components/About.tsx`: text column (eyebrow, heading, para,
      green-check list, indigo button) + image slider (2 picsum images,
      prev/next + dots).
- [ ] `src/components/Testimonials.tsx`: grey `#e6e6e6` bg, eyebrow +
      heading, 3-item carousel (avatar, quote, name, "Customer").
- [ ] `src/components/Footer.tsx`: indigo bg, 4 columns (About us /
      Links / Our Menu / Opening Hours), white links + underline hover,
      copyright bar with Component Dock link
      (https://www.componentdock.com/).
- [ ] `src/App.tsx` composition + `src/main.tsx` entry; MemoryStorage
      polyfill in `src/test/setup.ts` (copy from apps/cura — jsdom 30
      has no localStorage).
- [ ] Tests first (TDD) mirroring spec scenarios; 100% coverage; run
      `bash scripts/verify-app.sh epicure`.
- [ ] PR description: source (ColorLib Cuisines), preview URL, tokens
      (indigo `#120078`, green `#8bc34a`, Oswald, 280px fixed sidebar),
      what differs (wordmark, picsum placeholders, Component Dock credit,
      paraphrase, no asset copying).
- [ ] Post-merge bookkeeping: mark TEMPLATES.md Cuisines row `[x]` with
      live URL, `npm run readme:status`.

## Pitfalls / notes

- The hero image is absolutely positioned and bleeds off the right edge
  (900px wide, z-index -1) — do not wrap it in a flow container or the
  layout shifts.
- Sidebar is `position: fixed`; the main content is shifted by its
  width. On mobile the rail disappears entirely (burger + off-canvas
  only).
- Nav "underline" is a `span:after` with scaleX 0→1 transition — keep
  that micro-interaction; active link also shows it.
- No `[~]`/`[x]` markers were set by the prep stream — implementer
  claims via the usual `[~]` push on `feat/template-epicure`.
- No `colorlib` string anywhere in `apps/epicure/*` — provenance lives
  only here, TEMPLATES.md, and the PR.
