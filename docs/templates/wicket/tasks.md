# Wicket (ColorLib Modal 19) — Tasks & Design Notes

> Prep artifacts prepared on `main`. Recreation name: **Wicket** (NEW name —
> the ColorLib source keeps its name "Modal 19"). Implementation ships on
> `feat/template-wicket` per the standard PR flow.

## Design notes

- **Original:** ColorLib "Modal 19" — free single-page product-promo modal
  component template (source: https://colorlib.com/wp/template/modal-19/).
  TEMPLATES.md row: line 818 (**Bootstrap Modals (20)**, header line 798).
  The `modal-19` slug appears exactly once (no dup rows to mark).
- **Live preview DOM analyzed (REACHABLE, verified 2026-08-16):** the default
  `https://preview.colorlib.com/theme/modal-19/` returns **404** — the REAL
  preview is `https://preview.colorlib.com/theme/bootstrap/modal-19/`
  (HTTP 200, 18.3KB HTML; the Bootstrap UI-component series lives under the
  `/theme/bootstrap/` prefix). Stylesheets: `css/bootstrap.min.css`
  (178.1KB — Bootstrap 4.3.1), `css/style.css` (**3.7KB — THE full custom
  token source**; unlike Modal 01–18 whose style.css bundles all of
  Bootstrap, the custom styles here live in a small separate file — read it
  entirely), `fonts/icomoon/style.css` (79.8KB — glyphs: `icon-share`
  \f064, `icon-star` \f005, `icon-heart` \f004, `icon-chat` \e0b7,
  `icon-add` \e145). Roboto (300) cf-fonts blocks in the head; **Poppins +
  Source Serif Pro also load but are UNUSED by this template's CSS** (dead
  series-shared includes — skip them). `js/main.js` (59 bytes): ONLY a
  commented-out `$('#exampleModalCenter').modal()` — dead code; the modal
  opens purely via the launch button's `data-toggle`. Screenshot
  (`modal-19.jpg`, 1200×972) browser-verified 2026-08-16: modal OPEN over a
  gray backdrop — 7px-rounded `#efefef` card split ~50/50: LEFT dark
  bike-photo panel with white "$2000" top-left (the CSS gives the label NO
  background — the dark "tag" is the photo's own shadowed corner); RIGHT
  content panel: faint share glyph top-right, black "Grand Prix 4000" with
  thin centered underline, four gold stars + one gray, small gray
  description, social row (red heart 25 / blue chat 10 / blue add 55).
- **QUIRK — heading says "Modal #9":** the live `<title>` AND launch `<h3>`
  both say "Modal #9" (the series pasted Modal 09's markup into the 19
  slot). It's only a demo label — use the new brand name "Wicket" (like
  Portico/Gateway rename theirs). Do NOT copy the typo.
