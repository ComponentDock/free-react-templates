# Rekindle (ColorLib Revive) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-rekindle`.

## Source mapping

- **ColorLib item:** "Revive" (TEMPLATES.md — TWO copies: line 283 under
  `## Blog (60)` and line 2211 under `## Magazine (34)`; mark BOTH `[x]` when
  done — whole-line replace, both copies carry the same surge URL).
- **Source URL:** https://colorlib.com/wp/template/revive/
- **Preview URL:** https://preview.colorlib.com/theme/revive/
  (HTTP 200, 45.8 KB DOM — live, analyzed 2026-08-08).
- **Preview CSS:** `https://preview.colorlib.com/theme/revive/css/main.css`
  (46.9 KB, Bootstrap 4 + custom stylesheet; tokens extracted in the spec).

## Reference research (done — do not redo)

### Screenshot (`revive-free-template-1.jpg`; verified via browser vision)

Editorial/magazine blog. White navbar with the centered "REVIVE" logo flanked
by Playfair italic links. Hero: full-bleed lifestyle photo with a white serif
headline "Make the world a better place with camera" overlaid left; vertical
rotated "SHARE NOW" strip with circular social icons on the far left edge.
Blog cards in a 2-column grid (image top, serif title, date/comment meta,
excerpt, READ MORE arrow + category tag). Sidebar widgets on a light
lavender-grey (`#f9f9ff`) background. Solid black footer with 4 columns.

### Live DOM (primary reference — matches the screenshot)

Section order: white header (centered logo; left links Home / Category /
Archive; right links Elements / Blog Detail / Contact; Playfair italic 700
black links, hover/active `#13113a`) → home banner (owl-carousel, 4
`.banner-img` slides, each with `.text-wrapper` white h1 36px "Make the world
a better place with camera", max-width 700px, left-aligned; vertical
`.social-icons` strip rotated −90° at left 17% top 56% with FB/Twitter/
Pinterest + "sharre now") → blog post area (`section-gap` 130px padding; main
`col-lg-8` with 8 `.single-amenities` cards in a 2-col grid — thumb, h5 serif
title, meta (date + comments), excerpt, Read More + arrow, category tag;
hover → white bg + shadow) → pagination (Previous / 01 02 03 04 09 / Next,
radius 0) → sidebar `col-lg-4` (Search Posts form, Instagram 6-square grid,
"Catgories" rows with counts, Popular Posts 4 rows, Newsletter email +
"Subcribe" button, Share this post icons) → black footer (About Us, Newsletter
form + white arrow button, "Instragram Feed" 8 squares, Follow Us 4 social
icons, copyright bar).

## Design tokens (summary — full table in the spec)

- Primary `#13113a` (deep navy): buttons, nav hover/active, widget titles,
  Read More, search icon.
- Body `#706f87` (Open Sans 14px/24px w500); headings Playfair Display serif.
- Light sections `#f9f9ff`: cards + sidebar widgets (padding 50px 30px).
- Card hover: white bg + `0px 20px 30px rgba(0,35,71,0.1)`.
- Footer `#000000`; footer h6 white 18px 600.
- Buttons: `.primary-btn`/`.bbtns` — `#13113a` bg, white uppercase 12px,
  radius 0; `.click-btn` — white bg, `#13113a` icon; `.blog-post-btn` —
  transparent, `#13113a` uppercase 12px 600.
- Banner h1: white 36px serif, left-aligned, max-width 700px.
- Search input: 40px tall, no border, 80% + 20% white search button.
- Instagram feed: 33%-width squares (3-col).
- Icons: lucide-react (Calendar, MessageCircle, ArrowRight, Folder, Search,
  Facebook, Twitter, Instagram, Dribbble, Behance, Heart); dribbble/behance
  may need inline SVG.

## Implementation tasks (ordered, TDD — tests before code)

1. [ ] Scaffold `apps/rekindle` (copy simplest existing app; package
       `@free-react-templates/rekindle`; `npm install` at root; register
       `injectUiSource()` in `vite.config.ts`; `homepage` surge URL).
2. [ ] `Navbar.tsx` — white sticky bar, centered wordmark, left/right link
       groups, mobile toggler (aria-expanded), active-state `#13113a`.
3. [ ] `Hero.tsx` — 4-slide image slider (fade/autoplay), overlaid white serif
       h1, rotated share strip (FB/Twitter/Pinterest + label).
4. [ ] `BlogGrid.tsx` — 8 post cards in 2-col grid (picsum thumbs, serif
       titles, meta, excerpt, Read More, category tag, hover shadow).
5. [ ] `Pagination.tsx` — Previous / 01 02 03 04 09 / Next.
6. [ ] `Sidebar.tsx` — Search form, Instagram grid (6), Catgories (5 rows),
       Popular Posts (4 rows), Newsletter (email + subscribe), Share icons.
7. [ ] `Footer.tsx` — 4 columns (About, Newsletter form, Instagram 8, Follow
       Us) + copyright bar.
8. [ ] `App.tsx` composition + skip link + document title
       "Rekindle — Blog Magazine Template".
9. [ ] `@theme` tokens in `index.css`: `--color-ink: #13113a`,
       `--color-muted: #706f87`, `--color-mist: #f9f9ff`; Playfair + Open Sans
       via Google Fonts `<link>` in `index.html`.
10. [ ] Gate: `bash scripts/verify-app.sh rekindle` (typecheck + lint + 100%
        coverage + build) + `npm run spec:validate`.
11. [ ] TEMPLATES.md: mark BOTH Revive copies `[x]` (lines 283 + 2211) with
        surge URL `https://free-react-templates-rekindle.surge.sh`; run
        `npm run readme:status`.
12. [ ] PR: `feat: Rekindle — blog magazine website template (ColorLib
    Revive)`; merge immediately (`gh pr merge --squash --delete-branch`).

## Fidelity notes (section-by-section)

- **Navbar:** links are Playfair italic 700 black; do NOT use a serif-less
  nav. Logo centered between two link groups (`.menu-left` right-aligned
  text, `.menu-right` navbar-collapse).
- **Banner:** NO subheading, NO CTA button — just the slider image + white h1
  - the rotated share strip. Left-align the headline, 700px max width.
- **Cards:** background `#f9f9ff` at rest, white + shadow on hover. Keep the
  `Read More →` + category-tag row at the card bottom (space-between).
- **Sidebar widgets:** every widget box is `#f9f9ff` with 50/30 padding and
  30px margin-bottom — the stacked-box look is the design.
- **Footer:** black; newsletter column is the widest (4/12). Instagram feed
  squares: 6 in sidebar, 8 in footer.
- **Original typos** ("Catgories", "Subcribe", "sharre now", "Instragram
  Feed"): may be kept or silently fixed — pick one and note it in the PR.
- **Pagination:** flat links, radius 0 — NOT circular pills.
- **Copy:** paraphrase freely but keep the same kind (headline + slider,
  card title + meta + excerpt + CTA, widget lists).
- **Images:** `https://picsum.photos/seed/rekindle-<n>/<w>/<h>` everywhere;
  never copy ColorLib assets.
