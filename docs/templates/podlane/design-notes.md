# Podlane — Design Notes & Implementation Tasks

ColorLib source: Mypodcast (https://colorlib.com/wp/template/mypodcast/)
Preview: https://preview.colorlib.com/theme/mypodcast/
New name: podlane

## Section-by-section implementation order

### 1. App scaffold + layout
- Copy simplest existing app (e.g. apps/aurora or similar small template)
- Rename package to @free-react-templates/podlane
- Set up CNAME: podlane.free.componentdock.com
- Set homepage: https://podlane.free.componentdock.com
- Global font: Poppins from Google Fonts
- Tailwind config: brand color #ff3500, dark #2e3038, body #929191

### 2. Header component
- Fixed position, transparent background, becomes rgba(0,0,0,0.63) on scroll
- Logo: "my" (font-weight 100) + "podcast" (font-weight 500) + play icon image
- Nav links: Home, About, Episodes, Blog, Contact (white text, underline on hover)
- Right side: "Submit a Podcast" border button + 5 social icons
- Mobile: hamburger icon toggles slide-in menu
- Height: 86px normal, 70px scrolled

### 3. Hero section
- Full viewport height, background image with dark overlay
- Tag pills at top (lifestyle, interview, last episode) — small, bordered, white text
- Large heading (48px, white, Poppins)
- Subtitle paragraph (white)
- Track info bar: date | category | duration | comments (inline list)
- SoundCloud embed iframe (or placeholder audio player)
- "More Info" border button (pill shape, border-radius 21px, white border, white text)

### 4. Shows section
- White background, centered title
- 3-column responsive grid (col-lg-4)
- Each card: square image with dark overlay + play SVG icon centered, tag pill bottom-left
- Below image: date link, episode title (h4, bold), info row with heart icon + count + comment icon + count
- "Browse Shows" fill button (#ff3500 bg, rounded, centered)

### 5. Bi-weekly (parallax) section
- Parallax background image with dark overlay
- Two-column equal height layout
- Left: "Bi-weekly episodes" heading, paragraph, 3 border buttons (Amazon, Itunes, Spotify)
- Right: large show image with logo watermark overlay
- Full-width treatment

### 6. Shows 2 (By Category) section
- White background, "By Category" title
- 4-column responsive grid (col-xl-3 col-md-6)
- Each card: image with play icon + title text overlay (on gradient), tag pill below
- "Browse Shows" fill button centered

### 7. Footer
- Dark background (#1f2128)
- Centered logo row at top
- Three columns: Tags (12 tag links), Latest Episodes (3 items with play SVG + title + date/category), Instagram gallery (5 small square images)
- Social icons row centered (Facebook, Instagram, SoundCloud, Vimeo, YouTube)
- Copyright line with Component Dock link

### 8. Responsive adjustments
- Mobile: hamburger menu, stacked single-column cards
- Tablet: 2-column grids where appropriate
- Parallax section: stacked layout on mobile

### 9. Testing + verification
- Unit tests for each component
- 100% coverage on new code
- Typecheck clean
- Build succeeds
- Deploy to podlane.free.componentdock.com

## Key design fidelity notes

- The template uses a very dark aesthetic with full-viewport background images
- Buttons are consistently pill-shaped (border-radius: 21px)
- The brand color is a vivid red-orange (#ff3500), not a typical red
- Play icons are SVG triangles centered on dark image overlays
- The logo mixes font weights (thin "my" + bold "podcast") which is a distinctive brand element
- The header is completely transparent over the hero, only darkening on scroll
- The parallax section is the visual centerpiece — must preserve the full-viewport feel
- Footer uses a very dark navy (#1f2128) rather than pure black
- Social icons include SoundCloud and Vimeo (less common — ensure icons available)
