# Portlane — Implementation Tasks & Design Notes

**Source**: ColorLib Portfolio 2
**Preview**: https://preview.colorlib.com/theme/portfolio2/
**New Name**: Portlane
**Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section Order (top → bottom)

1. Navbar (`.header-area`)
2. Hero / Slider (`.slider_area` → `.single_slider`)
3. Portfolio Gallery (`.portfolio_area` → `.portfolio_wrap`)
4. "More Works" bar (`.more_works`)
5. Services (`.service_area`)
6. Blog (`.creative_blog_area`)
7. Testimonials (`.testimonial_area`)
8. CTA "Let's Talk" (`.testimonial_area` → inner CTA)
9. Footer (`.footer`)

## Section-by-Section Fidelity Notes

### 1. Navbar
- Absolute position over hero, transparent background
- Logo: "PORTFOLIO" in white, bold, Alata font, left-aligned
- Nav links: Home, About, Blog, Pages (dropdown arrow), Contact — right-aligned
- Mobile: hamburger menu (collapse)
- Padding: `29px 85px` desktop

### 2. Hero / Slider
- Full-width dark navy (`#040E27`) background
- Large transparent watermark "PORTFOLIO" text (desktop only, `d-none d-lg-block`)
  - Uses `outline_text` class — likely CSS text-stroke or transparent color with border
- Centered content:
  - "Hello Everyone" in blue (`#0181F5`), small text
  - Main heading in white, large font (Alata), centered
- Flexbox centered layout

### 3. Portfolio Gallery
- Full-width container (`container-fluid p-0`)
- Masonry-like grid: mix of full-width and half-width (`.small_width`) items
- Each item: image thumbnail + hover overlay (`.gallery_hover`)
- Hover overlay: dark semi-transparent background with centered icon/action
- Images: use `picsum.photos` with seeded URLs
- Grid: likely 3-column with varying heights

### 4. "More Works" Bar
- Dark navy (`#040E27`) background
- Centered "More Works" text button in white
- Padding: `35px 0`

### 5. Services
- White or light background
- Three-column grid: 3D Modeling, UI/UX Design, Architectural Design
- Each card: circular icon background + title + description paragraph
- Responsive: stacks to single column on mobile
- Description text: placeholder lorem-style content about services

### 6. Blog
- Dark or sectioned background
- Heading: "Our Creative Articles" (50px, white)
- Blog cards: image + category tag + title + excerpt
- "More Blogs" link/button
- Responsive grid

### 7. Testimonials
- White background (`#fff`) — the ONLY light section
- Padding: `200px 0 195px 0` (generous vertical spacing)
- Slider/carousel with client testimonials
- Each slide: client photo + name + quote text
- Name example: "Mesica Chouhan"
- Quote example: "Industry as their over draft" / "Construction their over draft"

### 8. CTA "Let's Talk"
- After testimonials section
- "Let's Talk" heading
- "Start Talking" button/link
- Likely dark navy background

### 9. Footer
- Dark navy (`#040E27`) background
- Multi-column layout:
  - Column 1: Services links (Web Design, 3D Modeling, Architectural Design)
  - Column 2: Useful Links (Work, About, Services, Contact)
  - Column 3: Follow Us — social icons (Dribbble, Behance, Instagram, Facebook)
- Copyright line at bottom
- MUST include Component Dock link (`https://www.componentdock.com/`)

## Design Token Summary

| Token | Value | Usage |
|-------|-------|-------|
| Primary BG | `#040E27` | Hero, portfolio, footer, more-works |
| Accent Blue | `#0181F5` | "Hello Everyone", CTAs, links |
| Accent Purple | `#615CFD` | Secondary accent |
| Accent Orange | `#ff5e13` | Highlight buttons |
| Card BG | `#1F1F1F` | Dark cards |
| Text White | `#fff` | Primary text on dark |
| Text Grey | `#7A838B` | Muted/secondary text |
| Font Primary | Alata | Headings, logo |
| Font Body | Roboto | Body text |
| Font UI | Poppins | UI elements, buttons |
| Border Radius | 0px–8px | Mostly sharp, some rounded |
