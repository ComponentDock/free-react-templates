# Template: Bookcraft (Book / Author Landing)

## Purpose

Recreation of ColorLib's **Booke** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page landing site for authors promoting a book.

- **ColorLib source:** https://colorlib.com/wp/template/booke/
- **Preview URL:** https://preview.colorlib.com/theme/booke/
- **New name:** `bookcraft` (apps/bookcraft, package `@free-react-templates/bookcraft`)
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, shared `packages/ui`

## Design tokens (extracted from preview)

| Token              | Value                               | Notes                                               |
| ------------------ | ----------------------------------- | --------------------------------------------------- |
| Brand / primary    | `#1C63FB`                           | Blue — buttons, active links, focus states          |
| Body font          | `"Roboto", sans-serif`              | Load via Google Fonts link in index.html            |
| Heading / serif    | `"Oswald", sans-serif`              | Used on `.heading` and `.serif` elements            |
| Heading color      | `#000000`                           | All h1–h6                                           |
| Body text color    | `gray` (#808080)                    | Default paragraph / muted text                      |
| Button radius      | `30px` (pill)                       | All `.btn` — `rounded-full` in Tailwind             |
| Button primary bg  | `#1C63FB`, text white               | Hover: transparent bg, blue border+text             |
| Button white bg    | `#ffffff`, 2px solid transparent    | Hover: transparent bg, white border+text            |
| Form input radius  | `30px` (pill)                       | `rounded-full`                                      |
| Form input bg      | `#f6f6f6`                           | Focus border: `#1C63FB`                             |
| Service card bg    | `#ffffff`                           | Hover: shadow `0 10px 30px -10px rgba(0,0,0,0.4)`   |
| Testimonial card   | `#ffffff` bg, `#000` text           | Avatar `rounded-full`                               |
| Footer bg          | `#333333`                           | Text `#8c8c8c`, links `#b3b3b3`, headings `#ffffff` |
| Newsletter section | Bootstrap `.bg-primary` → `#1C63FB` | White text + white CTA button                       |
| Section padding    | 4.5em mobile / 7em desktop          | `.site-section`                                     |
| Hero bg            | Dark (image-based)                  | White text overlay, "Buy This Book" CTA             |
| Sticky nav         | White bg on scroll, shadow          | Nav links become dark; active = primary             |

## Requirements

### Requirement: Hero section displays book headline and CTA

The template SHALL render a hero section with a dark background, the headline "Meet Your Next Book", a subtitle, and a "Buy This Book On Amazon" CTA button.

#### Scenario: Hero section renders correctly

- **WHEN** the user loads the Bookcraft homepage
- **THEN** a hero section is visible with id "home"
- **AND** the heading "Meet Your Next Book" is displayed in uppercase
- **AND** a descriptive subtitle paragraph is shown below the heading
- **AND** a "Buy This Book On Amazon" button is displayed
- **AND** a book cover image is shown below the CTA

### Requirement: Sticky navigation bar

The template SHALL render a sticky navigation bar with the "BookCraft" logo and links to Home, Features, About Author, Testimonial, and Contact sections.

#### Scenario: Navbar renders logo and links

- **WHEN** the page loads
- **THEN** a sticky header is displayed at the top
- **AND** the logo text "BookCraft" is visible
- **AND** navigation links for Home, Features, About Author, Testimonial, and Contact are present

#### Scenario: Mobile menu toggle

- **WHEN** the viewport is narrow (mobile)
- **THEN** a hamburger menu button is displayed
- **WHEN** the user clicks the hamburger button
- **THEN** the mobile menu opens and shows the navigation links
- **WHEN** the user clicks the close button
- **THEN** the mobile menu closes

#### Scenario: Mobile menu closes on link click

- **WHEN** the mobile menu is open
- **AND** the user clicks a navigation link
- **THEN** the mobile menu closes

### Requirement: Features section shows book feature cards

The template SHALL render a features section with a heading and 6 feature cards in a responsive grid.

#### Scenario: Features section renders correctly

- **WHEN** the user scrolls to the features section
- **THEN** the heading "Features Of This Book" is displayed
- **AND** 6 feature cards are shown: Hard Cover, Paper Back, E-Book, Big Text, Illustrated, Readable Text
- **AND** each card has an icon, title, and description

### Requirement: Screenshot carousel section

The template SHALL render a screenshot/carousel section with Prev/Next navigation controls.

#### Scenario: Carousel renders with navigation

- **WHEN** the user views the screenshot section
- **THEN** the heading "Book Screenshots" is displayed
- **AND** a carousel with Prev/Next arrow buttons is shown
- **AND** Prev/Next text buttons are also available
- **WHEN** the user clicks Next
- **THEN** the next image in the carousel is displayed
- **WHEN** the user clicks Prev
- **THEN** the previous image is displayed

#### Scenario: Carousel wraps around

- **WHEN** the user is on the last image and clicks Next
- **THEN** the carousel wraps to the first image

### Requirement: About Author section

The template SHALL render an About Author section with a split layout: author image on one side, bio text on the other.

#### Scenario: Author section renders correctly

- **WHEN** the user scrolls to the about section
- **THEN** the heading "Hello, I'm the Author" is displayed
- **AND** an author portrait image is shown
- **AND** the author name "Jane Smith" is displayed
- **AND** the author role "Book Author & Publisher" is shown
- **AND** bio paragraphs are displayed

### Requirement: Testimonials section

The template SHALL render a testimonials section with 3 reader testimonial cards.

#### Scenario: Testimonials render correctly

- **WHEN** the user scrolls to the testimonials section
- **THEN** the heading "Testimonials From Readers" is displayed
- **AND** 3 testimonial cards are shown
- **AND** each card has a quote, author name, and role

### Requirement: Newsletter subscription section

The template SHALL render a newsletter subscription section with email input and subscribe button on a blue background.

#### Scenario: Newsletter form renders

- **WHEN** the user scrolls to the newsletter section
- **THEN** the heading "Subscribe For New Updates" is displayed
- **AND** an email input field is shown
- **AND** a "Subscribe" button is displayed

#### Scenario: Newsletter form validates email

- **WHEN** the user enters an invalid email and clicks Subscribe
- **THEN** an error message "Please enter a valid email address" is shown

#### Scenario: Newsletter form submits successfully

- **WHEN** the user enters a valid email and clicks Subscribe
- **THEN** a success message "Thanks for subscribing" is shown

### Requirement: Footer with contact form and social links

The template SHALL render a dark footer with About Us, Navigation, and Quick Contact sections, plus social media links and a Component Dock attribution.

#### Scenario: Footer renders correctly

- **WHEN** the user scrolls to the footer
- **THEN** an "About Us" section with description text is shown
- **AND** a "Navigation" section with links is shown
- **AND** a "Quick Contact" form with name, email, and message fields is shown
- **AND** social media icon links for Facebook, Twitter, Instagram, and LinkedIn are present
- **AND** a "Component Dock" attribution link pointing to https://www.componentdock.com/ is displayed

#### Scenario: Footer contact form submits

- **WHEN** the user fills in name, email, and message and clicks "Send Message"
- **THEN** a success confirmation message is displayed

#### Scenario: Footer contact form validates

- **WHEN** the user clicks "Send Message" with empty fields
- **THEN** the form remains visible (no submission occurs)

### Requirement: App sets document title

The template SHALL set the browser document title on mount.

#### Scenario: Document title is set

- **WHEN** the page loads
- **THEN** the document title is "BookCraft — Author Book Landing"
