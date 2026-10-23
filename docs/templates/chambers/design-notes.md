# Chambers — Design Notes

Reference: **Lawfirm** — `https://colorlib.com/wp/template/lawfirm/`  
Live preview: `https://preview.colorlib.com/theme/lawfirm/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/lawfirm-free-fullscreen-lawyer-website-template.jpg  
Shipped: https://chambers.free.componentdock.com

A Law Firm template with hero section, intro features, about section, counter stats, practice areas and cases gallery sections. Recreation of ColorLib's **Lawfirm** law firm template.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Roboto**, **Roboto:wght@300;400;500;700;900**

## Design tokens (`apps/chambers/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-primary` | `#007bff` | primary |
| `--color-primary-hover` | `#0069d9` | primary hover |
| `--color-bg-dark` | `#161a1e` | bg dark |
| `--color-bg-darker` | `#121518` | bg darker |
| `--font-sans` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font sans |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `TopBar` | Top Bar | see fidelity note below |
| 2 | `Navbar` | Navbar | see fidelity note below |
| 3 | `Hero` | Hero Section | see fidelity note below |
| 4 | `IntroFeatures` | Intro Features | see fidelity note below |
| 5 | `About` | About Section | see fidelity note below |
| 6 | `CounterStats` | Counter Stats | see fidelity note below |
| 7 | `PracticeAreas` | Practice Areas | see fidelity note below |
| 8 | `Cases` | Cases Gallery | see fidelity note below |
| 9 | `Attorneys` | Attorneys | see fidelity note below |
| 10 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `TopBar`
The system SHALL render a top bar with contact info (phone number, email) on the left and social media icon links (Twitter, Facebook, Instagram, Dribbble) on the right. The top bar SHALL have a dark background with white text.

### `Navbar`
The system SHALL render a sticky dark navbar with the brand name "Chambers" and navigation links: Home, About, Practice Areas, Cases, Attorneys, Blog, Contact. A hamburger toggle SHALL appear on mobile viewports.

### `Hero`
The system SHALL render a fullscreen hero section with a background image, dark overlay, headline "Don't Feel Helpless We Fight for Justice", a subtitle paragraph, two CTA buttons ("Contact us" primary, "Read more" white), and a video play link.

### `IntroFeatures`
The system SHALL render a 4-column feature strip with dark backgrounds. Each column SHALL have an icon, heading, and description text. The four features are: Expert Attorneys, Case Dismissed, Court Performance, and Court Performance (variant).

### `About`
The system SHALL render a split about section: left side with a background image and video play button, right side with "Welcome to Chambers" subheading, heading "Why to Put Your Trust In Chambers", description text, and a 2x2 grid of service items (Expert Attorneys, Great Discount, Legal Advisory, Quick Charges) each with an icon, heading, and short description.

### `CounterStats`
The system SHALL render a stats section with four counters: 3000+ Trusted Clients, 1000+ Honors & Awards, 2000+ Expert Lawyers, 10540+ Successful Cases. Each stat SHALL have an icon, number, and label.

### `PracticeAreas`
The system SHALL render a practice areas section with a centered heading "What We Cover" and a 3-column grid of practice area cards. Each card SHALL have an icon, heading, and description. Practice areas include: Business Law, Family Law, Criminal Law, and Insurance Law.

### `Cases`
The system SHALL render a cases section showing recent cases in a grid layout with images and case category labels.

### `Attorneys`
The system SHALL render an attorneys/team section showing team member cards with photos, names, and specializations.

### `Footer`
The system SHALL render a 5-column footer with: brand logo + social links, Explore links, Legal links, Company links, and contact info (address, phone, email). A dark bottom bar SHALL contain copyright text and a "More templates at Component Dock" link pointing to https://www.componentdock.com/.

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
- **Provenance ban.** No file under `apps/chambers/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/chambers/public/CNAME` = `chambers.free.componentdock.com`
  and the package `homepage` = `https://chambers.free.componentdock.com`.
