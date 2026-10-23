# Dropnest — Design Notes

Reference: **Dropdown 19** — `https://colorlib.com/wp/template/dropdown-19/`  
Live preview: `https://preview.colorlib.com/theme/dropdown-19/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-19.jpg  
Shipped: https://dropnest.free.componentdock.com

A dropdown menu designed for online education platforms. The dropdown displays a trigger button labeled "Courses" and, when opened, reveals three category columns: Design, Development, and Marketing. Each category has a heading and a list of course links.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400;500;700**

## Design tokens (`apps/dropnest/src/index.css` `@theme`)

| token                          | value                | role                 |
| ------------------------------ | -------------------- | -------------------- |
| `--color-dropnest-brand`       | `#3fc5f0`            | dropnest brand       |
| `--color-dropnest-brand-hover` | `#12b5ea`            | dropnest brand hover |
| `--color-dropnest-bg`          | `#fafafa`            | dropnest bg          |
| `--color-dropnest-card`        | `#ffffff`            | dropnest card        |
| `--color-dropnest-text`        | `#6c757d`            | dropnest text        |
| `--color-dropnest-heading`     | `#000000`            | dropnest heading     |
| `--color-dropnest-border`      | `rgba(0, 0, 0, 0.1)` | dropnest border      |

## Document order

| #   | component         | spec requirement        | notes                   |
| --- | ----------------- | ----------------------- | ----------------------- |
| 1   | `CoursesDropdown` | Dropdown open and close | see fidelity note below |
| 2   | `Footer`          | —                       | no dedicated spec block |

## Section-by-section fidelity

Bands marked _anchors only_ have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `CoursesDropdown`

The dropdown SHALL open on trigger click, close on second click, outside click, or Escape key.

### `Footer`

_anchors only_ — Dropnest · Courses Dropdown · Component Dock

## Deltas from the reference

- Photographs are deterministic placeholders (`picsum.photos/seed/…`); no source asset is copied.
- Icon glyphs come from `lucide-react`, not the source's icon font.
- Copy is paraphrased to the same kind of content (headline + subtext + CTA, card title + blurb + link).
- The source's credit bar is replaced by the Component Dock credit (see delivery contract).

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/dropnest/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dropnest/public/CNAME` = `dropnest.free.componentdock.com`
  and the package `homepage` = `https://dropnest.free.componentdock.com`.

## Reference tokens (measured 2026-10-23)

Evidence: slug-only `https://preview.colorlib.com/theme/dropdown-19/` returns **HTTP 404**; the live demo is https://preview.colorlib.com/theme/bootstrap/dropdown-19/ — **HTTP 200** on 2026-10-23, title "Dropdown #9". Its `css/style.css` is byte-identical (sha256 `6d6485dcaaf8029c...`, 12,597 bytes) to `dropdown-19/css/style.css` in `https://preview.colorlib.com/downloads/free/dropdown-19.zip`, so the archive is the live demo's un-versioned twin.

- Hex census: `#007bff` 5, `#ffc107` 3, `#dc3545` 3, `#212529` 3, `#6c757d` 1, `#16181b` 1 (count = rules containing the literal).
- Typefaces: All UI: `Roboto`.
- Radii: `0.25rem` — dropdown panel corners.
- Section order (shipped): `CoursesDropdown -> Footer`.

### Deltas measured against the shipped app

- `--color-dropnest-brand: #3fc5f0` (cyan) and `#fafafa` occur **0 times** in the reference stylesheet. The reference column accents are Bootstrap blue `#007bff`, amber `#ffc107`, crimson `#dc3545`.
- The TEMPLATES.md screenshot is captioned "Dropdown #9" although the slug is `dropdown-19` — same demo, caption drift only.
