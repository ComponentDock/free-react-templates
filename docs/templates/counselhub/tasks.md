# CounselHub Template Tasks & Design Notes

## Overview

- **Source Template:** Lawfirm (`https://colorlib.com/wp/template/lawfirm/`)
- **New Name:** CounselHub (`apps/counselhub`)
- **Aesthetic:** Professional law firm website with warm gold accents (`#cbb88c`), dark charcoal backgrounds (`#1d2227`), and clean Roboto typography. Full-width hero with video popup, feature strip, split about section, stat counters, practice area grid, case gallery, testimonials carousel, blog entries, and a comprehensive 5-column dark footer.

## Section Implementation Order

1. **TopBar (`TopBar.tsx`)**: Dark bar with phone number and email on left, social media icons (Facebook, Twitter, Instagram, Dribbble) on right. Background `#1d2227`, gold accent text.
2. **Navbar (`Navbar.tsx`)**: Dark sticky navigation (`#1d2227`), brand "CounselHub" in gold (`#cbb88c`), nav links (Home, About, Practice Areas, Cases, Attorneys, Blog, Contact), mobile hamburger toggle. Scrolled state: white background, dark text.
3. **Hero (`Hero.tsx`)**: Full-width hero with background image + dark overlay (`bg-black/40`), heading "Don't Feel Helpless We Fight for Justice", subtext paragraph, two CTA buttons ("Contact us" primary, "Read more" white outline), and a video play icon (`popup-vimeo` style).
4. **FeatureStrip (`FeatureStrip.tsx`)**: 4-column icon strip. Each column: icon + heading + short paragraph. First column dark background (`#1d2227`), remaining three have colored accent backgrounds (gold variations). Items: "Expert Attorneys", "Case Dismissed", "Court Performance", fourth feature.
5. **About (`About.tsx`)**: Split layout — left: background image with video play button, right: light gray box (`bg-gray-100`) with subheading "Welcome to CounselHub", heading, description, and 2x2 services grid (Expert Attorneys, Great Discount, Legal Advisory, Quick Charges) each with icon.
6. **Counter (`Counter.tsx`)**: Statistics bar with background image. 4 counter items (Happy Clients ~350, Cases Won ~450, Years Experience ~15, Attorneys ~10) with animated count-up on scroll.
7. **PracticeAreas (`PracticeAreas.tsx`)**: Heading "Our Practice Area", grid of 6 practice area cards with Lucide icons. Cards: Family Law, Business Law, Insurance Law, Education Law, Real Estate Law, Criminal Law. Each with icon, title, description.
8. **CasesGallery (`CasesGallery.tsx`)**: Heading "Recently Won Cases", masonry-style grid of 7 case images with overlay titles on hover.
9. **Testimonials (`Testimonials.tsx`)**: Carousel/slider section with dark background image overlay. Each slide: avatar, quote, name, role. Auto-rotating. Use a simple state-based carousel (no heavy library).
10. **AppointmentCTA (`AppointmentCTA.tsx`)**: Full-width CTA section with background image + dark overlay, heading inviting consultation, and primary CTA button.
11. **Blog (`Blog.tsx`)**: Heading "Recent Blog", 3-column grid of blog entry cards. Each: featured image, date, title, author, excerpt. Use deterministic Picsum seeds.
12. **Footer (`Footer.tsx`)**: Dark background (`#1d2227`), 5-column layout. Columns: About CounselHub (description + social icons), Practice Areas (links), Quick Links, Recent Blog (mini entries), Contact Info (address, phone, email). Copyright bar. Mandatory Component Dock link (`https://www.componentdock.com/`).

## Design Fidelity Notes

- **Colors:** Brand gold `#cbb88c`, dark background `#1d2227`, Bootstrap primary blue `#007bff` for buttons, white `#ffffff`, light gray `#f7f7f7` for alternating sections.
- **Typography:** Google Font `Roboto` (weights 300, 400, 500, 700). Headings bold, body regular.
- **Buttons:** Bootstrap-style with `rounded` radius (`0.25rem`). Primary: blue bg + white text. White: white bg + dark text. Both with hover darken effect.
- **Section Rhythm:** Alternating white / light gray / image-backed sections with generous vertical padding (`py-16` to `py-24`).
- **Images:** Deterministic Picsum seed URLs (`https://picsum.photos/seed/counselhub-<n>/<w>/<h>`). No real images copied from ColorLib.
- **Icons:** Lucide React for all icons (replace Font Awesome + Flaticon from original).
- **No ColorLib references:** Provenance lives only in spec, TEMPLATES.md, and PR. App code uses only design token comments (e.g. "brand palette: #cbb88c gold").
- **Footer Component Dock link:** Must appear in footer as "Made with Component Dock" or similar branded text linking to `https://www.componentdock.com/`.
