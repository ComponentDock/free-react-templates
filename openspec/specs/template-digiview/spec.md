# Template: DigiView (Digital Agency)

## Purpose

Recreation of the ColorLib **DigiLab** template (`https://colorlib.com/wp/template/digilab/`).
Preview URL: `https://preview.colorlib.com/theme/digilab/`

Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript.

## Reference Analysis

### Design Tokens (extracted from live preview)

| Token              | Value                                | Notes                                           |
| ------------------ | ------------------------------------ | ----------------------------------------------- |
| Brand green        | `#31de79`                            | Primary button bg, accent highlights            |
| Secondary green    | `#a0f669` / `#5de596`               | Gradient / hover variants                       |
| Dark background    | `#000000` / `#232931`               | Navbar, counter/stats section                   |
| Light bg           | `#fff`, `#f8f9fa`                   | General section backgrounds                     |
| White text         | `#fff`                               | On dark sections                                |
| Muted text         | `#999`                               | Subtitles, descriptions                         |
| Divider/line       | `#E5E5E5`, `#eee`, `#e6e6e6`        | Section separators                              |
| Font family        | `'Nunito Sans', sans-serif`          | Global body + headings                          |
| Button radius      | `0.25rem` (4px)                      | `.btn` standard Bootstrap-like                  |
| Card radius        | `10px`–`16px`                        | Project cards, feature icons                    |
| Icon circle radius | `50%`                                | Service/feature circular icons                  |

### Visual Design

- **Dark navbar** (`bg-dark`) with green accent on the logo area; sticky navigation with section anchors.
- **Hero**: Full-viewport height, left text + right large photo, green accent `<span>` inline words, large CTA button.
- **Services**: White cards on light bg, each with a circular icon (green outline/bg), heading + description.
- **Projects**: Full-width bg image with overlay, grid of project cards with zoom hover effect.
- **Stats/Counter**: Full-width black background, four counter blocks (green numbers + white labels), animated counting.
- **About**: Two-column text block, muted text, with a secondary CTA button.
- **Process/Steps**: Numbered steps with connecting lines, icon circles.
- **Clients/Partners**: Logo carousel/slider on light bg.
- **FAQ**: Accordion Q&A section.
- **Testimonials**: Full-width dark bg, slider with avatar + quote.
- **Blog**: Card grid with featured image + title + meta, light bg.
- **Contact**: Form section (name, email, subject, message) with submit button, dark section at top.
- **Footer**: Dark bg, multi-column (about, services, help, connect), social icons.

### Section Order (from live DOM)

1. Navbar
2. Hero (full-screen slider, text left / image right)
3. Services (6 feature cards on light bg)
4. Projects (full-width bg image, project cards overlay)
5. Stats/Counter (black bg, 4 counters)
6. About (two-column text)
7. Process/Steps (numbered workflow)
8. Clients/Partners (logo slider)
9. FAQ (accordion)
10. Testimonials (dark bg, slider)
11. Blog (3-card grid)
12. Contact (form)
13. Footer

## Gherkin Requirements

### Navbar

```gherkin
Scenario: Navbar displays on page load
  Given the user opens the page
  When the navbar is visible
  Then it shows the logo and navigation links (Home, Services, Projects, About, Testimony, Blog, Contact)
  And it is sticky on scroll

Scenario: Mobile navbar shows hamburger menu
  Given the user is on a mobile viewport
  When the user taps the hamburger icon
  Then the navigation links expand as a vertical menu
```

### Hero

```gherkin
Scenario: Hero section displays slider
  Given the user opens the page
  When the hero section is visible
  Then it shows a large heading with green-accent words
  And a descriptive paragraph below
  And a green CTA button labeled "Get in touch"
  And a large background image on the right

Scenario: Hero slider transitions slides
  Given the user is viewing the hero
  When 5 seconds pass
  Then the slider transitions to the next slide
```

### Services

```gherkin
Scenario: Services section shows 6 cards on light background
  Given the user scrolls to the services section
  When the section is visible
  Then 6 service cards are displayed
  And each card has a circular icon, heading, and description
  And the section background is light gray
```

### Projects

```gherkin
Scenario: Projects section displays on dark background
  Given the user scrolls to the projects section
  When the section is visible
  Then a full-width dark overlay image serves as background
  And project cards are shown in a grid
  And cards have a zoom hover effect
```

### Stats/Counter

```gherkin
Scenario: Counter animates on scroll
  Given the user scrolls to the counter section
  When the section enters the viewport
  Then the four counters animate from 0 to their target values
  And the background is black
  And numbers are displayed in green
```

### About

```gherkin
Scenario: About section has two-column layout
  Given the user scrolls to the about section
  When the section is visible
  Then a heading is displayed
  And descriptive text appears in a two-column layout
  And a secondary CTA button is present
```

### Process/Steps

```gherkin
Scenario: Process section shows numbered steps
  Given the user scrolls to the process section
  When the section is visible
  Then numbered steps are displayed
  And each step has an icon, title, and description
  And steps are connected visually
```

### Clients/Partners

```gherkin
Scenario: Client logos are displayed in a carousel
  Given the user scrolls to the clients section
  When the section is visible
  Then partner/client logos slide in a carousel
  And the section has a light background
```

### FAQ

```gherkin
Scenario: FAQ section shows accordion items
  Given the user scrolls to the FAQ section
  When a question is clicked
  Then the answer toggles open
  And clicking another question closes the previous one
```

### Testimonials

```gherkin
Scenario: Testimonials display in a slider
  Given the user scrolls to the testimonials section
  When the section is visible
  Then a testimonial slider shows one quote at a time
  And each slide has an avatar, name, and testimonial text
  And the background is dark
```

### Blog

```gherkin
Scenario: Blog section shows 3 cards
  Given the user scrolls to the blog section
  When the section is visible
  Then 3 blog cards are displayed
  And each card has a featured image, title, and metadata
```

### Contact

```gherkin
Scenario: Contact form is present and validates
  Given the user scrolls to the contact section
  When the user clicks submit without filling fields
  Then validation errors appear
  When the user fills all required fields and submits
  Then the form submits successfully
```

### Footer

```gherkin
Scenario: Footer shows multi-column layout
  Given the user scrolls to the bottom
  When the footer is visible
  Then it shows about, services, help, and connect columns
  And social media icons are present
  And a "Component Dock" attribution link is included
```

## Verification Checklist

- [ ] ColorLib DigiLab preview is the reference (`https://preview.colorlib.com/theme/digilab/`)
- [ ] Section order matches the 13-section live DOM structure
- [ ] Brand green `#31de79` used for CTAs and accent highlights
- [ ] Dark sections (`#000000`, `#232931`) match the original
- [ ] Font: Nunito Sans loaded via Google Fonts
- [ ] Hero is full-screen with slider, text left / image right
- [ ] Counter section animates on scroll intersection
- [ ] FAQ uses accordion toggle
- [ ] Testimonials slider on dark background
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] No ColorLib references in app code
- [ ] All tests pass at 100% coverage
