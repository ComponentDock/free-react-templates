# Tavern (ColorLib Pato) — Tasks & Design Notes

## Section Implementation Order

1. **Navbar** (`Navbar.tsx`): Fixed/sticky header, logo, nav links (`Home`, `Menu`, `Reservation`, `Gallery`, `About`, `Blog`, `Contact`), mobile menu toggle, and Reservation button.
2. **Hero** (`Hero.tsx`): Full-screen banner/slider with welcome headline ("Welcome to Tavern"), subtitle, and "Look Menu" CTA.
3. **Welcome** (`Welcome.tsx`): Italian Restaurant intro with heading, divider, story copy, and "Our Story" link.
4. **Intro** (`Intro.tsx`): 3-column feature grid (Romantic Restaurant, Delicious Food, Red Wines You Love) with image cards, titles, blurbs, and "Learn More" links.
5. **OurMenu** (`OurMenu.tsx`): Menu categories tabbed filter (Lunch, Dinner, Happy Hour, Drink, Starters, Dessert) displaying item cards with prices and descriptions.
6. **Event** (`Event.tsx`): Upcoming events showcase with date badges, titles, descriptions, and a countdown timer component.
7. **Booking** (`Booking.tsx`): Interactive reservation form with inputs for Date, Time selection, People count selector, Name, Phone, Email, and submit button with validation state.
8. **Review** (`Review.tsx`): Customer testimonials carousel/grid with quote text, author name, and location.
9. **Video** (`Video.tsx`): Video feature banner with dark overlay and play button trigger.
10. **Blog** (`Blog.tsx`): Latest news / blog posts grid with date tags, titles, blurbs, and "Continue Reading" links.
11. **Signup** (`Signup.tsx`): Newsletter signup section with email input and subscribe button.
12. **Footer** (`Footer.tsx`): Contact info (Address, Phone, Email), Opening Times ("09:30 AM – 11:00 PM Every Day"), Latest Posts, and the mandatory Component Dock footer link (`https://www.componentdock.com/`).

## Design & Fidelity Notes

- **Color Palette**: Crimson red accent (`#ec1d25`), dark charcoal `#111111` and `#222222` backgrounds, white typography for high contrast headers, gray `#cccccc` body text.
- **Typography**: Clean modern sans-serif (`Poppins` / `Montserrat`) with elegant accents.
- **Interactivity**: Fully interactive menu tabs, reservation form validation, mobile drawer navigation, and blog/newsletter inputs.
- **Assets**: All images use deterministic `https://picsum.photos/seed/tavern-<n>/<w>/<h>` URLs.
