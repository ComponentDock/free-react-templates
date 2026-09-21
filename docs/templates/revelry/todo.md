# Revelry — Implementation Notes

## Source
- ColorLib: The Venue (https://colorlib.com/wp/template/thevenue/)
- Preview: https://preview.colorlib.com/theme/thevenue/
- New name: Revelry

## Design tokens
- Body font: PT Sans Narrow (Google Fonts)
- Decorative font: Edward (Google Fonts script)
- Primary tan: #c4ab9f
- Warm brown: #b49383
- Salmon: #ffa07f
- Red accent: #db5246
- Dark: #232323
- Light bg: #F7F7F7
- Button radius: 7px

## Section order (1:1 with source)
1. Header — sticky nav, logo (script font), links, phone, hamburger
2. Hero — parallax bg, subtitle + title (script) + description + scroll icon
3. Introduction — subtitle, title, description, 2-col images
4. Video CTA — parallax dark overlay, play icon, title
5. Signature Dish — 2-col: left text (subtitle, title, description, rating, ingredients, CTA) + right image
6. Menu — title + 3-col grid (Starters, Main, Desserts), each 5 dishes with price + CTA
7. Reservations — parallax tan overlay, title, form with party selector
8. Footer — 3-col (logo, about, contact) + copyright with Component Dock link

## Fidelity notes
- Parallax sections: hero, video, reservations (use CSS background-attachment or equivalent)
- Script font "Edward" used for decorative titles and star ratings
- Tan (#c4ab9f) is the dominant brand color — used for nav, buttons, section overlays, column headers
- Star ratings appear in script font before menu and reservations sections
- Menu column headers have tan background bars
- Dish items show ingredient tags as small text blocks
- Reservation form is simple: dropdown for party size + submit button
- Footer copyright must link to Component Dock (not ColorLib)

## Component plan
- Navbar.tsx — sticky header with logo, nav links, phone, hamburger
- Hero.tsx — parallax background, centered text, scroll icon
- Introduction.tsx — about section with 2 images
- VideoCta.tsx — parallax dark section with play button
- SignatureDish.tsx — 2-column specials layout
- Menu.tsx — 3-column menu grid with dish cards
- Reservations.tsx — parallax section with form
- Footer.tsx — 3-column footer with copyright
