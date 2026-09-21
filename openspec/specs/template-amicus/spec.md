# Template: Amicus (Legal / Law Firm)

## Purpose

Amicus is a law firm / legal services website template in the
free-react-templates monorepo. It is a React recreation of the ColorLib
"Law Firm" free template (source:
https://colorlib.com/wp/template/lawfirm/; preview:
https://preview.colorlib.com/theme/lawfirm/), built under a DIFFERENT name
(**Amicus** — from Latin "amicus curiae", friend of the court, per the
monorepo naming mandate: never reuse the ColorLib source name), with the
monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The original is a full-featured Bootstrap 4 law firm landing page (Roboto
font, blue `#007bff` primary brand, dark navbar/footer, dark intro boxes)
with: top contact bar, sticky dark navbar, full-width hero with video play
button, 4 intro stat boxes, counter stats row, 6 practice area cards with
rotating icon animation, 8 case study image cards, testimonial slider with
background image, appointment/consultation section with background image and
form, 3 blog cards, and a dark footer. Amicus recreates that entire structure
1:1 with matching layout, tokens, typography, and content (no ColorLib
assets copied; images replaced with picsum.photos placeholders, icons with
lucide-react).

> NAMING NOTE: the ColorLib source name "Law Firm" is FORBIDDEN as the app
> name. **Amicus** is the new, original name — single lowercase word,
> no collision with `apps/`, `openspec/specs/`, `docs/templates/` or any
> TEMPLATES.md name (verified 2026-09-21: zero hits across all namespaces).

## Design reference (replication findings)

- **Original:** ColorLib "Law Firm". Listed in TEMPLATES.md under
  **Law Firm (12)** (section header ~line 1759; first `- [ ]` item at
  line 1760). Category: Legal / Law Firm.
- **Live preview DOM — REACHABLE (verified 2026-09-21 by direct curl):**
  `https://preview.colorlib.com/theme/lawfirm/` returns HTTP 200. Title
  tag: "Law Firm - Free Bootstrap 4 Template by Colorlib". Stylesheets:
  `css/style.css` (main custom styles, ~78KB), `css/animate.css` (scroll
  animations), `css/owl.carousel.min.css`, `css/owl.theme.default.min.css`,
  `css/magnific-popup.css` (lightbox), `css/flaticon.css` (icons).
  Fonts loaded via cf-fonts @font-face blocks: **Roboto** (weights 300, 400,
  500, 700) — this is the primary font family used throughout. Icons:
  Font Awesome 4.7.0 (CDN), flaticon icon font. Scripts: jQuery, Bootstrap 4,
  Owl Carousel, Magnific Popup, Waypoints, Stellar.js, animateNumber.
- **Screenshot** (`lawfirm-free-fullscreen-lawyer-website-template.jpg`):
  Professional law firm site with full-width hero (dark overlay, white text
  "Don't Feel Helpless We Fight for Justice"), dark intro boxes below hero,
  white content sections, dark footer. Overall aesthetic is corporate/legal
  with blue primary accents on a dark + white base.

## Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|---|---|---|
| Font family | `"Roboto", Arial, sans-serif` | All text (headings, body, nav) |
| Font weights | 300 (light), 400 (regular), 500 (medium), 700 (bold) | Headings 600-700, body 400, nav 500 |
| Primary brand | `#007bff` (blue) | Buttons, active nav, links, accents |
| Accent/loader | `#F96D00` (orange) | Loader spinner stroke, accent highlights |
| Navbar bg | `#1d2227` (dark) | Default navbar background |
| Navbar scrolled | `#000000` (black) | Navbar on scroll |
| Intro box default | `#1d2227` (dark) | First intro box background |
| Intro box color-1 | `#161a1e` | Second intro box background |
| Intro box color-2 | `#121518` | Third intro box background |
| Intro box color-3 | `#0e1013` | Fourth intro box background |
| Footer bg | `#121518` (very dark) | Site footer background |
| Footer bottom | `#000000` (black) | Footer copyright bar |
| Footer text | `rgba(255,255,255,0.7)` | Footer links, paragraphs |
| Footer headings | `#fff` | Footer section headings |
| Button radius | `0.25rem` (4px) | All `.btn` elements (Bootstrap default) |
| Button padding | `py-3 px-4` | Hero/CTA buttons (Bootstrap utility classes) |
| Body text | `#212529` (Bootstrap default) | Paragraph text |
| Heading text | `#212529` | h1-h6 |
| Subheading | `18px inline-block` | Section subtitle labels |
| Section heading | `40px font-weight: 600` | h2 in heading-section |
| Section bg (light) | `#f8f9fa` (Bootstrap bg-light) | About section inner box |
| Selection bg | `#000` | Text selection highlight |
| Selection color | `#fff` | Text selection text |
| Hero height | `600px` | Hero section fixed height |
| Hero overlay | semi-transparent dark | Image overlay for text legibility |
| Testimonial bg | background image with dark overlay | Parallax-style background |

## Gherkin requirements

### Feature: Amicus — Law Firm Website Template

#### Scenario: Top bar renders with contact info and social links
  Given the page is loaded
  Then a top bar displays phone number "+00 1234 567" and email "youremail@email.com"
  And social media icons are displayed on the right (Facebook, Twitter, Instagram, Dribbble)

#### Scenario: Navbar renders with correct logo and navigation links
  Given the page is loaded
  Then the navbar displays "Amicus" as the logo text
  And the navbar contains links: "Home", "About", "Practice Areas", "Cases", "Attorneys", "Blog", "Contact"
  And the navbar has a mobile hamburger menu toggle
  And the navbar starts dark (#1d2227) and darkens on scroll

#### Scenario: Hero section displays with background image and content
  Given the page is loaded
  Then the hero section shows a full-width background image with dark overlay
  And the hero contains heading "Don't Feel Helpless We Fight for Justice"
  And the hero contains a subtitle paragraph
  And two buttons are displayed: "Contact us" (primary blue) and "Read more" (white outline)
  And a video play button icon is displayed on the right side

#### Scenario: Intro boxes section displays 4 dark info boxes
  Given the page is loaded
  Then 4 dark intro boxes are displayed in a full-width row
  And each box has an icon, title ("Expert Attorneys", "Case Dismissed", "Court Performance", "Court Performance"), and description
  And the boxes have progressively darker backgrounds (#1d2227, #161a1e, #121518, #0e1013)

#### Scenario: Counter stats section displays 4 statistics
  Given the page is loaded
  Then 4 counter items are displayed in a row
  And each counter shows an icon, a number (3000, 1000, 2000, 10540), and a label ("Trusted Clients", "Honor's & Awards", "Expert Lawyers", "Successful Cases")
  And the numbers animate counting up on scroll

#### Scenario: About section displays with image and services
  Given the page is loaded
  Then a split section shows a background image on the left
  And a light background panel on the right with "Welcome to Amicus" subheading
  And "Why to Put Trust Your Trust In Amicus" heading
  And 4 service items: "Expert Attorneys", "Great Discount", "Legal Advisory", "Quick Charges"
  And each service has an icon and description

#### Scenario: Practice Areas section displays 6 area cards
  Given the page is loaded
  Then the Practice Areas section shows "Practice Area" subheading and "What We Cover" heading
  And 6 practice area cards are displayed in a 3-column grid
  And each card has a rotating icon animation on hover, a title, and description
  And the practice areas are: "Business Law", "Family Law", "Criminal Law", "Real Estate Law", "Personal Injury", "Judicial Law"

#### Scenario: Case Studies section displays 8 case cards
  Given the page is loaded
  Then the Cases section shows "Cases" subheading and "Recent Case Studies" heading
  And 8 case study cards are displayed in a mixed-width grid (3-6-3 columns per row)
  And each card has a background image with title overlay ("Business Law", "Criminal Offense", "Dispute Resolution", etc.)

#### Scenario: Testimonials section displays with background image
  Given the page is loaded
  Then the Testimonial section has a background image with dark overlay
  And the heading "Happy Clients" is displayed in white
  And a carousel of testimonial cards is displayed
  And each testimonial has a quote icon, quote text, customer photo, name, and position

#### Scenario: Appointment/CTA section displays with form and features
  Given the page is loaded
  Then the appointment section has a background image with dark overlay
  And "We Have Great Results" heading is displayed on the left
  And 3 feature items are listed: "Award Winning", "60 Years of Experience", "Best Attorneys team"
  And a "Free Case Consultation" form is displayed on the right
  And the form has fields: Your Name, Email, Practice Areas (dropdown), Message
  And a "Send message" submit button is displayed

#### Scenario: Blog section displays 3 blog cards
  Given the page is loaded
  Then the Blog section shows "Blog" subheading and "Recent Blog" heading
  And 3 blog cards are displayed in a 3-column grid
  And each card has a background image with date overlay (day/month/year), title, and description

#### Scenario: Footer displays with correct structure
  Given the page is loaded
  Then the footer has a dark background (#121518)
  And the footer contains 5 widget columns: Logo + social links, Explore links, Legal links, Company links, Contact info
  And social media icons are displayed (Twitter, Facebook, Instagram)
  And contact info shows address, phone, and email with icons
  And a dark bottom bar (#000000) has a copyright line with a "Component Dock" link

## Verification checklist

- [ ] Top bar renders with phone number and email on left, social icons on right
- [ ] Navbar renders with "Amicus" logo, nav links, mobile hamburger, dark bg that darkens on scroll
- [ ] Hero section has full-width background image with dark overlay, heading, subtitle, two buttons, video play icon
- [ ] Intro boxes section has 4 dark boxes with icons, titles, descriptions, progressively darker backgrounds
- [ ] Counter stats section has 4 items with animated count-up numbers and labels
- [ ] About section has split layout: image left, light panel right with subheading, heading, 4 service items
- [ ] Practice Areas section has 6 cards with rotating icon animation, titles, descriptions
- [ ] Case Studies section has 8 cards in mixed-width grid with background images and title overlays
- [ ] Testimonials section has background image with overlay, white heading, carousel of quote cards with photos
- [ ] Appointment section has background image with overlay, features list, consultation form with dropdown
- [ ] Blog section has 3 cards with date overlays, titles, descriptions
- [ ] Footer has dark bg (#121518), 5 widget columns, social icons, contact info, dark bottom bar with copyright and Component Dock link
- [ ] All colors match design tokens (primary #007bff, footer #121518, navbar #1d2227, etc.)
- [ ] Buttons are Bootstrap-default rounded (border-radius: 0.25rem)
- [ ] Font is Roboto throughout
- [ ] Responsive layout works (mobile hamburger menu, stacked columns)
- [ ] No ColorLib references in app code (provenance only in spec)
- [ ] Footer links to https://www.componentdock.com/
