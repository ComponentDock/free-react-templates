# Template: Vigil (Coming Soon)

## Purpose

A Coming Soon template with full-screen background, heading, description paragraph, countdown timer, notify us cta button and social media sections. Recreation of ColorLib "05 Comming Soon" (`05-comming-soon`).

- **Source:** https://colorlib.com/wp/template/05-comming-soon/
- **Preview (template HTML):** https://preview.colorlib.com/theme/05-comming-soon/ (404 — unreachable)
- **CSS reference:** https://colorlib.com/etc/cs/05-comming-soon/css/styles.css
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-20.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Coming Soon / Under Construction

### Description from Colorlib

> A simple yet impactful coming soon page with a full-screen background image,
> countdown timer, CTA button, and social media links. The page features a
> dark overlay over a scenic misty forest photograph.

## Design tokens

Extracted from the original `05-comming-soon/css/styles.css` (fetched from
`https://colorlib.com/etc/cs/05-comming-soon/css/styles.css`).

| Token                   | Value                                               | Notes                                          |
| ----------------------- | --------------------------------------------------- | ---------------------------------------------- |
| Body font               | `'Open Sans', sans-serif`                           | weight 400, body text                          |
| Heading font            | `'Poppins', sans-serif`                             | h1–h3 only, weight 700                         |
| Body text color         | `#333`                                              |                                                |
| Paragraph color         | `#555`                                              | line-height 1.6                                |
| Brand / accent          | `#F84982`                                           | hot pink — button fill, countdown number color |
| Hover accent            | `#E45F74`                                           | link hover state                               |
| Overlay                 | `#000` at 40% opacity                               | dark veil over background image                |
| Button bg               | `#F84982`                                           | hot pink fill                                  |
| Button text             | `#fff`                                              | white, bold                                    |
| Button border           | `2px solid #F84982`                                 |                                                |
| Button radius           | `50px` (pill)                                       |                                                |
| Button padding          | `13px 35px`                                         |                                                |
| Button hover            | transparent bg, text stays pink                     |                                                |
| Countdown circle bg     | `#fff`                                              | white circles, 90px × 90px                     |
| Countdown circle radius | `100px` (full circle)                               |                                                |
| Countdown number color  | `#F84982`                                           | brand pink                                     |
| Countdown number size   | `2em`                                               | font-weight 500                                |
| Countdown label color   | `#333`                                              | `.9em`, font-weight 600                        |
| Social icon size        | `35px × 35px`                                       | inline-block, line-height 35px                 |
| Social icon radius      | `40px` (circle)                                     |                                                |
| Social icon hover       | `#fff` background                                   | on hover                                       |
| Facebook icon bg        | `#2A61D6`                                           |                                                |
| Twitter icon bg         | `#3AA4F8`                                           |                                                |
| Google+ icon bg         | `#F43846`                                           |                                                |
| Instagram icon bg       | `#8F614A`                                           |                                                |
| Pinterest icon bg       | `#E1C013`                                           |                                                |
| h1 size                 | `3.5em`                                             | bold, white, Poppins                           |
| Desc max-width          | `500px`                                             | centered, white text                           |
| Layout                  | `100vh` full-screen, vertical center via table-cell |                                                |
| Background              | `background-size: cover` full-bleed photo           | dark overlay                                   |
| Outer wrapper padding   | `30px`                                              | creates inset frame                            |
| Inner shadow            | `2px 5px 30px rgba(0,0,0,.3)`                       | on .main-area                                  |

## Visual design (from screenshot)

The page shows a full-screen misty forest/landscape photograph with a dark
overlay. Centered content includes:

