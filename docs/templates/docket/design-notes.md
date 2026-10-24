# Docket — Design Notes

Reference: **Lawfirm** — `https://colorlib.com/wp/template/lawfirm/`  
Live preview: `https://preview.colorlib.com/theme/lawfirm/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/lawfirm-free-fullscreen-lawyer-website-template.jpg  
Shipped: https://docket.free.componentdock.com

> **Reference identity (measured 2026-10-24).** The demo directory
> `https://preview.colorlib.com/theme/lawfirm/` serves the **v3.0.2 rebuild** of this
> design (Bootstrap 5.3.8 · Swiper 14 · Jarallax · self-hosted Roboto, 8 live pages).
> The `lawfirm` catalogue entry's row thumbnail — the serif full-screen
> `…fullscreen-lawyer…` page — is a **retired** design with no demo (13 prefixes → 404)
> and no archive (both zips → 404), so rows 1387/1760/2123 all resolve to this one
> design. Measured tokens: gold `#cbb88c` (CTA fill, text `#1d2227`), ink `#1d2227`,
> deep gold `#7e6939`, panel `#f5f4f0`, strip ramp `#161a1e`/`#121518`/`#0e1013`,
> Roboto only. `#007bff` is the compiled-Bootstrap frame and is **never painted** —
> where this brief still lists it as "primary", the app lags the reference (implementer
> repaint), never the reverse. Evidence: `openspec/specs/template-docket/spec.md`
> §Reference identity.

Docket is a law firm landing page template. It recreates the ColorLib Lawfirm design (https://colorlib.com/wp/template/lawfirm/) with a dark professional aesthetic, Roboto font, and Bootstrap blue accent (#007bff).

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700**

## Design tokens (`apps/docket/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--font-sans` | `'Roboto', sans-serif` | font sans |
| `--color-brand` | `#007bff` | brand |
| `--color-brand-hover` | `#0069d9` | brand hover |
| `--color-dark-bg` | `#212529` | dark bg |
| `--color-dark-card` | `#1d2227` | dark card |
| `--color-dark-card-2` | `#161a1e` | dark card 2 |
| `--color-dark-card-3` | `#121518` | dark card 3 |
| `--color-dark-card-4` | `#0e1013` | dark card 4 |
| `--color-body-text` | `#b2b2b8` | body text |
| `--color-heading` | `#ffffff` | heading |
| `--color-surface` | `#ffffff` | surface |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top bar | see fidelity note below |
| 2 | `Navbar` | Navigation bar | see fidelity note below |
| 3 | `Hero` | Hero section | see fidelity note below |
| 4 | `IntroCards` | Intro cards section | see fidelity note below |
| 5 | `TrustFeatures` | Trust features section | see fidelity note below |
| 6 | `StatsCounter` | — | no dedicated spec block |
| 7 | `PracticeAreas` | Practice areas section | see fidelity note below |
| 8 | `CaseStudies` | Case studies section | see fidelity note below |
| 9 | `Testimonials` | Testimonials section | see fidelity note below |
| 10 | `CtaBanner` | CTA banner | see fidelity note below |
| 11 | `Blog` | Blog section | see fidelity note below |
| 12 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `TopBar`
The template SHALL display a top bar with phone number and email on the left, and social media icons (Facebook, Twitter, Instagram, Dribbble) on the right.

### `Navbar`
The template SHALL display a dark navigation bar with brand name "Docket", section links (Home, About, Practice Areas, Cases, Attorneys, Blog, Contact), and a mobile menu toggle.

### `Hero`
The template SHALL display a full-width hero with a dark background image overlay, heading "Don't Feel Helpless We Fight for Justice", description text, and two CTA buttons ("Contact us" primary, "Read more" white).

### `IntroCards`
The template SHALL display 4 dark-background intro cards in a row: Expert Attorneys, Case Dismissed, Court Performance, Court Performance — each with an icon, title, and short description.

### `TrustFeatures`
The template SHALL display a section with heading "Why to Put Trust in Law Firm" and 4 feature items (Expert Attorneys, Great Discount, Legal Advisory, Quick Charges) each with an icon, title, and description.

### `StatsCounter`
*anchors only* — Statistics

### `PracticeAreas`
The template SHALL display a section with heading "What We Cover" and 6 practice area cards: Business Law, Family Law, Criminal Law, Real Estate Law, Personal Injury, Judicial Law — each with an icon, title, and description.

### `CaseStudies`
The template SHALL display a section with heading "Recent Case Studies" and 7 case study items in a 2-column grid, each with an image, category tag, title, and short description.

### `Testimonials`
The template SHALL display a dark-background carousel section with heading "Happy Clients" and 5 testimonial cards, each with a quote, author photo, name, and title. Navigation arrows allow cycling through testimonials.

### `CtaBanner`
The template SHALL display a full-width call-to-action banner with a background image overlay, heading "We Have Great Results", 3 stat items (Award Winning, 60 Years of Experience, Best Attorneys team), and a "Free Case Consultation" button.

### `Blog`
The template SHALL display a section with heading "Recent Blog" and 3 blog post cards, each with an image, date, author, title, and short description.

### `Footer`
The template SHALL display a dark footer with 4 columns: Company info (about text, social icons), Practice Areas links, Services links, and Contact info (address, phone, email). Footer copyright line with Component Dock link.

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
- **Provenance ban.** No file under `apps/docket/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/docket/public/CNAME` = `docket.free.componentdock.com`
  and the package `homepage` = `https://docket.free.componentdock.com`.
