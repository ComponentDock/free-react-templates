# Template: Teller (Banking & Finance)

## Purpose

Recreation of ColorLib "Banker" — a single-page banking/finance website
template with hero carousel, features, about, team, gallery, pricing, FAQ,
blog, and contact sections.

- **Source:** <https://colorlib.com/wp/template/banker/>
- **Preview:** <https://preview.colorlib.com/theme/banker/>
- **Package:** `@free-react-templates/teller`
- **Surge:** `teller.free.componentdock.com`
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design Tokens

Captured from live preview CSS (`css/style.css`) + inline `@font-face` rules.

| Token                    | Value                                           | Notes                                                          |
| ------------------------ | ----------------------------------------------- | -------------------------------------------------------------- |
| Font family              | `"Open Sans", sans-serif`                       | Weights 300, 400, 700                                          |
| Brand primary            | `#fd7e14` (orange)                              | Buttons, links, price accents, active nav, dropdown top-border |
| Text black               | `#000`                                          | Headings, nav links, checklist items                           |
| Body text                | `gray`                                          | Default paragraph color                                        |
| Footer bg                | `#343a40` (dark gray)                           | Footer section background                                      |
| Success / check          | `#71bc42` (green)                               | Checkmark icon color in `.ul-check.success`                    |
| Disabled / strikethrough | `#dee2e6`                                       | `.remove` pricing features                                     |
| Button radius            | `30px` (pill)                                   | `.btn { border-radius: 30px }`                                 |
| Button padding           | `10px 30px`                                     | `.btn` base                                                    |
| Form input radius        | `30px` (pill)                                   | `.form-control { border-radius: 30px }`                        |
| Form input height        | `43px`                                          | `.form-control`                                                |
| Selection                | black bg, white text                            | `::selection { background: #000; color: #fff }`                |
| Hero h1 size             | `4rem` (desktop), `2rem` (mobile)               | Font-weight 900, white, uppercase                              |
| Hero min-height          | `100vh`                                         | `.site-blocks-cover`                                           |
| Hero overlay             | semi-transparent dark                           | `.site-blocks-cover.overlay:before`                            |
| Testimonial blockquote   | `1.5rem`, italic                                | Centered, max-width 800px                                      |
| Pricing price accent     | `#fd7e14`, 3rem                                 | Price number color                                             |
| Pricing popular          | `box-shadow: 0 10px 40px -10px rgba(0,0,0,0.3)` | Elevated card                                                  |
| Circle bg images         | `300px` diameter circle                         | `.circle-bg:after` behind image                                |
| Section padding          | `2.5em 0` mobile, `8em 0` desktop               | `.site-section`                                                |
| bg-light override        | `#ccc`                                          | Overrides Bootstrap default                                    |

## Section Structure (fidelity order)

