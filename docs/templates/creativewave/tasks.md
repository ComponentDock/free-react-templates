# CreativeWave — Design Notes & Task Outline

Source: ColorLib BBS (https://colorlib.com/wp/template/bbs/)
New name: creativewave
Preview: https://preview.colorlib.com/theme/bbs/

## Structure order (top to bottom)

1. Navbar — logo left, nav links right (Home, Generic, Elements), hamburger on mobile
2. Banner/Hero — full-width purple gradient, "we're Creative" large heading, "Get Started" CTA button
3. Features — 2x2 grid: icon + title + paragraph per card
4. About — 3-column: title + image + tabbed content (History / Mission & Vision)
5. Video Area — background image with purple overlay, heading + play button + description
6. Blog — 3 cards in a row: thumbnail + title + short text
7. Story — purple background, white text left-aligned, background image right half
8. Newsletter — centered heading, email input + Get Started button in pill shape
9. Footer — dark bg, nav links, social icons, copyright + Component Dock link

## Section-by-section fidelity notes

### Navbar
- Transparent overlay on hero gradient
- White text links, 12px uppercase, 500 weight
- Hamburger icon (lnr-menu) for mobile
- Logo image on left

### Banner/Hero
- Height: 600px
- Purple radial gradient overlay (#7539dd → #7034db)
- Background image on right (banner.png)
- Heading: 100px, 900 weight, #793ae9, text-shadow
- Button: transparent, white border, 20px radius, gradient on hover

### Features
- White background, 60px top / 100px bottom padding
- 2-column grid (col-md-6)
- Each card: icon image + h4 title + paragraph
- Icon on left, description on right (flex layout)

### About
- Light lavender bg (#f9f9ff), 100px padding
- Left: "About Our Company" heading (36px, 600 weight)
- Center: image with 3px border-radius
- Right: tab pills (border-radius: 25px) with gradient active state
- Tab content: h3 + paragraph

### Video Area
- Background image with purple radial gradient overlay (80% opacity)
- Centered white text
- Play button image
- 100px vertical padding

### Blog
- White background, 70px top / 100px bottom padding
- 3-column grid (col-md-4)
- Each card: thumbnail (215px height, cover) + centered text below

### Story
- Solid purple bg (#7034db), 100px padding
- White text, left-aligned
- Background image on right half (50% width)

### Newsletter
- Light lavender bg (#f9f9ff), 100px padding
- Centered heading + subtitle
- Email input: pill shape (25px radius), white bg
- Get Started button: absolute positioned inside input, gradient bg

### Footer
- Dark bg (#333333), 100px padding
- Centered nav links, social icons, copyright
- Link hover: pink (#f58e9a)
- Component Dock attribution link

## Implementation tasks

1. [ ] Set up workspace: apps/creativewave, package.json, vite.config.ts, tsconfig
2. [ ] Create index.html with Poppins font link
3. [ ] Build Navbar component
4. [ ] Build Hero/Banner component
5. [ ] Build Features component (2x2 grid)
6. [ ] Build About component with tabs
7. [ ] Build VideoArea component
8. [ ] Build Blog component (3 cards)
9. [ ] Build Story component
10. [ ] Build Newsletter component
11. [ ] Build Footer component
12. [ ] Compose App.tsx from all sections
13. [ ] Write tests (Vitest + RTL) for each component
14. [ ] Ensure 100% test coverage
15. [ ] Run verify-app.sh and fix any issues
16. [ ] Commit and push
