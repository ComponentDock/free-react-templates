# Podwave — Design Notes

Reference: **Podca** — `https://colorlib.com/wp/template/podca/`  
Live preview: `https://preview.colorlib.com/theme/podca/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/podca-free-template.jpg  
Shipped: https://podwave.free.componentdock.com

Podwave is a podcast website template featuring a hero section with a featured episode, a list of recent podcast episodes with audio players, a team section ("Behind The Mic"), a newsletter subscribe section, and a multi-column footer with navigation, social links, and copyright linking to Component Dock.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@200;300;400;700**

## Design tokens (`apps/podwave/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-red` | `#f23a2e` | brand red |
| `--color-heading` | `#000000` | heading |
| `--color-section-heading` | `#212121` | section heading |
| `--color-body` | `#4d4d4d` | body |
| `--color-footer-bg` | `#333333` | footer bg |
| `--color-footer-text` | `#737373` | footer text |
| `--color-footer-link` | `#999999` | footer link |
| `--color-section-light` | `#f4f5f9` | section light |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with logo and navigation | see fidelity note below |
| 2 | `Hero` | Hero section with featured episode | see fidelity note below |
| 3 | `RecentPodcasts` | Recent Podcasts listing | see fidelity note below |
| 4 | `BehindTheMic` | Behind The Mic team section | see fidelity note below |
| 5 | `Subscribe` | Subscribe section | see fidelity note below |
| 6 | `Footer` | Footer with navigation and newsletter | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL display a transparent navigation bar with the "Podwave" logo, desktop navigation links (Home, Episodes, About, Contact), and a hamburger menu for mobile viewports.

### `Hero`
The template SHALL display a hero section with a full-width background image, dark overlay, featured episode title, author/date/duration metadata, a "Read The Transcript" CTA button, and an audio player indicator.

### `RecentPodcasts`
The template SHALL display a list of recent podcast episodes with images, titles, descriptions, and audio player indicators. It SHALL include pagination controls.

### `BehindTheMic`
The template SHALL display a team section with 3 team members, each showing a photo, name, role, bio, and social media links (Facebook, Twitter, LinkedIn).

### `Subscribe`
The template SHALL display a subscribe section with a full-width background image, heading, description, email input, and Send button.

### `Footer`
The template SHALL display a dark footer with three columns: About Podwave + Recent Podcasts, Quick Menu + Follow Us social links, and Watch Video + Subscribe Newsletter. The copyright line SHALL link to Component Dock.

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
- **Provenance ban.** No file under `apps/podwave/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/podwave/public/CNAME` = `podwave.free.componentdock.com`
  and the package `homepage` = `https://podwave.free.componentdock.com`.
