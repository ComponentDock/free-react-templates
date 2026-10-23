# Kindred — Design Notes

Reference: **Aspiration** — `https://colorlib.com/wp/template/aspiration/`  
Live preview: `https://preview.colorlib.com/theme/aspiration/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/aspiration-free-template.jpg  
Shipped: https://kindred.free.componentdock.com

Kindred is a single-page charity/ NGO landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Aspiration" design (see TEMPLATES.md, Bootstrap category), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@400;500;600;700**, **Work Sans**

## Design tokens (`apps/kindred/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#0028ff` | brand |
| `--color-brand-600` | `#0028ff` | brand 600 |
| `--color-brand-700` | `#0020cc` | brand 700 |
| `--color-brand-800` | `#001a9e` | brand 800 |
| `--color-primary-50` | `#eef1ff` | primary 50 |
| `--color-primary-100` | `#dbe2ff` | primary 100 |
| `--color-primary-200` | `#bcc8ff` | primary 200 |
| `--color-primary-300` | `#93a8ff` | primary 300 |
| `--color-primary-400` | `#6683ff` | primary 400 |
| `--color-primary-500` | `#3d5cff` | primary 500 |
| `--color-primary-600` | `#0028ff` | primary 600 |
| `--color-primary-700` | `#0020cc` | primary 700 |
| `--color-primary-800` | `#001a9e` | primary 800 |
| `--color-primary-900` | `#00146e` | primary 900 |
| `--color-light` | `#f8f9fa` | Light section background — grants + testimony areas (#f8f9fa). |
| `--font-display` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'Work Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero | see fidelity note below |
| 3 | `Volunteer` | Volunteer band | see fidelity note below |
| 4 | `Services` | Services grid | see fidelity note below |
| 5 | `Grants` | Foundation grants | see fidelity note below |
| 6 | `VolunteerBand` | Stats counter | see fidelity note below |
| 7 | `Causes` | Causes grid | see fidelity note below |
| 8 | `IntroRow` | Intro call-to-action row | see fidelity note below |
| 9 | `Counter` | Stats counter | see fidelity note below |
| 10 | `Blog` | Recent blog | see fidelity note below |
| 11 | `Sponsorship` | Sponsorship headline | see fidelity note below |
| 12 | `SuccessStories` | Success stories | see fidelity note below |
| 13 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a top navigation bar with the site name "Kindred", a "Home" link, and a dark-mode toggle button.

### `Hero`
The system SHALL render a full-width hero with a background image, a blue overlay band, a level-1 headline, and a circular video play button.

### `Volunteer`
The system SHALL render a full-width photo band with a centered "Become a Volunteer" heading link.

### `Services`
The system SHALL render a services section with four icon cards, each with an icon, a heading, and a blurb.

### `Grants`
The system SHALL render a light-background grants section with a subheading, a heading, and a featured cause panel showing donation progress.

### `VolunteerBand`
The system SHALL render a background-image counter band with four animated statistics.

### `Causes`
The system SHALL render an "Our Priorities" section with three cause cards, each with an image, title, blurb, amount-to-go, and a progress bar.

### `IntroRow`
The system SHALL render an intro row with a big donation number, a cause label, a "Start Donation" button, and a quote block.

### `Counter`
The system SHALL render a background-image counter band with four animated statistics.

### `Blog`
The system SHALL render a "Recent Blog" section with one large entry and three thumbnail entries, each with a title and a meta row.

### `Sponsorship`
The system SHALL render a centered sponsorship level-1 headline.

### `SuccessStories`
The system SHALL render a "Success Stories" section with a photo and a carousel of at least three testimonials, each with a quote, an author name, and a role.

### `Footer`
The system SHALL render a footer with the site name, a blurb, social links, information links, and a "Have a Questions?" widget with contact details.

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
- **Provenance ban.** No file under `apps/kindred/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/kindred/public/CNAME` = `kindred.free.componentdock.com`
  and the package `homepage` = `https://kindred.free.componentdock.com`.
