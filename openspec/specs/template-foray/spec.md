# Template: Foray (Creative Agency / Portfolio)

## Purpose

Recreation of ColorLib "F-plus Portfolio Template" as a modern React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/fplus/
- **Preview:** https://preview.colorlib.com/theme/fplus/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/fplus-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript · packages/ui

## Design Tokens

| Token              | Value                          | Notes                                      |
| ------------------ | ------------------------------ | ------------------------------------------ |
| Font family        | Montserrat (Google Fonts)      | Weights: 300, 400, 500, 600, 700          |
| Brand / accent     | `#ff6c00` (orange)             | Buttons, links, scroll-up, dropdown active |
| Heading color      | `#000000` (black)              | All h1-h6                                  |
| Body text          | `#606060` (dark gray)          | Paragraphs, 18px, line-height 2            |
| Section bg         | `#f9f9f9` (light gray)         | `.bg-gray` on most sections                |
| Button radius      | 2px (scroll-to-top), 9px (dropdown) | Mostly sharp / minimal rounding      |
| Section heading    | Uppercase, letter-spacing 4px  | Centered with 50px × 2px black line below  |
| Hero background    | Full-width image               | Dark overlay, white text                   |
| Navbar             | White bg rgba(255,255,255,0.95)| Slide-in overlay on mobile, social icons   |

## Section Structure (order from source)

