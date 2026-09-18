# Template: Placecraft (Directory / Listings)

## Purpose

Recreation of ColorLib's **Listed2** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page app.

- **Source:** https://colorlib.com/wp/template/listed2/
- **Preview:** https://preview.colorlib.com/theme/listed2/
- **Package:** `@free-react-templates/placecraft`
- **Deploy target:** `placecraft.free.componentdock.com`

A local business directory / listings template with a hero search bar,
category grid, listing cards, testimonials, blog posts, FAQ accordion, and
a newsletter CTA.

## Design tokens

Extracted from the live preview stylesheet (`css/style.css`):

| Token                | Value                        | Notes                                      |
|----------------------|------------------------------|--------------------------------------------|
| brand-primary        | `#7971ea`                    | Purple/violet — buttons, active states, links |
| text-color           | `#4d4d4d`                    | Body text                                  |
| heading-color        | `#000`                       | Headings                                   |
| footer-bg            | `#333333`                    | Dark footer background                     |
| footer-text          | `#737373`                    | Footer paragraph text                      |
| footer-link          | `#999999`                    | Footer links                               |
| light-section-bg     | `#f4f5f9` / `bg-light`      | Testimonials section background            |
| success-checkmark    | `#8bc34a`                    | Green checkmark icons in "Why Us" list     |
| border-color         | `#edf0f5`                    | Light borders, dividers                    |
| form-focus-border    | `#7971ea`                    | Input focus ring                           |
| hero-overlay         | `rgba(0,0,0,0.6)`           | Dark overlay on hero image                 |
| font-family          | Quicksand, sans-serif        | Loaded via Google Fonts (weights 300–700)  |
| button-radius        | `0`                          | Square/sharp corners on all buttons        |
| nav-pill-radius      | `30px`                       | Rounded pill for active/hover nav items    |
| nav-dropdown-border  | `#7971ea` (top)              | 2px solid top border on dropdown           |

## Section structure & Gherkin requirements

### 1. Navbar

Header with logo text ("Placecraft") on the left, horizontal nav links on the
right: Home, Listings, About (dropdown: The Company, The Leadership,
Philosophy, Careers), Blog, Contact. Active item gets a purple pill background.
Mobile: hamburger menu toggle.

```gherkin
Scenario: Navbar renders all navigation links
  Given the page loads
  Then the navbar displays "Placecraft" as the logo
  And the nav contains links: "Home", "Listings", "About", "Blog", "Contact"

Scenario: About link shows dropdown on hover
  Given the navbar is visible
  When the user hovers over "About"
  Then a dropdown appears with "The Company", "The Leadership", "Philosophy", "Careers"

Scenario: Active nav item has pill highlight
  Given the user is on the Home page
  Then the "Home" link has a purple pill background

Scenario: Mobile menu toggle is visible on small screens
  Given the viewport is below xl breakpoint
  Then a hamburger menu button is visible
  And clicking it opens the mobile nav drawer
```

### 2. Hero section

Full-width cover image with dark overlay. Centered content:
- Headline: "Find Nearby [typed-words]" (typed animation cycling categories)
- Subtitle: "Explore top-rated attractions, activities and more!"
- Search form row: What (text input), Location (text input with map icon),
  Category (dropdown: All Categories, Apartment, Restaurant, Eat & Drink,
  Events, Fitness, Others), Search button (primary, square).

```gherkin
Scenario: Hero displays headline and subtitle
  Given the page loads
  Then the hero section shows "Find Nearby" as the headline
  And a subtitle reads "Explore top-rated attractions, activities and more!"

Scenario: Search form has four fields
  Given the hero section is visible
  Then a text input with placeholder "What are you looking for?" is shown
  And a text input with placeholder "Location" is shown
  And a select dropdown with category options is shown
  And a "Search" submit button is shown

Scenario: Search form submit
  Given the search form is filled
  When the user clicks "Search"
  Then the form submission is triggered
```

### 3. Most Visited Places

Section heading "Most Visited Places" with subtitle. 3-column grid of listing
cards. Each card: image thumbnail, heart/bookmark icon overlay, category tag
badge, location title, address text.

```gherkin
Scenario: Listing cards render
  Given the Most Visited Places section is visible
  Then 3 listing cards are displayed in a grid

Scenario: Each listing card shows image and details
  Given a listing card
  Then it contains an image
  And a category badge (e.g. "Stores", "Restaurants", "Events")
  And a title link
  And an address line

Scenario: Listing card has bookmark icon
  Given a listing card
  Then a heart/bookmark icon is visible for bookmarking
```

### 4. Popular Categories

Section heading "Popular Categories" with subtitle. 6-column grid of category
cards. Each card: icon, uppercase label, item count number. Categories:
Appartments, Events, Fitness, Department Store, Restaurants, Other.

