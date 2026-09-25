# Soundboard — Prep Notes & Implementation Tasks

Source: ColorLib Hnband → https://preview.colorlib.com/theme/hnband/
New name: soundboard
Category: Music Event / Band

## Section order & fidelity notes

### 1. Navbar
- Logo left, nav center, CTA right
- Nav links: Home, About, Albums, Tours, Blog, Contact
- CTA: "Buy tickets" button (gradient purple→magenta)
- Sticky on scroll
- Mobile: hamburger menu

### 2. Hero
- Full-width background image (picsum.photos/seed/soundboard-hero-1/1920/1080)
- Slider-like layout (implement as single slide or simple carousel)
- Subtitle in Satisfy cursive font, magenta color (#e934ff)
- Headline in white, uppercase
- White paragraph text
- CTA "Buy tickets" button

### 3. About
- Two-column: left = image, right = text
- Overlaps hero via negative margin (simplify: just next section)
- Dark background (#0c0617)
- Subtitle "About us" in Satisfy cursive
- White headings and paragraphs
- "Contact us" CTA button

### 4. Discography
- Dark overlay background
- Section title: "Our Discography" (Satisfy subtitle + uppercase heading)
- "Buy on iTunes" CTA (implement as generic music store link)
- 8 album cards in 4-column grid (lg:4, sm:2, mobile:1)
- Circular images (border-radius: 50%)
- White titles and artist names

### 5. Audio Player
- Split layout: left = track info + controls, right = playlist
- Track info: song title + artist
- Controls: previous, play/pause, next, volume, progress bar
- Note: Original uses jPlayer (jQuery). Implement as static mockup player.
- Dark background

### 6. Video Section
- Dark overlay background
- "Our Videos" section title
- Video player left, playlist right
- Static mockup (no real video player needed)

### 7. Shows (Upcoming Shows)
- List of concert entries
- Each row: date badge (day + month), title, location, time, "Buy tickets" (line variant)
- Date badge: large day number, small month below
- Line variant buttons: transparent background, gradient underline effect

### 8. Footer
- Contact form: Name, Email, Message, "Send Email" button
- Side image (picsum.photos/seed/soundboard-footer/400/400)
- 3-column row: address, phone/email, social icons
- Social: Facebook, Twitter, YouTube, Instagram (use lucide-react icons)
- Copyright bar with Component Dock link (replaces ColorLib attribution)

## Design tokens to apply in Tailwind @theme

```
--color-brand-purple: #503aca;
--color-brand-magenta: #ea34ff;
--color-brand-dark: #0c0617;
--color-brand-text: #c4c4c4;
--font-family-sans: "Nunito Sans", sans-serif;
--font-family-cursive: "Satisfy", cursive;
```

## Placeholder images

- Hero: picsum.photos/seed/soundboard-hero-1/1920/1080
- About: picsum.photos/seed/soundboard-about/600/600
- Albums (8): picsum.photos/seed/soundboard-album-N/300/300 (N=1..8)
- Footer image: picsum.photos/seed/soundboard-footer/400/400
- Video thumbnail: picsum.photos/seed/soundboard-video/800/450

## Icons

Replace Font Awesome icons with lucide-react:
- fa-map-marker → MapPin
- fa-clock-o → Clock
- fa-apple → (omit or use Music icon)
- fa-play/fa-step-backward/fa-step-forward/fa-random/fa-volume-up → Play, SkipBack, SkipForward, Shuffle, Volume2
- fa-facebook/fa-twitter/fa-youtube-play/fa-instagram → Facebook, Twitter, Youtube, Instagram
- fa-heart → Heart
