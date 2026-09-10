# Template: Advisera (Consulting Company)

## Purpose

Recreation of ColorLib **Cellon** — a light consulting company template.
- **Source slug:** `cellon`
- **ColorLib page:** https://colorlib.com/wp/template/cellon/
- **Live preview:** https://preview.colorlib.com/theme/cellon/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/cellon-free-ligh-consulting-company-template.jpg
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **App folder:** `apps/advisera`
- **Package:** `@free-react-templates/advisera`

## Design Tokens

Extracted from the live preview's `css/main.css` stylesheet.

| Token | Value | Usage |
|---|---|---|
| Brand green | `#6cbb23` | Primary buttons, accent text, highlights |
| Heading color | `#222` | All h1–h6 headings |
| Body text | `#777` | Paragraph text, secondary text |
| White | `#fff` | Page background, card backgrounds |
| Light gray | `#f9f9ff` | Default button border, secondary bg |
| Light blue | `#edf3fd` | Alternate section background |
| Light green | `#f0f8e9` | Alternate section background |
| Font family | `"Poppins", sans-serif` | All text (headings + body) |
| Button primary | green fill (`#6cbb23`), white text, pill shape (`border-radius: 20px`) | CTA buttons |
| Button border | transparent fill, green (`#6cbb23`) border + text | Secondary CTA |
| Section padding | `100px` top and bottom | Major content sections |
| Counter background | `#f9f9ff` light gray | Stats section |

## Visual Design Notes (from screenshot)

Minimalist consulting landing page with:
- Clean white background, generous whitespace
- Two-column hero: left = cactus image in green pot, right = bold headline with green accent word ("Cactus") + green pill CTA button
- Logo is a green battery icon, top-left; hamburger menu, top-right
- Strong green (#6cbb23) accent ties hero image, accent text, and CTA button together
- Modern geometric sans-serif (Poppins) throughout
- Flat design, no drop shadows on buttons

## Section Structure

1. **Navbar** — Logo (left), navigation links (Home, Generic, Elements), hamburger on mobile
2. **Banner/Hero** — Fullscreen split: left = hero image (col-6), right = label text + headline ("Behind Every Success / There is a Cactus") + green pill CTA button ("Get Started →")
3. **Video** — Dark overlay background with centered play button + headline "Being unique is the preference" + subtext
4. **About** — Two-column split: left = "Brief Information / About CellOn" heading + paragraph text + "View More" button (green border), right = image
5. **Features/Blog Cards** — Three-column grid of cards with blog titles and short descriptions (e.g. "3 Simple Ways To Save A Bunch Of Money")
6. **Counters** — Four stat counters in a row: Projects Completed (5962), New Projects (2394), Tickets Submitted (1439), Cup of Coffee (933)
7. **FAQ** — Accordion-style questions with answers (3 items: responsive? plugins? client use?)
8. **Contact** — Two-column: left = contact form with inputs + "Send Message" button, right = "Top Product" service list + navigation links + "Quick About" text + phone/email
9. **Footer** — Bottom bar: copyright text + social links

## Gherkin Requirements

### Scenario: Navbar displays logo and navigation
- **Given** the user visits the Advisera homepage
- **When** the page loads
- **Then** the navbar shows the logo on the left
- **And** navigation links (Home, Services, About, FAQ, Contact) are visible
- **And** the navbar is sticky on scroll

### Scenario: Hero section shows headline and CTA
- **Given** the user views the hero section
- **Then** a two-column layout is displayed
- **And** the left column shows a hero image
- **And** the right column shows a label ("FROM THE FOR USER INTERFACE")
- **And** the headline reads "Behind Every Success There is a Cactus" with accent color on key words
- **And** a green pill-shaped CTA button says "Get Started →"

### Scenario: CTA button navigates to about
- **Given** the user is in the hero section
- **When** the user clicks the "Get Started" button
- **Then** the page scrolls to the About section

### Scenario: Video section displays play button
- **Given** the user scrolls to the video section
- **Then** a dark overlay background is shown
- **And** a centered play button icon is displayed
- **And** the heading "Being unique is the preference" is shown

### Scenario: About section shows company info
- **Given** the user scrolls to the About section
- **Then** a two-column layout is displayed
- **And** the left column shows "Brief Information" label and "About CellOn" heading
- **And** a paragraph of text is displayed
- **And** a "View More" button with green border is shown
- **And** the right column shows an image

### Scenario: Feature cards section displays blog items
- **Given** the user scrolls to the features section
- **Then** three cards are displayed in a row
- **And** each card shows a title and description text
- **And** cards have a light background

### Scenario: Counter section displays statistics
- **Given** the user scrolls to the counters section
- **Then** four stat counters are displayed in a row
- **And** each counter shows a number and label
- **And** the labels are "Projects Completed", "New Projects", "Tickets Submitted", "Cup of Coffee"

### Scenario: FAQ section shows accordion questions
- **Given** the user scrolls to the FAQ section
- **Then** three questions are displayed in accordion style
- **And** clicking a question reveals its answer
- **And** only one answer is open at a time

### Scenario: Contact section has a form
- **Given** the user scrolls to the Contact section
- **Then** a form with name, email, subject, and message fields is displayed
- **And** a "Send Message" button is shown
- **And** the right side shows service links and contact info

### Scenario: Footer shows copyright and social links
- **Given** the user scrolls to the footer
- **Then** copyright text is displayed
- **And** social media icon links are shown

### Scenario: Mobile responsive layout
- **Given** the user views the page on a mobile device
- **Then** the hamburger menu icon appears in the navbar
- **And** the hero section stacks vertically
- **And** all sections are readable and properly spaced

## Verification Checklist

- [ ] Navbar: sticky, logo, nav links, hamburger on mobile
- [ ] Hero: two-column, image left, headline + CTA right, green pill button
- [ ] Video: dark overlay, play icon, headline text
- [ ] About: two-column, text + "View More" button left, image right
- [ ] Features: three blog cards in a row
- [ ] Counters: four stat items with animated numbers
- [ ] FAQ: accordion with 3 questions, expand/collapse
- [ ] Contact: form on left, info on right
- [ ] Footer: copyright + social icons, links to componentdock.com
- [ ] All design tokens: Poppins font, #6cbb23 green, #222 headings, #777 body
- [ ] No ColorLib references in app code (provenance in spec only)
- [ ] Footer links to https://www.componentdock.com/
- [ ] Tailwind @theme tokens match extracted CSS values
