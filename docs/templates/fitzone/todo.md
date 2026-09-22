# FitZone — Design Notes & Task Outline

**Source:** ColorLib Gutim (https://colorlib.com/wp/template/gutim/)
**Preview:** https://preview.colorlib.com/theme/gutim/
**New name:** FitZone (`apps/fitzone`, `@free-react-templates/fitzone`)

## Section order (top to bottom)

1. Header/Navbar — transparent, over hero, logo left, nav right, "Sign Up Today" CTA
2. Hero — full-height bg image, "FITNESS ELEMENTS" subtitle, "BMI CALCULATOR" heading, description, "Read More" CTA
3. About — split: image with play button overlay | "Story About Us" text + "Read More" CTA
4. Services — full-width split: tall image left | 4 service cards (2×2 grid) on dark background right
5. Classes — carousel of class cards with bg images, instructor names, dot navigation
6. Banner — dark bg, text left, person image right, "Contact Now" CTA
7. Membership Plans — 3 pricing cards (Basic $17, Standard $57, Premium $98), gradient headers
8. Register — form (First Name, Email, Last Name, Mobile) + "Get Started" button | image right
9. Blog — 3-column blog cards with images, dates, tags, titles
10. Footer Banner — 2 side-by-side cards with bg images ("New member / 7 days" | "Contact us / phone")
11. Footer — 3 contact columns, subscribe section with bg image, copyright, social links

## Component breakdown

| Component | File | Notes |
|-----------|------|-------|
| Navbar | `Navbar.tsx` | Transparent fixed, logo + nav + CTA. Mobile hamburger. |
| Hero | `Hero.tsx` | Full-height bg image, text overlay, primary CTA |
| About | `About.tsx` | 2-col: image w/ play-btn | text + CTA |
| Services | `Services.tsx` | Full-width: image left, 4 cards right on dark bg |
| Classes | `Classes.tsx` | Carousel of cards, dot navigation (owl-carousel style) |
| Banner | `Banner.tsx` | Dark bg, text + person image, CTA |
| Membership | `Membership.tsx` | 3 pricing cards with gradient headers, feature lists, CTAs |
| Register | `Register.tsx` | 4-field form on white card, gradient submit button, image |
| Blog | `Blog.tsx` | 3 blog cards with image, date, tag, title |
| FooterBanner | `FooterBanner.tsx` | 2 side-by-side cards with bg images, CTAs |
| Footer | `Footer.tsx` | Contact columns, subscribe form, copyright, socials |

## Design notes

### Colors & gradients
- Primary gradient: #eb3c5a (red) → #f67831 (orange), used on buttons, membership headers, register button
- Accent: #f15d44 (coral) — hero subtitle, nav underline, membership prices
- Dark palette: #141414, #1e1e1e for services section cards
- Light palette: #f5f5f5 for trainer/register backgrounds

### Typography
- Font: Poppins (Google Fonts), weights 300–900
- Headings: #111111, weight 600–700, uppercase for section titles
- Body: #6b6b6b, 16px, line-height 26px
- Section titles: 40px, weight 600, uppercase, centered

### Button style
- Fixed 160px × 46px, white text, weight 600
- Gradient left/right borders (#eb3c5a → #f67831)
- Gradient background fill on hover (full width, opacity transition)
- Uses ::after pseudo-element for background fill effect

### Membership cards
- White bg, drop shadow (0 15px 49px rgba(0,0,0,0.15))
- Gradient title bar with triangle bottom decoration
- Price in coral #f15d44, 40px, weight 600
- Feature list: gray labels, bold dark values
- "Start Now" button with gradient border, transparent bg → gradient fill on hover

### Register form
- Section bg: #f5f4f4
- Form card: white, padding 50px 70px 60px
- Inputs: height 46px, border 1px #ebebeb, padding-left 20px
- Submit: full-width gradient button (#eb3c5a → #f67831)

### Images
- Hero, About, Services, Classes, Banner, Footer Banner, Subscribe: all background/foreground images
- Use picsum.photos with deterministic seeds per section
- Class cards: semi-transparent dark overlay at bottom for text

## Implementation tasks

- [ ] Scaffold `apps/fitzone` from simplest existing app
- [ ] Set up index.css with Tailwind + Poppins Google Font import
- [ ] Implement Navbar component (transparent, responsive)
- [ ] Implement Hero section
- [ ] Implement About section (2-col layout, play button overlay)
- [ ] Implement Services section (dark cards, 2×2 grid)
- [ ] Implement Classes carousel
- [ ] Implement Banner section
- [ ] Implement Membership Plans (3 pricing cards)
- [ ] Implement Register form section
- [ ] Implement Blog section (3 cards)
- [ ] Implement Footer Banner (2 side-by-side cards)
- [ ] Implement Footer (contact, subscribe, copyright, socials)
- [ ] Compose all sections in App.tsx
- [ ] Write tests for all components (100% coverage)
- [ ] Verify build, lint, typecheck pass
- [ ] Update TEMPLATES.md, README status
