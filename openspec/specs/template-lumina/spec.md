# Template: Lumina (Creative)

Recreation of ColorLib "Ilene Berg" (https://colorlib.com/wp/template/ilene-berg/).
Preview: https://preview.colorlib.com/theme/ilene-berg/

## Purpose

Lumina is a professional agency landing page template with a fullscreen hero, tabbed about/history section, services grid, experience gallery, projects showcase, contact form, newsletter signup, and a branded footer.

## Design tokens

<!-- brand-claim:2026-10-23 -->
| Token | Value | Evidence in the reference |
| --- | --- | --- |
| Brand (stated in this prep) | `#8460f6` | live sheet paints it ×12 — `background-color` on `::selection`; main.css (35,006 B, sha256 abc8482990e2) · <https://preview.colorlib.com/theme/ilene-berg/> |
| Surface (measured) | `#8560f6` | paints it ×19 — `background` on `.genric-btn.primary`; main.css (35,006 B, sha256 abc8482990e2) · <https://preview.colorlib.com/theme/ilene-berg/> |

Recorded so the palette is machine-readable: the prep already states this colour in its design notes, and this row carries the same value with the live-sheet evidence.

## Requirements

### Requirement: Navbar with mobile toggle

Users SHALL see a fixed navbar with the "Lumina" logo and navigation links (Home, About, Services, Contact). On mobile, a hamburger button toggles the nav menu open/closed.

#### Scenario: Desktop navbar renders

- **WHEN** the page loads on desktop
- **THEN** I see the Lumina logo and all four navigation links

#### Scenario: Mobile hamburger toggles menu

- **WHEN** I click the hamburger button on mobile
- **THEN** the mobile nav links appear and the button changes to a close icon

#### Scenario: Mobile menu closes on link click

- **WHEN** I click any mobile nav link
- **THEN** the mobile menu closes

### Requirement: Fullscreen hero with CTA

Users SHALL see a fullscreen hero section with a background image, purple overlay, heading, subtitle, and a "Get Started" call-to-action button.

#### Scenario: Hero renders with content

- **WHEN** the page loads
- **THEN** I see the hero heading "No Need to Find, This Is the Place on Web", a subtitle, and a "Get Started" button

### Requirement: Tabbed history section

Users SHALL see a "Glorious History" section with three tabs (History, Mission, Vision) that switch content panels.

#### Scenario: Default tab is History

- **WHEN** the page loads
- **THEN** the History tab is active and its content is visible

#### Scenario: Clicking a tab switches content

- **WHEN** I click the "Mission" tab
- **THEN** the Mission content panel becomes visible

### Requirement: Services grid

Users SHALL see a 4-column services grid showing Software, WordPress, Front End, and UX Design with icons and descriptions.

#### Scenario: All services render

- **WHEN** the page loads
- **THEN** I see all four service cards with their titles and descriptions

### Requirement: Experience gallery

Users SHALL see a "Beautiful Experiences" section with image thumbnails, descriptive content, and a "View Details" CTA.

#### Scenario: Experience section renders

- **WHEN** the page loads
- **THEN** I see the section title, images, content heading, and "View Details" button

### Requirement: Projects showcase

Users SHALL see a "Some Projects" section on a purple background with project cards containing images and descriptions.

#### Scenario: Projects render

- **WHEN** the page loads
- **THEN** I see all three project cards with images and titles

### Requirement: Contact form

Users SHALL see a "Keep in Touch" section with a contact form (name, email, message fields) and a "Send Message" button.

#### Scenario: Form renders with required fields

- **WHEN** the page loads
- **THEN** I see name, email, and message inputs, all required, plus a submit button

#### Scenario: Form submission is handled

- **WHEN** I fill in the form and click "Send Message"
- **THEN** the form submission is handled without page navigation

### Requirement: Newsletter signup

Users SHALL see a yellow newsletter section with an email input and "Get Started" button.

#### Scenario: Newsletter renders

- **WHEN** the page loads
- **THEN** I see the yellow section with email input and "Get Started" button

### Requirement: Footer with Component Dock link

Users SHALL see a dark footer with four columns (About Agency, Navigation Links, Navigation Links, Instafeed), social icons, and a "Component Dock" attribution link.

#### Scenario: Footer renders all columns

- **WHEN** the page loads
- **THEN** I see all footer columns, social icons, and a link to componentdock.com

### Requirement: Design tokens match source

The template SHALL use Poppins font, purple (#8460f6) brand color, pink (#f3487f) service icons, yellow (#f9c400) newsletter background, and dark blue-gray (#4e5375) footer background.

#### Scenario: Brand colors are applied

- **WHEN** I inspect the styles
- **THEN** the hero overlay, buttons, and accents use purple, the newsletter uses yellow, and the footer uses dark blue-gray

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/lumina/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/lumina/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Navbar with mobile toggle — I see the Lumina logo and all four navigation links
- [ ] Fullscreen hero with CTA — I see the hero heading "No Need to Find, This Is the Place on Web", a subtitle, and a "Get Started" button
- [ ] Tabbed history section — the History tab is active and its content is visible
- [ ] Services grid — I see all four service cards with their titles and descriptions
- [x] Experience gallery — I see the section title, images, content heading, and "View Details" button
- [ ] Projects showcase — I see all three project cards with images and titles
- [ ] Contact form — I see name, email, and message inputs, all required, plus a submit button
- [x] Newsletter signup — I see the yellow section with email input and "Get Started" button
- [ ] Design tokens match source — the hero overlay, buttons, and accents use purple, the newsletter uses yellow, and the footer uses dark blue-gray
