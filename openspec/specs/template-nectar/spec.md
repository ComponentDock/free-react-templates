# Template: Nectar (Construction / Business)

## Purpose

Recreation of ColorLib "Bee" — a construction company one-page template with
a hero slider, request-a-quote form, services grid, project gallery, counter
stats, testimonials carousel, blog cards, and a dark footer.

- **Source**: [ColorLib Bee](https://colorlib.com/wp/template/bee/)
- **Preview**: https://preview.colorlib.com/theme/bee/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/bee-free-template.jpg
- **Stack**: Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name**: `nectar` (apps/nectar, `@free-react-templates/nectar`)

## Design tokens (extracted from preview CSS)

| Token            | Value                                    | Source                              |
| ---------------- | ---------------------------------------- | ----------------------------------- |
| Brand primary    | `#fda729` (golden amber)                 | `.bg-primary`, buttons, accents     |
| Dark brown       | `#3c312e`                                | `.ftco-bg-dark`, footer wrapper     |
| Footer bg        | `#141313` (near-black)                   | `.ftco-footer`                      |
| Text primary     | `#000000`                                | headings, body on light             |
| Text secondary   | `rgba(0,0,0,0.3)`                        | subheadings                         |
| Text muted       | `rgba(255,255,255,0.7)`                  | footer text                         |
| White            | `#FFFFFF`                                | section backgrounds                 |
| Body bg          | `#FFFFFF`                                | page background                     |
| Font heading     | `'Poppins', sans-serif`                  | h1–h6, nav, buttons, counter labels |
| Font body        | `'Nunito Sans', sans-serif`              | paragraphs, body text               |
| Button radius    | `0.25rem` (Bootstrap default)            | `.btn`                              |
| Button primary   | `#fda729` bg, white text                 | `.btn-primary`                      |
| Button secondary | `#6c757d` bg, white text (Bootstrap)     | `.btn-secondary`                    |
| Counter bg       | `#fda729` (full-width yellow overlay)    | `#section-counter:after`            |
| Testimonial dots | `#fda729` active, `rgba(0,0,0,0.2)` idle | `.owl-dot`                          |
| Blog date badge  | `#fda729` bg, black text                 | `.meta-date`                        |
| Tagcloud bg      | `rgba(0,0,0,0.05)`, hover border `#000`  | `.tagcloud a`                       |
| Form border      | `rgba(0,0,0,0.1)`, focus `#000`          | `.form-control`                     |
| Parallax overlay | `rgba(0,0,0,0.2)`                        | `.overlay` on hero slides           |

## Sections (in order, from preview DOM)

1. **TopBar** — Contact info strip: email icon + address, phone icon + number, "Request A Quote" CTA button. Flex row, light background.
2. **Navbar** — Dark background (`bg-dark`), logo "Nectar." with bee icon, nav links (Home, About, Project, Blog, Contact), search input right-aligned, hamburger toggle for mobile.
3. **HeroSlider** — OwlCarousel (2 slides), full-width background images with parallax (`data-stellar-background-ratio`), dark overlay, right-aligned text (h1 with `<span>` accent, subheading paragraph, "Request A Quote" secondary button).
4. **QuoteAndAbout** — Two-column layout: left = "Request A Quote" form (yellow `.bg-primary` header, fields: first name, last name, service select, phone, message textarea, submit button); right = "We Are Highly Recommendable Construction Firm" heading + body text + "Read More" button.
5. **Services** — Section heading "Experience Great Services". Three service items with icon + title + description: "Expert & Professional", "High Quality Work", "24/7 Help Support". Includes social links per service card.
6. **CTABanner** — Full-width parallax background image with overlay, CTA text + button.
7. **TeamMembers** — Section heading. Four team member cards (avatar image, name, role, social icons row: twitter, facebook, google-plus, instagram).
8. **ProjectGallery** — Section heading. Three-column grid of project images with hover effect (yellow overlay, project name slides up from bottom, zoom icon circle).
9. **CounterStats** — Full-width yellow background (`#fda729` overlay), parallax background image. Four stat blocks: "30 Years Experienced", "1500 Project Successful", "100 Professional Expert", "300 Happy Customers". Numbers animate on scroll.
10. **ServicesAndTestimonials** — Two-column: left = "Experience Great Services" heading + three service flow items (icon + title + description); right = "Satisfied Customer" heading + OwlCarousel of testimonial cards (quote icon, text, name, role, avatar image).
11. **Blog** — Light gray background. Section heading "Recent Blog". Three blog cards: image with date badge overlay (day, month, year), title, excerpt, "Read More" button, author + comment count.
12. **Footer** — Dark brown background (`#3c312e`). Four columns: (a) logo "Nectar." + social icons, (b) Services list, (c) Recent Blog with thumbnails, (d) Newsletter subscribe form. Copyright line at bottom.

## Requirements

### Requirement: TopBar

```gherkin
#### Scenario: TopBar displays contact information
  Given the user loads the page
  Then the top bar shows an email address
  And a phone number
  And a "Request A Quote" button

#### Scenario: TopBar is responsive
  Given the viewport is narrow (mobile)
  Then the top bar stacks vertically
  And all contact items remain visible
```

### Requirement: Navbar

```gherkin
#### Scenario: Navbar shows logo and navigation links
  Given the user loads the page
  Then the navbar shows the logo text "Nectar."
  And the navigation links are visible: "Home", "About", "Project", "Blog", "Contact"
  And a search input is visible on the right

#### Scenario: Mobile hamburger menu
  Given the viewport is narrow (mobile)
  When the user taps the hamburger toggle
  Then the navigation links expand/collapse
```

### Requirement: Hero Slider

```gherkin
#### Scenario: Hero displays headline and CTA
  Given the user is on the homepage
  Then the hero section shows a headline with accent text
  And a subheading paragraph
  And a "Request A Quote" button

#### Scenario: Hero has multiple slides
  Given the hero slider is visible
  Then at least 2 slides are present
  And each slide has a background image with overlay
  And navigation dots or arrows allow slide switching
```

### Requirement: Quote and About

```gherkin
#### Scenario: Request A Quote form is displayed
  Given the user scrolls to the quote section
  Then a form with fields is visible: First Name, Last Name, Service (select), Phone, Message
  And a submit button labeled "Appointment" is present

#### Scenario: About section shows company description
  Given the user scrolls to the about section
  Then a heading "We Are Highly Recommendable Construction Firm" is visible
  And a paragraph of description text is shown
  And a "Read More" button is visible
```

### Requirement: Services

```gherkin
#### Scenario: Services section shows service items
  Given the user scrolls to the services section
  Then a heading "Experience Great Services" is visible
  And 3 service cards are displayed
  And each card has an icon, title, and description

#### Scenario: Each service card has social links
  Given a service card is rendered
  Then social media icons are visible (twitter, facebook, google-plus, instagram)
```

### Requirement: CTABanner

```gherkin
#### Scenario: CTA banner displays with parallax
  Given the user scrolls to the CTA banner
  Then a full-width section with a background image is visible
  And the background image has a parallax effect
```

### Requirement: Team Members

```gherkin
#### Scenario: Team section displays member cards
  Given the user scrolls to the team section
  Then 4 team member cards are visible
  And each card has an avatar image, name, and role
  And each card has social media icon links

#### Scenario: Team member cards are responsive
  Given the viewport is narrow (mobile)
  Then team member cards stack vertically
```

### Requirement: Project Gallery

```gherkin
#### Scenario: Project gallery shows project images
  Given the user scrolls to the project gallery
  Then a heading is visible
  And 3 project image cards are displayed in a grid

#### Scenario: Project card hover effect
  Given the user hovers over a project card
  Then a yellow overlay fades in
  And the project name slides up from the bottom
  And a circular zoom icon appears
```

### Requirement: Counter Stats

```gherkin
#### Scenario: Counter section shows statistics
  Given the user scrolls to the counter section
  Then 4 stat blocks are visible
  And each block shows a number and label
  And the numbers are: 30 (Years Experienced), 1500 (Project Successful), 100 (Professional Expert), 300 (Happy Customers)

#### Scenario: Counter numbers animate on scroll
  Given the counter section enters the viewport
  Then the numbers animate from 0 to their target values
```

### Requirement: Services and Testimonials

```gherkin
#### Scenario: Testimonials carousel displays reviews
  Given the user scrolls to the testimonials section
  Then a heading "Satisfied Customer" is visible
  And testimonial cards are displayed in a carousel
  And each card has a quote icon, review text, name, and role

#### Scenario: Services flow list is displayed
  Given the user views the left column
  Then 3 service items are listed vertically
  And each has an icon, title, and short description
```

### Requirement: Blog

```gherkin
#### Scenario: Blog section shows recent posts
  Given the user scrolls to the blog section
  Then a heading "Recent Blog" is visible
  And 3 blog cards are displayed
  And each card has an image with a date badge overlay
  And each card has a title, excerpt, "Read More" button, author, and comment count

#### Scenario: Blog date badge shows formatted date
  Given a blog card is rendered
  Then the date badge displays the day, month, and year
  And the badge has a yellow background
```

### Requirement: Footer

```gherkin
#### Scenario: Footer displays four columns
  Given the user scrolls to the footer
  Then 4 columns are visible: brand + social, services list, recent blog, newsletter

#### Scenario: Newsletter form in footer
  Given the footer newsletter form is visible
  Then an email input with placeholder "Enter email address" is shown
  And a "Subscribe" button is present

#### Scenario: Footer copyright line
  Given the footer is visible
  Then a copyright line is shown at the bottom
  And the footer links to Component Dock (https://www.componentdock.com/)
```

## Verification checklist

- [ ] All 12 sections render in correct order
- [ ] Fonts: Poppins for headings/nav/buttons, Nunito Sans for body text
- [ ] Brand color `#fda729` used consistently for primary actions and accents
- [ ] Dark sections: navbar (`#343a40`), footer (`#3c312e`)
- [ ] Hero slider: 2 slides with parallax + overlay + text alignment (right)
- [ ] Quote form: all fields present, yellow header bar
- [ ] Services: 3 cards with icons and social links
- [ ] Project gallery: 3-column grid with hover overlay effect
- [ ] Counter: 4 stats on yellow background, animated numbers
- [ ] Testimonials: carousel with avatar, name, role, quote
- [ ] Blog: 3 cards with date badge overlays
- [ ] Footer: 4 columns, newsletter form, Component Dock link
- [ ] Responsive: hamburger nav, stacking grids, mobile-friendly forms
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Placeholder images via `picsum.photos/seed/nectar-<n>/...`
- [ ] Footer links to `https://www.componentdock.com/`
