# Creativity — Design Notes

**Source:** ColorLib "Design" → https://colorlib.com/wp/template/design/
**Preview:** https://preview.colorlib.com/theme/design/
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/design-free-template.jpg

## Structure Order

1. Navbar
2. Hero (split: text left, image right)
3. Achievements (4 stat cards)
4. How It Works (3 steps with SVG arrows)
5. Services (split: text left, image right)
6. Testimonials (carousel)
7. Blog Entries (5 cards)
8. Footer (About + social + nav links + copyright)

## Section-by-Section Fidelity Notes

### Navbar
- Logo text left-aligned, nav links centered, CTA button right
- Desktop: horizontal links with dropdown support (nested 2 levels)
- Mobile: burger menu with slide-in panel
- CTA button: pill-shaped (#1264fa blue bg, white text)

### Hero
- Two-column (col-lg-5 left, col-lg-6 right)
- Left: h1 headline, paragraph, "Get Started" btn-primary, then 2 feature cards (6-col each) with icon-wrap circular icons
- Right: hero image with decorative `::before` pseudo-element background (#dae1e7), overlaid quote card (dark navy bg #000839, white text, rounded, positioned bottom-left of image)
- Quote card has blockquote text + author name + role

### Achievements
- 4 stat cards in a row (col-lg-3 each)
- Each: large bold number, h4 heading, short description
- No background color (white page bg)
- Subtle fade-up animations

### How It Works
- Centered section title with "How it works" subtitle + description paragraph
- 3 step cards (col-md-4 each)
- Each: icon-wrap circle, h3 with number prefix ("1. Create an account"), description
- Steps 1→2 and 2→3 connected by dashed curved SVG arrows (stroke #979797)

### Services
- Two-column (col-lg-4 left, col-lg-6 right)
- Left: "Services" subtitle, h2 heading, paragraph, checklist (3 items with check icons), "Get Started" btn
- Right: image with dotted background decoration (::before with dotted.png pattern)
- Section bg: #f8f9fa (light gray)

### Testimonials
- Centered carousel (owl-carousel style, use a React carousel)
- Each card: circular person image (border-radius 50%), blockquote, author h3 name + role
- Light/white background, padding 70px 0

### Blog Entries
- Centered section title: "Blog" subtitle, "Latest Blog Posts" heading
- 5 blog post cards in a row (responsive: 2-col on mobile, 3 on md, 5 on lg)
- Each: date span, h3 link, description paragraph
- Cards: bg #ffffff, border-radius 20px, subtle shadow
- Text: rgba(0, 8, 57, 0.5) for descriptions, #000839 for headings

### Footer
- Dark/white bg (no explicit bg color set — inherits white)
- Two-column: col-lg-4 left (About + social), col-lg-6 right (3 col nav links)
- Social icons: 50×50 rounded square tiles (border-radius 10px, bg #f8f9fa, hover → #1264fa)
- Navigation: 3 columns of link lists
- Copyright: centered text with Component Dock link replacing Colorlib attribution

## Implementation Tasks

- [ ] Set up `apps/creativity` workspace (copy simplest existing app)
- [ ] Configure Tailwind theme tokens (Montserrat, #1264fa brand, etc.)
- [ ] Build Navbar component (with mobile menu)
- [ ] Build Hero component (split layout, feature cards, quote overlay)
- [ ] Build Achievements component (4 stat cards)
- [ ] Build HowItWorks component (3 steps with SVG arrows)
- [ ] Build Services component (split layout, checklist)
- [ ] Build Testimonials component (carousel)
- [ ] Build BlogEntries component (5 cards)
- [ ] Build Footer component (about, social, nav links, copyright)
- [ ] Compose App.tsx with all sections in order
- [ ] Write tests for each component (100% coverage)
- [ ] Verify: typecheck, lint, tests, build
