# Template: Ironclad (Construction Company)

## Purpose

Recreation of the ColorLib **Celt** construction company website template.

- **Source slug:** `celt`
- **Source URL:** https://colorlib.com/wp/template/celt/
- **Preview URL:** https://preview.colorlib.com/theme/celt/
- **New name:** `ironclad`
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript

## Design Tokens

Extracted from the live preview CSS (`css/style.css`):

| Token              | Value                  | Usage                                        |
| ------------------ | ---------------------- | -------------------------------------------- |
| brand (gold)       | `#FFD626`              | Buttons, portfolio borders, section accents  |
| dark (navy)        | `#001232`              | Footer bg, portfolio content bg, headings    |
| body text          | `#64728A`              | Paragraph/body text                          |
| light bg           | `#F8F8F8`              | Alternate section backgrounds                |
| white              | `#FFF`                 | Primary backgrounds, portfolio text          |
| font family        | `Poppins, sans-serif`  | Global typeface                              |
| border radius      | `0` (sharp)            | Buttons and cards — no rounding              |
| icon radius        | `50%`                  | Portfolio hover circles                      |
| button padding     | `10px 30px`            | Secondary button                             |
| portfolio top border | `4px solid #FFD626`  | Portfolio content bar, blog image bottom     |

### Visual Notes (from screenshot analysis)

- Dark navy + gold accent color scheme — industrial/construction feel.
- Full-width hero banner with background image and overlay, centered CTA.
- Stat counter strip on gold background with large numbers.
- Portfolio grid (4 items) with hover overlay showing link icons.
- 6-column services grid with icon + title + description.
- "Why Choose Us" section with icon features on gray background.
- Testimonials carousel with FontAwesome quote icon.
- 3-column blog cards with gold bottom border on images.
- Dark footer with 3 widget columns: about, quick links, newsletter.

## Requirements (Gherkin)

### Feature: Navbar

```gherkin
Scenario: Navbar displays logo and navigation links
  Given the user loads the page
  Then the navbar shows the "Ironclad" brand name
  And navigation links include: Home, About Us, Services, Projects, News, Contact Us
  And a search toggle button is visible

Scenario: Navbar is sticky on scroll
  Given the user scrolls down the page
  Then the navbar remains fixed at the top of the viewport

Scenario: Mobile navbar toggle
  Given the user is on a mobile viewport
  When they click the hamburger menu button
  Then the navigation menu expands/collapses
```

### Feature: Hero Banner

```gherkin
Scenario: Hero section displays headline and CTA
  Given the user loads the page
  Then a full-width banner image is displayed
  And the heading "We Build Your Dream" is visible
  And a call-to-action button is visible with gold background

Scenario: Hero section has overlay
  Given the user views the hero section
  Then a dark overlay covers the banner image
```

### Feature: About Us

```gherkin
Scenario: About section shows three value propositions
  Given the user scrolls to the About section
  Then three columns are displayed: "Certified Experience", "The Great Teamwork", "Modern Technology"
  And each column has an icon, title, and description paragraph

Scenario: About section layout
  Given the user views the About section
  Then the section has a white background
  And columns are arranged in a 3-column grid
```

### Feature: Statistics Counter

```gherkin
Scenario: Counter section shows key metrics
  Given the user scrolls to the statistics section
  Then four stats are displayed on a gold background:
    | stat              | value |
    | Year Of Experience | 20    |
    | Project Completed  | 154   |
    | Happy Client       | 785   |
    | Award Won          | 14    |

Scenario: Counter section has gold background
  Given the user views the statistics section
  Then the background color is gold (#FFD626)
  And the text color is dark navy
```

### Feature: Portfolio / Featured Works

```gherkin
Scenario: Portfolio displays four project cards
  Given the user scrolls to the Featured Works section
  Then 4 project cards are shown in a grid
  And each card has a background image
  And the section heading reads "Featured Works"

Scenario: Portfolio hover interaction
  Given the user hovers over a portfolio card
  Then a dark overlay with gold icon links appears
  And a content bar slides up from the bottom with a gold top border

Scenario: View All Portfolio button
  Given the user views the portfolio section
  Then a "View All Portfolio" link/button is visible below the grid
```

### Feature: Services

```gherkin
Scenario: Services section displays six service cards
  Given the user scrolls to the Services section
  Then 6 service cards are shown in a grid
  And the services are: Construction, Renovation, Architecture, Painting, Decorating, Consulting
  And each card has an icon, title, and description

Scenario: Services section layout
  Given the user views the Services section
  Then the section has a white background
  And the section heading reads "Our Services"
```

### Feature: Why Choose Us

```gherkin
Scenario: Why Choose Us section shows feature list
  Given the user scrolls to the Why Choose Us section
  Then a section header "Why Choose Us" is displayed
  And a descriptive paragraph is shown
  And 4 feature items with icons are listed:
    | feature              |
    | Certified Experience |
    | The Great Teamwork   |
    | Modern Technology    |
    | (fourth feature)     |

Scenario: Why Choose Us has gray background
  Given the user views the Why Choose Us section
  Then the background color is light gray (#F8F8F8)
```

### Feature: Testimonials

```gherkin
Scenario: Testimonials section displays three reviews
  Given the user scrolls to the Testimonials section
  Then 3 testimonial cards are shown
  And each card has a FontAwesome quote icon at the top
  And each card has a quote text and author name "John Doe"

Scenario: Testimonials heading
  Given the user views the testimonials section
  Then the section heading reads "Happy Clients"
```

### Feature: Blog / Latest News

```gherkin
Scenario: Blog section displays three posts
  Given the user scrolls to the Latest News section
  Then 3 blog cards are shown in a row
  And each card has a featured image with a gold bottom border
  And each card has a title and excerpt

Scenario: Blog section heading
  Given the user views the blog section
  Then the section heading reads "Lastest News"
  (Note: preserve original spelling for fidelity, or correct to "Latest News")
```

### Feature: Footer

```gherkin
Scenario: Footer displays three widget columns
  Given the user scrolls to the footer
  Then 3 columns are shown:
    | column | content                                |
    | 1      | Logo/brand + description + social icons |
    | 2      | Quick Links (Home, About, Services...) |
    | 3      | Newsletter subscription form            |

Scenario: Footer has dark background
  Given the user views the footer
  Then the background color is dark navy (#001232)
  And the text color is white

Scenario: Footer contact info
  Given the user views the footer
  Then address, phone, and email are displayed

Scenario: Footer copyright
  Given the user views the footer bottom
  Then a copyright notice is shown
  And a link to Component Dock (https://www.componentdock.com/) is present
```

## Verification Checklist

- [ ] Navbar: sticky, logo, nav links, mobile hamburger, search toggle
- [ ] Hero: full-width bg image, overlay, heading, CTA button, gold accent
- [ ] About: 3-column grid, icons, titles, descriptions
- [ ] Stats: gold background, 4 numbered counters, dark text
- [ ] Portfolio: 4-item grid, hover overlay with icons, slide-up content bar, gold top border
- [ ] Services: 6-item grid, icons, titles, descriptions, white background
- [ ] Why Choose Us: gray background, icon features list, heading
- [ ] Testimonials: 3 cards, quote icon, author name, centered layout
- [ ] Blog: 3 cards, image with gold bottom border, title, excerpt
- [ ] Footer: dark navy bg, 3 columns, contact info, newsletter, quick links, copyright, Component Dock link
- [ ] Design tokens: Poppins font, #FFD626 gold, #001232 navy, #64728A body, #F8F8F8 gray, no border-radius on buttons
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
