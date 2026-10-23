# Carewell — Design Notes

Reference: **Kare** — `https://colorlib.com/wp/template/kare/`  
Live preview: `https://preview.colorlib.com/theme/kare/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/kare-free-template.jpg  
Shipped: https://carewell.free.componentdock.com

Carewell is a single-page nonprofit/charity website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Kare" charity website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/carewell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-roboto` | `'Roboto', sans-serif` | font roboto |
| `--color-brand` | `#ea2c58` | brand |
| `--color-brand-dark` | `#c91e48` | brand dark |
| `--color-brand-gold` | `#f8b600` | brand gold |
| `--color-brand-cyan` | `#4cd3e3` | brand cyan |
| `--color-brand-blue` | `#38a4ff` | brand blue |
| `--color-bg-alt` | `#f9f9ff` | bg alt |
| `--color-text-primary` | `#222222` | text primary |
| `--color-text-muted` | `#777777` | text muted |
| `--color-text-light` | `#999999` | text light |
| `--color-border` | `#eeeeee` | border |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders brand and navigation | see fidelity note below |
| 2 | `Hero` | Hero displays headline and CTAs | see fidelity note below |
| 3 | `DonationStats` | DonationStats shows four stat boxes | see fidelity note below |
| 4 | `MajorCauses` | MajorCauses displays cause cards | see fidelity note below |
| 5 | `MakeDonation` | MakeDonation renders donation form | see fidelity note below |
| 6 | `ClientsLogos` | ClientsLogos displays partner logos | see fidelity note below |
| 7 | `SupportCampaign` | SupportCampaign shows campaign cards | see fidelity note below |
| 8 | `ExperienceDonation` | ExperienceDonation displays parallax CTA | see fidelity note below |
| 9 | `AboutNewsletter` | AboutNewsletter shows about card and newsletter | see fidelity note below |
| 10 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Users SHALL see "Carewell" brand name, navigation links (Home, Causes, Events, About, Blog, Contact), and a "Donate Now" CTA button in the navbar.

### `Hero`
Users SHALL see a full-width hero section with a background image, dark overlay, heading text, description, and two CTA buttons.

### `DonationStats`
Users SHALL see four stat boxes with icons, values, and labels.

### `MajorCauses`
Users SHALL see a section titled "Our Major Causes" with cause cards containing images, progress bars, amounts, titles, descriptions, and "Donate Here" links.

### `MakeDonation`
Users SHALL see a donation form with preset amount buttons, USD label, and a submit button.

### `ClientsLogos`
Users SHALL see a row of greyscale partner logos.

### `SupportCampaign`
Users SHALL see a section with campaign cards showing funding progress.

### `ExperienceDonation`
Users SHALL see a parallax background section with heading, description, and CTA button.

### `AboutNewsletter`
Users SHALL see an about card with avatar and a newsletter signup form with social links.

### `Footer`
Users SHALL see a footer with copyright text and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/carewell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/carewell/public/CNAME` = `carewell.free.componentdock.com`
  and the package `homepage` = `https://carewell.free.componentdock.com`.
