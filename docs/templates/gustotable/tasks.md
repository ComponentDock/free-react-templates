# GustoTable (ColorLib Restauco) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-gustotable`. Recreation name: **GustoTable** (NEW name —
> the ColorLib source keeps its name "Restauco").

## Source mapping

- **ColorLib item:** "Restauco" (TEMPLATES.md line 621).
- **Source URL:** https://colorlib.com/wp/template/restauco/
- **Preview URL:** https://preview.colorlib.com/theme/restauco/ (REACHABLE, HTTP 200)
- **Preview CSS:** `assets/css/style.css` (80,346 bytes) — hand-written custom CSS
  on top of Bootstrap. Fonts: Google Fonts `Mitr` (headings) + `Raleway` (body).
- **Screenshots:** `restauco-free-template.jpg` in TEMPLATES.md.

## Reference research (done — do not redo)

### Live preview DOM analysis (2026-08-25)

Fetched `https://preview.colorlib.com/theme/restauco/` (46,507 bytes HTML) and
`assets/css/style.css` (80,346 bytes). Section order and design tokens recorded
in the spec (`openspec/specs/template-gustotable/spec.md`).

### Screenshot visual analysis

The TEMPLATES.md screenshot shows a warm restaurant landing page with:

- Coral orange accent color (`#FE5F41`)
- Large hero food image
- Floating testimonial card over the hero
- Warm pink-white background (`#FFF4F2`)
- Elegant, food-focused aesthetic

## Implementation tasks

### Task 1: Scaffold and header

- [ ] Copy simplest existing app as base (e.g. `apps/aurora` or similar)
- [ ] Rename package to `@free-react-templates/gustotable`
- [ ] Set `public/CNAME` to `gustotable.free.componentdock.com`
- [ ] Set `homepage` in package.json to `https://gustotable.free.componentdock.com`
- [ ] Add Google Fonts link for Mitr + Raleway in `index.html`
- [ ] Implement transparent header component with nav links + action buttons
- [ ] Implement sticky header behavior (bg change + shadow on scroll)
- [ ] Implement mobile hamburger menu

### Task 2: Hero section

- [ ] Implement split hero layout (flex row, text left, image right)
- [ ] Add heading, subtitle, "Our Menu" button, "Watch Video" link
- [ ] Add floating testimonial card (avatar, quote, stars, reviewer name)
- [ ] Use picsum placeholder for hero food image
- [ ] Hide hero image on mobile

### Task 3: Services section

- [ ] Implement centered heading + subtitle
- [ ] Create 3-column card grid (Healthy Meal, Fast Food, Delicious Coffee)
- [ ] Use lucide-react icons for the service icons
- [ ] Add descriptions for each service

### Task 4: Menu / Most Popular Dishes

- [ ] Implement dark background image section (use picsum or solid dark bg)
- [ ] Add white heading + "Full Menu" button
- [ ] Implement tabbed navigation (5 tabs: Breakfast, Lunches, Dinner, Drinks, Fastfood)
- [ ] Create food card component with image, price badge, name, description, "Order Now"
- [ ] Show 4 food cards per tab in a 3-column grid
- [ ] Use picsum placeholders for food images

### Task 5: Table booking form

- [ ] Implement two-column layout (chef image left, form right)
- [ ] Create form fields: guests, date, meal type select, phone, message
- [ ] Style submit button (coral orange, rounded, full-width)
- [ ] Use picsum placeholder for chef image

### Task 6: Testimonials

- [ ] Implement heading + subtitle
- [ ] Create testimonial card component (photo, quote, stars, reviewer name)
- [ ] Implement carousel with 3 visible cards
- [ ] Use picsum placeholders for customer photos

### Task 7: Instagram gallery

- [ ] Implement row of food images in a carousel
- [ ] Add Instagram link button with "@gustotable" handle
- [ ] Use picsum placeholders for Instagram images

### Task 8: Footer

- [ ] Implement 4-column footer layout
- [ ] Column 1: Logo + description + social icons (Twitter, Facebook, LinkedIn, Pinterest)
- [ ] Column 2: Quick Links (Home, About, Services, Blog, Contact)
- [ ] Column 3: "Cakes" menu links (keep as placeholder menu items)
- [ ] Column 4: Contact info (address, phone, email)
- [ ] Add bottom copyright bar
- [ ] MUST link `https://www.componentdock.com/` (branded "Component Dock")
- [ ] Use lucide-react icons for social icons

### Task 9: Styling and design tokens

- [ ] Define theme tokens in `index.css`:
  - `--color-primary`: `#FE5F41` (coral orange)
  - `--color-heading`: `#4D312C` (dark warm brown)
  - `--color-body`: `#94817E` (muted warm grey-brown)
  - `--color-bg`: `#FFF4F2` (light pink-white)
  - `--color-bg-alt`: `#FFF7F3` (near-white pink)
- [ ] Apply Mitr font to headings, Raleway to body
- [ ] Style all buttons with 35px border-radius (pill shape)
- [ ] Implement hover animations on buttons (scale/shift pseudo-element)
- [ ] Ensure responsive breakpoints match original (hero hidden on mobile, sections stack)

### Task 10: Accessibility and cleanup

- [ ] Ensure semantic HTML throughout
- [ ] Add alt text to all images
- [ ] Add form labels or aria-labels
- [ ] Remove any ColorLib references from app code
- [ ] Run verify-app.sh and fix any issues

## Design notes for implementer

### Color palette

| Token           | Hex       | Usage                                          |
| --------------- | --------- | ---------------------------------------------- |
| Primary (coral) | `#FE5F41` | Buttons, price badges, nav hover, social icons |
| Heading         | `#4D312C` | All h1–h6                                      |
| Body text       | `#94817E` | Paragraphs, subtitles                          |
| Background      | `#FFF4F2` | Page bg, hero bg, sticky header                |
| Bg alt          | `#FFF7F3` | Section alternates                             |
| Button hover    | `#ec583a` | Button ::before pseudo-element                 |
| Social hover    | `#F04506` | Social icon hover                              |

### Typography

- Headings: Mitr, weight 500, various sizes (h1: ~44px section titles)
- Body: Raleway, weight 400, 16px, line-height 1.4
- Buttons: Mitr, weight 500, 16–18px

### Key spacing

- Section padding: 120px top/bottom
- Hero height: 950px (desktop), 550px (mobile)
- Button padding: 22px 32px (standard), 25px 43px (submit), 35px 55px (hero/menu)

### Component structure

```
src/
  App.tsx
  components/
    Header.tsx        — transparent + sticky header with nav
    Hero.tsx          — split hero with testimonial card overlay
    Services.tsx      — 3-column service cards
    Menu.tsx          — tabbed menu with food cards
    BookingForm.tsx   — table reservation form
    Testimonials.tsx  — customer testimonial carousel
    Instagram.tsx     — photo gallery carousel
    Footer.tsx        — 4-column footer + bottom bar
  index.css           — Tailwind entry + theme tokens
```

### Fidelity pitfalls

1. The floating testimonial card in the hero MUST be absolutely positioned
   over the hero image (not a separate section below).
2. The menu section has a dark background IMAGE (not solid color) — use
   a dark picsum or gradient as fallback.
3. Price badges are circular orange overlays on food images — position
   absolute with background `#FE5F41`.
4. The submit button has a `::before` pseudo-element with a scale animation
   on hover (sweeps from left to right).
5. The sticky header background is `#FFF4F2`, not white.
6. The Instagram section has a carousel of images (not a grid).
7. The footer bottom bar has a border-top and centered copyright text.
