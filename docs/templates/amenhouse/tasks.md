# AmenHouse (ColorLib Brotherlylove) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-amenhouse`. Recreation name: **AmenHouse** (NEW name —
> the ColorLib source keeps its name "Brotherlylove").

## Source mapping

- **ColorLib item:** "Brotherlylove" (TEMPLATES.md line 1290; Church Website
  Templates category).
- **Source URL:** https://colorlib.com/wp/template/brotherlylove/
- **Preview URL — REACHABLE (verified by direct fetch):**
  `https://preview.colorlib.com/theme/brotherlylove/`
  (HTTP 200, 632 lines of HTML, Bootstrap 4 + custom CSS).
- **Preview CSS:** `css/style.css` (custom styles) + `css/bootstrap.css`
  (Bootstrap 4) + `css/animate.css` + `css/owl.carousel.min.css` +
  `css/magnific-popup.css`. Fonts: Rubik (300/400/500 via Cloudflare CDN).
- **Original stack:** Bootstrap 4, jQuery, Owl Carousel, Magnific Popup,
  Stellar.js (parallax). **Replace all JS libs with pure React/Tailwind.**

## Reference research (done — do not redo)

### Screenshot (brotherlylove-free-template.jpg)

Visual analysis from ColorLib listing page: Church website with a muted purple
(#6c5b7b) accent color scheme. The hero uses a dark photo background with a
text overlay. Below is a narrow sermon announcement bar. The main content area
has a white background with a two-column welcome section (image + text), three
feature cards with circular icons, a carousel of church service cards on a
light background, testimonials with blockquotes and circular avatars, and a
multi-column footer with dark background. Overall aesthetic: clean, professional
church design with generous whitespace and the purple accent throughout.

### Live preview DOM analysis

Fetched `https://preview.colorlib.com/theme/brotherlylove/` (632 lines).

**Section order (top to bottom):**

1. **Top bar** (`block-45`): Flex row with links (Home, About Us, Ministries)
   on the left and social icons (Facebook, Twitter, LinkedIn, Instagram) on
   the right. Gray background, small text.

2. **Navbar** (`navbar navbar-expand-lg navbar-light`): White background,
   "Brotherly❤" brand (text-primary heart icon), right-aligned nav items
   with dropdowns for Ministries and Sermons. Active link colored #6c5b7b.

3. **Hero** (`site-hero overlay`): Full-width with background image
   (`big_image_2.jpg`), `data-stellar-background-ratio="0.5"` for parallax,
   dark overlay via `::before` (rgba(0,0,0,0.1)). Centered heading
   "Let your light so shine before men." with two CTAs: `.btn-primary-white`
   button "About Us" and text link "Visit Our Church" with location icon.

4. **Sermon bar** (`block-42 overlap`): Narrow bar overlapping hero bottom.
   Purple top border (2px solid #6c5b7b). Contains "Latest Sermon:" label,
   sermon title "Rebuilding The Walls", date/pastor info, and four media
   icons (video-camera, headphones, cloud-download, book).

5. **Welcome section** (`site-section`): Two-column layout. Left: image
   (`img_1.jpg`) with circular play button overlay linking to Vimeo.
   Right: "Welcome To Brotherly Love" heading, description text, pastor
   attribution ("Church Pastor Gregg Smith").

6. **Feature cards** (`site-section pt-0`): Three-column grid with
   `.block-43` cards. Each has a circular icon wrapper (bg #f6f6f6 with
   CSS triangle decorations) and heading + description. Cards:
   - "Connect With God" (book icon)
   - "Come As You Are" (user icon)
   - "Brotherly Love" (heart icon)

7. **Church Services** (`site-section bg-light`): Heading "Church Services"
   + Owl Carousel (`.nonloop-block-13`) of `.block-20` service cards.
   Each card: image, heading, description, "Read More" link. Items:
   - "The Truth will set us free" (image_3.jpg)
   - "Piano Lesson for Children" (image_2.jpg)
   - "Bible studies like Bereans did" (image_1.jpg)

8. **Testimonials** (`site-section bg-light`): Heading "Change Lives" +
   three-column grid of `.block-33` cards. Each: blockquote text,
   circular avatar (60px, border-radius 50%), person name (h2, 18px,
   weight 300), location meta. Persons: Martin Newmansfield (New York),
   Evan Roosbelt (London), Marilyn Smith (London).

9. **Footer** (`site-footer`): Dark background, 5em padding. Three
   column groups:
   - "Church Quick Links" (6 columns of ministry/info links)
   - "Events" (3 `.block-21` items with title, date, author, comments)
   - "Contact Information" (address, phone, email with ionicons)
   Copyright bar at bottom with social icons.

### Design tokens (confirmed from style.css)

| Token | Value | Source |
|-------|-------|--------|
| Primary | `#6c5b7b` | Navbar active, btn-primary-white bg, block-42 border, dropdown hover |
| Page bg | `#e9ecef` | `body { background: #e9ecef }` |
| Content bg | `#fff` | `.wrap { background: #fff }` |
| Body text | `gray` | `body { color: gray }` |
| Headings | `#000` | `h1,h2,h3 { color: #000 }` |
| Font | Rubik 300/400/500 | Cloudflare CDN font-face declarations |
| Icon wrapper bg | `#f6f6f6` | `.block-43-icon .icon-wrapper { background-color: #f6f6f6 }` |
| Footer meta | `#9f8fad` | `.site-footer .block-21 .meta a { color: #9f8fad }` |
| Card shadow | `0 0px 80px -10px rgba(0,0,0,0.2)` | `.wrap` box-shadow |
| Line height | 2 | `body { line-height: 2 }` |
| Border radius | 0 (default) | No explicit radius on cards/buttons |

## Implementation tasks

### Phase 1: Scaffold

- [ ] Create `apps/amenhouse/` from simplest existing app (copy + rename)
- [ ] Rename package to `@free-react-templates/amenhouse`
- [ ] Set up `public/CNAME` → `amenhouse.free.componentdock.com`
- [ ] Set `homepage` in `package.json` → `https://amenhouse.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile
- [ ] Add Rubik font to `index.html` via Google Fonts `<link>` (weights 300, 400, 500)
- [ ] Configure Tailwind theme tokens in `src/index.css` with primary color `#6c5b7b`

### Phase 2: Components (section order)

- [ ] `TopBar.tsx` — Flex row with nav links + social icons (left/right)
- [ ] `Navbar.tsx` — Sticky navbar with brand, nav items, dropdowns, hamburger
- [ ] `Hero.tsx` — Full-width bg image, overlay, heading, two CTAs
- [ ] `SermonBar.tsx` — Overlapping bar with sermon info + media icons
- [ ] `Welcome.tsx` — Two-column split: image with play button + text
- [ ] `FeatureCards.tsx` — Three-column grid of icon cards
- [ ] `ChurchServices.tsx` — Heading + horizontal carousel of service cards
- [ ] `Testimonials.tsx` — Three-column grid of testimonial cards
- [ ] `Footer.tsx` — Multi-column footer with links, events, contact, copyright
- [ ] `App.tsx` — Compose all sections in order

### Phase 3: Tests

- [ ] Write tests for each component (Vitest + Testing Library)
- [ ] Ensure 100% coverage (lines, functions, branches, statements)
- [ ] Run `npm run test:coverage` — verify 100%

### Phase 4: Verification

- [ ] Typecheck passes (`npx tsc --noEmit`)
- [ ] Lint passes (`npx oxlint src/`)
- [ ] Build passes (`npx vite build`)
- [ ] Visual match: compare with screenshot and preview DOM
- [ ] No ColorLib references in `apps/amenhouse/` code
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] Images use `picsum.photos/seed/amenhouse-<n>/<w>/<h>` placeholders

## Design notes

### Color mapping for Tailwind

```css
@theme {
  --color-primary: #6c5b7b;
  --color-primary-dark: #574a65;
  --color-surface: #ffffff;
  --color-page-bg: #e9ecef;
  --color-icon-bg: #f6f6f6;
  --color-footer-meta: #9f8fad;
}
```

### Section background treatment

- Body: `bg-page-bg` (#e9ecef)
- Content wrapper: `bg-surface` (#fff) with max-w-[1400px] mx-auto shadow
- Hero: background image with `::before` overlay
- Sermon bar: white bg, `border-t-2 border-primary`
- Welcome: white bg (default)
- Feature cards: white bg (default)
- Church Services: `bg-gray-100` (light gray)
- Testimonials: `bg-gray-100` (light gray)
- Footer: dark bg (use `bg-gray-900` or custom dark)

### Icon replacement

- Font Awesome icons → lucide-react equivalents:
  - `fa-heart` → `Heart`
  - `fa-book` → `BookOpen`
  - `fa-user` → `User`
  - `fa-video-camera` → `Video`
  - `fa-headphones` → `Headphones`
  - `fa-cloud-download` → `Download`
  - `fa-facebook` → `Facebook`
  - `fa-twitter` → `Twitter`
  - `fa-linkedin` → `Linkedin`
  - `fa-instagram` → `Instagram`
- Ionicons → lucide-react:
  - `ion-ios-play` → `Play`
  - `ion-ios-location` → `MapPin`
  - `ion-android-calendar` → `Calendar`
  - `ion-android-person` → `User`
  - `ion-chatbubble` → `MessageCircle`
  - `ion-android-pin` → `MapPin`
  - `ion-ios-telephone` → `Phone`
  - `ion-android-mail` → `Mail`

### Carousel replacement

Replace Owl Carousel with a pure CSS/React horizontal scroll carousel:
- `overflow-x-auto` container with `snap-x snap-mandatory`
- Each card as `snap-center` flex item
- Optional: prev/next buttons with `scrollBy` logic
- No jQuery, no external carousel library

### Parallax replacement

Replace Stellar.js parallax with CSS `background-attachment: fixed` on the
hero section, or a lightweight React scroll listener that adjusts
`background-position-y` on scroll.
