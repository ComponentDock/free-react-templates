# Template: BizPlanner (Business / Corporate)

## Purpose

A Business / Corporate template with hero banner, about, services, parallax banner, team and skills sections. Recreation of ColorLib **BizPro** template as a business and corporate landing page.

- **Source slug:** `bizpro`
- **Preview URL:** https://preview.colorlib.com/theme/bizpro/
- **ColorLib page:** https://colorlib.com/wp/template/bizpro/
- **New name:** `bizplanner` (apps/bizplanner, @free-react-templates/bizplanner)

## Design tokens

<!-- design-tokens-backfill:2026-10-23 -->
Measured from the live reference, not sampled off the screenshot:
https://preview.colorlib.com/theme/bizpro/ (HTTP 200, 52,191 B, sha256 `d1f190f64752…`, fetched 2026-10-23) and its design stylesheet(s) `style.css`. CSS values are canonical over any screenshot sample.

| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Accent (most-used chromatic) | `#007ab9` | 6 declarations — `#team-section .team-member-wrapper .single-team-member .member-name ul li:nth-child(4) a, `, `#team-section .team-member-wrapper .single-team-member .member-name ul li:nth-child(4) a:h` |
| Other chromatic values | `#70c2e9` (6), `#d8545d` (6), `#677fb5` (6) | secondary hues in the same sheet |
| Surface | `#ffffff` | 36 declarations — `.scroll-top`, `.theme-main-menu .navbar-nav>li>a` |
| Ink / dark surface | `#000000` | 1 declarations — `.rev_slider_wrapper` |
| Typeface | `Raleway` (1 rule — `body`) | `font-family` declarations in the design sheet |
| Radii | `50%`, `5px`, `15px` | `50%` (`#blog-section .single-news-item .img a`); `5px` (`.sidebar-tags ul li a`); `15px` (`.blog-details-post-wrapper .post-comment form button`) |
| Gradients | 2 declarations | `.scroll-top:after` |

Palette in order of use: `#ffffff` ×36, `#292929` ×12, `#677fb5` ×6, `#70c2e9` ×6, `#d8545d` ×6, `#007ab9` ×6, `#6f6f6f` ×4, `#d73e4d` ×3.

- Put the accent, surface and ink in `@theme` (`--color-brand`, `--color-surface`, `--color-ink`) and use them through utilities / `cn()`.
- Do not invent shades: the census above is the sheet's own vocabulary; hovers reuse the listed values.
- Reuse the exact radii above for buttons, cards and dots — no unspecified rounding.

## Requirements

### Requirement: Navbar renders and scrolls to sections

The page navbar SHALL display a logo on the left and 10 navigation links (HOME, ABOUT, SERVICES, PORTFOLIO, TEAM, SKILLS, CLIENTS, PRICING, BLOG, CONTACT) on the right, with smooth scroll to the corresponding section.

#### Scenario: Desktop navbar renders all links

- **WHEN** the page is loaded
- **THEN** I see a logo on the left
- **AND** I see navigation links for HOME, ABOUT, SERVICES, PORTFOLIO, TEAM, SKILLS, CLIENTS, PRICING, BLOG, CONTACT

#### Scenario: Mobile hamburger menu

- **WHEN** the page is loaded on a mobile viewport
- **THEN** I see a hamburger menu toggle
- **AND** clicking it reveals the navigation links

### Requirement: Hero banner displays headline and CTA

The hero section SHALL display a full-width banner with a background image, dark overlay, headline text, subtitle, and a CTA button.

#### Scenario: Hero displays content

- **WHEN** I view the hero banner
- **THEN** I see a headline "Hello We're BizPlanner"
- **AND** I see a subtitle "Sub Head, Motto or Mission subtitle"
- **AND** I see a CTA button labeled "See Our Projects"
- **AND** the banner has a background image with dark overlay

### Requirement: About section shows 4 feature cards

The About section SHALL display a centered title, intro text, and 4 feature cards with icons, titles, descriptions, and "More Details" links.

#### Scenario: About section content

- **WHEN** I scroll to the About section
- **THEN** I see a centered section title
- **AND** I see 4 feature cards
- **AND** each card has an icon, title, description, and "More Details" link

### Requirement: Services section shows 6 service items

The Services section SHALL display a centered title and 6 service items in a 3x2 grid.

#### Scenario: Services grid

- **WHEN** I scroll to the Services section
- **THEN** I see 6 service items in a 3x2 grid
- **AND** each item has an icon, heading, and description paragraph

