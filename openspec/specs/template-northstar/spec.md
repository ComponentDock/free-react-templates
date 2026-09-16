# Template: Northstar (Life Coaching One-Page)

## Purpose

Recreation of ColorLib's **Coach** life coaching template.

- **Source:** https://colorlib.com/wp/template/coach/
- **Preview:** https://preview.colorlib.com/theme/coach/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/coach-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Package:** `@free-react-templates/northstar`
- **Deploy:** `northstar.free.componentdock.com`

A life coaching / personal development single-page template with a hero image
slider, founder about section, training carousel, services icons, photo gallery
with lightbox, testimonial carousel, blog entries, contact form, and a 3-column
footer with newsletter subscription.

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`):

| Token              | Value                    | Usage                              |
| ------------------ | ------------------------ | ---------------------------------- |
| primary            | `#037ef3`                | Buttons, links, logo dot, icons    |
| primary-hover      | `#000000`                | Button hover state                 |
| accent-orange      | `#fd7e14`                | Decorative accent (used sparingly) |
| accent-yellow      | `#ffdd40`                | Decorative accent                  |
| text-dark          | `#212529`                | Headings, strong text              |
| text-body          | `#333333`                | Body text                          |
| text-muted         | `#737373`                | Secondary text, captions           |
| text-light         | `#999999`                | Tertiary text                      |
| bg-light           | `#eff1f3`                | Section alternating bg             |
| bg-lighter         | `#f7f7f7`, `#f8f9fa`     | Subtle bg variations               |
| white              | `#ffffff`                | Card backgrounds, text on dark     |
| dark               | `#000000`                | Footer bg, dark sections           |
| border             | `#dee2e6`, `#e6e6e6`     | Dividers, form controls            |
| font-body          | `'Open Sans', sans-serif` | Body text, UI elements             |
| font-heading       | `'Playfair Display'`      | Display headings, hero text        |
| font-serif         | `'Vollkorn', serif`       | Accent/serif text                  |
| button-radius      | `5px`                    | Form inputs, some cards            |
| button-style       | Bootstrap `.btn-primary`  | `#037ef3` bg, white text           |

## Section Structure (order from live preview)

1. **Navbar** — Sticky top, logo "Northstar" with blue dot accent. Menu:
   Home, About (with dropdown: Menu One/Two/Three), Our Training, Testimonials,
   Gallery, Blog, More Links (dropdown), Our Training, Services, Contact.
   Mobile hamburger toggle. Smooth-scroll anchors.

2. **Hero** — Full-width image slider (3 cycling images) with dark overlay.
   Heading text overlay: "We are" + main heading. CTA button.

3. **About** — Two-column: left heading "Hey there, I'm John The Founder",
   three paragraphs of bio text, "Learn More" primary button. Right: not visible
   in this layout (text-only section with generous spacing).

4. **Training** — Gray bg (`#eff1f3`). Heading "Our Training" centered with
   description. Carousel of training cards: each has image, title, description.
   Cards: "Life Coach Training", "Release Your Potential", "Transforming Lives"
   (repeated for carousel overflow).

5. **Services** — White bg. Heading "Our Services" centered with description.
   Carousel of icon cards: each has a large icon (badge, target, agreement,
   line-chart), title, description. Same card pattern as training but with
   icons instead of images.

6. **Gallery** — Full-width (`container-fluid`). Heading "Gallery" centered.
   4-column responsive grid (col-xl-3) of 12 images with lightbox links
   (fancybox). Images have hover fade effect.

7. **Testimonials** — Heading "Happy Customers" centered. Carousel of
   testimonials: each has a blockquote, circular avatar photo, and name.
   Customers: Ricky Fisher, Ken Davis, Mellisa Griffin, Robert Steward.

8. **Blog** — Heading "Our Blog" centered with description. 2-column grid
   of 4 blog entries. Each: thumbnail image (left), title + date + excerpt +
   "Read More" link (right). Horizontal card layout on lg+.

