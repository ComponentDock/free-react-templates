# Officina — Implementation TODO

**Source:** ColorLib Bizpro (https://colorlib.com/wp/template/bizpro/)
**Preview:** https://preview.colorlib.com/theme/bizpro/
**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section implementation order

1. [ ] Project scaffolding (copy simplest app, rename package, configure vite)
2. [ ] Navbar component (sticky, transparent → solid on scroll, hamburger)
3. [ ] Hero section (fullscreen bg image, centered h1 + h6)
4. [ ] About section (4-column, round-border colored icons, h5 titles)
5. [ ] Services section (3x2 grid, icon + h6 + paragraph cards)
6. [ ] Portfolio section (filter toolbar + 3x3 gallery grid + hover overlay)
7. [ ] CTA banner (bg image, dark overlay, h3 text, link button)
8. [ ] Team section (3 circular avatars, names, roles, social icons)
9. [ ] Clients testimonial slider (quotes, names, nav dots/arrows)
10. [ ] Pricing section (3 tiers, feature lists, highlighted premium)
11. [ ] Blog section (3 cards: thumbnail, date, title, excerpt, read more)
12. [ ] Contact section (info + map + form with name/email/subject/message)
13. [ ] Footer (dark bg, colored social icons, Component Dock link)
14. [ ] Tests (100% coverage for all components)
15. [ ] Responsive pass (mobile hamburger, stacked grids, text scaling)
16. [ ] Final verification (verify-app, visual diff, behavior check)

## Design notes

### Section order and fidelity
- Match the exact section order from the original: Navbar → Hero → About →
  Services → Portfolio → CTA Banner → Team → Clients → Pricing → Blog →
  Contact → Footer
- The original navbar has 11 links including "Blog Details" and "Skill"
  which are secondary; the recreation can simplify to the primary 8-9 links
  while keeping the same visual style

### Hero section
- Original uses Revolution Slider with 3 slides (video/parallax backgrounds)
- Recreation: single hero with a picsum background image
- Text: "HELLO WE'RE Officina" (h1, white, large) + subtitle (h6, white)
- Full viewport height, vertically centered text

### About section
- 4 feature boxes in `col-lg-3 col-md-3 col-sm-6` layout
- Round-border icons: `border-radius: 50%`, colored backgrounds cycling
  through: coral #d73e4d, blue #007ab9, teal #179680, gold #d6973d
- Hover: icon bg transitions, icon color becomes white
- H5 titles: Web Development, Photography, Digital Media, Online Marketing

### Services section
- 6 cards in 3x2 grid (`col-lg-4 col-md-4 col-sm-6`)
- Each: icon + h6 title + paragraph text
- White card backgrounds with subtle shadows

### Portfolio section
- MixItUp-style filtering (recreate with React state + CSS transitions)
- Filter tabs: All, Web Design, Photography, Web Development, Online Marketing,
  Digital Media, Support
- 3x3 grid of project cards with placeholder images (picsum)
- Hover overlay: dark semi-transparent bg + title + icon

### CTA banner
- Full-width bg image with `rgba(0,0,0,0.8)` overlay
- Centered h3: "We Create Creative & Best Unique Design"
- "Meet our Team" button/link

### Team section
- 3 member cards in a row
- Circular avatar (50% radius), name (h4), role (h6), social icons
- Social icon backgrounds: each a different brand color

### Clients section
- Owl Carousel-style slider (recreate with React: auto-play, dots/arrows)
- Client quote, client name (h6)

### Pricing section
- 3 tiers: Basic $9.99, Advanced $39.99, Premium $59.99
- Each: tier name, tagline, price, feature list (3 items), CTA button
- Premium column highlighted with brand color accent

### Blog section
- 3 cards in a row: thumbnail image, date, title, excerpt, "Read More"
- Placeholder images from picsum

### Contact section
- 3-column layout: Contact Info | Map | Send Message form
- Form fields: name, email, subject, message textarea, submit button
- Form prevents default, shows success message on submit

### Footer
- Dark background #1e1e1e
- Social media icons, each in a different brand color:
  blue #007ab9, coral #d73e4d, teal #179680, gold #d6973d,
  pink #ff3ba4, orange #faaa5e
- Copyright text + Component Dock link

### Design tokens summary
- Font: Raleway (Google Fonts)
- Primary blue: #007ab9
- Coral: #d73e4d / #d8545d
- Teal: #179680
- Gold: #d6973d
- Dark bg: #1e1e1e
- Light bg: #f9f9f9
- Border radius: 5px (cards), 50% (icons/avatars), 15px (large rounded)

### Component reuse from packages/ui
- Button / ButtonLink for CTAs and form submissions
- cn() for all class composition
- Consider a shared Card compound component for service/portfolio/team cards
