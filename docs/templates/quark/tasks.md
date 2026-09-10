# Quark (ColorLib Atomic) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-quark`. Recreation name: **Quark** (NEW name —
> the ColorLib source keeps its name "Atomic").

## Source mapping

- **ColorLib item:** "Atomic" (TEMPLATES.md line 897, first unchecked item).
  The `wp/template/atomic/` slug appears exactly ONCE in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/atomic/
- **Preview URL — REACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/atomic/` (HTTP 200, 19,204 bytes).
- **Preview CSS:** `css/style.css` (132,719 bytes — Bootstrap 4 base +
  custom Atomic styles). Fonts: "Work Sans" via Google Fonts `<link>`,
  Ionicons icon font (REPLACE with lucide-react, do NOT ship). Scripts:
  jQuery, Owl Carousel, Animsition (all replaced by React equivalents).

## Reference research (done — do not redo)

### Screenshot (`atomic-free-template.jpg`)

Browsed visually via image analysis. Minimalist, modern, warm-professional
aesthetic. Split hero balancing digital text and organic plant imagery.
Layered shadows between sections creating a 3D page feel. Clean sans-serif
typography. Bright blue accent for CTAs. Overall: balanced, approachable,
design-focused brand feel.

Key visual observations:
- Header: transparent, overlaying hero, "Atomic" bold dark left, nav links
  uppercase light gray right
- Hero: split — left beige `#f2f0eb` with headline + blue CTA button,
  right side with plant/succulent photo + circular play button
- Features: white section with subtle shadow, 3 columns with outline icons
- About: 2-column with image + text, 3 small feature blocks below
- Gallery: full-width image carousel
- Portfolio: 4 cards on light `#f8f9fa` background
- Stats: bright blue `#0389FF` section with counter numbers
- Testimonials: quote carousel with download CTA
- Footer: 5-column widget grid on light bg

### Design tokens (live stylesheet + rendered page)

| Token       | Value                                  | Use                                                                                   |
| ----------- | -------------------------------------- | ------------------------------------------------------------------------------------- |
| Primary     | `#0389FF`                              | CTA buttons, bg-primary section, CSS var `--primary`                                 |
| Primary hov | `#006ecf`                              | Button hover state                                                                    |
| Hero bg     | `#f2f0eb`                              | Hero left-column background (warm light beige)                                        |
| Page bg     | `#ffffff`                              | Body and features section                                                             |
| Light bg    | `#f8f9fa`                              | Portfolio grid + footer (`bg-light`)                                                  |
| Ink         | `#212529`                              | Body text color                                                                       |
| Heading     | `#000`                                 | h1 color (50px, weight 500)                                                           |
| Muted       | `#888888`                              | Nav links                                                                             |
| Desc        | `#999999`                              | Description paragraphs                                                                |
| Icon        | `#cccccc`                              | Outline feature icons                                                                 |
| Font        | "Work Sans" (Google Fonts)             | Body 1rem/1.5; h1 50px; h2 30px; h3=h5 18px; heading class 30px/50px/18px           |
| Btn radius  | `0.25rem` (4px)                        | Default `.btn` radius; hero CTA uses `.py-3.px-4` (larger padding)                    |
| Counter     | 50px white, label uppercase white 0.5  | Stats section counters                                                                |

### Section structure order (from live DOM)

1. `header.templateux-navbar.dark` — fixed transparent nav
2. `div.templateux-cover` — hero (min-height 800px, split 2-col)
3. `div.templateux-section` — features (3-col icons, white bg, overlap shadow)
4. `div.templateux-section` — about (2-col + 3 features, white bg)
5. `div.owl-carousel.wide-slider` — gallery carousel (3 images)
6. `div.templateux-section.bg-light` — portfolio (4 thumbnail cards)
7. `div.templateux-section.bg-primary` — stats/counter (blue, play video + 3 counters)
8. `div.templateux-section` — testimonials (carousel + download CTA)
9. `footer.templateux-footer.bg-light` — footer (5 widget columns)

### Icon mapping (lucide-react)

| Source (Ionicons)                  | Recreation                          |
| ---------------------------------- | ----------------------------------- |
| ion-bulb (Intuitive Thinking)      | lucide `Lightbulb`                  |
| ion-scissors (Orange for Carrots)  | lucide `Scissors`                   |
| ion-infinity (Infinite Pos.)       | lucide `Infinity`                   |
| ion-refresh (Regular Update)       | lucide `RefreshCw`                  |
| ion-lock (Good Security)           | lucide `Lock`                       |
| ion-play (Play Video / hero)       | lucide `Play`                       |
| Social icons (footer)              | lucide `Twitter`, `Facebook`, etc.  |

