# Template: Hardhat (Construction Company)

## Purpose

Recreation of ColorLib's **Consto** construction company template as a modern
React landing page for a construction/building services firm.

| Field | Value |
|-------|-------|
| Source slug | `consto` |
| Source URL | https://colorlib.com/wp/template/consto/ |
| Preview URL | https://preview.colorlib.com/theme/consto/ (live at prep time) |
| Screenshot URL | https://colorlib.com/wp/wp-content/uploads/sites/2/consto-free-template.jpg |
| Category | Construction / Corporate |
| Stack | React 19 · Vite · Tailwind CSS 4 · TypeScript |

## Design tokens (extracted from preview CSS + screenshot)

| Token | Value | Notes |
|-------|-------|-------|
| Brand primary | `#FF5E14` (bright orange) | CTA buttons, phone header bg, image borders, icons |
| Brand hover | `#e24e09` (darker orange) | Button gradient end |
| Text dark | `#071112` (near-black) | Headings |
| Text body | `#5E5E5E` (medium gray) | Body text |
| Text muted | `#999999` (light gray) | Secondary text |
| Text accent | `#1f2b7b` (navy blue) | Section subheadings, links |
| Background white | `#ffffff` | Main section backgrounds |
| Background light | `#F5F6F7` (light gray) | Footer background, services bg |
| Background dark | `#0a0a0a` (near-black) | Header left block, hero dark overlay |
| Font family | `"Raleway", sans-serif` | Clean geometric sans-serif |
| Button radius | `0px` (sharp corners) | Rectangular CTA buttons |
| Button padding | `14px 34px` | Generous horizontal padding |
| Button text | `uppercase`, `font-size: 16px`, `font-weight: 500` | Orange gradient bg, white text |
| Button gradient | `linear-gradient(to left, #FF5E14, #e24e09, #FF5E14)` | Animated on hover |
| Header | 3-block layout: black logo block / white nav / orange phone block | Fixed top |
| Nav links | Uppercase, dark gray, evenly spaced | Home, About, Service, Project, Blog, Contact |
| Section headings | `font-size: ~36px`, bold, dark color | With thin colored underline |
| Section subheads | Small uppercase, accent color | Decorative label above heading |
| Hero | Full-width background image, dark overlay, white text, orange CTA | Height ~870px desktop |
| Overlapping images | Orange border accent | Construction photos in about section |
| Testimonials | Carousel (owl-carousel style) | Client quotes with avatar |
| Contact | Form with email icon submit button | On section-bg2 |
| Footer | Light gray bg, 3-4 columns, newsletter form, social icons | Copyright bar at bottom |

## Visual design notes (from screenshot + preview DOM)

The template presents a **professional, modern construction company** aesthetic:

1. **Header**: 3-block split — black block with orange hexagonal "C" logo +
   white "CONSTO" text + address below with orange pin icon; white center block
   with uppercase nav links; bright orange right block with phone number in
   white.
2. **Hero**: Full-width with construction site background photo, dark overlay on
   left. Left side: large white headline "Experienced Construction Solution",
   small subtext, orange rounded-rect "OUR SERVICES" button. Right sidebar:
   semi-transparent sepia overlay with "Explore Our Latest Projects" + underlined
   "EXPLORE NOW" CTA.
3. **Support/About**: White bg, 2-column. Left: two overlapping construction
   images (crane, blueprints) with orange border accent. Right: large dark
   headline + body text.
4. **Services**: Light gray bg (section-bg2), grid of service cards with icons.
5. **Projects/Popular Items**: Grid of project portfolio images with hover
   overlay effects.
6. **More Projects**: Additional project items on section-bg2.
7. **Testimonials**: Carousel of client testimonials with founder photos.
8. **Contact**: Form section with email icon submit button.
9. **Call to Action**: "Want to Work" banner section.
10. **Footer**: Light gray bg (#F5F6F7), newsletter form, 3-column layout with
    logo, quick links, contact info, social icons, copyright bar.

## Gherkin requirements

### Feature: Hardhat — Construction Company Website

```gherkin
Feature: Hardhat construction company template
  As a visitor to the Hardhat website
  I want a professional construction company landing page
  So that I can learn about their services and get in touch

  Background:
    Given the page is loaded at the root URL
    And the viewport is 1280x720

  Scenario: Header displays correctly
    Then the logo "Hardhat" is visible in the header
    And the navigation links are displayed: Home, About, Services, Projects, Blog, Contact
    And a phone number is visible in the header
    And social media icons are present

  Scenario: Hero section renders
    Then the hero heading "Experienced Construction Solution" is visible
    And a call-to-action button "OUR SERVICES" is displayed
    And the background image is visible
    And a secondary CTA "Explore Our Latest Projects" link is present

  Scenario: About section displays
    When I scroll to the about section
    Then the section heading is visible
    And an about description text is displayed
    And at least one construction-related image is shown
    And overlapping image layout is present

  Scenario: Services section renders
    When I scroll to the services section
    Then at least 4 service cards are displayed
    And each card has an icon, title, and description
    And the section has a light gray background

  Scenario: Projects section shows portfolio
    When I scroll to the projects section
    Then at least 6 project items are displayed in a grid
    And each item has a hover overlay effect

  Scenario: Testimonials carousel works
    When I scroll to the testimonials section
    Then at least 2 testimonials are displayed
    And each testimonial has a quote and client name
    And navigation dots or arrows are present

  Scenario: Contact form is functional
    When I scroll to the contact section
    Then a contact form is displayed with name, email, subject, and message fields
    And a submit button is present
    And submitting empty fields shows validation errors

  Scenario: Footer renders correctly
    When I scroll to the footer
    Then the company logo is displayed
    And quick navigation links are present
    And contact information is displayed
    And social media icons are present
    And a copyright notice is visible
    And a "Component Dock" attribution link is present

  Scenario: Mobile responsiveness
    Given the viewport is 375x667
    When the page loads
    Then a hamburger menu icon is displayed
    And the hero section stacks vertically
    And the about section stacks vertically
    And service cards stack vertically
```

## Verification checklist

- [ ] Header: 3-block layout (logo block / nav / phone block)
- [ ] Header: sticky on scroll
- [ ] Hero: full-width background with dark overlay
- [ ] Hero: large white heading + orange CTA button
- [ ] Hero: secondary "explore projects" link/overlay
- [ ] About: 2-column with overlapping images + orange border
- [ ] Services: grid of 4+ service cards on light bg
- [ ] Projects: image grid with hover effects
- [ ] Testimonials: carousel with client photos
- [ ] Contact: form with validation
- [ ] Footer: newsletter form + 3 columns + copyright
- [ ] Footer: Component Dock attribution link
- [ ] Brand colors: orange (#FF5E14) as primary accent
- [ ] Font: Raleway loaded from Google Fonts
- [ ] Buttons: sharp corners (radius 0), uppercase, orange gradient
- [ ] Mobile: responsive, hamburger menu, stacked layout
- [ ] No ColorLib references in app code
- [ ] CNAME file present: `hardhat.free.componentdock.com`
- [ ] homepage in package.json matches CNAME
