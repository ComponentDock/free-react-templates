# Broadsheet — Design Notes

Reference: **Newspaper** — `https://colorlib.com/wp/template/newspaper/`  
Live preview: `https://preview.colorlib.com/theme/newspaper/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/newspaper-free-template.jpg  
Shipped: https://broadsheet.free.componentdock.com

BroadSheet is a full-featured news and magazine website template with breaking news tickers, featured articles, popular news grid, video section, and editorial picks. Dense, information-rich layout typical of online newspaper sites.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto:wght@300;400;500;700**

## Design tokens (`apps/broadsheet/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ee002d` | brand |
| `--color-brand-dark` | `#cc0028` | brand dark |
| `--color-dark-bg` | `#152535` | dark bg |
| `--color-dark-surface` | `#1c2a3a` | dark surface |
| `--color-light-bg` | `#f3f5f8` | light bg |
| `--color-lighter-bg` | `#eff4f9` | lighter bg |
| `--color-card-bg` | `#f7f7f7` | card bg |
| `--color-text-heading` | `#1c1c1c` | text heading |
| `--color-text-body` | `#656565` | text body |
| `--color-text-meta` | `#828282` | text meta |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar with logo and search | see fidelity note below |
| 2 | `Navbar` | Navbar with horizontal menu | see fidelity note below |
| 3 | `Hero` | Hero with breaking news tickers | see fidelity note below |
| 4 | `FeaturedPosts` | FeaturedPosts section | see fidelity note below |
| 5 | `PopularNews` | PopularNews section | see fidelity note below |
| 6 | `VideoSection` | VideoSection | see fidelity note below |
| 7 | `Editorial` | Editorial section | see fidelity note below |
| 8 | `Footer` | Footer with Component Dock link | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The template SHALL display a top bar with the "BroadSheet" logo on the left, Login/Register links, and a search input with submit button on the right.

### `Navbar`
The template SHALL display a dark-background navbar with menu items: Home, Politics, Breaking News, Business, Technology, Health, Travel, Sports, Contact. The Home item SHALL be visually active. The navbar SHALL support mobile toggle.

### `Hero`
The template SHALL display a hero area with two breaking news ticker rows ("Breaking News" and "International" badges) and an ad placeholder.

### `FeaturedPosts`
The template SHALL display a featured posts section with a main featured post (large image, category badge, title, author, excerpt, like/comment counts), 2 stacked smaller featured posts, and 6 sidebar small posts with thumbnails.

### `PopularNews`
The template SHALL display a popular news section with 4 post cards in a 2-column grid, a "4 Most Popular News" numbered list, and a newsletter signup form.

### `VideoSection`
The template SHALL display a dark-overlay section with 3 video thumbnails and play button icons.

### `Editorial`
The template SHALL display an editorial section with "Editor's Pick" (6 posts in 3-column grid) and "World News" sidebar (5 stacked posts).

### `Footer`
The template SHALL display a dark-background footer with logo, contact info, 4 link columns, and a bottom bar with copyright and a link to https://www.componentdock.com/ branded "Component Dock".

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
- **Provenance ban.** No file under `apps/broadsheet/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/broadsheet/public/CNAME` = `broadsheet.free.componentdock.com`
  and the package `homepage` = `https://broadsheet.free.componentdock.com`.
