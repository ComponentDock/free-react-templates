# Savora (ColorLib Restauco) — Tasks & Design Notes

> Recreation of ColorLib "Restauco" — free Bootstrap-based restaurant
> website template (https://colorlib.com/wp/template/restauco/) under the
> NEW name **Savora** ("savor" — to enjoy food fully — plus the warm "-a"
> ending; single lowercase word, no collision with `apps/`, `openspec/specs/`
> or `docs/templates/` — verified 2026-08-14), per the monorepo naming
> mandate (never reuse the ColorLib source name). Full spec:
> `openspec/specs/template-savora/spec.md`.

## Design notes (replication findings)

- **Original:** ColorLib "Restauco" — restaurant one-pager, Bootstrap based
  (bootstrap.min.css + owl.carousel + slicknav + gijgo + nice-select +
  fontawesome + themify + slick) + custom `assets/css/style.css` (~80 KB).
  Brand name used in the source copy: "Délicious". TEMPLATES.md category:
  **Bootstrap 5 (89)**, first occurrence at line 621 (`- [ ]`, source NOT
  shipped anywhere). DUP-ROW TRAP: the `restauco` slug also appears at line
  2694 (**Restaurant (41)**) — both `- [ ]` rows of the SAME template; ONE
  implementation covers both rows (mark all `[x]` with the same surge URL at
  bookkeeping).
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/restauco/` — HTTP 200, ~46 KB HTML
  (REACHABLE). Custom CSS in `assets/css/style.css` (~80 KB, carries all
  tokens); plus bootstrap/owl/slicknav/gijgo/themify/fontawesome/nice-select
  helpers. Screenshot `restauco-free-template.jpg` (1200×946, AVIF → viewed
  in browser) matches the live DOM for the visible top half (blush split
  hero + flat-lay brunch photo + floating testimonial chip + white services
  cards with coral line-art icons).
- **Visual design:** clean, appetizing, minimalist restaurant one-pager.
  Warm palette: coral `#FE5F41` accents on pale blush `#FFF4F2` hero over
  stark-white sections. Split hero (left caption / right brunch-table flat
  lay with a small white testimonial card overlapping the image: avatar,
  quote, 5 gold stars, "- Robert"). Headings in the rounded geometric Mitr
  sans (dark cocoa `#4D312C`), body in Raleway (warm gray `#94817E`). All
  CTAs are coral pills (radius 35px). Dishes section sits on a full-width
  background photo with white card tiles and a `$20`-style price badge;
  booking is a split section (owner photo left, pill form right);
  testimonials are round-avatar cards in a slider; a full-width Instagram
  photo strip precedes a light 4-column footer.
- **Section order (1:1, verified from live DOM):**
  1. **Header/nav** (`header-area header-transparent`, absolute over hero):
     logo image left; nav **Home · Menu · About · Blog** (dropdown: Blog,
     Blog Details) **· Element · Contact**; right phone **+10 (78) 783 3674**
     - **Book a Table** outlined pill (`btn header-btn2`). Nav links Mitr
       16px `#4D312C`, hover coral + coral underline sweep; submenu bg solid
       coral. Sticky state: solid `#FFF4F2` + shadow. Recreation: brand
       "SAVORA", single-page/dead-end links.
  2. **Hero slider** (`slider-area slider-height`, bg `#FFF4F2`, ~950px):
     left caption — h1 **"Meet, Eat & Enjoy the true test"** (fix typo →
     "true taste"), paragraph, **Our Menu** coral pill (`btn hero-btn`,
     padding 35px 55px, shadow rgba(254,95,65,0.14)) + **Watch Video** play
     link; right `hero-img` photo + floating rating chip (avatar, h3 quote,
     5 stars, "- Robert").
  3. **Services** (`our-services section-padding`): section-tittle **"Best
     way to eat healthy food"** + p; 3 `single-services` cards (white, 1px
     `#E6DAD8` border, radius 10px; hover coral shadow): SVG icon + h5 + p —
     **Healthy Meal · Fast Food · Delicious Coffee**.
  4. **Most Popular Dishes** (`our-client section-img-bg2`, cover bg photo
     `section-bg1.jpg`): white h2 **"Most Popular Dishes"** + p; `nav-tabs`
     filter **Full Menu · Breakfast · Lunches · Dinner · Drinks · Fastfood**;
     3-col `single-cat` grid: photo + **$ price badge** (numbering) + h5
     name + blurb + **Order Now** (`browse-btn` coral underline); **Full
     Menu** pill right.
  5. **Booking** (`three-area top-padding`): split — left `honer-area` photo
     `woner.jpg` (xl-7); right `form-wrapper` (xl-4): **"Book a table"** +
     p; `form#three-form`: **Number of guest** (full), **Date** (datepicker,
     half), meal-time **select** (half — source options Dinner ×3 +
     "Brack-fast"; normalize to Breakfast/Lunch/Dinner, note deviation),
     **Phone no.** (full), **Message** textarea (full), **Sent Request**
     `submit-btn` full-width coral pill (hover sweep `#4D312C`).
  6. **Testimonials** (`customer-section`): **"What our customer sayes"**
     (fix typo → "says") + p; `customer-active` slider of white cards:
     round photo, quote, 5-star rating, "- Robert".
  7. **Instagram strip** (`location-house`): full-width row of 4 food photos
     (`instra1-4.jpg`) — static grid fine.
  8. **Footer** (`footer-area footer-padding`): brand + about p + socials
     (Twitter, Facebook, LinkedIn, Pinterest); **Quick Links** (Home · About
     · Services · Blog · Contact); **Cakes** (Blackforest · Bodhubon ·
     Rongdhonu · Meghrong); **Contact Us** (76/A, Green Lane, Dhanmondi,
     NYC · +10 (78) 738-9083 · restaurco89@gmail.com); bottom bar copyright
     — Colorlib credit → **Component Dock link (mandatory)**.
