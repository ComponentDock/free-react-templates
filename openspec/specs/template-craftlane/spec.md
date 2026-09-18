# Template: CraftLane (Art & Crafting Agency)

## Purpose

Recreation of ColorLib "Five Star" — an art and crafting agency website template.

- **Source:** https://colorlib.com/wp/template/five-star/
- **Preview:** https://preview.colorlib.com/theme/five-star/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/five-star-art-crafting-website-template.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript
- **App folder:** `apps/craftlane`
- **Package:** `@free-react-templates/craftlane`
- **Surge target:** `craftlane.free.componentdock.com`

## Design tokens

Extracted from the live preview CSS (`css/main.css`):

| Token             | Value                      | Usage                                      |
| ----------------- | -------------------------- | ------------------------------------------ |
| `brand`           | `#f5204b` (red)            | Primary buttons, accents, hover states     |
| `brand-cyan`      | `#4cd3e3`                  | Secondary button backgrounds               |
| `brand-blue`      | `#38a4ff`                  | Tertiary button backgrounds                |
| `text-dark`       | `#222222`                  | Headings, body text                        |
| `text-gray`       | `#777777`                  | Subtitles, secondary text                  |
| `bg-light`        | `#f9f9ff`                  | Alternate section backgrounds              |
| `bg-white`        | `#ffffff`                  | Primary section backgrounds                |
| `font-primary`    | `Poppins, sans-serif`      | All text                                   |
| `overlay`         | `rgba(0,0,0,0.75)`         | Hero/banner, parallax, video overlays      |
| `btn-radius`      | `3px`                      | Primary button border-radius               |
| `btn-pill-radius` | `20px`                     | Some CTA buttons (rounded pill)            |

## Visual design notes (from screenshot)

- Dark overlay on hero and parallax sections over full-bleed background images.
- Clean white/light-gray alternating sections.
- Red (#f5204b) brand color used prominently on buttons and accent elements.
- Poppins font gives a modern, clean agency feel.
- Service icons are circular with a light background.
- Footer has a dark (#222) background with white text, newsletter signup, and Instagram feed grid.

## Section structure (in order)

1. **Navbar** — Logo text + hamburger menu (mobile-first, `main-menubar`).
2. **Banner (Hero)** — Fullscreen background image + dark overlay. Centered heading "Crafting Best Experience" with subtitle.
3. **Experience Area** — 2 image thumbnails (3-col each) + 6-col content block with heading, subtitle, paragraph, and "View Details" CTA button. Light background (#f9f9ff).
4. **Carousel (Testimonials)** — Parallax background with dark overlay. Right-aligned carousel (6-col) with testimonial slides, prev/next arrow triggers.
5. **Service Area** — 4-column grid of centered service items (icon + title + description). White background.
6. **Video Area** — Split layout: video thumbnail with play button (left 6-col) + text content (right 6-col) over dark overlay background.
7. **Service Area 2** — 3-column horizontal service items (icon + title + description in a row layout). Light background.
8. **Contact Area** — Split: contact info (address, email, phone with icons) on left + contact form on right.
9. **Footer** — Dark background. 3 columns: About Agency (nav links), Newsletter (email signup form), Instafeed (image grid). Footer bottom bar with copyright and social icons.

## Gherkin requirements

### Navbar
```gherkin
Scenario: Navbar renders with logo and menu toggle
  Given the page loads
  Then a navbar is visible at the top
  And a logo text "CraftLane" is displayed
  And a hamburger menu button is present for mobile viewports
```

### Banner / Hero
```gherkin
Scenario: Hero section displays fullscreen with overlay
  Given the page loads
  Then a fullscreen hero section is visible
  And a dark overlay covers the background image
  And the heading "Crafting Best Experience" is displayed
  And a subtitle describing art/crafting services is shown

Scenario: Hero section is responsive
  Given the viewport is mobile (< 768px)
  Then the hero height adjusts to 600px
  And the heading remains centered
```

### Experience Area
```gherkin
Scenario: Experience section shows images and content
  Given the page loads
  Then the experience section is visible with a light background
  And two image thumbnails are displayed side by side
  And a content block shows a heading, subtitle, paragraph, and CTA button
  And the CTA button says "View Details"

Scenario: Experience section is responsive
  Given the viewport is mobile
  Then the images and content stack vertically
```

### Carousel / Testimonials
```gherkin
Scenario: Carousel displays testimonial slides
  Given the page loads
  Then a carousel section with parallax background is visible
  And a dark overlay covers the parallax background
  And testimonial slides are displayed in a carousel
  And prev/next navigation triggers are present

Scenario: Carousel navigation works
  Given the carousel is displayed
  When the user clicks the next trigger
  Then the next slide is shown
  When the user clicks the previous trigger
  Then the previous slide is shown
```

### Service Area
```gherkin
Scenario: Services are displayed in a 4-column grid
  Given the page loads
  Then a services section is visible
  And 4 service items are displayed in a grid
  And each service item has an icon, title, and description

Scenario: Service items are responsive
  Given the viewport is mobile
  Then service items stack into a single column
```

### Video Area
```gherkin
Scenario: Video section shows thumbnail and text
  Given the page loads
  Then a video section with dark overlay background is visible
  And a video thumbnail with play button is shown on the left
  And descriptive text is shown on the right
  And the text includes a heading and paragraph

Scenario: Video section is responsive
  Given the viewport is mobile
  Then the video thumbnail and text stack vertically
```

### Service Area 2
```gherkin
Scenario: Second services section shows horizontal items
  Given the page loads
  Then a second services section is visible
  And 3 service items are displayed in a row layout
  And each item has an icon, title, and description arranged horizontally

Scenario: Second services section is responsive
  Given the viewport is mobile
  Then service items stack vertically
```

### Contact Area
```gherkin
Scenario: Contact section shows info and form
  Given the page loads
  Then a contact section is visible
  And contact information (address, email, phone) is displayed on the left
  And a contact form is displayed on the right
  And the form has name, email, and message fields
  And the form has a submit button

Scenario: Contact form validates input
  Given the contact form is displayed
  When the user submits with empty fields
  Then validation errors are shown
```

### Footer
```gherkin
Scenario: Footer displays with dark background
  Given the page loads
  Then a footer is visible with a dark background
  And an "About Agency" column with navigation links is shown
  And a newsletter signup form with email input and button is shown
  And an Instagram feed grid with placeholder images is shown

Scenario: Footer has bottom bar with copyright and social links
  Given the footer is displayed
  Then a footer bottom bar is visible
  And copyright text is shown
  And social media icon links are present
  And a "Component Dock" attribution link is present
```

## Verification checklist

- [ ] Navbar renders with logo and hamburger menu
- [ ] Hero section is fullscreen with dark overlay, heading, and subtitle
- [ ] Experience area has two images + content block with CTA
- [ ] Carousel section has parallax background, dark overlay, and slide navigation
- [ ] Service area 1 shows 4 centered service items in a grid
- [ ] Video area has split layout with play button and text content
- [ ] Service area 2 shows 3 horizontal service items
- [ ] Contact area has info + form side by side
- [ ] Footer has 3 columns (About, Newsletter, Instafeed) + bottom bar
- [ ] All sections are responsive (mobile stacking)
- [ ] Brand color #f5204b is used for primary buttons and accents
- [ ] Font is Poppins throughout
- [ ] Dark overlay (rgba(0,0,0,0.75)) on hero, carousel, and video sections
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Tests pass with 100% coverage
