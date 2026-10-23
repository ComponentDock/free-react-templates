# Formbox — Design Notes

Reference: **Contact Form 17** — `https://colorlib.com/wp/template/contact-form-17/`  
Live preview: `https://preview.colorlib.com/theme/contact-form-17/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-17.jpg  
Shipped: https://formbox.free.componentdock.com

Recreation of ColorLib "Contact Form 17" (https://colorlib.com/wp/template/contact-form-17/). Preview: https://preview.colorlib.com/theme/bootstrap/contact-form-17/ A two-column contact form with a navy blue (#35477d) sidebar showing contact information, and a white form panel with underline-style inputs.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@400;700;900**

## Design tokens (`apps/formbox/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#35477d` | brand |
| `--color-brand-dark` | `#2d3d6b` | brand dark |
| `--color-bg-page` | `#ffffff` | bg page |
| `--color-bg-accent` | `#8bbabb` | bg accent |
| `--color-text-primary` | `#000000` | text primary |
| `--color-text-secondary` | `#8c8c8c` | text secondary |
| `--color-text-label` | `#b3b3b3` | text label |
| `--color-input-border` | `#cccccc` | input border |
| `--color-card-surface` | `#ffffff` | card surface |
| `--color-sidebar-bg` | `#35477d` | sidebar bg |
| `--color-sidebar-text` | `rgba(255, 255, 255, 0.5)` | sidebar text |
| `--color-sidebar-icon` | `#ffffff` | sidebar icon |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `ContactForm` | Contact form rendering | see fidelity note below |
| 2 | `ContactSidebar` | — | no dedicated spec block |
| 3 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `ContactForm`
The template SHALL display a two-column contact card with a form panel and a sidebar.

### `ContactSidebar`
*anchors only* — Contact Information · Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias, magnam!

### `Footer`
The template SHALL display a footer linking to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/formbox/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/formbox/public/CNAME` = `formbox.free.componentdock.com`
  and the package `homepage` = `https://formbox.free.componentdock.com`.

## Reference tokens (measured 2026-10-23)

Read from the live demo `https://preview.colorlib.com/theme/bootstrap/contact-form-17/`
(HTTP 200, 6,530 B, served title `Contact Form #7`) and its single sheet
`css/style.css?v=ba904131` (15,247 B, sha256 `af8d2e44c067…`).

| Token | Reference | App (`apps/formbox`) |
| ----- | --------- | -------------------- |
| Brand navy | `#35477d` | `#35477d` ✓ (`--color-brand`) |
| Teal band | `#8bbabb` (`body:before`, 50vh) | `#8bbabb` ✓ (`--color-bg-accent`) |
| Body copy | `#8c8c8c` | `#8c8c8c` ✓ |
| Card labels | `#b3b3b3` 14px | `#b3b3b3` ✓ |
| Input hairline | `#ccc` bottom-only, radius `0`, focus `#000` | `#cccccc` ✓ |
| Ink | `#000` (headings, focus) | `#000000` ✓ |
| Sidebar text | `rgba(255,255,255,0.5)` | `rgba(255,255,255,0.5)` ✓ |
| Panel padding | `40px` both panels | `p-8`/`p-10`-ish |
| Band padding | `.content { padding: 7rem 0 }` | ~`py-16` |
| Button | `height: 45px`, radius `0`, 12px uppercase, `letter-spacing: .2rem`, `padding: 15px 20px` | `rounded-none uppercase tracking-[0.2em] px-5 py-3 text-xs` ✓ |
| Card shadow | `0 0 20px 0 rgba(0,0,0,0.2)` | `shadow-xl` |

This prep is the **closest match in the batch**: every visible colour is already
tokenized exactly. The lime `#ccda46`×5 in the sheet is base-layer only
(`a`, `.cl-btn-primary`) and is overridden to navy — it is a dead token, not a
missing brand colour.

Section order measured in the reference DOM: teal top band → white card
[`.form` (`h3 "Send us a message"`, Name\*/Email\*/Phone/Company/Message\*,
`Send Message`) | navy `.contact-info` (`h3 "Contact Information"`, icon rows)] →
end. The reference has no page title and no footer; the app supplies the
mandatory Component Dock footer.
