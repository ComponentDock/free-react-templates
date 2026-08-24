# Template: EduNova (Education / Online Courses)

## Purpose

Recreation of ColorLib's **Onedu** template as a React single-page application.

- **Source name:** Onedu
- **ColorLib page:** https://colorlib.com/wp/template/onedu/
- **Preview URL:** https://preview.colorlib.com/theme/onedu/
- **New name:** EduNova (apps/edunova)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from the live preview stylesheet (`assets/css/style.css`):

| Token                     | Value                            | Usage                                                    |
| ------------------------- | -------------------------------- | -------------------------------------------------------- |
| Font family               | "Jost", sans-serif               | Body, headings, buttons — Google Fonts                   |
| Brand red                 | #EA5252                          | Accents, hover states, search bar bg, links, back-to-top |
| Primary CTA (purple)      | #5A4E8C                          | Main `.btn` background, cart icon, `.submit-btn3`        |
| Secondary accent (orange) | #FF6F00                          | `.submit-btn` bg, form focus borders, tag cloud hover    |
| Light section bg          | #EFFDFF                          | `.section-bg` — alternating light-blue sections          |
| Heading color             | #3C3B37                          | h1-h6 text                                               |
| Body text                 | #6A6A6A                          | Paragraphs, secondary text                               |
| Subtitle text             | #6B5A5A                          | `.section-tittle p`                                      |
| Section title span        | #7EA0FF                          | Category/eyebrow text above headings                     |
| Button radius             | 4px (main btn), 0px (submit)     | Square/rounded corners                                   |
| Input border radius       | 30px (search), 0px (newsletter)  | Rounded search, square newsletter                        |
| Section padding           | 100px top / 90px bottom          | `.section-padding`                                       |
| Hero slider height        | 700px (desktop)                  | `.slider-height`                                         |
| Section BG gradient       | Linear gradient #EA5252 (131deg) | Blog link hover text gradient                            |
| Scroll-back-to-top        | #EA5252 bg, 50% radius circle    | Fixed bottom-right button                                |

## Section Structure (from live DOM, top to bottom)

