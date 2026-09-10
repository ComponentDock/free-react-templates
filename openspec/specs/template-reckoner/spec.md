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

| Token | Value | Notes |
|-------|-------|-------|
| Primary brand color | `#3a5c9f` (muted dark blue) | Buttons, logo circle, active nav link, social icons, arrow bullets |
| Body text color | `#333333` (dark neutral grey) | Paragraphs, list items |
| Label/muted text | `#666666` (medium grey) | Section labels like "ABOUT US", small contact text |
| Hero text color | `#ffffff` (white) | Heading and subtext over photo background |
| Background (default) | `#ffffff` (white) | Nav bar, sections, overall page |
| Font family (headings) | `Montserrat` or `Raleway` | Bold, geometric sans-serif — authoritative financial feel |
| Font family (body) | `Open Sans` or `Roboto` | Regular weight, highly readable sans-serif |
| Button shape | Rounded rectangle (`border-radius: ~4px`) | Dark blue fill, white uppercase text |
| Social icons | Circular filled buttons | Same primary blue `#3a5c9f`, white icons inside |
| Section backgrounds | White (default) | Hero uses full-bleed photo background |

## Requirements (Gherkin)

### Feature: Navbar

Scenario: Contact sub-bar displays contact info
  Given the user visits the Reckoner homepage
  Then a thin white top bar is visible
  And it displays a phone number with a phone icon
  And it displays an email address with an envelope icon
  And social media icons (Facebook, Twitter, LinkedIn) appear on the right

Scenario: Main navigation bar renders correctly
  Given the user visits the Reckoner homepage
  Then a white full-width navigation bar is visible below the contact bar
  And the logo shows a blue circle with a dollar sign and "Reckoner" text
  And navigation links include "Home", "About", "Services", "Blog", "Contact"
  And the "Home" link is highlighted in the primary blue color

Scenario: Services nav link shows dropdown indicator
  Given the user visits the Reckoner homepage
  Then the "Services" navigation link has a dropdown arrow indicator

### Feature: Hero Section

Scenario: Hero displays with background image
  Given the user visits the Reckoner homepage
  Then a full-width hero section is visible
  And it has a photographic background of an office/desk scene
  And the heading "Bookkeeping Consulting Agency" is displayed in white
  And a subtitle/description text appears below the heading in white
  And a "GET STARTED" call-to-action button is centered below the text

Scenario: Hero CTA button styling
  Given the hero section is visible
  Then the CTA button has a dark blue (`#3a5c9f`) background
  And the button text is white and uppercase
  And the button has rounded corners

### Feature: About Us Section

Scenario: About Us section layout
  Given the user scrolls to the About Us section
  Then it has a two-column layout
  And the left column displays an image of a desk/calculator scene
  And the right column has an "ABOUT US" label in grey uppercase text

Scenario: About Us content
  Given the user reads the About Us section
  Then a heading reads "Mindful Planning of Monetary Spending and Saving"
  And body paragraphs provide descriptive text about bookkeeping services
  And four bullet-point items are arranged in a 2×2 grid
  And each bullet item has a blue right-pointing arrow icon

### Feature: Services Section

Scenario: Services section displays service cards
  Given the user scrolls to the Services section
  Then a heading introduces the services offered
  And at least three service cards are displayed in a row
  And each card has an icon, a title, and a brief description

### Feature: Why Choose Us / Counters Section

Scenario: Stats/counters section is visible
  Given the user scrolls to the counters section
  Then numerical statistics are displayed
  And each stat has a count number and a descriptive label

### Feature: Testimonials Section

Scenario: Testimonials section displays reviews
  Given the user scrolls to the Testimonials section
  Then at least one testimonial quote is displayed
  And each testimonial includes a quote, author name, and optional avatar

### Feature: Newsletter / CTA Section

Scenario: Newsletter signup section
  Given the user scrolls to the newsletter section
  Then a heading invites the user to subscribe
  And an email input field is provided
  And a submit button is displayed

### Feature: Footer

Scenario: Footer content and links
  Given the user scrolls to the bottom of the page
  Then the footer contains site navigation links
  And social media icon links are present
  And a copyright line is displayed
  And a "Made with Component Dock" link pointing to
  `https://www.componentdock.com/` is present

## Verification checklist

- [ ] Navbar: contact sub-bar renders with phone + email + social icons
- [ ] Navbar: main nav bar has logo, 5 links, dropdown arrow on Services
- [ ] Hero: full-width photo background, white heading, subtext, blue CTA
- [ ] About Us: two-column layout with image left, text + bullets right
- [ ] About Us: "ABOUT US" label, heading, paragraphs, 2×2 bullet grid
- [ ] Services: cards with icons, titles, descriptions
- [ ] Counters: numerical stats displayed
- [ ] Testimonials: quote cards with author info
- [ ] Newsletter: email input + submit button
- [ ] Footer: nav links, social icons, copyright, Component Dock link
- [ ] All design tokens match screenshot reference
- [ ] No ColorLib references in app code (provenance only in spec/PR)
- [ ] Footer links to https://www.componentdock.com/
