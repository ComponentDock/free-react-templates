# Template: Vivid (Creative Portfolio — Hero, Stats, About, Services, Testimonials, Portfolio, Blog, Footer)

## Purpose

Vivid is a single-page creative-portfolio landing template in the
free-react-templates monorepo. It is a faithful React recreation of the
ColorLib free "Breed2" personal-portfolio website template design, built under
a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

- **Source template:** ColorLib Breed2
  — https://colorlib.com/wp/template/breed2/
- **Preview URL:** https://preview.colorlib.com/theme/breed2/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/breed2-free-template.jpg

The original is a modern, vibrant personal portfolio for a creative art
director / designer. It features a bold blue-to-pink gradient as the brand
accent, Roboto typography, organic blob shapes for visual interest, and a
clean white background. The page flows through: hero with split layout
(text + portrait over gradient blob), statistics cards, about section,
services, testimonials, portfolio gallery, blog posts, and a brands/footer
area.

## Design tokens

Extracted from the live preview CSS (`css/style.css`):

| Token | Value | Notes |
| --- | --- | --- |
| **Brand gradient** | `linear-gradient(90deg, #1345e6 0%, #ed239f 100%)` | Blue → pink; used on headings, CTA, stats numbers, social icon hovers |
| **Font family** | `"Roboto", sans-serif` | Google Font; body + headings |
| **Body text color** | `#797979` | Paragraph / secondary text |
| **Heading color** | `#05364d` | Dark navy; h1–h5 |
| **Tag/label bg** | `rgba(237, 35, 159, 0.6)` | Top_text / small labels; border-radius: 5px |
| **Primary button** | gradient bg (`#1345e6` → `#ed239f`), white text, border-radius: 5px, background-size: 200% auto (slide on hover) |
| **Secondary button** | transparent bg, `#05364d` text |
| **Section padding** | 140px 0 (desktop), 80px 0 (mobile) — `.section_gap` |
| **Card border-radius** | 5px (stats cards, primary buttons, tags) |
| **Stats number color** | Gradient text (same brand gradient, background-clip: text) |
| **Background** | `#ffffff` (white) |
| **Banner heading color** | `rgba(5, 54, 77, 0.5)` — semi-transparent dark navy |
| **Nav active color** | Brand gradient (via background-clip text) |
| **Dropdown border** | `#eeeeee` |
| **Blog date card border-radius** | 12px |
| **Newsletter input border-radius** | 36px |

## Sections (order from preview)

1. **Navbar** — Logo "BREED" with gradient B icon (left), nav links: Home, About, Portfolio, Services, Blog, Contact (right). Fixed on scroll.
2. **Hero / Banner** — Split layout: left column has greeting ("Hey There!"), name heading ("I am jo Breed"), subtitle ("Creative art director & designer"), social icons (Facebook, Twitter, Instagram, LinkedIn, Vimeo), CTA button ("SEE MY WORK"). Right column: large organic blob shape with blue-to-pink gradient + texture, portrait image overlapping the blob.
3. **Statistics** — 3 white rounded cards in a row: "15k+ Happy Customer", "12k+ Ticket Solved", "9/10 Average Rating". Numbers use gradient text.
4. **About** — Section heading with gradient underline ("About Me"). Body text describing the person. Image/illustration on one side.
5. **Services** — Section heading ("What Service We Offer For You"). 3 service cards with icons: Web Development, UX/UI Design, WP Developing.
6. **Testimonials** — Section heading ("Honourable Client Says About Me"). Carousel/slider of testimonial cards with client name, role, and quote.
7. **Portfolio** — Section heading ("Check Our Recent Client Work"). Grid of portfolio items (6 items, "Lens Mockup Design"), each with image + overlay.
8. **Blog** — Section heading ("Latest Story From Our Blog"). 3 blog cards with image, date, title, excerpt.
9. **Brands / Footer** — Brand logos section + simple footer with copyright and attribution.

## Gherkin scenarios

### Navbar
```gherkin
Scenario: Navbar renders with logo and navigation links
  Given the page loads
  Then the navbar displays a logo/link on the left
  And the navbar displays navigation links: Home, About, Portfolio, Services, Blog, Contact

Scenario: Navbar becomes fixed on scroll
  Given the page is scrolled past the hero
  Then the navbar sticks to the top of the viewport

Scenario: Mobile hamburger menu
  Given the viewport is below 992px wide
  Then a hamburger toggle button is visible
  And clicking it opens/closes the mobile nav menu
```

