# Petsitting — Design Notes

Reference: **Petsitting** — `https://colorlib.com/wp/template/petsitting/`  
Live preview: `https://preview.colorlib.com/theme/petsitting/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/petsitting-free-template.jpg  
Shipped: https://petsitting.free.componentdock.com

Petsitting is a multi-section pet-sitting services website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Petsitting" design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Montserrat**, **Montserrat:wght@400;500;600;700;800**

## Design tokens (`apps/petsitting/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#00bd56` | brand |
| `--color-brand-strong` | `#00a34a` | Brand green hover/strong tone (#00bd55). |
| `--color-accent` | `#207dff` | Accent blue — secondary links/highlights (#207dff). |
| `--color-paper` | `#f8f9fa` | Light section background — `bg-light` (#f8f9fa). |
| `--color-night` | `#212529` | Dark text / footer background (#212529 / #343a40). |
| `--font-sans` | `'Montserrat', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Intro` | Intro services section | see fidelity note below |
| 4 | `WhyChooseUs` | Why-choose-us section | see fidelity note below |
| 5 | `Counters` | — | no dedicated spec block |
| 6 | `Faq` | FAQ section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Pricing` | Pricing section | see fidelity note below |
| 9 | `Gallery` | Gallery section | see fidelity note below |
| 10 | `Blog` | Blog section | see fidelity note below |
| 11 | `Appointment` | Component Dock attribution | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a navigation bar with the site name "Petsitting", links to the main sections, a "Get Started" button, and a dark-mode toggle button.

### `Hero`
The system SHALL render a hero section with the headline "Highest Quality Care For Pets You'll Love", supporting copy, and CTA buttons.

### `Intro`
The system SHALL render an intro services section with three blocks: Dog Walking, Pet Daycare, and Pet Grooming.

### `WhyChooseUs`
The system SHALL render a "Why Choose Us?" section with four features: Care Advices, Customer Supports, Emergency Services, and Veterinary Help.

### `Counters`
*anchors only* — Our results

### `Faq`
The system SHALL render a "Frequently Asks Questions" section with at least three expandable question items.

### `Testimonials`
The system SHALL render a "Happy Clients & Feedbacks" section with at least two testimonial cards.

### `Pricing`
The system SHALL render a "Choose Your Plan" section with three plans (Starter, Professional, Premium), each with a price and a feature list.

### `Gallery`
The system SHALL render a "Pets Gallery" section with at least six images labelled by breed (Persian Cat, Pomeranian, Sphynx Cat, British Shorthair, Beagle, Pug).

### `Blog`
The system SHALL render a blog section titled "Latest news from our blog" with at least three posts, each with a title and an excerpt.

### `Appointment`
The system SHALL credit Component Dock — the marketplace that publishes this template — with a visible link to `https://www.componentdock.com/` in the site footer (AGENTS.md rule 5). The credit is chrome, not source content: it SHALL NOT change the footer's own layout or copy beyond the credit line.

### `Footer`
The system SHALL render a footer with the site name "Petsitting", an about blurb, link columns, and social links.

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
- **Provenance ban.** No file under `apps/petsitting/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/petsitting/public/CNAME` = `petsitting.free.componentdock.com`
  and the package `homepage` = `https://petsitting.free.componentdock.com`.
