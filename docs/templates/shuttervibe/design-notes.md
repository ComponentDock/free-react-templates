# Shuttervibe — Design Notes

Reference: **Thumber** — `https://colorlib.com/wp/template/thumber/`  
Live preview: `https://preview.colorlib.com/theme/thumber/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/thumber-free-template.jpg  
Shipped: https://shuttervibe.free.componentdock.com

Shuttervibe is a photography portfolio template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Thumber" photography portfolio design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Quicksand**, **Quicksand:wght@300;400;500;700;900**

## Design tokens (`apps/shuttervibe/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#e44985` | brand |
| `--color-brand-dark` | `#c7376e` | brand dark |
| `--font-heading` | `'Quicksand', sans-serif` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header bar | see fidelity note below |
| 2 | `MobileMenu` | Mobile menu | see fidelity note below |
| 3 | `Gallery` | Full-screen image gallery | see fidelity note below |
| 4 | `PhotoGrid` | Photo grid page | see fidelity note below |
| 5 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a fixed black header bar at the top with the logo "Shuttervibe" on the left and a hamburger "Menu" toggle on the right. Desktop nav links (Home, Photos, About Me, Contact) SHALL be visible on large screens; the hamburger toggle SHALL be visible on small screens.

### `MobileMenu`
The system SHALL provide an off-canvas mobile menu that slides in from the right (300px wide, white background) when the hamburger toggle is clicked.

### `Gallery`
The system SHALL render a Swiper-based gallery filling the viewport below the header. The main image area SHALL occupy 80% of the remaining height, and a thumbnail strip SHALL occupy the remaining 20%.

### `PhotoGrid`
The system SHALL render a responsive photo grid when navigating to the Photos page. Each photo SHALL show an image at 300px height (200px on mobile) with a dark overlay on hover showing a centered search icon and category label.

### `Footer`
The system SHALL render a footer linking to Component Dock.

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
- **Provenance ban.** No file under `apps/shuttervibe/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/shuttervibe/public/CNAME` = `shuttervibe.free.componentdock.com`
  and the package `homepage` = `https://shuttervibe.free.componentdock.com`.

## Reference tokens (measured 2026-10-23)

**The demo is REBUILT.** `https://preview.colorlib.com/theme/thumber/` (HTTP 200,
31,481 B) serves `Thumber 3.1.0` — sheets carry `?v=3.1.0`, markup loads
Bootstrap **5.3.8** plus a `/kit/` component layer (`kit/icons.css`,
`kit/gallery.min.css`, `kit/mobile-nav.min.css`, `kit/reveal.min.css`), and the
page is a **dark editorial redesign** with `home-intro` / `section-block` /
`commission` bands. The theme sheet is `css/style.min.css?v=3.1.0` (44,624 B,
sha256 `93f224e63a95…`).

Because the demo was redesigned, every mismatch below is **drift**, not a prep
error: the shipped app recreates the classic light Thumber (fixed black header
bar, full-screen Swiper gallery, thumbnail strip, mobile menu), whose structure
still exists in the rebuild but whose palette and display face do not.

| Token | Reference (3.1.0) | App (`apps/shuttervibe`) |
| ----- | ----------------- | ------------------------ |
| Brand pink | `#e44985` (`--bs-link-color`, heading rules, active nav) | `#e44985` ✓ (`--color-brand`) |
| Primary button | `#b5225a` | `#c7376e` (`--color-brand-dark`) ← literal drift |
| Focus/hover accent | `#f69cc0` | not tokenized |
| Display face | **Georgia serif** (48–98px clamp) | `Quicksand` for headings ← face drift |
| UI face | Quicksand (self-hosted woff2) | Quicksand ✓ |
| Body copy | `#b8b8b8` on a dark canvas | dark page, lighter copy |
| Surfaces | gallery `#141414`, plates `#181818`, footer `#080808`, header `#000` | black chrome ✓, no `#141414`/`#181818` ladder |
| Charcoal block | `#303030` (`.project-meta`, `.service-row`, `.process-grid li`) | not tokenized |
| Button shape | `.btn { border-radius: 30px }`, `min-height: 48px`, `padding: 0 28px`, 12px | pill-ish, similar |
| Form fields | bottom `2px solid gray`, radius `0`, white text; focus `#141414` + `#f69cc0` border | underline inputs ✓, no pink focus |
| Footer | `#080808`, `56px max(48px,…) 24px`, 14px | black footer ✓ |

Section order measured in the reference DOM: fixed `.header-bar` → `.home-intro`
(Georgia display + 1.3fr/1fr intro grid) → two `.section-block` bands with
`.collection-caption` / `.essay-copy` cards → `.commission` CTA → `.site-footer`.
The app's `Header/MobileMenu/Gallery|PhotoGrid/Footer` covers the header,
gallery and footer of that skeleton; the editorial text bands
(`home-intro`, `section-block`, `commission`) postdate the app.
