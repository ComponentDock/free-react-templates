# Template: Guideway (Consulting / IT Agency)

## Purpose

Recreation of ColorLib's **Consulotion** template as a modern consulting business website.

- **Source:** https://colorlib.com/wp/template/consulotion/
- **Preview:** https://preview.colorlib.com/theme/consolotion/ (404 — unreachable at prep time; design based on screenshot)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/consolution-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **Category:** IT Consultant / Marketing Agency (8-page multi-page template)

## Design tokens

| Token          | Value                      | Notes                                              |
| -------------- | -------------------------- | -------------------------------------------------- |
| Brand / accent | `#3b82f6`                  | Vibrant blue — buttons, icons, active nav states   |
| Dark           | `#0f172a`                  | Navbar background, dark overlay                    |
| Body text      | `#475569`                  | Medium grey paragraph text                         |
| Heading text   | `#0f172a`                  | Dark navy for headings                             |
| Background     | `#ffffff`                  | Main page background                               |
| Button primary | `#3b82f6`                  | Blue pill-shaped CTA buttons                       |
| Button hover   | `#2563eb`                  | Darker blue on hover                               |
| Button radius  | `9999px`                   | Fully rounded / pill shape                         |
| Card border    | `#e2e8f0`                  | Light slate border on feature cards                |
| Body font      | Inter, sans-serif          | Modern, clean sans-serif                           |
| Heading font   | Poppins, sans-serif        | Bold geometric sans-serif for headings             |

## Section structure (order)

1. **Top Utility Bar** — white background; logo "Guideway" left, email + phone contact info center, "Free Consulting" blue CTA button right.
2. **Navigation Bar** — dark navy background (#0f172a); links: Home, About, Projects, Services, Blog, Contact; search bar with magnifying glass icon on right. Active link highlighted in brand blue.
3. **Hero / Banner** — full-width background image of a professional meeting (dark gradient overlay for text readability). Sub-headline "WELCOME TO GUIDEWAY" in small white uppercase. Main heading "We Are The Best Consulting Agency" in large bold white. Blue pill CTA button "Our Services". Carousel indicators (3 dots) at bottom.
4. **Features Section** — two-column layout. Left: heading "Our Main Features", paragraph description, two feature cards (one with blue top border accent, one with light blue background). Right: team photo in a light-bordered card.
5. **About / Why Choose Us** — section describing the firm's expertise. Typically two-column: image + text with stats or bullet points.
6. **Services** — grid of service cards (3 or 4 columns) each with icon, title, and brief description.
7. **Stats / Counter** — dark background band with animated counters (projects completed, clients served, awards, team members).
8. **Testimonials** — carousel of client testimonials with avatar, name, role, star rating, and quote.
9. **CTA / Newsletter** — call-to-action banner with heading and button.
10. **Contact** — contact form (name, email, subject, message) alongside address, phone, email info.
11. **Footer** — dark background; 3-4 column layout: logo + blurb, Quick Links, Services, Contact info + social icons. Copyright bar with Component Dock link.

## Gherkin requirements

### Top Utility Bar

```gherkin
Scenario: Utility bar renders contact info and CTA
  Given the page loads
  Then the logo "Guideway" is displayed on the left
  And an email address and phone number are visible in the center
  And a "Free Consulting" button is displayed on the right

Scenario: Utility bar is responsive
  Given the viewport is mobile
  Then the utility bar stacks vertically or collapses
```

### Navigation Bar

```gherkin
Scenario: Nav links render
  Given the page loads
  Then the nav bar has a dark background
  And links "Home", "About", "Projects", "Services", "Blog", "Contact" are visible
  And a search icon is displayed on the right

Scenario: Active link is highlighted
  Given the page loads on the home page
  Then the "Home" link is styled in the brand blue color

Scenario: Mobile hamburger toggle
  Given the viewport width is less than 768px
  Then a hamburger menu icon is visible
  And clicking it toggles the mobile nav menu open/closed
```

### Hero / Banner

```gherkin
Scenario: Hero section renders
  Given the page loads
  Then a full-width background image is displayed
  And a dark gradient overlay ensures text readability
  And the sub-headline "WELCOME TO GUIDEWAY" is visible in white uppercase
  And the main heading "We Are The Best Consulting Agency" is large, bold, and white
  And a blue pill-shaped "Our Services" CTA button is below the heading

Scenario: Hero has carousel indicators
  Given the page loads
  Then three dot indicators are displayed at the bottom of the hero
  And the first dot is active (blue)
```

### Features Section

```gherkin
Scenario: Features section renders
  Given the page scrolls to the features section
  Then the heading "Our Main Features" is visible
  And a descriptive paragraph is shown below the heading
  And two feature cards are displayed with distinct styling

Scenario: Feature cards have visual differentiation
  Given the page scrolls to the features section
  Then one card has a blue top border accent
  And one card has a light blue background
```

### Services

```gherkin
Scenario: Services grid renders
  Given the page scrolls to the services section
  Then at least 3 service cards are displayed in a grid
  And each card shows an icon, title, and description

Scenario: Service cards are responsive
  Given the viewport is mobile
  Then the service cards stack vertically in a single column
```

### Stats / Counter

```gherkin
Scenario: Stats band renders
  Given the page scrolls to the stats section
  Then a dark background band is displayed
  And at least 4 counter values are visible with labels
  And the counters animate on scroll into view
```

### Testimonials

```gherkin
Scenario: Testimonials section renders
  Given the page scrolls to the testimonials section
  Then a heading is visible
  And at least one testimonial card shows an avatar, name, role, star rating, and quote

Scenario: Testimonials carousel works
  Given the page scrolls to the testimonials section
  Then navigation arrows or dots allow cycling through testimonials
```

### Contact

```gherkin
Scenario: Contact form renders
  Given the page scrolls to the contact section
  Then a form with fields: name, email, subject, message is displayed
  And a submit button is visible

Scenario: Contact info displays
  Given the page scrolls to the contact section
  Then address, phone number, and email are displayed
```

### Footer

```gherkin
Scenario: Footer renders with all columns
  Given the page scrolls to the footer
  Then a dark background is applied
  And the logo and company blurb are displayed
  And Quick Links column is present
  And Contact info with social icons is present

Scenario: Footer has Component Dock link
  Given the page loads
  Then the footer contains a link to https://www.componentdock.com/
```

## Verification checklist

- [ ] Top utility bar with logo, contact info, and "Free Consulting" CTA
- [ ] Dark navbar with 6 nav links and search icon
- [ ] Hero section with background image, overlay, heading, sub-headline, CTA, carousel dots
- [ ] Features section with heading, paragraph, and two styled cards
- [ ] Services grid with icon + title + description cards
- [ ] Stats counter band with dark bg and animated numbers
- [ ] Testimonials carousel with avatar, name, rating, quote
- [ ] Contact form (name, email, subject, message) + contact info
- [ ] Dark footer with 3-4 columns + Component Dock link
- [ ] Fonts: Inter (body), Poppins (headings)
- [ ] Brand color #3b82f6 applied as accent
- [ ] Dark navbar bg #0f172a
- [ ] Pill-shaped buttons (border-radius: 9999px)
- [ ] Responsive breakpoints: hamburger nav at <768px, stacking columns
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] CNAME set to guideway.free.componentdock.com
- [ ] Coverage 100% lines/functions/branches/statements