### Picsum placeholder plan

- Hero image: `https://picsum.photos/seed/quark-hero/800/800`
- Gallery images: `https://picsum.photos/seed/quark-gal-{1,2,3}/1200/600`
- Portfolio thumbnails: `https://picsum.photos/seed/quark-port-{1,2,3,4}/600/400`

### Distinctive features to preserve

1. **Layered shadow overlap** between hero → features (the `templateux-overlap`
   class creates a floating elevated effect)
2. **Split hero** with beige left + image right + play button overlay
3. **Animsition fade transitions** between page sections (can replace with
   simple CSS fade-in-on-scroll or Framer Motion)
4. **Counter animation** (numbers count up from 0 when scrolled into view)
5. **Owl Carousel** style image slider (replace with Embla or similar React
   carousel)

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/quark` from the simplest existing app, rename package
       to `@free-react-templates/quark`, add Work Sans 400/500/600 Google
       Fonts `<link>` in index.html, set `public/CNAME` =
       `quark.free.componentdock.com` + `"homepage"`. Register workspace
       in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing Library,
       100% coverage): Navbar (fixed, transparent, brand + links), Hero
       (split layout, heading, CTA, play button, responsive stacking),
       Features (3-column icons, overlap shadow), About (2-col + 3 features),
       Gallery (carousel with images), Portfolio (4 cards on light bg),
       Stats (blue bg, 3 counters, animation), Testimonials (carousel),
       Footer (5 columns, Component Dock credit), App (landmarks, title).
3. [ ] Navbar: fixed position, transparent bg, z-index above hero, brand
       name left, nav links right (uppercase, `#888888`), responsive
       hamburger menu. Use `<nav>` with `aria-label="Main navigation"`.
4. [ ] Hero: split 2-col layout (`grid` or flex), left col bg `#f2f0eb`,
       h1 (50px, black, "Design a better website template."), paragraph
       (`#999999`), CTA button (`#0389FF`, white text, `py-3 px-4`,
       0.25rem radius); right col: placeholder image + circular play
       button (light gray bg, white play icon). Min-height 800px.
       Responsive: stack vertically ≤768px.
5. [ ] Features section: white bg, `templateux-overlap` shadow effect,
       3-column grid, each with lucide icon (Lightbulb, Scissors,
       Infinity), h3 heading, p description. Use `cn()` for class
       composition.
6. [ ] About section: h2 heading "Good Design is a Good Start" (30px),
       2-column layout (image left, text right), 3 small feature blocks
       below (RefreshCw/Regular Update, Infinity/Infinite Possibilities,
       Lock/Good Security) each with icon + heading + description.
7. [ ] Gallery carousel: implement a simple image slider with prev/next
       arrows and 3 images. Use Embla Carousel or a lightweight React
       alternative. No dependency on Owl Carousel.
8. [ ] Portfolio grid (bg-light): 4 cards in 2-col grid on `#f8f9fa`,
       each with image, heading, description. Use deterministic picsum
       URLs.
9. [ ] Stats/counter section: `#0389FF` bg, "Play Video" heading +
       subtext on left, 3 counter blocks on right (number 50px white +
       label uppercase white opacity 0.5). Implement count-up animation
       with IntersectionObserver.
10. [ ] Testimonials: carousel with at least 2 testimonials, each with
        quote + author. "Download for free" CTA button (`#0389FF`).
11. [ ] Footer: 5-column widget grid on `#f8f9fa`, columns: About (text
        + social), Learn More, Support, About Us, Connect With Us. Copyright
        line. Component Dock link.
12. [ ] Run `npm run verify:app -- quark` (typecheck → lint → vitest
        100% → build) and fix until green.
13. [ ] Open PR `feat/template-quark` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (`#0389FF` primary,
        `#f2f0eb` hero, Work Sans, split hero, layered shadows, counters),
        and what differs (renamed "Quark", Work Sans via Google Fonts,
        lucide icons, React carousel instead of Owl, Animsition replaced
        with scroll animations, Component Dock footer).
14. [ ] Bookkeeping after merge: mark TEMPLATES.md line 897 `[x]` + surge
        URL (`https://quark.free.componentdock.com`), `npm run
        readme:status`, push.
