# Melodia — Implementation Tasks & Design Notes

**Source:** ColorLib "One Music" — https://colorlib.com/wp/template/onemusic/
**Preview:** https://preview.colorlib.com/theme/onemusic/
**New name:** melodia

## Section-by-Section Fidelity Notes

### 1. Navbar
- Transparent background over hero, becomes solid black on scroll (sticky)
- Logo left, nav links center (Home, Albums, Events, News, Contact)
- Login/Register link + cart icon with quantity badge on right
- Mobile: hamburger toggle with slide-in menu
- Sticky: black bg, shadow `0 5px 50px 15px rgba(0,0,0,0.2)`, height 85px (70px mobile)
- Nav links: white, bold 700, 16px, capitalize, hover at 70% opacity

### 2. Hero
- Full-width carousel with 2+ slides
- Each slide: bg image (use picsum.photos), dark overlay (rgba(0,0,0,0.65))
- Centered content: subtitle "Latest album" (small), h2 album name, "Discover" button
- Button: `.oneMusic-btn` — white bg, 1px black border, square corners, 212px min-width, 49px height
- Auto-advancing carousel with fade transitions

### 3. Latest Albums
- White section, padding 100px top/bottom
- Section heading: subtitle "See what's new", h2 "Latest Albums" (uppercase, letter-spacing 10px, 30px)
- Description paragraph below heading
- Album carousel: 7 album cards with cover image + overlay (artist name h5 + song title p)
- Use horizontal scroll or simple carousel component

### 4. Buy What's New
- `bg-gray` (#f5f9fa) background, fluid container
- Section heading: "See what's new" / "Buy What's New" (style-2: 30px)
- 6-column responsive grid (2 col on sm, 3 on md, 6 on lg)
- Each card: album thumb, price badge ($0.90 style), play icon overlay on hover
- Artist name (h5 link) + album title below
- Staggered fade-in animation on scroll (wow.js style)

### 5. Featured Artist
- Parallax bg image with dark overlay (rgba(0,0,0,0.65)), `background-attachment: fixed`
- Two-column layout: 40% artist image left, 60% content right
- Content: section heading (white, left-aligned) + description paragraph + audio player
- Audio player: song name "01. Main Hit Song" + HTML5 audio element
- Use picsum.photos for artist image

### 6. Miscellaneous
- White section, padding 100px top / 0 bottom
- Three equal columns (col-lg-4 each)
- **This Week's Top:** heading + 6 items (thumbnail 80×80 + artist h6 + song p), stacked
- **New Hits:** heading + 6 items (thumbnail + artist h6 + song p + audio player)
- **Popular Artists:** heading + 7 items (thumbnail + artist name p), no audio
- Each item has staggered fade-in

### 7. Contact
- Parallax bg with dark overlay, `background-attachment: fixed`
- Centered white section heading: "See what's new" / "Get In Touch"
- Form: 3-col row (Name, Email, Subject), full-width Message textarea
- "Send" button: `.oneMusic-btn` style, centered
- Form inputs: standard form-control with placeholders

### 8. Footer
- Logo left, copyright text below
- Nav links right: Home, Albums, Events, News, Contact
- MUST replace Colorlib attribution with "Made with Component Dock" → https://www.componentdock.com/
- Copyright: dynamic year

## Global Design Notes

- **Font:** Archivo Narrow (Google Fonts) — weights 400, 500, 600, 700 (regular + italic)
- **Color palette:** Black (#000) primary, white (#fff) secondary, gray (#f5f9fa) section bg, dark text (#5f5f5f)
- **Buttons:** Always square corners (border-radius 0), 212px min-width, 49px height, 1px solid black border, invert on hover
- **Section headings:** Uppercase, letter-spacing 10px (reduced to 5px on mobile), style-2 variant = 30px font
- **Parallax sections:** bg-fixed + bg-overlay (65% black), white heading text
- **No images/fonts/icons copied:** use picsum.photos for images, Google Fonts link, lucide-react for icons
- **No ColorLib references** in any app code — provenance only in spec + TEMPLATES.md

## Task Checklist

- [ ] Create apps/melodia workspace (copy simplest existing app, rename package)
- [ ] Configure vite.config.ts with injectUiSource()
- [ ] Set up index.css with Tailwind + Archivo Narrow font import + theme tokens
- [ ] Build Navbar component (transparent → sticky, mobile hamburger)
- [ ] Build Hero component (carousel with 2+ slides)
- [ ] Build LatestAlbums component (heading + album carousel)
- [ ] Build BuyWhat'sNew component (bg-gray, 6-col grid with price/play)
- [ ] Build FeaturedArtist component (parallax bg, two-col, audio)
- [ ] Build Miscellaneous component (3-col: top tracks, new hits, artists)
- [ ] Build Contact component (parallax bg, form)
- [ ] Build Footer (logo, copyright, nav, Component Dock link)
- [ ] Compose App.tsx (all sections in order)
- [ ] Write tests for each component (100% coverage)
- [ ] Run verify-app.sh melodia
- [ ] Update TEMPLATES.md (mark [~] then [x] after merge)
- [ ] Commit and push
