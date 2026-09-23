# Template: ArtWave (Creative Agency)

## Purpose

Recreation of the ColorLib "Bobsled" creative agency template as a React 19 +
Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** [ColorLib Bobsled](https://colorlib.com/wp/template/bobsled/)
- **Preview:** https://preview.colorlib.com/theme/bobsled/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bobsled-creative-website-template.jpg
- **New name:** `artwave` (apps/artwave, @free-react-templates/artwave)
- **Stack:** React 19, Vite (latest), Tailwind CSS 4, TypeScript strict

## Design Tokens

Extracted from the live preview CSS (`css/main.css`) on 2026-09-23:

### Colors

| Token              | Value                   | Usage                                      |
| ------------------ | ----------------------- | ------------------------------------------ |
| Brand gradient     | `#3e69fe` → `#4cd4e3`  | Hero banner bg, featured-area bg, story-area bg, primary-btn overlay, contact-form-area bg |
| Primary (blue)     | `#3e69fe`              | Primary button solid, icon gradient start  |
| Accent (cyan)      | `#4cd4e3`              | Icon gradient end, success button          |
| Heading text        | `#222222`              | All headings (h1–h6)                       |
| Body text           | `#777777`              | Body copy, links default                   |
| Light bg            | `#f9f9ff`              | Subscription area, default button, work-icon-box bg |
| White               | `#fff`                 | Remarkable-area bg, card text on dark sections |
| Border subtle       | `#eee`                 | Remarkable-area button border              |

### Typography

| Property       | Value                       |
| -------------- | --------------------------- |
| Font family    | `"Poppins", sans-serif`     |
| Font weights   | 300 (body), 500 (headings), 600 (sub-headings, h1) |
| Body font-size | 14px                        |
| Line height    | 1.5em                       |
| h1             | 36px                        |
| h2             | 30px                        |
| h3             | 24px                        |
| h4             | 18px                        |

### Buttons

| Element        | Styles                                                           |
| -------------- | ---------------------------------------------------------------- |
| `.primary-btn` | `border-radius: 20px`, `border: 1px solid #fff`, transparent bg, gradient overlay pseudo-element on hover, inline-flex with arrow icon |
| `.primary-btn span` | white text, z-index above gradient overlay                 |
| Hover state    | border becomes transparent, gradient overlay opacity: 1         |

### Section Backgrounds

| Section               | Background                                        |
| --------------------- | ------------------------------------------------- |
| `.hero-area`          | Gradient `#3e69fe → #4cd4e3` (linear, 0deg)      |
| `.working-process`    | White (`#fff`)                                    |
| `.featured-area`      | Gradient `#3e69fe → #4cd4e3`                      |
| `.remarkable-area`    | White (`#fff`)                                    |
| `.story-area`         | Gradient `#3e69fe → #4cd4e3`                      |
| `.subscription-area`  | Light (`#f9f9ff`)                                 |
| `.contact-form-area`  | Gradient `#3e69fe → #4cd4e3`                      |
| `.footer-widget-area` | Transparent (inherits body)                       |

### Other

- Border radius on `.genric-btn.radius`: 3px
- Border radius on `.genric-btn.circle`: 20px (same as primary-btn)
- Work-process icon boxes: `border-radius: 8.5px`, bg `#f9f9ff`
- Feature thumbnails: background-image with rounded corners
- Remarkable works: alternating left/right image+text rows, no gutters

## Section Structure (from live DOM)

1. **Navbar** — Logo left, nav links (Home, Generic, Elements) right, hamburger menu
2. **Hero / Banner** — Full-width gradient background, h1 headline + paragraph + CTA button ("Get Started" with arrow icon), decorative diagonal element via `:after`
3. **Working Process** — Centered section title, 4-step horizontal process (Researching → Wireframing → Prototyping → Final Design) with icon boxes + arrow images between steps
4. **Featured Area** — Dark gradient background, centered section title ("Our Exclusive Features"), 3 equal-width cards each with image thumbnail, title, description, "Read More" button
5. **Remarkable Works** — White background, centered section title ("Remarkable Works"), 3 alternating rows: image left + text right, then text left + image right, then image left + text right; each with heading, description, "View Project" button
6. **Story Area** — Gradient background, text block with uppercase subheading ("From the part of beginning"), paragraph, "Get Started" CTA button
7. **Subscription / Newsletter** — Light background, left-aligned section title + subtitle, right-aligned email input + "Get Started" button
8. **Contact Form** — Dark gradient background, centered section title ("Keep in Touch"), 2-column form (name + email), full-width textarea, "Send Message" button aligned right
9. **Footer Widget** — 3-column layout (Address, Email, Phone), each with title + content
10. **Footer** — Logo, copyright text, social media icons (Facebook, Twitter, Dribbble, Behance)

## Gherkin Requirements

### Scenario: Hero banner renders correctly
```gherkin
Given the user visits the ArtWave homepage
When the hero section loads
Then a gradient background (#3e69fe → #4cd4e3) fills the banner area
And the banner height is approximately 540px
And an h1 headline is displayed in white, uppercase, 30px, weight 600
And a paragraph of supporting text appears below in white
And a "Get Started" button with arrow icon is visible
And the button has border-radius 20px and white border
```

### Scenario: Working process section displays four steps
```gherkin
Given the user scrolls to the working process section
When the section renders
Then a centered heading "Our Working Process" is displayed
And four steps are shown horizontally: Researching, Wireframing, Prototyping, Final Design
And each step has an icon in a rounded box (border-radius 8.5px, bg #f9f9ff)
And arrow images separate consecutive steps
```

### Scenario: Featured area shows three feature cards
```gherkin
Given the user scrolls to the featured area
When the section renders
Then the background is a gradient (#3e69fe → #4cd4e3)
And the section title "Our Exclusive Features" is centered in white
And three equal-width cards are displayed in a row
And each card has an image thumbnail at the top
And each card has a white title, white description, and "Read More" button
And the button text uses a gradient clip (white-to-white)
```

### Scenario: Remarkable works shows alternating layout
```gherkin
Given the user scrolls to the remarkable works section
When the section renders
Then a centered heading "Remarkable Works" is displayed on white background
And three project rows are shown
And row 1 has image on the left (col-lg-7) and text on the right (col-lg-5)
And row 2 has text on the left (col-lg-7) and image on the right (col-lg-5)
And row 3 has image on the left (col-lg-7) and text on the right (col-lg-5)
And each row has a heading, description paragraph, and "View Project" button
```

### Scenario: Story area displays with gradient background
```gherkin
Given the user scrolls to the story area
When the section renders
Then the background is a gradient (#3e69fe → #4cd4e3)
And an uppercase subheading "From the part of beginning" is shown
And a paragraph of text appears below
And a "Get Started" button with arrow icon is visible
```

### Scenario: Subscription section has email form
```gherkin
Given the user scrolls to the subscription section
When the section renders
Then the background is light (#f9f9ff)
And a section title "Subscribe for our Newsletter" is displayed on the left
And a subtitle text appears below the title
And an email input field is on the right
And a "Get Started" button is next to the input
```

### Scenario: Contact form collects user input
```gherkin
Given the user scrolls to the contact form section
When the section renders
Then the background is a gradient (#3e69fe → #4cd4e3)
And a centered heading "Keep in Touch" is displayed in white
And a name input and email input are in a row (col-lg-5 each)
And a full-width textarea for message is below
And a "Send Message" button is right-aligned
And all input placeholders are white text
```

### Scenario: Footer widget shows contact information
```gherkin
Given the user scrolls to the footer widget area
When the section renders
Then three columns are displayed: Address, Email, Phone
And each column has a title and content
And a copyright bar with logo, text, and social icons is at the bottom
And social icons include Facebook, Twitter, Dribbble, Behance
```

### Scenario: Navigation is responsive
```gherkin
Given the user views the navbar
When the viewport is desktop (≥992px)
Then the nav links (Home, Generic, Elements) are visible inline
And a hamburger menu icon is also visible
When the viewport is mobile (<992px)
Then the nav links are hidden
And the hamburger menu icon is visible for toggling
```

### Scenario: Color consistency across all gradient sections
```gherkin
Given any section with a gradient background
When inspected
Then the gradient is linear from #3e69fe (blue) to #4cd4e3 (cyan)
And the gradient direction is 0deg (bottom to top)
```

## Verification Checklist

- [ ] All sections from the original are present in correct order
- [ ] Brand gradient (#3e69fe → #4cd4e3) used consistently on hero, featured, story, contact sections
- [ ] Poppins font loaded via Google Fonts (weights 300, 500, 600)
- [ ] Primary button has border-radius 20px, white border, gradient overlay on hover
- [ ] Working process shows 4 steps with icons and arrows
- [ ] Featured area has 3 cards with image, title, description, button
- [ ] Remarkable works has 3 alternating image+text rows
- [ ] Subscription section has email input + button on light background
- [ ] Contact form has name, email, message fields + send button
- [ ] Footer has 3-column widget area + copyright bar with social icons
- [ ] Footer links to https://www.componentdock.com/ (Component Dock)
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] Responsive: hamburger nav on mobile, stacked columns
- [ ] Tests pass with 100% coverage
- [ ] Build succeeds without errors
