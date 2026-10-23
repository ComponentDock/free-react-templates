# Airwave — Design Notes

Reference: **The Hustle Hour** — `https://colorlib.com/wp/template/the-hustle-hour/`  
Live preview: `https://preview.colorlib.com/theme/the-hustle-hour/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hustlehour-template-1771943880509.jpg  
Shipped: https://airwave.free.componentdock.com

Airwave is a single-page podcast landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Outfit**, **Outfit:wght@300;400;500;600;700;800**

## Design tokens (`apps/airwave/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#fef2f2` | primary 50 |
| `--color-primary-100` | `#fee2e2` | primary 100 |
| `--color-primary-200` | `#fecaca` | primary 200 |
| `--color-primary-300` | `#fca5a5` | primary 300 |
| `--color-primary-400` | `#f87171` | primary 400 |
| `--color-primary-500` | `#ef4444` | primary 500 |
| `--color-primary-600` | `#dc2626` | primary 600 |
| `--color-primary-700` | `#b91c1c` | primary 700 |
| `--color-primary-800` | `#991b1b` | primary 800 |
| `--color-primary-900` | `#7f1d1d` | primary 900 |
| `--color-primary-950` | `#450a0a` | primary 950 |
| `--color-accent-400` | `#c084fc` | accent 400 |
| `--color-accent-500` | `#a855f7` | accent 500 |
| `--color-accent-600` | `#9333ea` | accent 600 |
| `--font-sans` | `'Outfit', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Preloader` | — | no dedicated spec block |
| 2 | `Navbar` | Navigation bar | see fidelity note below |
| 3 | `Hero` | Hero section | see fidelity note below |
| 4 | `FeaturedEpisode` | Featured episode band | see fidelity note below |
| 5 | `Episodes` | Recent Episodes section | see fidelity note below |
| 6 | `Host` | Host section | see fidelity note below |
| 7 | `Sponsors` | Sponsors section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Newsletter` | Newsletter section | see fidelity note below |
| 10 | `Faq` | FAQ section | see fidelity note below |
| 11 | `Contact` | Contact section | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |
| 13 | `CookieConsent` | Component Dock attribution | see fidelity note below |
| 14 | `BackToTop` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Preloader`
*anchors only* — status · Loading

### `Navbar`
The system SHALL render a sticky top navigation bar with the site name "Airwave", anchor links to the page's sections, a "Listen Now" CTA, a dark-mode toggle, and a mobile menu.

### `Hero`
The system SHALL render a dark hero with a release badge, a gradient-accented headline, a blurb, two CTA buttons, platform links, and a stats row.

### `FeaturedEpisode`
The system SHALL render a light contrast band featuring the latest episode with metadata, tags, and a play button.

### `Episodes`
The system SHALL render a recent-episodes section with six episode cards and a "View All Episodes" button.

### `Host`
The system SHALL render an "About the Host" section with a bio and a pull quote.

### `Sponsors`
The system SHALL render a sponsors section with four sponsor cards and a sponsorship CTA.

### `Testimonials`
The system SHALL render a testimonials section with six listener quotes.

### `Newsletter`
The system SHALL render a red-to-purple gradient newsletter card with an email form.

### `Faq`
The system SHALL render an FAQ section with five accordion items.

### `Contact`
The system SHALL render a contact section with a message form and an email address.

### `Footer`
The system SHALL render a dark footer with brand info, link columns, and a bottom bar.

### `CookieConsent`
The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.

### `BackToTop`
*anchors only* — Back to top

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
- **Provenance ban.** No file under `apps/airwave/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/airwave/public/CNAME` = `airwave.free.componentdock.com`
  and the package `homepage` = `https://airwave.free.componentdock.com`.
