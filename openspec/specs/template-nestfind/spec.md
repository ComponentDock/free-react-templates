# Template: NestFind (Real Estate)

## Purpose

Recreation of ColorLib "Real Estate 2" template as a React 19 + Vite + Tailwind 4 + TypeScript single-page template.

- **Source**: ColorLib "Real Estate 2"
  - Preview URL: https://preview.colorlib.com/theme/realestate2/
  - Source page: https://colorlib.com/wp/template/real-estate-2/
  - Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/realestate2-free-template.jpg
- **New name**: `nestfind`
- **Package**: `@free-react-templates/nestfind`
- **Deploy**: `nestfind.free.componentdock.com`
- **Stack**: React 19 · Vite · Tailwind CSS 4 · TypeScript (strict)
- **Category**: Real Estate

## Design tokens (extracted from live preview CSS)

| Token | Value | Notes |
| --- | --- | --- |
| Font family | `"Poppins", sans-serif` | Google Fonts, weights 200–700 |
| Heading color | `#001D38` | Dark navy for h1–h5 |
| Body text color | `#4D4D4D` | Medium grey for paragraphs |
| Link/default color | `#1F1F1F` | Near-black for links and buttons |
| Label color | `#7e7e7e` | Light grey for form labels |
| Primary accent (orange) | `#FD8E5E` | Warm orange |
| Secondary accent (light orange) | `#FDAE5C` | Lighter warm orange |
| Button gradient | `linear-gradient(to right, #fdae5c 0%, #fd8e5e 100%)` | Left-to-right orange gradient for primary buttons |
| Dark overlay | `#001D38` at 0.7 opacity | Used on testimonial section and hero |
| Placeholder color | `#cccccc` | Input placeholder text |
| Selection color | `#444` | Text selection background |

## Section structure (from live preview DOM)

1. **Header** — Top bar (desktop only): welcome text, email, phone, social icons (LinkedIn, Facebook, Google+). Sticky navbar: logo (left), nav links (center): Home, Pages (dropdown: About, Property Details, Elements), Property, Blog (dropdown: Blog, Single Blog), Contact. Right side: search icon + "Add Property" button. Hamburger menu on mobile.
2. **Hero/Slider** — Background image with dark overlay (#001D38, 0.7 opacity). Centered text: "Find your best Property" + subtitle. Search form: Location select, Property Type select, Price range slider, Bed Room select, Bath Room select, search icon button.
3. **Popular Properties** — Section heading "Popular Properties". 6 property cards in 3×3 grid. Each card: property image, "For Sale"/"For Rent" tag (colored badge), title ("Comfortable Apartment in Palace"), location with icon, price, and footer with sqft/bed/bath icons + counts. "More Properties" button at bottom.
4. **Home Details** — Owl carousel (static in React) showing featured property detail cards. Each card: property image on left, info on right (For Sale badge, title, location, sqft/bed/bath stats, description paragraph, price, "View Details" button).
5. **Accordion/FAQ** — Split layout: left side has accordion with 3 expandable FAQ items, right side has an image. Uses Bootstrap accordion pattern.
6. **Counter Area** — 3 stat counters on a gradient background: 200+ (Properties), 300 (Clients), 15 (Awards). Counter animation on scroll.
7. **Testimonial Area** — Dark overlay background section with client testimonials (carousel/slider). Includes client name, role, and testimonial text.
8. **Team Area** — Section heading with team member cards. Each card: team member photo, name, role/title. Typically 3–4 members.
9. **Contact Action Area (CTA)** — Full-width bar with gradient/colored background. Left: "Add your property for sale" heading. Right: phone number + "Add Property" outlined button.
10. **Footer** — 4 columns: (1) Logo + contact info (email, phone, address) + social icons, (2) Services links, (3) Useful Links, (4) Subscribe form (email input + button) + newsletter text. Bottom bar with copyright.

## Gherkin requirements

### Scenario: Header renders with top bar and sticky navbar
```
Given the user loads the page
Then a top bar shows welcome text, email, phone, and social icons (desktop only)
And a sticky navbar shows a logo, navigation links (Home, Pages, Property, Blog, Contact), and "Add Property" button
And a hamburger menu icon appears on mobile
```

### Scenario: Hero section with property search form
```
Given the user views the hero section
Then a dark-overlay background image is displayed
And the heading "Find your best Property" is centered
And a search form shows: Location select, Property Type select, Price range slider, Bed Room select, Bath Room select
And a search icon button triggers the form
```

### Scenario: Popular Properties shows 6 listing cards
```
Given the user scrolls to the Popular Properties section
Then the heading "Popular Properties" is displayed
And 6 property cards are shown in a 3×2 grid
And each card has an image, a "For Sale" or "For Rent" tag, title, location, price, and sqft/bed/bath info
And a "More Properties" button is centered below the grid
```

### Scenario: Home Details carousel shows featured property
```
Given the user scrolls to the Home Details section
Then a carousel displays featured property detail cards
And each card shows a property image alongside info (tag, title, location, stats, description, price, "View Details" button)
```

### Scenario: Accordion FAQ section
```
Given the user scrolls to the accordion section
Then 3 FAQ items are displayed in an accordion
And an image is shown alongside the accordion
And clicking an accordion header expands/collapses the content
```

### Scenario: Counter area displays statistics
```
Given the user scrolls to the counter section
Then 3 statistics are displayed: 200+ Properties, 300 Clients, 15 Awards
And the counters animate on scroll
```

### Scenario: Testimonial section with dark overlay
```
Given the user scrolls to the testimonial section
Then a dark overlay background is applied
And testimonial cards display client quotes, names, and roles
```

### Scenario: Team area shows member cards
```
Given the user scrolls to the team section
Then team member cards are displayed
And each card shows a photo, name, and role/title
```

### Scenario: Contact action CTA bar
```
Given the user scrolls to the contact action section
Then a CTA bar shows "Add your property for sale" heading
And a phone number and "Add Property" outlined button are displayed
```

### Scenario: Footer with 4 columns
```
Given the user views the footer
Then 4 columns are shown: contact info + social, Services links, Useful Links, Subscribe form
And the subscribe form has an email input and submit button
And the footer links to https://www.componentdock.com/
```

### Scenario: Responsive layout adapts to mobile
```
Given the user views on a mobile viewport
Then the top bar is hidden
And the navbar collapses to a hamburger menu
And property cards stack vertically
And the home details carousel adapts to single column
And the accordion and image stack vertically
```

## Verification checklist

- [ ] Header renders with top bar (desktop) and sticky navbar
- [ ] Hero section has dark overlay, heading, and search form
- [ ] Search form shows all selects and price slider
- [ ] Popular Properties shows 6 cards in 3×2 grid
- [ ] Each property card has tag, image, title, location, price, stats
- [ ] "More Properties" button renders
- [ ] Home Details carousel shows featured property cards
- [ ] Accordion FAQ section with 3 items + image
- [ ] Accordion expand/collapse works
- [ ] Counter area shows 3 animated stats
- [ ] Testimonial section with dark overlay
- [ ] Team area shows member cards
- [ ] CTA bar shows heading, phone, and "Add Property" button
- [ ] Footer shows 4 columns with subscribe form
- [ ] Footer links to https://www.componentdock.com/
- [ ] Responsive: mobile hamburger, stacked layouts
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code
- [ ] public/CNAME contains nestfind.free.componentdock.com
- [ ] package.json homepage set to https://nestfind.free.componentdock.com
