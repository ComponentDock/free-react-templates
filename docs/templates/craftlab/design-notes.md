# Craftlab — Design Notes & Task Outline

## Source mapping

- **ColorLib:** Bbs — https://colorlib.com/wp/template/bbs/
- **Preview:** https://preview.colorlib.com/theme/bbs/
- **New name:** craftlab (small company / creative agency)

## Structure order (single-page SPA)

1. **Navbar** — Logo + nav links + hamburger toggle
2. **Hero/Banner** — Purple gradient, centered heading + CTA button
3. **Features** — 4 icon+text cards in 2×2 grid
4. **About** — 3-column: title, image, tabbed content (History / Mission & Vision)
5. **Video** — Purple gradient overlay, play button, description
6. **Blog** — 3 card grid with thumbnails
7. **Story** — Solid purple section with white text
8. **Subscribe** — Newsletter form with email input + CTA
9. **Footer** — Dark gray, centered nav + social icons + copyright

## Section-by-section fidelity notes

### 1. Navbar
- Logo: image or text "Craftlab" (Poppins font)
- Nav links: Home, Generic, Elements (desktop), hamburger on mobile
- Hamburger: linearicons lnr-menu icon
- Sticky or absolute at top

### 2. Hero/Banner
- Purple radial gradient background: #7539dd → #7034db
- Optional background image (banner.png) underneath
- Centered layout, 600px height
- Heading: "we're Creative" (uppercase, large)
- CTA: "Get Started" pill button (border-radius 20px, transparent bg, white border)
- Button hover: gradient overlay (#f58e9a → #fbe44c), dark text

### 3. Features
- White background, 60px top / 100px bottom padding
- 2×2 grid on desktop, single column on mobile
- Each card: icon image (left) + text (right), flex layout
- Icons use Lucide React equivalents
- Items: Unlimited Colors, Smart Security, Endless Support, Smart Security

### 4. About
- Light purple background (#f9f9ff), 100px padding
- 3-column layout: title (col-lg-4), image (col-lg-3), tabs (col-lg-4)
- Tabs: "History" and "Mission & Vision" with gradient active indicator
- Tab content switches with state (no external tab library needed)
- Image has 3px border-radius

### 5. Video
- Background image with purple radial gradient overlay (opacity 0.8)
- Centered content, 100px vertical padding
- Heading: "New Features that open the door of future" (white, 24px)
- Play button: linked play icon image
- White description text below

### 6. Blog
- White background, 70px top / 100px bottom padding
- 3-column grid (col-md-4)
- Each card: thumbnail (215px height, cover), centered description with title (20px) and text
- Cards have 30px top margin

### 7. Story
- Solid purple background (#7034db)
- 100px padding
- Left-aligned content (col-lg-5)
- White heading: "Crafting Our Experiences"
- White description paragraph

### 8. Subscribe
- White background
- Centered layout (col-lg-8 heading, col-lg-6 form)
- Heading: "Subscribe Newsletter"
- Email input with placeholder "Email address"
- "Get Started" primary button with gradient

### 9. Footer
- Dark gray background (#333333), 100px padding
- Centered layout (flex-column, align-items-center)
- Nav links: Home, Generic, Elements (white, pink on hover)
- Social icons: Facebook, Twitter, Dribbble, Behance (white, pink on hover)
- Copyright with "Made with ❤ by Component Dock" attribution
- 6rem bottom margin (for mobile bottom bar)

## Color palette

- Primary gradient: #f58e9a (pink) → #fbe44c (yellow)
- Hero/video gradient: #7539dd → #7034db (purple)
- Story solid: #7034db (purple)
- About bg: #f9f9ff (light purple)
- Footer bg: #333333 (dark gray)
- Body text: #777777
- Headings: #222222
- Footer text: #fff
- Footer hover: #f58e9a (pink)

## Typography

- Font: Poppins (300, 500, 600, 900)
- Hero heading: large, uppercase
- Feature headings: h4
- Blog titles: 20px
- Video heading: 24px

## Component mapping

| Section    | Component file(s)        | Notes                                |
|------------|--------------------------|--------------------------------------|
| Navbar     | `Navbar.tsx`             | Logo + nav + hamburger               |
| Hero       | `Hero.tsx`               | Purple gradient + CTA                |
| Features   | `Features.tsx`           | 4-item grid with icons               |
| About      | `About.tsx`              | 3-column with tabs                  |
| Video      | `Video.tsx`              | Gradient overlay + play button       |
| Blog       | `Blog.tsx`               | 3-card grid                          |
| Story      | `Story.tsx`              | Purple section                       |
| Subscribe  | `Subscribe.tsx`          | Newsletter form                      |
| Footer     | `Footer.tsx`             | Dark footer with social              |
| App        | `App.tsx`                | Composes all sections                |

## Implementation tasks

- [ ] Scaffold app from simplest existing template (copy + rename package)
- [ ] Configure `vite.config.ts` with `injectUiSource()` pattern
- [ ] Set up `public/CNAME` → `craftlab.free.componentdock.com`
- [ ] Set up `package.json` homepage + package name
- [ ] Add Google Fonts link for Poppins in index.html
- [ ] Define design tokens in `src/index.css` (@theme block)
- [ ] Implement Navbar with hamburger toggle
- [ ] Implement Hero with purple gradient + pill button
- [ ] Implement Features section with 4-item grid
- [ ] Implement About section with tabs
- [ ] Implement Video section with gradient overlay
- [ ] Implement Blog section with 3 cards
- [ ] Implement Story section (solid purple)
- [ ] Implement Subscribe section with email form
- [ ] Implement Footer with nav + social + copyright
- [ ] Compose all sections in App.tsx
- [ ] Add placeholder images via picsum.photos
- [ ] Write tests for all components (100% coverage)
- [ ] Run `npm run verify:app craftlab`
- [ ] Ensure no ColorLib references in any app file

## Pitfalls

- Primary button uses CSS pseudo-element (::after) for gradient overlay — implement with Tailwind gradient classes or custom CSS
- Banner and Video sections both use the same purple radial gradient — reuse the gradient definition
- About tabs use Bootstrap data-toggle in the original; implement with React state
- Footer has 6rem bottom margin (original for mobile bottom bar) — may need adjustment
- The hero background image sits behind the gradient — layer them with z-index
