# Template: Glissade (Creative Agency)

## Purpose

Recreation of ColorLib "Bobsled" — a creative agency / digital studio website template.

- **Source slug:** `bobsled`
- **ColorLib page:** https://colorlib.com/wp/template/bobsled/
- **Preview URL:** https://preview.colorlib.com/theme/bobsled/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bobsled-creative-website-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Package:** `@free-react-templates/glissade`
- **Surge target:** `glissade.free.componentdock.com`

## Section order (from preview DOM)

1. **Navbar** — logo left, nav links (Home, Generic, Elements) right, hamburger on mobile
2. **Hero** — full-width gradient background (#3e69fe → #4cd4e3), white headline + subtext + "Get Started" CTA button
3. **Working Process** — centered title "Our Working Process", 4 steps horizontally (Researching → Wireframing → Prototyping → Final Design) with icon boxes and arrow connectors
4. **Features** — gradient background (#3e69fe → #4cd43), centered title "Our Exclusive Features", 3 feature cards (Creative Design, Appropriate UX, Super Clean Code) with icon + description + button
5. **Remarkable Works** — white background, centered title "Remarkable Works", 3 project cards with image, title "Vector Illustration", and "View Details" button; cards have box-shadow
6. **Story** — background image with overlay, heading "From the part of beginning", descriptive text + "Read More" button
7. **Newsletter / Subscription** — light gray (#f9f9ff) background, centered title "Subscribe for our Newsletter", email input + submit button
8. **Contact Form** — gradient background (#3e69fe → #4cd43), centered white title "Keep in Touch" + subtitle, form with name/email/message fields and submit button
9. **Footer Widgets** — light background, 3 columns: Address, Email Address, Phone Number
10. **Footer bottom** — copyright text + social icon links (Facebook, Twitter, Dribbble, Behance)

## Design tokens (extracted from preview CSS)

| Token                 | Value                                                | Usage                                           |
| --------------------- | ---------------------------------------------------- | ----------------------------------------------- |
| Brand gradient start  | `#3e69fe`                                            | Hero bg, Features bg, Contact bg, button hover  |
| Brand gradient end    | `#4cd4e3`                                            | Hero bg, Features bg, Contact bg, button hover  |
| Gradient direction    | 0deg (bottom-to-top)                                 | `.banner-area`, `.featured-area`, `.story-area` |
| Font family           | `"Poppins", sans-serif`                              | Global body and headings                        |
| Font weights          | 300, 500, 600                                        | Body (300), nav/buttons (500), headings (600)   |
| Button border-radius  | `20px`                                               | `.primary-btn` rounded pill shape               |
| Button style          | transparent bg, white border, gradient fill on hover | All CTA buttons                                 |
| Section padding       | `100px 0`                                            | Most sections                                   |
| Card shadow           | `0px 15px 50px 0px rgba(0,0,0,0.1)`                  | `.single-remark` cards                          |
| Working process icons | Linearicons (lnr-*)                                  | Icon font for process steps                     |
| Neutral text color    | `#777777`                                            | Body text                                       |
| Dark text color       | `#222222`                                            | Headings on white backgrounds                   |
| Light bg              | `#f9f9ff`                                            | Subscription/newsletter area                    |
| White bg              | `#fff`                                               | Remarkable works, working process               |
| Border color          | `#eee`                                               | Card borders, form inputs                       |

## Gherkin requirements

### Navbar

```gherkin
Feature: Navbar
  Scenario: Logo and navigation links render
    Given the page loads
    Then a logo link is visible on the left
    And navigation links "Home", "Generic", "Elements" are visible on the right
    And on mobile a hamburger menu toggle is visible

  Scenario: Mobile menu opens and closes
    Given the viewport width is less than 768px
    When the hamburger icon is clicked
    Then the navigation menu expands with links
    When the hamburger icon is clicked again
    Then the navigation menu collapses
```

### Hero

```gherkin
Feature: Hero
  Scenario: Hero renders with gradient background
    Given the page loads
    Then a full-width section with a blue-to-cyan gradient background is visible
    And a headline in white uppercase text is displayed
    And a descriptive paragraph in white text is displayed below
    And a "Get Started" button with rounded pill shape is displayed

  Scenario: Get Started button hover shows gradient fill
    Given the page loads
    When the "Get Started" button is hovered
    Then the button border becomes transparent
    And the gradient background fills the button
```

### Working Process

```gherkin
Feature: Working Process
  Scenario: Four process steps render in order
    Given the page loads
    Then a section titled "Our Working Process" is visible
    And 4 process steps are displayed: "1. Researching", "2. Wireframing", "3. Prototyping", "4. Final Design"
    And each step has an icon above its label
    And arrow connectors appear between steps

  Scenario: Steps are horizontally aligned
    Given the page loads
    Then all 4 steps are arranged in a horizontal row
    And the section has a white background
```

### Features

```gherkin
Feature: Features
  Scenario: Three feature cards render on gradient background
    Given the page loads
    Then a section titled "Our Exclusive Features" is visible
    And the section has a blue-to-cyan gradient background
    And 3 feature cards are displayed: "Creative Design", "Appropriate UX", "Super Clean Code"
    And each card has an icon, description text, and a button
    And all text on the gradient background is white

  Scenario: Feature buttons are rounded
    Given the page loads
    Then each feature card has a rounded pill-shaped button
```

### Remarkable Works

```gherkin
Feature: Remarkable Works
  Scenario: Three project cards render
    Given the page loads
    Then a section titled "Remarkable Works" is visible
    And 3 project cards are displayed
    And each card has an image, title "Vector Illustration", and a "View Details" button
    And each card has a box shadow

  Scenario: Cards have consistent shadow
    Given the page loads
    Then each project card has a shadow of approximately 0px 15px 50px rgba(0,0,0,0.1)
```

### Story

```gherkin
Feature: Story
  Scenario: Story section renders with background image
    Given the page loads
    Then a section with a background image is visible
    And the heading "From the part of beginning" is displayed in uppercase
    And descriptive text is displayed below the heading
    And a "Read More" button with pill shape is displayed
```

### Newsletter / Subscription

```gherkin
Feature: Newsletter
  Scenario: Subscription form renders
    Given the page loads
    Then a section titled "Subscribe for our Newsletter" is visible
    And the section has a light gray (#f9f9ff) background
    And an email input field is displayed
    And a submit button is displayed
```

### Contact Form

```gherkin
Feature: Contact Form
  Scenario: Contact form renders on gradient background
    Given the page loads
    Then a section titled "Keep in Touch" is visible
    And the section has a blue-to-cyan gradient background
    And the title and subtitle text are white
    And form fields for name, email, and message are displayed
    And a submit button is displayed

  Scenario: Form validation shows errors
    Given the user clicks submit without filling fields
    Then validation error messages appear for required fields
```

### Footer

```gherkin
Feature: Footer
  Scenario: Footer widgets render
    Given the page loads
    Then 3 footer widget columns are visible: Address, Email Address, Phone Number
    And email addresses and phone numbers are displayed as links

  Scenario: Footer bottom with copyright and social links
    Given the page loads
    Then a copyright line is visible at the bottom
    And social icon links (Facebook, Twitter, Dribbble, Behance) are displayed
    And a link to Component Dock is present
```

## Verification checklist

- [ ] Navbar renders with logo and navigation links
- [ ] Mobile hamburger menu toggles open/close
- [ ] Hero has blue-to-cyan gradient background
- [ ] Hero headline is white, uppercase, bold
- [ ] "Get Started" button is pill-shaped (border-radius: 20px)
- [ ] Button hover fills with gradient
- [ ] Working Process shows 4 steps in horizontal row with icons and arrows
- [ ] Features section has gradient background and 3 white cards
- [ ] Each feature card has icon + text + button
- [ ] Remarkable Works shows 3 cards with shadow on white bg
- [ ] Story section has background image overlay
- [ ] Newsletter section has light gray bg with email form
- [ ] Contact form has gradient bg with form fields
- [ ] Footer has 3 widget columns + copyright + social links
- [ ] Component Dock link in footer
- [ ] All font-family references use Poppins
- [ ] Gradient tokens: #3e69fe → #4cd4e3
- [ ] No ColorLib references in app source code
