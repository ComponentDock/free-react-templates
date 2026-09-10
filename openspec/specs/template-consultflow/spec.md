# Template: Consultflow (Business Consulting Landing)

## Purpose

Consultflow is a business consulting / corporate landing page in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Conbusi" free template (source:
https://colorlib.com/wp/template/conbusi/, preview:
https://preview.colorlib.com/theme/conbusi/), built under a DIFFERENT name
(**Consultflow**), with the monorepo stack: Vite + React 19 + Tailwind CSS 4

- TypeScript.

The original is a Bootstrap 4 single-page consulting template with a
white-background aesthetic, blue gradient CTA buttons, hero image slider with
overlay, and sections for services, about, counters, case studies, FAQ,
testimonials, team, contact form, info banner, and a 4-column footer.

**Source slug:** conbusi
**Preview URL:** https://preview.colorlib.com/theme/conbusi/

## Design Tokens

| Token                  | Value                                                        | Usage                                                    |
| ---------------------- | ------------------------------------------------------------ | -------------------------------------------------------- |
| Brand blue start       | `#0181f5`                                                    | Button gradient top, link hover                          |
| Brand blue end         | `#5DB2FF`                                                    | Button gradient bottom, accent blue                      |
| Text dark              | `#1F1F1F`                                                    | Headings (h1–h6), strong text                            |
| Text body              | `#7e7e7e`                                                    | Paragraph text, muted labels                             |
| Text secondary         | `#4D4D4D`                                                    | Secondary body text                                      |
| Overlay dark           | `#001D38`                                                    | Dark navy overlay on counter, testimonial, info sections |
| Light text             | `#cccccc`                                                    | Footer muted text                                        |
| White                  | `#ffffff`                                                    | Primary background, card backgrounds                     |
| Heading font           | Poppins (Google Fonts, weights 300–800)                      | All headings (h1–h6), buttons, nav links                 |
| Body font              | Poppins (Google Fonts, weights 300–500)                      | Body text, paragraphs                                    |
| CTA button radius      | 30px (pill)                                                  | .boxed-btn3 (all CTA buttons)                            |
| CTA button gradient    | `linear-gradient(to bottom, #0181f5, rgba(93,178,255,0.99))` | .boxed-btn3 background                                   |
| CTA line button        | `#5DB2FF` border, transparent bg                             | .boxed-btn3-line (outline variant)                       |
| Counter section bg     | Dark overlay `#001D38`                                       | .counter_bg_1 with overlay_03                            |
| Testimonial section bg | Dark overlay `#001D38`                                       | .testimonial_area.overlay                                |
| Info banner bg         | Dark overlay `#001D38`                                       | .Information_area.overlay                                |
| Section padding        | `135px 0`                                                    | Counter area; standard sections ~80px                    |
| Social icon color      | `#5DB2FF`                                                    | Team social links, footer social                         |

## Section Structure (fidelity order)

