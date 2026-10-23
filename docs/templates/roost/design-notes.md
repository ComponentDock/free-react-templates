# Roost — Design Notes

Reference: **Realtors** — `https://colorlib.com/wp/template/realtors/`  
Live preview: `https://preview.colorlib.com/theme/stayhome/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/realtors-free-template.jpg  
Shipped: https://roost.free.componentdock.com

Roost is a single-page real estate home services template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/roost/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e7f3ff` | Roost brand palette — real estate blue (#007bff primary) |
| `--color-primary-100` | `#c5e1ff` | primary 100 |
| `--color-primary-200` | `#9eceff` | primary 200 |
| `--color-primary-300` | `#6db5ff` | primary 300 |
| `--color-primary-400` | `#3d9cff` | primary 400 |
| `--color-primary-500` | `#007bff` | primary 500 |
| `--color-primary-600` | `#0069d9` | primary 600 |
| `--color-primary-700` | `#0056b3` | primary 700 |
| `--color-primary-800` | `#00428c` | primary 800 |
| `--color-primary-900` | `#002e66` | primary 900 |
| `--color-dark-900` | `#232931` | Dark section backgrounds |
| `--color-dark-800` | `#2d333b` | dark 800 |
| `--color-light-100` | `#f3f5fb` | Light background |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | Poppins — the original template's typeface |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Services` | Services section | see fidelity note below |
| 4 | `PropertyListings` | Property listings | see fidelity note below |
| 5 | `SearchCTA` | Search CTA banner | see fidelity note below |
| 6 | `About` | About section | see fidelity note below |
| 7 | `HowItWorks` | How it works section | see fidelity note below |
| 8 | `AgentCTA` | Agent CTA banner | see fidelity note below |
| 9 | `Agents` | Agents section | see fidelity note below |
| 10 | `Blog` | Blog section | see fidelity note below |
| 11 | `Testimonials` | Testimonials section | see fidelity note below |
| 12 | `Contact` | Contact section | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a sticky white navbar with the site name "Roost", section links (Home, Services, Listing, About, How it works, Agent, Blog, Contact), Sign Up and Sign In buttons, and a hamburger toggle that opens a mobile menu on small screens.

### `Hero`
The system SHALL render a full-width hero with a background image, headline "Get your way home worldwide", a subtitle, and a search bar with a "Search Places" button.

### `Services`
The system SHALL render a "Our Services" section with four service cards (Find Places, We Have Agents, Buy & Rent, Making Money), each with an icon, title, and description.

### `PropertyListings`
The system SHALL render an "Our Property" section with four property cards, each showing an image, title, price, location, beds, and baths.

### `SearchCTA`
The system SHALL render a full-width banner with a background image, headline "Choose Your Dream House", description text, and a "Search Places" button.

### `About`
The system SHALL render a two-column "Roost Real Estate Agency" section with description text on the left and an image on the right, plus "Book now" and "Contact us" buttons.

### `HowItWorks`
The system SHALL render a "How it works" section with three numbered steps: Evaluate Property, Meet Agent, Close the Deal.

### `AgentCTA`
The system SHALL render a full-width banner with headline "Choose Your House for Only $120,000" and an "Advance Search" button.

### `Agents`
The system SHALL render an "Our Agents" section with three agent cards, each showing a photo, name, and listing count.

### `Blog`
The system SHALL render an "Our Blog" section with three blog post cards, each showing an image, title, excerpt, and "Read More" link.

### `Testimonials`
The system SHALL render a dark-background testimonials section with a quote, author name, and author image.

### `Contact`
The system SHALL render a "Contact Me" section with four contact info cards: Address, Contact Number, Email Address, Website.

### `Footer`
The system SHALL render a footer with the site name "Roost", a tagline, navigation links, and a "Made with Component Dock" link pointing to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/roost/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/roost/public/CNAME` = `roost.free.componentdock.com`
  and the package `homepage` = `https://roost.free.componentdock.com`.
