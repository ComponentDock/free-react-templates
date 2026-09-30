# Sidebardock — Design Notes & Task Outline

Source: ColorLib Sidebar V10
Slug: colorlib-sidebar-v10
Preview: https://preview.colorlib.com/theme/colorlib-sidebar-v10/ (404 — design from screenshot)

## Section order (top to bottom, left to right)

1. Sidebar (fixed left, full viewport height)
   - Author portrait with gradient overlay
   - Title "Journal" (serif)
   - Tagline paragraph
   - Nav links: Latest, Projects, About
   - Social icon row: FB, Twitter, IG, Dribbble, LinkedIn
2. Content area (scrollable right)
   - Toggle (X) button to collapse/expand sidebar
   - 2-column article grid
   - Each card: thumbnail, title, date

## Fidelity notes

- Sidebar background: linear-gradient(to bottom, #00b4d8, #7b2ff7)
- Portrait overlay: same gradient with reduced opacity on top of photo
- Title font: Playfair Display (Google Fonts)
- Body font: Poppins (Google Fonts)
- Social icons: lucide-react icons (Facebook, Twitter, Instagram, Dribbble, Linkedin)
- Social icon circles: 40px, bg rgba(255,255,255,0.2), white icon, rounded-full
- Toggle button: positioned top-right of content area when sidebar open, simple X icon
- Card layout: CSS grid with grid-template-columns: 1fr 1fr
- Card thumbnail: 60x60px rounded image (or square with slight radius)
- Card title: font-weight 600, color #333
- Card date: font-size small, color #999, text "Posted: Dec 17, 2019"
- No visible footer in the original — add Component Dock footer per convention

## Implementation tasks

1. Create app scaffold: `apps/sidebardock/` (copy from simplest existing app)
2. Set up index.css with Tailwind @theme tokens (brand colors, fonts)
3. Build Sidebar component (portrait, title, tagline, nav, social icons)
4. Build ContentArea component (toggle button, article grid)
5. Build ArticleCard component (thumbnail, title, date)
6. Wire up sidebar toggle state (useState)
7. Add responsive breakpoints (mobile: full-width sidebar, single-column grid)
8. Add placeholder images via picsum.photos
9. Write tests for each component (Vitest + RTL)
10. Verify 100% coverage, typecheck, lint, build
11. Add footer linking componentdock.com
