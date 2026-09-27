# Emerge — Implementation Notes

Source: ColorLib Unfold (https://colorlib.com/wp/template/unfold/)
Preview: https://preview.colorlib.com/theme/unfold/
New name: emerge (apps/emerge, @free-react-templates/emerge)

## Structure Order

1. Navbar
2. Hero (full-viewport parallax cover)
3. Portfolio (3-col masonry grid, 9 items)
4. About Me (2-col: photo + text)
5. My Services (3-col grid, 6 cards)
6. My Skills (4 animated counters)
7. My Happy Clients (Swiper testimonial carousel, 3 slides)
8. My Journal (asymmetric blog grid, 4 posts)
9. Get In Touch (form + contact info)
10. Footer (logo, socials, copyright)

## Section-by-Section Fidelity Notes

### Navbar
- Fixed position, dark background (transparent over hero initially).
- Centered logo: "Emerge" with a `.` dot accent in brand color.
- Left nav: Portfolio, About, Services (anchor links).
- Right nav: Skills, Testimonial, Journal, Contact (anchor links).
- Mobile: hamburger toggle button, full-screen overlay menu.
- Dark/light mode toggle: moon icon button, positioned far right.

### Hero
- Full viewport height, parallax background image (use picsum).
- Dark gradient overlay (rgba(0,0,0,0.4) to rgba(0,0,0,0.2)).
- Centered white heading "Emerge" (large, Arimo font).
- Subheading: designer tagline in Raleway.
- Scroll indicator: animated mouse icon with "Scroll" label, links to
  #portfolio-section.

### Portfolio
- Section heading "Portfolio" centered, with divider image underneath
  (76px wide decorative line).
- 3-column responsive grid (col-lg-4, col-md-6, col-sm-6).
- 9 items total: items have varied aspect ratios (some portrait items).
- Each item: image, dark overlay on hover, link icon (icon-link2),
  project title (h3), category tags (p, comma-separated).
- Grid uses isotope-style layout (use CSS grid with varying spans).
- Item categories: web, branding, packaging, illustration.

### About Me
- Heading "About Me" with divider image.
- Two-column layout (col-lg-7 + col-lg-4).
- Left: large portrait photo with dotted background decoration (use
  absolute-positioned pseudo-element with dots pattern, or a subtle
  CSS dot grid).
- Right: h3 "We can make it together", lead paragraph, body paragraph,
  "Download my CV" pill button (outline style).

### My Services
- Heading "My Services" with divider image.
- 3-column grid (col-lg-4) with gutter spacing.
- 6 service items (2 rows x 3 cols), each with:
  - SVG icon (45px width), use lucide-react equivalents:
    Digital Strategy → Settings/Sliders
    Web Design → Palette
    User Experience → Users
    Web Development → Code
    WordPress Solutions → Globe
    Mobile Applications → Smartphone
  - Heading: two words with line break (use <br>)
  - Description paragraph

### My Skills
- Heading "My Skills" with divider image.
- 4-column row of animated counters.
- Each counter: large number (69px, weight 900, Arimo font, #D63447
  crimson), "%" suffix (28px, positioned above baseline), uppercase
  label (11px, weight 900, letter-spacing 0.1rem).
- Values: WordPress 90%, HTML/CSS 99%, JavaScript 95%, Design 100%.
- Animation: count up from 0 when section enters viewport (use
  IntersectionObserver).

### My Happy Clients (Testimonials)
- Heading "My Happy Clients" with divider image.
- Swiper carousel (use a lightweight React swiper or CSS-only carousel).
- 3 slides, each containing:
  - Quote blockquote in Georgia serif font, with large opening quote mark.
  - Author section: circular photo, name (h3), role (span with @company).
  - Authors: Eric Ingram (Facebook), Ryan Mullins (Shopify), Erica
    Miller (Twitter).

### My Journal (Blog)
- Heading "My Journal" with divider image.
- Asymmetric grid layout:
  - Top row: 1 large post (col-lg-8) + 1 small post (col-lg-4).
  - Bottom row: 2 equal posts (col-lg-4 each).
- Each post card: image, dark overlay on hover, title (h3), meta line
  (author + read time).
- 4 posts total, all titled "A Mountaineering Guide For Beginners" in
  original (paraphrase for ours).

### Get In Touch (Contact)
- Heading "Get In Touch" with divider image.
- Two-column layout (col-md-6 form + col-md-4 info).
- Left: form with Name, Email, Message textarea, "Send Message" pill
  button. Form has honeypot (hidden) and timestamp fields for spam.
- Right: contact info with labeled values (Email, Phone, Address).
- Form validation: use react-hook-form + zod schema.

### Footer
- Centered layout (col-md-7 centered).
- Logo "Emerge" with dot accent.
- Social links: Facebook, Twitter, Instagram, Dribbble, Behance (as
  text links, horizontal list).
- Copyright line with Component Dock link (replacing Colorlib credit).

## Design Tokens Summary

- Brand primary: #D63447 (crimson red) — counters, accents
- Dark background: #191919 (body default)
- Text light: #fff (on dark bg)
- Text dark: #212529 (on light bg)
- Text muted: #6c757d
- Button: pill shape (border-radius 30px), outline style, 2px border
- Heading font: Arimo (Google Fonts)
- Body font: Raleway (Google Fonts)
- Blockquote font: Georgia (system)
- Section headings: uppercase, letter-spacing, divider image
- Portfolio/blog overlay: dark gradient with icon + text

## Component Architecture

- `src/components/Navbar.tsx` — fixed nav, dark mode toggle, mobile menu
- `src/components/Hero.tsx` — parallax cover with scroll indicator
- `src/components/Portfolio.tsx` — masonry grid of portfolio items
- `src/components/About.tsx` — 2-col layout with photo + text
- `src/components/Services.tsx` — 6-card service grid
- `src/components/Skills.tsx` — 4 animated counters
- `src/components/Testimonials.tsx` — Swiper carousel
- `src/components/Journal.tsx` — asymmetric blog grid
- `src/components/Contact.tsx` — form + contact info
- `src/components/Footer.tsx` — logo, socials, copyright
- `src/App.tsx` — composes all sections in order

## Dependencies

- No new npm dependencies expected beyond existing shared UI
- Use lucide-react for icons (already in shared UI)
- Swiper for carousel (lightweight, already common in templates)
- react-hook-form + zod for contact form (already used)
