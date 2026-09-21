# Template: Bodhi (Yoga Studio)

## Purpose

Bodhi is a single-page yoga studio website in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "DoYoga" free
template (source: https://colorlib.com/wp/template/doyoga/), built under a
DIFFERENT name (**Bodhi**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

**ColorLib source:** "DoYoga" — a yoga studio landing page with a dark
transparent navbar over a hero image, featured class carousel, schedule grid,
about section with overlapping images, events blog cards, filterable gallery,
contact form, and dark footer. Preview URL:
https://preview.colorlib.com/theme/doyoga/

The original uses Bootstrap 4, jQuery, Owl Carousel, AOS scroll animations,
Fancybox lightbox, and Magnific Popup. This recreation replaces all jQuery
plugins with React equivalents (CSS-only carousel or a lightweight React
carousel, Framer Motion or CSS for scroll animations) and uses Tailwind
utilities throughout.

## Design tokens (extracted from preview CSS)

- **Font:** Quicksand (Google Fonts, weights 400, 500, 700)
- **Body text:** `gray` (`#808080`)
- **Headings:** `#000` (black)
- **Primary button:** `#fff` text, `#6610f2` (indigo) background,
  2px border, transparent on hover (outline style)
- **Form focus:** `#6610f2` border
- **Footer background:** `#333333`
- **Footer text:** `#8c8c8c`
- **Footer headings:** `#fff`
- **Footer links:** `#b3b3b3`, white on hover
- **Dropdown background:** `#fff`, border-radius 4px
- **Navbar:** transparent overlay over hero, white text, absolute positioned
- **Section padding:** 4.5em (mobile) / 7em (desktop)
- **Hero:** full-width background-image with dark overlay, centered content

## Sections (order from preview DOM)

1. **Navbar** — transparent, absolute over hero. Top bar with email + phone
   (hidden mobile) + social icons. Main bar: "Bodhi" logo (left), nav links
   (right): Home, Classes, Schedule, About, Events, Gallery, Contact. Sticky
   on scroll.
2. **Hero** — full-width background image with dark overlay, centered heading
   "A Yoga Studio", subtitle, and video play button CTA.
3. **Featured Classes** — section heading "Featured Classes" with prev/next
   buttons. Carousel of class cards: image + price tag overlay + class name.
   Cards: Ashtanga Foundations ($29.99), Surya Vinyasa ($32.99), Chandra
   Vinyasa ($22.99), Yinyasa ($34.99).
4. **Schedule** — section heading "Schedule" + description. 2-column grid,
   each item has: background image (left/right alternating), class name,
   description, time/date, "Join from $15" button. 4 schedule items total.
5. **About Us** — heading "About Us" + two paragraphs on the left, two
   overlapping images on the right (stacked with slight offset).
6. **Events** — heading "Events". 2-column blog-style cards: background image
   + title + date + excerpt + "Read More" button.
7. **Gallery** — heading "Yoga Gallery". Filter bar (All / Classes / Intern /
   Training). 3-column masonry grid of images with hover overlay (search icon).
   12 items total.
8. **Contact** — heading "Get In Touch". Left: form (name, phone, email,
   message, send button). Right: contact details (address, phone, email with
   icons).
9. **Footer** — dark background (#333). 3 columns: About text, Quick Links
   (2-col list), Newsletter subscription + social icons. Bottom: copyright +
   "Made with Component Dock" link.

## Gherkin requirements

### Feature: Bodhi Yoga Studio Template

  Scenario: Navbar renders with all navigation links
    Given the page loads
    Then the navbar displays the logo "Bodhi"
    And the nav contains links for Home, Classes, Schedule, About, Events, Gallery, Contact
    And the top bar shows contact info and social icons

  Scenario: Hero section displays with video CTA
    Given the page loads
    Then the hero section shows a full-width background image
    And the heading reads "A Yoga Studio"
    And a play button links to a video

  Scenario: Featured Classes carousel shows class cards
    Given the page loads
    When I view the Featured Classes section
    Then I see class cards with image, price, and class name
    And prev/next navigation buttons are present

  Scenario: Schedule section displays class schedule grid
    Given the page loads
    When I view the Schedule section
    Then I see a 2-column grid with 4 schedule items
    And each item shows class name, description, time, and a join button

  Scenario: About Us section displays with overlapping images
    Given the page loads
    When I view the About Us section
    Then a text column appears on the left with heading and paragraphs
    And two images overlap on the right side

  Scenario: Events section shows blog-style cards
    Given the page loads
    When I view the Events section
    Then I see event cards with image, title, date, excerpt, and read more link

  Scenario: Gallery section has filterable image grid
    Given the page loads
    When I view the Gallery section
    Then filter buttons show All, Classes, Intern, Training
    And a 3-column grid of images is displayed
    And hovering an image shows a search icon overlay

  Scenario: Contact section has form and details
    Given the page loads
    When I view the Contact section
    Then a form with name, phone, email, message fields and send button is shown
    And contact details with address, phone, and email are displayed

  Scenario: Footer renders with columns and Component Dock link
    Given the page loads
    Then the footer has 3 columns: About, Quick Links, Newsletter
    And a "Made with Component Dock" link points to https://www.componentdock.com/
    And social media icons are displayed

  Scenario: Page is responsive
    Given the page loads on a mobile viewport
    Then the navbar collapses to a hamburger menu
    And the schedule grid stacks to single column
    And the gallery grid adjusts to fewer columns

## Verification checklist

- [ ] All 9 sections present and in correct order
- [ ] Quicksand font loaded via Google Fonts
- [ ] Brand colors match design tokens (#6610f2 primary, #333 footer)
- [ ] Navbar transparent over hero, sticky on scroll
- [ ] Hero has full-width background image with overlay
- [ ] Featured Classes carousel is functional (prev/next navigation)
- [ ] Schedule grid shows 4 items in 2-column layout
- [ ] About section has overlapping images effect
- [ ] Gallery filter buttons toggle visible items
- [ ] Contact form has all fields with labels
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] All images use picsum.photos placeholders with deterministic seeds
- [ ] Responsive: hamburger nav, stacked grids on mobile
