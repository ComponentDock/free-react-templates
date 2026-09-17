# Template: Glider (Creative Agency)

## Purpose

Glider is a single-page CREATIVE AGENCY / PORTFOLIO template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bobsled" free template (source:
https://colorlib.com/wp/template/bobsled/), built under a DIFFERENT name
(**Glider**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 + jQuery template by CodePixar: a full-viewport
page with a blue-to-cyan gradient body background, centered content sections
on white cards, and a multi-section creative agency layout. The page includes
a navbar, hero banner, working process steps, feature cards, portfolio
showcase, story section, newsletter subscription, contact form, and a footer
widget area with social links.

**WHAT MAKES GLIDER DISTINCT (signature behaviors):**

1. **Blue-cyan gradient body.** The entire page background is a linear
   gradient from `#4cd4e3` (cyan) at top to `#3e69fe` (blue) at bottom,
   applied to `body`. All sections sit on top of this gradient — hero and
   featured/story areas are transparent (showing the gradient), while
   working-process, remarkable-works, and subscription areas use white or
   light `#f9f9ff` cards.

2. **Pill-shaped transparent buttons.** The `.primary-btn` is a 20px
   border-radius pill with transparent background, 1px white border, and
   white text. On hover, the button fills with the gradient. This is the
   ONLY template in the series with transparent pill CTA buttons on a
   gradient body.

3. **Gradient-text accents.** Icon labels and button hover states use
   `-webkit-background-clip: text` with the blue-cyan gradient, creating
   gradient text effects on section titles and card labels.

4. **4-step working process with arrow connectors.** A horizontal row of
   4 icon boxes (120x120px, `border-radius: 3px`) connected by arrow
   images, each labeled (Researching → Wireframing → Prototyping → Final
   Design). The icon boxes have a light background with gradient-text
   labels.

5. **Alternating portfolio showcase.** Three "Remarkable Works" rows
   alternate image-left/text-right and text-left/image-right, each in a
   7:5 column split with box-shadow cards (`0px 15px 50px rgba(0,0,0,0.1)`).

6. **Story box with floating position.** The story section has a white
   card (`border-radius: 3px`, padding 60px 90px) positioned with
   `z-index: 2` over the gradient, offset from the left with a spacer
   column.

## Naming

- **New name:** Glider
- **Source name:** Bobsled
- **Source slug:** `bobsled`
- **Source URL:** https://colorlib.com/wp/template/bobsled/
- **Apps folder:** `apps/glider`
- **Package:** `@free-react-templates/glider`
- **No name collision** with `ls apps/` (confirmed: no "glider" folder exists)

## Design reference (replication findings)

### Preview DOM (reachable via https://preview.colorlib.com/theme/bobsled/)

Fetched and analyzed on 2026-09-07. The preview HTML is 17,947 bytes,
164 lines. Full template structure extracted (see Section order below).

**Section order (from DOM):**

1. **Navbar** — Logo image + nav links (Home, Generic, Elements) + hamburger
   menu (`.menu-bar` with `.lnr-menu` icon). Hidden nav on mobile.
2. **Hero / Banner** — Full-width gradient area. Container with 7-col left:
   uppercase h1 "Don't look anywhere, This is the best place on web" +
   subtext paragraph + "Get Started" pill button. Right side: decorative
   hero-bg.png illustration (50% width, absolute positioned).
3. **Working Process** — White background section. Section title "Our Working
   Process" centered. 4 icon boxes in a flex row with arrow images between
   them: Researching, Wireframing, Prototyping, Final Design.
4. **Featured / Exclusive Features** — Gradient background section. Section
   title "Our Exclusive Features" in white. 3 feature cards (col-md-4) each
   with: thumbnail image, title (Creative Design, Appropriate UX, Super
   Clean Code), description text, "Read More" pill button.
5. **Remarkable Works** — White background section. Section title "Remarkable
   Works" centered. 3 alternating rows: each has a 7:5 split with image on
   one side and text (title "Vector Illustration" + description + "View
   Project" button) on the other. Box-shadow cards.
6. **Story** — Gradient background section. Offset container (col-lg-1 spacer
   - col-lg-7 content). White card with "From the part of beginning"
     uppercase h6, paragraph, "Get Started" button.
7. **Subscription** — Light `#f9f9ff` background. Left: "Subscribe for our
   Newsletter" title + subtext. Right: email input + "Get Started" button.
8. **Contact Form** — Gradient background section. Section title "Keep in
   Touch" in white. Form with: name input, email input, textarea, "Send
   Message" button (right-aligned).
9. **Footer Widget** — Transparent background over gradient. 3 columns:
   Address, Email Address, Phone Number. Centered text in each.
10. **Footer** — Over gradient. Logo + copyright text ("Copyright 2017 |
    All rights reserved to Dinomuz inc.") + social icons (Facebook, Twitter,
    Dribbble, Behance). Border-top: 1px solid rgba(255,255,255,0.3).

### Design tokens (extracted from css/main.css)

| Token                  | Value                                        | Usage                                                                   |
| ---------------------- | -------------------------------------------- | ----------------------------------------------------------------------- |
| Font family            | `"Poppins", sans-serif`                      | Body, all text (weights 300, 500, 600)                                  |
| Body font size         | `14px`                                       | Base text                                                               |
| Body font weight       | `300`                                        | Light weight base                                                       |
| Body text color        | `#777777`                                    | Paragraphs, labels                                                      |
| Heading color          | `#222222`                                    | h2, h4, strong                                                          |
| Primary brand gradient | `#3e69fe` → `#4cd4e3`                        | Hero bg, featured bg, story bg, contact bg, button hover, gradient text |
| Body background        | `linear-gradient(0deg, #4cd4e3, #3e69fe)`    | Full page gradient (cyan top → blue bottom)                             |
| White                  | `#fff`                                       | Text on gradient, card backgrounds, button text                         |
| Light section bg       | `#f9f9ff`                                    | Subscription area                                                       |
| Link/accent            | `#3e69fe`                                    | Anchor tags                                                             |
| Button border-radius   | `20px`                                       | Pill shape                                                              |
| Button style           | transparent bg, 1px white border, white text | `.primary-btn`                                                          |
| Button hover           | gradient fill                                | `.primary-btn:hover:after`                                              |
| Icon box size          | `120px × 120px`                              | Work process icons                                                      |
| Icon box radius        | `3px`                                        | Square-ish with slight rounding                                         |
| Card shadow            | `0px 15px 50px rgba(0,0,0,0.1)`              | Remark cards                                                            |
| Story box padding      | `60px 90px`                                  | White card in story section                                             |
| Footer border          | `1px solid rgba(255,255,255,0.3)`            | Separator above footer                                                  |
| Section padding        | `100px 0`                                    | All major sections                                                      |

### Screenshot (`bobsled-creative-website-template.jpg`)

The screenshot shows a creative agency template with:

- Blue-cyan gradient background visible behind all sections
- Hero area with large white uppercase headline and pill CTA button
- Working process section on white background with 4 icon steps
- Features section on gradient with 3 image cards
- Portfolio showcase with alternating image/text rows on white
- Story section with floating white card
- Newsletter subscription on light background
- Contact form on gradient
- Footer with social icons

## Requirements

### Requirement: Page renders with gradient background

The page SHALL display a blue-to-cyan linear gradient background covering the full viewport.

#### Scenario: Full page renders with gradient background

- **WHEN** the user visits the Glider homepage
- **THEN** the page background should display a blue-to-cyan gradient
- **AND** all sections should be visible in order: navbar, hero, working process, features, remarkable works, story, subscription, contact, footer

### Requirement: Navbar displays logo and navigation links

The navbar SHALL show a logo, desktop navigation links, and a hamburger menu on mobile.

#### Scenario: Navbar displays logo and navigation links

- **WHEN** the user visits the Glider homepage
- **THEN** the navbar should show a logo on the left
- **AND** navigation links "Home", "About", "Services", "Works" should be visible on desktop
- **AND** a hamburger menu icon should be visible on mobile

### Requirement: Hero banner shows headline and CTA

The hero section SHALL display an uppercase headline, subtitle, pill CTA button, and decorative illustration.

#### Scenario: Hero banner shows headline and CTA

- **WHEN** the user visits the Glider homepage
- **THEN** the hero section should display an uppercase headline
- **AND** a subtitle paragraph should appear below the headline
- **AND** a "Get Started" pill button should be visible
- **AND** the hero area should show a decorative illustration on the right

### Requirement: Working process shows 4 steps with arrows

The working process section SHALL display 4 steps connected by arrow connectors.

#### Scenario: Working process shows 4 steps with arrows

- **WHEN** the user views the working process section
- **THEN** 4 step cards should be displayed horizontally
- **AND** each card should have an icon and a label
- **AND** the steps should be: Researching, Wireframing, Prototyping, Final Design
- **AND** arrow connectors should appear between the steps

### Requirement: Features section shows 3 feature cards

The features section SHALL display 3 cards with images, titles, descriptions, and buttons.

#### Scenario: Features section shows 3 feature cards

- **WHEN** the user views the features section
- **THEN** 3 feature cards should be displayed in a row
- **AND** each card should have a thumbnail image, title, description, and button
- **AND** the section title should read "Our Exclusive Features"

### Requirement: Remarkable works shows alternating layout

The remarkable works section SHALL display 3 portfolio rows with alternating image/text layout.

#### Scenario: Remarkable works shows alternating layout

- **WHEN** the user views the remarkable works section
- **THEN** 3 portfolio rows should be displayed
- **AND** rows should alternate between image-left/text-right and text-left/image-right
- **AND** each row should have a title, description, and "View Project" button
- **AND** rows should have a box shadow

### Requirement: Story section shows floating card

The story section SHALL display a white card offset from the left with content.

#### Scenario: Story section shows floating card

- **WHEN** the user views the story section
- **THEN** a white card should appear offset from the left
- **AND** the card should contain an uppercase heading, paragraph, and CTA button

### Requirement: Subscription area accepts email

The subscription section SHALL display a newsletter heading, email input, and button.

#### Scenario: Subscription area accepts email

- **WHEN** the user views the subscription section
- **THEN** a "Subscribe for our Newsletter" heading should be visible
- **AND** an email input field should be present
- **AND** a "Get Started" button should be next to the input

### Requirement: Contact form collects user messages

The contact section SHALL display a form with name, email, textarea, and send button.

#### Scenario: Contact form collects user messages

- **WHEN** the user views the contact form section
- **THEN** name and email inputs should be displayed side by side
- **AND** a textarea for messages should be below them
- **AND** a "Send Message" button should be right-aligned below the textarea

### Requirement: Footer shows contact info and social links

The footer SHALL display 3-column contact info, social icons, copyright, and Component Dock link.

#### Scenario: Footer shows contact info and social links

- **WHEN** the user views the footer
- **THEN** address, email, and phone information should be displayed in 3 columns
- **AND** social media icons should be visible
- **AND** copyright text should be present
- **AND** a link to Component Dock should be present

### Requirement: Responsive layout adapts to mobile

The template SHALL be responsive with hamburger nav, stacked columns, and reduced padding on mobile.

#### Scenario: Responsive layout adapts to mobile

- **WHEN** the user views the Glider homepage on a mobile device
- **THEN** the navbar should collapse to a hamburger menu
- **AND** multi-column layouts should stack vertically
- **AND** the story box padding should reduce

## Verification checklist

- [ ] Page renders with blue-cyan gradient body background
- [ ] Navbar shows logo + desktop nav + mobile hamburger
- [ ] Hero section has headline, subtitle, pill CTA, decorative illustration
- [ ] Working process shows 4 steps with arrow connectors
- [ ] Features section shows 3 cards with images, titles, descriptions
- [ ] Remarkable works shows 3 alternating image/text rows with shadows
- [ ] Story section shows floating white card with content
- [ ] Subscription section has email input + button on light background
- [ ] Contact form has name, email, textarea, send button
- [ ] Footer has 3-column info + social icons + copyright
- [ ] All pill buttons have 20px border-radius, transparent bg, white border
- [ ] Gradient text effects on icon labels and button hover states
- [ ] Responsive: hamburger nav, stacked columns, reduced padding on mobile
- [ ] Footer links to https://www.componentdock.com/
- [ ] No references to ColorLib in app code
- [ ] Package name: @free-react-templates/glider
- [ ] CNAME: glider.free.componentdock.com
