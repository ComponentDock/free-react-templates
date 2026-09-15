# Litany — Implementation Task Outline

## Source
- ColorLib: Faith 2
- Preview: https://preview.colorlib.com/theme/faith-2/ (404 at prep time — screenshot used)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/faith2-free-template.jpg
- Note: Preview was unreachable; spec is based on screenshot analysis only.

## Design Notes

### Color Palette
- Primary brown: #b39a7a (CTA buttons, date badges, nav accent)
- Gold/brown alt: #c2a67c (countdown number highlight)
- Top bar: #1a1a1a (near-black)
- Top bar text: #ffffff
- Countdown accent: #c9a96e (golden numbers)
- Header bg: #ffffff
- Nav link: #1a1a1a (dark)
- Hero heading: #ffffff (white)
- Hero subtitle: #ffffff
- Hero date badge bg: #b39a7a
- Info box bg: rgba(0,0,0,0.5)
- CTA button bg: #b39a7a
- CTA button text: #ffffff
- Button radius: 4px (slightly rounded)
- Hero overlay: rgba(0,0,0,0.4)

### Typography
- Font: Jost (Google Fonts, geometric sans-serif) — clean modern look
- Hero h1: ~70-80px desktop, bold
- Hero subtitle: ~24px, lighter weight
- Section headings: ~40-50px
- Body: 16px, line-height 1.6-1.8
- Countdown numbers: large, bold, golden color

### Button Styles
- Primary CTA ("Send Donations"): brown bg (#b39a7a), white text, 4px radius
- Hero slide arrows: semi-transparent bg, white arrow, hover opacity change
- Search icon: standalone, no bg

### Component Architecture
```
src/
  App.tsx              — Section composition
  components/
    TopBar.tsx         — Dark countdown bar
    Header.tsx         — Sticky nav with logo, links, CTA
    HeroSlider.tsx     — Image carousel with overlay, date badge, info box
    (Below-fold TBD)   — About, Ministries, Events, Sermons, Team, Gallery, Contact, Footer
  index.css            — Tailwind + @theme tokens
```

## Section-by-Section Fidelity Notes

### 1. Top Bar
- Near-black background (#1a1a1a)
- Centered text: "Next Big Event:" in white, countdown numbers in golden/brown
- Countdown format: "X Days Y Hours Z Minutes W Seconds"
- Numbers are bold, golden (#c9a96e)
- Full-width, thin bar above header

### 2. Header
- White background, sticky on scroll
- Left: Cross icon (brown) + "Faith" logo text (dark, bold)
- Center-right: Nav links (Home, Pagos with dropdown arrow, Ministries, Sermons, Contact)
- Search icon (magnifying glass) after nav
- Right: "Send Donations" button — brown bg, white text, 4px radius
- Mobile: hamburger menu icon, no desktop nav

### 3. Hero Slider
- Full-width background images (use picsum.photos seeds with church/nature themes)
- Dark semi-transparent overlay (rgba(0,0,0,0.4))
- Date badge: brown background (#b39a7a), white text, positioned top-left of content area
- Subtitle: white, ~24px, above heading
- Heading: white, bold, ~70-80px desktop
- Description: white, 16px, below heading
- Info box: top-right, semi-transparent black bg, "Sunday Worship: 10:30 AM" text
- Slide indicators: bottom-right, "01. 02. 03." text format, current slide highlighted
- Left/right arrow navigation: semi-transparent bg buttons on edges
- Multiple slides (at least 3) with cross-fade or slide transition
- Min-height: ~600-700px

### 4. (Below fold — implementer to confirm from full page)
Expected sections based on church template category:
- About/Welcome section
- Ministries grid (3-4 ministry cards)
- Upcoming Events list
- Featured Sermon/Message
- Pastors/Team section
- Photo Gallery
- Contact/Visit information
- Footer with church info, social links, Component Dock attribution

## Implementation Order
1. TopBar (countdown timer)
2. Header (sticky nav + CTA + logo)
3. HeroSlider (carousel with overlay, date badge, info box, arrows, indicators)
4. Below-fold sections (confirm from full page reference)
5. Footer
6. Mobile responsiveness pass
7. Tests (100% coverage)
