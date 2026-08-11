# Taverna (ColorLib Appetizer) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream (stream 3). The spec
> folder `openspec/specs/template-taverna/` is the claim marker — implementers
> start here.

## Design notes (replication findings)

- **Original:** ColorLib "Appetizer" — restaurant / food & catering site
  (source: https://colorlib.com/wp/template/appetizer/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/appetizer/
  (HTTP 200, full rendered DOM + `css/style.css` (76KB) + `css/flaticon.css`
  extracted). Screenshot `appetizer-free-template.jpg` viewed in browser:
  dark photo hero, white outlined Monoton headline, orange CTAs, script
  subheadings.
- **Visual design:** elegant restaurant site. Dark photo hero (restaurant
  interior, black overlay 0.5) with centered white uppercase display
  headline + orange "Order Now" / outlined white "View Menu"; white body
  sections; orange/gold (#ffa323) accents on buttons, the round video play
  button, and giant script subheadings (Miss Fajardose, 100px) floating
  behind section titles; dark brown footer (#3c312e / #141313).
- **Structure (1:1, section order):**
  1. Navbar (`ftco_navbar bg-dark ftco-navbar-light`, transparent over hero):
     logo "Appetizer" + Home, About, Menu, Blog, Contact + orange **Book a
     table** button.
  2. Hero slider (`home-slider owl-carousel js-fullheight`): 3 slides (bg
     `bg_1..3.jpg` + black overlay) — **Our Delicious Specialties** / **The
     Best Place to Kick of Your Day** (typo in original; fix to "Kick Off")
     / **Creamy Hot and Ready to Serve**; each with **Order Now** +
     **View Menu**; carousel dots.
  3. About (`ftco-wrap-about`, white): script "About" + **Appetizer
     Restaurant** + paragraph + round orange play button (links Vimeo).
  4. Stats band (`ftco-counter img`, bg `bg_4.jpg`): **18 Years of
     Experienced, 15000 Happy Customers, 100 Menus, 20 Staffs** (40px black
     numerals).
  5. Catering Services (`bg-light`): "Services" + 3 icon cards — **Birthday
     Party, Business Meetings, Wedding Party** (flaticon cake/meeting/tray →
     lucide Cake/Briefcase/UtensilsCrossed).
  6. Our Menu (white): "Specialties" + 6 category columns — **Breakfast,
     Lunch, Dinner, Desserts, Wine Card, Drinks** — each with 3 items
     (photo `breakfast-1.jpg`-style, title, price **$29**, ingredient tags
     "Meat, Potatoes, Rice, Tomatoe"). Item card: border 1px #e6e6e6,
     radius 5px. The demo repeats the same 3 items per category — vary dish
     names per category while keeping the structure.
  7. Make Reservation (white): form **Name, Email, Phone, Date, Time,
     Person** (select 1/2/3/4+) + orange **Make a Reservation** submit; right
     half = Google map (stylized placeholder in recreation).
  8. Our Master Chef (white): "Chef" + 4 staff — **John Smooth (Restaurant
     Owner), Rebeca Welson (Head Chef), Kharl Branyt (Chef), Luke Simon
     (Chef)** — photo, name, position, blurb, social icons.
  9. Happy Customer (`testimony-section img`, bg `bg_5.jpg`): carousel of 5 —
     **Jason McClean, Mark Stevenson, Art Leonard, Rose Henderson, Ian
     Boner** — round avatar, quote icon, quote, "Customer".
  10. Instagram strip: 5 square photos (`insta-1..5.jpg`) with hover
      Instagram icon.
  11. Footer (`ftco-footer ftco-bg-dark`): brand + blurb + social
      (Twitter/Facebook/Instagram); **Open Hours** Mon–Thu 9:00–24:00,
      Fri–Sun 9:00–02:00; **Newsletter** email + Subscribe; **Instagram**
      6-thumb grid; copyright line.
- **Design tokens extracted from `style.css`:**
  - Primary **#ffa323** (`.btn.btn-primary` bg/border, `.icon-video`,
    subheading script). White secondary `.btn.btn-white` (bg/border #fff,
    text #000).
  - Body: **Poppins** 17px / line-height 2 / #666666; h2 headings black,
    weight 600. Hero h1: **Monoton** cursive, uppercase, ~5vw, white,
    letter-spacing 1px. Subheadings: **Miss Fajardose** cursive 100px
    #ffa323 behind the heading.
  - Hero overlay black 0.5; buttons `p-3 px-xl-4 py-xl-3`, radius 0.25rem.
  - Menu card: border #e6e6e6, radius 5px, padding 30px 20px; category h3
    30px weight 900. Counter numerals 40px weight 500 #000.
  - Sections padding 7em 0; light bg #f8f9fa. Footer bg #141313 / #3c312e,
    text rgba(255,255,255,0.7).
- **Recreation name:** Taverna (distinct from existing food names: bistro,
  feast, sapor, savor, savory, morsel, umami, tidbit, zest). App folder
  `apps/taverna`, package `@free-react-templates/taverna`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/taverna-<n>/<w>/<h>`); lucide-react icons; Poppins +
  Monoton + Miss Fajardose via Google Fonts; map → placeholder panel; menu
  items paraphrased but same structure; repo-standard Navbar (dark-mode
  toggle) + Footer chrome; reuse `packages/ui` (Button, ButtonLink, Badge,
  Card, cn).

## Tasks

- [x] Write `openspec/specs/template-taverna/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/taverna` (copy the simplest existing app; rename package
      to `@free-react-templates/taverna`; `npm install` at root for lockfile;
      register `injectUiSource()` in vite.config.ts).
- [ ] TDD: tests first for Navbar, HeroSlider, About, Stats, Catering,
      Menu, Reservation, Chef, Testimonials, InstagramStrip, Footer, App
      composition — all green at 100% coverage.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh taverna` (typecheck + lint +
      knip + fallow + 100% coverage tests + build).
- [ ] Push `feat/template-taverna`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main).
