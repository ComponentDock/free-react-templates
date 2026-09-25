# Template: BoxPulse (Creative Digital Agency — One Page)

## Purpose

Recreation of ColorLib **Boxus** as a React 19 + Vite + Tailwind CSS 4 + TypeScript
single-page application. Original preview:
https://preview.colorlib.com/theme/boxus/
Source: https://colorlib.com/wp/template/boxus/

## Design tokens

| Token               | Value                                          | Notes                                                                                                         |
| ------------------- | ---------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| Brand dark          | `#221C5A`                                      | Deep navy-purple, hero + section backgrounds                                                                  |
| Accent pink         | `#E74C78`                                      | Primary CTA, hover states, borders                                                                            |
| Accent green        | `#32DB8A`                                      | Highlight accent on hero span                                                                                 |
| Yellow              | `#FFBA42` (rgb 255,186,66)                     | Skill bar fills, accent                                                                                       |
| Text primary        | `#191919`                                      | Headings, body text                                                                                           |
| Text muted          | `#5B5881`, `#8E8DA9`, `#9A9A9A`                | Secondary text, captions                                                                                      |
| White               | `#FFFFFF`                                      | Section backgrounds, light cards                                                                              |
| Font heading        | `Montserrat`, sans-serif                       | Navigation, headings, buttons                                                                                 |
| Font body           | `Roboto`, sans-serif                           | Paragraph text, descriptions                                                                                  |
| Font accent         | `PT Serif`, serif                              | Quotes, testimonials                                                                                          |
| Button radius       | 0 (sharp/square)                               | No border-radius on buttons/CTAs                                                                              |
| Button border       | 2px solid `#E74C76`                            | Outlined CTA buttons                                                                                          |
| Section backgrounds | Alternating `#221C5A` dark and `#FFFFFF` white | Hero dark, services white, portfolio dark, about white, stories dark, video white, skills dark, contact white |

## Section structure (in order)

1. **Navbar** — Fixed top nav with logo, 8 links: Home, Services, Portfolio, About, News, Video, Skills, Contact. Mobile hamburger menu.
2. **Hero** — Full-width dark `#221C5A` background. Centered logo image, large headline "We Craft Awesome Web And Graphic Design Solutions" (span accent green), subtitle.
3. **Services (01)** — White background. Left: section number "01" + title "Services". Right: 8 services in grid (Branding, Mobile Apps, Web, Graphic, Consulting, PSD, HTML, PHP), each with icon + title + description.
4. **Portfolio (02)** — Dark `#221C5A` background. Left: section number "02" + title "Portfolio". Right: grid of 4 project cards, each with category label, title, and image. "LOAD MORE" button.
5. **About / Crafters (03)** — White background. Left: section number "03" + title "CRAFTERS". Right: About text + timeline (5 entries). Below: 3 team member cards.
6. **News / Stories (04)** — Dark `#221C5A` background. Left: section number "04" + title "STORIES". Right: 4 blog post cards + "GO TO BLOG" button. Below: 3 testimonial quotes.
7. **Video / Offer (05)** — White background. Left: section number "05" + title "OFFER". Right: Video placeholder. Below: 6 feature items.
8. **Skills / Expertise (06)** — Dark `#221C5A` background. Left: section number "06" + title "EXPERTISE". Right: Description text + 4 horizontal progress bars (HTML 81%, CSS 93%, PSD 72%, Design 99%).
9. **Contact (07)** — White background. Left: section number "07" + title "Contact". Right: Description text + 2 contact info items + Contact form.
10. **Footer** — Dark `#221C5A` background. Copyright text + "Made with Component Dock" link.

## Requirements

### Requirement: Navbar display navigation links and mobile menu

The section Navbar SHALL display navigation links and mobile menu.

#### Scenario: Navbar displays all 8 navigation links

- **WHEN** the user is on the page
- **THEN** the navbar shows links: Home, Services, Portfolio, About, News, Video, Skills, Contact

#### Scenario: Mobile hamburger menu toggles navigation

- **WHEN** the user taps the hamburger menu on mobile
- **THEN** the nav links are displayed in a mobile overlay

### Requirement: Hero display headline and subtitle

The section Hero SHALL display headline and subtitle.

#### Scenario: Hero displays headline and subtitle

- **WHEN** the hero section is visible
- **THEN** the headline reads "We Craft Awesome Web And Graphic Design Solutions"
- **AND** "Graphic Design" appears in the accent green color

### Requirement: Services display 8 service items

The section Services SHALL display 8 service items.

#### Scenario: Services section shows 8 service items

- **WHEN** the user scrolls to the Services section
- **THEN** section number "01" and title "Services" are displayed
- **AND** 8 service items are visible

### Requirement: Portfolio display project grid

The section Portfolio SHALL display project grid.

#### Scenario: Portfolio section shows project grid

- **WHEN** the user scrolls to the Portfolio section
- **THEN** section number "02" and title "Portfolio" are displayed
- **AND** at least 4 project cards are visible
- **AND** a "LOAD MORE" button is present

### Requirement: About display timeline and team

The section About SHALL display timeline and team.

#### Scenario: About section displays timeline and team

- **WHEN** the user scrolls to the About section
- **THEN** section number "03" and title "CRAFTERS" are displayed
- **AND** a timeline with at least 5 entries is visible
- **AND** 3 team member cards are displayed

### Requirement: News display blog posts and testimonials

The section News SHALL display blog posts and testimonials.

#### Scenario: News section displays blog posts and testimonials

- **WHEN** the user scrolls to the News section
- **THEN** section number "04" and title "STORIES" are displayed
- **AND** 4 blog post cards are visible
- **AND** 3 testimonial quotes are displayed

### Requirement: Video display feature items

The section Video SHALL display feature items.

#### Scenario: Video section shows feature items

- **WHEN** the user scrolls to the Video section
- **THEN** section number "05" and title "OFFER" are displayed
- **AND** a video placeholder is visible
- **AND** 6 feature items are displayed

### Requirement: Skills display progress bars

The section Skills SHALL display progress bars.

#### Scenario: Skills section shows progress bars

- **WHEN** the user scrolls to the Skills section
- **THEN** section number "06" and title "EXPERTISE" are displayed
- **AND** 4 progress bars are visible (HTML 81%, CSS 93%, PSD 72%, Design 99%)

### Requirement: Contact have a working form

The section Contact SHALL have a working form.

#### Scenario: Contact section has a working form

- **WHEN** the user scrolls to the Contact section
- **THEN** section number "07" and title "Contact" are displayed
- **AND** a form with Name, Email, Subject, and Message fields is visible
- **AND** a submit button is present

### Requirement: Footer show copyright and branding

The section Footer SHALL show copyright and branding.

#### Scenario: Footer shows copyright and branding

- **WHEN** the user scrolls to the footer
- **THEN** a copyright notice is displayed
- **AND** a "Made with Component Dock" link to componentdock.com is present
