# Caliber — Implementation Tasks & Design Notes

**Source:** ColorLib CA App Landing (https://colorlib.com/wp/template/ca-app/)
**Preview:** https://preview.colorlib.com/#ca-app (UNREACHABLE — screenshot-based prep)
**New name:** caliber
**Deploy:** https://caliber.free.componentdock.com

## Section Order (replicate 1:1 from screenshot + nav)

1. Navbar
2. Hero (gradient + wave divider + phone mockup)
3. Features ("Why Is It Special" — 3 cards)
4. About
5. Screenshots
6. Pricing
7. Testimonials
8. Team
9. Contact
10. Footer

**Note:** Sections 1–3 are verified from the screenshot. Sections 4–10 are
inferred from the navigation menu (Home, About, Features, Screenshot, Pricing,
Testimonials, Team, Contact). Implementer should prioritize pixel-accurate
fidelity for sections 1–3 and create reasonable implementations for 4–10.

## Fidelity Notes

### Navbar

- Transparent over hero, becomes solid on scroll (backdrop-blur or solid bg)
- Logo text: "Caliber" (bold, white) — replaces "Ca." from original
- Nav links: Home, About, Features, Screenshot, Pricing, Testimonials, Team, Contact
- "Sign Up Free" ghost button: white border, transparent bg, white text, rounded
- Mobile: hamburger menu with slide-down or overlay

### Hero

- Full-width, height ~600px
- **Background:** diagonal gradient purple → indigo-blue
  - Approximate: `linear-gradient(135deg, #7C3AED 0%, #6366F1 50%, #818CF8 100%)`
- **SVG wave divider** at bottom: white, curved, transitions to white section below
  - Use an SVG path for the wave (similar to common "wave" dividers)
- **Left content (60% width):**
  - Headline: "App Showcase" (or "Caliber App") — large white bold text (~48-56px)
  - Subtitle: "Everything You Need. To Start Selling Online Beautifully"
    — smaller white/light text (~16-18px)
  - **Form group:** email input + "Get Started" button, horizontally stacked
    - Email input: white bg, rounded-full (25px radius), placeholder "name@company.com"
    - "Get Started" button: pink bg (#E91E63), white text, rounded-full, no border
- **Right content (40% width):**
  - Phone mockup image (use a placeholder or generate an SVG phone frame)
  - The original shows a dark dashboard with a colorful donut/pie chart
  - Use a placeholder image or SVG illustration of a phone with dashboard

### Features ("Why Is It Special")

- White background section
- Centered heading: "Why Is It Special" — dark text, purple underline accent bar
  (small `#7C3AED` line below heading)
- 3-column grid of feature cards
- Each card:
  - Light border (`1px solid #E0E0E0`) or subtle shadow
  - Padding ~30px
  - Icon: purple (`#7C3AED`), ~40px, from lucide-react
  - Title: bold, dark text, ~18px
  - Description: muted gray text, ~14px
  - Cards: "Easy to use", "Powerful Design", "Customizability"
  - Descriptions: "We build pretty complex tools and this allows us to take
    designs and turn them into functional quickly and easily" (paraphrase is fine)

### About

- Split layout or centered content
- Heading + description about the app
- Include an image/illustration (picsum.photos/seed/caliber-about/800/500)

### Screenshots

- Device mockups or image carousel showing app interfaces
- Use placeholder images (picsum.photos/seed/caliber-screenshot-N/400/700)
- Could be a horizontal scrollable carousel or a grid

### Pricing

- 2-3 pricing tier cards
- Each: plan name, price, feature list, CTA button
- Highlighted/recommended tier with accent border or different bg

### Testimonials

- 2-3 testimonial cards
- Each: quote text, author name, avatar image, optional role/company
- Could be a carousel or grid

### Team

- Team member cards in a grid
- Each: photo (picsum.photos/seed/caliber-team-N/300/300), name, role, social links

### Contact

- Two-column: form (left) + contact info (right)
- Form fields: Name, Email, Subject, Message, Submit button
- Contact info: address, phone, email, social links

### Footer

- Dark background (dark gray or near-black)
- Logo + brief description
- Link columns (Company, Resources, etc.)
- Social media icons
- Component Dock credit: "Made with Component Dock" → https://www.componentdock.com/
- NO ColorLib references anywhere in the footer or app code

## Design Token Reference

```
Primary gradient: linear-gradient(135deg, #7C3AED, #6366F1, #818CF8)
Accent pink:      #E91E63
Accent hover:     #C2185B
Body text:        #333333
Muted text:       #777777
Card border:      #E0E0E0
Section bg:       #FFFFFF
Alt section bg:   #F8F9FA
Font family:      'Poppins', sans-serif
Button radius:    25px (pill-ish)
Card radius:      8-12px
Wave divider:     SVG path, white fill
```

## Implementation Priority

1. **P0 (must match screenshot exactly):** Navbar, Hero (gradient + wave + form + mockup), Features
2. **P1 (reasonable app-landing implementation):** About, Pricing, Contact, Footer
3. **P2 (standard patterns):** Screenshots, Testimonials, Team