- **Design tokens (from `style.css`):** brand coral `#FE5F41` (btn bg, nav
  hover/underline, dropdown bg, footer links, socials, stars, badges),
  hover `#EC583A` / social `#F04506`; headings `#4D312C` Mitr 500; body
  `#94817E` Raleway 16px; muted `#5E5E5E`/`#999999`; hero/sticky bg
  `#FFF4F2`; card border `#E6DAD8`; form border `#EAEAEA`, text `#071112`;
  pills radius 35px (form fields 25px), cards radius 10px; section padding
  120px; section-tittle h2 44px Mitr.

## Implementation tasks (TDD, in order)

- [ ] Scaffold: copy simplest existing app → `apps/savora`, rename package
      `@free-react-templates/savora`, register workspace
      (`npm install --package-lock-only`), `public/CNAME` =
      `savora.free.componentdock.com`, homepage
      `https://savora.free.componentdock.com`; footer MUST link
      `https://www.componentdock.com/`
- [ ] `@theme` tokens: `--color-coral: #fe5f41` (+ hover `#ec583a`),
      `--color-cocoa: #4d312c`, `--color-sand: #94817e`,
      `--color-blush: #fff4f2`, `--color-linen: #e6dad8`; fonts Mitr +
      Raleway via Google Fonts `<link>` in `index.html`
- [ ] Navbar (transparent absolute over hero, brand, 5-6 links + Blog
      dropdown, phone + Book a Table outlined pill; sticky `#FFF4F2` bar on
      scroll; hamburger → mobile panel)
- [ ] Hero (blush bg split: h1 "Meet, Eat & Enjoy the true taste", p, coral
      Our Menu pill + Watch Video play link; right brunch photo + floating
      rating chip w/ 5 stars; photo hidden < 576px per source)
- [ ] Services ("Best way to eat healthy food" + 3 white cards w/ coral
      line-art icons: Healthy Meal / Fast Food / Delicious Coffee; hover
      coral shadow)
- [ ] Popular dishes (bg-photo section, white heading + filter tabs
      Full Menu/Breakfast/Lunches/Dinner/Drinks/Fastfood, 3-col cards w/ $
      price badge + Order Now; Full Menu pill)
- [ ] Booking (split: owner photo left, form right — Number of guest /
      Date / meal-time select / Phone no. / Message / Sent Request;
      dead-end submit)
- [ ] Testimonials ("What our customer says" + round-avatar cards w/ quote,
      5-star rating, author; static row or slider)
- [ ] Instagram strip (full-width 4-photo row)
- [ ] Footer (4 columns: brand+about+socials / Quick Links / Cakes /
      Contact Us + bottom bar with Component Dock credit)
- [ ] Placeholder images: `picsum.photos/seed/savora-<n>/<w>/<h>` — brunch/
      food subject for hero + dish cards + instagram strip; screen seeds
      before pinning (seed-screening method: warm/dark pixel metric +
      browser_vision on top candidates)
- [ ] `scripts/verify-app.sh savora` green (typecheck + lint + 100%
      coverage + build); spec:validate; PR with source/preview/tokens
      noted; bookkeeping: both `- [ ]` rows (lines ~621, ~2694) → `[x]` +
      same surge URL + `npm run readme:status`
