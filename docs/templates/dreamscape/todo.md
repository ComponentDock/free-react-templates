# Dreamscape — Implementation Notes

## Source

- ColorLib template: Create
- Preview URL: https://preview.colorlib.com/theme/create/
- Source page: https://colorlib.com/wp/template/create/
- Category: Creative / Agency / One-Page

## Section order (implement in this order)

1. TopBar
2. Navbar
3. Hero
4. Features
5. PortfolioGallery
6. DarkFeatureStrip
7. Testimonials
8. Services
9. AboutUs
10. Team
11. Blog
12. Contact
13. CTABanner
14. Footer

## Design notes per section

### TopBar
- `bg-black text-white py-2 border-b`
- Left: phone + email spans. Right: social icon links (use lucide-react equivalents).
- Simple flex layout, container max-width.

### Navbar
- White bg, sticky (Tailwind `sticky top-0 z-50`).
- Logo: "Dreamscape" with a teal dot accent (`<span className="text-[#32dbc6]">.</span>`).
- Nav links with dropdown for About (Specialties, Our Team).
- Mobile: hamburger menu toggle, off-canvas slide from right.
- Consider using existing Navbar pattern from packages/ui if available.

### Hero
- Full viewport height (`min-h-screen`), background image with `bg-cover bg-center`.
- Overlay: `bg-black/20` pseudo-element.
- Centered content: heading "We Love To Build " + typed animation.
- Subtitle text. Teal pill button "Watch Video" (`rounded-full`).
- Typed animation: cycle through ["Web Apps", "WordPress", "Mobile Apps"].

### Features (3-column)
- White background, `py-20`.
- 3 cards in a row (`grid grid-cols-1 md:grid-cols-3`).
- Each card: large number "01." as decorative element behind, heading in teal, paragraph, check-mark list.
- Number-behind effect: absolute positioning, large font, low opacity.

### PortfolioGallery
- Section heading "Our Works" centered.
- 6-item grid (`grid grid-cols-1 md:grid-cols-3 gap-0`).
- Each item: image with hover overlay showing title + category.
- Overlay: absolute, bg-black/70, opacity-0 → opacity-100 on hover.
- Use picsum.photos/seed/dreamscape-1/600/400 etc. for images.

### DarkFeatureStrip
- `bg-black text-white`, full-width section.
- Left column: large image. Right column: 2×2 grid of services.
- Each service: icon (lucide-react), heading (white), body text (#737373), "Read More" link (white, underlined).
- Services: Strategy, Web Development, Art Direction, Copywriting.

### Testimonials
- Centered section, max-width ~800px.
- Carousel with prev/next arrows (circle buttons).
- Large italic blockquote text, avatar image (circle, 100px), author name.
- Implement as simple state-driven carousel (no external dependency).

### Services (6 cards)
- Section heading "Our Services" centered.
- 3×2 grid. Each card: flex layout with icon + text.
- Icon in teal color, heading, description, "Learn More" link.
- lucide-react icons: Layout, ShoppingCart, MessageSquare, Palette, PenTool, Smartphone.

### AboutUs
- Split layout: left text column (col-6), right image column (col-5).
- Left: heading, lead paragraph, 2 specialty cards in 2-col sub-grid.
- Specialty cards: icon (teal), heading, description, "Learn More" link.
- Right: rounded image.

### Team
- 3-column grid. Each member: centered text.
- Circular avatar (50% width, rounded-full), name, position (text-muted), bio, social icons.
- Use picsum.photos/seed/dreamscape-person-N/200/200 for avatars.

### Blog
- 3-column grid of blog post cards.
- Each: image at top, title, meta (author · date · category), excerpt, "Continue Reading..." link.
- Simple card layout, no border/shadow.

### Contact
- Light background (#ccc from original, use `bg-gray-200` in Tailwind).
- Two columns: left = form, right = info card.
- Form: First Name + Last Name (side by side), Email, Subject, Message (textarea), Submit button.
- Info card: white bg, p-4, address/phone/email with bold labels.
- Form validation: required fields, email format check.

### CTABanner
- Teal bg (#32dbc6), full-width clickable area linking to #contact.
- Centered heading "Let's Get Started" in white.
- `py-5`, block-level anchor.

### Footer
- Dark bg (#333333), `py-20`.
- Three columns: About Us text, Features links (list), Follow Us social icons.
- Right: Newsletter form (email input + Send button, transparent bg, white text).
- Bottom: copyright line with "Component Dock" link to https://www.componentdock.com/.

## Component file structure

```
apps/dreamscape/
  src/
    App.tsx                    — compose all sections
    index.css                  — Tailwind entry + @theme tokens
    main.tsx                   — entry (excluded from coverage)
    components/
      TopBar.tsx
      Navbar.tsx
      Hero.tsx
      Features.tsx
      PortfolioGallery.tsx
      DarkFeatureStrip.tsx
      Testimonials.tsx
      Services.tsx
      AboutUs.tsx
      Team.tsx
      Blog.tsx
      Contact.tsx
      CTABanner.tsx
      Footer.tsx
    test/
      setup.ts
  index.html
  package.json
  vite.config.ts
  tailwind.config.ts (if needed)
```

## Tailwind theme tokens (index.css @theme)

```css
@theme {
  --color-primary: #32dbc6;
  --color-dark: #000000;
  --color-footer: #333333;
  --color-footer-text: #737373;
  --color-footer-link: #999999;
  --color-border-light: #edf0f5;
}
```
