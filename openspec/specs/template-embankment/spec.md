# Template: Embankment (Construction Company)

## Purpose

Embankment is a single-page construction company website in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Builder" free template (source:
https://colorlib.com/wp/template/builder/), built under a DIFFERENT name
(**Embankment**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4
+ TypeScript.

The original is a Bootstrap 4 construction firm landing page with a thin
top menu bar (social icons + language selector + "Free Quote!" CTA), a
white navbar with logo + dropdown navigation, a full-width hero banner
with parallax background and centered heading, a 3-column services section,
a 6-item project gallery grid, a 4-member team section with hover overlay,
a golden counter stats bar, a 6-item features grid, a testimonial carousel,
a client logo carousel, and a dark footer with newsletter.

**WHAT MAKES EMBANKMENT DISTINCT (signature behaviors):**

1. **Thin top menu bar + white navbar with dropdowns.** A narrow top strip
   with social icons (Facebook, Twitter, Dribbble, Behance), a language
   select dropdown, and a golden "Free Quote!" pill button. Below, a white
   navbar with logo image, nav links (Home, About, Services, Pages dropdown,
   Blog dropdown, Contact), and a search icon. The navbar becomes fixed on
   scroll with a smooth transition.
2. **Full-width hero banner with centered content.** A parallax background
   image with a dark overlay; centered white heading "Build Your Dream"
   (with "Dream" in golden #fab700), subtitle text, and a dark "Discover
   Now" CTA button (bg #222, color #fab700, radius 5px).
3. **3-column services with icon images.** Three service cards (Building
   Drawings, Painting Constructions, Repairing Constructions) each with a
   PNG icon image, title link, and description. White cards with subtle
   hover shadow.
4. **6-item project gallery with hover text overlay.** A 3×2 grid of
   construction project images; on hover, centered text (title + description)
   fades in over the image without a colored overlay.
5. **4-member team with golden hover overlay.** Team cards with photos; on
   hover, a golden semi-transparent overlay (rgba(250,183,0,0.85)) covers
   the image and social icons (Facebook, Twitter, LinkedIn) fade in.
6. **Golden counter stats bar.** A full-width golden (#fab700) background
   section with 5 animated stat blocks (596 Projects, 552 Clients, 5962
   Tasks, 1009 Coffee, 435 Professionals) in large Oswald font.
7. **6-item features grid with bordered cards.** White cards with 1px #eee
   border, 10px radius, each with a line icon + title + description.
8. **Testimonial carousel with media layout.** Each testimonial shows a
   circular avatar on the left and quote text + name + role on the right,
   on a very light purple-gray (#f9f9ff) background.
9. **Client logo carousel.** A row of grayscale client logos that brighten
   on hover.
10. **Dark footer with newsletter.** Dark (#222) footer with About Us,
    Contact Us, and Newsletter sections; the newsletter has an email input
    with a golden arrow submit button.

## Design tokens (from live preview stylesheet + rendered page)

| Token            | Value                                         | CSS Source                                                            |
| ---------------- | --------------------------------------------- | --------------------------------------------------------------------- |
| Top menu border  | `1px solid #eeeeee`                           | `.top_menu { border-bottom: 1px solid #eee; }`                        |
| Social icons     | `#ccc` default, `#fab700` on hover            | `.top_menu .header_social li a`                                       |
| Quote button bg  | `#fab700` (golden yellow)                     | `.top_menu .dn_btn { background: #fab700; color: #fff; }`             |
| Quote button     | border 1px solid `#fab700`, radius not set    | `.top_menu .dn_btn`                                                   |
| Navbar bg        | `#fff` (white, implied)                       | `.header_area .navbar`                                                |
| Nav link color   | `#222222`                                     | `.nav-item .nav-link { color: #222222; }`                             |
| Active/hover link| `#fab700`                                     | `.nav-item:hover .nav-link, .nav-item.active .nav-link { color: #fab700; }` |
| Search icon      | `#222222`                                     | `.header_area .navbar .search { color: #222222; }`                    |
| Hero heading     | `'Oswald'`, `#fff`                            | `.banner_content h3 { font-family: "Oswald"; color: #fff; }`          |
| Hero "Dream"     | `#fab700`                                     | `.banner_content h3 span { color: #fab700; }` (implied from accent)   |
| Hero subtitle    | `'Poppins'`, `#fff`                           | `.banner_content h5 { font-family: "Poppins"; color: #fff; }`         |
| Hero CTA         | bg `#222222`, color `#fab700`, radius 5px     | `.black_btn { background: #222222; color: #fab700; border-radius: 5px; }` |
| Hero CTA size    | padding 0 44px, line-height 50px, 13px bold   | `.black_btn`                                                          |
| Hero overlay     | background image (parallax), no color overlay | `.banner_inner .overlay { background: url(../img/banner/home-banner.jpg); }` |
| Hero height      | min-height 700px                              | `.home_banner_area { min-height: 700px; }`                            |
| Services bg      | white (default page bg)                       | `.services_area { padding: 120px 0; }`                                |
| Service card     | padding 45px 55px, radius 10px                | `.services_item { padding: 45px 55px; border-radius: 10px; }`         |
| Service hover    | shadow `0px 10px 30px rgba(0,0,0,0.1)`        | `.services_item:hover`                                                |
| Service icon     | PNG images (replace with lucide)              | `.services_item img`                                                  |
| Project grid     | 3-column (33.33%), no gutters                 | `.builder_inner .builder_item { flex: 0 0 33.33%; }`                  |
| Project hover    | text overlay fades in (opacity 0→1)           | `.builder_item .hover { opacity: 0; }` → `:hover { opacity: 1; }`     |
| Project hover text| `#222222`, 20px Oswald heading                | `.builder_item .hover h4 { color: #222222; }`                         |
| Team photo       | Full width, relative positioned               | `.team_img { position: relative; }`                                   |
| Team hover overlay| `rgba(250,183,0,0.85)` (85% golden)         | `.team_img:before { background: rgba(250,183,0,0.85); }`              |
| Team social      | Facebook, Twitter, LinkedIn icons fade in     | `.team_img .hover { opacity: 0; }` → `:hover { opacity: 1; }`        |
| Counter bg       | `#fab700` (golden)                            | `.counter_area { background: #fab700; padding: 115px 0; }`            |
| Counter numbers  | 48px Oswald 500, `#222222`                    | `.counter_item h4 { font-size: 48px; font-family: "Oswald"; color: #222222; }` |
| Counter labels   | Roboto, `#222222`                             | `.counter_item p`                                                     |
| Features bg      | white (default page bg)                       | `.feature_area { padding: 120px 0; }`                                 |
| Feature card     | white, 1px `#eee` border, radius 10px         | `.feature_item { background: #fff; border: 1px solid #eee; border-radius: 10px; }` |
| Feature icon     | linecons (lnr) — replace with lucide          | `.feature_item h4 i`                                                  |
| Testimonials bg  | `#f9f9ff` (very light purple-gray)            | `.testimonials_area { background: #f9f9ff; }`                         |
| Testimonial layout| media: image left, text right                | `.testi_item .media`                                                  |
| Client logos     | Grayscale, brighten on hover                  | `.clients_logo_area .clients_slider .item img`                        |
| Footer bg        | `#222222` (dark charcoal)                     | `.footer-area { background: #222222; }`                               |
| Footer heading   | 20px Oswald 500, `#fff`                       | `.footer_title { font-family: "Oswald"; color: #fff; }`               |
| Footer text      | Roboto, `#fff` (implied light)                | `.single-footer-widget p`                                             |
| Newsletter input | borderless, with golden submit button          | `.subscribe_form .input-group`                                        |
| Subscribe button | bg `#fab700`, color `#222222`, 36×36px        | `.sub-btn { background: #fab700; color: #222222; }`                   |
| Heading font     | `'Oswald', sans-serif`                        | `.main_title h2`, headings throughout                                 |
| Body font        | `'Roboto', sans-serif`                        | body default                                                          |
| Accent font      | `'Poppins', sans-serif`                       | banner subtitle h5                                                    |
| Body text color  | `#777777`                                     | body default                                                          |
| Heading text     | `#222222`                                     | h2, h3, h4 throughout                                                 |

## Gherkin requirements

```gherkin
Feature: Embankment — Construction Company Landing Page

  Background:
    Given the user opens the Embankment template
    Then the page loads with Oswald + Roboto font families
    And the document title contains "Embankment"

  Scenario: Top menu bar with social icons and CTA
    Given the top menu bar is visible
    Then it shows social media icons (Facebook, Twitter, Dribbble, Behance)
    And it has a language selector dropdown
    And it has a golden "Free Quote!" button

  Scenario: Navigation bar with dropdowns
    Given the navigation bar is visible
    Then it displays a logo image
    And it has nav links: Home, About, Services, Pages (dropdown), Blog (dropdown), Contact
    And it has a search icon on the right
    When the user scrolls down
    Then the navbar becomes fixed with white background

  Scenario: Hero banner with parallax
    Given the hero banner is visible
    Then a full-width parallax background image is displayed
    And the heading "Build Your Dream" is centered (with "Dream" in golden)
    And a subtitle paragraph is below the heading
    And a dark "Discover Now" CTA button with golden text is present

  Scenario: Services section
    Given the user scrolls to the services section
    Then 3 service cards are displayed in a row
    And each card has an icon, title link, and description
    And hovering a card shows a subtle shadow

  Scenario: Latest projects gallery
    Given the user scrolls to the projects section
    Then 6 project cards are displayed in a 3-column grid
    And each card shows a construction project image
    And hovering a card reveals centered title and description text

  Scenario: Team section
    Given the user scrolls to the team section
    Then 4 team member cards are displayed
    And each card shows a photo, name, and position
    And hovering a card shows a golden semi-transparent overlay with social icons

  Scenario: Counter statistics bar
    Given the user scrolls to the counter section
    Then a golden background section is visible
    And 5 stat blocks are displayed: Projects Completed, Happy Clients, Total Tasks, Cups of Coffee, In House Professionals
    And the numbers animate on scroll

  Scenario: Features section
    Given the user scrolls to the features section
    Then 6 feature cards are displayed in a 3-column grid
    And each card has a line icon, title, and description
    And cards have white background with subtle border

  Scenario: Testimonials carousel
    Given the user scrolls to the testimonials section
    Then a carousel of testimonials is displayed
    And each testimonial has an avatar image on the left
    And quote text, name, and role on the right
    And the section has a light purple-gray background

  Scenario: Client logos carousel
    Given the user scrolls to the clients section
    Then a row of client logos is displayed in a carousel
    And logos are grayscale and brighten on hover

  Scenario: Footer
    Given the user scrolls to the footer
    Then the footer has a dark background (#222222)
    And it displays: About Us, Contact Us, and Newsletter sections
    And the newsletter has an email input with a golden submit button
    And social media icons are shown in the footer bottom
    And a copyright line with Component Dock link is shown

  Scenario: Responsive layout
    Given the user resizes to mobile width (≤767px)
    Then the navbar collapses into a hamburger menu
    Then the top menu stacks appropriately
    And service cards stack in a single column
    And the project grid adjusts to fewer columns
    And team member cards stack appropriately
```

## Verification checklist

- [ ] Spec folder exists: `openspec/specs/template-embankment/spec.md`
- [ ] Tasks/docs exist: `docs/templates/embankment/tasks.md`
- [ ] Preview URL fetched and tokens extracted (verified 2026-09-16)
- [ ] Source slug: `builder`, preview URL: `https://preview.colorlib.com/theme/builder/`
- [ ] New name: `embankment` (not reused from ColorLib source)
- [ ] All design tokens documented in spec above
- [ ] Section order matches source HTML 1:1
- [ ] No ColorLib references will appear in app code
- [ ] Footer will link Component Dock
