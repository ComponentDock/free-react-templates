# Azureflow — Design Notes

## Source mapping

- **ColorLib source:** Blueline (`blueline`)
- **Preview URL:** https://preview.colorlib.com/theme/blueline/
- **Source page:** https://colorlib.com/wp/template/blueline/
- **New name:** azureflow
- **Category:** Fullscreen Business / Agency Landing Page

## Section order (from preview DOM)

1. **Header/Navbar** — `<header class="default-header">` — transparent, absolute-positioned
   - Logo (image) + nav links (Home, Generic, Elements)
   - Mobile: hamburger menu bar
2. **Hero/Banner** — `<section class="banner-area relative">`
   - Fullscreen background image (`header-bg.jpg`)
   - "Introducing" (h4, uppercase, white, letter-spacing 2px, weight 200)
   - "blueline" (h1, 124px, white, weight 300, letter-spacing 25px, text-shadow)
3. **Features** — `<section class="feature-area">`
   - White background, 3-column layout
   - Each: large gradient number (01/02/03) + uppercase title + description
   - Number: 48px, gradient text (#3c50ca → #77d5f7), text-shadow
   - Padding-bottom: 200px (overlaps with video section)
4. **Video Area** — `<section class="video-area">`
   - margin-top: -10% (overlaps features)
   - Video thumbnail: 20px border #f3f3f3, dark overlay, play button
   - Text: "Great Modern Design / Build with usability in mind"
   - Gradient-highlighted span words ("Modern Design", "usability")
5. **Services** — `<section class="service-area">`
   - Full-width (container-fluid), no padding
   - Left (col-lg-6, black bg): "Services We Offered" + description
   - Right (col-lg-6, white bg): 4 service cards in 2x2 grid
   - Each card: icon (Linearicons) + title + description
6. **Latest Works** — `<section class="latest-work-area">`
   - "Some Of our Latest Works" heading
   - Owl-carousel slider with portfolio images
   - Active image: 20px white border, opacity 1 (others: 0.5)
7. **Newsletter** — `<section class="subscription-area">`
   - "Subscribe for our Newsletter" heading
   - Email input: 25px radius, #f9f9ff bg, padding-right 180px
   - "Get Started" gradient button positioned absolute right
8. **Contact** — `<section class="contact-area">`
   - Left (col-lg-3): contact image
   - Right (col-lg-9): form with name, email, message
   - "Send Message" gradient circle button
9. **Footer** — `<footer class="footer-area">`
   - Black background, copyright + social icons
   - Social: Facebook, Twitter, Dribbble, Behance (#1e1e1e bg circles)

## Fidelity notes

### What to match exactly

- Blue-to-cyan gradient as the signature visual identity
- 124px hero title with extreme letter-spacing (25px)
- Text-shadow on hero title (-8px 15px 8px rgba(0,0,0,0.4))
- Gradient text on feature numbers (background-clip: text)
- Video section overlapping features by -10% margin-top
- Split-panel services: stark black/white contrast
- Pill-shaped newsletter input (25px border-radius)
- Dark footer with social icon circles

### What to adapt for React

- **Replace owl-carousel** with embla-carousel or CSS scroll-snap
- **Replace Linearicons** with lucide-react
- **Replace Font Awesome** with lucide-react
- **Replace jQuery** plugins with React equivalents
- **Replace Bootstrap grid** with Tailwind responsive utilities
- **Replace Nice Select** (not used in main page sections)
- Add Component Dock footer link (replaces Colorlib attribution)

### Color system for implementation

```css
/* Tailwind @theme tokens */
--color-brand-primary: #2954c9;
--color-brand-accent: #77d5f7;
--color-gradient-start: #3c50ca;
--color-gradient-end: #77d5f7;
--color-text-heading: #222;
--color-text-body: #777;
--color-bg-page: #f9f9ff;
--color-bg-dark: #000;
--color-border-light: #eee;
--color-footer-social: #1e1e1e;
```

### Component structure (suggested)

```
App.tsx
├── Navbar (transparent, fixed/absolute)
├── Hero (fullscreen, bg image, heading)
├── Features (3-column, numbered)
├── VideoSection (thumbnail + text, overlapping)
├── Services (split black/white)
├── Portfolio (carousel/slider)
├── Newsletter (subscription form)
├── Contact (form + image)
└── Footer (dark, social icons)
```

### Hero section key measurements

```css
/* From the original CSS */
.banner-content h1 {
  font-size: 124px;
  letter-spacing: 25px;
  text-indent: 22px;
  font-weight: 300;
  line-height: 1.15em;
  text-shadow: -8px 15px 8px rgba(0, 0, 0, 0.4);
}
.banner-content h4 {
  letter-spacing: 2px;
  font-weight: 200;
}
```

### Gradient usage

The gradient `linear-gradient(0deg, #3c50ca, #77d5f7)` appears on:

- Primary CTA buttons (`.primary-btn`)
- Feature section numbers (`.feature-area h1` via background-clip)
- Service section icons (`.single-services .lnr` via background-clip)
- Text selection highlight (`::selection`)
- Slider navigation hover states
- Footer social icon hover

## Replication source

- **Preview DOM:** Fetched live at `https://preview.colorlib.com/theme/blueline/`
- **CSS tokens:** Extracted from `css/main.css` in the preview
- **Screenshot:** Available at ColorLib template page
- **Preview status:** Reachable (200 OK)

## Implementation priority

This is a medium-complexity template with 9 sections. The hero and services
sections are the most visually distinctive. Start with the hero (most impact),
then services (split layout), then work through remaining sections. The
gradient system should be implemented as a Tailwind utility or CSS custom
property for consistency across all components.
