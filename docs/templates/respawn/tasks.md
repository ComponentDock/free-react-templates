# Respawn (ColorLib Amin) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-respawn`. Recreation name: **Respawn** (NEW name —
> the ColorLib source keeps its name "Amin").

## Source mapping

- **ColorLib item:** "Amin" (TEMPLATES.md line 1815; first unchecked `- [ ]` item).
- **Source URL:** https://colorlib.com/wp/template/amin/
- **Preview URL:** https://preview.colorlib.com/theme/amin/ (HTTP 200, reachable, 152KB HTML).
- **Preview CSS:** `css/style.css` (79KB, 2000+ lines) + Bootstrap 4 (`css/bootstrap.min.css`), Font Awesome (`css/font-awesome.min.css`), Owl Carousel (`css/owl.carousel.min.css`), Magnific Popup, SlickNav.

## Reference research (done — do not redo)

### Screenshot analysis

The template is a dark-themed gaming blog with near-black backgrounds. The hero
section has a full-width background photo with a semi-transparent dark overlay,
a featured post on the left with a skewed red category label, headline text,
author info, and a trending posts sidebar on the right with smaller post cards.

Below the hero: sections alternate between `#080808` and `#0d0d0d` dark
backgrounds. Each section has a centered heading, category filter tabs, and
rows of post cards. Post cards have thumbnail images, colored score badges
(green for ratings), dates, and comment counts.

The footer is dark with three columns: brand info + skewed social icons,
"Editor's Choice" posts, and additional content. Social icons have a distinctive
skew transform effect.

### Design tokens (live stylesheet, verified 2026-09-21)

| Token            | Value                              | Use in recreation                                            |
| ---------------- | ---------------------------------- | ------------------------------------------------------------ |
| Body font        | `"Montserrat", sans-serif`        | Google Fonts `<link>` 400/500/600/700                        |
| Heading font     | `"Cinzel", serif`                  | Logo + select headings via Google Fonts                      |
| Page bg          | `#0d0909`                          | Body background                                              |
| Section dark 1   | `#080808`                          | Latest preview, video guide, footer                          |
| Section dark 2   | `#0d0d0d`                          | Update news, Instagram                                       |
| Brand red        | `#c20000`                          | Primary accent — skewed badges, hover states, labels         |
| Red overlay      | `rgba(194,0,0,0.3)`               | Skewed badge background                                      |
| Red overlay 2    | `rgba(194,0,0,0.5)`               | Stronger badge overlay                                       |
| Accent blue      | `#40c4ff`                          | Link highlights                                              |
| Accent green     | `#16b601`                          | Score/rating badges                                          |
| Accent orange    | `#ffaf24`                          | Trending indicators                                          |
| Text white       | `#ffffff`                          | Headings, nav items, body text on dark                       |
| Text light       | `#c4c4c4`                          | Paragraphs, descriptions                                     |
| Text muted       | `#999`                             | Timestamps, meta text                                        |
| Card bg          | `#252525`                          | Social icons, card elements                                  |
| Border radius    | `2px`, `50%`, `60px`              | Subtle borders, circular ratings, pill buttons               |
| Skew             | `skewX(-15deg)` / `skewX(15deg)`  | Category labels, social icons                                |
| Social icon size | 46×46px                            | Footer social icon buttons                                   |
| Hero overlay     | `rgba(0,0,0,0.5)`                 | Dark overlay on hero background image                        |
| Dark overlay 2   | `rgba(13,9,9,0.8)`                | Secondary dark overlay                                       |
| Dark overlay 3   | `rgba(8,8,8,0.5)`                 | Tertiary dark overlay                                        |

### Section structure (order from live DOM)

