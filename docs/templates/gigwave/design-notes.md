# Gigwave — Prep Notes

Source: ColorLib "Hnband" — https://colorlib.com/wp/template/hnband/
Preview: https://preview.colorlib.com/theme/hnband/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hnband-free-template.jpg
Category: Music Event / Band

## Implementation Tasks

1. Scaffold app from simplest existing music app (copy + rename package)
2. Set up theme tokens in `index.css` (brand purple #503aca, magenta #ea34ff, dark palette, fonts)
3. Build `Header.tsx` — transparent overlay, logo, 7 nav links + dropdown, "Buy tickets" button, mobile hamburger
4. Build `HeroSection.tsx` — dark bg image, carousel slider with cursive subtitle + heading + description + CTA
5. Build `AboutSection.tsx` — dark bg, two-column (image + text), cursive subtitle, heading, paragraph, CTA
6. Build `DiscographySection.tsx` — overlay bg, section title, "Buy on iTunes" button, 4x2 album card grid
7. Build `PlayerSection.tsx` — dark bg, split layout, audio controls (prev/play/next), progress bar, playlist
8. Build `VideoSection.tsx` — purple bg, section title, video player + playlist sidebar
9. Build `ShowsSection.tsx` — dark bg, section title, list of show items with date/title/venue/time/CTA
10. Build `FooterSection.tsx` — contact form, footer image, address/phone/social, copyright with Component Dock
11. Compose in `App.tsx` — section order: Header → Hero → About (+ Discography) → Player → Video → Shows → Footer
12. Write tests (Vitest + RTL) for each component — 100% coverage
13. Run `scripts/verify-app.sh gigwave`

## Fidelity Notes

### Section Order
Header → Hero Slider → About (+ Discography embedded) → Player → Video → Shows → Footer

### Header
- Transparent/absolute positioned, sits over the hero background
- Logo image on left (col-lg-2) — use text "Gigwave" styled as brand
- Nav links centered (col-lg-8): Home, About, Albums, Tours, Pages (dropdown: Gallery, Ticket, Albums details, Blog single), Blog, Contact
- "Buy tickets" button right (col-lg-2, hidden on mobile < lg)
- Mobile: hamburger icon (lucide-react Menu), toggles slide-down overlay
- Max-width: 1760px container

### Hero Section
- Full-width dark background image (use picsum.photos/seed/gigwave-hero/1920/1275)
- Height: ~1275px desktop, 900px mobile
- Owl Carousel-like slider with 2+ items, max-width 750px
  - Each item: cursive subtitle "The electro vibe" (Satisfy, 34px, magenta), h2 "Tailor Lachiri" (large, white, bold), description paragraph, "Buy tickets" button
  - Navigation: round buttons (50px diameter, border-radius 50%, semi-transparent black bg)
  - Use CSS animations or simple React interval-based carousel

### About Section
- Background: `#0c0617`
- Negative margin top: -255px (overlaps hero)
- Two-column layout (col-lg-6 + col-lg-6):
  - Left: performance/band image (picsum.photos/seed/gigwave-about/600/500)
  - Right: "About us" subtitle (Satisfy cursive, magenta #e934ff), h2 "The electro vibe", description paragraph, "Contact us" button

### Discography Section (embedded in About)
- Negative margin: -406px, padding-top: 475px
- Dark overlay background image (use picsum.photos/seed/gigwave-disco/1920/800)
- Section title: "Our Discography" subtitle + "newest albums & singles." h2
- "Buy on iTunes" button right-aligned (col-lg-4)
- 4x2 grid (col-lg-3 col-sm-6), 8 album cards:
  - Each: album art image, title (h4), artist (p)
  - Albums: I'm a mess (Bebe Rexha), Natural (Imagine Dragons), Sweet But Psycho (Ava Max), Waiting For Love (Avicii), So Am I (Ava Max), Mamma Mia (Hugel feat. Amber), Bad Guy (Billie Eilish), Let me down slowly (Alec Benjamin)
  - Use picsum.photos/seed/gigwave-album-N/300/300 for placeholders

### Player Section
- Background: `#0F0923`
- Split layout: left (col-lg-6) + right (col-lg-6)
- Left: track info (h5 track name, p artist) + audio player controls (prev/play/next, progress bar, current time/duration, volume)
- Right: scrollable playlist list
- Audio player is decorative/static (no real audio needed) — show controls styled to match

### Video Section
- Background: `#503aca` with dark overlay image
- Section title: "Our Videos" subtitle + "newest albums & singles." h2, centered
- Split layout: left (col-lg-8) = video player (520px height, bg `#100923`), right (col-lg-4) = video playlist sidebar
- Video player: show title text + prev/play/next + progress bar + volume
- Use a placeholder image or static content for the video area

### Shows Section
- Background: `#0c0617`
- Section title: "Upcoming Shows" subtitle + "WHEN WE ALL FALL ASLEEP" h2
- "View all" button right-aligned
- List of 5 show items, each with:
  - Date block: large day number (h2) + month (p)
  - Title (h4) + details line (genre | language | age | duration)
  - Location: map marker icon + venue name
  - Time: clock icon + time
  - "Buy tickets" button (outline variant — gradient border, transparent bg)
- Hover: background highlight `#231d2d`, opacity transition 0.4s
- Border-bottom: 1px solid rgba(235,235,235,0.1)
- Shows data:
  1. 25 Aug — Sunburn Arena with Wiz Khalifa | EDM, Pop, Rap | English | Age 15+ | 5hrs | Multiple Venues | 02:00PM
  2. 05 Sep — Raymond MTV India Music | Rock, Sufi | English, Hindi | Age 12+ | The Fairmont Hotel: Jaipur | 02:00PM
  3. 16 Sep — Sunburn Goa 2019 | EDM | English | Age 15+ | 8hrs | Vagator: Goa | 02:00PM
  4. 20 Sep — The Piano Man presents Shockblast | Jazz, Pop | English | 3hrs | The Piano Man Jazz Club: Delhi | 08:00PM
  5. 14 Oct — Zangoora - Kingdom of Dreams | EDM, Pop, Rap | English | Age 15+ | 5hrs | Kingdom Of Dreams: Gurgaon | 09:00PM

### Footer Section
- Background: `#1f1448` with gradient/image overlay
- Footer top area: bg `#191039`, two-column:
  - Left (col-lg-8): contact form — "Contact us" subtitle + "Got a Question?" h2, Name input, Email input, Message textarea, "Send Email" button
  - Right (col-lg-4): footer image (use picsum.photos/seed/gigwave-footer/400/500)
- Info row (3 columns, col-lg-4):
  - Address: map marker icon + "333 Middle Winchendon Rd, Rindge, NH 03461"
  - Phone/Email: phone icon + "125-711-811 | 125-668-886" + "Support.music@gmail.com"
  - Social: Facebook, Twitter, YouTube, Instagram icons
- Copyright: "Made with ❤ by Component Dock" linking to https://www.componentdock.com/

### Design Tokens Summary
- Brand purple: #503aca
- Brand magenta: #ea34ff
- Accent magenta: #e934ff (cursive subtitles)
- Dark backgrounds: #0c0617 (primary), #0F0923 (player), #100923 (video player), #191039 (footer top), #1f1448 (footer), #231d2d (hover)
- Text: #fff (headings on dark), #c4c4c4 (body text), #222222 (headings on light)
- Fonts: Nunito Sans (body), Satisfy (cursive subtitles)
- Button: gradient linear-gradient(45deg, #503aca, #ea34ff), no border-radius (square), uppercase, bold, white
- Button outline: gradient border-image, transparent bg, same gradient on hover fill
- No custom icon fonts — use lucide-react for all icons

### Images (placeholders)
- Hero bg: picsum.photos/seed/gigwave-hero/1920/1275
- About image: picsum.photos/seed/gigwave-about/600/500
- Discography overlay: picsum.photos/seed/gigwave-disco/1920/800
- Album art 1-8: picsum.photos/seed/gigwave-album-1/ through gigwave-album-8/300/300
- Footer image: picsum.photos/seed/gigwave-footer/400/500

### ColorLib ↔ Gigwave mapping
- Source slug: `hnband`
- Source name: "Hnband"
- New name: `gigwave`
- Brand: "Gigwave" (replaces "Hnband" logo)
- Nav links: keep same structure (Home, About, Albums, Tours, Pages dropdown, Blog, Contact)
- Footer copyright: replace Colorlib credit with Component Dock
