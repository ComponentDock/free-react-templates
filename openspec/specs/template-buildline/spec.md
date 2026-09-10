# Template: BuildLine (Construction / Contractor Website)

## Purpose

Recreation of ColorLib's **Consto** construction company template as a React 19
+ Vite + Tailwind CSS 4 + TypeScript single-page application.

| Field | Value |
|-------|-------|
| Source slug | `consto` |
| Source URL | https://colorlib.com/wp/template/consto/ |
| Preview URL | https://preview.colorlib.com/theme/consto/ (reachable — fetched at prep time) |
| Screenshot | https://colorlib.com/wp/wp-content/uploads/sites/2/consto-free-template.jpg |
| Category | Construction / Contractor |
| Stack | React 19 · Vite · Tailwind CSS 4 · TypeScript |

## Design tokens (extracted from live preview CSS + screenshot)

| Token | Value | Notes |
|-------|-------|-------|
| Brand primary | `#FF5E14` (safety orange) | CTA buttons, nav right block, accents, social links |
| Brand secondary | `#e24e09` (darker orange) | Gradient endpoints for button hover |
| Section dark | `#2D0A31` (deep purple-plum) | Testimonials, contact, CTA banner backgrounds |
| Background | `#FFFFFF` (white) | About section, main content areas |
| Surface light | `#F5F6F7` (cool light gray) | Footer background |
| Surface muted | `rgba(255, 94, 20, 0.2)` (translucent orange) | Right sidebar hero promo bar |
| Text primary | `#000000` (black) | Headings |
| Text body | `#646D77` (medium gray) | Body copy |
| Text muted | `#5E5E5E` | Footer body text |
| Footer heading | `#1A1A1A` | Footer column titles |
| Font family | `"Raleway", sans-serif` | All text |
| Button primary bg | `#FF5E14` | `.slider-btn`, `.post-btn`, `.submit-btn2` |
| Button primary text | `#FFFFFF` | White on orange |
| Button radius | `0px` (sharp corners) | Primary and outlined buttons |
| Button outlined border | `1px solid #FF5E14` | `.border-btn` — transparent bg, orange text |
| Button hover | `linear-gradient(to left, #FF5E14, #e24e09, #FF5E14)` | Animated gradient fill |
| Rounded pill button | `border-radius: 25px` | "View Project" overlay buttons |
| Browse link | Orange text with animated underline `::before` | "Explore Now" links |
| Nav layout | Split: dark logo block + white nav block + orange phone block | Three-segment header |
| Header phone CTA | `#FF5E14` bg, white text | Right-aligned phone number |

### Color reference — precise hex from CSS extraction

- All CTAs / accent elements: `#FF5E14`
- Gradient hover: `#FF5E14` → `#e24e09` → `#FF5E14`
- Dark section backgrounds: `#2D0A31`
- Footer bg: `#F5F6F7`
- Hero right sidebar: `rgba(255, 94, 20, 0.2)`
- Body text: `#646D77`
- Headings: `#000000`

## Visual design notes (from screenshot + live preview)

The template presents a **professional construction company** aesthetic:

1. **Header**: Three-segment layout — dark navy block with logo (left), white
   block with address + navigation links (center), orange block with phone
   number (right). Sticky on scroll.
2. **Hero slider**: Full-width background image of a construction site/worker.
   Left-aligned text: large heading "Experienced Construction Solution",
   subtext, orange CTA "Our Services". Right sidebar is a translucent orange
   bar with "Explore Our Latest Projects" secondary CTA.
3. **About section**: White background, two-column layout — large construction
   image left (with orange border accent), right side has section title
   "Complete solution of large projects", paragraph, and "Learn More" button.
4. **Services section**: Dark background (image overlay), left column has title
   + description + "Get Free Quote" button. Right column has 3 service items
   each with image, title, description, and "Explore Now" browse link.
   Services: General Contracting, Project Planning, Interior Design.
5. **Projects carousel**: Centered heading "Projects we have Done", owl-carousel
   of project cards with image + dark overlay at bottom showing title + "View
   Project" pill button. Below: centered "All Project" outlined button.
6. **Testimonials**: Dark background (`#2D0A31`), carousel of testimonials with
   quote icon, quote text, founder avatar + name + role.
7. **Contact form**: Dark background section, form with name, email, topic
   dropdown, message textarea, and "Send Message" submit button.
8. **CTA banner**: "Any help needed?" question with "Contact Us" outlined button
   on dark background.
9. **Footer**: Light gray (`#F5F6F7`) background, 4-column layout — logo +
   description + contact + social icons, Navigation links, Services links,
   Newsletter subscription with email input. Copyright bar at bottom.

## Gherkin requirements

### Feature: BuildLine — Construction Company Website

