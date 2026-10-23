# Ironshed — Design Notes

Reference: **Ponigym** — `https://colorlib.com/wp/template/ponigym/`  
Live preview: `https://preview.colorlib.com/theme/ponigym/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ponigym-free-template.jpg  
Shipped: https://ironshed.free.componentdock.com

A Fitness / Gym template with hero, services, cta banner, classes, trainer schedule and team sections. Recreation of ColorLib's **Ponigym** fitness/gym template as a React 19 + Vite + Tailwind CSS 4 + TypeScript single-page app.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Oswald**, **Oswald:wght@300;400;500;600;700**, **Roboto**

## Design tokens (`apps/ironshed/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#f34e3a` | brand |
| `--color-brand-dark` | `#d93a28` | brand dark |
| `--color-heading` | `#111111` | heading |
| `--color-section-title` | `#191919` | section title |
| `--color-body-text` | `#8f8fa8` | body text |
| `--color-description` | `#6e6e6e` | description |
| `--color-team-bg` | `#f2f4f5` | team bg |
| `--color-schedule-gym` | `#f34e3a` | Schedule color-coding |
| `--color-schedule-yoga` | `#247cc6` | schedule yoga |
| `--color-schedule-body` | `#6dcff6` | schedule body |
| `--color-schedule-cardio` | `#4cbcc3` | schedule cardio |
| `--font-heading` | `'Oswald', ui-sans-serif, system-ui, sans-serif` | font heading |
| `--font-body` | `'Roboto', ui-sans-serif, system-ui, sans-serif` | font body |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Navbar displays all navigation links | see fidelity note below |
| 2 | `Hero` | Hero section shows the primary headline | see fidelity note below |
| 3 | `Services` | Services section lists 4 programs | see fidelity note below |
| 4 | `CtaBanner` | CTA banner displays the call to action | see fidelity note below |
| 5 | `Classes` | Classes section shows tabbed class details | see fidelity note below |
| 6 | `TrainerSchedule` | Trainer schedule shows weekly timetable | see fidelity note below |
| 7 | `Team` | Team section displays 3 trainers | see fidelity note below |
| 8 | `LatestNews` | Latest News section shows 3 blog cards | see fidelity note below |
| 9 | `Footer` | Footer shows contact form and map | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The navbar SHALL be transparent and overlay the hero section, with logo left, 6 nav links right (Home, About, Schedule, Portfolio, Blog, Contacts), and a search icon.

### `Hero`
The hero SHALL display a carousel with 3 slides, each with a background image, subtitle "Elite Personal Training Services", headline "Make it Shape" (Shape accent-colored), and a "Join Us Now" CTA button.

### `Services`
The services section SHALL display 4 service items (Weight Lifting, Body Building, Healthy, Yoga) with icons, titles, and descriptions, plus a video thumbnail with play button.

### `CtaBanner`
The CTA section SHALL display a parallax background with white text and a primary button.

### `Classes`
The classes section SHALL display 6 tabbed panels with class images, descriptions, and a "View Schedule" link. Tab switching SHALL show the corresponding panel.

### `TrainerSchedule`
The schedule section SHALL display a table with day columns (Mon-Sun) and time slot rows, with color-coded cells by workout type.

### `Team`
The team section SHALL display 3 trainer cards with photos, specialties, names, descriptions, and social icons.

### `LatestNews`
The news section SHALL display 3 blog cards with images, dates, comment counts, and article title links.

### `Footer`
The footer SHALL display a map embed on the left, a contact form on the right with 4 fields (Name, Email, Subject, Message) and a Submit button, plus a bottom bar with copyright, footer links, social icons, and a Component Dock link.

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
- **Provenance ban.** No file under `apps/ironshed/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ironshed/public/CNAME` = `ironshed.free.componentdock.com`
  and the package `homepage` = `https://ironshed.free.componentdock.com`.