1. **Top bar** — social icons (left) + right-side links
2. **Navbar** — logo (left) + nav links (center) + search icon (right); mega-menu on "Categories"
3. **Hero section** — background image + overlay; featured post (left) + trending sidebar (right)
4. **Latest Preview** — `#080808` bg; heading + horizontal row of post cards with score badges
5. **News & Update** — `#0d0d0d` bg; heading + tabs (All/Platform/Hardware/Reviews) + grid of posts
6. **Video Guide** — `#080808` bg; heading + tabs + video cards with play buttons
7. **Instagram** — `#0d0d0d` bg; heading + tabs + horizontal post cards with descriptions
8. **Footer** — `#080808` bg; 3-column layout (brand + editor's choice + content); Component Dock credit

### Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/respawn` from the simplest existing app, rename package to
       `@free-react-templates/respawn`, add Montserrat 400/500/600/700 + Cinzel
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `respawn.free.componentdock.com` + `"homepage"`. Register workspace.
2. [ ] Write test suite FIRST (Vitest + Testing Library, 100% coverage):
       TopBar (social icons, right links), Navbar (logo, nav links, mega-menu
       toggle, mobile hamburger), Hero (background overlay, featured post,
       trending sidebar), LatestPreview (heading, score badges, card grid),
       NewsUpdate (heading, tabs, post grid filtering), VideoGuide (heading,
       tabs, video cards with play buttons), Instagram (heading, tabs, post
       cards with descriptions), Footer (3-column, Component Dock link), App
       (landmarks, document title "Respawn — Gaming Blog").
3. [ ] TopBar component: dark bg, flex row with social icons (lucide) on left
       and right-side text links; skew transform on social icon containers.
4. [ ] Navbar component: logo with Cinzel serif font, nav links, search icon,
       mega-menu dropdown on Categories hover (platform subcategories + images),
       hamburger menu for mobile; sticky positioning.
5. [ ] Hero section: full-width bg image with `rgba(0,0,0,0.5)` overlay,
       featured post card (skewed `#c20000` category label, headline, author
       avatar, date, comment count), trending sidebar with 3 smaller cards.
6. [ ] LatestPreview section: `#080808` bg, "Latest Preview" heading, horizontal
       row of post cards with thumbnails, green `#16b601` score badges, titles,
       dates, comment counts; responsive carousel behavior.
7. [ ] NewsUpdate section: `#0d0d0d` bg, "News & update" heading, category tabs
       (All/Platform/Hardware/Reviews) with active state, grid of post cards
       with thumbnails, category badges, titles, authors, dates, comment counts;
       tab filtering.
8. [ ] VideoGuide section: `#080808` bg, "Videos guide" heading, category tabs,
       video cards with thumbnails, play button overlay, titles, dates, comment
       counts.
9. [ ] Instagram section: `#0d0d0d` bg, "Instagram" heading, category tabs,
       horizontal post cards with images, score badges, titles, author, dates,
       descriptions.
10. [ ] Footer: `#080808` bg, 3-column layout — left (logo, description,
       skewed social icons in `#252525` at 46×46px), middle ("Editor's Choice"
       posts), right (additional content). Bottom bar with Component Dock credit
       linking https://www.componentdock.com/.
11. [ ] Run `npm run verify:app -- respawn` and fix until green.
12. [ ] Open PR `feat/template-respawn` → merge immediately; PR description
       includes source URL, preview URL, token list, and what differs.
13. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1815 `[x]` + surge URL,
       `npm run readme:status`, push.

### Fidelity notes

- The skewed label effect (`skewX(-15deg)` container, `skewX(15deg)` inner) is
  the signature visual element — must replicate exactly.
- Two fonts: Cinzel (serif) for the logo, Montserrat (sans) for body/nav/headings.
- Sections alternate between `#080808` and `#0d0d0d` — maintain this rhythm.
- Score badges are green (`#16b601`) circles with white text.
- Social icons in footer use skew transform — unique visual detail.
- Hero uses a real background image with semi-transparent dark overlay.
- Mega-menu on Categories is a distinguishing feature of this template.
- No complex animations expected — standard hover/focus states.
