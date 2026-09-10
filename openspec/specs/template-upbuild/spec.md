# Template: Upbuild (Construction Company)

## Purpose

Upbuild is a single-page construction company landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Celt" website template design (see TEMPLATES.md), built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "Celt" — construction company website template with
  hero, about, stats, portfolio, services, accordion, testimonials, blog, and
  footer sections (source: https://colorlib.com/wp/template/celt/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/celt/
  (HTTP 200, full HTML fetched ~18 KB). Title tag: "Celt - HTML Construction
  Website Template". Bootstrap 4 + owl-carousel (portfolio, testimonials,
  partners) + Magnific Popup + Font Awesome; Google Fonts "Poppins" 400/700.
- **Screenshot analyzed:** `celt-construction-company-website-template.jpg`
  (TEMPLATES.md) — dark hero with "We Build Your Dream" headline over a
  construction-site background image; below: 3-column about cards with photos
  and yellow "Read more" accents; yellow stats banner; portfolio carousel
  with dark overlay hover; 6-service grid with icons; "Why Choose Us" accordion
  with half-bg image; yellow CTA bands; testimonial carousel on dark photo;
  3-column blog cards; dark footer with yellow accents. Matches the live
  preview 1:1.
- **Section order (1:1):** Top Navbar (contact strip: address, phone, email
  on dark bg) → Main Navbar (logo left, 6-link menu right with dropdowns:
  Home/About/Projects/Services/Blog/Contact) → Hero Banner (`#home
.banner-area`, dark background image with white overlay, centered "We Build
  Your Dream" + subtitle + "Learn more" button) → About 01 (3-column grid:
  photo + title + description + "Read more" link per card) → About 02
  (`.bg-grey` with half-background image left + "About Us" text right) →
  Numbers/Stats (`.bg-main` yellow band, 4 stats: 20 Years, 154 Projects,
  785 Clients, 14 Awards with Font Awesome icons) → Portfolio (`.owl-carousel`
  slider, 4 project cards with image + overlay hover links + title + category,
  "View All" button below) → Services (6 services in 3×2 grid, each with
  icon + title + description + "Read more" link) → Why Choose Us (`.bg-grey`
  with half-bg image right + accordion left: 3 panels) → CTA 1 (`.bg-main`
  yellow band, centered headline + subtitle + "Contact Us" button) → Clients
  (background image overlay → Testimonials carousel: 3 slides with quote +
  name + role → Partners carousel: 7 partner logos) → Blog (3 blog cards:
  image + date/author meta + title + excerpt + "Read more") → CTA 2
  (`.bg-main` yellow band, horizontal: headline left + "Contact Us" button
  right) → Footer (`.bg-dark` dark navy, 3-column: about+contact, quick
  links, subscribe+social) → Copyright bar.

## Design tokens extracted from the preview CSS

- **Brand primary:** #FFD626 (golden yellow) — `.bg-main` background, CTA
  section backgrounds, number section background, `#bottom-footer` copyright
  link hover.
- **Dark navy:** #001232 — `.bg-dark` background (footer), dark page
  elements.
- **Header ink:** #004 (near-black navy) — all `h1,h2,h3,h4` color, links
  default color.
- **Body text:** #64728A — body font-color, description paragraphs.
- **Grey section bg:** #F8F8F8 — `.bg-grey` (About 02, Why Choose Us).
- **Light grey border:** #EEE — various borders.
- **White:** #FFF — overlay backgrounds, button text on yellow, footer logo
  text, `.white-text`.
- **Fonts:** **"Poppins", sans-serif** — body 16px/24px letter-spacing 0.3px;
  h1 35px, h2 28px, h3 20px, h4 16px; all headings font-weight 700.
