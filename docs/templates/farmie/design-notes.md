# Farmie — Design Notes

Reference: **Farmie** — `https://colorlib.com/wp/template/farmie/`  
Live preview: `https://preview.colorlib.com/theme/farmie/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/farmie-free-template.jpg  
Shipped: https://farmie.free.componentdock.com

Farmie is a multi-section farm and organic-shop website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Farmie" design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Karla**, **Karla:wght@400;500;600;700;800**

## Design tokens (`apps/farmie/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#77b122` | brand |
| `--color-brand-muted` | `#e8f5d5` | On-brand text tones: body text and headings on the brand background. |
| `--color-brand-strong` | `#5c8a1a` | brand strong |
| `--color-paper` | `#f8f9fa` | Light section background — bg-gray (#f8f9fa / #f2f4f5). |
| `--color-night` | `#303030` | Dark text / footer background (#303030 / #212529). |
| `--font-sans` | `'Karla', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Benefits` | Benefits section | see fidelity note below |
| 4 | `About` | About section | see fidelity note below |
| 5 | `FarmToTable` | Farm-to-table section | see fidelity note below |
| 6 | `Services` | Services section | see fidelity note below |
| 7 | `Products` | Products section | see fidelity note below |
| 8 | `Newsletter` | Newsletter section | see fidelity note below |
| 9 | `Practices` | Farming practices section | see fidelity note below |
| 10 | `Testimonials` | Testimonials section | see fidelity note below |
| 11 | `Contact` | Contact section | see fidelity note below |
| 12 | `News` | Newsletter section | see fidelity note below |
| 13 | `TrustBadges` | Trust badges section | see fidelity note below |
| 14 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a navigation bar with the site name "Farmie", links to the main sections (Home, About, Pages, Shop, News, Contact), a cart badge, and a dark-mode toggle button.

### `Hero`
The system SHALL render a hero section with the headline "The hearth of the farm is the true center of our universe.", supporting copy, and CTA buttons.

### `Benefits`
The system SHALL render a benefits section with four blocks: Best Services, Farm Experiences, 100% Natural, and Farm Equipment.

### `About`
The system SHALL render an about section titled "Let Us Tell You Our Story" with an image, descriptive copy, and a "Read More" button.

### `FarmToTable`
The system SHALL render a "From Farm To Your Table" section with four steps: Grow, Harvest, Quality Check, and Deliver.

### `Services`
The system SHALL render a services section titled "Our Produce Is Mainstay For Us" with four category cards: Fruit & Vegetable, Meat & Eggs, Milk & Cheese, and Rice & Corn.

### `Products`
The system SHALL render a products section titled "Our Product Are Highest Quality" with at least four product cards, each showing a name, a price, and a "Go to Store" button.

### `Newsletter`
The system SHALL render a newsletter section with a heading, an email input, and a "Subscribe" button.

### `Practices`
The system SHALL render a "Farming Practices To Preserve Land & Water" section with six practice items.

### `Testimonials`
The system SHALL render a testimonials section with at least three quotes (named customers).

### `Contact`
The system SHALL render a contact section titled "Get In Touch With Us" with a contact form (submit button) and contact details.

### `News`
The system SHALL render a newsletter section with a heading, an email input, and a "Subscribe" button.

### `TrustBadges`
The system SHALL render a "Our Certifications & Guarantees" section with at least four badges (USDA Organic, Non-GMO, Fair Trade, Eco-Friendly).

### `Footer`
The system SHALL render a footer with the site name, an about blurb with address, quick links, recent news, and social links.

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
- **Provenance ban.** No file under `apps/farmie/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/farmie/public/CNAME` = `farmie.free.componentdock.com`
  and the package `homepage` = `https://farmie.free.componentdock.com`.