1. **Heading:** "Comming Soon" — large bold white Poppins text
2. **Description:** Two lines of white text below: maintenance message
3. **Countdown timer:** Four white circles in a row showing Days, Hours,
   Mins, Sec — each circle has pink (#F84982) numbers and dark labels
4. **CTA button:** "NOTIFY US" pill-shaped pink button
5. **Social footer:** "Follow us for update" text above five colored circular
   social icons (Facebook blue, Twitter light blue, Google+ red, Instagram
   brown, Pinterest yellow)

The overall aesthetic is moody/atmospheric with the dark overlay creating a
dramatic backdrop for the bright pink accent color and white content.

<!-- live-token-reverify:2026-10-22 -->

### Live reference restored (2026-10-22)

The prep-time note above records the preview 404. **Re-probed 2026-10-22**
the reference answers **HTTP 200**, so the live DOM and CSS are
authoritative again — CSS values are canonical over the screenshot
(`docs/replication.md`).

| artefact | URL | reading |
| --- | --- | --- |
| live page | `https://colorlib.com/etc/cs/05-comming-soon/index.html` | HTTP 200 · 4,983 B |
| stylesheet | `https://colorlib.com/etc/cs/05-comming-soon/css/style.css?v=6a513357` | HTTP 200 · 9,448 B · sha256 `92da74b24893` |

**Live palette** (hex × occurrences in that sheet): `#ffffff`×5,
`#f84982`×3, `#333333`×2, `#555555`×1, `#e45f74`×1, `#000000`×1,
`#2a61d6`×1, `#3aa4f8`×1, `#f43846`×1, `#8f614a`×1.

**Low-chroma values the sheet actually uses** — `#333333`, `#555555`; any
sampled Tailwind grey above is an approximation of these.

## Requirements

### Requirement: Full-screen background renders

The page SHALL display a full-screen background image with a dark overlay.

#### Scenario: Background image loads

- **GIVEN** the page is loaded
- **WHEN** the user views the viewport
- **THEN** a full-screen background image is visible
- **AND** a dark overlay (40% black opacity) covers the background
- **AND** the background image fills the entire viewport with `cover` sizing

### Requirement: Heading renders

The page SHALL display a "Coming Soon" heading in bold white text.

#### Scenario: Heading displays correctly

- **GIVEN** the page is loaded
- **WHEN** the user views the centered content
- **THEN** the heading "Coming Soon" is displayed in bold white text
- **AND** the heading uses Poppins font family at approximately 3.5em

### Requirement: Description paragraph

The page SHALL display a maintenance message below the heading.

#### Scenario: Description text is visible

- **GIVEN** the page is loaded
- **WHEN** the user reads the text below the heading
- **THEN** a description paragraph is visible with white text
- **AND** the paragraph has a max-width of approximately 500px

### Requirement: Countdown timer displays

The page SHALL display a countdown timer with four circular units.

#### Scenario: Timer shows Days, Hours, Mins, Sec

- **GIVEN** the page is loaded
- **WHEN** the user views the countdown section
- **THEN** four countdown circles are displayed in a row
- **AND** each circle has a white background with 90px diameter
- **AND** each circle shows a zero-padded number in pink (#F84982)
- **AND** each circle has a label: "Days", "Hours", "Mins", "Sec"

### Requirement: Notify Us CTA button

The page SHALL display a pill-shaped "NOTIFY US" button.

#### Scenario: Button renders with correct style

- **GIVEN** the page is loaded
- **WHEN** the user locates the call-to-action button
- **THEN** a "NOTIFY US" button is displayed
- **AND** the button has a pill shape (border-radius: 50px)
- **AND** the button background is brand pink (#F84982)
- **AND** the button text is white and bold

### Requirement: Social media links

The page SHALL display five colored social media icons at the bottom.

#### Scenario: Social icons render

- **GIVEN** the page is loaded
- **WHEN** the user looks at the bottom of the page
- **THEN** the text "Follow us for update" is displayed
- **AND** five social links are displayed: Facebook, Twitter, Google+, Instagram, Pinterest
- **AND** each link has a 35px circular icon with brand-colored background

### Requirement: Footer attribution

The page SHALL link to Component Dock in the footer.

#### Scenario: Footer link is visible

- **GIVEN** the page is loaded
- **WHEN** the user looks at the footer
- **THEN** a "Made with Component Dock" link is visible
- **AND** the link points to https://www.componentdock.com/

### Requirement: No source-site references in the app

The application SHALL NOT carry the source design's provenance: no file under
`apps/vigil/` may contain "ColorLib"/"Colorlib", a colorlib.com URL, or the
source template's name — code, comments, CSS, markup, metadata and filenames
included. Provenance lives only in this spec, `TEMPLATES.md` and the PR; where
the source paints its own credit line, the recreation SHALL credit Component
Dock (`https://www.componentdock.com/`) instead.

#### Scenario: Clean provenance

- **GIVEN** the template is implemented from this spec
- **WHEN** every non-test file under `apps/vigil/` is inspected
- **THEN** none SHALL contain the source site's name, domain or a URL pointing at it
- **AND** the footer credit SHALL link to `https://www.componentdock.com/`

## Verification checklist

- [ ] No references to ColorLib (name, domain or URL) in any app file or filename — provenance stays in this spec, TEMPLATES.md and the PR
- [ ] Full-screen background renders — a full-screen background image is visible
- [ ] Heading renders — the heading "Coming Soon" is displayed in bold white text
- [ ] Description paragraph — a description paragraph is visible with white text
- [ ] Countdown timer displays — four countdown circles are displayed in a row
- [ ] Notify Us CTA button — a "NOTIFY US" button is displayed
- [ ] Social media links — the text "Follow us for update" is displayed
