# Template: LoanBridge (Finance)

## Purpose

Recreation of ColorLib "Loan" — a finance/loan company landing page.

- **Source slug:** `loan`
- **Preview URL:** https://preview.colorlib.com/theme/loan/
- **Source page:** https://colorlib.com/wp/template/loan/
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript

## Design Tokens

Extracted from the live preview CSS (`assets/css/style.css`):

| Token         | Value                                                                         | Usage                                  |
| ------------- | ----------------------------------------------------------------------------- | -------------------------------------- |
| Brand blue    | `#3589f1`                                                                     | Primary buttons, links, accents        |
| Dark navy     | `#000a2d`                                                                     | Hero overlay, dark section backgrounds |
| Accent orange | `#ff872d`                                                                     | Secondary accent (used sparingly)      |
| Light gray bg | `#f7f7f7`                                                                     | Section alternate backgrounds          |
| Body font     | `"Rubik", sans-serif`                                                         | All body text                          |
| Heading font  | `"Rufina", serif`                                                             | Headings, buttons                      |
| Button style  | Uppercase, letter-spacing 3px, border 1px solid brand blue, padding 18px 44px | CTA buttons                            |
| Button hover  | Fill brand blue, text white                                                   | Hover state                            |
| Border radius | 0 (sharp edges)                                                               | Buttons, cards                         |

## Section Structure (from preview DOM)

1. **Navbar** — Transparent header over hero. Logo left, nav links (Home, About, Services, Blog w/ dropdown, Contact), phone number button right. Sticky on scroll.
2. **Hero Slider** — Full-width background image with overlay. Two slides. Each: subtitle text + h1 headline + CTA button ("Apply for Loan") left, hero image right.
3. **Hero Stats Bar** — Dark navy bar below hero. 4 columns: image, clock icon + "Quick & Easy Loan Approvals", heart icon + same, money icon + same.
4. **About Section** — Two columns. Left: "About Our Company" subtitle, h2, two paragraphs, "Apply for Loan" button. Right: overlapping about images.
5. **Services Section** — Background image, centered subtitle + h2. 4-column grid of service cards: icon (flaticon) + title + description. Services: Business Loan, Commercial Loans, Construction Loans, Business Loan.
6. **Why Choose Us / Support** — Two columns. Left: large image with "Since 1992" badge overlay. Right: subtitle + h2, paragraph, 4 checkbox items (custom styled).
7. **Application Form** — Background image. Centered subtitle + h2. Form row: Select Amount dropdown, Duration Month dropdown, Return Amount text input, "Apply for Loan" submit button.
8. **Team Section** — Centered subtitle + h2. 4-column grid: team member cards with photo, social overlay (facebook, twitter, globe icons), name, role.
9. **Testimonial** — Dark background. Carousel: quote icon + testimonial text, founder photo + name + role.
10. **Blog Section** — Centered subtitle + h2. 2-column grid: blog cards with image, date badge, title link, author line.
11. **Footer** — 4-column: logo + description, Quick Links, New Products, Support. Bottom bar: copyright text + social icons (twitter, facebook, globe, instagram).

## Gherkin Requirements

### Navbar

```gherkin
Scenario: Navbar displays logo, nav links, and phone button
  Given the user visits the LoanBridge page
  Then the navbar shows a logo on the left
  And the navbar shows navigation links: Home, About, Services, Blog, Contact
  And the navbar shows a phone number button on the right
  And the navbar becomes sticky when scrolling down

Scenario: Blog dropdown menu appears on hover
  Given the navbar is visible
  When the user hovers over "Blog"
  Then a dropdown submenu appears with Blog, Blog Details, Element, Apply Now links
```

### Hero

```gherkin
Scenario: Hero slider displays headline and CTA
  Given the user visits the LoanBridge page
  Then the hero section shows a subtitle "Achieve your financial goal"
  And the hero shows a headline about small business loans
  And the hero shows an "Apply for Loan" button
  And the hero shows a person image on the right

Scenario: Hero has two slides
  Given the hero slider is active
  Then the slider cycles between two slides automatically
```

### Hero Stats Bar

```gherkin
Scenario: Stats bar shows key selling points below hero
  Given the hero section is displayed
  Then a dark stats bar appears below the hero
  And the bar shows 4 items: an image, and three icon+text pairs about quick loan approvals
```

### About Section

