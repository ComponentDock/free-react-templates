# Prose (ColorLib Wordify) — Tasks & Design Notes

> Recreation of ColorLib "Wordify"
> (https://colorlib.com/wp/template/wordify/) under the NEW name **Prose**
> (writing/literary reference), per the monorepo naming mandate (never
> reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Wordify" — editorial blog template (category:
  Blog). Live preview: https://preview.colorlib.com/theme/wordify/
  (HTTP 200, ~32 KB HTML; tokens parsed from `css/style.css` ~19 KB).
- **Visual design (screenshot `wordify-free-template.jpg`, 1200×946):**
  thin dark-purple top utility bar (socials left, search right) → clean
  white header with a LARGE centered serif-style logo "Wordify" → centered
  nav (HOME / BUSINESS / TRAVEL / CATEGORIES / ABOUT / CONTACT) → full-bleed
  hero slider (lifestyle photo, bottom gradient overlay, white text,
  category tag, dots) → white "Latest Posts" area with a 2-column blog card
  grid (photo + title + meta) and a right sidebar (search, author bio,
  widgets) → dark footer. Purple accents on white/light-gray, editorial
  headings, clean body.
- **Structure (1:1, section order):**
  1. Top bar (`#6610f2`): social icons left (white, 50% opacity) + search
     right.
  2. Logo header: centered giant logo "Prose" (90px, black, Josefin Sans).
  3. Navbar: Home, Business (dropdown: Asia, Europe, Dubai, Africa, South
     America), Travel, Categories (dropdown: Lifestyle, Food, Adventure,
     Travel, Business), About, Contact; mobile hamburger.
  4. Hero slider (owl-carousel, full-width): 3+ slides, each a full-bleed
     bg image with purple category badge (uppercase), post meta
     (avatar + name · date · comments), H3 headline, excerpt, Read More;
     owl dots with purple active dot.
  5. Latest Posts (`site-section py-sm`): H2 "Latest Posts" → grid
     `col-lg-8 main-content` + `col-lg-4 sidebar`.
     - Blog cards: `col-md-6` × 8, image + `.blog-content-body` (20px
       padding, `border: 1px solid #efefef`, no top border) with post-meta
       (author avatar "Colorlib" → fictional author · "March 15, 2018" ·
       comment icon + 3) and H2 title.
     - Pagination: circular 40px buttons (`border-radius: 50%`), purple
       active/hover.
     - Sidebar widgets: search form (purple), author bio ("David Craig" →
       fictional author, blurb, "Read my bio"), Popular Posts (3+ thumbnail
       rows), Categories (Food, Travel, Lifestyle, Business, Adventure),
       Tags (gray pills on `#f2f2f2`).
  6. Footer (`#262626`): About Us (blurb + Read More), Latest Post
     (thumbnail list), Quick Links (About Us, Travel, Adventure, Courses,
     Categories), Social (Twitter, Facebook, Instagram, Vimeo, YouTube,
     Snapchat); bottom bar copyright + social.
- **Design tokens (from `css/style.css`):**
  - Brand: `#6610f2` (top bar, category badge, primary buttons, slider
    dots, pagination active, tags hover); `#8540f5` (btn hover); `#510bc4`
    / `#3d0894` (darker shades).
  - Neutrals: `#000` headings, `#6c757d` body text, `#fff` cards/header,
    `#e6e6e6` borders, `#efefef` card border, `#f2f2f2` tag/input bg,
    `#ccc` + repeating texture page bg, `#262626` footer bg.
  - Fonts: Josefin Sans (headings/logo) + Inconsolata (monospace body,
    18px/1.9, weight 300) — the monospace body is the template's signature,
    keep it.
  - Buttons: 8px 20px padding, radius 4px, `.btn-primary` purple/white/2px
    border; category badge uppercase 12px, padding 2px 8px, radius 4px;
    post-meta uppercase 13px letter-spacing .1em; sidebar heading 18px
    with `#e6e6e6` bottom border; footer h3 white 14px uppercase
    letter-spacing .2em, footer text rgba(255,255,255,.5).
- **Recreation decisions:** picsum seeded placeholders
  (`picsum.photos/seed/prose-<n>/<w>/<h>`), lucide icons (Search,
  MessageCircle, Calendar; socials as inline SVG brand icons), Google
  Fonts (Josefin Sans + Inconsolata) via `<link>`, `packages/ui` shared
  components (Button, ButtonLink, cn). Author names fictionalized
  ("Colorlib" → "Daniel Reyes", "David Craig" → "Elena Marsh").

## Tasks (implementation order)

- [ ] Scaffold app: copy simplest existing app → `apps/prose`, package
      `@free-react-templates/prose`, register in root package.json
      workspaces, index.html (title "Prose — Blog Template", Google Fonts
      links, favicon)
- [ ] `src/index.css`: `@theme` tokens — brand purple scale (`#6610f2`,
      `#8540f5`, `#510bc4`, `#3d0894`), Josefin Sans + Inconsolata font
      families, page bg (`#ccc` + subtle repeating pattern), card borders
- [ ] Components (TDD, tests first): 1. `TopBar` — purple bar, social icons left, search right 2. `SiteHeader` — centered giant logo "Prose" 3. `Navbar` — links + Categories/Business dropdowns, mobile
      hamburger (desktop + mobile nav both in DOM — use getAllByRole
      and index the mobile one last in tests) 4. `HeroSlider` — 3 slides, category badge, post meta, headline,
      excerpt, Read More; next/dot navigation 5. `BlogCard` + `LatestPosts` — 2-col grid of 8 cards (image, meta,
      title) + circular pagination 6. `Sidebar` — search form, bio card, popular posts, categories,
      tags 7. `Footer` — 4 columns + copyright line
- [ ] `App.tsx` composition: TopBar → SiteHeader → Navbar → HeroSlider →
      LatestPosts (with Sidebar) → Footer
- [ ] Verify: `scripts/verify-app.sh prose` (typecheck + lint + 100%
      coverage + build), `npm run spec:validate`
- [ ] Commit conventional `feat: Prose — Blog template (ColorLib Wordify)`
      on `feat/template-prose`, open PR, merge immediately, update
      TEMPLATES.md status + README status, surge deploy
