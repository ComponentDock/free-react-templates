# Consortium — Prep Notes

Source: ColorLib Consula (https://colorlib.com/wp/template/consula/)
Preview: https://preview.colorlib.com/theme/consortium.free.componentdock.com/

## Component Order (matches spec section order)

1. TopBar — social icons (left) + phone/email (right), bg: #f8f9fa
2. Navbar — sticky white, logo text, 4 nav links (About, Services, Testimonials, Contact)
3. Hero — bg image, headline, subtitle, "Get Started" pill btn, "50 years of experience" counter
4. About — "About Us" label + "Welcome To Consula" heading + text + "Learn More" pill btn + side image
5. Team — "Our Team" heading, 3-column card grid (photo, name, role, bio)
6. Services — "How It Works" heading, 3 numbered steps (icon + title + description)
7. Testimonials — heading + carousel with quotes, names, roles
8. Blog — 3-column card grid (image, category, title, excerpt, "Continue Reading")
9. Contact — 2-col: form (5 fields + submit) | info (address, phone, email)
10. Footer — dark bg #333333, 4-col (About, Quick Links, Follow Us, Subscribe), copyright, Component Dock link

## Fidelity Notes

### TopBar
- Light gray background (#f8f9fa), full width
- Left: 4 social icons (Facebook, Twitter, Instagram, LinkedIn) — use lucide-react equivalents
- Right: phone icon + number, envelope icon + email
- On mobile: phone/email hide (d-none d-lg-inline-block in original)

### Navbar
- White background, sticky on scroll (js-sticky-header behavior)
- Logo: plain text "Consortium" (h2 tag, black text)
- Nav links right-aligned, auto margin-left (mr-auto on menu)
- Mobile: hamburger toggle for off-canvas menu

### Hero
- Full-width section with background image
- Centered text: "We Are The Best Consulting Agency" (large heading)
- Subtitle paragraph below
- Green pill CTA button (#46ddb0 bg, white text, 30px radius)
- Counter overlay: "50 years of experience" — animated number
- Background: use `https://picsum.photos/seed/consortium-hero/1920/800`

### About
- 2-column layout: text left, image right
- Small label "About Us" in section-sub-title style
- Heading "Welcome To Consula" → use "Welcome To Consortium"
- Body paragraph + "Learn More" green pill button
- Image: use `https://picsum.photos/seed/consortium-about/600/400`

### Team
- "Our Team" section title
- 3 equal columns, each with:
  - Square photo (use picsum placeholders)
  - Name (bold)
  - Role (smaller, muted)
  - Bio paragraph
- Original members: John Rooster (Co-Founder, President), Tom Sharp (Co-Founder, COO), Winston Hodson
- Use same names/roles (text is fine to keep)

### Services
- "How It Works" section title
- 3 numbered steps in a row:
  - Large number/icon
  - Title (h3)
  - Description paragraph
- Light gray background (#f4f5f9)

### Testimonials
- "Testimonials" section title
- Carousel/slider with testimonial cards
- Each card: quote text, person name (bold), role (smaller)
- Navigation dots or arrows

### Blog
- "Blog" or "Our Blog" section title
- 3-column card grid
- Each card: featured image, category tag overlay, title, excerpt, "Continue Reading →" link
- Images: use `https://picsum.photos/seed/consortium-blog-n/400/300` (n=1,2,3)

### Contact
- 2-column layout
- Left: "Contact Form" heading, form with 5 fields (First Name, Last Name, Email, Subject, Message textarea), submit button "Let's Get Started"
- Right: Address, Phone, Email Address with icons
- Form should use basic HTML form (no backend needed)

### Footer
- Dark background (#333333)
- 4 columns: About Us (text), Quick Links (ul with 4 links), Follow Us (social icons), Subscribe Newsletter (email input + button)
- Bottom border, copyright line
- MUST include Component Dock link: "Made with Component Dock" or "More templates at Component Dock"
- Link to https://www.componentdock.com/

## Shared UI Components to Reuse

- `Button` / `ButtonLink` from `packages/ui` for pill buttons
- `cn()` for class merging
- No new dependencies needed — standard sections

## Placeholder Images

All images use picsum.photos with deterministic seeds:
- Hero: `https://picsum.photos/seed/consortium-hero/1920/800`
- About: `https://picsum.photos/seed/consortium-about/600/400`
- Team 1-3: `https://picsum.photos/seed/consortium-team-1/300/300` (etc.)
- Blog 1-3: `https://picsum.photos/seed/consortium-blog-1/400/300` (etc.)

## Implementation Notes

- Start from simplest existing app as template scaffold
- Vite config must include `injectUiSource()` (Tailwind v4.3 requirement)
- `index.css` must include `@theme` block with brand color
- No ColorLib references in any app file (provenance in spec only)
- Footer MUST link componentdock.com
