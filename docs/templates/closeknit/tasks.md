# Closeknit — Tasks

Recreation of ColorLib **"Circles"** (https://colorlib.com/wp/template/circles/) as a React 19 +
Vite + Tailwind 4 + TypeScript app under the name **Closeknit** (`apps/closeknit`).

> **No `TEMPLATES.md` row exists for this design yet.** The catalogue is incomplete (see
> `docs/catalog-coverage.md`): `circles` is one of the 42 standalone designs on
> https://colorlib.com/wp/templates/ that the checklist never listed. Add the row under
> `## App Landing Page (35)` *before* opening the PR — the exact line is in the spec, §Purpose.

## Pre-flight (done by the prep stream, 2026-10-25)

- [x] Replication: live preview read (`curl -4`, HTTP 200, 92,289 B, title `Home | Circles`)
- [x] Token sheet measured (`_astro/Base.D79t8nIj.css`, 63,718 B, sha256 `db40d037cec30cbd…`) —
      `primary` = **Tailwind sky** (`#0284c7` brand), `accent` = **fuchsia** (`#d946ef`), stock grays,
      `shadow-soft` / `shadow-soft-lg`, radii `.5/1/1.5 rem`
- [x] Class census: 393 distinct class tokens, 391 matched verbatim, the 2 "misses" are the
      entity-escaped `[&>*]` arbitrary variants — **no phantom-class delta**
- [x] Fonts identified: Manrope 300–800 via an inline `<style>` `@font-face` block pointing at the
      preview's `/cf-fonts`; `css2?family=Manrope:wght@300;400;500;600;700;800` → 200
- [x] Screenshot read (`circles-template.jpg`, real JPEG 311,833 B, 2400×1892 — header + hero + figure
      only; the nine lower bands were read from the DOM + sheet)
- [x] Structure extracted from the DOM: `header` + 10 `<section>`s + `footer` + 4 chrome elements;
      5 posts, 6 circles, 4 people, 6 privacy defaults, 3 tiers, 3 quotes, 5 FAQs
- [x] Behaviour read from the kit script (`Base.…BLoalVWc.js`, 16,233 B): reveal observer, typewriter
      (3 s), counters (2 s, suffix-aware), parallax blobs, header shadow at 50 px, scroll-spy,
      billing switch (28 px knob, price rewrite), **exclusive** FAQ accordion, carousel (3/2/1, 5 s,
      pause-on-hover), cookie strip, back-to-top at 300 px, video modal, toast + validation,
      scroll progress, lazy shimmer
- [x] Link census: 52 anchors — 8 targets live (`/about`, `/blog`, `/contact`, `/pricing`, `/privacy`,
      `/terms`, `/elements` all 308→200 + fragments), 7 dead (`#` ×3 socials, `#spaces` ×4 coworking
      residue), 1 malformed `tel:` URI (recorded as reference defects, not reproduced)
- [x] Name check: `closeknit` free in `apps/`, `openspec/specs/`, `docs/templates/`,
      `git grep -i closeknit origin/main` → empty; all three ColorLib URL forms → 404
- [x] Spec: `openspec/specs/template-closeknit/spec.md`
- [x] Design notes: `docs/templates/closeknit/design-notes.md`

## Scaffold

- [ ] Copy the single-app scaffold (`package.json`, `vite.config.ts` with `injectUiSource()`,
      `vitest.config.ts`, `tsconfig.json`, `index.html`, `src/main.tsx`, `src/test/setup.ts`,
      `public/CNAME`)
- [ ] `npm install` at the repo root so `package-lock.json` registers the workspace
- [ ] `homepage` = `https://closeknit.free.componentdock.com`, `public/CNAME` = same host
- [ ] `index.html`: `<title>Closeknit — share with the people you actually meant</title>`, meta
      description, Manrope 300–800 `<link>`, inline SVG favicon
- [ ] `src/index.css`: the `@theme` block from `design-notes.md` (sky ramp, fuchsia accent, radii,
      `shadow-soft`), `.text-gradient`, `btn-primary` / `btn-secondary`
- [ ] Draw the wordmark inline (three overlapping circles in `#0284c7` / `#38bdf8` / `#c026d3`) — do
      not copy `logo.svg`

## Sections (tests first, reference order)

- [ ] Header: sticky `white/80` + blur, 64/80 px, eight links, mobile disclosure with
      `aria-expanded`, shadow past 50 px, `aria-current` scroll-spy
- [ ] Hero: badge + ping dot, `h1` with the gradient typewriter span (3 phrases, 3 s, inert under
      reduced motion), lede, solid/outline/play-disc controls, four stats, framed figure
- [ ] Counter band: four counters settling on `9`, `100%`, `0`, `31 sec`, final values rendered
      without JavaScript
- [ ] Feed: five posts in `columns-1 sm:columns-2`, per-post meta (`in <circle> · <time>` + optional
      `Photo`/`Poll` badge), heart/comment counts `24/7`, `5/11`, `18/22`, `12/4`, `63/29`
- [ ] Circles: six cards, `Private` / `Invite only` pill over a 128 px image, member count + activity
      row, whole-card link, hover lift + image zoom
- [ ] People: four cards, gradient initials avatar, `@handle`, circle chips, `In N circles with you`,
      toggleable `Follow` (`Follow` → `Following`)
- [ ] Privacy: six items with static `role="img"` switch glyphs whose `aria-label` equals the status
      line, statuses `On by default` ×3 / `Permanently off` / `Off by default` / `Always available`,
      bordered call-out paragraph
- [ ] Pricing: three tiers, `role="switch"` billing toggle (`$0/$5/$12` ↔ `$0/$50/$120` + notes),
      included `✓` / excluded `×`, featured `Most Popular` ribbon + `ring-2 ring-primary-600`
- [ ] Testimonials: three quotes, five labelled stars each, carousel with dots and `sm`+ arrows,
      5 s autoplay paused on hover, no autoplay under reduced motion
- [ ] FAQ: five rows, exclusive expansion, `aria-expanded`, disc rotates 45°
- [ ] Closing CTA: `#0284c7 → #075985` gradient, 10 % dot grid overlay, white solid + 2 px
      white/30 outline
- [ ] Footer: brand column with three social tiles, `Product` / `Company` / `Support` columns,
      newsletter with inline validation, legal bar including the `Component Dock` link to
      `https://www.componentdock.com/`
- [ ] Mobile action bar below `lg` (digits-only `tel:` + in-page primary); cookie strip dismissible
      into state; back-to-top past 300 px; scroll-progress bar; skip link

## Polish and gates

- [ ] Copy the reference's text verbatim where it is product copy (headline, ledes, posts, circle
      blurbs, member blurbs, privacy items, tier features, quotes, FAQs); re-brand only the identity
      strings (wordmark, address, phone, email, social handles)
- [ ] Every animated band resolves to visible content under `prefers-reduced-motion: reduce`
- [ ] Focus rings `2px #0ea5e9` on brand controls; 4.5:1 for white text on `#075985`
- [ ] `grep -ril "colorlib" apps/closeknit` → empty; no copied SVG/CSS/font; images from
      `picsum.photos/seed/closeknit-<n>/…`
- [ ] `scripts/verify-app.sh closeknit` green (typecheck + lint + 100 % coverage + build)
- [ ] `npm run spec:validate` green; spec checklist ticked in the PR body

## Deploy

- [ ] Row added under `## App Landing Page (35)` (exact line in the spec), then flipped `[x]` in the
      bookkeeping commit
- [ ] `gh workflow run deploy-surge.yml -f app="closeknit"`; verify HTTPS 200 + `ssl_verify_result=0`
      on `closeknit.free.componentdock.com`
- [ ] README status line updated with the same bookkeeping commit
