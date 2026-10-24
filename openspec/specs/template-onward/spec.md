# Template: Onward (Business / Fullscreen)
<!-- prep-status: shipped-as=pyxis -->
> **SHIPPED-UNDER** — the ColorLib `ozberk` design this prep describes already
> ships as `apps/pyxis` (<https://pyxis.free.componentdock.com>).
> Do not scaffold `apps/onward`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-pyxis/spec.md`.

## Purpose

Recreation of ColorLib **Ozberk** — a fullscreen business website template with a dark hero banner, yellow accent palette, parallax video section, testimonials, and a services grid.

- **Source:** https://colorlib.com/wp/template/ozberk/
- **Preview:** https://preview.colorlib.com/theme/ozberk/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ozberk-free-fullscreen-business-website-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** `onward` (apps/onward, @free-react-templates/onward)

## Design Tokens

| Token | Value | Notes |
|---|---|---|
| Font family | `"Poppins", sans-serif` | Google Fonts import |
| Primary brand | `#f7c73c` | Golden yellow — buttons, accents, footer widget headings |
| Brand dark | `#edbf3a` | Darker gold — hover states, footer link hover |
| Accent bg | `#fdd050` | Bright yellow — feature area, service area backgrounds |
| Text primary | `#222222` | Headings, service icons |
| Text body | `#555` | Feature descriptions |
| Text muted | `#777777` | Generic nav text |
| Off-white bg | `#f9f9ff` | Default button bg, page sections |
| White | `#fff` | Contact area, quote area, button hover |
| Dark overlay | `rgba(0,0,0,0.8)` | Banner and video section overlays |
| Button primary | bg `#f7c73c`, text `#000`, border-radius `20px` (circle) | Arrow variant has no radius |
| Button default | bg `#f9f9ff`, text `#222`, border `transparent` | Hover: border `#f9f9ff`, bg `#fff` |
| Footer bg | `#222222` | Dark footer |
| Footer widget heading | `#edbf3a` | Gold |
| Footer link hover | `#edbf3a` | Gold |
| Section padding | `100px 0` (section-gap) | Inner sections: 60–80px |

## Section Structure (order from preview)

1. **Navbar** — Transparent over banner, white text, hamburger menu on mobile
2. **Banner/Hero** — Fullscreen, dark bg image overlay (rgba(0,0,0,0.8)), centered uppercase heading "Effective Sleek and Clean Design for User Interface", golden circle "Get Started" CTA with arrow icon
3. **Team Force** — Split 2-col: left = team image, right = heading "Actual Team Force" + paragraph + "View More" golden circle button
4. **Feature Area** — Yellow bg (#fdd050), 2-col grid of 6 features, each with linear icon + uppercase title + description paragraph. Features: Responsive Layout, Light & Dark Color Schemes, Parallax Support, Retina Ready Graphics, HTML5 Video, Powerful Performance
5. **Video/Parallax** — Dark bg image overlay, centered play button, heading "Being unique is the preference now-a-days", subtitle "Youtube video will appear in popover"
6. **Quote/Testimonial** — White bg, left = large counter number (5962) + "Project Completed", right = carousel of testimonial quotes with author name
7. **Service Area** — Yellow bg (#fdd050), split: left = image with overlay, right = 5 service items in 2×3 grid with icons: Responsive Framework, Geniusly Transformable, Powerfully Customizable, Industrial Support, Extensively Extendable
8. **Contact Area** — White bg, 4-col layout: Visit Our Office (address), Let's Call Us (phones), Let's Email Us (emails), Customer Support (support emails)
9. **Footer** — Dark bg (#222), newsletter signup form (email input + "Get Started" button), 4-col link sections (Top Product, Support Technology, Download, Instagram Feed grid), footer bottom with copyright + social icons (Facebook, Twitter, Dribbble, Behance)

## Requirements

### Feature: Banner / Hero Section

#### Scenario: Banner displays fullscreen with dark overlay

- **GIVEN** the user visits the Onward homepage
- **THEN** a fullscreen banner with a dark semi-transparent overlay is visible
- **AND** the banner heading reads "Effective Sleek and Clean Design for User Interface" in uppercase white text
- **AND** a golden "Get Started" circle button with an arrow icon is displayed

#### Scenario: Banner is responsive

- **GIVEN** the user resizes the viewport to mobile width
- **THEN** the banner content remains centered and readable

### Feature: Navbar

#### Scenario: Navbar renders over the banner

- **GIVEN** the user is on the homepage
- **THEN** the navbar is positioned absolutely over the banner
- **AND** the nav links are white text on transparent background

#### Scenario: Navbar shows hamburger on mobile

- **GIVEN** the user resizes to mobile viewport
- **THEN** a hamburger menu icon is displayed
- **AND** clicking it toggles the mobile navigation menu

### Feature: Team Force Section

#### Scenario: Team section displays image and text side by side

- **GIVEN** the user scrolls to the team section
- **THEN** a team image is shown on the left
- **AND** a heading "Actual Team Force" appears on the right
- **AND** a descriptive paragraph is displayed below the heading
- **AND** a golden "View More" circle button with arrow is shown

### Feature: Feature Area

#### Scenario: Features display in a 2-column grid on yellow background

- **GIVEN** the user scrolls to the feature area
- **THEN** the section has a bright yellow background
- **AND** 6 feature items are displayed in a 2-column layout
- **AND** each feature has a linear icon, an uppercase title, and a description

#### Scenario: Feature items are responsive

- **GIVEN** the user resizes to mobile viewport
- **THEN** the features stack into a single column

### Feature: Video / Parallax Section

#### Scenario: Video section shows parallax background with play button

- **GIVEN** the user scrolls to the video section
- **THEN** a dark background image with overlay is displayed
- **AND** a play button is centered
- **AND** a heading "Being unique is the preference now-a-days" is shown
- **AND** a subtitle "Youtube video will appear in popover" is below it

### Feature: Quote / Testimonial Section

#### Scenario: Testimonials display with counter and carousel

- **GIVEN** the user scrolls to the quote area
- **THEN** a large counter number "5962" is shown on the left
- **AND** "Project Completed" text is below the counter
- **AND** a testimonial quote with author name is shown on the right

#### Scenario: Testimonials carousel cycles through items

- **GIVEN** the user views the quote section
- **THEN** the testimonial text cycles through multiple quotes automatically

### Feature: Service Area

#### Scenario: Service area shows image and service grid

- **GIVEN** the user scrolls to the service area
- **THEN** a background image with dark overlay is on the left
- **AND** 5 service items with icons are displayed on the right
- **AND** the services are: Responsive Framework, Geniusly Transformable, Powerfully Customizable, Industrial Support, Extensively Extendable

#### Scenario: Service area has yellow background

- **GIVEN** the user views the service area
- **THEN** the section background is bright yellow (#fdd050)

### Feature: Contact Area

#### Scenario: Contact area shows 4 columns of contact info

- **GIVEN** the user scrolls to the contact section
- **THEN** 4 columns are displayed: Office Address, Phone Numbers, Email Addresses, Customer Support
- **AND** each column has a heading and descriptive text

### Feature: Footer

#### Scenario: Footer has newsletter signup and link columns

- **GIVEN** the user scrolls to the footer
- **THEN** a newsletter signup form with email input and "Get Started" button is visible
- **AND** 4 columns of footer links are displayed
- **AND** a copyright line with social media icons is at the bottom
- **AND** the footer background is dark (#222222)

#### Scenario: Footer links use gold hover color

- **GIVEN** the user hovers over a footer link
- **THEN** the link color changes to gold (#edbf3a)

## Verification checklist

- [ ] Section order matches original: Nav → Banner → Team Force → Features → Video → Quote → Service → Contact → Footer
- [ ] Font: Poppins loaded from Google Fonts
- [ ] Brand colors: #f7c73c (primary), #edbf3a (hover), #fdd050 (accent bg)
- [ ] Banner: fullscreen, dark overlay, centered heading, golden CTA button (circle, arrow)
- [ ] Team section: 2-col split, image left / text right, "View More" button
- [ ] Features: 6 items, 2-col grid, yellow bg, icon + title + desc
- [ ] Video: parallax bg, dark overlay, play button, heading + subtitle
- [ ] Quote: counter left, testimonial carousel right
- [   ] Services: image left, 5 service items right, yellow bg
- [ ] Contact: 4-col info cards, white bg
- [ ] Footer: dark bg, newsletter form, 4 link columns, copyright + social icons
- [ ] Responsive: hamburger nav on mobile, stacked sections
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] Placeholder images via picsum.photos
- [ ] All text paraphrased, no copied assets
