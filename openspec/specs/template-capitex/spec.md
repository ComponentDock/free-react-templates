# Template: Capitex (Finance / Loan)

## Purpose

Recreation of ColorLib "Finlone" — a finance/loan landing page.

- **Source:** https://colorlib.com/wp/template/finlone/
- **Preview:** https://preview.colorlib.com/theme/finlone/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/finlone-free-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript
- **App folder:** `apps/capitex`
- **Package:** `@free-react-templates/capitex`
- **Deploy target:** `capitex.free.componentdock.com`

## Design Tokens

Extracted from the ColorLib preview stylesheet (`assets/css/style.css`):

### Fonts
- **Headings:** `"Heebo"` (Google Fonts, weights 200–900) — used for h1–h6, nav, buttons
- **Body:** `"Open Sans"` (Google Fonts, weights 300–800) — used for paragraphs, form labels
- Import: `@import url("https://fonts.googleapis.com/css2?family=Heebo:wght@200;300;400;500;600;700;800;900&family=Open+Sans:wght@300;400;600;700;800&display=swap");`

### Colors
| Token | Value | Usage |
|---|---|---|
| Brand green (primary) | `#0BDE8C` | Buttons, accents, scroll-to-top, highlights, submit |
| Dark navy | `#204570` | Headings (h1–h6), dark text |
| Accent blue | `#0077FF` | Sticky header bg, form price label |
| Body text | `#3F4854` | Paragraphs, descriptions |
| Gray background | `#F4F6F9` | Services section, FAQ section bg |
| Button hover green | `#27CB8B` | Button hover overlay |
| Purple accent | `#A03AF9` | Section tagline text (`.section-tittle span`) |
| Input border | `#DBE2E9` | Form inputs, select borders |
| Placeholder text | `#B6BABE` | Form placeholder text |
| Scroll-to-top bg | `#0BDE8C` | Back-to-top circle button |

### Button Shapes
- `.btn`: border-radius **0px** (square corners), uppercase, Heebo font, 22px/43px padding, green bg `#0BDE8C`
- `.submit-btn2`: border-radius **0px**, uppercase, 100% width, 50px height, green bg
- `.loan-btn`: 17px/29px padding, square corners
- `.header-btn2`: semi-transparent white bg (`rgba(255,255,255,0.1)`), square corners
- All buttons use green hover transition with `scaleX` pseudo-element effect

### Section Backgrounds
- Hero: full-width background image (`hero/h1_hero1.jpg`), dark overlay implied
- About: white (default)
- Services: gray `#F4F6F9`
- Testimonials: parallax background image (`section_bg1.jpg`)
- Clients/Stats: white (default)
- How It Works: white (default)
- FAQ: gray `#F4F6F9`
- Footer: white (default)

## Section Structure (in order)

1. **Navbar** — Transparent header, sticky on scroll (blue `#0077FF` when stuck). Logo left, nav links right (Home, Loan, About, FAQ, Blog with dropdown submenu, Contact). "Apply For Loan" CTA button far right.
2. **Hero** — Full-width bg image. Split layout: left column (h1 headline, subtitle, "How it Work" green CTA button); right column (white form card: "How much you want?" title, Amount select, Month/Year select, price label, Name input, Phone input, "Continue" submit button).
3. **About** — Split: left (image + counter badge showing "99"), right (section title "Thousands of customers trust our company", description paragraphs, "Learn More" button).
4. **Services** — Gray bg. Center section title "Loan for your business & startup". 3-column card grid: Student Loan, Business Loan, Startup Loan. Each card: image, title, description, "Apply For Loan" button.
5. **Testimonials** — Parallax background image. Dot-style slider with quotes + author name.
6. **Clients/Stats** — 2×2 grid: Counter "2000+" (Loan Approval), client image, client image, Counter "99%" (Satisfied Customers).
7. **How It Works** — Center title "How it works" + subtitle. 3 columns: "01 Apply for loan", "02 Application review", "03 Get funding fast" — each with numbered icon circle + title + description.
8. **FAQ** — Gray bg. Split: left image, right accordion with 4 collapsible items.
9. **Footer** — 3 columns: logo + address + email + phone + social icons; Useful Links list; Newsletter subscribe form. Bottom bar: copyright + attribution.

## Gherkin Requirements

### Feature: Capitex — Finance/Landing Template

