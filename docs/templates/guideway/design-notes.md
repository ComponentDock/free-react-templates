# Guideway — Design Notes & Task Outline

## Source

- **ColorLib:** Consulotion (https://colorlib.com/wp/template/consolotion/)
- **Preview:** https://preview.colorlib.com/theme/consolotion/ (404 at prep time)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/consolution-free-template.jpg (AVIF format)
- **Category:** IT Consultant / Marketing Agency
- **Pages:** 8 (original multi-page; React version = single-page landing)

## Design Token Extraction

### From screenshot analysis (preview was 404)

| Property         | Value          | Evidence                                   |
| ---------------- | -------------- | ------------------------------------------ |
| Primary blue     | `#3b82f6`      | CTA buttons, active nav, icon accents      |
| Dark navy        | `#0f172a`      | Navbar background, headings                |
| Body grey        | `#475569`      | Paragraph text                             |
| Card border      | `#e2e8f0`      | Light borders on feature cards             |
| White bg         | `#ffffff`      | Main page background                       |
| Button radius    | `9999px`       | Fully rounded / pill shape                 |
| Heading font     | Poppins        | Bold geometric sans-serif (screenshot)     |
| Body font        | Inter          | Clean modern sans-serif (screenshot)       |

### Fonts

Load via Google Fonts in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Poppins:wght@600;700;800&display=swap" rel="stylesheet" />
```

## Section-by-Section Fidelity Notes

### 1. Top Utility Bar
- White background, full-width
- Logo text "Guideway" left-aligned, bold dark text
- Center: email icon + email, phone icon + number (blue icons)
- Right: blue pill button "Free Consulting"
- Responsive: on mobile, collapse to logo + hamburger

### 2. Navigation Bar
- Dark navy (#0f172a) full-width bar below utility bar
- Links: Home | About | Projects | Services | Blog | Contact
- Active link = brand blue (#3b82f6)
- Search icon (magnifying glass) on the far right
- Mobile: hamburger toggle, slide-in menu

### 3. Hero / Banner
- Full-width background image (professional meeting)
- Dark gradient overlay (0.5 opacity black → transparent)
- Sub-headline: "WELCOME TO GUIDEWAY" — small, uppercase, white, letter-spaced
- Main heading: "We Are The Best Consulting Agency" — large (48-56px), bold, white
- CTA button: "Our Services" — blue pill, white text
- Three carousel dot indicators at bottom center (first active/blue)

### 4. Features Section
- Two-column layout (60/40 or 50/50)
- Left: heading "Our Main Features" (dark navy, Poppins), paragraph (grey), two feature cards
- Right: team/professional photo in a light-bordered card
- Feature card 1: blue top border accent line
- Feature card 2: light blue (#eff6ff) background

### 5. About / Why Choose Us
- Heading: "Why Choose Us" or similar
- Image + text two-column layout
- Possible counters or bullet points describing firm expertise
- White background

### 6. Services
- Section heading centered
- 3-4 column grid of service cards
- Each card: circular or square icon (blue), title (dark, Poppins), brief description
- White background, cards with subtle border or shadow

### 7. Stats / Counter Band
- Dark background (#0f172a or similar)
- 4 counter items in a row
- Each: large number (animated on scroll), label below
- Example counters: Projects (254+), Clients (120+), Awards (36+), Team (50+)
- Numbers in brand blue or white

### 8. Testimonials
- White background
- Centered heading
- Carousel of testimonial cards
- Each card: avatar image, client name, role/title, 5-star rating (yellow), quote text
- Navigation arrows or dots

### 9. CTA / Newsletter Banner
- Blue or dark background band
- Heading + short text
- Email input + subscribe button (or just a CTA button)

### 10. Contact
- Two-column layout
- Left: contact form (name, email, subject, message textarea, submit button)
- Right: address, phone, email, opening hours
- White background

### 11. Footer
- Dark background (#0f172a)
- 3-4 column layout:
  - Col 1: Logo + phone + email + social icons
  - Col 2: Quick Links (About, Services, Projects, Blog, Contact)
  - Col 3: Services list
  - Col 4: Newsletter signup
- Bottom bar: copyright + Component Dock attribution link

## Implementation Task Outline

1. **Scaffold** — Copy simplest existing app, rename to `guideway`, update package name
2. **index.html** — Add Google Fonts (Inter + Poppins), set title
3. **index.css** — Define `@theme` tokens: brand blue, dark navy, etc.
4. **Navbar component** — Utility bar + dark nav bar + hamburger
5. **Hero component** — Background image, overlay, text, CTA, dots
6. **Features component** — Two-column with cards
7. **About component** — Image + text section
8. **Services component** — Grid of icon cards
9. **Stats component** — Dark band with animated counters
10. **Testimonials component** — Carousel with cards
11. **CTA component** — Banner section
12. **Contact component** — Form + info
13. **Footer component** — Dark multi-column + Component Dock link
14. **App.tsx** — Compose all sections in order
15. **Tests** — TDD for each component (100% coverage)
16. **CNAME** — Set to `guideway.free.componentdock.com`
17. **Verification** — Run `scripts/verify-app.sh guideway`
