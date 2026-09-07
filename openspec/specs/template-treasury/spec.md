# Template: Treasury (Finance / Banking)

## Purpose

Treasury is a single-page finance/banking website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Banker" free template (source:
https://colorlib.com/wp/template/banker/), built under a DIFFERENT name
(**Treasury** — a finance-themed name evoking a financial institution's
vault/reserve, per the monorepo naming mandate: never reuse the ColorLib
source name), with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

The original is a full-featured Bootstrap 4 business/banking landing page
(Open Sans font, orange `#fd7e14` primary brand, dark footer, rounded
pill buttons) with: sticky navbar, hero carousel, feature columns, about
sections, team grid, filterable gallery, how-it-works steps, services
cards, testimonial slider, pricing tiers, FAQ, blog cards, contact form,
and dark footer. Treasury recreates that entire structure 1:1 with matching
layout, tokens, typography, and content (no ColorLib assets copied; images
replaced with picsum.photos placeholders, icons with lucide-react).

> NAMING NOTE: the ColorLib source name "Banker" is FORBIDDEN as the app
> name. **Treasury** is the new, original name — single lowercase word,
> no collision with `apps/`, `openspec/specs/`, `docs/templates/` or any
> TEMPLATES.md name (verified 2026-09-07: zero hits across all namespaces).

## Design reference (replication findings)

- **Original:** ColorLib "Banker". Listed in TEMPLATES.md under
  **Finance (24)** (section header line 1743; rows at lines 905, 1745,
  2294 — `banker` appears 3 times in TEMPLATES.md across different
  category sections). Category: Business / Finance / Banking.
- **Live preview DOM — REACHABLE (verified 2026-09-07 by direct curl):**
  `https://preview.colorlib.com/theme/banker/` returns HTTP 200. Title
  tag: "Banker — Website Template by Colorlib". Stylesheets: `css/style.css`
  (main custom styles, ~500 lines), `css/bootstrap.min.css` (Bootstrap 4),
  `css/owl.carousel.min.css`, `css/owl.theme.default.min.css`,
  `css/jquery.fancybox.min.css`, `css/bootstrap-datepicker.css`,
  `css/aos.css` (scroll animations). Fonts loaded via cf-fonts @font-face
  blocks: **Open Sans** (weights 300, 400, 700) — this is the primary
  font family used throughout. Icon font: `fonts/icomoon/style.css` and
  `fonts/flaticon/font/flaticon.css` (flaticon SVG icons for features).
  Scripts: jQuery 3.3.1, Bootstrap 4, Owl Carousel, Fancybox, AOS, Isotope.
- **Screenshot** (`banker-free-template.jpg`, 1200x946 JPEG): shows a
  clean, professional banking site with a full-width hero image
  (dark overlay, white text "Banking Solutions"), orange primary color
  on buttons and accents, white content sections with subtle gray
  backgrounds alternating, dark gray footer. The overall aesthetic is
  corporate/professional with warm orange accents on a white/gray base.

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|---|---|---|
| Font family | `"Open Sans", sans-serif` | All text (headings, body, nav) |
| Font weights | 300 (light), 400 (regular), 700 (bold) | Headings 700, body 400, nav 400 |
| Primary brand | `#fd7e14` (orange) | Buttons, active nav, links, accents, check icons |
| Body text | `gray` (default) | Paragraph text |
| Heading text | `#000` (black) | h1-h6, card titles |
| Footer bg | `#343a40` (dark charcoal) | Site footer background |
| Footer text | `rgba(255,255,255,0.7)` | Footer paragraphs, links |
| Footer headings | `#fff` | Footer section headings |
| Button radius | `30px` (pill shape) | All `.btn` elements |
| Button padding | `10px 30px` | All buttons |
| Form control radius | `30px` (pill shape) | Input fields |
| Form control height | `43px` | Input fields |
| Check success color | `#71bc42` (green) | `.ul-check.success li:before` |
| Section padding (mobile) | `2.5em 0` | `.site-section` |
| Section padding (desktop) | `8em 0` | `.site-section` @media min-width 768px |
| Navbar bg | transparent (over hero) | Absolute positioned over hero |
| Dropdown border-top | `2px solid #fd7e14` | Nav dropdown accent |
| Dropdown bg | `#fff` | Nav dropdown background |
| Services section bg | `#f8f9fa` (Bootstrap bg-light) | Alternating section |
| Pricing section bg | `#f8f9fa` (bg-light) | Pricing section |
| Contact section bg | `#f8f9fa` (bg-light) | Contact section |
| Selection bg | `#000` | Text selection highlight |
| Selection color | `#fff` | Text selection text |

## Gherkin requirements

### Feature: Treasury — Banking Website Template

#### Scenario: Navbar renders with correct logo and navigation links
  Given the page is loaded
  Then the navbar displays "Treasury." as the logo text with an orange dot accent
  And the navbar contains links: "Home", "About Us", "Blog", "Contact"
  And the navbar has social icon links (Facebook, Twitter, LinkedIn)
  And the navbar is sticky on scroll

#### Scenario: Hero section displays with background image and carousel
  Given the page is loaded
  Then the hero section shows a full-width background image with dark overlay
  And the hero contains a carousel with 3 slides: "Banking Solutions", "Financing Solutions", "Savings Accounts"
  And each slide has a subtitle paragraph below the heading
  And a scroll-down mouse indicator is visible below the hero

