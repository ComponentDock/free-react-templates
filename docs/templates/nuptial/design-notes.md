# Nuptial — Design Notes

Reference: **Hookup** — `https://colorlib.com/wp/template/hookup/`  
Live preview: `https://preview.colorlib.com/theme/hookup/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hookup-free-template.jpg  
Shipped: https://nuptial.free.componentdock.com

Nuptial is a single-page wedding / nuptials landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Hookup" design (https://colorlib.com/wp/template/hookup/), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Great Vibes**, **Libre Caslon Text**, **Poppins**

## Design tokens (`apps/nuptial/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-pink-50` | `#fef3f3` | pink 50 |
| `--color-pink-100` | `#fddddc` | pink 100 |
| `--color-pink-200` | `#fbc7c6` | pink 200 |
| `--color-pink-300` | `#f9a9a8` | pink 300 |
| `--color-pink-400` | `#f78f8e` | pink 400 |
| `--color-pink-500` | `#f67e7d` | pink 500 |
| `--color-pink-600` | `#e05a59` | pink 600 |
| `--color-pink-700` | `#c94a49` | pink 700 |
| `--color-pink-800` | `#a83c3b` | pink 800 |
| `--color-pink-900` | `#86302f` | pink 900 |
| `--color-mist-50` | `#f8f9fa` | Neutral surfaces + text from the reference |
| `--color-smoke-500` | `#6c757d` | smoke 500 |
| `--color-smoke-700` | `#495057` | smoke 700 |
| `--color-ink-900` | `#212529` | ink 900 |
| `--color-ink-700` | `#3d4248` | ink 700 |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-script` | `'Great Vibes', cursive` | font script |
| `--font-serif` | `'Libre Caslon Text', Georgia, serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Invite` | Wedding invite | see fidelity note below |
| 4 | `BrideGroom` | Bride and Groom | see fidelity note below |
| 5 | `LoveStory` | Love story timeline | see fidelity note below |
| 6 | `SweetMessages` | Sweet messages | see fidelity note below |
| 7 | `FamilyFriends` | Family and friends | see fidelity note below |
| 8 | `PlaceTime` | Place and time | see fidelity note below |
| 9 | `RsvpForm` | RSVP form | see fidelity note below |
| 10 | `Gallery` | Gallery | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Nuptial", a "Home" link, section links, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-height hero band with a kicker, a script-style level-1 headline with the couple's names, and a live countdown timer.

### `Invite`
The system SHALL render a "Groom & Bride" invite block with a photo, the couple's names, the wedding date, and the venue.

### `BrideGroom`
The system SHALL render a "Bride & Groom" section with two portrait cards, one for the groom and one for the bride.

### `LoveStory`
The system SHALL render a "Love Story" section with an alternating timeline of four milestones, each with a photo badge, a date, and a title.

### `SweetMessages`
The system SHALL render a "Sweet Messages" section with at least three testimonial cards, each with a quote, a photo, and an author.

### `FamilyFriends`
The system SHALL render a "Family & Friends" section listing eight wedding party members, each with a photo, a name, and a role.

### `PlaceTime`
The system SHALL render a "Place & Time" section with three event cards (The Reception, The Ceremony, The Party), each with an icon, a date and time, an address, a phone number, and a "See Map" button.

### `RsvpForm`
The system SHALL render an RSVP section with a heading and a form collecting a name, an email, a guest count, and a message, with an "I am attending" submit button.

### `Gallery`
The system SHALL render a "Gallery" section with a grid of at least six photos.

### `Footer`
The system SHALL render a footer with the site name, quick links, section links, services, contact details, social links, and the Component Dock attribution.

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
- **Provenance ban.** No file under `apps/nuptial/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/nuptial/public/CNAME` = `nuptial.free.componentdock.com`
  and the package `homepage` = `https://nuptial.free.componentdock.com`.
