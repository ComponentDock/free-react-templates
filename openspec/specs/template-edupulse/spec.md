# Template: EduPulse (Education Platform)

## Purpose

Recreation of ColorLib **Etrain** template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application.

- **Source:** [ColorLib Etrain](https://colorlib.com/wp/template/etrain/)
- **Preview:** https://preview.colorlib.com/theme/etrain/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/etrain-free-template.jpg
- **Stack:** React 19 · Vite (latest) · Tailwind CSS 4 · TypeScript (strict)
- **Name mapping:** `apps/edupulse` recreates ColorLib Etrain. New name never used before; no collision with existing apps or specs.

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`):

| Token | Value | Notes |
|-------|-------|-------|
| Primary (navy) | `#0c2e60` | Headings, text color, `.btn_2` border |
| Accent (red/orange) | `#ee390f` | Button gradient start, `.member_counter` gradient |
| Accent 2 (gold) | `#f9b700` | Button gradient end, `.member_counter` gradient |
| Highlight (orange) | `#ff663b` | Section title underline, `.btn_4` background |
| Heading color | `#0c2e60` | All h1-h6 |
| Body text | `#888888` | Paragraph text |
| Subtitle text | `#556172` | Section title subtitles |
| Background (light) | `#f7f7f7` | Banner bg (mobile), footer bg, `.gray_bg` |
| White | `#fff` | Card backgrounds, button text |
| Font: Headings | `"Poppins", sans-serif` | h1-h6 |
| Font: Body | `"Roboto", sans-serif` | p, body |
| Font: Sizes | Body: 14px, h2: 44px, h3: 24px, h4: 18px, h5: 18px | |
| `.btn_1` | `border-radius: 50px; padding: 13.5px 45px; color: #fff; background: linear-gradient(to left, #ee390f 0%, #f9b700 51%, #ee390f 100%);` | Primary CTA, pill-shaped, animated gradient |
| `.btn_2` | `border-radius: 50px; background: transparent; border: 1px solid #0c2e60; color: #0c2e60;` | Secondary/outline button, pill-shaped |
| `.btn_4` | `background-color: #ff663b; color: #fff; border-radius: 4px;` | Tag/category badge, small square corners |
| Section title underline | `width: 80px; height: 2px; background-color: #ff663b;` | Orange accent line below h2 in `.section_tittle` |
| `.member_counter` bg | `linear-gradient(0deg, #ee390f 0%, #f9b700 100%)` | Red-to-gold gradient counter section |
| `.banner_part` bg | Image (`banner_bg.png`), fallback `#f7f7f7` on mobile | Hero banner with background image |
| `.footer-area` bg | `#f7f7f7` | Light gray footer |
| Section padding | `140px 0px` (desktop), `70px 0px` (mobile) | `.section_padding` |

## Page Structure (Section Order)

Extracted from the live preview HTML:

1. **Header/Navbar** — Sticky top nav: logo (left), nav links (Home, About, Courses, Blog, Pages dropdown, Contact), Login button (`.btn_1` style, desktop only)
2. **Banner/Hero** — Left-aligned text on background image: "Join 15,000+ learners worldwide" (h5 subtitle), "Advance Your Career with Expert-Led Courses" (h1), descriptive paragraph, two CTAs: "Browse Courses" (`.btn_1` gradient) + "Start Free Trial" (`.btn_2` outline)
3. **Features** — 4-column grid: left column = "Why Etrain?" heading + blurb + "Learn More" button; 3 right columns = feature cards (Flexible Learning, Expert Instructors, Career Support) with icon + title + description
4. **Learning/About** — Two-column split: left = image; right = "About us" label, heading, paragraph, two checklist items (with ti-pencil-alt and ti-ruler-pencil icons), "Read More" button
5. **Counter/Stats** — Gradient background (red→gold), 4-column: 250 Courses, 15000 Students Enrolled, 92% Career Advancement, 45 Countries
6. **Featured Courses** — Section title "Popular Courses" + "Featured Courses"; 3-column course cards: image, category tag (`.btn_4`), difficulty badge, price (h4), course name (h3), description, duration + enrollment count, instructor avatar + name, star rating
7. **Advanced Features/Platform** — Two-column split (reversed from About): left = text with "Our platform" label, heading, paragraph, two feature items (Learn Anywhere, Verified Certificates); right = image
8. **Testimonials** — Section title "Testimonials" + "Student Success Stories"; Swiper carousel: each slide has 2 testimonials side by side (quote text, name, role) with circular author photos
9. **Blog** — Section title "Our Blog" + "Latest from Our Blog"; 3-column cards: image, category tag, title (h5), excerpt, comments + likes count
10. **Footer** — Three columns: logo + description + mission text; Newsletter (heading, input + subscribe button, social icons); Contact info (address, phone, email); Bottom bar: copyright text

## Gherkin Requirements

```gherkin
Feature: EduPulse Education Platform Template

  Background:
    Given the EduPulse template is loaded at the root URL
    And the page uses Poppins for headings and Roboto for body text

  # --- Header ---
  Scenario: Navbar displays navigation links and login
    Then the navbar shows the logo on the left
    And navigation links are present: Home, About, Courses, Blog, Pages, Contact
    And a Login button is visible on desktop
    And a hamburger menu toggle appears on mobile

  Scenario: Pages dropdown contains sub-pages
    When the user hovers/clicks the "Pages" dropdown
    Then sub-links appear: Pricing, FAQ, Instructors, Testimonials, Dashboard, Elements

  # --- Banner/Hero ---
  Scenario: Hero section renders with background and CTAs
    Then the hero section displays the subtitle "Join 15,000+ learners worldwide"
    And the main heading reads "Advance Your Career with Expert-Led Courses"
    And a paragraph describes course benefits
    And a "Browse Courses" primary button (gradient pill) is visible
    And a "Start Free Trial" outline button is visible

  # --- Features ---
  Scenario: Feature section shows why-choose block and 3 feature cards
    Then a "Why EduPulse?" heading with description and "Learn More" button is shown
    And 3 feature cards are displayed: Flexible Learning, Expert Instructors, Career Support
    And each card has an icon, title, and description

  # --- Learning/About ---
  Scenario: About section has image and text with checklist
    Then an image is displayed on the left
    And "About us" label, heading, and paragraph are shown on the right
    And 2 checklist items are visible with checkmark icons
    And a "Read More" button is present

  # --- Counter ---
  Scenario: Stats counter section displays metrics
    Then 4 stat items are displayed on a gradient background
    And stats include: 250 Courses Available, 15000 Students Enrolled, 92% Career Advancement, 45 Countries Reached

  # --- Featured Courses ---
  Scenario: Course cards render with metadata
    Then the section title reads "Featured Courses" with subtitle "popular courses"
    And 3 course cards are displayed in a grid
    And each card shows: image, category tag, difficulty badge, price, course name, description, duration, enrollment count, instructor name/avatar, star rating

  # --- Advanced Platform Features ---
  Scenario: Platform section shows features and image
    Then the section has "Our platform" label with heading and description
    And 2 feature items are displayed: Learn Anywhere, Verified Certificates
    And an image is shown on the right

  # --- Testimonials ---
  Scenario: Testimonials carousel displays student reviews
    Then the section title reads "Student Success Stories"
    And a Swiper carousel shows testimonial slides
    And each slide has 2 testimonials with quote text, name, and role
    And author photos are displayed as circular images

  # --- Blog ---
  Scenario: Blog section shows latest articles
    Then the section title reads "Latest from Our Blog"
    And 3 blog cards are displayed
    And each card has: image, category tag, title, excerpt, comment count, like count

  # --- Footer ---
  Scenario: Footer contains newsletter, contact, and social links
    Then the footer shows the logo and a brief description
    And a Newsletter section with email input and subscribe button
    And social media icons are displayed (Facebook, Twitter, Instagram, Email)
    And Contact information shows address, phone, and email
    And a copyright bar is at the bottom
    And the copyright links to https://www.componentdock.com/

  # --- Responsive ---
  Scenario: Mobile layout adapts all sections
    When the viewport is 375px wide
    Then the navbar collapses to a hamburger menu
    And the hero text stacks vertically
    And course cards stack vertically
    And the footer columns stack vertically
```

## Verification Checklist

- [ ] All 10 sections present in correct order
- [ ] Design tokens match: navy `#0c2e60`, accent gradient `#ee390f`→`#f9b700`, highlight `#ff663b`
- [ ] Fonts: Poppins for headings, Roboto for body
- [ ] Buttons: `.btn_1` gradient pill (50px radius), `.btn_2` outline pill, `.btn_4` small square category badges
- [ ] Counter section has gradient red→gold background
- [ ] Testimonials use a carousel/swiper with 2 testimonials per slide
- [ ] Blog cards show comments and likes count
- [ ] Footer has newsletter form + social icons + contact info
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code
- [ ] Responsive at 375px, 768px, 1024px, 1440px
- [ ] Placeholder images use `picsum.photos/seed/edupulse-<n>/<w>/<h>`
- [ ] All text uses paraphrased content (same kind of content, not copied verbatim beyond headings)
