# Vetly — Design Notes

Reference: **Thepetcare** — `https://colorlib.com/wp/template/thepetcare/`  
Live preview: `https://preview.colorlib.com/theme/thepetcare/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/thepetcare-free-template.jpg  
Shipped: https://vetly.free.componentdock.com

Vetly is a multi-section animal-care website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Thepetcare" design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **DM Sans**, **DM Sans:wght@400;500;700**, **Fredoka One**

## Design tokens (`apps/vetly/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff3e7e` | brand |
| `--color-navy` | `#140c40` | Dark navy — headings/alt sections (#140C40, #232F55, #023C5A). |
| `--color-navy2` | `#232f55` | navy2 |
| `--color-navy3` | `#023c5a` | navy3 |
| `--color-heading` | `#415094` | Heading color (#415094). |
| `--color-paper` | `#f9f9ff` | Light section background — services area (#f9f9ff). |
| `--color-lavender` | `#f0e9ff` | Icon chip background — lavender (#f0e9ff). |
| `--color-sky` | `#4cd3e3` | Accent teal (#4cd3e3). |
| `--color-mist` | `#999999` | Body text gray (#999999). |
| `--font-display` | `'Fredoka One', ui-sans-serif, system-ui, sans-serif` | font display |
| `--font-sans` | `'DM Sans', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `About` | About section | see fidelity note below |
| 4 | `Services` | Services section | see fidelity note below |
| 5 | `Video` | Video block | see fidelity note below |
| 6 | `Quote` | Quote section | see fidelity note below |
| 7 | `Emergency` | Emergency section | see fidelity note below |
| 8 | `Volunteer` | Volunteer section | see fidelity note below |
| 9 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a navigation bar with the site name "Vetly", links to the main sections, a "Get Quote" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a hero section with the headline "Saving Animals Changing Live", supporting copy, and an "Our Services" button.

### `About`
The system SHALL render an about section titled "The Kind of Care Your Pets Deserve" with descriptive copy and a "Learn More" button.

### `Services`
The system SHALL render a services section titled "Our Pet Care Services" with three cards: Pet Traning, Hygienic Care, and Pet Treatment.

### `Video`
The system SHALL render a video block with "Play the video to see more" text and a play button with an accessible label.

### `Quote`
The system SHALL render a quote section with the heading "Animals has come to mean so much in t live" and an image with copy.

### `Emergency`
The system SHALL render an emergency band with "For Emergency care Just Call Us", a phone number, and a "Learn More" button.

### `Volunteer`
The system SHALL render a volunteer section titled "We looking for helping hand" with a "Make a Donation" call-to-action.

### `Footer`
The system SHALL render a footer with an about blurb, link columns (Navigation, Services), a "Subscribe newsletter" signup, and social links.

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
- **Provenance ban.** No file under `apps/vetly/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vetly/public/CNAME` = `vetly.free.componentdock.com`
  and the package `homepage` = `https://vetly.free.componentdock.com`.