1. **Header** — Sticky navbar: logo (left), search bar with rounded input + magnifier icon, nav links (Home, Browse Courses, About, Blog w/ submenu, Contact, Cart icon, Sign In button)
2. **Hero / Slider** — Full-width hero with background image, headline ("Learn new skills online with top educators"), subtext, search form (large input + red search button), hero illustration (right half)
3. **Popular Courses (Carousel)** — Section title "The world's largest selection of courses" + subtitle; 4 course cards in an owl-carousel: image with price badge overlay, course title, author, star rating (5 stars + review count)
4. **About / CTA Section** — Two-column: left image (student/laptop), right text with headline + description + two buttons (primary purple + secondary outlined)
5. **Course Categories / Browse** — Section title "Discover Our Top Categories" + subtitle; grid of category cards with images and labels
6. **Testimonials** — Carousel slider: quote text + founder info (avatar + name + role) in a centered layout
7. **Instructor Highlights / Popular** — Section title, grid of instructor cards or location-style cards with images
8. **Features / Why Choose Us** — Light blue (#EFFDFF) background section; two-column: left feature list with icon + title + description (3 items), right side illustration
9. **Newsletter / CTA** — Orange (#FF6F00) background, centered text with email input + subscribe button
10. **Footer** — Dark background, 4-column: logo + description + social icons | Subjects links | Our Company links | Support links; bottom bar with copyright + "Made with ❤️ by ColorLib" (replace with Component Dock)

## Gherkin Requirements

```gherkin
Feature: EduNova — Education Online Courses Template

  Background:
    Given the user visits the EduNova homepage
    Then the page loads with a sticky header and hero section

  Scenario: Header — sticky navigation
    When the user scrolls down past the header
    Then the header remains fixed at the top with a white background and shadow
    And the nav links are visible and clickable
    And the search bar is visible with a rounded input field
    And the "Sign In" button is rendered

  Scenario: Header — mobile menu
    Given the viewport is mobile (< 768px)
    Then the desktop nav is hidden
    And a hamburger menu icon is visible
    When the user taps the hamburger icon
    Then the mobile menu expands with all nav links

  Scenario: Hero section — search form
    Given the hero section is visible
    Then a large headline is displayed: "Learn new skills online with top educators"
    And a subtext paragraph is displayed below the headline
    And a search input with placeholder "What do you want to learn?" is shown
    And a red (#EA5252) search button is attached to the right of the input
    And a hero illustration image fills the right half of the hero

  Scenario: Popular Courses — carousel
    Given the user scrolls to the courses section
    Then a section title "The world's largest selection of courses" is displayed
    And at least 4 course cards are rendered
    And each card has an image with a price badge overlay
    And each card shows a course title, author name, and 5-star rating with review count

  Scenario: Popular Courses — carousel interaction
    Given the courses carousel is visible
    When the user clicks the next arrow
    Then the next set of course cards slides into view

  Scenario: About / CTA section
    Given the user scrolls to the about section
    Then a two-column layout is shown: image left, text right
    And the text area has a headline, description paragraph, and two buttons
    And the primary button has a purple (#5A4E8C) background
    And the secondary button has an outlined/ghost style

  Scenario: Course Categories
    Given the user scrolls to the categories section
    Then a section title "Discover Our Top Categories" is displayed
    And a grid of category cards is shown with images and labels

  Scenario: Testimonials carousel
    Given the user scrolls to the testimonials section
    Then a testimonial slider is visible
    And each slide shows a quote, author avatar, name, and role

  Scenario: Features / Why Choose Us
    Given the user scrolls to the features section
    Then the section has a light blue (#EFFDFF) background
    And a two-column layout is shown: feature list left, illustration right
    And 3 feature items are listed, each with an icon, title, and description

  Scenario: Newsletter CTA
    Given the user scrolls to the newsletter section
    Then the section has an orange (#FF6F00) background
    And an email input field is displayed with a subscribe button

  Scenario: Footer
    Given the user scrolls to the footer
    Then the footer has a dark background
    And 4 columns are shown: logo+description+social, Subjects, Our Company, Support
    And social icons (Twitter, Facebook, Pinterest) are displayed
    And the bottom bar shows copyright text
    And the footer links to https://www.componentdock.com/

  Scenario: Responsive layout
    Given the viewport is resized to mobile (< 576px)
    Then all sections stack vertically
    And course cards display in a single column
    And the hero section stacks text above the image
    And the footer columns stack vertically

  Scenario: Back to top button
    Given the user scrolls past the hero section
    Then a circular back-to-top button appears at bottom-right
    And the button has a red (#EA5252) background
    When the user clicks the button
    Then the page scrolls smoothly to the top
```

## Verification Checklist

- [ ] Font "Jost" loaded from Google Fonts
- [ ] Brand red (#EA5252) used for accents, search button, hover states
- [ ] Purple (#5A4E8C) used for primary CTA buttons
- [ ] Orange (#FF6F00) used for newsletter section background and submit buttons
- [ ] Light blue (#EFFDFF) background on features section
- [ ] Sticky header with white bg and box-shadow on scroll
- [ ] Hero section with search form (large rounded input + red button)
- [ ] Course cards carousel with price badges and star ratings
- [ ] Two-column about/CTA section with purple + ghost buttons
- [ ] Category grid section
- [ ] Testimonials carousel with avatar + quote
- [ ] Features section with 3 icon+text items on #EFFDFF bg
- [ ] Newsletter section with orange bg + email input
- [ ] Footer with 4 columns + social icons + Component Dock link
- [ ] Mobile responsive: hamburger menu, stacked layouts
- [ ] Back-to-top circular button (red bg)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME contains edunova.free.componentdock.com
- [ ] homepage in package.json is https://edunova.free.componentdock.com
