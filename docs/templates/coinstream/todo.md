# Coinstream — Prep Notes & Implementation Outline

**Source:** ColorLib Coinbuzz (https://colorlib.com/wp/template/coinbuzz/)
**Preview:** https://preview.colorlib.com/theme/coinbuzz/coinbuzz/index.html
**New Name:** coinstream
**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

---

## Section-by-Section Design Notes

### 1. Navbar
- **Top bar:** Logo left, contact info (phone, fax, email, website) center, social icons right. Background: dark (#242424). Text: white.
- **Main nav:** Logo left, nav links center-right (Home with dropdown, About, Pages with dropdown, Blog with dropdown, Contact), "GET A QUOTE" button right (orange bg, white text, uppercase). Background: white.
- **Mobile:** Hamburger menu (3 bars) on the right. Responsive dropdown uses metisMenu-style expand/collapse.

### 2. Hero / Slider
- Full-width image slider with overlay text centered.
- Heading: "We Are [Everyone's] [Brand] Agency" — the span word gets orange background highlight (`#ff7700`, inline padding).
- CTA button: orange bg, white text, uppercase, 15px 30px padding, 2px radius. Hover: transparent bg + orange text.
- Dots navigation at bottom.

### 3. Featured
- 3-column grid: image (full width of card) + title + description.
- Cards have no visible border-radius (sharp corners).
- Background: white.

### 4. Bitcoin Info (Featured Content)
- Split: large image left (hidden on mobile), text content right.
- Orange subtitle "WHAT IS BITCOIN" above main heading.
- Body text paragraph + orange "JOIN US NOW" CTA button.
- Background: `#f4f4f4` (light gray).

### 5. Services
- Section title "Why Choose Bitcoin" centered with decorative underline image.
- 3 service cards in a row: icon + heading + paragraph + list items with check icons.
- Background: white.

### 6. About
- Split: image left (hidden on mobile), text content right.
- Heading + description paragraph.
- 4 stat counters in a row: icon + number (animated counter) + label.
- Background: light gray image overlay.

### 7. Testimonials
- Carousel: each slide has avatar (circular, white border) left, content right (name, 5-star rating, quote text, quote icon).
- Background: white.

### 8. Special Quote
- Full-width dark parallax background image.
- Italic Open Sans heading, centered.
- Two columns of checkmark list items.

### 9. Market Resources
- "Our Market Resource" centered title with decorative underline.
- Left: 2-column grid of 10 crypto pair cards (pair name + value), each card with `#f4f4f4` background, dark text, 2px radius.
- Right: CanvasJS line chart (or chart library equivalent).
- Background: `#f4f4f4`.

### 10. Expert CTA
- Dark parallax background image.
- Content right-aligned: italic heading, description paragraph, "More About" link.
- Decorative image left (hidden on mobile).

### 11. Contact
- Dark parallax background image.
- Form right-aligned: "Request A Call Back" heading, 2-column form (Name, Email, Phone, Subject) + full-width textarea + "Submit Now" button.
- Button: white bg, orange text, uppercase, transparent on hover.
- Decorative image left (hidden on mobile).

### 12. Team
- "Our Experts Team" centered title with decorative underline.
- 4-column cards: photo (with overlay gradient), name, role, social icons (Facebook, Twitter, Google+, LinkedIn).
- Social icons on dark background strip below photo.

### 13. Investments CTA
- Dark parallax background image.
- Left content: italic heading "Need to take care of your Currency Investments", description, two buttons ("View Services" orange outline, "Contact Us" white).
- Right: decorative illustration (hidden on mobile).

### 14. Blog
- "Latest Our News" centered title with decorative underline.
- 3-column cards: image, title link, meta (author, date, category), description, "Read More" link (uppercase, bold).
- Background: white.

### 15. Footer
- Dark parallax background image (same as expert/investment bg).
- 4-column top: (1) Logo + email subscribe form, (2) "Our Services" link list, (3) "Twitter Feeds", (4) "Contact Information" + social icons.
- Bottom bar: copyright text, border-top separator.
- Footer MUST link to `https://www.componentdock.com/`.

---

## Implementation Task Outline

- [ ] Copy simplest existing app, rename to `coinstream`, update package.json
- [ ] Set up `src/index.css` with Tailwind + theme tokens (brand orange `#ff7700`, dark `#242424`, light `#f4f4f4`)
- [ ] Write `src/App.tsx` composing all 15 sections in order
- [ ] Build components: Navbar, HeroSlider, Featured, BitcoinInfo, Services, AboutStats, Testimonials, SpecialQuote, MarketResources, ExpertCTA, ContactForm, Team, InvestmentsCTA, Blog, Footer
- [ ] Write tests (100% coverage) for each component
- [ ] Verify: `npm run spec:validate`, `scripts/verify-app.sh coinstream`
