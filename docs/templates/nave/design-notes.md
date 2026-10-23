# Nave — Design Notes

Reference: **Advent** — `https://colorlib.com/wp/template/advent/`  
Live preview: `https://preview.colorlib.com/theme/advent/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/advent-free-template.jpg  
Shipped: https://nave.free.componentdock.com

A church ministry template with hero slider, upcoming events, worship times, sermons and ministries sections. Recreation of ColorLib's **Advent** template (church/religious ministry site).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;700;800**, **Playfair Display**

## Design tokens (`apps/nave/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffc107` | brand |
| `--color-brand-light` | `#ffce3a` | brand light |
| `--color-dark` | `#262626` | dark |
| `--color-dark-border` | `#2e2e2e` | dark border |
| `--color-text-muted` | `#b3b3b3` | text muted |
| `--font-heading` | `'Playfair Display', Times, serif` | font heading |
| `--font-body` | `'Open Sans', Arial, sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar renders navigation links and brand | see fidelity note below |
| 2 | `HeroSlider` | HeroSlider renders hero section with carousel | see fidelity note below |
| 3 | `UpcomingEvents` | UpcomingEvents shows event info and countdown | see fidelity note below |
| 4 | `WorshipTime` | WorshipTime shows schedule in split layout | see fidelity note below |
| 5 | `Sermons` | Sermons section displays sermon cards | see fidelity note below |
| 6 | `EventsMinistries` | EventsMinistries shows ministry event cards | see fidelity note below |
| 7 | `Footer` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL display the brand name "NAVE" and navigation links for Home, Who We Are, Ministries (with dropdown), Events, and Contact.

### `HeroSlider`
The hero slider SHALL display full-width background images with centered heading, subtitle, and a CTA button with carousel dot navigation.

### `UpcomingEvents`
The upcoming events section SHALL display event metadata (date, location, pastor) and a countdown timer with weeks, days, hours, minutes, seconds in gold boxes.

### `WorshipTime`
The worship time section SHALL display a split layout with service schedule on the left and a background image on the right.

### `Sermons`
The sermons section SHALL display 3 sermon cards each with a circular avatar, title, pastor name, date, and a play button.

### `EventsMinistries`
The events and ministries section SHALL display 3 cards in a grid with images, titles, categories, and descriptions.

### `Footer`
The footer SHALL display About, Quick Links, Contact Info columns, social media links, and a link to https://www.componentdock.com/ branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/nave/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/nave/public/CNAME` = `nave.free.componentdock.com`
  and the package `homepage` = `https://nave.free.componentdock.com`.
