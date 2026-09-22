# Template: Roofcrest (Roofing / Construction)

## Purpose

Recreation of ColorLib's **Roofing** contractor/construction company template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page application.

- **Source:** https://colorlib.com/wp/template/roofing/
- **Preview (analyzed):** https://preview.colorlib.com/theme/roofing/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/roofing-free-template.jpg
- **Package:** `@free-react-templates/roofcrest`
- **Surge target:** `https://roofcrest.free.componentdock.com`

## Design Tokens

Extracted from the preview's `css/style.css`:

| Token | Value | Usage |
|-------|-------|-------|
| Brand / primary | `#d9ba2b` | Buttons, counter bg, video icon, accent text |
| Background light | `#ebecf1` | Alternating section backgrounds (`.bg-light`) |
| Text dark | `#000000` | Headings, strong text |
| Text body | `#5c5c5c` | Paragraph copy |
| Font family | `Poppins, sans-serif` | Global body + headings (via Cloudflare font service) |
| Button radius | `4px` | All `.btn` elements |
| Button style | uppercase, letter-spacing 1px, font-weight 600, font-size 11px | All CTA buttons |
| Counter icon bg | `#fff` (white circle) | Counter section icon circles |
| Counter icon text | `#d9ba2b` | Counter section icon color |
| Nav pill active bg | white with shadow | Tab navigation active state |
| Overlay | semi-transparent dark | Hero section overlays |

## Section Structure (order from preview DOM)

1. **Navbar** — dark background, logo with roof icon + "Roofing" text, nav links: Home, About, Services, Project, Blog, Contact, hamburger for mobile
2. **Hero Slider** — 2-slide full-viewport-height carousel with parallax bg images, centered text: "We care about your home" heading, description paragraph, two buttons: "Get a quote" + "Learn more"
3. **About/Quote Section** — light bg, 2-column: left = heading "We help more than 45 years installing your roof" + paragraph + tabbed content (Our Mission, Our Vision, Our Value); right = "Get a Quote" form (service select, name, date, time, message, submit)
4. **Counter Section** — brand color (#d9ba2b) bg, 4 stats: 45 Years of Experience, 8500 Projects Completed, 2342 Happy Clients, 30 Business Partners. Each: white icon circle + number + label
5. **Services Section** — "Our Best Services" heading, 2-column: left = vertical tab navigation (Skylights, Waterproofing, Industrial Roofing, Residential Roofing, Gutter Cleaning, Commercial Roofing) with icons; right = tab content (title, paragraphs, checklist)
6. **Projects Section** — "Done Projects" heading, 4-column grid of work images with hover overlay (expand icon), title, and category label
7. **Testimonials** — "Testimonial" heading, carousel of testimonial items: user avatar, quote icon, paragraph, author name + position
8. **Blog Section** — 3-column blog entries: background image, author avatar + name + date, title
9. **Footer** — 5-column: Logo + description + social links, Services list, Business Hours, Contact info, Newsletter subscribe

## Gherkin Requirements

### Feature: Navbar

Scenario: Logo and navigation display
  Given the user is on any page
  Then a roof icon and "Roofcrest" logo are visible
  And navigation links "Home", "About", "Services", "Project", "Blog", "Contact" are visible

Scenario: Mobile hamburger menu
  Given the viewport is mobile width (< 768px)
  Then a hamburger menu icon is visible
  And clicking it opens a slide-in mobile menu

### Feature: Hero Slider

Scenario: Hero slider displays
  Given the user lands on the page
  Then a full-viewport-height hero slider with parallax backgrounds is shown
  And the heading "We care about your home" is displayed
  And two buttons appear: "Get a quote" and "Learn more"

Scenario: Hero auto-slides
  Given the hero slider is loaded
  Then slides advance automatically at regular intervals

### Feature: About & Quote

Scenario: About section displays
  Given the user scrolls past the hero
  Then "We help more than 45 years installing your roof" heading is shown
  And a paragraph about the company is visible
  And tabbed content with "Our Mission", "Our Vision", "Our Value" is displayed

Scenario: Quote form displays
  Given the about section is visible
  Then a "Get a Quote" form is shown on the right
  And fields for Service (select), Name, Date, Time, Message are visible
  And a submit button is present

### Feature: Counter Section

Scenario: Stats display
  Given the user scrolls to the counter section
  Then a golden background (#d9ba2b) section with 4 stats is shown
  And "45 Years of Experience", "8500 Projects Completed", "2342 Happy Clients", "30 Business Partners" are displayed

### Feature: Services

Scenario: Tabbed services display
  Given the user scrolls to the services section
  Then "Our Best Services" heading is shown
  And a vertical tab navigation with 6 services is visible (Skylights, Waterproofing, Industrial Roofing, Residential Roofing, Gutter Cleaning, Commercial Roofing)
  And clicking each tab shows title, paragraphs, and a checklist

### Feature: Projects

Scenario: Project grid displays
  Given the user scrolls to the projects section
  Then "Done Projects" heading is shown
  And 4 project images are displayed in a row
  And each has a hover overlay with expand icon, title, and category

### Feature: Testimonials

Scenario: Testimonial carousel displays
  Given the user scrolls to testimonials
  Then "Testimonial" heading is shown
  And a carousel of testimonials appears
  And each has a user avatar, quote icon, paragraph, author name, and position

### Feature: Blog

Scenario: Three blog entries display
  Given the user scrolls to the blog section
  Then 3 blog cards appear in a row
  And each has a background image, author info (avatar + name + date), and title

### Feature: Footer

Scenario: Footer layout
  Given the user scrolls to the footer
  Then 5 columns are shown: Logo + description, Services list, Business Hours, Contact info, Newsletter
  And social media links (Twitter, Facebook, Instagram) are visible

Scenario: Footer links to Component Dock
  Given the footer is visible
  Then a link to https://www.componentdock.com/ is present with text "Component Dock"

## Verification Checklist

- [ ] All sections present in correct order matching preview DOM
- [ ] Brand color `#d9ba2b` applied to buttons, counters, accent elements
- [ ] Font Poppins applied globally
- [ ] Buttons have 4px border-radius, uppercase, letter-spacing
- [ ] Hero is full viewport height with parallax bg and 2 slides
- [ ] About section has tabbed content (Mission/Vision/Value)
- [ ] Quote form with 5 fields + submit
- [ ] Counter section with golden bg and 4 stats
- [ ] Services section with vertical tab navigation and 6 services
- [ ] Projects grid with 4 images and hover overlays
- [ ] Testimonials with carousel, avatars, quote icons
- [ ] Blog with 3 cards and author info
- [ ] Footer is 5-column with services, hours, contact, newsletter
- [ ] Footer links to Component Dock
- [ ] No references to ColorLib in app code
- [ ] All images use picsum.photos placeholders (deterministic seeds)
- [ ] Mobile responsive: hamburger menu, stacked columns
- [ ] 100% test coverage
