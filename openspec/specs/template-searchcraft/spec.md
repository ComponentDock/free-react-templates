# Template: SearchCraft (SEO / Digital Agency)

## Purpose

Recreation of ColorLib "Seo" template
(preview: https://preview.colorlib.com/theme/seo/
· source: https://colorlib.com/wp/template/seo/).

Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript (strict).
Tests: Vitest + Testing Library, 100% coverage enforced.

## Design Tokens (extracted from live preview CSS)

| Token                | Value                              | Notes                                      |
|----------------------|------------------------------------|--------------------------------------------|
| Brand primary        | `#f54349`                          | Used on buttons, hover states, accent      |
| Brand gradient       | `linear-gradient(90deg, #f45622 0%, #f53e54 100%)` | Banner overlay, primary-btn bg, hover fills |
| Secondary accent     | `#4cd3e3`                          | Used in donut chart / stats                |
| Tertiary accent      | `#38a4ff`                          | Chart segments                             |
| Quaternary accent    | `#f4e700`                          | Chart segments                             |
| Background alt       | `#f9f9ff`                          | Menutop strip, alternating sections        |
| Body text            | `#777777`                          | Paragraphs, secondary text                 |
| Heading text         | `#222222`                          | H1–H6 headings                            |
| White                | `#fff`                             | Banner text, footer text                   |
| Font family          | `"Poppins", sans-serif`            | All weights 300–700 via Google Fonts       |
| Button radius        | `0px` (primary), `3px` (cards)    | Square primary buttons, slightly rounded cards |
| Section background   | Gradient overlay on dark image     | Banner + testimonial sections use overlay  |
| Section gap          | `.section-gap` class               | Consistent vertical spacing between sections |

## Section Order (from live preview DOM)

1. **Header** — top info bar (phone, email, "Free Seo Analysis" link) + navbar (logo, nav links: Home/Service/Plan/Team/Blog/Pages dropdown)
2. **Banner/Hero** — dark overlay background image, 2-column: left = headline ("Seo Analysis Helps to Upgrade Website Ranking") + subtext + CTA button ("Get a Quote"); right = header image
3. **Services** — 3-column grid: icon + title + description (Diagnosis Devices, Software Installation, Virus & Malware Removal)
4. **About** — 2-column: left = donut chart widget; right = heading + paragraph + CTA ("See Details")
5. **Related** — Carousel/slider with 2 slides: heading + paragraph + CTA + image (SEO content related)
6. **Pricing** — 3 pricing cards (Standard £199, Business £399, Premium £599): plan name, price, description, feature list, purchase button
7. **Team** — 4-column: photo + social overlay + name + role (Ethel Davis, Rodney Cooper, Dora Walker, Lena Keller)
8. **Testimonials** — dark overlay background, carousel: user avatar + quote text + name + title
9. **Blog** — (not present in this template)
10. **Brand Logos** — 5 grayscale partner/client logos in a row
11. **Contact** — title + 2-column form (left: name/email/subject; right: textarea + send button)
12. **Footer** — 3-column: Top Products links | Newsletter (email + subscribe) | Instagram feed (8 thumbnails) + copyright + social icons

## Gherkin Requirements

### Feature: Header Navigation

```gherkin
Scenario: Top info bar displays contact info
  Given the user visits the SearchCraft page
  Then a top info bar shows a phone number and email address
  And a "Free SEO Analysis" link is visible on the right side of the bar

Scenario: Navbar renders with logo and links
  Given the user visits the SearchCraft page
  Then the navbar shows a logo image
  And navigation links: Home, Service, Plan, Team, Blog, Pages
  And the Pages link has a dropdown with Generic and Elements items

Scenario: Navbar collapses on mobile
  Given the user views on a mobile viewport
  Then the navbar shows a hamburger toggle button
  And clicking the toggle expands/collapses the nav links
```

### Feature: Banner / Hero Section

```gherkin
Scenario: Hero section renders with heading and CTA
  Given the user visits the SearchCraft page
  Then the hero section displays "Seo Analysis Helps to Upgrade Website Ranking"
  And a descriptive paragraph below the heading
  And a "Get a Quote" CTA button with gradient background
  And a header image on the right side (desktop)

Scenario: Hero has dark overlay
  Given the user visits the SearchCraft page
  Then the banner area has a dark overlay over a background image
  And the text is white on the dark overlay
```

### Feature: Services Section

```gherkin
Scenario: Services section displays 3 service cards
  Given the user scrolls to the services section
  Then the section heading reads "Device Related Services"
  And 3 service cards are displayed in a row
  And each card has an icon, title, and description

Scenario: Service cards have icons
  Given the services section is visible
  Then "Diagnosis Devices" has a magic-wand icon
  And "Software Installation" has a rocket icon
  And "Virus & Malware Removal" has a bug icon
```

### Feature: About Section

```gherkin
Scenario: About section renders with chart and text
  Given the user scrolls to the about section
  Then the left column displays a donut chart
  And the right column has a heading "We Believe that Interior beautifies the"
  And a paragraph below the heading
  And a "See Details" CTA button
```

### Feature: Related Content Section

```gherkin
Scenario: Related section displays carousel
  Given the user scrolls to the related section
  Then the section heading reads "Device Related Services"
  And a carousel with at least 2 slides
  And each slide has a heading, paragraph, CTA button, and image
```

### Feature: Pricing Section

```gherkin
Scenario: Pricing displays 3 plans
  Given the user scrolls to the pricing section
  Then the section heading reads "Choose the Perfect Plan for you"
  And 3 pricing cards are displayed: Standard (£199), Business (£399), Premium (£599)

Scenario: Each pricing card has complete content
  Given a pricing card is visible
  Then it shows the plan name, price, and description
  And a feature list with at least 5 items
  And a "Purchase Plan" button with gradient background
```

### Feature: Team Section

```gherkin
Scenario: Team section displays 4 members
  Given the user scrolls to the team section
  Then the section heading reads "About Creative Agency Team"
  And 4 team member cards are displayed
  And each card shows a photo, name, and role
  And each card has social media overlay (Facebook, Twitter, LinkedIn)
```

### Feature: Testimonial Section

```gherkin
Scenario: Testimonials render in carousel
  Given the user scrolls to the testimonials section
  Then testimonials display in a carousel/slider
  And each testimonial has a user avatar, quote, name, and title
  And the section has a dark overlay background
```

### Feature: Brand Logos Section

```gherkin
Scenario: Brand logos display in a row
  Given the user scrolls to the brand section
  Then 5 brand/partner logos are displayed in a row
  And logos are grayscale by default
```

### Feature: Contact Form Section

```gherkin
Scenario: Contact form renders with all fields
  Given the user scrolls to the contact section
  Then the section heading reads "Contact Us"
  And the form has fields: Name, Email, Subject, Message
  And a "Send Message" button

Scenario: Contact form validates required fields
  Given the user clicks "Send Message" without filling fields
  Then validation errors appear for Name, Email, Subject, and Message
```

### Feature: Footer

```gherkin
Scenario: Footer has 3 columns
  Given the user scrolls to the footer
  Then the left column shows "Top Products" links
  And the middle column shows a Newsletter signup (email input + Subscribe button)
  And the right column shows Instagram feed thumbnails

Scenario: Footer has copyright and social links
  Given the user views the footer bottom
  Then a copyright line is displayed
  And social media icons (Facebook, Twitter, Dribbble, Behance) are visible
  And a "Component Dock" attribution link is present
```

## Verification Checklist

- [ ] All 11 sections rendered in correct order
- [ ] Header: top bar + navbar with dropdown
- [ ] Banner: dark overlay, 2-column, gradient CTA button
- [ ] Services: 3 cards with icons in a row
- [ ] About: donut chart placeholder + text + CTA
- [ ] Related: carousel with 2+ slides
- [ ] Pricing: 3 cards with plan details + feature lists
- [ ] Team: 4 member cards with social overlays
- [ ] Testimonials: carousel with dark overlay background
- [ ] Brand logos: 5 grayscale logos in a row
- [ ] Contact form: name, email, subject, message + submit
- [ ] Footer: 3 columns (products, newsletter, instagram) + copyright + social icons
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Responsive (mobile hamburger menu, stacked columns on mobile)
- [ ] 100% test coverage
- [ ] Design tokens match: Poppins font, #f54349 brand, gradient buttons, #f9f9ff alt bg
