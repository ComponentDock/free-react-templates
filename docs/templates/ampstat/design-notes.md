# Ampstat — Design Notes

> **Reference identity (measured 2026-10-24).**
> `https://preview.colorlib.com/theme/music/` is claimed by TWO catalogue keys —
> `music` → `/wp/template/music-2/` and `catalog-141301` → `/wp/template/music/` —
> and it serves the **`music-2` rebuild** (`Home · Artists · Download Music · News ·
> Contact` + `Login / Register`, h1 `your music.` ×3, Bootstrap 4.1.2 + OwlCarousel +
> jPlayer, Josefin Sans). This app reproduces that design; the row thumbnail
> (`…fullscreen-musician…jpg`, magenta "MUSIC IS LIFE", hamburger only) is a **retired
> design with no demo** — 9 prefixes 404, `music.zip`/`music-2.zip` 404, so there is
> nothing to measure. Three `Music`/`Music 2` rows (1480, 2270, 2271) share this one
> live design. App debt vs the reference: news band painted white / newsletter purple
> (inverted), navbar transparent (reference: `#2457d7→#3b125d` gradient, 2px gradient
> underline), flat green buttons (reference: 3-stop gradient), `bg-black/60`–`/70`
> overlays the sheet never paints. Authority: `openspec/specs/template-ampstat/spec.md`.

Reference: **Music** — `https://colorlib.com/wp/template/music/`  
Live preview: `https://preview.colorlib.com/theme/music/`  
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/music-free-fullscreen-musician-website-template.jpg  
Shipped: https://ampstat.free.componentdock.com

A music template with hero, song, tours, app section, featured albums and news sections. Recreation of ColorLib **Music** template as a React 19 + Vite + Tailwind 4 + TypeScript app.

## Typography

Fonts loaded by `index.html` (Google Fonts): **Josefin Sans**, **Josefin Sans:wght@300;400;600;700**

## Design tokens (`apps/ampstat/src/index.css` `@theme`)

| token | value | role |
| --- | --- | --- |
| `--color-brand-green` | `#2ac275` | brand green |
| `--color-brand-purple` | `#3b125d` | brand purple |
| `--color-brand-blue` | `#2457d7` | brand blue |
| `--color-brand-yellow` | `#cbdc0b` | brand yellow |
| `--color-brand-yellow-light` | `#eeff2d` | brand yellow light |
| `--color-brand-pink` | `#e830fe` | brand pink |
| `--color-brand-red` | `#ff1a4b` | brand red |
| `--color-brand-light` | `#eef2f6` | brand light |
| `--color-text-dark` | `#2a2a2a` | text dark |
| `--color-text-muted` | `#6d6d6d` | text muted |
| `--color-text-light` | `#a5a5a5` | text light |
| `--font-family-brand` | `'Josefin Sans', sans-serif` | font family brand |

## Document order

| # | component | spec requirement | notes |
| --- | --- | --- | --- |
| 1 | `Navbar` | — | no dedicated spec block |
| 2 | `Hero` | Hero section SHALL render a fullscreen slider | see fidelity note below |
| 3 | `Song` | Song section SHALL render an audio player | see fidelity note below |
| 4 | `Tours` | Tours section SHALL display tour dates | see fidelity note below |
| 5 | `AppSection` | App section SHALL promote app downloads | see fidelity note below |
| 6 | `FeaturedAlbums` | Featured Albums section SHALL render album grid | see fidelity note below |
| 7 | `News` | News section SHALL display news cards | see fidelity note below |
| 8 | `Newsletter` | Newsletter section SHALL provide subscription form | see fidelity note below |
| 9 | `Footer` | Footer SHALL display branding and copyright | see fidelity note below |

## Section-by-section fidelity

Bands marked *anchors only* have no dedicated requirement block in the spec; hold them to the reference screenshot and the token table.

### `Navbar`
*anchors only* — Open menu · Close menu · Login · Register

### `Hero`
The hero MUST display a fullscreen background image with heading, ticket form, social sidebar, and scroll indicator.

### `Song`
The song section MUST display a parallax background with album art, play/pause controls, progress bar, artist name, and volume controls.

### `Tours`
The tours section MUST show a promotional card and a list of tour dates with venue info and ticket buttons.

### `AppSection`
The app section MUST display an app screenshot, heading, description, and App Store/Google Play badges.

### `FeaturedAlbums`
The featured section MUST display a grid of albums with play controls.

### `News`
The news section MUST show 3 news cards in a grid with image, date, title, and excerpt.

### `Newsletter`
The newsletter MUST display a heading, description, email input, and subscribe button.

### `Footer`
The footer MUST show a background image with overlay, logo, social icons, copyright, and Component Dock link.

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
- **Provenance ban.** No file under `apps/ampstat/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/ampstat/public/CNAME` = `ampstat.free.componentdock.com`
  and the package `homepage` = `https://ampstat.free.componentdock.com`.
