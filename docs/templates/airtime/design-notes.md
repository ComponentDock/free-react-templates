# Airtime — Design Notes & Task Outline

Source: ColorLib "The Hustle Hour" — https://colorlib.com/wp/template/the-hustle-hour/
Preview: https://preview.colorlib.com/#the-hustle-hour (JS-rendered, not fetchable via curl)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hustlehour-template-1771943880509.jpg

## Structure order (top to bottom)

1. Navbar (sticky, dark)
2. Hero (dark, centered CTA)
3. Dark stats bar (4 metrics, white numbers)
4. Angled divider (dark → light transition)
5. Light stats section (4 metrics, red numbers)
6. Featured episodes section (dark, card grid)
7. Newsletter signup (email + button)
8. Footer (dark, multi-column)

## Section-by-section fidelity notes

### 1. Navbar
- Dark background `#0f172a`, full-width, sticky
- Left: red mic icon + "The Hustle Hour" text (white)
- Center: nav links in white, ~14px, normal weight
  Episodes | About | Sponsors | Newsletter | Sponsorships | Blog | Release Notes | Contact
- Right: dark mode toggle (moon icon), "Listen Now" button (red bg, white text, rounded-full)
- Mobile: hamburger menu, links in a slide-down panel

### 2. Hero
- Same dark bg as navbar (continuous dark band)
- Red pill badge at top: "🔴 New Episode Every Tuesday"
  - Red bg (`#ef4444`), white text, rounded-full, ~12px font, small padding
- Heading (two lines):
  - Line 1: "Stories That" — white, bold, ~48px desktop
  - Line 2: "Spark Ideas" — red (`#ef4444`), bold, ~48px desktop
  - Font: Inter or system sans-serif
- Subtext paragraph: light gray `#94a3b8`, ~16px, max-width ~600px, centered
- Two CTA buttons side-by-side, centered:
  - Primary: "Listen Latest Episode" — `#ef4444` bg, white text, rounded-full,
    music note icon left, padding ~12px 28px
  - Secondary: "Subscribe" — transparent bg, 1px white border, white text,
    rounded-full
- Platform row: "Available on:" (gray text) + 4 pills:
  Spotify | Apple Podcasts | Google Podcasts | YouTube
  Each: dark bg `#1e293b`, white text, icon + label, rounded-full, ~12px font

### 3. Dark stats bar
- Same dark bg, full-width
- 4-column grid, centered content, equal spacing
- Each stat: large white number (bold, ~32px) + small gray label (~14px)
  "500+" / "Episodes"
  "2M+" / "Downloads"
  "Top 50" / "Tech Podcast"
  "4.8" / "Rating"
- Subtle vertical dividers (border-left on columns 2-4, `#334155`)

### 4. Angled transition divider
- Diagonal clip or SVG cutting from dark to white
- Use CSS `clip-path: polygon(...)` or an SVG divider component
- Creates a smooth visual transition between dark hero and light content

### 5. Light stats section
- White or very light gray bg (`#f8fafc`)
- 4-column grid, centered, matching dark stats layout
- Red numbers (`#ef4444`, bold, ~32px) + dark labels (`#64748b`, ~14px)
  "200+" / "Episodes Published"
  "1M+" / "Total Downloads"
  "50+" / "Countries Reached"
  "4.9" / "Average Rating"

### 6. Featured episodes section
- Dark bg `#0f172a`
- Section heading: white, centered
- Card grid (responsive: 3 cols desktop, 2 tablet, 1 mobile)
- Each card: dark card bg (`#1e293b`), episode artwork placeholder
  (use `https://picsum.photos/seed/airtime-ep-<n>/400/300`), episode title
  (white), date + duration (gray), play button (red circle with white icon)
- Hover: subtle scale or glow on cards

### 7. Newsletter signup
- Could be dark bg or red accent section
- Heading: "Subscribe to our Newsletter" or similar
- Email input (dark or light, depending on bg) + "Subscribe" button (red)
- Responsive: stacks on mobile

### 8. Footer
- Dark bg `#0f172a`, matching header
- Left column: logo + short tagline
- Center: navigation links (same as navbar)
- Right: social icons (Twitter/X, Instagram, YouTube, Spotify)
- Bottom bar: copyright + "Made with Component Dock" linking to
  https://www.componentdock.com/
- NO ColorLib attribution anywhere in the footer

## Placeholder images

- Episode artwork: `https://picsum.photos/seed/airtime-ep-1/400/300`
  (increment seed: ep-1, ep-2, ep-3, etc.)
- Hero background: no image needed (solid dark bg)
- No external assets, fonts loaded from Google Fonts via `<link>`

## Key implementation notes

- Dark mode toggle: use Tailwind `dark:` class strategy
  - Default state = dark (matches the screenshot)
  - Toggle adds/removes `.dark` on `<html>`
  - Light mode overrides bg-dark → bg-white, text-white → text-dark, etc.
- All buttons use `rounded-full` for pill shape
- Use `cn()` from `packages/ui` for all conditional classes
- Reuse `Button` and `ButtonLink` from `packages/ui` where possible
- The angled divider: implement as a simple SVG or CSS clip-path component
- Stats numbers: static content (no animation needed for MVP)
- Mobile nav: hamburger icon → slide-down menu with all nav links
