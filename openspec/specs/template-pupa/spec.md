# Template: Pupa (Portfolio)

## Purpose

Recreation of ColorLib "Cocoon" — a portfolio website template with sidebar navigation, masonry portfolio grid, about/services/blog/contact pages.

- **Source:** https://colorlib.com/wp/template/cocoon/
- **Preview:** https://preview.colorlib.com/theme/cocoon/
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** `pupa` (single-page React app at `apps/pupa`)

## Design Tokens

Extracted from `https://preview.colorlib.com/theme/cocoon/assets/css/main.css`:

| Token | Value | Usage |
|-------|-------|-------|
| Font family | `"Montserrat", sans-serif` (weights 300, 300i, 400, 500) | Body + headings |
| Brand color | `#99896e` (warm taupe/gold) | Accent, buttons, section underlines, sidebar titles |
| Dark background | `#18181c` (near-black) | Sidebar, menu button hover |
| Body text color | `#9c9ca9` (muted gray) | Paragraphs, body copy |
| Heading color | `#18181c` | h3, h4, h5 |
| Page background | `#f7f7f7` (off-white) | Page body, loader overlay |
| Card background | `#ffffff` | Portfolio items, blog cards |
| Button radius | `50px` (pill) | All buttons |
| Button primary bg | `#99896e` | Primary CTA buttons |
| Section title underline | 2px solid `#99896e`, width 30px | Section headings |
| Loader | Circular spinner, `#99896e` border | Page load animation |

## Layout Structure

The template uses a **sidebar + content** layout:

- **Sidebar (left, 2-col / ~16.67%):** Fixed dark panel with logo, nav menu, filter menu, social icons, copyright
- **Content area (right, 10-col / ~83.33%):** Scrollable content

## Gherkin Requirements

### Scenario: Sidebar Navigation

```gherkin
Given the user visits the page
Then a fixed sidebar is visible on the left
And the sidebar has a dark background (#18181c)
And the sidebar contains a logo at the top
And the sidebar contains navigation links: Home, About, Services, Portfolio, Blog, Contact
And the sidebar contains a filter menu with options: All, Branding, Design, Photography, Architecture
And the sidebar contains social media icons (Pinterest, Facebook, Twitter, Dribbble)
And the sidebar contains a copyright line at the bottom
And clicking a nav link scrolls to or navigates to the corresponding section
```

### Scenario: Portfolio Grid (Home)

```gherkin
Given the user is on the home/portfolio section
Then a masonry grid of portfolio items is displayed
And each portfolio item shows a placeholder image
And hovering over a portfolio item reveals an overlay with a plus icon and project name
And portfolio items are filterable by category (branding, design, photography, architecture)
And clicking "All" shows all items
And clicking a category shows only items in that category
And the grid uses a 4-column layout on large screens
And the grid uses a 2-column layout on medium screens
And the grid uses a 1-column layout on small screens
```

### Scenario: About Section

```gherkin
Given the user navigates to the About section
Then a split layout is displayed (image left, content right)
And the heading reads "Just a few words about us"
And a description paragraph is present below the heading
And three counter boxes are displayed: Years of experience (12), Happy clients (257), Projects completed (192)
And a testimonial carousel is displayed below the counters
And the carousel shows testimonial cards with author name, role, and quote text
```

### Scenario: Services Section

```gherkin
Given the user navigates to the Services section
Then a split layout is displayed (image left, content right)
And six service items are listed: Typography Courses, Mix and Match, Architecture Plans, Brand Identity, Interior Design, Collateral Design
And each service item has a title and description paragraph
```

### Scenario: Blog Section

```gherkin
Given the user navigates to the Blog section
Then blog post cards are displayed in a main content area
And each blog card has a date badge, title, and excerpt text
And a sidebar is displayed with widgets: Search, Categories, Instagram, Tags
```

### Scenario: Contact Section

```gherkin
Given the user navigates to the Contact section
Then a split layout is displayed (image left, form right)
And the contact form contains fields: Name, Email, Subject, Message
And a "Send" button is present
And the form fields have placeholder text
```

### Scenario: Mobile Responsiveness

```gherkin
Given the user views the page on a mobile device
Then the sidebar collapses or becomes a hamburger menu
And the portfolio grid switches to a single-column layout
And the split layouts stack vertically
And all text remains readable
```

### Scenario: Visual Fidelity

```gherkin
Given the page is rendered
Then all fonts use Montserrat
And the brand color #99896e is used for accents and buttons
And buttons have pill shape (border-radius: 50px)
And section titles have a short underline accent (2px, #99896e)
And the overall aesthetic is clean, minimal, portfolio-focused
```

## Verification Checklist

- [ ] Sidebar navigation matches original (dark bg, logo, menu, filters, social, copyright)
- [ ] Portfolio masonry grid with hover overlay (+ icon + name)
- [ ] Portfolio filtering by category works
- [ ] About section with split layout, counters, testimonials
- [ ] Services section with 6 service items
- [ ] Blog section with cards and sidebar widgets
- [ ] Contact section with form (Name, Email, Subject, Message, Send)
- [ ] All design tokens match (Montserrat, #99896e, #18181c, pill buttons)
- [ ] Mobile responsive (sidebar collapses, grid stacks)
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