```gherkin
Scenario: Category cards render
  Given the Popular Categories section is visible
  Then 6 category cards are displayed

Scenario: Each category card shows icon, label, and count
  Given a category card
  Then it contains an icon
  And an uppercase caption label
  And a numeric count
```

### 5. Why Us

Two-column layout: left = image, right = heading "Why Us", two paragraphs of
text, and a bulleted checkmark list (green check icons) with 3 items.

```gherkin
Scenario: Why Us section renders split layout
  Given the Why Us section is visible
  Then an image is shown on the left
  And "Why Us" heading appears on the right
  And a checkmark list with 3 items is displayed

Scenario: Checkmarks are green
  Given the checkmark list
  Then each check icon is green (#8bc34a)
```

### 6. Testimonials

Light background section. Heading "Testimonials". Carousel/slider with
testimonial cards. Each: person photo (circular or rounded), name, blockquote
with double quotes.

```gherkin
Scenario: Testimonials section renders carousel
  Given the Testimonials section is visible
  Then a carousel of testimonial cards is shown

Scenario: Each testimonial card has photo, name, and quote
  Given a testimonial card
  Then it displays a person photo
  And a person name
  And a blockquote with quotation marks
```

### 7. Our Blog

Section heading "Our Blog" with subtitle "See Our Daily News & Updates".
2-column grid of blog post cards. Each: image, title link, meta line (author,
date, category), excerpt paragraph.

```gherkin
Scenario: Blog posts render
  Given the Our Blog section is visible
  Then 2 blog post cards are displayed

Scenario: Each blog card shows image, title, meta, and excerpt
  Given a blog card
  Then it contains an image
  And a title link
  And a meta line with author and date
  And a text excerpt
```

### 8. FAQ Accordion

Section heading "Frequently Ask Question" with subtitle. Centered column with
4 accordion items. Each: bordered rounded card with question link that expands
to show an answer paragraph.

```gherkin
Scenario: FAQ items render
  Given the FAQ section is visible
  Then 4 accordion items are displayed

Scenario: Clicking a question expands its answer
  Given the FAQ section
  When the user clicks a question
  Then the corresponding answer paragraph becomes visible

Scenario: Clicking another question collapses the previous
  Given one FAQ answer is open
  When the user clicks a different question
  Then the previous answer collapses
  And the new answer expands
```

### 9. CTA Banner

Full-width primary-colored (#7971ea) background. Centered text: heading "Let's
get started. Create your account", subtitle, and a white outlined "Sign Up"
button.

```gherkin
Scenario: CTA banner renders
  Given the CTA section is visible
  Then it has a purple (#7971ea) background
  And displays "Let's get started. Create your account"
  And a "Sign Up" button with white outline style
```

### 10. Footer

Dark background (#333333). 4-column layout: Quick Links, Products, Features,
Follow Us (social icons: Facebook, Twitter, Instagram, LinkedIn). Right side:
Newsletter subscription form (email input + Send button). Bottom: copyright
line with "Made with ❤️ by Component Dock" link to componentdock.com.

```gherkin
Scenario: Footer renders column links
  Given the footer is visible
  Then columns show "Quick Links", "Products", "Features", "Follow Us"
  And each column has a list of link items

Scenario: Footer has newsletter form
  Given the footer
  Then an email input with placeholder "Enter Email" is shown
  And a "Send" button is next to it

Scenario: Footer has Component Dock attribution
  Given the footer
  Then a link to "https://www.componentdock.com/" is present
  And it is labeled "Component Dock"
```

## Verification checklist

- [ ] All 10 sections render in correct order
- [ ] Navbar matches: logo text, 5 nav links, About dropdown with 4 items
- [ ] Hero: headline, subtitle, search form with 4 inputs (what, location, category select, search button)
- [ ] Most Visited Places: 3 listing cards with image, category badge, title, address
- [ ] Popular Categories: 6 category cards with icon, label, count
- [ ] Why Us: image + text + 3-item green checkmark list
- [ ] Testimonials: carousel with 4 testimonial cards
- [ ] Our Blog: 2 blog post cards with image, title, meta, excerpt
- [ ] FAQ: 4 accordion items, expand/collapse behavior
- [ ] CTA: purple background, heading, outlined Sign Up button
- [ ] Footer: 4 link columns, newsletter form, Component Dock link
- [ ] Brand color #7971ea used consistently (buttons, active states, links)
- [ ] Font Quicksand applied throughout
- [ ] Square button corners (border-radius: 0)
- [ ] Pill-shaped nav active items (border-radius: 30px)
- [ ] Dark footer (#333333) with correct text colors
- [ ] No ColorLib references in app code
- [ ] Responsive: mobile hamburger, stacked layouts on small screens
