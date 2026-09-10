# Template: BizPulse (Classic Business)

## Purpose

Recreation of ColorLib **BizPro** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page business website.

- **Source slug:** `bizpro`
- **Source URL:** https://colorlib.com/wp/template/bizpro/
- **Preview URL:** https://preview.colorlib.com/theme/bizpro/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bizpro-free-classic-website-template.jpg
- **Category:** Classic Business — one-page corporate site with hero carousel, about, services, portfolio grid, team, skills, testimonials, pricing, blog, contact, and footer.

## Design Tokens

Extracted from the preview's CSS (`css/style.css`):

| Token | Value | Usage |
|---|---|---|
| Brand / Accent | `#d73e4d` (coral-red) | Logo, active nav, icons, section divider, pricing "buy" button, form submit button, "p-color-bg" utility |
| Heading text | `#373a3f` (dark charcoal) | All section titles, service headings, pricing names |
| Body text | `#696f78` (medium gray) | Paragraph copy, descriptions |
| Light body | `#9d9f9f` / `#808489` | Secondary text, inactive labels |
| White | `#fff` | Page backgrounds, hero text, button text on accent |
| Section alternate bg | `#f9f9f9` | Alternate section background (e.g. services) |
| Footer bg | `#232a34` (dark navy) | Footer background |
| Middle banner bg | parallax image + `rgba(0,0,0,0.8)` overlay | CTA banner between portfolio and team |
| Skill bar colors | `#677fb5` (steel), `#70c2e9` (sky), `#d8545d` (red), `#007ab9` (blue) | Skill progress bars |
| Font family | `'Raleway', sans-serif` | All text (headings + body) |
| Border radius (icons) | `50%` (circular) | About icons, social icons, team overlay |
| Border radius (buttons) | `5px` | Pricing CTA, form submit |
| Border radius (cards) | `15px` | Pricing cards, blog post cards |

### Section Backgrounds

| Section | Background |
|---|---|
| Hero / Banner | Full-width photo with dark overlay, parallax. Carousel with 3 slides. |
| About | Solid white `#fff` |
| Services | White / light `#f9f9f9` |
| Portfolio | White with filter menu |
| Middle Banner | Parallax image with `rgba(0,0,0,0.8)` overlay |
| Team | White |
| Skills | Split: image left, progress bars right; white bg |
| Clients / Testimonials | White with slider |
| Pricing | White with 3-column cards |
| Blog | White with 3-column cards |
| Partners | White with logo carousel |
| Contact | White, 2-column: info + map, then form below |
| Footer | Dark `#232a34` |

## Visual Design Notes (from Screenshot)

- **Navbar:** Transparent overlay on hero, fixed. Logo in coral script font left, nav links right in all-caps white sans-serif. Active link highlighted in coral.
- **Hero:** Full-viewport photo carousel (moody European cityscape), centered headline "HELLO WE'RE BIZPRO" in large bold white sans-serif, subtitle, ghost button "See Our Projects". Left/right carousel arrows.
- **About:** 4-column circular icons (coral border) with service names + lorem text below. Hover reveals coral fill.
- **Services:** 3×2 grid of service cards with icon + title + description. Clean, white background.
- **Portfolio:** Filterable grid (All/Web Design/Photography/etc.) with image thumbnails. Hover reveals overlay with title and breadcrumb tags.
- **Middle Banner:** Full-width parallax with dark overlay, centered headline + CTA button.
- **Team:** 3 members in a row, each with photo, hover overlay (name, role, social icons), name + role + social links below.
- **Skills:** 5 progress bars (Web Dev 89%, Online Marketing 58%, Digital Media 49%, Photography 76%, Creative Design 64%) with image on left.
- **Clients:** Testimonial slider with avatar, quote, client name.
- **Pricing:** 3 cards (Basic $9.99, Advanced $39.99, Premium $59.99) with feature list and coral CTA button.
- **Blog:** 3-column cards with image, title, date/author, excerpt, "Read More" link.
- **Partners:** Logo carousel.
- **Contact:** 2-column top (info with icon list + map placeholder), full-width form below (First Name, Last Name, Email, Subject, Message, Send Message button).
- **Footer:** Dark background, logo, social icon circles, copyright with Colorlib attribution → replaced with "Component Dock" link.

## Gherkin Requirements

### Scenario: Navbar renders with correct links
- Given the page loads
- When I view the navigation bar
- Then I see a logo on the left
- And I see links: Home, About, Services, Portfolio, Team, Skill, Clients, Pricing, Blog, Contact
- And clicking each link scrolls to the corresponding section
- And the navbar becomes sticky on scroll with a solid background

