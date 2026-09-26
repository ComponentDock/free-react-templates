# Jovex — Implementation Outline

Source: ColorLib "Jonson" — https://preview.colorlib.com/theme/jonson/
New name: jovex

## Section Order & Structure

```
App.tsx
├── Header.tsx          (transparent sticky navbar)
├── Hero.tsx            (full-width hero with large name + rotating text)
├── About.tsx           (2-col: text + image, stats row below)
├── Experience.tsx      (stacked job entries)
├── Education.tsx       (stacked education entries)
├── Expertise.tsx       (3-col cards on cream bg)
├── Gallery.tsx         (2x2 image grid with hover overlay)
└── Footer.tsx          (maroon bg: CTA, contact form, social, copyright)
```

## Component Design Notes

### Header.tsx
- Sticky, transparent background that becomes solid on scroll (via IntersectionObserver or scroll listener)
- Logo: text-based or placeholder image, left-aligned
- Nav links: Home, About, Portfolio, Blog (active state on Home)
- CTA button: "Let's Talk" — brand color bg (#670000), white text, sharp corners, letter-spacing 3px
- Mobile: hamburger icon toggles slide-down menu

### Hero.tsx
- Full viewport height (min-height ~960px desktop, scales down on mobile)
- Centered content, right-aligned text
- Large name: "Jovex" (or customizable), uppercase, ~180px-280px responsive, font-weight 300, color #670000
- Subtitle: "Digital Product Designer", 30px, font-weight 300, color #670000
- Rotating text: animated cycling through role/company names (use framer-motion or CSS keyframes)
- Background: white or light (no hero image in original)

### About.tsx
- Two-column layout (6/6 on desktop, stack on mobile)
- Left column: "About" section heading (h2, color #670000), two paragraphs
- Right column: portrait image (use picsum.photos placeholder)
- Stats row below: 3 items in equal-width columns
  - "06 years" + "of experience"
  - "$40M+" + "invested in projects..."
  - "Multiple" + "industry awards"
- Stats: large number in #670000, description text below

### Experience.tsx
- Full-width, white background
- "Experience" section heading (h2, color #670000)
- Stacked entries, each containing:
  - Job title (h3, color #670000)
  - Date range (p, lighter color)
  - Company link with external link icon

### Education.tsx
- Same structure as Experience
- "Education" heading
- Entries: degree name, date range, institution link

### Expertise.tsx
- Background: #FFEFAE (light cream)
- "My Expertise" section heading, centered
- 3-column grid (stacks to 1 on mobile)
- Cards: white background, padding, each with:
  - Title (h5, bold, e.g. "Experience Design")
  - Short description paragraph

### Gallery.tsx
- "Selected Portfolios" section heading
- 2x2 grid layout (stacks to 1 col on mobile)
- Each item: background-image with cover sizing, ~535px height
- Hover overlay: semi-transparent dark overlay + centered "+" icon
- Use picsum.photos with seeded URLs for deterministic placeholders

### Footer.tsx
- Background: #670000 (dark maroon)
- **CTA section:** "Do you want to know more about me?" (white text, 60px) + "Download CV" button (cream bg #FFEFAE, maroon text)
- **Contact form:**
  - "Contact Me" heading (cream text)
  - Name, Email, Subject inputs (border: 1px solid #853023, height: 50px, placeholder color: #FFEFAE)
  - Message textarea (same styling)
  - "Send Message" submit button: full width, 60px height, bg #FFEFAE, color #670000, no border-radius
- **Footer bottom:**
  - Social icons row: Twitter, Facebook, Pinterest, Globe, Instagram (use lucide-react equivalents)
  - Copyright text
  - **Component Dock link** (mandatory: "Made with Component Dock" or similar)

## Design Token Summary for index.css @theme

```
--color-brand: #670000;
--color-accent: #FFEFAE;
--color-footer-form-border: #853023;
--font-poppins: 'Poppins', sans-serif;
```

## Fidelity Notes

- Match the RIGHT-ALIGNED hero text layout (original has `text-align: right` on hero caption)
- The rotating text animation should cycle through 3-4 role/company names
- Stats row: numbers are large and bold in brand color, descriptions are small
- Gallery overlay effect: dark semi-transparent background with centered + icon
- Footer form inputs have no border-radius (sharp corners throughout)
- All buttons: sharp corners (border-radius: 0), letter-spacing 3px, uppercase
- The "Let's Talk" header button has extra right padding (65px right, 30px left)
- Experience/Education entries are full-width stacked, not in columns
- Mobile: hamburger menu, single-column stacking for all grids
