# Couture (Colorlib Modist) — Tasks & Design Notes

> Renamed from the prep-stream source-named batch (template-modist →
> template-couture) on claim. Implementation ships on `feat/template-couture`.

## Design notes

- **Original:** ColorLib "Modist" — free fashion shop website template
  (source: https://colorlib.com/wp/template/modist/). New name: **couture**.
- **Live preview DOM analyzed (re-verified on claim):**
  `https://preview.colorlib.com/theme/modist/` (HTTP 200, ~43KB) +
  `css/style.css` (~79KB).
- **Structure observed (1:1):** navbar (Modist + Home/Shop/About/Blog/
  Contact) → hero (bg photo + pink #f1b8c4 overlay panel, vertical side
  texts "Modist - Time to get dress" / "Since - 1985", h1 "Le Stylist" +
  h2 "Wear Your Dress") → trending ("Trending", 6 tiles "Young Woman
  Wearing Dress" $120.00, sale tiles 30% badge + $80.00) → intro band
  ("Modist Online Fashion Shop" + 2 paragraphs) → products ("Our Products",
  4 tiles + "Add to cart") → sale band ("Summer Sale", 120px white heading
  on photo) → testimony (quote + "Roger Scott — Customer") → blog ("Recent
  Blog", 3 cards, "Dec 6, 2018 · Admin · 3") → counter band (10000 Happy
  Customers / 100 Branches / 1000 Partner / 100 Awards) → services ("We
  want you to express yourself": Refund Policy, Premium Packaging, Superior
  Quality) → subscribe ("Subscribe to our Newsletter", email input +
  Subscribe) → footer (Menu / Help / "Have a Questions?").
- **Design tokens:** brand pink **#f1b8c4** + black **#000000** / dark
  **#212529** text; light **#f8f9fa**/`bg-light` bands; gray **#6c757d**;
  headings **Roboto Condensed** (hero h1 120px/700/uppercase, h2 20px
  uppercase ls-4px) + body **Lato**/**Work Sans** via Google Fonts.
- **Recreation name:** Couture. App folder `apps/couture`, package
  `@free-react-templates/couture`.
- **Design approach:** hero = seeded picsum fashion photo + pink overlay
  panel + vertical side texts; trending/products grids with seeded photo
  tiles + sale badges + struck-through prices; sale band; testimony band;
  blog cards; counter band (static numbers); services with lucide icons;
  subscribe band with success-state form; footer with link columns; all
  images picsum-seeded (`picsum.photos/seed/couture-N/w/h`); Google Fonts
  via `<link>`.
- Reuse `packages/ui` (cn, Button, ButtonLink, Card, Badge) — do NOT
  duplicate components.
- Base implementation on `apps/aurora` / `apps/haute` (multi-section
  landing with Navbar/Hero/Sections/Footer structure + dark-mode toggle and
  mobile menu patterns).

## Tasks

- [x] Rename spec + docs on claim: `template-modist` → `template-couture`,
      `docs/templates/modist` → `docs/templates/couture` (new name rule).
- [x] Mark Modist `[~]` in TEMPLATES.md on the branch (line 225).
- [x] Refine spec with re-verified replication findings (hero overlay panel,
      vertical texts, intro band, counter band, prices, fonts).
- [x] Scaffold `apps/couture` (copy multi-section app, rename package to
      `@free-react-templates/couture`).
- [x] Write tests first (TDD, red phase): Navbar, hero, trending, products,
      sale, testimony, blog, services, subscribe, footer + dark mode.
- [x] Implement components using `packages/ui` + `cn()`, picsum-seeded
      images, lucide icons, Google Fonts (Roboto Condensed + Lato).
- [x] Run verification gate: `scripts/verify-app.sh couture` (typecheck →
      lint → 100% coverage tests → build). Also `npm run spec:validate`.
- [x] Self-review (docs/self-review.md), update TEMPLATES.md docs, commit
      conventionally, push branch, open PR to main, merge immediately.
- [x] Bookkeeping on main: mark all 3 Modist rows `[x]` + surge URL,
      homepage, `npm run readme:status`, push.
