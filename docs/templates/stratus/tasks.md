# Stratus (ColorLib Cloud83) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-stratus`.

## Design notes (replication findings)

- **Original:** ColorLib "Cloud83" — free Bootstrap 4 web-hosting website
  template (source: https://colorlib.com/wp/template/cloud83/). TEMPLATES.md
  line 360 (Hosting section) — appears 3× in the file (lines 360, 2026, 3049,
  all `- [ ]`; duplicate rows to be marked together at bookkeeping time).
  Recreation uses the NEW name **Stratus** (stratus clouds — layered cloud
  formation; single word, no collision with `ls apps/` or spec folders).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/cloud83/ (HTTP
  200, ~21 KB; title "Cloud 83 - Hosting Template"). Stylesheets:
  `css/style.css` (~29 KB — custom template styles) + bootstrap.min,
  font-awesome.min, magnific-popup, owl.carousel.min, animate. JS: jquery,
  bootstrap, owl.carousel (hero slider), main.js (resolves `data-setbg`
  background images). Font: **"Poppins"** (400/500/600/700 @font-face via
  cf-fonts; load from Google Fonts `<link>` in the recreation).
- **Screenshot:** `cloud83-free-template.jpg` (TEMPLATES.md line 360) — dark
  navy hosting hero with blurred server-room photo and green slider dots;
  white feature row with teal-green line icons; dark services section with a
  central circular graphic and white text; slate-blue stats band; dark footer
  with green accents.
- **Visual design (from DOM + CSS tokens + screenshot):** corporate hosting
  aesthetic — Poppins throughout; dark photographic hero; square buttons
  (radius 0) in slate #556080 / soft blue #7fabda / green #25ae88; brand green
  #25ae88 as the accent (header border, Register/Start buttons, active slider
  dot); milestones band solid #556080; footer top #1f2430, footer bar #171b26;
  light bands #f4f7fa; headings dark #151414/#333, body #7c7c7c.
