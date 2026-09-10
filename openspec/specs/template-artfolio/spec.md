# Template: Artfolio (Personal Creative Portfolio)

## Purpose

Recreation of the ColorLib **Breed2** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source slug:** `breed2`
- **Source URL:** https://colorlib.com/wp/template/breed2/
- **Preview URL:** https://preview.colorlib.com/theme/breed2/
- **Category:** Personal / Creative Portfolio
- **Stack:** Vite (latest), React 19, Tailwind CSS 4, TypeScript (strict)

## Design tokens

Extracted from the live preview at `https://preview.colorlib.com/theme/breed2/` and its stylesheet `css/style.css`.

| Token                      | Value                                                                                                    | Usage                                                            |
| -------------------------- | -------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| Font family                | `"Roboto", sans-serif` (weights 300, 400, 500, 700)                                                      | Global body + headings                                           |
| Primary gradient           | `linear-gradient(90deg, #1345e6 0%, #ed239f 100%)`                                                       | CTA buttons, stat text gradient, social icon hover               |
| Heading color              | `#05364d`                                                                                                | h1–h5, nav links, service titles, blog titles, footer icon color |
| Body text                  | `#797979`                                                                                                | Paragraphs, description text                                     |
| Light card bg              | `#f8faff`                                                                                                | Statistics items, service cards, blog card details               |
| Service hover bg           | `#5f30ff`                                                                                                | Service card hover state (purple)                                |
| Portfolio hover overlay    | `rgba(19, 69, 230, 0.9)`                                                                                 | Portfolio item overlay on hover                                  |
| Blog date badge            | `#1345e6` bg, `#fff` text, `border-radius: 5px`                                                          | Blog post date overlay                                           |
| Star rating                | `#ffd804` (gold) / `#aeb9be` (disabled)                                                                  | Testimonial star icons                                           |
| Footer background          | `#021017` (very dark navy)                                                                               | Footer section                                                   |
| Footer social circles      | `#ffffff` bg, `#05364d` icon, `border-radius: 36px` (full circle)                                        | Footer social links                                              |
| Button (primary)           | Gradient bg, `border-radius: 5px`, uppercase, `line-height: 50px`, `padding: 0 38px`, `font-weight: 500` | CTA buttons                                                      |
| Button link (primary_btn2) | Text-only with animated underline, `font-size: 13px`, uppercase                                          | "Learn More" links                                               |
| Section gap                | `padding: 140px 0` (desktop), `80px 0` (mobile)                                                          | Between major sections                                           |
| Navbar                     | Transparent overlay on hero, white bg + shadow on scroll, fixed position                                 | Header behavior                                                  |
| Border color (forms)       | `#f0e9ff` (light lavender)                                                                               | Form inputs, pagination                                          |
| Form border-radius         | `5px` (inputs), `12px` (textarea)                                                                        | Form styling                                                     |
| Link hover color           | `#1345e6`                                                                                                | Blog tags, nav items, text links                                 |

## Gherkin requirements

### Background

Given the user loads the Artfolio single-page application
Then the page renders with the Roboto font family
And all sections appear in the documented order below

### Navbar

