# Finscape — Design Notes & Implementation Outline

Source: ColorLib "Finances" (`https://colorlib.com/wp/template/finances/`)
New name: Finscape (finance + landscape)

## Section order (from preview DOM)

1. **Navbar** — sticky top, 10 links: Home, About Us, Team, Pricing, FAQ, Gallery, Services, Testimonials, Blog, Contact. Mobile hamburger menu.
2. **Hero** — full-width carousel (3 slides), dark overlay (rgba(0,0,0,0.7)), white text, "Get In Touch" CTA pill buttons. Background images (use picsum.photos placeholders).
3. **About Us** — section title "About Us", subheading "We Solve Your Financial Problem", descriptive paragraph, 4 stat cards in a row (Money Savings, Online Shoppings, Credit/Debit Cards, Banking Solutions).
4. **Team** — "Meet Team" heading, 3 member cards: Kaiara Spencer (Accountant), Dave Simpson (Bank Teller), Ben Thompson (Bank Teller). Each with name, role, social icons.
5. **Gallery** — "Gallery" heading, 6-image grid with lightbox click behavior. Use picsum.photos placeholders.
6. **How It Works** — "How It Works" heading, 3 numbered steps: Online Applications, Get an approval, Card delivery. Each with icon + description.
7. **Our Services** — "Our Services" heading, 6 cards in 2x3 grid: Business Consulting, Credit Card, Income Monitoring, Insurance Consulting, Financial Investment, Financial Management. Each with icon + title + blurb.
8. **Happy Customers** — "Happy Customers" heading, testimonial carousel/cards with quotes.
9. **Pricing** — "Pricing" heading, 3 tiers: Basic ($47/yr), Premium ($200/yr, highlighted), Professional ($750/yr). Each with price, feature list, "Buy Now" CTA.
10. **FAQ** — "Frequently Ask Questions" heading, accordion with 4+ items.
11. **Blog** — "Our Blog" heading, 3 post cards with image, title, date, excerpt.
12. **Contact** — "Contact Us" heading, contact info (address, phone, email), contact form (First Name, Last Name, Email, Subject, Message, Send button).
13. **Footer** — 4 columns: About Us blurb, Quick Links, Follow Us (social icons), Subscribe Newsletter (email + Send). Copyright with ComponentDock link.

## Design tokens (from CSS analysis)

- Primary green: `#71bc42` — CTAs, accents, links
- Blue accent: `#007bff` — pricing popular badge
- Dark: `#343a40` — footer bg, headings, body text
- Light bg: `#f8f9fa` — alternate sections
- Warm gray: `#eff1f3` — section backgrounds
- Font: Open Sans (Google Fonts)
- Button radius: 30px (pill)
- Other radii: 4px, 7px, 15px
- Hero overlay: rgba(0,0,0,0.7)

## Fidelity notes

- Match section order exactly as listed above
- Hero carousel: 3 slides with identical structure (heading + subtext + CTA)
- Stats section uses counter animation (optional — can be static numbers)
- Gallery uses lightbox behavior (fancybox in original; we can use a simple modal)
- FAQ is an accordion (only one open at a time)
- Pricing: Premium card has a "popular" badge/highlight (blue #007bff accent)
- Footer copyright must link to componentdock.com (not ColorLib)
- All placeholder images via picsum.photos with deterministic seeds
- Icons via lucide-react
- No ColorLib references in app code

## Component breakdown

```
src/
  App.tsx              — main layout, composes all sections
  components/
    Navbar.tsx         — sticky nav, mobile hamburger, section links
    Hero.tsx           — carousel with 3 slides, dark overlay
    About.tsx          — heading, subheading, 4 stat cards
    Team.tsx           — 3 team member cards
    Gallery.tsx        — 6-image grid with lightbox
    HowItWorks.tsx     — 3 numbered steps
    Services.tsx       — 6 service cards
    Testimonials.tsx   — customer quote cards
    Pricing.tsx        — 3 pricing tiers
    FAQ.tsx            — accordion component
    Blog.tsx           — 3 blog post cards
    Contact.tsx        — contact info + form
    Footer.tsx         — 4-column footer
  index.css            — Tailwind entry + @theme tokens
```

## Implementation priority

1. Navbar + Hero (establishes the look)
2. About + Stats (simple section)
3. Team (card grid pattern)
4. Services (card grid, similar to Team)
5. How It Works (numbered steps)
6. Pricing (card comparison)
7. FAQ (accordion — needs state management)
8. Gallery (lightbox — needs state)
9. Testimonials (carousel or grid)
10. Blog (card grid)
11. Contact (form with validation)
12. Footer (static columns)
