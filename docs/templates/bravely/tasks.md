# Bravely — Task Outline & Design Notes

Source: ColorLib "Bbs" (https://colorlib.com/wp/template/bbs/)
New name: bravely
Spec: openspec/specs/template-bravely/spec.md

## Implementation Tasks

### 1. Scaffold

- [ ] Copy simplest existing app as base (e.g. apps/bold)
- [ ] Rename package to @free-react-templates/bravely
- [ ] Update public/CNAME to bravely.free.componentdock.com
- [ ] Update vite.config.ts with injectUiSource()
- [ ] Update index.html title to "Bravely"
- [ ] Run npm install at repo root

### 2. Global Styles (index.css / Tailwind theme)

- [ ] Import Poppins via Google Fonts link in index.html (weights 300, 500, 600, 900)
- [ ] Define @theme tokens: brand-purple (#7539dd), brand-purple-dark (#7034db),
      brand-pink (#f58e9a), brand-yellow (#fbe44c), text-gray (#777777),
      heading-dark (#222222), bg-light (#f9f9ff), tab-accent (#3c408f),
      footer-dark (#333333)

### 3. Navbar Component

- [ ] Logo text (stylized, orange/yellow color like original "BAS")
- [ ] Hamburger menu icon (lucide-react Menu icon)
- [ ] Mobile toggle for nav links (hidden by default, slide/toggle on click)
- [ ] Nav links: Home, About, Features, Blog, Contact (adapted from original)

### 4. Hero / Banner Section

- [ ] Full-width section with purple radial-gradient background
      (use CSS radial-gradient: #7539dd → #7034db)
- [ ] Centered content, 600px height
- [ ] Large heading: "WE'RE CREATIVE" (uppercase, font-weight 900, ~100px)
- [ ] Text color: #793ae9 with purple glow text-shadow
- [ ] Ghost pill button: "Get Started" (border 1px solid #fff, border-radius 20px)
- [ ] Button hover: pink-to-yellow gradient fade-in

### 5. Features Section

- [ ] White background, 2-column grid (md:grid-cols-2)
- [ ] 4 feature items, each with: icon (lucide-react), title (h4), description (p)
- [ ] Feature list:
  1. Unlimited Colors — Palette icon
  2. Smart Security — Fingerprint icon
  3. Endless Support — LifeBuoy icon
  4. Smart Security — Box icon
- [ ] Flex layout: icon left, text right (desc width ~80%)

### 6. About Section

- [ ] Light background (#f9f9ff), 100px vertical padding
- [ ] 3-column layout (lg:grid-cols-[4fr_3fr_4fr]):
      Left: "About Our Company" heading + description
      Center: Image (picsum.photos placeholder)
      Right: Tabbed content
- [ ] Two pill-shaped tabs: "History" / "Mission & Vision"
- [ ] Tab styling: border-radius 25px, uppercase, 12px font
- [ ] Active tab: gradient underline (pink-to-yellow), white text
- [ ] Tab content switching (useState, no Bootstrap)

### 7. Video Section

- [ ] Purple overlay background (#7539dd/#7034db radial gradient, opacity 0.8)
- [ ] Placeholder for video/image background
- [ ] Centered white text: "New Features that open the door of future"
- [ ] Play button (lucide-react PlayCircle or similar)
- [ ] White descriptive text below

### 8. Blog Section

- [ ] White background, 3-column grid (md:grid-cols-3)
- [ ] 3 cards, each with: thumbnail (215px height, cover), title, description
- [ ] Thumbnail images: picsum.photos/seed/bravely-1/400/215 etc.
- [ ] Card titles: "Ultimate pet lover", "Upcoming role model", "Colors of Life"
- [ ] Centered text below thumbnails

### 9. Story Section

- [ ] Purple background (#7034db), 100px padding
- [ ] Left half (5 columns): white heading "Crafting Our Experiences" + white text
- [ ] Right half: background image (picsum.photos placeholder, cover, center top)
- [ ] On mobile: hide right background, stack content

### 10. Newsletter Subscription

- [ ] Light background (#f9f9ff), centered layout
- [ ] Heading: "Subscribe Newsletter"
- [ ] Pill-shaped email input (border-radius 25px, 50px height)
- [ ] Gradient "Get Started" button positioned inside input (absolute right)
- [ ] Button gradient: pink-to-yellow (always visible in this section)
- [ ] Arrow icon next to button text

### 11. Footer

- [ ] Dark background (#333333), centered content
- [ ] Nav links: Home, Features, About, Blog (or adapted)
- [ ] Social icons: lucide-react equivalents (Facebook, Twitter, Dribbble, Behance)
- [ ] Copyright: "© 2026 All rights reserved | Made with ❤ by Component Dock"
- [ ] Link to https://www.componentdock.com/
- [ ] All text white, hover color #f58e9a

### 12. Tests (TDD)

- [ ] Navbar renders logo and hamburger
- [ ] Navbar toggles mobile nav
- [ ] Hero renders heading and button
- [ ] Features renders 4 items
- [ ] About tabs switch content
- [ ] Video section renders overlay and content
- [ ] Blog renders 3 cards
- [ ] Story section renders content
- [ ] Subscription form renders input and button
- [ ] Footer renders links and social icons
- [ ] 100% line/function/branch/statement coverage

## Design Notes

### Section Order (from live DOM)

1. header (logo + nav + hamburger)
2. .banner-area (hero with purple gradient)
3. .featured-area (2×2 feature grid on white)
4. .about-area (title + image + tabs on #f9f9ff)
5. .video-area (purple overlay with play button)
6. .blog-area (3 blog cards on white)
7. .story-area (purple bg, text left, image right)
8. .subscription-area (newsletter form on #f9f9ff)
9. footer-area (dark #333333)

### Color Map (original → Tailwind theme)

- Primary purple: #7539dd → `brand-purple`
- Dark purple: #7034db → `brand-purple-dark`
- Pink accent: #f58e9a → `brand-pink`
- Yellow accent: #fbe44c → `brand-yellow`
- Body text: #777777 → `text-gray`
- Headings: #222222 → `heading-dark`
- Light bg: #f9f9ff → `bg-light`
- Footer: #333333 → `footer-dark`
- Tab accent: #3c408f → `tab-accent`

### Icon Mapping (Font Awesome / Linearicons → lucide-react)

- Hamburger: Menu
- Feature 1 (Unlimited Colors): Palette
- Feature 2 (Smart Security): Fingerprint
- Feature 3 (Endless Support): LifeBuoy
- Feature 4 (Smart Security): Box
- Play button: PlayCircle
- Facebook: Facebook
- Twitter: Twitter
- Dribbble: Dribbble
- Behance: (no direct equivalent — use ExternalLink or custom)

### Placeholder Images

- About image: https://picsum.photos/seed/bravely-about/400/500
- Blog 1: https://picsum.photos/seed/bravely-blog1/400/215
- Blog 2: https://picsum.photos/seed/bravely-blog2/400/215
- Blog 3: https://picsum.photos/seed/bravely-blog3/400/215
- Video bg: https://picsum.photos/seed/bravely-video/1920/600
- Story bg: https://picsum.photos/seed/bravely-story/960/600

### Key Differences from Original

- No Bootstrap — pure Tailwind CSS 4
- No jQuery — React state for tabs and mobile nav
- Font Awesome → lucide-react icons
- Linearicons → lucide-react icons
- Static images → picsum.photos placeholders
- Component Dock branding in footer (replacing ColorLib credit)
- No external CSS files — all styles via Tailwind + theme tokens