1. **Navbar** — Logo left, hamburger menu icon. On open: full-screen overlay with vertical nav links + social icons (Facebook, Twitter, Instagram, Vimeo, Pinterest). Links: Home, About Us, Pages (dropdown), Projects, Our Clients, Recent News, Contact.
2. **Hero** — Full-viewport background image. Right-aligned text: heading "For More Agency", CTA button "View Portfolio" (links to #projects, plus icon).
3. **About Us** — Section heading "About Us" with underline. Two-column layout: left = large image, right = "Who We Are" heading + paragraph. Below: 3-column feature cards — (wallet icon) "Reasonable pricing", (credit-card icon) "eCommerce support", (switching-user icon) "User-friendly admin", each with description text.
4. **Projects / Portfolio** — Section heading "Projects" with underline. Filter bar: "All Fields", "branding", "editorial design", "graphic design" (active filter highlighted with orange bg). 3-column masonry grid (6 items). Each item: image + hover overlay showing category link + title "One Branding Identity". "Load More" button at bottom.
5. **Methods / How We Work** — Section heading "Methods" with underline. White inner container: "How We Work" heading + description paragraph. Below: large video thumbnail with centered play button overlay.
6. **Our Clients** — Section heading "Our clients" with underline. Horizontal scrolling logo strip (12 client logo placeholders).
7. **Recent News / Blog** — Section heading "Recent News" with underline. 3-column blog card grid. Each: thumbnail image, article title, author avatar + name + date ("Lora Palmer, Sep 29, 2017").
8. **Contact** — Section heading "Contact" with underline. 2-column form: Name, Email, Subject, Telephone inputs + Message textarea. "Send Message" button (orange bg). Below: Google Maps embed placeholder.
9. **Footer** — Dark background. 3-column: About text + quick links, Navigation links, Subscribe form + social icons. Copyright line at bottom.

## Gherkin Requirements

### Feature: Navbar

Scenario: Logo and menu toggle
  Given the user views the page
  When the page loads
  Then a logo appears in the top-left area
  And a hamburger menu icon appears in the top-right area

Scenario: Menu opens as overlay
  Given the hamburger menu is closed
  When the user clicks the hamburger icon
  Then a full-screen overlay menu appears
  And the overlay contains navigation links: Home, About Us, Projects, Our Clients, Recent News, Contact
  And the overlay shows social media icons (Facebook, Twitter, Instagram, Vimeo, Pinterest)

Scenario: Menu closes
  Given the overlay menu is open
  When the user clicks the close button (hamburger icon again)
  Then the overlay menu closes

Scenario: Navigation links scroll to sections
  Given the overlay menu is open
  When the user clicks a navigation link (e.g. "About Us")
  Then the page scrolls to the corresponding section
  And the overlay menu closes

### Feature: Hero

Scenario: Hero displays background image and CTA
  Given the user views the page
  Then a full-viewport hero section displays a background image
  And the heading "For More Agency" is displayed right-aligned
  And a CTA button "View Portfolio" is visible with a plus icon

Scenario: CTA scrolls to projects
  Given the hero section is visible
  When the user clicks "View Portfolio"
  Then the page scrolls to the Projects section

### Feature: About Us

Scenario: About section displays heading and content
  Given the user scrolls to the About section
  Then the heading "About Us" is displayed centered with an underline
  And a two-column layout shows an image on the left and text on the right
  And the text contains "Who We Are" heading and a paragraph

Scenario: Feature cards are displayed
  Given the About section is visible
  Then three feature cards appear in a row below the about text
  And the first card shows "Reasonable pricing" with a wallet icon
  And the second card shows "eCommerce support" with a credit-card icon
  And the third card shows "User-friendly admin" with a user icon

### Feature: Projects / Portfolio

Scenario: Portfolio grid displays
  Given the user scrolls to the Projects section
  Then the heading "Projects" is displayed centered with an underline
  And filter buttons are visible: "All Fields", "branding", "editorial design", "graphic design"
  And a 3-column grid of 6 portfolio items is displayed

Scenario: Portfolio filter works
  Given the Projects section is visible
  When the user clicks the "branding" filter button
  Then only portfolio items tagged "branding" remain visible
  And the "branding" button is highlighted with the accent color

Scenario: Portfolio item hover overlay
  Given a portfolio item is displayed
  When the user hovers over a portfolio item
  Then an overlay appears showing the category and a title
  And a plus-icon link is visible for viewing details

Scenario: Load More button
  Given the portfolio grid is displayed
  Then a "Load More" button appears below the grid

### Feature: Methods / How We Work

Scenario: Methods section displays
  Given the user scrolls to the Methods section
  Then the heading "Methods" is displayed centered with an underline
  And a white container shows "How We Work" heading with description text
  And a video thumbnail with a centered play button is displayed

### Feature: Our Clients

Scenario: Client logos display
  Given the user scrolls to the Clients section
  Then the heading "Our clients" is displayed centered with an underline
  And a horizontal row of client logo placeholders is displayed

### Feature: Recent News / Blog

Scenario: Blog cards display
  Given the user scrolls to the News section
  Then the heading "Recent News" is displayed centered with an underline
  And 3 blog post cards are displayed in a row
  And each card shows a thumbnail, article title, author avatar, author name, and date

### Feature: Contact

Scenario: Contact form displays
  Given the user scrolls to the Contact section
  Then the heading "Contact" is displayed centered with an underline
  And a form with fields: Name, Email, Subject, Telephone, Message is displayed
  And a "Send Message" button is displayed with accent color background

Scenario: Form validation
  Given the contact form is displayed
  When the user clicks "Send Message" without filling required fields
  Then browser validation messages appear on required fields

Scenario: Google Maps placeholder
  Given the Contact section is visible
  Then a map area placeholder is displayed below the form

### Feature: Footer

Scenario: Footer displays
  Given the user scrolls to the footer
  Then a dark-background footer with 3 columns is displayed
  And the first column shows About text and quick links
  And the second column shows navigation links
  And the third column shows a Subscribe email form and social media icons
  And a copyright line appears at the bottom

Scenario: Subscribe form
  Given the footer is visible
  When the user enters an email in the Subscribe input
  And clicks the submit button (arrow icon)
  Then the form attempts to submit (no backend — handled gracefully)

## Verification Checklist

- [ ] Navbar renders with logo and hamburger; overlay opens/closes
- [ ] Navigation links scroll to correct sections
- [ ] Hero displays background image, heading, and CTA
- [ ] CTA button scrolls to Projects
- [ ] About Us: heading, two-column image/text layout, three feature cards
- [ ] Projects: filter buttons, 6-item grid, hover overlays, Load More
- [ ] Methods: heading, white container with video thumbnail
- [ ] Clients: logo strip renders
- [ ] Blog: 3 cards with images, titles, author info
- [ ] Contact: form with 5 fields + submit button + map placeholder
- [ ] Footer: 3 columns, subscribe form, social icons, copyright
- [ ] All design tokens applied (Montserrat, #ff6c00 accent, #f9f9f9 bg, black headings)
- [ ] Responsive layout works (mobile overlay nav, stacked columns)
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
