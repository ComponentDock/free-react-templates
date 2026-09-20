# Template: Orator (Event / Conference)

## Purpose

Recreation of the ColorLib **Manup** event/conference template as a
React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

- **Source:** https://colorlib.com/wp/template/manup/
- **Preview:** https://preview.colorlib.com/theme/manup/
- **Screenshot:** ![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/manup-free-template.jpg)
- **Package:** `@free-react-templates/orator`
- **Surge target:** `orator.free.componentdock.com`

### Design tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| Brand gradient | `linear-gradient(120deg, #ee8425 0%, #f9488b 100%)` | Orange → hot pink, used on buttons, badges, active tabs, newsletter CTA |
| Accent red | `#f44949` | Nav active underline, hover accents, icon color, "About" check icons |
| Heading color | `#171822` | Dark navy-black used on all h1–h6, section titles |
| Body text | `#6a6b7c` | Paragraph text, schedule metadata, footer link color |
| Footer text | `#a0a1b5` | Muted gray for footer links, copyright, newsletter placeholder |
| Footer bg | `#171822` | Dark background for footer section |
| Blog bg | `#f4f6f8` | Light gray background for Latest Blog section |
| Body font | `"Work Sans", sans-serif` | Primary typeface for all text |
| Price font | `"Poppins", sans-serif` | Used for pricing tier amounts |
| Button border-radius | `50px` | Pill shape on primary buttons, newsletter input, subscribe button |
| Card border-radius | `2px` | Subtle rounding on pricing cards, schedule tabs, blog items |
| Section spacing | `100px` top/bottom padding on `.spad` sections |
| Shadow (card) | `0px 6px 20px rgba(0, 0, 0, 0.15)` | Pricing cards, testimonial cards |
| Shadow (blog) | `0px 0px 30px rgba(79, 84, 139, 0.15)` | Blog item cards |
| Shadow (map) | `0px 12px 30px rgba(11, 12, 48, 0.15)` | Google Maps embed |

### Visual design (from screenshot)

The original Manup screenshot shows a bold event-conference landing page
with a dark hero section, warm orange-to-pink gradient accents, and a clean
structured layout. The hero has a large headline with white text on a dark
background image. The counter section uses a vibrant gradient bar. Speaker
cards use full-bleed images with hover social overlays. Pricing is
three-column with gradient price tags. The blog section mixes one large
feature card with two smaller stacked cards. A newsletter bar uses a
background image with gradient overlay. The footer is dark navy with
partner logo carousel and social icon circles.

---

## Gherkin Requirements

### Feature: Header / Navigation

  Scenario: Renders sticky navigation bar
    Given the user loads the page
    Then a navigation bar is visible at the top
    And the nav contains links: Home, About, Speakers, Schedule, Blog, Contact
    And the nav contains a "Ticket" CTA button styled as a pill with brand gradient

  Scenario: Speakers dropdown on hover
    Given the user hovers over the "Speakers" nav link
    Then a dropdown appears listing speaker names (Emma, Sara, Jayden, Harriet)

### Feature: Hero Section

  Scenario: Displays event headline and CTA
    Given the user views the hero section
    Then a date/event info line is visible (uppercase, accent color)
    And a large headline "Change Your Mind To Become Success" is displayed
    And a "Buy Ticket" primary button is shown below the headline
    And a hero illustration/image appears on the right side

### Feature: Countdown Timer

  Scenario: Shows event countdown
    Given the user views the counter section
    Then a countdown timer displays Days, Hours, Minutes, Seconds
    And the section has a gradient background (brand gradient)
    And "Conference Date" label and descriptive text appear on the left

### Feature: About Section

  Scenario: Displays conference info with checklist
    Given the user views the about section
    Then an image appears on the left half
    And "About Conference" heading appears on the right half
    And a paragraph of descriptive text follows
    And a checklist with 4 items (with accent-colored check icons) is shown
    And a "Discover Now" link with underline effect is visible

### Feature: Team / Speakers Section

  Scenario: Displays speaker cards in a row
    Given the user views the speakers section
    Then "Who's Speaking" heading is displayed centered
    And 10 speaker cards are shown in a horizontal grid (5 per visible row)
    And each card has a background image of the speaker
    And each card shows speaker name and role on hover
    And each card has social media icon links (Facebook, Instagram, Twitter, LinkedIn)

### Feature: Schedule Section

  Scenario: Tabbed day schedule
    Given the user views the schedule section
    Then "Our Schedule" heading is displayed centered
    And 5 tabs are shown: Day 1 through Day 5, each with a date
    And the active tab has a gradient background
    And each tab shows session cards with: speaker photo, session title, speaker name/email, time, location
    And 4 sessions are shown per day tab

### Feature: Pricing Section

  Scenario: Three-column pricing cards
    Given the user views the pricing section
    Then 3 pricing tier cards are displayed side by side
    And each card has: tier name, price (with Poppins font), feature list, "Get Ticket" button
    And the middle card has a "top rated" ribbon badge
    And the section has a dark background image with overlay
    And the price text uses the brand gradient

### Feature: Latest Blog Section

  Scenario: Blog cards layout
    Given the user views the blog section
    Then "Latest News" heading is displayed centered
    And 1 large blog card appears on the left (full height)
    And 2 smaller blog cards appear stacked on the right
    And each card has: background image, category tag, title, date
    And the section has a light gray (#f4f6f8) background

### Feature: Newsletter Section

  Scenario: Newsletter signup form
    Given the user views the newsletter section
    Then a newsletter bar with background image is displayed
    And "Subscribe Newsletter" heading and description appear on the left
    And an email input field with pill shape is shown
    And a "Subscribe" button with gradient is shown on the right

### Feature: Contact Section

  Scenario: Location and map
    Given the user views the contact section
    Then "Location" heading and "Get directions to our event center" text appear
    And address, phone, email contact details are listed
    And a Google Maps embed iframe is shown on the right half

### Feature: Footer

  Scenario: Footer layout
    Given the user views the footer
    Then a partner logo carousel strip is shown at the top
    And footer nav links: Home, Speakers, Schedule, Blog, Contact
    And a copyright line with "Made with ❤ by Component Dock" text
    And social media icon circles (Facebook, Twitter, LinkedIn, Instagram, YouTube)
    And the footer has dark background (#171822)

---

## Verification Checklist

- [ ] All 11 sections rendered in correct order
- [ ] Brand gradient (#ee8425 → #f9488b) applied to buttons, active tabs, badges
- [ ] Work Sans font loaded for body/headings
- [ ] Poppins font loaded for pricing amounts
- [ ] Pill-shaped buttons (border-radius: 50px)
- [ ] Countdown timer section has gradient background
- [ ] Speaker cards have hover effect (social overlay + name slide-in)
- [ ] Schedule tabs with 5-day switching
- [ ] Pricing cards with top-rated ribbon on middle card
- [ ] Blog section with asymmetric grid (1 large + 2 small)
- [ ] Newsletter bar with input + gradient subscribe button
- [ ] Contact section with map embed
- [ ] Dark footer with partner logos and social icons
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] placeholder images use https://picsum.photos/seed/orator-<n>/<w>/<h>
