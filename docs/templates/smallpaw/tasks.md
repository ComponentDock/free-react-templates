# Smallpaw — Tasks

Recreation of the ColorLib **Fernhill** veterinary design. Spec:
`openspec/specs/template-smallpaw/spec.md`. Design reference:
`docs/templates/smallpaw/design-notes.md`.

## Pre-flight (done by the prep stream, 2026-10-25)

- [x] ColourLib page, live preview, stylesheet, house kit and inline `<style>` fetched, hashed and recorded in
      the spec's §Reference readings
- [x] Palette, type scale, button/radius/shadow values measured from `_astro/Base.BVSEoPKG.css` and the live
      render at 1440 px (spec §Design tokens)
- [x] Document order (3 chrome pieces, 9 bands, 3 trailing layers), all copy, all 375 classes (0 phantom),
      the link census (47 anchors / 21 distinct) and the inner-page inventory recorded
- [x] Catalog screenshot (AVIF → PNG) analysed; hero composition, wordmark geometry and the light-first read
      noted in the spec
- [x] New name `smallpaw` checked: no `apps/`, no spec, no docs folder, `git grep -il smallpaw origin/main`
      empty, and all three ColorLib URL forms 404
- [ ] **You** add the `TEMPLATES.md` row before claiming one — line and insertion point are in spec §Purpose
      (between `Feliciano` and `Finances`; re-measure the `## Business (N)` count)

## Scaffold

- [ ] Copy the simplest existing app to `apps/smallpaw`; rename the package to
      `@free-react-templates/smallpaw`; keep `"react": "latest"`
- [ ] `public/CNAME` = `smallpaw.free.componentdock.com`; `homepage` =
      `https://smallpaw.free.componentdock.com`; document title + meta set rebranded
- [ ] `vite.config.ts` keeps `injectUiSource()`; `npm install` at the repo root so
      `package-lock.json` registers the workspace
- [ ] `src/index.css`: declare the `@theme` block from design-notes §Paste-ready token block —
      `primary` 50/100/200/400/500/600/700/800/900 and `accent` 50/100/300/400/800, `.text-gradient`,
      `shadow-soft`, the `hero-float` keyframe, and the `Plus Jakarta Sans` link in `index.html`
- [ ] `main.tsx` / `App.tsx` / `src/components/` skeleton with one component per band, `src/test/setup.ts`
      present

## Sections (tests first, reference order)

- [ ] `ScrollProgress` — 2 px bar, width = scroll ratio; test the ratio at 0 and mid-scroll
- [ ] `Navbar` — sticky, `white/80` + blur, 64/80 px, eight links from `lg`, CTA from `lg`, hamburger below with
      `aria-expanded`, `shadow-lg` past 50 px, scroll-spy over the four real band ids
- [ ] `Hero` — gradient ground, two parallax blobs, ping-dot pill, 60 px `h1` with the `text-gradient`
      typewriter (3 phrases, 3 s, 300 ms fade, reduced-motion holds the first), lede, solid + outlined CTA,
      four static facts, photograph from `picsum.photos/seed/smallpaw-1/1200/600`
- [ ] `OutOfHours` — `#6f284b` band, amber ping pill, 30 px white heading, amber `rounded-2xl` tel button,
      provider card + distance chip, three-cell schedule on `white/10` gutters, footnote
- [ ] `Stats` — `gray-50` + `border-y`, 2→4 columns, four counters (`4,100` / `16` / `5` / `100%`) animating once
      at 50 % visibility over 2 s, final values rendered when `IntersectionObserver` is absent
- [ ] `Species` — six cards in order, four included (bordered white) + two referred (dashed, `bg-gray-50`,
      `Referred on` chip), `Routine care` footer rows, accent callout below
- [ ] `HealthPlans` — `primary-50` band, three cards, featured `Adult` (plum ground, amber ring, amber badge,
      amber ticks, white CTA), saving badges, 36 px prices, five inclusions each, footnote
- [ ] `Fees` — left-aligned header, `rounded-2xl` bordered wrapper, `primary-700` `thead`, eight rows, money
      columns right-aligned `tabular-nums`, `Included` / discounted / em dash, accent callout
- [ ] `Testimonials` — three cards, 3/2/1 per view, 5 s autoplay paused on hover, dots at every width, arrows
      from `lg`, stars `#df77a9`, 48 px initial discs
- [ ] `Faq` — five exclusive rows, `aria-expanded`/`aria-controls`, 32 px disc rotating 45°, `max-height`
      transition
- [ ] `ContactCta` — diagonal gradient + 40 px dot grid at 10 % + two blurred blobs, 48 px white heading,
      white solid + ghost CTA
- [ ] `Footer` — brand block (light paw wordmark redrawn), practice columns (no `Spaces`), real social hrefs,
      normalised `tel:`, `.example` mailbox, wired newsletter (inline errors + toast), legal bar with the
      **Component Dock** link
- [ ] `MobileCta` + `CookieStrip` + `BackToTop` — `lg:hidden` 69 px bar with the real number,
      cookie strip 1.5 s after load in state, 48 px disc past 300 px
- [ ] `SkipLink` — first focusable element, targets `#main-content`

## Wiring and verification

- [ ] All internal fragments resolve; **no `#spaces`**; route-shaped links either map to bands or are
      `aria-disabled` (spec Requirement 16)
- [ ] No `Watch Demo` / video modal, no `tel:5556789012`, no `Book a Tour`, no corrupt JSON-LD, no off-brand
      amber favicon — the four documented leftovers are repaired (spec Deviations 6–8)
- [ ] `grep -ril colorlib apps/smallpaw` → nothing; no source brand, mailbox, wordmark or stylesheet
- [ ] Coverage stays at 100 % lines/functions/branches/statements for the new app (`scripts/verify-app.sh smallpaw`)
- [ ] `scripts/verify-app.sh smallpaw` green (typecheck + lint + knip + fallow + tests + build)
- [ ] `TEMPLATES.md`: row added in source-name order and flipped to `[x]` with the surge URL; heading count
      re-measured; `npm run readme:status`
- [ ] Surge deploy verified: `https://smallpaw.free.componentdock.com` → HTTPS 200 with
      `ssl_verify_result=0` (see `scripts/audit-deployments.sh`)
