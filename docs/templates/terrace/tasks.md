# Terrace (ColorLib Rooftop) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-terrace`. Recreation name: **Terrace** (NEW name —
> the ColorLib source keeps its name "Rooftop").

## Source mapping

- **ColorLib item:** "Rooftop" (TEMPLATES.md line 1791; section "## Food & Drinks"
  area). The `wp/template/rooftop/` slug appears in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/rooftop/
- **Preview URL:** https://preview.colorlib.com/theme/rooftop/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Reference research (done — do not redo)

### Preview DOM analysis (fetched 2026-09-21)

The live preview at `https://preview.colorlib.com/theme/rooftop/` returns a
complete single-page HTML (31,757 bytes). Sections in order:

1. **Header/Navbar** — white bg, full-width, z-index 999999, 3-part layout:
   - Left: "Home" (active), "menu", "about" links
   - Center: logo image (col-3)
   - Right: Bootstrap navbar with dropdowns — "Pages" (Contact, Elements),
     "Blog" (Blog, Blog Detail), "Gallery". Mobile toggler with `lnr-menu` icon.

2. **Hero Banner** — `header-bg.png` background image, full-width, centered
   white content: h1 "Rooftop" (72px, uppercase, 10.8px letter-spacing),
   `<hr>` divider (rgba white 0.4), subtitle "A Fine Dinning Restaurant"
   (18px, uppercase). `.height` class for vertical centering.

3. **Side Fixed Elements** — two floating side elements:
   - Left: "view menu" with `go-down.png` arrow icon, links to `#menu_area`
   - Right: "book a table" with `book-table.png` icon, links to index

4. **Menu Area** (`#menu_area`) — container, 2-column layout:
   - Left (col-5): `.section-title` with h1 "Daily Food Courses with Drinks"
     (48px uppercase, 7.2px letter-spacing), description paragraph, `.primary-btn`
     "See Full Menu"
   - Right (col-7): 3 `.single-menu` blocks:
     - "Appetizer" (italic uppercase h3, gold `#ad9966` underline)
     - "Main Courses" (same style)
     - "Drinks & Juices" (same style)
     Each with 2 list items: `.menu-item` (name + dots + price) and description.

5. **Gallery Area** — 4-image masonry layout with `mt--480` / `mt--280` offsets.
   Each `.single-gallery` has an `.overlay`, `<figure>` with img, and a
   `.icon` with `lnr-cross` for magnific-popup lightbox. Images: g1-g4.jpg.

6. **Reservation Area** — 2-column layout:
   - Left (col-7): `.booking-form` with warm cream bg `#faf5f0`, 120px 50px
     240px padding. Fields: Event Name, Event Date (datepicker with calendar
     icon), Meal Preferences (nice-select), Number of Guests (nice-select),
     Budget, Contact Name, Email Address, Phone Number, textarea (Post a
     message), `.primary-btn.dark` "Send Request" button.
   - Right (offset col-4): `.section-title` with h1 "Book a Table or Rooms
     for private dining" and description paragraph.

7. **Chef's Quotes Area** — 2-column layout:
   - Left (col-5): `.section-title` with h1 "Chef's Quotes", description
     paragraph, `signature.png` image.
   - Right (offset col-6): `chefs-quotes.jpg` image with `mt--120` offset.

8. **Call-to-Action Area** — container with `.callto-action-area`, owl-carousel
   with 2 slides. Each slide: `callaction-bg.jpg` image, centered text box
   with h3 "Main Course" and description "Chicken Steak with garlic bread & Fries".

9. **Contact Area** — 2-column layout:
   - Left (col-6): `#contactMap` div (Google Maps placeholder)
   - Right (offset col-5): `.section-title` with h1 "Terrace Fine Dining
     Restaurant", address (432 Wyandotte Ave, Lakewood, OH, 44107 × 2),
     phone numbers (012 44 (216) 785-9346 × 3), emails
     (info@rooftoprestaurant.co.uk, support@rooftoprestaurant.com).

10. **Footer** — dark navy `#04091e` bg. 5-column row:
    - Col 1: "Top Products" (4 links)
    - Col 2: "Quick links" (4 links)
    - Col 3: "Features" (4 links)
    - Col 4: "Resources" (4 links)
    - Col 5 (col-4): "Newsletter" with email input + arrow submit button
    Copyright bar: "Copyright © 2018 All rights reserved | This template is
    made with ❤ by Colorlib" (replace with Component Dock), social icons
    (Facebook, Twitter, Dribbble, Behance).

### Design tokens (live stylesheet, verified 2026-09-21)

Fetched `main.css` (68,380 bytes). Key tokens already captured in spec.md
Design Tokens table above.

**Color palette summary:**
- Primary: `#ad9966` (muted gold) — buttons, accents, menu underlines
- Dark: `#04091e` (deep navy) — footer background
- Body: `#777777` — body text
- Heading: `#000000` — section headings
- Light cream: `#faf5f0` — reservation form background
- Light lavender: `#f9f9ff` — menu area background
- White: `#fff` — header bg, hero text, buttons

