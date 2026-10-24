# Smithy (Satner recreation) — Tasks & Todo

**Source slug:** `satner` — ColorLib "Satner" (`https://colorlib.com/wp/template/satner/`),
preview `https://preview.colorlib.com/theme/satner/` (HTTP 200, 14,061 B, re-read 2026-10-24).
**Reference sheet:** `css/style.min.css` — 238,377 B, sha256 `88295271f4ae…`.
Archive `downloads/free/satner.zip` → 404 (live preview only).
Canonical tokens + section map: [`design-notes.md`](./design-notes.md) and
`openspec/specs/template-smithy/spec.md`.

Palette: accent `#4458dc` → `#854fee` (gradient), surfaces `#ffffff` / `#f9f9ff`,
ink `#000000`, body `#6b6b6b`, line `#eeeeee`, one-off teal `#2ebccd`.
Faces: `Roboto` (body) + `Rubik` (headings) — loaded from Google Fonts with
`wght@400;500;700` / `wght@500;700`. Bootstrap's `#007bff` tail is a framework
default, never a design token.

## Structure (section order)

Navbar → Hero → About → Brands → Services → Portfolio → Testimonials →
Newsletter → Footer.

## Implementation plan

1. **Scaffold** — `apps/smithy` from the simplest existing app; `package.json`
   name `@free-react-templates/smithy`, `"homepage"`
   `https://smithy.free.componentdock.com`, `public/CNAME`
   `smithy.free.componentdock.com`.
2. **Design tokens** — `@theme` with `--font-roboto`, `--font-rubik`,
   `--color-purple` `#4458dc`, `--color-purple-deep` `#854fee`, `--color-teal`
   `#2ebccd`, `--color-ink` / `--color-heading` `#000000`, `--color-body`
   `#777777` (original Satner's paragraph grey — the rebuilt sheet paints
   `#6b6b6b`), `--color-line` `#eeeeee`, `--color-surface` `#f9f9fd`.
   - [x] `@theme` block + Google Fonts link in `index.html`
3. **Components** (one file + one test each, `apps/smithy/src/components/`):
   - [x] `Navbar.tsx` — "Smithy" wordmark, Home · About · Services · Portfolio ·
         Contact, `useState` hamburger below `md`
   - [x] `Hero.tsx` — "Hello" eyebrow, "I am Alex Smith", "Senior Web Developer",
         two CTAs, `picsum.photos/seed/smithy-hero` portrait
   - [x] `About.tsx` — 50/50 image + copy, H2 "let's Introduce about myself",
         gradient "Download CV"
   - [x] `Brands.tsx` — six logo tiles + white stat card ("10", "Years Experience
         Working", phone `+1 (555) 123-4567`) on `--color-surface`
   - [x] `Services.tsx` — H2 "service offers", four cards: WP Developing, UI/UX
         Design, Web Design, SEO Optimize, circular gradient icon badges
   - [x] `Portfolio.tsx` — filters `all · popular · latest · following · upcoming`,
         six `picsum.photos/seed/smithy-p1..p6` items
   - [x] `Testimonials.tsx` — "What my clients say about working with me"
   - [x] `Newsletter.tsx` — email input + submit on the accent gradient
   - [x] `Footer.tsx` — "Smithy", "Follow Me" socials, Component Dock credit
         (`https://www.componentdock.com/`)
4. **Composition & tests** — compose in `App.tsx` in the order above; unit tests
   to the 100 % coverage floor.
   - [x] `App.tsx` composition + `App.test.tsx`
5. **Verification**
   - [x] `bash scripts/verify-app.sh smithy` (typecheck · lint · 100 % coverage · build)
   - [x] `python3 scripts/verify-app-fidelity.py --slug smithy` → 0 unshipped (COVERED)
   - [x] `python3 scripts/verify-docs-source.py --only smithy` → AGREE

## Fidelity notes to keep

- The live preview is a **rebuilt 3.1.0 kit**: its copy ("I am rahi satner",
  "Selected work") and its six `st-section` bands do not match this app. Palette
  and faces survive the rebuild; copy does not. Do not "sync" the app to the kit.
- Buttons and inputs use `3px`/`5px` radii — never a pill.
- Gradient direction is `#4458dc → #854fee` (left to right), reused for the icon
  badges and the newsletter band.
- No source asset is copied: photography is `picsum.photos` with deterministic seeds.