9. **Contact** — Gray bg (`#eff1f3`). Heading "Contact Us" centered. 3-column
   info row: Address, Phone, Email. Below: form with First Name × 2 side by
   side, Email, Message textarea, "Send Message" primary button.

10. **Footer** — Dark bg. 3-column: About Us (description paragraph),
    Quick Links (smooth-scroll list), Follow Us (social icons) + Subscribe
    Newsletter (email input + Send button). Copyright bar with
    "Component Dock" attribution.

## Gherkin Requirements

### Feature: Northstar Template

```gherkin
Feature: Northstar — life coaching one-page template
  As a visitor
  I want to browse a life coaching website
  So that I can learn about coaching services and contact the coach

  Background:
    Given the Northstar template is loaded in the browser

  # --- Navbar ---
  Scenario: Navbar displays navigation links
    Then I should see links for Home, About, Our Training, Testimonials, Gallery, Blog, Services, Contact
    And the navbar should be sticky at the top

  Scenario: Navbar has dropdown menus
    When I hover over "About"
    Then a dropdown with Menu One, Menu Two, Menu Three should appear

  Scenario: Navbar smooth-scrolls to sections
    When I click "Services" in the navbar
    Then the page should scroll smoothly to the services section

  # --- Hero ---
  Scenario: Hero shows heading and image slider
    Then I should see a heading starting with "We are"
    And the hero background should cycle through images

  # --- About ---
  Scenario: About section introduces the founder
    Then I should see "Hey there, I'm John The Founder"
    And I should see a "Learn More" button

  # --- Training ---
  Scenario: Training section shows carousel of programs
    Then I should see heading "Our Training"
    And I should see training cards with images and descriptions

  # --- Services ---
  Scenario: Services section shows icon cards
    Then I should see heading "Our Services"
    And I should see service cards with icons, titles, and descriptions

  # --- Gallery ---
  Scenario: Gallery shows image grid
    Then I should see heading "Gallery"
    And I should see a grid of 12 images

  Scenario: Gallery images open lightbox
    When I click a gallery image
    Then a lightbox overlay should open with the full image

  # --- Testimonials ---
  Scenario: Testimonials show customer quotes
    Then I should see heading "Happy Customers"
    And I should see testimonial cards with quotes, avatars, and names

  # --- Blog ---
  Scenario: Blog shows entries with images
    Then I should see heading "Our Blog"
    And I should see 4 blog entries with thumbnails, titles, dates, and excerpts

  # --- Contact ---
  Scenario: Contact form has all fields
    Then I should see fields for First Name (×2), Email, Message
    And a "Send Message" button

  Scenario: Contact info shows company details
    Then I should see Address, Phone, and Email information

  # --- Footer ---
  Scenario: Footer shows about, links, and newsletter
    Then I should see an "About Us" description
    And I should see "Quick Links" with smooth-scroll anchors
    And I should see a "Subscribe Newsletter" form with email input

  Scenario: Footer links to Component Dock
    Then the footer should contain a link to componentdock.com
```

## Verification Checklist

- [ ] All 10 sections present in correct order
- [ ] Navbar sticky, smooth-scroll, dropdown menus, mobile toggle
- [ ] Hero: image slider cycling, overlay heading, CTA
- [ ] About: founder intro, paragraphs, "Learn More" button
- [ ] Training: gray bg, carousel of image+text cards
- [ ] Services: icon cards carousel with flaticon replacements (lucide-react)
- [ ] Gallery: 4-column responsive grid, 12 images, lightbox on click
- [ ] Testimonials: carousel with quotes, circular avatars, names
- [ ] Blog: 2-col grid, 4 entries with image+text horizontal layout
- [ ] Contact: gray bg, 3-col info, form with fields, send button
- [ ] Footer: dark bg, 3-col (about, links, follow+newsletter), copyright
- [ ] Design tokens match: primary blue #037ef3, Playfair Display headings, Open Sans body
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] Placeholder images via picsum.photos
- [ ] Google fonts loaded via index.html link tags
- [ ] Icons from lucide-react (not icofont/flaticon)
