# Byline — Design Notes

Reference: **Nikki** — `https://colorlib.com/wp/template/nikki/`  
Live preview: `https://preview.colorlib.com/theme/nikki/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/nikki-free-template.jpg  
Shipped: https://byline.free.componentdock.com

Byline is a free React blog and magazine template that recreates the ColorLib Nikki design. It features a hero carousel with featured posts, a two-column blog layout with sidebar widgets, an Instagram photo feed, and a dark footer with social links and Component Dock branding. Built with React 19, Tailwind CSS 4, and TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Barlow**, **Barlow:wght@300;400;500;600;700**, **Work Sans**

## Design tokens (`apps/byline/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#d1bb95` | brand |
| `--color-brand-dark` | `#bfa67e` | brand dark |
| `--color-ink` | `#191919` | Ink — near-black headings (#191919 from the original). |
| `--color-ink-dark` | `#111111` | ink dark |
| `--color-paper` | `#ffffff` | Paper — white body background (#ffffff). |
| `--color-mist` | `#595959` | Mist — muted body text (#595959 from the original). |
| `--color-primary-50` | `#faf6f0` | primary 50 |
| `--color-primary-100` | `#f0e8d8` | primary 100 |
| `--color-primary-200` | `#e5d8bb` | primary 200 |
| `--color-primary-300` | `#d1bb95` | primary 300 |
| `--color-primary-400` | `#bfa67e` | primary 400 |
| `--color-primary-500` | `#b09368` | primary 500 |
| `--color-primary-600` | `#9a7d55` | primary 600 |
| `--color-primary-700` | `#7d6344` | primary 700 |
| `--color-primary-800` | `#5f4a33` | primary 800 |
| `--color-primary-900` | `#423323` | primary 900 |
| `--font-sans` | `'Barlow', ui-sans-serif, system-ui, sans-serif` | Fonts: Barlow (body) + Work Sans (headings). |
| `--font-display` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with brand, navigation, and social links | see fidelity note below |
| 2 | `Hero` | Hero section with featured post | see fidelity note below |
| 3 | `BlogContent` | Blog content area with posts and sidebar | see fidelity note below |
| 4 | `InstagramFeed` | Instagram photo feed | see fidelity note below |
| 5 | `Footer` | Footer with social links and Component Dock branding | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a sticky navbar with the "Byline" brand name, navigation links (Home, About, Contact), a search button, and social media icons (Facebook, Twitter, Instagram). The navbar SHALL collapse to a hamburger menu on mobile with a toggleable mobile menu.

### `Hero`
The template SHALL display a full-width hero section with a featured post including a background image, date, title, excerpt, and a "Read More" button.

### `BlogContent`
The template SHALL display a two-column layout with an 8-column main area and a 4-column sidebar. The main area SHALL contain a full-width featured post (image, date, title, excerpt, author, comments, social share) and a 2-column grid of blog post cards. The sidebar SHALL contain About, Categories, Latest Posts, Newsletter, and Tags widgets.

### `InstagramFeed`
The template SHALL display 8 square Instagram placeholder images in a row with a hover overlay showing an Instagram icon.

### `Footer`
The template SHALL display a dark footer with social media links (Facebook, Twitter, LinkedIn, Instagram, YouTube) and a copyright line that links to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/byline/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/byline/public/CNAME` = `byline.free.componentdock.com`
  and the package `homepage` = `https://byline.free.componentdock.com`.
