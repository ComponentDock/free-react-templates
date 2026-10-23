# Doglife — Design Notes

Reference: **Doglife** — `https://colorlib.com/wp/template/doglife/`  
Live preview: `https://preview.colorlib.com/theme/doglife/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/doglife-free-template.jpg  
Shipped: https://doglife.free.componentdock.com

Doglife is a multi-section dog-care website template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Doglife" design (see TEMPLATES.md), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Open Sans**, **Open Sans:wght@300;400;600;700;800**, **Vollkorn**

## Design tokens (`apps/doglife/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#9c2c2c` | brand |
| `--color-brand-muted` | `#f3d9d9` | On-brand text tones: body text and headings on the brand background. |
| `--color-brand-strong` | `#7a2020` | brand strong |
| `--color-mint` | `#71bc42` | Feature-check accent — ul-check.success (#71bc42) in light sections. |
| `--color-paper` | `#f8f9fa` | Light section background — bg-light (#f8f9fa, bootstrap !important). |
| `--color-night` | `#212529` | Premium pricing plan background — bg-dark (#212529). |
| `--font-sans` | `'Open Sans', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-serif` | `'Vollkorn', ui-serif, Georgia, serif` | font serif |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Welcome` | Welcome section | see fidelity note below |
| 4 | `Highlights` | Highlights section | see fidelity note below |
| 5 | `Pricing` | Pricing section | see fidelity note below |
| 6 | `Faq` | FAQ section | see fidelity note below |
| 7 | `Testimonials` | Testimonials section | see fidelity note below |
| 8 | `Blog` | Blog section | see fidelity note below |
| 9 | `Services` | Services section | see fidelity note below |
| 10 | `Contact` | Contact section | see fidelity note below |
| 11 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a navigation bar with the site name "Doglife", links to the main sections (Home, About, Doctor, Pricing, Blog, Services, Contact), and a dark-mode toggle button.

### `Hero`
The system SHALL render a hero section with the headline "We Love Dogs", supporting copy, and a primary "Get In Touch" CTA button.

### `Welcome`
The system SHALL render a welcome section titled "Welcome To Our Website" with an image, descriptive copy, and a "Read More" button.

### `Highlights`
The system SHALL render a highlights section with the columns "Happy Pets" and "Modern Equipment", each with a feature checklist and an image, followed by a vet intro block "Meet Jean Smith Our Dog Veterenarian".

### `Pricing`
The system SHALL render a "Pricing Table" section with three plans: Basic, Premium, and Professional, each with a price, feature list, and a "Buy Now" button.

### `Faq`
The system SHALL render a "Frequently Ask Questions" section with at least three expandable question items.

### `Testimonials`
The system SHALL render a "Happy Customers" section with at least two testimonial cards (photo, name, quote).

### `Blog`
The system SHALL render a "Doglife Blog" section with at least four blog entries, each with an image, meta text, title, excerpt, and a "Read More" button.

### `Services`
The system SHALL render an "Our Services" section with six service blocks: Dog Checkup, Dog Dermatology, For Strong Teeth, Dog First Aid, Dog Dryer, and Expert Veterinarian.

### `Contact`
The system SHALL render a contact section with a "Contact Form" (First Name, Last Name, Email, Subject, Message fields with a submit button) and a "Contact Us" block with address, phone, and email details.

### `Footer`
The system SHALL render a footer with the site name, an "About Us" blurb, "Quick Links" and "Follow Us" columns with social links, and a "Subscribe Newsletter" form.

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
- **Provenance ban.** No file under `apps/doglife/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/doglife/public/CNAME` = `doglife.free.componentdock.com`
  and the package `homepage` = `https://doglife.free.componentdock.com`.
