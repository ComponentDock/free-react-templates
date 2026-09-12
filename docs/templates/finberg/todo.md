# Finberg — Implementation Todo

Source: ColorLib Finlone (https://colorlib.com/wp/template/finlone/)
Preview: https://preview.colorlib.com/theme/finlone/
Spec: openspec/specs/template-finberg/spec.md

## Implementation Order

1. [ ] **Project setup** — Copy simplest existing app, rename to `finberg`,
   update package.json, vite.config.ts, CNAME, index.html title
2. [ ] **Header** — Transparent nav overlay on hero; sticky on scroll (blue bar);
   nav links: Home, Loan, About, FAQ, Blog (dropdown), Contact; right CTA
3. [ ] **Hero Section** — Full-width bg image; left: headline + subtext + CTA;
   right: loan calculator form (amount/period selects, name/phone inputs, submit)
4. [ ] **About Section** — Two-column: image with counter overlay (left),
   heading + paragraphs + "Learn More" CTA (right)
5. [ ] **Services Section** — Gray bg; heading; 3 loan type cards (Student,
   Business, Startup) with image + text + "Apply For Loan" button
6. [ ] **Testimonial Section** — Parallax bg; testimonial slider with quotes
   and author names
7. [ ] **Clients/Counter Section** — 2x2 grid with stat counters and images
8. [ ] **How It Works Section** — Heading + service steps/explanation
9. [ ] **FAQ Section** — Gray bg; 4-item accordion
10. [ ] **Footer** — 3-column: logo+contact+social; links; newsletter form;
    copyright bar with Component Dock link
11. [ ] **Tests** — Vitest + RTL for each section component, 100% coverage
12. [ ] **Verification** — `scripts/verify-app.sh finberg` passes

## Design Notes

### Color Palette
- Primary brand: #0BDE8C (green) — all buttons, links, form accents
- Sticky header: #0077FF (blue)
- Headings: #204570 (dark navy)
- Body text: #3F4854
- Section subtitle accent: #A03AF9 (purple) on "span" labels
- Gray sections: #F4F6F9

### Typography
- Headings/nav: "Heebo" (Google Fonts), weights 200–900
- Body: "Open Sans" (Google Fonts), weights 300–800
- Hero heading: 62px bold, white, line-height 1.2
- Section headings: 54px medium

### Layout
- Hero: 950px height, two-column (6/4 split on xl), form card floating right
- About: two-column 6/6 split, image left with counter badge overlay
- Services: 3-column card grid (4/4/4 on lg)
- Clients: 2x2 grid (6/6 on lg)
- FAQ: two-column (6/6) — accordion on right
- Footer: three-column (4/2/3 on xl)

### Key Interactions
- Sticky header transition on scroll (transparent → blue bar)
- Hero form: select dropdowns, text inputs, submit
- Testimonial slider (dot navigation)
- Counter animation (countUp)
- FAQ accordion expand/collapse

### Fidelity Notes
- Original uses Bootstrap 4 grid — recreate with Tailwind utilities
- Slick slider for testimonials — use CSS-based slider or lightweight lib
- Parallax background on testimonial section (background-attachment: fixed)
- Counter numbers animate on scroll into view
- All buttons square (border-radius: 0px) — key visual signature