1. **Navbar** — sticky header: logo "Teller." (text, orange dot), nav links (Home, About Us, Blog, Contact), social icons (Facebook, Twitter, LinkedIn). Dropdowns under About Us for sub-pages. Mobile hamburger menu.
2. **Hero Cover** — full-viewport background image with dark overlay, centered carousel of 3 slides ("Banking Solutions", "Financing Solutions", "Savings Accounts"), each with heading (uppercase, 4rem, white) + subtext + optional CTA. Scroll-down mouse icon at bottom.
3. **Features Row** — 3-column grid: icon (wallet, cart, credit-card SVGs) + title + description. "Money Savings", "Online Shoppings", "Credit / Debit Cards".
4. **Amortization / Intro** — split layout: left image with circular background decoration, right side with heading "Amortization Computation", paragraph, green checkmark list (3 items), email input + submit button (pill orange).
5. **About Us** — section title + lead paragraph. Split: left image with circle decoration, right side heading "We Solve Your Financial Problem" + two paragraphs.
6. **Meet Team** — 4-column grid, 2 rows (8 members). Each card: team-member figure with image + social overlay on hover (Facebook, Twitter, LinkedIn, Instagram icons), name + position below.
7. **Gallery** — filterable grid with 4 filter buttons (All, Events, Party, Holidays). Images in 4-column layout with hover search icon overlay. Isotope-style filter.
8. **How It Works** — split: left carousel of 3 slides (image + prev/next arrows), right text carousel synced: "01. Online Applications", "02. Get an approval", "03. Card delivery" — each with heading, paragraph, "Learn More" button.
9. **Our Services** — 6 cards in 3-column grid, each with icon + title + description + "Learn More" link. Services: Business Consulting, Credit Card, Income Monitoring, Insurance Consulting, Financial Investment, Financial Management. Section has `bg-light`.
10. **Happy Customers** — testimonial carousel. Centered blockquote (1.5rem italic), circular customer photo, customer name. 4 testimonials.
11. **Pricing** — 3-column pricing cards on `bg-light` background. Basic ($47/yr), Premium ($200/yr, elevated/popular), Professional ($750/yr). Each: title, price, feature checklist (green checks, some strikethrough/disabled), "Buy Now" button.
12. **FAQ** — 2-column grid of 8 Q&A items (4 per column). Heading + paragraph for each.
13. **About Features** — split: left image with circle decoration, right side with 2 feature items: "Bank Loan" + "Banking Consultation" each with icon, heading, paragraph, "Learn More" link.
14. **Our Blog** — 3-column grid of blog cards. Each: featured image, title, meta (author, date, category), excerpt, "Continue Reading..." link.
15. **Contact Us** — 3-column contact info (address, phone, email with orange icons). Full-width contact form: First Name, Last Name, Email, Subject, Message, "Send Message" button. Form on white background.
16. **Footer** — dark (#343a40) background. 3-column row: About Us paragraph, Quick Links list, Follow Us social icons. Subscribe newsletter: email input + Send button. Copyright bar with attribution.

## Gherkin Requirements

```gherkin
Feature: Teller banking template

  Background:
    Given the app is served at "teller.free.componentdock.com"
    And the page loads with Tailwind 4 + React 19

  # --- Navbar ---
  Scenario: Sticky navbar displays logo and navigation
    Then the navbar shows "Teller" logo with an orange dot separator
    And navigation links include "Home", "About Us", "Blog", "Contact"
    And social icons for Facebook, Twitter, LinkedIn are visible
    And the navbar is sticky on scroll

  Scenario: About dropdown opens on hover/click
    When the user hovers or clicks "About Us"
    Then a dropdown appears with "Team", "Pricing", "FAQ", "Gallery", "Services", "Testimonials"

  # --- Hero ---
  Scenario: Hero carousel cycles through slides
    Given the hero section is visible
    Then a headline "Banking Solutions" appears with a description paragraph
    And after a delay the headline changes to "Financing Solutions"
    And the hero fills the full viewport height

  Scenario: Hero scroll indicator is clickable
    Given the hero section is visible
    Then a scroll-down mouse icon is present
    And clicking it scrolls to the next section

  # --- Features ---
  Scenario: Three feature cards are displayed
    Then 3 feature cards are shown in a row
    And each card has an icon, a title, and a short description
    And the titles are "Money Savings", "Online Shoppings", "Credit / Debit Cards"

  # --- Amortization/Intro ---
  Scenario: Amortization section shows checklist and email form
    Then a heading "Amortization Computation" is displayed
    And a green-checkmark list shows 3 items
    And an email input and "Submit Email" pill button are present

  # --- About Us ---
  Scenario: About Us section shows heading and description
    Then the heading "About Us" is displayed
    And a lead paragraph is shown
    And an image with circular background decoration is present
    And the text "We Solve Your Financial Problem" is visible with two paragraphs

  # --- Team ---
  Scenario: Team grid shows 8 members
    Then the heading "Meet Team" is displayed
    And 8 team member cards are shown
    And each card shows a photo, name, and position
    And hovering reveals social media icon links

  # --- Gallery ---
  Scenario: Gallery displays filterable images
    Then the heading "Gallery" is displayed
    And filter buttons "All", "Events", "Party", "Holidays" are shown
    And at least 8 gallery images are displayed in a grid
    And clicking a filter button shows only matching images

  # --- How It Works ---
  Scenario: How It Works shows 3-step carousel
    Then the heading "How It Works" is displayed
    And a left image carousel and right text carousel are synced
    And the 3 steps are "Online Applications", "Get an approval", "Card delivery"
    And each step has a paragraph and "Learn More" button

  # --- Services ---
  Scenario: Six service cards are shown on light background
    Then the heading "Our Services" is displayed
    And the section has a light gray background
    And 6 service cards are shown in a 3-column grid
    And each has an icon, title, description, and "Learn More" link

  # --- Testimonials ---
  Scenario: Testimonial carousel shows customer quotes
    Then the heading "Happy Customers" is displayed
    And 4 testimonial slides are available
    And each shows a blockquote, circular customer photo, and name

  # --- Pricing ---
  Scenario: Three pricing tiers are displayed
    Then the heading "Pricing" is displayed
    And the section has a light gray background
    And "Basic" is priced at "$47 / year" with 2 active + 3 disabled features
    And "Premium" is priced at "$200 / year" with 4 active + 1 disabled features and an elevated shadow
    And "Professional" is priced at "$750 / year" with 5 active features
    And each tier has a "Buy Now" button

  # --- FAQ ---
  Scenario: FAQ section shows 8 questions in 2 columns
    Then the heading "Frequently Ask Questions" is displayed
    And 8 FAQ items are shown in a 2-column layout
    And each has a bold heading and answer paragraph

  # --- About Features ---
  Scenario: About features shows image and two feature items
    Then an image with circular background is displayed
    And "Bank Loan" and "Banking Consultation" features are shown
    And each has an icon, heading, paragraph, and "Learn More" link

  # --- Blog ---
  Scenario: Blog section shows 3 post cards
    Then the heading "Our Blog" is displayed
    And 3 blog cards are shown in a 3-column grid
    And each has a featured image, title, author/date/category meta, excerpt, and "Continue Reading..." link

  # --- Contact ---
  Scenario: Contact form and info are displayed
    Then the heading "Contact Us" is displayed
    And 3 contact info items (address, phone, email) with orange icons are shown
    And a form with fields: First Name, Last Name, Email, Subject, Message is displayed
    And a "Send Message" orange pill button submits the form
    And the form has a white background

  # --- Footer ---
  Scenario: Footer has 3-column layout with newsletter
    Then the footer has a dark gray background (#343a40)
    And "About Us" paragraph, "Quick Links" list, and "Follow Us" social icons are shown
    And a newsletter subscribe section with email input and "Send" button is present
    And a copyright line with "Made with Component Dock" link to componentdock.com is shown

  # --- Accessibility ---
  Scenario: Semantic HTML and ARIA labels
    Then the page uses semantic elements: <header>, <nav>, <main>, <section>, <footer>
    And form inputs have associated <label> elements
    And interactive elements are keyboard-accessible
```

## Verification Checklist

- [ ] All 16 sections present in correct order matching the original
- [ ] Design tokens match: #fd7e14 orange brand, Open Sans font, pill-shaped buttons/inputs
- [ ] Hero is full-viewport with background image and text carousel
- [ ] Gallery filter works (All / Events / Party / Holidays)
- [ ] Team section shows 8 members with hover social icons
- [ ] Pricing shows 3 tiers with correct prices and feature lists (active + strikethrough)
- [ ] Testimonial carousel cycles through 4 customers
- [ ] Contact form has all 5 fields + submit button
- [ ] Footer links to componentdock.com, NOT colorlib.com
- [ ] No references to ColorLib in app code (provenance only in spec)
- [ ] Placeholder images use `https://picsum.photos/seed/teller-<n>/<w>/<h>`
- [ ] Google Fonts loaded via `<link>` in index.html (Open Sans, weights 300/400/700)
- [ ] Icons from lucide-react (wallet, cart, credit-card, etc.)
- [ ] `@theme` CSS variables define brand color
- [ ] Responsive: navbar collapses to hamburger, grid stacks on mobile
- [ ] `public/CNAME` contains `teller.free.componentdock.com`
- [ ] `package.json` homepage is `https://teller.free.componentdock.com`
