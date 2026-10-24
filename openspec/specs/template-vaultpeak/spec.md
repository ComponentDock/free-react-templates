# Template: VaultPeak (Finance & Banking)
<!-- prep-status: shipped-as=bankcraft -->
> **SHIPPED-UNDER** — the ColorLib `banker` design this prep describes already
> ships as `apps/bankcraft` (<https://bankcraft.free.componentdock.com>).
> Do not scaffold `apps/vaultpeak`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-bankcraft/spec.md`.

## Purpose

Recreation of ColorLib **Banker** template as a modern React 19 + Vite + Tailwind 4 + TypeScript single-page template.

- **Source:** https://colorlib.com/wp/template/banker/
- **Preview:** https://preview.colorlib.com/theme/banker/
- **New name:** `vaultpeak` (apps/vaultpeak, @free-react-templates/vaultpeak)
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Description:** A professional banking/finance website template with a full-screen hero, feature highlights, about section, team grid, services list, pricing cards, FAQ, testimonials carousel, image gallery with filters, blog posts, contact form, and a dark footer with newsletter signup.

## Design Tokens

Extracted from https://preview.colorlib.com/theme/banker/css/style.css and preview HTML:

| Token                    | Value                                                                                                     | Usage                                                       |
| ------------------------ | --------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------- |
| **Brand primary**        | `#fd7e14` (orange)                                                                                        | Buttons, links, active states, navbar highlight, form focus |
| **Text body**            | `gray` (#808080)                                                                                          | Body text color                                             |
| **Text black**           | `#000000`                                                                                                 | Headings, card titles                                       |
| **Success green**        | `#71bc42`                                                                                                 | Check icons in feature lists                                |
| **Footer bg**            | `#343a40` (dark gray)                                                                                     | Footer background                                           |
| **Section bg-light**     | `#f8f9fa` (very light gray)                                                                               | Services, pricing, contact sections                         |
| **Overlay**              | `rgba(184, 178, 166, 0.7)`                                                                                | Hero image overlay (warm beige)                             |
| **Font family**          | `"Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif` | All text                                                    |
| **Font weights**         | 300 (light desc), 400 (body), 700 (bold headings), 900 (hero h1)                                          | Various                                                     |
| **Button radius**        | `30px` (pill shape)                                                                                       | All .btn elements                                           |
| **Button padding**       | `10px 30px`                                                                                               | All .btn                                                    |
| **Form input radius**    | `30px` (pill)                                                                                             | .form-control                                               |
| **Form input height**    | `43px`                                                                                                    | .form-control                                               |
| **Hero height**          | `100vh` (min 600px)                                                                                       | .site-blocks-cover                                          |
| **Hero h1 size**         | `4rem` (2rem mobile)                                                                                      | .site-blocks-cover h1                                       |
| **Hero desc size**       | `1.4rem`                                                                                                  | .site-blocks-cover .desc                                    |
| **Dropdown border-top**  | `2px solid #fd7e14`                                                                                       | .dropdown active indicator                                  |
| **Circle bg decoration** | `#f8f9fa`, 300px circle, offset bottom-right                                                              | .circle-bg:after                                            |
| **Footer social icons**  | facebook, twitter, instagram, linkedin                                                                    | .icon-* classes                                             |

### Icon approach

The original uses icomoon + flaticon icon fonts. In the React recreation, use `lucide-react` icons instead (Wallet, ShoppingCart, CreditCard, Users, Briefcase, HelpCircle, MessageCircle, Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Search, Menu, X, ChevronRight, Heart).

## Requirements

### Feature: VaultPeak template behaviour

#### Scenario: Navbar

- **GIVEN** the user visits the page
- **THEN** a sticky navbar displays "VaultPeak" logo with an orange dot
- **AND** navigation links: Home, About Us (with dropdown), Blog, Contact
- **AND** social icons (Facebook, Twitter, LinkedIn) in the nav
- **AND** on scroll the navbar becomes white with shadow and orange logo

#### Scenario: Hero

- **GIVEN** the user sees the hero section
- **THEN** a full-screen background image is shown with a warm beige overlay
- **AND** a rotating carousel displays three headlines:
- "Banking Solutions"
- "Financing Solutions"
- "Savings Accounts"
- **AND** each slide shows a descriptive paragraph
- **AND** a scroll-down mouse icon animates at the bottom

#### Scenario: Features (3-column)

- **GIVEN** the user scrolls past the hero
- **THEN** three feature cards appear side by side:
- "Money Savings" with wallet icon
- "Online Shoppings" with cart icon
- "Credit / Debit Cards" with credit card icon
- **AND** each card has an icon, title, and short description

#### Scenario: About / Amortization

- **GIVEN** the user sees the amortization section
- **THEN** a circular-background image appears on the left
- **AND** "Amortization Computation" heading with a checklist on the right
- **AND** an email input with "Submit Email" pill button

#### Scenario: About Us

- **GIVEN** the user sees the About Us section
- **THEN** a centered "About Us" heading with lead text
- **AND** a circular-background image on the left
- **AND** "We Solve Your Financial Problem" heading with two paragraphs on the right

#### Scenario: Team

- **GIVEN** the user sees the Team section
- **THEN** "Meet Team" heading with lead text
- **AND** a 4-column grid of team member cards
- **AND** each card shows a photo with social icon overlay (FB, Twitter, LinkedIn, Instagram)
- **AND** name and position below the photo

#### Scenario: Services

- **GIVEN** the user sees the Services section
- **THEN** "Our Services" heading on a light background
- **AND** a 3-column grid of service cards with:
- icon, heading, description, "Learn More" link
- **AND** items: Business Consulting, Credit Card, Income Monitoring, Tax Management, Insurance Policy, Financial Planning

#### Scenario: Pricing

- **GIVEN** the user sees the Pricing section
- **THEN** "Pricing" heading on a light background
- **AND** 3 pricing cards side by side:
- Basic ($47/year), Premium ($200/year, highlighted), Professional ($750/year)
- **AND** each card has a plan name, price, feature checklist (some struck-through), and "Buy Now" button
- **AND** the Premium card uses the primary orange "Buy Now" button

#### Scenario: FAQ

- **GIVEN** the user sees the FAQ section
- **THEN** "Frequently Ask Questions" heading
- **AND** a 2-column layout with 8 FAQ items total
- **AND** each item has an h4 question and a paragraph answer

#### Scenario: Testimonials

- **GIVEN** the user sees the Testimonials section
- **THEN** "Happy Customers" heading
- **AND** a carousel of testimonial slides
- **AND** each slide shows a blockquote, author photo, and author name

#### Scenario: Gallery

- **GIVEN** the user sees the Gallery section
- **THEN** "Gallery" heading
- **AND** filter buttons: All, Events, Party, Holidays
- **AND** a 4-column grid of images
- **AND** clicking an image opens a lightbox overlay

#### Scenario: Blog

- **GIVEN** the user sees the Blog section
- **THEN** "Our Blog" heading
- **AND** 3 blog post cards in a row
- **AND** each card has a featured image, title, meta (author · date · category), excerpt, and "Continue Reading..." link

#### Scenario: Contact

- **GIVEN** the user sees the Contact section
- **THEN** "Contact Us" heading on a light background
- **AND** 3 contact info columns: address, phone, email with icons
- **AND** a white contact form with fields: First Name, Last Name, Email, Subject, Message
- **AND** a "Send Message" pill button

#### Scenario: Footer

- **GIVEN** the user sees the footer
- **THEN** a dark background (#343a40) footer
- **AND** left columns: "About Us" paragraph, "Quick Links" list, "Follow Us" social icons
- **AND** right column: "Subscribe Newsletter" with email input and "Send" button
- **AND** a copyright line at the bottom
- **AND** a link to https://www.componentdock.com/ ("Component Dock")

#### Scenario: Mobile responsiveness

- **GIVEN** the user views on mobile
- **THEN** the navbar collapses to a hamburger menu
- **AND** team/services/blog cards stack vertically
- **AND** pricing cards stack vertically
- **AND** the gallery grid reduces columns
- **AND** the contact form fields stack

## Verification checklist

- [ ] All 11 sections implemented in correct order (hero → features → about/amortization → about-us → team → services → pricing → faq → testimonials → gallery → blog → contact → footer)
- [ ] Navbar sticky with scroll behavior (white bg + shadow when scrolled)
- [ ] Hero carousel rotates through 3 slides
- [ ] Team grid shows 4 members with social overlay
- [ ] Services grid shows 6 items in 3 columns
- [ ] Pricing cards: 3 tiers with correct prices, Premium highlighted
- [ ] FAQ in 2-column layout, 8 items
- [ ] Testimonials carousel with 3 slides
- [ ] Gallery filter buttons work (All/Events/Party/Holidays)
- [ ] Blog: 3 post cards with images and meta
- [ ] Contact form with all fields
- [ ] Footer dark bg, newsletter signup, ComponentDock link
- [ ] Design tokens match: #fd7e14 orange, Open Sans font, pill buttons (30px radius), #343a40 footer
- [ ] Responsive on mobile (hamburger menu, stacked layouts)
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code
- [ ] public/CNAME = vaultpeak.free.componentdock.com
- [ ] homepage = https://vaultpeak.free.componentdock.com
