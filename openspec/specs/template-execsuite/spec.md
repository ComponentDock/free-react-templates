# Template: ExecSuite (Corporate / Business Services)

## Purpose

Recreation of ColorLib "Corporate" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page application. The original is a corporate/business services landing page with a hero banner, about section, services grid, feature images, portfolio gallery, statistics counters, recent work cards, brand logos, contact form with map, and a dark footer.

- **ColorLib source:** https://colorlib.com/wp/template/corporate/
- **Live preview:** https://preview.colorlib.com/theme/corporate/
- **New name:** `execsuite` (apps/execsuite, @free-react-templates/execsuite)
- **Deploy target:** https://execsuite.free.componentdock.com

## Design Tokens (from live preview CSS analysis)

### Colors
| Token | Hex/Value | Usage |
|---|---|---|
| brand-gradient-start | `#5f36ff` | Primary button gradient start, accent text gradient start |
| brand-gradient-end | `#b719f6` | Primary button gradient end, accent text gradient end |
| brand-solid | `#6434fe` | Footer primary buttons, footer accent links, footer social hover |
| overlay-dark | `rgba(0,0,0,0.5)` | Hero banner overlay, feature area overlay |
| text-heading | `#222` | Main headings, footer body text, service button text |
| text-body | `#777` | Body paragraphs, service icons default color |
| bg-about | `#f9f9ff` | About section background (very light lavender) |
| bg-feature | `#222` | Feature area background (dark) |
| bg-footer | `#222` | Footer background |
| footer-social-bg | `#111` | Social icon button backgrounds |
| white | `#fff` | Hero text, button text, footer headings |
| border-light | `#eee` | Service "View Details" button border |

### Typography
- **Primary font:** `"Poppins", sans-serif` (Google Fonts, weights 100-700)
- **Headings:** bold weight (700), clean geometric sans-serif
- **Body:** regular weight (400), Poppins
- **Hero subtitle:** uppercase, small, light weight

### Buttons
- **Primary button:** gradient `#5f36ff` → `#b719f6`, text white, `border-radius: 25px` (pill shape), `text-transform: uppercase`, padding `42px line-height / 30px 60px`
- **Service border button:** transparent bg, `border: 1px solid #eee`, text `#222`, `border-radius: 25px`, same padding
- **Footer primary:** solid `#6434fe`, `border-radius: 57px`
- **Footer newsletter submit:** solid `#6434fe`, `border-radius: 57px`, height 36px

### Section Backgrounds
- Hero: full-screen background image + dark overlay
- About: solid `#f9f9ff` (lavender-tinted white)
- Services: white (default)
- Features: solid `#222` (dark) with alternating image/text columns
- Portfolio: white with section-gap spacing
- Facts/Stats: gradient (same as primary-btn gradient)
- Recent Work: white, cards with background images
- Brand logos: white
- Contact: white, split 2-column (map left, form right)
- Footer: solid `#222`

## Section Structure (top to bottom)

1. **Navbar** — Transparent overlay on hero, logo image + "Corporate" text left, nav links center-right (Home, About, We Offer, Portfolio, Recent Work, Contact), sticky on scroll
2. **Hero Banner** — Full-screen background image with dark overlay, centered content: subtitle "Discover the Colorful World", heading "Build Your Dream", paragraph text, "Discover Now" pill button
3. **About Section** — Two-column split: left = image (full height), right = heading with gradient accent text "Interior", paragraph, two feature boxes (Expert Services + Great Support with linearicons icons)
4. **Services Section** — "What we can offer for you" heading centered, 4-column grid of service cards each with: linearicon, title, description, "View Details" border button
5. **Feature Images** — Dark background (`#222`), alternating image/text 4-column layout: image-text-image-text pattern, each with heading + paragraph
6. **Portfolio Gallery** — "Our Recent Works may impress you" heading, 6 images in a masonry-style grid (8/4, 4/4, 8/4 columns), each with hover overlay expand icon
7. **Statistics Counter** — Gradient background, 5 counters in a row: Projects Completed (2536), Happy Clients (6784), Tasks Completed (1059), Cups of Coffee (2239), In House Professionals (435)
8. **Recent Work** — "Our Recent Works may impress you" heading, 3 cards with background images, each with overlay content: title, description, author avatar + name + date
9. **Brand Logos** — 5 partner/client logos in a horizontal row (grayscale, hover to color)
10. **Contact Section** — Split layout: left = Google Map embed, right = contact form (name, email, subject, message textarea, "Send Message" primary button)
11. **Footer** — Dark `#222` background, 3 columns (About Us text, Contact Us with phone numbers, Newsletter with email input + submit), bottom bar with copyright + Component Dock attribution + social icons

