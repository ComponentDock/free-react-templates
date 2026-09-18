# Cruisine (ColorLib Wordpress Restaurant Themes) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-cruisine`. Recreation name: **Cruisine** (NEW name —
> the ColorLib source keeps its name "Wordpress Restaurant Themes").

## Source mapping

- **ColorLib item:** "Wordpress Restaurant Themes" (TEMPLATES.md line 1235).
  The `wp/template/wordpress-restaurant-themes/` slug is actually a blog
  post (collection page listing 30 restaurant themes), NOT a template page.
  The screenshot shows the **Jevelin** WordPress theme's restaurant demo
  (hosted at `jevelin.shufflehound.com`).
- **Source URL:** https://colorlib.com/wp/template/wordpress-restaurant-themes/
- **Preview URL — UNREACHABLE:** `https://preview.colorlib.com/theme/wordpress-restaurant-themes/`
  returns 404 (the slug is a blog post, not a template). Research is based
  entirely on the screenshot.
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/jevelin-restaurant-website-template.jpg
  (1100×894 JPEG, browsed visually 2026-09-15).

## Reference research (done — do not redo)

### Screenshot analysis (jevelin-restaurant-website-template.jpg)

Browsed visually 2026-09-15. The screenshot shows a full-screen restaurant
landing page with these visual elements:

**Hero section (full viewport):**
- Background: dark food photography (cocktail/dessert drink in a glass jar,
  with fruits and mint garnish, moody warm lighting)
- Dark semi-transparent overlay (estimated rgba(0,0,0,0.5))
- Centered text stack:
  - "Premium" in flowing cursive/script font (lime-gold accent, ~#c8d64e)
  - "QUALITY" in small uppercase, letterspaced (white)
  - "Restaurant & Dishes" in large elegant serif/script (white, ~60px)
- Scroll-down mouse indicator centered below text (white outline icon)

**Navigation (transparent, fixed top):**
- Left: "Jevelin" logo in cursive script font (white)
- Center-right: links "Home", "About us", "Menu", "Reservation", "Contacts"
  (white, uppercase, small, sans-serif)
- Far right: social icons (search, Twitter, Facebook, Instagram)

**Floating sidebar (fixed right):**
- Vertical strip with 5 icons: layers, cart, question mark, globe, mail
- White/light background, positioned at viewport right edge

**Color palette (extracted from screenshot):**
- Accent: lime-gold (~#c8d64e) — used for "Premium" script text
- Hero overlay: dark semi-transparent (rgba(0,0,0,0.5))
- Text: white (#fff) on hero
- Body: dark charcoal (#333) on light sections
- Footer: dark (#222)

**Typography:**
- Script/cursive: flowing calligraphic font (Great Vibes or similar) for
  "Premium" decorative text
- Serif: elegant serif (Playfair Display) for main heading
- Sans-serif: clean (Poppins) for navigation and body text

**Overall aesthetic:** Elegant, moody, dark-warm, luxury restaurant vibe.
Sharp edges (no rounded cards), photographic hero, minimal UI chrome.

### Design tokens for implementation

| Token                    | Tailwind @theme value          | Notes                                    |
| ------------------------ | ------------------------------ | ---------------------------------------- |
| `--color-brand`          | `#c8d64e`                      | Lime-gold accent (script text, hover)    |
| `--color-hero-overlay`   | `rgba(0,0,0,0.5)`              | Dark overlay on hero                     |
| `--color-surface`        | `#ffffff`                      | White sections                           |
| `--color-surface-dark`   | `#222222`                      | Footer and dark sections                 |
| `--color-text`           | `#333333`                      | Body text on light bg                    |
| `--color-text-light`     | `#ffffff`                      | Text on dark/hero bg                     |
| `--color-text-muted`     | `#aaaaaa`                      | Footer body text                         |
| `--font-heading`         | `"Playfair Display", serif`    | Main headings                            |
| `--font-script`          | `"Great Vibes", cursive`       | Decorative "Premium" text                |
| `--font-body`            | `"Poppins", sans-serif`        | Body and nav text                        |

## Section structure (implementation order)

1. **Navbar** — Transparent, fixed top, becomes opaque on scroll
   - Brand "Cruisine" in Great Vibes cursive
   - Nav links: Home, About us, Menu, Reservation, Contacts
   - Social icons on right (use lucide-react)
   - Scroll behavior: background transition to #222 with box-shadow

2. **Hero** — Full viewport height, background image, overlay
   - Background: picsum food photo with dark overlay
   - Text stack: "Premium" (Great Vibes, lime-gold), "QUALITY" (Poppins, uppercase, letterspaced, white), "Restaurant & Dishes" (Playfair Display, large, white)
   - Scroll indicator (mouse icon, centered)

3. **Floating Sidebar** — Fixed right, vertical icon strip
   - Icons: layers, cart, help-circle, globe, mail (lucide-react)
   - White bg, hover effects

4. **About Section** — White background
   - Heading + paragraph describing the restaurant
   - Optional: image placeholder

5. **Menu Section** — Grid of menu items
   - Dish name, description, price
   - Clean layout, sharp edges

6. **Gallery Section** — Photo grid
   - 4-6 food images from picsum
   - Hover zoom effect

7. **Reservation Section** — Form
   - Fields: name, email, phone, date, time, guests
   - Submit button

8. **Footer** — Dark (#222) background
   - Restaurant info, quick links, social icons
   - Copyright bar with Component Dock link

## Fidelity notes

- **Hero image:** Use `https://picsum.photos/seed/cruisine-hero/1920/1080` for the dark moody food photo
- **Font loading:** Google Fonts `<link>` for Playfair Display (400, 700), Great Vibes (400), Poppins (300, 400, 500, 600)
- **Sidebar:** The floating sidebar with 5 icons is a distinctive element — implement as fixed position right side
- **No rounded corners:** The Jevelin template uses sharp edges, no border-radius on cards or buttons
- **Button style:** Pill-shaped CTA with white border, transparent bg, white text (hero only); other buttons may use solid accent
