# Benefact — Design Notes

Reference: **Fundraiser** — `https://colorlib.com/wp/template/fundraiser/`  
Live preview: `https://preview.colorlib.com/theme/fundraiser/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/fundraiser-free-template.jpg  
Shipped: https://benefact.free.componentdock.com

Benefact is a single-page charity / fundraising website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Fundraiser" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Mansalva**, **Roboto**, **Roboto:wght@300;400;500;700;900**

## Design tokens (`apps/benefact/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#00a651` | primary |
| `--color-primary-500` | `#00a651` | primary 500 |
| `--color-primary-600` | `#00a651` | primary 600 |
| `--color-primary-700` | `#008f45` | primary 700 |
| `--color-secondary` | `#21323b` | secondary |
| `--color-ink` | `#364d59` | ink |
| `--color-danger` | `#dc3545` | danger |
| `--color-warning` | `#ffc107` | warning |
| `--color-mist` | `#f6f5f5` | mist |
| `--color-footer` | `#c9ccd4` | footer |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-script` | `'Mansalva', cursive` | font script |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Green top bar with links and social icons | see fidelity note below |
| 2 | `Navbar` | Dark navbar with wordmark and nav links | see fidelity note below |
| 3 | `Hero` | Hero with static caption and rotating backgrounds | see fidelity note below |
| 4 | `CauseStrip` | Latest Causes section with progress cards | see fidelity note below |
| 5 | `LatestCauses` | Latest Event section | see fidelity note below |
| 6 | `WhyChooseUs` | Why Choose Us numbered features | see fidelity note below |
| 7 | `LatestEvent` | — | no dedicated spec block |
| 8 | `DonateForm` | Donate Now form | see fidelity note below |
| 9 | `CtaStrip` | Cause strip with three tinted cards | see fidelity note below |
| 10 | `Footer` | Footer with About, Features, Subscribe, Follow | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The system SHALL render a bright green `#00a651` top bar (hidden on small screens) with three left links and two right social icon links.

### `Navbar`
The system SHALL render a dark slate `#21323b` navbar with the Benefact wordmark, five white nav links, and a mobile hamburger toggle.

### `Hero`
The system SHALL render a full-viewport hero with a static centered caption box (script headline + green Donate Now button) over three rotating background photos with a dark overlay.

### `CauseStrip`
The system SHALL render a "Latest Causes" heading with three cause cards, each with a photo, an 80% progress bar, a category badge, a title, a donation amount, and an organizer.

### `LatestCauses`
The system SHALL render a "Latest Event" heading and two event cards, each with a photo, a green date badge, a time/location line, and a title.

### `WhyChooseUs`
The system SHALL render a photo-background section with a white script heading, white copy, and four numbered feature rows in a 2×2 grid.

### `LatestEvent`
*anchors only* — Latest event

### `DonateForm`
The system SHALL render a green-overlay photo section with a framed photo on the left and a white card containing a "Donate Now" form on the right.

### `CtaStrip`
The system SHALL render three 300px-tall photo cards overlapping the hero bottom, each with a colored tint overlay and a white script title.

### `Footer`
The system SHALL render a gray `#c9ccd4` footer with About Us and Features widgets, a newsletter subscribe form, social icons, and a copyright bar.

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
- **Provenance ban.** No file under `apps/benefact/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/benefact/public/CNAME` = `benefact.free.componentdock.com`
  and the package `homepage` = `https://benefact.free.componentdock.com`.
