# Nuptia (ColorLib Wordpress Wedding Themes) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-nuptia` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Wordpress Wedding Themes" — a wedding-themed
  WordPress roundup/collection page, not a single free template
  (source: https://colorlib.com/wp/template/wordpress-wedding-themes/).
  All demo links on that page are ThemeForest affiliate links to third-party
  wedding themes; there is no ColorLib-hosted free template behind it.
- **Live preview UNREACHABLE:** `https://preview.colorlib.com/theme/wordpress-wedding-themes/`
  returned HTTP 404. Per `docs/replication.md` the design is reconstructed
  from the TEMPLATES.md screenshot (`wedding-wordpress-themes.jpg`, 1200×892)
  as the sole visual reference.
- **WARNING — do NOT confuse with the separate "Wedding" entry:**
  `https://preview.colorlib.com/theme/wedding/` (HTTP 200) is the CodePixar
  "Wedding" free template ("James & Julie are Getting Married", purple→teal
  gradient accents `#ca2fff → #8e96f8 → #53fff0`, Poppins, pill buttons).
  That preview belongs to the *separate* "Wedding" TEMPLATES.md entry
  (line ~3103, screenshot `wedding-free-wedding-website-template.jpg`) and
  MUST NOT be used as the reference for this template.
- **Visual design (from screenshot):** full-viewport hero photograph — bride
  (cream lace dress, blue heels) and groom (grey suit, pink peony bouquet)
  walking down stone steps, confetti falling (pink, blue, gold, purple
  specks), guests' backs at the bottom edge. Centered white overlay text:
  large high-contrast serif headline (Playfair-Display-like, the template
  title) + smaller cursive/script sub-line ("Getting married!"). Top-left:
  small white sans-serif nav links — "Our story", "Photos", "When & Where",
  "Events". Top-right: circular monogram logo mark. Aesthetic:
  modern-romantic, editorial documentary photography, cool airy tones;
  photo-driven with white text, no UI chrome, **no hero CTA button**.
- **Structure (1:1, section order — derived from the nav anchors + standard
  wedding-page flow):**
  1. Navbar: transparent over hero, circular monogram logo, links Our Story /
     Photos / When & Where / Events (white, small sans), hamburger →
     slide-down mobile menu; repo-standard dark-mode toggle.
  2. Hero: full-viewport background photo (couple + confetti) with soft
     overlay for readability — large serif h1 (couple names, e.g. "Sophie &
     Daniel are Getting Married") + script sub-line ("Getting married!").
     No CTA button (matches the reference).
  3. Our Story: centered serif heading + split photo/text story blocks (her
     story / his story, one photo each).
  4. Photos: centered "Our Photos" heading + gallery grid/carousel of ≥6
     wedding photos (each with alt text).
  5. When & Where: centered heading + two info cards — "Main Ceremony" and
     "Reception" — each with date, time and venue address.
  6. Events: centered heading + ≥3 event entries (time + title + blurb),
     e.g. Welcome Dinner, Main Ceremony, After Party.
  7. Footer: centered footer menu links (Our Story / Photos / When & Where /
     Events), circular social icons (Facebook, Twitter/X, Instagram,
     Dribbble), bottom bar with copyright line.
- **Design tokens (screenshot-derived; no stylesheet available):**
  - Fonts: serif display headings — **Playfair Display** (700/900); script
    accent — **Great Vibes** (cursive sub-line); body/nav — **Poppins**.
    Google Fonts `<link>` in `index.html`.
  - Colors: hero text white `#fff`; light section backgrounds `#fafafa` /
    `#f8f6f3`; muted `#777777`; dark `#222222`. Accent palette from the
    confetti: rose **`#e66686`** (suggested primary), periwinkle
    **`#8e96f8`**, gold **`#d4a95c`**, lavender **`#ca2fff`**. Primary in
    `@theme`.
  - Buttons: pill (rounded-full), white text, rose primary, hover darkened.
  - Cards: white bg, subtle border, rounded corners, generous padding.
  - Rhythm: generous vertical padding (`py-16`/`py-20`), alternating
    white / light-gray section backgrounds.
- **Recreation name:** Nuptia (NEW — distinct from ColorLib "Wordpress
  Wedding Themes" and from all existing apps/spec names). App folder
  `apps/nuptia`, package `@free-react-templates/nuptia`.
- **Recreation approach:** hero photo + gallery via
  `https://picsum.photos/seed/nuptia-<n>/<w>/<h>` placeholders (hero, story
  pair, 6+ gallery, ceremony/reception cards); lucide-react icons
  (calendar, map-pin, clock, heart, camera, music, social icons); Playfair
  Display + Great Vibes + Poppins via Google Fonts `<link>`; rose `#e66686`
  primary in `@theme`; pill buttons via rounded-full; repo-standard Navbar
  (dark-mode toggle) + Footer chrome; no assets copied.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-nuptia/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/nuptia` (copy the simplest app; rename package to
      `@free-react-templates/nuptia`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate (local per-app gate in FAST_MODE).
- [ ] Push `feat/template-nuptia`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