#### Scenario: Features section displays 3 feature cards
  Given the page is loaded
  Then 3 feature columns are displayed in a row
  And each feature has an icon, title ("Money Savings", "Online Shoppings", "Credit / Debit Cards"), and description text
  And the features are centered in their columns

#### Scenario: About/Amortization section displays with image and checklist
  Given the page is loaded
  Then the about section shows a circular-framed image on the left
  And a heading "Amortization Computation" on the right
  And a green checkmark list with 3 items
  And an email subscription form with input and "Submit Email" button

#### Scenario: About Us section displays with image and text
  Given the page is loaded
  Then the About Us section has a centered "About Us" title and lead paragraph
  And a circular-framed image on the left
  And "We Solve Your Financial Problem" heading with description paragraphs on the right

#### Scenario: Team section displays 8 team members
  Given the page is loaded
  Then the Team section shows "Meet Team" heading with lead text
  And 8 team member cards are displayed in a 4-column grid (2 rows)
  And each card has a photo, name, position, and social media overlay icons
  And the social icons appear on hover over the photo

#### Scenario: Gallery section displays with filter tabs and image grid
  Given the page is loaded
  Then the Gallery section shows "Gallery" heading
  And filter tabs are displayed: "All", "Events", "Party", "Holidays"
  And a grid of images is displayed below the filters
  And clicking a filter tab shows only images in that category
  And clicking an image opens a lightbox overlay

#### Scenario: How It Works section displays 3 steps
  Given the page is loaded
  Then the How It Works section shows "How It Works" heading
  And 3 numbered steps are displayed: "01. Online Applications", "02. Get an approval", "03. Card delivery"
  And each step has a description paragraph

#### Scenario: Services section displays 6 service cards
  Given the page is loaded
  Then the Our Services section shows "Our Services" heading on a light background
  And 6 service cards are displayed: "Business Consulting", "Credit Card", "Income Monitoring", "Insurance Consulting", "Financial Investment", "Financial Management"
  And each card has an icon, title, and description text

#### Scenario: Testimonials section displays customer quotes
  Given the page is loaded
  Then the Happy Customers section shows "Happy Customers" heading
  And 4 testimonial cards are displayed with customer quotes
  And each testimonial has a name and position label

#### Scenario: Pricing section displays 3 pricing tiers
  Given the page is loaded
  Then the Pricing section shows "Pricing" heading on a light background
  And 3 pricing tiers are displayed: "Basic" ($47/year), "Premium" ($200/year, highlighted), "Professional" ($750/year)
  And each tier has a feature checklist with green checkmarks (some items struck through)
  And each tier has a "Buy Now" button
  And the Premium tier is visually highlighted as "popular"

#### Scenario: FAQ section displays questions in two columns
  Given the page is loaded
  Then the FAQ section shows "Frequently Ask Questions" heading
  And 8 FAQ items are displayed in 2 columns (4 per column)
  And each FAQ has a question heading and answer paragraph

#### Scenario: About Features section displays with image and feature items
  Given the page is loaded
  Then a section shows a circular-framed image on the left
  And 2 feature items on the right: "Bank Loan" and "Banking Consultation"
  And each feature has an icon, title, description, and "Learn More" link

#### Scenario: Blog section displays 3 blog cards
  Given the page is loaded
  Then the Our Blog section shows "Our Blog" heading
  And 3 blog cards are displayed in a 3-column grid
  And each card has an image, title, meta info (author, date, category), description, and "Continue Reading..." link

#### Scenario: Contact section displays info and form
  Given the page is loaded
  Then the Contact Us section shows "Contact Us" heading on a light background
  And 3 contact info columns are displayed: address, phone, email with icons
  And a contact form with fields: First Name, Last Name, Email, Subject, Message
  And a "Send Message" submit button

#### Scenario: Footer displays with correct structure
  Given the page is loaded
  Then the footer has a dark background (#343a40)
  And the footer contains: "About Us" text, "Quick Links" list, "Follow Us" social icons, "Subscribe Newsletter" form
  And the footer has a copyright line with a "Component Dock" link

## Verification checklist

- [ ] Navbar renders with "Treasury." logo (orange dot accent), nav links, social icons, sticky behavior
- [ ] Hero section has full-width background image with dark overlay, carousel with 3 slides, scroll indicator
- [ ] Features section has 3 columns with icons, titles, descriptions
- [ ] About/Amortization section has circular image, heading, checklist, email form
- [ ] About Us section has centered heading, image, text content
- [ ] Team section has 8 member cards in 4-column grid with social overlays
- [ ] Gallery section has filter tabs (All/Events/Party/Holidays), image grid, lightbox on click
- [ ] How It Works has 3 numbered steps with descriptions
- [ ] Services section has 6 cards on light background with icons
- [ ] Testimonials section has 4 customer quotes
- [ ] Pricing section has 3 tiers (Basic/Premium/Professional) with feature lists and buttons, Premium highlighted
- [ ] FAQ section has 8 items in 2 columns
- [ ] About Features section has image + 2 feature items with "Learn More" links
- [ ] Blog section has 3 cards with images, titles, meta, descriptions
- [ ] Contact section has 3 info columns + contact form on light background
- [ ] Footer has dark bg, about text, quick links, social icons, newsletter form, copyright with Component Dock link
- [ ] All colors match design tokens (primary #fd7e14, footer #343a40, etc.)
- [ ] All buttons are pill-shaped (border-radius: 30px)
- [ ] Font is Open Sans throughout
- [ ] Responsive layout works (mobile hamburger menu, stacked columns)
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
