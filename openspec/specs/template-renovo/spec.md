# Template: Renovo (Business)

Recreation of ColorLib **Repair** (https://colorlib.com/wp/template/repair/).

## Purpose

Provide a professional tech repair services landing page with hero, services, about, discount CTA, work process, FAQ, testimonials, blog, and footer sections.

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#988fff` | live sheet paints it ×63 — `background-color` on `::selection`; main.css (51,610 B, sha256 a5e2df7c2ef4) · <https://preview.colorlib.com/theme/repair/> |
| Surface (measured) | `#4cd3e3` | paints it ×7 — `background` on `.genric-btn.success`; main.css (51,610 B, sha256 a5e2df7c2ef4) · <https://preview.colorlib.com/theme/repair/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

## Requirements

### Requirement: TopBar displays contact information

The top bar SHALL display social media icons (Facebook, Twitter, Dribbble, Behance) on the left and phone number plus email on the right.

#### Scenario: Social icons render

- **WHEN** the page loads
- **THEN** the TopBar shows Facebook, Twitter, Dribbble, and Behance icons

#### Scenario: Contact info renders

- **WHEN** the page loads
- **THEN** the TopBar shows phone "+953 012 3654 896" and email "hello@renovo.com"

### Requirement: Navbar provides navigation

The navbar SHALL display the "Renovo" logo and navigation links (Home, About, Services, Process, FAQ, Testimonials, Blog, Contact). On mobile, a hamburger menu toggles open/closed.

#### Scenario: Desktop nav links render

- **WHEN** the page loads on desktop
- **THEN** all 8 navigation links are visible

#### Scenario: Mobile menu toggle

- **WHEN** the hamburger button is clicked
- **THEN** the mobile menu opens and the button label changes to "Close menu"

### Requirement: Hero section showcases the brand

The hero SHALL display a background image with gradient overlay, heading "All things need to repair", subtitle, description, and a "Get Started" CTA button.

#### Scenario: Hero content renders

- **WHEN** the page loads
- **THEN** the heading "All things need to repair" and the CTA button "Get Started" are visible

### Requirement: Services section displays offerings

The services section SHALL display 4 service cards in a grid, each with an image, title, and description.

#### Scenario: All service cards render

- **WHEN** the page loads
- **THEN** 4 service cards are visible: Computer Repair, Mobile Repair, Data Recovery, Network Setup

### Requirement: About section describes capabilities

The about section SHALL display a heading about fixing computers and mobiles, a description, two feature boxes (Expert Services, Great Support), and an image.

#### Scenario: About content renders

- **WHEN** the page loads
- **THEN** the heading and both feature boxes are visible

### Requirement: Discount CTA collects estimates

The discount section SHALL display a promotional heading, description, CTA button, and an estimate form with name, phone, email, message fields and a submit button.

#### Scenario: Form fields render

- **WHEN** the page loads
- **THEN** inputs for name, phone, email, and message are visible along with the "Get Estimate" button

#### Scenario: Form submits

- **WHEN** the user fills all fields and clicks "Get Estimate"
- **THEN** the form submits without error

### Requirement: Work process shows steps

The work process section SHALL display 4 steps with icons: Detect problem, Split solution into parts, Analyzing method, Final result comes out.

#### Scenario: Steps render

- **WHEN** the page loads
- **THEN** all 4 step labels are visible

### Requirement: FAQ section with accordion and skills

The FAQ section SHALL display an accordion with 4 items and skill bars for Hardware Repair, Software Support, Data Recovery, and Network Setup with percentage labels.

#### Scenario: First accordion item open by default

- **WHEN** the page loads
- **THEN** the first FAQ item's content is visible

#### Scenario: Accordion toggle

- **WHEN** a different FAQ heading is clicked
- **THEN** that item's content becomes visible

#### Scenario: Skill bars render

- **WHEN** the page loads
- **THEN** skill percentages 92%, 88%, 78%, 95% are visible

### Requirement: Testimonials showcase client feedback

The testimonials section SHALL display 3 testimonial cards with avatar, quote, name, and role on a gradient background.

#### Scenario: Testimonial cards render

- **WHEN** the page loads
- **THEN** 3 testimonials with names Sarah Mitchell, James Rodriguez, Emily Chen are visible

### Requirement: Blog shows recent posts

The blog section SHALL display 4 blog cards with image, date, title, excerpt, and a details link.

#### Scenario: Blog posts render

- **WHEN** the page loads
- **THEN** 4 blog post titles are visible

### Requirement: Footer with Component Dock link

The footer SHALL display 4 columns (About, Navigation, Newsletter, InstaFeed), a bottom bar with copyright, and a link to https://www.componentdock.com/ branded "Component Dock".

#### Scenario: Component Dock link present

- **WHEN** the page loads
- **THEN** a link with text "Component Dock" pointing to "https://www.componentdock.com/" is in the footer

#### Scenario: Footer columns render

- **WHEN** the page loads
- **THEN** About Renovo, Navigation Links, Newsletter, and InstaFeed sections are visible

### Requirement: Design tokens match source

The template SHALL use Poppins font, primary color #988fff, footer dark #04091e, and gradient overlays matching the ColorLib Repair original.

#### Scenario: Brand color applied

- **WHEN** the page loads
- **THEN** the CSS custom property --color-brand is #988fff

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/renovo/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/renovo/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] TopBar displays contact information — the TopBar shows Facebook, Twitter, Dribbble, and Behance icons
- [ ] Navbar provides navigation — all 8 navigation links are visible
- [x] Hero section showcases the brand — the heading "All things need to repair" and the CTA button "Get Started" are visible
- [ ] Services section displays offerings — 4 service cards are visible: Computer Repair, Mobile Repair, Data Recovery, Network Setup
- [ ] About section describes capabilities — the heading and both feature boxes are visible
- [x] Discount CTA collects estimates — inputs for name, phone, email, and message are visible along with the "Get Estimate" button
- [ ] Work process shows steps — all 4 step labels are visible
- [ ] FAQ section with accordion and skills — the first FAQ item's content is visible
- [ ] Testimonials showcase client feedback — 3 testimonials with names Sarah Mitchell, James Rodriguez, Emily Chen are visible
- [ ] Blog shows recent posts — 4 blog post titles are visible
