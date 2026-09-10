# Template: Accountly (Business — Bookkeeping / Finance Agency)

## Purpose

Recreation of ColorLib's **Book Keeping** template for a bookkeeping / accounting
agency website.

| Field | Value |
|-------|-------|
| Source slug | `book-keeping` |
| Source URL | https://colorlib.com/wp/template/book-keeping/ |
| Preview URL | https://preview.colorlib.com/theme/book-keeping/ (unreachable — 404 at prep time; design reconstructed from screenshot + source page description) |
| Category | Business / Finance |
| Stack | React 19 · Vite · Tailwind CSS 4 · TypeScript |

## Design tokens (extracted from screenshot + source page)

| Token | Value | Notes |
|-------|-------|-------|
| Brand primary | `#2c3e6b` (navy blue) | Hero CTA bg, nav logo circle, social icon circles, section subheadings |
| Brand dark | `#1a2540` (deep navy) | Headings, logo text |
| Background | `#ffffff` (white) | Main section backgrounds |
| Surface light | `#f5f5f5` (light gray) | Top utility bar background |
| Text primary | `#333333` (charcoal) | Body text |
| Text muted | `#999999` (light gray) | Placeholder / lorem ipsum text |
| Accent warm | `#d4a96a` (golden tan) | Warm lens-flare tones in photography — not a UI token, but informs placeholder image mood |
| Font family | `"Poppins", sans-serif` | Standard for this era of ColorLib templates; clean modern sans-serif |
| Button radius | `0px` (sharp corners) | Hero CTA "GET STARTED" — rectangular, no border-radius |
| Button padding | `14px 36px` | Generous horizontal padding |
| Button text | `uppercase`, `letter-spacing: 2px` | NAVY bg, WHITE text |
| Social buttons | Circular (`border-radius: 50%`), navy bg, white icons | Facebook, Twitter/X, LinkedIn |
| Nav | Sticky/fixed top, white bg, shadow on scroll | Logo left, links center, social right |
| Top bar | Slim gray bar, contact info (phone + email) | Left-aligned, small font |
| Section headings | `font-size: 36px`, bold, navy color | Underlined with thin blue divider line |
| Section subheads | `font-size: 12px`, uppercase, navy, letter-spacing | "ABOUT US" style |

### Color reference — precise hex from screenshot pixel sampling

- Hero CTA button background: `#2c3e6b`
- Logo circle + social circles: `#2c3e6b`
- Section subheading text: `#2c3e6b`
- Divider lines: `#2c3e6b`
- Bullet arrow icons: `#2c3e6b`
- Headings: `#1a2540`
- Body text: `#666666`

## Visual design notes (from screenshot)

The template presents a **professional, corporate bookkeeping agency** aesthetic:

1. **Top utility bar**: slim gray background with "Have a question?" + phone + email
   in small text; left-aligned.
2. **Navigation**: white background, sticky; logo is a navy circle with white "$"
   icon + "Book Keeping" in navy text; nav links centered; 3 blue social circles
   right-aligned.
3. **Hero**: full-width photographic background (business professional at desk with
   calculator, warm golden lens flare); centered white text: large heading, small
   subtext, sharp-cornered navy "GET STARTED" button.
4. **About Us**: white bg, 2-column layout — cropped square office photo left,
   right side has uppercase navy subhead "ABOUT US", large navy heading with thin
   blue divider line underneath, lorem ipsum body text, 2-col bullet list with
   blue arrow icons.
5. The full template (per ColorLib description) also includes: slider, dropdown
   menu, testimonials, contact form, blog sections — sections 5–8 below are
   inferred from standard ColorLib business template patterns.

## Gherkin requirements

### Feature: Accountly — Bookkeeping Agency Website

