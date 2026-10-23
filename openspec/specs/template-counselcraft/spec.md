# Template: Counselcraft (Counseling Service)

## Purpose

Counselcraft is a single-page counseling service landing page recreation of
the ColorLib "Counselor" free template (source:
https://colorlib.com/wp/template/counselor/), built under a DIFFERENT name.
No ColorLib references may appear in the app code.

Preview URL: https://preview.colorlib.com/theme/counselor/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/counselor-free-template.jpg

Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript (strict).

## Design Tokens (extracted from preview)

- **Font family**: "Roboto", Arial, sans-serif (weights 300, 400, 500, 700)
- **Brand color (green)**: #589167 — used for primary buttons, intro card
  background, pricing price numbers, appointment section overlay
- **Secondary green**: #528760, #4e815c (darker green shades)
- **Accent green**: #01d28e (subtle highlight)
- **Dark background**: #1a1a1a (footer)
- **Light section background**: #f5f4f0 (alternating sections)
- **Button primary**: #589167 (overridden from Bootstrap default #007bff)
  - Hover: transparent with green border (outline variant)
  - Border-radius: ~0.25rem (small, Bootstrap default)
  - Padding: py-3 px-4
- **White button**: white background, green border, green text (outline)
- **Card shadow**: 0px 24px 48px -13px rgba(0,0,0,0.05) (pricing cards)
- **Hero overlay**: dark semi-transparent overlay on background image
- **Footer**: #1a1a1a dark background, white text, green hover links
- **Top bar**: dark green (#589167) background, white text + icons
- **Navbar**: dark background (Bootstrap navbar-dark), white brand text

## Section Structure (from preview DOM)

1. **TopBar** — thin dark green bar: phone number + email (left), social
   icons (right). Background: #589167, white text.
2. **Navbar** — sticky, dark background, "Counselcraft" brand (bold),
   nav links: Home, About, Counselors, Services, Pricing, Blog, Contact.
3. **Hero** — full-width background image with dark overlay. Left-aligned:
   headline "Counseling For Your Better Life", subtext, two CTAs
   (solid green "Contact us" + outline white "Read more"). Right: circular
   play button (video link).
4. **Intro Cards** — 3-column strip, dark green background (#589167),
   raised ~-70px above following section via negative margin. Columns:
   100% Confidential, Qualified Team, Individual Approach. Each has a
   white icon + bold heading + description.
5. **How It Works** — white background. Centered heading with subheading
   "Services". Three step cards with numbered circles (01, 02, 03):
   Make Schedule, Start Discussion, Enjoy Plan.
6. **About** — split layout: left image, right text on #f5f4f0 background.
   Heading "Best Counseling Funding Network Worldwide" with descriptive
   paragraph.
7. **Services** — white background. Centered heading "We Can Help You With
   This Situation". 6 service items in 2-column grid: Relation Problem,
   Couples Counseling, Depression Treatment, Family Problem, Personal
   Problem, Business Problem. Each has icon + title + description.
8. **Testimonials** — dark overlay background, owl-carousel of testimonial
   cards. "Happy Clients" heading. Each card: avatar + quote + name.
9. **Pricing** — light (#f5f4f0) background. 3 pricing cards (Basic,
   Standard, Premium) with price number, feature list with green check
   icons, CTA button.
10. **Appointment** — background image with green overlay (#589167).
    Split: left side heading "Send a Message & Get in touch!" with form,
    right side decorative text.
11. **Blog** — white background. "Recent Blog" heading. 3 blog cards with
    image + category + title + date.
12. **Footer** — #1a1a1a dark background. 4 columns: logo + social icons,
    Explore links, Legal links, Company links. Bottom: copyright + a
    "Have a Questions?" section with email signup.

## Requirements

### TopBar

#### Scenario: TopBar displays contact info and social icons

- **GIVEN** the user visits the homepage
- **THEN** the TopBar shows a phone number and email on the left
- **AND** social media icons (Facebook, Twitter, Instagram, Dribbble) on the right

### Navbar

#### Scenario: Navbar is sticky and shows all nav links

- **GIVEN** the user visits the homepage
- **THEN** the Navbar displays the brand name "Counselcraft"
- **AND** shows links: Home, About, Counselors, Services, Pricing, Blog, Contact
- **AND** the Navbar becomes sticky on scroll

#### Scenario: Navbar has mobile toggle

- **GIVEN** the viewport is mobile-width
- **THEN** a hamburger menu button is visible
- **AND** clicking it toggles the nav links

### Hero

#### Scenario: Hero shows headline and CTAs

- **GIVEN** the user visits the homepage
- **THEN** the Hero section displays a background image with dark overlay
- **AND** the headline "Counseling For Your Better Life" is visible
- **AND** two buttons are shown: "Contact us" (solid green) and "Read more" (outline white)
- **AND** a circular play button is shown on the right side

#### Scenario: Hero video button opens video modal

- **GIVEN** the user clicks the play button in the Hero
- **THEN** a video modal or overlay opens

### Intro Cards

#### Scenario: Three intro cards are displayed

- **GIVEN** the user scrolls to the Intro section
- **THEN** 3 cards are shown in a row on desktop
- **AND** the cards are: 100% Confidential, Qualified Team, Individual Approach
- **AND** each card has an icon, heading, and description

### How It Works

#### Scenario: Three steps are displayed

- **GIVEN** the user scrolls to the How It Works section
- **THEN** 3 numbered step cards are shown: Make Schedule, Start Discussion, Enjoy Plan
- **AND** each has a numbered circle badge (01, 02, 03)

### About

#### Scenario: About section shows image and text

- **GIVEN** the user scrolls to the About section
- **THEN** a split layout with an image on the left and text on the right is displayed
- **AND** the heading reads "Best Counseling Funding Network Worldwide"
- **AND** the section has a light background

### Services

#### Scenario: Six services are displayed

- **GIVEN** the user scrolls to the Services section
- **THEN** 6 service items are shown in a 2-column grid
- **AND** the items are: Relation Problem, Couples Counseling, Depression Treatment,
Family Problem, Personal Problem, Business Problem
- **AND** each has an icon, title, and short description

### Testimonials

#### Scenario: Testimonial carousel is shown

- **GIVEN** the user scrolls to the Testimonials section
- **THEN** a carousel of testimonial cards is displayed
- **AND** the section has a dark overlay background
- **AND** each card shows an avatar, quote text, and author name

### Pricing

#### Scenario: Three pricing plans are shown

- **GIVEN** the user scrolls to the Pricing section
- **THEN** 3 pricing cards are displayed in a row on desktop
- **AND** each card has a price, feature list, and a CTA button
- **AND** the feature list uses green checkmark icons

#### Scenario: Pricing cards are responsive

- **GIVEN** the user views on mobile
- **THEN** the pricing cards stack vertically

### Appointment

#### Scenario: Appointment form section is displayed

- **GIVEN** the user scrolls to the Appointment section
- **THEN** a background image with green overlay is shown
- **AND** a contact form is visible on the left with heading "Send a Message"
- **AND** form fields include name, subject, message

### Blog

#### Scenario: Three blog posts are shown

- **GIVEN** the user scrolls to the Blog section
- **THEN** 3 blog cards are displayed
- **AND** each card has an image, category, title, and date

### Footer

#### Scenario: Footer shows company info and links

- **GIVEN** the user scrolls to the Footer
- **THEN** a dark background (#1a1a1a) footer is displayed
- **AND** 4 columns are shown: brand + social, Explore, Legal, Company
- **AND** the footer links to Component Dock in the bottom bar

#### Scenario: Footer social icons are interactive

- **GIVEN** the user hovers over a social icon in the Footer
- **THEN** the icon color changes to green (#589167)

## Verification checklist

- [ ] TopBar renders with contact info and social icons
- [ ] Navbar is sticky, has mobile toggle, all 7 nav links
- [ ] Hero has background image, overlay, headline, 2 CTA buttons, play button
- [ ] Intro section has 3 cards on green background
- [ ] How It Works has 3 numbered steps
- [ ] About section has split image/text layout
- [ ] Services section has 6 service items in 2-col grid
- [ ] Testimonials carousel works with dot/arrow navigation
- [ ] Pricing has 3 cards with responsive stacking
- [ ] Appointment section has form with background image overlay
- [ ] Blog section has 3 cards
- [ ] Footer has 4 columns, social icons, Component Dock link
- [ ] All sections use correct design tokens (green #589167, Roboto font)
- [ ] Responsive: all sections adapt to mobile/tablet/desktop
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] public/CNAME contains counselcraft.free.componentdock.com
