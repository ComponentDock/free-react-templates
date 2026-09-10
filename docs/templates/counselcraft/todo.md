# Counselcraft — Prep Notes

Source: ColorLib "Counselor" (https://colorlib.com/wp/template/counselor/)
Preview: https://preview.colorlib.com/theme/counselor/
New name: counselcraft

## Section Build Order

1. Navbar
2. Hero
3. Intro Cards (3-column green bar)
4. How It Works (3 steps)
5. About (split image/text)
6. Services (2-col grid, 6 items)
7. Testimonials (carousel)
8. Pricing (3 cards)
9. Appointment (form + background)
10. Blog (3 cards)
11. Footer (4 columns)
12. TopBar (contact info + social)

## Fidelity Notes

- **Navbar**: dark background, brand "Counselcraft" bold left, 7 nav links
  right. Becomes sticky on scroll with scroll-based class toggle.
- **Hero**: full-width bg-image with dark overlay. Left-aligned headline +
  subtext + 2 CTAs (solid green + outline white). Right: circular play
  button that opens video modal.
- **Intro Cards**: 3 equal columns on dark green (#589167) background.
  Each has white icon + bold heading + description. Negative margin
  pulls this section up over the Hero by ~70px.
- **How It Works**: centered section with "Services" subheading +
  "How It Works" heading. 3 numbered step cards with circle badges.
- **About**: split layout. Left: image. Right: text on #f5f4f0 bg.
  Heading: "Best Counseling Funding Network Worldwide".
- **Services**: "We Can Help You With This Situation" heading.
  6 items in 2-col grid. Each: icon + title + short text.
- **Testimonials**: dark overlay bg, owl-carousel of cards.
  Each: avatar, quote, author name. "Happy Clients" heading.
- **Pricing**: 3 cards on light bg. Green price numbers, checkmark
  feature lists, CTA buttons. Cards have box-shadow.
- **Appointment**: bg-image with green overlay (#589167). Form on left
  with heading "Send a Message & Get in touch!". Fields: name,
  subject, message.
- **Blog**: "Recent Blog" heading, 3 cards with image + category +
  title + date.
- **Footer**: #1a1a1a dark bg. 4 columns. Brand + social icons,
  Explore links, Legal links, Company links. Bottom bar with
  Component Dock link.
- **TopBar**: thin dark green bar at very top. Phone + email left,
  social icons right.

## Key Design Tokens

| Token       | Value                              | Usage                       |
| ----------- | ---------------------------------- | --------------------------- |
| brand-green | #589167                            | buttons, intro bg, overlays |
| dark-bg     | #1a1a1a                            | footer                      |
| light-bg    | #f5f4f0                            | alternating sections        |
| font-family | Roboto                             | headings + body             |
| btn-radius  | 0.25rem                            | button corners              |
| card-shadow | 0 24px 48px -13px rgba(0,0,0,0.05) | pricing cards               |
