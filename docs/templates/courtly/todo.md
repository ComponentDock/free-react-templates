# Courtly — Implementation Notes

Source: ColorLib Lawful (https://preview.colorlib.com/theme/lawful/)

## Section Order (top to bottom)

1. Navbar
2. Hero Banner (fullscreen overlay)
3. Features Counter (gradient bg, 4 stats)
4. Video Section (2-col: video left, text right)
5. About Area (4 "Road to Success" cards, 2x2 grid)
6. Service Area 1 (heading + 3 service cards)
7. Service Area 2 (2-col: text left, 3 mini services right)
8. Team Area (heading + 3 member cards)
9. CTA Area (gradient overlay)
10. Blog Area (heading + 3 post cards)
11. Footer (4-col: about, nav, newsletter, instagram + copyright)

## Design Tokens Summary

- Heading font: Playfair Display 700 (serif)
- Body font: Raleway 400 (sans-serif)
- Brand gradient: #f13d80 → #f48464 (pink to coral, 90deg)
- Heading color: #222222
- Body text: #777777
- Button: white bg, 5px radius, gradient overlay on hover, white text on hover
- Accent pink: #f13d80
- Divider/border: #eeeeee

## Component Outline

- `src/components/Navbar.tsx` — sticky top, logo + nav links + social icons + search
- `src/components/HeroBanner.tsx` — fullscreen overlay, bg image via picsum, CTA button
- `src/components/FeaturesCounter.tsx` — gradient bg, 4 stat cards, animated counters
- `src/components/VideoSection.tsx` — 2-col: video thumbnail + play btn, text + author card
- `src/components/AboutArea.tsx` — 4 "Road to Success" cards, 2x2 grid
- `src/components/ServiceArea.tsx` — heading + 3 service cards
- `src/components/ServiceAreaTwo.tsx` — 2-col: text block + 3 mini services
- `src/components/TeamArea.tsx` — heading + 3 team member cards
- `src/components/CtaArea.tsx` — gradient overlay CTA section
- `src/components/BlogArea.tsx` — heading + 3 blog post cards
- `src/components/Footer.tsx` — 4 columns + copyright bar

## Fidelity Notes

- Hero is fullscreen with dark overlay (`::after` pseudo-element)
- Counter section uses animated count-up on scroll intersection
- Video section has a pulsing circular play button with gradient
- About area has 4 identical "Road to Success" cards with icons
- Service area 1 has 3 cards; service area 2 has a different 2-col layout
- Team cards show photo, name, social links (hover reveal)
- CTA section uses same gradient overlay as hero
- Blog cards show image, title, date/author, excerpt, "Read More" link
- Footer newsletter has input + button styled with gradient

## Implementation Priority

1. Layout shell: App.tsx with all section imports
2. Navbar (with mobile toggle)
3. HeroBanner (fullscreen overlay)
4. FeaturesCounter (gradient bg)
5. VideoSection (2-col)
6. AboutArea
7. ServiceArea + ServiceAreaTwo
8. TeamArea
9. CtaArea
10. BlogArea
11. Footer