- **Structure observed (1:1):**
  - Launch: `div.container.content` (`.content { height: 100vh }`) →
    `div.row.align-items-center.content` → `div.col-12.text-center`:
    `h3.mb-4` "Modal #9" + `button.btn.btn-secondary.px-4.py-3` "Launch
    modal" (Bootstrap secondary `#6c757d`, white text, custom 4px radius,
    24px/16px padding — NOT a pill; `data-toggle` target
    `#exampleModalCenter`).
  - Modal `div.modal.fade#exampleModalCenter` (tabindex -1, role dialog,
    aria-labelledby, aria-hidden; hidden until toggled, dark backdrop) →
    `div.modal-dialog.modal-lg.modal-dialog-centered` (**max-width 800px**
    via Bootstrap modal-lg) → `div.modal-content.rounded-0` (SQUARE —
    `.rounded-0 { border-radius: 0 !important }` wins over the custom
    7px) → `div.modal-body.py-0` (radius **7px**, `overflow: hidden`, bg
    **`#efefef`**, `box-shadow: 0 10px 50px -10px rgba(0,0,0,0.9)`, no
    horizontal padding — this body IS the visible rounded gray card):
    - `div.d-flex.main-content`:
      - LEFT `div.bg-image.promo-img.mr-3` — flex `0 0 50%`, margin-right
        1rem, cover background-image `images/img_1.jpg` (1000×667 dark-wall
        fixed-gear bike photo); `span.price` "$2000" absolute top 20px /
        left 20px, white, NO background (sits on the photo's dark corner).
      - RIGHT `div.content-text.p-4.px-5.align-item-stretch` (1.5rem
        vertical / **3rem horizontal** padding) → `div.text-center`:
        - `a.share` > `span.icon-share` — absolute right 20px, `#ccc`,
          z-index 4, hover `#000`.
        - `h3.mb-3.line` "Grand Prix 4000" — `.line:after` = centered 70px
          × 1px `#ccc` underline; color `#000`, 22px.
        - `p.mb-3` — `span.icon-star.text-warning` ×4 (gold `#ffc107`) +
          `span.icon-star` ×1 (inherits `#777`).
        - `p.mb-5` — description copy ("All their equipment and
          instruments are alive..."), `#777`, 14px, line-height 1.5.
        - `div.d-flex.text-center.social.w-50.mx-auto` — `a.like`
          (`icon-heart` `#dc3545` + "25"), `a.message` (`icon-chat`
          `#007bff` + "10"), `a.add` (`icon-add` `#007bff` + "55");
          counts `#b3b3b3` 14px; spacing via `mr-auto`/`mx-auto`/`ml-auto`.
  - NO navbar, NO other sections, NO extra images (single product photo),
    NO footer in the original — add the mandatory Component Dock
    attribution footer (repo convention).
- **Design tokens:** launch button `#6c757d` (white text, 4px radius);
  card body `#efefef` (7px radius, shadow `0 10px 50px -10px
rgba(0,0,0,0.9)`); gold stars `#ffc107`; heart `#dc3545`; chat/add
  `#007bff`; counts `#b3b3b3` (14px); description `#777` (14px); share
  `#ccc` → hover `#000`; product h3 `#000` (22px, underline 70×1 `#ccc`);
  price white over photo (no badge); fonts **Roboto** only (Poppins +
  Source Serif Pro are dead includes — don't load them).

## Implementation task outline

1. **Scaffold app** — `npm create vite@latest`-pattern copy of the simplest
   existing app (e.g. `apps/gateway` or `apps/portal` — same Modal series),
   rename package to `@free-react-templates/wicket`, set `public/CNAME` =
   `wicket.free.componentdock.com`, `"homepage"` =
   `https://wicket.free.componentdock.com`; run `npm install` at repo root
   so `package-lock.json` registers the workspace; then `npm run
readme:status`; confirm `injectUiSource()` in `vite.config.ts` (copy the
   pattern from an existing app). jsdom polyfill rules apply only if
   localStorage is used (it isn't here).
2. **Design tokens** — `src/index.css` `@theme`: `--color-btn: #6c757d`
   (launch secondary gray), `--color-card: #efefef`, `--color-star:
#ffc107`, `--color-heart: #dc3545`, `--color-blue: #007bff`; set Roboto
   (300;400) via Google Fonts `<link>` in `index.html`; Tailwind arbitrary
   value for the shadow (`shadow-[0_10px_50px_-10px_rgba(0,0,0,0.9)]` —
   underscores safer than commas in v4).
3. **Layout shell** — `App.tsx` composes: LaunchSection, PromoModal (state
   `open`, conditional render), AttributionFooter. `main` landmark for the
   launch section (full-viewport `min-h-screen` flex centering), footer in
   `contentinfo`.
4. **LaunchSection component** — heading "Wicket" + gray 4px-radius button
   "Launch Promo" (px-4 py-3 proportions); TDD: renders heading + button;
   click opens modal (state lifted or context/callback).
5. **PromoModal component** — a11y-first: `role="dialog"`,
   `aria-modal="true"`, `aria-label`, Escape-to-close, backdrop click
   closes, visually-hidden close button with `aria-label="Close"` (the
   source has NO visible close × — only the share glyph top-right; keep it
   that way and add the hidden a11y close); conditional render (not in DOM
   when closed) keeps tests unambiguous.
   - Modal shell: max-w 800px, SQUARE corners on the outer content, the
     7px rounded `#efefef` BODY with the deep shadow above (rounded-0
     content + rounded body = the source's look), fade-in ~0.3s.
   - Two-panel `flex` (50/50, gap 1rem):
     - **Left (photo) panel** — `bg-cover` div with
       `https://picsum.photos/seed/wicket-1/1000/667`; absolute "$2000"
       label top-left (`top-5 left-5 text-white` — plain, no badge).
     - **Right (content) panel** — px-5 py-4; `Share2` absolute top-right
       (`text-[#ccc]` hover `text-black`); h3 "Grand Prix 4000"
       (text-black text-[22px]) + centered 70×1 underline (`after:` or a
       div); star row: 4 filled `Star` (`text-[#ffc107]` fill) + 1 `Star`
       gray; gray `#777` 14px description; centered social row —
       `Heart` red + 25 / `MessageCircle` blue + 10 / `PlusCircle` blue +
       55, counts `text-[#b3b3b3]`; links are inert (`href="#"` +
       preventDefault or buttons) — no navigation.
6. **Responsive** — source keeps the 50/50 flex at all sizes (no media
   queries in its CSS); at <640px the panels would be cramped, so stack to
   one column under `sm` (documented deviation) or keep 50/50 per source —
   implementer's call; verify no horizontal overflow.
7. **Gate + ship** — `scripts/verify-app.sh wicket` (typecheck + lint +
   100% coverage tests + build), `npm run spec:validate`, then the standard
   PR → immediate squash merge flow; bookkeeping marks the single
   TEMPLATES.md row (line 818) `[x]` with
   `https://wicket.free.componentdock.com` + `npm run readme:status`.

## Pitfalls / notes for the implementer

- **NO visible close × in the source** — the only top-right glyph is the
  share icon (`#ccc`). Close via backdrop/Escape only. Add a
  visually-hidden close button (`aria-label="Close"`) for keyboard/a11y so
  tests can assert dismissal; do NOT render a visible × (that's Modal
  01–06's pattern, not this one).
- **Rounded-0 + rounded body**: `modal-content` is SQUARE
  (`rounded-0 !important` beats the custom 7px); the visible rounded gray
  card is the `modal-body` (7px, overflow hidden, `#efefef`, deep shadow).
  Recreate: transparent/square outer + `rounded-[7px] overflow-hidden
bg-[#efefef]` inner body.
- **The "$2000" label has NO badge background** — just white text absolute
  top-left over the photo. The screenshot's dark "tag" is the photo's own
  shadowed corner. With a picsum seed the top-left may be light — if the
  white label loses contrast, prefer re-seeding the image over adding a
  badge (or add a subtle `bg-black/30` only if needed; document it).
- **Style.css here is TINY (3.7KB) — read it all.** Unlike the earlier
  modals (220KB bundled style.css), this file contains only the custom
  rules; Bootstrap comes from `bootstrap.min.css`. Token source is the
  small file, not the bottom of a giant one.
- **Font is Roboto** (NOT Poppins like Modal 05, and UNLIKE the earlier
  series' bundled files — Poppins + Source Serif Pro are loaded but never
  used here). Load only Roboto via Google Fonts.
- **No brand color** — this modal's "brand" is Bootstrap utility colors:
  `#6c757d` launch button, `#efefef` card, `#ffc107`/`#dc3545`/`#007bff`
  accents. Don't invent a primary hue.
- **The heading quirk**: live DOM says "Modal #9" (series copy-paste). Use
  "Wicket" + "Launch Promo". Documented deviation — do NOT ship "Modal #9".
- Icons: lucide-react — probe
  `node -e "console.log(typeof require('lucide-react').Share2, typeof require('lucide-react').Star, typeof require('lucide-react').Heart, typeof require('lucide-react').MessageCircle, typeof require('lucide-react').PlusCircle)"`;
  if any are undefined use inline SVG paths (share-alt square, star \f005,
  heart \f004, chat bubble \e0b7, add circle \e145).
- Star row: 4 gold + 1 gray is the RATING (4/5), not a component demo —
  keep the count and colors exact.
- Modal a11y in tests: conditional rendering (dialog not in DOM when closed)
  keeps role queries unambiguous — avoid aria-hidden dance entirely.
- Tailwind v4: `shadow-[...]` arbitrary value with commas works but
  underscores are safer for the rgba shadow.
- The social/share links are decorative in the source (`href="#"`) — make
  them inert buttons or preventDefault so no hash navigation fires in
  tests.
