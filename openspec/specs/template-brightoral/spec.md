# Template: Brightoral (Dental Clinic)

## Purpose

Recreation of ColorLib's "Dente" template as a React 19 + Vite + Tailwind 4 + TypeScript dental clinic website.

- **Source**: ColorLib "Dente" — https://colorlib.com/wp/template/dente/
- **Preview**: https://preview.colorlib.com/theme/dente/
- **Stack**: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Category**: Medical / Dental Clinic

## Design tokens

Extracted from the live preview's stylesheets (`css/style.css`).

### Fonts

| Role         | Font family                          | Weights        |
| ------------ | ------------------------------------ | -------------- |
| Body / UI    | Nunito Sans, sans-serif              | 300, 400, 700, 900 |

Use Google Fonts `<link>` for Nunito Sans.

### Colors

| Token               | Hex / Value           | Usage                                        |
| ------------------- | --------------------- | -------------------------------------------- |
| primary red         | `#f23a2e`             | Button hover border, accent                  |
| background          | `#FFFFFF` (white)     | Main content                                 |
| appointment bg      | `#ece8d9` (cream)     | Appointment form + light sections            |
| dark overlay        | `rgba(0,0,0,0.4)`    | Hero image overlay                           |
| footer bg           | `#333333` (dark gray) | Footer background                            |
| text primary        | `#4d4d4d`             | Body text                                    |
| text dark           | `#25262a`             | Dark text, headings                          |
| footer text         | `#737373`             | Footer paragraph text                        |
| footer link         | `#999999`             | Footer links                                 |
| footer heading      | `#FFFFFF`             | Footer section headings                      |
| border light        | `#edf0f5`             | Light borders, dividers                      |
| feature bg          | `#f4f5f9`             | Feature card hover background                |
| hero text           | `#FFFFFF`             | Hero headings and body                       |
| hero sub-text       | `rgba(255,255,255,0.7)` | Hero uppercase sub-text                   |

### Buttons

- **Primary** (`.btn-primary`): Red accent (#f23a2e border on hover), font-weight 300, letter-spacing 0.2em. Box shadow on hover.
- **General** (`.btn`): Standard Bootstrap with custom hover effects (shadow + slight lift).

### Layout

- **Navbar**: White bg, logo "Dente" left, nav right (Home, About, Services, Appointment, Testimonial, Blog, Contact). Mobile hamburger.
- **Hero**: Full-viewport height cover image with dark overlay (0.4 opacity). White text: "Your **New Smile**" (900 weight on "New Smile"). Sub-text uppercase with letter-spacing.
- **Services intro**: 3-column feature cards (Periontodology, Tooth Whitening, Preventative Care) with icons.
- **Equipment strip**: 4 items (Tooth Whitening, Stethoscope, First Aid Kit, Tooth Pliers) with icons.
- **Appointment form**: Cream bg (#ece8d9), "Online **Appointment** Request Form" heading. Form with box shadow.
- **Services section**: "Our **Services**" heading, 6-column grid of service items (Tooth Whitening, Stethoscope, Dentist Chair, Tooth Pliers, First Aid Kit, Dentist Tools).
- **Success stories**: "Success **Stories**" heading, testimonial cards.
- **Testimonials**: "People **Says**" heading, review carousel.
- **Footer**: Dark gray bg (#333333), 4 columns: About, Navigation, Recent News, Subscribe Newsletter + Follow Us. Copyright.

### Section backgrounds

| Section              | Background                                    |
| -------------------- | --------------------------------------------- |
| Body                 | `#FFFFFF`                                     |
| Navbar               | `#FFFFFF` (white)                             |
| Hero                 | Image + `rgba(0,0,0,0.4)` overlay             |
| Services intro       | White                                         |
| Equipment strip      | White                                         |
| Appointment form     | `#ece8d9` (cream)                             |
| Services grid        | White                                         |
| Success stories      | `#f4f5f9` (light gray)                        |
| Testimonials         | White                                         |
| Footer               | `#333333` (dark gray)                         |

## Gherkin requirements

```gherkin
Feature: Brightoral dental clinic website

  Background:
    Given the user loads the Brightoral page

  Scenario: Navbar displays logo and navigation
    Then a white navbar is visible
    And the logo "Brightoral" is shown on the left
    And navigation links appear on the right: Home, About, Services, Appointment, Testimonial, Blog, Contact

  Scenario: Hero displays full-viewport cover
    Then a full-viewport hero shows a background image
    And a dark overlay (0.4 opacity) covers the image
    And the heading "Your New Smile" is displayed in white
    And "New Smile" uses 900 font weight
    And an uppercase sub-text with letter-spacing appears

  Scenario: Services intro shows 3 feature cards
    Then 3 service feature cards are displayed
    And cards are: Periontodology, Tooth Whitening, Preventative Care
    And each card has an icon, heading, and description

  Scenario: Equipment strip
    Then 4 equipment items are shown with icons
    And items are: Tooth Whitening, Stethoscope, First Aid Kit, Tooth Pliers

  Scenario: Appointment form on cream background
    Then the appointment form has a cream (#ece8d9) background
    And the heading reads "Online Appointment Request Form"
    And the heading uses uppercase with bold "Appointment"
    And form fields include Name, Phone, Date, Time, Message
    And the form has a box shadow

  Scenario: Services grid
    Then "Our Services" heading is displayed with bold "Services"
    And 6 service items are shown in a grid
    And items include: Tooth Whitening, Stethoscope, Dentist Chair, Tooth Pliers, First Aid Kit, Dentist Tools

  Scenario: Success stories section
    Then "Success Stories" heading is shown with bold "Stories"
    And testimonial cards are displayed on a light gray background

  Scenario: Testimonials section
    Then "People Says" heading is shown with bold "Says"
    And a carousel of review cards is displayed

  Scenario: Footer
    Then a dark gray (#333333) footer is displayed
    And columns show: About, Navigation, Recent News, Subscribe Newsletter, Follow Us
    And footer headings are white
    And footer links point to Component Dock
    And a copyright bar is shown

  Scenario: Responsive behavior
    When the viewport is below 992px
    Then the navbar collapses to a hamburger menu
    And multi-column grids stack to fewer columns
```

## Verification checklist

- [ ] White navbar with logo + nav links + mobile hamburger
- [ ] Full-viewport hero with dark overlay + "Your New Smile" heading
- [ ] Services intro 3-column feature cards
- [ ] Equipment strip with 4 icon items
- [ ] Appointment form on cream (#ece8d9) background
- [ ] Services 6-column grid
- [ ] Success stories on light gray background
- [ ] Testimonials carousel
- [ ] Dark gray (#333333) footer with columns + Component Dock link
- [ ] Brand red #f23a2e used for accent
- [ ] Nunito Sans font loaded from Google Fonts
- [ ] Responsive at 992px breakpoint
- [ ] No ColorLib references in app code
