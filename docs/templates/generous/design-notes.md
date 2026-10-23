# Generous — Design Notes

Reference: **Giving** — `https://colorlib.com/wp/template/giving/`  
Live preview: `https://preview.colorlib.com/theme/giving/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/giving-free-template.jpg  
Shipped: https://generous.free.componentdock.com

Generous is a single-page non-profit / charity website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Giving" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Gaegu**, **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/generous/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#79ccab` | primary |
| `--color-primary-500` | `#79ccab` | primary 500 |
| `--color-primary-600` | `#79ccab` | primary 600 |
| `--color-primary-700` | `#5dc19a` | primary 700 |
| `--color-success` | `#28a745` | success |
| `--color-warning` | `#ffc107` | warning |
| `--color-dark` | `#343a40` | dark |
| `--color-light` | `#fafafa` | light |
| `--color-footer` | `#404040` | footer |
| `--color-ink` | `#212529` | ink |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-script` | `'Gaegu', cursive` | font script |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Dark navbar with wordmark and nav links | see fidelity note below |
| 2 | `HeroSlider` | Hero slider with heading and photo | see fidelity note below |
| 3 | `FeatureRow` | Feature row with three icon blocks | see fidelity note below |
| 4 | `FeaturedDonate` | Featured donation section with green overlay | see fidelity note below |
| 5 | `TopFundraisers` | Top Fundraisers card grid | see fidelity note below |
| 6 | `LatestDonations` | Latest Donations person grid | see fidelity note below |
| 7 | `FeaturedSection` | Featured section with teal overlay | see fidelity note below |
| 8 | `LatestNews` | Latest News post grid | see fidelity note below |
| 9 | `AboutUs` | About Us section with mini-cards | see fidelity note below |
| 10 | `Footer` | Footer with About, Blog, Contact, copyright | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a dark `#343a40` navbar with the Generous wordmark, six white nav links, and a mobile hamburger toggle.

### `HeroSlider`
The system SHALL render a full-viewport hero slider whose slides show a white handwritten headline on the left and a photo on the right under a dark overlay, with carousel controls.

### `FeatureRow`
The system SHALL render three equal-width feature blocks, each with an icon, a title, a paragraph, and a teal Learn More link.

### `FeaturedDonate`
The system SHALL render a photo section under a green `#28a745` overlay with a text block (meta, title, copy, last-donation line, yellow progress bar, raised amount, Donate Now button) and a photo.

### `TopFundraisers`
The system SHALL render a "Top Fundraisers" heading with six fundraiser cards in a 3-column grid, each with a photo, title, text, progress bar, and raised amount.

### `LatestDonations`
The system SHALL render a "Latest Donations" heading with four person cards, each with a circular avatar, name, donation time, and donated amount.

### `FeaturedSection`
The system SHALL render a photo section under a teal `#79ccab` overlay with a heading, copy, a raised-total line, and a Read The Full Story button.

### `LatestNews`
The system SHALL render a "Latest News" heading on a light background with three post cards, each with a date, title, excerpt, and Read More link.

### `AboutUs`
The system SHALL render an "About Us" heading with copy, right-side links, and three mini-cards with a thumbnail and text.

### `Footer`
The system SHALL render a dark gray `#404040` footer with About Us, Blog, and Contact Info columns plus a copyright bar.

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
- **Provenance ban.** No file under `apps/generous/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/generous/public/CNAME` = `generous.free.componentdock.com`
  and the package `homepage` = `https://generous.free.componentdock.com`.
