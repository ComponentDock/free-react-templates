# Template: Calypso (OpenSpec)

Recreation of ColorLib "Calvin" (https://colorlib.com/wp/template/calvin/).

Personal portfolio / resume template recreating ColorLib Calvin.

## Purpose

Provide a free, open-source React portfolio/resume template with a modern design featuring a hero section, services grid, portfolio gallery, skill bars, testimonials, blog, and a branded footer.

## Design reference (replication findings)

- **Source:** ColorLib "Calvin" — https://colorlib.com/wp/template/calvin/
- **Source slug:** `calvin`
- **Preview URL analyzed:** https://preview.colorlib.com/theme/calvin/ — **HTTP 200**, 30,844 B, fetched 2026-10-23 (page `<title>`: "Personal | Template"). The slug-only path is the demo itself — no alias was needed.
- **Design tokens read from the live stylesheet** (`https://preview.colorlib.com/theme/calvin/assets/css/style.css`, fetched 2026-10-23): brand `#ff8553`, `#1f2b7b`, `#415094`, `#4cd3e3`; dominant neutrals `#f9f9ff`, `#999999`, `#888888`; type Roboto Condensed, DM Sans. Frequencies are the sheet's own literals, not a design guess.
- **Screenshot (visual reference):** https://colorlib.com/wp/wp-content/uploads/sites/2/calvin-free-template.jpg
- **Provenance:** re-recorded 2026-10-23 by the SPEC-REFERENCE audit — this spec carried no ColorLib source URL before, so the shipped recreation in `apps/calypso` had no recorded reference (docs/replication.md requires one).

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#ff8553` | live sheet paints it ×51 — `background` on `.boxed-btn:hover`; style.css (91,814 B, sha256 4ba2afe8e1d1) · <https://preview.colorlib.com/theme/calvin/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

## Requirements

### Requirement: Navbar — Logo, Navigation, and CTA

The Navbar SHALL display a logo on the left, navigation links (Home, Work, Service, Blog, Contact) in the center, and a "Let's Talk" CTA button on the right.

#### Scenario: Desktop navbar renders all elements

- **GIVEN** the viewport width is ≥ 768 px
- **WHEN** the page loads
- **THEN** the Navbar displays the "Calypso" logo text
- **AND** the Navbar displays navigation links: Home, Work, Service, Blog, Contact
- **AND** the Navbar displays a "Let's Talk" button with brand color background

#### Scenario: Mobile hamburger toggle

- **GIVEN** the viewport width is < 768 px
- **WHEN** the user clicks the hamburger button
- **THEN** the mobile navigation menu expands
- **AND** the user can see all navigation links and the CTA button

#### Scenario: Mobile menu closes on link click

- **GIVEN** the mobile menu is open
- **WHEN** the user clicks a navigation link
- **THEN** the mobile menu closes

---

### Requirement: Hero — Person Image, Name, and Title

The Hero section SHALL display a person image alongside a heading with name and title.

#### Scenario: Hero renders heading and image

- **GIVEN** the page loads
- **WHEN** the Hero section is visible
- **THEN** the heading reads "My name is Alex. Digital Product Designer"
- **AND** a profile image is displayed from picsum.photos
- **AND** two CTA buttons are shown: "View My Work" and "Get In Touch"

---

### Requirement: About Info Bar — Contact Details

The About Info Bar SHALL display three contact items: Design For, Phone, and Email.

#### Scenario: Info bar renders all three items

- **GIVEN** the page loads
- **WHEN** the About Info Bar section is visible
- **THEN** it displays "Design For" with value "Web & Mobile"
- **AND** it displays "Phone" with value "+1 (555) 234-5678"
- **AND** it displays "Email" with value "alex@calypso.design"

---

### Requirement: Services — 4 Cards in 2×2 Grid

The Services section SHALL display 4 service cards in a 2-column grid with icons, titles, and descriptions.

#### Scenario: All four services render

- **GIVEN** the page loads
- **WHEN** the Services section is visible
- **THEN** it displays cards for Strategy, UX Design, Development, and Marketing
- **AND** each card has an icon, title, and description paragraph

---

### Requirement: Gallery — 4 Images with Hover Overlay

The Gallery section SHALL display 4 portfolio images in a 2-column grid with hover overlays.

#### Scenario: Gallery renders all items

- **GIVEN** the page loads
- **WHEN** the Gallery section is visible
- **THEN** it displays 4 images with alt text: Project Alpha, Project Beta, Project Gamma, Project Delta
- **AND** each image is loaded from picsum.photos

---

### Requirement: About Me — Text and Skill Bars

The About Me section SHALL display biographical text alongside 3 skill progress bars.

#### Scenario: About Me renders skills with percentages

- **GIVEN** the page loads
- **WHEN** the About Me section is visible
- **THEN** it displays skill bars for UI Design (60%), UX Research (89%), and Illustration (95%)
- **AND** each skill bar has a label, percentage, and visual progress indicator

---

### Requirement: Brand Carousel

The Brand Carousel section SHALL display a row of 6 brand placeholders.

#### Scenario: All brands render

- **GIVEN** the page loads
- **WHEN** the Brand Carousel section is visible
- **THEN** it displays 6 brand items: Brand Alpha through Brand Zeta

---

### Requirement: Testimonials — Quote and Author

The Testimonials section SHALL display a client quote with author info.

#### Scenario: Testimonial renders correctly

- **GIVEN** the page loads
- **WHEN** the Testimonials section is visible
- **THEN** it displays a quote about Alex's design work
- **AND** it shows the author "Sarah Johnson" with role "VP of Product, TechCorp"
- **AND** it shows the author's avatar image from picsum.photos

---

### Requirement: Blog — 3 Article Cards

The Blog section SHALL display 3 blog post cards with images, categories, dates, and titles.

#### Scenario: All blog posts render

- **GIVEN** the page loads
- **WHEN** the Blog section is visible
- **THEN** it displays 3 articles with titles, categories, and dates
- **AND** each article has a thumbnail image from picsum.photos

---

### Requirement: Footer — CTA, Copyright, and Component Dock Link

The Footer SHALL display a CTA area, social links, and a copyright line linking to Component Dock.

#### Scenario: Footer renders all elements

- **GIVEN** the page loads
- **WHEN** the Footer is visible
- **THEN** it displays a CTA heading "Have a project in mind?"
- **AND** it shows "Let's Talk" and "Download CV" buttons
- **AND** it shows social links for Twitter, GitHub, and LinkedIn
- **AND** it links to https://www.componentdock.com/ with text "Component Dock"

---

### Requirement: Responsive Behavior — Mobile

The template SHALL be fully responsive on mobile viewports (≤ 767 px).

#### Scenario: Mobile layout stacks sections

- **GIVEN** the viewport width is ≤ 767 px
- **WHEN** the page loads
- **THEN** all grid layouts switch to single-column
- **AND** the Navbar collapses to a hamburger menu

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/calypso/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/calypso/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [x] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [x] Navbar — Logo, Navigation, and CTA — the Navbar displays the "Calypso" logo text
- [x] Hero — Person Image, Name, and Title — the heading reads "My name is Alex. Digital Product Designer"
- [x] About Info Bar — Contact Details — it displays "Design For" with value "Web & Mobile"
- [ ] Services — 4 Cards in 2×2 Grid — it displays cards for Strategy, UX Design, Development, and Marketing
- [ ] Gallery — 4 Images with Hover Overlay — it displays 4 images with alt text: Project Alpha, Project Beta, Project Gamma, Project Delta
- [ ] About Me — Text and Skill Bars — it displays skill bars for UI Design (60%), UX Research (89%), and Illustration (95%)
- [ ] Brand Carousel — it displays 6 brand items: Brand Alpha through Brand Zeta
- [ ] Testimonials — Quote and Author — it displays a quote about Alex's design work
- [ ] Blog — 3 Article Cards — it displays 3 articles with titles, categories, and dates
- [ ] Responsive Behavior — Mobile — all grid layouts switch to single-column
