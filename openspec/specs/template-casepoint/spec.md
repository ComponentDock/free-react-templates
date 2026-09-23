# Template: Casepoint (Legal / Law Firm)

## Purpose

Recreation of ColorLib's "TheLawyer" template — a professional single-page law firm website.

- **ColorLib source:** https://colorlib.com/wp/template/thelawyer/
- **Preview URL:** https://preview.colorlib.com/theme/thelawyer/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/thelawyer-free-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New app name:** `casepoint` (apps/casepoint, @free-react-templates/casepoint)

## Design tokens

Extracted from the preview's `style.css` and visual inspection.

### Colors

| Token              | Value     | Usage                                               |
| ------------------ | --------- | --------------------------------------------------- |
| `--brand-primary`  | `#3957ff` | Primary buttons, section subtitle, accent lines, icon color, hover states |
| `--brand-dark`     | `#112957` | Hero button bg, submit buttons, dark CTA bg          |
| `--brand-darker`   | `#0b1416` | Black CTA button background                         |
| `--text-heading`   | `#092c3f` | Heading h1–h6 color                                 |
| `--text-body`      | `#10285d` | Paragraph body text                                 |
| `--text-hero`      | `#212025` | Hero heading and hero paragraph color               |
| `--text-muted`     | `#57667e` | Card description text                               |
| `--border-card`    | `#dddddd` | Practice area card borders                          |
| `--bg-white`       | `#ffffff` | Card backgrounds, page bg                           |
| `--bg-footer`      | dark image | Footer background (image-based)                    |
| `--bg-cta`         | image     | CTA banner section (background image)              |
| `--bg-testimonial` | image     | Testimonial section (background image)              |

### Fonts

| Role      | Font Family               | Weight          |
| --------- | ------------------------- | --------------- |
| Headings  | Josefin Sans              | 300–700         |
| Body      | Roboto                    | 300–500         |
| Hero h1   | Rubik                     | 500             |

### Button styles

- **Primary button:** bg `#3957ff`, color white, font-family Josefin Sans, font-size 16px, letter-spacing 1px, border-radius 0px (sharp corners), padding 27px 44px, hover slides a `#2544f5` pseudo-element from left (scaleX animation)
- **Hero button:** bg `#112957`, padding 30px 38px, border-radius 0, hover uses `#3957ff` pseudo
- **Header phone button:** bg `#3957ff`, padding 19px 44px, uppercase, Roboto 14px
- **Black CTA:** bg `#0b1416`, white text, padding 27px 44px
- **Submit button (form):** bg `#112957`, 100% width, height 60px, border-radius 0
- **Section subtitle:** Josefin Sans 18px, uppercase, color `#3957ff`, padding-left 68px with a 54px × 2px `#3957ff` line before it

### Section backgrounds

- Hero: full-width background image (`h1_hero.jpg`), height 900px
- Categories/Practice Areas: white bg, section-padding30 (195px top)
- About: split layout — left image, right text on white
- Contact form: background image (`section_bg05.png`), dark treatment
- Services/Cases: white bg, section-padding3 (280px top)
- CTA Banner: background image (`section_bg03.png`), dark overlay
- Team: white bg, section-padding30
- Testimonial: background image (`section_bg04.png`)
- Blog: white bg, section-padding30
- Footer: background image (`footer_bg.jpg`), dark treatment

## Gherkin requirements

### Scenario: Header renders with navigation and phone CTA

```gherkin
Feature: Casepoint Header

  Scenario: Header shows logo, navigation links, and phone button
    Given the user visits the Casepoint homepage
    Then the header displays the "Casepoint" logo
    And the navigation shows links: "Home", "About", "Services", "Case Studies", "Blog", "Contact"
    And a phone number button "01654.066.456" is visible in the header
    And the header is sticky on scroll
```

### Scenario: Hero section with headline and CTA

```gherkin
Feature: Casepoint Hero

  Scenario: Hero displays headline, subtext, and CTA button
    Given the user visits the Casepoint homepage
    Then the hero section shows the subtitle "Committed to success" with a left blue accent line
    And the headline reads "Dont Feel Helpless We Fight for Justice"
    And a paragraph of supporting text is displayed below
    And a "Learn About Us" button is visible
    And the hero has a background image of a lawyer
```

### Scenario: Practice Areas section

```gherkin
Feature: Casepoint Practice Areas

  Scenario: Practice areas show three category cards
    Given the user scrolls to the Practice Areas section
    Then the section title "Our Practicing Area" is displayed with blue accent line
    And the heading reads "Area Of Practice That Can Help You To Win"
    And three practice area cards are shown in a grid
    And each card has an icon, title, description paragraph, and "Read More >" link
    And the card titles are "Health Law", "Insurance Law", "Vehicle Accident"
    And cards have a white background with #dddddd border
```

### Scenario: About section

