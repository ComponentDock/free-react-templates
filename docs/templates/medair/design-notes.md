# Medair — Design Notes

Reference: **Healthvest** — `https://colorlib.com/wp/template/healthvest/`  
Live preview: `https://preview.colorlib.com/theme/healthvest/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/healthvest-free-template.jpg  
Shipped: https://medair.free.componentdock.com

Medair is a health-nutrition one-page template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**, **Prata**

## Design tokens (`apps/medair/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#36c940` | brand |
| `--color-dark` | `#222222` | dark |
| `--color-ink` | `#000000` | ink |
| `--color-footer` | `#1a1a1a` | footer |
| `--color-footerbar` | `#151515` | footerbar |
| `--color-light` | `#f8f9fa` | light |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Prata', ui-serif, Georgia, serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Services` | Services strip | see fidelity note below |
| 4 | `About` | About | see fidelity note below |
| 5 | `WhatWeDo` | What We Do | see fidelity note below |
| 6 | `IntroCta` | Intro CTA | see fidelity note below |
| 7 | `HowItWorks` | How It Works | see fidelity note below |
| 8 | `VideoCta` | Video CTA | see fidelity note below |
| 9 | `Testimonials` | Testimonials | see fidelity note below |
| 10 | `Blog` | Blog | see fidelity note below |
| 11 | `Appointment` | Appointment / Contact | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Mobile navigation

### `Hero`
The system SHALL render a full-height hero over a photo with a dark overlay, an uppercase tagline, a large serif headline with a green highlight span, and two CTAs.

### `Services`
The system SHALL render the white services strip with four green-icon service cards and a certified counter card.

### `About`
The system SHALL render the split About section with a photo carrying a bottom-right counter box, a heading + copy column, and a two-column "We Can Help You" checklist.

### `WhatWeDo`
The system SHALL render the "What We Do" section with five nutrition-program cards featuring circular photos with green numbered badges.

### `IntroCta`
The system SHALL render the photo intro band with a dark overlay, a green subheading, a white heading with a green highlight span, and an appointment button.

### `HowItWorks`
The system SHALL render the "How It Works?" section with four numbered steps.

### `VideoCta`
The system SHALL render the video band with a circular play button, a white heading, and two CTAs.

### `Testimonials`
The system SHALL render the "Successful Stories" testimonial slider with photo-and-quote slides and dot navigation.

### `Blog`
The system SHALL render the "Recent Blog" section on `#f8f9fa` with white blog cards that have green date blocks.

### `Appointment`
The system SHALL render the fixed-photo appointment band with a solid green overlay, a left info column, and a "Drop A Message" form with client-side validation.

### `Footer`
The system SHALL render the dark `#1a1a1a` footer with a brand column, two link columns, a contact column, and a copyright bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/medair/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/medair/public/CNAME` = `medair.free.componentdock.com`
  and the package `homepage` = `https://medair.free.componentdock.com`.
