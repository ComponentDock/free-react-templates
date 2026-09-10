# Template: Helpdesk (Customer Support / Call Center)

## Purpose

Recreation of ColorLib **Callcenter** template.
- Source: https://colorlib.com/wp/template/callcenter/
- Preview: https://preview.colorlib.com/theme/callcenter/
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- Package: `@free-react-templates/helpdesk`
- Deploy target: `helpdesk.free.componentdock.com`

## Design tokens

Extracted from the live preview CSS (`css/main.css`):

| Token | Value | Notes |
|-------|-------|-------|
| Font family | `"Poppins", sans-serif` | Google Fonts, weights 300–700 |
| Primary brand | `#8490ff` | Blue-violet; used for nav active, links, buttons, accents |
| Secondary brand | `#62bdfc` | Sky blue; gradient partner with primary |
| Primary gradient | `linear-gradient(0deg, #62bdfc 0%, #8490ff 100%)` | Buttons, overlays, fact counters |
| Body text | `#777` | font-weight 300, font-size 14px, line-height 1.625em |
| Headings | `#222` | font-weight 600, line-height 1.2em |
| Light bg | `#f9f9ff` | Inputs, blockquotes, brand area, switches |
| Footer bg | `#222` | Dark footer, white headings, #8490ff links |
| Selection | `background: #8490ff; color: #fff` | |
| Primary button | border-radius 25px, gradient bg, white text, uppercase, padding 0 30px/60px, font-weight 500 | Hover: transparent bg with #222 border for header-btn |
| Header button | Transparent bg, 1px solid transparent border, white text; hover → #222 border/bg/text | |
| Accent colors (icons) | Green `#5ec375`, Yellow `#f2c94c` | Feature icon accents |
| Section padding | 120px 0 (`.section-gap`) | |

### Visual design notes (from screenshot analysis)

