# Stately — Design Notes & Tasks

Source: ColorLib "Stodeo" → https://preview.colorlib.com/theme/stodeo/
New name: `stately`
App path: `apps/stately`
Spec: `openspec/specs/template-stately/spec.md`

## Section Order (from preview)

1. **Navbar** — logo "Stately", desktop links (Home, Why Stately [dropdown],
   Our Services, Gallery, About, Contact Us), hamburger for mobile
2. **Hero** — centered: subheading "Welcome To Our Site", heading
   "We have the best solution for your business to grow.", paragraph,
   "Get started" pill button
3. **Welcome** — split: image left, dark blue box (#133ea1) right with text
   - "About us" outline button with arrow
4. **Why Choose Us** — sidebar: counters (12 years, 34 team members) +
   "Why Stately" button; main: "Why Stately?" heading + paragraph + 4 feature
   cards (Web Design, Web Dev, Branding, Graphic Design) in a row
5. **Grow Your Business** — split: image left, dark background right with
   heading "Grow your business" + 2 service items (icon + title + desc)
6. **Recent Blog Posts** — heading "Recent Blog Posts" + 3 post-entry cards
   (date, title, excerpt, "Read more" link) in 3 columns
7. **Why Us** — left: "Why Are We Awesome?" heading, excerpt, 4 service-v2
   items (Photography, Find it here, Inspire Photography, Fly Your Dreams);
   right: image
8. **Testimonials** — centered "Happy Clients" heading, slider of testimonial
   cards (avatar, quote, name, title)
9. **Footer** — "About Stately", social icons, nav links, services links,
   contact info

## Design Tokens

- Primary brand: `#3369e7` (buttons, footer links)
- Dark accent: `#133ea1` (welcome box, grow-business box background)
- Highlight: `#00aaff` (counter numbers, outline button borders)
- Body text: `#222`
- Muted text: `#777` / `#888`
- Footer bg: `#efefef`
- Social circles: 30px, `#777` bg, white icons
- Font: Noto Sans JP (Google Fonts)
- Buttons: pill (border-radius 30px), primary = #3369e7, outline = transparent
  with #00aaff border
- Section padding: 7rem top/bottom
- AOS: fade-up, fade-right with staggered delays

## Implementation Tasks

1. **Copy base app** — duplicate simplest existing app (e.g. `apps/aurora`),
   rename to `stately`, update package name to `@free-react-templates/stately`
2. **Set up index.html** — add Google Fonts link for Noto Sans JP
3. **Set up index.css** — define `@theme` with brand tokens:
   `--color-brand: #3369e7`, `--color-dark: #133ea1`, `--color-highlight: #00aaff`
4. **Navbar component** — desktop nav with dropdown for "Why Stately",
   mobile hamburger toggle, site name "Stately"
5. **Hero component** — centered layout, subheading, heading, paragraph,
   primary pill button
6. **Welcome component** — split layout: image left, dark box right with text
   - outline button
7. **WhyChooseUs component** — sidebar counters + 4 feature cards in a row
8. **GrowYourBusiness component** — split layout: image + dark box with
   2 service items
9. **BlogPosts component** — 3 post-entry cards in 3-column grid
10. **WhyUs component** — 4 service-v2 items in 2x2 grid + image
11. **Testimonials component** — slider with avatar, quote, name, title
12. **Footer component** — "About Stately", social icons, nav/services links,
    contact info, Component Dock attribution
13. **Tests** — 100% coverage per component with Vitest + Testing Library
14. **Verify** — run `scripts/verify-app.sh stately`

## Fidelity Notes

- Original uses Bootstrap 5 grid; recreate with Tailwind utilities
- Original uses AOS for scroll animations; add CSS-based fade-in or framer-motion
- Original uses icomoon + flaticon fonts; use lucide-react icons instead
- Counter numbers: animate on scroll with countup effect
- Testimonial slider: use a simple CSS carousel or state-based carousel
- Footer social icons: round circles with background color
- Dropdown menu on "Why Stately": implement as hover/click dropdown
