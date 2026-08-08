# Stet (ColorLib Wordsmith) — Tasks & Design Notes

> Recreation of ColorLib "Wordsmith"
> (https://colorlib.com/wp/template/wordsmith/) under the NEW name **Stet**
> (a copyediting term — "let it stand"; writing/typography reference), per
> the monorepo naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Wordsmith" — editorial blog/magazine template
  (category: Blog). Live preview: https://preview.colorlib.com/theme/wordsmith/
  (HTTP 200, ~35 KB HTML; tokens parsed from `css/main.css` ~80 KB).
- **Visual design (screenshot `wordsmith-free-template.jpg`, 1200×946):**
  light-gray page → white header (serif logo "wordsmith." left, centered
  uppercase sans nav HOME / CATEGORIES▾ / BLOG▾ / STYLES / ABOUT / CONTACT,
  SEARCH right) → full-width hero slider (dark photo, centered white text:
  uppercase MUSIC badge, big serif headline, author + date; 3 dots) →
  3-column blog card row (photo thumbs) → light-gray/white sections → navy
  footer. Monochrome palette + navy brand dark; photography supplies color.
- **Structure (1:1, section order):**
  1. Header (`s-header`, white, 78px): logo "Stet" (serif wordmark) left,
     nav center — Home, Categories▾ (Lifestyle, Health, Family,
     Management, Travel, Work), Blog▾ (Video Post, Audio Post, Standard
     Post), Styles, About, Contact — search toggle right (expands
     "Search for:" input + Close). Mobile: off-canvas nav ("Navigate to"
     heading, all links, Close) behind hamburger.
  2. Featured slider (`s-featured`, `#f2f2f2`, 15rem/10.2rem padding): 3
     slides, 600px tall, centered text over bg images: uppercase category
     badge (white, letter-spaced), large Libre Baskerville headline, meta
     (avatar + author + date); dots + prev/next arrows.
  3. Blog entries (`s-content`, `#f2f2f2`, 6rem/7.2rem padding): 12 cards
     in 3-col grid — 400px thumb, category label (uppercase), serif title
     (2.8rem), date; `pgn` pagination: Prev · 1 2 3 4 5 … 8 · Next.
  4. Extra section (`s-extra`, white, 12rem/10.2rem padding): Popular
     Posts (carousel: title, "By <author>", "on <date>"), Categories
     links, Site Links (Home, Blog, Styles, About, Contact, Privacy
     Policy).
  5. Footer (`s-footer`, navy `#111860`, white text, 10.2rem padding):
     About Stet (blurb), Our Newsletter (email input + subscribe btn),
     social icons, copyright bar (credit reworded — no Colorlib name).
- **Design tokens (from `css/main.css` / `css/base.css`):**
  - Brand navy: `#111860` (body bg, `.btn--primary` bg/border, bullets);
    hover `#0d134a`. Accent yellow: `#ffd900` (mark). Notice `#fff099` /
    `#bba31b`.
  - Neutrals: `#f2f2f2` (featured + content bg), `#fff` (header, extra,
    cards), `#000` headings, body text `rgba(0,0,0,.8)`, nav links
    `rgba(0,0,0,.6)`, default btn `#c5c5c5`, borders `#ddd`/`#e5e5e5`,
    footer text `rgba(255,255,255,.5)`, footer links white.
  - Fonts: Nunito Sans (body 1.8rem/1.8333, 400/700/800) + Libre
    Baskerville (headings 700; display 4.8rem; entry title 2.8rem/1.286).
  - Buttons `.btn`: uppercase 1.2rem, letter-spacing .3rem, height 6rem,
    padding 0 3rem, .2rem border, SQUARE corners; primary navy/white,
    hover `#0d134a`.
  - Category badge: uppercase 1.4rem, letter-spacing .3rem, white.
  - Featured slide 600px, centered; dots with filled active; pgn centered
    Prev/Next + numbers; footer headings white.
- **Recreation decisions:** picsum seeded placeholders
  (`picsum.photos/seed/stet-<n>/<w>/<h>` — featured 1200×600, thumbs
  400×400), lucide icons (Search, ChevronLeft/Right, Menu, X; socials as
  inline SVG brand icons), Google Fonts (Nunito Sans + Libre Baskerville)
  via `<link>`, `packages/ui` shared components (Button, ButtonLink, cn).
  Keep the navy body background visible around the light-gray content
  sections — it is a signature. Authors (Jonathan Smith, John Doe) and
  post titles may be kept or fictionalized; site name "Wordsmith" → "Stet".

## Tasks (implementation order)

- [ ] Scaffold app: copy simplest existing app → `apps/stet`, package
      `@free-react-templates/stet`, register in root package.json
      workspaces, index.html (title "Stet — Blog Template", Google Fonts
      links for Nunito Sans + Libre Baskerville, favicon)
- [ ] `src/index.css`: `@theme` tokens — brand navy scale (`#111860`,
      `#0d134a`), accent `#ffd900`, fonts, square button shape, `#f2f2f2`
      content backgrounds
- [ ] Components (TDD, tests first): 1. `Header` — logo "Stet", nav
      links, Categories + Blog dropdowns, search toggle + "Search for:"
      input, mobile off-canvas menu (desktop + mobile nav both in DOM —
      use getAllByRole and index the mobile one last in tests) 2. `FeaturedSlider` — 3 slides (badge, headline, author/date),
      dots + prev/next navigation 3. `BlogCard` + `BlogEntries` — 3-col
      grid of 12 cards (thumb, category, title, date) + pagination
      (Prev/numbers/Next) 4. `ExtraSection` — Popular Posts, Categories,
      Site Links columns 5. `Footer` — about blurb, newsletter subscribe
      form (email + button), social icons, copyright line
- [ ] `App.tsx` composition: Header → FeaturedSlider → BlogEntries →
      ExtraSection → Footer
- [ ] Verify: `scripts/verify-app.sh stet` (typecheck + lint + 100%
      coverage + build), `npm run spec:validate`
- [ ] Commit conventional `feat: Stet — Blog template (ColorLib Wordsmith)`
      on `feat/template-stet`, open PR, merge immediately, update
      TEMPLATES.md status + README status, surge deploy
