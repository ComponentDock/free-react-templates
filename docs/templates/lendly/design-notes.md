# Lendly — Design Notes

Reference: **Loans2go** — `https://colorlib.com/wp/template/loans2go/`  
Live preview: `https://preview.colorlib.com/theme/loans2go/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/loans2go-free-template.jpg  
Shipped: https://lendly.free.componentdock.com

Lendly is a loans-and-finance landing page template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@400;600;700;800;900**

## Design tokens (`apps/lendly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f43f00` | brand |
| `--color-ink` | `#22242b` | ink |
| `--color-graphite` | `#313038` | graphite |
| `--color-muted` | `#74757b` | muted |
| `--color-inputtext` | `#838383` | inputtext |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Header` | Header / Navigation | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `WhyUs` | Why Choose Us | see fidelity note below |
| 4 | `CtaBand` | CTA band | see fidelity note below |
| 5 | `Features` | Features | see fidelity note below |
| 6 | `Help` | Help section | see fidelity note below |
| 7 | `Info` | Info section | see fidelity note below |
| 8 | `Score` | Score section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Header`
The system SHALL render a translucent-black header bar over the hero with a text logo, five nav links (Home active), a Pages dropdown, and a right-side call block.

### `Hero`
The system SHALL render a full hero over a photo slider with a left text column and a right dark lead-capture form.

### `WhyUs`
The system SHALL render the "Why Choose us?" section with three icon cards and a big "Apply Now!" button.

### `CtaBand`
The system SHALL render the full-width photo CTA band with an orange brand word and a dark "Find out More" button.

### `Features`
The system SHALL render two alternating image/text feature rows with orange "Apply for a loan now →" links.

### `Help`
The system SHALL render the dark "How a personal loan can help" section with two intro paragraphs and three columns of checkmarked items.

### `Info`
The system SHALL render the "We're here to help" split with a photo, hours, and contact lines.

### `Score`
The system SHALL render the photo "Calculate my Score" band with a large orange "show my score" button.

### `Footer`
The system SHALL render the dark footer with a logo, four link widgets, small print, and a copyright bar.

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
- **Provenance ban.** No file under `apps/lendly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/lendly/public/CNAME` = `lendly.free.componentdock.com`
  and the package `homepage` = `https://lendly.free.componentdock.com`.
