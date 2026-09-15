# Gracious — Implementation Notes

**Source:** ColorLib Kindity (https://preview.colorlib.com/theme/kindity/)
**New name:** gracious
**Category:** Charity / Nonprofit

## Section order (top → bottom)

1. Navbar (top bar + main nav + search)
2. Hero Banner (parallax bg, headline, 2 CTAs)
3. Donation Stats (3 overlapping colored cards)
4. Welcome (2-col: text + stats + image)
5. Causes (carousel of cause cards)
6. Features (dark parallax, 3 feature cards)
7. Events (carousel of event cards)
8. Testimonials (split: headline left, carousel right)
9. Clients Logo (logo carousel)
10. Footer (4-col + bottom bar)

## Design notes

- **Colors:** Primary brand is pink-red (#ea2c58). Dark navy (#04091e) for footer and features section. Light lavender (#f9f9ff) for testimonials background.
- **Stat card colors:** Yellow (#e7c12d) for donation total, pink (#ea2c58) for volunteers, green (#91d214) for future plans. Cards overlap the hero by -90px margin.
- **Typography:** Poppins from Google Fonts. Weights 300 (body), 500 (nav/buttons), 600 (headings). All headings uppercase in feature cards.
- **Buttons:** Main CTA is primary brand color, uppercase, 40px line-height, 30px horizontal padding. White button is outlined with #635e68 border, turns pink on hover.
- **Layout:** Bootstrap-like 1170px container. Standard row/col grid. Section padding 120px.
- **Carousels:** Uses owl-carousel in original. Replace with a React carousel library or CSS snap scroll. At minimum, implement a static 3-card grid for causes and events.
- **Parallax:** Stellar.js parallax on hero and features. Use CSS `background-attachment: fixed` or a lightweight React parallax approach.
- **Footer:** Dark navy background. 4 columns. Newsletter has email input. InstaFeed is an 8-image grid. Bottom bar has copyright + Component Dock link + social icons.
- **Images:** Use `https://picsum.photos/seed/gracious-<n>/<w>/<h>` for all images.
- **Icons:** Use lucide-react for icons (Diamond, Coffee, Heart, Users, Mail, etc.) to replace linericon and FontAwesome.

## Component plan

```
src/
  App.tsx
  components/
    Navbar.tsx        — top bar + nav + search
    Hero.tsx          — parallax banner + 2 CTAs
    DonationStats.tsx — 3 overlapping stat cards
    Welcome.tsx       — 2-col text + stats + image
    Causes.tsx        — carousel of cause cards
    Features.tsx      — dark section + 3 feature cards
    Events.tsx        — carousel of event cards
    Testimonials.tsx  — split headline + carousel
    ClientsLogos.tsx  — logo carousel
    Footer.tsx        — 4-col footer + bottom bar
```

## Pitfalls

- Donation stats overlap the hero by -90px — needs negative margin-top on the stats section.
- Feature cards have semi-transparent white background (`rgba(255,255,255,0.1)`) with a gray border (#6c6d77).
- Top bar has a language selector (dropdown) — simplify to a static element or omit.
- Events and causes use carousels — implement with CSS scroll-snap or a simple React state slider.
