# Propstack — Design Notes

Reference: **Stated** — `https://colorlib.com/wp/template/stated/`  
Live preview: `https://preview.colorlib.com/theme/stated/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/stated-free-template.jpg  
Shipped: https://propstack.free.componentdock.com

Recreation of ColorLib "Stated" (https://colorlib.com/wp/template/stated/) as a React 19 + Tailwind CSS 4 + TypeScript template named **Propstack**. A clean, professional real estate website with property listings, agent profiles, and contact form.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Playfair Display**, **Playfair Display:wght@400;700;900**, **Roboto**

## Design tokens (`apps/propstack/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#f69314` | primary |
| `--color-primary-dark` | `#343a40` | primary dark |
| `--color-footer-bg` | `#333333` | footer bg |
| `--font-heading` | `'Playfair Display', serif` | font heading |
| `--font-body` | `'Roboto', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `HowItWorks` | How It Works | see fidelity note below |
| 4 | `Properties` | Properties | see fidelity note below |
| 5 | `Agents` | Agents | see fidelity note below |
| 6 | `About` | About | see fidelity note below |
| 7 | `News` | News | see fidelity note below |
| 8 | `Contact` | Contact | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Users SHALL see a sticky navbar with the "Propstack." logo and navigation links (Home, Properties, Agents, About, News, Contact). The navbar SHALL be responsive with a mobile hamburger menu.

### `Hero`
Users SHALL see a full-width hero section with a background image, a heading "Buy and sell real estate properties", and a descriptive paragraph.

### `HowItWorks`
Users SHALL see a "How It Works" section with 3 columns: Find Property, Buy Property, Make Investment, each with an icon and description.

### `Properties`
Users SHALL see a "Properties" section with property cards showing price, beds, baths, sqft, and address. A "View All Property Listings" button SHALL be displayed.

### `Agents`
Users SHALL see an "Agents" section with agent cards showing avatar, name, and social media icons.

### `About`
Users SHALL see an "About Us" section with a heading and descriptive text about the agency.

### `News`
Users SHALL see a "News" section with blog post cards showing image, date, title, and excerpt.

### `Contact`
Users SHALL see a "Get In Touch" section with a contact form (name, email, subject, message fields and submit button) and contact info.

### `Footer`
Users SHALL see a dark footer with about text, quick links, newsletter subscription form, and a link to https://www.componentdock.com/ branded "Component Dock".

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
- **Provenance ban.** No file under `apps/propstack/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/propstack/public/CNAME` = `propstack.free.componentdock.com`
  and the package `homepage` = `https://propstack.free.componentdock.com`.
