# Template: Throne (Portfolio/Agency)

## Purpose

Recreation of the ColorLib "Monarchy" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page portfolio/agency site.

- **Source:** ColorLib "Monarchy" — https://colorlib.com/wp/template/monarchy/
- **Preview:** https://preview.colorlib.com/theme/monarchy/
- **New name:** `throne` (apps/throne, `@free-react-templates/throne`)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/monarchy-free-template.jpg

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Notes |
|---|---|---|
| Font family | `"Jost", sans-serif` | Google Fonts Jost; weights 300 (body), 700/900 (headings) |
| Primary / brand | `#f26200` | Orange — logo, icons, h1, active states, play button |
| Body text | `#757575` | Light gray body copy |
| Headings | `#000` | Pure black headings |
| Cream background | `#f5ecdb` | Hero cover, testimonials, blog section, footer, copyright |
| White background | `#fff` | Body, portfolio section, navbar |
| Button radius | `30px` | Pill-shaped buttons |
| Play button | 70px circle, bg `#f26200`, white icon | Video play CTA in hero |
| Section padding | `2.5em 0` (mobile), `5em 0` (desktop) | `.site-section` |
| Hero h1 | 4rem, weight 900, `#f26200` | `.site-section-cover h1` |
| Testimonial card | bg `#f5ecdb`, 30px padding | `.client` class |
| Blog bg | `#f5ecdb` | `.blog-section` |
| Footer bg | `#f5ecdb`, padding 4em/8em | `.footer` |
| Copyright bg | `#f5ecdb` | `.copyright` |
| Selection | bg `#000`, color `#fff` | `::selection` |

## Design Notes (from screenshot + preview DOM)

- Clean, minimal creative agency / portfolio layout
- Transparent navbar over hero with logo in orange
- Full-viewport cream hero with large centered headline + play button
- 3-column services with large icons
- 3-column portfolio grid (6 items), hover zoom effect
- 4-column testimonials on cream background
- Blog carousel with post cards (image, date, title, author avatar)
- Client logo strip on light background
- 4-column footer on cream with social icons in copyright bar
- Sticky navbar with white background + shadow on scroll

## Requirements

### Feature: Throne — Portfolio/Agency Template

#### Scenario: Navbar renders with logo and navigation links

- **GIVEN** the page loads
- **THEN** a sticky navbar is visible
- **AND** the logo text "Throne" is displayed in brand orange (#f26200)
- **AND** navigation links are present: Home, Portfolio, About, Services, Blog, Contact

#### Scenario: Mobile menu toggle

- **GIVEN** the viewport width is less than 992px
- **WHEN** the hamburger menu icon is clicked
- **THEN** a mobile menu slides in from the right
- **AND** navigation links are displayed vertically

#### Scenario: Hero section displays centered content

- **GIVEN** the hero section is visible
- **THEN** the headline "Do What You Love" is displayed in orange (#f26200)
- **AND** a subtitle paragraph is shown below the headline
- **AND** a circular play button (70px, orange bg) is centered below the subtitle

#### Scenario: Services section shows three service cards

- **GIVEN** the services section is visible
- **THEN** three service cards are displayed in a row
- **AND** each card has an icon, heading, and description paragraph
- **AND** the service headings are "Interface Design", "Product Design", "Quality Results"

#### Scenario: Portfolio section shows image grid

- **GIVEN** the portfolio section is visible
- **THEN** a "Portfolio" heading is displayed
- **AND** 6 portfolio items are rendered in a 3-column grid
- **AND** each item displays an image with hover zoom effect

#### Scenario: Testimonials section shows client cards

- **GIVEN** the testimonials section is visible
- **THEN** a "Testimonials" heading is displayed
- **AND** 4 testimonial cards are shown on a cream (#f5ecdb) background
- **AND** each card has a client name, role ("Customer"), circular photo, and quote text

#### Scenario: Blog section shows post carousel

- **GIVEN** the blog section is visible
- **THEN** a "Blog Updates" heading is displayed
- **AND** a subtitle paragraph is shown below
- **AND** blog post cards are rendered in a horizontal carousel
- **AND** each card has an image, date, title, and author info (avatar + name + role)

#### Scenario: Client logos section

- **GIVEN** the client logos section is visible
- **THEN** 4 client logos are displayed in a row

#### Scenario: Footer renders with columns

- **GIVEN** the footer is visible
- **THEN** the logo "Throne" is displayed in brand orange
- **AND** a description paragraph is shown
- **AND** contact information links are present
- **AND** navigation link columns are present
- **AND** a "Made with Component Dock" link is present in the copyright area

#### Scenario: Copyright bar with social icons

- **GIVEN** the copyright section is visible
- **THEN** social media icon links are displayed (Facebook, Twitter, LinkedIn, Instagram)
- **AND** a copyright notice with current year is shown
- **AND** a "Component Dock" link replaces any external attribution

## Verification Checklist

- [ ] `npm run typecheck` passes for apps/throne
- [ ] `npm run lint` passes for apps/throne
- [ ] `npm run test:coverage` passes at 100% lines/functions/branches/statements
- [ ] `npm run build` produces valid output
- [ ] All sections match the original order: Navbar → Hero → Services → Portfolio → Testimonials → Blog → Clients → Footer → Copyright
- [ ] Brand color #f26200 used consistently (logo, h1, icons, play button, active states)
- [ ] Jost font family loaded via Google Fonts
- [ ] Cream (#f5ecdb) used for hero, testimonials, blog, footer, copyright backgrounds
- [ ] Pill-shaped buttons (border-radius: 30px)
- [ ] Play button is 70px circle with orange background
- [ ] Portfolio hover zoom effect implemented
- [ ] Testimonial cards have circular avatars
- [ ] Blog carousel functionality
- [ ] Sticky navbar with scroll shadow
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] public/CNAME contains `throne.free.componentdock.com`
- [ ] homepage in package.json set to `https://throne.free.componentdock.com`
