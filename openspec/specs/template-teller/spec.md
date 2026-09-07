# Template: Teller (Banking & Finance)

## Purpose

Teller is a single-page banking-and-finance website template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Banker" free template (source:
https://colorlib.com/wp/template/banker/), built under a DIFFERENT name
(**Teller** — a bank teller, the front-line banking professional who handles
transactions; never reuse the ColorLib source name "Banker" — per the
monorepo naming mandate), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a full-length banking services landing page (Bootstrap 4.x +
jQuery): a sticky navbar, full-width hero carousel, feature highlights,
amortization section, about-us section, team carousel, gallery, how-it-works
steps, services grid, testimonials carousel, pricing cards, FAQ, blog cards,
contact form, and a footer with newsletter subscription. The template uses an
orange (#fd7e14) brand accent, Open Sans typography, circular image masks,
and AOS scroll animations.

> NAMING NOTE: the ColorLib source name "Banker" is FORBIDDEN as the app
> name. **Teller** is the new, original name — single lowercase word, no
> collision with `apps/`, `openspec/specs/`, `docs/templates/` or any
> TEMPLATES.md name (verified 2026-09-07). Source slug + preview URL are
> recorded below.

## Design reference (replication findings)

- **Original:** ColorLib "Banker". Listed in TEMPLATES.md under
  **Banker** (row at line 905). Free banking/finance website template.
  The `banker` slug appears exactly ONCE in TEMPLATES.md.
- **Live preview DOM — REACHABLE (verified 2026-09-07 by direct fetch):**
  `https://preview.colorlib.com/theme/banker/` returns HTTP 200 (65,213
  bytes). Stylesheets: `css/bootstrap.min.css`, `css/style.css` (29,450
  bytes — the main custom stylesheet), `css/owl.carousel.min.css`,
  `css/owl.theme.default.min.css`, `css/aos.css`, `css/jquery-ui.css`,
  `css/jquery.fancybox.min.css`, `css/bootstrap-datepicker.css`. Scripts:
  `js/jquery-3.3.1.min.js`, `js/bootstrap.min.js`, `js/owl.carousel.min.js`,
  `js/aos.js`, `js/main.js`, plus jQuery UI, Popper, Fancybox, countdown,
  easing, sticky, isotope.
- **Screenshot:** `https://colorlib.com/wp/wp-content/uploads/sites/2/banker-free-template.jpg`
  (AVIF format in TEMPLATES.md; visual description: orange-accented banking
  landing page with dark hero overlay, white content sections, circular
  image masks, 3-column service cards, pricing table, and contact form).

## Design tokens (from live CSS, fetched 2026-09-07)

| Token | Value | Where |
|---|---|---|
| Primary brand color | `#fd7e14` (orange) | buttons (`.btn-primary`), text accents (`.text-primary`), links, carousel dots |
| Page background (light sections) | `#f8f9fa` (Bootstrap light gray) | `.bg-light` sections (pricing, services, contact) |
| Page background (dark sections) | `#fff` (white) | default `.site-section` background |
| Dark background | `#343a40` (Bootstrap dark) | footer background |
| Body text | `#212529` / `#343a40` (near-black) | body, paragraphs |
| Heading text | `#000` (black) | `.section-title`, card headings |
| White text | `#fff` | hero overlay text, footer text, dark bg sections |
| Muted text | `#b3b3b3` / `#cccccc` | meta text, secondary copy |
| Green accent | `#71bc42` | pricing checkmarks (`.ul-check.success li::before`) |
| Font family | `"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif` | body, headings |
| Button radius | `30px` (rounded-pill) | `.btn-primary`, `.btn-secondary` |
| Image mask | `border-radius: 50%` | `.circle-bg` figure images (about sections) |
| Card radius | `4px` | form inputs, pricing cards |
| Section padding | `~4rem` vertical (Bootstrap `site-section` class) | all `site-section` blocks |
| Hero overlay | dark semi-transparent overlay on background image | `.site-blocks-cover.overlay` |
| AOS animations | `fade-up` with staggered delays (0, 100, 200ms) | all scroll-animated elements |

## Section order (1:1 with original)

1. **Navbar** — Sticky header (`site-navbar js-sticky-header`), logo
   "Banker." (h2, orange period via `.text-primary`), nav links (Home,
   About, Services, Blog, Contact) + social icons (Facebook, Twitter,
   LinkedIn). Right-aligned text navigation.

2. **Hero** — Full-width background image with dark overlay
   (`site-blocks-cover overlay`), centered content. Owl Carousel of 3
   slides: "Banking Solutions", "Financing Solutions", "Savings Accounts"
   — each with subtitle paragraph + optional CTA button. Mouse scroll
   indicator at bottom (`a.mouse.smoothscroll`).

3. **Feature Highlights** — 3-column grid, each with SVG icon (25% width),
   card-title heading, and description paragraph. Items: Money Savings,
   Online Shoppings, Credit / Debit Cards. Followed by a split layout:
   left circular-masked image (`circle-bg`), right content with heading
   "Amortization Computation", checklist (`ul-check success`), and email
   subscription form (input + submit button).

4. **About Us (Big Image)** — Split layout with centered section title
   "About Us" + lead paragraph above. Left: circular-masked image
   (`circle-bg`). Right: heading "We Solve Your Financial Problem" +
   two paragraphs.

5. **Meet Team** — Centered section title "Meet Team" + lead paragraph.
   Owl Carousel of team member cards, each with square photo, name (h3),
   and role. 8 team members in total (Kaiara Spencer, Dave Simpson, Ben
   Thompson, Kyla Stewart, Kaiara Spencer, Dave Simpson, Ben Thompson,
   Chris Stewart).

6. **Gallery** — Centered section title "Gallery". Grid of images
   (Isotope/masonry layout with fancybox lightbox). Multiple images in a
   responsive grid.

7. **How It Works** — Centered section title "How It Works" + lead
   paragraph. Split layout: left Owl Carousel of 3 images with prev/next
   arrows. Right: Owl Carousel of 3 step descriptions: "01. Online
   Applications", "02. Get an approval", "03. Card delivery" — each with
   heading, paragraph, and "Learn More" button.

8. **Our Services** — Light bg section. Centered title "Our Services".
   3×2 grid of service cards, each with SVG icon image, heading, description,
   and "Learn More" link. Items: Business Consulting, Credit Card, Income
   Monitoring, Insurance Consulting, Financial Investment, Financial
   Management.

9. **Testimonials** — Centered title "Happy Customers". Owl Carousel of
   testimonial slides, each with blockquote (large quote text), circular
   author photo, and author name. 4 testimonials (John Smith, Christine
   Aguilar, Robert Spears, Bruce Rogers).

10. **Pricing** — Light bg section. Centered title "Pricing". 3-column
    pricing cards: Basic ($47/yr, 2 features), Premium ($200/yr, popular
    highlighted card with `.pricing-popular`, 4 features), Professional
    ($750/yr, 5 features). Each with "Buy Now" button. Features use
    `.ul-check.success` (green checkmarks) with `.remove` class for
    excluded features.

11. **FAQ** — Centered title "Frequently Ask Questions". Two-column layout
    with 4 FAQ items per column (8 total). Each: h4 question + paragraph
    answer. Questions: "Can I accept both Paypal and Stripe?", "What
    available is refund period?", "Where are you from?", "What is your
    opening time?"

12. **About Us (Services)** — Split layout. Left: circular-masked image.
    Right: two feature items with icons: "Bank Loan" and "Banking
    Consultation" — each with icon, heading, description, and "Learn More"
    link.

13. **Our Blog** — Centered title "Our Blog". 3-column blog cards, each
    with featured image, article title (h2), meta line (author · date ·
    category), excerpt paragraph, and "Continue Reading..." link.

14. **Contact Us** — Light bg section. Centered title "Contact Us". Three
    info columns: address (room icon), phone (phone icon), email (mail
    icon) — all with orange `.text-primary` icons. Below: full-width contact
    form (First Name, Last Name, Email, Subject, Message textarea,
    "Send Message" button).

15. **Footer** — Dark bg (`site-footer`). Three-column layout: About Us
    text (col-5), Quick Links list (col-3), Follow Us social icons
    (col-3). Right column: Subscribe Newsletter form (email input + "Send"
    button). Bottom: copyright line with Component Dock link.

## Gherkin requirements

### Feature: Teller — Banking & Finance Template

#### Scenario: Navbar renders with logo and navigation links
- GIVEN the user loads the Teller page
- THEN the navbar is visible and sticky on scroll
- AND the logo text reads "Teller." with an orange-accented period
- AND navigation links are present: Home, About, Services, Blog, Contact
- AND social icon links are present (Facebook, Twitter, LinkedIn)

#### Scenario: Hero displays carousel with banking headlines
- GIVEN the user views the hero section
- THEN a full-width background image with dark overlay is visible
- AND the first slide shows "Banking Solutions" heading
- AND a subtitle paragraph is displayed below the heading
- AND the carousel auto-advances to "Financing Solutions" and "Savings Accounts"
- AND a mouse scroll indicator is visible at the bottom

#### Scenario: Feature highlights show three banking services
- GIVEN the user scrolls to the feature highlights section
- THEN three feature cards are visible in a row
- AND each card has an icon, heading (Money Savings / Online Shoppings / Credit-Debit Cards), and description

#### Scenario: Amortization section shows split layout with form
- GIVEN the user scrolls past the feature highlights
- THEN a circular-masked image appears on the left
- AND "Amortization Computation" heading appears on the right
- AND a checklist with green checkmarks is displayed
- AND an email subscription form with input and submit button is present

#### Scenario: About Us section displays with circular image
- GIVEN the user scrolls to the About Us section
- THEN the centered heading "About Us" is visible
- AND a lead paragraph is displayed
- AND a circular-masked image appears on the left
- AND "We Solve Your Financial Problem" heading and description appear on the right

#### Scenario: Team section shows member carousel
- GIVEN the user scrolls to the team section
- THEN "Meet Team" heading is visible
- AND a carousel of team member cards is displayed
- AND each card shows a photo and member name

#### Scenario: Gallery section displays image grid
- GIVEN the user scrolls to the gallery section
- THEN "Gallery" heading is visible
- AND a responsive grid of images is displayed

#### Scenario: How It Works shows step-by-step process
- GIVEN the user scrolls to the How It Works section
- THEN "How It Works" heading is visible
- AND an image carousel with prev/next navigation appears on the left
- AND three numbered steps appear on the right: "01. Online Applications", "02. Get an approval", "03. Card delivery"
- AND each step has a "Learn More" button

#### Scenario: Services section shows six service cards
- GIVEN the user scrolls to the Services section
- THEN "Our Services" heading is visible on a light background
- AND six service cards are displayed in a 3×2 grid
- AND each card has an icon, heading, description, and "Learn More" link

#### Scenario: Testimonials carousel displays customer quotes
- GIVEN the user scrolls to the testimonials section
- THEN "Happy Customers" heading is visible
- AND a carousel of testimonials is displayed
- AND each testimonial has a blockquote, author photo, and author name

#### Scenario: Pricing section shows three plan tiers
- GIVEN the user scrolls to the pricing section
- THEN "Pricing" heading is visible on a light background
- AND three pricing cards are displayed: Basic ($47), Premium ($200), Professional ($750)
- AND the Premium card is visually highlighted as popular
- AND each card has a feature list with green checkmarks and a "Buy Now" button

#### Scenario: FAQ section displays questions in two columns
- GIVEN the user scrolls to the FAQ section
- THEN "Frequently Ask Questions" heading is visible
- AND eight FAQ items are displayed in two columns
- AND each item has a question heading and answer paragraph

#### Scenario: Blog section shows three article cards
- GIVEN the user scrolls to the blog section
- THEN "Our Blog" heading is visible
- AND three blog cards are displayed in a row
- AND each card has a featured image, title, meta info, excerpt, and "Continue Reading..." link

#### Scenario: Contact section shows info and form
- GIVEN the user scrolls to the contact section
- THEN "Contact Us" heading is visible on a light background
- AND three contact info items are displayed (address, phone, email) with orange icons
- AND a contact form with fields (First Name, Last Name, Email, Subject, Message) and "Send Message" button is present

#### Scenario: Footer displays links and newsletter
- GIVEN the user views the footer
- THEN the footer has a dark background
- AND "About Us" text, "Quick Links" list, and "Follow Us" social icons are displayed
- AND a "Subscribe Newsletter" form with email input and "Send" button is present
- AND a copyright line with Component Dock link is visible

#### Scenario: All sections use consistent design tokens
- GIVEN the user views any section
- THEN the primary orange color (#fd7e14) is used for buttons and accents
- AND Open Sans font family is used throughout
- AND rounded-pill button shapes (border-radius: 30px) are used for CTAs
- AND circular image masks (border-radius: 50%) are used for portraits
- AND AOS fade-up animations trigger on scroll

## Verification checklist

- [ ] Navbar is sticky and shows on scroll
- [ ] Hero carousel auto-advances between 3 slides
- [ ] Mouse scroll indicator links to next section
- [ ] Feature highlights render as 3-column grid
- [ ] Amortization section has split layout with form
- [ ] About Us section has circular-masked image
- [ ] Team carousel shows all members
- [ ] Gallery grid is responsive
- [ ] How It Works steps are numbered and have buttons
- [ ] Services section shows 6 cards on light bg
- [ ] Testimonials carousel shows quotes with photos
- [ ] Pricing cards show correct prices and popular highlight
- [ ] FAQ items are in two columns
- [ ] Blog cards show image, title, meta, excerpt
- [ ] Contact form has all fields and info columns
- [ ] Footer has dark bg, links, newsletter form, copyright
- [ ] Component Dock link in footer
- [ ] No ColorLib references in app code
- [ ] All images use picsum.photos placeholders
- [ ] Open Sans loaded via Google Fonts in index.html
- [ ] Tailwind theme tokens match design tokens above
- [ ] 100% test coverage (lines, functions, branches, statements)
