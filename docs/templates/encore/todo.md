# Encore — Design Notes & Implementation Tasks

## Source
- ColorLib slug: `music`
- Preview: https://preview.colorlib.com/theme/music/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/music-free-fullscreen-musician-website-template.jpg

## Section Order (top → bottom)

1. **Header** — sticky dark purple bar, centered logo ("encore" + equalizer bars graphic), nav links (Home, Artists, Download Music, News, Contact), hamburger on mobile
2. **Home Hero** — fullscreen slider with background images, "your music." heading (green accent on "music."), ticket form (Event dropdown + Tickets input + green button)
3. **Song / Player** — parallax background, music player widget with album art, play/pause/prev/next, progress bar, volume controls
4. **Tours** — white background, "Tour Dates" heading, list of tour entries (date, venue, city, "add" link)
5. **App** — light gray (#eef2f6) background, app screenshot image + description text
6. **Featured** — white background, "Featured" heading, artist/track list with play buttons
7. **News** — dark purple (#3b125d) background, "News" heading, 3-column card grid (date badges, images, titles, excerpts)
8. **Newsletter** — white background, "Newsletter" heading + description, email input (22px radius) + subscribe button (green gradient)
9. **Footer** — white bg, logo, social icons (Facebook, Instagram, Spotify, Twitter), Component Dock link

## Fidelity Notes

- **Font**: Josefin Sans (300/400/600/700) via Google Fonts `<link>` in index.html
- **Brand palette**: green #2ac275 (primary accent, buttons, links), dark purple #3b125d (header, news section), yellow-green #eeff2d (button hover gradient), lime #cbdc0b (gradient mid-stop)
- **Buttons**: 200x56px, text uppercase, gradient sweep on hover (green → lime → green), border-radius 22px on inputs
- **Player controls**: 45px circular buttons (50% radius), white on dark
- **News cards**: mixed layout (some image-top, some image-side), green circular date badges
- **Newsletter input**: rounded pill (22px radius), 2px solid #e0e7ee border
- **Parallax**: hero and song sections use background images with parallax scroll
- **No assets copied**: use picsum.photos for images, lucide-react for icons, system fonts where possible
- **Mobile**: hamburger overlay replaces nav, sections stack vertically

## Implementation Tasks

- [ ] Copy starter app (simplest existing app) → rename to `encore`
- [ ] Add Josefin Sans Google Font link to index.html
- [ ] Set up Tailwind theme tokens in index.css (brand green, purple, yellow-green)
- [ ] Build Header component (logo with equalizer bars SVG, nav links, hamburger toggle)
- [ ] Build HomeHero component (fullscreen slider with background images, heading, ticket form)
- [ ] Build MusicPlayer component (play/pause, prev/next, progress bar, volume)
- [ ] Build Tours component (tour date list, "add" links)
- [ ] Build AppDownload component (image + text on gray bg)
- [ ] Build Featured component (artist/track list with play buttons)
- [ ] Build News component (3-card grid on dark purple bg)
- [ ] Build Newsletter component (email input + subscribe button)
- [ ] Build Footer component (logo, social icons, Component Dock link)
- [ ] Compose all sections in App.tsx
- [ ] Write tests (TDD) for each component — 100% coverage
- [ ] Run verify-app.sh encore
