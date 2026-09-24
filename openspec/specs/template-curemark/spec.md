---
template: curemark
name: Curemark
description: >
  Medical/hospital React template — recreation of the Medart design
  originally by ColorLib (https://preview.colorlib.com/theme/medart/).
  All layout, copy, and component structure replicates the original;
  this spec captures the functional and visual requirements for a
  faithful React rebuild.
version: 0.1.0
status: draft
---

# Curemark — OpenSpec Requirements

> Design tokens and provenance live in this frontmatter.
> The Gherkin scenarios below reference tokens by name; their values
> are defined in `docs/templates/curemark/notes.md`.

---

## Design Tokens (reference)

| Token             | Value                                             |
| ----------------- | ------------------------------------------------- |
| `font-primary`    | Raleway (Google Fonts), sans-serif                |
| `brand-gradient`  | linear-gradient(270deg, #32c8fa 0%, #587de4 100%) |
| `body-text`       | #404040                                           |
| `bg-info-boxes`   | #f0f4f8                                           |
| `bg-departments`  | #f3f3f3                                           |
| `bg-testimonials` | #eaf1f3                                           |
| `accent-blue`     | #18a3eb                                           |
| `btn-radius`      | rounded-full                                      |
| `btn-text`        | white                                             |

---

## 1 · Navbar

```gherkin
Feature: Navbar
  The site navigation bar is fixed at the top and contains branding,
  navigation links, and a call-to-action button.

  Background:
    Given the application has loaded on any route

  Scenario: Navbar renders logo and navigation links
    Then the navbar contains the site logo on the left
    And the navbar contains the following navigation links in order:
      | Link Text |
      | Home      |
      | About     |
      | Services  |
      | News      |
      | Contact   |

  Scenario: Emergency CTA button
    Then the navbar contains an "Emergency" call-to-action button
    And the CTA button displays a phone icon
    And the CTA button uses the brand-gradient background
    And the CTA button text is white

  Scenario: Sticky behaviour
    When the user scrolls past the hero section
    Then the navbar remains fixed to the top of the viewport
    And the navbar does not overlap page content below it
```

---

## 2 · Hero Banner

```gherkin
Feature: HeroBanner
  A full-width hero section below the navbar with a background image,
  overlay, headline, subtitle, and a gradient call-to-action button.

  Background:
    Given the application is on the Home page

  Scenario: Hero renders full-width with overlay
    Then the hero banner spans the full viewport width
    And a background image is displayed
    And a semi-transparent overlay sits between the image and the text

  Scenario: Headline and subtitle
    Then the hero headline reads "The Best Medical Services"
    And a subtitle paragraph is displayed below the headline

  Scenario: Read More button
    Then a "Read More" button is visible
    And the button uses the brand-gradient background
    And the button has a rounded-full shape
    And the button text is white
```

---

## 3 · Info Boxes

```gherkin
Feature: InfoBoxes
  A three-column section on a #f0f4f8 background containing Opening
  Hours, Emergency contact, and an Appointment booking form.

  Background:
    Given the application is on the Home page

  Scenario: Three-column layout
    Then three info boxes are rendered side by side
    And each info box has a heading

  Scenario: Opening Hours box
    Given the user views the "Opening Hours" info box
    Then a schedule list of days and hours is displayed

  Scenario: Emergency box
    Given the user views the "Emergency" info box
    Then a phone number or CTA link is displayed
    And the CTA uses the brand-gradient style

  Scenario: Appointment form
    Given the user views the "Appointment" info box
    Then a "Department" select dropdown is rendered
    And a "Doctor" select dropdown is rendered
    And a "Name" text input is rendered
    And a "Phone" text input is rendered
    And a "Submit" button is rendered with the brand-gradient style

  Scenario: Appointment form validation
    When the user submits the Appointment form with empty required fields
    Then the browser shows native validation messages
```

---

## 4 · Departments

```gherkin
Feature: Departments
  A nine-card grid of medical departments, each with an icon, title,
  description, and a "read more" link.

  Background:
    Given the application is on the Home page

  Scenario: Section heading
    Then the departments section heading reads "Our Departments"

  Scenario: Department grid
    Then nine department cards are displayed in a 3×3 grid
    And each card contains:
      | Element     | Required |
      | Icon        | yes      |
      | Title       | yes      |
      | Description | yes      |
      | Read More   | yes      |

  Scenario Outline: Department card content
    Then a card exists with title "<Title>"
    Examples:
      | Title             |
      | Cardiology        |
      | Gastroenterology  |
      | Medical Lab       |
      | Dental Care       |
      | Surgery           |
      | Neurology         |
      | Orthopaedy        |
      | Pediatry          |
      | Ophthalmology     |

  Scenario: Section background
    Then the departments section uses background color #f3f3f3
```

---

## 5 · Testimonials

```gherkin
Feature: Testimonials
  A slider of customer testimonials with quotes, avatars, names, and
  affiliations.

  Background:
    Given the application is on the Home page

  Scenario: Testimonials heading
    Then the testimonials section has a heading

  Scenario: Testimonial slider
    Then a slider/carousel displays testimonial cards
    And each testimonial card contains:
      | Element     | Required |
      | Quote text  | yes      |
      | Avatar      | yes      |
      | Name        | yes      |
      | Affiliation | yes      |

  Scenario: Slider navigation
    Then previous/next controls or dots are available
    And the user can navigate between testimonial slides

  Scenario: Section background
    Then the testimonials section uses background color #eaf1f3
```

---

## 6 · News

```gherkin
Feature: News
  A section displaying three blog post preview cards.

  Background:
    Given the application is on the Home page

  Scenario: Section heading
    Then the news section heading reads "The News"

  Scenario: Blog post cards
    Then three blog post cards are displayed
    And each card contains:
      | Element         | Required |
      | Featured image  | yes      |
      | Title           | yes      |
      | Date            | yes      |
      | Author          | yes      |
      | Comment count   | yes      |
      | Excerpt         | yes      |

  Scenario: Card layout
    Then the cards are displayed in a responsive row
    And cards stack vertically on small viewports
```

---

## 7 · Newsletter

```gherkin
Feature: Newsletter
  A subscribe banner with a heading, email input, and gradient
  submit button.

  Background:
    Given the application is on the Home page

  Scenario: Newsletter banner
    Then the newsletter section displays a heading
    And an email input field is rendered
    And a "Subscribe" submit button is rendered
    And the button uses the brand-gradient background
    And the button has a rounded-full shape
    And the button text is white

  Scenario: Email validation
    When the user types an invalid email and submits
    Then the browser shows a native email validation message
```

---

## 8 · Footer

```gherkin
Feature: Footer
  A three-column footer with branding, contact info, and useful links,
  plus a link to Component Dock.

  Background:
    Given the application is on any page

  Scenario: Footer columns
    Then the footer renders three columns
    And the first column contains the site logo and a short description
    And the second column contains contact information
    And the third column contains useful links

  Scenario: Component Dock attribution
    Then the footer contains a link to https://www.componentdock.com/
    And the link text reads "Component Dock"

  Scenario: Footer background
    Then the footer uses a dark background
    And the footer text is light-colored for contrast
```

---

## 9 · Responsive Design

```gherkin
Feature: Responsive Design
  The template adapts gracefully from desktop to mobile.

  Scenario Outline: Layout at viewport width <width>
    When the browser viewport width is <width> pixels
    Then the navbar collapses into a hamburger menu
    And the info boxes stack vertically
    And the department grid stacks to 1 column
    And the news cards stack vertically
    And the footer columns stack vertically
    Examples:
      | width |
      | 375   |
      | 768   |
```

---

## 10 · Typography and Global Styles

```gherkin
Feature: Typography and Global Styles
  The site uses a consistent type scale and global styling.

  Scenario: Font family
    Then the body font-family is Raleway, falling back to sans-serif

  Scenario: Body text color
    Then the default body text color is #404040

  Scenario: Button style
    Then buttons with .btn-brand use brand-gradient as background
    And buttons with .btn-brand have border-radius rounded-full
    And buttons with .btn-brand have white text
```
