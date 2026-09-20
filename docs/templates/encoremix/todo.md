# EncoreMix — Implementation Notes

Source: ColorLib Sunfest (https://preview.colorlib.com/theme/sunfest/)
New name: encoremix

## Section Order (fidelity notes)

1. **Navbar** — Transparent header overlaid on hero. Logo "EncoreMix" left (font-weight 800, white), nav links right (HOME, ABOUT, ARTISTS, BLOG, CONTACT), search icon (lucide Search). Mobile: hamburger icon → full-screen slide-in panel (#050505 bg, white text, padded links). Desktop: horizontal nav in header bar.
2. **Hero** — Full-viewport bg image (festival night scene). Centered content with: date label above headline (white, small caps), cursive headline "Hello world!" using mountains-style font with gradient text fill (`linear-gradient(#00d0ff, #25ffbf)` → `-webkit-background-clip: text`). Countdown timer below: 4 items (Days, Hours, Minutes, Seconds) as large white numbers + small labels. Two CTA buttons at bottom: "Buy Tickets" (white bg, dark text, sharp corners) and "See Lineup" (gradient bg, dark text, sharp corners).
3. **Lineup Artists — Headliners** — Dark bg with bg image. Section header: subtitle "JUST THE BEST" (muted gray, uppercase, small), heading "The Lineup Artists-Headliners" (black on white card, large). Three artist cards alternating layout:
   - Card 1: image left, text right (name + bio + link box)
   - Card 2: text left, image right (image hidden on mobile)
   - Card 3: image left, text right
   Cards: white bg, large box-shadow, padded content. Artist names bold, bios muted gray.
4. **Complete Lineup** — Same subtitle/heading pattern. 4-column grid (responsive: 2-col mobile, 3-col tablet, 4-col desktop). 8 artist items: square/landscape photo + name below. "See all lineup" button centered (gradient bg, sharp corners, white text).
5. **Next Events** — Subtitle/heading pattern. Horizontal swiper/carousel with prev/next arrow. Each slide: full-width bg image with semi-transparent dark overlay (`rgba(0,0,0,.75)`), centered text overlay (event title h3 + venue/p address, white text).
6. **Last News** — Subtitle/heading pattern. Two-column layout (stacks on mobile). Each blog card: featured image (full-width within column), date badge (gradient bg, white text, absolute-positioned top-left), content area with: post title (h2 link), meta line (author | comments count), description paragraph. White card bg, large box-shadow.
7. **Footer** — Full-width bg image. Large "EncoreMix" brand text (script/cursive font, centered). Email link. Copyright line with heart icon and "Component Dock" link. Social icon row: 6 icons (Pinterest, Facebook, Twitter, Dribbble, Behance, LinkedIn) centered with flex.

## Design Token Reference

- Brand gradient: `linear-gradient(#00d0ff, #25ffbf)` (cyan → mint)
- Dark background: `#050505`
- White: `#ffffff`
- Body text (on dark): `hsl(0, 0%, 90%)` ≈ `#e6e6e6`
- Card text (on white): `hsl(0, 0%, 9%)` ≈ `#171717`
- Card meta: `hsl(0, 0%, 60%)` ≈ `#999999`
- Section subtitle: `hsl(0, 0%, 48%)` ≈ `#7a7a7a`
- Section heading: `hsl(0, 0%, 0%)` = `#000000`
- Card shadow: `50px 40px 115px rgba(0,0,0,0.1)`
- News card shadow: `10px 40px 115px 27px rgba(0,0,0,0.1)`
- Button: sharp corners (border-radius: 0)
- Font: Poppins (Google Fonts, weights 300-700)
- Accent font: mountains (cursive, for hero headline only — use a Google Fonts cursive/handwriting alternative like "Pacifico" or "Sacramento")
- Event overlay: `rgba(0,0,0,0.75)`

## Implementation Notes

- Replace jQuery countdown with React hook (useState + setInterval) or a lightweight countdown library
- Replace Swiper.js with a React carousel (e.g. embla-carousel-react or pure CSS scroll-snap)
- Replace hamburger jQuery toggle with React state (useState for open/close)
- Mountains font: use Google Fonts "Pacifico" or "Sacramento" as a close cursive/handwriting substitute
- Artist images: `https://picsum.photos/seed/encoremix-headliner-<n>/600/600`
- Complete lineup thumbnails: `https://picsum.photos/seed/encoremix-lineup-<n>/400/400`
- Event images: `https://picsum.photos/seed/encoremix-event-<n>/800/500`
- News images: `https://picsum.photos/seed/encoremix-news-<n>/800/500`
- Hero bg image: `https://picsum.photos/seed/encoremix-hero/1920/1080`
- Social icons: lucide-react equivalents (Twitter/X, Facebook, etc.)
- Footer bg: `https://picsum.photos/seed/encoremix-footer/1920/600`
- All gradient effects: Tailwind `bg-gradient-to-r from-[#00d0ff] to-[#25ffbf]`
- Gradient text: Tailwind `bg-gradient-to-r from-[#00d0ff] to-[#25ffbf] bg-clip-text text-transparent`
