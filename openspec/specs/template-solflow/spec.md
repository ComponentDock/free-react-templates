# Template: Solflow (Yoga/Wellness Landing Page)

## Purpose

Solflow is a single-page yoga/wellness website template in the free-react-templates monorepo. It is a React recreation of the ColorLib free "Yoga Studio" website template design (source: https://colorlib.com/wp/template/yoga-studio/), built under a DIFFERENT name (**Solflow** — evoking sun/energy flow, matching the studio's warm golden aesthetic) per the monorepo naming mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Yoga Studio" — Bootstrap 4 single-page yoga studio template with a warm golden/amber palette, hero slider, and multi-section layout.
- **Preview URL:** https://preview.colorlib.com/theme/yoga-studio/ (404 — unreachable at time of prep; analysis based on ColorLib screenshot and page description)
- **Screenshot source:** https://colorlib.com/wp/wp-content/uploads/sites/2/yogastudio-free-template.jpg

### Visual analysis (from screenshot)

- **Navigation:** Top horizontal navbar with left-aligned links (HOME, CLASSES, ABOUT US) and right-aligned links (SHOP, NEWS, CONTACT), centered logo text "YOGA STUDIO" in uppercase serif font with a decorative diamond/dot motif between words. Navbar is semi-transparent over the hero background.
- **Hero section:** Full-width hero slider with left/right arrow navigation (< and > on sides). Background image: woman doing yoga on a purple mat in a studio with exposed brick walls. Overlay text: small uppercase subtitle "YOUR INNER CHI", large headline "Find Your Zen" in white serif font, body text paragraph in white, and a CTA button "READ MORE" in muted purple/mauve with rounded corners.
- **Color palette:** Warm golden/amber tones (#d4a54b or similar warm gold for brand accents), muted purple/mauve for buttons and mat imagery, white text overlays on hero, brick red/brown from background imagery.
- **Typography:** Serif font for headlines (likely Playfair Display or similar), sans-serif for body text.
- **Button style:** Rounded/pill buttons with muted purple/mauve fill, white text.

### Section structure (from ColorLib description + template category)

The description mentions: slider, CTA buttons, contact page, Google Maps, social media icons, testimonials slider, pricing tables, and a news/blog section. The expected section order is:

1. **Navbar** — Fixed top nav with logo + links
2. **Hero slider** — Full-width image carousel with text overlay + CTA
3. **About/Intro** — Brief studio introduction text
4. **Classes** — Yoga class schedule or offerings grid
5. **Features/Services** — Key features or service cards
6. **Pricing** — Pricing table (modern style)
7. **Testimonials** — Client testimonials slider
8. **Gallery** — Image gallery or portfolio grid
9. **Blog/News** — Recent blog posts or news cards
10. **Contact** — Contact form + Google Map embed
11. **Footer** — Social links, copyright, Component Dock link

## Design tokens

| Token | Value | Source |
|-------|-------|--------|
| Brand primary | `#d4a54b` (warm gold/amber) | Screenshot hero area, nav accents |
| Brand secondary | `#8b7baa` (muted purple/mauve) | CTA button fill, yoga mat |
| Text on dark | `#ffffff` | Hero overlay text |
| Background (sections) | `#ffffff` (white) | General template body |
| Background (alt sections) | `#f8f6f3` (warm off-white) | Alternating section backgrounds |
| Font — headings | `"Playfair Display", serif` | Serif style visible in hero headline |
| Font — body | `"Poppins", sans-serif` | Standard ColorLib body font |
| Button radius | `4px` | Rounded CTA button |
| Button padding | `12px 32px` | Generous button sizing |
| Navbar background | Transparent / semi-transparent | Over hero image |

## Gherkin requirements

### Feature: Solflow Yoga Studio Template

  Background:
    Given the user opens the Solflow homepage

  Scenario: Navbar displays with navigation links
    Then the navbar shows the logo "SOLFLOW" centered
    And navigation links "Home", "Classes", "About Us" appear on the left
    And navigation links "Shop", "News", "Contact" appear on the right

  Scenario: Hero section renders with carousel
    Then a full-width hero section is visible
    And the hero displays the heading "Find Your Zen"
    And the hero displays a subtitle above the heading
    And the hero has a "Read More" CTA button
    And left and right carousel navigation arrows are present

  Scenario: Hero carousel navigates between slides
    When the user clicks the right arrow
    Then the hero content transitions to the next slide
    When the user clicks the left arrow
    Then the hero content transitions to the previous slide

  Scenario: About section displays studio introduction
    Then an about section is visible with a heading
    And the about section contains introductory paragraph text
    And the about section has an image or visual element

  Scenario: Classes section displays offerings
    Then a classes section is visible with a heading
    And the classes section shows class cards or list items

  Scenario: Features section highlights services
    Then a features section is visible
    And feature cards show an icon, title, and description

  Scenario: Pricing section shows plans
    Then a pricing section is visible with a heading
    And pricing cards display plan names, prices, and feature lists
    And a "Get Started" or "Join Now" CTA button appears on each plan

  Scenario: Testimonials section displays reviews
    Then a testimonials section is visible with a heading
    And testimonial cards show a quote, author name, and optional image

  Scenario: Gallery section shows images
    Then a gallery section is visible with a heading
    And gallery images are displayed in a grid layout
    And gallery images have hover effects or lightbox interaction

  Scenario: Blog section displays recent posts
    Then a blog section is visible with a heading
    And blog cards show a featured image, title, excerpt, and date
    And each blog card has a "Read More" link

  Scenario: Contact section provides contact form and map
    Then a contact section is visible with a heading
    And a contact form shows name, email, subject, and message fields
    And a Google Maps embed or map placeholder is present
    And a "Send Message" submit button is visible

  Scenario: Footer displays links and attribution
    Then a footer is visible
    And the footer contains a link to "https://www.componentdock.com/"
    And social media icon links are present in the footer

  Scenario: Page is responsive on mobile
    When the viewport width is less than 768px
    Then the navbar collapses into a hamburger menu
    And sections stack vertically
    And the hero text remains readable
    And pricing cards stack vertically

  Scenario: Page accessibility basics
    Then all images have descriptive alt attributes
    And all form fields have associated labels
    And interactive elements are keyboard-focusable
    And heading hierarchy follows h1 → h2 → h3 order

## Verification checklist

- [ ] Navbar renders with all navigation links
- [ ] Hero section shows heading, subtitle, CTA, and carousel arrows
- [ ] Hero carousel slides on arrow click
- [ ] About section has heading + paragraph + visual
- [ ] Classes section displays class offerings
- [ ] Features section shows icon + title + description cards
- [ ] Pricing section shows plan cards with prices
- [ ] Testimonials section shows quotes with author info
- [ ] Gallery section shows image grid
- [ ] Blog section shows post cards with image + title + excerpt
- [ ] Contact section has form fields + map placeholder
- [ ] Footer links to Component Dock
- [ ] All sections follow design token color palette
- [ ] Responsive behavior at mobile breakpoints
- [ ] Accessibility: alt text, labels, keyboard focus, heading order
- [ ] No ColorLib references in app code (only in spec/PR)
