# Hardhat — Construction Company Template

Source: ColorLib **Consto** (https://colorlib.com/wp/template/consto/)
Preview: https://preview.colorlib.com/theme/consto/
New name: `hardhat` (apps/hardhat, package @free-react-templates/hardhat)

## Section order (top to bottom)

1. **Header** — 3-block split: black logo block + white nav + orange phone block
2. **Hero** — full-width bg image, dark overlay, white heading, orange CTA, explore sidebar
3. **About / Support** — 2-col: overlapping construction images (left) + heading + text (right)
4. **Services** — grid of 4+ service cards on light gray bg, icons + titles + descriptions
5. **Projects** — image grid with hover overlays (portfolio)
6. **More Projects** — additional project items on light bg
7. **Testimonials** — carousel with client quotes + avatars
8. **Contact** — form with name/email/subject/message + email-icon submit
9. **CTA Banner** — "Want to Work" call-to-action section
10. **Footer** — newsletter form, 3-column layout, social icons, copyright

## Design token notes

- Primary orange: #FF5E14 — used for buttons, phone header, image borders, icons
- Button gradient: linear-gradient(to left, #FF5E14, #e24e09, #FF5E14)
- Buttons: sharp corners (radius 0), uppercase, 14px 34px padding, 16px font
- Font: Raleway (Google Fonts)
- Dark sections use near-black (#0a0a0a) bg
- Footer bg: #F5F6F7
- Navy accent text: #1f2b7b for subheadings
- Body text: #5E5E5E, muted: #999999

## Fidelity notes

- The 3-block header is distinctive — left block black with logo + address,
  center block white with nav, right block orange with phone number
- Hero has a unique right sidebar overlay (sepia/tan semi-transparent) with
  "Explore Our Latest Projects" + underlined CTA
- About section uses overlapping images with orange border accent
- Projects use hover overlay effects (likely scale + dark overlay on hover)
- Testimonials use a carousel with dots/arrows
- Footer includes newsletter form above the 3-column layout
- No parallax or video backgrounds observed

## Implementation tasks

- [ ] Create app folder + package.json + vite.config.ts (copy from simplest existing app)
- [ ] Set up index.html with Google Fonts (Raleway)
- [ ] Set up index.css with Tailwind @theme tokens
- [ ] Build Header component (3-block layout)
- [ ] Build Hero component (bg image, overlay, heading, CTA, explore sidebar)
- [ ] Build About component (2-col, overlapping images)
- [ ] Build Services component (grid of cards)
- [ ] Build Projects component (image grid + hover)
- [ ] Build Testimonials component (carousel)
- [ ] Build Contact component (form with validation)
- [ ] Build CTA Banner component
- [ ] Build Footer component (newsletter + 3-col + copyright + Component Dock link)
- [ ] Compose all sections in App.tsx
- [ ] Write tests for each component (100% coverage)
- [ ] Set up public/CNAME (hardhat.free.componentdock.com)
- [ ] Verify: typecheck + lint + test:coverage + build pass
