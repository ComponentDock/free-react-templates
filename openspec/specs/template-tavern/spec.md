# Spec: Tavern — Restaurant Landing Template

**Original:** ColorLib "Eatery" — https://colorlib.com/wp/template/eatery/  
**Preview:** https://preview.colorlib.com/theme/eatery/  
**New name:** Tavern (apps/tavern, @free-react-templates/tavern)

## Design Tokens (from preview CSS)

| Token            | Value                    | Notes                                          |
| ---------------- | ------------------------ | ---------------------------------------------- |
| Brand color      | #cf1d16                  | Primary red, used for buttons, loader, accents |
| Alt brand        | #e9362f                  | Button hover/active state                      |
| Font family      | Open Sans (Google Fonts) | 300/400/700 weights                            |
| Button radius    | 0px                      | Square buttons                                 |
| Light background | #f7f7f7                  | Section bg-light                               |
| Body text        | #868e96                  | Gray text                                      |
| Dark text        | #000                     | Headings                                       |
| White            | #fff                     | Card/text on dark                              |

## Sections (in order)

1. **Navbar** — fixed top, logo "Tavern", nav links (Home, About, Menu, Services, Blog, Contact), hamburger on mobile
2. **Hero** — full-width slider with overlay, headings ("Expert Chefs" / "Delicious Food"), subtext + "Get Started" CTA buttons
3. **Features** — 4-column grid on light bg: Drinks, Sea Foods, Cup Coffees, Fresh Salad (icon + title + description)
4. **Special Dishes** — carousel of dish cards with images, titles, prices (organic tomato salad $11.50, baked broccoli $12.00, spicy meatballs $11.00, eggplant parmigiana $12.00)
5. **Our Menu** — two-column list on light bg, each item: dish name, description, price
6. **Testimonials** — carousel of customer quotes with names/roles
7. **Blog** — 2-column cards: image, title, date, excerpt, "Read More"
8. **Footer** — Newsletter signup, About Us, Opening Hours, Contact Info, Quick Links, Component Dock attribution, copyright

## Fidelity Notes

- Match the original's red (#cf1d16) brand color and Open Sans typeface
- Square buttons (no border-radius) as in the original
- Section order preserved exactly
- Placeholder images via picsum.photos/seed/tavern-{n}
- Footer links to https://www.componentdock.com/ (Component Dock branded)
- No ColorLib references in app source

## Scenarios

### Navbar

- renders logo text "Tavern"
- shows navigation links on desktop
- toggles mobile menu on hamburger click

### Hero

- displays hero heading and CTA button
- slides between hero slides

### Features

- shows 4 feature cards with icons and descriptions

### Special Dishes

- displays dish cards with names and prices
- navigates between slides

### Our Menu

- shows menu items with descriptions and prices

### Testimonials

- displays customer testimonials with names and roles

### Blog

- shows blog post cards with title, date, excerpt

### Footer

- links to Component Dock
- shows newsletter signup form
- displays opening hours and contact info
