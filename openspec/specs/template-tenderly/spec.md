# Template: Tenderly (Charity/Non-Profit)

## Purpose

Recreation of ColorLib's **Lovecare** charity theme as a React single-page app.

- **Source:** https://colorlib.com/wp/template/lovecare/
- **Preview:** https://preview.colorlib.com/theme/lovecare/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** `tenderly` (apps/tenderly, @free-react-templates/tenderly)

## Design Tokens

Extracted from the live preview CSS (`preview.colorlib.com/theme/lovecare/css/style.css`):

| Token                         | Value                                                                                     | Usage                                                     |
| ----------------------------- | ----------------------------------------------------------------------------------------- | --------------------------------------------------------- |
| `--brand`                     | `#d49a3a`                                                                                 | Gold/amber — primary accent, CTAs, icons, hover states    |
| `--secondary`                 | `#0a686e`                                                                                 | Teal — fund-raised bar, secondary backgrounds             |
| `--dark-bg`                   | `#042628`                                                                                 | Very dark teal — footer background                        |
| `--overlay`                   | `#0a4f53`                                                                                 | Teal — hero overlay gradient start                        |
| `--light-bg`                  | `#f3f0eb`                                                                                 | Cream/beige — light section backgrounds, icon backgrounds |
| `--text-dark`                 | `#39311d`                                                                                 | Very dark brown — heading text, fund-wrap background      |
| `--text-secondary`            | `#4d4d4d`                                                                                 | Gray — secondary text                                     |
| `--white`                     | `#ffffff`                                                                                 | Card backgrounds, counter section                         |
| Font (body)                   | `"Poppins", Arial, sans-serif`                                                            | Body text, nav, footer headings                           |
| Font (display)                | `"Patrick Hand", cursive`                                                                 | Hero h1, appointment/headline sections                    |
| Border radius (cards)         | `4px`                                                                                     | Testimony wraps, cause cards                              |
| Border radius (fund-wrap)     | `10px`                                                                                    | Fund/donate section                                       |
| Border radius (avatars/icons) | `50%`                                                                                     | Circular icons, volunteer images                          |
| Button style                  | White outline (`border: 2px solid #fff`)                                                  | Primary CTA buttons; gold `#d49a3a` for secondary CTAs    |
| Card shadow                   | `0px 30px 33px -41px rgba(0,0,0,0.24)`                                                    | Testimony cards                                           |
| Hero overlay                  | Linear gradient `135deg, #0a4f53 0%, rgba(145,129,66,0.1) 67%, rgba(212,154,58,0.1) 100%` | Full-screen hero background                               |

### Color summary (Tailwind theme mapping)

```
brand:       #d49a3a   (gold)
secondary:   #0a686e   (teal)
dark-bg:     #042628   (footer)
overlay:     #0a4f53   (hero gradient start)
light-bg:    #f3f0eb   (cream sections)
text-dark:   #39311d   (headings)
text-muted:  #4d4d4d   (secondary text)
fund-bg:     #39311d   (donate form background)
fund-bar:    #0a686e   (raised bar)
```

## Section Structure (in order, from live preview DOM)

