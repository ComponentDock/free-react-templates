# Template: Yogawell (Yoga Studio)

## Purpose

Recreation of [ColorLib Doyoga](https://colorlib.com/wp/template/doyoga/) — a yoga studio website template.

- **Source slug:** `doyoga`
- **Preview URL:** https://preview.colorlib.com/theme/doyoga/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/doyoga-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)
- **App folder:** `apps/yogawell`
- **Package:** `@free-react-templates/yogawell`
- **Deploy target:** `https://yogawell.free.componentdock.com`

## Design tokens

Extracted from the live preview's `css/style.css`:

| Token              | Value                                | Notes                                  |
| ------------------ | ------------------------------------ | -------------------------------------- |
| Brand color        | `#6610f2` (indigo/violet)            | CTA buttons, links, highlights         |
| Background (page)  | `#fff`                               | Main page background                   |
| Background (alt)   | `#f8f9fa` (very light gray)          | Alternate section backgrounds          |
| Background (cards) | `#ebeef0` (light gray)               | Input backgrounds, card accents        |
| Text primary       | `#212529` / `#333333`                | Headings and body text                 |
| Text muted         | `#8c8c8c` / `#b3b3b3`               | Secondary/muted text                   |
| Border/divider     | `#dee2e6`                            | Subtle separators                      |
| Dark overlay       | `rgba(0,0,0,0.6)` on banner         | Hero section overlay                   |
| Font family        | `Quicksand`, sans-serif              | Google Font — rounded geometric style  |
| Button radius      | `4px`                                | Standard button corners                |
| Icon radius        | `50%`                                | Circular icon containers               |
| Hero background    | Black `#000` with overlay `rgba(0,0,0,0.6)` | Dark hero with video CTA        |

## Section structure (from live preview)

1. **Navbar** — Logo "Yogawell", nav links (Home, Classes, Pages, Team, Pricing), hamburger for mobile, sticky header on scroll
2. **Hero / Banner** — "A Yoga Studio" heading, descriptive paragraph, "Watch the video" CTA button, dark overlay on background image
3. **Featured Classes** — Carousel of 4 yoga class cards (image + class name + price + CTA), prev/next navigation. Classes: Ashtanga Foundations ($29.99), Surya Vinyasa ($32.99), Chandra Vinyasa ($22.99), Yinyasa ($34.99)
4. **Schedule** — Heading + intro text, list of 4 class schedule items. Each: class name, description, time (5:30 PM), date, "Join from $15" CTA
5. **About Us** — Heading + paragraph text + image(s) in a split layout
6. **Events** — 2 event cards side by side: event name, date, description, "Read More" link
7. **Yoga Gallery** — Filterable image gallery with tabs (All/Classes/Intern/Training). Grid of 8+ images
8. **Get In Touch** — Contact form (Name, Phone, Email, Message) alongside Contact Details (address, phone, email)
9. **Footer** — Multi-column: About Us blurb, Quick Links, Newsletter subscription form, Follow Us social links, copyright

## Gherkin requirements

```gherkin
Feature: Yogawell — Yoga studio website template

  Background:
    Given the user opens "https://yogawell.free.componentdock.com"

  # --- Navbar ---
  Scenario: Navbar displays logo and navigation links
    Then the navbar shows the logo "Yogawell"
    And navigation links include "Home", "Classes", "Team", "Pricing"
    And the navbar becomes sticky on scroll

  Scenario: Mobile hamburger menu
    When the viewport is narrow (< 768px)
    Then a hamburger menu icon is visible
    When the user taps the hamburger icon
    Then the mobile navigation menu opens

  # --- Hero ---
  Scenario: Hero banner renders correctly
    Then the hero section displays heading "A Yoga Studio"
    And a descriptive paragraph is shown below the heading
    And a "Watch the video" CTA button is visible
    And the hero has a dark overlay on a background image

  # --- Featured Classes ---
  Scenario: Featured classes carousel
    Then 4 yoga class cards are displayed
    And each card shows a class image, name, and price
    And previous/next navigation arrows are available
    When the user clicks next
    Then the carousel advances to the next set of cards

  Scenario: Class cards contain correct data
    Then class "Ashtanga Foundations" shows price "$29.99"
    And class "Surya Vinyasa" shows price "$32.99"
    And class "Chandra Vinyasa" shows price "$22.99"
    And class "Yinyasa" shows price "$34.99"

  # --- Schedule ---
  Scenario: Schedule section lists upcoming classes
    Then the schedule shows 4 class entries
    And each entry has a class name, description, time, and date
    And each entry has a "Join from $15" call-to-action

  Scenario: Schedule classes have correct times
    Then all schedule entries show time "5:30 PM"
    And all schedule entries show date "April 22, 2019"

  # --- About Us ---
  Scenario: About Us section renders
    Then the heading "About Us" is displayed
    And descriptive paragraphs are shown
    And at least one image is displayed alongside the text

  # --- Events ---
  Scenario: Events section shows event cards
    Then 2 event cards are displayed
    And each card has a name, date, description, and "Read More" link

  # --- Gallery ---
  Scenario: Yoga gallery with filter tabs
    Then a grid of gallery images is displayed
    And filter tabs include "All", "Classes", "Intern", "Training"
    When the user clicks a filter tab
    Then only matching gallery images are shown

  # --- Contact ---
  Scenario: Contact form
    Then a contact form with fields "Name", "Phone", "Email", "Write Message" is visible
    And a submit button is present
    And contact details show address, phone number, and email

  # --- Footer ---
  Scenario: Footer content
    Then the footer contains "About Us" section with a short blurb
    And "Quick Links" with navigation links
    And a newsletter subscription form with "Send" button
    And "Follow Us" social media links
    And copyright text with "Component Dock" link to https://www.componentdock.com/

  # --- Responsive ---
  Scenario: Responsive layout
    When the viewport width is less than 768px
    Then the layout switches to single-column stacked sections
    And the navbar collapses to a hamburger menu

  # --- Accessibility ---
  Scenario: Accessibility basics
    Then all images have alt text
    And interactive elements are keyboard-focusable
    And form inputs have associated labels
```

## Verification checklist

- [ ] Navbar sticky on scroll, mobile hamburger menu works
- [ ] Hero banner with dark overlay, heading, paragraph, CTA button
- [ ] Featured classes carousel with 4 cards, prev/next navigation
- [ ] Schedule section with 4 class entries, times, dates, CTA
- [ ] About Us section with split layout (text + image)
- [ ] Events section with 2 event cards
- [ ] Gallery with filter tabs and image grid
- [ ] Contact form with all fields + contact details sidebar
- [ ] Footer with columns: About, Quick Links, Newsletter, Social, copyright
- [ ] Brand color `#6610f2` used for CTAs and highlights
- [ ] Font: Quicksand (Google Fonts)
- [ ] Placeholder images via picsum.photos
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] All tests pass at 100% coverage
