# Template: Motovault (Car Rental)

## Purpose

Recreation of ColorLib "Carrentals" as a React 19 + Vite + Tailwind 4 + TypeScript
template. A single-page car rental landing site with a hero booking form, step-by-step
process, car listings, features, testimonials, and CTA banner.

- **Source**: https://colorlib.com/wp/template/carrentals/
- **Preview**: https://preview.colorlib.com/theme/carrentals/
- **Package**: `@free-react-templates/motovault`
- **Deploy target**: `motovault.free.componentdock.com`

## Design Tokens

Extracted from live preview CSS (`css/style.css`) on 2026-09-10.

| Token              | Value                                  | Notes                                         |
| ------------------ | -------------------------------------- | --------------------------------------------- |
| Primary brand      | `#0779e4` (blue)                       | Buttons, step numbers, accent, CTA bg         |
| Font family        | `"Roboto", sans-serif`                 | Via Google Fonts `<link>`                      |
| Card border-radius | `7px`                                  | Listings, trip form, testimonials              |
| Card shadow        | `0 15px 30px 0 rgba(0,0,0,0.1)`       | Listing cards, testimonial cards, trip form    |
| Step number font   | `100px, weight 900, color #0779e4`     | Large outlined step numbers                   |
| Listing card       | `background: #fff, padding: 20px`      | White cards on `#f8f9fa` light section bg      |
| Service icon       | `90x90px, white bg, 1px solid #e9ecef` | Square icons with light border                 |
| Testimonial accent | `border-bottom: 4px solid #0779e4`     | Blue bottom border on testimonial cards       |
| CTA banner         | `background: #0779e4, white text`      | Full-width blue CTA section                    |
| Hero               | `height: 100vh, background-size: cover`| Full-viewport hero with background image       |
| Trip form          | `background: #fff, border-radius: 7px, padding: 40px, shadow` | Overlapping form on hero |
| Section light bg   | `#f8f9fa`                              | `.bg-light` sections for listings + testimonials |
| Footer text        | `color: #000`                          | Dark text on white footer background           |
| Footer links       | `color: rgba(0,0,0,0.5)`              | Muted gray links                              |

## Section Order (from preview DOM)

1. **Navbar** — Logo "Motovault", nav links: Home, Listing, Testimonials, Blog, About, Contact. Sticky top, right-aligned nav, mobile hamburger toggle.
2. **Hero** — Full-viewport background image. Heading: "Rent a car is within your finger tips." Overlay trip booking form: car type select, pick-up date, drop-off date, "Search Now" primary button.
3. **How It Works** — Section heading "How it works?" + subtitle. 3 steps in a row: (01. Select a car, 02. Fill up form, 03. Payment) with large faded step numbers behind the text. Below: "Video how it works" play link.
4. **Promo Feature** — Split layout (image right, text left). Heading: "You can easily avail our promo for renting a car." Body text + "Meet them now" primary button. Feature illustration image.
5. **Car Listings** — Section heading "Car Listings" on `#f8f9fa` background. 3-column grid, 6 car cards. Each card: car image, car name, price per day (blue accent), specs row (luggage, doors, passengers), description text, "Rent Now" primary button.
6. **Features** — Section heading "Features". 3-column grid, 6 service cards. Each: icon in 90x90px bordered square, title, description, "Learn more" link. Dark card style with white text.
7. **Testimonials** — Section heading "Testimonials" on `#f8f9fa` background. 3-column grid, 3 testimonial cards. Each: blockquote text, author avatar (50px circle), author name, role. Blue bottom border accent.
8. **CTA Banner** — Full-width `#0779e4` blue background. Heading "What are you waiting for?" + description + "Rent a car now" white button.
9. **Footer** — White background. Left column: "About Us" text + social icons (Facebook, Instagram, Twitter, LinkedIn). Right 4 columns: Quick Links, Resources, Support, Company. Bottom: copyright line with heart icon.

## Gherkin Requirements

### Scenario: Navbar renders with logo and navigation links
```gherkin
Given the user visits the Motovault homepage
Then a navbar is visible at the top
And the navbar contains the logo text "Motovault"
And the navbar contains navigation links: Home, Listing, Testimonials, Blog, About, Contact
And the navbar is responsive with a mobile hamburger menu
```

