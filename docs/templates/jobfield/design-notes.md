# Jobfield — Design Notes

Reference: **Hirehub** — `https://colorlib.com/wp/template/hirehub/`  
Live preview: `https://preview.colorlib.com/theme/hirehub/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/hirehub-template.jpg  
Shipped: https://jobfield.free.componentdock.com

Jobfield is a single-page job-board landing template in the free-react-templates monorepo.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Inter**, **Inter:wght@300;400;500;600;700;800**

## Design tokens (`apps/jobfield/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary-100` | `#e0e7ff` | primary 100 |
| `--color-primary-200` | `#c7d2fe` | primary 200 |
| `--color-primary-300` | `#a5b4fc` | primary 300 |
| `--color-primary-400` | `#818cf8` | primary 400 |
| `--color-primary-500` | `#6366f1` | primary 500 |
| `--color-primary-600` | `#4f46e5` | primary 600 |
| `--color-primary-700` | `#4338ca` | primary 700 |
| `--color-primary-800` | `#3730a3` | primary 800 |
| `--color-primary-900` | `#312e81` | primary 900 |
| `--color-primary-950` | `#1e1b4b` | primary 950 |
| `--color-accent-100` | `#d1fae5` | accent 100 |
| `--color-accent-300` | `#6ee7b7` | accent 300 |
| `--color-accent-400` | `#34d399` | accent 400 |
| `--color-accent-500` | `#10b981` | accent 500 |
| `--color-accent-600` | `#059669` | accent 600 |
| `--color-accent-700` | `#047857` | accent 700 |
| `--color-accent-900` | `#064e3b` | accent 900 |
| `--font-sans` | `'Inter', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--animate-hero-float` | `hero-float 8s ease-in-out infinite` | animate hero float |
| `--animate-hero-float-reverse` | `hero-float-reverse 10s ease-in-out infinite` | animate hero float reverse |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navigation bar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `Stats` | Stats row | see fidelity note below |
| 4 | `FeaturedJobs` | Featured jobs section | see fidelity note below |
| 5 | `Categories` | Categories section | see fidelity note below |
| 6 | `Companies` | Companies section | see fidelity note below |
| 7 | `HowItWorks` | How It Works section | see fidelity note below |
| 8 | `Testimonials` | Testimonials section | see fidelity note below |
| 9 | `Faq` | FAQ section | see fidelity note below |
| 10 | `JobAlerts` | Job alerts section | see fidelity note below |
| 11 | `Cta` | CTA section | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |
| 13 | `CookieConsent` | Component Dock attribution | see fidelity note below |
| 14 | `BackToTop` | — | no dedicated spec block |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
The system SHALL render a sticky top navigation bar with the brand wordmark, section links, a dark-mode toggle, a "Post a Job" button and a mobile menu.

### `Hero`
The system SHALL render a gradient hero with an emerald badge, a headline, a job search form, an advanced-filters button and trending job links.

### `Stats`
The system SHALL render four animated counters below the hero.

### `FeaturedJobs`
The system SHALL render a "Latest Opportunities" section with six job cards.

### `Categories`
The system SHALL render an "Explore by Category" section with eight category cards.

### `Companies`
The system SHALL render a "Companies Hiring Now" section with six company cards.

### `HowItWorks`
The system SHALL render a "Your Path to Success" section with tabbed steps for job seekers and employers.

### `Testimonials`
The system SHALL render a "Success Stories" carousel with quotes, star ratings, avatars and slide controls.

### `Faq`
The system SHALL render a "Frequently Asked Questions" accordion with five questions.

### `JobAlerts`
The system SHALL render a gradient "Never Miss an Opportunity" section with an email subscription form.

### `Cta`
The system SHALL render a "Ready to Take the Next Step?" section with two action buttons.

### `Footer`
The system SHALL render a dark footer with a brand blurb, contact details, social icons, four link columns and a copyright bar.

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
- **Provenance ban.** No file under `apps/jobfield/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/jobfield/public/CNAME` = `jobfield.free.componentdock.com`
  and the package `homepage` = `https://jobfield.free.componentdock.com`.
