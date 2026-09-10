# Template: Celerate (Tech/Consulting Landing Page)

## Purpose

Recreation of ColorLib "CellOn" — a tech/consulting company single-page template.

- **ColorLib source:** https://colorlib.com/wp/template/cellon/
- **Live preview:** https://preview.colorlib.com/theme/cellon/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/cellon-free-ligh-consulting-company-template.jpg
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Extracted from `main.css` on the live preview:

| Token                | Value                              | Notes                                             |
| -------------------- | ---------------------------------- | ------------------------------------------------- |
| Font (body)          | `'Poppins', sans-serif`            | Google Fonts, weight 300–600                      |
| Heading color        | `#222`                             | All h1–h6                                         |
| Body text color      | `#777`                             | Paragraphs, links                                 |
| Page background      | `#f6f6fc`                          | Light grayish-blue (`body { background }`)        |
| Brand accent         | `#6cbb23`                          | Vibrant green — buttons, highlights, icons, links |
| Brand light          | `#f0f8e9`                          | Feature icon background                           |
| Brand border         | `#a6d477`                          | Contact form input borders                        |
| Selection color      | `#6cbb23` bg / `#fff` text         | `::selection`                                     |
| Button primary       | `#6cbb23` bg / `#fff` text         | `.genric-btn.primary`                             |
| Button primary hover | `#fff` bg / `#6cbb23` text         | Border `#6cbb23` on hover                         |
| Button border        | `#6cbb23` text / `#6cbb23` border  | `.genric-btn.primary-border`                      |
| Button radius        | `20px` (circle class)              | `.genric-btn.circle`                              |
| Contact button       | `#fff` bg / `#6cbb23` text         | `.primary-btn.white-bg`                           |
| Overlay bg           | `rgba(108,187,35,0.85)`            | Video area, features area, contact area           |
| Feature card bg      | `#fff`                             | `.single-feature` white cards                     |
| Feature icon hover   | `#6cbb23` bg / `#fff` text         | `.feature-area .icon:hover`                       |
| Counter number       | `#6cbb23`                          | `.counter-left h2`                                |
| Footer bg            | `#fff`                             | White footer                                      |
| Footer link hover    | `#6cbb23`                          | `.footer-nav li a:hover`                          |
| Social icon hover    | `#6cbb23` bg / `#fff` icon         | `.footer-social a:hover`                          |
| Box shadow           | `0px 0px 50px 0px rgba(0,0,0,0.2)` | `.oz-body-wrap` (page wrapper)                    |
| Wrapper margin       | `50px` all sides                   | `.oz-body-wrap` (page wrapper with shadow)        |

## Visual Design (from screenshot)

The CellOn template is a bright, clean tech/consulting landing page:

