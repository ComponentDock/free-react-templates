# Spec — Homefront

> Recreation of ColorLib [Royalestate](https://colorlib.com/wp/template/royalestate/)
> Preview: https://preview.colorlib.com/theme/royalestate/

## Design tokens

- Primary: `#1e3a5f` (deep navy blue)
- Accent: `#c8a951` (warm gold)
- Dark bg: `#1a1a2e` (near-black navy)
- Light bg: `#f8f9fa`
- Font: Poppins (Google Fonts)
- Buttons: rounded, bg-primary with white text, hover darkens
- Card style: white bg, subtle shadow, rounded corners

## Sections (in order)

1. **Navbar** — Logo "Homefront", nav links (Home, Property, Agents, About, Blog, Contact), Sign-In / Sign-Up buttons
2. **Hero** — Property card carousel with images, address, price, description, "View Details" CTA
3. **Search** — Advanced property search form with filters: keyword, location, property type, status, agents, beds, bathrooms, price range
4. **Services** — 4-column feature grid with icons: Find Places, Agents With Experience, Buy & Rent, Making Money
5. **Recent Properties** — Property listing cards with sale/rent badge, address, type, price
6. **Testimonials** — Client quotes with avatars, names, titles, carousel
7. **Stats** — Counter section (properties, clients, awards, agents) with parallax background
8. **CTA** — Parallax newsletter signup with email input
9. **Footer** — Logo, description, nav links (Buy, Sell), contact info, copyright with Component Dock link

## Scenarios

- GHERKIN: Navbar renders with all links
- GHERKIN: Hero shows property cards with prices
- GHERKIN: Search form has all filter fields
- GHERKIN: Services section displays 4 features
- GHERKIN: Properties section shows property cards
- GHERKIN: Testimonials section renders quotes
- GHERKIN: Stats section shows counters
- GHERKIN: Footer links to componentdock.com
