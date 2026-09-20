# Template: Symposium (Conference / Event)

## Purpose

Symposium is a single-page CONFERENCE / EVENT landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Convention" free template (source:
https://colorlib.com/wp/template/convention/ / preview:
https://preview.colorlib.com/theme/convention/), built under a
DIFFERENT name (**Symposium**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 multi-section conference page built with
the FTCO theme framework (jQuery, Owl Carousel, Magnific Popup, scrollax
animations). It features a dark hero with countdown timer, tabbed
schedule, speaker grid with gradient overlay, image gallery with hover
zoom, testimonial carousel, ticket booking form, and blog cards.

**WHAT MAKES SYMPOSIUM DISTINCT (signature behaviors):**

1. **Dark hero with OUTLINE-TEXT headings and countdown timer.**
   Full-width background image with dark overlay (`#232429` at 0.4
   opacity), centered content: uppercase subheading in Barlow Condensed
   white, massive 140px `h1` with key words rendered as transparent text
   with white outline stroke (`-webkit-text-stroke`), location + date
   with magenta `#ed03be` map/calendar icons, and a live countdown timer
   showing days/hours/minutes/seconds.

2. **Purple-to-magenta gradient accents.** The brand palette uses
   `#423ead` (purple) and `#ed03be` (magenta) with a linear gradient
   `45deg, #423ead → #ed03be` on the speakers section header, booking
   form overlay, and staff card hover. The magenta `#ed03be` is the
   primary accent for social icons, link hover states, and badges.

3. **Tabbed day-by-day schedule.** Four tabs (Day 01–04) with pill
   navigation, each showing 3 speaker cards with circular avatar
   (120px, 50% radius), time badge, uppercase talk title (30px bold),
   description, and speaker name + position. Cards have bottom border
   and hover transition.

4. **Speaker grid with gradient overlay on hover.** 5 speaker cards
   on a full-width row, 350px image with magenta overlay (`opacity: 0 →
   0.85`) revealing name, position, and social icons on hover. The
   section header sits on a purple-to-magenta gradient background.

5. **Image gallery with search-icon hover.** 8 project images in a
   4-column grid, each with a dark overlay and centered search icon on
   hover.

6. **Ticket booking form on gradient background.** A registration
   section has a purple-to-magenta gradient overlay (`opacity: 0.8`)
   behind a background image, with a multi-field form: first name, last
   name, phone, ticket type dropdown, submit button. Inputs have
   transparent background with white border and white text.

7. **Dark footer with four-column layout.** Background `#232429`,
   four columns: logo + social icons (circular magenta buttons),
   Explore links, Info links, Get Your Seat CTA with email signup form.
   Bottom bar with copyright and Component Dock link.

## Design Tokens (extracted from live preview CSS)

| Token             | Value                                      | Usage                                  |
| ----------------- | ------------------------------------------ | -------------------------------------- |
| font-body         | `"Barlow", sans-serif`                     | Body text, paragraphs, form inputs     |
| font-heading      | `"Barlow Condensed", sans-serif`           | Subheadings, hero loc-date, schedule   |
| color-primary     | `#ed03be`                                  | Accent, hover, social buttons, badges  |
| color-secondary   | `#423ead`                                  | Icon bg, gradient start, accent        |
| gradient-brand    | `linear-gradient(45deg, #423ead, #ed03be)` | Speakers header, booking overlay       |
| color-dark        | `#232429`                                  | Hero overlay, footer bg, dark panels   |
| color-overlay     | `rgba(0,0,0,0.4)`                          | Hero dark overlay                      |
| color-white       | `#fff`                                     | Text on dark, hero h1, buttons         |
| color-text        | `#212529`                                  | Body text on light bg                  |
| color-muted       | `rgba(255,255,255,0.5)`                   | Footer text, footer links              |
| bg-light          | `#f8f9fa`                                  | Schedule section, testimonials         |
| border-radius-btn | `4px`                                      | Buttons                                |
| border-radius-circ| `50%`                                      | Speaker images, social icons, badges   |
| hero-height       | `850px`                                    | Hero section                           |
| h1-size           | `140px` (desktop) / `90px` / `50px`       | Hero heading, responsive               |
| subheading-size   | `34px` (desktop) / `20px`                 | Section subheadings                    |

## Requirements — Gherkin

### Feature: Symposium conference landing page

  Scenario: Top bar displays contact info and buy-ticket CTA
    Given the user loads the page
    Then a top bar shows phone number and email
    And a "Buy Ticket" button is visible in the top bar
    And social media icons (Facebook, Twitter, Instagram, Dribbble) are present

  Scenario: Navbar is dark with logo and navigation links
    Given the user loads the page
    Then a dark navbar displays the "Symposium" brand
    And navigation links include Home, About, Pricing, Schedule, Speakers, Blog, Contact
    And the navbar is sticky on scroll

  Scenario: Hero section shows conference headline with countdown
    Given the user loads the page
    Then a full-width hero with dark overlay is displayed
    And a subheading "Hurry Up! Don't Waste Time" appears in uppercase
    And the main heading shows "Biggest Developer Conference 2021"
    And key words in the heading are rendered as outline text
    And location "San Francisco, California, USA" is shown with a map icon
    And date "April 24 to 27, 2020" is shown with a calendar icon
    And a countdown timer shows days, hours, minutes, seconds

  Scenario: About section shows conference intro with experience badge
    Given the user loads the page
    Then a split layout shows an image on the left and text on the right
    And the subheading reads "Welcome to Symposium"
    And the heading reads "Biggest Developer Conference 2020"
    And a paragraph of descriptive text is present
    And a magenta "20 Year Of Experienced" badge appears below the text

  Scenario: Counter section displays event statistics
    Given the user loads the page
    Then a dark background section with image shows 4 counters
    And counters display: 301 Places, 102 Events, 1050 Photos, 61 Speakers
    And each counter has an icon

  Scenario: Schedule section has tabbed day-by-day view
    Given the user loads the page
    Then a schedule section with "Event Schedule" heading appears
    And 4 day tabs are shown (Day 01 through Day 04)
    And Day 01 is active by default
    And each day shows 3 speaker cards with circular avatar, time, title, description
    And clicking a different day tab switches the visible schedule

  Scenario: Speakers section shows team grid with hover overlay
    Given the user loads the page
    Then a speakers section with purple-to-magenta gradient header appears
    And the heading reads "Our Event Speakers"
    And 5 speaker cards are displayed in a row
    And each card shows a 350px-tall background image
    And hovering reveals the speaker name, position, and social icons

  Scenario: Gallery section displays event photos
    Given the user loads the page
    Then a gallery section with "Photos of Our Events" heading appears
    And 8 images are displayed in a 4-column grid
    And hovering shows a dark overlay with a search icon

  Scenario: Testimonials section shows a carousel
    Given the user loads the page
    Then a testimonials section with "People Say About Our Conference" heading appears
    And testimonial cards show a quote icon, text, user image, 5 stars, name, and position
    And cards are displayed in a carousel/slider

  Scenario: Booking form section accepts registration
    Given the user loads the page
    Then a booking section with "Book Your Tickets Now" heading appears
    And a gradient overlay (purple-to-magenta) is behind the form
    And the form has fields: First Name, Last Name, Phone, Ticket Type
    And a submit button is present
    And inputs have transparent background with white border

  Scenario: Blog section shows recent posts
    Given the user loads the page
    Then 3 blog cards are displayed in a row
    And each card shows an image, meta (date, author, comments), title, and excerpt

  Scenario: Footer has four columns with social and navigation
    Given the user loads the page
    Then a dark footer (`#232429`) is displayed
    And column 1 shows logo "Symposium" + description + circular magenta social icons
    And column 2 shows "Explore" links (About, Contact, Speaker, Blog)
    And column 3 shows "Info" links (Join us, Buy Ticket, Privacy, Terms)
    And column 4 shows "Get Your Seat" with an email signup form
    And a bottom bar shows copyright and "Component Dock" link

## Verification checklist

- [ ] Fonts loaded: Barlow (400/500/600/700) + Barlow Condensed (400/500/600/700) via Google Fonts
- [ ] Hero background image with dark overlay, outline text heading, countdown timer
- [ ] About section: split layout, magenta experience badge, correct colors
- [ ] Counter section: dark bg with image, 4 animated counters
- [ ] Schedule: 4 tabs, day switching works, speaker cards with circular avatars
- [ ] Speakers: gradient header, 5 cards, hover overlay with magenta
- [ ] Gallery: 4-column grid, hover overlay with search icon
- [ ] Testimonials: carousel with quotes, stars, user images
- [ ] Booking form: gradient overlay, transparent inputs, form validation
- [ ] Blog: 3 cards with image, meta, title, excerpt
- [ ] Footer: 4 columns, dark bg, social icons, Component Dock link
- [ ] No ColorLib references in app code
- [ ] All placeholder images use picsum.photos
- [ ] Responsive at mobile/tablet/desktop breakpoints
