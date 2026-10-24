# Smithy — Design Notes

- **Source slug:** `satner` — ColorLib "Satner" (`https://colorlib.com/wp/template/satner/`).
- **Preview URL:** `https://preview.colorlib.com/theme/satner/` — HTTP 200, 14,061 B,
  `<title>` "Independent Designer & Developer | Satner" (re-read 2026-10-24).
- **Theme stylesheet:** `css/style.min.css` — 238,377 B, sha256
  `88295271f4ae7a8d2e26972efaa3cb7b02cd98b0d6caa4a745496055250749fe`, served
  `?v=3.1.0` (the page's vendor sheets are swiper 14,615 B · photoswipe 7,423 B ·
  fontawesome subset 1,739 B — never counted as design tokens).
- **Archive:** `downloads/free/satner.zip` → **404**; the live preview is the only reference.
- **Category:** Personal / portfolio landing (single-page recreation of a multi-page theme).

> This is a **REBUILT kit** (`?v=3.1.0`, `st-section` band classes, "Kit" component
> names). Its *copy and band set* no longer match the original Satner that
> `apps/smithy` recreates — that is DRIFT, not a prep error. Its **palette and
> typefaces survive** the rebuild, so the token table below is measured from it
> and the app paints it.

## Source map (live preview, re-read 2026-10-24)

| page | status | bytes |
| --- | --- | --- |
| `index.html` (the directory URL is the same page) | 200 | 14,061 |
| `about.html` | 200 | 10,624 |
| `services.html` | 200 | 10,354 |
| `portfolio.html` | 200 | 8,995 |
| `contact.html` | 200 | 12,174 |
| `blog.html` | 200 | 8,467 |
| `elements.html` | 200 | 9,798 |

- Bands, in order: `header_area` → `home_banner_area` → `st-section` (×5, two of
  them `st-tint`) → `st-footer`. Eight bands, one decorative tint band every other section.
- Anchors: **43** — `services.html` ×5, `process.html` ×4, `contact.html` ×4,
  `index.html` ×3, `project-cedar|orbit|fieldnotes.html` ×3 each,
  `about.html` ×2, `portfolio.html` ×2, `resources.html` ×2, three
  `single-blog.html?story=…` links, **2 dead `href="#"`** (Pages + Blog toggles),
  1 external `https://colorlib.com`. The rebuilt kit's nav is
  Home · About · Services · Portfolio · Pages ▾ · Resources · Process · Blog ▾ ·
  Studio Notes · Contact; the app collapses it to the original five in-page items.

## Design tokens (from the live stylesheet)

| token | value | where it comes from |
| --- | --- | --- |
| Accent | `#4458dc` | the sheet's leading chromatic (gradients, `.btn`, links) — painted by the app's `--color-purple` |
| Accent deep | `#854fee` | second chromatic, always paired with `#4458dc` in the same gradient |
| Surface | `#ffffff` | the sheet's most-used literal; cards and header |
| Muted surface | `#f9f9ff` | 17 occurrences — the Brands band; the app paints the near-neighbour `#f9f9fd` (Δ2) |
| Ink / heading | `#000000` | headings, `.text-bg*` |
| Body text | `#6b6b6b` | paragraph colour (app: `#777777`) |
| Divider | `#eeeeee` | card borders, hairlines (app: `--color-line`) |
| One-off teal | `#2ebccd` | **a single occurrence** in the sheet; the app keeps it as `--color-teal` |
| Typeface | `Roboto` (body) + `Rubik` (headings) | 11 `font-family` rules each; both HTTP 200 on `fonts.googleapis.com/css2?family=<face>` |
| Radii | `3px` (buttons/inputs), `5px`, `var(--bs-border-radius)` (cards), `50%` (dots) | never round beyond these |
| Bootstrap tail | `#007bff` ×27, `#6c757d` ×19, `#343a40` ×19 | framework defaults from the rebuilt kit's vendor layer — **not** design tokens; do not promote them |

The app's `@theme` block carries exactly these roles (`--font-roboto`,
`--font-rubik`, `--color-purple`, `--color-purple-deep`, `--color-teal`,
`--color-ink`, `--color-body`, `--color-heading`, `--color-line`,
`--color-surface`) and loads `Roboto:wght@400;500;700` + `Rubik:wght@500;700`.

## Section order (app, and the original band each recreates)

1. **Navbar** — wordmark "Smithy", links Home · About · Services · Portfolio ·
   Contact, hamburger below `md`. Sticky, white, `shadow-sm`.
2. **Hero** — eyebrow "Hello", H1 "I am Alex Smith", sub-line "Senior Web
   Developer", two CTAs; portrait placeholder `picsum.photos/seed/smithy-hero`.
3. **About** — 50/50 image + copy, H2 "let's Introduce about myself", two
   paragraphs, gradient "Download CV" button.
4. **Brands** — 6 client-logo tiles (3×2 grid) beside a white stat card: "10",
   "Years Experience Working", phone glyph + `+1 (555) 123-4567`; band on
   `--color-surface`.
5. **Services** — H2 "service offers" + sub-line, 4 cards (WP Developing, UI/UX
   Design, Web Design, SEO Optimize) with circular gradient icon badges.
6. **Portfolio** — filter row `all · popular · latest · following · upcoming`,
   6 items, `picsum.photos/seed/smithy-p1..p6`.
7. **Testimonials** — H2 "What my clients say about working with me", quote cards.
8. **Newsletter** — email input + submit on the accent gradient.
9. **Footer** — "Smithy", "Follow Me" social row, Component Dock credit
   (`https://www.componentdock.com/`).

## Source → React adaptation

| source | recreation |
| --- | --- |
| multi-page nav (7 `.html` pages) | single page, five in-page anchors (`#home`, `#about`, …) |
| `header_area` fixed header + `menu_fixed` scroll class | `sticky`/`fixed` Tailwind header + `useState` hamburger |
| Bootstrap grid (`col-lg-6`, `container`) | `flex`/`grid` utilities, `max-w-7xl` container |
| `owl-carousel` testimonial slider | static quote grid (no carousel dependency) |
| Google-hosted photography | deterministic `picsum.photos/seed/smithy-*` placeholders |
| icon fonts (`fontawesome`, `liner_icon`) | `lucide-react` |
| gradient `.btn` (`#4458dc → #854fee`) | `bg-gradient-to-r from-[var(--color-purple)] to-[var(--color-purple-deep)]` |

## Deltas (recorded, not "fixed")

- The rebuilt kit's copy ("I am rahi satner", "Selected work", "A considered
  process", "Notes from the studio") is **not** what the app renders; the app
  renders the original Satner band set above. Do not rewrite the app to the kit's
  copy — the kit's six `st-section` bands have no Brands/Testimonials/Newsletter.
- The kit adds `process.html` and `resources.html`; the app has no equivalent
  page — no requirement covers them.
- Bootstrap's `#007bff`/`#6c757d` literals in the vendor layer are framework
  defaults, not the brand. Repainting the app blue would be drift *away* from the
  reference; the accent is `#4458dc`.
- Photographs are placeholders; no source asset is copied.

## Verification

```
python3 scripts/verify-docs-source.py --only smithy   # bucket AGREE
python3 scripts/verify-app-fidelity.py --slug smithy  # 0 unshipped (COVERED)
python3 scripts/measure-reference-tokens.py --slug satner
bash scripts/verify-app.sh smithy
```
