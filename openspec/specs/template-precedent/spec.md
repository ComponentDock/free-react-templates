# Spec: Precedent

## Purpose

Recreation of ColorLib **Lawfirm 2** (https://colorlib.com/wp/template/lawfirm-2/) as a professional law firm landing page. Preview URL was unreachable (404); design tokens extracted from screenshot + ColorLib listing page.

**New name:** Precedent  
**Original:** ColorLib Lawfirm 2  
**Category:** Legal  
**Design style:** Professional, dark + gold accent, serif headings, clean layout

## Design Tokens (from screenshot)

| Token                   | Value                  | Usage                                         |
| ----------------------- | ---------------------- | --------------------------------------------- |
| `--color-primary`       | `#c5a55a` (gold/amber) | CTA buttons, accent icons, feature highlights |
| `--color-dark`          | `#333333`              | Top bar, feature strip, footer backgrounds    |
| `--color-heading`       | `#1a1a2e`              | Section headings                              |
| `--color-body`          | `#666666`              | Body text                                     |
| `--color-white`         | `#ffffff`              | Hero text, feature strip text                 |
| `--color-bg`            | `#ffffff`              | Page background, card backgrounds             |
| `--color-light-bg`      | `#f8f9fa`              | Alternating section backgrounds               |
| Font heading            | Georgia / serif        | Professional, authoritative feel              |
| Font body               | Inter / sans-serif     | Clean readability                             |
| Border radius (buttons) | 4px                    | Slightly rounded CTA buttons                  |
| Hero overlay            | Dark semi-transparent  | Dark gradient over hero image                 |

## Requirements

### Requirement: TopBar

The page SHALL display a dark top bar with phone number, email, and social media links.

#### Scenario: TopBar renders contact info

- **WHEN** the page loads
- **THEN** a dark top bar shows phone number "+00 1234 567" and email "youremail@email.com"

#### Scenario: TopBar renders social links

- **WHEN** the page loads
- **THEN** the top bar shows Facebook, Twitter, Instagram, and LinkedIn social links

### Requirement: Navbar

The page SHALL display a sticky navigation bar with the brand name and navigation links.

#### Scenario: Navbar renders brand and links

- **WHEN** the page loads
- **THEN** the navbar displays "Precedent" logo and links: Home, About, Practice Areas, Cases, Attorneys, Blog, Contact

#### Scenario: Navbar becomes scrolled

- **WHEN** the user scrolls down more than 50px
- **THEN** the navbar background changes from semi-transparent to solid

#### Scenario: Mobile menu toggle

- **WHEN** on mobile viewport and the hamburger button is clicked
- **THEN** the mobile navigation menu opens
- **AND** clicking a link closes the menu

### Requirement: Hero

The page SHALL display a full-width hero section with a background image, heading, and CTA buttons.

#### Scenario: Hero renders content

- **WHEN** the page loads
- **THEN** the hero shows heading "Don't Feel Helpless We Fight for Justice"
- **AND** shows "Contact us" button linking to #contact
- **AND** shows "Read more" button linking to #about

### Requirement: FeatureStrip

The page SHALL display a dark 4-column feature strip below the hero.

#### Scenario: FeatureStrip renders features

- **WHEN** the page loads
- **THEN** four feature cards are displayed: Expert Attorneys, Case Dismissed, Court Performance, Client Satisfaction

### Requirement: TrustSection

The page SHALL display a trust/why-us section with a two-column layout.

#### Scenario: TrustSection renders content

- **WHEN** the page loads
- **THEN** the section shows "Welcome to Precedent" subtitle and "Why to Put Trust In Precedent" heading
- **AND** shows a Lady Justice statue image
- **AND** shows 2x2 feature grid: Expert Attorneys, Great Discount, Legal Advisory, Quick Charges

### Requirement: PracticeAreas

The page SHALL display practice area cards in a grid layout.

#### Scenario: PracticeAreas renders cards

- **WHEN** the page loads
- **THEN** six practice area cards are displayed: Business Law, Family Law, Criminal Law, Real Estate Law, Personal Injury, Judicial Law

### Requirement: Attorneys

The page SHALL display team member cards with photos, names, titles, and social links.

#### Scenario: Attorneys renders team

- **WHEN** the page loads
- **THEN** four attorney cards are displayed with names, titles, and social media links

### Requirement: Testimonials

The page SHALL display client testimonials in a carousel format.

#### Scenario: Testimonials navigation

- **WHEN** the user clicks "Next testimonial"
- **THEN** the next testimonial is displayed
- **WHEN** the user clicks "Previous testimonial"
- **THEN** the previous testimonial is displayed

### Requirement: CtaBanner

The page SHALL display a dark CTA banner with stats and a consultation button.

#### Scenario: CtaBanner renders content

- **WHEN** the page loads
- **THEN** the section shows "We Have Great Results" heading
- **AND** shows stats: Award Winning, 60 Years of Experience, Best Attorneys Team
- **AND** shows "Free Case Consultation" button

### Requirement: ContactForm

The page SHALL display a consultation form with validation.

#### Scenario: Form renders fields

- **WHEN** the page loads
- **THEN** the form shows fields: Your Name, Your Email, Subject, Message

#### Scenario: Form validation

- **WHEN** the user submits the form empty
- **THEN** validation errors appear for all required fields

#### Scenario: Form submission

- **WHEN** the user fills all fields with valid data and submits
- **THEN** a success message appears and the form resets

### Requirement: Footer

The page SHALL display a dark footer with three columns and Component Dock link.

#### Scenario: Footer renders content

- **WHEN** the page loads
- **THEN** the footer shows "Precedent" brand, Practice Areas links, Quick Links, and Contact info
- **AND** includes "More templates at Component Dock" linking to https://www.componentdock.com/

#### Scenario: No external attribution

- **WHEN** the footer renders
- **THEN** no external attribution links appear (only Component Dock)

### Requirement: Accessibility

All interactive elements SHALL have proper ARIA attributes.

#### Scenario: Semantic HTML

- **WHEN** any interactive element renders
- **THEN** it uses semantic elements with proper aria-labels

### Requirement: Responsive

The template SHALL be fully responsive across all viewport sizes.

#### Scenario: Mobile layout

- **WHEN** the viewport is mobile width
- **THEN** the navbar collapses to a hamburger menu
- **AND** grid sections stack vertically
