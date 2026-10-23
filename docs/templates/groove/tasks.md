# Groove (ColorLib Hnband) — Task Outline

## Template info

- **Name:** Groove
- **ColorLib source:** Hnband (https://colorlib.com/wp/template/hnband/)
- **Type:** Music artist/band landing page
- **Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Sections (from live DOM)

1. Navbar — fixed, brand + links + CTA
2. Hero — full-screen, dark gradient, subtitle + heading + blurb + CTA
3. About — split layout, image left + text right
4. Discography — "Our Discography" + 8 album cards grid + iTunes CTA
5. Player — split, track info + controls + album art
6. Video — video player + playlist sidebar
7. Shows — upcoming shows list with date badges
8. Footer — contact form + info + social + copyright

## Design tokens

- Primary: #503aca (purple)
- Accent: #ea34ff (magenta)
- Background: #0c0617 (dark purple-black)
- Fonts: Nunito Sans (body) + Satisfy (script accent)

## Status

- [x] Spec written
- [x] Components implemented
- [x] Tests written (100% coverage)
- [x] Per-app gate passed
- [x] PR created and merged

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/groove/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/groove/public/CNAME` = `groove.free.componentdock.com`
  and the package `homepage` = `https://groove.free.componentdock.com`.