```gherkin
Scenario: About section shows company info and images
  Given the user scrolls to the about section
  Then the section displays "About Our Company" subtitle
  And the section shows an h2 heading about building a brighter financial future
  And the section shows two paragraphs of description
  And the section shows an "Apply for Loan" button
  And the section shows overlapping about images on the right
```

### Services Section

```gherkin
Scenario: Services section shows 4 service cards
  Given the user scrolls to the services section
  Then the section displays "Services that we are providing" subtitle
  And the section shows an h2 heading about high performance services
  And the section shows 4 service cards in a grid
  And each card has an icon, title, and short description
  And the services are: Business Loan, Commercial Loans, Construction Loans, Business Loan

Scenario: Services section has a background image
  Given the services section is visible
  Then the section has a subtle background image
```

### Why Choose Us Section

```gherkin
Scenario: Support section shows image with badge and checklist
  Given the user scrolls to the support section
  Then the section shows a large image with a "Since 1992" badge overlay
  And the section shows "Why Choose Our Company" subtitle
  And the section shows an h2 heading about sustainable future
  And the section shows a paragraph and 4 checked items
```

### Application Form

```gherkin
Scenario: Application form has loan configuration fields
  Given the user scrolls to the application section
  Then the section shows "Apply in Three Easy Steps" subtitle
  And the form shows a "Select Amount" dropdown
  And the form shows a "Duration Month" dropdown
  And the form shows a "Return Amount" text input
  And the form shows an "Apply for Loan" submit button

Scenario: Application form has a background image
  Given the application section is visible
  Then the section has a subtle background image
```

### Team Section

```gherkin
Scenario: Team section shows 4 team members
  Given the user scrolls to the team section
  Then the section shows "Our Loan Section Team Members" subtitle
  And the section shows an h2 heading about professional team members
  And the section shows 4 team member cards in a grid
  And each card has a photo, name, role, and social media overlay icons

Scenario: Team social overlay appears on hover
  Given a team member card is displayed
  When the user hovers over the team member photo
  Then social media icons (facebook, twitter, globe) appear as an overlay
```

### Testimonial Section

```gherkin
Scenario: Testimonial section shows carousel
  Given the user scrolls to the testimonial section
  Then the section displays a quote icon
  And the section shows testimonial text
  And the section shows a founder photo, name, and role
  And the testimonial content is in a carousel/slider format

Scenario: Testimonial has dark background
  Given the testimonial section is visible
  Then the section has a dark background color
```

### Blog Section

```gherkin
Scenario: Blog section shows 2 blog cards
  Given the user scrolls to the blog section
  Then the section shows "News from our latest blog" subtitle
  And the section shows an h2 heading about news from around the world
  And the section shows 2 blog cards in a 2-column grid
  And each card has an image, date, title link, and author line
```

### Footer

```gherkin
Scenario: Footer shows 4-column layout
  Given the user scrolls to the footer
  Then the footer shows a logo and description in the first column
  And the footer shows Quick Links in the second column
  And the footer shows New Products in the third column
  And the footer shows Support links in the fourth column

Scenario: Footer bottom bar has copyright and social icons
  Given the footer is displayed
  Then the bottom bar shows a copyright notice
  And the bottom bar shows social media icons (twitter, facebook, globe, instagram)
  And the footer includes a link to componentdock.com
```

## Verification Checklist

- [ ] Section order matches preview: Navbar → Hero → Stats Bar → About → Services → Why Choose Us → Application Form → Team → Testimonial → Blog → Footer
- [ ] Brand color #3589f1 used for primary buttons and accents
- [ ] Dark navy #000a2d used for hero overlay and testimonial background
- [ ] Fonts: Rubik (body) and Rufina (headings/buttons) loaded via Google Fonts
- [ ] Hero slider with two slides and auto-cycling
- [ ] Stats bar with icons and text below hero
- [ ] About section with overlapping images
- [ ] Services section with 4 cards and background image
- [ ] Why Choose Us with image badge and checklist
- [ ] Application form with 2 dropdowns, 1 text input, submit button
- [ ] Team section with 4 cards and social overlay on hover
- [ ] Testimonial carousel with dark background
- [ ] Blog section with 2 cards
- [ ] Footer 4-column layout with copyright and social icons
- [ ] Footer links to componentdock.com
- [ ] No references to ColorLib in app code
- [ ] Placeholder images via picsum.photos
