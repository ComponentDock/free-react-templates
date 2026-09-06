# Inscribe — Design Notes

## Source mapping

- **ColorLib source:** Colorlib Wizard 3
- **ColorLib URL:** https://colorlib.com/wp/template/colorlib-wizard-3/
- **Live preview:** https://colorlib.com/etc/bwiz/colorlib-wizard-3/index.html
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-3.jpg
- **New name:** Inscribe

## Template type

Event registration form wizard — a 3-step jQuery Steps wizard with a split-screen layout.

## Structure order (top to bottom)

1. **Full-viewport wrapper** (100vh, flex row)
2. **Hero image panel** (left ~66%) — background image `form-wizard.jpg`, `<img>` hidden on desktop, shown on mobile ≤767px
3. **Form panel** (right ~34%) — dark background image `form-wizard-bg.jpg`, contains:
   - **Step 1: Event Information** — 5 info items with Linearicons (calendar, clock, building, map, globe), static text
   - **Step 2: Set The Event** — price display ($270), people dropdown (1-10), text inputs (Name, Email, Phone, Address)
   - **Step 3: Request from You** — special request input, full-width textarea, staff question with inline inputs, terms checkbox
   - **Prev/Next navigation** — 42×96px outlined buttons
   - **Social icons bar** — Facebook, Twitter, Tumblr, Instagram at bottom center

## Fidelity notes

### Fonts
- Body: Arvo-Regular (custom @font-face from local .ttf)
- Navigation buttons: Times New Roman (separate from body font)
- React version: load Arvo from Google Fonts (`<link>` in index.html), use Times New Roman for button text

### Colors
- Primary text: #fff (white on dark backgrounds)
- Labels/secondary: #ccc
- Form control borders: rgba(255,255,255,0.4) default, rgba(255,255,255,0.8) on focus
- Button hover: bg #fff, text #333
- Social hover: #e5e5e5
- Checkbox checkmark color: #49276c (Material Design Iconic Font glyph)

### Layout
- Desktop: flex row, 65.78% / 34.22% split
- Form panel has padding 4.3% left/right
- Wizard container height: 509px on desktop
- Steps tiles are hidden (display: none on .current-info and .number)

### Images
- Hero: `picsum.photos/seed/inscribe-hero/1200/800`
- Form bg: `picsum.photos/seed/inscribe-form/800/1200`

### Icons
- LinearIcons for info items (calendar-full, clock, apartment, map, earth)
- Material Design Iconic Font for social icons and checkbox checkmark
- React replacement: use `lucide-react` icons (Calendar, Clock, Building, MapPin, Globe, Facebook, Twitter, Instagram, Check)

### Responsive breakpoints
- ≤1199px: wrapper goes block, image 100%/45vh, form 100%/55vh, wizard 50% centered
- ≤991px: image 35vh, form 65vh, wizard 80%
- ≤767px: image shows `<img>` instead of bg, wrapper auto height, form auto/padded, wizard 100%

### jQuery Steps behavior (to replicate in React)
- Step tiles hidden (no visual step indicator beyond navigation)
- Previous button hidden on first step (aria-disabled="true" → opacity 0)
- Next button advances, Previous goes back
- Actions container: flex row, space-between

### Checkbox
- Custom circular checkbox (11px, border-radius 50%)
- Checked state: bg #ccc with a Material Design Iconic Font glyph (\f26b)
- React: use a custom styled `<input type="checkbox">` with Tailwind

## Component structure (proposed)

```
src/
  App.tsx              — wrapper flex layout
  components/
    HeroPanel.tsx      — left image panel
    FormPanel.tsx      — right form panel with wizard
    StepInfo.tsx       — Step 1: event info items
    StepEvent.tsx      — Step 2: event setup form
    StepRequest.tsx    — Step 3: special request + terms
    WizardNav.tsx      — Prev/Next buttons
    SocialBar.tsx      — Social icon links
    InfoItem.tsx       — Reusable info row with icon
```
