# Peerview (ColorLib Thelook) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-peerview`. Recreation name: **Peerview** (NEW name —
> the ColorLib source keeps its name "Thelook").

## Source mapping

- **ColorLib item:** "Thelook" (TEMPLATES.md line 1204; first unchecked item).
- **Source URL:** https://colorlib.com/wp/template/thelook/
- **Preview URL — REACHABLE (verified 2026-09-15 by direct fetch):**
  **`https://preview.colorlib.com/theme/thelook/`**
  (HTTP 200, 14,202 bytes, photo gallery template).
- **Preview CSS:** `css/style.css` (22,228 bytes) + Bootstrap, Font Awesome,
  Owl Carousel, SlickNav. Font: Lato 300/400/700 (Google Fonts).
  Script: jQuery, Bootstrap, Owl Carousel, SlickNav, circle-progress, main.js.

## Reference research (done — do not redo)

### Screenshot (thelook-free-template.jpg)

Browsed visually. Design: dark, moody photography gallery aesthetic. Hero
is a full-width slider with a dark overlay and massive white italic text
"The Look Gallery". Clean white gallery section with two asymmetric columns
showing photo thumbnails with titles. Blog section on light gray with
thumbnail+text posts. Dark footer with contact form. Overall feel: elegant,
editorial, photography-focused.

### Design tokens (live stylesheet + rendered page, verified 2026-09-15)

| Token               | Value            | Use                                                      |
| ------------------- | ---------------- | -------------------------------------------------------- |
| Brand / primary     | `#081624`        | Dark navy — buttons, hero text, nav, headings            |
| Footer bg           | `#222222`        | Dark gray footer background                              |
| Blog section bg     | `#f6f7f9`        | Light gray blog background                               |
| Body text           | `#333333`        | Regular body text                                        |
| Muted text          | `#828282`        | Secondary text, labels                                   |
| Copyright text      | `#515151`        | Copyright line color                                     |
| Form border         | `#656565`        | Input bottom borders                                     |
| White               | `#ffffff`        | Hero text, light buttons, card bg                        |
| Font                | Lato 300/400/700 | All text (headings, body, nav, UI)                       |
| Button radius       | `0` (sharp)      | No border-radius on any buttons                          |
| Button default      | transparent bg   | #081624 text, 11px bold, min-width 167px                |
| Button sb-big       | 14px font        | Larger arrow icon (41px)                                 |
| Button sb-line      | 2px solid #081624| 19px padding, 57px min-height                            |
| Button sb-solid     | #081624 bg       | White text                                               |
| Button sb-light     | white text       | Used in footer contact form                              |
| Hero height         | 950px            | Full viewport slider                                     |
| Hero h2             | 160px italic     | Massive headline, line-height 0.9                        |
| Hero subtitle       | 36px             | Line-height 1.4                                          |
| Gallery left pad    | 110px            | Left column right-padding                                |
| Gallery right pad   | 115px            | Right column left-padding                                |
| Gallery item margin | 123px bottom     | Vertical spacing between gallery items                   |
| Blog thumb width    | 264px            | Blog thumbnail floated left                              |
| Form input          | borderless       | 2px #656565 bottom border, transparent bg, white text   |

### Section structure (from DOM, verified 2026-09-15)

1. **Header** — `.header-section` with logo image + `.main-menu` (6 items:
   Home, Gallery, Artists, Shop, News, Contact). No sticky behavior in CSS.

2. **Hero** — `.hero-section` > `.hero-slider.owl-carousel` > 3 `.hs-item`
   slides. Each: `.hs-bg` (background image, 70% width, right-aligned,
   dark overlay via `.sm-overlay`) + `.hs-text` (h2 "The Look Gallery",
   p subtitle, a.site-btn.sb-big "Read More" + arrow icon).

3. **Gallery** — `.gallery-section` > two columns:
   - Left `.gallery-left-col`: `.gallery-text` (blockquote h2 + p) +
     3× `.gallery-item` (img + h4 title + p artist + a.site-btn)
   - Right `.gallery-right-col`: 3× `.gallery-item` + `.more-gallery`
     ("see all galleries" sb-big button)

4. **Blog** — `.blog-section` (bg #f6f7f9) > `.blog-title-col` (h2 italic)
   + `.blog-content-col` > 2+ `.blog-item` (`.blog-thumb` img 264px +
   `.blog-content` with span.blog-cata + h4 + span date + p excerpt +
   a.site-btn "Read More")

5. **Footer** — `.footer-section` (bg #222222, padding "spad") >
   `.footer-text` (h2 "Get in touch" white italic + p) +
   `.contact-form` (3 inputs row + textarea + button.sb-light "send message")
   + `.copyright` (italic #515151)

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/peerview` from the simplest existing app, rename
       package to `@free-react-templates/peerview`, add Lato 300/400/700
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `peerview.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json (`npm install` at root).

2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Navbar (6 links, correct text), Hero
       (slider with 3 slides, headline, subtitle, CTA button with arrow,
       dark overlay), Gallery (2 columns, 6 items total, quote block,
       "see all galleries" link), Blog (heading, 2+ posts with thumb,
       category, title, date, excerpt, Read More), Footer (Get in touch
       heading, 4-field contact form, send button, Component Dock link).

3. [ ] Layout shell + index.css: Lato font via Google Fonts, brand color
       #081624 in @theme, Tailwind entry. App.tsx composes sections in
       DOM order: Header → Hero → Gallery → Blog → Footer.

4. [ ] Header component: logo image (use picsum or placeholder), nav with
       6 links. Style: flex row, space-between, padding.

5. [ ] Hero component: slider with 3 slides (use state or simple CSS for
       rotation). Each slide: background image (picsum), dark overlay
       (rgba(0,0,0,0.5) or similar), h2 "The Look Gallery" (160px
       italic, scale down on mobile), subtitle, "Read More" button with
       ArrowRight lucide icon.

6. [ ] Gallery component: two-column grid. Left: italic blockquote +
       description + 3 gallery items. Right: 3 gallery items + "see all
       galleries" CTA. Each item: picsum image, h4 title, p artist
       (italic), "view gallery" button with ArrowRight icon. Sharp
       corners on buttons.

7. [ ] Blog component: gray bg (#f6f7f9), flex layout with left title
       column and right content column. Blog items: thumbnail (picsum,
       264px), category tag (uppercase bold), title, date, excerpt,
       "Read More" button.

8. [ ] Footer component: dark bg (#222222), two-column flex. Left: "Get
       in touch" heading + description. Right: form with Name, Email,
       Subject inputs (transparent bg, #656565 bottom border, white
       text) + textarea + "send message" sb-light button. Copyright
       line linking Component Dock.

9. [ ] Responsive: gallery columns stack at ≤768px, blog stacks, footer
       stacks, hero headline scales down.

10. [ ] Run `npm run verify:app -- peerview` (typecheck → lint → vitest
        100% → build) and fix until green.

11. [ ] Open PR `feat/template-peerview` → merge immediately
        (`gh pr merge --squash --delete-branch`). PR description must
        include: source URL, preview URL, token list (#081624 brand,
        Lato, sharp-corner buttons, #222222 footer, #f6f7f9 blog bg),
        and what differs (renamed "Peerview", Lato via Google Fonts,
        lucide icons, picsum placeholders, Component Dock footer).

12. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1204 `[x]` +
        surge URL (`https://peerview.free.componentdock.com`),
        `npm run readme:status`, push.
