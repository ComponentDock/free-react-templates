# Havenly — Design Notes & Implementation Outline

**Source:** ColorLib Adopted — https://preview.colorlib.com/theme/adopted/
**New name:** havenly
**Stack:** React 19 + Vite + Tailwind 4 + TypeScript

## Section implementation order

1. **TopBar** — Social icons left, Sponsor + Login buttons right, light bg
2. **Navbar** — Brand "havenly", 5 nav links with Adoption dropdown, hamburger mobile
3. **HeroSlider** — 2 slides, cursive child names, headlines, CTAs, full-height bg images
4. **StepsSection** — SVG illustration left, 7-step accordion right
5. **WaitingChildren** — Heading + carousel of 5 child cards (photo + name + age)
6. **FeaturedStories** — 3-column grid of story cards with overlay hover
7. **Newsletter** — "Get News & Updates" heading + name/email/subscribe form
8. **Footer** — 4-column: About, Contact, Quick Links, Social; ComponentDock link
9. **PageLoader** — Gold spinner overlay, dismisses on load

## Fidelity notes

### Top Bar
- Light gray bar above navbar
- Left: 4 social icons (Twitter, Facebook, Instagram, LinkedIn) using lucide-react
- Right: "Sponsor" text button + "Login" solid button (red primary)
- Bootstrap-style button classes; use Tailwind equivalents

### Navbar
- Brand: "havenly" text (Open Sans, bold)
- Nav links: Home, Adoption (dropdown), Success Stories, About, Contact
- Dropdown under Adoption: Adoption, Waiting Children, How to Adopt
- Light background (#f8f9fa)
- Mobile: Bootstrap-style collapse with hamburger toggle
- Active state on Home link

### Hero Slider
- Full-height slider (100vh minus navbar height, min 700px)
- Background images via picsum.photos/seed/havenly-hero-1/1920/1080
- Dark overlay (rgba(0,0,0,0.4)) on slides for text readability
- Child name: Sacramento cursive font, 40px, white (or black on .dark slides)
- Headline: Open Sans 800, uppercase, 40px, white
- CTA: Bootstrap primary button (#bc5148), white text, "Adopt Her/Him Now!"
- 2 slides with different child names and headlines

### Steps Section
- White background
- Left (col-md-5): SVG illustration (parent-child figures in warm earth tones)
  - Use lucide-react icons or a simple SVG composition
  - Description paragraph below
  - "Adopt a child now" outline button (btn-outline-primary)
- Right (col-md-6): "Steps to adopt & foster a child" heading
  - 7-step accordion (Bootstrap collapse pattern)
  - Each step: title as clickable link with chevron icon
  - Expandable content area with description text
  - Steps: Getting Started, Envisioning your family, Getting approved,
    Being matched with a child, Receiving a placement,
    Finalizing an adoption, State information

### Waiting Children
- Light gray background (#f8f9fa)
- Centered heading "Waiting Children" (uppercase, text-transform)
- Description paragraph below heading
- "Find More Waiting Children" primary button (red)
- Carousel of 5 child cards:
  - Image (use picsum.photos/seed/havenly-child-N/400/300)
  - Name + age text below image
  - Cards: Edward (14), Mellisa (6), Mark (12), Jessa (13), Ben (14)
  - Carousel with navigation (prev/next)

### Featured Stories
- White background with top border
- Centered "Featured Stories" heading (uppercase)
- 3-column grid (no gutters, col-md-4 each)
- Each card: link overlay with date, title, plus icon, background image
- Hover effect: icon appears, image may darken
- Stories with dates from January 2018
- Use picsum.photos/seed/havenly-story-N/600/400

### Newsletter
- Light gray background (#f8f9fa)
- "Get News & Updates" heading (uppercase)
- 3-column form row: name input, email input, "Subscribe" button
- Bootstrap form controls, primary button for submit
- Centered layout

### Footer
- Dark background (use #333 or similar dark)
- 4 equal columns:
  1. About: text + "Learn More" link
  2. Contact & Address: address, phone, email (with labels A:, T:, E:)
  3. Quick Links: 7 nav links (About, Success Stories, Waiting Children, etc.)
  4. Social: 4 icon links (Twitter, Facebook, LinkedIn, Instagram)
- Copyright text centered at bottom
- MUST include ComponentDock attribution link

### Page Loader
- Full-screen fixed overlay
- Gold (#f4b214) spinning circle animation
- Disappears when page finishes loading
- Can be implemented with a state hook + useEffect

## Design tokens for @theme

```
brand-red: #bc5148
brand-red-hover: #ca746d
accent-gold: #f4b214
text-dark: #495057
text-muted: #868e96
bg-light: #f8f9fa
border-color: #dee2e6
```

## Shared UI components to reuse

- `packages/ui` Button/ButtonLink (primary red variant, outline variant)
- `packages/ui` cn() utility
- Consider adding: Carousel component, Accordion/Collapse, Slider, Form inputs
