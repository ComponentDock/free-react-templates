# Foodcraft (ColorLib Foodfun) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-foodcraft`. Recreation name: **Foodcraft** (NEW name —
> the ColorLib source keeps its name "Foodfun").

## Source mapping

- **ColorLib item:** "Foodfun" (TEMPLATES.md line 1786; section "## Food & Drinks"
  area). The `wp/template/foodfun/` slug appears in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/foodfun/
- **Preview URL:** https://preview.colorlib.com/theme/foodfun/
- **Stack:** Vite · React 19 · Tailwind CSS 4 · TypeScript

## Reference research (done — do not redo)

### Preview DOM analysis (fetched 2026-09-22)

The live preview at `https://preview.colorlib.com/theme/foodfun/` returns a
complete single-page HTML (27,258 bytes). Sections in order:

1. **Header/Navbar** — centered floating bar (80% width, white bg, 3px radius,
   absolute positioned at top 20px). Logo left, nav links right (Home, About,
   Menu, Blog with submenu, Contact, Elements). Mobile hamburger menu with
   golden `#ffb606` background.

2. **Banner/Hero** — full-width section with `banner-bg.jpg` background image,
   grey fallback `#b0b0b0`. White text: uppercase h6 "the most interesting food
   in the world", then h1 "Discover the flavors of foodfun" where "flavors" and
   "foodfun" use `prime-color` class (golden `#ffb606`). `.style-change` removes
   italic on this section.

3. **Welcome Area** — split layout (container-fluid). Left: `welcome-bg.png`
   decorative image. Right: h3 "welcome to food fun" (`.style-change` = golden
   italic), two lorem paragraphs, `.template-btn` "book a table" button.
   Padding: `section-padding2` (130px top only).

4. **Food Area** — 3-column grid of 6 food cards (`single-food`). Each card:
   food image with overflow hidden + scale on hover, `.food-content` with light
   `#f9f9ff` bg (turns golden on hover), dish name + price (`style-change`
   golden), description. Items: Mexican Eggrolls $14.50, Chicken Burger $9.50,
   Topu Lasange $12.50, Pepper Potatoas $14.50, Bean Salad $8.50, Beatball
   Hoagie $11.50.

5. **Reservation Area** — full-width with `reservation-bg.jpg` background image.
   Centered white text: h2 "Natural ingredients and testy food", h4 subtitle,
   `.template-btn2` "reservation" button (variant that shows text color on hover).

6. **Deshes (Special Dishes) Area** — h3 "Our special deshes" with two numbered
   dishes in alternating layouts. Dish 01: "Garlic green beans" (left text,
   right image `deshes1.png`), price $12.00, `.template-btn3` "book a table"
   with arrow icon. Dish 02: "Lemon rosemary chicken" (reversed layout, image
   `deshes2.png` left, text right). Large h1 numbers with decorative line.

7. **Testimonial Area** — `testimonial-bg.jpg` with dark overlay
   (`rgba(1,7,16,0.8)`). h3 "Customer says". Owl carousel with white cards
   (3px radius, quote icon bg image). Each slide: circular avatar (100px,
   50% radius), name, italic role, quote text. Cards: Adame Nesane / Adam
   Nahan, Chief Customer.

8. **Update Area** — h3 "Our food update". 3-column blog cards. Each: food
   image, admin meta (user icon + "Admin", calendar icon + date), title,
   description, `.template-btn3` "read more" arrow link. Cards on `#f9f9ff`
   bg with hover shadow.

9. **Table Area** — `table-bg.jpg` with dark overlay (`rgba(1,7,16,0.7)`).
   h3 "Book your table". Form with 3 side-by-side inputs (30.33% each):
   date picker (calendar icon), time picker (clock icon), party size (user
   icon). `.template-btn2` "book a table" submit button. Inputs: no border,
   white `input-group-text` with icon, `0 5px 5px 0` radius.

10. **Footer** — dark navy `#131230` `.footer-widget` with 3 columns:
    - Col 1: logo2.png + description paragraph
    - Col 2: "contact us" with address, phone, email (each with golden icon)
    - Col 3: "opening hours" with daily schedule
    Copyright bar: darker `#0d0d27` bg, white text, social icons (fb, twitter,
    google+, pinterest, instagram). Colorlib attribution (to be replaced with
    Component Dock link).

### Design tokens (live stylesheet, verified 2026-09-22)

Fetched `style.css` (41,591 bytes). Key tokens already captured in spec.md
Design Tokens table above.

**Color palette summary:**
- Primary: `#ffb606` (golden yellow) — accent, buttons, highlights, icon color
- Dark: `#131230` (near-black navy) — headings, text, footer bg
- Deeper: `#0d0d27` — copyright bar bg
- Light: `#f9f9ff` (very light lavender) — card bg, menu dropdown, inputs
- Body: `#777777` — body text
- White: `#fff` — header bg, card bg, banner text
- Overlay dark: `rgba(1,7,16,0.7-0.8)` — testimonial/table/reservation overlays

**Typography:**
- Headings: Playfair Display 400/700, serif
- Body/nav: Roboto 300/400/500/700, sans-serif
- Banner h1: 60px Playfair Display, bold, italic (but `.style-change` resets italic)
- Banner h2: 42px Playfair Display, bold
- h3: 36px Playfair Display, bold, dark `#131230`
- Body: 14px Roboto 400, `#777`

