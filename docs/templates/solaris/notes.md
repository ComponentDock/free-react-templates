# Solaris — Design Notes & Tasks

Source: ColorLib "Sun" (https://colorlib.com/wp/template/sun/)
Preview: https://preview.colorlib.com/theme/sun/

## Section order (top → bottom)

1. Header (logo left + nav right + search toggle)
2. Intro description paragraph
3. Portfolio filter bar (All | Post | Image | Video | Extern)
4. Portfolio masonry grid (6 items, 3 columns, hover overlay)
5. Two-column text section ("The Story" / "Dreamers" + "More…" link)
6. Footer (copyright + heart + centered logo + social links)

## Design tokens

- Accent: #FD3137 (red)
- Body bg: #E2E0E0 (warm grey)
- Card bg: #FFFFFF (white wrapper, 45px margin)
- Ink: #191919 (text, links)
- Muted: #A1A1A1 (search), #ADADAD (blog meta), #B5B5B5 (footer)
- Fonts: Montserrat 400 (body), PT Serif bold (headings)
- Buttons: text-style, no bg/border, red hover
- Portfolio overlay: dark fade with white uppercase captions

## Tasks

- [ ] Scaffold apps/solaris from simplest existing app
- [ ] Create index.html with Montserrat + PT Serif Google Fonts link
- [ ] Create index.css with @theme tokens (#FD3137, #E2E0E0, #191919)
- [ ] Build Navbar component (logo + links + search toggle)
- [ ] Build Intro component (description paragraph, 24px Montserrat)
- [ ] Build PortfolioFilter component (filter buttons + dot separators)
- [ ] Build PortfolioGrid component (3-col masonry, hover overlay)
- [ ] Build TextSection component (two-column, "The Story" / "Dreamers")
- [ ] Build Footer component (copyright + heart + logo + socials + CD link)
- [ ] Compose App.tsx with all sections in order
- [ ] Write tests for each component (TDD, 100% coverage)
- [ ] Run verify-app.sh, fix any issues
- [ ] Commit, open PR, merge, deploy

## Fidelity notes

- The original uses Isotope.js for masonry + filtering. Recreate with
  CSS columns or a CSS grid masonry approach (no JS lib needed).
- The original uses carouFredSel for a carousel; skip carousel in the
  React version — a static filterable grid is sufficient.
- The original uses smartmenus for dropdown nav; use simple CSS hover
  dropdowns or skip dropdowns (only top-level links are shown on the
  main index page).
- The "More…" link in the text section is a simple anchor, not a button.
- The search toggle is a visual icon toggle; no real search needed —
  just the icon for fidelity.
