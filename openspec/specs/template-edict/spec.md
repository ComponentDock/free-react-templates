# Template: Edict (Law Firm / Legal Services)
<!-- prep-status: shipped-as=lawguard -->
> **SHIPPED-UNDER** — the ColorLib `solicitor` design this prep describes already
> ships as `apps/lawguard` (<https://lawguard.free.componentdock.com>).
> Do not scaffold `apps/edict`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-lawguard/spec.md`.

## Purpose

Recreation of the ColorLib "Solicitor" template for a law firm / legal services website.

- **Source:** https://colorlib.com/wp/template/solicitor/
- **Preview:** https://preview.colorlib.com/theme/solicitor/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **New name:** edict (never "solicitor" in app code)

## Design Tokens

### Colors

| Token          | Value                    | Usage                                   |
| -------------- | ------------------------ | --------------------------------------- |
| Background     | `#1b1c1e` (near-black)   | Page body, all section backgrounds      |
| Surface        | `rgba(255,255,255,0.02)` | Service cards, form backgrounds         |
| Surface hover  | `#037ef3` (blue)         | Card hover states, active indicators    |
| Accent / brand | `#037ef3` (blue)         | CTA buttons, links, active nav, circles |
| Accent hover   | `#2991f5` / `#1c8bf4`    | Button hover states                     |
| Text primary   | `#ffffff`                | Headings, body text                     |
| Text muted     | `rgba(255,255,255,0.7)`  | Nav links, placeholders                 |
| Text secondary | `rgba(255,255,255,0.4)`  | List links, muted text                  |
| Text white-50  | `rgba(255,255,255,0.5)`  | Subheadings, descriptions               |
| Overlay        | `rgba(0,0,0,0.4)`        | Hero image dark overlay                 |
| Dark surface   | `#0f0f11`                | About-me image wrap background          |

### Typography

| Element       | Font Family             | Weight | Size |
| ------------- | ----------------------- | ------ | ---- |
| Body          | Roboto, sans-serif      | 400    | 14px |
| Headings      | Playfair Display, serif | 700    | 45px |
| Hero heading  | Playfair Display, serif | 700    | 50px |
| Logo          | Playfair Display, serif | 700    | 24px |
| Nav links     | Roboto                  | 400    | 14px |
| Service cards | Roboto                  | 400    | 16px |

### Button Shapes

- Border radius: 4px
- Padding: 15px 30px
- Font size: 14px
- Shadow on hover: `0 10px 20px 0 rgba(0,0,0,0.2)`
- Primary: background `#037ef3`, text `#ffffff`
- Outline-white: border `#fff`, text `#fff`; hover fills white with black text
- Arrow variant: extra right padding (50px) with arrow icon

### Section Backgrounds

- Body: solid `#1b1c1e` (dark)
- Our Services: `rgba(255,255,255,0.02)` (barely-there light tint)
- Practice Area cards: `#0f0f11` → hover `#037ef3`
- Resources box: `rgba(255,255,255,0.02)`
- Testimonials: default dark
- Contact form: white background card with shadow
- Footer: default dark

## Section Order (from preview DOM)

1. **Navbar** — fixed/absolute top, transparent background over hero. Logo left, centered nav links (Home, Practicing Area with dropdown, Services, About, Contact Us), phone number right. Mobile hamburger menu.
2. **Hero** — full-screen (`height: 100vh; min-height: 780px`), background image with dark overlay (`rgba(0,0,0,0.4)`). Left-aligned content: large heading, subtext, two CTA buttons ("Our services" primary, "Contact us" outline-white).
3. **About Me** (`sec-about-me`) — two-column. Left: heading "I'm Jon Campbell", two paragraphs of text, CTA button. Right: image with dark background strip extending below.
4. **Our Services** (`bg-custom-light`) — section heading "Our Services", 3×2 grid of service cards. Each card: circle icon (blue background on hover), title, description paragraph. Services: Counsel, Legal Dept, Compliance, Identity, Hall of Justice, Law Abiding.
5. **Security Consultants** (`sec-why-us`) — two-column. Left: large image. Right: heading "Security Consultants", subheading "Justice serves", paragraph, CTA button.
6. **Tabbed Services** (`sec-3`) — vertical tab navigation with 3 tabs (Investigative Services, Security Consultations, Criminal Defense Investigations). Each tab: left column heading + text + CTA, right column image.
7. **Practice Area** (`sec-4`) — heading "Practice Area", 3-column grid of 12 numbered cards (01–12). Each card: dark background (`#0f0f11`), number, service title, arrow icon. Hover turns blue (`#037ef3`).
8. **Testimonials** (`sec-testimonial`) — heading "Testimonials", split layout. Left: 3 author photos in vertical tabs with name + title. Right: blockquote with testimonial text, attribution.
9. **Resources** (`sec-list`) — heading "Resources" + description. 4-column box with link lists (6 items per column).
10. **Peace & Order** (`py-0`) — two-column. Left: heading, paragraph, CTA. Right: image (reversed order on desktop: image right, text left).
11. **Contact Form** (`sec-6`) — heading "Write to us", form with fields: Full Name, Email, Phone Number, Choose a Service (select/text), Message (textarea), Submit button.
12. **Footer** (`site-footer`) — 3-column: Contact (address, phone, email), Sources (links), Links (links + social icons: Instagram, Twitter, Facebook, Pinterest, Dribbble). Social icons in circular buttons, hover turns blue.

## Requirements

### Feature: Edict template behaviour

#### Scenario: Navbar renders with correct links

- **GIVEN** the page loads
- **WHEN** I look at the navbar
- **THEN** I see the logo "Edict"
- **AND** I see nav links: Home, Practicing Area, Services, About, Contact Us
- **AND** I see a phone number on the right

#### Scenario: Hero section displays correctly

- **GIVEN** the page loads
- **WHEN** I look at the hero section
- **THEN** I see a full-screen background image with dark overlay
- **AND** I see a heading "Meet all your investigative and litigation needs"
- **AND** I see a subtext paragraph
- **AND** I see two CTA buttons: "Our services" (primary) and "Contact us" (outline)

#### Scenario: About Me section shows practitioner info

- **GIVEN** the page loads
- **WHEN** I scroll to the About Me section
- **THEN** I see the heading "I'm Jon Campbell"
- **AND** I see two text columns: text on left, image on right
- **AND** I see a CTA button "Our services"

#### Scenario: Our Services grid renders 6 service cards

- **GIVEN** the page loads
- **WHEN** I scroll to the Our Services section
- **THEN** I see heading "Our Services"
- **AND** I see 6 service cards in a 3-column grid
- **AND** each card has an icon, title, and description
- **AND** the service titles are: Counsel, Legal Dept, Compliance, Identity, Hall of Justice, Law Abiding

#### Scenario: Service card hover effect

- **GIVEN** the Our Services section is visible
- **WHEN** I hover over a service card
- **THEN** the card background changes to blue (#037ef3)
- **AND** the icon becomes fully opaque

#### Scenario: Security Consultants section

- **GIVEN** the page loads
- **WHEN** I scroll to the Security Consultants section
- **THEN** I see a large image on the left
- **AND** I see heading "Security Consultants" with subheading "Justice serves"
- **AND** I see a paragraph and CTA button "Read more"

#### Scenario: Tabbed services switch content

- **GIVEN** the tabbed services section is visible
- **WHEN** I click the "Security Consultations" tab
- **THEN** the tab becomes active
- **AND** I see the Security Consultations heading and image
- **WHEN** I click the "Criminal Defense Investigations" tab
- **THEN** I see the Criminal Defense Investigations heading and image

#### Scenario: Practice Area grid shows 12 items

- **GIVEN** the page loads
- **WHEN** I scroll to the Practice Area section
- **THEN** I see heading "Practice Area"
- **AND** I see 12 numbered cards in a 3-column grid
- **AND** each card shows a number (01–12), service title, and arrow icon

#### Scenario: Practice area card hover

- **GIVEN** the Practice Area section is visible
- **WHEN** I hover over a practice area card
- **THEN** the card background changes to blue (#037ef3)

#### Scenario: Testimonials section with tabbed authors

- **GIVEN** the page loads
- **WHEN** I scroll to the Testimonials section
- **THEN** I see heading "Testimonials"
- **AND** I see 3 author photos on the left with names and titles
- **AND** I see a blockquote with testimonial text on the right
- **WHEN** I click a different author
- **THEN** the testimonial text changes to that author's quote

#### Scenario: Resources section shows link columns

- **GIVEN** the page loads
- **WHEN** I scroll to the Resources section
- **THEN** I see heading "Resources"
- **AND** I see 4 columns of links in a box container

#### Scenario: Peace & Order section

- **GIVEN** the page loads
- **WHEN** I scroll to the Peace & Order section
- **THEN** I see heading "Peace & order"
- **AND** I see a paragraph and CTA button on the left
- **AND** I see an image on the right

#### Scenario: Contact form renders all fields

- **GIVEN** the page loads
- **WHEN** I scroll to the contact form section
- **THEN** I see heading "Write to us"
- **AND** I see input fields: Full Name, Email, Phone Number, Choose a Service
- **AND** I see a textarea for message
- **AND** I see a submit button "Send Message"

#### Scenario: Footer renders with columns

- **GIVEN** the page loads
- **WHEN** I scroll to the footer
- **THEN** I see 3 columns: Contact, Sources, Links
- **AND** I see social media icons (Instagram, Twitter, Facebook, Pinterest, Dribbble)
- **AND** I see a link to https://www.componentdock.com/

#### Scenario: Mobile responsive navbar

- **GIVEN** the viewport is 375px wide
- **WHEN** the page loads
- **THEN** the nav links are hidden
- **AND** a hamburger menu icon is visible
- **WHEN** I tap the hamburger icon
- **THEN** the mobile menu slides in from the right

## Verification checklist

- [ ] Fonts loaded: Playfair Display (headings) + Roboto (body) via Google Fonts
- [ ] Dark background (#1b1c1e) on body
- [ ] Blue accent (#037ef3) on buttons, links, active states
- [ ] Hero: full-screen, background image, dark overlay, two CTAs
- [ ] About Me: two-column with image
- [ ] Our Services: 6 cards in 3×2 grid with icons and hover effect
- [ ] Security Consultants: image + text two-column
- [ ] Tabbed services: 3 tabs switching content
- [ ] Practice Area: 12 numbered cards in 3-column grid with hover
- [ ] Testimonials: author tabs with blockquote content
- [ ] Resources: 4-column link list in box
- [ ] Peace & Order: text + image two-column
- [ ] Contact form: all fields present, styled
- [ ] Footer: 3 columns, social icons, Component Dock link
- [ ] Mobile: hamburger menu, responsive layout
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] public/CNAME contains edict.free.componentdock.com
- [ ] homepage in package.json matches deploy URL
- [ ] Footer links to https://www.componentdock.com/
