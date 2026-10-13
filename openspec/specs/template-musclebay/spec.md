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

## Requirements

### Feature: MuscleBay template behaviour

Feature: MuscleBay — Fitness club landing template

Background:
- **GIVEN** the template is loaded in the browser

#### Scenario: Header displays navigation

- **THEN** the nav contains links: Home, About, Services, Schedule, Gallery, Blog, Contact
- **AND** the logo is positioned on the left
- **AND** the header is transparent over the hero

#### Scenario: Hero slider renders

- **THEN** the hero spans the full viewport width
- **AND** the heading reads "Build Perfect body Shape for good and Healthy life."
- **AND** a "became a member" button is visible
- **AND** the background is a full-width image

#### Scenario: About section displays

- **THEN** the section title reads "ABOUT oUR GYM"
- **AND** the heading reads "Safe Body building proper Solutions That Saves our Valuable Time!"
- **AND** an about image is displayed on the left
- **AND** two description paragraphs are shown
- **AND** a "became a member" button is visible

#### Scenario: Services section shows service cards

- **THEN** the section title reads "oUR sERVICES FOR YOU"
- **AND** the heading reads "PUSH YOUR LIMITS FORWARD We Offer to you"
- **AND** at least 3 service cards are displayed with icons
- **AND** a "More Services" button is visible

#### Scenario: Testimonial section renders

- **THEN** a testimonial image with quotation overlay is shown
- **AND** a client quote is displayed
- **AND** the client name and role are shown

#### Scenario: Membership CTA banner

- **THEN** the heading reads "April membership offer available Now"
- **AND** a "More Services" button is visible
- **AND** the section has a dark background image overlay

#### Scenario: Schedule tabs section

- **THEN** the section title reads "OUR tIME SCHEDULE"
- **AND** the heading reads "SELECT THE pERFECT TIME YOU NEED NOW"
- **AND** tabbed navigation is displayed for different days

#### Scenario: Team section shows team members

- **THEN** 3 team member cards are displayed
- **AND** each card has a photo, role, name, and social links

#### Scenario: Contact form section

- **THEN** the section title reads "Contact Form"
- **AND** the heading reads "Feel Free to contact with us!"
- **AND** form fields for name, email, subject, and message are present
- **AND** a submit button is visible

#### Scenario: Gallery section shows images

- **THEN** a 2-column gallery layout is displayed
- **AND** images have hover overlay with title and category

#### Scenario: Blog section shows posts

- **THEN** the section title reads "rECENT NEWS FORM BLOG"
- **AND** at least 2 blog cards are displayed
- **AND** each card has an image, date, title, and excerpt

#### Scenario: Footer structure

- **THEN** the footer has 3 columns: COMPANY, Open Hours, RESOURCES
- **AND** a copyright bar is displayed at the bottom
- **AND** the footer links to https://www.componentdock.com/

#### Scenario: Responsive layout

- **WHEN** the viewport is mobile width
- **THEN** the navigation collapses to a hamburger menu
- **AND** columns stack vertically
- **AND** the gallery adjusts to fewer columns

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
