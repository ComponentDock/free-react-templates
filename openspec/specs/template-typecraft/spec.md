# Template: Typecraft (App Landing Page)

## Purpose

Recreation of ColorLib "Typo" — a bright, modern single-page app landing template
with a coral-to-yellow gradient hero, split about sections, feature grid, process
cards, dark newsletter, and 4-column footer.

- **Source:** https://colorlib.com/wp/template/typo/
- **Preview:** https://preview.colorlib.com/theme/typo/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/typo-bright-free-app-landing-page-template.jpg

## Design Tokens

Extracted from the live preview's `css/main.css`:

| Token                | Value                                       |
|----------------------|---------------------------------------------|
| Font family          | Poppins (weights 300, 500, 600)             |
| Brand gradient       | `#f76268` (coral pink) → `#fce08a` (warm yellow) |
| Hero overlay         | Linear gradient `#f76268` → `#fce08a`, opacity 0.9 |
| Primary button       | Transparent bg, `1px solid #fff` border, `border-radius: 20px`, gradient overlay on hover |
| Text color           | `#222222`                                   |
| About section bg     | `#f9f9ff` (very light blue-gray)            |
| Offer section overlay| `#000` at opacity 0.8 over background image |
| Newsletter bg        | `#000` (black)                              |
| Process icon color   | `#f5204b` (red-pink)                        |
| Footer bg            | `#f9f9ff`                                   |
| Footer link color    | `#f67590` (pink)                            |
| Footer bottom bg     | `#fff`                                      |
| Border radius (btn)  | 20px (pill shape)                           |
| Border radius (other)| 3px, 8.5px                                  |

## Gherkin Requirements

### Feature: Header / Navbar

```gherkin
Scenario: Sticky header with logo and navigation
  Given the page loads
  Then a header displays a logo on the left
  And navigation links "Home", "Generic", "Elements" appear on the right
  And a hamburger menu icon is visible on mobile viewports
  And the header sits above the hero banner

Scenario: Mobile hamburger toggle
  Given the viewport width is below 768px
  When the user taps the hamburger icon
  Then the nav links slide into view
```

### Feature: Hero / Banner

```gherkin
Scenario: Gradient overlay hero with CTA
  Given the page loads
  Then a full-width hero section displays
  And a gradient overlay from coral-pink (#f76268) to warm-yellow (#fce08a) covers the background at 0.9 opacity
  And a title image is centered in the hero
  And a paragraph of descriptive text appears below the title
  And a "Get Started" pill button (border-radius 20px, white border) is centered below the text

Scenario: Hero background image
  Given the page loads
  Then a background image is visible behind the gradient overlay
```

### Feature: About Top Section

```gherkin
Scenario: Split about section with image and feature cards
  Given the page loads
  Then a section with light blue-gray background (#f9f9ff) appears
  And the left half shows an image with a gradient fade-to-background overlay
  And the right half displays two feature cards stacked vertically
  And each feature card has an icon (rocket, sun), a heading, and a paragraph

Scenario: About top responsive layout
  Given the viewport width is below 992px
  Then the image stacks above the feature cards
```

### Feature: Feature Area

```gherkin
Scenario: Three-column feature section
  Given the page loads
  Then a white-background section displays three columns
  And the left column has heading "Reasons To Choose Notebook" with body text
  And the middle column has heading "Facts Why Inkjet Printing" with body text
  And the right column shows an image

Scenario: Feature section responsive
  Given the viewport width is below 768px
  Then the three columns stack vertically
```

### Feature: Offer Section

```gherkin
Scenario: Dark overlay offer section with three-column layout
  Given the page loads
  Then a section with a dark overlay (#000 at 0.8 opacity) over a background image appears
  And the left column displays the heading "Main Application Features" in white
  And the center column shows a device/screen image
  And the right column has a sub-heading and descriptive paragraph in white text

Scenario: Offer section responsive
  Given the viewport width is below 992px
  Then the columns stack vertically with centered text
```

### Feature: About Bottom Section

```gherkin
Scenario: Split about-bottom with text and image (reversed)
  Given the page loads
  Then a section displays with the text half on the left and image on the right
  And the left side contains an icon, heading "Powerful Performance", paragraph, and a "Learn More" pill button
  And the right side shows an image with a gradient fade-to-background overlay

Scenario: About bottom responsive
  Given the viewport width is below 992px
  Then the text stacks above the image
```

### Feature: Process / Services Grid

```gherkin
Scenario: 3x3 grid of process cards
  Given the page loads
  Then a white-background section displays a 3-column, 3-row grid of 9 process cards
  And each card has a colored icon (red-pink #f5204b), a heading, and a paragraph
  And the icon is a line-style icon (eye, cog, music-note, magnifier, laptop, screen, printer, magic-wand, camera-video)

Scenario: Process grid responsive
  Given the viewport width is below 768px
  Then the grid collapses to a single-column list
```

### Feature: Newsletter Section

```gherkin
Scenario: Dark newsletter subscription section
  Given the page loads
  Then a black-background section appears with white text
  And a centered heading reads "Subscribe for our Newsletter"
  And a sub-text reads "We won't send any kind of spam"
  And an email input field with placeholder "Email address" is displayed
  And a "Get Started" pill button is positioned next to the input

Scenario: Newsletter form interaction
  Given the user types a valid email into the input
  When they click "Get Started"
  Then the form submits (or shows validation feedback)
```

### Feature: Footer

```gherkin
Scenario: Four-column footer with link lists
  Given the page loads
  Then a light blue-gray (#f9f9ff) footer section appears
  And four columns display: "Top Products", "Navigation", "Compare", "About"
  And each column (except "About") contains a list of 3-4 links
  And the "About" column contains a short paragraph

Scenario: Footer bottom bar
  Given the page loads
  Then a white bottom bar displays copyright text
  And social media icons (Facebook, Twitter, Dribbble, Behance) appear on the right
  And footer links use pink color (#f67590)
  And a "Component Dock" link is included in the footer
```

## Verification Checklist

- [ ] Header: logo + nav links + mobile hamburger toggle
- [ ] Hero: gradient overlay (#f76268→#fce08a), background image, centered content, pill CTA button
- [ ] About Top: split layout, image with fade overlay, two feature cards with icons
- [ ] Features: 3-column layout, two text + one image column
- [ ] Offer: dark overlay background, 3-column layout (heading, image, description)
- [ ] About Bottom: reversed split (text left, image right), "Learn More" CTA
- [ ] Process: 3×3 grid of icon cards, red-pink icons
- [ ] Newsletter: black background, email input + "Get Started" button
- [ ] Footer: 4-column links, bottom bar with copyright + social icons + Component Dock link
- [ ] Responsive: all sections stack correctly on mobile (<768px) and tablet (<992px)
- [ ] Typography: Poppins font (300/500/600 weights)
- [ ] Buttons: pill shape (border-radius 20px), transparent bg, white border, gradient hover
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Package name: @free-react-templates/typecraft
- [ ] CNAME: typecraft.free.componentdock.com
