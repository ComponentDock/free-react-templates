# Industrix — Implementation Notes

ColorLib source: Durg (durg)
Preview: https://preview.colorlib.com/theme/durg/
Spec: openspec/specs/template-industrix/spec.md

## Section Order & Fidelity Notes

### 1. HeaderTopBar.tsx
- Black background (#020c26)
- Left: phone + email contact (use Phone, Mail icons from lucide-react)
- Right: social icons (Facebook, Twitter, LinkedIn)
- Small text, light gray (#bebebe)
- Hidden on mobile

### 2. Navbar.tsx
- White background, sticky on scroll with box-shadow
- Logo image (use text logo "Industrix" with industrial styling)
- Nav links: Home, About, Services, Projects, Blog (with dropdown), Contact
- Search icon (Search from lucide-react)
- "Get a quote" CTA button (primary orange, `.boxed-btn` style: padding 13px 32px)
- Hamburger for mobile

### 3. HeroSlider.tsx
- Full-height carousel (760px), 3 slides
- Each slide: parallax bg image, dark overlay (::before pseudo)
- White content card (inline-block, padding 73px 56px 100px 50px):
  - Subheading: orange text (#ff5e13), uppercase
  - Heading: "We provide your Industrial solution" (60px, Rubik, weight 500)
  - Two buttons: "Our Services" (outlined) + "Get a quote" (primary)
- Dot navigation on right side
- Use picsum.photos/seed/industrix-hero-N/1920x760

### 4. BrandLogos.tsx
- Gray background (#f5f5f5)
- 7 partner logo images in a horizontal row (use lucide-react icons or placeholder SVGs)
- Simple flex layout, centered

### 5. Services.tsx
- "We provide all of your" heading with section-title styling
- 3 service cards in a row
- Each: image header (full width), title (24px), paragraph, "Learn More" link
- Services: Industrial Construction, Mechanical Engineering, Bridge Construction
- Use picsum.photos/seed/industrix-service-N/400x250

### 6. Projects.tsx
- Parallax background with dark overlay
- White text heading "Take a look around"
- Project carousel with navigation arrows
- Each project: background image, category span (orange), title (white, 26px)
- Projects: Research and Development Center, Project of Technological Park
- Use picsum.photos/seed/industrix-project-N/600x400

### 7. About.tsx
- 2-column layout:
  - Left: about image with video play icon overlay (circular, play icon)
  - Right: "About Company" orange label, "Deliver innovative Industrial solution" heading, paragraph, "Learn More" button
- Below: review carousel
  - Quote icon (Quote from lucide-react)
  - 5-star rating (Star icon, color #ffba00)
  - Review paragraph (24px)
  - Author: avatar image + name + position
  - "350+ Positive review" stat
- Use picsum.photos/seed/industrix-about/600x400

### 8. AddressSection.tsx
- Black background (#020c26), 120px section padding
- 3 columns:
  - Our Location: MapPin icon, address text, "Get Direction" link (orange underline)
  - Opening Hours: Clock icon, Mon-Fri 9-19, Sat-Sun (Closed)
  - Drop a Message: Mail icon, email + phone, "Mail Us" link

### 9. Footer.tsx
- 4-column grid:
  - Logo + description + social links (Facebook, Twitter, LinkedIn)
  - Quick links list
  - Services list
  - Newsletter subscribe form + "Follow us" label
- Copyright line at bottom
- "Made with ❤️ by Component Dock" link to https://www.componentdock.com/

## Design Token Summary (for index.css @theme)

```
--color-brand: #ff5e13;
--color-brand-hover: #e5540f;
--color-dark: #020c26;
--color-bg-gray: #f5f5f5;
--color-text-body: #5c5c5c;
--color-text-heading: #020c26;
--color-star: #ffba00;
--color-overlay: rgba(2,12,38,0.851);
--color-contact-text: #bebebe;
--font-family: 'Rubik', sans-serif;
--btn-padding: 13px 32px;
--btn-padding-lg: 22px 50px;
```

## Key Differences from Source

- No owl-carousel: use CSS scroll-snap or a lightweight React carousel
- No Font Awesome: replace with lucide-react icons
- No jQuery slicknav: use native mobile menu
- No parallax.js: use CSS `background-attachment: fixed`
- No Magnific Popup: omit video lightbox (simplify)
- No nice-select: use native select elements
- Placeholder images via picsum.photos with deterministic seeds
- All copy is paraphrased, not copied verbatim
- Footer links to Component Dock instead of ColorLib
