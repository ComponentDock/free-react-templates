# Lawcraft — Implementation Notes

**Source:** ColorLib "Lawride" — https://colorlib.com/wp/template/lawride/
**Preview:** https://preview.colorlib.com/theme/lawride/
**New name:** lawcraft
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/lawride-free-template.jpg

## Section Order (top to bottom)

1. **HeaderTop** — dark bar with phone, email, social icons
2. **Navbar** — white, logo + nav items (Home, About, Services, Pages dropdown, Contact), fixed on scroll with orange bg
3. **HeroBanner** — full-width bg image, dark overlay, centered heading + orange CTA button
4. **StatsCards** — 4 stat cards overlapping hero bottom on desktop (35/1526/720/680)
5. **AboutSection** — split: video thumbnail (left) + text content (right, heading + paragraphs + button)
6. **PracticeAreas** — section intro heading + 4 practice area cards (Employment Law, Personal Injury, Family Law, Bank & Financial) + "View All Practices" button
7. **Testimonials** — section intro + carousel of client testimonials (avatar, name, role, italic quote)
8. **TeamSection** — section intro + 4 attorney cards (photo, name, role, social links)
9. **CtaBand** — dark overlay bg, "Free Case Evaluation" heading + orange "Contact us Now" button
10. **BlogSection** — section intro + 3 blog post cards (image, title, date/comment meta, description, "Read More")
11. **Footer** — dark bg, 4 columns (About, Nav Links, Newsletter, InstaFeed), social icons
12. **FooterBottom** — attribution with Component Dock link

## Component Mapping

| Original class | React component | Notes |
|---|---|---|
| `.header-top` | `HeaderTop` | Dark bar, phone/email/social |
| `.header_area` / `.navbar` | `Navbar` | White bg, fixed on scroll, orange active |
| `.hero-banner` | `HeroBanner` | Full-width bg image, dark overlay, CTA |
| `.static__single` | `StatsCards` | 4 stat cards, overlap hero on desktop |
| `.about__videoWrapper` + `.about__content` | `AboutSection` | Split layout, video play button |
| `.card-subject` | `PracticeAreas` | 4 cards, image overlay on hover |
| `.testimonial` | `Testimonials` | Carousel with client testimonials |
| `.card-team` | `TeamSection` | 4 attorney cards with social links |
| `.cta-wrapper` | `CtaBand` | Dark overlay bg, heading + button |
| `.card-blog` | `BlogSection` | 3 blog post cards |
| `.footer-area` | `Footer` | Dark 4-column footer |

## Design Token Notes

- **Brand orange `#de6320`** — used everywhere: buttons, active nav, hover states, video play triangle, card hover borders, footer link hovers
- **Fixed nav `#c2581e`** — slightly darker orange for the fixed header background
- **Lora serif headings** — `@import url("https://fonts.googleapis.com/css?family=Lora:400,700")`
- **Roboto sans body** — `@import url("https://fonts.googleapis.com/css?family=Roboto:400,500,700")`
- **Buttons: zero radius** — `.button { border-radius: 0; background: #de6320; color: #fff; }`
- **Button hover** — `background: green` (original behavior; consider using brand dark for consistency)
- **Card shadows** — stat cards: `0px 15px 20px 0px rgba(153,153,153,0.1)`; hover: `0px 10px 30px 0px rgba(153,153,153,0.2)`
- **Overlays** — hero: `rgba(2,4,23,0.702)`; CTA: `rgba(1,0,9,0.6)`; about: `rgba(1,0,9,0.6)`; practice hover: `rgba(222,99,32,0.51)`
- **Footer bg** — `#04091e` (near-black navy)
- **Section alt bg** — `#f7f7f7` (albaster, for testimonial section)

## Placeholder Images

Use `https://picsum.photos/seed/lawcraft-<n>/<w>/<h>` for deterministic placeholders:
- Hero banner: `picsum.photos/seed/lawcraft-hero/1920/800`
- About video thumbnail: `picsum.photos/seed/lawcraft-about/600/400`
- Practice area images 1–4: `picsum.photos/seed/lawcraft-practice-<1-4>/400/300`
- Team member photos 1–4: `picsum.photos/seed/lawcraft-team-<1-4>/300/400`
- Blog images 1–3: `picsum.photos/seed/lawcraft-blog-<1-3>/600/400`
- CTA background: `picsum.photos/seed/lawcraft-cta/1920/500`
- Testimonial avatars: `picsum.photos/seed/lawcraft-testimonial/150/150`

## Fidelity Notes

- Match the stat cards' overlap effect: on desktop (`min-width: 1000px`), cards sit at `position: relative; bottom: -40px; z-index: 50` overlapping the hero bottom
- The play button uses a pulsing animation (`pulse-border` keyframes, 2000ms infinite)
- Practice area card overlay slides up from `translateY(50px)` with opacity transition
- Team cards show an orange left/bottom border on hover (via `border-color: #de6320`)
- Testimonial carousel can use a simple CSS-only approach or a lightweight carousel lib
- The "Pages" nav item has a dropdown (Blog, Blog Details) — simplify to just Blog or omit Blog Details
- Blog info shows date and comment count with themify icons
