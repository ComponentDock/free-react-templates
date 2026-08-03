# Farmie (Colorlib Farmie) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Scarlet PR awaits review.
> Implementation ships later on `feat/template-farmie`.

## Design notes

- **Original:** ColorLib "Farmie" — free agriculture/farm shop website
  template (source: https://colorlib.com/wp/template/farmie/).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/farmie/`
  (HTTP 200) + stylesheet `style.css` (HTTP 200, ~324 KB, Bootstrap 5 based;
  note: `css/style.css` 404s — the root `style.css` is the real stylesheet).
- **Structure observed (1:1, section order):**
  1. Header — logo, nav (Home, About, Pages, Shop, News, Contact), cart
     badge "Your Cart (2)", "Contact Us" button.
  2. Hero — h2 "The hearth of the farm is the true center of our universe.",
     copy, CTAs, farm imagery.
  3. Benefits — Best Services, Farm Experiences, 100% Natural, Farm
     Equipment (icon + title + copy).
  4. About — "Let Us Tell You Our Story" + copy + "Read More" + image.
  5. Farm to Table (`bg-gray`) — "From Farm To Your Table"; steps Grow,
     Harvest, Quality Check, Deliver.
  6. Services — "Our Produce Is Mainstay For Us"; Fruit & Vegetable, Meat &
     Eggs, Milk & Cheese, Rice & Corn.
  7. Products — "Our Product Are Highest Quality"; prices $17.99, $9.99,
     $59.99, $29.99→$19.99 (sale); "Go to Store" button.
  8. Newsletter (bg image band) — heading + email input + "Subscribe".
  9. Farming Practices — "Farming Practices To Preserve Land & Water"; six
     items (Chicken Farmed For Meat, Pig Farm Management, Beef Cattle
     Farming, Improved Rice Cultivation, Soil Improvement Techniques,
     Intensive Fruit Farming).
  10. Testimonials (bg image band) — Mrs Lara Sullivan, Ajoy Das, Akash Khan.
  11. Contact — "Get In Touch With Us"; form (Send Message) + details.
  12. News (`bg-gray`) — four posts, meta "Post on 18 Aug 2018 / <author>".
  13. Trust Badges (`bg-gray`) — "Our Certifications & Guarantees": USDA
      Organic, Non-GMO, Fair Trade, Eco-Friendly, Quality Assured.
  14. Footer — about + address (120 Raymond Rd, New York ·
      info.deercreative@gmail.com · +84 223 9000), QUICK LINK, RECENT NEWS,
      STAY CONNECTED columns.
- **Design tokens:** brand green **#77b122** (primary buttons/icons/hover);
  text **#303030**/**#212529**, muted **#707070**/**#6c757d**/**#b7b7b7**,
  light sections **#f8f9fa**/**#f2f4f5**; font **Karla** (400/700) via Google
  Fonts; filled rounded green buttons; white/gray section alternation with
  two full-bleed parallax bands.
- **Recreation name:** Farmie (keeps the original name — it is already a
  distinct working name, not a ColorLib brand). App folder `apps/farmie`,
  package `@free-react-templates/farmie`.
- **Design approach:** green brand tokens in `@theme`
  (`--color-brand: #77b122`); light/gray section alternation matching the
  original; parallax bands simplified to fixed background images; seeded
  picsum placeholders `https://picsum.photos/seed/farmie-<n>/<w>/<h>`;
  lucide-react icons (Leaf, Tractor, Wheat, Truck, etc.); newsletter/contact
  forms with client-side validation (zod); repo-standard Navbar (dark-mode
  toggle) and Footer chrome; social icons (GitHub, X, LinkedIn) inline SVG.
- Reuse `packages/ui` (Button, ButtonLink, Card, Badge, cn) — do NOT
  duplicate components.
- Base implementation on `apps/doglife` (once it ships) or `apps/sage` —
  same multi-section landing architecture.

## Tasks

- [ ] Write `openspec/specs/template-farmie/spec.md` (Gherkin requirements +
      scenarios + replication findings) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/farmie` (copy `apps/sage`; rename package to
      `@free-react-templates/farmie`).
- [ ] TDD: tests first for Navbar, Hero, Benefits, About, Farm-to-Table,
      Services, Products, Newsletter, Farming Practices, Testimonials,
      Contact, News, Trust Badges, Footer, App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main, state D).
- [ ] Update README structure + `docs/ai-context.md` app list.
