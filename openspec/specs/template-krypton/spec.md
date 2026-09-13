# Template: Krypton (Digital Agency)

## Purpose

Recreation of ColorLib's **Labs** digital agency website template.
- Source slug: `labs`
- Preview URL: https://preview.colorlib.com/theme/labs/ (404 — unreachable at time of prep; falling back to screenshot + ColorLib template page meta description)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/labs-digital-agency-website-template.jpg
- Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript
- A single-page digital agency landing page with hero slider, features/services, team, testimonials, blog, and contact form.

## Design Tokens

Extracted from the preview screenshot pixel analysis and ColorLib template page:

| Token | Value | Notes |
|-------|-------|-------|
| Primary / accent | `#6420b1` | Deep purple — used for CTAs, highlights, section accents |
| Secondary accent | `#5d80c0` | Medium blue — navigation, secondary elements |
| Text dark | `#1a1a2e` | Near-black for headings |
| Text body | `#555` | Medium gray for body text |
| Background light | `#f8f9fa` | Off-white section backgrounds |
| Background alt | `#fdf2ee` | Warm peach/pink tint on some sections |
| White | `#ffffff` | Cards, content areas |
| Dark overlay | `rgba(0,0,0,0.5)` | Hero slider text backdrop |

Note: Preview was 404 at prep time. Tokens derived from screenshot pixel sampling. Implementer should verify against the live preview if it comes back online.

## Page Sections (from meta description + screenshot analysis)

1. **Navigation Bar** — Logo left, nav links center (Home, About, Services, Portfolio, Blog, Contact), CTA button right. Clean white/light background.
2. **Hero Slider** — Large full-width slider with background images, headline text overlay, subtitle, and CTA button. Dark overlay on images for text readability.
3. **Features / Services** — Grid of service cards (3–4 columns) with icons, titles, and descriptions. Bright accent colors on icons.
4. **About / Stats** — Company intro section with image + text side-by-side, possibly with counter stats (projects, clients, etc.).
5. **Portfolio / Work** — Image grid or masonry of project thumbnails with hover overlays showing project titles.
6. **Team** — Grid of team member cards with photos, names, roles, and social links.
7. **Testimonials** — Carousel or slider of client testimonials with quotes, author photos, names, and company/role.
8. **Blog / News** — Grid of recent blog post cards with thumbnails, dates, titles, and excerpts.
9. **Contact Form** — Full-width section with contact form (name, email, subject, message) and possibly company address/info.
10. **Footer** — Multi-column layout with logo, nav links, social icons, newsletter signup, copyright. Links to Component Dock.

## Gherkin Scenarios

### Navigation

```gherkin
Scenario: Navigation bar displays correctly
  Given the user visits the homepage
  Then the logo is displayed on the left
  And navigation links include Home, About, Services, Portfolio, Blog, Contact
  And a CTA button is visible on the right side
  And the navigation is responsive with a hamburger toggle on mobile
```

### Hero Slider

```gherkin
Scenario: Hero slider displays with content
  Given the user visits the homepage
  Then a full-width hero slider is displayed
  And each slide has a background image with dark overlay
  And each slide shows a headline, subtitle, and CTA button
  And the slider auto-plays or can be navigated

Scenario: Hero slider is responsive
  Given the user views on mobile
  Then the hero slider scales to full width
  And text remains readable over the overlay
```

### Features / Services

```gherkin
Scenario: Services section shows feature cards
  Given the user scrolls to the services section
  Then a section heading is displayed
  And 3–4 service cards are shown in a grid
  And each card has an icon, title, and description
  And icons use the brand accent color
```

### About / Stats

```gherkin
Scenario: About section with company info
  Given the user scrolls to the about section
  Then a company description is displayed alongside an image
  And counter statistics (projects, clients, awards) are shown
  And the stats animate on scroll or load
```

### Portfolio

```gherkin
Scenario: Portfolio grid displays work samples
  Given the user scrolls to the portfolio section
  Then a grid of project thumbnails is displayed
  And hovering a thumbnail reveals the project title
  And clicking a thumbnail could open a detail view
```

### Team

```gherkin
Scenario: Team section shows members
  Given the user scrolls to the team section
  Then team member cards are displayed in a grid
  And each card shows a photo, name, role, and social media links
  And social icons use brand colors on hover
```

### Testimonials

```gherkin
Scenario: Testimonials carousel
  Given the user scrolls to the testimonials section
  Then a carousel of client testimonials is displayed
  And each testimonial shows a quote, author photo, name, and company
  And the carousel can be navigated with arrows or dots
```

### Blog

```gherkin
Scenario: Blog section shows recent posts
  Given the user scrolls to the blog section
  Then a grid of blog post cards is displayed
  And each card shows a thumbnail image, date, title, and excerpt
  And cards link to individual blog posts
```

### Contact Form

```gherkin
Scenario: Contact form is functional
  Given the user scrolls to the contact section
  Then a contact form is displayed with name, email, subject, and message fields
  And the form validates required fields before submission
  And a submit button sends the form data
```

### Footer

```gherkin
Scenario: Footer layout
  Given the user scrolls to the footer
  Then the footer shows the brand logo and copyright
  And navigation links are organized in columns
  And social media icons are displayed
  And a newsletter subscription form is present
  And the footer links to https://www.componentdock.com/ as "Component Dock"
```

### Responsive Behavior

```gherkin
Scenario: Mobile layout adaptation
  Given the user views on a mobile viewport
  Then the navigation collapses to a hamburger menu
  And service cards stack vertically
  And team cards stack vertically
  And the contact form is full-width
```

## Verification Checklist

- [ ] Section order matches: Nav → Hero Slider → Features → About → Portfolio → Team → Testimonials → Blog → Contact → Footer
- [ ] Brand purple `#6420b1` used for CTAs and accents
- [ ] Blue `#5d80c0` for secondary elements
- [ ] Hero slider renders with dark overlay on background images
- [ ] Service cards display in responsive grid
- [ ] Team member cards show photo, name, role, social links
- [ ] Testimonials carousel rotates with author info
- [ ] Blog cards show thumbnail, date, title, excerpt
- [ ] Contact form validates and submits
- [ ] Footer links to Component Dock
- [ ] Responsive: hamburger nav, stacked grids on mobile
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos with deterministic seeds
- [ ] Google Fonts loaded via link in index.html
