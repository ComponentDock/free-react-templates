# Template: Soffit (Architecture Firm Onepage)

## Purpose

Soffit is a single-page architecture/interior-design firm website in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Archs" free template (source:
https://colorlib.com/wp/template/archs/), built under a DIFFERENT name
(**Soffit**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 one-page template for an architecture/interior
design firm, using Nunito Sans font, orange-red accent (#ff5733), square
buttons (rounded-0), and a dark footer. It features a hero with video play
button, feature highlights, about section with checklist, team grid, pricing
cards, FAQ accordion, testimonial carousel, project gallery, blog posts,
services list, contact form, and a 3-column footer with newsletter signup.

## Source mapping

- **ColorLib item:** "Archs" (TEMPLATES.md line 2290).
- **Source URL:** https://colorlib.com/wp/template/archs/
- **Preview URL — REACHABLE (verified 2026-09-25):**
  `https://preview.colorlib.com/theme/archs/`
  (HTTP 200, full HTML with sections, Nunito Sans font, Bootstrap 4,
  owl carousel, flaticon icons, AOS animations).
- **Preview CSS:** `css/style.css` (hand-written, Bootstrap 4 based).
- **Font:** Nunito Sans (weights 200–900, loaded via Cloudflare @font-face
  in inline `<style>`; **use Google Fonts `<link>` in index.html**).
- **Icons:** flaticon font + icomoon icon font → **replace with lucide-react**.

## Design tokens

| Token               | Value                          | Notes                                    |
| ------------------- | ------------------------------ | ---------------------------------------- |
| Brand / accent      | `#ff5733` (orange-red)         | Primary buttons, form focus, sticky nav  |
| Headings            | `#000000` (black)              | h1–h6 color                              |
| Body text           | `gray` (default browser)       | font-weight 300, font-size 1rem          |
| Font family         | `"Nunito Sans", sans-serif`    | Weights: 300 body, 700 headings          |
| Button style        | `rounded-0` (square corners)   | border-width 2px, btn-primary white text |
| Button hover        | transparent bg + `#000` text   | Inverts on hover                         |
| Footer background   | `#333333`                      | Dark grey                                |
| Footer text         | `#737373`                      | Muted grey                               |
| Footer links        | `#999999` → white on hover     |                                          |
| Footer headings     | `#ffffff` (white)              |                                          |
| Sticky navbar bg    | `#ff5733`                      | When scrolled past hero                  |
| Form focus border   | `#ff5733`                      | form-control focus/hover                 |
| Selection           | bg `#000`, text `#fff`         | ::selection                              |
| Section padding     | 5em 0 (desktop), 2.5em 0 (mobile) | site-section                        |
| Dropdown bg         | `#ffffff` with box-shadow      | Arrow-top triangle                       |
| Dropdown hover      | `#ebeef0` bg, `#212529` text   |                                          |
| Navbar top bar bg   | transparent (over hero)        | Social icons + contact info              |
| Navbar link color   | `rgba(255,255,255,0.6)` → white | Active/hover goes full white           |

## Section structure (in page order)

1. **Top Bar** — social icons (twitter, facebook, linkedin, instagram) left;
   email + phone right. Transparent over hero.
2. **Navbar** — "Archs" → "Soffit" logo left; nav links right: Home,
   About Us (dropdown: Team, Pricing, FAQ), Projects, News, Services,
   Contact. Sticky on scroll with #ff5733 background.
3. **Hero** (#home-section) — full-width background image with dark overlay,
   centered play button (video modal), "Interior Design" h1 uppercase,
   italic subtitle text.
4. **Features** (border-bottom, no id) — 3-column row: icon (flaticon) +
   heading + description for Innovative Structure, Architectural, Interior
   Design. White background.
5. **About** (#about-section) — split layout: large image left (col-lg-7),
   text right (col-lg-4 ml-auto): "Learn To Know" subtitle, "About Us" h3,
   paragraph, 4-item checklist (ul-check success), "Read More About Us"
   button (btn-primary rounded-0).
6. **Team** (#our-team-section) — "Meet Our Team" subtitle, "Our Team" h2
   bold. 6 members in 3-col grid (2 rows): circular photo, name h2,
   role subtitle, 3 social icons (facebook, twitter, instagram).
7. **Pricing** (#pricing-section) — "Pricing" subtitle, "Choose Your Plan"
   h2 bold. 3 cards (Starter, Professional, Enterprise) in col-lg-4:
   heading, price, feature list, "Buy Now" button (btn-primary rounded-0
   btn-block).
8. **FAQ** (#faq-section) — "Ask Us, We Are Happy To Answer" subtitle,
   "Frequently Ask Questions" h2 bold. 5 accordion items (Bootstrap
   accordion with collapseOne–collapseFive).
9. **Testimonials** (block-13 testimonial-wrap) — owl carousel with
   testimonial cards: quote text + author name + role. Autoplay.
10. **Projects** (#projects-section) — "Awesome Projects" subtitle,
    "Our Projects" h2 bold. 6 project cards in 3-col grid: image
    (img-fluid) + title overlay (Butterfly House, Interior Bed Design,
    Kitchen Sink Design, Lobby Interior Design, Relaxation Room Design,
    Butterfly House repeated).
11. **News** (#news-section) — "News & Update" subtitle, "Our Blog Posts"
    h2 bold. 3 blog cards: image + heading, "View All Posts" button.
12. **Services** (#services-section) — "Services" subtitle, "Our Services"
    h2 bold. 5 service items (media object): icon + heading + description.
    Innovative Structure, Architectural Design, Interior Design, Modern
    Window Design, Experts Architect.
13. **Contact** (#contact-section, bg-light) — "Get In Touch" subtitle,
    "Contact Us" h2 bold, intro paragraph. Full-width white form card:
    Full Name input, Email input, Message textarea, "Send Message" button
    (btn-primary rounded-0 btn-lg).
14. **Footer** (site-footer, border-top) — dark #333 background. 3 columns:
    - Col 1: About Us paragraph + Navigation links (2 sub-columns)
    - Col 2: Recent News (3 items with thumbnail + date + title)
    - Col 3: Subscribe Newsletter (email input + Send button) + Follow Us
      (social icons)
    - Copyright line centered at bottom.

## Gherkin requirements

### Feature: Soffit — Architecture Firm Onepage Template

  Scenario: Top bar renders social links and contact info
    Given the page loads
    Then a top bar displays social icons for twitter, facebook, linkedin, instagram
    And the top bar displays an email address and phone number

  Scenario: Navbar sticks on scroll with brand color
    Given the page loads
    When the user scrolls past the hero section
    Then the navbar becomes sticky with an orange-red (#ff5733) background
    And the navbar shows links: Home, About Us, Projects, News, Services, Contact

  Scenario: Navbar dropdown for About Us
    Given the navbar is visible
    When the user hovers over "About Us"
    Then a dropdown appears with links: Team, Pricing, FAQ

  Scenario: Hero section displays with background image and play button
    Given the page loads
    Then the hero section shows a full-width background image with dark overlay
    And a centered play button is visible
    And the heading "Interior Design" is displayed in uppercase
    And an italic subtitle text is shown below the heading

  Scenario: Features section shows three feature cards
    Given the page loads
    Then three feature cards are displayed in a row
    And each card has an icon, a heading, and a description
    And the headings are "Innovative Structure", "Architectural", "Interior Design"

  Scenario: About section shows split layout with checklist
    Given the page loads
    Then the About section displays a large image on the left
    And text content on the right with "Learn To Know" subtitle
    And a 4-item checklist is visible
    And a "Read More About Us" button is displayed

  Scenario: Team section shows six team members
    Given the page loads
    Then the Team section displays 6 team members in a grid
    And each member has a photo, name, role, and social icons

  Scenario: Pricing section shows three pricing cards
    Given the page loads
    Then three pricing cards are displayed: Starter, Professional, Enterprise
    And each card has a "Buy Now" button

  Scenario: FAQ section shows accordion with five items
    Given the page loads
    Then the FAQ section displays 5 collapsible accordion items
    And clicking an accordion header toggles its content visibility

  Scenario: Testimonials carousel rotates testimonials
    Given the page loads
    Then a testimonial carousel is visible
    And testimonials auto-rotate or can be navigated manually

  Scenario: Projects section shows six project cards
    Given the page loads
    Then 6 project cards are displayed in a grid
    And each card has an image and a title overlay

  Scenario: News section shows three blog posts
    Given the page loads
    Then 3 blog post cards are displayed
    And a "View All Posts" button is visible

  Scenario: Services section shows five service items
    Given the page loads
    Then 5 service items are displayed with icons and descriptions
    And the headings are Innovative Structure, Architectural Design,
      Interior Design, Modern Window Design, Experts Architect

  Scenario: Contact form accepts user input
    Given the page loads
    Then a contact form is displayed with Full Name, Email, and Message fields
    And a "Send Message" button is visible
    When the user fills in all fields and clicks Send
    Then the form submits (or shows a success state)

  Scenario: Footer displays three columns with newsletter signup
    Given the page loads
    Then the footer shows an About Us column with navigation links
    And a Recent News column with 3 news items
    And a Subscribe Newsletter column with email input and Send button
    And a Follow Us section with social icons
    And a copyright line at the bottom linking to Component Dock

  Scenario: Page uses Nunito Sans font
    Given the page loads
    Then the body font is "Nunito Sans" loaded from Google Fonts

  Scenario: Buttons are square with orange-red accent
    Given the page loads
    Then all primary buttons have square corners (rounded-0)
    And primary buttons have white text on #ff5733 background
    And hovering a primary button shows transparent background with black text

## Verification checklist

- [ ] All 14 sections render in correct page order
- [ ] Top bar shows social icons + contact info
- [ ] Navbar sticks on scroll with #ff5733 background
- [ ] Navbar dropdown works for About Us (Team, Pricing, FAQ)
- [ ] Hero has background image, play button, heading, subtitle
- [ ] Features section: 3 cards with icons, headings, descriptions
- [ ] About section: split layout, image, checklist, CTA button
- [ ] Team section: 6 members with photos, names, roles, social icons
- [ ] Pricing section: 3 cards (Starter, Professional, Enterprise)
- [ ] FAQ section: 5 accordion items toggle correctly
- [ ] Testimonials carousel auto-rotates / navigable
- [ ] Projects section: 6 project cards with images and titles
- [ ] News section: 3 blog cards + "View All Posts" button
- [ ] Services section: 5 service items with icons
- [ ] Contact form: Full Name, Email, Message, Send Message button
- [ ] Footer: 3 columns (About/Nav, Recent News, Subscribe + Follow Us)
- [ ] Footer copyright links to Component Dock
- [ ] Nunito Sans font loaded from Google Fonts
- [ ] Primary buttons: square corners, #ff5733 bg, white text, hover invert
- [ ] Form focus border color is #ff5733
- [ ] Dark mode support (if applicable)
- [ ] Responsive layout: mobile hamburger menu, stacked columns
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] Icons use lucide-react (not flaticon/icomoon)
