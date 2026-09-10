# Template: Bankcraft (Finance / Banking)

## Purpose

Recreation of the ColorLib **Banker** template as a React 19 + Vite + Tailwind 4 + TypeScript site.

- **Source:** https://colorlib.com/wp/template/banker/
- **Preview analyzed:** https://preview.colorlib.com/theme/banker/
- **New name:** `bankcraft` (apps/bankcraft, `@free-react-templates/bankcraft`)
- **Deploy target:** https://bankcraft.free.componentdock.com
- **Stack:** Vite latest, React 19, Tailwind CSS 4, TypeScript strict
- **Analysis date:** 2026-09-10

## Replication reference

### Preview DOM analysis

Sections extracted from `https://preview.colorlib.com/theme/banker/` (top to bottom):

1. **Navbar** — Sticky header with logo "Banker." (orange dot accent), nav links (Home, About Us with dropdown, Blog, Contact, social icons).
2. **Hero banner** — Full-width banner with headline "Banking Solutions", subtitle about financial services, 3 service cards below (Financing Solutions, Savings Accounts, etc.).
3. **Money Savings** — Feature grid: 4 cards (Money Savings, Online Shoppings, Credit/Debit Cards, Amortization Computation).
4. **CTA About Us** — Split layout: large image left, "About Us" heading + "We Solve Your Financial Problem" description right.
5. **Team** — "Meet Team" heading, 8 member cards in a 4-column grid (photo, name, role).
6. **Gallery** — Image gallery grid.
7. **How It Works** — 3 numbered steps: Online Applications, Get an approval, Card delivery.
8. **Services** — "Our Services" heading, 6 service cards in 2 rows of 3 (Business Consulting, Credit Card, Income Monitoring, Insurance Consulting, Financial Investment, Financial Management).
9. **Testimonials** — "Happy Customers" with testimonial cards.
10. **Pricing** — 3 tiers: Basic, Premium (highlighted/popular), Professional.
11. **FAQ** — "Frequently Ask Questions" accordion with 8 questions.
12. **CTA Bank Loan** — Split layout: image left, "Bank Loan" heading + "Banking Consulation" text + CTA button right.
13. **Blog** — "Our Blog" with 3 blog post cards (image, date, title, excerpt).
14. **Contact** — "Contact Us" heading with contact form.
15. **Footer** — Dark background, 3 columns: About Us, Quick Links, Follow Us + Subscribe Newsletter.

### Design tokens (extracted from style.css)

| Token                | Value                                             | Usage                                                               |
| -------------------- | ------------------------------------------------- | ------------------------------------------------------------------- |
| Font family          | `"Open Sans", sans-serif` (weights 300, 400, 700) | Body, headings, all text                                            |
| Primary brand color  | `#fd7e14` (orange)                                | Buttons, accent borders, links, text-primary, pricing popular badge |
| Secondary color      | `#71bc42` (green)                                 | Some accent elements, secondary text highlights                     |
| Dark background      | `#343a40`                                         | Footer, dark section backgrounds, testimonial cards                 |
| Light background     | `#f8f9fa`                                         | bg-light sections                                                   |
| Alt light background | `#eff1f3`                                         | FAQ hover states                                                    |
| Button border-radius | `30px`                                            | Pill-shaped buttons throughout                                      |
| Text primary         | `#212529`                                         | Body text                                                           |
| Text white           | `#fff`                                            | On dark backgrounds                                                 |
| Text muted white     | `rgba(255,255,255,0.7)`                           | Footer links, secondary text on dark bg                             |
| Border color         | `#dee2e6`                                         | Card borders, dividers                                              |

### Visual design notes (from screenshot)

- Clean, professional banking/finance aesthetic.
- Orange brand color on white background with dark gray accents.
- Full-width hero banner with background image overlay.
- Card-based layouts for features, services, team, pricing.
- Rounded pill buttons (30px radius).
- Sticky navigation with logo (text "Banker." with colored dot).
- Dark footer with newsletter signup.
- FAQ uses accordion pattern.

## Requirements

### Feature: Bankcraft — Finance/Banking Template

#### Scenario: Navbar renders with logo and navigation links

Given the page loads
Then a sticky navbar is displayed
And the navbar contains the logo "Bankcraft"
And navigation links include Home, About, Services, Blog, and Contact
And the logo has an orange dot accent

