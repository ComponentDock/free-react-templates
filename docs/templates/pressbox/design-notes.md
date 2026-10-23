# Pressbox — Design Notes

Reference: **Magnews** — `https://colorlib.com/wp/template/magnews/`  
Live preview: `https://preview.colorlib.com/theme/magnews/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/magnews-free-template.jpg  
Shipped: https://pressbox.free.componentdock.com

Pressbox is a news and magazine website template built with React 19, Tailwind CSS 4, and TypeScript. It recreates the ColorLib Magnews design with a dark navigation bar, red accent color, hero carousel, trending posts grid, newsletter subscription, and footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Lato**, **Lato:wght@300;400;700;900**, **Open Sans**

## Design tokens (`apps/pressbox/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-red` | `#ef233c` | brand red |
| `--color-brand-dark` | `#07090c` | brand dark |
| `--color-brand-body` | `#2c2c2c` | brand body |
| `--color-brand-grey` | `#ddd` | brand grey |
| `--color-brand-orange` | `#fe7e00` | brand orange |
| `--color-brand-facebook` | `#3b5999` | brand facebook |
| `--color-brand-twitter` | `#00aced` | brand twitter |
| `--color-brand-instagram` | `#8a3ab9` | brand instagram |
| `--color-brand-youtube` | `#e31010` | brand youtube |
| `--font-heading` | `'Open Sans', sans-serif` | font heading |
| `--font-body` | `'Lato', sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar with secondary navigation and social links | see fidelity note below |
| 2 | `Navbar` | Dark navbar with branding and category navigation | see fidelity note below |
| 3 | `HeroCarousel` | Hero carousel with featured articles | see fidelity note below |
| 4 | `TrendingPosts` | Trending posts and recent articles grid | see fidelity note below |
| 5 | `Newsletter` | Newsletter subscription section | see fidelity note below |
| 6 | `Footer` | Footer with branding and Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The template SHALL render a top bar containing secondary navigation links (About Us, Contact, Advertisement, Privacy) and social media icon links (Facebook, Twitter, Instagram, YouTube, RSS).

### `Navbar`
The template SHALL render a dark navigation bar with the "Pressbox 24H" branding, category links (Home, News, Sport, Lifestyle, Fashion, Music, Business), and a search toggle button.

### `HeroCarousel`
The template SHALL render a full-width hero carousel displaying featured articles with category badge, title, date, and comment count. The carousel SHALL support prev/next navigation and dot indicators with wrap-around behavior.

### `TrendingPosts`
The template SHALL render a grid of trending post cards and a separate grid of recent article cards, each with image, category, title, date, and comment count.

### `Newsletter`
The template SHALL render a newsletter subscription section with an email input and subscribe button on a dark background.

### `Footer`
The template SHALL render a footer with the site branding, quick links, social media icons, copyright notice, and a "More templates at Component Dock" link pointing to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/pressbox/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/pressbox/public/CNAME` = `pressbox.free.componentdock.com`
  and the package `homepage` = `https://pressbox.free.componentdock.com`.
