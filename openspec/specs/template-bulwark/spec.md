# Template: Bulwark (Security / IT Services)

## Purpose

Bulwark is a single-page security/IT-services landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Security" free template (source:
https://colorlib.com/wp/template/security/), built under a DIFFERENT name
(**Bulwark**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap 4 + jQuery template with a full-width hero banner
(dark overlay on background image), three service cards, six feature items
with icons, a stats/facts counter bar, a masonry photo gallery, four blog
cards, and a dark footer with newsletter + social links. Font: Poppins
(Google Fonts). Brand color: golden yellow `#fab700`.

## Source mapping

- **ColorLib item:** "Security" (TEMPLATES.md line 1161).
- **Source URL:** https://colorlib.com/wp/template/security/
- **Preview URL:** https://preview.colorlib.com/theme/security/ (reachable,
  HTTP 200).
- **Preview CSS:** `css/main.css` (Bootstrap-based, Poppins font, brand color
  `#fab700`). Additional: `css/bootstrap.css`, `css/linearicons.css`,
  `css/font-awesome.min.css`, `css/animate.min.css`, `css/owl.carousel.css`.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/security-free-template.jpg

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|---|---|---|
| Brand color | `#fab700` (golden yellow) | Primary button bg, facts area bg, hover states, selection highlight, blockquote border |
| Heading text | `#222222` | All h1–h6 |
| Body text | `#777777` | Body paragraphs, secondary text |
| Section bg (alt) | `#f9f9ff` (very light blue-gray) | Feature area, blog area, service cards, blockquote, input fields |
| Card bg | `#fff` | Feature cards, general cards |
| Footer bg | `#04091e` (dark navy) | Footer area |
| Overlay | `rgba(0, 0, 0, 0.7)` | Banner hero dark overlay |
| Font family | `"Poppins", sans-serif` | Global (weights 300–700) |
| Font size base | 14px | Body |
| Line height | 1.625em | Body |
| Section gap | 120px vertical padding | `.section-gap` |
| Primary button | bg `#fab700`, white text, uppercase, no border-radius (square), transparent bg + `#fab700` border on hover | CTA buttons |
| Feature card hover | box-shadow `rgba(157,157,157,0.5)` + bg `#fab700` | Feature items |
| Blog date badge | bg `#000`, white text, 115px width | Blog post dates |
| Blog hover | image `scale(1.1)`, title color `#fab700` | Blog cards |

## Section structure (from live preview DOM)

1. **Header** — Two-tier: top bar (social icons left, phone + register/login right) + nav bar (logo left, menu links right: Home, About Us, Service, Team, Price, Blog, Contact, Pages dropdown)
2. **Banner/Hero** — Full-width with background image + dark overlay, left-aligned content: subtitle ("Openning on 21st February, 2018"), heading ("Exhibition on Modern Era"), paragraph, "Get Started" CTA button
3. **Service Area** — Centered title ("Our Offered Services") + subtitle + 3-column service cards (image thumb + title + description), hover turns card `#fab700`
4. **Feature Area** — Light `#f9f9ff` background, centered title ("Some Features that Made us Unique") + subtitle + 6 feature items (icon + title + description) in 3×2 grid, hover adds shadow + yellow bg
5. **Facts/Stats** — Full-width `#fab700` background, 5 counter stats (Projects Completed, Happy Clients, Total Tasks, Cups of Coffee, In House Professionals)
6. **Gallery** — Centered title ("Latest From Our Gallery") + 7 images in masonry layout (2 large + 3 medium + 2 large)
7. **Blog** — Light `#f9f9ff` background, centered title ("Latest From Our Blog") + 4 blog cards (image + date badge + title + excerpt + likes/comments row)
8. **Footer** — Dark navy `#04091e` background, 3 columns: About Us (text + copyright), Newsletter (email input + submit), Follow Us (social icons)

## Gherkin requirements

### Feature: Header Navigation

