# Hiredly — Design Notes

Reference: **Joblab** — `https://colorlib.com/wp/template/joblab/`  
Live preview: `https://preview.colorlib.com/theme/joblab/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/joblab-colorlib-template.jpg  
Shipped: https://hiredly.free.componentdock.com

Hiredly is a job-board landing page template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Chivo**, **Chivo:wght@300;400;700;900**, **Overpass**

## Design tokens (`apps/hiredly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#007aff` | brand |
| `--color-brand-hover` | `#0066d6` | brand hover |
| `--color-ink` | `#18304b` | ink |
| `--color-ink-dark` | `#071112` | ink dark |
| `--color-body` | `#76787a` | body |
| `--color-muted` | `#97a7af` | muted |
| `--color-light` | `#f6f9fc` | light |
| `--color-sticky` | `#e1eeff` | sticky |
| `--color-footer-text` | `#4c5753` | footer text |
| `--color-hairline` | `#f0f0ef` | hairline |
| `--color-tag-orange` | `#f27e42` | tag orange |
| `--color-tag-blue` | `#4294f2` | tag blue |
| `--color-tag-green` | `#2eb98d` | tag green |
| `--color-tag-indigo` | `#6a42f2` | tag indigo |
| `--color-tag-pink` | `#f162bc` | tag pink |
| `--font-sans` | `'Chivo', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Overpass', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `JobListings` | — | no dedicated spec block |
| 4 | `Services` | Services | see fidelity note below |
| 5 | `Pricing` | Pricing | see fidelity note below |
| 6 | `WhyDifferent` | Why we are different | see fidelity note below |
| 7 | `Subscribe` | — | no dedicated spec block |
| 8 | `CtaBand` | CTA band | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Main navigation · Mobile navigation · Hiredly · Join Now

### `Hero`
The system SHALL render a split hero with a headline, a search bar (keyword + location + search button), and a hero image.

### `JobListings`
*anchors only* — Discover jobs for you · tablist · Job categories · list · Job cards

### `Services`
The system SHALL render a "We help companies" section with four icon service cards on a light `#F6F9FC` background.

### `Pricing`
The system SHALL render three pricing plans (Starter Free, Business $39.00, Premium $59.00) with "Start Now" buttons.

### `WhyDifferent`
The system SHALL render an about/features section with three icon items.

### `Subscribe`
*anchors only* — Newsletter · status · Email address

### `CtaBand`
The system SHALL render a solid-blue call-to-action band with Search Job and Post a Job buttons.

### `Footer`
The system SHALL render a four-column footer with link widgets, a copyright bar, social icons, and the mandatory Component Dock link.

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
- **Provenance ban.** No file under `apps/hiredly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/hiredly/public/CNAME` = `hiredly.free.componentdock.com`
  and the package `homepage` = `https://hiredly.free.componentdock.com`.
