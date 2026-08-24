# Template: Nurture (Charity / Non-Profit)

## Purpose

Recreation of ColorLib's **Lovecare** charity template as a React single-page
application. The original is a warm, gold-accented charity/non-profit landing
page with parallax sections, fundraising counters, cause cards, volunteer
profiles, testimonials, and a blog feed.

- **Source:** https://colorlib.com/wp/template/lovecare/
- **Preview:** https://preview.colorlib.com/theme/lovecare/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **New name:** `nurture` (no collision with existing apps/specs)

## Design Tokens

### Colors

| Token            | Hex       | Usage                                        |
| ---------------- | --------- | -------------------------------------------- |
| `--brand-gold`   | `#d49a3a` | Primary brand — buttons, accents, highlights |
| `--brand-teal`   | `#0a686e` | Secondary brand — section backgrounds, links |
| `--brand-dark`   | `#39311d` | Hero overlay / dark brown                    |
| `--brand-deep`   | `#063c3f` | Deep teal section backgrounds                |
| `--brand-footer` | `#042628` | Footer background                            |
| `--bg-cream`     | `#f3f0eb` | Light section backgrounds                    |
| `--bg-warm`      | `#e9e4db` | Causes section warm off-white                |
| `--text-dark`    | `#212529` | Primary text                                 |
| `--text-muted`   | `#6c757d` | Secondary/muted text                         |

### Typography

| Role                | Font family  | Notes                                           |
| ------------------- | ------------ | ----------------------------------------------- |
| Body / Headings     | Poppins      | Sans-serif, used throughout                     |
| Accent / Decorative | Patrick Hand | Handwritten style, used sparingly (subheadings) |

### Buttons & Radii

| Element          | Style                                                                |
| ---------------- | -------------------------------------------------------------------- |
| Primary button   | bg `#0d6efd` (blue), white text, radius 40px, padding ~1rem vertical |
| Secondary button | Outline / transparent, border-radius 40px                            |
| Card corners     | 0.25rem (subtle rounding)                                            |
| Icon circles     | 50% (fully round)                                                    |

### Section Backgrounds

| Section             | Background                                     |
| ------------------- | ---------------------------------------------- |
| Hero                | Full-bleed image with dark overlay (`#39311d`) |
| Intro / Fundraising | White/cream (`#f3f0eb`)                        |
| Counter             | Parallax background image, teal overlay        |
| Causes              | Warm off-white (`#e9e4db`)                     |
| Services / About    | White                                          |
| Volunteers          | White                                          |
| Testimonials        | Parallax background image                      |
| CTA banner          | Dark teal (`#063c3f`)                          |
| Blog                | White                                          |
| Footer              | Very dark teal (`#042628`), white text         |

## Requirements (Gherkin)

### Navbar

```gherkin
Scenario: Fixed top navigation bar
  Given the page loads
  Then a fixed navbar is visible at the top
  And it contains the brand name "Nurture"
  And it has navigation links: Home, About, Causes, Volunteer, Blog, Contact
  And on mobile (< 992px) a hamburger toggles the menu

Scenario: Navbar links scroll to sections
  Given the navbar is visible
  When the user clicks "About"
  Then the page scrolls smoothly to the About section
```

### Hero Section

```gherkin
Scenario: Parallax hero with CTA
  Given the page loads
  Then the hero section spans the full viewport height
  And it displays a background image with a dark overlay
  And a heading reads "To the Homeless & Hopeless People" (or paraphrase)
  And a subheading in handwritten font reads a charity tagline
  And there are two buttons: "Join Us" (primary) and "Watch the Video" (secondary)
  And the hero has parallax scrolling effect (background-attachment: fixed)

Scenario: Hero CTA navigation
  Given the hero is visible
  When the user clicks "Join Us"
  Then the page scrolls to the donation/intro section
```

### Intro / Fundraising Section

```gherkin
Scenario: Fundraising goal display
  Given the intro section is in view
  Then a fundraising counter shows a dollar amount (e.g. "$1,850,000")
  And a heart icon with count is displayed
  And a donation form is visible with:
    | field              | type     |
    | Full Name          | text     |
    | Purpose            | select   |
    | Radio options      | radio    |
    | Submit button      | submit   |

Scenario: Donation form interaction
  Given the donation form is visible
  When the user fills in name and selects a purpose
  And clicks "Donate Now!"
  Then the form accepts input without errors (frontend only)
```

### Statistics / Counter Section

```gherkin
Scenario: Animated statistics counters
  Given the counter section is in view
  Then 4 statistics are displayed in a row:
    | label              | value (approx) |
    | Total Donations    | $60M           |
    | Volunteers         | 9200           |
    | Projects           | 5800           |
    | Happy Faces        | 2750           |
  And the section has a parallax background image
  And numbers animate on scroll into view
```

