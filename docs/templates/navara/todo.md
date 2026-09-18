# Navara — Implementation Notes

Source: ColorLib "Cruise" (https://preview.colorlib.com/theme/cruise/)
New name: navara

## Design notes

### Section order (from live preview)

1. **Navbar** — transparent/absolute overlay on hero, centered logo, split nav (Home/Technology/Careers left, About/Blog/Contact right), mobile hamburger
2. **Hero** — full-width bg image with dark overlay, centered heading + subtext
3. **What We Do** — 3 image cards with white overlay panels, "Learn More" links
4. **Our Features** — dark navy bg (#1c2d37), 2 alternating image+text rows (9:3 layout)
5. **Design for the Future** — 2x2 grid of text features with green checkmark icons
6. **Testimonial** — centered blockquote with quote icon, attribution
7. **Blog Posts** — 4-column cards on light bg (#f6f5f5), image + date + title + link
8. **Footer** — dark bg (#000), 3 columns (About Us, Features links, Newsletter + social), copyright

### Fidelity notes

- Brand coral `#ff5533` is used for: links, primary buttons, "More" link borders, quote icons, numbered captions
- Dark section bg `#1c2d37` creates strong contrast for the features section
- Font: DM Sans 300/400/700 (Google Fonts)
- "More" links use: uppercase, 0.75rem, letter-spacing 0.1rem, border-bottom 2px solid brand
- Buttons: border-radius 4px, brand bg, white text
- Social icons use circular 50% border-radius containers
- Navbar is transparent and overlays the hero; becomes sticky on scroll
- Hero uses a dark semi-transparent overlay on the background image
- Feature cards (What We Do) have image backgrounds with white overlay panels appearing on hover/focus
- Feature rows (Our Features) use a 9:3 column layout with reversed order for the second row
- Numbered captions ("01.", "02.") use brand color for emphasis
- Testimonial section has a subtle top border, centered layout
- Blog cards are uniform 4-column with meta date in gray

### Component plan

- `Navbar.tsx` — transparent absolute nav, centered logo, split links, mobile toggle
- `Hero.tsx` — bg image, dark overlay, heading + subtext
- `WhatWeDo.tsx` — 3 FeatureCard components in a row
- `FeatureCard.tsx` — bg image + white overlay panel (title, desc, "Learn More" link)
- `OurFeatures.tsx` — dark bg section, 2 alternating FeatureRow components
- `FeatureRow.tsx` — 9:3 col layout (image + text sidebar), numbered caption
- `DesignForFuture.tsx` — 2x2 grid of TextFeature components
- `TextFeature.tsx` — green checkmark icon + title + description
- `Testimonial.tsx` — centered blockquote, quote icon, attribution
- `BlogPosts.tsx` — 4-column grid of BlogCard components, light bg
- `BlogCard.tsx` — image + date meta + title + "Read More" link
- `Footer.tsx` — dark bg, 3-column (About Us, Features links, Newsletter form + social icons), Component Dock link

### Placeholder images

- Hero bg: `https://picsum.photos/seed/navara-hero/1920/800`
- Feature card images: `https://picsum.photos/seed/navara-feature-<n>/600/400` (n=1..3)
- Feature row images: `https://picsum.photos/seed/navara-row-<n>/900/500` (n=1..2)
- Blog post images: `https://picsum.photos/seed/navara-blog-<n>/600/400` (n=1..4)
- Icons: lucide-react (Check, Quote, Facebook, Twitter, Instagram, Linkedin, Mail, Menu, X)
