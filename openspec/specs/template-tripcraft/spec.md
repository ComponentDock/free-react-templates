# Template: TripCraft (Bootstrap)

## Purpose

TripCraft is a single-page travel and tours website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Travelers" website template design (source:
https://colorlib.com/wp/template/travelers/), built under a DIFFERENT name
(TripCraft) per the monorepo naming mandate, with the monorepo stack:
Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Travelers" — travel and tours website template
  (source: https://colorlib.com/wp/template/travelers/, category "Bootstrap").
- **Preview DOM analyzed:** the official preview
  (`https://preview.colorlib.com/theme/travelers/`) is REACHABLE (HTTP 200,
  ~25 KB HTML + css/style.css ~18.5 KB + Bootstrap 4 CSS parsed for tokens).
  Structure below comes from the live preview DOM.
- **Screenshot note:** the TEMPLATES.md screenshot shows a full-viewport dark
  hero image with white centered headline "Never Stop Exploring" and a
  primary-colored "Book Now!" button, with a row of 3 hover-overlay
  destination cards below, followed by feature icons, testimonials, a
  destination grid, a video CTA band, services, blog, and a dark footer.
- **Design tokens extracted from css/style.css:**
  - Brand primary color: #ef6c57 (coral/orange-red, used on .text-primary,
    .btn-primary, icon accents, hover states, price highlights)
  - Font family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif (weights 200/300/400/700/900
    loaded via Google Fonts)
  - Button style: .btn.btn-primary = solid #ef6c57 background, white text,
    border-radius: 0 (square/sharp corners), hover = no background + #000 text
  - .btn.btn-outline-primary = transparent bg, #ef6c57 border, hover = solid
    #ef6c57 bg + white text, also border-radius: 0
  - Section backgrounds: white default; .bg-light = #f4f5f9 (testimonial +
    services sections); hero/video-CTA = full-width parallax images with dark
    overlay (rgba(0,0,0,0.6))
  - Footer: solid #333333 background, white text, links #737373 / #999999
  - Card overlay (unit-1): image fills container, text centered on hover with
    semi-transparent background
  - Border radius: 0 throughout (square buttons, no rounded corners)
  - Heading font: Poppins (same family, lighter weights for display)
## Section order (1:1, from live preview DOM)

1. **Header** (site-navbar, sticky, py-1): brand "TripCraft" text
   (text-black h2) left, nav links (Home, Destinations dropdown, Discount,
   About, Blog, Contact) center, social icons (TripAdvisor, Twitter,
   Facebook, Instagram) right. Hamburger menu on mobile.

2. **Hero Slider** (slide-one-item home-slider owl-carousel): two slides,
   each site-blocks-cover overlay with background image (hero_bg_1.jpg,
   hero_bg_2.jpg), overlay:before dark gradient, centered white content:
   h1 "Never Stop Exploring" / "Love The Places" (Poppins font-weight-light),
   subtitle paragraph, primary btn btn-primary py-3 px-5 text-white "Book Now!"
   CTA. Auto-rotating carousel.

3. **Destination Cards** (site-section > overlap-section): 3-column grid
   of image cards (unit-1) — "Write Down Your Experience", "Explore Asian
   Mountains", "Safe Trip With Airasia". Each card: full-width image with
   centered overlay text heading on hover. Images overlap into next section.

4. **Feature Icons** (site-section, white bg): 3-column row of icon+text
   features — "Air Ticketing", "Cruises", "Tour Packages". Each:
   left-aligned primary-colored icon (flaticon-*), h3 title, description,
   "Learn More" link.

5. **Testimonials** (site-section block-13 bg-light): heading "Testimonials"
   centered, owl-carousel of testimonial slides. Each slide: 2-column layout —
   left = travel photo, right = white bg card with quote text + author name.
   overlap-left class on the text card.

6. **Our Destinations** (site-section, white bg): heading "Our Destinations"
   + subtitle "Choose Your Next Destination". 6-column grid (2 rows x 3 cols)
   of destination cards with images, price in text-primary, and location
   name: Santorini Greece ($590), Rome Italy ($390), Mount Fuji Japan ($390),
   Camels Dubai ($320), Elizabeth Tower London ($290), Opera House Australia
   ($390).

7. **Video CTA Band** (site-blocks-cover overlay inner-page-cover): parallax
   background image with dark overlay, centered play button (play-single-big
   circle) + "Experience Our Outstanding Services" heading (white, Poppins
   light). Links to Vimeo popup.

8. **Our Services** (site-section bg-light): heading "Our Services" +
   subtitle "We Offer The Following Services". 2 rows x 3 columns of icon+
   text service cards (6 total): Air Ticketing, Cruises, Tour Packages, Hotel
   Accommodations, Sea Explorations, Ski Experiences. Same icon-card pattern
   as Feature Icons but on #f4f5f9 background.

9. **Our Blog** (site-section, white bg): heading "Our Blog" + subtitle
   "See Our Daily News and Updates". 2-column grid of blog posts: image, h2
   title link, meta line (author + date + category), excerpt paragraph.
   Bottom: centered "View All Blog Posts" outline-primary button.

