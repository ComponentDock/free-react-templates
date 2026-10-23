# Brightoral — Design Notes

Reference: **Dente** — `https://colorlib.com/wp/template/dente/`  
Live preview: `https://preview.colorlib.com/theme/dente/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dente-free-template.jpg  
Shipped: https://brightoral.free.componentdock.com

A Dental Clinic template with hero, services intro, equipment, appointment form on cream, services and success stories sections. Recreation of ColorLib's "Dente" template as a React 19 + Vite + Tailwind 4 + TypeScript dental clinic website.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Nunito Sans:wght@300;400;700;900**

## Design tokens (`apps/brightoral/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f23a2e` | brand |
| `--color-brand-dark` | `#d4301f` | brand dark |
| `--color-cream` | `#ece8d9` | Cream — appointment form background (#ece8d9). |
| `--color-ink` | `#25262a` | Ink — dark text (#25262a). |
| `--color-paper` | `#f4f5f9` | Paper — light section background (#f4f5f9). |
| `--color-mist` | `#4d4d4d` | Mist — muted body text (#4d4d4d). |
| `--color-footer` | `#333333` | Footer — dark gray (#333333). |
| `--color-footer-muted` | `#737373` | Footer muted text (#737373). |
| `--color-footer-link` | `#999999` | Footer link (#999999). |
| `--color-primary-50` | `#fef2f2` | Primary scale for shared ui Button/ButtonLink. |
| `--color-primary-100` | `#fee2e2` | primary 100 |
| `--color-primary-200` | `#fecaca` | primary 200 |
| `--color-primary-300` | `#fca5a5` | primary 300 |
| `--color-primary-400` | `#f87171` | primary 400 |
| `--color-primary-500` | `#f23a2e` | primary 500 |
| `--color-primary-600` | `#d4301f` | primary 600 |
| `--color-primary-700` | `#b91c1c` | primary 700 |
| `--color-primary-800` | `#991b1b` | primary 800 |
| `--color-primary-900` | `#7f1d1d` | primary 900 |
| `--font-sans` | `'Nunito Sans', ui-sans-serif, system-ui, sans-serif` | Nunito Sans — the original Dente font. |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar displays logo and navigation | see fidelity note below |
| 2 | `Hero` | Hero displays full-viewport cover | see fidelity note below |
| 3 | `ServicesIntro` | Services intro shows 3 feature cards | see fidelity note below |
| 4 | `EquipmentStrip` | Equipment strip shows 4 items | see fidelity note below |
| 5 | `AppointmentForm` | Appointment form on cream background | see fidelity note below |
| 6 | `ServicesGrid` | Services grid displays 6 items | see fidelity note below |
| 7 | `SuccessStories` | Success stories section | see fidelity note below |
| 8 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 9 | `Footer` | Footer with dark background | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Users SHALL see a white navbar with the "Brightoral" logo on the left and navigation links on the right.

### `Hero`
Users SHALL see a full-viewport hero section with a background image, dark overlay, and the "Your New Smile" heading.

### `ServicesIntro`
Users SHALL see 3 service feature cards with icons, headings, and descriptions.

### `EquipmentStrip`
Users SHALL see 4 equipment items with icons in a horizontal strip.

### `AppointmentForm`
Users SHALL see an appointment form on a cream background with form fields.

### `ServicesGrid`
Users SHALL see "Our Services" heading with 6 service items in a grid.

### `SuccessStories`
Users SHALL see "Success Stories" heading with testimonial cards on a light gray background.

### `Testimonials`
Users SHALL see "People Says" heading with a carousel of review cards.

### `Footer`
Users SHALL see a dark gray footer with columns and a Component Dock link.

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
- **Provenance ban.** No file under `apps/brightoral/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/brightoral/public/CNAME` = `brightoral.free.componentdock.com`
  and the package `homepage` = `https://brightoral.free.componentdock.com`.
