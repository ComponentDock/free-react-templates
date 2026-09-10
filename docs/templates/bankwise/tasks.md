# Bankwise — Implementation Tasks & Design Notes

**Source:** ColorLib Banker (https://colorlib.com/wp/template/banker/)
**Preview:** https://preview.colorlib.com/theme/banker/
**New name:** bankwise
**Stack:** React 19 + Vite + Tailwind CSS 4 + TypeScript

## Structure order (section-by-section)

1. Navbar
2. Hero (carousel / overlay)
3. Feature icons (3-col)
4. About / CTA split
5. Team (4-col grid)
6. Gallery (filterable grid)
7. How It Works (3 steps)
8. Services (6 cards, light bg)
9. Testimonials (carousel)
10. Pricing (3 tiers)
11. FAQ (accordion)
12. Blog (3 cards)
13. Contact (form + info)
14. Footer (dark, 4-col)

## Section-by-section fidelity notes

### Navbar
- Sticky top, light bg (#eff1f3)
- Logo left, nav links right (Home, About, Services, Pricing, Blog, Contact)
- Mobile: hamburger menu toggle
- Smooth scroll to sections

### Hero
- Full-width with dark overlay (`.site-blocks-cover.overlay`)
- Centered text carousel or static headline
- Headlines: "Banking Solutions", "Financing Solutions", "Savings Accounts"
- CTA button below, orange (#fd7e14) bg, white text, rounded

### Feature icons
- 3-column grid on desktop, stacked on mobile
- Circular icon container (gray bg #f8f9fa)
- h3 title + short description per item
- Items: Money Savings, Online Shopping, Credit/Debit Cards

### About / CTA big image
- `.cta-big-image` section class
- Split layout: left text, right form or image
- Heading: "We Solve Your Financial Problem"
- Accordion or text block on left, form on right
- Orange accent on interactive elements

### Team
- "Meet Team" centered heading
- 4-column responsive grid (2 cols on mobile)
- Each card: circular photo, name, role, social icon row
- 8 team members shown in original (carousel of 2 rows of 4)

### Gallery
- "Gallery" heading centered
- Filter buttons: All, Branding, Design, Web (`.filters` class)
- 4-column grid of image thumbnails
- Filter animation (isotope-style or simple show/hide)
- Items have category data attributes for filtering

### How It Works
- Centered heading "How It Works"
- 3 steps in a row, each with:
  - Numbered label (01, 02, 03)
  - Icon or step indicator
  - Title + description
- Carousel on left side, text on right (`.owl-carousel.slide-one-item-alt`)
- Steps: Online Applications, Get an approval, Card delivery

### Services
- "Our Services" heading, light bg (`.bg-light`)
- 6 service cards in 3-column grid (`.unit-4` pattern)
- Each card: icon in colored container, title, description
- Services: Business Consulting, Credit Card, Income Monitoring,
  Insurance Consulting, Financial Investment, Financial Management

### Testimonials
- "Happy Customers" heading
- Carousel of testimonial cards
- Each: quote text, author name, role
- Orange arrow buttons for navigation
- `.testimonial-wrap` class

### Pricing
- "Pricing" heading, light bg
- 3 pricing cards in a row
- Basic, Premium (highlighted/popular), Professional
- Each: tier name, price, feature list with checkmarks, CTA button
- Popular card has elevated styling (shadow, orange top border)

### FAQ
- "Frequently Ask Questions" heading
- Accordion-style expandable items
- Questions toggle answers open/closed
- Simple +/- or arrow indicator

### Blog
- "Our Blog" heading
- 3 blog post cards in a row
- Each: featured image, date, title, excerpt text
- Cards have hover effects or image overlay

### Contact
- "Contact Us" heading
- Split layout:
  - Left: contact info (address, phone, email, opening hours) with icons
  - Right: form with fields (name, email, subject, message, submit button)
- Form validation on submit

### Footer
- Dark bg (#343a40)
- 4-column layout:
  - Col 1: Logo + about text
  - Col 2: Quick Links (nav links)
  - Col 3: Follow Us (social icons)
  - Col 4: Subscribe Newsletter (email input + button)
- Bottom: copyright + "Made with Component Dock" link

## Design token summary

- Primary: #fd7e14 (orange)
- Accent: #71bc42 (green)
- Footer bg: #343a40
- Nav bg: #eff1f3
- Light sections: #f8f9fa
- Font: "Open Sans"
- Button radius: 15px
- Card radius: 7px
- Input radius: 4px

## Implementation tips

- Start by copying simplest existing app as skeleton
- Use `cn()` from packages/ui for all class merging
- Hero carousel: simple state-based rotation or CSS animation
- Gallery filter: useState for active filter, filter items array
- FAQ accordion: useState per item for open/closed
- Testimonial carousel: useState for current index, arrow navigation
- Pricing cards: map array of pricing data
- Contact form: controlled inputs with useState
- All placeholder images: `https://picsum.photos/seed/bankwise-<n>/<w>/<h>`
