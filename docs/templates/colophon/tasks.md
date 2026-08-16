# Colophon (ColorLib Bootstrap Footer 01) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-colophon`.

## Design notes (replication findings)

- **Original:** ColorLib "Bootstrap Footer 01" — a free footer-only component
  demo from the "Bootstrap Footer" series (source:
  https://colorlib.com/wp/template/bootstrap-footer-01/). The page body is a
  70vh light-gray filler strip; the deliverable is the footer. TEMPLATES.md
  has ONE copy (line 777, `- [ ]` unchecked — bookkeep `[x]` + surge URL when
  done). This prep: Bootstrap Footer 01 → **Colophon** (a publisher's
  emblem/inscription block at the end of a book — fits a footer template; no
  collision with `apps/`, `openspec/specs/`, `docs/templates/` — verified
  2026-08-16).
- **PREVIEW PATH QUIRK (documented for future preps):**
  `https://preview.colorlib.com/theme/bootstrap-footer-01/` returns **HTTP
  404**. The ColorLib template page's "Live Preview" href reveals the real
  path: **`https://preview.colorlib.com/theme/bft/bootstrap-footer-01/`** —
  the footer series lives under the `/theme/bft/` prefix (NOT
  `/theme/bootstrap/`, which serves the Calendar/Carousel series). When a
  preview 404s, grep the template page for the Live Preview href before
  falling back to the screenshot.
- **Preview DOM analyzed (LIVE, fetched via curl):**
  `https://preview.colorlib.com/theme/bft/bootstrap-footer-01/` (HTTP 200,
  17,953 bytes, `<title>Footer 01</title>`). Stylesheets:
  `fonts/icomoon/style.css` (icon font), `css/bootstrap.min.css` (Bootstrap
  **v4.5.3**), `css/style.css` (custom, only **2,270 bytes** — every custom
  token below comes from it). No JS libs; Roboto via system stack (no Google
  Fonts link in the source — add the Google Fonts `<link>` in the
  recreation's index.html).
- **Screenshot:** `bootstrap-footer-01.jpg` (viewed in browser, 1200×972) —
  light-gray demo area with "Footer #1" centered; periwinkle CTA strip
  ("Ready for a next project?" / "Let's get started!" / dark square "Contact
  us" button); deep dark-navy footer with five columns: brand "COLORLIB"
  uppercase + "© 2019", Customers, Company, Further Information, Follow us
  (five round periwinkle circles with white glyphs). **NO variance between
  screenshot and live DOM.**
- **Design rhythm:** this is a COMPONENT template, not a landing page — no
  navbar, no hero, no images. Page = light filler (70vh) + dark footer. The
  CTA box is a child of the footer container pulled UP `-150px` so it
  straddles the light/dark boundary, with a hard-edged shadow cast up-left.
- **CTA box:** bg `#8186d5`, `padding: 20px`, `position: relative; top:
-150px`, shadow `-20px -20px 0 0 rgba(52,58,64,.2)` (NO blur — hard offset
  edge). Inside: `h2.mb-0` "Ready for a next project?" (white), `h3.text-dark`
  "Let's get started!" (20px, `#343a40`), then `div.ml-auto` with
  `a.btn.btn-dark.rounded-0.py-3.px-5` "Contact us" — bg `#343a40`, white
  text, **square corners (`rounded-0` — NO radius)**, padding 1rem 3rem.
  `d-md-flex` → stacks (heading block above button) below md.
- **Footer band:** `.footer-20192` — bg **`#141d2a`**, `color: #fff`,
  `padding: 7rem 0`; `h3` column headings 16px, `margin-bottom: 10px`;
  link `li` `margin-bottom: 10px`, `line-height: 1.5`, block.
- **Brand + copyright:** `.footer-logo` — 20px, white, uppercase,
  `letter-spacing: .1rem`; source brand "Colorlib" → recreation brand
  **"Colophon"**; `p.copyright > small` "© 2019" (bare year) →
  "© <year> Colophon" + the mandatory Component Dock link (NO ColorLib in
  app code).
- **Link columns (`#666873` → hover `#fff`):**
  1. Customers — Buyer, Supplier
  2. Company — About us, Careers, Contact us
  3. Further Information — Terms & Conditions, Privacy Policy
- **Follow us:** five `li` inline-block, each `a` a **40×40px circle**
  (`border-radius: 50%`, bg `#8186d5`, white glyph centered via absolute
  translate(-50%,-50%)): `icon-facebook`, `icon-twitter`, `icon-linkedin`,
  `icon-medium`, `icon-paper-plane`. **lucide-react REMOVED brand icons**
  (Facebook/Twitter/Linkedin are `undefined` exports — probe with `typeof`)
  → render brand glyphs as inline SVGs (simple-icons paths); paper plane →
  lucide `Send` (or inline SVG). Add `aria-label`s (source uses bare
  spans).
- **Grid (Bootstrap 4.5.3, reproduce responsively):** `.row` holds FOUR
  `.col-sm` (equal-width auto columns) + ONE `.col-md-3` (25% on md+). md+:
  all five in one row (4×18.75% + 25%). sm (576–767px): four auto columns
  fill the first line, "Follow us" wraps to a second full-width line. xs:
  everything stacks.
- **Images:** NONE — the template is image-free; no picsum placeholders
  needed.
- **A11y:** semantic `<footer>` + main landmark; icon-only socials need
  accessible names; focus-visible rings (source has none of this — the
  recreation adds it per monorepo conventions).

## Structure order (1:1)

1. `main` → filler `.content` (`#f8f9fa`, ~70vh, centered demo label —
   source: "Footer #1").
2. `footer.footer-20192` (`#141d2a`, `padding: 7rem 0`):
   a. CTA `.cta` (`#8186d5`, padding 20px, `top: -150px`, hard shadow
   `-20px -20px 0 0 rgba(52,58,64,.2)`): "Ready for a next project?"
   (h2) + "Let's get started!" (h3 `#343a40`) + "Contact us" dark square
   button (right; stacked below on xs).
   b. `.row` — five columns: brand+© (Colophon / © year / Component Dock
   link), Customers, Company, Further Information, Follow us (5 round
   socials).

## Implementation tasks

- [ ] Scaffold `apps/colophon` (copy simplest existing app; package
      `@free-react-templates/colophon`; `public/CNAME` =
      `colophon.free.componentdock.com`; homepage =
      `https://colophon.free.componentdock.com`); register the workspace in
      `package-lock.json`
- [ ] `index.html`: title "Colophon — Footer", Roboto Google Fonts `<link>`
- [ ] `src/index.css` tokens: `#141d2a` (footer bg), `#8186d5` (accent —
      CTA bg + social circles), `#666873` (muted links/copyright), `#343a40`
      (dark button + text-dark), `#f8f9fa` (filler bg), `#fff`; button
      square (radius 0), CTA hard shadow `-20px -20px 0 0 rgba(52,58,64,.2)`
- [ ] Components: `Filler` (light ~70vh demo strip), `CtaBand` (periwinkle
      box pulled up -150px + square "Contact us" button), `Footer` (brand +
      copyright + Component Dock link, 3 link columns, Follow us socials)
- [ ] CTA overlap: `position: relative; top: -150px` + hard up-left shadow;
      stack below md
- [ ] Brand "Colophon" 20px white uppercase `letter-spacing: .1rem`;
      copyright "© <year> Colophon"; Component Dock link
      `https://www.componentdock.com/`; NO ColorLib references in app code
- [ ] Link columns: Customers (Buyer, Supplier) / Company (About us,
      Careers, Contact us) / Further Information (Terms & Conditions,
      Privacy Policy); h3 16px white; links `#666873` hover `#fff`, 10px
      item spacing
- [ ] Socials: 5 round 40px `#8186d5` circles, white glyphs — Facebook /
      Twitter / LinkedIn / Medium as inline SVG brand icons (lucide removed
      them — probe exports with `typeof`), paper plane as lucide `Send`;
      `aria-label` each
- [ ] Responsive grid: 5-in-row on md+ (Follow us 25%), Follow us wraps on
      sm, stacks on xs
- [ ] Tests: 100% coverage (filler label, CTA headline + sub-headline +
      button, brand + copyright + Component Dock link, 3 link columns with
      exact link sets, 5 socials with aria-labels, responsive classes
      present)
- [ ] `npm run verify:app colophon` passes; commit `feat: add colophon …`;
      PR + immediate squash merge; then TEMPLATES.md bookkeeping — line 777
      (Bootstrap Footer 01) → `[x]` + surge URL +
      `npm run readme:status`

## Verification checklist (from spec)

- [ ] Filler: `#f8f9fa` ~70vh + centered demo label
- [ ] CTA: `#8186d5` bg, padding 20px, `top: -150px` overlap, hard shadow
      `-20px -20px 0 0 rgba(52,58,64,.2)`; "Ready for a next project?" /
      "Let's get started!" (`#343a40`, 20px); "Contact us" square dark
      button (no radius, 1rem 3rem)
- [ ] Brand: "Colophon" 20px white uppercase letter-spacing .1rem;
      copyright "© <year> Colophon"; Component Dock link
      (`https://www.componentdock.com/`)
- [ ] Link columns: Customers / Company / Further Information with exact
      source link sets, `#666873` → hover `#fff`
- [ ] Socials: 5 round `#8186d5` circles (Facebook, Twitter, LinkedIn,
      Medium, Send) with aria-labels
- [ ] Responsive: one row on md+ (Follow us 25%), Follow us wraps on sm,
      stacked on xs; CTA stacks below md
- [ ] Footer `#141d2a` padding 7rem 0; semantic footer + main landmark;
      focus-visible rings
- [ ] Roboto Google Fonts link; no images; no ColorLib anywhere in
      `apps/colophon`
- [ ] `npm run verify:app colophon` green; TEMPLATES.md line 777 bookkept
      `[x]`
