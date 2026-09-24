# CareVita — implementation notes

Source: ColorLib CareMed — https://colorlib.com/wp/template/caremed/
Preview: https://preview.colorlib.com/theme/caremed/

## Section order

1. Navbar (top bar + sticky nav + logo + CTA)
2. Hero slider (full-width carousel, 3 slides, dark overlay)
3. Three info boxes (overlapping hero, indigo bg)
4. About (white bg, heading + text + 2 images)
5. Departments (parallax bg, 3 circular photo cards)
6. Services (gray bg, 2x3 grid of icon cards, hover indigo)
7. CTA (parallax bg, heading + button)
8. Footer (4-column dark bg)
9. Copyright (near-black bar, Component Dock link)

## Design tokens

- Brand primary: #283290 (indigo)
- Brand accent: #20d34a (green)
- Text dark: #272727
- Text muted: #696969
- Services bg: #f5f7fa
- Copyright bg: #020523
- Font: Roboto (Google Fonts)
- Button: flat 51px height, green bottom bar fills on hover

## Fidelity notes

- Hero is a 3-item carousel (use simple state-based carousel, not OwlCarousel)
- Three boxes have negative margin-top (-59px) overlapping the hero
- Department cards use circular images (border-radius: 50%)
- Service cards: 2-column grid on desktop, hover changes bg to indigo
- Departments and CTA sections use parallax background images (use picsum)
- Footer: 4 columns — About (logo + contact), Useful Links, Services, News
- Top bar: FAQ, Request Appointment, emergency phone
- Logo: text-based "CareVita" in the navbar

## Component structure

- `src/components/Navbar.tsx` — TopBar + Navbar (sticky)
- `src/components/HeroSlider.tsx` — carousel with 3 slides
- `src/components/InfoBoxes.tsx` — 3 overlapping info cards
- `src/components/About.tsx` — heading + text + images
- `src/components/Departments.tsx` — parallax bg + 3 doctor cards
- `src/components/Services.tsx` — 6 service cards in grid
- `src/components/CtaSection.tsx` — parallax bg + heading + button
- `src/components/Footer.tsx` — 4-column footer
- `src/components/Copyright.tsx` — Component Dock link

## Placeholder images

- Hero background: `https://picsum.photos/seed/carevita-hero/1920/1080`
- Department photos: `https://picsum.photos/seed/carevita-doc-1/200/200`
- About images: `https://picsum.photos/seed/carevita-about-1/600/400`
- Department parallax: `https://picsum.photos/seed/carevita-dept/1920/800`
- CTA parallax: `https://picsum.photos/seed/carevita-cta/1920/600`
