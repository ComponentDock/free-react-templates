# Template: Traverse (Technology / Consulting Landing)

## Purpose

Recreation of ColorLib **Cruise** — a technology/consulting company landing template.
- **Source slug:** `cruise`
- **ColorLib page:** https://colorlib.com/wp/template/cruise/
- **Live preview:** https://preview.colorlib.com/theme/cruise/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/cruise-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **App folder:** `apps/traverse`
- **Package:** `@free-react-templates/traverse`

## Design Tokens

Extracted from the live preview's `css/style.css` stylesheet.

| Token | Value | Usage |
|---|---|---|
| Font family | DM Sans (300, 400, 700) | Google Fonts via `<link>` in `index.html` |
| Primary accent | `#ff5533` (red-orange) | `.text-primary` labels, `.more` link underline, testimonial quote icon |
| Section 2 dark bg | `#1c2d37` (dark teal-navy) | "Our Features" section background |
| Footer bg | `#000` (black) | Site footer background |
| Blog section bg | `#f6f5f5` (light gray) | `.bg-light` on blog/news grid section |
| Section 4 border | `1px solid #efefef` | Top border on testimonial section |
| Feature 1 card bg | `#ccc` | Image card placeholder background |
| More link style | uppercase, `0.75rem`, `letter-spacing: 0.1rem`, `border-bottom: 2px solid #ff5533` | "Learn More" / "Read More" CTAs |
| Testimonial quote icon | `2rem`, color `#ff5533` | Large open-quote icon above testimonial text |
| Post entry meta | color `#ccc` | Date text in blog cards |
| Post entry content bg | `#fff`, padding `20px` | White card below blog post images |
| Overlay | `rgba(0, 0, 0, 0.4)` (inferred) | Hero image dark overlay |

## Section Structure (top to bottom)

### 1. Navbar
Centered logo ("cruise" → "Traverse") flanked by nav links on both sides:
- **Left:** Home, Technology, Careers
- **Right:** About, Blog, Contact
- Sticky navbar, mobile hamburger menu
- Fixed position, dark/transparent background that becomes solid on scroll

### 2. Hero Cover
Full-viewport (`100vh`, min `600px`) background image with dark overlay (`:before` pseudo-element).
- Centered text: h1 "We can make it together" + paragraph lorem ipsum
- White text over dark overlay

### 3. What We Do (Features Cards)
Centered section label (`text-primary` → "What We do") + heading + paragraph.
Three equal-width columns, each containing:
- Image (fills width, `background: #ccc` placeholder)
- Content overlay with: h2 title, paragraph, "Learn More" link
- Hover/focus reveals the content (visibility + opacity transition)

### 4. Our Features (Dark Section)
Dark background (`#1c2d37`) section with centered label + heading + paragraph (white text).
Two alternating image-text blocks:
- **Block 01:** Large image (9 cols) left, numbered text (3 cols) right
- **Block 02:** Large image (9 cols) right, numbered text (3 cols) left (reversed with `order-lg-2`)
Each text block has: numbered caption (`01.`, `02.`), h3 title, two paragraphs.

### 5. Design for the Future (Text Features)
Centered label + heading + paragraph.
2×2 grid of text-only feature blocks:
- Creative Technology
- World-class Quality
- Deep Resources
- World-class Quality
Simple h3 + paragraph per block, no images.

### 6. Testimonial
White section with top border (`1px solid #efefef`).
Centered blockquote (`testimonial-1`):
- Large quote icon (`#ff5533`, `2rem`)
- Paragraph text (`1.5rem`)
- Citation: author name (bold) — title (muted)

### 7. Blog / Latest Posts
Light gray background (`#f6f5f5`). Four equal-width columns of post cards:
- Image (full width)
- White content card below image: meta date (gray `#ccc`), h2 title, "Read More" link
- Date placeholder: "July 17, 2019" (keep realistic dates)

### 8. Footer
Black background. Three-column layout:
- **Column 1:** "About Us" heading + paragraph
- **Column 2:** "Features" heading + link list (About Us, Testimonials, Terms of Service, Privacy, Contact Us)
- **Column 3:** "Subscribe to Newsletter" heading + email input + Subscribe button; "Follow Us" heading + social icon links (Facebook, Twitter, Instagram, LinkedIn)
- Bottom row: copyright text with heart icon, "Made with ❤ by Component Dock" link

