# Largo — Implementation Tasks & Design Notes

**Source:** ColorLib Musico (https://colorlib.com/wp/template/musico/)
**Preview:** https://preview.colorlib.com/theme/musico/
**New name:** largo
**Deploy:** https://largo.free.componentdock.com

## Section Order (replicate 1:1)

1. Navbar
2. Hero / Slider
3. Music Player Area
4. About
5. Video Gallery
6. Latest Tracks
7. Image Gallery
8. Contact RSVP
9. Footer

## Fidelity Notes

### Navbar

- Sticky top, transparent over hero (or white bg, check scroll behavior)
- Logo text: "Largo" (replace ColorLib branding)
- Nav links: Home, About, Tracks, Blog (dropdown), Pages (dropdown), Contact
- Social icons right-aligned: Facebook, Twitter, Instagram (use lucide-react)
- Mobile: hamburger collapse menu with mobile_menu div

### Hero

- Full-width background image (use picsum.photos/seed/largo-hero/1920/800)
- Dark gradient overlay: `linear-gradient(to bottom, rgba(0,0,0,0.4), black)`
- Centered heading: "Musician" (large, Josefin Sans, white)
- No subtitle or CTA — just the heading centered vertically

### Music Player Area

- Overlaps hero section with negative margin-top: -148px (desktop)
- White background card, container-width (max 1140px via col-xl-10)
- Left (9 cols): artist photo thumbnail (picsum.photos/seed/largo-artist/120/120) + artist name "Frando Kally" + date "10 November, 2019" + HTML5 audio element
- Right (3 cols): "buy albam" button (boxed-btn style: transparent, red border)
- 3 instances of this card stacked vertically in the Latest Tracks section

### About

- Two-column layout
- Left: artist photo (picsum.photos/seed/largo-about/500/600)
- Right: heading "Jack Kalib", bio paragraph, signature image (use placeholder or text)
- Light/white background

### Video Gallery

- 4 video thumbnails in a row (col-xl-3 each)
- Each: background image (picsum.photos/seed/largo-video-N/400/300) + play icon overlay (circular, centered)
- Hover: show inner info (show name span + video title h3)
- Play icon: fa-play in a circle (border-radius: 50%, white bg)

### Latest Tracks

- Section heading: "Latest Tracks" (centered, section_title class)
- 3 rows of music player cards (same structure as Music Player Area above)
- Each row: artist photo + name + date + audio player + "buy albam" button
- Use different artist photos: picsum.photos/seed/largo-track-N/120/120

### Image Gallery

- Section heading: "Image Galleries" (centered)
- 5 images in a responsive grid:
  - Row 1: col-5 + col-7 (2 images)
  - Row 2: col-4 + col-4 + col-4 (3 images)
- Each image: full-width within its column, hover overlay with plus icon (ti-plus)
- Hover effect: image scales up slightly, overlay fades in
- Use picsum.photos/seed/largo-gallery-N/

### Contact RSVP

- Full-width section with background image (use picsum.photos/seed/largo-contact/1920/600)
- Dark navy gradient overlay: `linear-gradient(rgba(0,29,56,0.6) 0%, #001d38 100%)`
- Centered content: heading "Contact For RSVP" (white, Josefin Sans)
- "Contact Me" button (boxed-btn3 style: filled red bg #ED1B1B, white text, transparent border)
- Button hover: transparent bg, red text, red border

### Footer

- Dark navy (#001D38) top section with padding-top: 100px, padding-bottom: 129px
- Two columns:
  - Left (col-6): "Services" title + email subscribe form (input + "Subscribe" button) + description text
  - Right (col-5, offset-xl-1): "Contact Me" title + contact list (email, phone, address) + social icons (Facebook, Google+, Twitter, YouTube, Instagram)
- Footer widget title: 22px, weight 400, white, capitalize
- Footer text: #C7C7C7, footer list items: #D5D5D5
- Copyright bar below: white bg, border-top, copyright text + "Made with Component Dock" link + footer nav links

## Design Token Mapping (Tailwind)

```css
@theme {
  --color-largo-primary: #ED1B1B;
  --color-largo-navy: #001D38;
  --color-largo-heading: #1F1F1F;
  --color-largo-body: #727272;
  --color-largo-body-light: #7e7e7e;
  --color-largo-white: #ffffff;
  --color-largo-border: #cccccc;
  --color-largo-footer-text: #C7C7C7;
  --color-largo-footer-muted: #D5D5D5;
  --color-largo-overlay: rgba(0, 0, 0, 0.4);
  --color-largo-contact-overlay: rgba(0, 29, 56, 0.6);
}
```

## Component List

- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/MusicPlayer.tsx`
- `src/components/About.tsx`
- `src/components/VideoGallery.tsx`
- `src/components/LatestTracks.tsx`
- `src/components/ImageGallery.tsx`
- `src/components/ContactRsvp.tsx`
- `src/components/Footer.tsx`

## Key Implementation Notes

- Audio player: Use HTML5 `<audio>` element with controls. The original uses audioplayer.js jQuery plugin — recreate as a styled native audio element.
- Video gallery: No actual video playback needed — show thumbnails with play icon overlays. Clicking could link to YouTube or show a modal.
- Image gallery: No actual lightbox needed — show images with hover overlay. Could use a simple onClick zoom or skip lightbox.
- The music player area's negative margin (-148px) overlaps the hero. Use negative margin-top on a white card container.
- Square buttons (no border-radius) are distinctive — most templates use rounded buttons.
- Two button styles: boxed-btn (outline red → filled red on hover) and boxed-btn3 (filled red → outline red on hover).
