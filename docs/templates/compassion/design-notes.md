# Compassion — Design Notes

Reference: **Inward** — `https://colorlib.com/wp/template/inward/`  
Live preview: `https://preview.colorlib.com/theme/inward/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/inward-free-template.jpg  
Shipped: https://compassion.free.componentdock.com

Compassion is a single-page church/charity website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Inward" church website template design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700;800**, **Playfair Display**

## Design tokens (`apps/compassion/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#6a99cb` | Brand palette — muted blue #6A99CB, warm church aesthetic |
| `--color-brand-hover` | `#90b3d8` | brand hover |
| `--color-footer-bg` | `#262626` | footer bg |
| `--color-footer-border` | `#2e2e2e` | footer border |
| `--color-body-text` | `#b3b3b3` | body text |
| `--color-heading` | `#000000` | heading |
| `--color-surface` | `#fafafa` | surface |
| `--color-sermon-card` | `#000000` | sermon card |
| `--color-dot-inactive` | `#cccccc` | dot inactive |
| `--font-playfair` | `'Playfair Display', serif` | font playfair |
| `--font-opensans` | `'Open Sans', sans-serif` | font opensans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders all navigation links | see fidelity note below |
| 2 | `Hero` | Hero displays welcome heading and CTA | see fidelity note below |
| 3 | `WorshipTime` | Worship Time section displays countdown and events | see fidelity note below |
| 4 | `AudioSermons` | Audio Sermons section displays sermon cards | see fidelity note below |
| 5 | `LatestEvents` | Latest Events section displays event cards | see fidelity note below |
| 6 | `PersonalTestimony` | Personal Testimony section displays carousel | see fidelity note below |
| 7 | `Footer` | Footer displays church information and links | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
Users SHALL see the brand "Compassion" and navigation links (Home, About, Messages, Events, Contact) in the navbar. The Messages link SHALL display a dropdown with Audio Sermons, Past Messages, Bible Reading, and End Time Prophecy.

### `Hero`
Users SHALL see a full-viewport hero section with a background image, dark overlay, the heading "Welcome to Compassion", and a "Request a Prayer" button.

### `WorshipTime`
Users SHALL see a split layout with a camp meeting countdown on the left and upcoming events list on the right.

### `AudioSermons`
Users SHALL see 3 sermon cards in a grid with images, titles, author/date metadata, and audio players on a light gray background.

### `LatestEvents`
Users SHALL see 3 event cards in a grid with thumbnails, titles, date/category metadata, and descriptions.

### `PersonalTestimony`
Users SHALL see a testimony carousel with circular pastor photos, blockquotes, attributions, and dot pagination.

### `Footer`
Users SHALL see a dark footer with 4 columns: church info + social icons, The Church links, Messages links, and contact info. The footer MUST link to Component Dock.

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
- **Provenance ban.** No file under `apps/compassion/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/compassion/public/CNAME` = `compassion.free.componentdock.com`
  and the package `homepage` = `https://compassion.free.componentdock.com`.
