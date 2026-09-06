# Template: FooterCove (Footer)

## Purpose

Recreation of ColorLib's **Bootstrap Footer 11** (titled "Footer 01" in the preview) — a dark navy footer with a decorative blob SVG overlay, four-column layout (brand description + social links, latest news cards with thumbnails, quick links navigation, contact info), and a centered copyright bar. The section above the footer is a light gray hero with a centered heading.

- **Source:** Bootstrap Footer 11 — https://colorlib.com/wp/template/bootstrap-footer-11/
- **Preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-11/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Footer

## Design Tokens

| Token                  | Value                              | Source                                                     |
| ---------------------- | ---------------------------------- | ---------------------------------------------------------- |
| Font family            | `"Poppins", sans-serif`            | @font-face in preview HTML head (Poppins 300–900)          |
| Section background     | `#f8f8f8` (light gray)            | `.ftco-section { background: #f8f8f8 }`                    |
| Section padding        | `12em 0`                           | `.ftco-section { padding: 12em 0 }`                        |
| Footer background      | `#0d1824` (dark navy)              | `.footer-01 { background: #0d1824 }`                       |
| Footer padding         | `7em 0`                            | `footer { padding: 7em 0 }`                                |
| Footer heading color   | `#ffffff` (white)                  | `.footer-01 .footer-heading { color: #fff }`               |
| Footer heading underline| `#7f72e4` (purple), 40px × 2px    | `.footer-01 .footer-heading:after { background: #7f72e4 }` |
| Footer link color      | `#7f72e4` (purple)                 | `.footer-01 a { color: #7f72e4 }`                          |
| Footer body text color | `rgba(255,255,255,0.6)`            | `.footer-01 p { color: rgba(255,255,255,0.6) }`            |
| Nav link color         | `rgba(255,255,255,0.7)`            | `.footer-01 ul.list-unstyled li a`                          |
| News heading link      | `rgba(255,255,255,0.7)`            | `.footer-01 .block-21 .text .heading a`                     |
| News meta link color   | `#7f72e4` (purple)                 | `.footer-01 .block-21 .meta > div a`                        |
| Contact list text      | `rgba(255,255,255,0.6)`            | `.footer-01 .block-23 ul li`                                |
| Contact icon color     | `rgba(255,255,255,0.4)`            | `.footer-01 .block-23 ul li .icon`                          |
| Social icon bg         | `#7f72e4` (purple)                 | `.footer-01 .ftco-footer-social li a { background: #7f72e4 }` |
| Social icon color      | `#ffffff`                          | `.ftco-footer-social li a { color: #fff }`                  |
| Social icon size       | `40px × 40px`, circular            | `.ftco-footer-social li a { height: 40px; width: 40px; border-radius: 50% }` |
| Social icon bg fallback| `rgba(0,0,0,0.05)` (light, non-footer)| `.ftco-footer-social li a { background: rgba(0,0,0,0.05) }` |
| Copyright text color   | `#999999`                          | `.footer-01 .copyright { color: #999999 }`                 |
| Blog thumbnail border  | Rounded                            | `.block-21 .img { border-radius: 0.25rem }`                |

## Requirements

### Requirement: Section heading area

The application SHALL display a light gray section (#f8f8f8) with a centered heading "Footer #01" at the top of the page, using 12em vertical padding.

#### Scenario: Section heading renders

- **WHEN** the page loads
- **THEN** a section with background #f8f8f8 is visible
- **AND** a centered heading "Footer #01" is displayed
- **AND** the section has generous vertical padding (12em)

### Requirement: Footer main content — four-column grid

The footer SHALL render with a #0d1824 (dark navy) background, 7em vertical padding, and a 4-column grid on desktop: (1) brand description + social icons, (2) latest news cards, (3) quick links, (4) contact info.

#### Scenario: Footer displays dark navy background

- **WHEN** the footer renders
- **THEN** the footer background is #0d1824
- **AND** the footer has 7em vertical padding

#### Scenario: Brand column shows name, description, and social icons

- **WHEN** the footer renders
- **THEN** the first column shows a heading "Colorlib" in white
- **AND** a description paragraph appears in rgba(255,255,255,0.6)
- **AND** three social icon links (Twitter, Facebook, Instagram) appear as 40px circular purple (#7f72e4) buttons with white icons

#### Scenario: Latest news column shows two thumbnail cards

- **WHEN** the footer renders
- **THEN** the second column shows a "Latest News" heading in white with a purple underline
- **AND** two news cards appear, each with a thumbnail image, a headline link, and meta info (date, author, comment count)
- **AND** news headings are rgba(255,255,255,0.7); meta links are #7f72e4

#### Scenario: Quick links column shows navigation links

- **WHEN** the footer renders
- **THEN** the third column shows a "Quick Links" heading in white with a purple underline
- **AND** six navigation links appear (Home, About, Services, Works, Blog, Contact) in rgba(255,255,255,0.7)

#### Scenario: Contact info column shows address, phone, email

- **WHEN** the footer renders
- **THEN** the fourth column shows a "Have a Questions?" heading in white with a purple underline
- **AND** three contact items appear with icons: address, phone, and email
- **AND** contact text is rgba(255,255,255,0.6); icons are rgba(255,255,255,0.4)

### Requirement: Footer heading underline accent

Each footer column heading SHALL have a 40px-wide, 2px-tall purple (#7f72e4) underline positioned below the heading text.

#### Scenario: Heading underline appears on column headings

- **WHEN** a footer column heading renders (Latest News, Quick Links, Have a Questions?)
- **THEN** a purple (#7f72e4) horizontal bar appears below the heading
- **AND** the bar is 40px wide and 2px tall

### Requirement: Copyright bar

The footer SHALL display a centered copyright line at the bottom in #999999 text.

#### Scenario: Copyright text renders

- **WHEN** the footer renders
- **THEN** a copyright line is visible at the bottom, centered
- **AND** the text color is #999999
- **AND** the text contains a dynamic year and attribution text

### Requirement: Social icon hover state

Social icon links SHALL transition to a white background on hover.

#### Scenario: Hovering a social icon changes its background

- **WHEN** the user hovers over a social icon
- **THEN** the icon background changes to white (#fff)

### Requirement: Footer links use Component Dock attribution

The footer copyright line SHALL link to Component Dock instead of Colorlib.

#### Scenario: Copyright links to Component Dock

- **WHEN** the footer renders
- **THEN** the copyright attribution link points to https://www.componentdock.com/
- **AND** the link text reads "Component Dock"

## Verification Checklist

- [ ] Footer background is #0d1824
- [ ] Font family is Poppins
- [ ] Four-column layout on desktop, stacked on mobile
- [ ] Brand column: heading, description, 3 social icons
- [ ] News column: 2 thumbnail cards with meta
- [ ] Quick links: 6 navigation items
- [ ] Contact column: address, phone, email with icons
- [ ] Purple (#7f72e4) accent on links, social icons, and heading underlines
- [ ] Heading underlines: 40px × 2px, purple
- [ ] Social icons: 40×40px circles, purple bg, white icon, white bg on hover
- [ ] Copyright bar: centered, #999999, links to Component Dock
- [ ] Decorative SVG blob overlay (or simplified CSS alternative)
- [ ] Section heading area: #f8f8f8 background, centered "Footer #01"
- [ ] Responsive: columns stack on small screens
- [ ] No ColorLib references in app code (provenance in spec only)
