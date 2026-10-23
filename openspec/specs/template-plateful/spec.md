# Template: Plateful (Restaurant / Hospitality)

## Purpose

Recreation of ColorLib [Pato](https://colorlib.com/wp/template/pato/) template (`https://colorlib.com/wp/template/pato/`), preview URL: `https://preview.colorlib.com/theme/pato/`.
Stack: Vite, React 19, Tailwind CSS 4, TypeScript, Lucide icons, Vitest.

## Design tokens

- **Brand color / Accent**: Red (`#ec1d25` / Tailwind `red-600`) for headers, active links, button hovers, and top border.
- **Primary / Secondary dark**: Dark charcoal (`#111111`, `#222222`) for footers and dark sections.
- **Text color**: Gray (`#666666`) for body text, dark (`#111111` / `#222222`) for headings.
- **Fonts**: Montserrat (sans-serif) for body and headings, Courgette for accent script headings.
- **Button styling**: Rounded corners (`rounded-lg` / `bo-rad-10`), white or dark backgrounds with red hover states.
- **Backgrounds**: Dark/patterned sections (`bg-zinc-900`, `bg-stone-900`, white).
- **Surface (measured):** `#d41b22` — paints it ×8 — `background-color` on `.swiper-pagination-bullet-active`; main.css (30,752 B, sha256 6b49c107da5e) · <https://preview.colorlib.com/theme/pato/>

## Requirements

### Feature: Header & Navigation

#### Scenario: Header & Navigation

- Scenario: User views fixed/sticky header with logo and navigation links
- **GIVEN** the user loads the Plateful app
- **WHEN** the user views the header
- **THEN** they see the logo and navigation links (Home, Menu, Reservation, Gallery, About, Blog, Contact)
- **AND** clicking a link scrolls or navigates to the respective section

### Feature: Hero Slider

#### Scenario: Hero Slider

- Scenario: User views the hero carousel section
- **GIVEN** the user is at the top of the page
- **WHEN** the hero slider renders
- **THEN** it displays welcome slides with headings, subtitles, and a "Look Menu" button

### Feature: Welcome / About Section

#### Scenario: Welcome / About Section

- Scenario: User views the welcome/introduction section
- **GIVEN** the user scrolls to the welcome section
- **WHEN** the section renders
- **THEN** it displays "Discover Our Story", "Pato Place" / Plateful highlights (Romantic Restaurant, Delicious Food, Red Wines You Love) with images and "Learn More" links

### Feature: Menu Section

#### Scenario: Menu Section

- Scenario: User views the interactive menu categories
- **GIVEN** the user scrolls to the menu section
- **WHEN** they view the category tabs (Lunch, Dinner, Happy Hour, Drink, Starters, Dessert)
- **THEN** clicking a category displays the respective menu items with prices and descriptions

### Feature: Events Section

#### Scenario: Events Section

- Scenario: User views upcoming restaurant events
- **GIVEN** the user scrolls to the events section
- **WHEN** the events carousel or list renders
- **THEN** it displays event cards with dates, times, descriptions, and "View Details" buttons

### Feature: Booking / Reservation Form

#### Scenario: Booking / Reservation Form

- Scenario: User submits a table reservation
- **GIVEN** the user navigates to the book table section
- **WHEN** they fill in Date, Time, People count, Name, Phone, and Email
- **AND** click "BOOK TABLE"
- **THEN** a confirmation message appears

### Feature: Customer Reviews

#### Scenario: Customer Reviews

- Scenario: User views customer testimonials / reviews slider
- **GIVEN** the user scrolls to the reviews section
- **WHEN** the review carousel renders
- **THEN** it displays customer feedback quotes and author avatars

### Feature: Blog Section

#### Scenario: Blog Section

- Scenario: User views latest blog posts
- **GIVEN** the user scrolls to the blog section
- **WHEN** the blog cards render
- **THEN** they display article images, titles, dates, and "Continue Reading" links

### Feature: Newsletter Signup

#### Scenario: Newsletter Signup

- Scenario: User subscribes to specials newsletter
- **GIVEN** the user scrolls to the newsletter section
- **WHEN** they enter their email address and click sign up
- **THEN** a success notification is shown

### Feature: Footer & Copyright

#### Scenario: Footer & Copyright

- Scenario: User views footer with opening times, contact info, and branding
- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer renders
- **THEN** it displays Contact Us, Opening Times, Latest Posts, Gallery thumbnail grid, and a link to Component Dock (`https://www.componentdock.com/`)

## Verification checklist

- [ ] TypeScript compilation (`npx tsc --noEmit`)
- [ ] Lint check (`npm run lint`)
- [ ] 100% test coverage (`npm run test:coverage`)
- [ ] Build verification (`npm run build`)
- [ ] Footer contains Component Dock link (`https://www.componentdock.com/`)
- [ ] No reference to ColorLib in app source files
- [ ] `public/CNAME` contains `plateful.free.componentdock.com`
- [ ] Header & Navigation — they see the logo and navigation links (Home, Menu, Reservation, Gallery, About, Blog, Contact)
- [ ] Hero Slider — it displays welcome slides with headings, subtitles, and a "Look Menu" button
- [ ] Welcome / About Section — it displays "Discover Our Story", "Pato Place" / Plateful highlights (Romantic Restaurant, Delicious Food, Red Wines You Love) with images and "Learn More" links
- [ ] Menu Section — clicking a category displays the respective menu items with prices and descriptions
- [ ] Events Section — it displays event cards with dates, times, descriptions, and "View Details" buttons
- [ ] Booking / Reservation Form — a confirmation message appears
- [ ] Customer Reviews — it displays customer feedback quotes and author avatars
- [ ] Blog Section — they display article images, titles, dates, and "Continue Reading" links
- [ ] Newsletter Signup — a success notification is shown
