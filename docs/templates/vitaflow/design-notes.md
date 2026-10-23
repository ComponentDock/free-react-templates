# Vitaflow — Design Notes

Reference: **Healthcoach** — `https://colorlib.com/wp/template/healthcoach/`  
Live preview: `https://preview.colorlib.com/theme/healthcoach/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/healthcoach-free-template.jpg  
Shipped: https://vitaflow.free.componentdock.com

A free, production-ready React recreation of the ColorLib "Healthcoach" health coaching landing template. Provides a hero carousel, services showcase, consultation form, testimonials, pricing plans, blog cards, and a branded footer — all rebuilt with React 19, Tailwind CSS 4, and TypeScript under the name "Vitaflow".

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@300;400;500;600;700**

## Design tokens (`apps/vitaflow/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-50` | `#e6f3ff` | primary 50 |
| `--color-primary-100` | `#b3dbff` | primary 100 |
| `--color-primary-200` | `#80c3ff` | primary 200 |
| `--color-primary-300` | `#4dabff` | primary 300 |
| `--color-primary-400` | `#1089ff` | primary 400 |
| `--color-primary-500` | `#0077e6` | primary 500 |
| `--color-primary-600` | `#0065bf` | primary 600 |
| `--color-primary-700` | `#005299` | primary 700 |
| `--color-primary-800` | `#004073` | primary 800 |
| `--color-primary-900` | `#002d4d` | primary 900 |
| `--color-accent-300` | `#c8e08a` | Green accent (ColorLib logo span #a3cb4c). |
| `--color-accent-400` | `#a3cb4c` | accent 400 |
| `--color-accent-500` | `#8ab33a` | accent 500 |
| `--color-subscribe` | `#a7cd54` | Subscribe button green (#a7cd54). |
| `--color-darkblue` | `#006fdc` | Dark blue for consultation form (#006fdc). |
| `--color-mist` | `#f8f9fa` | Light section bg (#f8f9fa). |
| `--color-footer` | `#131719` | Footer bg (#131719). |
| `--color-ink` | `#212529` | Body text (#212529). |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-display` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font display |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | TopBar renders contact info and social links | see fidelity note below |
| 2 | `Navbar` | Navbar renders brand and navigation | see fidelity note below |
| 3 | `Hero` | Hero displays hero content with CTA | see fidelity note below |
| 4 | `Services` | Services shows 3 service cards | see fidelity note below |
| 5 | `AboutSplit` | AboutSplit shows founder info | see fidelity note below |
| 6 | `ConsultationBar` | ConsultationBar has form and CTAs | see fidelity note below |
| 7 | `Testimonials` | Testimonials display client quotes | see fidelity note below |
| 8 | `HowItWorks` | HowItWorks shows 4 steps | see fidelity note below |
| 9 | `SuccessStories` | SuccessStories shows client stories | see fidelity note below |
| 10 | `CTAIntro` | CTAIntro displays CTA banner | see fidelity note below |
| 11 | `Pricing` | Pricing shows 4 plans | see fidelity note below |
| 12 | `Blog` | Blog shows 3 posts | see fidelity note below |
| 13 | `Footer` | Footer has subscribe form and links | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The template SHALL display a top bar with phone number, email address, and social media icon links.

### `Navbar`
The navbar SHALL display the brand name "Vitaflow" and navigation links for Home, About, Coach, Pricing, Services, Stories, Blog, and Contact.

### `Hero`
The hero section SHALL display a background image with dark overlay, heading, subtext, and two CTA buttons.

### `Services`
The services section SHALL display 3 service cards (Exercise Program, Nutrition Plans, Diet Program) with images, headings, descriptions, and "Read more" links.

### `AboutSplit`
The about section SHALL display a split layout with an image, heading, description, and founder avatar with name and title.

### `ConsultationBar`
The consultation bar SHALL display 3 columns: healthcare services info, a free consultation form, and find-a-health-expert CTA.

### `Testimonials`
The testimonials section SHALL display client testimonials with avatars, quotes, names, and positions.

### `HowItWorks`
The how-it-works section SHALL display 4 step cards with icons, headings, and descriptions.

### `SuccessStories`
The success stories section SHALL display client stories with images, quotes, names, and roles.

### `CTAIntro`
The CTA intro SHALL display a full-width background image with heading and consultation button.

### `Pricing`
The pricing section SHALL display 4 pricing cards (Starter $49, Standard $79, Premium $109, Platinum $159) with feature lists and "Get Started" buttons.

### `Blog`
The blog section SHALL display 3 blog cards with images, dates, authors, comment counts, and headings.

### `Footer`
The footer SHALL display a subscribe form, 4 link columns (Services, About, Resources, Social), and a copyright line linking to Component Dock.

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
- **Provenance ban.** No file under `apps/vitaflow/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/vitaflow/public/CNAME` = `vitaflow.free.componentdock.com`
  and the package `homepage` = `https://vitaflow.free.componentdock.com`.
