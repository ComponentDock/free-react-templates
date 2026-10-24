# Flint — Design Notes

Reference: **Spark** — `https://colorlib.com/wp/template/spark/`
Live preview: `https://preview.colorlib.com/theme/spark/`
Design sheet: `https://preview.colorlib.com/theme/spark/css/style.css` (60,200 B, sha256 `d463cfe083c7c28d840c28f17681fec630bfa1d2830fcbd387f3d38249031d35`)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/spark-free-templatel.jpg (1200×946)
Shipped: https://flint.free.componentdock.com

Flint is a single-page minimal design-studio landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Spark" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

The design had no prepped spec: both of its TEMPLATES.md rows credited `apps/spark`, an app whose copy matches the "Appco" demo exclusively (25 hits vs 0), so the Spark design was still unbuilt. This template closes that gap.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display** (400/700 — headings, logo, quote mark), **Open Sans** (400/600/700 — body, 14px), with **Georgia** (serif italic) for blockquotes.

## Design tokens (`apps/flint/src/index.css` `@theme`)

| token                 | value                                               | role                                                                   |
| --------------------- | --------------------------------------------------- | ---------------------------------------------------------------------- |
| `--color-brand`       | `#367f7c`                                           | brand teal — pills, section rules, icon chips, footer links            |
| `--color-primary`     | `#367f7c`                                           | primary scale so shared Button/ButtonLink (bg-primary-600) render teal |
| `--color-primary-50`  | `#eef5f5`                                           | primary 50                                                             |
| `--color-primary-100` | `#d7e7e6`                                           | primary 100                                                            |
| `--color-primary-200` | `#b0d0ce`                                           | primary 200                                                            |
| `--color-primary-300` | `#86b7b5`                                           | primary 300                                                            |
| `--color-primary-400` | `#5c9d9a`                                           | primary 400                                                            |
| `--color-primary-500` | `#428c88`                                           | primary 500                                                            |
| `--color-primary-600` | `#367f7c`                                           | primary 600 (shared Button fill)                                       |
| `--color-primary-700` | `#2e6c69`                                           | primary 700 — hover fill (sheet)                                       |
| `--color-primary-800` | `#2b6663`                                           | primary 800 — active/focus border (sheet)                              |
| `--color-primary-900` | `#245452`                                           | primary 900                                                            |
| `--color-brand-dark`  | `#2b6663`                                           | hero fallback ground                                                   |
| `--color-brand-light` | `#45a39f`                                           | footer social chip hover (sheet)                                       |
| `--color-surface`     | `#ffffff`                                           | page surface                                                           |
| `--color-band`        | `#efefef`                                           | footer band, read-more arrow border (sheet)                            |
| `--color-ink`         | `#000000`                                           | headings, dark testimonial copy (sheet)                                |
| `--color-body`        | `#212529`                                           | body copy (sheet)                                                      |
| `--color-muted`       | `#6c757d`                                           | dates, sub-menu items (sheet)                                          |
| `--color-footer-text` | `#888888`                                           | footer copy (sheet)                                                    |
| `--color-footer-link` | `#777777`                                           | footer links, social chip ground (sheet)                               |
| `--font-sans`         | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | body                                                                   |
| `--font-display`      | `'Playfair Display', ui-serif, Georgia, serif`      | headings, logo                                                         |
| `--font-serif`        | `Georgia, ui-serif, serif`                          | blockquotes                                                            |

Sheet evidence: `#367f7c` ×31 declarations, `#fff` ×44, `#000` ×18,
`#212529` ×15, `#6c757d` ×8, `#f8f9fa`/`#e9ecef` ×4, `#2b6663` ×4,
`#efefef` ×2. Hovers reuse the sheet's own `#2e6c69` / `#2b6663` / `#45a39f`.

## Document order

| #   | component      | spec requirement                             | notes                                                                                                                                                                  |
| --- | -------------- | -------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 1   | `Navbar`       | Overlay navigation with dropdown             | absolute over the hero (`py-5`), white 14px links, CSS-only dropdown (`group-hover` + `group-focus-within`), 300px slide-in mobile panel                               |
| 2   | `Hero`         | Full-viewport split hero                     | `min-h-screen`, cover photo, 35 % teal panel (`w-[35%]`), `bg-black/35` scrim, 50px Playfair headline, testimonial (`Testimonial tone="light"`)                        |
| 3   | `Intro`        | Editorial introduction section               | 50×2px teal rule + serif headline, Georgia italic pull quote beside three paragraphs, photo with an offset white caption card (`-mt-12 w-4/5 p-10`, "We love minimal") |
| 4   | `Services`     | Services grid                                | centred rule + "Our Services Includes...", four 90px `bg-brand/10` chips (lucide `Lamp`, `BedDouble`, `Armchair`, `Bath`), 20px bold titles                            |
| 5   | `BlogPosts`    | Blog cards with read-more affordance         | four cards: 200px cover link, white body, 12px date, 16px bold title (hover teal), summary, "Read More" + 30px circular arrow                                          |
| 6   | `Testimonials` | Testimonial row                              | three `Testimonial tone="dark"` blocks, three columns                                                                                                                  |
| 7   | `CallToAction` | Call-to-action band                          | teal `#367f7c` band, white 24px heading left, uppercase outline pill (`ButtonLink`) right                                                                              |
| 8   | `Footer`       | Footer with contact details and social links | `#efefef` band, About + Connect (six 30px brand-icon chips), Links, Company, Contact columns, Component Dock credit line                                               |

## Fidelity notes

- Photos: `picsum.photos/seed/flint-<n>/<w>/<h>` (deterministic placeholders, no source assets).
- Icons: lucide-react for UI glyphs; brand social icons as inline SVG paths (lucide-react ships no brand icons).
- Copy is the demo's placeholder lorem (kept verbatim — it is filler, not brand copy); the site name is Flint everywhere.
- Omitted: the reference's spinner preloader (`.loader`) — page chrome, not a section, and it only adds an artificial delay.
- The reference's "Read More" label fades in on card hover; the recreation keeps the label visible and turns it teal on hover (keyboard/touch accessible).
- Footer credit: the reference's own credit line is replaced by the Component Dock line required by AGENTS.md rule 5.
