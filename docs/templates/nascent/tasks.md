# Nascent — Implementation Notes

Source: ColorLib Thestartup (https://preview.colorlib.com/theme/thestartup/)
New name: nascent
App path: apps/nascent
Package: @free-react-templates/nascent

## Section Order (implement in this sequence)

1. `Navbar.tsx` — sticky header, logo, 5 nav links, orange "Join Us" gradient button
2. `Hero.tsx` — split layout (text left 35%, image right 50%), #FFDDB5 bg, orange tagline, heading, subtext, CTA
3. `Services.tsx` — section title + description row, 3 service cards (icon, title, desc, underline link)
4. `About.tsx` — split (image left, text right), "Our Philosophy" heading, paragraphs, author line
5. `Pricing.tsx` — centered title, 3 pricing cards, middle active, feature list, CTA buttons
6. `Features.tsx` — left: title + 4-item accordion, right: image; uses state for expand/collapse
7. `Testimonials.tsx` — dark purple parallax bg, carousel with quote + author, dot pagination
8. `Blog.tsx` — centered title, 3 blog cards carousel (image, badge, title, excerpt)
9. `Footer.tsx` — black bg, 4 columns (logo+social, nav, services, contact), bottom bar → Component Dock link

## Design Fidelity Notes

- Brand orange #FF9100 is used everywhere: buttons, hover states, submenu bg, badge bg, scroll-to-top
- Buttons have 5px border-radius (not pill/circle)
- Headings use Josefin Sans (import via Google Fonts link in index.html)
- Body uses Roboto (import via Google Fonts link in index.html)
- Hero section bg is #FFDDB5 (peach/tan), not white
- Pricing cards are sharp-edged (no border-radius), with a subtle border
- Testimonial section uses a parallax background image (use a placeholder)
- Blog cards have a category badge overlaid on the image
- Footer is fully black (#000) with white text
- "Join Us" button uses an orange gradient: linear-gradient(to left, #FF9100, #df7e00, #FF9100)
- Section padding: 120px top, 100px bottom (use Tailwind py-30 px-4 or similar)

## Placeholder Assets

- Hero image: https://picsum.photos/seed/nascent-hero/800/750
- About image: https://picsum.photos/seed/nascent-about/600/700
- Features image: https://picsum.photos/seed/nascent-features/600/500
- Blog images: https://picsum.photos/seed/nascent-blog1/400/300, seed/nascent-blog2/400/300, seed/nascent-blog3/400/300
- Service icons: lucide-react icons (Monitor, Code, ShoppingCart)

## Existing Patterns to Follow

- Copy apps/abjure as starter (simplest existing app), rename package to @free-react-templates/nascent
- Use cn() from packages/ui for class merging
- Section components in src/components/, compose in src/App.tsx
- vite.config.ts must register injectUiSource()
