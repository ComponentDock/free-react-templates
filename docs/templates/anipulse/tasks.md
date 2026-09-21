# Anipulse (ColorLib Anime) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-anipulse`. Recreation name: **Anipulse** (NEW name —
> the ColorLib source keeps its name "Anime").

## Source mapping

- **ColorLib item:** "Anime" (TEMPLATES.md line 1816; second unchecked `- [ ]` item).
- **Source URL:** https://colorlib.com/wp/template/anime/
- **Preview URL:** https://preview.colorlib.com/theme/anime/ (HTTP 200, reachable, 60KB HTML).
- **Preview CSS:** `css/style.css` (35KB) + Bootstrap 4 (`css/bootstrap.min.css`), Font Awesome, Owl Carousel, SlickNav, Plyr (video), Nice Select.

## Reference research (done — do not redo)

### Screenshot analysis

The template is a dark navy anime streaming/catalog site. The hero is a full-
width carousel with anime show slides — each has a background image, category
label, show title, description, and "Watch Now" button. Below: multiple
grids of anime cards (Trending Now, Popular Shows, Recently Added, Live Action,
Top Views, New Comment). Each card has a thumbnail image with episode/comment/
view count badges overlaid, genre tag pills, and show title. A sidebar shows
top-viewed shows with time filter tabs. The footer is minimal with centered nav
links and copyright.

### Design tokens (live stylesheet, verified 2026-09-21)

| Token            | Value                              | Use in recreation                                            |
| ---------------- | ---------------------------------- | ------------------------------------------------------------ |
| Body font        | `"Mulish", sans-serif`             | Google Fonts; body text, descriptions                        |
| Heading font     | `"Oswald", sans-serif`             | Google Fonts; section titles, sidebar headers                |
| Page bg          | `#0b0c2a`                          | Overall page background (dark navy)                          |
| Section bg       | `#070720`                          | Product sections, footer (deeper navy)                       |
| Brand red        | `#e53637`                          | Primary accent — episode badges, section title bars, CTA     |
| Red alt          | `#ca2027`                          | Darker red variant                                           |
| Red hover        | `#ff4343`                          | Button hover state                                           |
| Accent blue      | `#39a1f2`                          | Twitter social color                                         |
| Facebook blue    | `#4267b2`                                                  |
| Accent gold      | `#e89f12`                          | Rating indicators                                            |
| Text white       | `#ffffff`                          | Headings, nav, body on dark                                  |
| Text light       | `#b7b7b7`                          | Paragraphs, footer links                                     |
| Text muted       | `#a6a6a6`                          | Secondary text                                               |
| Badge gray       | `#3d3d3d`                          | Comment/view count badges on cards                           |
| Card image       | 325px height, `border-radius: 5px` | Thumbnail containers                                         |
| Episode badge    | `#e53637`, 4px radius, top-left   | Episode count overlay                                        |
| Comment badge    | `#3d3d3d`, 4px radius, bottom-left | Comment count overlay                                      |
| View badge       | `#3d3d3d`, 4px radius, bottom-right | View count overlay                                         |
| Genre tags       | `rgba(255,255,255,0.2)`, 50px radius pills | Genre/category pills on cards                    |
| Section title    | 4px `#e53637` left bar, Oswald 600 uppercase | Heading with vertical accent                    |
| Button primary   | `#e53637`, white, 2px radius, uppercase, letter-spacing 2px | CTA buttons                |
| Hero label       | `#e53637` text on `#fff` bg       | Category label on hero slides                                |
| Hero padding     | 250px top, 50px left              | Hero text positioning                                         |
| Social links     | `#b7b7b7`, 15px                    | Footer navigation links                                      |

### Section structure (order from live DOM)

