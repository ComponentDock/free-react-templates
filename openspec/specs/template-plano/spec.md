# Spec: Plano (recreation of ColorLib Interior 2)

## Purpose

Plano is a single-page interior design landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Interior 2" design (source: https://preview.colorlib.com/theme/interior2/),
built under a DIFFERENT name (Plano — interior design / layout concept; single
lowercase word, no collision with apps/ or existing specs) per the monorepo
naming mandate.

Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Design tokens

- Font: Poppins (Google Fonts, weights 300/400/500/600/700)
- Primary color: #001D38 (dark navy — header, footer, overlay, text)
- Accent / cream: #FFE8C3 (button bg, hover states)
- Skills section bg: #F5FBFF (very light blue-gray)
- Footer border: #334A60 (subtle divider)
- Text secondary: #999999 (gray descriptions)
- Button radius: 0px (sharp corners, no rounding)
- Section padding: ~80-100px top/bottom

## Requirements

### Requirement: Navbar renders navigation and dropdown menus

The template SHALL display a sticky header with logo ("Plano."), navigation
links (Home, Projects, Pages dropdown, Blog dropdown, Contact), and a
"Say Hello" text link on the right. Mobile viewport shows a hamburger toggle.

#### Scenario: Desktop nav shows all links

- **WHEN** the page loads on desktop
- **THEN** the navbar shows Home, Projects, Pages, Blog, and Contact links
- **AND** a "Say Hello" link is visible on the right

#### Scenario: Pages dropdown toggles

- **WHEN** the user clicks the Pages button
- **THEN** a dropdown shows About, Project Details, and Elements links

#### Scenario: Blog dropdown toggles

- **WHEN** the user clicks the Blog button
- **THEN** a dropdown shows Blog and Single Blog links

#### Scenario: Mobile menu toggles

- **WHEN** the user clicks the hamburger button on mobile
- **THEN** the mobile navigation menu opens
- **AND** clicking a link closes the menu

### Requirement: Hero slider displays with overlay and CTA

The template SHALL display a full-width hero slider with two slides,
each with a background image, dark navy overlay (60% opacity), heading
text, and a cream "View Works" button.

#### Scenario: Hero heading and CTA render

- **WHEN** the page loads
- **THEN** the hero section shows "Interior Design Solution For Your Business"
- **AND** a "View Works" button with cream background is visible

#### Scenario: Slides auto-advance

- **WHEN** 5 seconds pass
- **THEN** the hero transitions to the next slide

#### Scenario: Manual slide navigation

- **WHEN** the user clicks a slide indicator dot
- **THEN** the slider navigates to that slide

### Requirement: Services strip shows three service columns

The template SHALL display three equal-width columns (Planing, Architecture,
3D Design) each with a title, description, and large decorative number
(01, 02, 03).

#### Scenario: Three services render

- **WHEN** the page loads
- **THEN** Planing, Architecture, and 3D Design columns are visible
- **AND** each column shows its large decorative number

### Requirement: Portfolio gallery shows alternating image-text rows

The template SHALL display "Our Works" heading and four project rows in
alternating layout (image-left/text-right, then text-left/image-right),
each with a title, description, and "Details" outline button.

#### Scenario: Four projects render

- **WHEN** the page loads
- **THEN** "Our Works" heading is displayed
- **AND** White Blocks House, Art Gallery Design (x2), and Office Space are shown
- **AND** each row has a "Details" button

### Requirement: Skills section shows progress bars

The template SHALL display a split layout with image on the left and
content on the right, including heading "Professional and creative mind",
description, three progress bars (Architecture 60%, 3D Design 65%, Interior 80%),
and an "About Us" outline button.

#### Scenario: Progress bars render with correct values

- **WHEN** the page loads
- **THEN** Architecture shows 60%, 3D Design shows 65%, Interior shows 80%
- **AND** an "About Us" button is visible

### Requirement: Testimonials carousel displays quotes

The template SHALL display a testimonial carousel with dark overlay background,
showing a quote icon, testimonial text, author photo, name, and role.

#### Scenario: First testimonial renders by default

- **WHEN** the page loads
- **THEN** Robert Thomson, Business Owner is displayed with testimonial text

#### Scenario: Testimonials auto-advance

- **WHEN** 6 seconds pass
- **THEN** the carousel transitions to the next testimonial

### Requirement: Instagram grid shows three images

The template SHALL display a centered "@Instagram" heading and a 3-column
image grid with hover overlay effects.

#### Scenario: Three images render

- **WHEN** the page loads
- **THEN** three images are displayed in a row
- **AND** each image is a clickable link

### Requirement: Footer contains CTA, links, and newsletter

The template SHALL display a query CTA bar ("Have any project or query?"),
four footer columns (Address, Services, Company, Subscribe with form),
and a copyright bar linking to Component Dock.

#### Scenario: Footer CTA and columns render

- **WHEN** the page loads
- **THEN** the query CTA section is visible
- **AND** Address, Services, Company, and Subscribe columns are shown

#### Scenario: Newsletter form validates email

- **WHEN** the user submits an invalid email
- **THEN** an error message is displayed

#### Scenario: Newsletter form accepts valid email

- **WHEN** the user submits a valid email
- **THEN** a "Thanks for subscribing!" message is shown

#### Scenario: Copyright links to Component Dock

- **WHEN** the page loads
- **THEN** the copyright bar shows "Made with Component Dock"
- **AND** the link points to https://www.componentdock.com/

### Requirement: No ColorLib references in app code

The template SHALL NOT contain any references to "colorlib" or "ColorLib"
in source files within apps/plano/.

#### Scenario: No ColorLib strings in source

- **WHEN** the Plano app is built
- **THEN** no source file in apps/plano/ contains "colorlib" or "ColorLib"
- **AND** no source file contains "preview.colorlib.com"
