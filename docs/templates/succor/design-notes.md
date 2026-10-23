# Succor — Design Notes

Reference: **Aid** — `https://colorlib.com/wp/template/aid/`  
Live preview: `https://preview.colorlib.com/theme/aid/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/aid-free-template.jpg  
Shipped: https://succor.free.componentdock.com

Succor is a single-page charity/nonprofit landing template in the free-react-templates monorepo. It is an original React recreation of the ColorLib free "Aid" design (see TEMPLATES.md, Bootstrap (216) category), built under the monorepo stack: Vite + React 19 + Tailwind CSS 4 + TypeScript.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Nunito Sans**, **Nunito Sans:wght@200;300;400;600;700;800;900**

## Design tokens (`apps/succor/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand` | `#ffb400` | brand |
| `--color-ink` | `#000000` | Ink — black buttons ("How Can I Help", "Donate now"), play icon box. |
| `--color-coal` | `#1e1e1e` | Coal — near-black donation panel + footer background (#1e1e1e). |
| `--color-violet` | `#6b76ff` | Violet — testimonial section background (#6b76ff). |
| `--color-slate` | `#232931` | Slate — testimonial overlay (#232931 at 70% opacity). |
| `--color-mist` | `#f8f9fa` | Mist — services band background (Bootstrap bg-light #f8f9fa). |
| `--color-soft-white` | `rgba(255, 255, 255, 0.8)` | Soft-white — hero subtext / testimonial quotes rgba(255,255,255,0.8). |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | Transparent navbar over hero | see fidelity note below |
| 2 | `Hero` | Transparent navbar over hero | see fidelity note below |
| 3 | `VolunteerSection` | Volunteer / donation split section | see fidelity note below |
| 4 | `ServicesBand` | Services band | see fidelity note below |
| 5 | `CausesCarousel` | Causes carousel | see fidelity note below |
| 6 | `Testimonials` | Success Stories testimonials | see fidelity note below |
| 7 | `Footer` | Dark footer with four widgets | see fidelity note below |

## Section-by-section fidelity

### `Navbar`
The system SHALL render a fixed-position transparent navbar at the top of the page (absolute, top 20px, z-index 3) with the brand "Succor." on the left (white text, `#ffb400` dot) and right-aligned nav links (Home active, Who we are, Causes, Stories, Contact) in 18px white weight-700 that turn `#ffb400` on hover, plus a mobile hamburger ("Menu" + icon, `aria-label="Toggle navigation"`).

### `Hero`
The system SHALL render a fixed-position transparent navbar at the top of the page (absolute, top 20px, z-index 3) with the brand "Succor." on the left (white text, `#ffb400` dot) and right-aligned nav links (Home active, Who we are, Causes, Stories, Contact) in 18px white weight-700 that turn `#ffb400` on hover, plus a mobile hamburger ("Menu" + icon, `aria-label="Toggle navigation"`).

### `VolunteerSection`
The system SHALL render a two-column section that overlaps the hero: a photo panel (left, 7/12 width, pulled up -70px on desktop) with a white text block on the photo ("We need volunteers in Africa" 50px w900 + lorem paragraph + yellow "Join now" button), and a black panel (right, 5/12, `#1e1e1e`) with a white 50px w900 heading "Donation so far $380,000", a lorem paragraph, and a black "Donate now" button.

### `ServicesBand`
The system SHALL render a light-gray (`#f8f9fa`) band of four equal service cards (icon + heading + blurb), each with a 60px icon in `rgba(0,0,0,0.2)`, a 22px weight-900 heading, and the third card ("Volunteering") highlighted with a `#ffb400` background on desktop.

### `CausesCarousel`
The system SHALL render a centered section headed "Let's build the world without child abuse and neglect" (50px w900) with a horizontal carousel of five cause items, each a 200px circular photo with a 20px weight-900 title below, that lifts -10px on hover.

### `Testimonials`
The system SHALL render a purple (`#6b76ff`) section with a dark overlay (`#232931` at 70%), a side photo panel (overlapping up -150px on desktop), a white "Success Stories" heading, and a carousel of testimonial cards (quote, 80px round avatar, name, position).

### `Footer`
The system SHALL render a `#1e1e1e` footer with four widgets in a row — brand + blurb + social icons, "Information" links (Donation · Privacy · Terms Condition), "Links" (Home · Who we are · Causes · Blog · Contact), and "Have a Questions?" contact rows (address, phone, email) — plus a centered bottom bar with the © line and a reworded credit (no Colorlib link-back requirement).

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
- **Provenance ban.** No file under `apps/succor/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/succor/public/CNAME` = `succor.free.componentdock.com`
  and the package `homepage` = `https://succor.free.componentdock.com`.
