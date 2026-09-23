# Template: Plead (Lawyer)

## Purpose

Plead is a lawyer and legal firm website template. It recreates the ColorLib Justice design (https://colorlib.com/wp/template/justice/) with a dark professional aesthetic, Rubik font, and tan/gold accent (#b49c73). Sections: navbar, hero, practice areas, statistics counters, testimonials carousel, expertise cards, CTA banner, and footer.

- **Source**: https://colorlib.com/wp/template/justice/
- **Preview**: https://preview.colorlib.com/theme/justice/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/justice-free-template.jpg
- **Category**: Lawyer
- **Stack**: React 19 + Vite + Tailwind CSS 4 + TypeScript

### Design tokens (extracted from preview CSS)

| Token | Value | Usage |
|-------|-------|-------|
| font-family | Rubik (300, 400, 700) | Global body + headings |
| brand-primary | #b49c73 | Accent color, buttons, links, counters |
| brand-primary-hover | #bba580 | Button hover state |
| body-bg | #37373f | Dark page background |
| body-text | #b2b2b8 | Body text on dark bg |
| heading-text | #ffffff | Section headings |
| footer-bg | #37373f | Footer background (same as body) |
| dark-section-bg | bg-primary-dark | Testimonials section bg |
| button-radius | 30px | Pill-shaped buttons |
| cta-bg | hero_bg.jpg with overlay | Hero + CTA banner backgrounds |

## Requirements

### Requirement: Navigation bar
The template SHALL display a sticky dark navigation bar with the brand name "Plead" (with a dot accent), section links (Home, Practice Areas, Services, Attorneys, About, Contact Us), and a mobile menu toggle.

#### Scenario: Desktop navigation
- **WHEN** the page loads on a desktop viewport
- **THEN** the brand link and all section links are visible in the navbar

#### Scenario: Mobile menu toggle
- **WHEN** the user clicks the mobile hamburger menu button
- **THEN** the mobile menu slides open with the same nav links

### Requirement: Hero section
The template SHALL display a full-width hero with a dark background image overlay, heading "We Fight For Your Right" (with "We Fight" in the tan/gold accent), and a "Free Consultation" CTA button.

#### Scenario: Hero renders
- **WHEN** the page loads
- **THEN** the hero heading, description, and CTA button are visible over the background image

### Requirement: Practice areas section
The template SHALL display a two-column layout: left column with heading "Our Practice Areas" (with "Practice Areas" in accent), description text, and "Learn More" button; right column with 4 practice area items (Banking and Finance Law, Commercial Law, Corporate Law, Criminal Law), each with an icon, title, and short description.

#### Scenario: Practice areas render
- **WHEN** the page loads
- **THEN** the heading, description, button, and all four practice area items are visible

### Requirement: Statistics section
The template SHALL display a section with heading "50 Years of Experience in Various Cases" (with "50 Years" in accent) and 4 counter statistics: 90+ Awards, 3K+ Cases Wins, 2K+ Clients, 200+ Attorneys — each with a number and label.

#### Scenario: Statistics render
- **WHEN** the page loads
- **THEN** the heading and all four statistics with numbers and labels are visible

### Requirement: Testimonials section
The template SHALL display a dark-background carousel section with heading "Happy Clients" (with "Happy" in accent) and 5 testimonial cards, each with a quote block (with a triangle bubble SVG), author photo, name, and title. Navigation arrows allow cycling through testimonials.

#### Scenario: Testimonials render
- **WHEN** the page loads
- **THEN** the heading and at least the first testimonial card are visible

#### Scenario: Testimonial navigation
- **WHEN** the user clicks the next arrow
- **THEN** the carousel advances to the next testimonial

### Requirement: Expertise section
The template SHALL display a 4-column grid of service cards with heading "More Expertise" (with "Expertise" in accent). Cards: Labor and Employment, Corporate & Civil Litigation, Intellectual Property Law, Criminal Prosecution and Defense — each with an icon, title, description, and "Learn More" link.

#### Scenario: Expertise cards render
- **WHEN** the page loads
- **THEN** the heading and all four expertise cards are visible

### Requirement: CTA banner
The template SHALL display a full-width call-to-action banner with a background image overlay, heading "Let's get started. Call us Now for a Free Consultation", and a "Call Us Now" button in the accent color.

#### Scenario: CTA renders
- **WHEN** the page loads
- **THEN** the CTA heading and button are visible over the background

### Requirement: Footer
The template SHALL display a dark footer with 4 columns: Home links (About us, Practice Area, Services, Attorneys, Terms, Privacy), Practice Area links, Services links, and Contact info (address, phone, email, social icons). Footer copyright line with Component Dock link.

#### Scenario: Footer renders
- **WHEN** the page loads
- **THEN** all four footer columns and the copyright line with Component Dock link are visible

## Verification checklist

- [ ] Navbar renders with brand, links, mobile toggle
- [ ] Hero background image with overlay, heading, CTA button
- [ ] Practice areas: 2-column layout, 4 items with icons
- [ ] Statistics: 4 counters with numbers and labels
- [ ] Testimonials: carousel with 5 cards, navigation arrows
- [ ] Expertise: 4 service cards in grid
- [ ] CTA banner: background image, heading, button
- [ ] Footer: 4 columns, social icons, Component Dock link
- [ ] Design tokens: Rubik font, #b49c73 accent, #37373f dark bg, 30px button radius
- [ ] All sections match original section order
- [ ] Responsive layout (mobile + desktop)
- [ ] No ColorLib references in app code