- **Structure (1:1, section order):**
  1. `header.header-section` — rgba(0,0,0,0.63) bg, `padding: 54px 0`,
     `border-bottom: 2px solid #25ae88`; left logo (img/logo.png); center nav
     **Home / About us / Services / News / Contact**; right `.header-btns`:
     "Support 24/7" + Login (sb-c2 #7fabda) + Register (sb-c3 #25ae88), small
     buttons `padding: 10px 20px; margin-right: 11px`.
  2. `section.hero-section > .hero-slider.owl-carousel` — 2 identical
     `div.hs-item.set-bg` slides (`data-setbg="img/bg.jpg"` dark server
     photo); h2 **"The Best Hosting"** + 2 lorem paragraphs + Read More
     (sb-c1 #556080, `min-width: 147px; margin-top: 65px`, slide-in with 1s
     ease delay). `.hero-slider .owl-dots` bottom-center; `.owl-dot.active`
     bg **#25ae88**.
  3. `section.feature-section.spad` — 3× `col-md-4 .feature`: icon
     (feature-icons/1..3.png) + h4 + lorem: **Worldwide Support / Safe &
     Secure / Cloud Hosting**.
  4. `section.Services-section.spad.set-bg` (`data-setbg="img/service-bg.jpg"`)
     — white `.section-title` (small p "The only ones" + h2 "Our Best
     Services", `margin-bottom: 87px`); center `img/service-circle-pic.png`;
     two `ul.service-list` (left/right, `text-white`), 3 items each: icon
     (service-icons/1..6.png) + h4 + lorem: **Free Domains / Shared Hosting /
     Reseller Hosting / VPS Hosting / Dedicated Hosting / Cloud Hosting**.
  5. Trust section — light: section-title (p "The only ones" + h2 **"We
     Generate Trust"**), `img/about.png`, paragraph ("Phasellus vehicula
     tempus orci vel consequat…"), `ul` of 4 checklist items (**Mauris
     dignissim**, **Nullam lorem sem, viverra a rutrum**, **Etiam lobortis
     erat vel ullamcorper**, **Sed ultrices interdum libero, laoreet**).
  6. `section.milestones-section` — `background: #556080; padding: 125px 0`;
     4 stats: icon (milestone-icons/1..4.png) + h2 number + p label: **31k
     Clients / 98k Domains / 14k Awards / 362 VPS**.
  7. CTA band — h2 **"We are here to help you get started"** + h6 lorem
     subtext + **Start** (sb-c3 #25ae88).
  8. `section.footer-top-section` — `background: #1f2430; padding:
127px 0 50px`: logo + about paragraph + social links; four `h5.fw-title`
     columns: **Our Products** (Web Hosting, Reseller Hosting, VPS Hosting,
     Dedicated Servers, Windows Hosting, Cloud Hosting, Linux Servers,
     WordPress), **Our Solutions**, **Our Products** (3 links), **Company**.
  9. `footer.footer-section` — `background: #171b26; padding: 19px 0`:
     copyright + ColorLib credit (→ repo-standard credit).

## Implementation todo

- [ ] Scaffold `apps/stratus` (copy simplest existing app, package
      `@free-react-templates/stratus`).
- [ ] `index.html`: title "Stratus — Hosting & Cloud Services", Poppins via
      Google Fonts `<link>`.
- [ ] `@theme` tokens: `--color-brand: #25ae88`, `--color-slate: #556080`,
      `--color-softblue: #7fabda`, `--color-ink: #151414`, `--color-muted:
    #7c7c7c`, `--color-darktop: #1f2430`, `--color-darkbar: #171b26`,
      font-sans Poppins.
- [ ] Header: semi-transparent dark bar, 2px green bottom border, brand
      (lucide Cloud + Stratus), 5 nav links, Support 24/7 + Login (soft blue) + Register (green) square buttons; mobile toggler with aria-expanded.
- [ ] Hero: full-width dark cover photo (picsum seed stratus-1), "The Best
      Hosting" h2, 2 paragraphs, square slate Read More button, green active
      dot (single slide or auto-advancing 2 slides + dots — keep visuals).
- [ ] Features: white 3-card row — lucide Globe / ShieldCheck / Cloud + h4 +
      lorem (picsum not needed; icons only).
- [ ] Services: dark cover-photo band (picsum seed stratus-2), white title
      "The only ones / Our Best Services", central circular graphic (picsum
      seed stratus-3 circle or decorative ring), 6 items (3+3) lucide icons
      (Gift, Users, RefreshCw, Server, HardDrive, Cloud) + h4 + lorem.
- [ ] Trust: light band — "The only ones / We Generate Trust", photo (picsum
      seed stratus-4), paragraph, 4 check items (lucide CheckCircle2 green).
- [ ] Milestones: #556080 band, 4 stats (icon + big number + label) — count-up
      on viewport optional.
- [ ] CTA: heading + h6 subtext + square green Start button.
- [ ] Footer: #1f2430 top (brand, about, 3-4 social circles, four link
      columns), #171b26 bar (copyright + repo-standard credit).
- [ ] Tests (vitest + RTL, 100% coverage): header render + mobile toggler,
      hero content, features, services items, trust checklist, milestones,
      CTA, footer columns, page composition + title.
- [ ] Verify: `npm run verify:app -- stratus` green.
- [ ] PR: `feat/template-stratus`, description with source (Cloud83), preview
      URL, tokens, renames; merge immediately with `gh pr merge --squash
    --delete-branch`; mark TEMPLATES.md rows (all 3 dup lines 360/2026/3049)
      `[x]` + surge URL + `npm run readme:status`.

## Pitfalls

- TEMPLATES.md has **3 duplicate Cloud83 rows** (360, 2026, 3049) — mark ALL
  of them `[x]` at bookkeeping time (exact line-targeted edits only).
- Hero slides are identical in the original (2× "The Best Hosting") — do not
  invent different slide copy.
- `data-setbg` backgrounds resolve via JS in the original; the recreation
  just sets CSS background-image directly.
- Buttons are SQUARE (border-radius 0) — do not round them.
- Footer link columns: the original repeats "Our Products" as a heading
  twice — keep the same 4 columns as the original.