```gherkin
Feature: Casepoint About

  Scenario: About section shows split layout with image and text
    Given the user scrolls to the About section
    Then the section displays "About Our Law agency" as subtitle
    And the heading reads "We are commited for better service"
    And two paragraphs of descriptive text are shown
    And a "Learn About Us" button with dark navy bg is visible
    And a background image is displayed on the left side
```

### Scenario: Contact form section

```gherkin
Feature: Casepoint Contact Form

  Scenario: Contact form displays with fields and submit
    Given the user scrolls to the Contact Form section
    Then the subtitle reads "Fill up to get a qote"
    And the heading reads "World's Leading Law Consultency Agency !"
    And the form has fields: Name, Phone, Practice Area (select), Email, Message
    And a "Submit Now" button is displayed
    And the section has a background image
```

### Scenario: Services/Case Studies section

```gherkin
Feature: Casepoint Case Studies

  Scenario: Case studies display with tabbed navigation
    Given the user scrolls to the Case Studies section
    Then the section title "our recent work" is displayed
    And the heading reads "Reliable, Effective & Wining Law For Customers"
    And three tabs are shown: "Accident Law", "Health Law", "Insurance Law"
    And the active tab shows a 2x2 grid of case study cards
    And each card has an image and a caption with category label and description link
```

### Scenario: CTA Banner

```gherkin
Feature: Casepoint CTA Banner

  Scenario: CTA banner shows consultant inquiry prompt
    Given the user scrolls to the CTA Banner section
    Then the heading reads "Are you Searching For a First-Class Consultant?"
    And a "Contact Naw" button with dark background is visible
    And the section has a background image with dark treatment
```

### Scenario: Team section

```gherkin
Feature: Casepoint Team

  Scenario: Team section displays three team members
    Given the user scrolls to the Team section
    Then the section title "Our lawyers" is displayed
    And the heading reads "Meet Our Dedicated Team Members."
    And three team member cards are shown
    And each card has a photo, name, and role title
    And the team members are "Ethan Welch" (Chir Lawyer), "Trevor Stanley" (Junior Lawyer), "Allen Guzman" (Senior Lawyer)
```

### Scenario: Testimonial section

```gherkin
Feature: Casepoint Testimonials

  Scenario: Testimonial carousel shows client quote
    Given the user scrolls to the Testimonial section
    Then a white quote icon SVG is displayed
    And a testimonial paragraph is shown
    And the founder name "Oliva jems" and role "Chif Lawyer" are displayed
    And a founder photo is shown
    And the section has a background image
    And the testimonial uses carousel/slider behavior
```

### Scenario: Blog section

```gherkin
Feature: Casepoint Blog

  Scenario: Blog section shows article cards
    Given the user scrolls to the Blog section
    Then the section title "Insight and Trends Articles" is displayed
    And the heading reads "Lawyers news from around the world selected by us."
    And two blog post cards are shown in a grid
    And each card has an image with date overlay, and a caption with title and description
```

### Scenario: Footer

```gherkin
Feature: Casepoint Footer

  Scenario: Footer shows links, newsletter, and social
    Given the user scrolls to the footer
    Then the footer shows the logo and a description paragraph
    And contact info: phone "+564 7885 3222" and email "youremail@gmail.com"
    And an "Our Support" column with links: Advanced, Management, Corporate, Customer, Information
    And a "Quick Link" column with links: New Law, About, Privacy Policy, Licenses
    And a "Newslatter" section with email input and "Send" button
    And social icons for Twitter, Facebook, Globe, Instagram
    And a copyright line with "Component Dock" attribution link
    And the footer has a dark background image
```

## Verification checklist

- [ ] Header: sticky, logo, 6 nav links, phone CTA button
- [ ] Hero: background image, subtitle with blue line, h1, paragraph, dark navy CTA button
- [ ] Practice Areas: 3 bordered cards with icons, titles, descriptions, "Read More >" links
- [ ] About: split layout, image left, text right, dark CTA button, section subtitle
- [ ] Contact Form: 5 fields (name, phone, select, email, message), submit button, background image
- [ ] Case Studies: 3 tabs, 2x2 card grid per tab, image + caption per card
- [ ] CTA Banner: heading, dark button, background image
- [ ] Team: 3 member cards with photos, names, roles
- [ ] Testimonial: quote icon, paragraph, founder info, carousel behavior, background image
- [ ] Blog: 2 article cards with image/date overlay and caption
- [ ] Footer: 4 columns (logo+info, support links, quick links, newsletter), social icons, copyright with Component Dock link
- [ ] All colors match design tokens
- [ ] Fonts: Josefin Sans headings, Roboto body, Rubik hero h1
- [ ] Buttons: sharp corners (border-radius 0), correct colors, hover animations
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links https://www.componentdock.com/
- [ ] Images use picsum.photos placeholders with deterministic seeds
