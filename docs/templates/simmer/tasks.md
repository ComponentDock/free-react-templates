# Simmer (ColorLib Yummy) — Tasks & Design Notes

> Recreation of ColorLib "Yummy"
> (https://colorlib.com/wp/template/yummy/) under the NEW name **Simmer**
> (a cooking verb — slow, careful food preparation), per the monorepo
> naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Yummy" — minimal food blog website template
  (source: https://colorlib.com/wp/template/yummy/).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/yummy/`
  (HTTP 200, ~21.7 KB HTML + `css/style.css` ~42.7 KB parsed for tokens).
  The live preview is the authoritative reference.
- **Screenshot discrepancy:** the TEMPLATES.md screenshot
  (`yummy-minimal-food-blog-website-template.jpg`) shows an OLDER "Yummy
  Blog" variant — top social bar with Sign in/Sign up, handwritten-style
  script logo, category cards (Food / Cooking / Life Style). Follow the
  LIVE PREVIEW structure below, not the screenshot.
- **Visual design (from live preview):** clean minimal white food blog —
  centered logo + centered nav with a pink accent (#FC0254) on active/hover
  links; hero is a 3-column grid of food-photo recipe cards whose white
  text blocks overlap the image bottoms; two light-gray (#F8F9FB) recipe
  sections each headed by an absolute-positioned pink title bar with a big
  white bold heading; light-gray footer (#EAEDF2) with about text, an
  italic email subscribe form with a pink button, and social icons; PT Sans
  typography throughout.
- **Structure (1:1, section order):**
  1. Header (`header-section`, pt 65px pb 30px): centered logo (margin-
     bottom 92px), centered nav (Home, Pages ▾, Recipes, Best Of, Contact),
     search icon right. Pages dropdown: About Me, Categories, Recipe, Blog,
     Contact.
  2. Page Top Recipes (`page-top-recipe`, pb 110px): 3-col grid — large
     featured card center (col-lg-6), 2 stacked cards each side (col-lg-3,
     order-lg-1 / order-lg-3). Cards: image (opacity ~0.34), white text
     block overlapping image bottom (margin-top -56px, centered, padding
     19px 35px 30px, z-index 999), date line + h4 title (#353535 bold
     24px/30px) + category tag. Featured titles: "Cannellini Aglio e Olio
     with Salmon", "Raw Vegan Carrot Cake Bites with Avocado"; side cards:
     "One Pot Weeknight Lasagna Soup Recipe", "Beef Burger with French
     Fries and Salad", "Raspberry Pancakes with Honey and Butter".
  3. Top Recipes this Week (`top-recipe`, bg #F8F9FB, spad): section-title
     pink bar (absolute top -57px left 0, w 470px, right-aligned text,
     padding 18px 0 18px 40px→right) with white bold 48px h2; two large
     items side by side (image h 514px, opacity 0.5; cat-name tag
     "Desert"/"Vegan" + h3 title + lorem blurb).
  4. Featured Recipes (`feature-recipe`, bg #F8F9FB, pt/pb 55px): section-
     title bar (w 430px), two items (cat-name + title "Sunday Brunch:
     Spaghetti and Eggs Recipe" + lorem), plus-icon (pink 80×57 box, white
     +, absolute right, top -157px).
  5. Footer (`footer-section`, bg #EAEDF2, pt 70px): left col (col-lg-5)
     logo + about blurb + "Subscribe to our newsletter" form (italic input
     w white border h 64px; pink Subscribe button 18px bold, padding
     17px 40px, min-w 205px, sharp corners); right col (col-lg-6
     offset-lg-1) social icons (Instagram, Pinterest, Facebook, Twitter,
     Youtube) + copyright (#b8c1d0, 14px).

## Design tokens (from `css/style.css`)

| Token         | Value(s)                                                                                                                              |
| ------------- | ------------------------------------------------------------------------------------------------------------------------------------- |
| Primary       | #FC0254 (hot pink/red — 31 bg usages: title bars, cat tags, active nav, subscribe btn, plus icon)                                     |
| Headings/text | #353535 (h1 70px, h2 48px, h3 30px, h4 24px; weight 700)                                                                              |
| Section bg    | #F8F9FB (top-recipe, feature-recipe), #F5F6FA (light), #EAEDF2 (footer)                                                               |
| Muted text    | #b8c1d0 (copyright, 14px)                                                                                                             |
| Font          | "PT Sans", sans-serif (body + headings; no Google Fonts link in preview — load PT Sans in index.html)                                 |
| Buttons       | Subscribe: bg #FC0254, white 18px/700, padding 17px 40px, min-w 205px, NO radius; input h 64px, italic 16px, border 1px #fff, pl 34px |
| Section title | bg #FC0254, w 430–470px, right-aligned, padding 18px 0, pr 40px, absolute top -57px left 0; h2 white bold 48px/48px                   |
| Category tag  | bg #FC0254, white, 12px/700, uppercase, padding 4px 25px                                                                              |
| Recipe card   | image (opacity 0.34–0.5) + white text block (margin-top -56px, centered, padding 19px 35px 30px, z 999)                               |
| Nav           | links #353535 20px/700 padding 5px; active/hover #FC0254; sub-menu dropdown on hover                                                  |

## Implementation notes (for the implementer)

- Tailwind `@theme`: `--color-brand` = #FC0254, `--color-ink` = #353535,
  `--color-mist` = #F8F9FB, `--color-fog` = #EAEDF2, `--color-faint` =
  #b8c1d0. Use via Tailwind classes per conventions.
- Google Fonts `<link>` in `index.html`: PT Sans (weights 400, 700).
- Sections are mostly static — no carousels/accordions in the live demo.
  Only interactions: nav dropdown (hover/focus) and the subscribe form
  (controlled input + submit; no backend, prevent default or show a
  "subscribed" state per repo conventions).
- Recipe card component: image + overlapping white text block (negative
  margin), date + title + category tag; reuse for hero cards, top-recipe
  items, and feature-recipe items with size variants (large vs standard).
- Section title bar: absolute-positioned pink bar with right-aligned white
  heading; each section wrapper needs `position: relative` and enough top
  padding so the bar (top -57px) overlaps the section above.
- Placeholders: `picsum.photos/seed/simmer-<n>/<w>/<h>` for food images
  (hero ~570×450ish, top-recipe large ~570×514, card images smaller).
- Icons: lucide-react (Search, Plus, Instagram, Pinterest, Facebook,
  Twitter, Youtube).
- Do NOT copy the demo's images, fonts files, or CSS — recreate tokens in
  Tailwind.

## TODO (prep stream does NOT implement)

- [ ] Implementer: copy simplest existing app → `apps/simmer`
- [ ] Implementer: write tests (red) per spec scenarios, then
      implementation (green) — 100% coverage
- [ ] Implementer: `scripts/verify-app.sh simmer` until green
- [ ] Implementer: mark `[~]` → `[x]` in TEMPLATES.md + surge URL,
      `npm run readme:status`, PR + immediate squash merge
