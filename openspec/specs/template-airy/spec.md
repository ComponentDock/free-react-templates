# Template: Airy (Business / Agency)

## Purpose

Recreation of the ColorLib **Whitespace** template as a single-page React 19 +
Vite + Tailwind CSS 4 + TypeScript app.

- **Source:** https://colorlib.com/wp/template/whitespace/
- **Preview:** https://preview.colorlib.com/theme/whitespace/
- **New name:** `airy` (apps/airy, @free-react-templates/airy)
- **Category:** Business / Agency landing page

## Design Tokens

Extracted from the live preview stylesheet (`css/style.css`) and inline
`<style>` font-face declarations:

| Token              | Value                                     | Notes                                      |
| ------------------ | ----------------------------------------- | ------------------------------------------ |
| Font (body)        | `"Work Sans", sans-serif`                 | CSS `--font-family-sans-serif`             |
| Font (loaded)      | `Poppins` (300–900, all weights loaded)  | @font-face in HTML head                    |
| Primary brand      | `#78d5ef`                                 | Light sky-cyan; used for links, btn-primary|
| Hover accent       | `#34c0e7`                                 | Darker cyan on link hover                  |
| Body text          | `#212529`                                 | Near-black                                 |
| Body bg            | `#ffffff`                                 | White                                      |
| Section alt bg     | `#f8f9fa` (Tailwind `bg-light`)           | Light gray; pricing section                |
| Footer bg          | `#343a40` (Tailwind `bg-dark`)            | Dark charcoal                              |
| Button radius      | Rounded / pill on `.btn-custom`           | `border-radius: 30px` approx               |
| Button primary     | `#78d5ef` bg, white text                  | `.btn-primary`                             |
| Button outline     | `#78d5ef` border, transparent bg          | `.btn-outline-primary`                     |
| Counter parallax   | bg image (`bg_3.jpg`)                     | Parallax background                        |
| Navbar             | Dark bg, `.navbar-dark`                   | Transparent-to-dark on scroll              |

**Font decision for React build:** Use **Poppins** via Google Fonts link
(the most prominent loaded font; Work Sans is the Bootstrap override that
the original uses but Poppins is the visual typeface). Load weights
300, 400, 500, 600, 700.

## Section Order (from live preview DOM)

1. **Navbar** — dark, fixed, brand "Airy" (← renamed from "Whitespace"),
   links: Home, About, Work, Pricing, Blog, Contact
2. **Hero** — split layout: left ~60% text area (subheading "Welcome",
   headline "We Help to Build You the Product", sub-headline
   "Business Solution", CTA button "Get in touch"), right ~40% hero image
   (parallax-style background image)
3. **About / What We Do** — split: left image (about.jpg), right content
   with subheading "Providing", heading "What We Can Do for You", and
   4 inline service items (Market Research, Financial Services, Online
   Marketing, 24/7 Support) each with icon + title + description
4. **Services Grid** — 4-column equal grid, centered icons, titles:
   Business Strategy, Data Analysis, Graphic Design, Creative
5. **Counter / Stats** — full-width parallax bg image, "Interesting Facts"
   heading, 4 animated counters: 2000 Done Works, 300 Happy Customers,
   100 Coffee, 1000 Work Hours
6. **Projects** — "Recents Projects" heading, mixed 2-col layout:
   top row = 1 small + 1 large, bottom row = 1 large (2 stacked) + 1 small
   (2 stacked) = 6 project cards total. Each has bg image, overlay,
   arrow button, title + category
7. **Testimonials** — carousel with 5 items, each: circular user image,
   quote icon, text, name + position. Heading: "My satisfied customer says"
8. **Case Study / Blog** — 3 blog cards, each: bg image header, date,
   author, comment count, title
9. **Pricing** — light bg, 4 pricing cards: Free ($0), Startup ($19),
   Premium ($49), Pro ($99). Each: plan name, price, excerpt, "Get
   Started" button, features list
