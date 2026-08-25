# Template: Orbiter (Corporate / Business Agency)

## Purpose

Recreation of ColorLib "Stodeo" — a modern corporate business agency template.

- **Source**: https://colorlib.com/wp/template/stodeo/
- **Preview**: https://preview.colorlib.com/theme/stodeo/
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Package**: `@free-react-templates/orbiter`

## Design tokens

| Token               | Value              | Usage                         |
| ------------------- | ------------------ | ----------------------------- |
| Brand primary       | `#3369e7`          | Buttons, links, active states |
| Brand secondary     | `#00aaff`          | Subheading text accent        |
| Heading color       | `#081b46`          | All h1–h3 headings            |
| Body text           | `#212529`          | Default body color            |
| Footer background   | `#efefef`          | Light gray site footer        |
| Footer text         | `#888`             | Footer paragraph text         |
| Footer heading      | `#000`             | Footer widget headings        |
| Service bg (sec-3)  | Dark (image-based) | Services section split layout |
| Button radius       | none (sharp)       | `border-radius: 0`            |
| Font family         | `Noto Sans JP`     | All text                      |
| Font size subhead   | 14px               | `.subheading` accent labels   |
| Font weight heading | 700                | `.heading` bold weight        |

## Section structure (top → bottom)

1. **Navbar** — Sticky top nav; logo text left ("Orbiter"), horizontal nav links right (Home, Why Orbiter, Our Services, Gallery, About, Contact Us). Mobile hamburger menu. Links: Home (active), Why Orbiter (dropdown with 3 items), Our Services, Gallery, About, Contact Us.

2. **Hero** — Full-width white background, centered text. Subheading: "Welcome To Our Site". Heading: "We have the best solution for your business to grow." Paragraph: placeholder copy. Single CTA button: "Get started" (btn-primary). AOS fade-up animations.

3. **Welcome (sec-welcome)** — Split 2-col, no gap (`g-0`). Left col: full-height image. Right col: aligned bottom, text paragraph + "About us →" button (outline dark bg with arrow icon). AOS fade animations.

4. **Why Choose Us (sec-why-choose-us)** — Asymmetric layout: right aside-box (col-lg-3) with paragraph, 2 counters (12 "Years of experience", 34 "Team members"), and "Why Orbiter →" outline button. Left main box (col-lg-9): centered subheading "Why Orbiter?", heading "You still thinking about why you should choose us?", paragraph. Below: 4 feature cards in a row (col-lg-3 each): Web Design, Web Development, Branding & Identity, Graphic Design — each with icon, title, and arrow. AOS staggered animations.

5. **Services (sec-3)** — Split 2-col, no gap. Left: full image. Right: dark background box-wrap, white heading "Grow your business", muted paragraph, 2 service items (icon + title + description each), and "Our services →" outline button.

6. **Blog (sec-posts)** — Asymmetric: left col-lg-3 empty, right col-lg-9 with box. Inside: subheading "Our Blogs", heading "Recent Blog Posts", then 3 post cards in a row (col-lg-4 each). Each card: date badge, title link, short paragraph excerpt, "Read more" link. AOS staggered.

7. **Testimonials (sec section, no class prefix)** — Centered: heading "Happy Clients". Testimonial slider (tiny-slider) with 4 items. Each: circular person image, blockquote with quote, strong name, position span. CSS slider-based auto-rotation.

8. **Footer (site-footer)** — Light gray background (`#efefef`). 4-col layout: Col 1 — "About Orbiter." widget + "Connect" social icons (Instagram, Twitter, Facebook, LinkedIn, Pinterest, Dribbble). Col 2 — "Navigation" links. Col 3 — "Services" links. Col 4 — "Contact" address + phone + email. Bottom row: copyright line. Footer links styled `#777`, widget headings black `#000`.

## Gherkin requirements

### Feature: Orbiter template renders all sections

Scenario: Navbar renders with logo and navigation links
Given the page is loaded
Then the navbar displays the logo "Orbiter"
And navigation links include "Home", "Why Orbiter", "Our Services", "Gallery", "About", "Contact Us"
And the "Home" link is marked active

Scenario: Hero section displays heading and CTA
Given the page is loaded
Then the hero shows subheading "Welcome To Our Site"
And the hero heading reads "We have the best solution for your business to grow."
And a "Get started" button is visible in the hero

Scenario: Welcome section shows image and about button
Given the page is loaded
Then the welcome section displays a left image and right text area
And an "About us" button with arrow icon is visible

Scenario: Why Choose Us section shows counters and features
Given the page is loaded
Then the why-choose-us section displays the heading "You still thinking about why you should choose us?"
And two stat counters are shown: "12" Years and "34" Team members
And four feature cards are visible: Web Design, Web Development, Branding & Identity, Graphic Design

Scenario: Services section shows split layout with dark background
Given the page is loaded
Then the services section has a left image and right dark content area
And the heading reads "Grow your business"
And two service items are displayed with icons

Scenario: Blog section shows recent posts
Given the page is loaded
Then the blog section heading reads "Recent Blog Posts"
And three blog post cards are displayed with dates and excerpts

Scenario: Testimonials section shows client quotes
Given the page is loaded
Then the testimonials heading reads "Happy Clients"
And a testimonial slider is visible with person images, quotes, and names

Scenario: Footer displays company info and links
Given the page is loaded
Then the footer contains widgets for About, Navigation, Services, and Contact
And social media icons are visible (Instagram, Twitter, Facebook, LinkedIn, Pinterest, Dribbble)
And a copyright line is present at the bottom
And the footer links to https://www.componentdock.com/

## Verification checklist

- [ ] All 8 sections render in correct top-to-bottom order
- [ ] Navbar is sticky with logo and all nav links including dropdown
- [ ] Hero text and button match original layout
- [ ] Welcome section is 2-col no-gap with image and about button
- [ ] Why Choose Us shows counter stats and 4 feature cards
- [ ] Services section has dark split layout with 2 service items
- [ ] Blog section shows 3 post cards
- [ ] Testimonials slider renders with person images and quotes
- [ ] Footer has 4 widget columns + social icons + copyright
- [ ] Footer links to https://www.componentdock.com/
- [ ] Color tokens match: primary #3369e7, secondary #00aaff, heading #081b46, footer bg #efefef
- [ ] Font: Noto Sans Google Font loaded in index.html
- [ ] AOS animations applied on scroll
- [ ] Mobile responsive (navbar collapses, columns stack)
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] 100% test coverage on all components