**Button variants:**
- `.template-btn`: `#ffb606` bg, `#131230` text, uppercase, Roboto 14px 500,
  no border-radius, 12px 30px padding. Hover: transparent bg + `#ffb606` border
- `.template-btn2`: inherits template-btn, hover shows golden text instead of
  transparent bg
- `.template-btn3`: text-only button with arrow icon that slides right on hover

### Picsum placeholder plan

- Hero banner: `https://picsum.photos/seed/foodcraft-hero/1920/800` (background)
- Welcome image: `https://picsum.photos/seed/foodcraft-welcome/600/500`
- 6 food items: `https://picsum.photos/seed/foodcraft-food1/400/300` through
  `foodcraft-food6`
- Reservation bg: `https://picsum.photos/seed/foodcraft-reserve/1920/600`
- 2 dish images: `https://picsum.photos/seed/foodcraft-dish1/500/400` and
  `foodcraft-dish2/500/400`
- Testimonial bg: `https://picsum.photos/seed/foodcraft-testimonial/1920/800`
- 3 update images: `https://picsum.photos/seed/foodcraft-update1/400/300` through
  `foodcraft-update3`
- Table bg: `https://picsum.photos/seed/foodcraft-table/1920/600`
- Customer avatars: `https://picsum.photos/seed/foodcraft-customer1/100/100` and
  `foodcraft-customer2/100/100`

### Icon mapping (lucide)

| Source icon (Font Awesome 4)    | Recreation                     |
| ------------------------------- | ------------------------------ |
| `fa-facebook`                   | lucide `Facebook`              |
| `fa-twitter`                    | lucide `Twitter`               |
| `fa-google-plus`                | lucide `Google` (or `Globe`)   |
| `fa-pinterest`                  | lucide `Pin`                   |
| `fa-instagram`                  | lucide `Instagram`             |
| `fa-map-marker`                 | lucide `MapPin`                |
| `fa-phone`                      | lucide `Phone`                 |
| `fa-envelope-o`                 | lucide `Mail`                  |
| `fa-user-o`                     | lucide `User`                  |
| `fa-calendar`                   | lucide `Calendar`              |
| `fa-clock-o`                    | lucide `Clock`                 |
| `fa-long-arrow-right`           | lucide `ArrowRight`            |
| `fa-heart-o`                    | lucide `Heart`                 |

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/foodcraft` from the simplest existing app
       (`cp -r apps/<simplest> apps/foodcraft`), rename package to
       `@free-react-templates/foodcraft`, add Playfair Display 400/700 +
       Roboto 300/400/500/700 Google Fonts `<link>` in index.html, set
       `public/CNAME` = `foodcraft.free.componentdock.com` + `"homepage"`.
       Register the workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Navbar (logo, nav links, Blog submenu toggle),
       Hero (heading with accent spans, subtext), Welcome (split layout,
       heading, paragraphs, CTA button), FoodGrid (6 cards with name, price,
       description, hover state), ReservationCTA (heading, subheading, button),
       SpecialDishes (2 dishes with number, name, description, price, arrow
       link), Testimonials (heading, 2+ cards with avatar, name, role, quote),
       FoodUpdates (3 cards with image, meta, title, description, read-more),
       TableBooking (3 inputs with icon, submit button), Footer (3 columns,
       copyright bar with social icons, Component Dock link), App (landmarks,
       document title "Foodcraft — Restaurant").
3. [ ] Layout shell: Navbar floating (absolute, 80% width, white bg, 3px
       radius), Hero full-width with bg image and overlay, section padding
       130px.
4. [ ] Hero section: background image via picsum, grey fallback, white text
       with golden accent on key words.
5. [ ] Welcome section: container-fluid, 2-column split, decorative image left,
       text right with heading, paragraphs, CTA button.
6. [ ] Food Grid: 3-column responsive grid, 6 cards with image (overflow
       hidden + scale hover), content area (light bg, golden on hover), dish
       name, price (golden), description.
7. [ ] Reservation CTA: full-width bg image, dark overlay, centered white text,
       button variant.
8. [ ] Special Dishes: 2 alternating layouts (text+image), large numbered h1,
       dish name, description, price, arrow link button.
9. [ ] Testimonials: dark overlay bg image, heading, carousel/cards with
       circular avatar, name, role, quote.
10. [ ] Food Updates: 3 blog-style cards with image, admin meta (icon+text),
        title, description, read-more arrow link.
11. [ ] Table Booking: dark overlay bg, form with 3 side-by-side icon-prefixed
        inputs, submit button.
12. [ ] Footer: dark navy 3-column layout (about/contact/hours), copyright bar
        with social icons and Component Dock link.
13. [ ] Run `npm run verify:app -- foodcraft` (typecheck -> lint -> vitest
        100% -> build) and fix until green.
14. [ ] Open PR `feat/template-foodcraft` -> merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (#ffb606 golden /
        #131230 dark / Playfair Display + Roboto), and what differs (renamed
        "Foodcraft", picsum placeholders, lucide icons, no ColorLib references,
        Component Dock footer).
15. [ ] Bookkeeping after merge: mark TEMPLATES.md line 1786 `[x]` + surge
        URL (`https://foodcraft.free.componentdock.com`), `npm run
        readme:status`, push.
