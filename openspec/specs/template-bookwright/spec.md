# Template: Bookwright (Business Bookkeeping Landing)

## Purpose

Bookwright is a bookkeeping / financial consulting agency landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Book Keeping" free template (source:
https://colorlib.com/wp/template/book-keeping/, preview:
https://preview.colorlib.com/theme/book-keeping/), built under a DIFFERENT name
(**Bookwright**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a Bootstrap-based single-page bookkeeping agency template with
a clean corporate aesthetic, dark blue brand accent, hero banner with CTA,
split-column about section, services grid, testimonials, and a contact form.
The live preview was unreachable (404) at prep time; the spec is based on the
ColorLib template page screenshot and page metadata.

**Source slug:** book-keeping
**Preview URL:** https://preview.colorlib.com/theme/book-keeping/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bookkeeping-free-template.jpg

## Design Tokens

| Token                  | Value                                        | Usage                                                     |
| ---------------------- | -------------------------------------------- | --------------------------------------------------------- |
| Brand dark blue        | `#2b3990`                                    | Logo, CTA button, social icons, subhead accents           |
| Text dark              | `#4a4a4a`                                    | Headings (h1–h6), navigation links                        |
| Text body              | `#666666`                                    | Paragraph text, muted labels                              |
| White                  | `#ffffff`                                    | Nav bar background, about section background              |
| Light gray             | `#f0f0f0`                                    | Utility header bar background, section alternation        |
| Warm gold accent       | `#d69b3b`                                    | Hero image warmth / secondary accent                      |
| Heading font           | Poppins (Google Fonts, weights 400–700)      | All headings (h1–h6), nav links                           |
| Body font              | Open Sans (Google Fonts, weights 300–400)    | Body text, paragraphs, utility bar text                   |
| CTA button radius      | 2px (sharp corners)                          | Primary CTA buttons (sharp rectangular)                   |
| CTA button bg          | `#2b3990`                                    | Hero "Get Started" button, section CTA buttons            |
| CTA button text        | `#ffffff`                                    | Button text (uppercase)                                   |
| Section padding        | ~80px vertical                               | Standard section spacing                                  |
| Social icon color      | `#2b3990`                                    | Social media icons in header and footer                   |
| Link hover             | `#2b3990`                                    | Navigation link hover, footer links                       |

## Section Structure (fidelity order)

1. **Top Bar** — Thin light-gray (#f0f0f0) utility header bar spanning full width. Left side: contact info with small icons — "Have a questions?" text, phone number "10 20 123 456", email "info@mydomain.com". Right side: social media icons (Facebook, Twitter, LinkedIn) in dark blue circles. Hidden on mobile.
2. **Navbar** — White background, subtle bottom border. Left: logo (dark blue circle with white `$` symbol) + "Book Keeping" text (Book in regular weight, Keeping in bold) in dark blue. Center/right: navigation links — Home, About, Services (with dropdown arrow), Blog, Contact. Clean sans-serif typography.
3. **Hero Banner** — Full-width background image (office worker at desk with calculator, warm golden lighting). Centered white text overlay with shadow for readability: large bold headline "Book Keeping Consulting Agency", smaller subtext placeholder. Sharp-cornered dark blue CTA button "GET STARTED" centered below text.
4. **About Us** — White background, two-column split layout. Left: professional office image. Right: small uppercase dark blue "ABOUT US" subhead, large bold heading "Mindful Planning of Monetary Spending and Saving", thin dark blue horizontal separator, paragraph text, 2x2 grid of feature bullet points with dark blue arrow icons ("Dolor sit amet", "Obcaecati similique excepturi" × 2).
5. **Services** — Light or white background section. Section title "Our Services". Grid of service cards (3 or 4 columns). Each card: icon (lucide-react), service title, short description. Services include: Financial Planning, Tax Consultation, Bookkeeping, Audit, Payroll Management, Business Advisory.
6. **Counters / Stats** — Dark or branded background section with animated counters. 4-column grid showing key statistics: e.g. 150+ Projects Completed, 98% Client Satisfaction, 12+ Years Experience, 50+ Team Members. Counter animation on scroll.
7. **Testimonials** — Light or white background. Carousel or grid of testimonial cards. Each: quote text, author name, author role, avatar placeholder image. 2–3 testimonials visible.
8. **Team** — White background. Section title "Our Team". 3-column grid of team member cards. Each: photo placeholder, name, role/title, social media icon links.
9. **Contact Form** — White background, two-column layout. Left: contact form with fields (Name, Email, Subject, Message textarea) and dark blue "Send Message" submit button. Right: contact information (address, phone, email) with map placeholder or image.
10. **Footer** — Dark background (dark gray or brand dark blue). 4 columns: (1) logo + brief description + social icons, (2) Quick Links, (3) Services links, (4) Newsletter signup with email input + subscribe button. Copyright bar at bottom: "Copyright © 2024 All rights reserved | Made with Component Dock".
11. **Copyright Bar** — Subtle bar at very bottom: "Copyright © [year] All rights reserved | Made with Component Dock" (replacing original Colorlib attribution).

## Gherkin Requirements

### Scenario: Top bar displays contact info and social links

```
Given the Bookwright page loads
Then the top bar shows contact information with phone and email
And social icons for Facebook, Twitter, and LinkedIn are visible
And the top bar is hidden on mobile viewports
```

### Scenario: Navbar renders logo, navigation links, and dropdowns

```
Given the Bookwright page loads
Then the navbar displays the Bookwright logo with dark blue circle and "$" symbol
And the navigation links include: Home, About, Services, Blog, Contact
And the Services link has a dropdown indicator
And the navbar has a white background with bottom border
```

### Scenario: Hero banner shows headline and CTA

```
Given the Bookwright page loads
Then the hero banner displays a full-width background image
And the headline "Book Keeping Consulting Agency" is centered in white text
And a dark blue "GET STARTED" button is visible below the headline
And the hero text has a subtle shadow for readability
```

### Scenario: About Us section shows split layout

```
Given the Bookwright page loads
Then the About Us section has a two-column split layout
And the left column displays a professional image
And the right column shows the "ABOUT US" subhead in dark blue
And the heading "Mindful Planning of Monetary Spending and Saving" is displayed
And a thin dark blue separator line is below the heading
And 4 feature bullet points are shown in a 2x2 grid with arrow icons
```

### Scenario: Services section displays service cards

```
Given the Bookwright page loads
Then the Services section shows a section title "Our Services"
And at least 3 service cards are displayed in a grid
And each card has an icon, title, and description text
```

### Scenario: Counters section animates on scroll

```
Given the Bookwright page loads
Then the counters section displays 4 statistics
And each statistic has a number, suffix, and label
And the numbers animate from 0 to their target value on scroll
```

### Scenario: Testimonials section shows review cards

```
Given the Bookwright page loads
Then the testimonials section displays at least 2 testimonial cards
And each card shows a quote, author name, and author role
```

### Scenario: Contact form is functional

```
Given the Bookwright page loads
Then the contact form displays fields for Name, Email, Subject, and Message
And a "Send Message" submit button is visible
And form validation shows errors for empty required fields
And submitting a valid form shows a success message
```

### Scenario: Footer renders multi-column layout

```
Given the Bookwright page loads
Then the footer displays 4 columns
And column 1 has logo, description, and social links
And column 2 has Quick Links
And column 3 has Services links
And column 4 has a newsletter form with email input and subscribe button
And a copyright bar shows "Component Dock" attribution
```

### Scenario: All sections are responsive

```
Given the Bookwright page loads on a mobile viewport
Then the top bar is hidden
And the navbar shows a hamburger menu toggle
And all section layouts stack vertically
And images resize appropriately
```

## Verification Checklist

- [ ] All sections match the Book Keeping preview structure and order
- [ ] Dark blue CTA buttons (#2b3990) with sharp corners (2px radius)
- [ ] Poppins font for headings, Open Sans for body text
- [ ] Hero banner has full-width background image with centered white text
- [ ] About Us section has 2-column split with separator line and bullet points
- [ ] Counter animation works on scroll (intersection observer)
- [ ] Contact form validates required fields
- [ ] Footer has 4 columns with newsletter form
- [ ] Copyright bar links to Component Dock
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Placeholder images use picsum.photos
- [ ] Responsive: top bar hidden on mobile, hamburger menu, stacked layouts
- [ ] Accessibility: semantic HTML, aria labels on interactive elements
