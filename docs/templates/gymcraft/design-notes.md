# GymCraft — Design Notes

## Source Mapping

| Field | Value |
|---|---|
| ColorLib name | Activitar |
| Source URL | https://colorlib.com/wp/template/activitar/ |
| Preview URL | https://preview.colorlib.com/theme/activitar/ |
| New name | GymCraft |
| App folder | apps/gymcraft |
| Package | @free-react-templates/gymcraft |

## Visual Design (from screenshot + preview DOM)

**Overall aesthetic:** Dark gym/crossfit theme. Nearly all sections use a
very dark background (`#151515`), with bright orange accent colors for CTAs
and highlights. Typography is bold and uppercase-heavy (Oswald headings),
giving an aggressive, athletic feel.

**Color palette:**
- Dark charcoal backgrounds: `#151515`, `#111111`
- Orange brand: `#e16521` (primary), `#e4381C` (secondary/gradient)
- White text on dark: `#ffffff`
- Muted grey text: `#7b7b7b`, `#a6a6a6`, `#afb4bf`
- Gold accent: `#ffca04` (pricing star)

**Typography:**
- Headings: Oswald (Google Font) — all caps, bold, spaced
- Body: Nunito Sans (Google Font) — clean sans-serif
- Buttons: Oswald, uppercase, 1px letter-spacing, small (12px)

**Layout patterns:**
- Full-bleed sections (no container max-width for hero, features, video, CTA)
- Container-based content for about, classes, timetable, pricing, choose-us, blog
- Bootstrap-style 12-column grid (col-lg-*, col-md-*, col-sm-*)
- Consistent section padding: ~90px top, ~70px bottom (`spad` class)

## Section-by-Section Fidelity Notes

### 1. Header
- Absolute positioned, transparent overlay on hero
- Logo left, nav center, social right
- Nav items: Home, About Us, Schedule, Gallery, Blog (desktop)
- Mobile: hamburger menu (sliknav)
- **Fidelity:** Match transparent overlay + centered nav layout. Use
  lucide-react icons for social links. Implement mobile hamburger.

### 2. Hero Carousel
- Full viewport height, 3 slides with background images
- Each slide: centered vertically, "Join Us Now" (h2, small, white) above
  "FITNESS & SPORT" (h1, very large, white, Oswald bold)
- Auto-rotation with fade transition
- **Fidelity:** Use picsum.photos for placeholder images. Match text
  hierarchy and centering. Implement auto-rotate with CSS transitions or
  a lightweight carousel.

### 3. Features
- 3 equal-width cards, each with background image + dark overlay
- Bottom-aligned text: h3 title (white, Oswald) + "Read More" link
- Cards are ~380px tall, edge-to-edge (negative margins to break container)
- **Fidelity:** Match the image-overlay pattern. Cards fill equal width.
  Use picsum.photos for images.

### 4. About
- 2-column: text left, image right
- "WELCOME TO CROSSFIT" h2 (white, Oswald)
- Paragraph text (white, Nunito Sans)
- "Learn More" button (primary-btn style)
- Dark `#151515` background
- **Fidelity:** Match the 50/50 split. Button style should match the
  original `.site-btn` (Oswald, uppercase, 12px, letter-spacing 1px).

### 5. Classes
- Section title "Choose Your Program" centered
- 4 cards in a row: image + h4 title + description + "Read More"
- Cards: Crossfit Level 1, BootCamp, Energy Blast, Classic Body Balance
- **Fidelity:** Match the 4-column grid. Each card has image on top,
  text below.

### 6. Class Timetable
- "Classtime Table" heading
- Filter tabs as pill-shaped buttons (active state highlighted)
- Full-width table: Mon–Sun header, time-slot rows
- Cells: time range span + class name h6
- Hover effect on cells (`.hover-bg`)
- **Fidelity:** Implement filter tab functionality with React state.
  Table should be responsive (horizontal scroll on mobile).

### 7. Pricing
- "CHOOSE YOUR PRICING PLAN" heading
- Monthly/Years toggle (styled checkbox switch)
- 3 pricing cards: Normal ($55), Professional ($95, featured), Advanced ($165)
- Featured card: slightly elevated, gold star icon
- Each card: h4 plan name → price (h2 with $ in span) → "Monthly" text → ul features → "Get Started" button
- Background image with dark overlay
- **Fidelity:** Match the card layout and toggle switch. Professional
  card should stand out visually.

### 8. Choose Us
- "Why People Choose Us" heading + subtitle
- 3×2 grid of items: icon + h5 title + description paragraph
- Icons: use lucide-react equivalents (headset, dumbbell, user, wrench, calendar, heart)
- **Fidelity:** Match the grid layout (3 cols × 2 rows). Icons centered
  above text.

### 9. Video
- Full-width parallax background image
- Dark overlay (semi-transparent)
- Centered "Gym In Downtown New York" h2
- Circular play button → YouTube popup
- **Fidelity:** Use a simple React modal for the YouTube embed. Match
  the parallax background effect.

### 10. Blog
- "From Our Blog" heading + subtitle
- Masonry grid: 1 large + 1 instagram + 2 standard cards
- Each card: bg image + category tag + h5 title + dark overlay on hover
- **Fidelity:** Implement CSS grid masonry layout. Instagram card has
  different styling (no image bg, just category + text).

### 11. CTA
- Full-width orange gradient (`45deg, #e16521, #e4381C`)
- "Get Started Today" h2 + promo text + "Join Now" button
- Compact: ~38px vertical padding
- **Fidelity:** Match the gradient angle and colors exactly. Button
  should be white text on transparent/white bg (contrasting with orange).

### 12. Footer
- 4-column layout on `#151515`
- Col 1: Logo + description + social icons row
- Col 2: "Our Blog" with 2 posts (title + date with clock icon)
- Col 3: "Program" with 5 links
- Col 4: "Get Info" with phone/email/address (icons)
- Copyright bar: centered, "© [year] All rights reserved | Made with ❤️ by Component Dock"
- **Fidelity:** Match the 4-column layout. Replace Colorlib attribution
  with Component Dock link per conventions.

## Placeholder Images

All images use picsum.photos with deterministic seeds:
- Hero slides: `https://picsum.photos/seed/gymcraft-hero-1/1920/1080` (etc.)
- Feature cards: `https://picsum.photos/seed/gymcraft-feat-1/400/380` (etc.)
- About image: `https://picsum.photos/seed/gymcraft-about/600/400`
- Class cards: `https://picsum.photos/seed/gymcraft-class-1/400/300` (etc.)
- Pricing bg: `https://picsum.photos/seed/gymcraft-pricing/1920/600`
- Video bg: `https://picsum.photos/seed/gymcraft-video/1920/800`
- Blog cards: `https://picsum.photos/seed/gymcraft-blog-1/400/300` (etc.)
