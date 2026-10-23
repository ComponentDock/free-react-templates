# Sonance — Design Notes

Reference: **Megapod** — `https://colorlib.com/wp/template/megapod/`  
Live preview: `https://preview.colorlib.com/theme/megapod/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/megapod-free-template-1.jpg  
Shipped: https://sonance.free.componentdock.com

A podcast website template featuring a hero with featured episode, audio player, live & upcoming episodes with category tabs, a call-to-action for donations, a latest-episodes grid, and a newsletter footer. Built with React 19, Tailwind CSS 4, and TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito**, **Nunito:wght@400;600;700;800**

## Design tokens (`apps/sonance/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#f0efff` | primary 50 |
| `--color-primary-100` | `#dddbfe` | primary 100 |
| `--color-primary-200` | `#c3c0fd` | primary 200 |
| `--color-primary-300` | `#9e99fb` | primary 300 |
| `--color-primary-400` | `#6763fd` | primary 400 |
| `--color-primary-500` | `#5550e8` | primary 500 |
| `--color-primary-600` | `#433dcf` | primary 600 |
| `--color-primary-700` | `#3631a8` | primary 700 |
| `--color-primary-800` | `#2d2989` | primary 800 |
| `--color-primary-900` | `#27256d` | primary 900 |
| `--color-mist` | `#f8f8fc` | Light section backgrounds. |
| `--color-smoke` | `#8d8d8d` | Muted copy (ColorLib #8d8d8d). |
| `--color-ink` | `#111111` | ink |
| `--font-sans` | `'Nunito', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Nunito', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar with logo, navigation, and search | see fidelity note below |
| 2 | `Hero` | Hero section with featured episode | see fidelity note below |
| 3 | `AudioPlayer` | Audio player with playback controls | see fidelity note below |
| 4 | `Podcast` | — | no dedicated spec block |
| 5 | `CallToAction` | Support The Show call-to-action | see fidelity note below |
| 6 | `Episodes` | Live & Upcoming episodes with category tabs | see fidelity note below |
| 7 | `Footer` | Footer with newsletter, social links, and Component Dock attribution | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
Users SHALL see a sticky dark navbar with the "Sonance" logo, navigation links (Home, Episodes, About, Contact), and a search icon button.

### `Hero`
Users SHALL see a hero section with the featured episode date, title, two subscription CTAs, and a play button with episode artwork.

### `AudioPlayer`
Users SHALL see an audio player section with track artwork, title, artist, play/pause button, progress bar, share and download buttons.

### `Podcast`
*anchors only* — Live and upcoming episodes · tablist · Filter by category

### `CallToAction`
Users SHALL see a centered "Support The Show" section with a donation CTA button.

### `Episodes`
Users SHALL see a "Live & Upcoming" section with category filter tabs and episode cards with inline audio controls.

### `Footer`
Users SHALL see a footer with a newsletter signup form, logo, social media links, copyright, and a link to Component Dock.

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
- **Provenance ban.** No file under `apps/sonance/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sonance/public/CNAME` = `sonance.free.componentdock.com`
  and the package `homepage` = `https://sonance.free.componentdock.com`.