10. **CTA Banner** (site-section border-top): centered "Want To Travel With
    Us?" heading + primary "Book Now" button.

11. **Footer** (site-footer, bg #333333): 3-column layout — "About TripCraft"
    blurb, "Navigations" (2-column link list), "Subscribe Newsletter"
    (email input + "Send" button). Copyright line at bottom with heart icon
    + Component Dock link.
## Gherkin requirements

```gherkin
Feature: TripCraft - Travel and Tours Website Template

  Scenario: Header renders with brand and navigation
    Given the page loads
    Then the header displays the brand name "TripCraft"
    And navigation links are visible: Home, Destinations, About, Blog, Contact
    And social icons (Twitter, Facebook, Instagram) are present
    And a hamburger menu button is visible on mobile viewport

  Scenario: Hero slider displays with rotating slides
    Given the page loads
    Then the hero section shows a full-viewport background image with dark overlay
    And the heading "Never Stop Exploring" is displayed in white
    And a "Book Now!" primary button is centered below the heading
    And the slider auto-rotates to a second slide with "Love The Places"

  Scenario: Destination cards section displays three image cards
    Given the hero slider section is visible
    Then three destination image cards are displayed in a row
    And each card shows a heading overlay on hover
    And the cards read "Write Down Your Experience", "Explore Asian Mountains", "Safe Trip With Airasia"

  Scenario: Feature icons section displays three services
    Given the destination cards section is visible
    Then three feature items are displayed in a row
    And each feature has a coral-colored icon, title, description, and "Learn More" link
    And the features are "Air Ticketing", "Cruises", "Tour Packages"

  Scenario: Testimonials carousel displays traveler quotes
    Given the feature icons section is visible
    Then the testimonials section has a light gray background (#f4f5f9)
    And a "Testimonials" heading is centered
    And testimonial slides show a travel photo on the left and a quote card on the right
    And each quote card has a white background with author attribution

  Scenario: Destinations grid shows six locations with prices
    Given the testimonials section is visible
    Then the "Our Destinations" heading is displayed
    And six destination cards are shown in a 3-column grid
    And each card displays a price in coral color and a location name
    And locations include Santorini Greece ($590), Rome Italy ($390), Mount Fuji Japan ($390)

  Scenario: Video CTA band shows parallax with play button
    Given the destinations grid is visible
    Then a parallax image band with dark overlay is displayed
    And a circular play button is centered
    And the heading "Experience Our Outstanding Services" is shown in white

  Scenario: Services section displays six service cards
    Given the video CTA band is visible
    Then the "Our Services" heading is displayed on a light gray background
    And six service cards are shown in a 3-column grid
    And each card has a coral icon, title, description, and "Learn More" link

  Scenario: Blog section displays two posts with CTA
    Given the services section is visible
    Then the "Our Blog" heading is displayed
    And two blog post cards are shown side by side
    And each post has an image, title, meta info, and excerpt
    And a "View All Blog Posts" outline button is centered below

  Scenario: CTA banner invites users to book
    Given the blog section is visible
    Then a "Want To Travel With Us?" heading is displayed
    And a primary "Book Now" button is centered below

  Scenario: Footer displays about, navigation, and newsletter
    Given the CTA banner is visible
    Then the footer has a dark background (#333333)
    And the footer shows three columns: About, Navigations, Subscribe Newsletter
    And a copyright line is displayed with a heart icon
    And the copyright links to Component Dock (https://www.componentdock.com/)

  Scenario: All sections match the original ColorLib Travelers design
    Given the page loads with all sections
    Then the section order matches: Header, Hero Slider, Destination Cards,
      Feature Icons, Testimonials, Destinations Grid, Video CTA, Services,
      Blog, CTA Banner, Footer
    And the brand color #ef6c57 is used for primary buttons, icons, and price text
    And the font family is Poppins throughout
    And buttons have square corners (border-radius: 0)
```

## Verification checklist

- [ ] Header with brand "TripCraft" and nav links renders correctly
- [ ] Hero slider with two rotating slides and dark overlay
- [ ] Destination cards (3) with hover overlay text
- [ ] Feature icons (3) with coral-colored icons and "Learn More" links
- [ ] Testimonials carousel with photo + quote card layout
- [ ] Destinations grid (6 cards) with prices in coral
- [ ] Video CTA parallax band with play button
- [ ] Services section (6 cards) on light gray background
- [ ] Blog section (2 posts) with "View All" outline button
- [ ] CTA banner with "Want To Travel With Us?"
- [ ] Dark footer (#333333) with 3-column layout + newsletter form
- [ ] Brand color #ef6c57 used consistently throughout
- [ ] Poppins font family used throughout
- [ ] Square buttons (border-radius: 0) throughout
- [ ] Component Dock link in footer (replaces Colorlib attribution)
- [ ] No ColorLib references in app code
- [ ] Responsive layout works on mobile
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] TypeCheck passes (TypeScript strict)
- [ ] Build succeeds (Vite production build)