## Gherkin Requirements

### Scenario: Navbar renders with correct links
```gherkin
Given the user visits the ExecSuite landing page
Then the navbar is visible with the logo and "ExecSuite" brand text
And navigation links "Home", "About", "We Offer", "Portfolio", "Recent Work", "Contact" are displayed
And the navbar becomes sticky on scroll
```

### Scenario: Hero section displays correctly
```gherkin
Given the user sees the hero section
Then a full-screen background image with dark overlay is displayed
And the subtitle "Discover the Colorful World" is shown
And the heading "Build Your Dream" is prominent
And a "Discover Now" pill button is visible
When the user clicks "Discover Now"
Then the page scrolls to the about section
```

### Scenario: About section shows split layout
```gherkin
Given the user scrolls to the about section
Then a two-column layout is displayed
And the left column shows an image
And the right column shows the heading with gradient-accent text
And two feature items (Expert Services, Great Support) are shown with icons
```

### Scenario: Services section displays four service cards
```gherkin
Given the user scrolls to the services section
Then the heading "What we can offer for you" is displayed
And 4 service cards are shown in a grid
And each card has an icon, title, description, and "View Details" button
When the user hovers over a service card
Then the icon color changes to the brand gradient
```

### Scenario: Feature images section renders alternating layout
```gherkin
Given the user scrolls to the features section
Then a dark background section with 4 columns is displayed
And the layout alternates between image and text blocks
And each text block has a heading and paragraph
```

### Scenario: Portfolio gallery displays images
```gherkin
Given the user scrolls to the portfolio section
Then the heading "Our Recent Works may impress you" is displayed
And 6 portfolio images are shown in a masonry grid
When the user hovers over a portfolio image
Then an expand icon overlay appears
```

### Scenario: Statistics counters animate
```gherkin
Given the user scrolls to the statistics section
Then 5 counter values are displayed on a gradient background
And each counter shows: a number and a label
And the numbers animate counting up when visible
```

### Scenario: Recent work cards display correctly
```gherkin
Given the user scrolls to the recent work section
Then 3 work cards are displayed
And each card has a background image with overlay content
And each card shows a title, description, author avatar, author name, and date
```

### Scenario: Brand logos section displays
```gherkin
Given the user scrolls to the brand logos section
Then 5 partner logos are shown in a horizontal row
And logos are grayscale by default
When the user hovers over a logo
Then it transitions to full color
```

### Scenario: Contact section with form and map
```gherkin
Given the user scrolls to the contact section
Then a split layout with map on the left and form on the right is displayed
And the form has fields for name, email, subject, and message
And a "Send Message" button is visible
When the user fills in all fields and clicks "Send Message"
Then the form submission is handled without page reload
```

### Scenario: Footer renders correctly
```gherkin
Given the user views the footer
Then a dark background section with 3 columns is displayed
And columns show About Us, Contact Us (with phone numbers), and Newsletter
And a bottom bar with copyright text and social media icons is visible
And a Component Dock attribution link is present
```

### Scenario: Responsive layout adapts to mobile
```gherkin
Given the user views the page on a mobile viewport (< 768px)
Then the navbar collapses into a hamburger menu
And the about section stacks vertically
And the services grid becomes single-column
And the portfolio grid becomes single-column
And the contact section stacks vertically
And footer columns stack vertically
```

## Verification Checklist

- [ ] Navbar: logo, 6 nav links, sticky on scroll
- [ ] Hero: full-screen bg image, overlay, subtitle, heading, "Discover Now" pill button
- [ ] About: split layout with image + gradient-accent heading + 2 feature items
- [ ] Services: 4 service cards with icons, titles, descriptions, border buttons
- [ ] Features: dark bg, alternating image/text 4-column layout
- [ ] Portfolio: 6 images in masonry grid with hover expand overlay
- [ ] Statistics: 5 animated counters on gradient background
- [ ] Recent Work: 3 cards with bg images, overlay content, author info
- [ ] Brand Logos: 5 logos, grayscale-to-color on hover
- [ ] Contact: split map + form layout, 4 fields, send button
- [ ] Footer: 3 columns, newsletter form, social icons, Component Dock link
- [ ] Design tokens: Poppins font, `#5f36ff`→`#b719f6` gradient, `#222` dark sections, pill buttons (25px radius)
- [ ] Responsive: mobile hamburger, stacked layouts
- [ ] No ColorLib references in app code
- [ ] Footer links to componentdock.com
- [ ] CNAME + homepage configured for surge deploy