**Typography:**
- Headings: Playfair Display 400/700, serif — h1 at 48-72px, uppercase, wide letter-spacing
- Body/nav: Roboto 300/400/500, sans-serif — 14px base
- Menu category: italic Playfair Display, uppercase
- Button: uppercase, letter-spacing 2px, no border-radius

**Button variants:**
- `.primary-btn`: `#ad9966` bg + border, `#fff` text, uppercase, letter-spacing 2px.
  Hover: transparent bg, `#ad9966` text.
- `.primary-btn.dark`: `#000` bg, `#fff` text, white border. Hover: transparent, gold text.

### Picsum placeholder plan

- Hero banner: `https://picsum.photos/seed/terrace-hero/1920/900`
- Gallery images: `https://picsum.photos/seed/terrace-g1/600/800` through
  `terrace-g4/600/500` (varying heights for masonry)
- Chef image: `https://picsum.photos/seed/terrace-chef/600/700`
- Signature: use text-based signature or a placeholder script font
- CTA background: `https://picsum.photos/seed/terrace-cta/1920/600`
- Map placeholder: static map image or embed placeholder

### Icon mapping (lucide)

| Source icon (Linearicons + Font Awesome) | Recreation               |
| ---------------------------------------- | ------------------------ |
| `lnr-menu` (mobile toggler)              | lucide `Menu`            |
| `lnr-cross` (gallery overlay)            | lucide `X`               |
| `lnr-arrow-right` (newsletter submit)    | lucide `ArrowRight`      |
| `lnr-heart` (copyright)                  | lucide `Heart`           |
| `fa-calendar` (reservation datepicker)   | lucide `Calendar`        |
| `fa-facebook`                            | lucide `Facebook`        |
| `fa-twitter`                             | lucide `Twitter`         |
| `fa-dribbble`                            | lucide `Dribbble`        |
| `fa-behance`                             | lucide `Globe` (no Behance in lucide) |

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/terrace` from the simplest existing app
       (`cp -r apps/<simplest> apps/terrace`), rename package to
       `@free-react-templates/terrace`, add Playfair Display 400/700 +
       Roboto 300/400/500 Google Fonts `<link>` in index.html, set
       `public/CNAME` = `terrace.free.componentdock.com` + `"homepage"`.
       Register the workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Navbar (3-part layout, logo, left links,
       right dropdowns), Hero (heading, hr, tagline), SideLinks (View Menu,
       Book a Table), MenuSection (heading, description, button, 3 categories
       with items), Gallery (4 images with overlays), Reservation (form fields,
       submit button, heading), ChefQuotes (heading, description, signature,
       image), CTA Carousel (2 slides with images and text), Contact (map
       placeholder, heading, address, phones, emails), Footer (4 link columns,
       newsletter, copyright bar with social icons, Component Dock link), App
       (landmarks, document title "Terrace — Fine Dining Restaurant").
3. [ ] Layout shell: Navbar white bg, 3-part flex (left links, center logo,
       right dropdown nav). Hero full-width with background image, centered
       white content.
4. [ ] Hero section: background image via picsum, white text, large uppercase
       heading, hr divider, subtitle.
5. [ ] Side fixed elements: positioned links with icons for "View Menu" and
       "Book a Table".
6. [ ] Menu section: 2-column layout, left heading + description + button,
       right 3 menu categories with italic uppercase headings, gold underlines,
       and item lists with names/prices/descriptions.
7. [ ] Gallery: 4-image staggered masonry layout with overlay and X icon for
       lightbox. Use CSS grid or flexbox with different heights/offsets.
8. [ ] Reservation: 2-column, left form on cream bg (`#faf5f0`) with 8+ fields
       including selects and datepicker, right heading and description.
9. [ ] Chef's Quotes: 2-column, left heading + description + signature, right
       chef image with top offset.
10. [ ] CTA Carousel: owl-carousel replacement with 2+ slides, background
        images, centered text boxes.
11. [ ] Contact: 2-column, left map placeholder, right heading + address +
        phones + emails.
12. [ ] Footer: dark navy (`#04091e`), 5-column layout (4 link columns +
        newsletter), copyright bar with social icons and Component Dock link.
13. [ ] Run `npm run verify:app -- terrace` (typecheck -> lint -> vitest
        100% -> build) and fix until green.
14. [ ] Open PR `feat/template-terrace` -> merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (#ad9966 gold /
        #04091e dark / Playfair Display + Roboto), and what differs (renamed
        "Terrace", picsum placeholders, lucide icons, no ColorLib references,
        Component Dock footer).
15. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1791 `[x]` + surge
        URL (`https://terrace.free.componentdock.com`), `npm run
        readme:status`, push.
