# Template: Advisium (Business Consulting)
<!-- prep-status: shipped-as=advisory -->
> **SHIPPED-UNDER** — the ColorLib `consulto` design this prep describes already
> ships as `apps/advisory` (<https://advisory.free.componentdock.com>).
> Do not scaffold `apps/advisium`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-advisory/spec.md`.

## Purpose

Recreation of ColorLib **Consulto** template.

- Source: https://colorlib.com/wp/template/consulto/
- Preview (analyzed): https://preview.colorlib.com/theme/consulto/
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript
- Design category: Business consulting / corporate services

## Design tokens

| Token                  | Value                                      | Source                                              |
| ---------------------- | ------------------------------------------ | --------------------------------------------------- |
| Brand accent           | `#FD8F5F` (coral/orange)                   | `.btn` gradient, `.primary-btn`, back-to-top button |
| Brand accent alt       | `#FF9F67` (lighter coral)                  | `.btn` gradient, hover states                       |
| Heading color          | `#010A44` (dark navy)                      | `h1-h6`, `.section-tittle h2`                       |
| Section heading        | `#072366` (deep blue)                      | `h2` default                                        |
| Primary button bg      | `#140C40` (very dark navy)                 | `.genric-btn.primary`                               |
| Body text              | `#646D77` / `#777`                         | Body, paragraphs                                    |
| Light bg               | `#f7f7f7` / `#fbf9ff` (off-white/lavender) | Section backgrounds                                 |
| Footer bg              | `#1D2547` (dark navy)                      | `.footer-area`                                      |
| Font family (headings) | `"Raleway", sans-serif`                    | `h1-h6`, `.section-tittle`                          |
| Font family (body)     | `"Muli", sans-serif`                       | Body default                                        |
| Button border-radius   | `30px`                                     | `.btn`                                              |
| Circle button radius   | `20px`                                     | `.genric-btn.circle`                                |
| Button hover           | gradient slide (`#FF9F67` → `#ec8b53`)     | `.btn:hover`                                        |
| Section padding        | 120px top/bottom                           | `.section-padding`                                  |
| Icon color             | `#FD8F5F`                                  | Service card icons, team titles                     |
| Team title             | `#2c234d` (purple-navy)                    | `.team-caption h3 a`                                |

## Visual design (from preview + CSS)

Professional business consulting template with a dark navy and coral accent palette. The hero is a full-width slider with a background image, dark overlay, and text "Business Consulting" with a CTA button. Below: a services section with icon cards on a white background, a split about section (image left, text right) with a quote, a process/steps section with numbered cards, a counter/stats area, a testimonial slider on a dark background, a team grid, an office environment photo section (dark overlay background), a "need consulting" CTA band, a case studies/blog grid, and a multi-column footer with newsletter. The overall aesthetic is clean, corporate, and modern with generous white space and a two-tone dark navy + coral color scheme.

## Requirements

### 1. Navbar

#### Scenario: Sticky navigation bar renders with logo and links

- **GIVEN** the user is on the Advisium homepage
- **WHEN** the page loads
- **THEN** a sticky navbar is visible at the top
- **AND** it contains the logo text "Advisium"
- **AND** navigation links include: Home, About, Services, Pages, Blog, Contact
- **AND** the navbar is transparent over the hero and becomes solid on scroll

### 2. Hero / Slider

#### Scenario: Hero slider section displays with heading and CTA

- **GIVEN** the user is on the Advisium homepage
- **WHEN** the hero section is visible
- **THEN** a full-width background image is displayed
- **AND** a heading reads "Business Consulting"
- **AND** a subheading reads "We bring ideas to life by combining years of experiences"
- **AND** a primary CTA button reads "Explore Services"
- **AND** the slider has a coral gradient button with rounded corners

### 3. Services

#### Scenario: Services section displays service cards

- **GIVEN** the user scrolls to the services section
- **WHEN** the services section is visible
- **THEN** a section heading reads "Our Service"
- **AND** a subtitle reads "We bring ideas to life by combining years of experiences of our very talented team"
- **AND** there are 4 service cards in a row
- **AND** each card has an icon, title (Business Consulting, Media Planning, Professional HR, Media Planning), description, and "Make Appointment" link
- **AND** the cards are on a white background

### 4. About / Philosophy

#### Scenario: About section displays with image and text

- **GIVEN** the user scrolls to the about section
- **WHEN** the about section is visible
- **THEN** a split layout shows an image on one side and text on the other
- **AND** the heading reads "Our Philosophy"
- **AND** body text is present with a description
- **AND** a quote attribution reads "Capcilena Hanry, CEO, Consulto"
- **AND** the section uses flexbox alignment

### 5. Process / Solutions

#### Scenario: Process steps section displays numbered cards

- **GIVEN** the user scrolls to the process section
- **WHEN** the process section is visible
- **THEN** a heading reads "Creative solutions from experts"
- **AND** there are 4 numbered process step cards
- **AND** each card has a title (Starts the automated process, The automated process starts, etc.) and description
- **AND** a counter shows "900+" completed projects

### 6. Testimonials

#### Scenario: Testimonial slider displays on dark background

- **GIVEN** the user scrolls to the testimonials section
- **WHEN** the testimonials section is visible
- **THEN** a dark background image is displayed
- **AND** testimonial quotes are displayed with author name and role
- **AND** at least 2 testimonial entries are present (Robart Brown, Creative designer)
- **AND** navigation dots or arrows allow cycling through testimonials

### 7. Team

#### Scenario: Team section displays team member cards

- **GIVEN** the user scrolls to the team section
- **WHEN** the team section is visible
- **THEN** a heading reads "Our Consultants"
- **AND** 4 team member cards are displayed in a row
- **AND** each card shows a photo, name, and role (Senior business consultant)
- **AND** members include Jacika Chouhan, Dirluba Jahan, Michel Frade, Kalisha Milano

### 8. Office Environment

#### Scenario: Office photo section with dark overlay

- **GIVEN** the user scrolls to the office section
- **WHEN** the office section is visible
- **THEN** a full-width background photo is shown with a dark overlay
- **AND** the heading reads "Office Environment"
- **AND** descriptive text is present

### 9. CTA / Contact Band

#### Scenario: Call-to-action band displays with contact info

- **GIVEN** the user scrolls to the CTA section
- **WHEN** the CTA section is visible
- **THEN** a dark background image is shown
- **AND** a heading reads "Need a consulting services?"
- **AND** a "Make an Appointment" button is present
- **AND** a phone number is displayed: "(89) 673 378-309"

### 10. Blog / Case Studies

#### Scenario: Blog section displays case study cards

- **GIVEN** the user scrolls to the blog section
- **WHEN** the blog section is visible
- **THEN** a heading reads "Some great stuffs we have done"
- **AND** 4 blog/case study cards are displayed in a row
- **AND** each card has an image, title, excerpt, and category tag ("Urban")
- **AND** the section has a light background

### 11. Footer

#### Scenario: Footer displays with columns and newsletter

- **GIVEN** the user scrolls to the footer
- **WHEN** the footer is visible
- **THEN** a dark navy background is displayed
- **AND** it contains 4 columns: description, Our Solutions (with links), Company (with links), Contact Us
- **AND** a newsletter signup section is present
- **AND** the footer links to https://www.componentdock.com/ as "Component Dock"
- **AND** a copyright line is present at the bottom

## Verification checklist

- [ ] All sections render correctly in order
- [ ] Navbar becomes sticky on scroll with solid background
- [ ] Hero slider background and text are visible
- [ ] Service cards show icons, titles, descriptions, and CTA links
- [ ] About section uses split layout with image and text
- [ ] Process section shows numbered cards
- [ ] Testimonial slider cycles through entries
- [ ] Team cards display photos, names, and roles
- [ ] CTA section has background image, heading, button, and phone
- [ ] Blog cards display image, title, excerpt, category
- [ ] Footer has 4 columns, newsletter, and Component Dock link
- [ ] All colors match design tokens (coral #FD8F5F accent, dark navy #010A44 headings)
- [ ] Fonts match (Raleway for headings, Muli/body for paragraphs)
- [ ] Button styles: rounded (30px), coral gradient, hover slide effect
- [ ] Responsive layout works on mobile/tablet/desktop
- [ ] 100% test coverage
