# Selfcraft — Implementation Todo & Design Notes

**Source:** ColorLib Personify  
**Preview:** https://preview.colorlib.com/theme/personify/  
**New Name:** selfcraft  
**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

## Structure Order (implement left → right, top → bottom)

1. **App.tsx** — Root with view state (Bio/Portfolio/Resume/Contact), offcanvas toggle
2. **Layout.tsx** — Split layout wrapper (aside + main, responsive)
3. **OffcanvasMenu.tsx** — Slide-in nav panel
4. **OffcanvasToggle.tsx** — Menu button (fixed top-right)
5. **BioView.tsx** — Default view: heading, subtitle, bio text, social links
6. **PortfolioView.tsx** — Grid of project cards with hover overlay
7. **ResumeView.tsx** — Experience + education timeline lists
8. **ContactView.tsx** — Contact form (name, email, phone, message, submit)

## Section-by-Section Fidelity Notes

### Layout (split-screen)
- Desktop (≥576px): left 50% is `<main>` (scrollable, 7% padding), right 50% is `<aside>` (fixed, full viewport height, background-image cover)
- Mobile (<576px): `<aside>` is 400px tall banner on top, `<main>` full width below
- Use Tailwind: `sm:w-1/2` + `sm:fixed sm:right-0 sm:top-0 sm:h-screen` for aside

### Offcanvas Menu
- Fixed position, top 0, right 0, 240px wide, full height, bg `#283149`
- Slides in via transform (translateX) when toggled
- Nav links: uppercase, 18px, white. Active link: `#F73859`
- Social icons row at bottom (Twitter, Facebook, Instagram)
- `.site-wrap` translates -240px when menu open

### Offcanvas Toggle
- Fixed top-right, text "Menu", uppercase, 13px, letter-spacing 0.1em, black text
- z-index above content but below menu

### Bio View
- `<h1>`: "Hi, I'm Kate Woodman" — Playfair Display, black
- `<p class="lead">`: "Web Designer & Developer" — slightly larger, grey
- 2-3 paragraphs of bio text — Open Sans, 15px, #b3b3b3, line-height 1.8
- Social links as text buttons (Twitter, Facebook, Instagram) — inline, no underline, transition 0.3s

### Portfolio View
- `<h1>`: "Portfolio" — Playfair Display
- Grid/list of project items, each wrapped in a card-like container
- 1px solid #e6e6e6 border, 10px padding, hover shadow (0 4px 10px rgba(0,0,0,0.1))
- On hover: coral (#F73859) overlay fades in (opacity 0→1, visibility hidden→visible)
- Overlay text: project name (h3, white) + subtitle (span, white, opacity 0.8), centered vertically

### Resume View
- Two sections: "Experience" and "Education", each with `<h1>` heading
- List of items, each with:
  - Date: black text, 0.6 opacity
  - Role + Company (h3): black, 24px
  - Description paragraph
- 30px margin between items

### Contact View
- `<h1>`: "Contact Me"
- Form fields: Full Name, Email Address, Phone (all text inputs), Message (textarea)
- Input styling: height 50px, border-width 2px, no box-shadow
- Submit button: btn-primary style — uppercase, 13px, letter-spacing 0.2em, border-radius 0
- Button hover: border-color and bg #f96982

### Footer
- Component Dock link ("Made with Component Dock")
- No ColorLib attribution

## Design Token Summary for Tailwind @theme

```
--color-brand: #F73859;        /* coral/rose pink */
--color-brand-light: #f96982;  /* lighter variant */
--color-navy: #283149;         /* offcanvas menu bg */
--color-body-text: #b3b3b3;    /* body text grey */
--color-heading: #000000;      /* headings black */
--font-body: "Open Sans", sans-serif;
--font-heading: "Playfair Display", serif;
```

## Key Implementation Decisions

1. **Single-page app with view state** — React useState or simple router for Bio/Portfolio/Resume/Contact switching (matching original's multi-page behavior)
2. **Tailwind responsive** — Use `sm:` breakpoint for the split layout (576px matches original)
3. **Offcanvas animation** — CSS transition on transform, toggled via state
4. **Portfolio hover** — CSS group-hover or transition utilities for the coral overlay effect
5. **Placeholder images** — picsum.photos with seed based on template name + item index
6. **Fonts** — Google Fonts link in index.html for Open Sans (300,400,700,800) and Playfair Display (300,400,700)
