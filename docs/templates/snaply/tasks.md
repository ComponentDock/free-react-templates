# Snaply (ColorLib Photosen) — Tasks & Design Notes

> Recreation of ColorLib "Photosen" — free Bootstrap 5 photography-portfolio
> template (https://colorlib.com/wp/template/photosen/) under the NEW name
> **Snaply** ("snap" = take a photograph — a semantic echo of the source's
> purpose without reusing its name; single lowercase word, no collision with
> `apps/`, `openspec/specs/` or `docs/templates/` — verified 2026-08-14),
> per the monorepo naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Photosen" — page title "Photosen - Photography
  Portfolio". TEMPLATES.md category: **Bootstrap 5 (89)**, first occurrence
  at line 618 (`- [ ]`, source NOT shipped anywhere). DUP-ROW TRAP: the
  `photosen` slug also appears at lines 2466 (Photography 49) and 2544
  (Portfolio 89) — all `- [ ]` rows of the same template; ONE implementation
  covers all three rows (mark all `[x]` at bookkeeping). The recreation
  brands itself **Snaply**.
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/photosen/` (HTTP 200, ~9.4 KB HTML +
  `css/style.css` ~298 KB; the preview is REACHABLE). Screenshot
  `photosen-free-template.jpg` (1200×946, viewed in browser) matches the
  live DOM 1:1 (screenshot nav shows BLOG where live shows SERVICES — follow
  the LIVE DOM).
- **Visual design:** stark minimalist black page. White geometric brand
  "Photosen" top-left; small uppercase white nav links centered (HOME active
  in blue `#0d6efd`) + 4 white social icons right; below, a full-width
  3-column grid of near-square GRAYSCALE photos with thin white gutters;
  every photo carries a centered white category label (Nature / Portrait /
  People / Architecture / Animals / Sports / Travel) over a small square
  ghost "MORE PHOTOS" button; hover reveals color + slight zoom + dark
  overlay; single centered muted footer line. No hero, no CTA band, no
  newsletter — just navbar + grid + footer.
- **Section order (1:1, verified from live DOM):**
  1. Off-canvas mobile menu (`div.site-mobile-menu`): white 300px right
     drawer (`transform: translateX(110%)` closed, shadow
     `-10px 0 20px -10px rgba(0,0,0,0.1)`, z-index 2000) — close toggler +
     body cloned from `ul.js-clone-nav` (the 5 nav links + dropdown).
  2. Navbar (`header.site-navbar.py-3`, transparent, z-index 9):
     brand `h1.mb-0 > a.text-white.h2.mb-0` "Snaply" (white, 2rem); centered
     `ul.site-menu` — HOME (`li.active`), GALLERY (`li.has-children` →
     dropdown: Nature / Portrait / People / Architecture / Animals / Sports
     / Travel / Sub Menu > Menu One·Two·Three), SERVICES, ABOUT, CONTACT
     (uppercase, 12px, letter-spacing 0.1em, `rgba(255,255,255,0.5)`,
     padding 10px 10px, hover + active `#0d6efd`); right: 4 social icons
     (Facebook / Twitter / Instagram / YouTube) + hamburger
     `site-menu-toggle` (d-xl-none).
  3. Gallery (`div.container-fluid`): `div.row` of NINE `div.col-lg-4`
     cards, each `div.image-wrap-2` (`overflow: hidden; position: relative;
margin-bottom: 30px`) = `img.img-fluid` (~900×874 source, grayscale by
     default) + `div.image-info` (absolute center, z-index 2) with
     `h2.mb-3` white title (2rem, weight 500) + `a.btn.btn-outline-white
.py-2.px-4` "More Photos". Hover: img → grayscale(0) + scale(1.01),
     `:before` overlay → `rgba(0,0,0,0.4)`. Title order: **Nature,
     Portrait, People, Architecture, Animals, Sports, Travel, People,
     Architecture** (images 3+4 reused).
  4. Footer (`div.footer.py-4`): `container-fluid.text-center` — copyright
     line + heart icon + credit link (Colorlib → Component Dock).
- **Design tokens (extracted + computed):**
  - page bg **`#000`**, body text **`#777`** (weight 300, line-height 1.7,
    1rem), brand/overlay **`#fff`**, accent **`#0d6efd`** (nav hover/active)
  - fonts: template loads Josefin Sans 400;700 + Roboto Mono 400;700 but
    NEVER applies them (computed = system-ui stack). Use Josefin Sans for
    brand + overlay headings (the template's evident intent, matches the
    screenshot's serif-flavored brand), system stack for body
  - buttons: square (radius 0), `border: 2px solid #fff`, white uppercase
    11px text, letter-spacing 0.1em, padding 8px 24px
  - image hover: grayscale→color + scale 1.01 + `rgba(0,0,0,0.4)` overlay

## Implementation tasks (for the implementer)

- [ ] Scaffold `apps/snaply` from the simplest existing app (rename package
      to `@free-react-templates/snaply`; register the workspace in
      package-lock.json via `npm install --package-lock-only`); `public/CNAME`
      = `snaply.free.componentdock.com`, `"homepage"` =
      `https://snaply.free.componentdock.com`
- [ ] `index.html`: Google Fonts `<link>` for Josefin Sans 400;700; title
      "Snaply — Photography Portfolio"
- [ ] `src/index.css` `@theme`: `--color-brand: #0d6efd` (accent),
      `--color-ink: #000`, `--color-body: #777`, `--color-frost: #fff`;
      body: black bg, `#777` text, weight 300, line-height 1.7
- [ ] Navbar component: transparent header, brand left (Josefin, white
      2rem), centered uppercase 12px links (HOME active blue / GALLERY
      dropdown with 7 categories + nested submenu / SERVICES / ABOUT /
      CONTACT), 4 inline-SVG social icons right, hamburger on mobile
- [ ] Mobile drawer: white 300px right off-canvas (translateX + transition),
      close button, nav links cloned/duplicated, `aria-hidden` handling
- [ ] Gallery grid: 9 cards (data array in `src/data.ts`: title + seed),
      3-col responsive (`grid-cols-1 md:grid-cols-2 lg:grid-cols-3`,
      gap/`mb-7.5` ≈ 30px), square picsum seeds
      `https://picsum.photos/seed/snaply-<n>/800/800`
- [ ] Card hover behavior: grayscale → color, `scale-[1.01]`, overlay
      `bg-black/40` fade-in; center the white title + "More Photos" ghost
      button (square, `border-2 border-white`, uppercase 11px tracking
      `0.1em`, `px-4 py-2`)
- [ ] Footer: centered muted line "© 2026 Snaply — All rights reserved |
      Made with ♥ by [Component Dock](https://www.componentdock.com/)"
- [ ] Tests (Vitest + Testing Library, 100% coverage): nav links + active
      state, dropdown items, mobile drawer open/close, 9 gallery cards in
      order, hover overlay classes, footer Component Dock link href,
      responsive class assertions
- [ ] Run `scripts/verify-app.sh snaply` until green; commit as
      `feat: implement Snaply (ColorLib Photosen) recreation`; PR + immediate
      squash merge; bookkeeping: `[x]` on ALL THREE dup rows (lines 618 /
      2466 / 2544) + `npm run readme:status` + surge deploy
- [ ] See skill `colorlib-template-replication` for the fidelity process and
      every pitfall below

## Pitfalls (from the skill + this prep)

- **Grayscale is the default state, not hover:** cards are B&W at rest and
  colorize on hover — the exact opposite of most gallery templates. Get the
  `grayscale → grayscale-0` transition direction right or the visual QA
  fails.
- **Tailwind v4 filter + transform order:** hover scale + grayscale can be
  combined as `hover:grayscale-0 hover:scale-[1.01] transition`; if the
  overlay uses a `:before`-style pseudo-element, prefer an absolutely
  positioned child `div` (simpler in React) with `bg-black/0 hover:bg-black/40`
  and `transition-colors`.
- **No hero, no extra sections:** the whole page is navbar + grid + footer.
  Do not invent a hero or CTA — fidelity means keeping it minimal.
- **Nav duplicates in DOM:** desktop + mobile navs render duplicate links —
  query with `getAllByRole` and index the mobile one last (jsdom applies
  Tailwind CSS, so `hidden lg:flex` desktop lists are `display:none` and
  excluded from `getByRole` — use `{ hidden: true }` for desktop-only
  links).
- **Brand icons:** lucide-react removed Facebook/Twitter/Instagram/YouTube —
  use inline SVG brand icons (simple-icons paths) and probe every lucide
  icon import with `node -e "console.log(typeof require('lucide-react').X)"`.
- **tel: literals:** never write `tel:` literals in source (secret-scan
  rewrites them) — this template has no phone numbers, so none needed.
- **Decorative images:** `alt=""` on picsum placeholders is fine; tests for
  the grid should use `container.querySelectorAll('img')` (decorative imgs
  have no `img` role in Testing Library).
- **jsdom 30 has no localStorage** — only relevant if a dark-mode toggle is
  added (it is NOT part of this template — do not add one).
- **Bookkeeping rows:** three `- [ ]` rows share the `photosen` slug —
  mark all three `[x]` with the same `https://snaply.free.componentdock.com`
  URL or a later stream will re-implement the same source.
