# Template: Lenscape (Photography Portfolio)

## Purpose

Lenscape is a single-page photography portfolio template in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Bato" free template
(source: https://colorlib.com/wp/template/bato/, preview:
https://preview.colorlib.com/theme/bato/), built under a DIFFERENT name
(**Lenscape**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a multi-page jQuery/Bootstrap photography portfolio with Owl
Carousel for the hero and about sections, Magnific Popup for gallery lightbox,
and Waypoints for scroll-triggered animations. The index page features a
full-height hero with a 3/4 image + 1/4 text panel split, a work gallery with
alternating left/right layouts, newsletter subscribe, and a 3-column footer. The
about page uses a 50/50 split (image left, text carousel right). The contact
page has a 3-column address block + form.

**WHAT MAKES LENSCAPE DISTINCT (signature behaviors):**

1. **Asymmetric hero carousel (75/25 split).** Each slide is a full-height
   viewport row with 3/4 width background image and 1/4 width text panel on the
   right. The text panel contains a large Playfair Display slide number
   (e.g. "01/03"), an uppercase letter-spaced tag, a Playfair Display heading,
   body paragraph, and a CTA link. Three slides auto-advance via Owl Carousel.
   The split ratio (75/25) and the numbered overlay are the template's most
   recognizable visual signature.

2. **Alternating work gallery entries.** Six portfolio entries on the work page
   use the same 75/25 asymmetric layout but alternate which side the image
   occupies (odd entries: image right, text left; even entries: image left,
   text right). Each entry has a bold heading (linked), description paragraph,
   and "View Photo" CTA. This left-right alternation creates a zigzag visual
   rhythm that is unique among the ColorLib portfolio templates.

3. **Split-screen about carousel.** The about section is a 50/50 horizontal
   split: left half is a full-height background image, right half is an Owl
   Carousel with 3 slides (About Us / My Story / Career), each containing a
   category title, heading, body text, and optionally a checklist (Career
   slide). The carousel-within-a-split-layout is distinctive.

4. **Yellow (#F9CE00) brand accent throughout.** The bright yellow-gold accent
   is used for: active nav links, primary buttons (square 2px radius, yellow
   bg, white text), tag labels, search button, and border highlights. Combined
   with the white page background and Karla body font, this creates a clean,
   modern, high-contrast aesthetic.

5. **Sage green (#b7c2c2) footer.** The footer has a muted sage/teal background
   with three centered columns (Office address, Get in Touch email, Social
   icons) plus a copyright line. This color block is the only non-white section
   background besides the hero images.

6. **Minimal header with hamburger nav.** The header is a simple centered logo
   ("Bato" → "Lenscape") with a small hamburger toggle on the right. The
   hamburger opens a full-height side navigation panel (white bg) with a search
   field, nav links (Home, Work, Blog, About, Contact), and a thumbnail
   gallery. This off-canvas navigation pattern is the primary navigation
   mechanism.

## Design Tokens

Extracted from https://preview.colorlib.com/theme/bato/css/style.css:

| Token             | Value                               | Usage                                    |
| ----------------- | ----------------------------------- | ---------------------------------------- |
| Font — body       | "Karla", Arial, sans-serif          | All body text, nav, footer               |
| Font — headings   | "Playfair Display", Georgia, serif  | Hero headings, slide numbers, section h2 |
| Brand color       | #F9CE00 (bright yellow/gold)        | Active nav, buttons, tags, borders       |
| Page background   | #fff                                | Main page background                     |
| Text primary      | #000                                | Headings, nav links, footer              |
| Text secondary    | #727272 (rgba(114,114,114,0.8))     | Body paragraphs, descriptions            |
| Text tertiary     | #333333                             | Form inputs, search placeholder          |
| Light background  | #fcfcfc                             | Subtle section backgrounds               |
| Footer background | #b7c2c2 (sage/teal)                 | Footer block                             |
| Button radius     | 2px (square-ish)                    | Primary buttons, nav toggle              |
| Button bg         | #F9CE00                             | btn-primary background                   |
| Button text       | #fff                                | btn-primary text color                   |
| Button hover      | Darken on hover                     | Standard hover state                     |
| Tag style         | Uppercase, letter-spacing: 7px      | Hero tags ("Welcome", "Photography")     |
| Hero text panel   | 25% width, white text, dark bg      | Right panel of hero slides               |
| Slide numbers     | Playfair Display, large font        | "01/03", "02/03", "03/03"               |
| CTA link          | 13px, letter-spacing: 7px, #000     | "View Galleries →" / "View Photo"        |

## Gherkin Requirements

### Feature: Hero Carousel

  Scenario: Full-height split hero with 3 slides
    Given the page loads
    When the hero carousel renders
    Then there are exactly 3 slides
    And each slide occupies full viewport height
    And each slide has a 3/4 width background image
    And each slide has a 1/4 width text panel on the right
    And the text panel shows a slide number (01/03, 02/03, 03/03)
    And the text panel shows an uppercase letter-spaced tag
    And the text panel shows a Playfair Display heading
    And the text panel shows a body paragraph
    And the text panel shows a "View Galleries" CTA link with arrow icon

  Scenario: Carousel auto-advances
    Given the hero carousel is visible
    When 5 seconds elapse without interaction
    Then the carousel advances to the next slide
    And the slide number updates accordingly

  Scenario: Manual carousel navigation
    Given the hero carousel is visible
    When the user clicks the next/prev navigation control
    Then the carousel advances to the adjacent slide

### Feature: Navigation

  Scenario: Fixed header with logo and hamburger
    Given the page loads
    When the header renders
    Then there is a centered logo "Lenscape"
    And there is a hamburger toggle on the right side

  Scenario: Off-canvas nav panel
    Given the page loads
    When the user clicks the hamburger toggle
    Then a full-height white side panel slides in
    And the panel contains a search input
    And the panel contains nav links: Home, Work, About, Contact
    And the panel contains a thumbnail gallery (4 images)

  Scenario: Nav link highlighting
    Given the nav panel is open
    When the user views the current section
    Then the corresponding nav link is highlighted in brand yellow (#F9CE00)

### Feature: Work Gallery

  Scenario: Alternating left-right layout
    Given the Work section is visible
    When the work entries render
    Then there are 6 work entries
    And odd-numbered entries have the image on the right
    And even-numbered entries have the image on the left
    And each entry has a 3/4 image + 1/4 text split
    And each text entry has a heading, description, and "View Photo" CTA

  Scenario: Entry heading is a link
    Given a work entry is rendered
    When the user clicks the heading
    Then it navigates to the detail view (single page)

### Feature: About Section

  Scenario: 50/50 split layout
    Given the About section is visible
    When it renders
    Then the left half shows a full-height background image
    And the right half shows a text carousel with 3 slides

  Scenario: About carousel slides
    Given the about carousel is visible
    When the user navigates the carousel
    Then slide 1 shows "About Us" with heading "Hi! I'm [Name]"
    And slide 2 shows "My Story" with company history
    And slide 3 shows "Career" with a checklist of achievements

### Feature: Contact Section

  Scenario: Contact form with address
    Given the Contact section is visible
    When it renders
    Then there is a 3-column address block (address, phone, email, website)
    And there is a contact form with Name, Email, Message fields
    And there is a "Send Message" submit button

  Scenario: Form field placeholders
    Given the contact form is rendered
    When the user views the form
    Then the Name field shows placeholder "Name"
    And the Email field shows placeholder "Email"
    And the Message field shows placeholder "Message"

### Feature: Newsletter Subscribe

  Scenario: Subscribe section with email input
    Given the Newsletter section is visible
    When it renders
    Then there is a heading "Subscribe Newsletter"
    And there is a subtitle "Subscribe our newsletter and get latest update"
    And there is an email input field
    And there is a "Subscribe Now" yellow button

### Feature: Footer

  Scenario: Three-column footer
    Given the page footer is visible
    When it renders
    Then there are 3 centered columns: Office, Get in Touch, Social
    And the Office column shows an address
    And the Get in Touch column shows an email link
    And the Social column shows 4 social icon links
    And there is a copyright line at the bottom
    And the footer background is sage (#b7c2c2)

  Scenario: Footer links to Component Dock
    Given the footer is rendered
    When the user views the copyright area
    Then there is a link to https://www.componentdock.com/

### Feature: Responsive Design

  Scenario: Mobile layout
    Given the viewport width is less than 768px
    When the page renders
    Then the hero text panel stacks below the image
    And work entries stack vertically
    And the about section stacks vertically
    And the footer columns stack vertically

## Verification Checklist

- [ ] Hero carousel renders 3 full-height slides with 75/25 split
- [ ] Slide numbers, tags, headings, and CTAs render correctly
- [ ] Carousel auto-advances and supports manual navigation
- [ ] Header has centered logo and hamburger toggle
- [ ] Off-canvas nav opens/closes with search, links, and gallery
- [ ] Work gallery has 6 entries with alternating left/right layout
- [ ] About section has 50/50 split with 3-slide carousel
- [ ] Contact section has address block + form with all fields
- [ ] Newsletter subscribe has email input + yellow button
- [ ] Footer has 3 columns on sage background
- [ ] Footer links to Component Dock
- [ ] Responsive: stacks on mobile viewports
- [ ] All sections use correct design tokens (fonts, colors, spacing)
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Placeholder images use picsum.photos/seed/lenscape-N/W/H
- [ ] Footer links https://www.componentdock.com/
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] TypeScript strict mode, no `any` types