### Causes Section

```gherkin
Scenario: Cause cards carousel
  Given the causes section is visible
  Then the heading reads "Our Causes & Help Us"
  And a carousel of cause cards is displayed
  And each card has:
    | element   | content                    |
    | image     | cause photo                |
    | title     | e.g. "Give Food to Homeless Children" |
    | progress  | donation progress bar      |
    | goal text | e.g. "$450,000 / $800,000" |
    | button    | "Donate Now!"              |
  And the carousel supports navigation (prev/next)
```

### Services / About Section

```gherkin
Scenario: Three-column services grid
  Given the services section is in view
  Then a heading section is displayed on the left
  And 3 service cards are shown in a grid:
    | icon            | title              |
    | donation icon   | Donation           |
    | ecosystem icon  | Ecological Cause   |
    | charity icon    | Charity            |
  And each card has an icon, title, and short description
  And cards are clickable (link to causes or detail)
```

### Volunteers Section

```gherkin
Scenario: Team member profiles
  Given the volunteers section is in view
  Then the heading reads "Our Volunteer"
  And 4 team member cards are displayed:
    | name         | role      |
    | Jason Smith  | Volunteer |
    | Anne Hayes   | Volunteer |
    | Martha Smith | Volunteer |
    | Mike Tyson   | Volunteer |
  And each card has a photo, name, role, and social icons
  And cards animate on scroll
```

### Testimonials Section

```gherkin
Scenario: Testimonial slider
  Given the testimonials section is in view
  Then the heading reads "What People Says"
  And testimonials are displayed in a carousel/slider
  And each testimonial has a quote, author name, and photo
  And the section has a parallax background image
```

### CTA Banner

```gherkin
Scenario: Call-to-action banner
  Given the CTA section is in view
  Then it displays "Do You Care Our Children?"
  And has a "Become A Volunteer" button
  And the section has a dark teal background (`#063c3f`)
```

### Blog Section

```gherkin
Scenario: Recent blog posts
  Given the blog section is in view
  Then the heading reads "Recent From Blog"
  And 3 blog post cards are displayed
  And each card has an image, date, title, and "Read More" link
```

### Footer

```gherkin
Scenario: Footer layout
  Given the footer is visible
  Then it has a dark background (`#042628`)
  And it contains:
    | column          | content                              |
    | Brand           | "Nurture" + tagline "Charity Theme"  |
    | Recent Posts    | 2-3 recent post links                |
    | Contact Info    | Address, phone, email                |
    | Newsletter      | Email input + subscribe button       |
  And a copyright line at the bottom
  And a link to https://www.componentdock.com/ ("Component Dock")

Scenario: Newsletter subscription
  Given the footer newsletter form is visible
  When the user enters an email and clicks Subscribe
  Then the form accepts input (frontend only)
```

### Accessibility

```gherkin
Scenario: Keyboard navigation
  Given the page loads
  Then all interactive elements are keyboard-focusable
  And focus-visible rings appear on buttons and links
  And skip-to-content link is present

Scenario: Screen reader support
  Given the page loads
  Then all images have descriptive alt text
  And form inputs have associated labels
  And heading hierarchy is sequential (h1 > h2 > h3)
```

### Responsive Design

```gherkin
Scenario: Mobile layout
  Given the viewport is 375px wide
  Then the navbar collapses to a hamburger menu
  And the hero text is readable (not overflowing)
  And cause cards stack vertically
  And team cards stack vertically
  And the footer columns stack vertically
  And statistics stack in a 2x2 grid

Scenario: Tablet layout
  Given the viewport is 768px wide
  Then the layout adapts with 2-column grids where appropriate
  And the navbar links are accessible via hamburger
```

## Verification Checklist

- [ ] All sections render in correct order matching the original
- [ ] Brand colors (#d49a3a gold, #0a686e teal, #39311d dark) are used correctly
- [ ] Poppins font is loaded and applied globally
- [ ] Patrick Hand font is used for accent/decorative text
- [ ] Hero has parallax scrolling (background-attachment: fixed)
- [ ] Counter numbers animate on scroll
- [ ] Cause carousel navigates between cards
- [ ] Testimonial slider works
- [ ] All buttons have 40px border-radius
- [ ] Footer has dark background with newsletter form
- [ ] Footer links to https://www.componentdock.com/
- [ ] Responsive: mobile (375px), tablet (768px), desktop (1200px+)
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] public/CNAME = nurture.free.componentdock.com
- [ ] package.json homepage = https://nurture.free.componentdock.com
- [ ] Tests pass with 100% coverage
- [ ] `npm run verify:app` passes for nurture
