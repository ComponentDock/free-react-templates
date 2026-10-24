# Elevate — Design Notes

Reference: **Life Coaching** — `https://colorlib.com/wp/template/life-coaching/`  
Live preview: `https://preview.colorlib.com/theme/lifecoaching/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/lifecoaching-free-template.jpg  
Shipped: https://elevate.free.componentdock.com

A Coaching / Consulting template with navbar navigation, hero slider, about, services, statistics counters and pricing plans sections. Recreation of the ColorLib **Life Coaching** template for a coaching/consulting landing page.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter:wght@300;400;500;600;700**

## Design tokens (`apps/elevate/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#81d742` | brand |
| `--color-brand-dark` | `#6bc034` | brand dark |
| `--color-ink` | `#333333` | Ink — dark headings (#333333). |
| `--color-ink-light` | `#5f5f5f` | ink light |
| `--color-paper` | `#f7f7f7` | Paper — light section bg (#f7f7f7). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar navigation | see fidelity note below |
| 2 | `HeroSlider` | Hero slider | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `StatsCounter` | Statistics counters | see fidelity note below |
| 6 | `Pricing` | Pricing plans | see fidelity note below |
| 7 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 8 | `Cta` | CTA banner | see fidelity note below |
| 9 | `Blog` | Blog section | see fidelity note below |
| 10 | `Contact` | Contact form | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The app SHALL display a sticky navbar with logo, navigation links, dark mode toggle, mobile menu, and a CTA button.

### `HeroSlider`
The app SHALL display a full-width hero carousel with auto-advancing slides, navigation controls, and dot indicators.

### `About`
The app SHALL display an about section with an image and descriptive text.

### `Services`
The app SHALL display a services grid with 4 service cards.

### `StatsCounter`
The app SHALL display animated number counters that animate when entering the viewport.

### `Pricing`
The app SHALL display 3 pricing tier cards with features and CTA buttons.

### `Testimonials`
The app SHALL display a testimonials carousel with client quotes and navigation.

### `Cta`
The app SHALL display a call-to-action banner section.

### `Blog`
The app SHALL display a blog grid with 3 post cards.

### `Contact`
The app SHALL display a contact form with validation.

### `Footer`
The app SHALL display a footer with quick links, contact info, newsletter form, and Component Dock attribution.

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
- **Provenance ban.** No file under `apps/elevate/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/elevate/public/CNAME` = `elevate.free.componentdock.com`
  and the package `homepage` = `https://elevate.free.componentdock.com`.

## Token re-read (2026-10-24s) — live-sheet audit

- **Preview URL corrected:** the demo is `https://preview.colorlib.com/theme/lifecoaching/`
  (HTTP 200, 37,928 B, sheet `css/style.css` 80,582 B, sha256 `c8af002e5c36f4ce…`).
  `theme/life-coaching/` is a 404 — the earlier note in this file cited it.
- Tokens (from the sheet): lead **lime `#c5cf31`** (34 decls — links,
  `.heading-section .subheading`, the active nav block, `.btn.btn-primary`);
  secondary **sky blue `#8fd0d2`** (8 decls — `.bg-secondary`, `.services .icon`,
  `.services-2 .icon`, `.story-wrap .text h4 span`); ink `#212529` body /
  `rgba(0,0,0,.8)` headings; tinted band `#f8f9fa`; dark band `#333333`;
  Poppins 14 px body; radii 50% icon circles, 4–5 px controls.
- Screenshot agrees: lime nav tab + lime appointment button, sky-blue icon
  circles. Spec: `openspec/specs/template-elevate/spec.md` §Design tokens.
