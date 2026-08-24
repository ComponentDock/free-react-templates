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

## Gherkin Requirements & Scenarios

### Feature: Header & Navigation

- Scenario: User views fixed/sticky header with logo and navigation links
  - Given the user loads the Plateful app
  - When the user views the header
  - Then they see the logo and navigation links (Home, Menu, Reservation, Gallery, About, Blog, Contact)
  - And clicking a link scrolls or navigates to the respective section

### Feature: Hero Slider

- Scenario: User views the hero carousel section
  - Given the user is at the top of the page
  - When the hero slider renders
  - Then it displays welcome slides with headings, subtitles, and a "Look Menu" button

### Feature: Welcome / About Section

- Scenario: User views the welcome/introduction section
  - Given the user scrolls to the welcome section
  - When the section renders
  - Then it displays "Discover Our Story", "Pato Place" / Plateful highlights (Romantic Restaurant, Delicious Food, Red Wines You Love) with images and "Learn More" links

### Feature: Menu Section

- Scenario: User views the interactive menu categories
  - Given the user scrolls to the menu section
  - When they view the category tabs (Lunch, Dinner, Happy Hour, Drink, Starters, Dessert)
  - Then clicking a category displays the respective menu items with prices and descriptions

### Feature: Events Section

- Scenario: User views upcoming restaurant events
  - Given the user scrolls to the events section
  - When the events carousel or list renders
  - Then it displays event cards with dates, times, descriptions, and "View Details" buttons

### Feature: Booking / Reservation Form

- Scenario: User submits a table reservation
  - Given the user navigates to the book table section
  - When they fill in Date, Time, People count, Name, Phone, and Email
  - And click "BOOK TABLE"
  - Then a confirmation message appears

### Feature: Customer Reviews

- Scenario: User views customer testimonials / reviews slider
  - Given the user scrolls to the reviews section
  - When the review carousel renders
  - Then it displays customer feedback quotes and author avatars

### Feature: Blog Section

- Scenario: User views latest blog posts
  - Given the user scrolls to the blog section
  - When the blog cards render
  - Then they display article images, titles, dates, and "Continue Reading" links

### Feature: Newsletter Signup

- Scenario: User subscribes to specials newsletter
  - Given the user scrolls to the newsletter section
  - When they enter their email address and click sign up
  - Then a success notification is shown

### Feature: Footer & Copyright

- Scenario: User views footer with opening times, contact info, and branding
  - Given the user scrolls to the bottom of the page
  - When the footer renders
  - Then it displays Contact Us, Opening Times, Latest Posts, Gallery thumbnail grid, and a link to Component Dock (`https://www.componentdock.com/`)

## Verification Checklist

- [ ] TypeScript compilation (`npx tsc --noEmit`)
- [ ] Lint check (`npm run lint`)
- [ ] 100% test coverage (`npm run test:coverage`)
- [ ] Build verification (`npm run build`)
- [ ] Footer contains Component Dock link (`https://www.componentdock.com/`)
- [ ] No reference to ColorLib in app source files
- [ ] `public/CNAME` contains `plateful.free.componentdock.com`
