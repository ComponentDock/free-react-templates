# Template: MuscleBay (Fitness Club Landing)

## Purpose

Recreation of ColorLib **Fitnessclub** template
(https://colorlib.com/wp/template/fitnessclub/).
Preview: https://preview.colorlib.com/theme/fitnessclub/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fitnessclub-free-template.jpg

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript

## Design tokens

Extracted from the live preview stylesheet
(`https://preview.colorlib.com/theme/fitnessclub/assets/css/style.css`):

| Token | Value | Notes |
|---|---|---|
| brand / primary | `#f04e3c` | Orange-red, used for buttons, accents, hover states |
| dark navy | `#0d1628` | Dark background for header overlay areas |
| title | `#222222` | Dark near-black for headings |
| text | `#777777` | Medium gray for body copy |
| light text | `#828bb2` | Muted blue-gray for secondary text |
| white | `#ffffff` | |
| off-white | `#f9f9ff` | Light blue-tinted background |
| section-bg | `#f7fbff` | Very light blue for section backgrounds |
| font-family-heading | `"Teko", sans-serif` | Headings, 300–700 weight, uppercase tracking |
| font-family-body | `"Barlow", sans-serif` | Body text, 300–700 weight |
| button style | `.boxed-btn` — white bg, `#f04e3c` border + text, Teko font, 14px, letter-spacing 3px, uppercase, padding 18px 44px; hover: solid `#f04e3c` bg, white text |
| hero button | `.hero-btn` — padding 32px 41px, solid style |
| banner overlay | dark semi-transparent over hero image |
| section padding | `section-padding30` (~30px top/bottom) |
| CTA section bg | `data-background` image with dark overlay |

## Section order (1:1 from preview)

1. **Header** — transparent over hero, logo left, nav right (Home, About, Services, Schedule, Gallery, Blog [dropdown], Contact). Sticky on scroll.
2. **Hero Slider** — full-width slider with background image, heading "Build Perfect body Shape for good and Healthy life.", subtext "with patrick potter", "became a member" CTA button. Animated entrance (fadeInLeft).
3. **About Section** — 2-column: left = about image, right = section title "ABOUT oUR GYM" + heading "Safe Body building proper Solutions That Saves our Valuable Time!" + two paragraphs + "became a member" button.
4. **Services Section** — dark background image overlay, section title "oUR sERVICES FOR YOU" / "PUSH YOUR LIMITS FORWARD We Offer to you", "More Services" button. Below: 3-column service cards with icons.
5. **Testimonial Section** — 2-column: left = about image with quotation overlay, right = testimonial content with client quote, name, and role.
6. **Membership CTA** — dark background image overlay, heading "April membership offer available Now", "More Services" button.
7. **Schedule/Tabs Section** — section title "OUR tIME SCHEDULE" / "SELECT THE pERFECT TIME YOU NEED NOW", tabbed interface showing gym schedule by day.
8. **Team Section** — 3-column team cards: team member photo, role title, name, social links (Facebook, Twitter, Globe).
9. **Contact Form Section** — right-aligned form (7-col), section title "Contact Form" / "Feel Free to contact with us!", form fields for name, email, subject, message, submit button.
10. **Gallery Section** — 2-column masonry-style gallery with overlay on hover (title + category).
11. **Blog Section** — section title "rECENT NEWS FORM BLOG" / "gYM TIPS news fOR YOU", 2-column blog cards with image, date, title, excerpt.
12. **Footer** — dark background image overlay, 3-column layout (COMPANY links, Open Hours, RESOURCES), copyright bar, social icons.

## Gherkin requirements

```gherkin
Feature: MuscleBay — Fitness club landing template

  Background:
    Given the template is loaded in the browser

  Scenario: Header displays navigation
    Then the nav contains links: Home, About, Services, Schedule, Gallery, Blog, Contact
    And the logo is positioned on the left
    And the header is transparent over the hero

  Scenario: Hero slider renders
    Then the hero spans the full viewport width
    And the heading reads "Build Perfect body Shape for good and Healthy life."
    And a "became a member" button is visible
    And the background is a full-width image

  Scenario: About section displays
    Then the section title reads "ABOUT oUR GYM"
    And the heading reads "Safe Body building proper Solutions That Saves our Valuable Time!"
    And an about image is displayed on the left
    And two description paragraphs are shown
    And a "became a member" button is visible

  Scenario: Services section shows service cards
    Then the section title reads "oUR sERVICES FOR YOU"
    And the heading reads "PUSH YOUR LIMITS FORWARD We Offer to you"
    And at least 3 service cards are displayed with icons
    And a "More Services" button is visible

  Scenario: Testimonial section renders
    Then a testimonial image with quotation overlay is shown
    And a client quote is displayed
    And the client name and role are shown

  Scenario: Membership CTA banner
    Then the heading reads "April membership offer available Now"
    And a "More Services" button is visible
    And the section has a dark background image overlay

  Scenario: Schedule tabs section
    Then the section title reads "OUR tIME SCHEDULE"
    And the heading reads "SELECT THE pERFECT TIME YOU NEED NOW"
    And tabbed navigation is displayed for different days

  Scenario: Team section shows team members
    Then 3 team member cards are displayed
    And each card has a photo, role, name, and social links

  Scenario: Contact form section
    Then the section title reads "Contact Form"
    And the heading reads "Feel Free to contact with us!"
    And form fields for name, email, subject, and message are present
    And a submit button is visible

  Scenario: Gallery section shows images
    Then a 2-column gallery layout is displayed
    And images have hover overlay with title and category

  Scenario: Blog section shows posts
    Then the section title reads "rECENT NEWS FORM BLOG"
    And at least 2 blog cards are displayed
    And each card has an image, date, title, and excerpt

  Scenario: Footer structure
    Then the footer has 3 columns: COMPANY, Open Hours, RESOURCES
    And a copyright bar is displayed at the bottom
    And the footer links to https://www.componentdock.com/

  Scenario: Responsive layout
    When the viewport is mobile width
    Then the navigation collapses to a hamburger menu
    And columns stack vertically
    And the gallery adjusts to fewer columns
```

## Verification checklist

- [ ] Section order matches original exactly (header → hero → about → services → testimonial → membership CTA → schedule → team → contact → gallery → blog → footer)
- [ ] Primary color #f04e3c used consistently on buttons, accents, hover states
- [ ] Fonts: Teko for headings (uppercase), Barlow for body text
- [ ] Hero slider has full-width background image with animated heading
- [ ] About section has image left + text right layout
- [ ] Services section has dark background overlay + service cards with icons
- [ ] Testimonial section has image with quotation overlay + client quote
- [ ] Membership CTA has dark background image overlay
- [ ] Schedule section has tabbed interface
- [ ] Team section shows 3 member cards with social links
- [ ] Contact form has name, email, subject, message fields
- [ ] Gallery has 2-column layout with hover overlays
- [ ] Blog section shows 2+ post cards
- [ ] Footer has 3 columns + copyright bar + ComponentDock link
- [ ] Responsive: hamburger nav on mobile, stacked columns
- [ ] No ColorLib references in app code (only in spec/TEMPLATES.md)
- [ ] 100% test coverage
