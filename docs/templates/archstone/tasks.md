# Archstone — Tasks & Design Notes

## Template Info

- **New name:** archstone
- **Source:** ColorLib Balay
- **Preview:** https://preview.colorlib.com/theme/balay/
- **Category:** Architecture / Construction / Interior Design Portfolio
- **Layout:** Sidebar (left fixed panel) + scrollable main content

## Implementation Tasks

### 1. Project Setup
- [ ] Copy simplest existing app as starter
- [ ] Rename package to `@free-react-templates/archstone`
- [ ] Set up `public/CNAME` with `archstone.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Add Quicksand font link to `index.html`
- [ ] Configure Tailwind theme with brand tokens (#FFC300, #2C2C2C)

### 2. Sidebar Component
- [ ] Build sidebar with dark bg (#2C2C2C)
- [ ] Logo "Archstone" (white text, Quicksand bold)
- [ ] Navigation links (Home, Project, About, Services, Blog, Contact)
- [ ] Active link highlight with brand yellow
- [ ] Social icons (Facebook, Twitter, Instagram, LinkedIn) via lucide-react
- [ ] Copyright text in sidebar footer
- [ ] Mobile hamburger toggle (slide-in sidebar)
- [ ] Sticky/fixed positioning on desktop

### 3. Hero Slider
- [ ] Full-height hero with background images (use picsum.photos)
- [ ] Dark overlay on each slide
- [ ] Centered text container with yellow (#FFC300) badge background
- [ ] Heading text (white, Quicksand bold)
- [ ] Subtitle text (white)
- [ ] "View Project" CTA button (yellow bg, white text, arrow icon)
- [ ] Implement auto-rotating slider (3 slides)

### 4. About Section
- [ ] 2-column layout (image left, text right)
- [ ] Background image on left column (picsum.photos)
- [ ] "Welcome" meta label (muted, small caps style)
- [ ] "Who we are" heading with yellow underline accent
- [ ] 2 description paragraphs
- [ ] 3 value cards row: "We are passionate", "Honest Dependable", "Always Improving"
- [ ] First card highlighted (yellow icon), others neutral
- [ ] Checkmark icons via lucide-react

### 5. Services Section
- [ ] "What I do?" meta label + "Here are some of my expertise" heading
- [ ] Left column: 4 icon features
  - General Constructing (hardhat icon)
  - Pre-Construction Design (pencil-ruler icon)
  - Building & Modeling (building icon)
  - Construction Management (crane/clipboard icon)
- [ ] Right column: 5 image service cards in 3+2 grid
  - Design & Build, House Remodeling, Construction Management, Painting & Tiling, Kitchen Remodeling
- [ ] Image cards: background image + title overlay on hover

### 6. Counters Section
- [ ] Full-width bg image (picsum.photos) + dark overlay
- [ ] 4 columns: icon (circular, #e6e6e6 bg) + counter number + label
- [ ] Stats: Projects (1,539), Employees (3,653), Constructor (5,987), Partners (3,999)
- [ ] Counter animation (count-up on scroll into view)
- [ ] Use appropriate lucide-react icons (building, users, hardhat, handshake)

### 7. Portfolio / Recent Work
- [ ] "My Work" meta label + "Recent Work" heading
- [ ] Masonry-style grid: 6 items in 2+1+1 / 3+3 layout
- [ ] Each item: background image, hover overlay
- [ ] Overlay: title, category span, social icons (share, eye count, heart count)
- [ ] Use picsum.photos with different seeds for each project

### 8. Blog Section
- [ ] "Read" meta label + "Recent Blog" heading
- [ ] 3 blog cards in a row
- [ ] Each card: image, date + category + comment count metadata, title, description
- [ ] Image hover zoom effect
- [ ] Use lucide-react for comment icon

### 9. Contact Section
- [ ] "Get in Touch!" heading
- [ ] Description paragraph
- [ ] "Contact me!" yellow CTA button

### 10. Footer / Final
- [ ] Footer content is within the sidebar (copyright + social links)
- [ ] Add Component Dock link in footer
- [ ] Ensure no ColorLib references in any app code
- [ ] Run full test suite with 100% coverage
- [ ] Verify build succeeds
- [ ] Verify responsive behavior at all breakpoints

## Design Notes

### Layout Architecture
This template uses a **sidebar layout** — a left-side fixed panel with the main content scrolling on the right. This is different from the typical top-navbar layout. The sidebar should be:
- Fixed position on desktop (sticks while content scrolls)
- Collapsible off-canvas on mobile (hamburger toggle)
- Dark background (#2C2C2C) with white text

### Color System
- Primary brand: #FFC300 (warm yellow/gold) — used for CTAs, active states, accents
- Sidebar: #2C2C2C (dark charcoal)
- Body text: rgba(0,0,0,0.7) — not pure black, slightly transparent
- Muted text: #b3b3b3
- Counter icon circles: #e6e6e6 bg, black icon
- All overlays: dark semi-transparent for hero and counters

### Typography
- Quicksand is a rounded sans-serif — gives a friendly, modern feel
- Use Google Fonts CDN for Quicksand (weights 300, 400, 500, 700)
- Section headings have a yellow underline accent (`.colorlib-heading:after`)
- The `.heading-meta` is a small uppercase/muted label above section headings

### Animation Notes
- Original uses AOS (Animate On Scroll) library — replicate with IntersectionObserver + CSS transitions
- Counter numbers use a count-up animation on scroll into view
- Hero uses Flexslider for the image carousel — use a React carousel or CSS animation
- Portfolio and blog images have hover effects (zoom, overlay reveal)

### Image Strategy
- All background images: `https://picsum.photos/seed/<archstone-slug>/<w>/<h>`
- Hero slides: 1920x800
- About image: 600x600
- Service cards: 400x300
- Counter bg: 1920x600
- Portfolio items: 600x400
- Blog images: 400x250
