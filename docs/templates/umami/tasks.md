# Umami (ColorLib Yummy 2) — Tasks & Design Notes

> Prep artifacts committed on `main` (prep stream). Implementation ships
> later on `feat/template-umami` (implementer stream).

## Design notes (replication findings)

- **Original:** ColorLib "Yummy 2" — free food magazine website template
  (source: https://colorlib.com/wp/template/yummy-2/, slug `yummy-2`;
  categories Blog, Business, Food & Drinks; released April 2026; License
  CC BY 3.0; images from Unsplash; Bootstrap Framework; multipage: index,
  about-me, categories, recipe, blog, contact).
- **Preview UNREACHABLE (official):** `https://preview.colorlib.com/theme/yummy-2/`
  → "Not Found"; hub link `https://preview.colorlib.com/#yummy-2` (JS hub);
  `https://yummy-2-colorlib.pages.dev/` → NXDOMAIN; no Wayback snapshot.
- **Reachable mirror used as the DOM/CSS reference:**
  `https://themewagon.github.io/yummy2/` — ThemeWagon's GitHub Pages demo of
  the exact same ColorLib template (Bootstrap 4 asset). Its content matches
  the TEMPLATES.md screenshot 1:1 (identical post titles: "Cannellini Aglio
  e Olio with Salmon", "Raw Vegan Carrot Cake Bites with Avocado", "Beef
  Burger with French Fries and Salad", "Raspberry Pancakes with Honey and
  Butter", "Sunday Brunch: Spaghetti and Eggs Recipe"). Source zip (for
  reference only — NEVER copy assets):
  `https://github.com/themewagon/yummy2/archive/refs/tags/v1.0.0.zip`.
- **Visual design (screenshot + mirror):** clean minimal white food-magazine
  look. Centered serif-italic wordmark + "FOOD BLOG" tagline; centered nav
  with pink-underlined active link + search icon; hero = 3-column grid
  (wider center) with a large featured recipe photo and an overlapping white
  caption box (grey date + bold title), flanked by 2+2 smaller posts
  (photo + centered title below); light-grey "Top Recipes this Week"
  section (bg `#F8F9FB`) with a right-aligned white bold H5 on a **pink
  `#FC0254` box** overlapping the section top; "Featured Recipes" section
  with the same pink title box + large card + small cards; footer on
  `#EAEDF2` band (logo + grey blurb left, "Subscribe to our newsletter"
  email form right, social icons, copyright bar). Hover on post photos =
  translucent pink overlay + white icon.
- **Section order (1:1):**
  1. Header: centered logo · nav Home (active pink underline) / Pages
     (dropdown: About Me, Categories, Recipe, Blog, Contact) / Recipes /
     Best Of / Contact · search toggle (input "Search here…") · mobile menu.
  2. Hero page-top-recipe: 3-col grid — center large item (photo ≈745px,
     white caption box overlapping bottom with grey date "March 10, 2019"
     - H3 "Cannellini Aglio e Olio with Salmon"); left col: "Raw Vegan
       Carrot Cake Bites with Avocado", "One Pot Weeknight Lasagna Soup
       Recipe"; right col: "Beef Burger with French Fries and Salad",
       "Raspberry Pancakes with Honey and Butter" (photos ≈311px, centered H4
       below).
  3. Top Recipes this Week (bg `#F8F9FB`, .spad 100px): pink title box
     (white bold right-aligned H5); left large card (photo ≈514px, pink
     uppercase category tag, H4, excerpt); right list of 4 small items
     (photo ≈145px, tag, H4, excerpt). Items: One Pot Weeknight Lasagna
     Soup Recipe (Desert), One Pot Weeknight Lasagna Soup Recipe (Vegan),
     Veggie soup with Mushrooms (Meat lover), Caramel Ice Cream with Berries
     (Desert), Fresh Octopus with lime juice (Desert). Tag = inline pink
     box, white 12px 700 uppercase, padding 4px 25px.
  4. Featured Recipes: pink title box; large card "Sunday Brunch: Spaghetti
     and Eggs Recipe" + smaller cards (source reuses the same title — use
     distinct titles for small cards).
  5. Footer (bg `#EAEDF2`, pt 70px): left logo + blurb (grey `#7a818d`);
     right newsletter heading + email input ("Your e-mail") + pink pill
     submit; socials (Instagram, Pinterest, Facebook, Twitter, Youtube);
     bottom bar "© 2026 … | Made with ♥ by Umami".
- **Design tokens (real values from the mirror's `css/style.css`):**
  - Primary **hot pink `#FC0254`** — active nav, title boxes, tags, submit
    btn, hover overlays.
  - Secondary **light pink `#FF5581`** — `.primary-btn` bg.
  - Text **`#353535`** (titles 700), darker `#222`/`#333`; grey `#878787`
    (dates), `#7a818d` (footer blurb).
  - Bg: `#fff`; `#F8F9FB` (Top Recipes); `#EAEDF2` (footer); also `#F5F6FA`,
    `#F8F9FB`.
  - Font: **PT Sans** 400/700 (body/nav/headings); **Playfair Display
    italic** (logo wordmark, per screenshot).
  - Buttons: pill 50px; submit = `#FC0254` bg, white 600 uppercase 14px, ls
    1.5px, padding 25px 70px; primary = `#FF5581` bg, 20px 400, padding
    11px 44px 15px.
  - Section-title box: `#FC0254` bg, width ≈430–470px, right-aligned white
    bold H5, padding 18px 0 + right 40px, abs-positioned overlapping top
    (-57px). `.spad` = 100px padding.
  - Nav: centered inline, ≈60px gap, active = pink + underline.
- **Recreation name:** Umami (single lowercase word; Japanese "savory
  taste" — fits a food magazine brand; NO collision with `apps/` or existing
  spec folders). App folder `apps/umami`, package `@free-react-templates/umami`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/umami-<n>/<w>/<h>`); lucide-react icons (Search,
  Menu, X, ChefHat/CookingPot, Instagram, Facebook, Twitter, Youtube,
  ArrowUpRight/Plus, Mail — VERIFY exports; Pinterest NOT reliably in lucide
  → text label or drop, no new deps); PT Sans + Playfair Display via Google
  Fonts; NO dark mode (source has none); newsletter form client-side
  validated with inline success; mobile menu with aria-expanded; repo
  standard extras (skip link, back-to-top, cookie banner, scroll-reveal).
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Fidelity
  decisions for the PR: single-page home recreation only (source is
  multipage), contact form + Google Maps on source contact.html are out of
  scope, logo recreated as text (never the source `img/logo.png`).

## Tasks

- [x] Write `openspec/specs/template-umami/spec.md` (Gherkin requirements +
      scenarios reflecting the sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/umami` (copy a simple card-grid app — e.g. Crumb or
      Savor; rename package to `@free-react-templates/umami`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Gate: `scripts/verify-app.sh umami` (typecheck → lint → 100% coverage
      tests → build) + `npm run spec:validate`.
- [ ] Push `feat/template-umami`, open PR (source template, preview URL,
      design tokens, what differs, mirror-reference note), merge
      immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main), `npm run readme:status`.
