# Masthead (ColorLib Lifeleck) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-masthead`.

## Design notes (replication findings)

- **Original:** ColorLib "Lifeleck" — lifestyle/fashion blog template
  (source: https://colorlib.com/wp/template/lifeleck/). TEMPLATES.md has TWO
  copies of this item (lines 269 and 439 — mark BOTH `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/lifeleck/ (HTTP
  200, 28.9 KB, title "lifeleck BLOG || HOME"). Main stylesheet
  `css/style.css` (153 KB). Fonts via CSS `@import`: **Cardo 400/700**
  (display + nav links) + **Lora 400/700** (body).
- **Screenshot:** `lifeleck-free-template.jpg` (1200×946, viewed in browser)
  — white editorial blog: navbar (serif logo, centered nav, search + socials
  right), 3-column row of large lifestyle photos each with orange category
  tag + gray date, "Subscribe Our Newsletter" strip with orange square
  button, blog grid + sidebar below, footer cut off.
- **Visual design (from DOM + CSS tokens + screenshot):** minimalist modern
  editorial aesthetic. Stark white page, Cardo serif headlines (600,
  `#2a2a2a`), Lora serif body (14px), burnt-orange `#fc4600` accent
  (category tags, buttons, hovers, sidebar underline), peach `#fbf2ee`
  sidebar widget cards, `#f7f7f7` footer. Post cards: image + white text box
  overlapping upward (`margin-top: -50px`), centered text.

## Tasks (implementation order)

1. Scaffold `apps/masthead` (copy simplest existing app; package
   `@free-react-templates/masthead`; `vite.config.ts` with `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json).
3. `index.css` `@theme` tokens: `--color-brand: #fc4600`,
   `--color-ink: #2a2a2a`, `--color-peach: #fbf2ee`,
   `--color-footer: #f7f7f7`, `--font-display: "Cardo"`,
   `--font-body: "Lora"`. Load Cardo (400/700) + Lora (400/700) via Google
   Fonts in `index.html`.
4. Tests first (TDD, 100% coverage), then components:
   - `Navbar` — logo "Masthead" (serif) left, centered links Home / Archive
     / Category / Contact / Pages (dropdown: Single Blog, Elements), search
     control + social icons right; mobile toggler.
   - `BannerTrio` — 3 equal columns (desktop 33% width, ~700px tall, image
     bg cover; stack on mobile): category tag (orange), headline (Cardo,
     hover → orange), date (gray).
   - `SubscribeForm` — h3 "Subscribe Our Newsletter" + name/email inputs +
     square orange Subscribe button; 8px peach border box; success message
     on submit.
   - `BlogSection` — main col: 1 full-width feature post (white box
     -50px overlap, 520px max-w) + 8 posts in `lg:grid-cols-2` (white box
     320px max-w); sidebar col (peach widgets): Search, Categories (with
     counts), Popular Feeds (3 thumb rows), Share this post (4 social
     icons); centered pagination (Previous disabled, 1–3, Next).
   - `SocialConnect` — 6 square image tiles (grid, 6-up desktop), hover:
     dark overlay + Instagram icon.
   - `Footer` — 4 columns (About Us / Contact Info / Important Link /
     Newsletter with email + orange arrow button), copyright line (no
     Colorlib credit), social icons.
5. `App.tsx` composes: Navbar → BannerTrio → SubscribeForm → BlogSection →
   SocialConnect → Footer.
6. `scripts/verify-app.sh masthead` until green; commit conventional;
   PR to main, merge immediately.

## Fidelity notes

- Buttons are SQUARE (no radius): `.btn_1` = `#fc4600` bg, white text,
  `padding: 14.5px 58px`, hover → `#2a2a2a`; footer arrow button 40×50px.
- Inputs: 1px `#eee` border, square corners, 50px height (subscribe) /
  48px (footer).
- Banner columns: 33% width / 700px height desktop, 100% / 400px mobile —
  use picsum seeded `masthead-1..3` at ~800×1000.
- Post text boxes overlap the image by `-50px` (feature max-w 520px +
  `padding: 50px 70px`; regular max-w 320px + `padding: 40px 10px`).
- Sidebar widget titles: 24px Cardo 600 with a 60×2px orange underline.
- Social connect tiles: 16.67% width each; hover overlay `#000` at 0.5
  opacity scaling from 0.5 → 1 with Instagram icon.
- lucide-react has NO brand icons — use inline SVGs for social glyphs.
- All copy may be paraphrased; keep the same content kinds (category / title
  / date per card, widget lists, footer columns).
