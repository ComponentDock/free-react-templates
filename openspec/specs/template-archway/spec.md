# Template: Archway (Interior Design / Architecture)

## Purpose

Recreation of ColorLib "Klift" — an interior design & architecture consultant website template.

- **Source:** https://colorlib.com/wp/template/klift/
- **Preview:** https://preview.colorlib.com/theme/klift/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/klift-free-template.jpg
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript
- **Design category:** Interior Design / Architecture consultant site

## Design tokens

Extracted from the live preview CSS (`css/style.css`):

| Token             | Value                        | Notes                                         |
| ----------------- | ---------------------------- | --------------------------------------------- |
| Font family       | `Work Sans` (300–700)        | Google Fonts; weights: 300 (light), 400 (body), 500, 700 (bold) |
| Heading font      | `Abril Fatface` (400)        | Decorative serif; used in hero tagline overlay |
| Brand color       | `#78d5ef`                    | Sky blue — primary CTA, links, button bg       |
| Brand hover       | `#4ac7ea` / `#56caeb`       | Darker blue on hover                           |
| Accent / link     | `#ff9a9a`                    | Pink — custom link color (.btn-custom)          |
| Accent hover      | `#ffe1e1`                    | Light pink — link hover                         |
| Footer bg dark    | `#3c312e`                    | Warm dark brown (services section)              |
| Footer bg         | `#141313`                    | Near-black footer background                    |
| Text primary      | `#212529`                    | Dark text                                       |
| Text secondary    | `#6c757d`                    | Muted gray                                      |
| Light bg          | `#e9ecef`                    | Section alt background                          |
| White             | `#ffffff`                    | Card / content backgrounds                      |
| Border radius     | `0.25rem`                    | Default buttons                                 |
| Button style      | `.btn-custom` — no bg, pink color, 4px solid pink bottom border | Decorative link-style CTA |
| Button white      | `.btn-white.btn-outline-white` | White outlined button for hero CTAs            |

## Sections (DOM order)

1. **Navbar** — fixed dark navbar (`bg-dark`), logo "Klift", links: Home, About, Services, Projects, Contact. Transparent → solid on scroll.
2. **Hero Slider** — owl-carousel, 3 full-height slides with background images, overlay text ("We Create Amazing Architecture Designs"), two CTA buttons (View our works / Virtually Build Your Home).
3. **Services** — `bg-light` section, 3-column card layout: "Perfectly Design", "Carefully Planned", "Smartly Execute". Each has icon + heading + description. Uses `.btn-custom` link.
4. **About** — Two-column: heading "We are the best interior & Architect Consultant in Italy" + body text + CTA ("View our works"), image on right. Parallax-like effect.
5. **Counter / Fun Facts** — Full-width parallax background image (`#3c312e` overlay), 4 counter items: 18 Projects, 351 Clients, 564 Hours, 300 Awards. Animated count-up.
6. **Projects / Portfolio** — "Our Projects" heading, 4-column grid of project cards ("Office Interior Design in Paris"), hover overlay effect.
7. **Testimonials** — "Our satisfied customer says", owl-carousel carousel, 5 testimonial items with user image, name, and quote.
8. **Team / Staff** — "Our Architect Team", 4-column grid of team member cards with photo, name ("David Smith"), role ("Architect"), social icons (Facebook, Twitter, LinkedIn, Instagram).
9. **Blog** — "Recent Blog", 3-column grid of blog cards with image, date ("Sep. 20, 2018"), author ("Admin"), comment count ("3"), title + excerpt.
10. **CTA / Contact Strip** — "We Make Perfection" heading, body text + contact info (address, phone, email), image on right. Dark background.
11. **Footer** — Dark bg (`#141313`), 4-column: brand + description, navigation links, services list, contact info + social icons. Copyright line.

## Gherkin requirements

### Feature: Archway Template

#### Scenario: Navbar renders with correct links
- Given the page is loaded
- Then the navbar displays links: Home, About, Services, Projects, Contact
- And the navbar transitions from transparent to solid on scroll
- And the logo text is visible

#### Scenario: Hero slider displays slides
- Given the page is loaded
- Then the hero section renders a carousel with 3 slides
- And each slide shows a headline and two CTA buttons
- And slides auto-rotate on interval

#### Scenario: Services section shows three cards
- Given the page is loaded
- When the services section is visible
- Then 3 service cards are displayed
- And each card has a heading, description, and icon
- And the section has a light background

#### Scenario: About section displays two-column layout
- Given the page is loaded
- When the about section is visible
- Then a heading "We are the best interior & Architect Consultant in Italy" is shown
- And a body paragraph is displayed
- And a CTA button links to projects
- And an image appears on the opposite side

#### Scenario: Counter section shows animated stats
- Given the page is loaded
- When the counter section scrolls into view
- Then 4 stat items are displayed
- And each stat shows a number and label
- And numbers animate from 0 to their target value

#### Scenario: Projects grid displays portfolio items
- Given the page is loaded
- When the projects section is visible
- Then 4 project cards are displayed in a grid
- And each card shows a project image with hover overlay
- And the section heading is "Our Projects"

#### Scenario: Testimonials carousel shows reviews
- Given the page is loaded
- When the testimonials section is visible
- Then a carousel displays 5 testimonial items
- And each item shows a user image, name, and quote text

#### Scenario: Team section displays staff cards
- Given the page is loaded
- When the team section is visible
- Then 4 team member cards are displayed
- And each card shows a photo, name, role, and social icons

#### Scenario: Blog section shows recent posts
- Given the page is loaded
- When the blog section is visible
- Then 3 blog entry cards are displayed
- And each card shows an image, date, author, comment count, title, and excerpt

#### Scenario: CTA section shows contact strip
- Given the page is loaded
- When the CTA section is visible
- Then a heading "We Make Perfection" is displayed
- And contact information is shown (address, phone, email)

#### Scenario: Footer renders all widgets
- Given the page is loaded
- When the footer is visible
- Then 4 footer columns are displayed
- And a copyright line is present
- And footer links point to https://www.componentdock.com/

### Scenario: Component Dock attribution in footer
- Given the template is deployed
- When the footer is rendered
- Then a link to https://www.componentdock.com/ is present
- And the link text includes "Component Dock"

## Verification checklist

- [ ] All 11 sections present in correct DOM order
- [ ] Navbar: transparent → solid on scroll, correct links
- [ ] Hero: 3 slides, carousel works, CTAs functional
- [ ] Services: 3 cards with icon + heading + description
- [ ] About: 2-column layout with heading + image
- [ ] Counter: 4 stats animate on scroll
- [ ] Projects: 4-column grid with hover effects
- [ ] Testimonials: carousel with 5 items, user images
- [ ] Team: 4 member cards with social icons
- [ ] Blog: 3 cards with metadata
- [ ] CTA: heading + contact info
- [ ] Footer: 4 columns, dark bg (#141313), Component Dock link
- [ ] Fonts: Work Sans loaded via Google Fonts, Abril Fatface for hero
- [ ] Colors: brand #78d5ef, accent #ff9a9a, dark #3c312e, footer #141313
- [ ] No ColorLib references in app source code
- [ ] Placeholder images via picsum.photos
- [ ] Responsive: mobile-friendly layout at all breakpoints
