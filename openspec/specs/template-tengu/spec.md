# Template: Tengu (Personal Portfolio / Creative Agency)

## Purpose

Recreation of ColorLib **Ronin** — a personal portfolio / creative agency template for a freelance designer or architect.

- **Source slug:** `ronin`
- **Preview URL:** https://preview.colorlib.com/theme/ronin/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ronin-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **Description:** Clean, modern personal portfolio with transparent navbar, split hero (image left, text right), about-me section with stats counters and skill bars, service/feature cards, project portfolio grid, testimonials slider, blog posts, and a dark footer with newsletter + social links.

## Design Tokens

| Token | Value | Notes |
|-------|-------|-------|
| **Brand primary** | `#8490ff` | Soft violet-blue, used for CTA buttons, links, accent color |
| **Brand gradient** | `linear-gradient(to right, #8490ff, #62bdfc)` | Hero banner button background |
| **Text dark** | `#222222` | Headings, primary text |
| **Text body** | `#777777` | Body paragraphs, secondary text |
| **Background white** | `#ffffff` | Most section backgrounds |
| **Background light** | `#f9f9ff` | Projects area background |
| **Footer background** | `#04091e` | Dark navy footer |
| **Border/divider** | `#eeeeee` | Borders, card separators |
| **Accent blue (hover)** | `#3898f8` | Lightbox overlay, hover states |
| **Font heading** | `"Heebo", sans-serif` | Bold weight, used for all headings |
| **Font body** | `"Roboto", sans-serif` | Regular weight, body text |
| **Button radius** | `5px` | Banner/CTA buttons |
| **Button radius (round)** | `45px` | Subscribe/newsletter buttons |
| **Nav text** | `12px uppercase, 500 weight, Roboto` | Navbar links |

## Gherkin Requirements

### Navbar
- Scenario: Transparent header with logo and nav links
  - Given the page loads
  - Then a transparent navbar is displayed at the top
  - And it contains links: Home, About, Services, Pages (dropdown), Blog (dropdown), Contact
  - And nav text is uppercase, 12px, Roboto, dark on light background

### Hero / Banner
- Scenario: Split hero with image and CTA
  - Given the page loads
  - Then a split hero is displayed with image on left and text on right
  - And the heading says "This is me" with name "Travor James"
  - And a "Discover Now" CTA button is shown with gradient background (#8490ff → #62bdfc)
  - And the banner has a background image

### Welcome / About
- Scenario: About section with bio, stats, and skill bars
  - Given the page scrolls to the welcome section
  - Then "About Myself" heading is displayed
  - And a bio paragraph is shown
  - And three stats counters are displayed (e.g. $2.5M, 1465, 3965)
  - And a "Tools Expertness" subsection shows skill progress bars
  - And skill bars include: After Effects (85%), Photoshop (90%), Illustrator (70%), Sublime (95%), Sketch (75%)

### Features / Services
- Scenario: 6 service cards in a 3-column grid
  - Given the page scrolls to the features section
  - Then "offerings to my clients" heading is displayed
  - And 6 feature items are shown in a 3×2 grid
  - And each card has an icon, title, and description
  - And titles include: Architecture, Interior Design, Concept Design (repeated)

### Projects / Portfolio
- Scenario: Portfolio grid with project images
  - Given the page scrolls to the projects section
  - Then "Our Recent Completed Projects" heading is displayed
  - And 6 project cards are shown
  - And each card has a project image and title (e.g. "3D Helmet Design")
  - And project images have hover overlay effects

### Testimonials
- Scenario: Testimonial carousel with star ratings
  - Given the page scrolls to the testimonials section
  - Then "Testimonials" heading is displayed
  - And a carousel of 3 testimonials is shown
  - And each testimonial has a quote, author name ("Fanny Spencer"), and 4.5 star rating

### Blog
- Scenario: Latest blog posts grid
  - Given the page scrolls to the blog section
  - Then "Latest Posts from Blog" heading is displayed
  - And 3 blog post cards are shown
  - And each card has an image, title, date, and read-more link

### Footer
- Scenario: Dark footer with about, newsletter, and social links
  - Given the page scrolls to the footer
  - Then a dark navy (#04091e) footer is displayed
  - And it contains an "About Me" column with description
  - And a "Newsletter" column with email input and subscribe button
  - And a "Follow Me" column with social icons (Facebook, Twitter, Dribbble, Behance)
  - And a copyright line linking to Component Dock

## Verification Checklist

- [ ] Navbar renders with transparent background and all nav links
- [ ] Hero section shows split layout (image + text) with gradient CTA button
- [ ] About section shows stats counters and skill progress bars
- [ ] Features section shows 6 service cards in 3-column grid
- [ ] Projects section shows portfolio grid with hover effects
- [ ] Testimonials section shows carousel with star ratings
- [ ] Blog section shows 3 post cards with images
- [ ] Footer shows dark background with 3 columns (about, newsletter, social)
- [ ] Footer links to Component Dock (not ColorLib)
- [ ] All design tokens (colors, fonts, radii) match the reference
- [ ] Responsive layout works on mobile, tablet, desktop
- [ ] All sections match the order: Navbar → Hero → About → Features → Projects → Testimonials → Blog → Footer
