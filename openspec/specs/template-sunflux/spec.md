# Template: Sunflux (Solar Energy Business)

## Purpose

Recreation of the ColorLib **SolarShift** template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page template.

- **Source name:** SolarShift
- **ColorLib slug:** `solarshift`
- **ColorLib page:** https://colorlib.com/wp/template/solarshift/
- **Preview URL (live):** https://solarshift-colorlib.pages.dev/
- **Original stack:** Astro 7 + Tailwind CSS 4.x
- **Our stack:** React 19 + Vite (latest) + Tailwind CSS 4 + TypeScript (strict)

## Design Tokens

Extracted from the live preview CSS (`/_astro/Base.KUABgugQ.css`) and HTML:

| Token | Value | Notes |
|---|---|---|
| Font family | Manrope (Google Fonts), system-ui, sans-serif | Weights 300–800 |
| Primary brand color | `#16a34a` (green-600) | Used for CTA buttons, accents, gradients |
| Primary hover | `#15803d` (green-700) | Button hover states |
| Accent color | `#f59e0b` (amber-500) | Star ratings, text-gradient endpoint |
| Gradient | `from #16a34a to #f59e0b` | `.text-gradient` class on hero headline |
| Hero background | `from-primary-50 to-white` (gradient) | With decorative blurred circles |
| Stats section bg | `gray-50` (`#f9fafb`) | Full-width stat counters |
| Card border radius | `1rem` (`rounded-2xl`) | Service cards, testimonial cards |
| Button border radius | `0.5rem` (`rounded-lg`) | Primary + secondary buttons |
| Button shadow | `shadow-lg shadow-primary-600/25` | Green shadow on CTA buttons |
| Dark mode | Class-based (`.dark`) | Toggle via `document.documentElement` |
| Body bg (dark) | `#030712` (gray-950) | |
| Footer bg | `#111827` (gray-900) | Dark footer with gray-400 text |

## Section Structure (in order)

1. **Navbar** — Sticky header, logo (left), nav links (About, Products, Services dropdown, Pricing, Blog, Contact), dark mode toggle, "Get Free Quote" CTA button, mobile hamburger menu
2. **Hero** — Two-column layout: left = badge "Go Solar Today" + headline with text-gradient ("Power Your Home / With Clean Energy") + description + CTA buttons + social proof stats (25,000+ Trees Saved, 8,500+ Tons CO2 Offset); right = Savings Calculator widget (state select, bill slider, 4 result cards: Annual Savings, CO2 Offset, Payback Period, Federal Tax Credit)
3. **Stats Bar** — Full-width gray-50 section, 4 stat counters (10K+ Installations, $50M+ Saved, 98% Satisfaction, 50 States)
4. **Services** — Section heading with "Services" badge + "Complete Solar Solutions" + 3 service cards (Residential Solar, Commercial Solar, Battery Storage) in a responsive grid
5. **ROI Calculator** — Comparison section: solar vs. traditional energy, ROI chart/bar visualization
6. **Installation Timeline** — Step-by-step process timeline with visual indicators
7. **Testimonials** — Carousel/slider with 3+ customer review cards (star rating, quote, name, location)
8. **CTA Banner** — Full-width primary-600 background, "Ready to Go Solar?" heading + description + CTA buttons
9. **FAQ** — Accordion-style FAQ section with 5 questions and expand/collapse
10. **Contact Form** — Form with Full Name, Email, Service Interest dropdown, Message textarea + Office Hours info card
11. **Footer** — Dark (gray-900) footer: brand column + link columns (Solutions, Resources, Company) + Contact info (address, phone, email) + social icons + copyright + bottom bar

## Gherkin Requirements

### Scenario: Navbar renders all navigation links
```gherkin
Given the page loads
Then the navbar displays links: About, Products, Services, Pricing, Blog, Contact
And the navbar displays a "Get Free Quote" button
And the navbar displays a dark mode toggle button
```

### Scenario: Dark mode toggle
```gherkin
Given the page loads in light mode
When the user clicks the dark mode toggle
Then the page switches to dark mode
And the toggle icon changes to sun
When the user clicks the toggle again
Then the page switches back to light mode
```

### Scenario: Hero section displays savings calculator
```gherkin
Given the hero section is visible
Then the hero shows the headline "Power Your Home With Clean Energy"
And the hero shows a savings calculator widget
And the calculator has a state dropdown selector
And the calculator has a monthly bill slider ($50-$500)
And the calculator shows 4 result cards
```

### Scenario: Savings calculator computes results
```gherkin
Given the calculator is visible
When the user selects "California" from the state dropdown
And the user sets the monthly bill to $200
Then the Annual Savings card updates to a non-zero dollar amount
And the CO2 Offset card shows a tons value
And the Payback Period card shows a years value
And the Federal Tax Credit card shows a dollar amount
```

### Scenario: Stats bar displays counters
```gherkin
Given the stats section is visible
Then it shows 4 stat items: Installations, Saved for Customers, Customer Satisfaction, States Served
And each stat displays its numeric value
```

### Scenario: Services section displays cards
```gherkin
Given the services section is visible
Then it shows a heading "Complete Solar Solutions"
And it displays 3 service cards: Residential Solar, Commercial Solar, Battery Storage
And each card has a title, icon, and description paragraph
```

### Scenario: Testimonials carousel navigates
```gherkin
Given the testimonials section is visible
Then it shows at least 3 testimonial cards
And each card has a star rating, quote text, customer name, and location
And prev/next navigation buttons are present
When the user clicks the next button
Then the carousel advances to the next slide
```

### Scenario: CTA banner displays
```gherkin
Given the CTA banner section is visible
Then it shows "Ready to Go Solar?" heading
And it shows "Get Free Quote" and phone number buttons
```

### Scenario: FAQ accordion expands and collapses
```gherkin
Given the FAQ section is visible
Then it displays at least 5 FAQ questions
When the user clicks a FAQ question
Then the answer expands into view
When the user clicks the same question again
Then the answer collapses
```

### Scenario: Contact form validates inputs
```gherkin
Given the contact form is visible
When the user submits the form with empty required fields
Then validation errors appear for Full Name, Email, and Message
When the user fills in valid data and submits
Then the form submission handler fires
```

### Scenario: Footer renders correctly
```gherkin
Given the footer is visible
Then it shows the brand logo and tagline
And it shows link columns: Solutions, Resources, Company
And it shows contact info: address, phone, email
And it shows social media icons
And it shows copyright text
And it links to https://www.componentdock.com/
```

### Scenario: Mobile responsive layout
```gherkin
Given the viewport width is less than 768px
Then the navbar collapses to a hamburger menu
And the hero section stacks vertically
And the services grid becomes single column
And a sticky mobile CTA bar appears at the bottom
```

## Verification Checklist

- [ ] All sections render in the correct order
- [ ] Design tokens (colors, fonts, radii) match the reference
- [ ] Savings calculator computes correctly for different inputs
- [ ] Dark mode toggle works and persists via localStorage
- [ ] FAQ accordion expands/collapses correctly
- [ ] Contact form validates required fields
- [ ] Testimonials carousel navigates between slides
- [ ] Mobile responsive layout works at all breakpoints
- [ ] Footer links to https://www.componentdock.com/
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Placeholder images use picsum.photos with deterministic seeds
- [ ] Google Fonts loaded via <link> in index.html
- [ ] Icons from lucide-react
- [ ] 100% test coverage (lines, functions, branches, statements)
