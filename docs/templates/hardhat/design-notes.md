# Hardhat — Design Notes

## Source Template

- ColorLib: Constructioncompany (https://colorlib.com/wp/template/constructioncompany/)
- Live preview: https://preview.colorlib.com/theme/constructioncompany/

## Design Tokens (extracted from preview CSS)

### Colors

- Brand/Primary: `#ff5f13` (orange-red)
- Brand dark (hover): `#e25311`
- Dark navy: `#0b1c39` / `#0e132a`
- Slate dark: `#161e46`
- Light backgrounds: `#f7f7fd` (mist), `#f1f4fa` (ice)
- Muted text: `#7f7f7f` (smoke)

### Typography

- Headings: Teko (Google Fonts) — uppercase, weight 700
- Body: Barlow (Google Fonts) — weight 400
- Section headings: large Teko font with decorative outlined back-text (stroke effect)

### Buttons

- Primary (CTA): `#ff5f13` bg, white text, 5px border-radius, uppercase, letter-spacing 1px
- White button: white bg, dark text `#161e46`, orange hover overlay
- Boxed button: white bg, orange border, orange text, uppercase

### Section Patterns

- Hero: full-width background image with dark gradient overlay (bottom-up)
- Back-text: large decorative text behind section headings (text-transparent with stroke)
- Services: 3-column card grid with image + title + link
- About: 2-column split (text left, image right)
- Projects: tabbed filter + 3-column card grid
- Contact CTA: dark background, centered content
- Stats: background image, 3-column counter grid
- Team: 3-column card grid with image + role + name
- Testimonial: dark background, centered quote with SVG quote icon
- Blog: 2-column card grid with image + date badge + category + title

## Sections (in order)

1. TopBar — contact info + social icons
2. Navbar — logo, nav links, CTA button
3. Hero — background image, heading, subtitle, CTA
4. Services — 3 cards
5. About — split layout
6. Projects — tabbed gallery
7. Contact CTA — dark background
8. Stats — 3 counters
9. Team — 3 members
10. Testimonial — quote card
11. Latest News — 2 blog cards
12. Footer — links, contact, newsletter, copyright

## Placeholder Images

- Hero: `https://picsum.photos/seed/hardhat-hero/1920/1080`
- Services: `https://picsum.photos/seed/hardhat-svc-{1,2,3}/370/268`
- About: `https://picsum.photos/seed/hardhat-about/845/609`
- Projects: `https://picsum.photos/seed/hardhat-proj-{1..6}/370/394`
- Team: `https://picsum.photos/seed/hardhat-team-{1,2,3}/370/406`
- Blog: `https://picsum.photos/seed/hardhat-blog-{1,2}/571/325`
