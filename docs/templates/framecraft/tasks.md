# FrameCraft (ColorLib Homebuilder) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-framecraft`. Recreation name: **FrameCraft** (NEW name —
> the ColorLib source keeps its name "Homebuilder").

## Source mapping

- **ColorLib item:** "Homebuilder" (TEMPLATES.md line 1350; section
  "## Construction Company (15)"). Third unchecked item (after
  Constructioncompany → BuildSite, Constructo → prepped, Inds → ForgePoint).
- **Source URL:** https://colorlib.com/wp/template/homebuilder/
- **Preview URL — REACHABLE (verified 2026-09-16 by direct fetch):**
  **`https://preview.colorlib.com/theme/homebuilder/`**
  (HTTP 200, title: "Home Builder - Free Bootstrap 4 Template by Colorlib").
- **Preview CSS:** `css/style.css` (86KB, single monolithic file — Bootstrap 4
  customized). Also loads: `font-awesome.min.css` (4.7), `owl.carousel.min.css`,
  `owl.theme.default.min.css`, `magnific-popup.css`, `ionicons.min.css`,
  `flaticon.css`, `icomoon.css`, `animate.css`. Fonts: **Poppins** (Google Fonts
  400/500/600/700/800). Font Awesome 4.7 + Ionicons + Flaticon → REPLACE with
  lucide-react.

## Reference research (done — do not redo)

### Screenshot (`homebuilder-free-template.jpg`)

Browsed visually in the browser 2026-09-16. Aesthetic: warm, professional home
builder landing. White top bar with "Homebuilder." logo (bold + gold ".") and
social icons. Dark navy navbar with white nav links, "Home" highlighted in gold,
search form on the right. Full-width hero with dark house photo, white text
"PROFESSIONAL BUILDER" + gold subtitle. Below: 4-column gold icon services
grid, 3-card features bar, "Welcome to Home Builder" about with tabbed content,
animated counters, project carousel, gold-background testimonial carousel,
3 blog cards, and a dark footer. Color palette: gold `#fdbe34`, dark navy
`#00043c`, white, muted gray.

### Design tokens (live stylesheet + rendered page, verified 2026-09-16)

| Token | Value | Use |
|-------|-------|-----|
| Brand gold | `#fdbe34` | Primary accent — active nav bg, service icons, buttons, testimonial bg, counters, highlights |
| Brand gold hover | `#fcad02` / `#fdc64d` | Button hover states |
| Dark navy | `#00043c` | Navbar bg, footer bg, dark sections |
| White | `#fff` | Content bg, button text, hero text |
| Light bg | `#f8f9fd` | Alternate section backgrounds |
| Body text | `#333333` | Paragraph text |
| Muted text | `#6c757d` | Secondary/muted text |
| Link hover | `#007bff` | Some link hover states (Bootstrap blue — override) |
| Font | Poppins 400/500/600/700/800 | Google Fonts `<link>` — body + headings |
| Navbar | bg `#00043c`, white text, gold active | Dark navbar with gold active pill |
| Button — primary | bg `#fdbe34`, white text, rounded (Bootstrap .btn-primary override) | CTAs, form submit |
| Button — outline | border `#fdbe34`, transparent bg, gold text | Secondary CTAs |
| Service icons | Gold circle `#fdbe34` bg, 70px diameter | 4-column grid icons |
| Hero overlay | Dark gradient over background images | Full-width slider |
| Tab active | Gold underline `#fdbe34` | About section tabs |
| Counter section | Dark bg (`#00043c`), white numbers, gold accents | 4 counters in a row |
| Testimonial section | Gold `#fdbe34` bg ("bg-primary"), white text | Carousel section |
| Blog cards | White bg, image top, text below | 3-column grid |
| Footer | Dark bg, white headings, muted links, newsletter + quote forms | 4-column footer |

### Section order (from HTML)

1. **Top bar** — white bg, logo "FrameCraft." (bold + gold), social icons
2. **Navbar** — dark navy `#00043c`, nav links (Home active in gold), search form
3. **Hero slider** — 3 slides (owl carousel), background images, dark overlay,
   gold subtitle, white headline, description, dot nav
