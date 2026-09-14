# CabSpot — Design Notes & Tasks

Source: ColorLib "Taxi" — https://colorlib.com/wp/template/taxi/
Preview: https://preview.colorlib.com/theme/taxi/
New name: **CabSpot** (apps/cabspot)

## Section order (fidelity reference)

1. **Header/Nav** — fixed top nav, logo left, menu right (Home, About, Services, Gallery, Blog dropdown, Contact)
2. **Hero Banner** — full-screen, dark overlay (rgba(0,0,0,0.8)) on bg image, left: headline "Need a ride? just call" + phone number + CTA button; right: booking form panel (white bg, name/email/phone inputs, from/to selects, date picker, "Make reservation" button)
3. **About Section** — two-column: text left (heading + paragraph + CTA button), image right
4. **Services Section** — 3 service cards in a row, each with colored icon accent (yellow #f9d700, cyan #4cd3e3, blue #38a4ff), title, description
5. **Image Gallery** — grid of images with hover overlay/zoom effects
6. **Reviews Section** — customer testimonials with names and quotes
7. **CTA Banner** — full-width, yellow overlay (rgba(249,215,0,0.9)) on bg image, heading + primary button
8. **Blog Section** — 3 blog post cards (image, date badge, title, excerpt)
9. **Footer** — black (#000) background, multi-column layout, social links, copyright, Component Dock link

## Fidelity notes

- **Hero layout**: split — 60% left content / 40% right form panel. Form sits on a white card.
- **Booking form**: uses custom styled selects (pill radius 20px), date picker input, text inputs with underline style.
- **Button style**: flat/square (0px radius), yellow #f9d700 bg, white text, hover darkens.
- **Section spacing**: `section-gap` = 90px top + 90px bottom padding on most sections; services uses `pb-120`.
- **Typography**: Poppins throughout. Headings are bold 600-700. Body is 400 weight, #777 gray.
- **Alternating backgrounds**: some sections use `#f9f9ff` (very light blue-gray) as alt bg.
- **Footer**: pure black #000, white text, social icons, multi-column links.

## Tasks

- [ ] Scaffold apps/cabspot from simplest existing app
- [ ] Set up index.html with Poppins Google Font link
- [ ] Implement Header component (nav with dropdown)
- [ ] Implement Hero section (banner bg, overlay, split layout, booking form)
- [ ] Implement About section
- [ ] Implement Services section (3 cards with color accents)
- [ ] Implement Image Gallery section
- [ ] Implement Reviews section
- [ ] Implement CTA Banner section (yellow overlay)
- [ ] Implement Blog section (3 post cards)
- [ ] Implement Footer (black bg, Component Dock link)
- [ ] Compose all sections in App.tsx
- [ ] Write tests for each component (100% coverage)
- [ ] Run verify-app.sh to gate
- [ ] Commit, push, deploy