- **Aesthetic**: Minimal, modern, professional yet approachable. Watercolor brush-stroke motif in blues adds a creative "colorful world" tie-in to the brand tagline.
- **Hero**: White background with blue watercolor brush stroke spanning the width. Cutout photo of a customer service agent (left), headline + subtext + CTA button on the right side.
- **Features**: 3-column layout with playful cartoon-style illustrated icons, white background.
- **Testimonials**: Dark overlay on a background image, carousel of user cards with avatars.
- **Offered Services**: 3×2 grid of service icons on left, text description + CTA on right. White card boxes with subtle blue box-shadow.
- **Facts/Stats**: 5-column counter row with gradient text (blue → blue-violet).
- **Services**: 6 service cards in 3×2 grid over a dark photo background with overlay.
- **Info**: Split layout — left image, right text with headline + CTA.
- **About/Video**: Split layout — left headline + text, right video thumbnail with dark overlay + play button.
- **Brand logos**: 5 grayscale logos, full color on hover.
- **Contact**: Form with name, email, subject, message + send button.
- **Footer**: Dark (#222) with 3 columns (About, Contact+phone numbers, Newsletter), bottom bar with copyright + social icons.

## Gherkin requirements

### Navbar

```gherkin
Feature: Fixed navbar with logo and navigation

  Scenario: Logo displays with left blue accent border
    Given the page loads
    When I look at the header
    Then a text-based logo "Helpdesk" is visible on the left
    And it has a 4px left border in #8490ff

  Scenario: Navigation links are uppercase and reactive
    Given the page loads
    When I view the navigation menu
    Then links "Home", "Feature", "We Offer", "About", "Contact" are visible
    And each link is uppercase and 12px font
    When I hover over a link
    Then its color changes to #8490ff
    When the page scrolls down
    Then the header gains a box-shadow

  Scenario: Mobile menu toggle
    Given I am on a viewport width below 800px
    When I click the mobile hamburger icon
    Then a dark slide-in sidebar appears with nav links
    And the hamburger icon color is #8490ff
```

### Hero / Banner

```gherkin
Feature: Hero banner section

  Scenario: Hero displays with blue brush stroke and agent photo
    Given the page loads
    When I look at the hero section
    Then there is a white background with a blue watercolor brush stroke graphic
    And a subtitle "DISCOVER THE COLORFUL WORLD" is displayed in uppercase
    And a heading "Efficiency Booster" is displayed at 60px / 700 weight
    And body lorem ipsum text is shown below the heading
    And a "DISCOVER NOW" button is visible with gradient background and 25px border-radius

  Scenario: Hero CTA button hover
    Given I hover over the hero "Discover Now" button
    Then the button becomes transparent with a #222 border
    And the text color changes to #222

  Scenario: Hero responsive
    Given I am on a viewport below 768px
    When I view the hero section
    Then the heading font size reduces to 36px
    And the section height is 700px
```

### Features

```gherkin
Feature: Three-column feature highlights

  Scenario: Features display three items
    Given I scroll to the features section
    Then three feature cards are visible in a row
    And each card contains an illustrated icon, a heading, and body text
    And the headings are "Online Support", "24/7 Round the Clock", "Handling All Issues"

  Scenario: Feature cards responsive
    Given I am on a viewport below 800px
    When I view the features section
    Then each feature card stacks vertically with bottom margin
```

### Testimonials

```gherkin
Feature: Testimonial carousel

  Scenario: Testimonials section has overlay background
    Given I scroll to the testimonial section
    Then the section has a background image with a gradient overlay (#8490ff at 90% opacity)
    And the heading "Why Choose Us Your Fitness Builder" is white text

  Scenario: Testimonial cards show user info
    Given I view the testimonial carousel
    Then each card shows a user avatar image, testimonial text, user name, and title
    And the user name becomes #8490ff on hover
```

### Offered Services

```gherkin
Feature: Services offered section

  Scenario: Offered services displays icon grid and description
    Given I scroll to the offered services section
    Then a heading "Our Offered Services" is displayed in white text
    And a 3×2 grid of service icon cards is shown on the left
    And a text block with heading "Content Synchronization" is shown on the right
    And a "VIEW DETAILS" button is visible with gradient background

  Scenario: Service icon card hover
    Given I hover over a service icon card
    Then it gains a 2px solid #6a9ddc border
    And the box-shadow changes

  Scenario: Service icon card responsive
    Given I am on a viewport below 800px
    When I view the service icon grid
    Then each card stacks with bottom margin
```

### Facts / Stats

```gherkin
Feature: Statistics counter row

  Scenario: Stats display with gradient numbers
    Given I scroll to the facts section
    Then five stat items are visible in a row
    And each has a large gradient number (blue → blue-violet) and a label
    And the values are "2536 Projects Completed", "6784 Really Happy Clients", "1059 Total Tasks Completed", "2239 Cups of Coffee Taken", "435 In House Professionals"

  Scenario: Stats responsive
    Given I am on a viewport below 800px
    When I view the facts section
    Then each stat stacks vertically with bottom margin
```

### Services (Dark section)

```gherkin
Feature: Services grid on dark background

  Scenario: Services section has dark photo background
    Given I scroll to the services section
    Then the section has a dark photo background with a 70% black overlay
    And a heading "Some Awesomeness that should share" is displayed in white
    And a subtext "Who are in extremely love with eco friendly system." is shown in white

  Scenario: Service cards display with icons
    Given I view the services grid
    Then six service cards are shown in a 3×2 grid
    And each card has a Linearicons icon, a white heading, and white body text
    And the services are "Expert Technicians", "Professional Service", "Great Support", "Technical Skills", "Highly Recomended", "Positive Reviews"

  Scenario: Service card hover
    Given I hover over a service card
    Then the card gains a shadow effect
```

### Info / About Split

```gherkin
Feature: Information split layout

  Scenario: Info section displays image and text side by side
    Given I scroll to the info section
    Then a full-width image is shown on the left half
    And a text block is shown on the right half
    And the heading is "Responsible Customer Support" at large size
    And a "LEARN MORE" primary button is visible

  Scenario: About section with video
    Given I scroll to the about section
    Then the left side shows a heading "We Believe that Interior beautifies the Total Architecture"
    And a paragraph of text is displayed below
    And a "SEE DETAILS" primary button is visible
    And the right side shows a video thumbnail with a dark overlay (#8490ff at 84% opacity) and a play button
```

### Brand Logos

```gherkin
Feature: Client/brand logo row

  Scenario: Brand logos display in grayscale
    Given I scroll to the brand section
    Then five logo images are displayed in a row
    And each logo is displayed in grayscale by default
    When I hover over a logo
    Then it transitions to full color
```

### Contact Form

```gherkin
Feature: Contact form section

  Scenario: Contact form displays heading and form fields
    Given I scroll to the contact section
    Then a heading "If you need, Just drop us a line" is displayed centered
    And subtext "Who are in extremely love with eco friendly system." is shown

  Scenario: Form fields are functional
    Given I view the contact form
    Then four fields are visible: name (text), email (email), subject (text), message (textarea)
    And all fields have light gray (#f9f9ff) background
    And a "SEND MESSAGE" primary button is visible below the textarea

  Scenario: Form validates required fields
    Given I leave all fields empty
    When I click "Send Message"
    Then the browser validation prevents submission
```

### Footer

```gherkin
Feature: Dark footer with newsletter

  Scenario: Footer displays three columns
    Given I view the footer
    Then the background is #222
    And an "About Us" column with lorem text is visible
    And a "Contact Us" column with phone numbers in #8490ff is visible
    And a "Newsletter" column with email input and arrow button is visible

  Scenario: Footer bottom bar
    Given I view the footer bottom
    Then a copyright line is displayed with "Component Dock" link
    And social icons (Facebook, Twitter, Dribbble, Behance) are shown on the right
    And social icon backgrounds are #111, turning #8490ff on hover

  Scenario: Newsletter form
    Given I view the newsletter form
    Then an email input with rounded white border is displayed
    And a rounded submit button with #8490ff background is shown
```

## Verification checklist

- [ ] All sections present in correct order matching the original
- [ ] Font loaded: Poppins via Google Fonts
- [ ] Primary color #8490ff used for nav active, links, accents
- [ ] Gradient #62bdfc → #8490ff on buttons and overlay backgrounds
- [ ] Hero: brush-stroke aesthetic, agent photo placeholder, headline, CTA
- [ ] Features: 3-column with illustrated icons
- [ ] Testimonials: carousel with avatars over dark overlay
- [ ] Offered services: icon grid + text split, hover border effect
- [ ] Facts: 5 stats with gradient text
- [ ] Services: 6 cards over dark photo background with overlay
- [ ] Info/About: two split sections with images and CTAs
- [ ] Brand logos: grayscale → color on hover
- [ ] Contact form: name, email, subject, message fields + submit
- [ ] Footer: dark bg, 3 columns, newsletter, social icons, copyright links to Component Dock
- [ ] Responsive: mobile nav, stacked layouts below 768px/800px
- [ ] No ColorLib references in app code — provenance only in spec
- [ ] Footer links to https://www.componentdock.com/ branded as "Component Dock"