### Scenario: Hero section displays booking form
```gherkin
Given the user is on the homepage
Then a hero section is visible with a background image
And the hero heading reads "Rent a car is within your finger tips"
And a trip booking form is displayed over the hero
And the form contains a car type dropdown with options
And the form contains a pick-up date input
And the form contains a drop-off date input
And the form contains a "Search Now" primary button
```

### Scenario: How It Works section shows three steps
```gherkin
Given the user scrolls to the How It Works section
Then the section heading reads "How it works?"
And a subtitle reads "Easy steps to get you started"
And three steps are displayed in a row
And step 1 is titled "Select a car"
And step 2 is titled "Fill up form"
And step 3 is titled "Payment"
And each step has a large faded step number
And a "Video how it works" play link is shown below
```

### Scenario: Promo Feature section with split layout
```gherkin
Given the user scrolls to the promo feature section
Then the heading reads "You can easily avail our promo for renting a car"
And a feature illustration image is displayed
And body paragraph text is shown
And a "Meet them now" primary button is visible
```

### Scenario: Car Listings section shows six car cards
```gherkin
Given the user scrolls to the Car Listings section
Then the section heading reads "Car Listings"
And six car listing cards are displayed in a 3-column grid
And each card shows a car image
And each card shows the car name
And each card shows the rental price per day
And each card shows luggage, doors, and passenger specs
And each card shows a description paragraph
And each card has a "Rent Now" primary button
```

### Scenario: Features section shows six feature cards
```gherkin
Given the user scrolls to the Features section
Then the section heading reads "Features"
And six feature cards are displayed in a 3-column grid
And each feature card shows an icon in a bordered square
And each feature card shows a title and description
And each feature card has a "Learn more" link
```

### Scenario: Testimonials section shows three testimonial cards
```gherkin
Given the user scrolls to the Testimonials section
Then the section heading reads "Testimonials"
And three testimonial cards are displayed in a 3-column grid
And each card shows a blockquote with testimonial text
And each card shows the author avatar, name, and role
And each card has a blue bottom border accent
```

### Scenario: CTA Banner section with call to action
```gherkin
Given the user scrolls to the CTA Banner section
Then a full-width blue background banner is displayed
And the heading reads "What are you waiting for?"
And a description paragraph is shown
And a "Rent a car now" white button is visible
```

### Scenario: Footer with about and link columns
```gherkin
Given the user scrolls to the footer
Then the footer contains an "About Us" section with description text
And social media icon links are shown (Facebook, Instagram, Twitter, LinkedIn)
And four link columns are displayed: Quick Links, Resources, Support, Company
And each column contains a list of links
And a copyright line with a heart icon is shown at the bottom
And the footer links to Component Dock
```

### Scenario: Responsive layout across viewports
```gherkin
Given the user views the page on mobile (< 768px)
Then the navbar collapses to a hamburger menu
And the trip form stacks vertically
And the car listings display in a single column
And the feature cards display in a single column
And the testimonial cards display in a single column
And the footer columns stack vertically
```

## Verification Checklist

- [ ] All 9 sections render in the correct order
- [ ] Hero is full-viewport height with background image
- [ ] Trip form has 4 fields (type select, pick-up, drop-off, submit)
- [ ] How It Works has 3 numbered steps + video link
- [ ] Promo section has split layout (image + text)
- [ ] Car Listings: 6 cards with image, name, price, specs, CTA
- [ ] Features: 6 service cards with icon, title, description, link
- [ ] Testimonials: 3 cards with quote, avatar, name, role
- [ ] CTA banner: blue bg, heading, description, white button
- [ ] Footer: About, 4 link columns, social icons, copyright, Component Dock link
- [ ] All design tokens match: #0779e4 primary, Roboto font, 7px radius, card shadows
- [ ] Mobile responsive: hamburger nav, stacked layouts
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images via picsum.photos/seed/motovault-<n>
- [ ] `public/CNAME` contains `motovault.free.componentdock.com`
- [ ] `package.json` homepage is `https://motovault.free.componentdock.com`
