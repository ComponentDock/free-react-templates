# Template: Grillhouse (Restaurant — Steak House)

## Purpose

Grillhouse is a single-page restaurant website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Steakshop" free template (source:
https://colorlib.com/wp/template/steakshop/), built under a DIFFERENT name
(**Grillhouse**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

The original is a Bootstrap 4 restaurant site with jQuery plugins
(owl-carousel, magnific-popup, nice-select, lightbox, animate.css, jquery-ui
datepicker) and a custom `main.js`. It features a unique fixed right-side
navigation sidebar (150px wide), a full-bleed hero banner with video popup,
overlapping food image layouts, a reservation form on a photo background,
a chef section with signature, a food gallery carousel, a brand partner
carousel, and a dark photo-overlay footer.

**WHAT MAKES GRILLHOUSE DISTINCT (signature behaviors):**

1. **Fixed right-side sidebar navigation.** Unlike typical top navbars,
   this template has a 150px-wide white sidebar fixed to the RIGHT side
   of the viewport (`.fixed-menu`). It contains a logo at the top, then
   vertical nav links (Home, About, Menu, Book Table, Chefs, Pages dropdown,
   Blog dropdown, Contact) each with a small icon image prefix. Active/hover
   state: red `#f42f2c` background with white text and a red box-shadow.
   On mobile (≤570px) the sidebar slides off-screen (`margin-right: -150px`)
   and a hamburger `.menu-trigger` (three black bars, fixed position) reveals
   it.

2. **Hero banner with video popup below.** The hero is a fullscreen
   background image (`home-banner.jpg`) with a dark overlay (`rgba(0,0,0,0.6)`).
   Below the hero: a "banner-bottom" row with a YouTube video popup button
   (play icon + "Watch video" text on the left) and a white content box
   on the right containing the heading "Steak Shop offers best steak in
   town", description text, and an "Explore Menu" primary button.

3. **Overlapping food image layouts (Breakfast + Lunch areas).** Two
   mirrored sections (Breakfast and Lunch) each have a text block on one
   side and overlapping food images on the other. The images use absolute
   positioning with one image offset and overlapping the other, creating
   a layered visual effect. The Lunch area additionally includes a chef
   attribution card (avatar + name + title).

4. **Reservation form on photo background with white card.** The reservation
   section has a background photo (`reservation-bg.jpg`) with a white card
   overlaid (`.contact-form-section`) containing: Name, Email, Phone Number,
   Number of People (select), Date & Time (datepicker), Select Event (select),
   and a "Make Reservation" primary button. The card has a box shadow and
   the form fields have bottom-border-only styling.

5. **Chef section with overlapping items row.** The chef area has a left
   image (`chef1.jpg`), right text with heading and signature image, and
   a row of four chef item thumbnails (`.chef-items`) pulled up with
   `margin-top: -200px` to overlap the chef image above.

6. **Food gallery owl-carousel.** A full-width carousel of food images
   (6 items) with no visible controls — auto-scrolling.

7. **Brand partner carousel.** "In associasion with" heading + paragraph,
   then an owl-carousel of 6 brand logo images at 20% opacity (hover 80%).

8. **Dark photo-overlay footer.** Background image (`footer-bg.jpg`) with
   a black overlay at 75% opacity. Five columns: Top Products, Quick Links,
   Features, Resources, Newsletter (email input + arrow button). Footer
   bottom: copyright + social icons (Facebook, Twitter, Dribbble, Behance).

## Design tokens (extracted from live preview CSS, verified 2026-08-18)

| Token        | Value                            | Use                                                                          |
| ------------ | -------------------------------- | ---------------------------------------------------------------------------- |
| Brand red    | `#f42f2c`                        | Primary brand color, button hover bg, nav active/hover bg, gradient start    |
| Coral accent | `#f48464`                        | Gradient end (primary-btn gradient: 90deg from #f42f2c to #f48464)          |
| Dark ink     | `#222222`                        | Body text, headings, primary button text, menu-trigger spans                 |
| Body text    | `#777777`                        | Body paragraph text                                                          |
| White        | `#fff`                           | Primary button default bg, sidebar bg, form card bg, social icon bg          |
| Footer overlay| `#000` at 75% opacity          | Dark overlay on footer background image                                      |
| Hero overlay | `#000` at 60% opacity           | Dark overlay on hero background image (via `.overlay:after`)                 |
| Fonts        | Pacifico (cursive) for logo/display; Roboto (sans-serif) for body | Google Fonts `<link>` |
| Nav font     | Roboto 12px, capitalize          | Sidebar navigation links                                                     |
| Button radius| 2px                              | `.primary-btn` border-radius                                                 |
| Primary btn  | Gradient `#f42f2c → #f48464`, white text | default state; hover: solid `#f42f2c` bg, white text                |
| Nav active   | `#f42f2c` bg + `#fff` text     | `box-shadow: 0 20px 20px rgba(244,47,44,0.1)`                               |
| Social icons | `rgba(255,255,255,0.15)` bg    | white text; hover: `#f42f2c` bg                                              |
| Brand logos  | 20% opacity, hover 80%          | `.single-brand-item img`                                                     |
| Form inputs  | Borderless with bottom border    | `border: 0; border-bottom: 1px solid #eeeeee; padding: 25px 20px; font-size: 13px` |
| Form card    | White bg, `box-shadow: 0 20px 50px rgba(0,0,0,0.1)` | `.contact-form-section`, padding 70px 50px |
| Sidebar width| 150px                            | `.fixed-menu` width; collapses off-screen on mobile (≤570px)                 |

## Gherkin requirements

### Feature: Grillhouse — Restaurant Website Template

  Scenario: Page loads with sidebar navigation and all sections
    Given the user visits the Grillhouse homepage
    Then a fixed right sidebar is visible with logo and navigation links
    And sections are rendered in order: hero/banner-bottom, breakfast, lunch, reservation, chef, food gallery, brands, footer

  Scenario: Sidebar navigation shows all links with icons
    Given the user views the sidebar navigation
    Then links are displayed: Home, About, Menu, Book Table, Chefs, Pages (dropdown), Blog (dropdown), Contact
    And each link has a small icon image prefix
    And the active link has a red background with white text

  Scenario: Sidebar collapses on mobile
    Given the user views the page at 570px width
    Then the sidebar is hidden off-screen to the right
    And a hamburger menu trigger (three bars) is visible
    And clicking the trigger reveals the sidebar

  Scenario: Hero banner shows fullscreen background with overlay
    Given the user views the hero section
    Then a fullscreen background image is displayed with a dark overlay
    And the hero has a video popup area below with play icon and "Watch video" text

  Scenario: Banner-bottom shows heading and call-to-action
    Given the user views the banner-bottom section
    Then a white content box is displayed on the right
    And the heading reads "Steak Shop offers best steak in town"
    And an "Explore Menu" button is visible

  Scenario: Breakfast section has text and overlapping food images
    Given the user views the breakfast section
    Then a text block with heading "Daily Food Courses with Drinks" is on the left
    And two overlapping food images are on the right
    And a "See Full Menu" primary button is below the text

  Scenario: Lunch section has reversed layout with chef attribution
    Given the user views the lunch section
    Then overlapping food images are on the left
    And text with heading and chef attribution (avatar + name + title) is on the right

  Scenario: Reservation form has all required fields
    Given the user views the reservation section
    Then a white card form is displayed over a background photo
    And fields include: Name, Email, Phone Number, Number of People, Date & Time, Select Event
    And a "Make Reservation" button is visible below the form

  Scenario: Chef section shows portrait, text, and item thumbnails
    Given the user views the chef section
    Then a chef portrait image is displayed on the left
    And heading text with signature image is on the right
    And four chef item thumbnails overlap the portrait from below

  Scenario: Food gallery shows carousel of images
    Given the user views the food gallery section
    Then a carousel of food images is displayed
    And images scroll automatically

  Scenario: Brands section shows partner logos
    Given the user views the brands section
    Then a heading "In associasion with" is displayed
    And a carousel of brand logos is shown at low opacity
    And logos increase opacity on hover

  Scenario: Footer has five columns and newsletter on dark overlay
    Given the user views the footer
    Then a dark photo background with overlay is displayed
    And five columns are shown: Top Products, Quick Links, Features, Resources, Newsletter
    And the Newsletter column has an email input with submit button
    And social icons are displayed in the footer bottom
    And the footer bottom links to https://www.componentdock.com/

  Scenario: Responsive behavior at mobile widths
    Given the user views the page at 767px width
    Then the sidebar collapses off-screen with hamburger trigger
    And the hero banner background image is hidden
    And the chef items row is hidden
    And footer columns stack vertically

## Verification checklist

- [ ] Right sidebar: 150px white sidebar with logo, vertical nav links, icon prefixes
- [ ] Sidebar: active/hover state with red (#f42f2c) background and white text
- [ ] Sidebar: mobile collapse (≤570px) with hamburger trigger
- [ ] Hero: fullscreen background image with dark overlay
- [ ] Banner-bottom: video popup (play icon + "Watch video"), white content box with heading + CTA
- [ ] Breakfast: text left ("Daily Food Courses with Drinks"), overlapping food images right, "See Full Menu" button
- [ ] Lunch: reversed layout, food images left, text + chef attribution right
- [ ] Reservation: white card form over photo background, all fields present, "Make Reservation" button
- [ ] Chef: portrait left, heading/signature right, four item thumbnails overlapping from below
- [ ] Food gallery: full-width carousel of food images
- [ ] Brands: "In associasion with" heading, carousel of logos at 20% opacity
- [ ] Footer: dark photo bg with black overlay, 5 columns, newsletter, social icons, Component Dock link
- [ ] Fonts: Pacifico (logo/display), Roboto (body) via Google Fonts
- [ ] Brand color: #f42f2c used consistently for buttons and accents
- [ ] No ColorLib references in app code
- [ ] Package name: @free-react-templates/grillhouse
- [ ] CNAME: grillhouse.free.componentdock.com
- [ ] Tests pass at 100% coverage (Vitest + Testing Library)
