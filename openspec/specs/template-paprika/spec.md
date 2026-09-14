# Template: Paprika

## Purpose

Recreation of ColorLib's **RedCayenne** — a premium restaurant landing page with top bar, navbar, hero slider, services grid, table booking form, menu showcase, chef profiles, events section, blog, and footer.

- **Source:** RedCayenne — https://colorlib.com/wp/template/redcayenne/
- **Preview:** https://preview.colorlib.com/theme/redcayenne/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Restaurant

## Design Tokens

| Token                 | Value                        | Source                                              |
| --------------------- | ---------------------------- | --------------------------------------------------- |
| Font family (body)    | `"Open Sans", sans-serif`    | Google Fonts link                                   |
| Font family (heading) | `"Cantata One", serif`       | Google Fonts link                                   |
| Font family (cursive) | `"Great Vibes", cursive`     | Google Fonts link                                   |
| Brand/accent color    | `#b10400` (deep cayenne red) | CSS `s_black_title h3`, section accents             |
| Dark text             | `#333333`                    | CSS heading color                                   |
| White text            | `#ffffff`                    | Used on dark section backgrounds                    |
| Top bar background    | `#1a1a1a`                    | Dark header bar                                     |
| Section alt bg        | `#f8f9fa`                    | Light alternating sections                          |
| Dark section bg       | `#222222`                    | Booking table, events sections                      |
| Button primary bg     | `#b10400`                    | CTA buttons                                         |
| Button hover bg       | `#8b0300`                    | Button hover state                                  |
| Navbar bg             | `#ffffff`                    | White sticky navbar                                 |
| Heading font style    | uppercase, Cantata One       | Section headings                                    |
| Cursive font style    | Great Vibes                  | Section sub-headings (e.g. "Book a", "Meet", "Our") |

## Requirements

### Requirement: TopBar renders contact info and action buttons

The application SHALL display a dark top bar with phone, email, and booking action buttons.

#### Scenario: Contact info and buttons render

- **WHEN** the page loads
- **THEN** a phone number "+1 (168) 314 5016" is displayed
- **AND** an email "info@paprika.com" is displayed
- **AND** a "Book a Table" button linking to #booking is present
- **AND** a "Book an Event" button linking to #events is present

### Requirement: Navbar displays brand and navigation links

The application SHALL display a sticky white navbar with the brand name "Paprika" and navigation links.

#### Scenario: Brand and links render

- **WHEN** the page loads
- **THEN** the brand text "Paprika" is displayed
- **AND** navigation links for Home, About, Menu, Gallery, Events, News, and Contact are visible
- **AND** a shopping cart button is present

#### Scenario: Mobile menu toggles

- **WHEN** the user clicks the hamburger menu button
- **THEN** the mobile navigation menu is toggled
- **AND** clicking a mobile nav link closes the menu

### Requirement: Hero section displays welcome message and CTA

The application SHALL display a full-width hero with background image and call-to-action.

#### Scenario: Hero content renders

- **WHEN** the page loads
- **THEN** "Welcome To Our" text is displayed
- **AND** a "Paprika" heading is shown
- **AND** "A Premium Restaurant Theme" subtitle is visible
- **AND** a "View Menu" button linking to #menu is present

### Requirement: Services section shows four items

The application SHALL display a 4-column services grid with food/drink categories.

#### Scenario: Four services render

- **WHEN** the page loads
- **THEN** "Pizzas", "Coffee", "Burgers", and "Drinks" service items are displayed
- **AND** each item has a descriptive text

### Requirement: BookTable form with date, time, party size

The application SHALL display a reservation form on a dark background.

#### Scenario: Form fields render

- **WHEN** the page loads
- **THEN** a date input is visible
- **AND** a time input is visible
- **AND** a party size selector is present
- **AND** a "Book My Table" submit button is displayed

#### Scenario: Form submission is prevented

- **WHEN** the user submits the form
- **THEN** the default form submission is prevented (no page navigation)

### Requirement: Menu section shows food items with prices

The application SHALL display a grid of food menu items with images, names, prices, and ratings.

#### Scenario: Menu items render

- **WHEN** the page loads
- **THEN** at least 4 menu items are displayed (Grilled Chicken, Lasagne Pasta, Pepperoni Pizza, Caesar Salad)
- **AND** each item shows a price
- **AND** each item has an "Add to Cart" button

### Requirement: Chefs section shows team members

The application SHALL display chef cards with photos, names, and roles.

#### Scenario: Chef cards render

- **WHEN** the page loads
- **THEN** at least 4 chef cards are displayed (Suzanne Goin, Thomas Keller, Paul Bocuse, Giada De Laurentiis)
- **AND** each chef has a name and role (e.g. "Head Chef", "Executive Chef")

### Requirement: Events section shows upcoming event

The application SHALL display a split-layout event section with image and details.

#### Scenario: Event content renders

- **WHEN** the page loads
- **THEN** an event heading "Next Event" is displayed
- **AND** an event title and description are visible
- **AND** a "View Details" link is present

### Requirement: Blog section shows recent posts

The application SHALL display a 3-column grid of blog post cards.

#### Scenario: Blog posts render

- **WHEN** the page loads
- **THEN** at least 3 blog cards are displayed
- **AND** each card has a title and date

### Requirement: Footer links to Component Dock

The application SHALL display a footer with about, contact, posts, gallery, and a Component Dock link.

#### Scenario: Footer content renders

- **WHEN** the page loads
- **THEN** an "About Paprika" section is displayed
- **AND** contact information is visible
- **AND** a link to "https://www.componentdock.com/" with "Component Dock" text is present
- **AND** footer navigation links (Home, About, Menu, Gallery, Events, News, Contact) are displayed
