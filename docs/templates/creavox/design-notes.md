# Creavox — Design Notes & Task Outline

## Source
- **ColorLib slug:** boxus
- **Preview URL:** https://preview.colorlib.com/theme/boxus/
- **Template page:** https://colorlib.com/wp/template/boxus/

## Section Order (from preview DOM)

1. **Hero** (`#home`) — intro-page class, centered layout
2. **Services** (`#services`) — numbered 01, card carousel
3. **Portfolio** (`#portfolio`) — numbered 02, masonry grid
4. **About** (`#about`) — numbered 03, bio + timeline + team slider
5. **News** (`#news`) — numbered 04, blog list + testimonial carousel
6. **Video** (`#video`) — numbered 05, feature + icon carousel
7. **Skills** (`#skills`) — numbered 06, progress bars
8. **Contact** (`#contact`) — numbered 07, form + map
9. **Footer** — copyright + social icons

## Component Outline

### Navbar
- Fixed/sticky navigation bar
- 8 links: Home, Services, Portfolio, About, News, Video, Skills, Contact
- Mobile hamburger menu
- Deep purple background `#221C5A`

### Hero
- Full-width deep purple background with image overlay
- Centered layout, 1170px max width
- Logo image (use picsum.photos placeholder)
- Montserrat heading (large, white)
- PT Serif subtitle (smaller, white)

### Services
- Alternating layout: numbered title left, content right
- Section number badge: green `#32DB8A` background, `#55B286` text
- Montserrat title "Services"
- 4 service cards in a 2x2 grid (carousel)
- Each card: icon + title + description
- Cards: Branding, Mobile Apps, Web, Graphic
- Next arrow to slide to second set: Services, PSD, HTML, PHP

### Portfolio
- Alternating layout: numbered title right, content left
- Section number badge on right
- Isotope masonry grid (2 column sizes: full + half)
- 4 portfolio items with images
- Hover overlay: category icon + type label + item name
- "LOAD MORE" button below

### About
- Alternating layout: numbered title left, content right
- "CRAFTERS" title
- Two-column text: description left, timeline right
- Timeline: colored date ranges (pink `#e54b76`) + gray descriptions
- Full-width image slider below
- Team member horizontal slider: name, position, bio, photo

### News
- Alternating layout: numbered title right, content left
- "STORIES" title
- 4 blog articles: sequence number + author + category tag + headline
- "GO TO BLOG" link at bottom
- Full-width testimonial carousel below with quote text + author

### Video
- Alternating layout: numbered title left, content right
- "OFFER" title
- Two-column: description + timeline left, video thumbnail + play button right
- Full-width horizontal icon carousel below (7 items)
- Dot pagination + next arrow

### Skills
- Alternating layout: numbered title right, content left
- "EXPERTISE" title
- 4 animated progress bars:
  - HTML: 81%, green `#32DB8A`
  - CSS: 93%, gold `#FFBA42`
  - PSD: 72%, rose `#E74C78`
  - DESIGN: 99%, blue `#4C9EE7`
- Each bar: title, percentage text, colored fill

### Contact
- Alternating layout: numbered title left, content right
- Two-column: description left, form right
- Form: Name, Email, Subject, Message, SEND button
- Full-width Google Map embed below

### Footer
- Deep purple background
- Copyright text + Component Dock link (replaces Colorlib credit)
- Social icons: Twitter, Behance, Dribbble, Facebook, RSS (use lucide-react)

## Fidelity Notes

- The original uses numbered section titles (01–07) with colored badge
  backgrounds that alternate left/right — this is the most distinctive
  visual pattern and MUST be preserved
- Background images on sections should use picsum.photos with deterministic
  seeds matching the section (e.g. `seed/creavox-hero`, `seed/creavox-services`)
- Progress bars should animate on scroll (Intersection Observer or similar)
- Portfolio hover overlay should fade in on hover
- Team slider and service carousel can use CSS scroll-snap instead of jQuery
  carousel
- Blog articles use large sequence numbers (01–04) as a design element
- Testimonial quotes should rotate automatically or on user interaction
