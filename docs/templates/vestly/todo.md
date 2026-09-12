# Vestly — Implementation Notes

Source: ColorLib Invest (https://preview.colorlib.com/theme/invest/)
New name: Vestly (apps/vestly)
Package: @free-react-templates/vestly

## Section Order (top to bottom)

1. **Top Bar** — dark (#11100e) bar with logo ("invest" → "vestly"), crypto prices ticker, register/login buttons
2. **Main Menu** — sticky nav with links: Home, Blockchain, Financial, About Us, Services; phone + email on right; search icon
3. **Hero Slider** — full-viewport carousel with background images, dark overlay (0.83), centered heading + subtitle + gold CTA button; prev/next arrows + pagination dots
4. **Intro** — split layout: left column illustration, right column subtitle ("take a look at our") + h1 ("Buy and Sell Bitcoin") + paragraph + gold button
5. **Services** — carousel of service cards (icon SVG + title + description + "Read More" link); hover changes icon + text to gold
6. **News** — 3-column grid of news cards (image + title + excerpt + button); section subtitle + title centered above
7. **Footer** — dark bg (#15191f), 4 columns: logo+about, useful links, newsletter form, social icons
8. **Copyright** — bottom bar with copyright text

## Design Fidelity Notes

- **Brand color is #ffa800 (amber/gold)** — used on buttons, active states, logo accent, prices
- **Very dark backgrounds** — top bar #11100e, footer #15191f, hero overlay rgba(17,16,14,0.83)
- **Font: 'gill'** for headings/brand — use a Google Font substitute (e.g. "Montserrat" or "Poppins" bold)
- **Font: 'Open Sans'** for body text
- **Buttons are sharp rectangles** (no border-radius) with gold bg, white text
- **Button hover:** white underline animation slides in from left
- **Logo styling:** "in" in gold, "vest" in white, "Blockchain" subtitle below
- **Services carousel:** horizontal scroll with navigation arrows
- **News cards:** image on top, content below, dark button at bottom
- **Footer newsletter:** email input + subscribe button, social icons (Google Plus, Facebook, Twitter, YouTube)
- **Slider dots:** active dot is muted gold (#bda994), inactive is light gray (#d2d2d2)

## Implementation Tasks

- [ ] Scaffold app from template (copy simplest existing app, rename package)
- [ ] Set up Tailwind theme tokens (brand gold, dark backgrounds)
- [ ] Implement TopBar component (logo, prices, register/login)
- [ ] Implement MainMenu component (nav links, phone, email, search)
- [ ] Implement HeroSlider component (background images, overlay, text, CTA, arrows, dots)
- [ ] Implement Intro section (split layout, image, text, button)
- [ ] Implement ServicesCarousel component (cards with icons, hover effects)
- [ ] Implement NewsGrid component (3-column cards)
- [ ] Implement Footer component (4 columns, newsletter form, social)
- [ ] Implement Copyright bar
- [ ] Wire up App.tsx with all sections in order
- [ ] Write tests (100% coverage)
- [ ] Verify with scripts/verify-app.sh vestly
