# Marginalia (ColorLib "Blog Wordpress Themes") — Tasks & Design Notes

> Prep artifact for the PREP stream. Implementation ships later on
> `feat/template-marginalia` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Blog Wordpress Themes" — a blog-themes
  ROUNDUP/listicle page, not a single free template
  (source: https://colorlib.com/wp/template/blog-wordpress-themes/;
  the article is "37 Best WordPress Blog Themes (Free & Premium) 2026").
  All demo links on that page are ThemeForest affiliate links; there is
  no ColorLib-hosted free template behind this slug.
- **Preview UNREACHABLE (HTTP 404):**
  `https://preview.colorlib.com/theme/blog-wordpress-themes/` — also
  absent from `preview.colorlib.com/assets/js/products.js`. Per
  `docs/replication.md` the screenshot (`blog-templates.jpg`, 1200×904,
  in TEMPLATES.md) is the SOLE visual reference.
- **WARNING — do NOT borrow another preview:** the Blog category has
  separate entries with their own live previews (Blogger → `template-quill`,
  Bona → `template-morsel`, Bounty → `template-trove`). Those previews
  belong to those entries and MUST NOT be used as the reference here.
- **The screenshot depicts a third-party theme:** centered logo reads
  "Jevelin" (Shufflehound blog theme featured in the roundup). Recreate
  the VISUAL DESIGN under the new name "Marginalia"; never copy the
  theme's name or assets.
- **Visual design:** monochrome editorial personal-blog layout:
  1. Dark charcoal nav bar (full-width): search icon LEFT, centered thin
     white sans-serif logo, hamburger icon RIGHT.
  2. Hero: full-bleed dark landscape photo (rocky cave/mountains) with
     dark overlay; centered white h1 "My personal journey for
     inspiration" — "inspiration" in ITALIC SERIF as the accent. No CTA.
  3. Blog feed on pure white: alternating horizontal post cards — card A
     photo LEFT/text RIGHT, card B mirrored. Each card: uppercase
     light-grey meta ("by shuttlesound · November 23, 2016"), bold
     headline ("A quick midday swim for inspiration", "Some of my
     favorite moments this year"), short excerpt, uppercase tags
     ("CLEAR, NATURE"), speech-bubble comment icon + count (9).
  4. Floating vertical share rail fixed on the right edge.
  5. Footer not visible in the capture — reconstruct (site name, nav
     links, socials, copyright).
- **Structure (1:1 as visible; remainder reconstructed):**
  1. Navbar: dark bar; search trigger LEFT (opens full-width search
     overlay with input + close), centered logo "Marginalia", hamburger
     RIGHT (mobile menu overlay: Home / About / Blog / Contact);
     repo-standard dark-mode toggle.
  2. Search overlay: full-width strip with input + close button.
  3. Hero (~90vh): background photo + overlay, centered h1 with
     serif-italic accent word.
  4. Blog feed: ≥4 alternating cards (photo + meta + title + excerpt +
     tags + comments count), `py-16`/`py-20` rhythm, white bg.
  5. Share rail: fixed right-edge vertical stack — Facebook, X/Twitter,
     Instagram, Pinterest (inline SVG brand icons; lucide-react removed
     brand icons) + optional back-to-top icon; aria-labels on all
     icon-only links.
  6. Footer: site name, nav links, socials, copyright bar.
- **Design tokens (screenshot-derived, no stylesheet):**
  - Colors: near-black **`#141414`** (nav bar, hero overlay), white
    **`#ffffff`** (feed bg), **`#222222`** (text), **`#9b9b9b`** (meta,
    uppercase 11–12px). Monochrome — no bright accent.
  - Fonts: thin sans logo/headlines (**Montserrat 200/300** or Poppins
    300); italic serif accent (**Playfair Display italic**); clean sans
    body/meta (Poppins/Montserrat). Google Fonts `<link>` in
    `index.html`.
  - Cards: white, generous padding, ~50/50 image/text split, alternating
    direction; uppercase text tags; comment count with speech-bubble
    icon.
  - Buttons: none in the reference hero — icon controls only; any CTA is
    a documented addition.
- **Recreation name:** Marginalia (NEW name, differs from the ColorLib
  entry). App folder `apps/marginalia`, package
  `@free-react-templates/marginalia`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/marginalia-<n>/<w>/<h>`: hero 1600×900, cards
  800×600); lucide-react icons (Search, Menu, X, MessageCircle,
  ArrowUp; socials as inline SVG brand icons); Montserrat + Playfair
  Display via Google Fonts; neutrals in `@theme`; logo as styled text
  "Marginalia"; search overlay + mobile menu as toggles.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn). Remember:
  `vite.config.ts` MUST register `injectUiSource()`.

## Tasks

- [x] Write `openspec/specs/template-marginalia/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/marginalia` (copy a section-rich landing app pattern,
      e.g. Aurora; rename package to `@free-react-templates/marginalia`;
      run `npm install` at root so `package-lock.json` registers it).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: Navbar (search
      trigger + search overlay + hamburger mobile menu + dark-mode
      toggle), Hero, PostCard feed (alternating layout), ShareRail,
      Footer.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip →
      fallow → spec:validate (or `scripts/verify-app.sh marginalia` in
      FAST_MODE).
- [ ] Push `feat/template-marginalia`, open PR (source template, preview
      URL unreachable — screenshot-only reference incl. Jevelin note,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL
      (https://free-react-templates-marginalia.surge.sh) + homepage; run
      `npm run readme:status`; push.