### Requirement: Projects gallery filters by category

The Projects section SHALL display filter tabs and a grid of project images with hover overlays.

#### Scenario: Filter tabs work

- **WHEN** I click a filter tab
- **THEN** the gallery shows only matching items

### Requirement: Parallax banner shows CTA

The parallax banner SHALL display a full-width image with dark overlay, heading, and CTA button.

#### Scenario: Parallax banner content

- **WHEN** I scroll to the parallax banner
- **THEN** I see a heading and CTA button

### Requirement: Team section shows members

The Team section SHALL display 4 team member cards with photos, names, roles, and social links.

#### Scenario: Team members

- **WHEN** I scroll to the Team section
- **THEN** I see 4 team member cards
- **AND** each card shows a photo, name, role, and social links

### Requirement: Skills section shows progress bars

The Skills section SHALL display a split layout with an image on the left and 5 skill progress bars on the right.

#### Scenario: Skill bars

- **WHEN** I scroll to the Skills section
- **THEN** I see 5 skill bars with correct labels and percentages

### Requirement: Clients section shows testimonials

The Clients section SHALL display a carousel of testimonial items with navigation controls.

#### Scenario: Testimonial navigation

- **WHEN** I click the next/previous buttons
- **THEN** the testimonial changes
- **AND** clicking a dot navigates to a specific testimonial

### Requirement: Pricing section shows 3 plans

The Pricing section SHALL display 3 pricing cards with plan names, prices, feature lists, and CTA buttons.

#### Scenario: Pricing cards

- **WHEN** I scroll to the Pricing section
- **THEN** I see 3 pricing cards with plan names, prices, and features

### Requirement: Blog section shows posts

The Blog section SHALL display 3 blog post cards with images, titles, authors, dates, excerpts, and "Read More" links.

#### Scenario: Blog cards

- **WHEN** I scroll to the Blog section
- **THEN** I see 3 blog cards with images, titles, and excerpts

### Requirement: Partners section shows logos

The Partners section SHALL display a row of partner logo images.

#### Scenario: Partner logos

- **WHEN** I scroll to the Partners section
- **THEN** I see partner logo images

### Requirement: Contact section has form and info

The Contact section SHALL display contact information with icons, a map placeholder, and a contact form with fields and submit button.

#### Scenario: Contact form

- **WHEN** I fill out the contact form and submit
- **THEN** I see a confirmation message

### Requirement: Footer links to Component Dock

The footer SHALL display the logo, social media icons, copyright text, and a link to Component Dock.

#### Scenario: Footer content

- **WHEN** I view the footer
- **THEN** I see the logo
- **AND** I see social media icon links
- **AND** I see a copyright line
- **AND** the footer links to Component Dock

### Requirement: Brand color applied consistently

The template SHALL use the brand color #d73e4d for accents, buttons, and highlights throughout.

#### Scenario: Brand color usage

- **WHEN** I view any section
- **THEN** the brand color is applied for CTAs, icons, and accents

### Requirement: Component Dock attribution

The system SHALL credit Component Dock — the marketplace that publishes this
template — with a visible link to `https://www.componentdock.com/` in the site
footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT
change the footer's own layout or copy beyond the credit line.

#### Scenario: Footer attribution

- **GIVEN** any page of the template is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL contain an anchor whose `href` is
  `https://www.componentdock.com/`
- **AND** the anchor's text SHALL name Component Dock

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/bizplanner/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/bizplanner/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] Footer credits Component Dock with a link to https://www.componentdock.com/
- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar renders and scrolls to sections — I see a logo on the left
- [ ] Hero banner displays headline and CTA — I see a headline "Hello We're BizPlanner"
- [ ] About section shows 4 feature cards — I see a centered section title
- [ ] Services section shows 6 service items — I see 6 service items in a 3x2 grid
- [ ] Projects gallery filters by category — the gallery shows only matching items
- [ ] Parallax banner shows CTA — I see a heading and CTA button
- [ ] Team section shows members — I see 4 team member cards
- [ ] Skills section shows progress bars — I see 5 skill bars with correct labels and percentages
- [ ] Clients section shows testimonials — the testimonial changes
- [ ] Pricing section shows 3 plans — I see 3 pricing cards with plan names, prices, and features
- [ ] Blog section shows posts — I see 3 blog cards with images, titles, and excerpts
- [ ] Partners section shows logos — I see partner logo images
- [ ] Contact section has form and info — I see a confirmation message
- [ ] Brand color applied consistently — the brand color is applied for CTAs, icons, and accents
