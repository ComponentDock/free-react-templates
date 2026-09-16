# Template: Vigil (Coming Soon)

## Purpose

Recreation of ColorLib "05 Comming Soon" (`05-comming-soon`).

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

| Token | Value | Notes |
|---|---|---|
| Body font | `'Open Sans', sans-serif` | weight 400, body text |
| Heading font | `'Poppins', sans-serif` | h1–h3 only, weight 700 |
| Body text color | `#333` | |
| Paragraph color | `#555` | line-height 1.6 |
| Brand / accent | `#F84982` | hot pink — button fill, countdown number color |
| Hover accent | `#E45F74` | link hover state |
| Overlay | `#000` at 40% opacity | dark veil over background image |
| Button bg | `#F84982` | hot pink fill |
| Button text | `#fff` | white, bold |
| Button border | `2px solid #F84982` | |
| Button radius | `50px` (pill) | |
| Button padding | `13px 35px` | |
| Button hover | transparent bg, text stays pink | |
| Countdown circle bg | `#fff` | white circles, 90px × 90px |
| Countdown circle radius | `100px` (full circle) | |
| Countdown number color | `#F84982` | brand pink |
| Countdown number size | `2em` | font-weight 500 |
| Countdown label color | `#333` | `.9em`, font-weight 600 |
| Social icon size | `35px × 35px` | inline-block, line-height 35px |
| Social icon radius | `40px` (circle) | |
| Social icon hover | `#fff` background | on hover |
| Facebook icon bg | `#2A61D6` | |
| Twitter icon bg | `#3AA4F8` | |
| Google+ icon bg | `#F43846` | |
| Instagram icon bg | `#8F614A` | |
| Pinterest icon bg | `#E1C013` | |
| h1 size | `3.5em` | bold, white, Poppins |
| Desc max-width | `500px` | centered, white text |
| Layout | `100vh` full-screen, vertical center via table-cell | |
| Background | `background-size: cover` full-bleed photo | dark overlay |
| Outer wrapper padding | `30px` | creates inset frame |
| Inner shadow | `2px 5px 30px rgba(0,0,0,.3)` | on .main-area |

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

## Gherkin requirements

### Background
Given a user visits Vigil on any device
Then the page loads a single full-screen coming-soon view
And no navigation, header, or multi-section layout exists

### Scenario: Full-screen background renders
Given the page is loaded
When the user views the viewport
Then a full-screen background image is visible
And a dark overlay (40% black opacity) covers the background
And the background image fills the entire viewport with `cover` sizing
And the content area has an inner shadow (`2px 5px 30px rgba(0,0,0,.3)`)

### Scenario: Heading renders
Given the page is loaded
When the user views the centered content
Then the heading "Coming Soon" is displayed in bold white text
And the heading uses Poppins font family at approximately 3.5em
And the heading is horizontally and vertically centered

### Scenario: Description paragraph
Given the page is loaded
When the user reads the text below the heading
Then a description paragraph is visible with white text
And the paragraph says "Our website is currently undergoing scheduled maintenance. We should be back shortly. Thank you for your patience."
And the paragraph has a max-width of approximately 500px

### Scenario: Countdown timer displays
Given the page is loaded
When the user views the countdown section
Then four countdown circles are displayed in a row
And each circle has a white background with 90px diameter
And each circle shows a number in pink (#F84982) at 2em size
And each circle has a label below the number: "Days", "Hours", "Mins", "Sec"
And the circles have 100px border-radius (full circle shape)
And the countdown circles are spaced with 10px margin each

### Scenario: Notify Us CTA button
Given the page is loaded
When the user locates the call-to-action button
Then a "NOTIFY US" button is displayed
And the button has a pill shape (border-radius: 50px)
And the button background is brand pink (#F84982)
And the button text is white and bold
And the button has a 2px solid pink border
And the button padding is 13px 35px
And on hover the button background becomes transparent

### Scenario: Social media links
Given the page is loaded
When the user looks at the bottom of the page
Then the text "Follow us for update" is displayed
And five social links are displayed: Facebook, Twitter, Google+, Instagram, Pinterest
And each link has a 35px circular icon with brand-colored background
And the Facebook icon background is #2A61D6
And the Twitter icon background is #3AA4F8
And the Google+ icon background is #F43846
And the Instagram icon background is #8F614A
And the Pinterest icon background is #E1C013
And on hover each icon background becomes white

### Scenario: Responsive layout
Given the page is loaded on a mobile viewport (<=767px)
When the user views the content
Then the heading font size reduces to 2.8em
And the countdown circles reduce to 70px × 70px
And the outer wrapper padding becomes 0px

### Scenario: Footer attribution
Given the page is loaded
When the user scrolls to the bottom
Then a "Made with Component Dock" link is visible in the footer area
And the link points to https://www.componentdock.com/

## Verification checklist

- [ ] Full-screen background image with dark overlay renders
- [ ] Heading uses Poppins font, white, bold, ~3.5em
- [ ] Description text is white, max-width 500px, centered
- [ ] Countdown timer shows 4 circles: Days, Hours, Mins, Sec
- [ ] Countdown circles are white with pink numbers, 90px diameter
- [ ] "NOTIFY US" pill button with pink background, white text
- [ ] Button hover transitions to transparent background
- [ ] Social icons row: Facebook, Twitter, Google+, Instagram, Pinterest
- [ ] Social icons have correct brand-colored circular backgrounds
- [ ] Social icon hover shows white background
- [ ] Responsive layout adjusts at 767px and 479px breakpoints
- [ ] Footer links to Component Dock (https://www.componentdock.com/)
- [ ] No ColorLib references in app code (provenance in spec only)
