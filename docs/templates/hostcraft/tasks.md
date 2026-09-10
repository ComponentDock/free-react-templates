# Hostcraft — Implementation Tasks & Design Notes

**Source:** ColorLib Cohost (slug: `cohost`)
**Preview:** https://preview.colorlib.com/theme/cohost/
**New name:** Hostcraft → `apps/hostcraft`

---

## Section Order (top to bottom on homepage)

1. Navbar (dark/responsive, logo + links + CTA)
2. Hero (illustration + text overlay, 750px height)
3. Domain Search (heading + form + prices)
4. Why Choose Us (6 service cards, alternating icon layout)
5. Counter Stats (purple bg, 4 animated numbers)
6. Main Services (illustration + 2x2 bordered cards)
7. Pricing (4 pricing tier cards)
8. Testimonials (Owl Carousel of customer quotes)
9. How It Works (tabbed: 3 tabs with illustration + text)
10. Recent Blog (3 blog cards)
11. Partners (5 logo images)
12. Footer (CTA banner + 4-column info + copyright)

---

## Section-by-Section Fidelity Notes

### Navbar

- Transparent background on desktop, dark (#000) on mobile
- Logo: text "Hostcraft" (white on mobile, black on desktop)
- Nav links: uppercase, 13px, weight 500, letter-spacing 1px
- Links: Home, About, Domain, Hosting, Blog, Contact
- CTA button: purple border (#6927ff), white text, 5px radius
- Nav link hover: purple (#6927ff) on desktop
- Use React state for mobile toggle

### Hero

- Full-height: 750px, split layout
- Left 60%: illustration image (isometric workspace scene)
- Right/overlapped 40%: text content
- Subheading: "Isometric Hosting" — purple (#6927ff), 14px, weight 700, uppercase, letter-spacing 4px
- Heading: "Design, Development, Hosting" — 60px, weight 700, line-height 1.2
- Paragraph: descriptive text
- Button: "Get in touch" — primary btn (blue #007bff, 5px radius, white text)
- Use `https://picsum.photos/seed/hostcraft-hero/1200/750` as fallback illustration background

### Domain Search

- Light background section
- Two-column: left = "Search Your Domain Name" heading + description; right = form
- Form: text input + select dropdown (.com, .net, .biz, .co, .me) + "Search" button
- Price list below form: .com $9.75, .net $9.50, .biz $8.95, .co $7.80, .me $7.95
- Use React state for select dropdown (nice-select replacement)

### Why Choose Us (Features)

- Light bg (#f8f9fa), centered heading
- 6 service cards in 3x2 grid (col-md-6)
- Alternating layout: odd cards = icon right, text right-aligned; even cards = icon left, text left
- Services: Super Fast Server, Daily Backups, Technical Services, Secure and Reliable, DNS Control, 24/7 Support
- Icons: use lucide-react (Cloud, Server, Headphones, Shield, Globe, Settings)
- Each card: flex row with icon + media body (h3 heading + p description)

### Counter Stats

- Full-width purple background (#6927ff)
- Subheading: "More than 12,000 websites trusted hosted" (white)
- 4 stat columns: CMS Installation (12000), Awards Won (100), Registered Domains (10000), Satisfied Customers (9000)
- Numbers: 40px, weight 700, white
- Labels: 16px, rgba(255,255,255,0.7)
- Use React state + useEffect for animated counter on scroll (intersection observer)

### Main Services

- White bg
- Two-column: left = illustration + "Our Main Services" heading + description; right = 2x2 grid
- Service cards: Cloud VPS, Share, VPS, Dedicated
- Each card: border, centered text, icon + h3 + p
- Use `https://picsum.photos/seed/hostcraft-services/600/400` as illustration

### Pricing

- Light bg (#f8f9fa), centered heading "Our Best Pricing"
- 4 cards in a row (col-lg-3 col-md-6): Free ($0), Startup ($19), Premium ($49), Pro ($99)
- Card structure: plan name (uppercase, 14px, weight 600) → price ($XX/mo, 50px, weight 700) → excerpt → feature list → "Choose Plan" button
- Cards: white bg, 30px padding, sharp corners
- Feature list: bullet-less, muted text (#b3b3b3), bold values

### Testimonials

- White bg, centered heading
- Owl Carousel replacement: use CSS snap scroll or simple React carousel
- Each card: circular avatar image, quote icon, quote text, name (bold), position
- Avatars: use `https://i.pravatar.cc/150?img=N` for person images
- 5 testimonial entries with different positions (Marketing Manager, Interface Designer, UI Designer, Web Developer, System Analyst)

### How It Works (Tabbed)

- Light bg, centered heading "How it works"
- 3 pill-shaped tabs: "Next gen VPS", "Performance", "Effectiveness"
- Each tab panel: illustration (left) + text content (right) with heading + paragraphs + "Get in touch" button
- Tab switching via React state
- Tab pills: rounded, border, active state styling

### Recent Blog

- Light bg, centered heading "Recent Blog"
- 3 blog cards (col-md-4): background-image thumbnail (275px height, rounded top 50px) + meta sidebar + heading
- Meta: date, author, comment count (vertical stack)
- Blog heading: 20px
- Use `https://picsum.photos/seed/hostcraft-blog-1/400/275` etc.

### Partners

- Simple row of 5 placeholder partner logos
- Use text-based placeholder logos or generic shapes
- Light opacity for partner images

### Footer

- Dark background (#333333), generous padding
- CTA banner at top (inside footer, not separate section):
  - Left: "Get an easy quote" subheading + "Sign Up For Web Hosting Today!" heading (30px)
  - Center: "Starting at Only" + "$4.50/mo" price
  - Right: "Get started now" primary button
- 4-column grid:
  1. Brand widget (purple #6927ff bg, 20px radius): "Hostcraft" heading + description + social icons (Twitter, Facebook, Instagram)
  2. Useful Links: Servers, Windows Hosting, Cloud Hosting, OS Servers, Linux Servers, Policy
  3. Navigational: Home, Domain, Hosting, About, Blog, Contact
  4. Office: address, phone, email with icons
- Copyright: "All rights reserved | Made with Component Dock" linking to https://www.componentdock.com/

---

## Component Outline

```
apps/hostcraft/
  src/
    main.tsx              — entry point
    App.tsx               — composes all sections
    index.css             — Tailwind entry + @theme tokens
    components/
      Navbar.tsx          — responsive dark navbar with mobile toggle
      HeroSection.tsx     — illustration + text overlay
      DomainSearch.tsx    — search form + price list
      WhyChooseUs.tsx     — 6 service cards grid
      CounterStats.tsx    — animated counters on purple bg
      MainServices.tsx    — illustration + 2x2 service grid
      PricingCards.tsx    — 4 pricing tier cards
      Testimonials.tsx    — customer quotes carousel
      TabbedServices.tsx  — 3-tab service showcase
      RecentBlog.tsx      — 3 blog cards
      PartnerLogos.tsx    — partner logo row
      Footer.tsx          — CTA banner + 4-col footer
    test/
      setup.ts            — vitest setup (jest-dom import)
```

---

## Dependencies

- No new packages needed — lucide-react icons, Tailwind utilities, React state for tabs/mobile toggle
- Replace Owl Carousel with CSS snap scroll or simple React carousel component
- Replace nice-select with native HTML select + Tailwind styling
- Use `packages/ui` components (Button, ButtonLink, cn) where applicable
