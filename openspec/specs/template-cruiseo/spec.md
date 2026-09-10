# Template: Cruiseo (Car Rental Landing Page)

## Purpose

- **Recreation of ColorLib source**: Car Rentals (`https://colorlib.com/wp/template/carrentals/`)
- **New Name**: `cruiseo` (App directory: `apps/cruiseo`, Package: `@free-react-templates/cruiseo`)
- **Category**: Business / Car Rental
- **Description**: A premium car rental landing page with a full-viewport hero section, booking form, how-it-works steps, promo/about section, car listings grid, features grid, testimonials, CTA banner, and a multi-column footer.
- **Preview URL**: https://preview.colorlib.com/theme/carrentals/ (verified HTTP 200)
- **Stack**: Bootstrap-based original; React 19 + Tailwind CSS 4 + TypeScript recreation. Replace Bootstrap grid/utilities with Tailwind. Replace icomoon + flaticon icon fonts with `lucide-react`.

## Section Structure (top to bottom)

1. **Navbar** — Fixed top, dark background. Logo ("CarRental" → "Cruiseo") on left; nav links on right: Home, About, Cars, Services, Team, Blog, Contact, Pages. Mobile hamburger menu.
2. **Hero** — Full-viewport height (`100vh`, min 570px), background image with dark overlay. Left: headline "Rent a car is within your finger tips" + booking form (car type dropdown, pickup date, dropoff date, search button).
3. **How It Works** — 3-column numbered steps (01. Select a car, 02. Fill up form, 03. Payment) + "Video how it works" play button link.
4. **About / Promo** — Split layout: left image, right text ("You can easily avail our promo for renting a car") + "Meet them now" CTA button.
5. **Car Listings** — 3×2 grid of car cards. Each card: car image, name, price ($389.00/day), specs (luggage, doors, passengers), description, "Rent Now" button. 6 cars: Mitsubishi Pajero, Nissan Moco, Honda Fitta, Skoda Laura, Mazda LaPuta, Buick LaCrosse.
6. **Features** — 3×2 grid of feature cards with icons + title + description + "Learn more" link. Icons: home, gear, clock, shield, video library, key.
7. **Testimonials** — 3-column cards with quotes + author photo + name + title. (Mike Fisher/Owner, Jean Stanley/Traveler, Katie Rose/Customer).
8. **CTA Banner** — Full-width primary color background. Left: "What are you waiting for?" + subtitle. Right: "Rent a car now" white button.
9. **Footer** — Dark background. About Us blurb + social icons (Facebook, Instagram, Twitter, LinkedIn). 4 link columns: Quick Links, Resources, Support, Company. Copyright line.

## Design Tokens

### Screenshot tokens (original design reference)

- **Primary accent**: `#F9A826` (warm golden yellow) — buttons, logo icon
- **Header/Hero background**: `#1A1A1A` (near-black)
- **Hero overlay**: `#121212` at ~70% opacity
- **Body text**: `#222222`
- **Light gray text**: `#999999`
- **Card background**: `#F7F7F7` (off-white)
- **Page background**: `#FFFFFF`
- **Font (headings)**: Montserrat (Bold, geometric sans-serif), uppercase hero text
- **Font (body)**: Open Sans / Inter (clean readable sans-serif)
- **Buttons**: flat, solid golden yellow `#F9A826`, white text, soft rounded corners, uppercase
- **Hero**: dark overlay on luxury car image, split layout (text left, form right)

### Live preview tokens (from `css/style.css`)

- **Primary button color**: `#0779e4` (Bootstrap blue — note: the preview uses blue instead of the golden yellow from the screenshot)
- **Font family**: `"Roboto"` (via Google Fonts, weights 400, 700, 900)
- **Section backgrounds**: white (`.site-section`), `#f6f5f5` / `#f8f9fa` (`.bg-light`)
- **CTA section**: `.bg-primary` background
- **Text colors**: `#000` (headings), `#364d59` (body), `#868e96` (muted)
- **Buttons**: Bootstrap `.btn-primary` with `padding: 12px 25px`
- **Footer**: dark background
- **Grid**: Bootstrap 12-column responsive grid

### Recreation design decisions

For the recreation, use the **screenshot tokens** (golden yellow `#F9A826` theme) since they represent the original design intent. Map Bootstrap classes to Tailwind utilities. Use Roboto via Google Fonts `<link>` (400, 500, 700). Use `lucide-react` icons (Car, Settings, Clock, Shield, Video, Key, ChevronRight, Play, Calendar, MapPin, User, Mail, Phone, Facebook, Instagram, Twitter, Linkedin).

## Requirements

### Requirement: Fixed navigation bar

Users SHALL see a fixed dark navigation bar with logo and menu links.

#### Scenario: Desktop navigation displays

