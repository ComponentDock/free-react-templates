# Template: FooterPier (Footer)

## Purpose

Recreation of ColorLib's **Bootstrap Footer 19** — a purple footer with a four-column layout containing brand/contact details, a newsletter subscription form, latest news blog posts, and an Instagram photo grid, plus a copyright bar.

- **Source:** Bootstrap Footer 19 — https://colorlib.com/wp/template/bootstrap-footer-19/
- **Preview:** https://preview.colorlib.com/theme/bootstrap-footer-19/ (unreachable at prep time — design based on ColorLib screenshot and description)
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** Footer

## Design Tokens

> NOTE: Preview was unreachable (404). Tokens derived from the ColorLib screenshot description ("purple footer, four columns, extra details, newsletter subscription, latest news, Instagram feed") and the standard Bootstrap Footer template pattern in the series.

| Token                | Value                          | Source                                                |
| -------------------- | ------------------------------ | ----------------------------------------------------- |
| Font family          | `"Poppins", sans-serif`        | Standard across Bootstrap Footer series               |
| Footer background    | `#7C4DFF` (purple)             | Primary brand color from ColorLib description          |
| Footer text color    | `#ffffff` (white)              | Standard for colored-footers in this series            |
| Heading color        | `#ffffff`                      | White headings on purple background                   |
| Link color           | `rgba(255,255,255,0.7)`        | Semi-transparent white for nav links                   |
| Link hover color     | `#ffffff`                      | Full white on hover                                    |
| Subscribe button bg  | `#ffffff` (white)              | Contrasting white CTA on purple                        |
| Subscribe button text| `#7C4DFF`                      | Purple text on white button                            |
| Subscribe button radius | `4px`                       | Standard Bootstrap button radius                       |
| Copyright border-top | `1px solid rgba(255,255,255,0.1)` | Subtle separator                                   |
| Footer padding       | `5rem 0`                       | Generous vertical spacing                              |
| Column count         | 4 (on md+)                     | Standard Bootstrap grid                                |

## Requirements

### Requirement: Footer renders with correct background and layout

The footer element SHALL use the semantic `<footer>` tag with `role="contentinfo"` and apply the purple background color (#7C4DFF).

#### Scenario: Footer renders correctly

- **WHEN** the Footer component is rendered
- **THEN** a `<footer>` element with `role="contentinfo"` is present
- **AND** it has the `bg-footer-bg` class applied

### Requirement: Four-column grid displays content sections

The footer SHALL display a responsive 4-column grid on md+ screens with: brand details + subscribe form, latest news posts, and Instagram image grid.

#### Scenario: Brand column renders contact info and subscribe form

- **WHEN** the Footer component is rendered
- **THEN** a brand heading "FooterPier" is visible
- **AND** a brief description paragraph is displayed
- **AND** a newsletter subscribe form with email input and submit button is present
- **AND** the subscribe button has a white background with purple text

#### Scenario: Latest News column renders blog post cards

- **WHEN** the Footer component is rendered
- **THEN** at least two blog post entries are displayed with title and date
- **AND** each entry has a link to read more

#### Scenario: Instagram column renders image grid

- **WHEN** the Footer component is rendered
- **THEN** a grid of Instagram-style image thumbnails is displayed
- **AND** each image links to an external URL

### Requirement: Social media icons row

The footer SHALL display a row of social media icon links (e.g., Instagram, Twitter, Facebook) below or within the content area.

#### Scenario: Social icons render

- **WHEN** the Footer component is rendered
- **THEN** at least 3 social icon links are displayed
- **AND** each icon has an accessible label or `aria-label`

### Requirement: Copyright bar displays at footer bottom

The footer SHALL display a copyright bar with the current year, "All rights reserved" text, and a "Made with ♥ by Component Dock" attribution link.

#### Scenario: Copyright bar renders correctly

- **WHEN** the Footer component is rendered
- **THEN** the copyright text with the current year is displayed
- **AND** a link to "Component Dock" with href "https://www.componentdock.com/" is present
- **AND** the link opens in a new tab with `target="_blank"` and `rel="noreferrer"`

### Requirement: Subscribe form handles submission

The subscribe form SHALL prevent default form submission when the submit button is clicked.

#### Scenario: Form submission is prevented

- **WHEN** the user clicks the Subscribe button
- **THEN** the form's default submission is prevented
- **AND** no page navigation occurs

### Requirement: Footer is responsive

The footer columns SHALL stack vertically on small screens and display as a 4-column grid on medium screens and above.

#### Scenario: Mobile layout stacks columns

- **WHEN** the viewport width is less than 768px
- **THEN** the footer columns are stacked vertically

#### Scenario: Desktop layout shows 4 columns

- **WHEN** the viewport width is 768px or more
- **THEN** the footer columns are displayed in a 4-column grid

## Verification Checklist

- [ ] Footer background is #7C4DFF (purple)
- [ ] Four columns render on md+ screens
- [ ] Brand column has logo text, description, and subscribe form
- [ ] Newsletter form has email input + submit button
- [ ] Latest news column shows blog entries with title + date
- [ ] Instagram grid renders image thumbnails
- [ ] Social media icons are present and accessible
- [ ] Copyright bar has current year + Component Dock link
- [ ] Component Dock link opens in new tab
- [ ] Footer stacks on mobile (columns < 768px)
- [ ] Poppins font family applied
- [ ] No ColorLib references in app code
- [ ] 100% test coverage
