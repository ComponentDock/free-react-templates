# Brushwork — Design Notes

Reference: **Five Star** — `https://colorlib.com/wp/template/five-star/`  
Live preview: `https://preview.colorlib.com/theme/five-star/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/five-star-art-crafting-website-template.jpg  
Shipped: https://brushwork.free.componentdock.com

Recreate the ColorLib "Five Star" art and crafting website template as a React 19 + Tailwind CSS 4 + TypeScript application named "Brushwork". The template features a fullscreen hero banner, experience showcase, testimonial carousel, services grid, video section, contact form, and a newsletter footer.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/brushwork/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f5204b` | brand |
| `--color-brand-dark` | `#d91a42` | brand dark |
| `--color-ink` | `#222222` | ink |
| `--color-ink-dark` | `#1a1a1a` | ink dark |
| `--color-paper` | `#f9f9ff` | paper |
| `--color-mist` | `#777777` | mist |
| `--color-primary-50` | `#fef2f4` | primary 50 |
| `--color-primary-100` | `#fde6ea` | primary 100 |
| `--color-primary-200` | `#fbd0d9` | primary 200 |
| `--color-primary-300` | `#f7a8ba` | primary 300 |
| `--color-primary-400` | `#f17694` | primary 400 |
| `--color-primary-500` | `#f5204b` | primary 500 |
| `--color-primary-600` | `#d91a42` | primary 600 |
| `--color-primary-700` | `#b71237` | primary 700 |
| `--color-primary-800` | `#991232` | primary 800 |
| `--color-primary-900` | `#831330` | primary 900 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar navigation | see fidelity note below |
| 2 | `Hero` | Hero banner | see fidelity note below |
| 3 | `Experience` | Experience section | see fidelity note below |
| 4 | `Testimonials` | Testimonials carousel | see fidelity note below |
| 5 | `Services` | Services grid | see fidelity note below |
| 6 | `VideoShowcase` | Video showcase | see fidelity note below |
| 7 | `ServicesCompact` | Compact services | see fidelity note below |
| 8 | `Contact` | Contact form | see fidelity note below |
| 9 | `Footer` | Footer with Component Dock | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The template SHALL render a sticky top navigation bar with the brand name "Brushwork", navigation links (Home, About, Services, Contact), and a mobile hamburger menu toggle.

### `Hero`
The template SHALL render a fullscreen hero section with a dark overlay on a background image, a heading "Crafting Best Experience", and a subtitle.

### `Experience`
The template SHALL render an experience section with two images on the left and descriptive content with a "View Details" button on the right.

### `Testimonials`
The template SHALL render a dark-background testimonial carousel with prev/next navigation arrows to cycle through slides.

### `Services`
The template SHALL render a 4-column services grid with icon cards for Vector Illustration services.

### `VideoShowcase`
The template SHALL render a dark-background video section with a play button placeholder and descriptive text.

### `ServicesCompact`
The template SHALL render a 3-column compact services section with horizontal icon + text cards.

### `Contact`
The template SHALL render a contact section with address/email/phone info on the left and a validated contact form on the right.

### `Footer`
The template SHALL render a dark footer with three columns (About links, Newsletter signup, Instafeed grid) and a bottom copyright bar linking to Component Dock.

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
- **Provenance ban.** No file under `apps/brushwork/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/brushwork/public/CNAME` = `brushwork.free.componentdock.com`
  and the package `homepage` = `https://brushwork.free.componentdock.com`.
