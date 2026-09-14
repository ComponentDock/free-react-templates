# Mechatron — Implementation Notes

**Source:** ColorLib "Robotics" (https://colorlib.com/wp/template/robotics/)
**Preview:** https://preview.colorlib.com/theme/robotics/
**New name:** `mechatron`

## Section Order (fidelity 1:1 with original)

1. **Navbar** — Logo left, nav links right. Sticky on scroll. Dropdown for Blog.
2. **Banner/Hero** — Fullscreen parallax background. Left: headline + subtitle + CTA button. Right: robot illustration.
3. **Featured Products** — 4 product cards in a grid. Image + name + description + button per card. Purple-tinted shadow.
4. **Home About** — Split: illustration left, heading + subtext + paragraph + button right.
5. **About Video** — Split: text left, video poster + play button right with gradient overlay.
6. **Features** — Parallax bg, centered heading, 6 white feature cards (3×2 grid). Icon + title + description.
7. **Brand Logos** — 5 grayscale logos in a row.
8. **Blog** — 2-column blog cards. Thumbnail, tags, title, excerpt, date.
9. **Footer** — 3 columns (links, newsletter, instagram). Copyright + social icons. Links to Component Dock.

## Key Fidelity Notes

### Typography
- Font: Poppins (Google Fonts). Body weight 300, headings weight 600.
- Heading colors: `#222222` (dark). Body text: `#777777` (gray).

### Primary Button
- Gradient: `linear-gradient(0deg, #828fff 0%, #d496ff 100%)` — confirmed from CSS.
- Border-radius: 25px (pill shape). Padding: 30px horizontal, 42px line-height.
- Hover: transparent bg, `#8a90ff` text + border. Same gradient on tag badges, social icons.

### Product Cards
- White bg, 10px border-radius.
- Box-shadow: `0px 10px 30px 0px rgba(212, 150, 255, 0.2)` — purple tint.
- Thumbnail area: 40px padding, white, bottom border `#eee`.
- Details area: 20px padding, `#f9f9ff` background.
- Details button: white bg, `#222` text, no radius. On card hover, button turns gradient.

### Feature Cards
- White bg, 10px border-radius, 35px padding.
- Icon: Lucide icon in `#222`, 20px font-size.
- Hover: icon + title turn `#8a90ff`.

### Parallax Sections
- Banner, Features, Footer all use `background-size: cover` with center alignment.
- Use CSS `background-attachment: fixed` or Tailwind `bg-fixed` for the parallax effect.

### Footer
- 3-column layout: links (left), newsletter form (center), instagram feed (right).
- Newsletter: email input + subscribe button (same gradient primary-btn).
- Instagram feed: 8 small images in a flex wrap row.
- Copyright + social icons (Facebook, Twitter, Dribbble, Behance) in bottom bar.
- Footer MUST link to Component Dock (replacing Colorlib attribution).

### Blog Cards
- Thumbnail images with 10px border-radius.
- Tag badges: inline-block, gradient background on hover.
- Date text in separate line.

## Component Mapping

| Section        | Component File           | Notes                              |
|----------------|--------------------------|-------------------------------------|
| Navbar         | `Navbar.tsx`             | Sticky, dropdown submenu            |
| Hero           | `Hero.tsx`               | Fullscreen parallax, split layout   |
| Products       | `Products.tsx`           | 4-column grid, product cards        |
| About          | `About.tsx`              | Split layout, image left            |
| AboutVideo     | `AboutVideo.tsx`         | Split layout, play button overlay   |
| Features       | `Features.tsx`           | Parallax bg, 6 cards 3×2 grid      |
| BrandLogos     | `BrandLogos.tsx`         | 5 grayscale logos                   |
| Blog           | `Blog.tsx`               | 2-column blog cards                 |
| Footer         | `Footer.tsx`             | 3-column, newsletter, social icons  |

## Placeholder Images

- Hero illustration: `https://picsum.photos/seed/mechatron-hero/600/500`
- Product images: `https://picsum.photos/seed/mechatron-prod-1/300/300` through `-4`
- About image: `https://picsum.photos/seed/mechatron-about/600/400`
- Video poster: `https://picsum.photos/seed/mechatron-video/600/330`
- Blog thumbnails: `https://picsum.photos/seed/mechatron-blog-1/600/350`, `-2`
- Brand logos: use text/SVG placeholders or picsum with grayscale
- Instagram images: `https://picsum.photos/seed/mechatron-insta-1/150/150` through `-8`

## Implementation TODO

- [ ] Create `apps/mechatron/` workspace (copy from simplest existing app)
- [ ] Set up `package.json` with `@free-react-templates/mechatron`
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Set up `index.html` with Google Fonts Poppins link
- [ ] Create `src/index.css` with Tailwind + theme tokens
- [ ] Create `src/main.tsx` entry
- [ ] Create `src/App.tsx` composing all sections
- [ ] Build `Navbar.tsx`
- [ ] Build `Hero.tsx` (parallax bg, split layout)
- [ ] Build `Products.tsx` (4-column grid, card hover)
- [ ] Build `About.tsx` (split layout)
- [ ] Build `AboutVideo.tsx` (play button overlay)
- [ ] Build `Features.tsx` (parallax bg, 6 cards)
- [ ] Build `BrandLogos.tsx` (5 logos, grayscale)
- [ ] Build `Blog.tsx` (2-column cards)
- [ ] Build `Footer.tsx` (3-column, newsletter, social, Component Dock link)
- [ ] Write tests for each component (TDD: red first)
- [ ] Run `npm run test:coverage` — verify 100%
- [ ] Run `scripts/verify-app.sh mechatron`
- [ ] Commit + push