- White header area with logo left, navigation right, absolutely positioned
- Banner: split layout — illustration image left, heading + CTA right on white bg
- Video area: background image with bright green overlay, play button, heading text
- About section: split layout on white — text left with heading + paragraph + CTA, image right
- Features section: background image with green overlay, 7 feature cards in a grid (3+4) with white card bg, green Linearicons icons
- Stats counter + FAQ section: left column has 4 counter items (numbers in green), right column has 3 FAQ items with headings
- Contact section: background image with green overlay, centered heading, contact form with name/email/message inputs and "Send Message" button
- Footer: white bg, 4-column grid (Top Product, Navigation, Compare, Quick About), social icons, copyright
- Overall aesthetic: bright, professional, green (#6cbb23) as dominant accent, clean white/gray tones
- Page is wrapped in a shadow box (`.oz-body-wrap`) giving a card-like appearance on the gray (#f6f6fc) background

## Section Order (from HTML structure)

1. **Header/Navbar** — Absolute positioned, logo left, nav links (Home, Generic, Elements), hamburger menu icon
2. **Banner/Hero** — Split layout: illustration image (left col-lg-6) + content (right col-lg-6) — heading "Behind Every Success There is a Cactus" with green accent spans, "Get Started" CTA button (green circle)
3. **Video Area** — Background image with green semi-transparent overlay, centered play button, heading "Being unique is the preference", subtext
4. **About Section** — Split layout: text left (heading "Brief Information About CellOn", paragraph, "View More" bordered CTA button), image right; white background
5. **Features Section** — Background image with green overlay, 7 feature cards in grid (3 col-lg-4 first row, 3 second row + 1), each card has white bg, green icon, uppercase heading, description text
6. **Stats Counter + FAQ** — Left column (col-lg-3): 4 counter items (5962 Projects Completed, 2394 New Projects, 1439 Tickets Submitted, 933 Cup of Coffee); Right column (col-lg-9): 3 FAQ items with question headings and paragraph answers
7. **Contact Area** — Background image with green overlay, centered heading "Send Us Message", form with name input, email input, textarea, "Send Message" button (white bg, green text)
8. **Footer** — White bg, 4-column grid: Top Product links, Navigation links, Compare links, Quick About text + contact info + social icons (Facebook, Twitter, Dribbble, Behance); bottom bar with copyright

## Gherkin Requirements

### Feature: Celerate Tech/Consulting Landing Page

#### Scenario: Header renders with navigation links

- GIVEN the user visits the Celerate page
- THEN the header displays the brand name "Celerate"
- AND navigation links are present: Home, About, Features, FAQ, Contact
- AND a hamburger menu icon is visible for mobile

#### Scenario: Banner/Hero displays split layout

- GIVEN the banner section is visible
- THEN an illustration image appears on the left half
- AND a heading with green accent text appears on the right half
- AND a "Get Started" CTA button with green background and circle border-radius is present
- AND the text reads "Behind Every" with "Success" accented in green

#### Scenario: Video area shows with green overlay

- GIVEN the video section is visible
- THEN a background image is displayed with a semi-transparent green overlay
- AND a play button icon is centered in the section
- AND a heading "Being unique is the preference" is displayed in white
- AND a subtext "YouTube video will appear in popover" is shown in white

#### Scenario: About section displays two-column layout

- GIVEN the about section is visible
- THEN a heading "Brief Information About" with "Celerate" accent is displayed on the left
- AND a descriptive paragraph is shown below the heading
- AND a "View More" button with green border is present
- AND an illustration image appears on the right side

#### Scenario: Features section shows grid of feature cards

- GIVEN the features section is visible
- THEN 7 feature cards are displayed in a responsive grid
- AND each card has a white background with padding
- AND each card contains a green Linearicon icon at the top
- AND each card has an uppercase heading and description paragraph
- AND the section background uses an image with green semi-transparent overlay

#### Scenario: Stats counter displays 4 metrics

- GIVEN the stats counter section is visible
- THEN 4 counter items are displayed in a left-aligned column
- AND each counter shows a large green number and a label below
- AND the metrics include: Projects Completed, New Projects, Tickets Submitted, Cup of Coffee

#### Scenario: FAQ section shows 3 questions

- GIVEN the FAQ section is visible
- THEN 3 FAQ items are displayed in the right column
- AND each FAQ item has an uppercase question heading and answer paragraph
- AND questions include: responsive templates, plugins, client usage

#### Scenario: Contact form collects user message

- GIVEN the contact section is visible
- THEN a green overlay background with centered heading "Send Us Message" is displayed
- AND a name input field is present with placeholder "Enter your name"
- AND an email input field is present with placeholder "Enter email address"
- AND a message textarea is present
- AND a "Send Message" button with white background and green text is present

#### Scenario: Footer shows four-column layout with social links

- GIVEN the footer is visible
- THEN four columns of links are displayed: Top Product, Navigation, Compare, Quick About
- AND social media icons (Facebook, Twitter, Dribbble, Behance) are present
- AND a copyright line with "Component Dock" link is shown at the bottom
- AND the footer has a white background

#### Scenario: Page wrapper has shadow card effect

- GIVEN the page is loaded
- THEN the content is wrapped in a container with a 50px margin and box shadow
- AND the outer body background is light gray (#f6f6fc)
- AND the wrapper has rounded shadow appearance

## Verification Checklist

- [ ] All 8 sections present in correct order
- [ ] Brand color #6cbb23 used consistently for accents, buttons, icons, links
- [ ] Poppins font applied to all text
- [ ] Banner: split layout with image + text, "Get Started" green circle button
- [ ] Video area: green overlay on background, play button, white text
- [ ] About: two-column, heading + paragraph + "View More" border button
- [ ] Features: 7 white cards with green icons in grid, green overlay background
- [ ] Stats: 4 counter items with green numbers in left column
- [ ] FAQ: 3 items in right column with uppercase headings
- [ ] Contact: green overlay, form with 3 fields + "Send Message" button
- [ ] Footer: 4 columns, social icons, copyright with Component Dock link
- [ ] Page shadow wrapper on gray background
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] All images use placeholder URLs (picsum.photos)
- [ ] Responsive layout works on mobile
