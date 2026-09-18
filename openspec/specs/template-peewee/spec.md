# Template: Peewee (Education / Kids School)

## Purpose

Recreation of ColorLib's **Kiddos** template — a kids' learning school website.

- **Source slug:** `kiddos`
- **ColorLib page:** https://colorlib.com/wp/template/kiddos/
- **Preview URL:** https://preview.colorlib.com/theme/kiddos/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/kiddos-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design tokens (extracted from preview CSS)

| Token             | Value                                |
| ----------------- | ------------------------------------ |
| Primary color     | `#1eaaf1` (sky blue)                 |
| Secondary color   | `#fda638` (warm orange)              |
| Tertiary color    | `#5d50c6` (purple)                   |
| Quarternary color | `#8cc152` (green)                    |
| Accent red        | `#f1453d` (hero banner bg)           |
| Dark footer bg    | `#3c312e` (dark brown)               |
| Body font         | `"Work Sans", Arial, sans-serif`     |
| Button radius     | `0.375rem` (6px)                     |
| Button radius-lg  | `0.5rem` (8px)                       |
| Light bg          | `#f8f9fa`                            |
| Body text         | `#212529`                            |

## Section structure (order from preview)

1. **Navbar** — top bar with address/email/phone, then main nav: Home, About, Teacher, Courses, Pricing, Blog, Contact. Brand logo "Kiddos".
2. **Hero Slider** — full-width swiper with headline "Kids Are The Best" / "Perfect Learned", CTA buttons, background image.
3. **Services Row** — 4-column cards: Certified Teachers, Special Education, Book & Library, Certification. Each with icon, title, description.
4. **About** — 2-column: image left, text right. "Welcome to Kiddos Learning School" heading + two paragraphs.
5. **What We Offer** — 6-item grid: Safety First, Regular Classes, Certified Teachers, Sufficient Classrooms, Creative Lessons, Sports Facilities. Each with icon + title + description.
6. **Testimonials** — "Teaching Your Child Some Good Manners" heading, teacher profiles carousel: Bianca Wilson (Teacher), Mitch Parker (English Teacher), Stella Smith (Art Teacher), Monshe Henderson (Science Teacher). Each with photo, name, role, quote.
7. **Counter/Stats** — parallax background image with animated counters.
8. **Gallery** — image grid with lightbox.
9. **CTA / Consult** — "Our Class time" section with background image, class schedule info.
10. **Footer** — dark (`#3c312e`) with 3 columns: contact info, Recent Blog posts, Links. Social icons row at bottom.

## Gherkin requirements

### Navbar

```gherkin
Scenario: Navbar displays brand and navigation links
  Given the user visits the homepage
  Then the navbar shows the "Peewee" brand name
  And the nav links are: Home, About, Teacher, Courses, Pricing, Blog, Contact
  And the top bar shows address, email, and phone

Scenario: Navbar is responsive on mobile
  Given the user views the page on a 375px viewport
  Then the nav collapses into a hamburger menu
  And tapping the hamburger reveals the nav links
```

### Hero Slider

```gherkin
Scenario: Hero section displays headline and CTA
  Given the user visits the homepage
  Then the hero shows the headline "Kids Are The Best"
  And a CTA button is visible

Scenario: Hero auto-advances slides
  Given the user stays on the page for 5 seconds
  Then the hero slide advances automatically
```

### Services Row

```gherkin
Scenario: Services row shows 4 items
  Given the user scrolls to the services section
  Then 4 service cards are displayed
  And each card has an icon, title, and description

Scenario: Services row has colored backgrounds
  Given the user views the services section
  Then each card has a distinct color accent (blue, orange, purple, green)
```

### About

```gherkin
Scenario: About section has 2-column layout
  Given the user scrolls to the about section
  Then the heading reads "Welcome to Peewee Learning School"
  And an image occupies the left column
  And descriptive text occupies the right column
```

### What We Offer

```gherkin
Scenario: Offerings grid shows 6 items
  Given the user scrolls to the offerings section
  Then 6 offering cards are displayed in a grid
  And each card has an icon, title, and short description
```

### Testimonials

```gherkin
Scenario: Testimonials show teacher profiles
  Given the user scrolls to the testimonials section
  Then at least 4 teacher profiles are shown
  And each profile has a photo, name, role, and quote

Scenario: Testimonials are in a carousel
  Given the user views the testimonials section
  Then the profiles rotate in a carousel/slider
```

### Counter / Stats

```gherkin
Scenario: Counter section shows animated numbers
  Given the user scrolls to the counter section
  Then at least 3 stat counters are displayed
  And the counters animate on scroll into view
  And a parallax background image is behind the counters
```

### Gallery

```gherkin
Scenario: Gallery displays image grid
  Given the user scrolls to the gallery section
  Then a grid of images is displayed
  And clicking an image opens a lightbox view
```

### CTA / Consult

```gherkin
Scenario: CTA section shows class info
  Given the user scrolls to the CTA section
  Then the heading reads "Our Class time"
  And a background image is displayed
  And class schedule or enrollment info is shown
```

### Footer

```gherkin
Scenario: Footer has dark background and columns
  Given the user scrolls to the footer
  Then the footer background is dark brown (#3c312e)
  And 3 columns are visible: contact info, recent blog, links
  And social media icons are shown at the bottom
  And a "Component Dock" link is present

Scenario: Footer links are clickable
  Given the user clicks a footer navigation link
  Then the page navigates to the corresponding section
```

## Verification checklist

- [ ] All sections match the original order: Navbar → Hero → Services → About → Offerings → Testimonials → Counter → Gallery → CTA → Footer
- [ ] Brand color `#1eaaf1` (blue) is used for primary buttons and accents
- [ ] Secondary color `#fda638` (orange) used for secondary buttons
- [ ] Font is Work Sans loaded from Google Fonts
- [ ] Button border-radius is `0.375rem`
- [ ] Hero has a swiper/carousel with auto-advance
- [ ] Services row has 4 items with colored left borders
- [ ] About section is 2-column with image + text
- [ ] Offerings grid has 6 items with icons
- [ ] Testimonials carousel with teacher profiles
- [ ] Counter section has parallax background + animated numbers
- [ ] Gallery has lightbox functionality
- [ ] CTA section has parallax background
- [ ] Footer is dark (`#3c312e`) with 3 columns + social icons
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code
- [ ] Placeholder images use `https://picsum.photos/seed/peewee-<n>/<w>/<h>`
- [ ] Tests pass at 100% coverage
