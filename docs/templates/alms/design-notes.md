# Alms — Design Notes

Reference: **Givehope** — `https://colorlib.com/wp/template/givehope/`
Live preview: `https://preview.colorlib.com/theme/givehope/`
Design sheet: `https://preview.colorlib.com/theme/givehope/css/style.css` (23,189 B, sha256 `48b382c553e6de2be3bb0a40c25a06a1116bc4cf66362cbd994829b4c1be97e1`)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/givehope-free-template.jpg (AVIF, 60,619 B)
Planned ship target: https://alms.free.componentdock.com

Alms is a single-page charity and fundraising landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Givehope" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

Row accounting: TEMPLATES.md line 1270 ("Givehope", `## Charity`) credited `apps/givehope`, but that app renders the "Bcharity" design (already shipped as `givemore`, row 1253). The Givehope design was never built, so this template closes the gap and the row is re-pointed at `alms` — the same shape as `flint` fixing the Spark row in docs/spec-row-mismatch.md. `apps/givehope` drops out of the census as a surplus duplicate (the `spark` → `flint` precedent).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Dosis** (300/400/500 — headings, 300 weight, near-black) and **Overpass** (300/400/600/700 — body copy, 16px/1.8 at weight 300). Buttons are 14px uppercase with `.2em` letter-spacing.

## Design tokens (`apps/alms/src/index.css` `@theme`)

| token                 | value     | role                                                                  |
| --------------------- | --------- | --------------------------------------------------------------------- |
| `--color-brand`       | `#f7ca44` | brand yellow — counter panel, badges, overlays, links                 |
| `--color-primary-50`  | `#fef8e3` | tint                                                                  |
| `--color-primary-100` | `#fdf0c0` | tint                                                                  |
| `--color-primary-200` | `#fbe08a` | tint                                                                  |
| `--color-primary-300` | `#f9d061` | tint                                                                  |
| `--color-primary-400` | `#f8cd50` | tint                                                                  |
| `--color-primary-500` | `#f7ca44` | primary 500 (sheet accent)                                            |
| `--color-primary-600` | `#f7ca44` | primary 600 — shared Button/ButtonLink fill                           |
| `--color-primary-700` | `#e0b32e` | primary 700 — hover fill                                              |
| `--color-primary-800` | `#c79d22` | primary 800 — active                                                  |
| `--color-primary-900` | `#a37f18` | primary 900                                                           |
| `--color-ink`         | `#000000` | headings (sheet `h1, h2, h3`)                                         |
| `--color-body`        | `#555555` | body copy (sheet `body`)                                              |
| `--color-muted`       | `#999999` | button labels, meta (sheet)                                           |
| `--color-soft`        | `#a2a2a2` | feature copy (sheet `.block-6 .media-body p`)                         |
| `--color-faint`       | `#b3b3b3` | donor time (sheet `.person-donate .time`)                             |
| `--color-line`        | `#f2f2f2` | progress track, hairline borders (sheet)                              |
| `--color-band`        | `#fafafa` | alternating section ground (sheet `.bg-light`)                        |
| `--color-footer`      | `#404040` | footer ground (sheet `.footer`)                                       |
| `--color-success`     | `#28a745` | success-story button border (sheet `.btn.btn-success`)                |

Radii: buttons square (`0`), photos `7px`, progress track `4px`, play control a
50px circle, donor avatars a 180px circle. Buttons carry a 2px transparent
border and the sheet's `0 5px 20px -5px rgba(0,0,0,.5)` shadow.

## Section order (1:1 with the reference)

1. Navbar — absolute over the hero, transparent on desktop, `#000` on mobile,
   wide-tracked uppercase wordmark, seven links, hamburger panel.
2. Hero — 70vh cover photo, 40 % black scrim, centred 70px light-weight
   headline, 50px white-outline play circle with a yellow "Watch Video" label.
3. Counter + introduction — left yellow panel (`padding: 50px`, black ink,
   "Served Over", 70px figure, "Children in 150 Countries", white square
   button); right "Who Are We?" column with lead paragraph, body paragraph and
   a yellow "Learn More" button.
4. Features — three media rows (50px yellow icon, 18px heading, `#a2a2a2` copy,
   underlined link), separated from the band above by a `#f2f2f2` hairline.
5. Latest Fundraisers — `#fafafa` band, centred heading/lead/link, six cards
   with photo, 24px title, copy, 0.2rem progress track, last-donation note and
   raised/goal summary.
6. Latest Donations — white band, centred heading/lead/link, four donor cards
   (180px avatar, name, muted time, amount toward a named cause).
7. Success story — cover photo under a 90 % yellow overlay, photo left, text
   right: upper-case eyebrow, h2, paragraph, bold raised total, green-bordered
   button.
8. Latest News — `#fafafa` band, three post cards with a yellow date badge over
   the photo, 20px title, date, excerpt, "Read More".
9. Volunteer — cover photo under the same 90 % yellow overlay, photo left,
   "Be A Volunteer Today" and a two-field form on the right.
10. Footer — `#404040`; About Us, Recent Blog (three thumbnails with
    date/author/comment meta), Get Connected (address, phone, email), copyright
    line and the Component Dock credit.

## What differs

- New name `Alms` (source slug is never used in app code).
- Photos are `picsum.photos/seed/alms-*` placeholders; icon fonts replaced by
  lucide-react icons; owl-carousel, fancybox, AOS and the Stellar parallax are
  replaced by static grids and CSS transitions.
- The hero's "Watch Video" is a same-page link instead of a fancybox video.
- The counter renders its final figure (`1,321,901`) rather than counting up.
- The volunteer form validates locally and confirms in place (no backend).
- The footer credit links `https://www.componentdock.com/` instead of the
  source attribution.
