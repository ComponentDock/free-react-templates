# Newsprint (ColorLib Magdesign) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-newsprint`.

## Design notes (replication findings)

- **Original:** ColorLib "Magdesign" — magazine/blog template
  (source: https://colorlib.com/wp/template/magdesign/). TEMPLATES.md has
  THREE copies of this item (lines 271, 603, 2199 — mark ALL `[x]` when done).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/magdesign/ (HTTP
  200, 40.7 KB, title "MagDesign Magazine"). Stylesheet `css/style.min.css`
  (Bootstrap 5-based, 244 KB). Sliders are tiny-slider (tns) carousels with
  dot navs + prev/next controls.
- **Screenshot:** `magdesign-free-template.jpg` (1200×946, viewed in browser)
  — minimalist magazine layout: bold "MAGDESIGN" wordmark centered top with
  pill search left + social icons + hamburger right; "Trending" heading; large
  horizontal feature card (plant photo left, "Business Travel · July 2, 2020",
  bold headline, excerpt, circular-avatar author byline); row of 3 vertical
  article cards; more cards below. Neutral white/gray/black palette, photos
  carry the color.
- **Visual design (from DOM + CSS tokens + screenshot):** white page bg, dark
  text, generous whitespace, pill search + CTA, 7px-rounded thumbnails,
  circular avatars, orange `#f79918` interactive accent, sticky navbar goes
  solid black on scroll.

## Design tokens (from css/style.min.css)

| Token         | Value                                        | Where                                                                                                     |
| ------------- | -------------------------------------------- | --------------------------------------------------------------------------------------------------------- |
| Accent orange | `#f79918`                                    | `.btn-primary` bg, hover states, active nav link, tns active dot, footer CTA h2, social hover, subheading |
| Dark teal     | `#10495c`                                    | footer widget h3 headings, `.btn-outline-secondary`                                                       |
| Body text     | `#888`                                       | Poppins 400 14px                                                                                          |
| Heading ink   | `#000` / `#212529`                           | headlines                                                                                                 |
| Sticky navbar | `#000` bg, `4px 0 20px -5px rgba(0,0,0,.1)`  | on scroll                                                                                                 |
| CTA pill      | radius 30px, 2px border                      | navbar cta-button                                                                                         |
| Inputs        | radius 7px                                   | search + newsletter email                                                                                 |
| Thumbnails    | radius 7px                                   | post images                                                                                               |
| Avatars       | radius 50%                                   | author pics                                                                                               |
| Slider dots   | 7px circles, active `#f79918`                | tns nav                                                                                                   |
| Fonts         | Poppins (body) + Georgia serif (blockquotes) | Google Fonts                                                                                              |

## Tasks (implementation order)

1. Scaffold `apps/newsprint` (copy simplest existing app; package
   `@free-react-templates/newsprint`; `vite.config.ts` with
   `injectUiSource()`).
2. `npm install` at repo root (registers workspace in package-lock.json).
3. `index.css` `@theme` tokens: `--color-accent: #f79918`,
   `--color-teal: #10495c`, `--color-muted: #888888`,
   `--color-ink: #212529`, `--font-sans: "Poppins"`. Load Poppins
   (400/500/600/700) via Google Fonts in `index.html`.
4. Tests first (TDD, 100% coverage), then components:
   - `Navbar` — centered brand "Newsprint", pill search input (Search...),
     social icons (inline SVG), hamburger + mobile off-canvas menu, links
     Home/Categories (dropdown: Travel, Food, Technology, Business)/About/
     Contact, pill CTA; sticky → black bg on scroll.
   - `TrendingSlider` — "Trending" heading + carousel of large horizontal
     post cards (thumb left `col-lg-7`-ish, content right: category tags +
     date, h3 headline, excerpt, author avatar + name); dot nav with active
     accent dot.
   - `FeaturedGrid` — 3 vertical post cards (thumb top, meta, h3 title,
     author).
   - `PopularSlider` — "Most Popular Posts" heading + horizontal post rows
     with prev/next controls.
   - `CategoryBlock` — Sports + Business headings with small post lists
     (thumb + title + meta).
   - `Subscribe` — light `bg-light` section, "Subscribe to newsletter" h2,
     email input + Subscribe button (orange), success/validation states.
   - `Footer` — CTA heading (accent), widget columns (uppercase h3s), social
     circles, copyright bar + Terms & Conditions / Privacy Policy.
5. Section order in `App.tsx`: Navbar → TrendingSlider → FeaturedGrid →
   PopularSlider → CategoryBlock → Subscribe → Footer.
6. Placeholder images: `https://picsum.photos/seed/newsprint-<n>/<w>/<h>`
   (e.g. `newsprint-1/900/600` trending, `newsprint-2/600/400` grid cards,
   `newsprint-3/200/200` avatars).
7. Verify: `scripts/verify-app.sh newsprint` (typecheck + lint + 100%
   coverage tests + build). PR description must list source template, preview
   URL, tokens, renames, and that picsum/lucide replace assets.
8. After merge: mark ALL THREE Magdesign lines in TEMPLATES.md `[x]` (271,
   603, 2199) + surge URL + `npm run readme:status`.
