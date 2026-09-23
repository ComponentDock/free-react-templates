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

| Token          | Value                                                           | Notes                                                           |
| -------------- | --------------------------------------------------------------- | --------------------------------------------------------------- |
| Font family    | `Work Sans` (300–700)                                           | Google Fonts; weights: 300 (light), 400 (body), 500, 700 (bold) |
| Heading font   | `Abril Fatface` (400)                                           | Decorative serif; used in hero tagline overlay                  |
| Brand color    | `#78d5ef`                                                       | Sky blue — primary CTA, links, button bg                        |
| Brand hover    | `#4ac7ea` / `#56caeb`                                           | Darker blue on hover                                            |
| Accent / link  | `#ff9a9a`                                                       | Pink — custom link color (.btn-custom)                          |
| Accent hover   | `#ffe1e1`                                                       | Light pink — link hover                                         |
| Footer bg dark | `#3c312e`                                                       | Warm dark brown (services section)                              |
| Footer bg      | `#141313`                                                       | Near-black footer background                                    |
| Text primary   | `#212529`                                                       | Dark text                                                       |
| Text secondary | `#6c757d`                                                       | Muted gray                                                      |
| Light bg       | `#e9ecef`                                                       | Section alt background                                          |
| White          | `#ffffff`                                                       | Card / content backgrounds                                      |
| Border radius  | `0.25rem`                                                       | Default buttons                                                 |
| Button style   | `.btn-custom` — no bg, pink color, 4px solid pink bottom border | Decorative link-style CTA                                       |
| Button white   | `.btn-white.btn-outline-white`                                  | White outlined button for hero CTAs                             |

## Sections (DOM order)

1. **Navbar** — fixed dark navbar (`bg-dark`), logo "Archway", links: Home, About, Services, Projects, Blog, Contact. Transparent → solid on scroll.
2. **Hero Slider** — 2 full-height slides with background images, overlay text ("We Create Amazing Architecture Designs"), CTA button (View our works).
3. **Services** — `bg-light` section, 3-column card layout: "Perfectly Design", "Carefully Planned", "Smartly Execute". Each has icon + heading + description.
4. **About** — Two-column: heading "We are the best interior & Architect Consultant in Italy" + body text + CTA ("Learn More"), image on left.
5. **Counter / Fun Facts** — Full-width background image with dark overlay, 4 counter items: 18 Years, 351 Clients, 564 Projects, 300 Working Days.
6. **Projects / Portfolio** — "Our Projects" heading, 4-column grid of project cards with hover overlay effect.
7. **Testimonials** — "Our satisfied customer says", grid of 5 testimonial items with user image, name, role, and quote.
8. **Team / Staff** — "Our Architect Team", 4-column grid of team member cards with photo, name, role, and social icons.
9. **Blog** — "Recent Blog", 3-column grid of blog cards with image, date, author, comment count, title.
10. **CTA / Contact Strip** — "We Make Perfection" heading, body text + contact info, image on right.
11. **Footer** — Dark bg (`#141313`), 4-column: brand + description, navigation links, services list, contact info + social icons. Copyright with Component Dock link.

## Requirements

### Requirement: Navbar renders with correct links

The navbar SHALL display navigation links (Home, About, Services, Projects, Blog, Contact) and transition from transparent to solid background on scroll.

#### Scenario: Navbar renders navigation links

- **WHEN** the page is loaded
- **THEN** the navbar displays links: Home, About, Services, Projects, Blog, Contact
- **AND** the logo text "Archway" is visible

#### Scenario: Navbar transitions on scroll

- **WHEN** the user scrolls past 50px
- **THEN** the navbar background becomes solid

### Requirement: Hero slider displays slides

The hero section SHALL display a full-height hero with background image, headline, description, and CTA button.

#### Scenario: Hero section renders

- **WHEN** the page is loaded
- **THEN** the hero section renders with a headline "We Create Amazing Architecture Designs"
- **AND** a description paragraph is displayed
- **AND** a "View our works" CTA button links to #projects