## Gherkin Requirements

### Feature: Traverse — Technology/Consulting Landing Template

#### Scenario: Navbar renders with centered logo and split navigation
  Given the user opens the Traverse template
  Then the navbar displays a centered "Traverse" logo
  And navigation links "Home", "Technology", "Careers" appear to the left of the logo
  And navigation links "About", "Blog", "Contact" appear to the right of the logo
  And the navbar is sticky on scroll

#### Scenario: Navbar mobile menu toggles
  Given the user is on a mobile viewport
  Then a hamburger menu icon is visible
  When the user clicks the hamburger icon
  Then the mobile navigation menu opens
  And all six navigation links are visible

#### Scenario: Hero section displays full-viewport cover
  Given the user opens the Traverse template
  Then the hero section fills the viewport height
  And a background image is displayed with a dark overlay
  And the heading "We can make it together" is centered in white text
  And a descriptive paragraph appears below the heading

#### Scenario: What We Do section shows three feature cards
  Given the user scrolls to the "What We do" section
  Then a label "What We do" appears in the accent color
  And a heading "The technology for the future generation" is centered
  And three feature cards are displayed in a row
  And each card contains an image, title, description, and "Learn More" link

#### Scenario: Feature card hover reveals content
  Given the user hovers over a "What We do" feature card
  Then the card content becomes fully visible with a transition

#### Scenario: Our Features dark section shows numbered blocks
  Given the user scrolls to the "Our Features" section
  Then the section has a dark background
  And the label "Our Features" and heading are displayed in white
  And two feature blocks are shown in alternating 9:3 image-text layout
  And each block has a numbered caption ("01.", "02.") and text content

#### Scenario: Design for the Future section shows four text features
  Given the user scrolls to the "Design for the Future" section
  Then a label "Design for the future" appears in the accent color
  And four text-only feature blocks are displayed in a 2×2 grid
  And each block has an h3 title and a paragraph

#### Scenario: Testimonial section displays blockquote
  Given the user scrolls to the testimonial section
  Then a large quote icon in the accent color is displayed
  And a testimonial paragraph is shown at 1.5rem font size
  And the citation shows the author name and title

#### Scenario: Blog section shows four post cards
  Given the user scrolls to the blog section
  Then the section has a light gray background
  And four post cards are displayed in a row
  And each card has an image, date, title, and "Read More" link

#### Scenario: Footer displays three-column layout
  Given the user scrolls to the footer
  Then the footer has a black background
  And an "About Us" section with heading and paragraph is visible
  And a "Features" section with link list is visible
  And a "Subscribe to Newsletter" section with email input and subscribe button is visible
  And a "Follow Us" section with social media icon links is visible
  And the copyright line includes a link to Component Dock

#### Scenario: Footer newsletter form accepts email
  Given the user enters an email in the newsletter input
  And clicks the "Subscribe" button
  Then the form does not submit to an external URL

## Verification Checklist

- [ ] All sections present in correct order: Navbar → Hero → What We Do → Our Features → Design for the Future → Testimonial → Blog → Footer
- [ ] Navbar: centered logo, split nav links, sticky behavior, mobile hamburger
- [ ] Hero: full-viewport height, background image with overlay, white centered text
- [ ] What We Do: accent label, centered heading, 3-column feature cards with hover reveal
- [ ] Our Features: dark bg `#1c2d37`, numbered 9:3 image-text blocks, alternating layout
- [ ] Design for the Future: accent label, 2×2 text feature grid
- [ ] Testimonial: blockquote with accent quote icon, 1.5rem text, author citation
- [ ] Blog: light bg, 4-column post cards with image + white content card
- [ ] Footer: black bg, 3-column layout, newsletter subscribe, social icons, Component Dock link
- [ ] Design tokens: DM Sans font, `#ff5533` accent, dark sections match original
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `npm run test:coverage` passes at 100% for `apps/traverse`
- [ ] `npm run build` succeeds for `apps/traverse`
