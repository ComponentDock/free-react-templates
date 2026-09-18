# BlockNest — Implementation Todo & Design Notes

Source: ColorLib Cryptian
Preview: https://preview.colorlib.com/theme/cryptian/
Spec: openspec/specs/template-blocknest/spec.md

## Section order (from source HTML, lines 34–1095)

1. Navbar (header-area) — line 34–78
2. Welcome / Hero (welcome-area + particles-js) — line 80–108
3. Featured Logos (logo-carousel owl-carousel) — line 110–192
4. About (about-area, split layout) — line 110–192
5. Feature Cards (single-about-area, 3-col) — line 194–235
6. ICO Stats (ico-area) — line 237–319
7. Whitepaper (documentation-area) — line 321–388
8. Token Distribution (distibution-bg) — line 392–454
9. Roadmap (roadmap-area, owl-carousel) — line 458–576
10. Team (team-area, 4-col grid) — line 580–782
11. Mobile App (apps-area) — line 784–810
12. FAQ (faq-area, tabbed) — line 812–979
13. Community (community-area, social grid) — line 983–1034
14. Footer (footer-area, 4-col) — line 1036–end

## Component breakdown

| Component         | Source selector                       | React component       |
| ----------------- | ------------------------------------- | --------------------- |
| Navbar            | `.header-area`                        | Navbar.tsx            |
| Hero              | `.welcome-area` + `#particles-js`     | Hero.tsx              |
| FeaturedLogos     | `.logo-carousel`                      | FeaturedLogos.tsx     |
| About             | `.about-area` (split)                 | About.tsx             |
| FeatureCards      | `.single-about-area` (3-col)          | FeatureCards.tsx      |
| IcoStats          | `.ico-area`                           | IcoStats.tsx          |
| Whitepaper        | `.documentation-area`                 | Whitepaper.tsx        |
| TokenDistribution | `.distibution` (in `.distibution-bg`) | TokenDistribution.tsx |
| Roadmap           | `.roadmap-area`                       | Roadmap.tsx           |
| Team              | `.team-area`                          | Team.tsx              |
| MobileApp         | `.apps-area`                          | MobileApp.tsx         |
| Faq               | `.faq-area`                           | Faq.tsx               |
| Community         | `.community-area`                     | Community.tsx         |
| Footer            | `.footer-area`                        | Footer.tsx            |

## Design notes

### Color palette

- Primary bg: #062489 (deep navy) — body + most sections
- Card bg: #1938a2 / #122e91 (medium blue) — feature cards, ICO stats
- Dark section: #031b69 — distribution bg
- Sticky header: #000D47
- Nav dropdown: #001763
- Text: #cbe5ff (light blue), #fff (headings)
- Accent coral: #f9748f / #FB9A8C — nav active, button hover
- Accent gold: #F6D266
- Bright blue: #004cff — CTA buttons, progress bar

### Buttons

- Pill shape: border-radius 50px
- Gradient: linear-gradient(#f6d365, #fda085) — gold to coral
- Height: 55px for V2 variant
- Padding: 30px horizontal

### Typography

- Font: Montserrat (weights 300–800)
- Loaded via Google Fonts <link>
- Base size: 14px
- Headings: white, Montserrat, capitalize

### Layout

- Bootstrap-like 12-col grid → Tailwind grid/flex
- Container max-width (match Bootstrap default ~1140px)
- Section padding: use consistent spacing (py-16 or py-20)
- Space dividers in source (`.space-30`, `.space-60`, `.space-90`) → Tailwind spacing

### Particles background

- Source uses particles.js canvas
- Implement as CSS particle animation or use tsparticles library
- If tsparticles: install @tsparticles/react (lightweight)
- Alternative: pure CSS animated dots on dark bg

### Countdown timer

- Source: vanilla JS countdown (days, hours, minutes, seconds)
- Implement as React useState + useEffect + setInterval
- Static display with formatted numbers

### Progress bar

- Gradient fill: linear-gradient(#f6d365, #fda085)
- Pill shape matching button style
- Labels below: Soft Cap left, Max Cap right

### FAQ tabs

- Bootstrap pills nav in source
- Implement as React state-driven tabs
- 4 categories, each with FAQ items

### Roadmap

- Source: owl-carousel alternating left/right
- Implement as horizontal scroll or flex timeline
- Alternating items: icon left + text right, then reversed

### Team cards

- 4-column grid
- Photo → name → role → social links (3 icons)
- Social icons: lucide-react equivalents (LinkedIn, Dribbble, Twitter)

### Community

- Social icons in varied sizes (big-social, mid-social, regular)
- Implement as CSS grid with different icon sizes
- Lucide-react icons for each platform

### Footer

- 4 columns: logo+desc, nav links 1, nav links 2, newsletter
- Newsletter: email input + GO button (gradient pill)
- Copyright link → componentdock.com (not Colorlib)

### Placeholder images

- Hero illustration: picsum.photos/seed/blocknest-hero/600/400
- Feature icons: use lucide-react icons instead of images
- Token distribution: use CSS donut charts (no images needed)
- Roadmap icons: lucide-react icons
- Team photos: picsum.photos/seed/blocknest-team-N/300/300
- App mockup: picsum.photos/seed/blocknest-app/400/600
- Partner logos: lucide-react icons or simple text logos

### Icons mapping (Font Awesome → Lucide)

- fa-linkedin → Linkedin
- fa-dribbble → Dribbble (use Figma or similar as substitute)
- fa-twitter → Twitter
- fa-google-plus → use Mail or Globe
- fa-github → Github
- fa-behance → ExternalLink
- fa-youtube → Youtube
- fa-flickr → Camera
- fa-send-o → Send
- fa-angle-right → ChevronRight
- fa-heart-o → Heart
- zmdi-google-play → Play (use Play)
- zmdi-apple → Apple (use Smartphone or Apple)
