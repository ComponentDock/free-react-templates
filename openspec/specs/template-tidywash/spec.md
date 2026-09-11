# Template: TidyWash (Cleaning Service)

## Purpose

Recreation of ColorLib's **Cleanex** cleaning service website template.

- Source slug: `cleanex`
- Source URL: https://colorlib.com/wp/template/cleanex/
- Preview URL: https://preview.colorlib.com/theme/cleanex/ (200 — live)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/cleanex-template.jpg
- Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript
- New name: **tidywash** (`apps/tidywash`, `@free-react-templates/tidywash`)
- Footer link: https://www.componentdock.com/ ("Component Dock")

## Design tokens (extracted from live preview CSS)

### Colors

| Token               | Value   | Usage                                       |
| ------------------- | ------- | ------------------------------------------- |
| brand-primary       | #225ae1 | Buttons, active nav links, highlights, CTA  |
| brand-primary-hover | #1947b7 | Hover state for brand-primary               |
| accent-yellow       | #fedd32 | Pricing badge highlights, featured elements |
| text-dark           | #161655 | Headings, navbar text                       |
| text-body           | #999999 | Body text, descriptions                     |
| text-black          | #000000 | Strong text, scrolled nav                   |
| bg-white            | #ffffff | Header, sections, cards                     |
| bg-light            | #f4f5f0 | Testimonials section background             |
| bg-dark             | #000000 | Navbar (scroll), hero overlay, footer       |
| bg-black            | #000000 | Bottom bar                                  |
| bg-subtle           | #fafafa | Alternating section backgrounds             |

### Fonts

| Role     | Family                    | Weight     |
| -------- | ------------------------- | ---------- |
| Body     | Roboto, Arial, sans-serif | 400        |
| Headings | Roboto, Arial, sans-serif | 700 (bold) |

### Button style

- Shape: rounded rectangle (Bootstrap `rounded`, ~4px radius)
- Padding: 12px 28px (primary), varies by context
- Primary: solid #225ae1 background, white text
- Hover: darken to #1947b7
- Rounded pill variants for some CTAs (50px radius)
- No shadow, flat design

### Form elements

- Inputs: white background, light border, rounded corners
- Select dropdown: same style with custom arrow icon
- Appointment form: stacked layout with icon fields
- Placeholder text: gray

### Section backgrounds

- Top bar: light gray #f8f9fa (contact info + social links)
- Navbar: transparent (scrolls to black), white on scroll
- Hero: full-width background image with dark overlay
- About: white background with appointment form
- Services/Features: white background with icon grid
- Stats/Counter: dark background image with overlay
- Industries served: white, 3-column image grid with overlay
- Flow/Process: blue (#225ae1) background
- Testimonials: light gray #f4f5f0
- Pricing: white, 4-column cards (one highlighted)
- CTA: blue (#225ae1) background
- Blog: light gray #f8f9fa
- Footer: dark with multiple columns

## Requirements

### Feature: TidyWash — Cleaning Service Website

#### Scenario: Navbar displays with logo and navigation links

Given the user is on the homepage
When they view the navbar
Then they see the "TidyWash" logo
And the navigation links: Home, About, Pricing, Services, Blog, Contact
And the navbar starts transparent and scrolls to solid black

#### Scenario: Hero section with search form

Given the user is on the homepage
When they view the hero section
Then they see a full-width background image with dark overlay
And the heading "A Clean Home is A Happy Home"
And a subtext paragraph
And a "Request A Quote" CTA button

#### Scenario: About section with appointment form

Given the user is on the homepage
When they scroll to the about section
Then they see the heading "Most Awarded Cleaning Company Since 2000"
And two paragraphs of descriptive text
And a "Book A Service" appointment form on the right
And the form has fields: First Name, Last Name, Phone, Date, Time, Service select
And the service select has options: Residential, Commercial, Construction, Windows, Carpet, Furniture, Other

#### Scenario: Features section with 4 cards

Given the user is on the homepage
When they scroll to the features section
Then they see 4 feature cards in a row:
| Feature | Description |
| Highly Trained Staff | A small river named Duden... |
| Best Equipments | A small river named Duden... |
| 100% Warranty | A small river named Duden... |
| Fast & Effective Service | A small river named Duden... |
And each card has an icon, title, and description

#### Scenario: Counter/stats section

Given the user is on the homepage
When they scroll to the counter section
Then they see statistics with animated counters
And the section has a dark background image

#### Scenario: Industries we serve section

Given the user is on the homepage
When they scroll to the industries section
Then they see the heading "Industries We Serve"
And 6 service images in a 2x3 grid with overlay text:
| Service |
| Residential Cleaning |
| Commercial Cleaning |
| Construction Cleaning |
| Windows Cleaning |
| Carpet Cleaning |
| Furniture Cleaning |

#### Scenario: Process section with 3 steps

Given the user is on the homepage
When they scroll to the process section
Then they see the heading "Get Amazing Cleaning in 3 Simple Ways"
And 3 steps:
| Step | Title |
| 1 | Pick a suitable plan |
| 2 | Set your schedule |
| 3 | Get things done |
And each step has a number, title, and description

#### Scenario: Testimonials section

Given the user is on the homepage
When they scroll to the testimonials section
Then they see the heading "What Are Clients Says"
And a carousel of testimonial cards
And each card has a user avatar, name, and quote text

#### Scenario: Pricing section with 4 tiers

Given the user is on the homepage
When they scroll to the pricing section
Then they see the heading "Our Plans & Pricing"
And 4 pricing cards:
| Plan | Price |
| Basic | $29.00/session |
    | Standard| $59.00/session |
| Premium | $79.00/session |
    | Ultimate| $89.50/session |
And one card is highlighted/active (Standard)
And each card has a "Sign Up" button

#### Scenario: CTA section

Given the user is on the homepage
When they scroll to the CTA section
Then they see a blue (#225ae1) background
And the heading "Need to clean your house? Just hire us!"
And contact info: phone and email

#### Scenario: Blog section

Given the user is on the homepage
When they scroll to the blog section
Then they see 3 blog post cards
And each card has an image, date, author, comment count, title, and excerpt

#### Scenario: Footer layout

Given the user is on the homepage
When they scroll to the footer
Then they see 4 columns:
| Column | Content |
| Brand | TidyWash + description |
| Recent Posts| 2 recent post links |
| Explore | Navigation links |
| Have a Questions? | Contact info |
And a copyright bar at the bottom linking to Component Dock

#### Scenario: Mobile responsive

Given the user is on a mobile viewport
When they view the site
Then the navbar collapses to a hamburger menu
And sections stack vertically
And the appointment form moves below the about text

## Verification checklist

- [ ] All 10+ sections render correctly matching the original layout
- [ ] Design tokens (colors, fonts, spacing) match the CSS extraction
- [ ] Hero has dark overlay on background image
- [ ] Appointment form has all 5 input fields + service dropdown
- [ ] 4 pricing cards with correct prices, one highlighted
- [ ] Testimonial carousel is functional
- [ ] Blog section shows 3 post cards
- [ ] Footer has 4 columns with correct content
- [ ] Mobile responsive (navbar collapse, stacking)
- [ ] 100% test coverage
- [ ] No ColorLib references in app code
- [ ] Footer links to Component Dock
