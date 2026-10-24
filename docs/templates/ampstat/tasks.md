# Ampstat — Implementation Todo

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

Source: ColorLib Music (https://preview.colorlib.com/theme/music/)
New name: ampstat
Stack: React 19 + Vite + Tailwind CSS 4 + TypeScript

## Components to build (in order)

1. `Header.tsx` — Logo (equalizer bars SVG + "music" text), nav links,
   login/register, hamburger toggle
2. `HomeSlider.tsx` — Fullscreen carousel with background image, headline
   "your music.", ticket form (event dropdown, ticket input, CTA), social
   sidebar, scroll-down indicator
3. `SongPlayer.tsx` — Parallax section with "Song of the Week" player:
   album art, play/stop, progress bar, artist label, volume controls
4. `TourDates.tsx` — Two-column: promo card (bg image, year/title/subtitle,
   CTA) + tour date list (date/venue/location per row, CTA, "See All" link)
5. `AppDownload.tsx` — Two-column: app image + heading + description +
   App Store / Google Play badges
6. `FeaturedAlbums.tsx` — Centered title + playlist/album list
7. `NewsGrid.tsx` — 3-column grid of news cards (image + date + title +
   excerpt), second card reversed layout
8. `Newsletter.tsx` — "Subscribe & Follow" + email input + subscribe button
9. `Footer.tsx` — Background image, logo, social icons, copyright, Component
   Dock link

## Design notes

- Font: Google Fonts `Josefin Sans` (all weights used: 300, 400, 600, 700)
- Primary green: #2ac275 — use as `@theme` brand color
- Dark purple: #3b125d — section backgrounds, gradients
- Yellow accent: #cbdc0b / #eeff2d — button gradients, highlights
- Button shape: pill (border-radius 22px), green-to-yellow gradient
- Card shape: border-radius 15px
- Section backgrounds: alternating white / #eef2f6 light gray
- Overlay: rgba(0,0,0,0.66) on footer and hero
- Parallax on Song section background
- Placeholder images: `https://picsum.photos/seed/ampstat-<n>/<w>/<h>`
- Icons: lucide-react (replace Font Awesome)
- Social icons: Pinterest, Facebook, Twitter, Dribbble, Behance

## Fidelity notes

- Match section order exactly: Header → Home Slider → Song → Tours →
  App → Featured Albums → News → Newsletter → Footer
- Hero is fullscreen (100vh) with centered content
- Tour list items are flex rows with date/venue/location left, CTA right
- News grid: 3 equal columns; second card has image below text (reversed)
- Footer uses background image with dark overlay
- Logo uses equalizer-bar icon (5 vertical bars of varying height)

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
