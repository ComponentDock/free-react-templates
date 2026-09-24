# Template: Healio (Medical / Healthcare)

## Purpose

Recreation of the ColorLib **Health** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

- **Source:** [ColorLib Health](https://colorlib.com/wp/template/health/)
- **Preview:** https://preview.colorlib.com/theme/health/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/health-free-template.jpg
- **New name:** `healio` (apps/healio, package `@free-react-templates/healio`)

## Design Tokens

Extracted from the live preview CSS (`styles/main.css`):

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#32c69a` (teal-green) | Buttons, nav bar, accents, footer accent |
| Brand secondary | `#ffa07f` / `#FF6347` (salmon/coral) | Accent highlights |
| Red accent | `#db5246` | Info section accents |
| Blue accent | `#329fec` | Secondary link color |
| Text dark | `#404040` | Headings, body text |
| Text muted | `#a5a5a5` / `#929191` | Subtitles, secondary text |
| Text dark-secondary | `#4c4c4c` | Body paragraphs |
| Background light | `#f4f8fb` | Section alternate backgrounds (services, info) |
| Background mid | `#e5ecf1` | Subtle dividers |
| Footer dark | `#6a6d72` | Footer main background |
| White | `#FFFFFF` | Cards, info backgrounds |
| Font family | `'Montserrat', sans-serif` | All text |
| Button shape | Rectangular (no border-radius), 137×54px, teal background, uppercase 11px white text, letter-spacing 0.2em | CTA buttons |
| Section bg pattern | Alternating white / #f4f8fb | Services, departments, info boxes |

## Section Structure (from preview DOM + screenshot)

1. **Top bar** — logo "HEALTH+" (left), quick links (Help Desk, Emergency Services, Appointment) + phone number (right), dark background
2. **Navigation** — teal (#32c69a) sticky nav bar, links: Home, About Us, Services, News, Contact, search input on right
3. **Hero** — full-width background image (doctor photo), overlay with large heading "Medical Services that you can trust", subtitle paragraph, teal CTA button "READ MORE"
4. **Info boxes** — 3-column row: Free Consultations, Emergency Care, Make an Appointment (with form button). Each box has image, title, text, button. Light #f4f8fb background.
5. **CTA banner** — "Make an appointment with one of our professional Doctors." with teal CTA button. Background image with dark overlay.
6. **Services** — "Our Services" section title, 2×3 grid of icon boxes: Cardiology, Gastroenterology, Medical Lab, Dental Care, Surgery, Neurology. Each with icon, title, text. #f4f8fb background.
7. **Departments** — "Our Departments" carousel/slider: Neonatology, Dentistry, Orthopedics, Laboratory. Each card has image + title + link. White/light background.
8. **FAQ** — "Faq & Stuff" section with subtitle. Appears to be accordion-style (minimal content in preview).
9. **Latest News / Blog** — "Latest News" section, 3-column blog post cards: each has image, title, date, comments count. Posts: "A simple blog post", "A new way to see things in medicine", "Why is Pharma industry so big?"
10. **Footer** — dark gray (#6a6d72) background with:
    - About column: logo + description text + social links
    - Contact form: title + name/email/message inputs + send message button
    - Opening Hours column
    - Bottom bar: footer nav (Home, About Us, Services, News, Contact), links (Help Desk, Emergency Services, Appointment), phone number

## Gherkin Requirements

```gherkin
Feature: Healio — Medical/Healthcare Landing Page

  Background:
    Given the user opens the Healio homepage

  Scenario: Top bar displays logo and quick links
    Then the logo "HEALTH+" is visible in the top bar
    And quick links "Help Desk", "Emergency Services", "Appointment" are shown
    And a phone number "+34 586 778 8892" is displayed

  Scenario: Navigation bar is present and styled
    Then a teal navigation bar is visible
    And nav links "Home", "About Us", "Services", "News", "Contact" are shown
    And a search input is displayed on the right

  Scenario: Hero section renders with heading and CTA
    Then a hero section with background image is displayed
    And the heading "Medical Services that you can trust" is visible
    And a subtitle paragraph is shown below the heading
    And a teal "READ MORE" button is displayed

  Scenario: Info boxes show three service highlights
    Then three info boxes are displayed in a row
    And box 1 shows "Free Consultations" with description and button
    And box 2 shows "Emergency Care" with description and button
    And box 3 shows "Make an Appointment" with a form button

  Scenario: CTA banner prompts appointment booking
    Then a call-to-action section is visible
    And the text "Make an appointment with one of our professional Doctors" is shown
    And a teal CTA button is present

  Scenario: Services section lists six medical services
    Then the heading "Our Services" is displayed
    And six service cards are shown in a 2-column grid
    And services include "Cardiology", "Gastroenterology", "Medical Lab", "Dental Care", "Surgery", "Neurology"
    And each card has an icon, title, and description text

  Scenario: Departments carousel shows department cards
    Then the heading "Our Departments" is displayed
    And department cards are shown in a carousel
    And departments include "Neonatology", "Dentistry", "Orthopedics", "Laboratory"
    And each card has an image and department name

  Scenario: FAQ section is present
    Then the heading "Faq & Stuff" is displayed
    And a subtitle is shown below the heading

  Scenario: Latest News shows three blog posts
    Then the heading "Latest News" is displayed
    And three blog post cards are shown
    And posts include "A simple blog post", "A new way to see things in medicine", "Why is Pharma industry so big?"
    And each card has an image, title, date, and comment count

  Scenario: Footer contains about, contact, hours, and navigation
    Then a dark footer section is displayed
    And the about column shows the logo and description
    And a contact form with name, email, message fields and send button is present
    And an opening hours section is shown
    And a bottom bar with footer navigation links is displayed
    And the footer links "Home", "About Us", "Services", "News", "Contact" are shown
    And a link to "https://www.componentdock.com/" is present (Component Dock branding)

  Scenario: Design tokens match the original
    Then the primary brand color is #32c69a (teal-green)
    And the font family is Montserrat
    And buttons are rectangular with no border-radius
    And buttons use teal background with white uppercase text
    And sections alternate between white and #f4f8fb backgrounds
```

## Verification Checklist

- [ ] All 10 sections present in correct order (top bar → nav → hero → info → CTA → services → departments → FAQ → news → footer)
- [ ] Brand color #32c69a used for nav, buttons, accents
- [ ] Font: Montserrat (Google Fonts) loaded in index.html
- [ ] Buttons: rectangular, teal bg, white uppercase text, letter-spacing
- [ ] Hero: full-width background image with text overlay
- [ ] Info boxes: 3-column layout with images
- [ ] Services: 2×3 icon grid with titles and descriptions
- [ ] Departments: carousel/slider of department cards
- [ ] FAQ section present
- [ ] News: 3 blog post cards with images
- [ ] Footer: dark gray with about, contact form, hours, nav
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Package name: @free-react-templates/healio
- [ ] CNAME: healio.free.componentdock.com
- [ ] Tests: 100% coverage
- [ ] Uses packages/ui components (Button, ButtonLink, cn) where applicable
