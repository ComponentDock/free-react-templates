# Template: Excavate (Mining / Industrial)

## Purpose

Recreation of ColorLib **Unearth** template.
- Preview URL: https://preview.colorlib.com/theme/unearth/
- ColorLib page: https://colorlib.com/wp/template/unearth/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/unearth-free-template.jpg
- Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript
- Category: Mining / Industrial / Corporate

## Design tokens

Extracted from `https://preview.colorlib.com/theme/unearth/css/style.css` and inline HTML.

### Colors

| Token              | Value     | Usage                                      |
| ------------------ | --------- | ------------------------------------------ |
| `primary`          | `#ff8b00` | Brand orange — CTA buttons, links, accents |
| `secondary`        | `#7a5e86` | Muted purple — secondary accents           |
| `success`          | `#71bc42` | Green — used sparingly                     |
| `black`            | `#000000` | Headings, text on light backgrounds        |
| `white`            | `#ffffff` | Light backgrounds, overlay text            |
| `dark-bg`          | `#000000` | About section dark background              |
| `light-bg`         | `#f8f9fa` | Light section backgrounds (`bg-light`)     |
| `text-muted`       | `#939393` | Body text, secondary text                  |
| `text-light-muted` | `#b8b8b8` | Lighter muted text                         |
| `border`           | `#ced4da` | Borders on form inputs, dividers           |

### Typography

| Element       | Font family                          | Weight | Notes                             |
| ------------- | ------------------------------------ | ------ | --------------------------------- |
| Headings      | Oswald                               | 400/700| Condensed sans-serif, uppercase   |
| Body text     | Rubik                                | 300/400/700 | Geometric sans-serif, clean    |
| Icons         | IcoMoon                              | —      | Custom icon font                  |

### Button styles

- `.btn-outline-white`: white border, white text, transparent bg; rounded corners
- `.btn-primary`: `#ff8b00` bg, white text; no border-radius (square/rectangular buttons)
- `.btn.border-w-2`: 2px border, used on team social icons
- `.rounded`: slightly rounded corners on team member social buttons

### Section backgrounds

| Section         | Background                          |
| --------------- | ----------------------------------- |
| Hero (carousel) | Full-width image overlay            |
| Services        | White (default)                     |
| Feature blocks  | Light (`#f8f9fa`)                   |
| About           | Dark (`#000000`) with overlay image |
| Team            | White                               |
| Pricing         | Light (`#f8f9fa`)                   |
| FAQ             | White                               |
| Press           | White                               |
| Testimonials    | Light (`#f8f9fa`)                   |
| Blog            | White                               |
| Contact         | Light (`#f8f9fa`)                   |
| Footer          | Dark (black)                        |

## Section structure (order from preview DOM)

1. **Navbar** — sticky top nav: logo + links (Home, About Us, Services, Team, Pricing, Contact) + mobile hamburger
2. **Hero carousel** — owl-carousel with 2 slides, full-width background images, overlay, heading + subtext + "Get in touch" CTA button
3. **Services** — 2-column layout with background images (Land & Property, Surface Mining), heading + text
4. **Feature grid** — light bg, 6 items in 2 rows of 3: icon + title + description (Surface Mining, Gold Nuggets, Soil Carrier, Gold Refinery, Anvil Blacksmith, Gold Melt Crucible)
5. **About** — dark bg with overlay image, heading + descriptive text + CTA
6. **Team** — 6 members in 2 rows of 3: photo + name + role + social icons (fb, twitter, instagram)
7. **Pricing** — 3 cards (Basic, Standard, Premium) on light bg: price + features list + CTA button
8. **FAQ** — accordion-style Q&A section
9. **Press** — media logos / press mentions
10. **Testimonials** — owl-carousel testimonials on light bg
11. **Blog** — recent posts grid (3 cards): image + date + title + excerpt
12. **Contact** — form (name, email, subject, message + submit button) on light bg
13. **Footer** — dark bg, 4 columns: About, Features links, Newsletter subscribe, Follow Us social icons

## Gherkin requirements

### Feature: Excavate Template

#### Scenario: Navbar renders with correct links and sticky behavior
- Given the user loads the page
- Then a sticky navbar is visible at the top
- And it contains links: Home, About Us, Services, Team, Pricing, Contact
- And a mobile hamburger toggle is present

#### Scenario: Hero carousel displays slides with CTA
- Given the user loads the page
- Then a full-width carousel is visible
- And the first slide shows "Welcome to Excavate" heading
- And the second slide shows "New Generation of Mining" heading
- And both slides have a "Get in touch" button

#### Scenario: Services section shows two feature blocks
- Given the user scrolls to the services section
- Then 2 service cards are displayed side by side
- And each card has a background image, heading, and description text

#### Scenario: Feature grid shows six mining features
- Given the user scrolls to the feature grid
- Then 6 feature items are displayed in a grid
- And each item has an icon, title, and description

#### Scenario: About section renders on dark background
- Given the user scrolls to the about section
- Then the section has a dark background with overlay
- And a heading and descriptive text are visible

#### Scenario: Team section shows six members
- Given the user scrolls to the team section
- Then 6 team member cards are displayed
- And each card shows a photo, name, role, and social icons

#### Scenario: Pricing section shows three tiers
- Given the user scrolls to the pricing section
- Then 3 pricing cards are displayed (Basic, Standard, Premium)
- And each card shows a price and feature list
- And each card has a CTA button

#### Scenario: FAQ section displays questions
- Given the user scrolls to the FAQ section
- Then FAQ items are displayed
- And each item shows a question and expandable answer

#### Scenario: Press section shows media logos
- Given the user scrolls to the press section
- Then media/press logos are displayed

#### Scenario: Testimonials carousel works
- Given the user scrolls to the testimonials section
- Then a carousel of testimonials is visible
- And navigation controls are present

#### Scenario: Blog section shows recent posts
- Given the user scrolls to the blog section
- Then 3 blog post cards are displayed
- And each card has an image, date, title, and excerpt

#### Scenario: Contact form is functional
- Given the user scrolls to the contact section
- Then a contact form is visible with fields: name, email, subject, message
- And a submit button is present
- And submitting empty fields shows validation errors

#### Scenario: Footer renders with all columns
- Given the user scrolls to the footer
- Then 4 footer columns are displayed: About, Features, Newsletter, Follow Us
- And the newsletter section has an email input and subscribe button
- And social media icons are present
- And a link to componentdock.com is present

## Verification checklist

- [ ] Navbar is sticky and responsive (hamburger on mobile)
- [ ] Hero carousel auto-plays and shows 2 slides with correct headings
- [ ] Services section shows 2 cards with background images
- [ ] Feature grid shows 6 items with icons
- [ ] About section has dark background
- [ ] Team section shows 6 members with social icons
- [ ] Pricing section shows 3 tier cards
- [ ] FAQ accordion toggles open/closed
- [ ] Press logos display correctly
- [ ] Testimonials carousel works with navigation
- [ ] Blog section shows 3 post cards
- [ ] Contact form validates and submits
- [ ] Footer has 4 columns + newsletter + social links
- [ ] Footer links to componentdock.com
- [ ] All sections match original section order
- [ ] Design tokens match: primary #ff8b00, Rubik + Oswald fonts
- [ ] No references to ColorLib in app code
- [ ] Placeholder images use picsum.photos
