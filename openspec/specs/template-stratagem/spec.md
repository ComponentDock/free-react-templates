# Template: Stratagem (Business / Consulting)

## Purpose

Stratagem is a business consulting landing template in the free-react-templates
monorepo. It is a React recreation of the ColorLib free "Conbusi" website
template design (source: https://colorlib.com/wp/template/conbusi/), built
under a DIFFERENT name (Stratagem — a scheme or plan of action, fitting for
consulting) per the monorepo naming mandate, with the monorepo stack: Vite +
React 19 + Tailwind CSS 4 + TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Conbusi" — business consulting landing template
  (source: https://colorlib.com/wp/template/conbusi/).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/conbusi/`
  (HTTP 200, ~12 KB HTML + `css/style.css` ~25 KB parsed for tokens).
  **TEMPLATES.md screenshot:** `conbusi-free-template.jpg`.
- **Visual design (screenshot + preview DOM):** White body with dark navy
  blue (#001D38) section overlays. Blue accent (#5DB2FF) on buttons and
  links. Full-height hero slider with dark overlay and centered headline.
  Clean professional consulting aesthetic. Poppins typography (300–700).
  Pill/rounded buttons (30px border-radius). Parallax background images
  with dark overlays on counters and info sections.
- **Section order (1:1, from live demo DOM):**
  1. **Header/Navbar** — Two-tier: top bar (desktop only) with welcome
     text "Welcome to Conbusi consulting service" + email/phone + social
     icons (LinkedIn/Facebook/Google+). Main nav: logo image + links:
     Home (active), Pages (dropdown: Case Details, About, Elements),
     Services, Case Study, Blog (dropdown: Blog, Single-Blog), Contact.
     "Get a Quote" CTA button (outlined, pill). Sticky header with white
     background on scroll. Mobile hamburger menu.
  2. **Hero Slider** — Owl Carousel, 4 slides alternating 2 background
     images. Dark navy overlay (0.4 opacity via `overlay2` class, bg
     #001D38). Height 750px (100vh on mobile). Centered white text:
     H3 "Big Opportunity for your Business" (60px, 300 weight, letter-
     spacing 2px) + "Our Services" pill CTA button (gradient blue).
  3. **Services** — "What we Do?" heading (46px, 300 weight, #001D38).
     6 service cards in 3×2 grid: Marketing & SEO Agency, Startup Agency,
     Corporate Business, Finance Solution, Food & Restaurant, Travel
     Agency. Each: SVG icon + title + blurb + "Learn More" link (blue).
  4. **About** — Split layout. Left: "Why our Consulting?" heading +
     description paragraph + "About Us" pill button. Right: illustration
     image (`img/service/about.png`).
  5. **Counters** — Parallax background image with dark overlay (0.6, bg
     #001D38). 4 counters: Team Members (200+), Business Success (97%),
     Happy Client (5628), Business Done (5637). Each: SVG icon + white
     number (46px, 300 weight) + label (white 80%, 15px). Animated on
     scroll via counterUp jQuery plugin.
  6. **Case Study** — "Case Study" heading. Owl Carousel of 4 cards:
     thumbnail image + category tag ("Finance Solution") + title
     ("Consumer Products Consulting"). "More Cases" outline pill button.
  7. **FAQ Accordion** — Split layout. Left: illustration image. Right:
     "Frequently ask" heading + 3 Bootstrap accordion items: "Adieus who
     direct esteem It esteems luckily?", "Who direct esteem It esteems?",
     "Duis consectetur feugiat auctor?" — each with placeholder answer
     text.
  8. **Testimonials** — Dark overlay section (bg #001D38, 0.7 opacity).
     Owl Carousel of 3 slides: quote SVG icon + quote paragraph + circular
     avatar + name + role. All slides identical (Robert Thomson, Business
     Owner) — differentiate in React version.
  9. **Team** — "Expert Team" heading. 3 team member cards (col-4):
     image (10px border-radius, scale on hover) + name + role + social
     links (Facebook/Twitter/Instagram). Members: Milani Mou (Photographer),
     Jasmine Pinky (Photographer), Piya Zosoldos (Photographer).
  10. **Contact Form** — "Get Free Quote" form (col-5): name input +
      email input + message textarea + "Send" pill button. Right (col-6):
      contact illustration image.
  11. **Info CTA** — Dark overlay section (bg #001D38). Centered: "For Any
      Information Call Us" + blurb + phone number pill button.
  12. **Footer** — White background. 4-column layout: logo + contact info
      (email/phone/address) + social icons (Facebook/Twitter/Instagram) /
      Services links (Marketing & SEO, Startup, Finance solution, Food,
      Travel) / Useful Links (About, Blog, Contact, Appointment) /
      Subscribe form (email input + Subscribe button + blurb). Copyright
      bar at bottom.

## Design tokens

| Token                 | Value                                                         |
| --------------------- | ------------------------------------------------------------- |
| Font family           | "Poppins", sans-serif (weights 200–700)                       |
| Brand / accent        | `#5DB2FF` (blue)                                              |
| Brand gradient btn    | `linear-gradient(to bottom, #0181f5, #5DB2FF)`                |
| Heading color         | `#001D38` (dark navy)                                         |
| Body text color       | `#4D4D4D`                                                     |
| Overlay background    | `#001D38` (dark navy) at opacities 0.4, 0.6, 0.7             |
| Selection bg          | `#444`, color `#fff`                                          |
| Button pill           | bg gradient #0181f5→#5DB2FF, white, border-radius 30px, 500 wt|
| Button outline        | border 1px solid #5DB2FF, color #5DB2FF, border-radius 30px   |
| Button hover          | bg #5DB2FF, color #fff                                        |
| Hero H3               | white, 60px, 300 weight, letter-spacing 2px                   |
| Section title         | 46px, 300 weight, color #001D38                               |
| Counter number        | white, 46px, 300 weight                                       |
| Counter label         | rgba(255,255,255,0.8), 15px                                   |
| Team thumb            | border-radius 10px                                            |
| Team name             | 24px, 300 weight, #2C2C2C                                     |
| Team role             | 13px, 300 weight, #2C2C2C                                     |
| Footer bg             | white                                                         |
| Footer title          | 18px, 500 weight, #001D38                                     |
| Footer top padding    | 145px                                                         |
| Section padding       | 120px top/bottom                                              |
| Slider height         | 750px (100vh mobile)                                          |
| Header position       | absolute, z-index 9                                           |
| Header top bar border | 1px solid rgba(255,255,255,0.2)                               |
| Social icon color     | `#A8A7A0`                                                     |

## Gherkin requirements

### Header / Navbar

Scenario: Navbar renders with logo and navigation links
  Given the page loads
  Then the navbar displays logo and links: Home, Pages, Services,
    Case Study, Blog, Contact
  And a "Get a Quote" CTA button is visible

Scenario: Navbar top bar shows contact info
  Given the page loads on desktop
  Then a top bar shows welcome text, email, phone, and social icons

Scenario: Navbar becomes sticky on scroll
  Given the user scrolls down
  Then the navbar sticks to the top with white background

### Hero

Scenario: Hero displays a carousel with headline and CTA
  Given the page loads
  Then a full-width slider shows "Big Opportunity for your Business"
  And a "Our Services" pill button is displayed
  And a dark navy overlay covers the background image

### Services

Scenario: Services section shows 6 service cards
  Given the page loads
  Then 6 service cards are displayed in a 3×2 grid
  And each card has an icon, title, description, and "Learn More" link

### About

Scenario: About section shows text and illustration
  Given the page loads
  Then a "Why our Consulting?" heading is displayed with description text
  And an "About Us" pill button is shown
  And an illustration image appears on the right

### Counters

Scenario: Counter section displays 4 stats
  Given the page loads
  Then 4 counters are visible: Team Members, Business Success,
    Happy Client, Business Done
  And each counter has an SVG icon and white number

Scenario: Counters animate on scroll
  Given the user scrolls to the counter section
  Then the numbers animate from 0 to their target values

### Case Study

Scenario: Case study section shows a carousel of cards
  Given the page loads
  Then a carousel with 4 case study cards is displayed
  And each card shows an image, category tag, and title
  And a "More Cases" outline button is visible

### FAQ Accordion

Scenario: FAQ section shows an image and accordion
  Given the page loads
  Then a "Frequently ask" heading is displayed with an illustration
  And 3 accordion items are shown

Scenario: Accordion item expands on click
  Given the user clicks an accordion button
  Then the panel content expands and becomes visible

### Testimonials

Scenario: Testimonials carousel shows client quotes
  Given the page loads
  Then a carousel with testimonial slides is displayed
  And each slide shows a quote icon, quote text, avatar, name, and role

### Team

Scenario: Team section shows 3 team member cards
  Given the page loads
  Then 3 team member cards are displayed
  And each card shows an image, name, role, and social links

### Contact Form

Scenario: Contact form renders with inputs and button
  Given the page loads
  Then a "Get Free Quote" form is shown with name, email, message fields
  And a "Send" pill button is displayed

Scenario: Contact form validates inputs
  Given the user clicks "Send" without entering data
  Then the form prevents submission

### Info CTA

Scenario: Info CTA section shows phone number
  Given the page loads
  Then "For Any Information Call Us" heading is displayed
  And a phone number pill button is shown

### Footer

Scenario: Footer renders 4-column layout
  Given the page loads
  Then 4 footer columns are displayed: About, Services, Useful Links,
    Subscribe

Scenario: Footer copyright bar is visible
  Given the page loads
  Then a copyright bar with "Component Dock" link is displayed

## Verification checklist

- [ ] Header: two-tier navbar with logo, 6 nav links, "Get a Quote" CTA
- [ ] Hero: 4-slide carousel with dark overlay, centered headline + CTA
- [ ] Services: 6 icon cards in 3×2 grid
- [ ] About: split layout with text + illustration
- [ ] Counters: 4 stats on parallax background with dark overlay
- [ ] Case Study: carousel of 4 cards with "More Cases" button
- [ ] FAQ: accordion with 3 items + illustration
- [ ] Testimonials: carousel with quote, avatar, name, role
- [ ] Team: 3 member cards with social links
- [ ] Contact: form with name/email/message + illustration
- [ ] Info CTA: dark overlay with phone number
- [ ] Footer: 4-column layout + copyright bar with Component Dock link
- [ ] Design tokens: Poppins font, #5DB2FF blue accent, #001D38 navy
- [ ] All placeholder images via picsum.photos/seed/stratagem-*
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
