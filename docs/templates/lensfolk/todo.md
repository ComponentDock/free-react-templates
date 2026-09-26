# LensFolk — Design Notes & Implementation Tasks

## Source

- **ColorLib:** Louie — https://colorlib.com/wp/template/louie/
- **Preview:** https://preview.colorlib.com/theme/louie/
- **Category:** Photography Portfolio (personal/photographer)

## Design Notes

### Layout

Split-panel layout. Left sidebar (fixed, ~30% width) contains author identity and navigation. Right panel (70%) holds full-height hero with background photo slider. Below the hero, a centered Instagram gallery spans full width. Dark footer closes the page.

### Color Palette

- Page background: white (#fff)
- Brand accent: gold/tan (#ccb78f) — used on keyword "Photographer" in headline
- Near-black (#242423): footer background
- Light gray (#b3b3b3): subtle text, ghost button borders
- Watermark text: very light gray (#ededed) for the decorative background name

### Typography

- Primary font: Work Sans (Google Fonts)
- Signature font: Herr Von Muellerhoff (Google Fonts) — cursive, used for author signature
- Headings: bold weight, clean sans-serif
- Instagram heading: uppercase, letter-spaced (3px), 16px

### Interactive Elements

- Photo slider with dot pagination in hero (2 slides)
- Ghost button (2px border, no fill) for CTAs
- Newsletter subscribe form (white input, subtle border, paper-plane icon submit)
- Instagram thumbnails with dark overlay + icon on hover
- Social icon links in hero (Twitter, Facebook, Instagram)

### Section Order (fidelity)

1. Sidebar (left fixed) — author photo, name, nav, newsletter
2. Hero (right panel) — background photo slider + text overlay (greeting, name, headline, bio, signature, socials)
3. Instagram Gallery — "Follow me on Instagram" + 5-column photo grid
4. Footer (dark) — 3-column: Recent Photos, Archives, Contact + Component Dock link

## Implementation Tasks

### 1. Scaffold

- [ ] Create `apps/lensfolk/` (copy simplest existing app, rename package)
- [ ] Register in `package.json` workspaces
- [ ] Set up `src/index.css` with Tailwind + theme tokens (brand color `#ccb78f`)
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Create `public/CNAME` with `lensfolk.free.componentdock.com`
- [ ] Run `npm install` at root for lockfile registration

### 2. Components

- [ ] `Sidebar.tsx` — author photo (circular), name, vertical nav, newsletter form
- [ ] `Hero.tsx` — full-height background photo slider, text overlay panel
- [ ] `PhotoSlider.tsx` — image carousel with dot pagination
- [ ] `InstagramGallery.tsx` — heading + 5-column grid with hover overlay
- [ ] `Footer.tsx` — dark 3-column footer (Recent Photos, Archives, Contact)
- [ ] `App.tsx` — compose Sidebar + Hero + Gallery + Footer

### 3. Styling

- [ ] Work Sans + Herr Von Muellerhoff via Google Fonts `<link>` in `index.html`
- [ ] Sidebar: fixed left, white bg, circular photo, vertical nav, newsletter at bottom
- [ ] Hero: full-height, background image, overlay panel on right with text
- [ ] Brand gold accent on "Photographer" keyword
- [ ] Ghost button style for CTAs
- [ ] Instagram grid: 5 columns, hover dark overlay with icon
- [ ] Footer: dark bg (#242423), white text, 3 columns

### 4. Tests (TDD)

- [ ] Sidebar renders author photo, name, nav links, newsletter form
- [ ] Hero renders greeting, name, headline, bio, signature, social icons
- [ ] PhotoSlider navigates between slides on dot click
- [ ] InstagramGallery renders 5 thumbnails with hover overlay behavior
- [ ] Footer renders 3 columns, links to componentdock.com
- [ ] Responsive behavior (mobile sidebar collapse, gallery stacking)
- [ ] 100% coverage gate passes

### 5. Finalize

- [ ] `npm run readme:status` to update README
- [ ] Conventional commit: `feat: add LensFolk (ColorLib Louie) photography portfolio`
- [ ] Push to main, verify deploy
