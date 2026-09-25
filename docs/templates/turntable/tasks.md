# Turntable (ColorLib Dj) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-turntable`. Recreation name: **Turntable** (NEW name —
> the ColorLib source keeps its name "Dj").

## Source mapping

- **ColorLib item:** "Dj" (TEMPLATES.md line 2265). Source slug: `dj`.
- **Source URL:** https://colorlib.com/wp/template/dj/
- **Preview URL — REACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/dj/`
  HTTP 200, full HTML retrieved. Title: "Dj — Colorlib Website Template".
- **Preview CSS:** `css/style.css` (main custom styles — dark theme,
  gold accent `#e4ae50`, Nunito body, Montserrat headings) +
  `css/bootstrap.min.css` (Bootstrap 4 grid/utilities) + icon fonts
  (`fonts/icomoon/style.css`, `fonts/flaticon/font/flaticon.css` —
  REPLACE with lucide, do not ship). Scripts: jQuery, Bootstrap, AOS
  (scroll animations), Owl Carousel, Magnific Popup, mediaelementplayer.

## Reference research (done — do not redo)

### Screenshot (`dj-free-template.jpg`)

Dark-themed DJ/music event page. Hero section with a dark atmospheric
image (DJ equipment/turntable), prominent gold date badge ("25 JUL"),
gold heading text, gold outline CTA button. Event cards below with
overlaid date badges in gold. Overall aesthetic: moody nightclub feel,
dark backgrounds, gold highlights, white semi-transparent body text.
A second image shows the upcoming events grid with asymmetric layout
and overlaid gold text badges.

### Design tokens (live stylesheet + rendered page, verified)

| Token       | Value                                  | Use                                                                                                 |
| ----------- | -------------------------------------- | --------------------------------------------------------------------------------------------------- |
| Page bg     | SOLID `#000`                           | Pure black background throughout; dark theme                                                         |
| Brand       | `#e4ae50` (gold/amber)                 | Primary accent: buttons, date badges, links, headings underline, form focus, footer heading line     |
| Text        | `rgba(255, 255, 255, 0.5)`            | Body paragraphs — semi-transparent white on black                                                     |
| White       | `#fff`                                 | Headings, navbar text, button text, form text                                                        |
| Footer text | `#737373`                             | Footer paragraph text                                                                                |
| Footer link | `#999` → hover `#fff`                 | Footer navigation links                                                                              |
| Form border | `#333` → focus `#e4ae50`             | Form control borders                                                                                  |
| Font body   | 'Nunito' 400                          | Body text, 1.1rem, line-height 1.7; loaded from Google Fonts CDN (Cloudflare)                       |
| Font head   | 'Montserrat' 700                      | Headings, navbar brand; loaded from Google Fonts CDN                                                  |
| Buttons     | uppercase, letter-spacing .2rem       | Padding 15px 20px, border-width 2px; `btn-primary`: white on gold; `btn-outline-primary`: gold outline |
| Section py  | 40px mobile / 70px desktop            | `.site-section` vertical padding                                                                     |
| Footer py   | 4em mobile / 7em desktop              | `.site-footer` vertical padding                                                                      |
| Date badge  | Absolute overlay on image             | Gold background with day+month stacked vertically in white                                           |
| Play button | 70px circle, radius 50%, white bg     | Gold icon, absolute centered on image                                                                |
| Navbar      | Absolute, transparent bg, white text  | "Dj." brand (white bold + gold dot), nav links semi-transparent white                                |

### Section structure order (from fetched HTML)

1. `div.site-navbar` — absolute transparent navbar (brand + nav links)
2. `div.site-mobile-menu` — slide-in off-canvas mobile menu
3. `div.site-hero` — full-width hero (bg image + heading + description + CTA)
4. `div.site-section` — Featured Events (heading + 3-column event cards)
5. `div.site-section` — Upcoming Events (heading + asymmetric 1+2 grid)
6. `section.site-section` — Video + About (split 6/6: video left, text right)
7. `footer.site-footer` — 3-column footer (About + Navs, Social + Subscribe, Video)
8. Copyright bar

### Icon mapping (lucide)

