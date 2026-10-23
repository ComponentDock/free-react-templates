# Sagewell — Design Notes

Reference: **Wiser** — `https://colorlib.com/wp/template/wiser/`  
Live preview: `https://preview.colorlib.com/theme/wiser/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/wiser-free-template.jpg  
Shipped: https://sagewell.free.componentdock.com

Sagewell is a single-page education landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/sagewell/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-50` | `#edfafc` | Sagewell brand palette — teal/cyan #1fc2d9 |
| `--color-brand-100` | `#d0f3f7` | brand 100 |
| `--color-brand-200` | `#a1e7ef` | brand 200 |
| `--color-brand-300` | `#5dd5e3` | brand 300 |
| `--color-brand-400` | `#1fc2d9` | brand 400 |
| `--color-brand-500` | `#16a8be` | brand 500 |
| `--color-brand-600` | `#12889d` | brand 600 |
| `--color-brand-700` | `#146e80` | brand 700 |
| `--color-brand-800` | `#175a6a` | brand 800 |
| `--color-brand-900` | `#184b5a` | brand 900 |
| `--color-accent-50` | `#fff4ed` | Accent orange #ff5e13 |
| `--color-accent-100` | `#ffe5d4` | accent 100 |
| `--color-accent-200` | `#ffc7a8` | accent 200 |
| `--color-accent-300` | `#ff9f71` | accent 300 |
| `--color-accent-400` | `#ff5e13` | accent 400 |
| `--color-accent-500` | `#fe4400` | accent 500 |
| `--color-accent-600` | `#ef2a00` | accent 600 |
| `--color-accent-700` | `#c61b00` | accent 700 |
| `--color-accent-800` | `#9d1800` | accent 800 |
| `--color-accent-900` | `#7e1804` | accent 900 |
| `--color-navy-50` | `#f0f4f8` | Navy text #234262 |
| `--color-navy-100` | `#d9e2ec` | navy 100 |
| `--color-navy-200` | `#bcccdc` | navy 200 |
| `--color-navy-300` | `#9fb3c8` | navy 300 |
| `--color-navy-400` | `#829ab1` | navy 400 |
| `--color-navy-500` | `#627d98` | navy 500 |
| `--color-navy-600` | `#486581` | navy 600 |
| `--color-navy-700` | `#334e68` | navy 700 |
| `--color-navy-800` | `#243b53` | navy 800 |
| `--color-navy-900` | `#102a43` | navy 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders navigation and brand | see fidelity note below |
| 2 | `Hero` | Hero section displays headline and CTAs | see fidelity note below |
| 3 | `Services` | Services section shows service badges | see fidelity note below |
| 4 | `Programs` | Programs section with tabbed navigation | see fidelity note below |
| 5 | `Events` | Events section displays upcoming events | see fidelity note below |
| 6 | `AdmissionForm` | Admission form collects application data | see fidelity note below |
| 7 | `News` | News section shows blog posts | see fidelity note below |
| 8 | `Footer` | Footer with newsletter, links, and Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Sagewell SHALL render a top bar with contact info and login/register links, a sticky main navigation with Home, Courses, Blog (dropdown), Pages (dropdown), Contact, and an Apply Now CTA button. Mobile view SHALL show a hamburger menu toggle.

### `Hero`
Sagewell SHALL render a full-width hero section with a background image, gradient overlay, headline text "Boost up your skills with a new way of learning.", and two CTA buttons (Get Started, Take a Tour).

### `Services`
Sagewell SHALL render a services strip with 3 icon+text service badges ("Scholarship Available") on a light background.

### `Programs`
Sagewell SHALL render a "Popular Programs" section with 4 tabs (Graduate, Postgraduate, PhD Scholarships, Training) and 3 program cards per tab.

### `Events`
Sagewell SHALL render a "Recent Events" section with 3 event items, each showing a date badge, title, and metadata (time, date, location).

### `AdmissionForm`
Sagewell SHALL render an "Apply for Admission" form on a dark background with fields for First Name, Last Name, Phone, Email, Message, and an Apply Now submit button.

### `News`
Sagewell SHALL render a "Recent News" section with 2 blog post cards, each showing an image, badge, title, date, and comment count.

### `Footer`
Sagewell SHALL render a footer with a newsletter signup form, social media icons, 4 link columns (About Us, Campus, Study, Support), and a copyright line linking to https://www.componentdock.com/ (branded "Component Dock").

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
- **Provenance ban.** No file under `apps/sagewell/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sagewell/public/CNAME` = `sagewell.free.componentdock.com`
  and the package `homepage` = `https://sagewell.free.componentdock.com`.
