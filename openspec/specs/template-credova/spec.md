# Template: Credova (Finance / Loan)

## Purpose

Recreation of ColorLib "Loan" template.

- **Source:** https://colorlib.com/wp/template/loan/
- **Preview:** https://preview.colorlib.com/theme/loan/
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript
- **Category:** Finance / Loan / Business Lending

## Design tokens

| Token | Value | Notes |
|---|---|---|
| Brand color | `#3589f1` | Primary blue — CTAs, hover states, accents |
| Dark navy | `#021a47` | Testimonial section background |
| Text dark | `#000a2d` | Primary text color, default button bg |
| Hero button bg | `#0b1416` | Dark hero CTA buttons |
| Orange accent | `#ff872d` | Secondary accent (suggested) |
| Light bg | `#e0e4f8` | Application area background |
| White | `#fff` | Main content background |
| Gray text | `#7a8290` | Secondary/body text |
| Font headings | `"Rufina", serif` | Section headings, logo |
| Font body | `"Rubik", sans-serif` | Body text, buttons, nav |
| Button radius | `5px` | Rounded buttons |
| Button bg | `#000a2d` | Default button background |
| Button hover | `#3589f1` | Button hover state |

## Section order (from live preview DOM)

1. **Header** — transparent sticky nav, logo left, nav links right (Home, About, Services, Blog, Element, Contact), "Apply Now" CTA button
2. **Hero Slider** — two slides, each with heading "Small Business Loans For Daily Expenses", subtext "Achieve your financial goal", CTA "Apply for Loan", hero image right
3. **About** — two-column: image left, heading "Building a Brighter Financial Future & Good Support", body text, "Apply for Loan" CTA
4. **Services** — heading "High Performance Services For All Industries", 4 service cards (Business Loan, Commercial Loans, Construction Loans, Business Loan) with icon + title + description
5. **Support / Company** — dark section, heading "We Promise Sustainable Future For You", body text, two-column layout with image
6. **Application CTA** — light background (#e0e4f8), heading "Easy Application Process For Any Types of Loan", "Apply for Loan" button
7. **Team** — heading "Take a look to our professional team members", 4 team member cards (image + name + social links)
8. **Testimonials** — dark navy background (#021a47), carousel with testimonial text + author
9. **Blog** — heading "News from around the world selected by us", 2-3 blog cards (image + date + title + excerpt)
10. **Footer** — dark background, 3-column layout (Quick Link, New Products, Support), copyright, social icons

## Gherkin requirements

### Scenario: Header navigation renders correctly
```gherkin
Given the user visits the Credova homepage
Then the header displays a logo on the left
And navigation links "Home", "About", "Services", "Blog", "Contact" are visible
And an "Apply Now" button is visible in the header
And the header becomes sticky on scroll
```

### Scenario: Hero slider displays loan content
```gherkin
Given the user views the hero section
Then a heading "Small Business Loans For Daily Expenses" is displayed
And a subtext "Achieve your financial goal" is shown
And an "Apply for Loan" CTA button is visible
And a hero image is shown on the right side
And the slider supports auto-rotation between slides
```

### Scenario: About section shows company info
```gherkin
Given the user scrolls to the About section
Then a heading "Building a Brighter Financial Future & Good Support" is displayed
And a descriptive paragraph is shown
And an "Apply for Loan" CTA button is visible
And an about image is displayed on the left
```

### Scenario: Services section displays loan types
```gherkin
Given the user scrolls to the Services section
Then a heading "High Performance Services For All Industries" is displayed
And 4 service cards are visible
And each card has a service icon, title, and description
And the service types include "Business Loan", "Commercial Loans", "Construction Loans"
```

### Scenario: Support section with company promise
```gherkin
Given the user scrolls to the Support section
Then a heading "We Promise Sustainable Future For You" is displayed
And a descriptive paragraph is shown
And the section has a distinct layout with supporting imagery
```

### Scenario: Application CTA section
```gherkin
Given the user scrolls to the Application section
Then a heading "Easy Application Process For Any Types of Loan" is displayed
And an "Apply for Loan" button is prominent
And the section has a light background
```

### Scenario: Team section shows members
```gherkin
Given the user scrolls to the Team section
Then a heading "Take a look to our professional team members" is displayed
And 4 team member cards are visible
And each card shows a photo, name, and social media links
```

### Scenario: Testimonials carousel
```gherkin
Given the user scrolls to the Testimonials section
Then a dark navy background is displayed
And testimonial content with author attribution is shown
And the testimonials support carousel navigation
```

### Scenario: Blog section shows recent posts
```gherkin
Given the user scrolls to the Blog section
Then a heading "News from around the world selected by us" is displayed
And 2-3 blog post cards are visible
And each card shows an image, date, title, and excerpt
```

### Scenario: Footer with links and copyright
```gherkin
Given the user scrolls to the Footer
Then 3 columns of links are displayed (Quick Link, New Products, Support)
And social media icons are visible
And a copyright line is shown
And a "Component Dock" link is present in the footer
```

## Verification checklist

- [ ] Header: transparent → sticky on scroll, logo, nav links, "Apply Now" CTA
- [ ] Hero slider: heading, subtext, CTA, hero image, auto-rotation
- [ ] About: two-column, heading, body, CTA, image
- [ ] Services: 4 cards with icons, titles, descriptions
- [ ] Support: dark section, heading, body, imagery
- [ ] Application CTA: light bg, heading, prominent button
- [ ] Team: 4 member cards with photos, names, social links
- [ ] Testimonials: dark bg, carousel, content + author
- [ ] Blog: 2-3 cards with image, date, title, excerpt
- [ ] Footer: 3-column links, social icons, copyright, Component Dock link
- [ ] Design tokens: brand blue #3589f1, Rufina + Rubik fonts, 5px radius
- [ ] Responsive: mobile hamburger menu, stacked columns on small screens
- [ ] No ColorLib references in app code (provenance only in spec)