4. **Services** — 4-column grid: gold circle icons (Construction, House Renovation,
   Painting, Architecture Design) + titles + descriptions
5. **Features** — 3 horizontal cards: Expert & Professional, High Quality Work,
   24/7 Help Support — icon + title + description
6. **About** — "Welcome to FrameCraft" heading, subtitle, tabs
   (Our Mission / Our Vision / Our Value), paragraph
7. **Counter** — dark bg, 4 counters: Years of Experience / Project Done /
   Professional Expert / Machineries Equipments (animated on scroll)
8. **Projects** — owl carousel of project cards with images + category labels
   (Building, College Health Profession)
9. **Testimonials** — gold `#fdbe34` bg, "Testimonial" / "Happy Clients" heading,
   carousel with quote text, author name + role
10. **Blog** — "Our Blog" / "Recent Blog" heading, 3 cards (image, date, admin,
    comments count, title)
11. **Footer** — dark bg: newsletter signup, About us + social, Services links,
    About links, Resources links, Request A Quote form, copyright (→ Component Dock)

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/framecraft` from the simplest existing app, rename package
       to `@free-react-templates/framecraft`, add Poppins 400/500/600/700/800
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `framecraft.free.componentdock.com` + `"homepage"`. Register workspace
       in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing Library,
       100% coverage): TopBar (logo with gold accent, social icons),
       Navbar (dark bg, nav links, gold active state, search form, mobile
       hamburger toggle), HeroSlider (3 slides, dot nav, auto-play, headline
       + subtitle + description), Services (4 gold circle icon cards),
       Features (3 horizontal cards), About (heading, tabs with 3 content
       panels, tab switching), Counter (4 animated counters), Projects
       (carousel of cards), Testimonials (gold bg, carousel, quote + author),
       Blog (3 cards with date/admin/comments/title), Footer (newsletter,
       about, links, quote form, copyright), App (landmarks, document title
       "FrameCraft — Home Builder").
3. [ ] TopBar: white bg, flex row, logo "FrameCraft" with "Craft" in gold
       `#fdbe34`, social icon links (lucide: Twitter, Facebook, Instagram,
       Dribbble or similar).
4. [ ] Navbar: dark navy `#00043c` bg, Poppins font, white nav links (Home,
       About, Our team, Project, Blog, Contact), "Home" with gold active bg
       `#fdbe34`, search input + button on right. Mobile: hamburger toggle
       with aria-expanded, collapsible menu.
5. [ ] Hero slider: 3 slides with picsum.photos seeded background images,
       dark overlay gradient, gold subtitle ("WE BUILD YOUR HOME"), white
       Teko/Poppins headline ("PROFESSIONAL BUILDER"), description, dot
       navigation. Implement fade/slide transition.
6. [ ] Services: 4-column grid, gold circle icons (lucide: HardHat, PaintRoller,
       Hammer, Ruler), service name bold, description text.
7. [ ] Features: 3 horizontal cards with icons (lucide: Users, Award, Headphones),
       title, description.
8. [ ] About: heading "Welcome to FrameCraft", subtitle, 3 tabs (Our Mission /
       Our Vision / Our Value), gold active tab underline, content panel
       switching.
9. [ ] Counter: dark navy bg, 4 counters (e.g. 200 / 500 / 100 / 50),
       animate from 0 on scroll (IntersectionObserver).
10. [ ] Projects: carousel of cards with picsum images and category labels.
11. [ ] Testimonials: gold `#fdbe34` bg, "Testimonial" / "Happy Clients"
        heading, carousel with quote text, author name + role.
12. [ ] Blog: 3 cards with picsum images, date, admin name, comment count,
        title.
13. [ ] Footer: dark bg, newsletter signup (email + button), About us text
        + social icons, column links (Services, About, Resources), Request A
        Quote form (email + message + Send button), copyright → Component Dock.
14. [ ] Run `npm run verify:app -- framecraft` (typecheck → lint → vitest
        100% → build) and fix until green.
15. [ ] Open PR `feat/template-framecraft` → merge immediately.
