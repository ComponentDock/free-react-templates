# Template: GetawayPad (Vacation Rental / Apartment)

## Purpose

Recreation of ColorLib's **Vacation Rental** apartment booking template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/vacation-rental/
- **Preview (analyzed):** https://preview.colorlib.com/theme/vacationrental/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/vacationrental-free-template.jpg
- **Package:** `@free-react-templates/getawaypad`
- **Surge target:** `https://getawaypad.free.componentdock.com`

## Design Tokens

Extracted from the preview's `css/style.css`:

| Token | Value | Usage |
|-------|-------|-------|
| Brand / primary | `#fd7792` | Buttons, star ratings, price text, icon circles |
| Background light | `#f3f4f7` | Alternating section backgrounds (`.bg-light`) |
| Service icon circle | `#a3cb4c` | Green circle on service cards |
| Text dark | `#000000` | Headings, strong text |
| Text body | `#666666` | Paragraph copy, secondary text |
| Font family | `Poppins, Arial, sans-serif` | Global body + headings |
| Button radius | `4px` | All `.btn` elements |
| Button style | uppercase, letter-spacing 3px, font-size 11px | All CTA buttons |
| Card shadow | `0px 10px 27px -9px rgba(0,0,0,0.11)` | Service cards, room cards |
| Card border-radius | `5px` | Service card `.services-wrap` |
| Hero overlay | semi-transparent dark on parallax bg | Hero section |

## Section Structure (order from preview DOM)

1. **Top Bar** — phone number + email + social media icons (Facebook, Twitter, Instagram, Dribbble)
2. **Navbar** — dark background, logo "GetawayPad" (word "Pad" highlighted in brand color), nav links: Home, About, Services, Apartment Room, Blog, Contact, hamburger for mobile
3. **Hero** — full-viewport-height with parallax background image, dark overlay, centered-left text: subheading "Welcome to GetawayPad", heading "Rent an apartment for your vacation", two buttons: "Learn more" (primary pink) + "Contact us" (white outline)
4. **Book Your Apartment** — form section with fields: Full Name, Check-In (date), Check-Out (date), Room Type (select), Guests (select), Phone number, Time, "Book Apartment Now" submit button
5. **Services** — 3-column service cards with image header, title, paragraph, and "Read more" button (Map Direction, Accommodation Services, Great Experience)
6. **Apartment Rooms** — 2×2 grid of room cards, each with: background image, 5-star rating, room name (Suite Room, Standard Room, Family Room, Deluxe Room), amenity list (Max, Size, View, Bed), "View Room Details" link
7. **Testimonials** — "Happy Clients & Feedbacks" heading, carousel of testimonial items with: user circular avatar, quote icon, paragraph, author name + position
8. **CTA Intro** — full-width parallax background with overlay (call-to-action banner)
9. **Blog** — 3-column blog entries, each with: background image, title, date + author + comment count, short paragraph
10. **Footer** — 4-column: Logo + description, Services list, Tag cloud, Subscribe form (email + submit) + Social links (Twitter, Facebook, Instagram), copyright + Terms/Privacy links

## Gherkin Requirements

### Feature: Top Bar

Scenario: Contact info displays
  Given the user is on any page
  Then a top bar shows phone number and email address
  And social media icons (Facebook, Twitter, Instagram, Dribbble) are visible

### Feature: Navbar

Scenario: Logo and navigation display
  Given the user is on any page
  Then the logo "GetawayPad" is visible (with "Pad" in brand color)
  And navigation links "Home", "About", "Services", "Apartment Room", "Blog", "Contact" are visible

Scenario: Mobile hamburger menu
  Given the viewport is mobile width (< 768px)
  Then a hamburger menu icon is visible
  And clicking it opens a slide-in mobile menu with all nav links

### Feature: Hero Section

Scenario: Hero displays with booking CTA
  Given the user lands on the page
  Then a full-viewport-height hero with parallax background is displayed
  And the subheading "Welcome to GetawayPad" is shown
  And the heading "Rent an apartment for your vacation" is displayed
  And two buttons appear: "Learn more" (primary) and "Contact us" (white outline)

### Feature: Book Your Apartment

Scenario: Booking form displays
  Given the user scrolls to the booking section
  Then a form with "Book your apartment" heading is displayed
  And fields for Full Name, Check-In, Check-Out, Room Type, Guests, Phone, Time are visible
  And a "Book Apartment Now" submit button is present

### Feature: Services Section

Scenario: Three service cards display
  Given the user scrolls past the booking form
  Then three service cards appear in a row
  And each has an image, title ("Map Direction", "Accommodation Services", "Great Experience"), paragraph, and "Read more" button

### Feature: Apartment Rooms

Scenario: Four room cards display
  Given the user scrolls to the rooms section
  Then an "Apartment Room" heading is shown
  And four room cards are displayed in a 2×2 grid
  And each card shows 5-star rating, room name, amenity list, and "View Room Details" link

Scenario: Room cards alternate layout
  Given the rooms section is visible
  Then the first row shows image on left, text on right
  And the second row shows text on left, image on right

### Feature: Testimonials

Scenario: Testimonial carousel displays
  Given the user scrolls to testimonials
  Then "Happy Clients & Feedbacks" heading is shown
  And a carousel of testimonials appears
  And each has a circular avatar, quote icon, paragraph text, author name, and position

### Feature: CTA Intro Banner

Scenario: CTA banner displays
  Given the user scrolls past testimonials
  Then a full-width parallax banner with overlay is shown

### Feature: Blog Section

Scenario: Three blog entries display
  Given the user scrolls to the blog section
  Then three blog cards appear in a row
  And each has a background image, title, date, author, comment count, and paragraph

### Feature: Footer

Scenario: Footer layout
  Given the user scrolls to the footer
  Then four columns are shown: Logo + description, Services list, Tag cloud, Subscribe form
  And social media links (Twitter, Facebook, Instagram) are visible
  And a copyright line with Terms and Privacy links is at the bottom

Scenario: Newsletter subscribe form
  Given the footer is visible
  Then an email input with placeholder "Enter email address" is displayed
  And a paper-plane submit button is present

Scenario: Footer links to Component Dock
  Given the footer is visible
  Then a link to https://www.componentdock.com/ is present with text "Component Dock"

## Verification Checklist

- [ ] All sections present in correct order matching preview DOM
- [ ] Brand color `#fd7792` applied to buttons, stars, price, icon circles
- [ ] Font Poppins applied globally
- [ ] Buttons have 4px border-radius, uppercase, letter-spacing 3px
- [ ] Hero is full viewport height with parallax bg and dark overlay
- [ ] Booking form has 7 fields + submit button
- [ ] Services section has 3 cards with image + title + CTA
- [ ] Room cards in 2×2 grid with alternating image/text layout
- [ ] Testimonials have circular avatars, quote icons, carousel
- [ ] CTA banner has parallax background
- [ ] Blog has 3 cards with meta info
- [ ] Footer is 4-column with subscribe form and social links
- [ ] Footer links to Component Dock
- [ ] No references to ColorLib in app code
- [ ] All images use picsum.photos placeholders (deterministic seeds)
- [ ] Mobile responsive: hamburger menu, stacked columns
- [ ] 100% test coverage
