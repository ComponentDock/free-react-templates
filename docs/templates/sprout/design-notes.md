# Sprout — Design Notes

Reference: **Spring** — `https://colorlib.com/wp/template/spring/`  
Live preview: `https://preview.colorlib.com/theme/spring/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/spring-free-template.jpg  
Shipped: https://sprout.free.componentdock.com

Sprout is a single-page church/community charity template. It is an original React recreation of the ColorLib free "Spring" template (preview: https://preview.colorlib.com/theme/spring/ — church/charity landing), built under a different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Crimson Text**, **Crimson Text:ital,wght@0,400;0,600;1,400**, **Poppins**, **Raleway**

## Design tokens (`apps/sprout/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#c7b198` | Sprout brand palette — warm brown church aesthetic |
| `--color-brand-hover` | `#b59877` | brand hover |
| `--color-brand-dark` | `#3c312e` | brand dark |
| `--color-footer-bg` | `#171717` | footer bg |
| `--color-counter-bg` | `#6c757d` | counter bg |
| `--color-light-bg` | `#f8f9fa` | light bg |
| `--color-warm-off` | `#ebe3da` | warm off |
| `--color-ink` | `#1a1a1a` | ink |
| `--color-body` | `#666666` | body |
| `--font-sans` | `'Poppins', ui-sans-serif, system-ui, sans-serif` | font sans |
| `--font-heading` | `'Raleway', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-verse` | `'Crimson Text', Georgia, serif` | font verse |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar | see fidelity note below |
| 2 | `Hero` | Hero section | see fidelity note below |
| 3 | `IntroBanner` | Intro / Upcoming Events banner | see fidelity note below |
| 4 | `DailyVerse` | Daily Verse section | see fidelity note below |
| 5 | `ChurchServices` | Church Services section | see fidelity note below |
| 6 | `Sermon` | Sermon for Today section | see fidelity note below |
| 7 | `Counter` | Counter / About section | see fidelity note below |
| 8 | `Testimony` | Testimony carousel | see fidelity note below |
| 9 | `Events` | Intro / Upcoming Events banner | see fidelity note below |
| 10 | `RecentSermons` | Recent Sermons section | see fidelity note below |
| 11 | `Blog` | Recent Blog section | see fidelity note below |
| 12 | `Gallery` | Gallery section | see fidelity note below |
| 13 | `Newsletter` | Newsletter section | see fidelity note below |
| 14 | `Footer` | Footer | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a dark fixed navbar with the brand name and section navigation links.

### `Hero`
The system SHALL render a full-width hero section with a background image, heading text, subtitle, and two call-to-action buttons.

### `IntroBanner`
The system SHALL render a compact intro banner below the hero showing upcoming event details with a countdown timer.

### `DailyVerse`
The system SHALL render a highlighted scripture verse section on a light background with decorative quote styling.

### `ChurchServices`
The system SHALL render a services grid with 6 service cards, each featuring an icon, title, and description.

### `Sermon`
The system SHALL render a featured sermon card on a light background with speaker info, categories, date, description, and action buttons.

### `Counter`
The system SHALL render a counter/stats section with a brief church description and 4 animated stat counters.

### `Testimony`
The system SHALL render an inspirational testimony carousel with member testimonials, each showing an avatar, name, role, and quote.

### `Events`
The system SHALL render a compact intro banner below the hero showing upcoming event details with a countdown timer.

### `RecentSermons`
The system SHALL render a recent sermons section with sermon cards showing title, speaker, and action buttons.

### `Blog`
The system SHALL render a 3-column blog card grid on a light background, each card with a date overlay, title, and excerpt.

### `Gallery`
The system SHALL render an image gallery grid with popup-capable images.

### `Newsletter`
The system SHALL render a newsletter subscribe section with a parallax background image and an email input with submit button.

### `Footer`
The system SHALL render a dark footer with multi-column layout including about text, navigation links, and service hours.

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
- **Provenance ban.** No file under `apps/sprout/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/sprout/public/CNAME` = `sprout.free.componentdock.com`
  and the package `homepage` = `https://sprout.free.componentdock.com`.
