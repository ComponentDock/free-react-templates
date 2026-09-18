# Template: TinyBrights (Education / Kindergarten)

## Purpose

Recreation of ColorLib "Kiddos" — a children's education & kindergarten
website template.

- **Source:** https://colorlib.com/wp/template/kiddos/
- **Preview:** https://preview.colorlib.com/theme/kiddos/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/kiddos-free-template.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **App name:** `tinybrights` (apps/tinybrights)

## Design Tokens (extracted from preview CSS)

### Colors

| Token          | Hex        | Usage                                  |
| -------------- | ---------- | -------------------------------------- |
| brand-blue     | #1eaaf1    | primary accent, links, buttons, navbar active |
| brand-orange   | #fda638    | secondary accent, CTA buttons, headings |
| brand-green    | #8cc152    | tertiary — services column bg          |
| brand-red      | #f1453d    | quarternary — services column bg, overlay tint |
| brand-purple   | #5d50c6    | fifth — services column bg, subscribe submit btn |
| body-bg        | #ffffff    | page background                       |
| light-bg       | #fafafa    | alternate section background           |
| footer-bg      | #232323    | footer dark background                 |
| body-text      | rgba(0,0,0,0.5) | default paragraph text             |
| heading-text   | rgba(0,0,0,0.8) | headings, h1-h6                    |
| white-70       | rgba(255,255,255,0.7) | text on dark bg               |
| dark-bg        | #212529    | dark surface                           |

### Typography

- **Body font:** "Work Sans" (weights 300–900, loaded via Google Fonts)
- **Display / hero font:** "Fredericka the Great" (weight 400, used for decorative headings)
- **Base size:** 16px, line-height 1.8, weight 400
- **Headings:** weight 400–600, line-height 1.5, color rgba(0,0,0,0.8)

### Buttons

- **Border-radius:** 40px (pill shape)
- **Primary:** bg #1eaaf1, border #1eaaf1, text #fff; hover: transparent bg, blue border
- **Secondary (CTA):** bg #fda638, border #fda638, text #fff
- **White outline:** bg transparent, border rgba(255,255,255,0.8), text #fff

### Section Backgrounds

- Services bar: 4 columns each with solid color bg (primary/tertiary/fifth/quarternary)
- Intro section: parallax background image (#f1453d red overlay at 40% opacity)
- Counter/stats: parallax background image
- Testimonials: #fafafa (light) background
- Consult/appointment: parallax background image, dark overlay
- Footer: #232323 dark background

## Gherkin Requirements

### Feature: Navbar

```gherkin
Scenario: Top info bar displays contact details
  Given the page loads
  Then a top bar shows address, email, and phone with colored circular icons

Scenario: Navigation links
  Given the page loads
  When I view the navbar
  Then I see links for Home, About, Teacher, Courses, Pricing, Blog, Contact

Scenario: Navbar scroll behavior
  Given the page loads
  When I scroll past the hero
  Then the navbar becomes fixed with a white background and shadow
  And the active link is highlighted in brand-blue
```

### Feature: Hero Slider

```gherkin
Scenario: Hero slider displays slides
  Given the page loads
  Then a full-width slider shows with background images
  And each slide has a large heading and a "Read More" CTA button

Scenario: Slider navigation
  Given the slider is visible
  When I view the slider
  Then pagination dots appear at the bottom
  And the active dot is highlighted in brand-blue
```

### Feature: Services Bar

```gherkin
Scenario: Four service columns
  Given the page loads
  Then four equal-width columns display below the hero
  And each column has a circular icon, title, and description
  And the columns use backgrounds: primary, tertiary, fifth, quarternary
  And the text color is white with 70% opacity for descriptions

Scenario: Icon circles
  Given the services bar is visible
  Then each icon sits in a white circle centered above the text
```

### Feature: Welcome / About Section

```gherkin
Scenario: Two-column about layout
  Given the page loads
  Then a two-column section displays
  And the left column (5/12) has "Welcome to Kiddos Learning School" heading and paragraphs
  And the right column (7/12) has "What We Offer" heading with a 2x2 grid of features

Scenario: Feature icons
  Given the about section is visible
  Then each feature has a circular blue icon and a title with description
```

### Feature: Intro Banner (Parallax)

```gherkin
Scenario: Parallax intro section
  Given the page loads
  Then a full-width section with a parallax background image appears
  And it has a dark overlay and centered heading text
```

### Feature: Staff / Teachers Section

```gherkin
Scenario: Teacher cards
  Given the page loads
  Then a section displays 4 staff cards in a grid
  And each card has an image, name, position, and social links
  And hovering reveals the social links bar above the card

Scenario: Section heading
  Given the staff section is visible
  Then the heading section shows "Meet Our Teachers"
```

### Feature: Courses Section

```gherkin
Scenario: Course cards
  Given the page loads
  Then a section displays course items in a grid
  And each course has a thumbnail, category tag, title, and short description
  And the category tag uses brand-orange color
```

### Feature: Counter / Stats Section

```gherkin
Scenario: Statistics counters
  Given the page loads
  Then a parallax section displays 4 statistic counters
  And each counter has a large number, label, and icon
  And the background uses a parallax image
```

### Feature: Testimonials

```gherkin
Scenario: Testimonial carousel
  Given the page loads
  Then a carousel shows testimonial cards
  And each card has a quote, user image, name, and position
  And pagination dots are shown below
```

### Feature: Consult / Appointment Section

```gherkin
Scenario: Appointment form
  Given the page loads
  Then a dark parallax section displays a consultation form
  And the form has input fields and a submit button
  And the background uses a parallax image with dark overlay
```

### Feature: Footer

```gherkin
Scenario: Footer layout
  Given the page loads
  Then a dark footer (#232323) displays
  And it contains logo, about text, newsletter subscribe, and social links
  And the footer links to https://www.componentdock.com/ ("Component Dock")

Scenario: Newsletter form
  Given the footer is visible
  Then a newsletter input with a purple submit button is shown
```

## Verification Checklist

- [ ] All sections render in correct order matching the ColorLib preview
- [ ] Brand colors match: blue #1eaaf1, orange #fda638, green #8cc152, red #f1453d, purple #5d50c6
- [ ] "Work Sans" font is loaded and applied as body font
- [ ] Buttons use pill shape (border-radius: 40px)
- [ ] Services bar shows 4 colored columns with white icon circles
- [ ] Parallax sections use background images with overlays
- [ ] Hero slider functions with pagination dots
- [ ] Testimonials carousel works with navigation
- [ ] Navbar scrolls to fixed with white background
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in any app code
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] Typecheck and lint pass
- [ ] Build succeeds
