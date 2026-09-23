# Template: Boostly (SaaS / Startup Landing)

## Purpose

Recreation of ColorLib's **Thestartup** startup landing page template.

- **Source slug:** `thestartup`
- **Source URL:** https://colorlib.com/wp/template/thestartup/
- **Preview URL:** https://preview.colorlib.com/theme/thestartup/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/thestartup-free-template.jpg
- **Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Design tokens (extracted from preview CSS)

| Token | Value | Notes |
|---|---|---|
| Brand color | `#FF9100` | Orange — buttons, accents, hover states, dropdowns, scroll-to-top |
| Hero background | `#FFDDB5` | Light peach/tan — hero section area |
| Dark section bg | `#2D0A31` | Deep purple — testimonials section (section-bg1) |
| Footer bg | `#000` | Black — footer-wrapper black-bg |
| Heading font | `Josefin Sans` | Weight 500–700, used for h1–h6, nav links, section titles |
| Body font | `Roboto` | Weight 400, used for paragraphs, body text |
| Button radius | `5px` | `.btn` and `.get-btn` |
| Button style | Solid orange `#FF9100` bg, white text, black wipe-on-hover via scaleX animation | |
| Header btn | Gradient orange linear-gradient(to left, #FF9100, #df7e00, #FF9100), 4px radius | |
| Browse/link btn | Black text, uppercase, underline on hover | `.browse-btn` |
| Text heading color | `#000` | h1–h6 |
| Body text color | `#5E5E5E` | paragraphs |
| Link hover color | `#FF9100` | |
| Section padding | `120px top / 100px bottom` | `.section-padding` |

## Sections (order from live preview DOM)

1. **Navbar** — Sticky header, white bg, logo left, nav links (Home, About, Services, Blog, Contact) right, "Join Us" button. Mobile hamburger menu.
2. **Hero** — Split layout: text left (tagline span, h1 headline, paragraph, "Explore Us" CTA button), image right (full-height). Background: `#FFDDB5`.
3. **Services** — 3-column grid. Each: SVG icon, title (e.g. "Web Design"), short description, "Let's Talk" link with black underline hover.
4. **About / Philosophy** — Split layout: image left, text right. Section title "Our Philosophy", two paragraphs, CEO name + title quote at bottom.
5. **Pricing Cards** — 3 cards in a row. Each: plan name header, price with dollar sign, description, feature list (4 items), "Get Started Now" CTA button. Middle card has `.active` state (highlighted).
6. **Features Accordion** — Split: left side has section title + 4 accordion items (expand/collapse), right side has image.
7. **Testimonials** — Full-width dark purple bg (`#2D0A31`) with background image. Carousel/slider with testimonial quote, paragraph text, founder name + role.
8. **Blog** — 3-column card grid. Each: blog image with category tag badge (e.g. "Urban"), title, excerpt. Carousel/slider on desktop.
9. **Footer** — Dark bg (`#000`). 4 columns: logo + description + social icons, Navigation links, Services links, Contact info (address + phone). Bottom bar with copyright.

## Gherkin requirements

### Scenario: Navbar renders correctly
```gherkin
Given the page loads
When the navbar is visible
Then it shows a logo image on the left
And it displays navigation links: Home, About, Services, Blog, Contact
And it shows a "Join Us" button
And the navbar becomes sticky on scroll with white background
```

### Scenario: Hero section displays split layout
```gherkin
Given the page loads
When the hero section is visible
Then it shows a tagline text "We are new but doing great" in uppercase
And it displays a large headline "We give the power back to the user"
And it shows a descriptive paragraph below the headline
And it renders an "Explore Us" CTA button
And the right side shows a hero image
And the background color is light peach (#FFDDB5)
```

### Scenario: Services section shows three cards
```gherkin
Given the page loads
When the services section is visible
Then it shows a heading "Services we provide"
And it renders exactly 3 service cards in a row
And each card has an icon, title, description, and "Let's Talk" link
```

### Scenario: About section shows philosophy
```gherkin
Given the page loads
When the about section is visible
Then it shows a heading "Our Philosophy"
And it displays a left image and right text panel
And the text panel contains descriptive paragraphs
And it shows a CEO name and title attribution
```

### Scenario: Pricing section shows three plans
```gherkin
Given the page loads
When the pricing section is visible
Then it shows a heading "Affordable pricing plan"
And it renders exactly 3 pricing cards
And each card shows a plan name, price, description, and feature list
And each card has a "Get Started Now" button
And the middle card has an active/highlighted state
```

### Scenario: Features accordion works
```gherkin
Given the page loads
When the features section is visible
Then it shows a heading about features
And it renders 4 accordion items on the left
And clicking an accordion item expands its content
And only one accordion item is expanded at a time
And an image appears on the right side
```

### Scenario: Testimonials carousel works
```gherkin
Given the page loads
When the testimonials section is visible
Then it shows a dark purple background with image overlay
And it displays a testimonial quote in quotes
And it shows the testimonial text paragraph
And it shows a founder name and role
And dots/indicators allow navigating between testimonials
```

### Scenario: Blog section shows cards
```gherkin
Given the page loads
When the blog section is visible
Then it shows a heading "Our latest blog"
And it renders exactly 3 blog cards
And each card has an image with a category badge
And each card has a title and excerpt
```

### Scenario: Footer renders all columns
```gherkin
Given the page loads
When the footer is visible
Then it shows a dark background
And it has 4 columns: brand info, navigation, services, contact
And it shows social media icon links
And it shows a copyright line
And it includes a link to componentdock.com
```

### Scenario: Responsive behavior
```gherkin
Given the page loads on mobile viewport
When the navbar is visible
Then the hamburger menu icon appears
And clicking it toggles the mobile navigation drawer
And the hero image is hidden on small screens
And service cards stack vertically
And pricing cards stack vertically
```

## Verification checklist

- [ ] Navbar: sticky, white bg, logo, links, "Join Us" button, mobile menu
- [ ] Hero: split layout, tagline, headline, paragraph, CTA, peach bg
- [ ] Services: 3 cards, icon + title + description + link
- [ ] About: split layout, "Our Philosophy", paragraphs, CEO quote
- [ ] Pricing: 3 cards, plan/price/features/CTA, middle active
- [ ] Features: accordion (4 items), expand/collapse, image right
- [ ] Testimonials: dark bg, carousel, quote, attribution, dots
- [ ] Blog: 3 cards, image + badge + title + excerpt
- [ ] Footer: dark bg, 4 columns, social, copyright, ComponentDock link
- [ ] Responsive: mobile menu, stacked layouts on small screens
- [ ] No ColorLib references in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Uses picsum.photos for placeholder images
- [ ] Uses Google Fonts (Josefin Sans + Roboto) via index.html link
- [ ] Uses lucide-react for icons
- [ ] 100% test coverage
