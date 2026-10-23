# Kindfund — Design Notes

Reference: **Charifit** — `https://colorlib.com/wp/template/charifit/`  
Live preview: `https://preview.colorlib.com/theme/charifit/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/charifit-free-template.jpg  
Shipped: https://kindfund.free.componentdock.com

Kindfund is a single-page charity / nonprofit website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Charifit" website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;500;600;700**, **Yeseva One**

## Design tokens (`apps/kindfund/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#3cc78f` | primary |
| `--color-primary-500` | `#3cc78f` | primary 500 |
| `--color-primary-600` | `#32b57c` | primary 600 |
| `--color-primary-700` | `#289a68` | primary 700 |
| `--color-accent-orange` | `#ff5e13` | accent orange |
| `--color-navy` | `#191d34` | navy |
| `--color-navy-light` | `#415094` | navy light |
| `--color-light` | `#f9f9ff` | light |
| `--color-lavender` | `#f0e9ff` | lavender |
| `--color-teal` | `#4cd3e3` | teal |
| `--color-ink` | `#222222` | ink |
| `--color-body` | `#7a7b7c` | body |
| `--color-muted` | `#999999` | muted |
| `--color-footer-bg` | `#f3fcf8` | footer bg |
| `--color-red-progress` | `#ff4f42` | red progress |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Yeseva One', cursive` | font heading |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top bar | see fidelity note below |
| 2 | `Navbar` | Navbar | see fidelity note below |
| 3 | `Hero` | Hero section | see fidelity note below |
| 4 | `Reasons` | Reasons section | see fidelity note below |
| 5 | `LatestActivities` | Latest Activities section | see fidelity note below |
| 6 | `Causes` | Popular Causes section | see fidelity note below |
| 7 | `Counter` | Counter stats section | see fidelity note below |
| 8 | `Volunteers` | Volunteer section | see fidelity note below |
| 9 | `News` | News section | see fidelity note below |
| 10 | `DonationForm` | Donation form | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The top bar SHALL display contact information (phone, email) and social media icon links.

### `Navbar`
The navbar SHALL be sticky with navigation links and a "Donate Now" CTA, with a mobile hamburger menu.

### `Hero`
The hero section SHALL display a headline about helping children with a "Learn More" CTA button over a full-width background image with green overlay.

### `Reasons`
The reasons section SHALL display three feature cards (Collecting Fund, Blood Camp, Friendly Volunteer) with icons, descriptions, and "Read More" links.

### `LatestActivities`
The latest activities section SHALL display a background image with green-tinted overlay, a heading, description, and "Donate Now" button.

### `Causes`
The popular causes section SHALL display three cause cards with progress bars showing raised/goal amounts and "Read More" links.

### `Counter`
The counter section SHALL display four stat boxes with icons and numbers over a green overlay background.

### `Volunteers`
The volunteer section SHALL display three team member cards with photo, name, and role.

### `News`
The news section SHALL display three blog post cards with images, category tags, dates, and "Read More" links.

### `DonationForm`
The donation form SHALL display amount buttons ($25, $50, $100, $200), name and email inputs, and a "Donate Now" submit button.

### `Footer`
The footer SHALL include four columns (About, Services, Contacts, Top News) and a "Made with Component Dock" attribution link to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/kindfund/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/kindfund/public/CNAME` = `kindfund.free.componentdock.com`
  and the package `homepage` = `https://kindfund.free.componentdock.com`.