1. **Top Bar** — Thin strip with "Welcome to Conbusi consulting service" left-aligned, email (info@docmed.com), phone (1601-609 6780), and social icons (LinkedIn, Facebook, Google+) right-aligned. White background, hidden on mobile (d-none d-lg-block).
2. **Navbar** — Sticky header with logo (image) left, horizontal nav links center (Home [active], Pages ▾ [Case Details, About, Elements], Services, Case Study, Blog ▾ [Blog, Single Blog], Contact), and "Get a Quote" CTA button right. White background with bottom border.
3. **Hero Slider** — Owl Carousel with 2 slides. Each slide: full-width banner background image with dark overlay, centered content: h3 "Big Opportunity for your Business" with line break, blue gradient pill CTA "Our Services" (.boxed-btn3).
4. **Services** — White background. Section title "What we Do?". 3-column grid, 2 rows = 6 service cards. Each card: SVG icon (placeholder), h3 title (Marketing & SEO Agency, Startup Agency, Corporate Business, Finance Solution, Food & Restaurant, Travel Agency), paragraph description, "Learn More" link.
5. **About** — White background. Split layout: left column has h3 "Why our Consulting?", paragraph, blue gradient pill CTA "About Us" (.boxed-btn3). Right column: image.
6. **Counters** — Dark overlay background (#001D38 with overlay_03). 4-column grid: icon SVG + counter number + suffix (+, %) + label. Stats: 200+ Team Members, 97% Business Success, 5628 Happy Client, 5637 Business Done. Animated counter effect.
7. **Case Studies** — White background. Section title "Case Study". Owl Carousel with 4 case cards: image thumbnail, category span "Finance Solution", h3 link "Consumer Products Consulting". Below carousel: "More Cases" outline pill button (.boxed-btn3-line).
8. **FAQ / Accordion** — White background. Split layout: left column image, right column h3 "Frequently ask" with 3 Bootstrap accordion items (collapsible card headers with question text + expandable body with answer).
9. **Testimonials** — Dark overlay background. Owl Carousel of 3 testimonial slides. Each: quote icon SVG, paragraph review text, author thumbnail image, h3 author name ("Robert Thomson"), span role ("Business Owner").
10. **Team** — White background. Section title "Expert Team". 3-column grid: each card has team member photo, h3 name (Milani Mou, Jasmine Pinky, Piya Zosoldos), p role ("Photographer"), social links (Facebook, Twitter, Instagram).
11. **Contact Form** — White background. Split layout: left 5-col form with h3 "Get Free Quote", inputs (Your Name, Email, Message textarea), blue gradient "Send" button (.boxed-btn3). Right 6-col: contact image.
12. **Info Banner** — Dark overlay background. Centered content: h3 "For Any Information Call Us", paragraph, phone number link "+10 673 763 6786" as blue gradient pill button (.boxed-btn3).
13. **Footer** — White background, 4 columns: logo + contact info (email, phone, address) + social icons; Services links (Marketing & SEO, Startup, Finance solution, Food, Travel); Useful Links (About, Blog, Contact, Appointment); Newsletter (email input + Subscribe button + description text).
14. **Copyright Bar** — "Copyright © [year] All rights reserved | Made with ♥ by Component Dock" (replacing original Colorlib attribution).

## Gherkin Requirements

### Scenario: Top bar displays contact info

```
Given the Consultflow page loads
Then the top bar shows "Welcome to Conbusi consulting service" text
And the email "info@docmed.com" is visible
And the phone number "1601-609 6780" is visible
And social icons for LinkedIn, Facebook, and Google+ are shown
And the top bar is hidden on mobile viewports
```

### Scenario: Navbar renders navigation links and CTA

```
Given the Consultflow page loads
Then the navbar displays: Home, Pages (with dropdown), Services, Case Study, Blog (with dropdown), Contact
And the Pages dropdown contains: Case Details, About, Elements
And the Blog dropdown contains: Blog, Single Blog
And a "Get a Quote" button is visible in the navbar
And the navbar is sticky on scroll
```

### Scenario: Hero slider displays headline and CTA

```
Given the Consultflow page loads
Then the hero slider shows the headline "Big Opportunity for your Business"
And a blue gradient pill button labeled "Our Services" is visible
And the hero section has a background image with dark overlay
And the slider contains at least 2 slides
```

### Scenario: Services section shows 6 service cards

```
Given the Consultflow page loads
Then the services section displays "What we Do?" heading
And 6 service cards are shown in a 3-column layout
And each card has an icon, a title, a description, and a "Learn More" link
And the service titles are: Marketing & SEO Agency, Startup Agency, Corporate Business, Finance Solution, Food & Restaurant, Travel Agency
```

### Scenario: About section displays consulting info

```
Given the Consultflow page loads
Then the about section shows "Why our Consulting?" heading
And a paragraph description is visible
And an "About Us" blue gradient pill button is displayed
And an image appears on the right side of the section
```

### Scenario: Counter section displays animated stats

```
Given the Consultflow page loads
Then the counter section has a dark overlay background
And 4 stats are displayed: 200+ Team Members, 97% Business Success, 5628 Happy Client, 5637 Business Done
And each stat has an icon above the number
```

### Scenario: Case study carousel shows 4 items

```
Given the Consultflow page loads
Then the case study section displays "Case Study" heading
And 4 case study cards are shown in a carousel
And each card has an image, a category label, and a title
And a "More Cases" outline button is visible below the carousel
```

### Scenario: FAQ accordion has 3 items

```
Given the Consultflow page loads
Then the FAQ section shows "Frequently ask" heading
And 3 accordion items are displayed
And clicking an accordion header toggles the answer visibility
```

### Scenario: Testimonials carousel shows review slides

```
Given the Consultflow page loads
Then the testimonial section has a dark overlay background
And testimonial slides contain a quote icon, review text, author name, and author role
And the carousel contains at least 3 slides
```

### Scenario: Team section displays 3 members

```
Given the Consultflow page loads
Then the team section shows "Expert Team" heading
And 3 team member cards are displayed
And each card has a photo, name, role, and social media links (Facebook, Twitter, Instagram)
```

### Scenario: Contact form captures user input

```
Given the Consultflow page loads
Then a "Get Free Quote" form is visible with inputs: Your Name, Email, Message
And a blue gradient "Send" button is displayed
And a contact image appears beside the form
```

### Scenario: Info banner displays phone CTA

```
Given the Consultflow page loads
Then the info banner shows "For Any Information Call Us" heading
And a blue gradient pill button with phone number "+10 673 763 6786" is visible
And the section has a dark overlay background
```

### Scenario: Footer renders 4 columns

```
Given the Consultflow page loads
Then the footer displays 4 columns
And column 1 has logo, contact info, and social links
And column 2 has Services links
And column 3 has Useful Links
And column 4 has a newsletter form with email input and Subscribe button
And a copyright bar is shown with "Component Dock" attribution
```

## Verification Checklist

- [ ] All sections match the Conbusi preview structure and order
- [ ] Blue gradient CTA buttons (#0181f5 → #5DB2FF) with 30px radius
- [ ] Poppins font used throughout (Google Fonts)
- [ ] Dark overlay sections (counters, testimonials, info banner) use #001D38
- [ ] Hero slider has 2 slides with banner images and overlay
- [ ] Counter animation works on scroll
- [ ] FAQ accordion expands/collapses correctly
- [ ] Case study carousel navigable
- [ ] Testimonial carousel navigable
- [ ] Contact form has name, email, message fields
- [ ] Footer has 4 columns with newsletter form
- [ ] Copyright bar links to Component Dock
- [ ] No ColorLib references in app code (provenance only in spec + TEMPLATES.md)
- [ ] Placeholder images use picsum.photos
- [ ] Responsive: top bar hidden on mobile, hamburger menu, stacked layouts
- [ ] Accessibility: semantic HTML, aria labels on interactive elements
