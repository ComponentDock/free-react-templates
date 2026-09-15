# Compassion (ColorLib Inward) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-compassion`. Recreation name: **Compassion** (NEW
> name — the ColorLib source keeps its name "Inward").

## Source mapping

- **ColorLib item:** "Inward" (TEMPLATES.md lines 1274 and 1301; sections
  "## Charity (37)" and "## Church (22)"). The slug `inward` appears in
  TWO rows — mark BOTH `[x]` when done.
- **Source URL:** https://colorlib.com/wp/template/inward/
- **Preview URL — REACHABLE (verified 2026-09-15 by curl):**
  `https://preview.colorlib.com/theme/inward/` (HTTP 200, ~18 KB HTML).
- **Preview CSS:** `css/style.css` (main stylesheet — all component styles).
  Bootstrap 4 from `css/bootstrap.css`. Icons: Ionicons + FontAwesome
  (REPLACE with lucide-react). Fonts: Google Fonts link for Open Sans
  (300,400,700,800) and Playfair Display (300,400,700).

## Reference research (done — do not redo)

### Screenshot (`inward-free-template.jpg`, 1200x946)

Browsed visually via vision_analyze 2026-09-15 (matches the live page).
The screenshot shows the above-the-fold view: transparent navbar with
"INWARD" wordmark and nav links (HOME, ABOUT, MESSAGES, EVENTS, CONTACT),
full-viewport hero with a hand raised against warm bokeh/nature background,
white serif "Welcome to Inward" heading centered, subtext paragraph,
white outlined "REQUEST A PRAYER" button. Below the hero: a split section
with forest/trees camp meeting background on the left (white heading
"Camp Meeting Will Start Soon", countdown timer, "JOIN NOW" button) and
clean white right side with "Upcoming Events" heading and a list of event
items in table-row layout with date labels and "MORE INFO" links. Clean,
modern church website aesthetic with warm naturals and muted blue accent.

### Design tokens (extracted from css/style.css)

| Token | Value | Usage |
|-------|-------|-------|
| Brand/accent color | `#6A99CB` | Links, dropdown hover, navbar brand span |
| Button hover | `#90b3d8` | btn-primary hover state |
| Body text | `#b3b3b3` | Main paragraph text |
| Headings | `#000` | h1, h2, h3 |
| Page background | `#fff` | Body background |
| Footer background | `#262626` | site-footer bg |
| Footer border | `#2e2e2e` | site-footer border-top |
| Heading font | Playfair Display | h1, h2, h3 |
| Body font | Open Sans | body, paragraphs |
| Button style | uppercase, letter-spacing .2em, border-radius 0 | All .btn |
| Sermon card bg | `#000` | .sermon |
| Sermon text | `#fff` | .sermon h2 a |
| Testimony dot inactive | `#cccccc` | .owl-dot |
| Testimony dot active | `#000` | .owl-dot.active |
| Testimony photo | border-radius 50% | Circular pastor photos |
| Event border | `#ccc` | .event-list-item borders |
| Event date text | `#b3b3b3` | .event-list-item .date |

### Section order (from live DOM, verified against screenshot)

1. Navbar (transparent absolute on desktop, black bg on mobile)
2. Hero slider (full-viewport bg image, dark overlay, Playfair h1, outlined CTA)
3. Worship Time (split: left camp meeting bg + countdown; right upcoming events list)
4. Audio Sermons (bg-light, 3-column black sermon cards with audio players)
5. Latest Events (white bg, 3-column event cards with thumbnails)
6. Personal Testimony (bg-light, owl-carousel, circular photos, blockquotes)
7. Footer (dark #262626, 4-column: church info + social, The Church links, Messages links, contact)

## Implementation tasks

- [ ] Create `apps/compassion/` (copy simplest existing app, rename package to `@free-react-templates/compassion`)
- [ ] Set up `vite.config.ts` with `injectUiSource()` helper
- [ ] Set up `src/index.css` with Tailwind entry + theme tokens (`--color-brand: #6A99CB`)
- [ ] Set up `index.html` with Google Fonts links (Open Sans 400/700/800, Playfair Display 400/700)
- [ ] Implement `Navbar.tsx` — transparent on desktop, black on mobile, brand + links + dropdown
- [ ] Implement `Hero.tsx` — full-viewport bg image, dark overlay, Playfair heading, outlined CTA
- [ ] Implement `WorshipTime.tsx` — split layout: camp meeting bg + countdown | upcoming events list
- [ ] Implement `AudioSermons.tsx` — bg-light, 3-column grid, black sermon cards with audio players
- [ ] Implement `LatestEvents.tsx` — 3-column grid, thumbnail + title + meta + description
- [ ] Implement `PersonalTestimony.tsx` — bg-light, carousel with circular photos + blockquotes
- [ ] Implement `Footer.tsx` — dark footer, 4-column, social icons, Component Dock link
- [ ] Implement `App.tsx` — compose all sections in order
- [ ] Write tests for every component (Vitest + Testing Library, 100% coverage)
- [ ] Register workspace in `package-lock.json` (npm install at root)
- [ ] Set up `public/CNAME` with `compassion.free.componentdock.com`
- [ ] Set `"homepage": "https://compassion.free.componentdock.com"` in package.json
- [ ] Run `scripts/verify-app.sh compassion` (typecheck + lint + tests + build)
- [ ] Mark TEMPLATES.md lines 1274 and 1301 as `[x]` with surge URL
- [ ] Commit as `feat: add Compassion template (ColorLib Inward)` and open PR

## Design notes

- **Component reuse:** Use shared `Button`/`ButtonLink` from `packages/ui` for
  CTAs. Use `cn()` for conditional classes. The countdown in WorshipTime is a
  simple `useState` + `useEffect` interval — no external library needed.
- **Audio players:** The original uses HTML5 `<audio>` with MediaElement.js.
  Recreate as a simple HTML5 `<audio controls>` element — no library needed.
- **Carousel:** The original uses Owl Carousel for hero and testimony. Replace
  with a CSS-based approach or simple React state for the hero (single slide
  or CSS snap), and a minimal React carousel for testimony (prev/next +
  dots).
- **Images:** Use `https://picsum.photos/seed/compassion-<n>/<w>/<h>` for
  all placeholder images. Hero: 1920x1080, sermon cards: 400x300,
  event thumbnails: 300x200, pastor photos: 200x200.
- **Icons:** Replace Ionicons/FontAwesome with lucide-react (Heart, Twitter,
  Facebook, Linkedin, Instagram, ChevronLeft, ChevronRight, etc.).
- **Footer attribution:** Replace Colorlib credit with "Made with
  Component Dock" linking to https://www.componentdock.com/.
