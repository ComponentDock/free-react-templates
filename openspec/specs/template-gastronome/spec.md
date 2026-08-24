# Template: Gastronome (Restaurant)

## Purpose

Recreation of ColorLib "Pato" — a modern Italian restaurant website template.

- **Source slug:** `pato`
- **Source URL:** https://colorlib.com/wp/template/pato/
- **Preview URL:** https://preview.colorlib.com/theme/pato/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `gastronome` (app: `apps/gastronome`, package: `@free-react-templates/gastronome`)

## Design tokens

Extracted from preview live CSS (`css/main.css` + `css/util.css`):

| Token                 | Value                                             | Usage                                                     |
| --------------------- | ------------------------------------------------- | --------------------------------------------------------- |
| `brand` (accent)      | `#ec1d25`                                         | CTA hover, star ratings, avatar border, accent highlights |
| `surface-dark`        | `#222222`                                         | `.bg1` — footer bg, button dark bg                        |
| `surface-darker`      | `#111111`                                         | `.bg2` — footer bottom bar                                |
| `text-dark`           | `#222222`                                         | Body text, headings                                       |
| `text-gray`           | `#666666`                                         | Secondary/body text                                       |
| `text-placeholder`    | `#aaaaaa`                                         | Input placeholders                                        |
| `border-light`        | `#d9d9d9`                                         | Form input borders                                        |
| `border-lighter`      | `#e6e6e6`                                         | Dividers                                                  |
| `white`               | `#ffffff`                                         | Card backgrounds, btn1 bg                                 |
| Font: primary         | `Montserrat, sans-serif`                          | Headings, nav, body                                       |
| Font: accent          | `Courgette, cursive`                              | Decorative script accents                                 |
| Font: secondary       | `Poppins, sans-serif`                             | Secondary text                                            |
| Button radius         | `10px`                                            | All buttons, cards, image wrappers                        |
| Button CTA (btn1)     | white bg, black text, 10px radius                 | Hero CTA "Look Menu"                                      |
| Button dark (btn3)    | `#111111` bg, white text, hover → `#ec1d25`       | Reservation "Book Table", Sign-up                         |
| Button overlay (btn2) | transparent, positioned over image                | Menu category overlays                                    |
| Header gradient       | `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0))` | Top header overlay on hero                                |
| Avatar border         | `4px solid #ec1d25`                               | Review section circular avatars                           |
| Image hover           | `scale(1.1)` transition 0.6s                      | All image cards                                           |
| Pattern bg            | Repeating subtle pattern over `#222222`           | Welcome, Booking, Sign-up sections                        |

## Visual design notes (from screenshot + preview)

