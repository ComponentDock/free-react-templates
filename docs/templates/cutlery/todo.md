# Cutlery — Implementation Tasks

Source: ColorLib "Meal" — https://preview.colorlib.com/theme/meal/
New name: cutlery (apps/cutlery, @free-react-templates/cutlery)

## Task list

- [ ] Scaffold app from template (copy simplest existing app, rename)
- [ ] Update package.json name to @free-react-templates/cutlery
- [ ] Set up index.html with Google Fonts (Open Sans + Playfair Display)
- [ ] Create src/index.css with Tailwind @theme tokens (accent: #ff7a5c)
- [ ] Implement Navbar component (fixed header, hamburger → slide-in panel)
- [ ] Implement Hero component (parallax bg image, white heading, outline CTA)
- [ ] Implement FoodGrid component (4 items, alternating image-text layout)
- [ ] Implement About section (centered text on white bg)
- [ ] Implement Chefs section (2 cards with overlay photo/name/role)
- [ ] Implement MenuTabs component (Breakfast/Brunch/Dinner tabs, item list with price)
- [ ] Implement Services section (6 icon feature cards, 3-col grid)
- [ ] Implement ReservationForm (Name, Email, Phone, Persons, Date, Message)
- [ ] Implement Reviews carousel (testimonials with author photo)
- [ ] Implement ContactForm (Name, Email, Phone, Message)
- [ ] Implement Footer (3 columns: About, Hours, Social+Newsletter + Component Dock link)
- [ ] Write all tests (100% coverage)
- [ ] Run verify-app.sh cutlery
- [ ] Update TEMPLATES.md status

## Section order (fidelity notes)

1. Header (fixed, transparent → white on scroll, hamburger menu)
2. Hero (parallax bg image, centered heading, CTA button)
3. Food Features Grid (4 items, alternating layout)
4. About (centered text)
5. Decorative image break
6. Chefs (2 cards with photo overlays)
7. Menu (tabbed: Breakfast, Brunch, Dinner)
8. Services (6 icon features, 3-col grid)
9. Reservation form
10. Customer Reviews carousel
11. Contact form
12. Footer (3-col: About, Hours, Social+Newsletter)

## Fidelity notes

- Brand accent is `#ff7a5c` (coral) — used ONLY for focus rings, loader, and
  tab active state. All other colors are monochrome (white bg, black text)
- Headings use Playfair Display (serif); body uses Open Sans
- Buttons are uppercase, letter-spacing 0.2em, bold, outline style
- Hero uses parallax background image effect (stellar)
- Menu tabs use Bootstrap-style pill tabs (converted to React state)
- Chef cards: photo with overlay gradient for name/role text
- Reservation form has icon-positioned labels (ionicons in original, use lucide-react)
- Footer newsletter: email input with envelope icon button
- Map section placeholder in original — skip or use placeholder
