# Bitforge — Design Notes

## Source Reference

- **ColorLib slug:** bitcoin
- **Preview:** https://preview.colorlib.com/theme/bitcoin/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bitcoin-free-template.jpg
- **Original theme:** Cryptocurrency landing page with dark hero, converter form, services, pricing, blog

## Visual Design Summary

Dark-themed crypto fintech landing page. Deep navy/dark overlay hero with large price display. Orange (#f78f3d) as the primary accent throughout — buttons, links, icons, hover states. Gold-to-orange gradient on primary CTAs and the call-to-action bar. Light sections (#f9f9ff) alternate with white and dark (#222) sections for contrast. Poppins font throughout. Clean, corporate-fintech aesthetic.

## Section-by-Section Fidelity Notes

### Navbar

- Fixed header, transparent over hero, dark semi-transparent on scroll (#222 with alpha)
- Logo on left, nav links on right (uppercase, 12px, white)
- Mobile: hamburger toggle with slide-out dark menu
- Implementer: use Tailwind `sticky top-0` with scroll-based bg transition via intersection observer or scroll listener

### Hero / Banner

- Full-height section with background image + dark overlay (rgba(4,9,30,0.85))
- Centered text: uppercase subtitle "Currently Purchase Rate", huge price ($12,356) in 100px bold white, description, orange CTA button
- Button: orange (#f78f3d) bg, 3px radius (sharp corners), white text, uppercase
- Implementer: placeholder bg via picsum.photos, overlay via Tailwind `bg-black/85`

### Currency Converter

- Overlapping card with negative margin (-105px), z-index 2
- Gradient background (gold-to-orange) same as primary-btn
- White text headings, transparent form inputs with gold border (#f9c065)
- Button: white bg, dark text, capitalized
- Implementer: use negative margin or relative positioning to achieve overlap

### Simple Services

- 3 equal columns, each with top image/icon, h4 title link, description
- Hover: title color changes to brand orange
- White background, padding via section-gap
- Implementer: lucide-react icons replace original PNGs

### About Us

- Full-width dark (#222) section, white text
- Left 50%: image carousel (use single placeholder image, skip carousel complexity)
- Right 50%: brand icon (lucide), h1 heading, description paragraph
- Implementer: static image, no carousel needed — single image is sufficient

### Features

- "Why choose us" centered header
- 3x2 grid (6 cards) with padding
- Each card: linear icon (lucide-react) + h4 title + p description
- Hover: title turns #f78f3d
- Icons to map: Expert=Users, Professional=Award, Support=Headphones, Skills=Wrench, Recommended=Star, Reviews=MessageCircle

### Statistics

- Light bg (#f9f9ff)
- Left 50%: chart image (placeholder via picsum)
- Right 50%: heading, description, "View Details" button
- Button: orange bg, on hover becomes outline with #f78f3d border

### Call to Action

- Full-width gradient bar (linear-gradient(0deg, #f3c400, #f88845))
- Centered white heading + description
- White button with dark text, rounded
- Implementer: gradient bg via Tailwind custom class or inline style

### Pricing

- Centered heading + subtitle
- 3 equal cards with border, no padding on card
- Each card: top bar (#fbfcff bg, border-bottom), description, bottom section (#f9f9ff bg, inner margin 45px)
- Price: 60px font-weight-300 with $ sign superscript
- Button: dark (#222) bg, on hover turns gold (#ca9814)
- Hover whole card: bottom bg becomes gradient

### Blog

- Centered heading + subtitle
- 3-column cards: thumbnail image, h4 title, description, author row (avatar + name + date)
- Hover: title color #f78f3d
- Implementer: placeholder images from picsum.photos

### Footer

- Dark bg (#04091e), section-gap padding
- 3 columns: About Us (text), Top Products (link list), Newsletter (email + submit)
- Newsletter form: dark input bg (#1e2235), rounded button (#f78f3d)
- Bottom bar: copyright + social icons (bg #111, hover #f78f3d)
- MUST replace Colorlib attribution with Component Dock link: "Made with Component Dock"

## Color Palette Summary

| Name         | Hex     | Where                                          |
| ------------ | ------- | ---------------------------------------------- |
| Brand Orange | #f78f3d | Accents, icons, links, selection, footer links |
| Gold Start   | #f3c400 | Gradient start (buttons, CTA, convert)         |
| Orange End   | #f88845 | Gradient end                                   |
| Heading Dark | #222    | h1–h6, dark sections, price buttons            |
| Body Gray    | #777    | Paragraphs, footer links                       |
| Light BG     | #f9f9ff | Stat section, form inputs, pricing             |
| Dark BG      | #222    | About Us section                               |
| Footer BG    | #04091e | Footer                                         |
| Form Border  | #f9c065 | Convert area input borders                     |
| Hover Gold   | #ca9814 | Pricing button hover                           |

## Implementation Tips

- Use `cn()` from packages/ui for all class merging
- Lucide-react icons replace original linearicons (same visual weight)
- Placeholder images: `https://picsum.photos/seed/bitforge-<n>/<w>/<h>`
- Google Fonts: load Poppins via `<link>` in index.html (weights 300,400,500,600,700)
- Banner height: `min-h-screen` with flex centering
- Converter overlap: `relative -mt-24 z-10` on the converter wrapper
- Gradient: define a Tailwind theme token or use inline `bg-gradient-to-t from-[#f3c400] to-[#f88845]`