```gherkin
Feature: BuildLine construction company template
  As a visitor to the BuildLine website
  I want a professional construction company landing page
  So that I can learn about services, view projects, and get in touch

  Background:
    Given the page is loaded at the root URL
    And the viewport is 1280x720

  # --- Header ---
  Scenario: Header displays logo, navigation, and contact phone
    Then I should see a header bar
    And the header should contain a logo
    And the header should have navigation links for "Home", "About", "Service", "Project", "Blog", "Contact"
    And the header should display a phone number in the right segment
    And the header right segment should have an orange background

  Scenario: Header is sticky on scroll
    When I scroll down 200 pixels
    Then the header should remain fixed at the top of the viewport

  # --- Hero ---
  Scenario: Hero section displays with background image and CTA
    Then I should see a hero section with a background image
    And the hero section should display the heading "Experienced Construction Solution"
    And the hero section should display descriptive subtext
    And the hero section should have an "Our Services" call-to-action button
    And the CTA button should have an orange background and white text
    And the CTA button should have sharp corners (no border-radius)

  Scenario: Hero has a right sidebar promo bar
    Then I should see a right sidebar bar in the hero
    And the sidebar should have a translucent orange background
    And the sidebar should display "Explore Our Latest Projects"
    And the sidebar should have an "Explore Now" link

  # --- About ---
  Scenario: About section displays company info with image
    Then I should see an About section
    And the About section should display a heading about project solutions
    And the About section should display a descriptive paragraph
    And the About section should have a "Learn More" button
    And the About section should display a construction-related image on the left

  # --- Services ---
  Scenario: Services section displays on dark background
    Then I should see a Services section
    And the Services section should have a dark background
    And the Services section should display a heading "Services we provide"
    And the Services section should have a "Get Free Quote" button

  Scenario: Services section lists at least 3 service items
    Then I should see at least 3 service items
    And each service item should have an image, title, and description
    And each service item should have an "Explore Now" link

  # --- Projects ---
  Scenario: Projects section displays a carousel of project cards
    Then I should see a Projects section
    And the Projects section should display a heading "Projects we have Done"
    And the Projects section should contain project cards in a carousel
    And each project card should have an image, title, and "View Project" button

  Scenario: Projects section has a view-all button
    Then I should see an "All Project" outlined button
    And the button should have an orange border and transparent background

  # --- Testimonials ---
  Scenario: Testimonials section displays client quotes
    Then I should see a Testimonials section
    And the Testimonials section should have a dark background
    And the Testimonials section should display at least 2 testimonial items
    And each testimonial should have a quote, client name, and role
    And each testimonial should have a quote icon

  # --- Contact Form ---
  Scenario: Contact section displays a quote request form
    Then I should see a Contact form section
    And the Contact section should have a dark background
    And the form should have fields for name, email, topic, and message
    And the form should have a "Send Message" submit button

  # --- CTA Banner ---
  Scenario: CTA banner asks if help is needed
    Then I should see a "Any help needed?" banner
    And the banner should have a "Contact Us" outlined button
    And the banner should be on a dark background

  # --- Footer ---
  Scenario: Footer contains navigation, services, and newsletter
    Then I should see a footer
    And the footer should have a light gray background
    And the footer should display a logo and description
    And the footer should contain Navigation links
    And the footer should contain Services links
    And the footer should have a newsletter subscription form with an email input
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

- [ ] All sections from the original Consto template are present (header, hero, about, services, projects, testimonials, contact, CTA, footer)
- [ ] Brand color `#FF5E14` (safety orange) is used consistently for CTA buttons, nav accent, and interactive elements
- [ ] Dark sections use `#2D0A31` (deep purple-plum) background
- [ ] Typography uses Raleway (loaded via Google Fonts link in `index.html`)
- [ ] Header has three-segment layout: dark logo block + white nav block + orange phone block
- [ ] Hero has left-aligned text with orange CTA button (sharp corners) and right sidebar with translucent orange background
- [ ] Services section has dark background with 3 service cards (image + title + description + browse link)
- [ ] Projects section shows a carousel of cards with image overlay, title, and pill-shaped "View Project" button
- [ ] Testimonials section has dark background with quote icon, text, and founder info
- [ ] Contact form has name, email, topic dropdown, message, and send button on dark background
- [ ] CTA banner displays "Any help needed?" with outlined "Contact Us" button
- [ ] Footer has light gray background with 4 columns: logo/contact, navigation, services, newsletter
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] All placeholder images use `https://picsum.photos/seed/buildline-<n>/<w>/<h>`
- [ ] No ColorLib references in app source code
- [ ] Spec includes this document (source mapping + design tokens)
- [ ] `npm run spec:validate` passes
- [ ] Tests achieve 100% line/function/branch/statement coverage
- [ ] Build succeeds (`npm run build`)