```gherkin
Scenario: Top bar displays social icons and contact info
  Given the page loads
  Then the top bar shows social media icons (Facebook, Twitter, Dribbble, Behance)
  And a phone number link is displayed
  And a "Register / Login" link is displayed

Scenario: Navigation menu shows all links
  Given the page loads
  Then the nav bar displays a logo on the left
  And menu items: Home, About, Service, Team, Price, Blog, Contact
  And a "Pages" dropdown with Blog Single and Elements sub-items
```

### Feature: Banner / Hero Section

```gherkin
Scenario: Hero displays headline and CTA
  Given the hero section is visible
  Then a subtitle text is shown above the heading
  And a main heading text is displayed
  And a paragraph description is shown
  And a "Get Started" primary button is displayed
  And the background has a dark overlay (rgba(0,0,0,0.7))

Scenario: Hero is full-width with background image
  Given the hero section is visible
  Then it spans the full viewport width
  And a background image is displayed behind the overlay
```

### Feature: Service Section

```gherkin
Scenario: Service section shows three cards
  Given the service section is visible
  Then a section title "Our Offered Services" is displayed
  And 3 service cards are shown in a row
  And each card has an image, a title, and a description

Scenario: Service card hover effect
  Given a service card is hovered
  Then the card background turns golden yellow (#fab700)
  And the text color changes to dark (#222)
```

### Feature: Feature Section

```gherkin
Scenario: Feature section shows six items on light background
  Given the feature section is visible
  Then the section background is light blue-gray (#f9f9ff)
  And a section title is displayed
  And 6 feature items are shown in a 3×2 grid
  And each item has an icon, a title, and a description

Scenario: Feature item hover effect
  Given a feature item is hovered
  Then a box-shadow appears
  And the background turns golden yellow (#fab700)
  And the text color changes to dark (#222)
```

### Feature: Facts / Stats Section

```gherkin
Scenario: Stats bar shows five counters on yellow background
  Given the facts section is visible
  Then the background is golden yellow (#fab700)
  And 5 stat items are displayed in a row
  And each stat shows a large number and a label
```

### Feature: Gallery Section

```gherkin
Scenario: Gallery shows images in masonry layout
  Given the gallery section is visible
  Then a section title "Latest From Our Gallery" is displayed
  And 7 gallery images are shown in a masonry grid
  And images have varied sizes (large and medium)
```

### Feature: Blog Section

```gherkin
Scenario: Blog section shows four cards on light background
  Given the blog section is visible
  Then the section background is light blue-gray (#f9f9ff)
  And a section title "Latest From Our Blog" is displayed
  And 4 blog cards are shown in a row
  And each card has an image, a date badge, a title, an excerpt, and a likes/comments row

Scenario: Blog card hover effect
  Given a blog card is hovered
  Then the image scales up slightly (1.1x)
  And the title color changes to golden yellow (#fab700)
```

### Feature: Footer

```gherkin
Scenario: Footer has three columns on dark background
  Given the footer is visible
  Then the background is dark navy (#04091e)
  And an "About Us" column shows text and copyright
  And a "Newsletter" column shows an email input and submit button
  And a "Follow Us" column shows social media icons

Scenario: Footer links to Component Dock
  Given the footer is rendered
  Then a link to https://www.componentdock.com/ is present
  And the link text references "Component Dock"
```

## Verification checklist

- [ ] Header: two-tier layout (top bar + nav), social icons, phone, register/login, logo, full menu with dropdown
- [ ] Hero: full-width, background image with dark overlay, subtitle, heading, paragraph, "Get Started" CTA button
- [ ] Services: centered title + 3 service cards (image + title + description), hover yellow effect
- [ ] Features: light bg, centered title, 6 items in 3×2 grid (icon + title + desc), hover shadow+yellow
- [ ] Facts: yellow bg, 5 counter stats in a row
- [ ] Gallery: centered title, 7 images masonry layout
- [ ] Blog: light bg, centered title, 4 blog cards (image + date + title + excerpt + meta), hover effects
- [ ] Footer: dark navy bg, 3 columns (About + Newsletter + Social), Component Dock link
- [ ] Brand color #fab700 used consistently for buttons, hovers, facts bg, accents
- [ ] Font: Poppins loaded via Google Fonts
- [ ] All placeholder images use picsum.photos/seed/bulwark-<n>
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