1. **Navbar** — Fixed top, brand "LOVECARE CHARITY THEME" (left), nav links: Home, About, Causes, Blog, Contact (right). Transparent → solid on scroll.
2. **Hero** — Full-viewport height, background image with dark teal overlay gradient. Subheading "Raising Hope", h1 "To the Homeless & Hopeless People" (Patrick Hand font, white with gold accent on "Homeless & Hopeless"). Two CTA buttons: "Join Us" (white) and "Watch the Video" (outlined).
3. **Fund / Donate Section** — Two-column layout. Left: fund-raised stat card (teal bar: "$1,850,000 FUNDS RAISED BY 1200 PEOPLE" with gold icon). Right: donate form on dark brown (#39311d) background with fields: Full Name, Email, Select Causes (dropdown: Food, Medical Health, Education, Environment, Shelter/Home, Clothes, Other), Amount, Payment radio (Paypal, Credit Card, Payoneer), "Donate Now" button (gold).
4. **Mission Statement** — White background. h2 "We Help Thousands of Children to Get Their Education". Three action cards in a row: "Start Donating", "Join Our Community", "Be A Volunteer" — each with an icon, title, and link.
5. **Stats Counter** — Dark teal overlay background (parallax). Subheading "GREAT REVIEWS FOR OUR SERVICES", h2 "Technical Statistics". Four stat cards: "$60M", "9200", "5800", "2750" — white text on semi-transparent white card backgrounds.
6. **Causes Carousel** — h2 "Our Causes & Help Us". Carousel of cause cards with: category tag ("Education"), heading ("Give Food to Homeless Children"), progress bar (70%), "Raised:" and "Goal:" labels. Two-page carousel with dot navigation.
7. **CTA Banner** — Cream background (#f3f0eb) with parallax image. "LOVECARE CHARITY" subheading, h2 "The Smallest Act of Kindness is Worth More Than the Grandest Intention". Two buttons: "Donate Now!" (gold) and "Become A Volunteer" (teal).
8. **Volunteers** — h2 "Our Volunteer". Grid of 4 volunteer cards: circular image, name (e.g. "Jason Smith"), "Volunteer" label, social icon row (Twitter, Facebook, Instagram, LinkedIn).
9. **Testimonials** — Dark section with overlay. "TESTIMONIAL" subheading, h2 "What People Says". Carousel of testimony cards with: quote icon (gold circle), user image (circular), name (gold), position (gray), quote text. Dot pagination.
10. **Video CTA** — h2 "Do You Care Our Children?" with "Be A Volunteer" button. Background image with dark overlay.
11. **Blog** — h2 "Recent From Blog". Three blog cards: image, "3 COMMENTS" link (gold), heading ("Give Hope to the People Need Most"), excerpt text, "Read More" link (gold).
12. **Footer** — Very dark teal (#042628) background. Three columns: brand + description + social icons (left), Recent Posts with date/author + heading (middle), Contact info with phone + email (right). Bottom bar: copyright + attribution.

## Gherkin Requirements

### Navbar

```gherkin
Feature: Navigation bar

  Scenario: Brand link visible
    Given the page loads
    Then the navbar displays the brand text "LOVECARE CHARITY THEME"

  Scenario: Navigation links present
    Given the page loads
    Then the navbar contains links: Home, About, Causes, Blog, Contact

  Scenario: Mobile hamburger menu
    Given the viewport width is less than 992px
    When the user clicks the hamburger icon
    Then the navigation menu expands vertically
```

### Hero

```gherkin
Feature: Hero section

  Scenario: Hero content displays
    Given the page loads
    Then the hero shows subheading "Raising Hope"
    And the hero shows heading "To the Homeless & Hopeless People"
    And the heading uses a cursive display font (Patrick Hand)

  Scenario: Hero CTAs
    Given the page loads
    Then the hero shows "Join Us" button
    And the hero shows "Watch the Video" button

  Scenario: Hero background
    Given the page loads
    Then the hero has a full-viewport background image
    And a dark teal-to-gold gradient overlay covers the background
```

### Fund/Donate

```gherkin
Feature: Fund and donation form

  Scenario: Fund stats display
    Given the page loads
    Then the fund section shows "$1,850,000" as funds raised
    And shows "FUNDS RAISED BY 1200 PEOPLE" as caption

  Scenario: Donation form fields
    Given the page loads
    Then the form has a "Your Full Name" text input
    And an "Email Address" text input
    And a "Select Causes" dropdown with options: Food, Medical Health, Education, Environment, Shelter/Home, Clothes, Other
    And an "Amount" text input
    And radio buttons for payment: Paypal, Credit Card, Payoneer

  Scenario: Donate button
    Given the page loads
    Then the form has a "Donate Now" submit button
    And the button is gold (#d49a3a) colored
```

### Mission/Actions

```gherkin
Feature: Mission statement and action cards

  Scenario: Mission heading
    Given the page loads
    Then the section shows "We Help Thousands of Children to Get Their Education"

  Scenario: Action cards
    Given the page loads
    Then three action cards are visible
    And the cards are: "Start Donating", "Join Our Community", "Be A Volunteer"
    And each card has an icon and a heading
```

### Stats Counter

```gherkin
Feature: Statistics counter section

  Scenario: Stats display
    Given the page loads
    Then four statistic values are shown
    And the values are: "$60M", "9200", "5800", "2750"
    And the section has a dark overlay background
```

### Causes Carousel

```gherkin
Feature: Causes carousel

  Scenario: Causes cards
    Given the page loads
    Then a carousel of cause cards is visible
    And each card has a category label, heading, and progress bar
    And the progress bar shows a percentage

  Scenario: Carousel navigation
    Given the page loads
    Then carousel dot pagination is visible
```

### CTA Banner

```gherkin
Feature: Call-to-action banner

  Scenario: CTA content
    Given the page loads
    Then the banner shows "LOVECARE CHARITY" as subheading
    And "The Smallest Act of Kindness is Worth More Than the Grandest Intention" as heading
    And "Donate Now!" and "Become A Volunteer" buttons are visible

  Scenario: CTA background
    Given the page loads
    Then the banner has a cream/beige background with parallax effect
```

### Volunteers

```gherkin
Feature: Volunteer team section

  Scenario: Volunteer cards
    Given the page loads
    Then four volunteer cards are displayed
    And each card shows a circular avatar, name, "Volunteer" label
    And each card has social media icon links (Twitter, Facebook, Instagram, LinkedIn)
```

### Testimonials

```gherkin
Feature: Testimonials section

  Scenario: Testimonials carousel
    Given the page loads
    Then a testimonials carousel is visible
    And each slide shows a quote, user name (gold), and position (gray)
    And a circular quote icon is positioned above the card

  Scenario: Testimonial pagination
    Given the page loads
    Then carousel dot pagination is visible
```

### Video CTA

```gherkin
Feature: Video call-to-action

  Scenario: Video CTA content
    Given the page loads
    Then "Do You Care Our Children?" heading is displayed
    And a "Be A Volunteer" button is visible
    And the section has a background image with dark overlay
```

### Blog

```gherkin
Feature: Blog section

  Scenario: Blog cards
    Given the page loads
    Then three blog post cards are shown
    And each card has an image, comment count, heading, excerpt, and "Read More" link

  Scenario: Blog card styling
    Given the page loads
    Then comment count is displayed in gold (#d49a3a)
    And "Read More" link is gold colored
```

### Footer

```gherkin
Feature: Footer

  Scenario: Footer columns
    Given the page loads
    Then the footer has three columns
    And column 1 shows brand name and description with social icons
    And column 2 shows "Recent Posts" with post cards
    And column 3 shows "Have a Questions?" with phone and email

  Scenario: Footer styling
    Given the page loads
    Then the footer has a very dark teal background (#042628)
    And the bottom bar has a slightly lighter dark background (#053336)
    And the footer links to https://www.componentdock.com/
```

## Verification Checklist

- [ ] Navbar: brand text visible, all 5 nav links present, mobile hamburger toggle works
- [ ] Hero: full-viewport, gradient overlay, Patrick Hand font on h1, both CTAs visible
- [ ] Fund/Donation: raised amount displayed, form has all 5 fields + radio group, submit button gold
- [ ] Mission: heading visible, 3 action cards with icons rendered
- [ ] Stats: 4 stat values visible, dark overlay background present
- [ ] Causes: carousel renders, progress bars show percentage, dot pagination works
- [ ] CTA Banner: heading + both buttons visible, cream background
- [ ] Volunteers: 4 cards with avatar/name/social links
- [ ] Testimonials: carousel with quote/name/position, dot pagination
- [ ] Video CTA: heading + button visible, background image with overlay
- [ ] Blog: 3 cards with image/comment count/heading/excerpt/Read More
- [ ] Footer: 3 columns, dark teal background, Component Dock link in footer
- [ ] Responsive: all sections stack correctly on mobile (< 768px)
- [ ] Design tokens: brand #d49a3a, secondary #0a686e, Poppins + Patrick Hand fonts
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