1. **Top bar** — logo (left) + nav links (right)
2. **Hero carousel** — 3 slides with bg images, category labels, titles, descriptions, "Watch Now" buttons
3. **Trending Now** — heading + grid of anime cards (with sidebar: Top Views + filters)
4. **Popular Shows** — heading + grid of anime cards
5. **Recently Added Shows** — heading + grid of anime cards
6. **Live Action** — heading + grid of anime cards
7. **Top Views** (sidebar) — heading + Day/Week/Month/Years tabs + show list
8. **New Comment** (sidebar) — heading + comment list
9. **Footer** — centered nav links + copyright + Component Dock credit

### Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/anipulse` from the simplest existing app, rename package to
       `@free-react-templates/anipulse`, add Mulish 400/500/600/700 + Oswald
       400/500/600/700 Google Fonts `<link>` in index.html, set `public/CNAME` =
       `anipulse.free.componentdock.com` + `"homepage"`. Register workspace.
2. [ ] Write test suite FIRST (Vitest + Testing Library, 100% coverage):
       TopBar (logo, nav links), HeroCarousel (slides, auto-rotate, category
       labels, "Watch Now" buttons), AnimeCard (thumbnail, episode badge,
       comment badge, view badge, genre pills, title), TrendingNow (heading,
       card grid), PopularShows (heading, card grid), RecentlyAdded (heading,
       card grid), LiveAction (heading, card grid), Sidebar (Top Views heading,
       filter tabs, show list), Footer (nav links, copyright, Component Dock),
       App (landmarks, document title "Anipulse — Anime Streaming").
3. [ ] TopBar component: dark `#0b0c2a` bg, flex row with logo (Oswald font)
       on left, nav links (Homepage, Categories, Our Blog, Contacts) on right;
       responsive hamburger for mobile.
4. [ ] HeroCarousel component: full-width carousel with 3 slides, each with
       background image, dark overlay, category label (`#e53637` on white),
       show title (Oswald), description, "Watch Now" button (`#e53637` bg,
       white text, 2px radius, uppercase, letter-spacing 2px, right arrow
       icon); auto-rotate with dot indicators.
5. [ ] AnimeCard component: thumbnail image (325px height, 5px rounded),
       episode badge (red, top-left), comment badge (gray, bottom-left),
       view badge (gray, bottom-right), genre tag pills (`rgba(255,255,255,0.2)`,
       50px radius), show title below image.
6. [ ] TrendingNow section: "Trending Now" heading with 4px red left accent bar
       (Oswald, uppercase), "View All" link, responsive grid of AnimeCards.
7. [ ] PopularShows section: "Popular Shows" heading + grid.
8. [ ] RecentlyAdded section: "Recently Added Shows" heading + grid.
9. [ ] LiveAction section: "Live Action" heading + grid.
10. [ ] Sidebar component: "Top Views" heading with Day/Week/Month/Years filter
       tabs, list of shows with episode/comment/view counts; "New Comment"
       section below.
11. [ ] Footer: dark `#070720` bg, centered nav links (`#b7b7b7`), copyright
       line, Component Dock credit linking https://www.componentdock.com/,
       scroll-to-top button.
12. [ ] Run `npm run verify:app -- anipulse` and fix until green.
13. [ ] Open PR `feat/template-anipulse` → merge immediately; PR description
       includes source URL, preview URL, token list, and what differs.

### Fidelity notes

- The 4px red left accent bar on section titles is a signature visual element.
- Hero uses a carousel (Owl Carousel in original) — implement with state or
  a lightweight carousel approach.
- Product cards have three overlaid badges (episode, comment, view) — must
  replicate the exact positioning (top-left, bottom-left, bottom-right).
- Genre tags use semi-transparent white pills (`rgba(255,255,255,0.2)`).
- Two fonts: Oswald (headings, section titles) and Mulish (body text).
- Dark navy palette: `#0b0c2a` (page) and `#070720` (sections/footer).
- Sidebar with time-filtered top views is a key feature.
- Minimal footer — just nav links and copyright, no multi-column layout.
