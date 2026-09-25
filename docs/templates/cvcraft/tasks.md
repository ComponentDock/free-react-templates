# CVCraft (ColorLib Cvportfolio) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-cvcraft`. Recreation name: **CVCraft** (NEW name —
> the ColorLib source keeps its name "Cvportfolio").

## Source mapping

- **ColorLib item:** "Cvportfolio" (TEMPLATES.md line 2391; section "## Portfolio (10)" at line 2388).
  The `wp/template/cvportfolio/` slug appears exactly ONCE in TEMPLATES.md (no dup rows).
- **Source URL:** https://colorlib.com/wp/template/cvportfolio/
- **Preview URL — REACHABLE (verified 2026-09-26 by direct fetch):**
  **`https://preview.colorlib.com/theme/cvportfolio/`**
  (HTTP 200, full rendered DOM, 404 lines of HTML).
- **Preview CSS:** `01-cv-portfolio/css/styles.css` (262 lines, hand-written) +
  `01-cv-portfolio/css/responsive.css` (responsive breakpoints at 1200px, 992px, 767px) +
  Bootstrap (grid only) + Ionicons (icon font — REPLACE with lucide-react, do not ship).
  Scripts: Fluidbox (lightbox — REPLACE with native or no lightbox). No jQuery dependency
  beyond Fluidbox.
- **Fonts:** Google Fonts — Poppins (400, 500, 600, 700) + Allura (400, script/accent).
  Load via `<link>` in `index.html`.

## Section-by-section design notes

### 1. Header (absolute-positioned, orange bar)
- `position: absolute; top: 30px` — overlays the hero image
- `background: #FFAD01`, `border-radius: 5px`, `padding: 30px 40px 20px`, white text
- 3-column layout (col-lg-4 each): location icon + address, phone icon + number + hours,
  email icon + address + reply time
- "Download CV" button: floated right, `padding: 15px 30px`, `border-radius: 4px`,
  `background: #FFAD01`, white text, `box-shadow: inset 0 0 4px rgba(0,0,0,.3)`,
  hover: `translateY(-4px)`
- Mobile: stacks vertically

### 2. Intro Section (hero with profile)
- Full-width background image (`background-size: cover`), dark overlay via `::before` (`rgba(0,0,0,.2)`)
- White bottom triangle via `::after` (150px height, white bg, positive z-index trick)
- Profile image: `200px × 200px`, `border-radius: 100px`, pulled up `-100px` over the hero
- Name: h2 bold, Title: h4 in orange (#FFA600)
- Information list: centered, block-level items
- Social icons: `35px` circle buttons, `#887392` bg, orange hover via scale transform on ::after pseudo
- Padding-top: 200px desktop, 250px tablet, 350px mobile

### 3. Portfolio Section (filterable grid)
- 2-column layout: heading left (col-sm-4), filter + grid right (col-sm-8)
- Heading: "Portfolio" h3 bold + "MY WORK" h6 in #999, left orange bar (::before)
- Filter tabs: inline links, active = orange (#FFA804)
- Grid: 3 columns (`width: 33.333%`), `padding: 0 7.5px`, `margin-top: 15px` per item
- Some items use `.p-item-2` class for side-by-side images within one grid cell
- Implement with CSS grid or Tailwind grid, filter via state

### 4. About Section (skills with radial progress)
- 2-column: heading left, content right
- Heading: "About me" h3 bold + "PROFESSIONAL PATH" h6 in #999, left orange bar
- Bio paragraph in #777
- 4-column row of radial progress bars (col-lg-3 each)
- Skills: HTML5 & CSS3 (97%), Web Design (78%), Java (67%), PHP (97%)
- Progress bars: `max-width: 200px`, centered, number inside with % suffix, label below
- Use circular progress (SVG or CSS conic-gradient) — no library needed

### 5. Experience Section (dark purple timeline)
- `background: #28023D`, white text
- 2-column: heading left, entries right
- Heading: "Work Experience" h3 bold + "PREVIOUS JOBS" h6 in #999, left white bar
- Each entry: title h4 bold, company h5 in orange (#FFA804), date h6, description p in #ddd, bullet list
- Timeline: `::after` vertical line (left side, 2px #ccc), dots: `10px` circle, `2px solid #fff` border
- Entries: margin-bottom 50px each

### 6. Education Section (white background, orange timeline)
- White bg, 2-column: heading left, entries right
- Heading: "Education" h3 bold + "ACADEMIC CAREER" h6 in #999, left orange bar
- Each entry: degree h4 bold, institution h5 in orange, date h6 in #999, description p
- Timeline: `::after` vertical line (`2px #ccc`, positioned at `-51px` left), dots: `16px` circle
  `#FFAB00` with `box-shadow: 0 0 0 8px rgba(255,171,0,.4)` glow ring
- Entries: margin-bottom 50px each

### 7. Counter Section (background image stats)
- Background image + dark overlay (`rgba(0,0,0,.2)`)
- 4 stats in a row (col-lg-3 each)
- Each: large number (h1, right-aligned title area) + small label (h5, positioned absolute right)
- Numbers: 3, 25, 311, 732 — use count-up animation on scroll
- Labels: "Coder Degrees", "Project Completed", "Satisfied Clients", "Finished Projects"

### 8. Footer
- `background: #28023D`, centered text
- Copyright line with heart icon (use lucide-react Heart)
- Link to https://www.componentdock.com/ ("Component Dock") — replaces ColorLib attribution

## Component structure (proposed)

```
apps/cvcraft/
├── src/
│   ├── main.tsx              (entry)
│   ├── App.tsx               (composes all sections)
│   ├── index.css             (Tailwind + theme tokens)
│   ├── components/
│   │   ├── Header.tsx        (contact bar + Download CV button)
│   │   ├── IntroHero.tsx     (profile photo, name, title, info, social icons)
│   │   ├── Portfolio.tsx     (filter tabs + image grid)
│   │   ├── About.tsx         (bio + radial progress bars)
│   │   ├── Experience.tsx    (dark purple timeline)
│   │   ├── Education.tsx     (white timeline with orange dots)
│   │   ├── Counter.tsx       (stats with count-up)
│   │   └── Footer.tsx        (copyright + ComponentDock)
│   └── test/
│       └── setup.ts
├── public/
│   └── CNAME                 (cvcraft.free.componentdock.com)
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── vitest.config.ts
```

## Fidelity checklist

- [ ] Match 8 sections in exact order from original
- [ ] Match orange (#FFA804) accent color throughout
- [ ] Match dark purple (#28023D) for experience + counter + footer
- [ ] Match Poppins font family (Google Fonts)
- [ ] Match profile image circle (200px, pulled up over hero)
- [ ] Match header as absolute-positioned orange bar overlaying hero
- [ ] Match social icons purple→orange hover animation
- [ ] Match education timeline orange dots with glow ring
- [ ] Match counter section layout (right-aligned large numbers)
- [ ] Replace ColorLib attribution with ComponentDock link in footer
- [ ] Use picsum.photos for all placeholder images
- [ ] Use lucide-react for all icons (replace Ionicons)
- [ ] No ColorLib references in any app code
