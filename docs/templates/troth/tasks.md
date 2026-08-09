# Troth (ColorLib Wordpress Wedding Themes) — Tasks & Design Notes

> Recreation of the ColorLib "Wordpress Wedding Themes" item
> (https://colorlib.com/wp/template/wordpress-wedding-themes/) under the NEW
> name **Troth** (archaic word for a pledge of fidelity / betrothal — single
> lowercase word, no collision with `apps/`, `openspec/specs/`,
> `docs/templates/` or TEMPLATES.md — verified 2026-08-09), per the monorepo
> naming mandate (never reuse the ColorLib source name).

## Design notes (replication findings)

- **Original:** ColorLib "Wordpress Wedding Themes" — listed in TEMPLATES.md
  under **Beauty (28)** (line 235). ⚠ RESEARCH FINDING (verified 2026-08-09):
  the ColorLib URL is a ROUNDUP ARTICLE ("10+ Best Wedding WordPress Themes
  for Planning & Photography 2026"), NOT a single-template page. No
  downloadable ColorLib template exists behind this item; the roundup's demo
  links point to third-party ThemeForest themes.
- **Preview URL — IMPORTANT (verified 2026-08-09):** the official preview
  `https://preview.colorlib.com/theme/wordpress-wedding-themes/` returns
  **HTTP 404**. The roundup's linked demo domain (`theme.pixflow.net`) root
  returns a phpinfo() page — no template structure. Per docs/replication.md
  the **screenshot is the SOLE reference** (`wedding-wordpress-themes.jpg`,
  1200×892). Say so explicitly in the PR description.
- **Visual design (screenshot, browser-verified — sole reference):** wedding
  couple's one-page site. Top nav row over the hero photo: LEFT four small
  uppercase sans links "Our story" / "Photos" / "When & Where" / "Events";
  RIGHT a circular logo mark (white ring + pink/magenta dot). Centered
  mid-screen text block: large elegant serif H1 ("Wedding WordPress Themes")
  - smaller clean sans "Getting married!" subhead. Full-viewport candid photo
    of the couple on stone steps, confetti raining, guests' heads in the
    foreground. No rectangular CTAs in the hero — nav links are the primary
    interaction.
- **⚠ KEY TRAPS:**
  - Only the **header and hero** are directly verified (screenshot). The
    story / photos / when & where / events sections are **inferred from the
    nav labels** — the canonical wedding-site structure. Build them with the
    content kinds in the spec and note the inference in the PR. Do NOT invent
    extra sections beyond footer.
  - No hex values can be read from the screenshot — the accent pink is a
    recommended match (`#ec4899` pink-500, in the pink/magenta range of the
    logo dot). Document the choice in the PR.
  - The screenshot shows a desktop-only nav; mobile behavior (hamburger with
    `aria-expanded`) follows repo accessibility conventions — the source has
    no mobile reference to copy.
  - Source wordmark/logo is a circular mark — recreate as a white ring with a
    lucide `Heart` in the accent color (never copy the image).
- **Section order (1:1):**
  1. **Header / nav** (VERIFIED) — flex row, `space-between`, top padding
     ~24–32px: left links (small uppercase, letter-spaced, sans) · right
     circular logo mark (`rounded-full` white ring + pink heart).
  2. **Hero** (VERIFIED) — `min-h-screen` cover photo
     (`picsum.photos/seed/troth-hero/1920/1080`), centered text block:
     serif H1 (couple names/site title, white) + sans subhead ("Getting
     married!"-style tagline + wedding date).
  3. **Our story** (INFERRED) — serif heading + 2–3 narrative paragraphs +
     couple photo (`seed/troth-story/800/1000`), white / warm light-gray
     bg (`#faf9f7`), small accent detail.
  4. **Photos** (INFERRED) — serif heading + responsive grid (1 col mobile /
     2–3 cols desktop) of ≥6 seeded photos (`seed/troth-gallery-<n>/600/400`),
     descriptive alt text.
  5. **When & Where** (INFERRED) — serif heading + date, time, venue
     placeholder copy, `CalendarDays` / `MapPin` lucide icons with
     `aria-label`s.
  6. **Events** (INFERRED) — serif heading + ordered list (Ceremony,
     Reception, After-party) with time + short description each.
  7. **Footer** (INFERRED, minimal) — couple names + wedding date + the four
     section links, accent heart detail.
- **Fonts (best-effort from screenshot):** Playfair Display (500–700) for
  serif headings; Poppins (300–600) for nav/subhead/body. Google Fonts
  `<link>` in `index.html`.
- **Neighbor check (2026-08-09):** sibling wedding-family preps: Vows
  (template-vows, app shipped), Nuptia (spec only). Troth's
  white-on-photo + pink-accent treatment is distinct; no token clashes.
  Beauty-category neighbors are all different designs (makeupartist,
  hairstyle, etc.).

## Tasks (implementation order)

- [ ] Scaffold `apps/troth` (copy simplest existing app, rename package to
      `@free-react-templates/troth`; NOT `apps/wordpress-wedding-themes`);
      `npm install` at root so package-lock.json registers the workspace
- [ ] `@theme` tokens: `--color-accent: #ec4899` (pink-500, recommended
      match — document in PR), `--color-cream: #faf9f7`, white hero text;
      serif display font family token for headings
- [ ] `index.html`: Playfair Display + Poppins Google Fonts `<link>`, title
      "Troth — Wedding Template"
- [ ] Full-screen hero: seeded picsum bg (`picsum.photos/seed/troth-hero/
    1920/1080`), `min-h-screen` cover, centered text block (serif H1 +
      sans subhead + date)
- [ ] Header row (padding ~24–32px): 4 anchor links (Our story · Photos ·
      When & Where · Events, small uppercase letter-spaced) + circular logo
      mark (white ring, accent `Heart`, `aria-label`); smooth-scroll
      behavior; mobile toggle with `aria-expanded`
- [ ] Our story section: serif heading + paragraphs + seeded couple photo
- [ ] Photos gallery: responsive grid of ≥6 seeded photos, alt text
- [ ] When & Where section: date/time/venue copy + `CalendarDays`/`MapPin`
- [ ] Events section: ordered list of ≥3 events with time + description
- [ ] Footer: names + date + nav links + accent heart detail
- [ ] Tests first (red) → implementation (green); 100% coverage
- [ ] `scripts/verify-app.sh troth` passes; `npm run spec:validate`
- [ ] PR: source item URL, preview URL 404 + roundup-article finding +
      screenshot fallback (docs/replication.md), tokens (accent hex noted as
      recommended), what differs (placeholder images, inferred sections,
      reworded branding); merge immediately; mark TEMPLATES.md "Wordpress
      Wedding Themes" row (Beauty, line 235) `[x]` + surge URL +
      `npm run readme:status`