### Requirement: Services section shows three cards

The services section SHALL display 3 service cards with icons, headings, and descriptions on a light background.

#### Scenario: Services section renders three cards

- **WHEN** the services section is visible
- **THEN** 3 service cards are displayed: "Perfectly Design", "Carefully Planned", "Smartly Execute"
- **AND** each card has an icon, heading, and description
- **AND** the section has a light background

### Requirement: About section displays two-column layout

The about section SHALL display a two-column layout with an image on the left, heading, body text, and a "Learn More" link on the right.

#### Scenario: About section renders correctly

- **WHEN** the about section is visible
- **THEN** a heading "We are the best interior & Architect Consultant in Italy" is shown
- **AND** body paragraphs are displayed
- **AND** a "Learn More" link is present

### Requirement: Counter section shows stats

The counter section SHALL display 4 statistic items with numbers and labels on a dark background.

#### Scenario: Counter section renders all stats

- **WHEN** the counter section is visible
- **THEN** 4 stat items are displayed: 18 Years of Experienced, 351 Happy Clients, 564 Finished Projects, 300 Working Days

### Requirement: Projects grid displays portfolio items

The projects section SHALL display 4 project cards in a grid with hover overlay effects.

#### Scenario: Projects section renders four cards

- **WHEN** the projects section is visible
- **THEN** 4 project cards are displayed in a grid
- **AND** the section heading is "Our Projects"

### Requirement: Testimonials section shows reviews

The testimonials section SHALL display testimonial cards with user images, names, roles, and quotes.

#### Scenario: Testimonials section renders all items

- **WHEN** the testimonials section is visible
- **THEN** 5 testimonial items are displayed
- **AND** each item shows a user name and quote text

### Requirement: Team section displays staff cards

The team section SHALL display 4 team member cards with photos, names, roles, and social media links.

#### Scenario: Team section renders member cards

- **WHEN** the team section is visible
- **THEN** 4 team member cards are displayed
- **AND** each card shows a photo, name, role, and social icons

### Requirement: Blog section shows recent posts

The blog section SHALL display 3 blog entry cards with images, dates, authors, comment counts, and titles.

#### Scenario: Blog section renders three posts

- **WHEN** the blog section is visible
- **THEN** 3 blog entry cards are displayed
- **AND** each card shows an image, date, author, and comment count

### Requirement: CTA section shows contact strip

The CTA section SHALL display a heading, body text, and a "Learn More" link.

#### Scenario: CTA section renders correctly

- **WHEN** the CTA section is visible
- **THEN** a heading "We Make Perfection" is displayed
- **AND** body text is shown

### Requirement: Footer renders all widgets with Component Dock link

The footer SHALL display 4 columns (brand, links, services, contact) with a dark background and a link to https://www.componentdock.com/.

#### Scenario: Footer renders all columns

- **WHEN** the footer is visible
- **THEN** 4 footer columns are displayed
- **AND** a copyright line is present
- **AND** a link to https://www.componentdock.com/ is present with text "Component Dock"

## Verification checklist

- [ ] All 11 sections present in correct DOM order
- [ ] Navbar: transparent → solid on scroll, correct links
- [ ] Hero: 2 slides, carousel works, CTAs functional
- [ ] Services: 3 cards with icon + heading + description
- [ ] About: 2-column layout with heading + image
- [ ] Counter: 4 stats with labels
- [ ] Projects: 4-column grid with hover effects
- [ ] Testimonials: 5 items with user images and quotes
- [ ] Team: 4 member cards with social icons
- [ ] Blog: 3 cards with metadata
- [ ] CTA: heading + body text
- [ ] Footer: 4 columns, dark bg (#141313), Component Dock link
- [ ] Fonts: Work Sans loaded via Google Fonts, Abril Fatface for hero
- [ ] Colors: brand #78d5ef, accent #ff9a9a, dark #3c312e, footer #141313
- [ ] No ColorLib references in app source code
- [ ] Placeholder images via picsum.photos
- [ ] Responsive: mobile-friendly layout at all breakpoints