- **Buttons:**
  - `.main-button` — likely yellow (#FFD626) or dark bg with white text,
    used on portfolio "View All", CTA sections.
  - `.secondary-button` — white/outline button on hero ("Learn more").
  - `.text-link` — text link with arrow span, used throughout (About cards,
    Services, Blog). Color #004, no underline, transforms on hover.
- **Section padding:** `.md-section` 90px top/bottom; `.sm-section` 60px;
  `.xs-section` 30px.
- **Background images:** parallax with fixed attachment on hero, about 02
  half-bg, why-choose-us half-bg-right, clients/testimonials full-bg.
  Overlay pseudo-element with opacity 0.9 white on hero; half-bg overlays
  removed on desktop, shown on mobile.
- **Radii:** Minimal — mostly rectangular/square shapes. Accordion panels are
  flat with borders. Buttons have slight rounding.
- **Grid:** Bootstrap 4 grid (col-md-4 for 3-col, col-md-3 for 4-col stats,
  col-md-6 for 2-col splits).
- **Navbar:** Two-tier — top bar (contact info, smaller) + main bar (logo +
  navigation). Fixed on scroll. Dropdowns on Home, Projects, Services, Blog.
- **Accordion:** Bootstrap collapse panels with `.panel-heading` and
  `.panel-body`, first panel expanded by default (`collapse in`).

## Gherkin requirements

### Hero Banner

```gherkin
Scenario: Hero section displays construction headline
  Given the visitor is on the homepage
  When the page loads
  Then the hero section shows "We Build Your Dream" as the main heading
  And a subtitle paragraph with construction-related description is below
  And a "Learn more" secondary button is visible
  And the background is a dark construction-site image with a white overlay

Scenario: Hero background is a parallax cover image
  Given the hero section is rendered
  When the visitor scrolls
  Then the background image stays fixed (parallax effect)
```

### Top Navbar

```gherkin
Scenario: Top contact bar displays business information
  Given the visitor is on the homepage
  When the header loads
  Then a top navbar shows address, phone, and email with Font Awesome icons
```

### Main Navigation

```gherkin
Scenario: Main navigation shows all menu items
  Given the visitor is on the homepage
  When the main navbar loads
  Then the logo is on the left
  And 6 navigation links are visible: Home, About, Projects, Services, Blog, Contact
  And Home, Projects, Services, Blog have dropdown submenus

Scenario: Navigation dropdowns open on click
  Given the main navbar is visible
  When the visitor clicks "Services"
  Then a dropdown appears with: Construction, Renovation, Architecture, Painting, Decorating, Consulting
```

### About Section 01 (3-column cards)

```gherkin
Scenario: Three about feature cards are displayed
  Given the visitor scrolls to the about section
  Then 3 cards are shown in a row
  And each card has an image, title, description paragraph, and "Read more" link
  And the card titles are "Certified Experience", "The Great Teamwork", "Modern Technology"

Scenario: About cards link to detail pages
  Given the about section is displayed
  When the visitor clicks "Read more" on any card
  Then the link activates (navigates or scrolls)
```

### About Section 02 (split layout)

```gherkin
Scenario: About section 02 shows split image-text layout
  Given the visitor scrolls to about section 02
  Then a half-width background image appears on the left
  And "Subtitle", "About Us" heading, and body text appear on the right
  And the section has a grey (#F8F8F8) background
```

### Numbers/Stats Section

```gherkin
Scenario: Four statistics are displayed on yellow background
  Given the visitor scrolls to the numbers section
  Then 4 stat boxes are shown in a row
  And each box shows an icon, large number, and label
  And the stats are: "20 Year Of Experience", "154 Project Completed",
      "785 Happy Client", "14 Award Won"
  And the section background is yellow (#FFD626)
```

### Portfolio Section

```gherkin
Scenario: Portfolio carousel shows project cards
  Given the visitor scrolls to the portfolio section
  Then a carousel/slider displays project cards
  And each card has an image with overlay hover (link + search icons)
  And each card shows "Project Title" and "Category" below the image
  And a "View All" button is below the carousel

Scenario: Portfolio hover reveals overlay actions
  Given a portfolio card is visible
  When the visitor hovers over a card image
  Then a dark overlay appears with link and search icons
```

### Services Section

```gherkin
Scenario: Six services are displayed in a grid
  Given the visitor scrolls to the services section
  Then 6 service items are shown in a 3×2 grid
  And each service has an icon, title, description, and "Read more" link
  And the services are: Construction, Renovation, Architecture, Painting, Decorating, Consulting
```

### Why Choose Us (Accordion)

```gherkin
Scenario: Accordion shows three collapsible panels
  Given the visitor scrolls to the "Why Choose Us" section
  Then a heading "Why Choose Us" with subtitle and description is on the left
  And 3 accordion panels are shown: "Certified Experience", "The Great Teamwork", "Modern Technology"
  And the first panel is expanded by default
  And a half-width background image is on the right
  And the section has a grey (#F8F8F8) background

Scenario: Clicking a collapsed accordion panel expands it
  Given the "Why Choose Us" accordion is visible
  When the visitor clicks "The Great Teamwork"
  Then that panel expands to show its body text
  And the previously open panel collapses
```

### Call to Action 1

```gherkin
Scenario: CTA section 1 shows headline and button on yellow
  Given the visitor scrolls to CTA section 1
  Then a headline, subtitle, and "Contact Us" button are centered
  And the section background is yellow (#FFD626)
```

### Testimonials Section

```gherkin
Scenario: Testimonial carousel shows client quotes
  Given the visitor scrolls to the testimonials section
  Then a carousel displays testimonial cards
  And each card shows a quote paragraph, client name, and role
  And the section has a full-width background image with overlay
  And the heading reads "Happy Clients"

Scenario: Client logos carousel is displayed
  Given the testimonials section is visible
  Then a partner/client logo carousel is below the testimonials
  And multiple partner logos are displayed in a slider
```

### Blog Section

```gherkin
Scenario: Three blog post cards are displayed
  Given the visitor scrolls to the blog section
  Then 3 blog cards are shown in a row
  And each card has an image, date + author meta, title, excerpt, and "Read more" link

Scenario: Blog section heading is displayed
  Given the blog section is visible
  Then the heading reads "Latest News" with a subtitle above
```

### Call to Action 2

```gherkin
Scenario: CTA section 2 shows horizontal headline-button layout
  Given the visitor scrolls to CTA section 2
  Then a headline is on the left and a "Contact Us" button is on the right
  And the section background is yellow (#FFD626)
  And the section has compact padding (xs-section)
```

### Footer

```gherkin
Scenario: Footer has three columns on dark background
  Given the visitor scrolls to the footer
  Then the background is dark navy (#001232)
  And column 1 has: logo, description, and contact info (address, phone, email) with icons
  And column 2 has: "Quick Links" with two columns of navigation links
  And column 3 has: "Keep in touch" heading, email subscribe form, and social icons

Scenario: Copyright bar is displayed at the bottom
  Given the footer is displayed
  Then a bottom bar shows copyright text
  And the copyright links to Component Dock (https://www.componentdock.com/)
```

## Verification checklist

- [ ] Hero section: dark bg image, white overlay, "We Build Your Dream" h1,
      subtitle, "Learn more" secondary button, parallax scroll
- [ ] Top navbar: contact info strip with icons (address, phone, email)
- [ ] Main navbar: logo left, 6 links right, dropdown menus on 4 items
- [ ] About 01: 3-column cards with images, titles, descriptions, "Read more"
- [ ] About 02: split layout (half bg image left, text right), grey background
- [ ] Numbers: yellow (#FFD626) background, 4 stat boxes with icons + numbers
- [ ] Portfolio: carousel with 4 project cards, hover overlay, "View All" btn
- [ ] Services: 6 items in 3×2 grid, icons, titles, descriptions, "Read more"
- [ ] Why Choose Us: accordion (3 panels, first open), half bg image, grey bg
- [ ] CTA 1: yellow bg, centered headline + subtitle + "Contact Us" button
- [ ] Testimonials: carousel on dark bg image, 3 slides with quote + name
- [ ] Partners: logo carousel below testimonials
- [ ] Blog: 3 cards with images, meta, titles, excerpts, "Read more"
- [ ] CTA 2: yellow bg, horizontal headline + button layout
- [ ] Footer: dark navy bg (#001232), 3-column layout, subscribe form, social icons
- [ ] Copyright bar: links to Component Dock
- [ ] Fonts: Poppins 400/700 via Google Fonts
- [ ] Color palette: #FFD626 yellow, #001232 dark navy, #004 headings,
      #64728A body, #F8F8F8 grey bg
- [ ] All interactive elements have hover states
- [ ] Responsive: sections stack on mobile, navbar collapses
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Package name: @free-react-templates/upbuild
- [ ] CNAME: upbuild.free.componentdock.com
