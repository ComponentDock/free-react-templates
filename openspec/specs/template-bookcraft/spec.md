# Template: Bookcraft (Book / Author Landing)

## Purpose

Recreation of ColorLib's **Booke** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page landing site for authors promoting a book.

- **ColorLib source:** https://colorlib.com/wp/template/booke/
- **Preview URL:** https://preview.colorlib.com/theme/booke/
- **New name:** `bookcraft` (apps/bookcraft, package `@free-react-templates/bookcraft`)
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript, shared `packages/ui`

## Design tokens (extracted from preview)

| Token              | Value                                     | Notes                                      |
| ------------------ | ----------------------------------------- | ------------------------------------------ |
| Brand / primary    | `#1C63FB`                                 | Blue — buttons, active links, focus states |
| Body font          | `"Roboto", sans-serif`                    | Load via Google Fonts link in index.html   |
| Heading / serif    | `"Oswald", sans-serif`                    | Used on `.heading` and `.serif` elements   |
| Heading color      | `#000000`                                 | All h1–h6                                  |
| Body text color    | `gray` (#808080)                          | Default paragraph / muted text             |
| Button radius      | `30px` (pill)                             | All `.btn` — `rounded-full` in Tailwind    |
| Button primary bg  | `#1C63FB`, text white                     | Hover: transparent bg, blue border+text    |
| Button white bg    | `#ffffff`, 2px solid transparent           | Hover: transparent bg, white border+text   |
| Form input radius  | `30px` (pill)                             | `rounded-full`                             |
| Form input bg      | `#f6f6f6`                                 | Focus border: `#1C63FB`                    |
| Service card bg    | `#ffffff`                                 | Hover: shadow `0 10px 30px -10px rgba(0,0,0,0.4)` |
| Testimonial card   | `#ffffff` bg, `#000` text                 | Avatar `rounded-full`                      |
| Footer bg          | `#333333`                                 | Text `#8c8c8c`, links `#b3b3b3`, headings `#ffffff` |
| Newsletter section | Bootstrap `.bg-primary` → `#1C63FB`       | White text + white CTA button              |
| Section padding    | 4.5em mobile / 7em desktop                | `.site-section`                            |
| Hero bg            | Dark (image-based)                        | White text overlay, "Buy This Book" CTA    |
| Sticky nav         | White bg on scroll, shadow                | Nav links become dark; active = primary    |

## Gherkin requirements

```gherkin
Feature: Bookcraft — Author Book Landing Page

  Background:
    Given the user is on the Bookcraft homepage

  Scenario: Page loads with hero section
    Then a hero section is visible
    And the hero displays the headline "Meet Your Next Book"
    And the hero shows a book image
    And the hero has a "Buy This Book" call-to-action button

  Scenario: Navigation bar is sticky
    Given the user scrolls down the page
    Then the navbar becomes sticky at the top
    And the navbar has a white background when scrolled
    And the logo text is visible in the navbar

  Scenario: Navigation links scroll to sections
    When the user clicks the "Features" link in the navbar
    Then the page scrolls to the Features section
    When the user clicks the "About Author" link
    Then the page scrolls to the Author section
    When the user clicks the "Testimonial" link
    Then the page scrolls to the Testimonials section
    When the user clicks the "Contact" link
    Then the page scrolls to the Contact/Footer section

  Scenario: Features section displays book features
    Then the Features section is visible
    And the section heading reads "Features Of This Book"
    And there are 6 feature cards in a 3-column grid
    And each feature card has an icon, title, and description

  Scenario: Screenshot carousel shows book images
    Then a screenshot/carousel section is visible
    And the section heading reads "Book Screenshot"
    And there are Prev/Next navigation controls
    And the carousel displays book preview images

  Scenario: Author section shows author info
    Then the Author section is visible
    And it has a split layout with a background image on one side
    And the author name "Jane" is displayed
    And an author biography text block is shown
    And a signature image is shown
    And the author's title is "Book Author & Publisher"

  Scenario: Testimonials section displays reader reviews
    Then the Testimonials section is visible
    And the section heading reads "Testimonial From Readers"
    And there are 3 testimonial cards
    And each testimonial card has a quote, name, and role

  Scenario: Newsletter subscription section
    Then a newsletter/subscribe section is visible
    And it has a blue background
    And it shows a "Subscribe For The New Updates" heading
    And there is an email input field
    And there is a "Send Email" submit button

  Scenario: Footer contact form
    Then the footer is visible with a dark background
    And the footer has an "About Us" column
    And the footer has a "Navigation" column with links
    And the footer has a "Quick Contact" form with name, email, message fields
    And the contact form has a "Send Message" button
    And social media icons (Facebook, Twitter, Instagram, LinkedIn) are shown
    And a "Component Dock" attribution link is present

  Scenario: Mobile responsive layout
    Given the viewport is 375px wide
    Then the navbar collapses to a hamburger menu
    And the Features grid stacks to a single column
    And the Author section stacks vertically
    And the Testimonials stack vertically
    And the footer columns stack vertically
```

## Verification checklist

- [ ] Hero section renders with headline, book image placeholder, and CTA button
- [ ] Navbar is sticky and changes background on scroll
- [ ] All nav links scroll to the correct sections
- [ ] Features section shows 6 cards in a 3×2 grid with icons
- [ ] Screenshot carousel slides between images with Prev/Next controls
- [ ] Author section shows split layout with image + bio + signature
- [ ] Testimonials section shows 3 cards with quotes and avatars
- [ ] Newsletter section has email input and submit button on blue background
- [ ] Footer has 3 columns: About Us, Navigation, Quick Contact form
- [ ] Footer social icons render
- [ ] Footer links to Component Dock
- [ ] Mobile responsive at 375px: hamburger nav, stacked grids
- [ ] No ColorLib references in app source (provenance only in spec + TEMPLATES.md)
- [ ] All tests pass with 100% coverage
- [ ] `npm run verify:app bookcraft` passes (typecheck + lint + tests + build)
