# Template: Dawn (Coming Soon)

## Purpose

Recreation of ColorLib "Coming Soon V18" (`03-comming-soon`).

- **Source:** https://colorlib.com/wp/template/03-comming-soon/
- **Preview (template HTML):** https://colorlib.com/etc/cs/03-comming-soon.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-18.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Coming Soon / Under Construction

### Description from Colorlib

> "Whether in need of an under construction page or raising hype with a coming
> soon page, this free website template will do the trick. It is simple yet
> impactful with an image background, text, CTA and social buttons."

## Design tokens

Extracted from the original `03-comming-soon/css/styles.css`.

| Token | Value | Notes |
|---|---|---|
| Body font | `'Open Sans', sans-serif` | weight 400, body text |
| Heading font | `'Poppins', sans-serif` | h1–h3 only |
| Body text color | `#333` | |
| Paragraph color | `#555` | line-height 1.6 |
| Brand / accent | `#F84982` | hot pink — button fill, social underline |
| Hover accent | `#E45F74` | link hover state |
| Overlay | `#000` at 40% opacity | dark veil over background image |
| Button bg | `#F84982` | |
| Button text | `#fff` | |
| Button border | `2px solid #F84982` | |
| Button radius | `50px` (pill) | |
| Button padding | `13px 35px` | |
| Button hover | transparent bg, text stays pink | |
| Social underline | `2px #F84982` | slides out on hover |
| h1 size | `3.5em` | bold, white |
| Desc max-width | `500px` | centered |
| Layout | `100vh` full-screen, vertical center via table-cell | |
| Background | `background-size: cover` full-bleed photo | dark overlay |

## Requirements

### Feature: Dawn template behaviour

**Background**
- **GIVEN** a user visits Dawn on any device
- **THEN** the page loads a single full-screen coming-soon view
- **AND** no navigation, header, or multi-section layout exists

#### Scenario: Hero / main area renders

- **GIVEN** the page is loaded
- **WHEN** the user views the viewport
- **THEN** a full-screen background image is visible with a dark overlay
- **AND** the content is vertically and horizontally centered
- **AND** the heading "COMING SOON" is displayed in bold white text

#### Scenario: Description text

- **GIVEN** the page is loaded
- **WHEN** the user reads the content below the heading
- **THEN** a description paragraph is visible with white text
- **AND** the text says "Our website is currently undergoing scheduled maintenance. We should be back shortly. Thank you for your patience."
- **AND** the paragraph has a max-width of approximately 500px

#### Scenario: Notify CTA button

- **GIVEN** the page is loaded
- **WHEN** the user locates the call-to-action button
- **THEN** a "NOTIFY US" button is displayed
- **AND** the button has a pill shape (border-radius: 50px)
- **AND** the button background is brand pink (#F84982)
- **AND** the button text is white
- **AND** on hover the button background becomes transparent

#### Scenario: Social links

- **GIVEN** the page is loaded
- **WHEN** the user looks at the bottom of the page
- **THEN** four social links are displayed: Facebook, Twitter, Google, Instagram
- **AND** each link has white text
- **AND** each link has a 2px pink (#F84982) underline on hover that animates out

#### Scenario: Responsive layout

- **GIVEN** the page is loaded on a mobile device (≤767px)
- **WHEN** the user views the content
- **THEN** h1 font size reduces to approximately 2.8em
- **AND** paragraph line-height reduces to 1.4
- **AND** all content remains centered

#### Scenario: Accessibility

- **GIVEN** the page is loaded
- **WHEN** a screen reader processes the page
- **THEN** the heading is semantically an h1 element
- **AND** social links are rendered as anchor elements with visible text labels
- **AND** the CTA button is a clickable element

## Verification checklist

- [ ] Full-screen layout with background image and dark overlay
- [ ] "COMING SOON" heading in Poppins, bold, white
- [ ] Description paragraph in Open Sans, white, max-width 500px
- [ ] Pill-shaped "NOTIFY US" button in #F84982
- [ ] Button hover: transparent background
- [ ] Four social links (Facebook, Twitter, Google, Instagram) at bottom
- [ ] Social link hover underline animation (2px pink)
- [ ] Responsive: h1 shrinks on mobile
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] `public/CNAME` = `dawn.free.componentdock.com`
- [ ] `homepage` = `https://dawn.free.componentdock.com`
