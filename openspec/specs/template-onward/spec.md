# Template: Onward (Business / Fullscreen)

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

## Gherkin Requirements

### Feature: Banner / Hero Section

```gherkin
Scenario: Banner displays fullscreen with dark overlay
  Given the user visits the Onward homepage
  Then a fullscreen banner with a dark semi-transparent overlay is visible
  And the banner heading reads "Effective Sleek and Clean Design for User Interface" in uppercase white text
  And a golden "Get Started" circle button with an arrow icon is displayed

Scenario: Banner is responsive
  Given the user resizes the viewport to mobile width
  Then the banner content remains centered and readable
```

### Feature: Navbar

```gherkin
Scenario: Navbar renders over the banner
  Given the user is on the homepage
  Then the navbar is positioned absolutely over the banner
  And the nav links are white text on transparent background

Scenario: Navbar shows hamburger on mobile
  Given the user resizes to mobile viewport
  Then a hamburger menu icon is displayed
  And clicking it toggles the mobile navigation menu
```

### Feature: Team Force Section

```gherkin
Scenario: Team section displays image and text side by side
  Given the user scrolls to the team section
  Then a team image is shown on the left
  And a heading "Actual Team Force" appears on the right
  And a descriptive paragraph is displayed below the heading
  And a golden "View More" circle button with arrow is shown
```

### Feature: Feature Area

```gherkin
Scenario: Features display in a 2-column grid on yellow background
  Given the user scrolls to the feature area
  Then the section has a bright yellow background
  And 6 feature items are displayed in a 2-column layout
  And each feature has a linear icon, an uppercase title, and a description

Scenario: Feature items are responsive
  Given the user resizes to mobile viewport
  Then the features stack into a single column
```

### Feature: Video / Parallax Section

```gherkin
Scenario: Video section shows parallax background with play button
  Given the user scrolls to the video section
  Then a dark background image with overlay is displayed
  And a play button is centered
  And a heading "Being unique is the preference now-a-days" is shown
  And a subtitle "Youtube video will appear in popover" is below it
```

### Feature: Quote / Testimonial Section

```gherkin
Scenario: Testimonials display with counter and carousel
  Given the user scrolls to the quote area
  Then a large counter number "5962" is shown on the left
  And "Project Completed" text is below the counter
  And a testimonial quote with author name is shown on the right

Scenario: Testimonials carousel cycles through items
  Given the user views the quote section
  Then the testimonial text cycles through multiple quotes automatically
```

### Feature: Service Area

```gherkin
Scenario: Service area shows image and service grid
  Given the user scrolls to the service area
  Then a background image with dark overlay is on the left
  And 5 service items with icons are displayed on the right
  And the services are: Responsive Framework, Geniusly Transformable, Powerfully Customizable, Industrial Support, Extensively Extendable

Scenario: Service area has yellow background
  Given the user views the service area
  Then the section background is bright yellow (#fdd050)
```

### Feature: Contact Area

```gherkin
Scenario: Contact area shows 4 columns of contact info
  Given the user scrolls to the contact section
  Then 4 columns are displayed: Office Address, Phone Numbers, Email Addresses, Customer Support
  And each column has a heading and descriptive text
```

### Feature: Footer

```gherkin
Scenario: Footer has newsletter signup and link columns
  Given the user scrolls to the footer
  Then a newsletter signup form with email input and "Get Started" button is visible
  And 4 columns of footer links are displayed
  And a copyright line with social media icons is at the bottom
  And the footer background is dark (#222222)

Scenario: Footer links use gold hover color
  Given the user hovers over a footer link
  Then the link color changes to gold (#edbf3a)
```

## Verification Checklist

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