- **WHEN** the page loads on a desktop viewport (≥992px)
- **THEN** a dark (`#1A1A1A`) fixed navbar is visible with the logo "Cruiseo" on the left
- **AND** navigation links (Home, About, Cars, Services, Team, Blog, Contact) are displayed on the right

#### Scenario: Mobile hamburger menu

- **WHEN** the page loads on a mobile viewport (<992px)
- **THEN** a hamburger menu icon is visible that toggles a mobile navigation drawer

### Requirement: Hero section with booking form

Users SHALL see a full-viewport hero with a headline and booking form.

#### Scenario: Hero renders with background and text

- **WHEN** the hero section is visible
- **THEN** a dark background image covers the full viewport height (min 570px)
- **AND** the headline "Rent a car is within your finger tips" is displayed in large bold text

#### Scenario: Booking form displays

- **WHEN** the hero section is visible
- **THEN** a form with car type dropdown (Ferrari, Toyota, Ford, Lamborghini), pickup date input, dropoff date input, and "Search Now" button is shown

### Requirement: How It Works section

Users SHALL see a 3-step process explanation.

#### Scenario: Steps display

- **WHEN** the How It Works section scrolls into view
- **THEN** 3 numbered steps are shown: 01. Select a car, 02. Fill up form, 03. Payment
- **AND** each step has a number, heading, and description paragraph

#### Scenario: Video link

- **WHEN** the How It Works section is visible
- **THEN** a "Video how it works" link with a play icon is displayed centered below the steps

### Requirement: About / Promo section

Users SHALL see a split layout with an image and promotional text.

#### Scenario: Promo content

- **WHEN** the About section is visible
- **THEN** the text "You can easily avail our promo for renting a car" is displayed
- **AND** a "Meet them now" CTA button is shown

### Requirement: Car Listings grid

Users SHALL see a 3×2 grid of available cars with details.

#### Scenario: Car cards display

- **WHEN** the Car Listings section is visible
- **THEN** 6 car cards are shown in a 3-column grid: Mitsubishi Pajero, Nissan Moco, Honda Fitta, Skoda Laura, Mazda LaPuta, Buick LaCrosse

#### Scenario: Car card contents

- **WHEN** a car card is rendered
- **THEN** it shows a car image, car name, price ($389.00/day), specs (Luggage: 8, Doors: 4, Passengers: 4), a description, and a "Rent Now" button

### Requirement: Features grid

Users SHALL see a 3×2 grid of feature/service cards.

#### Scenario: Features display

- **WHEN** the Features section is visible
- **THEN** 6 feature cards are shown in a 3-column grid
- **AND** each card has an icon, heading ("Lorem ipsum dolor"), description, and "Learn more" link

### Requirement: Testimonials section

Users SHALL see customer testimonials.

#### Scenario: Testimonials display

- **WHEN** the Testimonials section is visible
- **THEN** 3 testimonial cards are shown in a 3-column layout
- **AND** each card has a blockquote, author photo, author name, and role/owner

### Requirement: CTA banner

Users SHALL see a full-width call-to-action banner.

#### Scenario: CTA content

- **WHEN** the CTA section is visible
- **THEN** a primary-color background banner displays "What are you waiting for?"
- **AND** a white "Rent a car now" button is shown on the right

### Requirement: Footer

Users SHALL see a multi-column footer with social links and navigation.

#### Scenario: Footer layout

- **WHEN** the footer is visible
- **THEN** it contains an "About Us" blurb with social icons (Facebook, Instagram, Twitter, LinkedIn)
- **AND** 4 link columns: Quick Links, Resources, Support, Company
- **AND** a copyright line at the bottom

#### Scenario: Footer contains Component Dock link

- **WHEN** the page is rendered
- **THEN** the footer contains a link to https://www.componentdock.com/ labeled "Component Dock"

## Verification Checklist

- [ ] Navbar: fixed, dark background, logo + 8 nav links, hamburger on mobile
- [ ] Hero: full viewport height, dark overlay on image, headline, booking form (dropdown + 2 date inputs + search button)
- [ ] How It Works: 3 numbered steps + video play link
- [ ] About/Promo: split layout image + text + CTA button
- [ ] Car Listings: 3×2 grid with image, name, price, specs, description, "Rent Now" button for all 6 cars
- [ ] Features: 3×2 grid with icon + heading + description + "Learn more" link
- [ ] Testimonials: 3 cards with quote + author photo + name + role
- [ ] CTA banner: primary color bg, white text, white button
- [ ] Footer: About Us + social icons, 4 link columns, copyright + Component Dock link
- [ ] Responsive: mobile hamburger menu, stacked layouts, responsive grid
- [ ] Design tokens: golden yellow (#F9A826) buttons, dark header (#1A1A1A), Roboto font
- [ ] No ColorLib references in app code