```gherkin
Feature: Accountly bookkeeping agency template
  As a visitor to the Accountly website
  I want a professional bookkeeping agency landing page
  So that I can learn about the services and get in touch

  Background:
    Given the page is loaded at the root URL
    And the viewport is 1280x720

  # --- Top Bar ---
  Scenario: Top utility bar displays contact information
    Then I should see a utility bar at the top of the page
    And the utility bar should contain a phone number
    And the utility bar should contain an email address
    And the utility bar should have a light gray background

  # --- Navigation ---
  Scenario: Navigation bar is visible and contains expected links
    Then I should see a navigation bar
    And the navigation bar should contain a logo with brand name
    And the navigation bar should have links for "Home", "About", "Services", "Blog", "Contact"
    And the navigation bar should have social media icon buttons (Facebook, Twitter, LinkedIn)

  Scenario: Navigation bar is sticky on scroll
    When I scroll down 200 pixels
    Then the navigation bar should remain fixed at the top of the viewport

  # --- Hero ---
  Scenario: Hero section displays with background image and CTA
    Then I should see a hero section with a background image
    And the hero section should display a primary heading
    And the hero section should display a subheading text
    And the hero section should have a "GET STARTED" call-to-action button
    And the CTA button should have navy blue background and white text
    And the CTA button should have sharp corners (no border-radius)

  # --- About Us ---
  Scenario: About Us section has two-column layout
    Then I should see an "About Us" section
    And the About Us section should display an "ABOUT US" subheading in uppercase
    And the About Us section should have a main heading with a blue divider line
    And the About Us section should have a descriptive paragraph
    And the About Us section should have a two-column bullet list with arrow icons
    And the About Us section should have an image on the left side

  # --- Services ---
  Scenario: Services section displays service cards
    Then I should see a "Services" section
    And the Services section should display at least 3 service items
    And each service item should have an icon, title, and description
    And the Services section should have a white background

  # --- Stats / Numbers ---
  Scenario: Statistics section shows key metrics
    Then I should see a statistics section
    And the statistics section should display at least 3 numbered counters
    And each counter should have a label underneath

  # --- Testimonials ---
  Scenario: Testimonials section displays client quotes
    Then I should see a "Testimonials" section
    And the Testimonials section should display at least 2 testimonial items
    And each testimonial should have a quote, client name, and role
    And the Testimonials section should have a contrasting background (dark or blue)

  # --- Newsletter / CTA ---
  Scenario: Newsletter section invites email signup
    Then I should see a newsletter or CTA section
    And the section should have an email input field
    And the section should have a submit button
    And the section should have a brand-colored background

  # --- Footer ---
  Scenario: Footer contains navigation and brand link
    Then I should see a footer
    And the footer should contain navigation links
    And the footer should link to "https://www.componentdock.com/"
    And the footer should display "Component Dock" text

  # --- Responsive ---
  Scenario: Template is responsive on mobile viewport
    Given the viewport is 375x667
    Then the navigation should collapse into a hamburger menu
    And all sections should be readable without horizontal scroll
    And the hero heading should wrap properly
```

## Verification checklist

- [ ] All sections from the original Book Keeping template are present
- [ ] Brand color `#2c3e6b` is used consistently across CTA buttons, nav elements, section accents
- [ ] Typography uses Poppins (loaded via Google Fonts link in `index.html`)
- [ ] Hero CTA button has sharp corners (radius 0), navy bg, white text, uppercase
- [ ] Social icons are circular navy buttons with white icons
- [ ] Top utility bar shows contact info (phone + email) on light gray background
- [ ] Navigation is sticky/fixed, white background, with logo + centered links + social icons
- [ ] About Us section has 2-column layout: image left, text + bullet list right
- [ ] About Us section headings have thin blue divider line
- [ ] Bullet items use blue arrow icons (not default list markers)
- [ ] All placeholder images use `https://picsum.photos/seed/accountly-<n>/<w>/<h>`
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app source code
- [ ] Spec includes this document (source mapping + design tokens)
- [ ] `npm run spec:validate` passes
- [ ] Tests achieve 100% line/function/branch/statement coverage
- [ ] Build succeeds (`npm run build`)
