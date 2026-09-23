# Tribunal — Design Notes

## Replication Source

- Original: ColorLib "Theorder" — law firm template
- Preview: https://preview.colorlib.com/theme/theorder/
- Screenshot analyzed from TEMPLATES.md

## Design Tokens Extracted

### Typography

- **Font family:** Rubik (Google Fonts), weights 300, 400, 500, 600, 700
- **Headings:** Bold, dark (#1a1a2e)
- **Body text:** Regular weight, #333333
- **Muted text:** #6c757d

### Colors

- **Brand accent:** #F96D00 (orange) — from original CSS loader animation
- **Navbar/Hero dark:** #212529 (Bootstrap dark)
- **Footer dark:** #1a1a2e
- **Section backgrounds:** White (#ffffff), Light gray (#f8f9fa)
- **Body background:** #fff

### Layout

- **Max width:** 1280px (7xl in Tailwind)
- **Section padding:** py-20 (~80px vertical)
- **Grid:** 12-column responsive grid
- **Practice areas:** 3x2 grid (6 items)
- **Testimonials:** 3-column grid
- **Team:** 3-column grid
- **Blog:** 3-column grid
- **Footer:** 4-column grid

### Components

- **Navbar:** Dark bg, sticky, logo + nav links + hamburger
- **Hero:** Full-height bg image + dark overlay + centered text
- **Stats:** Icon + number + label horizontal layout
- **About:** 2-column split (image left, text right)
- **Practice areas:** Icon circle + title + description cards
- **Testimonials:** Background image section + quote cards
- **Team:** Name + role above photo layout
- **Contact form:** Vertical form fields + send button
- **Blog:** Image + date badge + title + meta row
- **Footer:** 4-column links + copyright + Component Dock

### Images

- All images use picsum.photos with seeded URLs for determinism
- No ColorLib assets copied