### Hero / Banner
```gherkin
Scenario: Hero displays greeting, name, and subtitle
  Given the page loads
  Then a greeting "Hey There!" is displayed
  And the name heading is displayed
  And the subtitle "Creative art director & designer" is displayed

Scenario: Hero shows social icons
  Given the page loads
  Then social media icon links are visible (Facebook, Twitter, Instagram, LinkedIn, Vimeo)

Scenario: Hero has CTA button
  Given the page loads
  Then a "SEE MY WORK" button is visible
  And the button uses the brand gradient background

Scenario: Hero shows portrait over gradient blob
  Given the page loads
  Then a portrait image is displayed on the right
  And a gradient blob shape sits behind the portrait
```

### Statistics
```gherkin
Scenario: Stats section shows three metric cards
  Given the page loads
  Then three stat cards are displayed
  And each card shows a gradient-colored number and a label

Scenario: Stats cards have rounded corners and shadow
  Given the stats section is visible
  Then each stat card has border-radius of 5px
  And each card has a subtle box shadow
```

### About
```gherkin
Scenario: About section displays heading and content
  Given the page loads
  Then the "About Me" heading is displayed with a gradient underline
  And descriptive paragraph text is present

Scenario: About section has image
  Given the page loads
  Then an image or illustration accompanies the about content
```

### Services
```gherkin
Scenario: Services section shows three service items
  Given the page loads
  Then the "What Service We Offer For You" heading is displayed
  And three service items are shown: Web Development, UX/UI Design, WP Developing

Scenario: Each service has an icon
  Given the services section is visible
  Then each service item displays an icon
  And each service item has a title and description
```

### Testimonials
```gherkin
Scenario: Testimonials section displays client quotes
  Given the page loads
  Then the "Honourable Client Says About Me" heading is displayed
  And testimonial cards are shown with client name, role, and quote

Scenario: Testimonials carousel is navigable
  Given the testimonials section is visible
  Then navigation dots or arrows allow cycling through testimonials
```

### Portfolio
```gherkin
Scenario: Portfolio section shows project grid
  Given the page loads
  Then the "Check Our Recent Client Work" heading is displayed
  And a grid of portfolio items is shown (6 items)

Scenario: Portfolio items have overlay on hover
  Given the portfolio section is visible
  Then hovering a portfolio item shows an overlay with the project title
```

### Blog
```gherkin
Scenario: Blog section shows three post cards
  Given the page loads
  Then the "Latest Story From Our Blog" heading is displayed
  And three blog cards are shown with image, date badge, title, and excerpt

Scenario: Blog date badge has rounded shape
  Given the blog section is visible
  Then each blog card has a date badge with border-radius of 12px
```

### Footer
```gherkin
Scenario: Footer displays brand logos and copyright
  Given the page loads
  Then a brands/logos section is visible
  And the footer shows a copyright notice
  And the footer links to https://www.componentdock.com/
```

## Verification checklist

- [ ] All 9 sections render in correct order (navbar → hero → stats → about → services → testimonials → portfolio → blog → footer)
- [ ] Brand gradient (#1345e6 → #ed239f) applied to: heading gradient, CTA button, stats numbers, social icon hover, nav active state
- [ ] Font is Roboto (Google Fonts loaded in index.html)
- [ ] Body text #797979, headings #05364d
- [ ] Primary button: gradient bg, white text, 5px radius, slide-on-hover animation
- [ ] Stats cards: white bg, 5px radius, shadow, gradient-colored numbers
- [ ] Hero: split layout (text left, portrait + gradient blob right)
- [ ] Social icons: Facebook, Twitter, Instagram, LinkedIn, Vimeo
- [ ] Portfolio grid: 6 items with hover overlay
- [ ] Blog cards: image + date badge (12px radius) + title + excerpt
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Responsive: mobile hamburger nav, stacked layout on small screens
- [ ] 100% test coverage (vitest + testing library)
- [ ] Typecheck passes (tsc --noEmit)
- [ ] Build succeeds (vite build)
