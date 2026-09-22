# WellPilot — Implementation Notes

## Source
- ColorLib slug: `healthcoach`
- Preview URL: https://preview.colorlib.com/theme/healthcoach/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/healthcoach-free-template.jpg

## Section Order (fidelity 1:1)

| # | Section | Component | Notes |
|---|---------|-----------|-------|
| 1 | Top Bar | `TopBar.tsx` | Blue bg `#006fdc`, phone + email + social icons |
| 2 | Navbar | `Navbar.tsx` | Dark bg, brand "WellPilot" + leaf icon, 8 links, sticky |
| 3 | Hero Slider | `Hero.tsx` | Full-height, 3 slides, dark overlay, 2 CTAs per slide |
| 4 | Services | `Services.tsx` | 3 cards, image + heading + desc + outline button |
| 5 | About | `About.tsx` | Split: left image, right text + founder card |
| 6 | Consultation | `Consultation.tsx` | 3-col: services CTA, form, info panel |
| 7 | Testimonials | `Testimonials.tsx` | OwlCarousel-style, 5 testimonial cards |
| 8 | Counter | `Counter.tsx` | 4 stats, parallax bg |
| 9 | Pricing | `Pricing.tsx` | 3-4 cards, prices, feature lists, CTAs |
| 10 | Blog | `Blog.tsx` | 3 cards, image + meta + title |
| 11 | Footer | `Footer.tsx` | Subscribe form, 5 cols, dark bg `#131719`, green `#a3cb4c` accent |

## Design Token Mapping (ColorLib → Tailwind @theme)

```
--color-brand-primary: #1089ff;    /* blue — links, subheadings, consultation left */
--color-brand-secondary: #006fdc;  /* dark blue — top bar, hero, consultation form */
--color-brand-dark: #131719;       /* near-black — footer bg */
--color-brand-accent: #a3cb4c;     /* green — footer logo span */
--color-brand-white: #ffffff;      /* hero text, CTA buttons */
--color-btn-primary: #007bff;      /* Bootstrap primary */
--color-btn-hover: #0069d9;        /* Button hover */
--color-section-light: #f7f7f7;    /* Alt section bg */
--color-text-dark: #212529;        /* Body text */
--color-text-muted: #6c757d;       /* Secondary text */
```

## Replication Fidelity Notes

### Top Bar
- Flat blue `#006fdc`, white text at 12px, social icons are Font Awesome 4 → replace with Lucide
- Two-column layout: left = contact info, right = social icons

### Navbar
- Dark bg, brand text "WellPilot" with green leaf icon (lucide-react `Leaf`)
- Links: Home, About, Coach, Pricing, Services, Stories, Blog, Contact
- Becomes sticky on scroll with slight shadow

### Hero Slider
- 3 slides with full-height background images (use `picsum.photos/seed/wellpilot-hero-N`)
- Dark overlay `rgba(0,0,0,0.5)` via absolute-positioned div
- Headline (40px, bold, white) + subheadline (15px, blue `#1089ff`) + 2 buttons
- Auto-cycling slider (interval ~5s) — use simple state + useEffect

### Services
- 3 cards, centered, with background images in a rounded container
- Each: image → heading → description → "Read more" outline button
- Buttons: `btn-primary btn-outline-primary` → Tailwind outlined blue

### About
- 5/7 column split (image left, text right)
- Subheading "Welcome to WellPilot" in blue
- Two paragraphs of descriptive text
- Founder card: circular photo + name + "Personal Dietitian" position

### Free Consultation
- 3-column layout (not grid)
- Left: `#1089ff` bg, "Healthcare Services" heading, "See Services" CTA (white text, uppercase, letter-spacing)
- Center: form on `#006fdc` bg — First Name, Last Name, Service dropdown, Date, Time, Message
- Right: additional info panel
- Form inputs: white bg, no border-radius on left side

### Testimonials
- Light gray `#bg-light` section background
- Carousel with 5 cards, each: circular user photo, quote icon (FA quote-left), quote text, name, position
- Use state-based carousel (no Owl dependency)

### Counter
- Parallax background image (use `picsum.photos/seed/wellpilot-parallax`)
- 4 columns with animated counters
- Numbers: large white text, label below

### Pricing
- Light gray `#bg-light` section
- 3-4 cards with: plan name, excerpt, large price ($XX), feature list with checkmarks, "Get Started" button
- Cards: Basic $49, Standard $79, Premium $109

### Blog
- 3 cards in a row
- Each: image container (rounded), meta bar (date, author, comment count with FA icon), title
- Image uses `picsum.photos/seed/wellpilot-blog-N`

### Footer
- Dark `#131719` background
- Newsletter subscribe form at top (centered, email input + "Subscribe" button)
- 5-column layout: Logo + description | Services | About | Resources | Social
- Logo text "WellPilot" with green `#a3cb4c` accent on "Pilot" span
- "Component Dock" attribution link (replaces any external links)