Dark, moody restaurant aesthetic with red (#ec1d25) as the accent color against dark
charcoal (#222222/#111111) backgrounds. Large hero image slider with centered text overlay.
Patterned backgrounds on alternating sections give a textured, premium feel. Cards have
10px border-radius. Circular customer avatars with red borders. Countdown timer on events.
Clean, modern typography with Montserrat throughout. Red accent used sparingly for hover
states and star ratings.

## Section structure (in order)

1. **Header/Navbar** — Fixed top nav with gradient overlay, logo left, nav links right
   (Home, Menu, Reservation, Gallery, About, Blog, Contact), hamburger for mobile sidebar
2. **Hero Slider** — Full-width Swiper/carousel, 3 slides with background images,
   centered text ("Welcome to" subtitle + "Gastronome" heading), CTA button ("View Menu")
3. **Welcome** — Two-column: left has subtitle "Italian Restaurant", heading "Welcome",
   description paragraph, "Our Story" link; right has rounded-corner image
4. **Intro** — Parallax header banner ("Discover" + "Gastronome"), then 3-column cards
   (image + title + description + "Learn More" link) for: Romantic Restaurant,
   Delicious Food, Red Wines You Love
5. **Our Menu** — Patterned background, "Discover" + "Our Menu" headings, asymmetric grid
   of food category images with overlay buttons (Lunch, Dinner, Happy Hour, Drink,
   Starters, Dessert). Large image + 2 small images layout
6. **Events Slider** — Full-width background image slider with event cards: image with
   date overlay, event title, description, countdown timer (Days/Hours/Minutes/Seconds),
   "View Details" link
7. **Booking/Reservation** — Patterned background, two-column: left has reservation form
   (Date, Time select, People select, Name, Phone, Email inputs, "Book Table" submit),
   right has rounded image
8. **Reviews/Testimonials** — "Customers Say" + "Review" headings, carousel of customer
   reviews with circular avatar (red border), quote text, 5-star rating (red), reviewer
   name + location
9. **Video** — Full-width parallax background with centered "Discover" + "Our Video"
   headings and circular play button
10. **Blog** — "Latest News" + "The Blog" headings, 3-column cards with image + date badge
    overlay + title + excerpt + "Continue Reading" link
11. **Sign-up/Newsletter** — Patterned background, centered email input + "Sign-up" button
12. **Footer** — Dark bg (#222222), 3 columns: Contact Us (address, phone, email) +
    Opening Times, Latest Posts (social-style feed), Gallery (image grid)
13. **Footer Bottom** — Darker bg (#111111), social icons left, copyright right,
    Component Dock link replacing "Get The Theme"

## Gherkin requirements

### Feature: Gastronome Restaurant Template

Scenario: Header navigation renders all links
Given the page loads
Then the header displays links for Home, Menu, Reservation, Gallery, About, Blog, Contact
And the logo is visible on the left

Scenario: Hero slider shows slides with CTA
Given the page loads
Then the hero section displays a carousel with background images
And each slide shows a subtitle and heading
And each slide has a "View Menu" CTA button

Scenario: Welcome section displays restaurant info
Given the page loads
When the Welcome section is visible
Then it shows an "Italian Restaurant" subtitle and "Welcome" heading
And a description paragraph is displayed
And an "Our Story" link is present
And a restaurant image appears in a rounded container

Scenario: Intro section shows three feature cards
Given the page loads
When the Intro section is visible
Then three cards are displayed in a row
And each card has an image, title, description, and "Learn More" link

Scenario: Menu section shows food categories
Given the page loads
When the Our Menu section is visible
Then food category images are displayed in an asymmetric grid
And each image has an overlay button (Lunch, Dinner, Happy Hour, Drink, Starters, Dessert)
And hovering an image triggers a zoom effect

Scenario: Events section displays countdown timer
Given the page loads
When the Events section is visible
Then an event card is shown with title, description, and image
And a countdown timer displays Days, Hours, Minutes, Seconds
And a "View Details" link is present

Scenario: Booking form renders all fields
Given the page loads
When the Booking section is visible
Then a reservation form is displayed with fields: Date, Time, People, Name, Phone, Email
And a "Book Table" submit button is present
And a restaurant image appears alongside the form

Scenario: Reviews carousel shows customer testimonials
Given the page loads
When the Reviews section is visible
Then a customer review card shows an avatar, quote, star rating, and reviewer name
And the avatar has a red (#ec1d25) circular border

Scenario: Video section has parallax and play button
Given the page loads
When the Video section is visible
Then a parallax background image is displayed
And a centered circular play button is present

Scenario: Blog section shows latest news cards
Given the page loads
When the Blog section is visible
Then three blog cards are displayed
And each card has an image with date overlay, title, excerpt, and "Continue Reading" link

Scenario: Sign-up form collects email
Given the page loads
When the Sign-up section is visible
Then an email input and "Sign-up" button are displayed on a patterned background

Scenario: Footer renders contact info and gallery
Given the page loads
When the footer is visible
Then Contact Us info (address, phone, email) is displayed
And Opening Times are shown
And Latest Posts section is present
And a Gallery image grid is displayed
And social media icons are visible in the footer bottom bar
And the footer bottom links to Component Dock

Scenario: All sections match visual design tokens
Given the page loads
Then the brand color #ec1d25 is used for accents and hover states
And dark backgrounds (#222222, #111111) are used for footer and dark sections
And buttons have 10px border-radius
And Montserrat font is used for headings and body
And pattern backgrounds appear on Welcome, Booking, and Sign-up sections

## Verification checklist

- [ ] Header: gradient overlay, logo, all nav links, mobile hamburger
- [ ] Hero: 3-slide carousel with images, centered text, CTA buttons
- [ ] Welcome: two-column layout, text left, image right, "Our Story" link
- [ ] Intro: parallax banner, 3 feature cards with images and links
- [ ] Menu: asymmetric grid, 6 category overlays, hover zoom
- [ ] Events: background image slider, countdown timer, event details
- [ ] Booking: form with 6 fields, submit button, side image
- [ ] Reviews: avatar carousel, star ratings, reviewer info
- [ ] Video: parallax bg, play button, centered headings
- [ ] Blog: 3 cards with date badges, titles, "Continue Reading" links
- [ ] Sign-up: email input + button on patterned background
- [ ] Footer: 3 columns, social icons, copyright
- [ ] Footer bottom: Component Dock link
- [ ] Design tokens: brand #ec1d25, dark bg #222222/#111111, Montserrat font, 10px radius
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` contains `gastronome.free.componentdock.com`
- [ ] `homepage` in package.json is `https://gastronome.free.componentdock.com`
