# Template: Credium (Finance / Loan Company)

## Purpose

Recreation of [ColorLib Credit](https://colorlib.com/wp/template/credit/) — a loan and credit company HTML template, converted to React 19 + Vite + Tailwind CSS 4 + TypeScript.

Preview URL: https://preview.colorlib.com/theme/credit/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/credit-free-template.jpg

Stack: Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict) · lucide-react for icons.

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/credit/style.css`:

| Token | Value | Usage |
|-------|-------|-------|
| Brand primary | `#ffbb38` (gold/amber) | Section heading underlines, tooltip bg, accents, slider indicators |
| Brand secondary | `#003679` (navy blue) | Navbar bg, hero overlay, CTA section bg, footer bg, links |
| Text dark | `#212121` | Body text |
| Text muted | `#838383` | Subtext, metadata |
| Light bg | `#f1f7f9` | `.bg-gray` sections (miscellaneous area) |
| White | `#ffffff` | Card/slide backgrounds, CTA text on dark |
| Font heading | `Montserrat` (Google Fonts) | Headings, nav links, button text |
| Font body | `Open Sans` (Google Fonts) | Paragraphs, small text |
| Button radius | `5px` (standard) / `30px` (pill) | CTA buttons rounded-pill, form buttons standard |
| Section padding | `100px` vertical | Consistent section spacing |
| Card radius | `5px` | Feature cards, news cards |

## Gherkin Requirements

### Header

```gherkin
Scenario: Top header displays contact info
  Given the page loads
  Then the top header shows an address, email, and placeholder icon
  And the top header has a light gray background (#f2f4f6)

Scenario: Navbar is sticky on scroll
  Given the user scrolls down
  Then the navbar sticks to the top of the viewport
  And the navbar displays the logo and navigation links
  And navigation links include Home, About Us, Services, Blog, Contact
```

### Hero Slider

```gherkin
Scenario: Hero section shows a full-width image slider
  Given the page loads
  Then the hero section displays a full-width background image slider
  And each slide has a dark overlay (#000000 with opacity 0.61)
  And each slide shows a headline ("2 years interest")
  And each slide shows descriptive paragraph text
  And slider indicators (circle dots) are visible at the bottom
  And indicators use brand gold (#ffbb38) for active state

Scenario: Hero slider auto-plays between slides
  Given the hero slider is displayed
  When no user interaction occurs
  Then the slider transitions between slides automatically
```

### Features Section

```gherkin
Scenario: Features section displays four loan highlights
  Given the user scrolls to the features section
  Then four feature items are displayed in a row
  And the section heading reads "Our Loans" with a gold underline
  And subheading reads "Take look at our"
  And features include: "We take care of you", "No documents needed", "Fast & easy loans"
  And each feature item has a background image thumbnail

Scenario: Feature items animate on scroll
  Given the user scrolls to the features section
  Then each feature item fades in with a staggered delay
```

### CTA 1 (Stats / Statement)

```gherkin
Scenario: CTA section displays on dark navy background
  Given the user scrolls past the features
  Then a dark navy (#003679) section is displayed
  And the heading reads "Helping small businesses like yours"
  And subheading reads "Bold design and beyond"
  And descriptive paragraph text is shown
  And there are three stats/counters displayed
  And a "Read More" button is visible

Scenario: CTA section has white text on dark background
  Given the CTA section is visible
  Then all text in the section is white
  And the gold accent color is used for emphasis
```

### CTA 2 (Services Summary)

```gherkin
Scenario: Second CTA displays service summary
  Given the user scrolls to the second CTA
  Then a light background section is shown
  And a heading reads "Our services"
  And the text reads "Are you in need for a loan? Get in touch with us."
  And a "Read More" link or button is visible
```

### Services Section

```gherkin
Scenario: Services section displays six service cards
  Given the user scrolls to the services section
  Then six service items are displayed in a grid
  And each service has a title and description
  And services include: "All the loans", "Easy and fast answer", "No additional papers", "Secure financial services", "Good investments", "Accumulation goals"
  And each service item animates in on scroll

Scenario: Service icons use circular brand styling
  Given the services section is visible
  Then each service icon container is circular
  And uses brand navy (#003679) as icon background
```

### Miscellaneous Area (Contact + News)

```gherkin
Scenario: Miscellaneous section displays on light gray background
  Given the user scrolls to the miscellaneous section
  Then the background is light gray (#f1f7f9)
  And three columns are displayed side by side

Scenario: Ad/CTA column is present
  Given the miscellaneous section is visible
  Then the left column contains a promotional area or CTA

Scenario: Contact form column is present
  Given the miscellaneous section is visible
  Then the center column has heading "Get in touch"
  And a contact form is displayed with name, email, subject, message fields
  And a submit button is present

Scenario: Latest news column shows recent posts
  Given the miscellaneous section is visible
  Then the right column has heading "The news"
  And three news items are listed
  And each news item shows a date, title, and author
```

### Newsletter Section

```gherkin
Scenario: Newsletter section has a parallax background image
  Given the user scrolls to the newsletter section
  Then a full-width background image is displayed with parallax effect
  And the heading reads "Subscribe to our newsletter"
  And an email input field is shown
  And a "Subscribe" button is present
  And text overlay reads descriptive paragraph

Scenario: Newsletter form is functional
  Given the newsletter section is visible
  When the user enters an email and clicks Subscribe
  Then the form accepts the input
```

### Footer

```gherkin
Scenario: Footer has four columns of links
  Given the user scrolls to the footer
  Then four columns are displayed
  And column headings are: "About Us", "Solutions", "Our Loans", "Latest News"
  And each column contains a list of navigation links

Scenario: Latest News column shows blog post titles
  Given the footer is visible
  Then the "Latest News" column shows three blog post titles

Scenario: Copyright bar is displayed at the bottom
  Given the footer is visible
  Then a copyright area is shown at the very bottom
  And it includes the site name and a link to Component Dock
```

## Verification Checklist

- [ ] Header: top contact bar + sticky navbar with logo and nav links
- [ ] Hero: full-width image slider with dark overlay, headlines, indicators
- [ ] Features: 4-column layout with image thumbnails, heading with gold underline
- [ ] CTA 1: dark navy bg, stats/counters, white text, "Read More" button
- [ ] CTA 2: light bg, service summary text, "Read More" link
- [ ] Services: 6 service cards with icons in circular containers
- [ ] Miscellaneous: 3-column layout (ad + contact form + latest news) on gray bg
- [ ] Newsletter: parallax bg image, email input, subscribe button
- [ ] Footer: 4-column link lists + copyright bar with Component Dock link
- [ ] Design tokens match: #ffbb38 primary, #003679 secondary, Montserrat + Open Sans fonts
- [ ] All sections animate on scroll (fade-in)
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Placeholder images via picsum.photos/seed/credium-<n>
- [ ] Footer links to https://www.componentdock.com/
