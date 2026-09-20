# Meetpoint — Implementation Notes

## Source
- **ColorLib slug:** agenda
- **Preview URL:** https://preview.colorlib.com/theme/agenda/
- **New name:** meetpoint

## Design Tokens (from style.css analysis)
- Font: system sans-serif (Calibri in original, use Tailwind default)
- Brand purple: #9a24c1 (borders, accents)
- Gradient: #AA00FF → #581687 (CTA buttons, submit)
- Dark button: #231e23
- Body text: #2f2f2f
- Button radius: 50px (pill)
- Rating badge: #9a28d7 (purple circle)

## Section Order (implement top → bottom)
1. Navbar — transparent overlay, logo + nav + Buy Tickets CTA
2. Hero — Swiper-style slider, 3 slides, countdown, CTA
3. Info — logo + heading + paragraph + two buttons
4. Featured Events — masonry grid, image cards
5. Next Events — 3-col cards with ratings
6. Regional Events — slider + dropdown + partners
7. Newsletter — form with gradient submit
8. Footer — logo, nav, social, copyright, Component Dock

## Component Plan
- `src/components/Navbar.tsx`
- `src/components/Hero.tsx` (countdown + slider)
- `src/components/InfoSection.tsx`
- `src/components/FeaturedEvents.tsx` (masonry grid)
- `src/components/NextEvents.tsx` (3-column cards)
- `src/components/RegionalEvents.tsx` (slider + dropdown + partners)
- `src/components/Newsletter.tsx`
- `src/components/Footer.tsx`

## Fidelity Notes
- Hero uses Swiper for slide transitions with prev/next arrows + pagination dots
- Countdown timer is JS-driven (days, hours, min, sec from a target date)
- Featured events uses masonry layout (CSS grid or flex with varied heights)
- Regional events slider is a horizontal Swiper with overlay "+" links
- Partners section is a simple logo row below the regional slider
- Newsletter form is inline flex with gradient submit button

## Placeholder Images
Use picsum.photos with deterministic seeds:
- Hero: https://picsum.photos/seed/meetpoint-hero/1920/800
- Featured events: https://picsum.photos/seed/meetpoint-feat-1/400/300 etc.
- Next events: https://picsum.photos/seed/meetpoint-next-1/400/250 etc.
- Regional events: https://picsum.photos/seed/meetpoint-reg-1/600/400 etc.
