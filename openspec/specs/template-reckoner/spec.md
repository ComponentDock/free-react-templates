# Template: Reckoner (Bookkeeping / Accounting Consulting)

## Purpose

Reckoner is a single-page bookkeeping consulting agency template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Book Keeping — Free Bookkeeping Website Template" (source:
https://colorlib.com/wp/template/book-keeping/), built under a DIFFERENT name
(Reckoner — "a person or thing that calculates or estimates"; fits the
accounting/bookkeeping theme) per the monorepo naming mandate (never reuse
the ColorLib source name), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

> NOTE (prep-stream 2026-09-10): the official preview
> `https://preview.colorlib.com/theme/book-keeping/` returns HTTP 404
> (curl verified). The TEMPLATES.md screenshot
> (`colorlib.com/wp/wp-content/uploads/sites/2/bookkeeping-free-template.jpg`,
> 1200×972, viewed and analyzed) was used as the sole visual reference.
> Design tokens were estimated from the screenshot (blue accent, white
> backgrounds, sans-serif fonts, rounded CTA buttons). The live ColorLib
> template page (https://colorlib.com/wp/template/book-keeping/) was also
> fetched but returned a Cloudflare challenge page, so CSS token extraction
> from the live source was not possible. All tokens below are screenshot-derived.

## Design reference (replication findings)

- **Original:** ColorLib "Book Keeping" — page title "Book Keeping — Free
  Bookkeeping Website Template". Category in TEMPLATES.md: **Bookkeeping
  (1)**. The recreation brands itself **Reckoner** but keeps the same section
  structure and copy kinds.
- **Screenshot analyzed (2026-09-10):**
  `colorlib.com/wp/wp-content/uploads/sites/2/bookkeeping-free-template.jpg`
  — a professional bookkeeping consulting agency landing page inside a macOS
  browser chrome mockup. Layout from top to bottom:
  1. **Top contact sub-bar** — white thin bar with phone number and email
     address, light grey text, left-aligned, social icons on the right.
  2. **Main navigation bar** — white full-width bar with:
     - Left: logo (dark blue circle with white dollar sign `$` + text
       "Book Keeping").
     - Center: nav links — Home (active/blue), About, Services (dropdown
       arrow), Blog, Contact.
     - Right: social media circular buttons (Facebook, Twitter, LinkedIn).
  3. **Hero section** — full-width photo background (person at desk with
     calculator, warm bokeh office lights), centered white heading
     "Book Keeping Consulting Agency", subtext, and a dark blue rounded CTA
     button ("GET STARTED").
  4. **About Us section** — two-column layout: left column has the hero
     photo cropped to desk/calculator scene; right column has small grey
     "ABOUT US" label, large dark heading "Mindful Planning of Monetary
     Spending and Saving", lorem ipsum body text, and four bullet-point
     items with blue arrow icons arranged in a 2×2 grid.
- **Structure continues beyond screenshot:** Based on typical ColorLib
  bookkeeping templates, the remaining sections (not visible in the cropped
  screenshot) likely include: Services section (cards with icons), Why Choose
  Us / counters section, Testimonials, Partners/Clients logos, Newsletter /
  CTA area, and Footer with links + copyright.

## Design tokens (screenshot-derived)

| Token                  | Value                                     | Notes                                                              |
| ---------------------- | ----------------------------------------- | ------------------------------------------------------------------ |
| Primary brand color    | `#3a5c9f` (muted dark blue)               | Buttons, logo circle, active nav link, social icons, arrow bullets |
| Body text color        | `#333333` (dark neutral grey)             | Paragraphs, list items                                             |
| Label/muted text       | `#666666` (medium grey)                   | Section labels like "ABOUT US", small contact text                 |
| Hero text color        | `#ffffff` (white)                         | Heading and subtext over photo background                          |
| Background (default)   | `#ffffff` (white)                         | Nav bar, sections, overall page                                    |
| Font family (headings) | `Montserrat` or `Raleway`                 | Bold, geometric sans-serif — authoritative financial feel          |
| Font family (body)     | `Open Sans` or `Roboto`                   | Regular weight, highly readable sans-serif                         |
| Button shape           | Rounded rectangle (`border-radius: ~4px`) | Dark blue fill, white uppercase text                               |
| Social icons           | Circular filled buttons                   | Same primary blue `#3a5c9f`, white icons inside                    |
| Section backgrounds    | White (default)                           | Hero uses full-bleed photo background                              |

## Requirements

### Requirement: Contact sub-bar

The system SHALL render a thin white top bar displaying contact information
and social media icons.

#### Scenario: Contact sub-bar displays contact info

- **GIVEN** the user visits the Reckoner homepage
- **WHEN** the page loads
- **THEN** a thin white top bar is visible
- **AND** it displays a phone number with a phone icon
- **AND** it displays an email address with an envelope icon
- **AND** social media icons (Facebook, Twitter, LinkedIn) appear on the right

### Requirement: Navigation bar

The system SHALL render a white full-width navigation bar with logo, nav
links, and social media icon buttons.

#### Scenario: Main navigation bar renders correctly

- **GIVEN** the user visits the Reckoner homepage
- **WHEN** the page loads
- **THEN** a white full-width navigation bar is visible below the contact bar
- **AND** the logo shows a blue circle with a dollar sign and "Reckoner" text
- **AND** navigation links include "Home", "About", "Services", "Blog", "Contact"
- **AND** the "Home" link is highlighted in the primary blue color

#### Scenario: Services nav link shows dropdown indicator

- **GIVEN** the user visits the Reckoner homepage
- **WHEN** the user looks at the Services navigation link
- **THEN** the "Services" navigation link has a dropdown arrow indicator

### Requirement: Hero section

The system SHALL render a full-width hero section with a photographic
background, white heading, subtitle, and a dark blue CTA button.

#### Scenario: Hero displays with background image

- **GIVEN** the user visits the Reckoner homepage
- **WHEN** the hero section is displayed
- **THEN** a full-width hero section is visible
- **AND** it has a photographic background of an office/desk scene
- **AND** the heading "Bookkeeping Consulting Agency" is displayed in white
- **AND** a subtitle/description text appears below the heading in white
- **AND** a "GET STARTED" call-to-action button is centered below the text

#### Scenario: Hero CTA button styling

- **GIVEN** the hero section is visible
- **WHEN** the user looks at the CTA button
- **THEN** the CTA button has a dark blue (`#3a5c9f`) background
- **AND** the button text is white and uppercase
- **AND** the button has rounded corners

### Requirement: About Us section

The system SHALL render a two-column About Us section with an image on the
left and content on the right.

#### Scenario: About Us section layout

- **GIVEN** the user scrolls to the About Us section
- **WHEN** the section is displayed
- **THEN** it has a two-column layout
- **AND** the left column displays an image of a desk/calculator scene
- **AND** the right column has an "ABOUT US" label in grey uppercase text

#### Scenario: About Us content

- **GIVEN** the user reads the About Us section
- **WHEN** the content is displayed
- **THEN** a heading reads "Mindful Planning of Monetary Spending and Saving"
- **AND** body paragraphs provide descriptive text about bookkeeping services
- **AND** four bullet-point items are arranged in a 2×2 grid
- **AND** each bullet item has a blue right-pointing arrow icon

### Requirement: Services section

The system SHALL render a Services section with multiple service cards
displaying icons, titles, and descriptions.

#### Scenario: Services section displays service cards

- **GIVEN** the user scrolls to the Services section
- **WHEN** the section is displayed
- **THEN** a heading introduces the services offered
- **AND** at least three service cards are displayed in a row
- **AND** each card has an icon, a title, and a brief description

### Requirement: Counters section

The system SHALL render a Counters section displaying numerical statistics.

#### Scenario: Stats/counters section is visible

- **GIVEN** the user scrolls to the counters section
- **WHEN** the section is displayed
- **THEN** numerical statistics are displayed
- **AND** each stat has a count number and a descriptive label

### Requirement: Testimonials section

The system SHALL render a Testimonials section with quote cards including
author information.

#### Scenario: Testimonials section displays reviews

- **GIVEN** the user scrolls to the Testimonials section
- **WHEN** the section is displayed
- **THEN** at least one testimonial quote is displayed
- **AND** each testimonial includes a quote, author name, and optional avatar

### Requirement: Newsletter section

The system SHALL render a Newsletter section with an email input and
submit button.

#### Scenario: Newsletter signup section

- **GIVEN** the user scrolls to the newsletter section
- **WHEN** the section is displayed
- **THEN** a heading invites the user to subscribe
- **AND** an email input field is provided
- **AND** a submit button is displayed

### Requirement: Footer

The system SHALL render a footer with navigation links, social icons,
copyright, and a Component Dock attribution link.

#### Scenario: Footer content and links

- **GIVEN** the user scrolls to the bottom of the page
- **WHEN** the footer is displayed
- **THEN** the footer contains site navigation links
- **AND** social media icon links are present
- **AND** a copyright line is displayed
- **AND** a "Made with Component Dock" link pointing to
  `https://www.componentdock.com/` is present
