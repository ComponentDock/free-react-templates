# Acumen — Implementation Tasks & Design Notes

**Source:** ColorLib Classic (https://colorlib.com/wp/template/classic/)
**Preview:** https://preview.colorlib.com/theme/classic/
**New name:** acumen
**Deploy:** https://acumen.free.componentdock.com

## Section Order (replicate 1:1)

1. Navbar
2. Hero / Header
3. About (tabbed)
4. Services (6 cards)
5. Skills / Progress Bars
6. Portfolio (filterable)
7. Team (4 members)
8. Pricing (Monthly/Yearly toggle)
9. Blog (1 featured + 3 side)
10. Counter Stats (animated)
11. Contact (form + map)
12. Footer

## Fidelity Notes

### Navbar

- Sticky top, transparent over hero, darkens on scroll
- Logo text: "Acumen" (replace ColorLib branding)
- Nav links: Home, Services, Portfolio, Team, Price, Blog, Contact
- Search icon toggle, user icon
- Mobile: hamburger collapse menu

### Hero

- Full-width background image (use picsum.photos/seed/acumen-hero/1920/800)
- Dark overlay: `rgba(0,0,0,0.4)`
- Headline: "We Are Provide Creative Business"
- Subtitle about business solutions
- CTA: pill button "Contact Now" with gradient `#a1c4fd → #c2e9fb`
- Blue gradient dot accent beside headline

### About

- Two-column layout
- Left: tabbed content (Our Mission / Our Vision / Our Support)
- Each tab: image (picsum.photos) + paragraph + "View More" button
- Tab switcher: clickable tab headers, active state with gradient underline
- Right: complementary content or image

### Services

- 6-card grid (3x2 on desktop, 2x3 on tablet, 1x6 on mobile)
- Each card: icon (lucide-react), title, short description, "Read More" link
- White cards on light gray section background

### Skills

- Gray background section (`.gray-bg`)
- 6 horizontal progress bars with animated fill
- Labels: Web Design (95%), Coding (85%), Developing (90%), Java Script (95%), Apps Design (85%), Graphics (90%)
- Animate on scroll into view (use IntersectionObserver)

### Portfolio

- Filter tabs: All, Graphics, UI/UX, Web Design, Coding, Developing
- Masonry/grid of portfolio images (picsum.photos/seed/acumen-port-N/)
- Hover overlay with title
- Filter animation: smooth transition between filtered sets

### Team

- 4 team member cards in a row
- Each: circular photo (picsum.photos/seed/acumen-team-N/), name, role
- Hover: social icon overlay (Facebook, Twitter, LinkedIn, Instagram from lucide-react)
- Members: Roberto Peo (SEO Expert), Jhon Doe (Web Developer), Jakia Khan (UI/UX Designer), Jack Kalis (Programmer)

### Pricing

- Monthly / Yearly tab toggle at top
- 4 pricing cards in a row: Basic ($10), Premium ($50), Business ($80), Ultimate ($100)
- Center card (Premium) has gradient border highlight
- Each: tier name, price with "/ Month" or "/ Year", 4 feature items, "Purchase Now" button
- Button: pill shape with gradient, hover outline

### Blog

- "Latest Blog" heading
- 1 featured post: large card with image, date, title, excerpt, "Read More"
- 3 smaller side posts: horizontal cards with image, date, title, excerpt
- Blog images from picsum.photos/seed/acumen-blog-N/

### Counter Stats

- Dark background band (full-width)
- 4 counters with icons: Project Complete (1172), Happy Clients (1000), Total Clients (1200), Winning Awards (1172)
- Animated count-up on scroll into view

### Contact

- Two-column layout
- Left: contact form (Name, Email, Subject, Message textarea, "Send Now" button)
- Right: address block (160 Link Road, Dhaka-1216), phone (+00) 99 33 247, email
- Map placeholder (div with gray background)

### Footer

- Dark background
- Left: logo "Acumen", short description, email subscription input
- Center: 3 link columns (Company, Resources, Solutions)
- Bottom: copyright with Component Dock link

## Design Token Mapping (Tailwind)

```css
@theme {
  --color-acumen-primary: #a1c4fd;
  --color-acumen-primary-light: #c2e9fb;
  --color-acumen-text: #4f4f4f;
  --color-acumen-text-muted: #898989;
  --color-acumen-bg: #ffffff;
  --color-acumen-bg-light: #f9f9f9;
  --color-acumen-border: #e8e8e8;
  --color-acumen-overlay: rgba(0, 0, 0, 0.4);
}
```

## Component List

- `src/components/Navbar.tsx`
- `src/components/Hero.tsx`
- `src/components/About.tsx`
- `src/components/Services.tsx`
- `src/components/Skills.tsx`
- `src/components/Portfolio.tsx`
- `src/components/Team.tsx`
- `src/components/Pricing.tsx`
- `src/components/Blog.tsx`
- `src/components/Counter.tsx`
- `src/components/Contact.tsx`
- `src/components/Footer.tsx`
