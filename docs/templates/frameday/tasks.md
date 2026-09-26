# FrameDay (ColorLib Louie) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-frameday`. Recreation name: **FrameDay** (NEW name —
> the ColorLib source keeps its name "Louie").

## Source mapping

- **ColorLib item:** "Louie" (TEMPLATES.md line 2457; section
  "## Photography (49)" at line 2433).
- **Source URL:** https://colorlib.com/wp/template/louie/
- **Preview URL — REACHABLE (verified 2026-09-26):**
  **`https://preview.colorlib.com/theme/louie/`** (HTTP 200, 21,969 bytes).
- **Preview CSS:** `css/style.css` (2,789 lines — Bootstrap 4 + custom
  photographer portfolio styles). Fonts loaded via Cloudflare `@font-face`:
  Poppins (300–700), Montserrat (300–700), Herr Von Muellerhoff (400).

## Reference research (done — do not redo)

### Live preview DOM structure

The preview is a single-page photographer portfolio with this section order:

1. **Sidebar** (fixed left, 22% width): circular author portrait (160px),
   author name, vertical nav menu (Home, Collection, About Me, My Services,
   Blog, Contact), newsletter form at bottom.
2. **Hero** (50/50 split): left = full-height image carousel (owl carousel
   with 2 slides), right = scrollable author info text with "Hello I'm"
   subheading, big background name, main heading + bio paragraph,
   signature in cursive font, social icons.
3. **Instagram grid** (5 equal columns): each 200px tall, hover overlay
   with Instagram icon, no gutters.
4. **Footer** (dark `#242423`): 3 columns — Recent Photos (6 thumbnails),
   Archives (month list with counts), Contact (address, phone, email).

### Design tokens (from CSS analysis)

| Token | Value | Source CSS |
|-------|-------|-----------|
| Brand gold | `#ccb78f` | Logo link color, accents |
| Brand blue | `#78d5ef` | `.btn-primary` background |
| Dark footer | `#242423` | `.ftco-footer` background |
| Light hero | `#f8f9fa` | `.bg-light` on hero section |
| Body text | `#212529` | Default `color` |
| Muted text | `#6c757d` | Secondary text |
| Subheading | `#bfbfbf` | `.hero-wrap .text .subheading` |
| Big letter | `#ededed` | `.hero-wrap .text .desc h1.big-letter` |
| Subscribe border | `#ece4d5` | Form input border |
| Hover overlay | `rgba(0,0,0,0.2)` | `.insta-img .icon` background |

### Font mapping

| Role | Font | Weights to load |
|------|------|----------------|
| Body text | Poppins | 300, 400, 500, 600, 700 |
| Nav/headings | Montserrat | 400, 500, 700 |
| Signature | Herr Von Muellerhoff | 400 |

### Visual design notes (from screenshot + preview)

- The template is a **photographer personal portfolio** with a clean,
  editorial aesthetic. The sidebar is always visible on desktop (white
  background, subtle shadow on mobile when toggled).
- The hero section uses a 50/50 split with a photo carousel on the left
  and a text-heavy right side. The large decorative name text
  (`#ededed`, `position: absolute`) creates a layered depth effect.
- The signature font (Herr Von Muellerhoff) adds a hand-written,
  personal touch to the author name.
- The Instagram section is a clean 5-column photo grid with a dark
  overlay + icon on hover. No gutters (Bootstrap `no-gutters`).
- The footer is dark (`#242423`) with white text, 3-column layout:
  recent photos as thumbnail grid, archive list, and contact info with
  Bootstrap Open Iconic icons.

## Implementation task outline

### Phase 1: Project setup
- [ ] Create `apps/frameday/` (copy simplest existing photographer app)
- [ ] Rename package to `@free-react-templates/frameday`
- [ ] Set up `public/CNAME` as `frameday.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Add `injectUiSource()` to vite.config.ts

### Phase 2: Components
- [ ] **Sidebar.tsx** — fixed left sidebar with:
  - Circular author portrait (use picsum.photos seed)
  - Author name heading
  - Vertical nav menu (Home, Collection, About Me, My Services, Blog, Contact)
  - Newsletter form at bottom (email input + paper-plane icon)
  - Mobile: off-canvas with hamburger toggle
- [ ] **Hero.tsx** — 50/50 split hero section:
  - Left: full-height photo carousel (2 images, background-size cover)
  - Right: scrollable text with:
    - "Hello! I'm" subheading (#bfbfbf)
    - Big background name (position absolute, #ededed)
    - Main heading with author name + tagline
    - Bio paragraph
    - Signature in Herr Von Muellerhoff (#ccb78f)
    - Social icons row (Twitter, Facebook, Instagram)
- [ ] **InstagramGrid.tsx** — 5-column photo grid:
  - 5 photos with `height: 200px` each, `background-size: cover`
  - No gutters between columns
  - Hover: dark overlay (#00000033) fades in with Instagram icon
- [ ] **Footer.tsx** — dark footer:
  - 3-column layout (Recent Photos, Archives, Contact)
  - Recent Photos: 6 thumbnails
  - Archives: month list with counts
  - Contact: address, phone, email with icons
  - Copyright with Component Dock link (no ColorLib attribution)
- [ ] **App.tsx** — compose Sidebar + Hero + InstagramGrid + Footer

### Phase 3: Styling
- [ ] Set up Tailwind theme tokens:
  - `brand-gold: #ccb78f`
  - `brand-blue: #78d5ef`
  - `dark-bg: #242423`
- [ ] Import Poppins, Montserrat, Herr Von Muellerhoff via Google Fonts
- [ ] Implement sidebar fixed positioning (22% desktop, 270px mobile)
- [ ] Implement hero 50/50 split with carousel
- [ ] Implement Instagram grid with hover effects
- [ ] Implement responsive breakpoints (sidebar collapse, hero stack)

### Phase 4: Tests
- [ ] Sidebar: renders nav items, newsletter form, author portrait
- [ ] Hero: renders split layout, carousel images, signature text
- [ ] InstagramGrid: renders 5 photos, hover overlay behavior
- [ ] Footer: renders 3 columns, copyright with Component Dock link
- [ ] Responsive: sidebar toggle on mobile, layout stacking
- [ ] 100% coverage verification

### Phase 5: Build & deploy
- [ ] Run `npm install` at root to register workspace
- [ ] Verify `package-lock.json` contains `@free-react-templates/frameday`
- [ ] Run `npm run verify:app frameday` (FAST_MODE gate)
- [ ] Commit as `feat: add FrameDay template`
- [ ] Open PR, merge, verify Surge deploy