Scenario: Transparent header with navigation
Given the page loads at the top
Then the navbar is transparent with no background
And navigation links include Home, About, Portfolio, Services, Blog, Contact
And the logo text reads "artfolio" (derived from template name)
When the user scrolls past the hero section
Then the navbar background becomes white (#ffffff)
And a subtle box-shadow appears (0px 3px 16px rgba(0,0,0,0.1))
And the navbar becomes fixed to the top

Scenario: Mobile navbar toggle
Given the viewport width is below 992px
Then a hamburger toggle button is visible
When the user clicks the hamburger toggle
Then the navigation menu expands vertically
And each nav link has a bottom border separator

### Hero section

Scenario: Hero displays personal introduction
Given the hero section is visible
Then a greeting text "Hey There!" is displayed
And a heading "I am [Name]" is displayed
And a subtitle "Creative art director & designer" is shown
And a "See My Work" CTA button is visible
And social media icon links are displayed (Facebook, Twitter, Instagram, Pinterest)

Scenario: Hero uses background image
Given the hero section is visible
Then a background image covers the hero area (min-height: 890px)
And a banner-right image is shown on desktop (hidden on mobile)

### Statistics section

Scenario: Stats display with gradient numbers
Given the statistics section is visible
Then 3 stat items are displayed horizontally
And each stat number has a gradient text effect (blue-to-pink)
And stat items are: "Happy Customer" (15k+), "Ticket Solved" (12k+), "Average Rating" (9/10)
And stat items have a #f8faff background

Scenario: Stats overlap hero
Given the statistics section is visible on desktop
Then the section has negative top margin (-121px) to overlap the hero

### About section

Scenario: About displays personal info
Given the About section is visible
Then a section heading "About me" is shown
And a subheading "Creative Art Director And Designer" is displayed
And a descriptive paragraph is shown
And a "Download CV" button is visible
And an about image is displayed on the left side (hidden on mobile)

### Services section

Scenario: Services display 3 service cards
Given the Services section is visible
Then a section heading "Our Service" with subheading "What Service We Offer For You" is shown
And 3 service cards are displayed in a 3-column grid
And each card contains: an icon, a title, a description, and a "Learn More" link
And the services are: "Web Development", "UX/UI Design", "WP Developing"

Scenario: Service card hover state
Given a service card is displayed
When the user hovers over the service card
Then the card background changes to #5f30ff (purple)
And the text and link color change to #ffffff (white)

### Testimonials section

Scenario: Testimonial carousel
Given the Testimonials section is visible
Then a section heading "Our Testimonial" with subheading "Honourable Client Says About Me" is shown
And a testimonial slider displays items
And each item shows: an avatar image, a name, a role/company, a quote, and a star rating
And the testimonial background includes a decorative image element (desktop only)

### Portfolio section

Scenario: Portfolio gallery with filters
Given the Portfolio section is visible
Then a section heading "Our Portfolio" with subheading "Check Our Recent Client Work" is shown
And filter tabs are displayed: "all", "popular", "latest", "following", "upcoming"
And a 3-column grid of portfolio items is shown
And each item displays a thumbnail image, a title ("Lens Mockup Design"), and a category ("Art, Illustration")

Scenario: Portfolio item hover overlay
Given a portfolio item is displayed
When the user hovers over a portfolio item
Then a blue overlay appears (rgba(19,69,230,0.9))
And the item title and category become visible in white

### Blog section

Scenario: Blog cards display
Given the Blog section is visible
Then a section heading "Our Blog" with subheading "Latest Story From Our Blog" is shown
And 3 blog cards are displayed in a 3-column grid
And each card contains: a thumbnail image, a date badge, a title, an excerpt, and a "Learn More" link

Scenario: Blog card hover
Given a blog card is displayed
When the user hovers over the blog card
Then a subtle box-shadow appears (0px 10px 20px rgba(5,54,77,0.1))
And the card details background changes to white
And the image scales up slightly (transform: scale(1.1))

### Brands section

Scenario: Brand logos carousel
Given the Brands section is visible
Then a row of brand logos is displayed
And the logos are shown in a carousel/slider format

### Footer section

Scenario: Dark footer with links
Given the Footer is visible
Then the footer has a dark background (#021017)
And a centered logo is displayed
And circular social media icon buttons are shown (white bg, dark icon)
And footer navigation links are displayed: Home, About, Portfolio, Blog, Services
And a copyright notice is shown at the bottom
And a link to https://www.componentdock.com/ ("Component Dock") is present in the footer

## Verification checklist

- [ ] Navbar: transparent on hero, white+shadow on scroll, fixed position
- [ ] Mobile hamburger menu with vertical expansion
- [ ] Hero: background image, greeting, name, subtitle, CTA button, social icons
- [ ] Statistics: 3 items with gradient text, overlapping hero on desktop
- [ ] About: heading, subtitle, description, CV button, image
- [ ] Services: 3 cards in grid, icon + title + description + "Learn More" link, purple hover
- [ ] Testimonials: carousel slider with avatar, name, role, quote, star rating
- [ ] Portfolio: filter tabs, 3-col grid, hover overlay with title/category
- [ ] Blog: 3 cards with date badge, title, excerpt, hover effects
- [ ] Brands: logo carousel
- [ ] Footer: dark bg, logo, social circles, nav links, copyright, Component Dock link
- [ ] Design tokens: Roboto font, #1345e6/#ed239f gradient, #05364d headings, #f8faff cards
- [ ] All placeholder images use picsum.photos with deterministic seeds
- [ ] No ColorLib references in app code (provenance only in spec/TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Responsive: stacks to single column on mobile, hero image hidden, adjusted spacing
