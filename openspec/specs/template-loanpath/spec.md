# Template: LoanPath (Finance & Loan)

## Purpose

Recreation of ColorLib **Finloans** template as a modern React 19 + Vite + Tailwind 4 + TypeScript single-page template.

- **Source:** https://colorlib.com/wp/template/finloans/
- **Preview:** https://preview.colorlib.com/theme/finloans/
- **New name:** `loanpath` (apps/loanpath, @free-react-templates/loanpath)
- **Stack:** Vite (latest) · React 19 · Tailwind CSS 4 · TypeScript (strict)
- **Description:** A loan/finance website template featuring a hero with an embedded loan calculator form, service cards with loan details, about section with checklist, 3-step process, brand logos carousel, FAQ accordion, testimonial carousel, dark CTA banner, and a dark footer with newsletter signup.

## Design Tokens

Extracted from https://preview.colorlib.com/theme/finloans/css/style.css and preview HTML:

| Token | Value | Usage |
|---|---|---|
| **Brand primary (teal)** | `#33D4D6` | Primary buttons (boxed-btn3), hover states, link accents |
| **Brand secondary (orange)** | `#FD8E5E` | Carousel nav hover, slider accent elements |
| **Heading color** | `#001D38` (dark navy) | h1-h5 headings |
| **Body text** | `#7A838B` (gray) | Paragraphs |
| **Link/body default** | `#1F1F1F` (near-black) | a, button default |
| **Footer bg** | Dark (implied by footer_top/footer_border) | Footer background |
| **Overlay bg** | `#040E27` at 50% opacity | Dark overlay on sections |
| **Font family** | `"Roboto", sans-serif` | All text |
| **Font weights** | 300, 400, 500, 700, 900 | Various |
| **Button padding** | `11px 29px 13px 29px` | .boxed-btn3, .boxed-btn4 |
| **Button radius** | Default (no explicit radius — rectangular) | .boxed-btn3 |
| **Section padding** | `120px top/bottom` (desktop) | .section-padding |
| **Carousel nav** | Circular (50px), border `1px solid #4D6174`, white text | Owl carousel arrows |

### Icon approach

The original uses Font Awesome + Themify Icons + Flaticon. In the React recreation, use `lucide-react` icons instead (Home, DollarSign, CreditCard, CheckCircle, ArrowRight, ChevronDown, ChevronLeft, ChevronRight, Quote, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Menu, X, Send).

## Requirements

### Feature: LoanPath template behaviour

#### Scenario: Header / Navbar

- **GIVEN** the user visits the page
- **THEN** a sticky header displays the "LoanPath" logo
- **AND** navigation links: Home, Loan, About, Pages (dropdown), Blog (dropdown), FAQ, Contact
- **AND** a phone number "+10 673 567 367" on the right
- **AND** an "Apply for a Loan" CTA button (teal)
- **AND** on mobile a hamburger menu appears

#### Scenario: Hero with Loan Calculator

- **GIVEN** the user sees the hero section
- **THEN** a full-width background image with dark overlay is shown
- **AND** a headline: "Get Loan for your Business growth or startup"
- **AND** a "How it Works" button
- **AND** on the right a white card form: "How much do you want?"
- **AND** the form has Amount dropdown, Month dropdown
- **AND** a "You have to pay: $0" display
- **AND** a "Continue" teal button

#### Scenario: Services (3 loan types)

- **GIVEN** the user scrolls to services
- **THEN** "What we offer for you" heading with subtitle
- **AND** 3 service cards in a row:
- Home Loan ($3000-$10000) with icon, details list, "Apply Now" button
- Business Loan ($10000-$50000) with icon, details list, "Apply Now" button
- Personal Loan ($1000-$5000) with icon, details list, "Apply Now" button
- **AND** each card has: icon, loan type name, price range, 4 detail items, teal CTA button

#### Scenario: About

- **GIVEN** the user sees the About section
- **THEN** "Why Choose Us?" heading
- **AND** a left image
- **AND** a right column with:
- descriptive paragraph
- checklist: "Loans with quick approval", "Customize a loan based on the amount", "Good credit profile", "We provide online instant cash loans"
- "About Us" teal button

#### Scenario: How It Works (3 steps)

- **GIVEN** the user sees the How It Works section
- **THEN** "How it Works" heading with subtitle
- **AND** 3 step cards:
- 01: "Apply for loan" with description
- 02: "Application review" with description
- 03: "Get funding fast" with description

#### Scenario: Brand Logos

- **GIVEN** the user sees the brand logos section
- **THEN** a carousel of 5 brand/partner logo images

#### Scenario: FAQ Accordion

- **GIVEN** the user sees the FAQ section
- **THEN** "Frequently ask" heading
- **AND** an accordion with 4+ FAQ items
- **AND** each item has a clickable question header
- **AND** clicking expands/collapses the answer

#### Scenario: Testimonials

- **GIVEN** the user sees the Testimonials section
- **THEN** a carousel of testimonial slides
- **AND** each slide has: author photo, quote icon, testimonial paragraph, author name

#### Scenario: Apply Loan CTA

- **GIVEN** the user sees the CTA banner
- **THEN** a dark overlay background
- **AND** "Apply for a Loan for your startup, education or company" heading
- **AND** an "Apply Now" teal button

#### Scenario: Footer

- **GIVEN** the user sees the footer
- **THEN** a dark background footer
- **AND** left column: logo, contact info (email, phone, address), social icons (FB, Google+, Twitter, Instagram)
- **AND** second column: "Services" links list
- **AND** third column: "Quick Links" list
- **AND** right column: "Subscribe" newsletter form with email input + Subscribe button
- **AND** a copyright line at bottom
- **AND** a link to https://www.componentdock.com/ ("Component Dock")

#### Scenario: Mobile responsiveness

- **GIVEN** the user views on mobile
- **THEN** the navbar collapses to a hamburger menu
- **AND** service cards stack vertically
- **AND** about section stacks (image above text)
- **AND** the hero form stacks below the headline

## Verification Checklist

- [ ] All sections implemented in correct order (header → hero+calculator → services → about → how-it-works → brands → faq → testimonials → cta → footer)
- [ ] Navbar sticky with scroll behavior
- [ ] Hero background with dark overlay + loan calculator form
- [ ] Service cards: 3 types with details and CTA buttons
- [ ] About section: image + checklist + button
- [ ] 3-step process section
- [ ] Brand logos carousel
- [ ] FAQ accordion (expand/collapse works)
- [ ] Testimonials carousel
- [ ] Dark CTA banner with "Apply Now"
- [ ] Footer: dark bg, 4 columns, newsletter, ComponentDock link
- [ ] Design tokens match: #33D4D6 teal, #001D38 headings, Roboto font, rectangular buttons
- [ ] Responsive on mobile
- [ ] 100% test coverage (lines, functions, branches, statements)
- [ ] No ColorLib references in app code
- [ ] public/CNAME = loanpath.free.componentdock.com
- [ ] homepage = https://loanpath.free.componentdock.com
