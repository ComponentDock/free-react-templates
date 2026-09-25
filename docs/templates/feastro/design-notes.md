# Feastro — Design Notes & Task Outline

Source: ColorLib Meal — https://preview.colorlib.com/theme/meal/

## Structure Order (implement in this order)

1. Navbar — Slide-out side panel (fixed right), centered logo "M" in bordered box, hamburger toggle. Not a top bar.
2. Hero — Full-viewport background image, dark overlay (#000 opacity .2), centered white serif heading, outlined CTA button.
3. Food Showcase — Heading + subtitle, two rows of 3-column image-text cards with CSS arrow connectors.
4. About — Centered text section, white bg, heading + paragraphs.
5. Divider Image — Full-width centered image.
6. Chefs — 2-column grid, circular photo (200px, border-radius 50%), name/role/bio, social icons.
7. Menu — Tabbed (Breakfast/Brunch/Dinner), 4 items per tab, each with image/name/description/price.
8. Reservation — Form with 6 icon-prefixed fields + "Book a Table" button.
9. Reviews — Carousel with dot navigation, 4 testimonials (quote + photo + name).
10. Contact — Form in white card (Name/Email/Phone/Message + Submit).
11. Map — Static map area (placeholder).
12. Footer — Near-black bg, 3 columns (About/Hours/Social+Newsletter), copyright + Component Dock link.
13. Loader — (optional) Full-screen spinner overlay, can skip for React.

## Fidelity Notes

- **Navbar is a side panel**, not a sticky top bar. Slides in from right on hamburger click. Fixed width 300px.
- **Arrow connectors** in the food showcase use CSS `:after` pseudo-elements with transparent borders. Must replicate with Tailwind + pseudo-elements or custom CSS.
- **Chef photos** must be circular (border-radius 50%, 200px width).
- **Menu tabs** use Bootstrap pill-style nav; implement with controlled state + Tailwind tab styling.
- **Reservation form** has icon prefixes using Ionicons; use lucide-react icons instead.
- **Reservation form** includes a "Number of Persons" dropdown and Date/Time pickers (can be simple inputs).
- **Reviews carousel** — use a simple carousel with manual dot navigation (no heavy dependency needed).
- **Map section** — use a placeholder div or static map image (Google Maps API key not needed).
- **Footer newsletter** — email input with envelope icon button.
- **Fonts:** Playfair Display (headings) + Open Sans (body) via Google Fonts `<link>`.
- **Brand accent:** #ff7a5c coral — used for active tab dots, loader stroke, form focus border, subheading text.
- **Footer attribution:** Replace Colorlib credit with "Made with Component Dock" link.

## Component Mapping

| ColorLib Class         | React Component          | Notes                          |
| ---------------------- | ------------------------ | ------------------------------ |
| `.site-header`         | `Header.tsx`             | Centered logo, hamburger       |
| `.site-menu`           | `Navbar.tsx`             | Slide-out side panel           |
| `.cover_1`             | `Hero.tsx`               | Full-viewport bg image + CTA   |
| `.ftco-46`             | `FoodShowcase.tsx`       | Arrow-connector image cards    |
| `.section` (about)     | `About.tsx`              | Centered text                  |
| `.ftco-38`             | `Chefs.tsx`              | Circular photo cards           |
| `.site-tab-nav`        | `Menu.tsx`               | Tabbed food menu               |
| `.section` (reservation)| `Reservation.tsx`       | Form with icon fields          |
| `.owl-carousel`        | `Reviews.tsx`            | Testimonial carousel           |
| `.section` (contact)   | `Contact.tsx`            | Form in white card             |
| `.map-wrap`            | `MapSection.tsx`         | Placeholder map                |
| `.ftco-footer`         | `Footer.tsx`             | Dark 3-column footer           |
