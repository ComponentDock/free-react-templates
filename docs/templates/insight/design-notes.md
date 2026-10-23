# Insight — Design Notes

Reference: **Buson** — `https://colorlib.com/wp/template/buson/`  
Live preview: `https://preview.colorlib.com/theme/buson/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/buson-free-template.jpg  
Shipped: https://insight.free.componentdock.com

Recreate the ColorLib "Buson" consulting company landing page as a modern React 19 + Tailwind CSS 4 + TypeScript single-page template named "Insight". The template provides a full-featured consulting company website with header, hero slider, team, trusted section, services, cases, blog, callback form, and footer sections.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Poppins**, **Poppins:wght@400;500;600;700;900**

## Design tokens (`apps/insight/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ff656a` | brand |
| `--color-brand-dark` | `#e6373d` | brand dark |
| `--color-navy` | `#002d5b` | navy |
| `--color-navy-dark` | `#191d34` | navy dark |
| `--color-lavender` | `#f9f9ff` | lavender |
| `--color-footer-bg` | `#f8fafe` | footer bg |
| `--color-muted` | `#999999` | muted |
| `--color-blue-accent` | `#415094` | blue accent |
| `--color-cyan-accent` | `#4cd3e3` | cyan accent |
| `--font-poppins` | `'Poppins', sans-serif` | font poppins |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `HeaderTop` | Header top displays contact info | see fidelity note below |
| 2 | `Navbar` | Navbar displays navigation and logo | see fidelity note below |
| 3 | `HeroSlider` | Hero slider displays heading and CTA | see fidelity note below |
| 4 | `TeamProfiles` | Team profiles section shows 3 members | see fidelity note below |
| 5 | `WeAreTrusted` | We're trusted section with overlay card | see fidelity note below |
| 6 | `OurServices` | Our Services shows 3 service cards | see fidelity note below |
| 7 | `CompletedCases` | Completed Cases section with stats | see fidelity note below |
| 8 | `RecentNews` | Recent News shows 3 blog cards | see fidelity note below |
| 9 | `RequestCallback` | Request Callback form | see fidelity note below |
| 10 | `Footer` | Footer with 4 columns | see fidelity note below |
| 11 | `FooterBottom` | Footer links to Component Dock | see fidelity note below |

## Section-by-section fidelity

### `HeaderTop`
The HeaderTop SHALL display a physical address and email address with social media icons.

### `Navbar`
The navbar SHALL display the logo "Insight", navigation links (Home, About, Services, Cases, Blog, Contact), and a CTA button. The navbar SHALL have a white background with dark text.

### `HeroSlider`
The hero slider SHALL display a background image with "We help you to grow your business" heading and a "Contact Now" CTA button. The hero SHALL support 2 slides with auto-rotation.

### `TeamProfiles`
The team profiles section SHALL display 3 circular team member photos with names and roles.

### `WeAreTrusted`
The We're Trusted section SHALL display a background image on the left with a semi-transparent white overlay card on the right containing "What we do for you" heading and a description paragraph.

### `OurServices`
The Our Services section SHALL display "Our Services" heading and 3 service cards (Strategic Planning, Trades & Stocks, Audit & Assurance), each with an icon, title, description, and a "Learn More" link. A "More Services" button SHALL appear below.

### `CompletedCases`
The Completed Cases section SHALL display "Completed Cases" heading, a left column with an image and stat counters, and a right column with "Marketing Strategy" text blocks.

### `RecentNews`
The Recent News section SHALL display "Our Recent News" heading and 3 blog post cards, each with an image, title, date, and "See more" link.

### `RequestCallback`
The Request Callback section SHALL display on a dark navy (`#002d5b`) background with "Request for Call Back" heading and a form with Name and Phone input fields.

### `Footer`
The footer SHALL have a light background with 4 columns: Logo + description, Company links, Services links, and Get in Touch (phone, email, address). A copyright bar with "Component Dock" link SHALL appear at the bottom.

### `FooterBottom`
The footer SHALL include a link to `https://www.componentdock.com/` branded as "Component Dock".

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
- **Provenance ban.** No file under `apps/insight/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/insight/public/CNAME` = `insight.free.componentdock.com`
  and the package `homepage` = `https://insight.free.componentdock.com`.
