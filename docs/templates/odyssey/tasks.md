# Odyssey (ColorLib Ruft) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-odyssey`.

## Design notes (replication findings)

- **Original:** ColorLib "Ruft" — travel/lifestyle blog template
  (source: https://colorlib.com/wp/template/ruft/).
- **Preview analyzed:** https://preview.colorlib.com/theme/ruft/ (HTTP 200).
  Live DOM + `css/main.css` parsed for structure and tokens; screenshot
  `ruft-free-template.jpg` reviewed visually (purple-tinted surfer hero,
  serif headline, featured post + sidebar layout).
- **Visual design:** light, airy blog. Purple (`#8050fa`) is the brand color:
  hero overlay (`rgba(128,80,250,0.8)` gradient over image), pill buttons
  fill purple on hover, newsletter button is solid purple, scrolled navbar
  turns `rgba(128,80,250,0.9)`. Sections are `#f9f9ff`/white with subtle
  borders (`#e9e9e9`, `#ddd`). Headings in Playfair Display (serif), body in
  Roboto (sans). Post tags/meta use accent colors (`#4cd3e3`, `#f4e700`,
  `#f44a40`, `#38a4ff`).
- **Structure (1:1, section order):**
  1. Fixed navbar: paper-plane logo + "Ruft" → "Odyssey" wordmark; links
     Home, Category, Archive, Pages, Elements, Blog, Blog Details, Contact
     (Pages/Blog dropdowns). Purple background once scrolled.
  2. Banner hero: full-bleed image + purple gradient overlay, centered
     two-line H1 "Charter Yacht" / "The Luxury Of Traveling" (Playfair,
     60px, weight 300, white). Carousel arrows on the right.
  3. Post slider: featured post cards (thumb, meta-head: date + "Image
     Post" tag + categories + "03 Comments", H3, excerpt, "Read More").
     Example: "Marvel Maison", 13th Oct, 2018, Food & Travel.
  4. Post area: blog list (col-lg-8, 5 posts with thumb/meta/H3/excerpt/
     "continue Reading") + sidebar (col-lg-4): Search Posts, author card
     ("Charlie ALison Barber", Senior blog writer), Popular Posts (4 rows,
     "02 hours ago"), Post Categories (Technology 37, Lifestyle 24, Fashion
     59, Art 29, Food 15, Architecture 09, Adventure 44), Newsletter
     ("Subscribe Now").
  5. Footer: About Us, Newsletter ("Stay updated with our latest trends"),
     Instagram Feed grid, Follow Us ("Let us be social"), bottom bar
     (copyright — use monorepo credit, not Colorlib).
- **Design tokens extracted from the preview CSS:**
  - Primary purple `#8050fa`; accents `#4cd3e3` / `#f4e700` / `#f44a40` /
    `#38a4ff`; surfaces `#f9f9ff` / `#fff` / `#222222` / `#191919`; borders
    `#e9e9e9` / `#ddd`; headings `#000`.
  - Fonts: "Playfair Display" (headings, 700; hero 300) + "Roboto" (body).
  - Buttons: pill `border-radius: 25px`, `background: #f9f9ff`, border
    `1px solid #e9e9e9`, `line-height: 38px`, `padding: 0 30px`, 12px/500;
    hover → purple bg + white text. Newsletter button: solid purple, full
    width, `line-height: 48px`.
  - Inputs: `border-radius: 42px`, `border: 1px solid #ddd`,
    `line-height: 44px`, `padding: 0 15px`.
  - Spacing: `.section-gap` 120px vertical (60px mobile); container 1170px.
- **Recreation name:** Odyssey (NEW name — never reuse "Ruft"). App folder
  `apps/odyssey`, package `@free-react-templates/odyssey`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/odyssey-<n>/<w>/<h>`); lucide-react icons
  (paper-plane, search, chevrons, socials); Playfair Display + Roboto via
  Google Fonts `<link>` in `index.html`; purple primary in `@theme` so
  shared Button/ButtonLink `primary` variants resolve to `#8050fa`.
- Reuse `packages/ui` (Button, ButtonLink, Card, cn) + repo-standard
  Navbar/Footer chrome.

## Tasks

- [x] Write `openspec/specs/template-odyssey/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/odyssey` (copy the section-rich blog app pattern — e.g.
      an existing blog/magazine app if present, else a landing app; rename
      package to `@free-react-templates/odyssey`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: Navbar (scroll-aware
      purple bg), Banner hero (overlay + two-line H1 + carousel arrows),
      Post slider, Blog list, Sidebar (search / author / popular / categories
      / newsletter), Footer (4 columns + bottom bar).
- [ ] Per-app gate: `bash scripts/verify-app.sh odyssey` (typecheck + lint +
      coverage + build) + `npm run spec:validate`.
- [ ] Push `feat/template-odyssey`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
