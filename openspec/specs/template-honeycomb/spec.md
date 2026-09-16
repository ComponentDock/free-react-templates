# Template: Honeycomb (Construction Company)

## Purpose

Honeycomb is a single-page construction company website in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Bee" free template (source:
https://colorlib.com/wp/template/bee/), built under a DIFFERENT name
(**Honeycomb**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

The original is a Bootstrap 4 construction firm landing page with a dark
navy top info bar, a bright blue navigation bar, a full-width hero image
slider with parallax, a split request-quote-form / about section, four
service cards, a parallax CTA, a team section (4 members), a featured
projects gallery (8 items), animated stats counters, a combined services +
testimonials section, a blog grid (3 posts), and a dark footer with
newsletter signup.

**WHAT MAKES HONEYCOMB DISTINCT (signature behaviors):**

1. **Dark navy top bar (#022d5d) + bright blue navbar (#1683fb).** Two
   stacked header rows: a navy info strip with circular amber (#fda729)
   icons for email/phone and a pill-shaped quote button; below, a blue
   navbar with white links (active link = amber #fda729) and a rounded
   search form. On scroll the navbar becomes fixed white with a shadow.
2. **Hero slider with white semi-transparent overlay on right half.**
   Two slides with parallax background images; a white overlay covers
   the right 50% at 40% opacity; heading + subtext + CTA button sit in
   the right column.
3. **Split layout: quote form + about text.** Left column: amber-headered
   request-quote form (First Name, Last Name, Service dropdown, Phone,
   Message, Appointment button). Right column: "We Are Highly
   Recommendable Construction Firm" heading with description + Read More
   CTA. The form overlaps the hero via negative margin (-106px).
4. **Services with alternating icon backgrounds.** Four icon+text cards
   (Construction, House Renovation, Painting, Architecture Design) with
   circular icon containers featuring ring decorations. Icons are
   construction-themed flaticon replacements (use lucide equivalents).
5. **Services-2 flow with three distinct colored cards.** Left column in
   the testimonials section: three stacked service cards — first light
   gray (rgba(0,0,0,0.05)), second golden (#fda729), third black with
   amber accent text — each with a circular icon.
6. **Animated stats counters over a parallax background.** Four stat
   blocks (30 Years, 1500 Projects, 100 Experts, 300 Customers) with
   scroll-triggered counting animation over a background image with dark
   overlay.
7. **Testimonial carousel.** Right side of the services+testimonials
   section: a carousel of customer quotes with circular user images and
   quote icons.
8. **8-card featured projects grid.** Full-width 4×2 grid of project
   images with category label + title overlay and a zoom icon on hover.
9. **Blog section on light background (#fafafa).** Three blog cards with
   date badge overlay, title, excerpt, Read More button, and author +
   comment count.

## Design tokens (from live preview stylesheet + rendered page)

| Token          | Value                                         | Use                                                                      |
| -------------- | --------------------------------------------- | ------------------------------------------------------------------------ |
| Top bar bg     | `#022d5d` (dark navy)                         | `.bg-top` background                                                     |
| Navbar bg      | `#1683fb` (bright blue)                       | `.ftco-navbar-light` background; `#000` on mobile                        |
| Active link    | `#fda729` (golden amber)                      | `.nav-item.active > a` color, brand accent throughout                    |
| Brand icon bg  | `#fda729`                                     | `.topper .icon` circular background (40×40, radius 50%)                  |
| Topper text    | `rgba(255,255,255,0.7)`                       | Email/phone text color                                                   |
| Button primary | `#007bff` (Bootstrap blue)                    | `.btn-primary` bg + border                                               |
| Button secondary | `#6c757d` (Bootstrap gray)                  | `.btn-secondary` bg + border                                             |
| Button shape   | border-radius 50px (pill)                     | `.topper .btn` — pill-shaped in top bar; standard radius elsewhere       |
| Search form    | border-radius 30px, 1px solid rgba(255,255,255,0.1) | `.searchform` in navbar                                          |
| Request quote header | `#007bff` (bg-primary)                  | `.ftco-margin-top .request-quote .bg-primary` header block              |
| Request quote subhead | `#fda729`                            | `.ftco-margin-top .request-quote .subheading` (note: overrides bg-primary amber) |
| Slider overlay | `#fff` at 0.4 opacity, right 50% width       | `.home-slider .slider-item .overlay`                                     |
| Dark overlay   | `#000` at 0.3 opacity                        | `.hero-wrap .overlay`, `.ftco-intro .overlay`, `.ftco-counter` overlay   |
| Services-2 bg  | rgba(0,0,0,0.05) / `#fda729` / `#000`        | Three service cards (nth-child 1/2/3)                                    |
| Services-2 text| white on black card, black on others          | `.services-2:nth-child(3) .text` = rgba(255,255,255,0.8)                |
| Blog bg        | `#fafafa` (bg-light override)                 | `.ftco-section.bg-light`                                                 |
| Footer bg      | `#343a40` (bg-dark)                           | `.ftco-footer.ftco-bg-dark`                                              |
| Heading font   | `'Poppins', Arial, sans-serif`                | `font-family` on body, headings, brand                                   |
| Counter font   | `'Nunito Sans', Arial, sans-serif`            | `.ftco-counter` specific                                                 |
| Font weights   | Poppins 300–900 (headings ~600–700)           | Via Google Fonts `<link>`                                                |
| Staff hover    | Social icons fade in on hover                  | `.staff:hover .faded` opacity transition                                 |
| Project hover  | Zoom icon appears on hover                    | `.project .icon` transition                                              |

## Gherkin requirements

```gherkin
Feature: Honeycomb — Construction Company Landing Page

  Background:
    Given the user opens the Honeycomb template
    Then the page loads with Poppins font family
    And the document title contains "Honeycomb"

  Scenario: Top info bar displays contact information
    Given the top info bar is visible
    Then it shows an email address with a circular amber icon
    And it shows a phone number with a circular amber icon
    And it has a "Request A Quote" pill button on the right

  Scenario: Navigation bar with search
    Given the navigation bar is visible
    Then it displays the brand logo "Honeycomb" with a bee icon
    And it has nav links: Home, About, Project, Blog, Contact
    And it has a search input with rounded border
    When the user scrolls down
    Then the navbar becomes fixed with white background and shadow

  Scenario: Hero slider with parallax
    Given the hero slider is visible
    Then it shows a full-width background image
    And a white semi-transparent overlay covers the right half
    And the heading text is visible on the right side
    And a "Request A Quote" CTA button is present

  Scenario: Request quote form and about section
    Given the user scrolls to the quote section
    Then a request quote form is visible on the left
    And the form has fields: First Name, Last Name, Service dropdown, Phone, Message
    And an "Appointment" submit button is present
    And the about text "We Are Highly Recommendable Construction Firm" is on the right
    And a "Read More" button is below the about text

  Scenario: Services section
    Given the user scrolls to the services section
    Then 4 service cards are displayed in a row
    And each card has an icon, title, and description
    And the services are: Construction, House Renovation, Painting, Architecture Design

  Scenario: Call-to-action parallax section
    Given the user scrolls to the CTA section
    Then a background image with dark overlay is visible
    And the heading "Lets Build Your Dream Together" is displayed
    And a "Know more about us" button is present

  Scenario: Team section
    Given the user scrolls to the team section
    Then 4 team member cards are displayed
    And each card shows a photo, name, and position
    And social media icons appear on hover

  Scenario: Featured projects gallery
    Given the user scrolls to the projects section
    Then 8 project cards are displayed in a 4-column grid
    And each card shows an image, category label, and project name
    And a zoom icon appears on hover

  Scenario: Statistics counter section
    Given the user scrolls to the counter section
    Then 4 stat blocks are visible over a parallax background
    And the stats animate on scroll: 30 Years, 1500 Projects, 100 Experts, 300 Customers

  Scenario: Services and testimonials section
    Given the user scrolls to the testimonials area
    Then 3 service feature cards are on the left (gray, amber, black)
    And a testimonial carousel is on the right
    And each testimonial has a quote, name, position, and circular photo

  Scenario: Blog section
    Given the user scrolls to the blog section
    Then 3 blog post cards are displayed
    And each card has a date badge, image, title, excerpt, and "Read More" button
    And author and comment count are shown below each post

  Scenario: Footer
    Given the user scrolls to the footer
    Then the footer has a dark background (#343a40)
    And it displays: logo + description, services list, recent blog posts, newsletter signup
    And social media icon links are present
    And a copyright line with Component Dock link is shown

  Scenario: Responsive layout
    Given the user resizes to mobile width (≤767px)
    Then the navbar collapses into a hamburger menu
    And the top bar stacks vertically
    And service cards stack in a single column
    And the project grid adjusts to fewer columns
    And team member cards stack appropriately
```

## Verification checklist

- [ ] Spec folder exists: `openspec/specs/template-honeycomb/spec.md`
- [ ] Tasks/docs exist: `docs/templates/honeycomb/tasks.md`
- [ ] Preview URL fetched and tokens extracted (verified 2026-09-16)
- [ ] Source slug: `bee`, preview URL: `https://preview.colorlib.com/theme/bee/`
- [ ] New name: `honeycomb` (not reused from ColorLib source)
- [ ] All design tokens documented in spec above
- [ ] Section order matches source HTML 1:1
- [ ] No ColorLib references will appear in app code
- [ ] Footer will link Component Dock
