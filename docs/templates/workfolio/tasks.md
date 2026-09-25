# Workfolio (ColorLib Gilb) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-workfolio`. Recreation name: **Workfolio** (NEW name —
> the ColorLib source keeps its name "Gilb").

## Source mapping

- **ColorLib item:** "Gilb" (TEMPLATES.md line 2396; section "## Personal (53)"
  at line 2377). The `wp/template/gilb/` slug appears TWICE in TEMPLATES.md
  (lines 2396 and 2716 — duplicate rows in different sections). Only the first
  occurrence needs prepping.
- **Source URL:** https://colorlib.com/wp/template/gilb/
- **Preview URL — REACHABLE (verified 2026-09-26 by curl):**
  **`https://preview.colorlib.com/theme/gilb/`**
  (HTTP 200, full HTML returned). Title: "Gilb - Resume Template By Colorlib".
- **Preview CSS:** `css/style.css` (all styles; Bootstrap grid + custom SCSS).
  Fonts: Google Fonts Montserrat 300/400/500/600/700. Scripts: jQuery, Bootstrap,
  Owl Carousel, Masonry, Magnific Popup (all to be replaced with React
  equivalents).

## Reference research (done — do not redo)

### Screenshot analysis

The ColorLib preview screenshot (`gilb-free-template.jpg`) shows a personal
portfolio/resume site with:

- Dark navy hero banner with "Hi there, This is Alex" + "Digital product designer"
- Coral/pink accent color on buttons and section headings
- Masonry-style portfolio grid with hover overlays
- Service cards with icons
- Client review carousel
- Dark navy footer with contact info

### Design tokens (live stylesheet, verified 2026-09-26)

| Token              | Value                    | Source CSS rule                                          |
| ------------------ | ------------------------ | -------------------------------------------------------- |
| Brand accent       | `#ea5267` (coral/pink)   | `.btn_1` bg, `.section_tittle p` color, `.about_part h4` |
| Banner bg          | `#0d0f5b` (dark navy)    | `.banner_part` background-color                          |
| About bg           | `#0a0b4d` (dark navy)    | `.about_part` background-color                           |
| Review bg          | `#0d0f5b` (dark navy)    | `.review_part` background-color                          |
| Footer bg          | `#0a0b4d` (dark navy)    | `.footer_Part` background-color                          |
| Heading color      | `#0a0b4d` (dark navy)    | `h1–h6` base color                                       |
| Body text (dark)   | `#fff`                   | `p` base color (on dark sections)                        |
| Body text (light)  | `#5b5b5b`                | General body text on light backgrounds                   |
| Muted text         | `#999` / `#777`          | Secondary text, client roles                             |
| Service icon bg    | `#f3f3f7`                | `.single_service_text span` background                   |
| Review card border | `#f0e9ff`                | `.client_review_single` border-color                     |
| Review card bg     | `#fbf9ff`                | `.client_review_single` background                       |
| Portfolio hover    | `#ea5267`                | `.portfolio_hover_text` icon color                       |
| Font               | Montserrat 300–700       | Google Fonts `@import` in style.css                      |
| Button primary     | `#ea5267` bg, `#fff` txt | `.btn_1`: padding 13.5px 45px, no border-radius          |
| Button hover       | `#0d0f5b` bg             | `.btn_1:hover` background                                |
| Section padding    | 140px                    | `.section_padding`                                       |

### Section structure (from live DOM, 2026-09-26)

1. **Navbar** — `.main_menu.home_menu` > `.navbar` with logo image, collapsible
   nav (Home, Blog dropdown, Pages dropdown, Contact), social icons
   (Facebook, Instagram, Behance, Globe) via Font Awesome.

2. **Banner** — `.banner_part` with dark navy bg + decorative bg image
   (`banner_bg_1.png`) on right side. Left: "Hi there, This is Alex" (h5),
   "Digital product designer" (h1), coral "Contact me" button (`.btn_1`).

3. **About** — `.about_part.section_padding` dark navy bg. Two columns:
   left: "about me" (h4 coral) + paragraph + "07" years experience counter;
   right: "Experiences" (h4) + 6 experience entries (title + company + dates).

4. **Portfolio** — `.portfolio_part.section_padding` white bg. Heading row
   ("My portfolio" + "More works" `.btn_2`). Masonry grid (`.mesonary_part`)
   with 5 items: `port_1.png` through `port_5.png`, some with
   `big_height`/`big_weight` classes for size variation. Coral hover overlay
   with plus icon.

5. **Services** — `.service_part.padding_bottom` white bg. Centered heading
   - 3 `.single_service_part` cards: icon (flaticon classes), h2 title,
     paragraph, `.learn_btn` link. Middle card has `.active` class.

6. **Reviews** — `.review_part.section_padding` dark navy bg. "Word from my
   clients" heading. Owl carousel (`.client_review_part.owl-carousel`) with
   6 `.client_review_single` items: quote paragraph, client image, name (h4),
   role (p).

7. **Footer** — `.footer_Part.padding_top` dark navy bg. Two rows: top row
   has "Discuss your project now" + email (h2) + "Download CV" `.btn_1`;
   bottom row has nav links (About, Work, Contact) + social icons.
   Copyright line (to be replaced with Component Dock link).

