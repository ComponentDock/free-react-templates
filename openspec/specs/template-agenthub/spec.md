# Template: AgentHub (Business — Real Estate Agent)

## Purpose

AgentHub is a single-page real estate agent landing template in the
free-react-templates monorepo. It is a React recreation of the ColorLib
"YourAgent" free template (source: https://colorlib.com/wp/template/youragent/),
preview: https://preview.colorlib.com/theme/youragent/, built under a
DIFFERENT name (**AgentHub**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a Bootstrap 4 one-page template for a real estate agent.
It features a full-viewport hero with a dark overlay on a property photo,
a "Popular Properties" card grid, customer testimonials, an agent bio with
three stat counters, a blog section, and a solid-blue footer. Fonts are
Playfair Display (serif headings) and Mukta Mahee (sans-serif body). The
primary brand color is Bootstrap blue `#007bff`. Buttons are pill-shaped
(radius 50px). Cards have subtle box-shadows. Star ratings use the primary
blue color. AOS (Animate on Scroll) is used for entrance animations.

## Design Tokens

Extracted from `css/style.css` on the live preview and inline styles:

| Token               | Value                                     |
| ------------------- | ----------------------------------------- |
| Primary brand       | `#007bff` (blue)                          |
| Page background     | `#fff` (white)                            |
| Light section bg    | `#f8f9fa` (Bootstrap light gray)          |
| Body text           | `#212529` (dark)                          |
| Muted text          | `#6c757d` (gray)                          |
| Hero overlay        | `rgba(0,0,0,0.15)` over hero photo       |
| Heading font        | `"Playfair Display", times, serif`        |
| Body font           | `"Mukta Mahee", arial, sans-serif`        |
| Hero heading size   | 80px (desktop), 40px (mobile)             |
| Hero sub-heading    | 30px weight-200 (desktop), 18px (mobile)  |
| Button shape        | Pill — `border-radius: 50px`              |
| Button primary      | `#007bff` bg, white text, uppercase       |
| Button outline      | White border, transparent bg, white text  |
| Card shadow         | `0 2px 3px 0 rgba(0,0,0,0.2)`            |
| Card image radius   | `rounded` (Bootstrap 0.25rem / 4px)       |
| Star rating color   | `#007bff`                                 |
| Testimonial font    | `"Playfair Display", times, serif`        |
| Footer background   | `#007bff` (bg-primary)                    |
| Footer text         | `#fff`                                    |
| Footer link hover   | `rgba(255,255,255,0.7)`                  |
| Author image radius | `50%` (circle)                            |
| AOS animations      | fade-up, fade (with delays 100/200/300ms) |

## Section Structure (order from live preview)

1. **Navbar** — Absolute top, left logo ("AgentHub"), right hamburger
   toggle. Full-screen overlay nav with links (Home, About, Blog, Contact)
   on left, contact info + social links on right. Slides open on toggle.

2. **Hero** — Full viewport height (`100vh`, min 700px), dark-overlay
   background image. Right-aligned content column (col-md-7, `ml-auto`):
   h1 heading, sub-heading paragraph, two CTA buttons (primary pill
   "Get In Touch" + outline-light pill "Download"), scroll-down arrow.

3. **Popular Properties (visit-section)** — Section heading "Popular
   Properties" (uppercase, 15px). Grid of 8 property cards (col-lg-3
   col-md-6), each with: rounded image, price overlay, h3 title, location
   link, star rating row. Cards have box-shadow. Two rows of 4.

4. **Testimonials** — 3 testimonial blocks (col-md-4), each with:
   blockquote paragraph (Playfair Display italic), circular author image,
   author name. AOS fade-up with staggered delays.

5. **About Me** — Left column (col-md-6): h2 heading "About Me", lead
   paragraph describing the agent, "Deal On Time" / "Good Reviews" /
   "24/7 Support" stat cards with ionicons (calendar, edit, hangout icons
   in primary blue), each with title + description text.

6. **Recent Blog Posts** — Section heading "Recent Blog Post" with lead
   subtitle. 3 blog post cards (col-lg-4 col-md-6): image, meta-post
   date, h2 title, excerpt link. AOS fade-up.

7. **Footer** — Solid `#007bff` background. 3-column layout:
   - Col 1: "About Us" links list (Terms, Privacy, Help, Rooms)
   - Col 2: "Our Location" links (Hosts, About, Contact) + address/phone/email
   - Col 3: Newsletter signup form (email input + submit) + social icons
     (LinkedIn, Twitter, Facebook) + copyright line.

## Gherkin Requirements

### Navbar

```gherkin
Feature: AgentHub Navbar

  Scenario: Logo and hamburger are visible on mobile
    Given the viewport is 375px wide
    When the page loads
    Then the logo "AgentHub" is visible
    And a hamburger menu toggle button is visible
    And the nav links are hidden

  Scenario: Hamburger opens full-screen overlay
    Given the viewport is 375px wide
    When I click the hamburger toggle
    Then a full-screen overlay appears
    And navigation links "Home", "About", "Blog", "Contact" are visible
    And contact info (address, phone, email) is visible
    And social links (Twitter, Facebook, Instagram) are visible

  Scenario: Desktop shows inline nav links
    Given the viewport is 1200px wide
    When the page loads
    Then navigation links are visible inline
    And the hamburger toggle is hidden
```

### Hero

```gherkin
Feature: AgentHub Hero

  Scenario: Hero displays with background image and overlay
    Given the page loads
    Then a full-viewport hero section is visible
    And a dark semi-transparent overlay covers the hero background
    And the hero has a background image

  Scenario: Hero contains heading, subtext, and two CTA buttons
    Given the hero section is visible
    Then a heading text is visible in Playfair Display font
    And a sub-heading paragraph is visible
    And a primary pill button labeled "Get In Touch" is visible
    And an outline-light pill button labeled "Download" is visible

  Scenario: Scroll-down arrow is present
    Given the hero section is visible
    Then a scroll-down arrow link is present below the CTA buttons
```

### Popular Properties

```gherkin
Feature: AgentHub Popular Properties

  Scenario: Section heading is displayed
    Given the Popular Properties section is in view
    Then an uppercase heading "Popular Properties" is visible

  Scenario: Property cards grid renders 8 cards
    Given the Popular Properties section is in view
    Then 8 property cards are rendered in a 4-column grid
    And each card has a property image with rounded corners
    And each card has a price overlay
    And each card has a property title
    And each card has a location link
    And each card has a star rating row

  Scenario: Property cards have shadow styling
    Given a property card is rendered
    Then the card image has a box-shadow
```

### Testimonials

```gherkin
Feature: AgentHub Testimonials

  Scenario: Three testimonial blocks are rendered
    Given the testimonials section is in view
    Then 3 testimonial blocks are rendered
    And each block has a blockquote with testimonial text
    And each block has a circular author image
    And each block has an author name

  Scenario: Testimonial text uses serif font
    Given a testimonial blockquote is rendered
    Then the quote text uses Playfair Display font family
```

### About Me

```gherkin
Feature: AgentHub About Me

  Scenario: About section has heading and description
    Given the About Me section is in view
    Then an h2 heading "About Me" is visible
    And a lead paragraph with agent bio text is visible

  Scenario: Three stat cards are displayed
    Given the About Me section is in view
    Then 3 stat cards are rendered side by side
    And each card has an icon in primary blue color
    And each card has a title (Deal On Time, Good Reviews, 24/7 Support)
    And each card has a description paragraph
```

### Recent Blog Posts

```gherkin
Feature: AgentHub Recent Blog Posts

  Scenario: Blog section heading and subtitle
    Given the blog section is in view
    Then a heading "Recent Blog Post" is visible
    And a lead subtitle paragraph is visible

  Scenario: Three blog post cards are rendered
    Given the blog section is in view
    Then 3 blog post cards are rendered
    And each card has a post image
    And each card has a date in meta-post format
    And each card has a post title
    And each card has an excerpt or read-more link
```

### Footer

```gherkin
Feature: AgentHub Footer

  Scenario: Footer has blue background
    Given the footer is visible
    Then the footer background is primary blue (#007bff)
    And all footer text is white

  Scenario: Footer contains three columns
    Given the footer is visible
    Then column 1 shows "About Us" with links (Terms, Privacy, Help, Rooms)
    And column 2 shows "Our Location" with contact details
    And column 3 shows a newsletter signup form

  Scenario: Footer has social links
    Given the footer is visible
    Then social media icon links are present (LinkedIn, Twitter, Facebook)

  Scenario: Footer has copyright and Component Dock link
    Given the footer is visible
    Then a copyright line is present
    And a link to componentdock.com is present
```

## Verification Checklist

- [ ] Navbar: hamburger toggle works on mobile, full-screen overlay opens/closes
- [ ] Hero: full viewport height, background image with dark overlay, two CTA buttons pill-shaped
- [ ] Popular Properties: 8 cards in 4-column grid, images with shadow, prices, star ratings
- [ ] Testimonials: 3 blocks with serif blockquotes, circular author images
- [ | ] About Me: heading + bio paragraph, 3 stat cards with icons in primary blue
- [ ] Blog: 3 post cards with images, dates, titles, excerpts
- [ ] Footer: solid blue background, 3 columns, newsletter form, social links, copyright
- [ ] Footer links to componentdock.com
- [ ] Fonts: Playfair Display for headings/quotes, Mukta Mahee for body
- [ ] Brand color: primary blue #007bff used consistently
- [ ] AOS animations on section entrance (fade-up with delays)
- [ ] Responsive: mobile hamburger nav, stacked columns on small screens
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Tests pass with 100% coverage
