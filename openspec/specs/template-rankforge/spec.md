# Template: RankForge (SEO Agency Landing)

## Purpose

A SEO Agency template with hero, what we do, we create steps, generating customers, pricing and portfolio sections. RankForge is a single-page SEO agency landing template — a React recreation of the ColorLib free "Seos" template (preview: https://preview.colorlib.com/theme/seos/ — SEO agency landing), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design tokens (reference re-check, 2026-10-23)

- **Source**: ColorLib **Seos** — https://colorlib.com/wp/template/seos/
- **Preview**: `https://preview.colorlib.com/theme/seos/` — HTTP 200, title
  `SEO HTML-5 Template`.
- **Stylesheets measured**: theme `assets/css/style.css` — **67,171 B**;
  `assets/css/bootstrap.min.css` 30,332 B (vendored separately, not inlined);
  `slicknav.css` 2,506 B; `nice-select.css` 3,881 B; `magnific-popup.css` 4,213 B;
  icon sheets (`flaticon`, `themify-icons`, `fontawesome-all`) paint no colours.
- **Measured how**: hex-literal census per sheet, then the winning rule per
  selector.

### Colors

| Token | Value | Occurrences | Role |
| ----- | ----- | ----------- | ---- |
| Action pink | `#ff5c97` | 29 | `.btn` fill, `.boxed-btn` label + `1px` border (hover flips to a `#ff5c97` fill), `.what-we-do .do-icon`, `#scrollUp`, preloader arc, footer social hover, section-title rules |
| Heading navy | `#2b4b80` | 10 | `h1`–`h6` (weight 500), `.slider-area h1` 65 px / 700, `.section-tittle h2` 50 px / 700, `.we-create-cap h3` |
| Step violet | `#7b40c0` | 15 | `.single-do.active` / `:hover` `.do-btn` label + icon chip, `.btn-ans` label — the **active-step** colour |
| Step hover magenta | `#ec4683` | — | `.btn-ans::before`, `.header-btn::before` |
| Header button | `#4043bc` | 2 | `.header-btn` background (the nav's quote button) and the dropdown's `border-top` |
| Body copy | `#707b8e` | 2 | `p` (Poppins 16 px / 30 px line-height) and testimonial founder text |
| Mist band | `#f9f9ff` | 27 | alternating section band + `.genric-btn.default-border:hover` |
| Lavender band | `#f0e9ff` | 12 | second alternating band |
| Secondary navy | `#415094` | 7 | kit button label / borders |
| Muted | `#999999` | 10 | secondary copy |
| Cyan | `#4cd3e3` | 7 | accent chips/icons |
| Emphasis ink | `#222` | 21 | `b,sup,sub,u,del` and `.genric-btn.primary` fill — **not** a footer |

### Typography

| Element | Family / size | Evidence |
| ------- | ------------- | -------- |
| Everything | `"Poppins", sans-serif` — the sheet `@import`s `fonts.googleapis.com/css?family=Poppins:100i,200,300,300i,400,500,600,700,800,900` | first line of `style.css` |
| Paragraphs | 16 px / 30 px line-height, `#707b8e` | `p` rule |
| Section title | 50 px / weight 700 / `#2b4b80`, with a 45 px navy 2 px rule before the kicker | `.section-tittle h2`, `.section-tittle span::before` |
| Buttons | 14 px, `letter-spacing: 3px`, capitalize | `.boxed-btn` |

### Shapes & rhythm

| Property | Reference value |
| -------- | --------------- |
| Buttons | `.boxed-btn` white fill + `#ff5c97` label + `1px solid #ff5c97` + `padding: 18px 44px`, hover fills pink with a white label; `.btn` pink fill; `.header-btn` `#4043bc` fill, `min-width: 120px` |
| Radius | `50%` ×10 (dots, round buttons), `3px` ×7 on kit controls, `8px` ×6 on cards |
| CTA | `.haveAproject::before` `linear-gradient(0deg, #ff5c98 0%, #7b40c0 100%)` — a gradient, so a hex census scores only its two stops |
| Bands | white hero with photo right → `#f9f9ff` what-we-do → white 3-step create band → `#f0e9ff` customers → white pricing → portfolio → gradient CTA → footer (no theme `background` rule on the footer at all) |

Assets are NOT copied — picsum.photos seeded placeholders + lucide-react icons.

RankForge lives in `apps/rankforge` and uses shared components from `packages/ui`
(ButtonLink, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a transparent navbar with the site name "RankForge",
section links (Home, About Us, Services, Contact, Blog), and a "Contact Us"
CTA button. The navbar becomes sticky on scroll.

#### Scenario: Desktop navigation

- **GIVEN** the page is rendered
- **WHEN** the navbar is displayed
- **THEN** it SHALL show the site name "RankForge" linking to `#home`
- **AND** it SHALL show links to Home, About Us, Services, Contact, and Blog
- **AND** it SHALL show a "Contact Us" button linking to `#contact`

### Requirement: Hero section

The system SHALL render a full-width hero with a left-right two-column layout.
The left column contains an h1 heading "We Collect High Quality Leads", a
description paragraph, and a "Contact Us" button. The right column shows a
decorative illustration image.

#### Scenario: Hero content

- **GIVEN** the hero section is rendered
- **WHEN** the user views the page
- **THEN** it SHALL display the heading "We Collect High Quality Leads"
- **AND** it SHALL display a description paragraph
- **AND** it SHALL display a "Contact Us" link
- **AND** it SHALL display a hero image from picsum.photos

### Requirement: What We Do section

The system SHALL render a "What We Do" section with section title "What We Will
Do For Your Business" and 3 service cards in a row: Link Building, Content
Marketing (active/highlighted), and On Page SEO. Each card has an icon, title,
description, and a "get started" link with arrow.

#### Scenario: Three service cards

- **GIVEN** the What We Do section is rendered
- **WHEN** the user views the page
- **THEN** it SHALL display the heading "What We Will Do For Your Business"
- **AND** it SHALL display three service cards: Link Building, Content Marketing, On Page SEO
- **AND** it SHALL display "get started" links for each card

### Requirement: We Create Steps section

The system SHALL render a two-column layout with an image on the left and a
heading "We Create a Steps to Build a Successful Digital Product", a
description paragraph, and a "Contact Us" button on the right.

#### Scenario: Steps split layout

- **GIVEN** the Steps section is rendered
- **WHEN** the user views the page
- **THEN** it SHALL display the heading about building a successful digital product
- **AND** it SHALL display a description paragraph
- **AND** it SHALL display a "Contact Us" link
- **AND** it SHALL display an image from picsum.photos

### Requirement: Generating Customers section

The system SHALL render a "Generating Customers" section with section title
"Generating New Customers Via Online Mode" and a 2x2 grid of feature items:
All Sizes Business, Awesome Results, Keep you in the Loop, Significant ROI.
Each item has an icon, title, and description in a horizontal layout.

#### Scenario: Four customer features

- **GIVEN** the Generating Customers section is rendered
- **WHEN** the user views the page
- **THEN** it SHALL display the heading "Generating New Customers Via Online Mode"
- **AND** it SHALL display four feature items: All Sizes Business, Awesome Results, Keep you in the Loop, Significant ROI

### Requirement: Pricing section

The system SHALL render a "Pricing" section with section title "Choose Your
Very Best Pricing Plan" and 3 pricing cards: $5/mo, $20/mo (active/highlighted),
and $30/mo. Each card has an icon, price, feature list, and a "Get Started"
button.

#### Scenario: Three pricing tiers

- **GIVEN** the Pricing section is rendered
- **WHEN** the user views the page
- **THEN** it SHALL display the heading "Choose Your Very Best Pricing Plan"
- **AND** it SHALL display three pricing cards with prices $5, $20, and $30
- **AND** each card SHALL list features: Increase traffic 50%, Social Media Marketing, 10 Free Optimization, 24/7 support
- **AND** the $20/mo card SHALL be visually highlighted as the active plan

### Requirement: Portfolio section

The system SHALL render a "Portfolio" section with section title "Visit Some
Of Our Awesome Stuffs" and 4 portfolio images in a row, each with overlay text
showing a domain name and category.

#### Scenario: Four portfolio items

- **GIVEN** the Portfolio section is rendered
- **WHEN** the user views the page
- **THEN** it SHALL display the heading "Visit Some Of Our Awesome Stuffs"
- **AND** it SHALL display 4 portfolio images from picsum.photos

### Requirement: Testimonials section

The system SHALL render a "Testimonials" section with section title "What
Client Say About Us" and a testimonial card with a quote, avatar image,
name "Olivia James", and role "UI/UX Designer".

#### Scenario: Testimonial card

- **GIVEN** the Testimonials section is rendered
- **WHEN** the user views the page
- **THEN** it SHALL display the heading "What Client Say About Us"
- **AND** it SHALL display a quote text
- **AND** it SHALL display the name "Olivia James" and role "UI/UX Designer"
- **AND** it SHALL display an avatar image from picsum.photos

### Requirement: Blog/Tips section

The system SHALL render a "Blog/Tips" section with section title "Tips and
Tricks From Our Experts" and 3 blog cards with an image, title, "Continue
Reading" link, and date.

#### Scenario: Three blog cards

- **GIVEN** the Blog/Tips section is rendered
- **WHEN** the user views the page
- **THEN** it SHALL display the heading "Tips and Tricks From Our Experts"
- **AND** it SHALL display 3 blog cards with titles, images, and "Continue Reading" links
- **AND** it SHALL display dates for each card

### Requirement: CTA Banner

The system SHALL render a CTA banner with a gradient background (pink to purple),
heading "Have project in mind?", description text, and a white "Contact Us" button.

#### Scenario: CTA content

- **GIVEN** the CTA banner is rendered
- **WHEN** the user views the page
- **THEN** it SHALL display the heading "Have project in mind?"
- **AND** it SHALL display a description paragraph
- **AND** it SHALL display a "Contact Us" link

### Requirement: Footer

The system SHALL render a dark footer with logo, address, social icons, three
link columns (Quick Links, Support, Core Features), and a copyright line
linking to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer content

- **GIVEN** the footer is rendered
- **WHEN** the user views the page
- **THEN** it SHALL display the "RankForge" logo text
- **AND** it SHALL display address, phone, and email information
- **AND** it SHALL display Quick Links, Support, and Core Features columns
- **AND** it SHALL display social media icon links
- **AND** it SHALL display a copyright line with a link to componentdock.com branded as "Component Dock"

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/rankforge/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/rankforge/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navigation bar — it SHALL show the site name "RankForge" linking to `#home
- [x] Hero section — it SHALL display the heading "We Collect High Quality Leads"
- [x] What We Do section — it SHALL display the heading "What We Will Do For Your Business"
- [ ] We Create Steps section — it SHALL display the heading about building a successful digital product
- [x] Generating Customers section — it SHALL display the heading "Generating New Customers Via Online Mode"
- [x] Pricing section — it SHALL display the heading "Choose Your Very Best Pricing Plan"
- [x] Portfolio section — it SHALL display the heading "Visit Some Of Our Awesome Stuffs"
- [x] Testimonials section — it SHALL display the heading "What Client Say About Us"
- [x] Blog/Tips section — it SHALL display the heading "Tips and Tricks From Our Experts"
- [x] CTA Banner — it SHALL display the heading "Have project in mind?"
