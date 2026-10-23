# Coinforge — Design Notes

Reference: **Cryptian** — `https://colorlib.com/wp/template/cryptian/`  
Live preview: `https://preview.colorlib.com/theme/cryptian/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/cryptian-free-template.jpg  
Shipped: https://coinforge.free.componentdock.com

Recreation of ColorLib "Cryptian" (https://colorlib.com/wp/template/cryptian/) as a React 19 + Vite + Tailwind CSS 4 + TypeScript template. Provides an ICO/cryptocurrency landing page with hero, token sale stats, roadmap, team, FAQ, and community sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;500;600;700**

## Design tokens (`apps/coinforge/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#062489` | brand |
| `--color-navy` | `#000d47` | navy |
| `--color-surface` | `#001763` | surface |
| `--color-accent` | `#004cff` | accent |
| `--color-light` | `#cbe5ff` | light |
| `--color-coral` | `#f9748f` | coral |
| `--color-gold` | `#f6d266` | gold |
| `--color-muted` | `#7a8fb5` | muted |
| `--color-primary-50` | `#e8ecf5` | primary 50 |
| `--color-primary-100` | `#c5d0ea` | primary 100 |
| `--color-primary-200` | `#8fa3d6` | primary 200 |
| `--color-primary-300` | `#5976c1` | primary 300 |
| `--color-primary-400` | `#2f4fad` | primary 400 |
| `--color-primary-500` | `#062489` | primary 500 |
| `--color-primary-600` | `#051e72` | primary 600 |
| `--color-primary-700` | `#04185c` | primary 700 |
| `--color-primary-800` | `#031245` | primary 800 |
| `--color-primary-900` | `#020c2f` | primary 900 |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | Original font: Montserrat (Google Fonts). |
| `--font-display` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with navigation and login | see fidelity note below |
| 2 | `Hero` | Hero section with CTA buttons | see fidelity note below |
| 3 | `FeaturedLogos` | Featured logos section | see fidelity note below |
| 4 | `About` | About section with CTA | see fidelity note below |
| 5 | `Features` | Features section with 3 cards | see fidelity note below |
| 6 | `ICOLive` | ICO Live section with stats and countdown | see fidelity note below |
| 7 | `Whitepaper` | Whitepaper download section | see fidelity note below |
| 8 | `TokenDistribution` | Token distribution section | see fidelity note below |
| 9 | `Roadmap` | Roadmap timeline | see fidelity note below |
| 10 | `Team` | Team section with core team and advisors | see fidelity note below |
| 11 | `MobileApp` | Mobile App download section | see fidelity note below |
| 12 | `FAQ` | FAQ section with tabs | see fidelity note below |
| 13 | `Community` | Community social media grid | see fidelity note below |
| 14 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a fixed navbar with brand logo, navigation links (Home, About, White Paper, Token Sale, Roadmap, Team, App, FAQ, Contact), and a gradient login button. On mobile, a hamburger menu toggles a dropdown panel.

### `Hero`
The template SHALL display a split hero section with a heading about ICO/Blockchain, descriptive text, and two gradient CTA buttons (Register for ICO, Download Whitepaper).

### `FeaturedLogos`
The template SHALL display a "We are featured in" heading with 6 partner logo placeholders.

### `About`
The template SHALL display a split about section with an image, heading about cryptocurrency exchange, description text, and a "Join us on Telegraph" gradient button.

### `Features`
The template SHALL display 3 feature cards: "Exciting Opportunity", "Vetted ICO Marketplace", "Diverse Profit Ways" with icons and descriptions.

### `ICOLive`
The template SHALL display token sale statistics (Token Sold, ETH/BTC/LTH collected), a countdown timer, a progress bar (Soft Cap to Max Cap), and a "Buy Tokens" button.

### `Whitepaper`
The template SHALL display a "Download Documentation" heading with 5 language download cards (English, Spanish, Russian, Arabic, Portuguese).

### `TokenDistribution`
The template SHALL display token allocation percentages (Build Up Team 15%, ICO Investors 50%, Branding & Marketing 25%, Bounty 10%) with a pie chart and a sales contribution breakdown.

### `Roadmap`
The template SHALL display a development roadmap with 4 milestones (Concept & Whitepaper, Team Recruitment, Core Development, Main Launch) with dates and descriptions.

### `Team`
The template SHALL display a "Core Team" section with 4 member cards and an "Advisory Board" section with 4 advisor cards, each with photo, name, role, and social links.

### `MobileApp`
The template SHALL display a "Track from Anywhere" heading with app description and Google Play + App Store download buttons.

### `FAQ`
The template SHALL display a tabbed FAQ section with 4 categories (General Questions, ICO, Token, Cryptocurrency), each containing question cards with "Read more" links.

### `Community`
The template SHALL display a "Our Community" heading with 8 social media links in a grid layout.

### `Footer`
The template SHALL display a footer with brand logo, description, navigation links, newsletter subscription form, and a link to Component Dock (https://www.componentdock.com/).

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
- **Provenance ban.** No file under `apps/coinforge/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/coinforge/public/CNAME` = `coinforge.free.componentdock.com`
  and the package `homepage` = `https://coinforge.free.componentdock.com`.
