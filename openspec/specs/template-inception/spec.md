# Template: Inception (Creative Agency Onepage)

## Purpose

Recreation of [ColorLib Create](https://colorlib.com/wp/template/create/) — a creative agency one-page website template.
Preview URL: https://preview.colorlib.com/theme/create/

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript.
Deploy: `https://inception.free.componentdock.com`

## Design Tokens

| Token                  | Value / Description                                                                                                                  |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| Brand teal             | `#32dbc6` — primary accent for buttons, links, active nav, headings, checkmarks, CTA banner                                         |
| Body background        | `#fff` (white)                                                                                                                       |
| Alternate section bg   | `#edf0f5` / `#f4f5f9` (very light blue-gray)                                                                                        |
| Top bar bg             | `#000` (black)                                                                                                                       |
| Navbar bg              | `#fff` (white), sticky header                                                                                                        |
| Navbar text            | `#000` (black), active/hover `#32dbc6`                                                                                               |
| Logo accent            | `#32dbc6` dot after brand name                                                                                                       |
| Hero overlay           | Dark overlay on background image                                                                                                     |
| Hero heading           | `#fff`, font-size 3rem (48px), font-weight 400                                                                                       |
| Section headings       | `#000` (black), font-size ~3rem on desktop, site-section-heading class                                                               |
| Body text              | Dark gray (Bootstrap default)                                                                                                        |
| Heading icons          | `#32dbc6` (text-primary) for numbered box headings (Innovate, Create, Scale)                                                         |
| Checkmarks             | `#32dbc6` for `.ul-check.primary li:before`                                                                                          |
| Cards / boxes          | `#fff` background                                                                                                                    |
| Blog meta              | `#999` (gray)                                                                                                                        |
| Footer bg              | `#333333` (dark charcoal)                                                                                                            |
| Footer headings        | `#fff` (white)                                                                                                                       |
| Footer body text       | `#737373`                                                                                                                            |
| Footer links           | `#999999` (gray), hover `#fff`                                                                                                       |
| CTA banner             | `#32dbc6` background, white text                                                                                                     |
| Font — primary         | `'Quicksand', sans-serif` (Google Fonts, weights 300–900)                                                                            |
| Font — icons           | `icomoon` (icon font)                                                                                                                |
| Button (.btn-primary)  | `#32dbc6` bg, white text, `.btn-md` (padding 15px 30px, font-size 12px, uppercase, letter-spacing .1em)                             |
| Button border-radius   | `30px` (rounded pill)                                                                                                                |
| Avatar shapes          | `border-radius: 50%` (circular) for team member photos                                                                               |
| Scroll-to-top          | N/A (not present in original)                                                                                                        |
| Form inputs            | Standard Bootstrap form-control (bordered)                                                                                           |
| Contact form card      | `#fff` bg, `.p-5` padding                                                                                                            |

### CSS reference

Extracted from `https://preview.colorlib.com/theme/create/css/style.css` (see replication notes below).

## Requirements (Gherkin)

### Top Bar

```gherkin
Feature: Top Bar
  Scenario: Renders contact info and social icons
    Given the page loads
    Then a dark top bar is displayed above the navbar
    And phone number "+1 234 5678 9101" is shown
    And email "info@yourdomain.com" is shown
    And social icons (Facebook, Twitter, Instagram, LinkedIn) are visible on the right

  Scenario: Hidden on small screens
    Given the viewport width is less than 768px
    Then the top bar is hidden
```

### Navbar

```gherkin
Feature: Navbar
  Scenario: Renders brand and navigation links
    Given the page loads
    Then the navbar displays the brand "inception" with a teal dot accent
    And navigation links are visible: Home, Work, Services, About, Blog, Contact
    And the navbar is sticky on scroll

  Scenario: Active link highlight
    Given the user is viewing the page
    When the user scrolls to the "Work" section
    Then the "Work" nav link is highlighted in teal (#32dbc6)

  Scenario: Mobile hamburger toggle
    Given the viewport width is less than 1200px
    When the user taps the hamburger icon
    Then the navigation menu expands/collapses

  Scenario: About dropdown
    Given the viewport width is >= 1200px
    When the user hovers over "About"
    Then a dropdown shows "Specialties" and "Our Team" links
```

### Hero

```gherkin
Feature: Hero Section
  Scenario: Full-viewport background image with overlay
    Given the page loads
    Then a full-viewport hero section is displayed
    And a background image covers the section with a dark overlay

  Scenario: Hero content
    Then a heading "We Love To Build" is visible with rotating typed text
    And the typed words cycle through "Web Apps", "WordPress", "Mobile Apps"
    And a "Watch Video" button is displayed (primary teal, rounded pill)

  Scenario: Video CTA
    Given the hero section is visible
    When the user clicks "Watch Video"
    Then a video modal/lightbox opens
```

### Numbered Boxes (Innovate / Create / Scale)

```gherkin
Feature: Numbered Boxes Section
  Scenario: Three numbered columns
    Given the page loads
    Then three boxes are displayed in a row: "01. Innovate", "02. Create", "03. Scale"

  Scenario: Box content
    Then each box has a large faded number behind the heading
    And each heading is in teal (#32dbc6)
    And each box has a paragraph description
    And each box has a checklist of 3 items with teal checkmarks

  Scenario: Checklist styling
    Given a numbered box is displayed
    Then checklist items have a teal (#32dbc6) checkmark icon before each item
```

### Work / Portfolio

```gherkin
Feature: Work Section
  Scenario: Section heading
    Given the page loads
    Then the "Our Works" heading is displayed centered

  Scenario: Portfolio grid
    Then a 3-column grid of portfolio images is shown
    And each image has an overlay with a title and category label
    And images open in a lightbox when clicked

  Scenario: Responsive layout
    Given the viewport width is less than 768px
    Then portfolio items stack in a single column
```

### Services

```gherkin
Feature: Services Section
  Scenario: Section heading
    Given the page loads
    Then the "Our Services" heading is displayed centered

  Scenario: Service items
    Then multiple service items are displayed in a 3-column grid
    And each service has a teal icon, title, description, and "Learn More" link

  Scenario: Service icons
    Given a service item is displayed
    Then the icon is rendered in teal (#32dbc6)
```

### About Us

```gherkin
Feature: About Us Section
  Scenario: Layout
    Given the page loads
    Then the "About Us" heading is visible
    And an image is displayed on the right side
    And text content is on the left side

  Scenario: Specialty items
    Given the About section is visible
    Then specialty sub-items are listed (e.g. "Web & Mobile Specialties")
    And each has a teal icon, title, description, and "Learn More" link
```

### Team

```gherkin
Feature: Team Section
  Scenario: Section heading
    Given the page loads
    Then the "Our Team" heading is displayed centered
    And a bottom border separates this section

  Scenario: Team member cards
    Then 3 team member cards are displayed in a row
    And each card has a circular avatar image (50% width)
    And each card shows the member name and position title
    And each card has social media icon links (Facebook, Twitter, LinkedIn, Instagram)

  Scenario: Responsive layout
    Given the viewport width is less than 768px
    Then team member cards stack vertically
```

### Blog

```gherkin
Feature: Blog Section
  Scenario: Section heading
    Given the page loads
    Then the "Blog" heading is displayed centered

  Scenario: Blog posts
    Then 3 blog post cards are displayed in a row
    And each post has a featured image, title, meta info (author, date, category), excerpt, and "Continue Reading..." link

  Scenario: Responsive layout
    Given the viewport width is less than 768px
    Then blog post cards stack vertically
```

### Contact Us

```gherkin
Feature: Contact Section
  Scenario: Section heading
    Given the page loads
    Then the "Contact Us" heading is displayed centered on a light background

  Scenario: Contact form
    Then a form is displayed with fields: First Name, Last Name, Email, Subject, Message
    And a "Send Message" button is shown (primary teal, rounded pill)

  Scenario: Contact info card
    Then an info card is displayed to the right of the form
    And it shows Address, Phone, and Email Address
```

### CTA Banner

```gherkin
Feature: CTA Banner
  Scenario: "Let's Get Started" banner
    Given the contact section is visible
    Then a full-width teal (#32dbc6) banner is displayed below the contact section
    And the text "Let's Get Started" is shown in white
```

### Footer

```gherkin
Feature: Footer
  Scenario: Footer layout
    Given the page loads
    Then a dark (#333333) footer is displayed
    And it has columns: About Us text, Features links, Follow Us social icons, Subscribe Newsletter form

  Scenario: Newsletter subscribe
    Then an email input with "Enter Email" placeholder is shown
    And a "Send" button (primary teal) is adjacent to the input

  Scenario: Copyright
    Then a copyright notice is shown at the bottom
    And a link to Component Dock replaces ColorLib
```

## Verification checklist

- [ ] All sections render in order: top bar → navbar → hero → numbered boxes → work → services → about → team → blog → contact → CTA → footer
- [ ] Teal (#32dbc6) is the only brand accent color
- [ ] Quicksand font loaded from Google Fonts
- [ ] Navbar is sticky, white background, with teal active state
- [ ] Hero has full-viewport background image with dark overlay and typed text animation
- [ ] Portfolio section has 6 images in 3-column grid with overlay titles
- [ ] Team section shows 3 members with circular avatars
- [ ] Contact form has all 5 fields (F name, L name, email, subject, message)
- [ ] Footer is dark (#333333) with newsletter subscribe form
- [ ] CTA banner "Let's Get Started" spans full width in teal
- [ ] Mobile responsive: hamburger nav, stacked columns
- [ ] All links point to "#" or internal anchors (no external references)
- [ ] Footer links to Component Dock
- [ ] `public/CNAME` contains `inception.free.componentdock.com`
- [ ] `package.json` homepage is `https://inception.free.componentdock.com`
