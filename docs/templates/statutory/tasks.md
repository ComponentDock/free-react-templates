# Statutory — Prep Notes

**Source:** ColorLib Lawfirm (slug: `lawfirm`)
**Preview:** https://preview.colorlib.com/theme/lawfirm/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/lawfirm-free-fullscreen-lawyer-website-template.jpg

## Structure order (top → bottom)

1. **Navbar** — dark fixed bar, brand "Statutory", 6 nav links, hamburger on mobile
2. **Hero** — full-width 600px, bg image with dark overlay (50%), h1 + subtext + 2 CTAs
3. **Intro strip** — 4 dark boxes in a row, each with icon + title + description; boxes darken left→right (#1d2227 → #161a1e → #121518 → #0e1013)
4. **About** — split 50/50: left image, right panel on #f5f4f0 bg; heading + 4 feature items (Expert Attorneys, Great Discount, Legal Advisory, Quick Charges)
5. **Counter** — bg image with overlay, 4 stat cards (3000 clients, 1000 awards, 2000 lawyers, 10540 cases), checklist icons, animated counters
6. **Practice areas** — heading "What We Cover", 6 cards in grid (Business, Family, Criminal, Real Estate, Personal Injury, Judicial)
7. **Case studies** — heading "Recent Case Studies", card grid with category tags
8. **Testimonials** — heading "What Our Clients Say", carousel with client quotes
9. **Appointment/Contact** — bg image with overlay, left text + 3 features (Award Winning, 60 Years, Best Attorneys), right contact form
10. **Footer** — dark #1d2227, 4 columns (brand, Explore, Legal, Company, Have a Questions?), Component Dock link

## Fidelity notes

- **Color palette:** Primary blue #007bff, gold accent #cbb88c, dark backgrounds #1d2227/161a1e/121518/0e1013. Light bg is #f5f4f0.
- **Font:** Roboto from Google Fonts.
- **Buttons:** Bootstrap-style, no border-radius (0.25rem default), btn-primary blue, btn-white outline.
- **Hero overlay:** absolute div with bg #1d2227, opacity 0.5, covering 600px height.
- **Intro boxes:** 4 equal columns with dark backgrounds, each with a flaticon icon, title, and lorem ipsum. They overlap the hero by -70px (negative margin-top).
- **Counter section:** background image with dark overlay, 4 counter cards with data-number attributes for animated counting.
- **Appointment section:** background image with dark overlay, left column has heading + 3 feature blocks (icon + title + text), right column has a contact form.
- **Footer:** 4-column layout: brand column, Explore links, Legal links, Company links, and a "Have a Questions?" column with address/phone/email.
- **All images:** use picsum.photos placeholders with seeded URLs.
- **No ColorLib references** in any app files.

## Implementation tasks

1. Scaffold app from simplest existing template
2. Create Navbar component (dark fixed, brand, links, mobile hamburger)
3. Create Hero component (bg image, overlay, heading, CTAs)
4. Create IntroStrip component (4 dark boxes with icons)
5. Create About component (split layout, feature items)
6. Create CounterStats component (animated counters, bg image)
7. Create PracticeAreas component (6 cards grid)
8. Create CaseStudies component (card grid)
9. Create Testimonials component (carousel)
10. Create Appointment component (bg image, features, contact form)
11. Create Footer component (4 columns, Component Dock link)
12. Compose all sections in App.tsx
13. Write tests for each component (100% coverage)
14. Verify: typecheck, lint, test:coverage, build
