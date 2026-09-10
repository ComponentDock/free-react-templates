# Template: Bluecrest (Landing Page / Business)

## Purpose

Recreation of ColorLib **Blueline** template.
- Source: https://colorlib.com/wp/template/blueline/
- Preview: https://preview.colorlib.com/theme/blueline/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/blueline-free-fullscreen-business-website-template.jpg
- Stack: React 19, Vite, Tailwind CSS 4, TypeScript

A fullscreen business landing page with a hero banner, numbered feature cards,
embedded video section, split-layout services area, work gallery slider,
newsletter subscription, contact form with image, and minimal footer.

## Design tokens

Extracted from live preview CSS (`css/main.css`):

| Token              | Value                          | Usage                                           |
| ------------------ | ------------------------------ | ----------------------------------------------- |
| Primary            | `#2954c9`                      | Primary button bg, form focus borders            |
| Accent / Cyan      | `#77d5f7`                      | Button text, selection highlight, footer links   |
| Gradient           | `linear-gradient(0deg, #3c50ca, #77d5f7)` | Primary buttons, feature numbers, service icons |
| Body bg            | `#f9f9ff`                      | Page background, input backgrounds              |
| Body text          | `#777`                         | Default paragraph color                         |
| Headings           | `#222`                         | All headings                                    |
| Dark bg (services) | `#000`                         | Service section left panel, footer              |
| White              | `#fff`                         | Service right panel, feature area, subscription  |
| Font family        | `Poppins, sans-serif`          | Google Font, weights 300/400/500/600/700        |
| Button radius      | `20px` (circle)                | Rounded pill buttons, uppercase                 |
| Input radius       | `25px`                         | Newsletter + contact form inputs                 |
| Border color       | `#eee`                         | Service card borders, button borders             |
| Banner title size  | `124px`                        | Hero heading with text-shadow                    |

## Section structure (order preserved 1:1)

1. **Header** — transparent over hero; logo left, nav right (Home, Generic, Elements); hamburger menu on mobile
2. **Hero / Banner** — fullscreen background image; centered content: "Introducing" subtitle + large "BLUELINE" title with text-shadow
3. **Features** — white bg; 3-column numbered feature cards (01 Responsive View, 02 Multiple Layouts, 03 Flexible Design); gradient-colored numbers, h2 titles, descriptions
4. **Video** — centered video embed area with overlay bg + play button; below: content text ("Great Modern Design / Build with usability in mind") with gradient-highlighted spans
5. **Services** — split layout: left = dark bg (#000) with white text ("Services We Offered"); right = white bg with 4 service cards in 2×2 grid (each with icon + h2 title + description)
6. **Latest Works** — centered title ("Some Of our Latest Works"); image carousel/slider with prev/next navigation
7. **Newsletter / Subscription** — white bg; centered title ("Subscribe for our Newsletter"); email input (rounded pill) + "Get Started" gradient button
8. **Contact** — white-bg card layout: left = contact image; right = contact form (name, email, textarea, "Send Message" gradient button)
9. **Footer** — dark bg (#000); copyright text + social icons (Facebook, Twitter, Dribbble, Behance) in dark squares

## Gherkin requirements

### Feature: Bluecrest landing page

```gherkin
Scenario: Header displays logo and navigation
  Given the user visits the Bluecrest page
  Then the header shows the logo on the left
  And the navigation shows Home, Generic, Elements links
  And the nav is transparent over the hero
  And on mobile the nav collapses to a hamburger menu

Scenario: Hero banner shows fullscreen title
  Given the user visits the Bluecrest page
  Then a fullscreen background image is displayed
  And "Introducing" appears as a subtitle
  And "BLUELINE" appears as a large heading with text-shadow

Scenario: Features section shows 3 numbered cards
  Given the user scrolls to the Features section
  Then 3 feature items are displayed in a row
  And each has a gradient-colored number (01, 02, 03), title, and description
  And the titles are Responsive View, Multiple Layouts, Flexible Design

Scenario: Video section shows embed and description
  Given the user scrolls to the Video section
  Then a video area with play button overlay is displayed
  And below it, a heading with gradient-highlighted spans and a description paragraph appear

Scenario: Services section has split dark/light layout
  Given the user scrolls to the Services section
  Then the left half has a dark background with white heading "Services We Offered" and description
  And the right half has a white background with 4 service cards in a 2x2 grid
  And each service card has an icon, title, and description

Scenario: Latest Works shows image slider
  Given the user scrolls to the Latest Works section
  Then a heading "Some Of our Latest Works" is displayed
  And a horizontal image slider with navigation arrows is shown

Scenario: Newsletter section shows subscription form
  Given the user scrolls to the Newsletter section
  Then "Subscribe for our Newsletter" heading is displayed
  And an email input with rounded pill shape is shown
  And a "Get Started" gradient button is next to the input

Scenario: Contact section has image and form
  Given the user scrolls to the Contact section
  Then a card layout shows an image on the left
  And a contact form on the right with name, email, textarea fields
  And a "Send Message" gradient button

Scenario: Footer shows copyright and social links
  Given the user scrolls to the footer
  Then a dark background footer shows copyright text
  And social icons for Facebook, Twitter, Dribbble, Behance are displayed
  And it links to https://www.componentdock.com/

Scenario: Design tokens are applied consistently
  Given any section of the page
  Then headings use Poppins font, weight 600
  And primary buttons use the blue-to-cyan gradient with rounded pill shape
  And the accent color #77d5f7 is used for highlights and links
  And inputs have rounded pill shape with light background
```

## Verification checklist

- [ ] Header: transparent over hero, logo + nav links, mobile hamburger
- [ ] Hero: fullscreen bg image, "Introducing" subtitle, large title with text-shadow
- [ ] Features: 3-column numbered cards with gradient numbers
- [ ] Video: video area with play button + descriptive text below
- [ ] Services: split dark/light layout, 4 service cards
- [ ] Latest Works: image slider with navigation arrows
- [ ] Newsletter: heading + email input + "Get Started" button
- [ ] Contact: image left, form right (name, email, textarea, submit)
- [ ] Footer: dark bg, copyright, social icons
- [ ] Responsive: hamburger nav, stacked layouts on mobile
- [ ] Tokens: Poppins font, #2954c9 primary, #77d5f7 accent, gradient buttons
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