| Source glyph                    | Recreation                    |
| ------------------------------- | ----------------------------- |
| `icon-menu` (hamburger)         | lucide `Menu`                 |
| `icon-close2` (menu close)      | lucide `X`                    |
| `icon-play` (video play)        | lucide `Play`                 |
| `icon-facebook/twitter/etc`     | lucide `Facebook`/`Twitter`/etc |
| `icon-heart` (footer)           | lucide `Heart`                |

### Picsum placeholder plan

All images are placeholders via `https://picsum.photos/seed/<template>-<n>/<w>/<h>`:
- Hero background: `picsum.photos/seed/turntable-hero/1920/1080`
- Event 1: `picsum.photos/seed/turntable-event1/800/600`
- Event 2: `picsum.photos/seed/turntable-event2/800/600`
- Event 3: `picsum.photos/seed/turntable-event3/800/600`
- Upcoming grid images: `picsum.photos/seed/turntable-upcoming<n>/800/600`
- Video thumbnail: `picsum.photos/seed/turntable-video/800/600`
- Footer video: `picsum.photos/seed/turntable-footer-vid/400/300`

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/turntable` from the simplest existing app
       (`cp -r apps/<simplest> apps/turntable`), rename package to
       `@free-react-templates/turntable`, add Nunito 400 + Montserrat 700
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `turntable.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing Library,
       100% coverage): Navbar (desktop links, mobile hamburger toggle,
       dropdown visibility), Hero (heading, description, CTA button),
       FeaturedEvents (3 cards with image, date badge, title, description,
       info link), UpcomingEvents (asymmetric grid with 3 blocks),
       VideoAbout (video thumbnail with play overlay, heading, text, CTA),
       Footer (3 columns, subscribe form, social icons, copyright),
       App (landmarks, document title "Turntable — DJ Events").
3. [ ] Theme + layout shell: Tailwind `@theme` tokens for brand gold
       `#e4ae50`, body text `rgba(255,255,255,0.5)`, dark bg `#000`,
       Nunito + Montserrat fonts. Section vertical padding responsive.
4. [ ] Navbar component: absolute position, transparent bg, brand with
       gold dot, nav links (Home, DJs, Shows w/ dropdown, Events, About,
       Contact), mobile hamburger + slide-in menu. Dropdown: hover to
       show, white bg, border + shadow, arrow pseudo-element.
5. [ ] Hero component: full-width section with picsum background image
       (cover, center), semi-transparent dark overlay, heading, paragraph,
       "Join Us" btn-outline-primary button.
6. [ ] Featured Events: centered heading with w-border divider, 3-column
       grid (responsive: stack on mobile), event cards with image, absolute
       date badge (gold bg, day+month stacked), title link, description,
       "Info" more-link.
7. [ ] Upcoming Events: heading, asymmetric grid (`site-block-retro` flex),
       left column full-height image + overlaid title on gold badge, right
       column two stacked image+title blocks.
8. [ ] Video + About: split 6/6 layout, left has image with 70px circular
       play button overlay (white bg, gold Play icon), right has heading,
       lead paragraph, body text, gold "Join Us" primary button.
9. [ ] Footer: 3-column dark footer. Col 1: About Us + Navigations links.
       Col 2: Follow Us social icons + Subscribe form (email input +
       button, mock submit). Col 3: Watch Video thumbnail with play
       overlay. Gold footer heading underline (40px wide, 2px).
       Copyright bar with Component Dock link.
10. [ ] Run `npm run verify:app -- turntable` (typecheck → lint → vitest
        100% → build) and fix until green.
11. [ ] Open PR `feat/template-turntable` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (black `#000`,
        gold `#e4ae50`, Nunito + Montserrat, transparent navbar over hero,
        event cards with date badges, asymmetric upcoming grid, video
        split section, dark footer), and what differs (renamed "Turntable",
        picsum placeholders, lucide icons, mock subscribe form, Component
        Dock footer, accessible semantics).
12. [ ] Bookkeeping after merge: mark TEMPLATES.md line 2265 `[x]` + surge
        URL (`https://turntable.free.componentdock.com`), `npm run
    readme:status`, push.
