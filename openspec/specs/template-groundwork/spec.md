# Template: Groundwork (Footer Component)

## Purpose

Recreation of ColorLib's "Bootstrap Footer 04" — a dark-themed website footer
with four-column link layout, horizontal separator with policy links and social
icons, and a bottom disclaimer paragraph. This is a focused footer component
template, not a full-page website template.

- **Source:** ColorLib Bootstrap Footer 04 (https://colorlib.com/wp/template/bootstrap-footer-04/)
- **Preview URL:** https://preview.colorlib.com/theme/bft/bootstrap-footer-04/
- **New name:** `groundwork` (foundation / base layer of a site)
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **ColorLib slug:** `bootstrap-footer-04`

## Design Tokens

Extracted from the live preview CSS (`css/style.css`) and HTML structure.

### Colors

| Token               | Value                          | Usage                                  |
| ------------------- | ------------------------------ | -------------------------------------- |
| Footer background   | `#000`                         | Black — main footer section bg         |
| Content area bg     | `bg-light` (Bootstrap light)   | Light gray bg for hero/placeholder     |
| Footer body text    | `#777`                         | Muted gray — paragraph text            |
| H3 headings         | `#fff`                         | White — section headings               |
| Footer site logo    | `#fff`                         | White — brand logo text                |
| Link color          | `#999`                         | Light gray — list link default         |
| Link hover color    | `#fff`                         | White on hover                         |
| Separator line      | `rgba(255,255,255,0.2)`       | Subtle white — horizontal divider      |
| Social icon color   | `#ccc`                         | Light gray — social media icons        |
| Social icon hover   | `#fff`                         | White on hover                         |
| Policy link color   | `#fff`                         | White — privacy/terms links            |

### Typography

| Element             | Font family                                                    |
| ------------------- | -------------------------------------------------------------- |
| Body                | `"Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` |
| Headings (h3)       | Roboto, 16px, white, bold, margin-bottom 20px                  |
| Site logo           | Roboto, 26px, bold, white, margin-bottom 30px, display block   |
| Links               | Roboto, #999, hover #fff                                       |
| Paragraphs          | Roboto, #777                                                   |

### Spacing & Shapes

| Token               | Value                                         |
| ------------------- | --------------------------------------------- |
| Footer padding      | `7rem 0` (vertical)                           |
| Content area height | `70vh` (demo placeholder above footer)        |
| Column layout       | Bootstrap grid: col-md-3 + 3x col-md-2       |
| Link list spacing   | margin-bottom 10px per item                   |
| Link menu items     | display: inline-block, padding: 10px          |
| Social items        | display: inline-block, padding: 10px          |
| Separator           | border-top: 1px solid rgba(255,255,255,0.2)   |
| Link transition     | .3s all ease                                  |

### Icons

- Icon font: IcoMoon (`fonts/icomoon/style.css`)
- Social icons: Twitter, Instagram, Facebook, Pinterest
- No border-radius on social icons (plain text-style icons)

## Structure (section order)

1. **Content area** — light background placeholder with centered heading "Footer #4" (demo only, not part of the footer component itself)
2. **Footer main** — black background, 7rem vertical padding
   - **Row 1: Four columns**
     - Col 1 (col-md-3): Site logo link + description paragraph
     - Col 2 (col-md-2): "Shop" heading + 5 link items (Sell online, Features, Examples, Website editors, Online retail)
     - Col 3 (col-md-2): "Press" heading + 5 link items (Events, News, Awards, Testimonials, Online retail)
     - Col 4 (col-md-2): "About" heading + 5 link items (Contact, Services, Team, Career, Contacts)
   - **Row 2: Separator + nav row**
     - Full-width horizontal line (1px solid rgba(255,255,255,0.2))
     - Left: Policy links (Privacy Policy, Terms & Conditions, Code of Conduct) — inline, white text
     - Right: Social icons (Twitter, Instagram, Facebook, Pinterest) — inline, gray #ccc
   - **Row 3: Bottom paragraph**
     - Small text disclaimer paragraph (Lorem ipsum placeholder)

## Requirements

### Requirement: Footer renders with black background

The footer component SHALL render with a black (#000) background and muted gray (#777) text color, with 7rem vertical padding.

#### Scenario: Footer background styling

- **WHEN** the Groundwork component is rendered
- **THEN** the footer element has a black (#000) background
- **AND** the footer text color is muted gray (#777)
- **AND** the footer has 7rem vertical padding

### Requirement: Four-column link layout

The footer SHALL display four columns in a row: brand info, Shop links, Press links, and About links.

#### Scenario: Brand column

- **WHEN** the Groundwork component is rendered
- **THEN** the first column displays the site logo "Groundwork" as a white link
- **AND** the logo is 26px bold white text
- **AND** a description paragraph appears below the logo

#### Scenario: Shop column

- **WHEN** the Groundwork component is rendered
- **THEN** the second column displays a "Shop" heading
- **AND** the Shop column contains links: "Sell online", "Features", "Examples", "Website editors", "Online retail"

#### Scenario: Press column

- **WHEN** the Groundwork component is rendered
- **THEN** the third column displays a "Press" heading
- **AND** the Press column contains links: "Events", "News", "Awards", "Testimonials", "Online retail"

#### Scenario: About column

- **WHEN** the Groundwork component is rendered
- **THEN** the fourth column displays an "About" heading
- **AND** the About column contains links: "Contact", "Services", "Team", "Career", "Contacts"

### Requirement: Separator with policy links and social icons

The footer SHALL display a horizontal separator line with policy links on the left and social media icons on the right.

#### Scenario: Separator line

- **WHEN** the Groundwork component is rendered
- **THEN** a horizontal line (1px solid rgba(255,255,255,0.2)) is displayed below the column row

#### Scenario: Policy links

- **WHEN** the separator section is visible
- **THEN** the left side shows links: "Privacy Policy", "Terms & Conditions", "Code of Conduct"
- **AND** the policy links are white text, inline-block, with 10px padding

#### Scenario: Social media icons

- **WHEN** the separator section is visible
- **THEN** the right side shows social media icons for Twitter, Instagram, Facebook, and Pinterest
- **AND** the social icons are #ccc colored, inline-block, with 10px padding
- **AND** the social icons turn white (#fff) on hover

### Requirement: Bottom disclaimer paragraph

The footer SHALL display a small disclaimer paragraph below the separator section.

#### Scenario: Disclaimer content

- **WHEN** the Groundwork component is rendered
- **THEN** a small-text paragraph appears below the separator row
- **AND** the paragraph contains placeholder disclaimer text

### Requirement: Link hover transitions

All links in the footer SHALL have smooth hover transitions (0.3s ease).

#### Scenario: Link hover effect

- **WHEN** a user hovers over a footer link
- **THEN** the link color transitions from #999 to #fff over 0.3s ease
- **AND** no underline decoration appears on hover

### Requirement: Footer does not reference ColorLib

The footer component SHALL NOT contain any references to ColorLib, colorlib.com, or the source template name in any code, comments, or user-facing text.

#### Scenario: No ColorLib references

- **WHEN** the Groundwork component source code is inspected
- **THEN** no file contains the string "colorlib" (case-insensitive)
- **AND** no file contains the string "bootstrap-footer" (except spec/docs)

## Verification checklist

- [ ] Footer renders with black (#000) background
- [ ] Four-column layout: brand + Shop + Press + About
- [ ] Site logo "Groundwork" is 26px bold white
- [ ] Each link column has 5 items with correct labels
- [ ] Horizontal separator with rgba(255,255,255,0.2) border
- [ ] Policy links (Privacy Policy, Terms & Conditions, Code of Conduct) on left
- [ ] Social icons (Twitter, Instagram, Facebook, Pinterest) on right, #ccc
- [ ] Social icons hover to white
- [ ] Bottom disclaimer paragraph present
- [ ] Link hover transitions (0.3s ease)
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/ ("Component Dock")
- [ ] CNAME file: `groundwork.free.componentdock.com`
- [ ] Homepage: `https://groundwork.free.componentdock.com`
- [ ] 100% test coverage
