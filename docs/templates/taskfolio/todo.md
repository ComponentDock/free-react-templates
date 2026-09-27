# Taskfolio — Implementation Outline

**Source:** ColorLib "Work" → https://preview.colorlib.com/theme/work/
**New name:** taskfolio
**Category:** Portfolio

## Section Order (top to bottom)

1. Sidebar (fixed left, 20% width)
2. Hero image slider (3 slides)
3. About (images + accordion)
4. Services (2-col grid, 6 cards)
5. Portfolio/Work (2-col grid, 6 project cards)
6. Blog (3-col grid, 3 entries)
7. Get in Touch CTA (full-width)
8. Footer social links (inside sidebar)

## Design Notes

### Layout
- Two-panel layout: fixed sidebar (left 20%) + scrollable main (right 80%)
- Mobile: sidebar becomes slide-out drawer triggered by hamburger icon
- All sections use `container-fluid` (full-width within main panel)
- Section headings: uppercase, 18px, letter-spacing 5px, font-weight 500
- Section meta labels: 10px, uppercase, #999, displayed above headings

### Sidebar
- Fixed position, white background
- Logo: black block, white uppercase text with wide letter-spacing
- Nav: vertical list, right-aligned, 12px uppercase, weight 500
- Active state: black text + underline animation
- Footer: absolute bottom, social icon links + copyright text
- Mobile: off-screen by default, slides in from left on toggle

### Hero
- Full-width slider (FlexSlider originally, use React carousel)
- Each slide: background image (cover), dark overlay, white box at bottom-left
- White box contains: h1 (44px/28px mobile, weight 300), h2 subtitle, outlined "Learn More" button
- Button: transparent bg, 1px solid black, uppercase 12px, letter-spacing 2px
- Slides auto-rotate every ~5 seconds

### About
- Two-column: left = overlapping images (main + offset smaller), right = text + accordion
- Intro: "Welcome & Introduce" meta label, name heading, paragraph
- Accordion: 3 panels ("Why choose me?", "What I do?", "My Specialties")
- First panel expanded by default; click to toggle
- Panel content includes text and optional bullet lists

### Services
- Two-column grid (col-md-6 per card)
- Each card: icon (use lucide-react icons), h3 title, paragraph description
- Services: Branding, Web Design, SEO, Web Dev, UI, Help & Support
- Cards animate in on scroll (fadeInLeft)

### Portfolio/Work
- Two-column grid (col-md-6 per card)
- Each card: background image, overlay on hover
- Overlay shows: project title (h3), tags (comma-separated), social stats (share, eye/100, heart/49)
- 6 projects with different background images

### Blog
- Three-column grid (col-md-4 per card)
- Each entry: thumbnail image, meta line (date | category | comment count), title, excerpt, "Read More →" link
- 3 entries

### Get in Touch CTA
- Full-width section with #fafafa background
- Left-aligned heading "Get in Touch!"
- Centered content: lead paragraph + "Contact me!" pill button
- Button: 30px border-radius, #F75940 bg, white text, 15px 30px padding

## Key Design Tokens to Apply

```css
@theme {
  --color-brand: #F75940;
  --color-brand-hover: #f86e58;
  --font-family-heading: 'Quicksand', sans-serif;
  --font-family-body: 'Quicksand', sans-serif;
  --color-heading: #000000;
  --color-body: rgba(0,0,0,0.7);
  --color-muted: #999999;
  --color-section-bg: #fafafa;
  --color-card-border: #e6e6e6;
  --color-sidebar-bg: #ffffff;
  --color-logo-bg: #000000;
  --radius-pill: 30px;
}
```

## Component Breakdown

| Component | File | Notes |
|---|---|---|
| App.tsx | src/App.tsx | Compose all sections |
| Sidebar | src/components/Sidebar.tsx | Fixed left panel, nav, logo, social |
| Hero | src/components/Hero.tsx | Image slider with text overlay |
| About | src/components/About.tsx | Images + accordion |
| Services | src/components/Services.tsx | 2-col grid, 6 cards |
| Portfolio | src/components/Portfolio.tsx | 2-col grid, 6 project cards with hover |
| Blog | src/components/Blog.tsx | 3-col grid, 3 entries |
| ContactCTA | src/components/ContactCTA.tsx | Full-width CTA section |
| Accordion | src/components/Accordion.tsx | Reusable expandable panel |

## Fidelity Notes

- Sidebar is the most distinctive feature — must be fixed position with proper responsive behavior
- Hero overlay box positioned at bottom-left of slide (not centered)
- About section uses overlapping image trick (two images with offset)
- Portfolio cards reveal content on hover, not always visible
- Blog uses standard card pattern with image on top
- All section animations are fadeInLeft on scroll (use Intersection Observer)
- Font Quicksand is critical to the design aesthetic (light, rounded)
