# Persona (ColorLib Personal Wordpress Themes) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-persona`.

## Source mapping

- **ColorLib item:** "Personal Wordpress Themes" (TEMPLATES.md line 279 —
  the ONLY copy; mark `[x]` when done).
- **Source URL:** https://colorlib.com/wp/template/personal-wordpress-themes/
  → 301-redirects to the roundup article
  https://colorlib.com/wp/personal-branding-wordpress-theme/
  ("19 Best Personal Branding WordPress Themes For Personal Websites 2026",
  by Aigars Silkalns).
- **Preview URL:** https://preview.colorlib.com/theme/personal-wordpress-themes/
  → **HTTP 404 Not Found**; slug missing from
  `preview.colorlib.com/assets/js/products.js`. This is a CATEGORY item, not
  a demo-hosting template. Per the fallback rule the screenshot is the
  primary visual reference.

## Reference research (done — do not redo)

### Screenshot (`personal-website-templates.jpg`, 1200×938, AVIF; verified via vision)

Shows the "Jackie Brooklyn" personal WordPress theme demo (United Themes):

- transparent navbar: "Jackie Brooklyn" left; uppercase menu right,
  dot-separated: HOME • SERVICES • PROJECTS • CLIENTS • EXPERIENCE • CONTACT
- full-bleed blurred bokeh cafe photo (woman, beanie, glasses, laptop);
  slightly desaturated, warm ambient light
- centered 3-line bold white headline: "Personal Website / WordPress / Themes"
- small white pill CTA with dark text "Hello..."
- fixed vertical dark near-black/navy left toolbar: white icons (price tag
  $39, home, share, download, plus)

### Live roundup page (HTTP 200, 166 KB DOM)

Structure: header (logo + menu) → breadcrumb → h1 (31px/600) + meta
(author / "Theme Collections" / 0 comments) → intro → h2 "Best Personal
Branding WordPress Themes" → **numbered entries 1–19** (Brooklyn, Bridge,
RyanCV, Kallyas, Avada, Total, Porto, Coaching WP, XStore, Volos, Oxer,
Archi, Stockholm, Leverage, Dolife, Liga, Massive Dynamic, The Voux, H-Code)
each with name + description + accent "Download this template" button →
"Leave a Reply" comment form → footer. Comment form is blog furniture — NOT
recreated; the numbered-entry pattern becomes the Projects showcase.

### Tokens (live page CSS: Total theme `c67` + child `v3ct`)

- accent `#1a73e8` (`--wpex-accent`), body 16px system sans-serif, no Google
  Font import
- grays `#111827` (ink), `#374151` (body), `#4b5563` (meta)
- light bgs `#f8fafc`, `#f0f4ff`; dark navy (from screenshot) ≈ `#1c1e26`
- accent button: solid `#1a73e8`, white text, radius ~4px
- hero pill CTA: white bg, dark text, radius 999px

## Implementation outline (section order 1:1 with the Brooklyn nav)

1. **Header** — fixed transparent over hero; brand "Persona" left; uppercase
   dot-separated menu right (Home / Services / Projects / Clients /
   Experience / Contact), anchor-scroll to sections; blurred translucent dark
   bg after scroll; mobile hamburger menu.
2. **Hero** — full-bleed `picsum.photos/seed/persona-1/1920/1080` blurred
   (blur overlay or scale-110 + `blur-sm`); centered 3-line bold white
   headline; white pill CTA "Say hello" (scrolls to #contact; hover →
   `#1a73e8`).
3. **Floating action bar** — fixed left, ~56px wide, `#1c1e26`, vertical
   white icon buttons (Tag, Home, Share2, Download, Plus) with
   aria-labels/tooltips; hidden below lg breakpoint.
4. **Services** — light `#f8fafc` bg; 3-col grid cards: icon + title +
   blurb (Brand Identity / Web Design / Personal Branding; niches from the
   roundup: photographer, freelancer, creative, agency).
5. **Projects** — white bg; 2-col grid, numbered 01–06: name + one-liner +
   accent "Download template" button; names like "Branding for Creatives",
   "Freelancer Portfolio", "Photography Site", "Agency Website",
   "Consultant Resume", "Artist Showcase".
6. **Clients** — light bg; row of 6–8 grayscale placeholder logos.
7. **Experience** — `#f0f4ff` bg; vertical timeline, 3–4 entries (period +
   role + company), newest first.
8. **Contact** — heading + form (name/email/message, zod validation, success
   state) + contact details (email/phone/location).
9. **Footer** — `#1c1e26`; wordmark, nav links, copyright with paraphrased
   ColorLib credit.

## Fidelity notes

- Match the screenshot: transparent nav with "•"-separated uppercase links,
  3-line stacked headline, white pill CTA, dark floating left bar, bokeh
  hero.
- Match the live page: `#1a73e8` accent, system sans-serif, light section
  backgrounds, accent CTA buttons on the numbered showcase cards.
- Placeholders: `picsum.photos/seed/persona-<n>/<w>/<h>` (deterministic).
- Icons: lucide-react (Home, Share2, Download, Plus, Tag, Menu, X,
  ArrowRight, Mail, Phone, MapPin); brand icons via inline SVG BrandIcon in
  packages/ui (lucide removed brand icons).
- Never copy assets; never use the word "Brooklyn" as the brand.

## Commit + PR conventions

- Prep commit (this): `docs: prep Persona (ColorLib Personal Wordpress
Themes) spec + research`.
- Implementation branch: `feat/template-persona`; PR title: `feat: Persona —
personal branding website template (ColorLib Personal Wordpress Themes)`.
- PR body: source URL, redirect note, 404 preview note, tokens, differences
  (rename, placeholders, dropped comment form), TEMPLATES.md line 279 note.
- After merge: surge URL `https://free-react-templates-persona.surge.sh`,
  TEMPLATES.md `[x]`, `npm run readme:status`.
