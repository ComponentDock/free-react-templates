# Workbench — Implementation Notes

## Source
- ColorLib template: **Work** (slug: `work`)
- Preview: https://preview.colorlib.com/theme/work/
- New name: `workbench`

## Design tokens reference
- Brand accent: `#F75940` (coral red-orange)
- Hover accent: `#f86e58`
- Font: Quicksand (weights 300, 400, 500)
- Button shape: pill (border-radius 30px, padding 14px 30px)
- Sidebar: fixed left, 20% width, white background
- Section backgrounds: white (#fff) default, #fafafa for CTA
- Text hierarchy: #333 body, #666 secondary, #999 meta labels
- Meta labels: 10px uppercase, letter-spacing 5px

## Structure order (implement in this order)

### 1. Sidebar (Navbar component)
- Fixed left panel, 20% width
- Logo: two-colored "Work" text
- Nav links: Home, Work, About, Services, Blog, Contact
- Social icons: Facebook, Twitter, Instagram, LinkedIn (use lucide-react equivalents)
- Copyright footer with Component Dock link
- Mobile: hamburger toggle, sidebar slides in/out

### 2. Hero Slider
- Full-height section next to sidebar
- 3 slides with background images (use picsum.photos placeholders)
- Each slide: dark overlay + centered h1 + h2 subtitle + "Learn More" button
- Auto-rotate slides (implement as state-driven slider, no flexslider dependency)
- Button: transparent with border (#000), pill shape

### 3. About Section
- Two-column layout: left = stacked images, right = text + accordion
- Left: two overlapping background images with animation classes
- Right: "Welcome & Introduce" meta label, heading, paragraph
- Accordion: 3 panels ("Why choose me?", "What I do?", "My Specialties")
  - Only one panel open at a time
  - Each panel has expand/collapse toggle
  - Use aria-expanded for accessibility

### 4. Services Section
- Section header: "What I do?" meta + "Here are some of my expertise" h2
- 2×3 grid of feature cards
- Each card: icon (use lucide-react), h3 title, description paragraph
- Services: Branding, Web Design, SEO, Web Development, User Interface, Help & Support
- Use fadeInLeft animation on scroll (useIntersectionObserver)

### 5. Work/Portfolio Section
- Section header: "My Work" meta + "Recent Work" h2
- 2×3 grid of project cards
- Each card: background image (picsum), height 450px, overlay on hover
- Card content: h3 title, category tags, share/eye/heart icons with counts
- Hover: dark overlay slides up revealing title and tags

### 6. Blog Section
- Section header: "Read" meta + "Recent Blog" h2
- 3-column grid of blog cards
- Each card: featured image, date/category/comments meta, h3 title, excerpt, "Read More" link
- Card background: white (#fff)

### 7. CTA (Get in Touch) Section
- Light gray (#fafafa) background
- Narrow content container, centered
- Heading "Get in Touch!", description, "Contact me!" primary button
- Primary button: coral (#F75940) background, pill shape, white text

### 8. Footer
- Component Dock link: https://www.componentdock.com/
- Social media icons

## Fidelity notes
- Original uses Bootstrap grid (col-md-6, col-md-4) — translate to Tailwind grid/flex
- Original uses flexslider for hero — implement as custom React slider with state
- Original uses Bootstrap accordion — implement as custom React accordion
- Original uses animate.css + waypoints for scroll animations — use IntersectionObserver + CSS transitions
- Original uses icomoon icon font — replace with lucide-react icons
- Original sidebar is fixed position with overflow-y scroll — replicate with Tailwind fixed + overflow
- All placeholder images: use https://picsum.photos/seed/workbench-<n>/<w>/<h>
- Font: load Quicksand via Google Fonts link in index.html
- No Bootstrap dependency — pure Tailwind implementation

## Component map
- `App.tsx` — layout wrapper (sidebar + main)
- `Sidebar.tsx` — fixed left sidebar with nav
- `HeroSlider.tsx` — full-height hero with auto-rotating slides
- `About.tsx` — about section with accordion
- `Services.tsx` — 2×3 feature grid
- `Portfolio.tsx` — 2×3 project card grid
- `Blog.tsx` — 3-column blog card grid
- `CTA.tsx` — get-in-touch call to action
- `Footer.tsx` — footer with Component Dock link