#### Scenario: Hero banner displays headline and service cards

Given the page loads
Then a hero banner is visible at the top
And the hero displays the headline "Banking Solutions"
And a subtitle describes financial services
And 3 service summary cards are shown below the headline

#### Scenario: Money Savings section displays feature cards

Given the user scrolls to the Money Savings section
Then 4 feature cards are displayed in a grid
And each card has an icon, title, and description

#### Scenario: About Us CTA section shows split layout

Given the user scrolls to the About Us section
Then a large image appears on the left
And the heading "About Us" appears on the right
And a description paragraph appears below the heading
And a CTA button is present

#### Scenario: Team section displays member cards

Given the user scrolls to the Team section
Then the heading "Meet Team" is displayed
And 8 team member cards are shown in a responsive grid
And each card shows a photo, name, and role

#### Scenario: Gallery section displays image grid

Given the user scrolls to the Gallery section
Then a gallery grid is displayed with images

#### Scenario: How It Works section shows numbered steps

Given the user scrolls to the How It Works section
Then 3 numbered steps are displayed
And each step has a number, title, and description

#### Scenario: Services section displays service cards

Given the user scrolls to the Services section
Then the heading "Our Services" is displayed
And 6 service cards are shown in a 2x3 grid
And each card has an icon, title, and description

#### Scenario: Testimonials section shows customer reviews

Given the user scrolls to the Testimonials section
Then the heading "Happy Customers" is displayed
And multiple testimonial cards are shown
And each card has review text and customer info

#### Scenario: Pricing section shows 3 tiers

Given the user scrolls to the Pricing section
Then 3 pricing cards are displayed
And the tiers are Basic, Premium, and Professional
And the Premium tier is highlighted as popular
And each tier shows a price, features list, and CTA button

#### Scenario: FAQ section shows accordion

Given the user scrolls to the FAQ section
Then the heading "Frequently Asked Questions" is displayed
And an accordion with multiple questions is shown
And clicking a question toggles its answer visibility

#### Scenario: Bank Loan CTA section shows split layout

Given the user scrolls to the Bank Loan section
Then a large image appears on the left
And the heading "Bank Loan" appears on the right
And a CTA button is present

#### Scenario: Blog section displays post cards

Given the user scrolls to the Blog section
Then the heading "Our Blog" is displayed
And 3 blog post cards are shown
And each card has an image, date, title, and excerpt

#### Scenario: Contact section shows form

Given the user scrolls to the Contact section
Then the heading "Contact Us" is displayed
And a contact form is visible
And the form has name, email, subject, and message fields
And a submit button is present

#### Scenario: Footer renders with columns and newsletter

Given the page loads
Then a dark footer is displayed at the bottom
And the footer has 3 columns: About, Quick Links, Follow Us
And a newsletter signup form is present
And a "Component Dock" attribution link is shown

#### Scenario: Responsive design adapts to mobile

Given the page is viewed on a mobile viewport
Then the navbar collapses into a hamburger menu
And multi-column grids stack to single column
And all sections remain readable and accessible

## Verification checklist

- [ ] Navbar: sticky, logo with orange accent dot, nav links, social icons
- [ ] Hero: headline, subtitle, 3 service summary cards
- [ ] Money Savings: 4 feature cards with icons
- [ ] About Us CTA: split layout, image + text + button
- [ ] Team: 8 member cards in responsive grid
- [ ] Gallery: image grid
- [ ] How It Works: 3 numbered steps
- [ ] Services: 6 service cards in 2x3 grid
- [ ] Testimonials: customer review cards
- [ ] Pricing: 3 tiers, Premium highlighted
- [ ] FAQ: accordion with toggle behavior
- [ ] Bank Loan CTA: split layout with image and CTA
- [ ] Blog: 3 post cards with images
- [ ] Contact: form with all fields
- [ ] Footer: dark bg, 3 columns, newsletter, Component Dock link
- [ ] Design tokens: Open Sans, #fd7e14 orange, #343a40 dark, 30px pill buttons
- [ ] No ColorLib references in app code
- [ ] Placeholder images via picsum.photos
- [ ] Package name: @free-react-templates/bankcraft
- [ ] CNAME: bankcraft.free.componentdock.com