### Icon mapping (lucide — replace Font Awesome / Flaticon)

| Source glyph                    | Recreation               |
| ------------------------------- | ------------------------ |
| `fa-facebook-square`            | lucide `Facebook`        |
| `fa-instagram`                  | lucide `Instagram`       |
| `fa-behance`                    | lucide `Figma` (closest) |
| `fa-globe`                      | lucide `Globe`           |
| `flaticon-layers` (UX design)   | lucide `Layers`          |
| `flaticon-design` (Digital art) | lucide `Palette`         |
| `flaticon-speaker` (Marketing)  | lucide `Megaphone`       |
| `ti-plus` (portfolio hover)     | lucide `Plus`            |
| `ti-heart` (footer copyright)   | lucide `Heart`           |
| `ti-menu` (navbar toggle)       | lucide `Menu`            |

### Picsum placeholder plan

| Slot             | Seed                         | Size      | Notes                   |
| ---------------- | ---------------------------- | --------- | ----------------------- |
| Hero bg          | `workfolio-hero/1920/1075`   | 1920×1075 | Dark overlay needed     |
| Portfolio item 1 | `workfolio-port-1/600/400`   | 600×400   |                         |
| Portfolio item 2 | `workfolio-port-2/600/800`   | 600×800   | `big_height big_weight` |
| Portfolio item 3 | `workfolio-port-3/600/400`   | 600×400   |                         |
| Portfolio item 4 | `workfolio-port-4/600/600`   | 600×600   | `big_weight` only       |
| Portfolio item 5 | `workfolio-port-5/600/400`   | 600×400   |                         |
| Client photo 1   | `workfolio-client-1/100/100` | 100×100   | Circular crop           |
| Client photo 2   | `workfolio-client-2/100/100` | 100×100   | Circular crop           |
| Client photo 3   | `workfolio-client-3/100/100` | 100×100   | Circular crop           |

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/workfolio` from the simplest existing app, rename package
       to `@free-react-templates/workfolio`, add Montserrat 400/500/700 Google
       Fonts `<link>` in index.html, set `public/CNAME` =
       `workfolio.free.componentdock.com` + `"homepage"`. Register workspace
       in package-lock.json via `npm install` at root.

2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing Library,
       100% coverage): Navbar (logo, nav links, social icons, mobile toggle),
       Hero (greeting text, title, CTA button, dark bg), About (heading,
       paragraph, experience counter, experiences list), Portfolio (heading,
       subheading, masonry grid, 5 items, hover overlay), Services (heading,
       3 cards with icons, titles, descriptions, learn-more links), Reviews
       (heading, 6 carousel items with quote, photo, name, role), Footer
       (contact info, email, CV button, nav links, social icons, copyright
       with Component Dock link), App (all sections composed, document title).

3. [ ] Layout shell + Navbar: dark navy sections, light sections, semantic
       HTML structure, responsive hamburger menu with `Menu` icon from lucide.
       Social icons row with `Facebook`, `Instagram`, `Figma`, `Globe`.

4. [ ] Hero section: dark navy `#0d0f5b` bg, decorative background image on
       right (use picsum with dark overlay via `bg-black/60` or similar),
       left-aligned text with small greeting (h5), large title (h1), coral
       "Contact me" button (`bg-[#ea5267] text-white px-11 py-3.5`).

5. [ ] About section: dark navy `#0a0b4d` bg, two-column layout. Left: coral
       "about me" heading + paragraph + large "07" experience counter. Right:
       "Experiences" heading + 6 experience entries (title + company + dates).

6. [ ] Portfolio section: white bg, heading row with title + "More works"
       outlined button. Masonry-style grid with 5 portfolio items using picsum
       placeholders. Coral hover overlay with `Plus` icon.

7. [ ] Services section: white bg, centered heading, 3-column grid of service
       cards. Each card: circular icon container (`bg-[#f3f3f7]`), title,
       description, "learn more" link. Middle card `.active` state.

8. [ ] Client Reviews section: dark navy `#0d0f5b` bg, "Word from my clients"
       heading, carousel of 6 review cards. Each: quoted text, client photo
       (circular), name, role. Cards have light borders (`#f0e9ff`).

9. [ ] Footer: dark navy `#0a0b4d` bg. Top: "Discuss your project now" +
       email + coral "Download CV" button. Bottom: nav links + social icons.
       Copyright line with Component Dock link (replacing Colorlib attribution).

10. [ ] Run `npm run verify:app -- workfolio` (typecheck → lint → vitest
        100% → build) and fix until green.

11. [ ] Open PR `feat/template-workfolio` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must include:
        source URL, preview URL, token list (dark navy #0d0f5b/#0a0b4d,
        coral #ea5267, Montserrat, masonry portfolio, service cards, review
        carousel), and what differs (renamed "Workfolio", Montserrat via
        Google Fonts, lucide icons, picsum placeholders, Component Dock
        footer).

12. [ ] Bookkeeping after merge: mark TEMPLATES.md lines 2396 and 2716 `[x]` + surge URL (`https://workfolio.free.componentdock.com`),
        `npm run readme:status`, push.
