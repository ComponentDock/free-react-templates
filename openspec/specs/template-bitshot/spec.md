# Spec: Bitshot — Photography Portfolio Template

> Recreation of ColorLib "Bitmap" (https://colorlib.com/wp/template/bitmap/)
> Preview: https://preview.colorlib.com/theme/bitmap/
> Category: Photography (49)

## Design tokens (extracted from preview CSS)

| Token          | Value                                              |
| -------------- | -------------------------------------------------- |
| Brand accent   | `#fcdc00` (golden yellow)                          |
| Body bg        | `#ffffff` (white)                                  |
| Body text      | `#777777` (gray)                                   |
| Heading color  | `#222222` (near-black)                             |
| Body font      | `"Poppins", sans-serif` (used everywhere)          |
| Heading font   | `"Poppins", sans-serif` (same family, bold weights)|
| CTA button     | bg `#fcdc00`, text `#222222`, border-radius `0px`  |
| Gallery area bg| `#f9f9ff` (very light lavender)                    |
| Gallery hover  | overlay `rgba(0,0,0,0.5)` with white title + expand icon |
| Testimonials bg| `#fcdc00` (yellow)                                 |
| Testimonials text | `#222222`                                      |
| Service border | `1px solid #eeeeee`                                |
| Service hover  | bg `#fcdc00`, text `#222222`                       |
| Instagram btn  | same as theme_btn (yellow bg, dark text)           |
| Footer bg      | `#04091e` (dark navy)                              |
| Footer text    | `#ffffff` (white)                                  |
| Footer heading | `#ffffff`, font-size 18px, font-weight 600         |
| Newsletter input bg | `#f9f9ff`                                     |
| Newsletter submit | bg `#fcdc00`, border-radius `0px`                |
| Banner content bg | `#000` (black), text `#fff`                      |
| Banner overlay | parallax bg image with overlay                     |

## Sections (in order)

1. **Navbar** — White/light navbar with logo image (left), nav links (Home active, Gallery, Services, About, Elements, Blog dropdown, Contact), search icon (right). Mobile: hamburger toggler, collapse menu.
2. **Hero / Banner** — Full-width parallax section with dark overlay on background image. Centered content: heading "Bitmap Photography" (white, Poppins), subtitle paragraph (white), CTA button "Explore Gallery" (yellow theme_btn).
3. **Gallery** — Filter bar (All active, Approved, Unapproved, Unviewed) + 4-column grid of 12 gallery items. Each item: image with hover overlay (title + expand icon). "Load More Images" button below. Light lavender background (#f9f9ff).
4. **Testimonials** — Yellow (#fcdc00) background section. Two-column layout: left = "Client's Feedback" heading + description paragraph; right = testimonial carousel (avatar image + quote + name + role). Carousel with owl-style dots.
5. **Services** — White background, centered heading "Why we are the best" + subtitle. 3-column grid of 6 service cards (border #eeeeee, centered text, icon + title + description). Hover: yellow bg.
6. **Instagram** — 6-column row of Instagram images (full-width row, no gaps). Centered "Follow us on instagram" button above.
7. **Footer** — Dark navy (#04091e) background, three columns: About Me (text + copyright with heart icon), Newsletter (email input + submit button), Follow Me (social icons: Facebook, Twitter, Dribbble, Behance).

## Scenarios (Gherkin)

### Navbar

- **Scenario: Brand logo renders**
  - Given the page loads
  - Then the navbar displays the logo image
- **Scenario: Navigation links render**
  - Given the page loads
  - Then the navbar displays links: Home, Gallery, Services, About, Blog (dropdown), Contact
- **Scenario: Mobile nav toggle**
  - Given the viewport is narrow
  - When the user clicks the hamburger icon
  - Then the navigation menu expands/collapses

### Hero

- **Scenario: Hero content renders**
  - Given the page loads
  - Then the hero section displays heading "Bitmap Photography"
  - And the hero section displays a subtitle paragraph
  - And the hero section displays an "Explore Gallery" CTA button
- **Scenario: Hero has parallax background**
  - Given the page loads
  - Then the hero section has a background image with parallax effect

### Gallery

- **Scenario: Filter tabs render**
  - Given the page loads
  - Then the gallery filter bar displays: All, Approved, Unapproved, Unviewed
  - And "All" is the active filter
- **Scenario: Gallery items render**
  - Given the page loads
  - Then the gallery displays 12 image items in a 4-column grid
- **Scenario: Gallery hover overlay**
  - Given the page loads
  - When the user hovers over a gallery item
  - Then an overlay appears with the item title and an expand icon
- **Scenario: Filter items by category**
  - Given the gallery displays items with different category classes
  - When the user clicks a filter tab
  - Then only items matching that category are visible

### Testimonials

- **Scenario: Testimonials section renders**
  - Given the page loads
  - Then the testimonials section has a yellow background
  - And the testimonials section displays "Client's Feedback" heading
- **Scenario: Testimonial carousel displays**
  - Given the page loads
  - Then the testimonials section displays a testimonial with avatar, quote, name, and role

### Services

- **Scenario: Services section renders**
  - Given the page loads
  - Then the services section displays heading "Why we are the best"
  - And the services section displays 6 service cards in a 3-column grid
- **Scenario: Service card hover**
  - Given the page loads
  - When the user hovers over a service card
  - Then the card background changes to yellow

### Instagram

- **Scenario: Instagram section renders**
  - Given the page loads
  - Then the Instagram section displays a "Follow us on instagram" button
  - And the Instagram section displays 6 images in a row

### Footer

- **Scenario: Footer renders**
  - Given the page loads
  - Then the footer has a dark navy background
  - And the footer displays "About Me" section
  - And the footer displays a Newsletter section with email input
  - And the footer displays social icons (Facebook, Twitter, Dribbble, Behance)
- **Scenario: Newsletter form**
  - Given the page loads
  - Then the newsletter form has an email input field and a submit button

## Verification checklist

- [ ] All sections render in correct order: Navbar → Hero → Gallery → Testimonials → Services → Instagram → Footer
- [ ] Brand accent #fcdc00 used consistently for buttons, testimonials bg, service hover
- [ ] Poppins font used throughout (headings + body)
- [ ] Gallery has 4-column grid with hover overlay (title + expand icon)
- [ ] Gallery filter tabs work (All, Approved, Unapproved, Unviewed)
- [ ] Testimonials section has yellow background with carousel
- [ ] Services section has 6 cards in 3-column grid with hover effect
- [ ] Instagram section has 6 images in a row with centered button
- [ ] Footer has dark navy bg with 3 columns (About, Newsletter, Social)
- [ ] Newsletter form has email input + submit button
- [ ] All buttons use border-radius: 0px (sharp corners)
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
- [ ] Tests pass with `npm run test:coverage`
