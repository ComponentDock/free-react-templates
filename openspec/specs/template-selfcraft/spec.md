# Template: Selfcraft (Personal / vCard Website)

## Purpose

Selfcraft is a personal vCard / portfolio website in the free-react-templates
monorepo. It is an original React recreation of the ColorLib "Personify" free
template (source: https://colorlib.com/wp/template/personify/, preview:
https://preview.colorlib.com/theme/personify/), built under a DIFFERENT name
(**Selfcraft**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a multi-page personal/vCard site with a distinctive split
layout: the left half holds scrollable main content (bio, portfolio, resume,
contact), while the right half is a fixed full-height profile image. Navigation
is an offcanvas menu (slides in from the right, dark navy background) with
links to Bio, Portfolio, Resume, and Contact pages. The template uses Open Sans
for body text and Playfair Display for headings, with a coral/rose pink accent
color (#F73859).

## Requirements

### Requirement: Split-screen layout with fixed profile image

The site SHALL render a 50/50 split layout on desktop (≥576px): left half is scrollable main content, right half is a fixed full-height profile image. On mobile (<576px), the profile image stacks as a 400px banner above content.

#### Scenario: Desktop split layout

- **WHEN** the viewport width is 576px or greater
- **THEN** the profile image is fixed on the right half of the viewport
- **AND** the main content scrolls independently on the left half

#### Scenario: Mobile stacked layout

- **WHEN** the viewport width is less than 576px
- **THEN** the profile image appears as a 400px banner above the content
- **AND** the main content is full-width below the banner

### Requirement: Offcanvas slide-in navigation menu

The site SHALL provide a fixed "Menu" toggle (top-right, uppercase, 13px, letter-spacing 0.1em) that slides a 240px-wide panel from the right edge. The panel SHALL have a dark navy (#283149) background, white nav links, and social icons.

#### Scenario: Menu toggle opens the panel

- **WHEN** the user clicks the "Menu" toggle button
- **THEN** the offcanvas menu slides in from the right
- **AND** the site content shifts left by 240px

#### Scenario: Menu navigation

- **WHEN** the user clicks a navigation link in the offcanvas menu
- **THEN** the corresponding view is displayed
- **AND** the offcanvas menu closes

#### Scenario: Active link highlighting

- **WHEN** the offcanvas menu is open
- **THEN** the active view's link is highlighted in coral (#F73859)
- **AND** other links are white

### Requirement: Four-section single-page design

The site SHALL consolidate the original multi-page design into a single-page app with four views: Bio, Portfolio, Resume, and Contact.

#### Scenario: Bio view (default)

- **WHEN** the site loads
- **THEN** the Bio view is displayed by default
- **AND** the heading "Hi, I'm Kate Woodman" is visible
- **AND** the subtitle "Web Designer & Developer" is visible
- **AND** social links (Twitter, Facebook, Instagram) are visible

#### Scenario: Portfolio view

- **WHEN** the user navigates to the Portfolio view
- **THEN** a grid of project items is displayed
- **AND** each project shows an image with a coral overlay on hover

#### Scenario: Resume view

- **WHEN** the user navigates to the Resume view
- **THEN** the "Experience" section shows a list of job entries
- **AND** the "Education" section shows a list of education entries

#### Scenario: Contact form

- **WHEN** the user navigates to the Contact view
- **THEN** a form with Full Name, Email, Phone, and Message fields is visible
- **AND** a "Send Message" button is visible

### Requirement: Design tokens applied

The site SHALL use Open Sans for body text, Playfair Display for headings, coral (#F73859) as the accent color, and dark navy (#283149) for the offcanvas menu background.

#### Scenario: Fonts and colors

- **WHEN** the Selfcraft site loads
- **THEN** the body font is "Open Sans"
- **AND** the heading font is "Playfair Display"
- **AND** the accent color is coral (#F73859)

### Requirement: Component Dock footer

The site SHALL include a footer that links to https://www.componentdock.com/ branded as "Component Dock".

#### Scenario: Footer link

- **WHEN** the user scrolls to the footer
- **THEN** a link to "Component Dock" is visible
- **AND** the link points to https://www.componentdock.com/

## Verification Checklist

- [ ] Split layout: 50/50 on desktop, stacked on mobile (<576px)
- [ ] Profile image: fixed right half (desktop), 400px banner (mobile)
- [ ] Offcanvas menu: 240px from right, dark navy bg, slides with site-wrap transform
- [ ] Four views: Bio, Portfolio, Resume, Contact
- [ ] Bio: heading, subtitle, bio paragraphs, social links
- [ ] Portfolio: grid with coral hover overlay
- [ ] Resume: experience + education timeline lists
- [ ] Contact: form with four fields + submit button
- [ ] Fonts: Open Sans (body), Playfair Display (headings)
- [ ] Accent color: #F73859 throughout (buttons, active states, portfolio overlay, icons)
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] 100% test coverage
- [ ] Spec + docs at openspec/specs/template-selfcraft/ and docs/templates/selfcraft/
