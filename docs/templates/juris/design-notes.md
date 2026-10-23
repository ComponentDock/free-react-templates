# Juris — Design Notes

Reference: **Lawyerlegal** — `https://colorlib.com/wp/template/lawyerlegal/`  
Live preview: `https://preview.colorlib.com/theme/lawyerlegal/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/lawyerlegal-free-template.jpg  
Shipped: https://juris.free.componentdock.com

Juris is a law-firm one-pager in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Lawyerlegal" template design (see TEMPLATES.md — appears 2×: lines 599 and 2127; both rows point to the same source and are `- [ ]` — one prep covers both, mark ALL `[x]` when done; verified with `grep -c 'wp/templa…

## Typography

Fonts loaded by `index.html` (Google Fonts): **Baskervville**, **Baskervville:ital,wght@0,400;0,500;1,400**, **Roboto**

## Design tokens (`apps/juris/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#b40000` | brand |
| `--color-accent` | `#ff6f00` | Accent — the orange submit button and button hover sweep. |
| `--color-ink` | `#2d0000` | Ink — near-black headings, nav links, footer background. |
| `--color-topbar` | `#2e0000` | Topbar — the near-black header strip (#2e0000). |
| `--color-body` | `#6b5a5a` | Body — paragraph text on white/section backgrounds. |
| `--color-section` | `#f8f4f4` | Section — the #F8F4F4 practice-area band. |
| `--color-cta` | `#efe2e2` | Cta — the soft #EFE2E2 "Why Choose Us" band. |
| `--color-footer-muted` | `#ac9191` | Footer-muted — muted text on the dark footer. |
| `--color-card-blurb` | `#66816a` | Card-blurb — practice-card blurbs (#66816A in the reference CSS). |
| `--color-line` | `#eaeaea` | Line — form input borders (#eaeaea). |
| `--font-serif` | `'Baskervville', Georgia, 'Times New Roman', serif` | Original font: Baskervville (serif headings) + Roboto (body/nav). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header (top bar + sticky nav + CTAs) | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `PracticeAreas` | Practice areas + quote form | see fidelity note below |
| 5 | `BrandStrip` | Brand strip | see fidelity note below |
| 6 | `Testimonials` | Testimonials | see fidelity note below |
| 7 | `News` | Recent News | see fidelity note below |
| 8 | `CtaBand` | CTA band (Why Choose Us) | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a near-black `#2e0000` top bar with contact info and social icons, and a white sticky nav row with logo, menu, and two CTAs.

### `Hero`
The system SHALL render a full-width hero with a background photo, a dark left-to-right overlay, a serif headline, a paragraph, and one CTA.

### `About`
The system SHALL render a two-column about section with an arch-cropped portrait, a red experience badge, a heading, and a Read More link.

### `PracticeAreas`
The system SHALL render a `#F8F4F4` section with a centered "Our Practice Area" title, a 2×2 grid of four service cards, and a red quote-form panel.

### `BrandStrip`
The system SHALL render a centered logo strip on a top border.

### `Testimonials`
The system SHALL render a dark photo-background testimonial carousel with a heading, quotes, and founder cards.

### `News`
The system SHALL render a "Recent News" section with two photo cards.

### `CtaBand`
The system SHALL render a soft `#EFE2E2` CTA band with a heading, text, a Learn More button, and a phone CTA.

### `Footer`
The system SHALL render a dark `#2D0000` centered footer with logo, blurb, menu, and a copyright bar.

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
- **Provenance ban.** No file under `apps/juris/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/juris/public/CNAME` = `juris.free.componentdock.com`
  and the package `homepage` = `https://juris.free.componentdock.com`.