#### Scenario: Navbar renders correctly
Given the user loads the page
Then a transparent navbar is visible with logo on the left
And nav links are displayed: Home, Loan, About, FAQ, Blog, Contact
And an "Apply For Loan" CTA button appears on the right
When the user scrolls down
Then the navbar becomes sticky with a blue background

#### Scenario: Hero section renders
Given the user is on the landing page
Then a hero section with background image is displayed
And the left side shows an h1 headline about business loans
And a subtitle describes the loan service
And a "How it Work" green button is visible
And the right side shows a loan application form

#### Scenario: Loan form renders with fields
Given the hero form is visible
Then an Amount select dropdown is displayed
And a Month/Year duration select is displayed
And a price label shows "$0"
And a Name text input is present
And a Phone number text input is present
And a "Continue" submit button spans full width

#### Scenario: About section renders
Given the user scrolls to the About section
Then a two-column layout is displayed
And the left column shows an image with a counter badge
And the right column shows a heading about customer trust
And description paragraphs are visible
And a "Learn More" button is present

#### Scenario: Services section renders
Given the user scrolls to the Services section
Then the section has a gray background
And a centered section title reads "Loan for your business & startup"
And three service cards are displayed in a row
And each card has an image, title, description, and "Apply For Loan" button
And the three cards are: Student Loan, Business Loan, Startup Loan

#### Scenario: Testimonials section renders
Given the user scrolls to the Testimonials section
Then a parallax background image is shown
And a testimonial slider with dot navigation is visible
And at least one quote with author attribution is displayed

#### Scenario: Clients/Stats section renders
Given the user scrolls to the Clients section
Then a 2×2 grid is displayed
And a counter shows "2000+" with "Loan Approval" label
And a counter shows "99%" with "Satisfied Customers" label
And two client images fill the remaining grid slots

#### Scenario: How It Works section renders
Given the user scrolls to the How It Works section
Then a centered title "How it works" with subtitle is shown
And three numbered steps are displayed
And step 01 is "Apply for loan"
And step 02 is "Application review"
And step 03 is "Get funding fast"
And each step has a number circle, title, and description

#### Scenario: FAQ section renders
Given the user scrolls to the FAQ section
Then the section has a gray background
And a left column shows an image
And a right column shows an accordion with 4 items
And clicking an accordion header expands its content
And clicking another header collapses the previous one

#### Scenario: Footer renders
Given the user scrolls to the footer
Then the footer shows a logo, address, email, and phone number
And social media icons are displayed (Instagram, Facebook, Twitter)
And a "Useful links" column is shown
And a newsletter subscribe form with email input and "Subscribe" button is present
And a bottom bar shows copyright text with a link to Component Dock

#### Scenario: Mobile responsive layout
Given the user views the page on a mobile viewport
Then the navbar collapses into a mobile hamburger menu
And the hero form stacks below the hero text
And service cards stack vertically
And the FAQ accordion takes full width

#### Scenario: Back-to-top button
Given the user scrolls down the page
Then a circular green back-to-top button appears in the bottom-right
When the user clicks it
Then the page scrolls to the top

#### Scenario: No ColorLib references in app code
Given the app is built
Then no source files contain "colorlib.com" or "preview.colorlib.com"
And the footer links to componentdock.com instead of ColorLib

## Verification Checklist

- [ ] Navbar: transparent → sticky blue on scroll, correct nav items, CTA button
- [ ] Hero: split layout, background image, form with all fields
- [ ] About: split layout, image + counter, heading, paragraphs, button
- [ ] Services: gray bg, 3 cards, correct titles
- [ ] Testimonials: parallax bg, slider with dots, quote + author
- [ ] Clients: 2×2 grid, both counters, both images
- [ ] How It Works: 3 numbered steps with titles and descriptions
- [ ] FAQ: gray bg, split layout, 4 accordion items, expand/collapse
- [ ] Footer: 3-column layout, newsletter form, copyright with Component Dock link
- [ ] Mobile: hamburger nav, stacked layouts
- [ ] Back-to-top: circular green button, scroll behavior
- [ ] Design tokens: Heebo + Open Sans fonts, #0BDE8C green, #204570 navy, #0077FF blue, #F4F6F9 gray
- [ ] Square button corners (border-radius: 0px) matching original
- [ ] No ColorLib references in app source code
- [ ] Footer links to componentdock.com
