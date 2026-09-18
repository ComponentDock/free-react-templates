# ForgePoint — Design Notes & Task Outline

## Source mapping
- **ColorLib source:** Inds (slug: `inds`)
- **Preview URL:** https://preview.colorlib.com/theme/inds/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/inds-free-template.jpg

## Section order (from live preview DOM)

| # | Section | CSS class | Notes |
|---|---------|-----------|-------|
| 1 | Header/Navbar | `.header-area` | Top info bar (phone, email, hours), main nav with logo, links (Home, About, Industries, Works, Blog, Pages, Contact, Element), "Get a Quote" CTA button |
| 2 | Hero Slider | `.slider-area` | Full-width slider with background images, dark overlay, heading "Industrial Solutions!", subtitle, "Our Services" CTA button. Multiple slides with fadeInUp animation. |
| 3 | Services | `.services-area` | 3 service cards in a row: Automotive Manufacturing, Heavy Industry Market, Industry Analysis. Each with icon, title, arrow button. |
| 4 | Safe Industry | `.safe-industery-area` | Two-column layout: left has heading "Safe Industrial Solutions..." + descriptive text + "Our Services" button; right has image + "Our Mission" alert box |
| 5 | Gallery/Works | `.gallery-area` | 4-column grid of 8 project items. Each: image, title "Floride Chemicals Factory", "Read more" link. Hover overlay effect. |
| 6 | Team | `.team-area` | Heading "Our Team Best Members", 4 team member cards. Each: photo, name ("Bruce Roberts"). "Contact Us" button. Social icon hover overlay. |
| 7 | Testimonials | `.testimonial-area` | Carousel of testimonials. Each: quote icon, review text, name ("Jessya Inn"), role ("Co Founder"). Auto-advancing with dots. |
| 8 | Blog | `.david-droga-area` | 2 blog posts side by side. Each: image, date/author info, title, "Read more" link. |
| 9 | CTA | `.wantToWork-area` | Heading "Want To Work With Us? Hit The Button.", "Let's Work Together" white button (hover → orange). |
| 10 | Footer | `.footer-area` | Dark navy background. 4 columns: About Us (logo, description), Contact Info, Photo Gallery, Important Links. Social icons. Bottom bar with copyright. |

## Design token mapping (Tailwind `@theme`)

```css
@theme {
  --color-brand: #f27420;
  --color-brand-dark: #d96418;
  --color-navy: #021a47;
  --color-navy-deep: #00163e;
  --color-text-primary: #0b1c39;
  --color-link: #1696e7;
  --color-gold: #dca73a;
  --color-bg-light: #f7f7f7;
  --color-bg-white: #ffffff;
}
```

## Section-by-section fidelity notes

### Header/Navbar
- Top info bar: phone (+880166 253 232), email (info@domain.com), hours (Mon-Fri 9:00-19:00)
- Main navbar: logo on left, nav links centered/right, "Get a Quote" orange button on right
- Dark navy background on scroll (sticky)

### Hero Slider
- Full-width slider with background images (parallax/static)
- Dark semi-transparent overlay
- Animated text: heading "Industrial Solutions!", subtitle, "Our Services" button
- Multiple slides with auto-advance
- Navigation dots at bottom

### Services
- 3 cards in a row (col-lg-4)
- Each: circular icon, title, short description, arrow icon button
- Cards stretch to equal height

### Safe Industry Solutions
- Two-column layout
- Left: heading, 3 paragraphs of text, "Our Services" button (orange)
- Right: image of industrial scene + "Our Mission" alert box with colored background

### Gallery/Works
- 4-column grid, 2 rows (8 items total)
- Each item: image with hover overlay, title, "Read more" link
- Hover: dark overlay slides up revealing title and link

### Team
- Heading "Our Team Best Members"
- 4 team member cards in a row
- Each: photo, name, social icons on hover
- "Contact Us" orange button below

### Testimonials
- Light background section
- Owl Carousel with testimonials
- Each slide: quote icon (gold #dca73a), review paragraph, founder name, role
- Navigation dots

### Blog
- 2 blog items side by side
- Each: image, date/author meta, title link, "Read more" button
- Hover effects on images

### CTA
- Heading "Want To Work With Us? Hit The Button."
- "Let's Work Together" white button, hover → orange (#f27420)

### Footer
- Dark navy (#00163e) background
- 4 columns: About Us (logo + description), Contact Info (phone, email, address), Photo Gallery, Important Links
- Social media icons
- Bottom bar: copyright + Component Dock link

## Implementation tasks

- [ ] Scaffold `apps/forgepoint/` from simplest existing app
- [ ] Rename package to `@free-react-templates/forgepoint`
- [ ] Set up `public/CNAME` → `forgepoint.free.componentdock.com`
- [ ] Add Barlow + Roboto fonts via Google Fonts `<link>` in `index.html`
- [ ] Configure `@theme` tokens in `src/index.css`
- [ ] Implement `Navbar.tsx` — top info bar, main nav with logo, links, "Get a Quote" CTA
- [ ] Implement `HeroSlider.tsx` — full-width slider with overlay, animated text, CTA, navigation dots
- [ ] Implement `Services.tsx` — 3 service cards with icons and arrow buttons
- [ ] Implement `SafeIndustry.tsx` — two-column layout, heading, text, "Our Services" button, mission box
- [ ] Implement `Gallery.tsx` — 4-column grid of 8 project items with hover overlays
- [ ] Implement `Team.tsx` — 4 team member cards with hover social icons, "Contact Us" button
- [ ] Implement `Testimonials.tsx` — carousel with quotes, names, roles
- [ ] Implement `Blog.tsx` — 2 blog cards with images, meta, titles, "Read more" links
- [ ] Implement `CtaSection.tsx` — heading, "Let's Work Together" white button
- [ ] Implement `Footer.tsx` — 4-column layout, social icons, copyright with Component Dock link
- [ ] Compose all sections in `App.tsx`
- [ ] Write Vitest tests for every component (100% coverage)
- [ ] Run `scripts/verify-app.sh forgepoint` — typecheck + lint + test:coverage + build
- [ ] Update `docs/templates/forgepoint/` README with status
- [ ] Run `npm run readme:status` at repo root
- [ ] Commit and push to main
