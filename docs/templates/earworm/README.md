# Earworm — Design Notes & Implementation Tasks

ColorLib source: Poca (https://colorlib.com/wp/template/poca/)
Preview: https://preview.colorlib.com/theme/poca/
New name: earworm

## Section-by-section implementation order

### 1. App scaffold + layout
- Copy simplest existing app (e.g. apps/aurora or similar small template)
- Rename package to @free-react-templates/earworm
- Set up CNAME: earworm.free.componentdock.com
- Set homepage: https://earworm.free.componentdock.com
- Global font: HK Grotesk from Google Fonts
- Tailwind config: brand color #f55656, heading #232323, body #666666, border #ebebeb, secondary #a6a6a6

### 2. Header component
- Sticky navbar with `.classy-navbar` pattern
- Left: logo image (use placeholder)
- Center: nav links — Home, Pages (dropdown), Podcasts, About, Blog (dropdown), Contact
- Right: search icon + 5 social icons (Facebook, Twitter, Pinterest, Instagram, YouTube)
- Mobile: hamburger toggles slide-in menu
- Transition: transparent → slight dark background on scroll

### 3. Hero/Welcome Carousel
- Full-viewport height carousel (3 slides)
- Each slide: background image (picsum.photos placeholder) + dark overlay (rgba(0,0,0,0.5))
- Content: heading ("Subscribe Today" / "Listen Now" / "Discover Today"), subtitle, two CTA buttons
- Below CTA: music player area with episode thumbnail, date, title, author/category/duration, native audio player, like/share/download links
- Carousel auto-rotates with navigation dots
- Fidelity note: original uses Owl Carousel; implement with a lightweight React carousel or CSS-only approach

### 4. Latest Episodes section
- White background, section-padding-80
- Section heading "Latest Episodes" centered with `.line` divider
- Filter tabs as pill buttons: All, Entrepreneurship, Media, Tech, Tutorials
- 2-column grid of episode cards (6 items)
- Each card: thumbnail (left) + content (right): published date, title, author/category/duration, native audio player, like/share/download
- "Load More" button centered below (visual only, no pagination logic needed)
- Filter tabs filter cards by category (show/hide)

### 5. Featured Guests section
- White background, section-padding-80
- Section heading "Featured Guests" centered with `.line` divider
- 3-column (or 4 on wider screens) grid of guest cards
- Each card: guest photo (picsum.photos), name, role/title
- Subtle hover effect on cards

### 6. Newsletter section
- Parallax background image with dark overlay (jarallax-style)
- Two-column layout: left — heading + subtitle; right — email form
- Email input + "Subscribe" button
- Section padding: pt-50 (less top padding than other sections)

### 7. Footer section
- White background, section-padding-80-0 (80px top, 0 bottom)
- 4-column layout:
  - About Us: paragraph text + copyright
  - Categories: nav links (Entrepreneurship, Media, Tech, Tutorials)
  - Latest Episodes: 2 episode items (date + title)
  - Follow Us: 5 social icons + App Store / Google Play badge images
- Copyright line with Component Dock link

## Design fidelity notes

- **Color palette**: Red primary (#f55656) is the dominant accent. Everything else is neutral (dark headings, gray body, white backgrounds). Keep this high-contrast red-on-white feel.
- **Typography**: HK Grotesk is a geometric sans-serif. Use Poppins or Inter as a close substitute if HK Grotesk isn't available on Google Fonts (check availability).
- **Section rhythm**: Consistent 80px padding top/bottom on all major sections. Newsletter has less top padding (50px).
- **Overlays**: Dark overlay (rgba(0,0,0,0.5)) on all image backgrounds (hero slides, newsletter parallax). This creates a moody, podcast-appropriate atmosphere.
- **Buttons**: Rounded pill-style buttons. Primary: red bg, white text. Secondary: outline variant.
- **Episode cards**: Horizontal layout (image left, content right) in Latest Episodes. Each card includes a native HTML5 audio player — keep this pattern.
- **Filter tabs**: Simple pill buttons in the Latest Episodes section. "All" is active by default. Clicking a tab shows/hides cards by category.
- **Carousel**: 3 slides with auto-rotation. Each slide has the same layout but different heading and bg image. The music player area below the CTA buttons is part of the slide content.
