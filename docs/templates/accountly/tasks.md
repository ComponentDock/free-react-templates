# Accountly — Implementation Tasks & Design Notes

## Source mapping

- **ColorLib source**: Book Keeping (`book-keeping`)
- **Preview URL**: https://preview.colorlib.com/theme/book-keeping/ (404 at prep time)
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/bookkeeping-free-template.jpg
- **Fallback**: Design reconstructed from screenshot + source page description (preview unreachable)

## Section order (top → bottom)

1. **TopBar** — slim gray utility bar with phone + email contact info
2. **Navbar** — sticky white bar: logo (navy circle + "$" icon + brand text) | nav links (Home, About, Services, Blog, Contact) | social icon circles (FB, Twitter, LinkedIn)
3. **Hero** — full-width photo background, centered white heading + subtext, sharp-cornered navy "GET STARTED" button
4. **AboutUs** — 2-column: square office photo left | right: uppercase "ABOUT US" subhead, heading with blue divider, body text, 2-col bullet list with blue arrow icons
5. **Services** — grid of service cards (icon + title + description), white bg
6. **Stats** — counter section with 3+ numbered metrics + labels
7. **Testimonials** — client quotes carousel/grid, dark/branded bg
8. **Newsletter** — email input + submit button, branded background
9. **Footer** — nav links, social links, "Component Dock" branding, copyright

## Design notes

### Colors & tokens
- Primary: `#2c3e6b` (navy blue) — use in `@theme` as `--color-brand`
- Dark heading: `#1a2540` — use as `--color-heading`
- Body text: `#666666`
- Muted: `#999999`
- Top bar bg: `#f5f5f5`

### Typography
- Font: Poppins (Google Fonts, weights 400/500/600/700)
- Hero heading: 48px bold white
- Section headings: 36px bold navy
- Section subheads: 12px uppercase navy, letter-spacing 2px

### Button styles
- CTA button: bg navy, text white, uppercase, letter-spacing 2px, padding 14px 36px, border-radius 0 (sharp corners)
- Social buttons: circular (radius 50%), navy bg, white icons, 40px size

### Component architecture
```
src/
  main.tsx
  App.tsx
  index.css (Tailwind entry + @theme tokens)
  components/
    TopBar.tsx
    Navbar.tsx
    Hero.tsx
    AboutUs.tsx
    Services.tsx
    Stats.tsx
    Testimonials.tsx
    Newsletter.tsx
    Footer.tsx
  test/
    setup.ts
```

### Placeholder images
- Hero: `https://picsum.photos/seed/accountly-hero/1920/800`
- About: `https://picsum.photos/seed-accountly-about/600/600`
- Service icons: lucide-react icons (Calculator, FileText, Shield)
- Testimonial avatars: `https://picsum.photos/seed-accountly-avatar-<n>/100/100`

### Fidelity notes (section-by-section)

1. **TopBar**: Match original's slim height, gray bg, small left-aligned text. Include phone + email with appropriate icons (Phone, Mail from lucide-react).

2. **Navbar**: Sticky positioning, white bg, subtle shadow on scroll. Logo uses a circular navy div with "$" SVG icon + brand text. Nav links are medium weight, centered. Social icons are 3 circular navy buttons.

3. **Hero**: Full-width with background image (picsum placeholder). Centered white text stack: heading → subtext → CTA button. Button is sharp-cornered navy rectangle. Consider a dark overlay on the background image for text readability.

4. **AboutUs**: Two-column flex layout. Left: square-cropped placeholder image. Right: uppercase subhead in small navy text, large navy heading, thin 2px blue divider line (`w-16 h-0.5 bg-brand`), body paragraph, 2-column bullet grid using blue arrow icons (ChevronRight from lucide-react).

5. **Services**: 3-column grid of cards. Each card: lucide icon (top, navy), title (bold), short description text. White bg, subtle shadow or border.

6. **Stats**: Dark or navy background section. 3 counter items in a row: large number (white), label underneath (white/gray). Could use simple static numbers or a count-up animation.

7. **Testimonials**: Dark/branded bg section. 2-3 testimonial cards: quote text (italic), client name, role. Simple card layout with white text on dark bg.

8. **Newsletter**: Navy or brand-colored background. Centered: heading, email input field (white bg), submit button (white bg, navy text — inverted from hero CTA).

9. **Footer**: Dark background. Multi-column layout: brand + description, nav links, social icons. Bottom row: copyright + "Made with Component Dock" linking to componentdock.com.

### What differs from original
- Name: "Accountly" (not "Book Keeping")
- Images: picsum.photos placeholders (not Unsplash originals)
- Inner pages: not implemented (single-page landing only)
- Blog sections: not implemented (out of scope for landing template)
- Contact form: not implemented (newsletter email input only)
- Slider: not implemented (static hero image instead of carousel)