### Scenario: Hero carousel displays slides
- Given the page loads
- When I view the hero section
- Then I see a full-width background image with dark overlay
- And a large headline in white text is centered
- And a subtitle is shown below the headline
- And a ghost button with white border is shown
- And left/right arrows allow cycling through slides
- And slides auto-advance

### Scenario: About section shows services overview
- Given the page loads
- When I scroll to the About section
- Then I see a section title with coral underline
- And I see 4 circular icons in a row
- And each icon has a service name and description below
- And hovering an icon shows a coral background fill

### Scenario: Services section displays service cards
- Given the page loads
- When I scroll to the Services section
- Then I see a section title "SERVICES WE PROVIDE"
- And I see 6 service cards in a 3×2 grid
- And each card has an icon, title, and description paragraph

### Scenario: Portfolio section has filterable gallery
- Given the page loads
- When I scroll to the Portfolio section
- Then I see a filter menu with options: All, Web Design, Photography, Web Development, Online Marketing, Digital Media, Support
- And I see a grid of project images
- And clicking a filter shows only matching projects
- And hovering a project image shows an overlay with title and tags

### Scenario: Middle banner CTA
- Given the page loads
- When I scroll past the portfolio
- Then I see a full-width parallax banner
- And it has a dark overlay with centered text and a CTA button
- And the button says "Let's Work Together"

### Scenario: Team section shows members
- Given the page loads
- When I scroll to the Team section
- Then I see 3 team members in a row
- And each member has a photo with hover overlay showing name, role, and description
- And below the photo is the member name, role, and social media icon links

### Scenario: Skills section shows progress bars
- Given the page loads
- When I scroll to the Skills section
- Then I see an image on the left side
- And 5 skill progress bars on the right
- And each bar shows skill name and percentage
- And the bars are: Web Development 89%, Online Marketing 58%, Digital Media 49%, Photography 76%, Creative Design 64%

### Scenario: Clients section displays testimonials
- Given the page loads
- When I scroll to the Clients section
- Then I see a testimonial slider
- And each slide shows a client avatar, quote text, and client name
- And navigation allows cycling through testimonials

### Scenario: Pricing section shows plans
- Given the page loads
- When I scroll to the Pricing section
- Then I see 3 pricing cards in a row
- And each card has a plan name, price, feature list, and a CTA button
- And the plans are: Basic ($9.99/mo), Advanced ($39.99/mo), Premium ($59.99/mo)
- And each feature list has 5 items

### Scenario: Blog section shows posts
- Given the page loads
- When I scroll to the Blog section
- Then I see 3 blog post cards in a row
- And each card has a thumbnail image, title, date/author, excerpt, and "Read More" link

### Scenario: Contact section has form and info
- Given the page loads
- When I scroll to the Contact section
- Then I see a 2-column layout: contact info (left) and map placeholder (right)
- And contact info shows address, phone, and email with circular coral icons
- And below is a contact form with fields: First Name, Last Name, Email, Subject, Message
- And a "Send Message" button styled with coral background

### Scenario: Footer renders with social links
- Given the page loads
- When I scroll to the footer
- Then I see a dark background footer
- And it shows the logo centered
- And circular social media icon links are displayed
- And a copyright line is shown with a link to "Component Dock"

### Scenario: Responsive layout adapts to mobile
- Given the page loads on a mobile viewport
- When I view the navigation
- Then the nav links collapse into a hamburger menu
- And multi-column grids stack to single column
- And the hero text scales down appropriately

## Verification Checklist

- [ ] All 13 sections present in correct order: Navbar → Hero → About → Services → Portfolio → Middle Banner → Team → Skills → Clients → Pricing → Blog → Contact → Footer
- [ ] Brand color `#d73e4d` used consistently for accents (icons, dividers, buttons, active states)
- [ ] Font family Raleway applied to all text
- [ ] Navbar is transparent on hero, becomes solid on scroll
- [ ] Hero carousel works with auto-advance and manual arrows
- [ ] About section: 4 circular icons with hover effect
- [ ] Services: 6 cards in 3×2 grid
- [ ] Portfolio: filter menu works, grid shows images, hover overlay visible
- [ ] Middle banner: parallax with dark overlay, CTA button
- [ ] Team: 3 members with hover overlay and social links
- [ ] Skills: 5 progress bars with correct percentages
- [ ] Clients: testimonial slider with navigation
- [ ] Pricing: 3 cards with correct prices and features
- [ ] Blog: 3 cards with image, title, excerpt, read more
- [ ] Contact: 2-column info + map, form with all fields
- [ ] Footer: dark bg, logo, social icons, Component Dock attribution
- [ ] Responsive: hamburger menu, stacking grids, scaling text
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images via picsum.photos/seed/bizpulse-N/W/H
