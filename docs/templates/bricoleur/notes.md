# Bricoleur — Implementation Notes

Source: ColorLib **Create** — https://colorlib.com/wp/template/create/
Preview: https://preview.colorlib.com/theme/create/
New name: `bricoleur` (app: `apps/bricoleur`, package: `@free-react-templates/bricoleur`)

## Section order (implement top-to-bottom)

1. TopBar — simple dark bar, flex row, left: phone + email, right: social icons
2. Navbar — sticky, white bg, logo with teal dot, responsive nav with hamburger, About dropdown
3. Hero — full-width bg image, overlay, centered headline + typed-words + CTA button
4. Features — 3-column grid, decorative number-behind, title, paragraph, check-list
5. Works — 3-column gallery, images with hover overlay (title + category)
6. Services — 3×2 grid, icon + title + description + "Learn More" link per item
7. About — split: image right, text left with heading, lead paragraph, 2 sub-feature items
8. Team — 3-column, circular photo, name, position, description, social links
9. Blog — 3-column cards, image, title, meta, excerpt, "Continue Reading"
10. Contact — light bg, form (5 fields + submit) + address info card
11. CtaBanner — full-width primary bg, centered heading
12. Footer — dark bg, 3 columns (about, features, social + newsletter), copyright

## Fidelity notes

### Navbar
- Logo text is the template name with a period and colored dot accent: `Bricoleur<span class="text-primary">.</span>`
- Sticky on scroll (use `position: sticky` or intersection observer)
- About has a dropdown with "Specialties" and "Our Team" sub-links
- Mobile: hamburger icon toggles a slide-in menu

### Hero
- Background image with dark overlay (CSS `::before` pseudo-element or overlay div)
- Headline: "We Love To Build" followed by typed-words span (implement with a simple typed-text animation library or CSS keyframes)
- CTA button: "Watch Video" (primary color btn)

### Features (Innovate/Create/Scale)
- 3-column layout, each card has:
  - Decorative `number-behind` element (large, faded, positioned behind heading)
  - Heading in primary color
  - Description paragraph
  - Check-list with teal checkmarks (use Lucide Check icon)
- Numbers: 01, 02, 03

### Works (Portfolio)
- 3-column image gallery
- Each image has a hover overlay that slides in showing project title + category
- Overlay: semi-transparent dark bg, white text
- Use picsum.photos for placeholder images with seeds: `bricoleur-1`, `bricoleur-2`, `bricoleur-3`

### Services
- 3×2 grid layout (3 cols on desktop, stacked on mobile)
- Each service: icon (left) + text (right)
- Icons: use Lucide equivalents (Monitor for Web Design, ShoppingCart for eCommerce, MessageSquare for Web Applications, Palette for Branding, PenTool for CopyWriting, Smartphone for Mobile Applications)
- "Learn More" link in each card

### About
- Two-column layout: text left (order-1 on mobile), image right (order-2 on mobile)
- Image has `rounded` class
- Two sub-feature items below the lead text, each with icon + title + short description + "Learn More"

### Team
- 3-column layout
- Circular photos: use `rounded-circle` + `w-50` sizing
- Each member: photo, name (h3), position (muted text), description, social icon row
- Social icons: Facebook, Twitter, LinkedIn, Instagram (Lucide equivalents)

### Blog
- 3-column card layout
- Each card: featured image (full width), title (h2), meta line (author · date · category), excerpt paragraph, "Continue Reading" link

### Contact
- Section has `bg-light` background
- Left column (col-md-7): white card with form
  - Fields: First Name + Last Name (side by side), Email, Subject, Message (textarea), Submit
  - Submit button: primary color, "Send Message"
- Right column (col-md-5): white card with Address, Phone, Email info

### CTA Banner
- Full-width primary color background
- Centered white heading "Let's Get Started"
- Acts as a link/button area

### Footer
- Dark background (`bg-dark` equivalent)
- Left side: About Us text, Features link list, Social icons
- Right side: Newsletter subscribe form (email input + Send button)
- Bottom: copyright line with heart icon
- Must include Component Dock link (replacing original Colorlib attribution)

## Component tree (suggested)

```
App.tsx
├── TopBar.tsx
├── Navbar.tsx
├── Hero.tsx
├── Features.tsx
├── Works.tsx
├── Services.tsx
├── About.tsx
├── Team.tsx
├── Blog.tsx
├── Contact.tsx
├── CtaBanner.tsx
└── Footer.tsx
```

## Dependencies
- No new dependencies needed (all from packages/ui and lucide-react)
- Typed-text effect: implement with useState + useEffect + setInterval (no library needed)
- Images: picsum.photos placeholder URLs
- Icons: lucide-react

## Testing notes
- Each component gets its own test file (colocated *.test.tsx)
- Test section rendering, heading text, interactive elements
- Contact form: test field presence, submit button
- Navbar: test mobile toggle, dropdown behavior
- Hero: test typed-text animation renders
- All tests must pass with 100% coverage
