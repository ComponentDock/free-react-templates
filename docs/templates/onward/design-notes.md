# Onward — Prep Notes

Source: ColorLib Ozberk (https://preview.colorlib.com/theme/ozberk/)

## Implementation Task Outline

### Phase 1: Scaffold
1. Copy simplest existing app (e.g. `apps/abjure`) to `apps/onward`
2. Rename package to `@free-react-templates/onward`
3. Update `public/CNAME` → `onward.free.componentdock.com`
4. Update `package.json` homepage → `https://onward.free.componentdock.com`
5. Run `npm install` at repo root to register workspace in lockfile

### Phase 2: Theme Tokens (`src/index.css`)
- `@import "tailwindcss"` + `@source` via `injectUiSource()`
- `@theme` block with:
  - `--color-brand: #f7c73c` (primary golden yellow)
  - `--color-brand-dark: #edbf3a` (hover gold)
  - `--color-accent: #fdd050` (bright yellow section bg)
  - `--color-text-primary: #222222`
  - `--color-text-body: #555555`
  - `--color-text-muted: #777777`
  - `--color-off-white: #f9f9ff`
  - `--color-dark-bg: #222222`
  - `--color-dark-overlay: rgba(0,0,0,0.8)`
- Google Fonts link in `index.html`: Poppins (400, 600, 700)

### Phase 3: Components (section order)

#### Navbar.tsx
- Absolute positioned over banner
- White text, transparent bg
- Logo text left, nav links right
- Mobile: hamburger icon, slide-down menu
- Use `lucide-react` Menu icon

#### Hero.tsx (Banner)
- Fullscreen height (`min-h-screen`)
- Background image via `picsum.photos/seed/onward-banner/1920/1080`
- Dark overlay: `bg-black/80`
- Centered content: uppercase heading + golden circle CTA button
- Button: `bg-brand text-black rounded-full px-8 py-3 inline-flex items-center gap-2` with ArrowRight icon

#### TeamForce.tsx
- 2-col: image left / text right
- Image: `picsum.photos/seed/onward-team/600/500`
- Heading: "Actual Team Force"
- Paragraph + golden circle "View More" button with ArrowRight

#### FeatureArea.tsx
- Yellow bg: `bg-accent`
- 2-col grid (3 rows, 6 items)
- Each item: icon (lucide-react) + uppercase title + paragraph
- Icons: Laptop, Sun, Image, Monitor, Video, Rocket (closest lucide matches)
- Titles: Responsive Layout, Light & Dark Color Schemes, Parallax Support, Retina Ready Graphics, HTML5 Video, Powerful Performance

#### VideoSection.tsx
- Background image: `picsum.photos/seed/onward-video/1920/800`
- Dark overlay: `bg-black/80`
- Centered Play icon (lucide-react CirclePlay)
- Heading: "Being unique is the preference now-a-days"
- Subtitle: "Youtube video will appear in popover"

#### TestimonialSection.tsx
- White bg
- Left col: large counter "5962" + "Project Completed"
- Right col: testimonial quote + author name
- Use simple state or auto-rotate for carousel (2 slides)

#### ServiceArea.tsx
- Yellow bg: `bg-accent`
- Left col (5/12): image with dark overlay: `picsum.photos/seed/onward-service/600/800`
- Right col (7/12): 5 service items in 2×3 grid
- Each: lucide icon + uppercase title
- Services: Laptop, Wand2, Settings, Users, Puzzle

#### ContactArea.tsx
- White bg, 4-col
- Columns: Office Address, Phone Numbers, Email Addresses, Customer Support
- Centered text per column

#### Footer.tsx
- Dark bg: `bg-dark-bg`
- Newsletter form: email input + "Get Started" button (white bg variant)
- 4 link columns: Top Products, Support Technology, Download, Instagram Feed (placeholder images grid)
- Bottom: copyright line + social icons (Facebook, Twitter, Dribbble, Behance from lucide-react)
- MUST include ComponentDock link

### Phase 4: App.tsx Assembly
- Compose all sections in order: Navbar → Hero → TeamForce → FeatureArea → VideoSection → TestimonialSection → ServiceArea → ContactArea → Footer

### Phase 5: Testing (TDD)
- One `describe` per component
- Test renders, text content, responsive behavior
- 100% coverage required

### Phase 6: Verification
- `scripts/verify-app.sh onward` passes
- Push to main

## Design Fidelity Notes

- **Color mapping:** Ozberk uses a warm golden yellow palette (#f7c73c / #edbf3a / #fdd050). The service and feature areas share the same bright yellow (#fdd050) background.
- **Button style:** Primary buttons are pill-shaped (border-radius: 20px) with golden bg and black text. Arrow variant uses no radius.
- **Banner:** Fullscreen with dark semi-transparent overlay (rgba(0,0,0,0.8)). Text is uppercase, white, centered.
- **Video section:** Same dark overlay treatment as banner, with a play button and text.
- **Typography:** Poppins at weights 400/600/700. Feature titles are uppercase with 2px letter-spacing.
- **Footer:** Very dark (#222222) with gold accent links and widget headings.
- **Spacing:** Outer sections use 100px vertical padding. Inner sections use 60–80px.
- **Mobile:** Hamburger nav, stacked columns, reduced padding.