10. **Partners** — 5 partner logos in a horizontal row (placeholder)
11. **Footer** — dark bg, 4 columns: brand + social icons, Useful Links,
    Quick Links, Have a Questions? (address, phone, email). Copyright line.

## Gherkin Requirements

### Feature: Airy — Business Agency Landing Page

```gherkin
Background:
  Given the Airy app is running
  And the viewport is 1280x720 (desktop)

# --- Navbar ---
Scenario: Navbar displays brand and navigation links
  Then I see brand text "Airy"
  And I see navigation links: Home, About, Work, Pricing, Blog, Contact
  And the navbar has a dark background

Scenario: Navbar is responsive
  When the viewport is 375px wide
  Then the navbar shows a hamburger menu toggle
  And the nav links are hidden

# --- Hero ---
Scenario: Hero section renders the main headline
  Then I see the subheading "Welcome"
  And I see the headline "We Help to Build You the Product"
  And I see a CTA button labeled "Get in touch"

Scenario: Hero section is a split layout
  Then the hero has a text area on the left
  And the hero has a background image area on the right

# --- About ---
Scenario: About section shows service descriptions
  Then I see the heading "What We Can Do for You"
  And I see 4 service items: Market Research, Financial Services,
    Online Marketing, 24/7 Support
  And each service has an icon and description

Scenario: About section has split layout
  Then the about section has an image on one side
  And the about section has text content on the other side

# --- Services Grid ---
Scenario: Services grid shows 4 service cards
  Then I see 4 service cards in a row
  And the cards are: Business Strategy, Data Analysis,
    Graphic Design, Creative
  And each card has an icon and short description

# --- Counter ---
Scenario: Counter section shows statistics
  Then I see the heading "Interesting Facts"
  And I see 4 stat counters with numbers
  And the counter section has a parallax background image

# --- Projects ---
Scenario: Projects section shows recent work
  Then I see the heading "Recents Projects"
  And I see 6 project cards in a mixed grid layout
  And each project card has an overlay with title and category

# --- Testimonials ---
Scenario: Testimonials carousel shows customer quotes
  Then I see the heading "My satisfied customer says"
  And the carousel shows testimonial cards
  And each card has a user image, quote text, name, and position

# --- Blog / Case Study ---
Scenario: Blog section shows case studies
  Then I see the heading "Case Study"
  And I see 3 blog cards
  And each card has a background image, date, author, and title

# --- Pricing ---
Scenario: Pricing section shows plan options
  Then I see 4 pricing plans: Free, Startup, Premium, Pro
  And the prices are $0, $19, $49, $99
  And each plan has a "Get Started" button
  And each plan lists included features

# --- Partners ---
Scenario: Partners section shows logos
  Then I see 5 partner logo placeholders in a row

# --- Footer ---
Scenario: Footer shows brand info and links
  Then I see the brand name "Airy"
  And I see social media icons
  And I see "Useful Links" and "Quick Links" columns
  And I see contact info: address, phone, email
  And the footer links to https://www.componentdock.com/

Scenario: Footer has dark background
  Then the footer has a dark background color
```

## Verification Checklist

- [ ] All 11 sections present in correct order
- [ ] Design tokens match: Poppins font, #78d5ef primary, dark footer
- [ ] Hero split layout: text left, image right
- [ ] About split layout: image + services list
- [ ] 4-column services grid with icons
- [ ] Parallax counter with 4 stats
- [ ] Projects grid: 6 cards mixed layout with overlays
- [ ] Testimonial carousel (5 items)
- [ ] 3 blog/case study cards
- [ ] 4 pricing cards with correct prices
- [ ] 5 partner logos placeholder row
- [ ] Footer: 4 columns, dark bg, social icons, contact info
- [ ] Navbar: dark bg, responsive hamburger on mobile
- [ ] No references to ColorLib in app code
- [ ] Footer links to componentdock.com
