# Template: Reveal (Coming Soon)

## Purpose

Recreation of ColorLib "Coming Soon V19" (`04-comming-soon`).

- **Source:** https://colorlib.com/wp/template/04-comming-soon/
- **Preview (template HTML):** https://preview.colorlib.com/theme/04-comming-soon/ (404 — unreachable)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/coming-soon-19.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Coming Soon / Under Construction

### Description from Colorlib

> "The best free coming soon website template with a dark design and a split-screen structure that you can quickly improve."

## Design tokens

Extracted from the preview screenshot (preview URL returned 404; tokens inferred from the visual screenshot and the ColorLib listing page description).

| Token | Value | Notes |
|---|---|---|
| Body font | `'Poppins', sans-serif` | clean sans-serif, weight 400 for body |
| Heading font | `'Poppins', sans-serif` | bold (700), used for h1 |
| Background | `#000000` | solid black — full right panel and overall page |
| Text color | `#ffffff` | white — headings and body text |
| Body text color | `#b3b3b3` | light gray for description paragraphs |
| Brand / accent | `#ff6b81` | warm pink/coral — CTA button fill |
| Hover accent | `#e55a6e` | slightly darker pink for hover state |
| Button bg | `#ff6b81` | warm pink/coral |
| Button text | `#ffffff` | white, uppercase |
| Button border | none | flat fill style |
| Button radius | `4px` | slight rounding, not pill |
| Button padding | `12px 28px` | comfortable tap target |
| Button hover | `#e55a6e` | darker pink |
| Input bg | `#ffffff` | white input field |
| Input text | `#999999` | gray placeholder text |
| Input border | `none` | clean flat look |
| Input radius | `4px` | matches button |
| h1 size | `3rem` (48px) | bold, white, centered in right panel |
| Logo font | `'Poppins', sans-serif` | white text, weight 600 |
| Layout | Split-screen: ~55% image / ~45% content | `100vh`, flex row |
| Image | Full-height B&W hero photo | `object-fit: cover` |
| Social icons | Small inline icons (Facebook, Twitter, Google+, Instagram, Pinterest) | white, footer row |
| Social label | "Stay in touch :" | white text, left of icons |

## Gherkin requirements

### Background
Given a user visits Reveal on any device
Then the page loads a single full-screen coming-soon view
And no navigation, header, or multi-section layout exists

### Scenario: Split-screen layout renders
Given the page is loaded
When the user views the viewport
Then a split-screen layout is displayed at 100vh height
And the left side (~55%) shows a full-height hero image
And the right side (~45%) shows a dark/black content panel

### Scenario: Hero image
Given the page is loaded
When the user looks at the left panel
Then a full-height hero image is displayed
And the image uses `object-fit: cover` to fill the panel
And the image is a black-and-white style photograph

### Scenario: Logo
Given the page is loaded
When the user looks at the top of the right panel
Then a logo text is displayed in white
And the logo is positioned at the top of the content area

### Scenario: Heading
Given the page is loaded
When the user reads the right panel
Then a heading "Under Construction" is displayed
And the heading is in white, bold, approximately 3rem
And the heading uses the Poppins font family

### Scenario: Description text
Given the page is loaded
When the user reads below the heading
Then a description paragraph is visible
And the text says "Our website is currently undergoing scheduled maintenance. We Should be back shortly. Thank you for your patience."
And the text color is light gray (#b3b3b3 or similar)

### Scenario: Email notification form
Given the page is loaded
When the user locates the call-to-action area
Then an email input field is displayed with placeholder "Enter your email"
And a "NOTIFY US" button is displayed next to the input
And the button background is warm pink (#ff6b81)
And the button text is white and uppercase
And on hover the button background darkens slightly

### Scenario: Launch notification subtext
Given the page is loaded
When the user reads below the email form
Then a subtext line is displayed
And the text says "Sign up now to get early notification of our lauch date!"
And the text color is light gray

### Scenario: Social links footer
Given the page is loaded
When the user looks at the bottom of the right panel
Then a "Stay in touch :" label is displayed
And social media icons are shown: Facebook, Twitter, Google+, Instagram, Pinterest
And the icons are white and small

### Scenario: Responsive layout
Given the page is loaded on a mobile device (≤767px)
When the user views the content
Then the split-screen becomes a stacked layout
And the hero image appears above the content area
And the content remains readable with appropriate padding

### Scenario: Accessibility
Given the page is loaded
When a screen reader processes the page
Then the heading is semantically an h1 element
And the email input has an associated label
And the CTA button is a clickable element
And social links are rendered as anchor elements

## Verification checklist

- [ ] Split-screen layout: ~55% image / ~45% dark content panel
- [ ] Full-height hero image with object-fit cover
- [ ] "Under Construction" heading in Poppins, bold, white, ~3rem
- [ ] Description paragraph in light gray
- [ ] Email input with "Enter your email" placeholder (white bg)
- [ ] "NOTIFY US" button in warm pink (#ff6b81), white uppercase text
- [ ] Button hover: darker pink state
- [ ] "Sign up now..." subtext below form
- [ ] "Stay in touch :" label with 5 social icons (Facebook, Twitter, Google+, Instagram, Pinterest)
- [ ] Responsive: stacked layout on mobile
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] `public/CNAME` = `reveal.free.componentdock.com`
- [ ] `homepage` = `https://reveal.free.componentdock.com`
