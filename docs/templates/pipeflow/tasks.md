# Pipeflow — ColorLib Plumber Recreation

## Task Outline

1. **Scaffold** — Copy simplest existing app (e.g. amber), rename to pipeflow
2. **Components** — Build 11 section components:
   - Navbar (sticky, dark, mobile hamburger menu)
   - Hero (dark overlay, heading, CTA)
   - QuoteSection (two-column, highlighted words)
   - Services (3 hexagon-icon cards)
   - Features (image + 4 feature cards)
   - Counters (4 stat cards with animated numbers)
   - VideoSection (dark bg, heading, watch link)
   - CTA (dark bg, heading, button)
   - Testimonials (3 cards with avatar, quote, author)
   - ContactForm (name, email, message, submit)
   - Footer (about, newsletter, social, Component Dock link)
3. **Tests** — TDD: write tests first for each component, then implement
4. **Verify** — Run scripts/verify-app.sh pipeflow
5. **PR** — Push branch, create PR, merge immediately

## Design Notes

### Source

- ColorLib Plumber: https://colorlib.com/wp/template/plumber/
- Preview: https://preview.colorlib.com/theme/plumber/

### Tokens

- Font: Poppins (Google Fonts), weights 300-700
- Brand: #f53f51 (vivid red/pink)
- Dark bg: #04091e (deep navy)
- Light bg: #f9f9ff (off-white/lavender)
- Headings: #222
- Body text: #777
- Button: pill radius 50px, solid brand, transparent hover + white border
- Section spacing: 120px vertical padding

### Sections (in order)

1. Navbar — sticky, dark transparent → solid on scroll
2. Hero — dark overlay bg, "We're your plumber", CTA
3. Quote — two columns, "Plumbing" + "Nowhere" highlighted
4. Services — 3 cards: Maintenance, Residential, Commercial (hexagon icons)
5. Features — image left + 4 cards right: Multiple Layouts, Clean Coding, Endless Features, Fully Customizable
6. Counters — 2536 Happy Clients, 6784 Total Projects, 1059 Cups Coffee, 12239 Tickets Submitted
7. Video — dark bg, "Explore ourselves in a new way", Watch Video link
8. CTA — dark bg, "Got Impressed to our features", Get a free Quote
9. Testimonials — 3 cards, Mark Alviro Wiens, CEO at Google
10. Contact — map left, form right (name, email, message, Send Message)
11. Footer — About Us, Newsletter, Social, copyright, Component Dock link

### Provenance

This template recreates ColorLib "Plumber". All provenance lives in the spec
and TEMPLATES.md only — no ColorLib references in app source code.
