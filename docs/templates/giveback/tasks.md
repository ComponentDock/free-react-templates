# Giveback (ColorLib Charitee) — Tasks & Design Notes

> Recreation of ColorLib "Charitee" (https://colorlib.com/wp/template/charitee/)
> under the NEW original name **Giveback**. Spec lives at
> `openspec/specs/template-giveback/spec.md`; app folder `apps/giveback`,
> package `@free-react-templates/giveback`, homepage
> `https://giveback.free.componentdock.com` (CNAME `giveback.free.componentdock.com`).

## Design notes

- **Original:** ColorLib "Charitee" — free charity website template.
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/charitee/`
  (HTTP 200, 28.3KB) + stylesheet `assets/css/style.css` (56.5KB). Full
  rendered DOM extracted; structure below is from the DOM + CSS tokens. The
  TEMPLATES.md screenshot (`charitee-colorlib-template.jpg`) confirms the
  visual design (light cream/white sections, coral + teal accents, dark navy
  footer).
- **Structure observed (1:1):** transparent header (logo + nav Home / Who we
  are? / Programs / About / Blog / Elements / Contact + "Call Us :
  0 (78) 675 3674" + "Make a Donation" button; sticky = solid navy #263B5C)
  → hero slider (~950px bg image, H1 "Give a helping hand to those who need
  it!", copy, teal "Ongoing Programs" CTA) → upcoming program strip (cream
  #FCF2EB; photo + "Upcoming Program" / "Donate vitamin B12 supply program"
  - "Donate Now" (coral) + "View Programs" (outline)) → about us (text +
    photo; "About Us" / "We are tender heart charity foundation." +
    "Discover More") → cause cards x3 (Help the ecosystems, Donate Vitamin B12
    Program, View Savers In Deworm Program; each photo + copy + Goal $67,845 /
  Raised $48,845 + "Donate") → "What we are doing" (photo + "Helping today" /
    "What we are doing" + "Join Us Today" outline CTA) → services "How we help
    people" (parallax fixed bg image, white centered heading, 3 icon cards:
    Pure Food & Water, Health & Medicine, Education) → "Latest Blog" (label
    "News" + 3 cards with teal date badge + "Read More") → dark navy #263B5C
    footer (logo + blurb + socials | Navigation links | Contact Us:
    4486 Richards Avenue, Modesto CA - 95354 · 209-818-6041 ·
    charity90@gmail.com | Support blurb + "Join Us Today") + copyright bar
    (ColorLib attribution → replaced by Component Dock link).
- **Design tokens:**
  - Brand coral **#F15B43** (primary buttons, "Donate", "Read More" links).
  - Teal/mint **#65C9BB** (hero CTA, section label spans, hover, date badges).
  - Orange **#FF6F00** (button hover sweep fill).
  - Navy **#263B5C** (headings, sticky header, footer).
  - Cream **#FCF2EB** (upcoming-program strip, slider area bg).
  - Body text **#777** (Rubik 300, 1.6 line-height).
  - Fonts: **Jost** headings (500) + **Rubik** body via Google Fonts.
  - Buttons: square (radius 0); coral filled with orange sweep hover;
    outline variant = 2px coral → fills on hover; hero CTA = teal filled;
    small card button = coral, padding 11px 20px.
  - Rhythm: section-padding 100px; strip 60px; labels 16px teal; H2s 46px
    Jost; hero H1 70px white.
- **Recreation approach:** light theme with coral + teal accents; hero =
  full-height seeded picsum image band with teal CTA; upcoming-program strip
  on cream bg; about + what-we-are-doing image/text splits (alternating
  image side); causes row with Goal/Raised figures + Donate buttons; services
  band on a fixed-bg image with lucide icons; blog cards with date badge +
  Read More; footer with contact details, nav, Support CTA, social icons;
  all images picsum-seeded (`picsum.photos/seed/giveback-N/w/h`); Google
  Fonts via `<link>`.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation: `apps/stylely` is a recent light landing with
  Navbar/Hero/About/Services/Blog/Footer structure; `apps/mission` (charity
  non-profit) is the closest charity-themed app — check both and copy the
  simplest fit, then extend with the cause cards + parallax services band.

## Tasks

- [x] Write `openspec/specs/template-giveback/spec.md` (Gherkin requirements + scenarios + replication findings + verification checklist) — DONE on main (prep).
- [ ] Create `apps/giveback` (copy the closest existing app; rename package to
      `@free-react-templates/giveback`; run `npm install` at repo root so
      package-lock.json registers the workspace).
- [ ] TDD: tests first for Navbar, Hero, UpcomingProgram, About, Causes,
      WhatWeDo, Services, Blog, Footer, App composition.
- [ ] Implement components (green) at 100% coverage.
- [ ] Per-app gate: `scripts/verify-app.sh giveback` + `npm run spec:validate`.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` after merge (bookkeeping on
      main; add the giveback.free.componentdock.com URL + homepage).
- [ ] Update README structure + `docs/ai-context.md` app list (via
      `npm run readme:status`).
