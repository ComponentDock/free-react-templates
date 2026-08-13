# Meliora (ColorLib Chariter) — Tasks & Design Notes

> Recreation of ColorLib "Chariter" (https://colorlib.com/wp/template/chariter/)
> under the NEW original name **Meliora**. Spec lives at
> `openspec/specs/template-meliora/spec.md`; app folder `apps/meliora`,
> package `@free-react-templates/meliora`, homepage
> `https://meliora.free.componentdock.com` (CNAME `meliora.free.componentdock.com`).

## Design notes

- **Original:** ColorLib "Chariter" — free charity / nonprofit Bootstrap 5
  template (listed in TEMPLATES.md "Bootstrap 5 (89)"; duplicate row in
  "Charity (37)" — ONE implementation covers both rows).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/chariter/`
  (HTTP 200, ~38.4KB) + stylesheet `assets/css/style.css` (~62.7KB minified).
  Full rendered DOM extracted; structure below is from the DOM + CSS tokens.
  The TEMPLATES.md screenshot (`chariter-free-template.jpg`, 1200×946)
  confirms the visual design: rose-red utility bar, white nav with heart
  logo + "Donate Now" pill, children-photo hero with right-side white Lora
  headline + pink "Active Causes" button + vertical dots, centered serif
  "Causes we are serving" heading over a 3-card carousel (rounded photos,
  pink tags, progress bars), Lora headings + Roboto body.
- **Structure observed (1:1):**
  - Header: `header-top` rose bar `#C30047` — left phone "+10 (78) 564
    4568" + email "info.90@chariter.com" (white items, rgba(255,255,255,.2)
    dividers), right socials (rotateY hover); `header-bottom` white —
    heart logo, menu Home/Causes/About/Blog/Contact (Roboto 500 #301A22,
    hover #C30047), pill `header-btn` "Donate Now" (radius 30px); sticky →
    fixed white + shadow.
  - Hero `slider-area` (3 slides, min-height 800px → 450 mobile): bg photos
    h1_hero1/2/3.jpg; slide 1 `hero-overly` = LEFT gradient
    rgba(48,26,34,.95)→transparent, slide 2 `hero-overly01` = mirrored
    RIGHT; caption = uppercase kicker + H1 "Support a causes you care
    about" (Lora 70px w700 white — FIX the grammar to "Support a cause you
    care about") + white p (20px w300) + `hero-btn` "Active Causes"
    (#FF6378, padding 30px 40px); vertical right-edge dots (7px, active
    23px ring).
  - Causes carousel `services-area1`: centered section-tittle (kicker
    #7EA0FF + H2 "Causes we are serving" Lora 46px w700) + intro p;
    `properties` cards — white, radius 10px, image top (10px 10px 0 0),
    1px #F1F4F8 wrap border, title + grey copy, "$67,845 Goal / $48,845
    Raised" progress bar, "Donate" link; hover shadow 0 8px 8px
    rgba(2,25,65,.08); pink tag overlay bottom-left of image; prev/next
    arrows (`properties-footer`). Screenshot card titles: "Help senior
    citizens", "Help the ecosystems". Use a simple index-based carousel
    with prev/next buttons (no owl.carousel dependency).
  - Who we are? `support-company-area`: photo left + section-tittle "Who
    we are?" + copy + "Learn More" pill.
  - Counter band `count-down-area` (section-img-bg1.jpg): 35+ Active
    Cases / 12m People Joined / 200m Cases every Year / 1200 People get
    help from us. Static numbers OK (count-up optional).
  - Our services `our-services`: centered "We serve for peoples" +
    icon cards — Pure Food & Water / Health & Medicine / Education
    (3+ cards; source grid holds more — 6 looks right).
  - Emergency band `emargency-care` (section-img-bg2.jpg, 100px 0):
    "They need your help" + 2 paragraphs + filled "Donate in a Case" +
    outlined "Join with Us" (boxed-btn white/#C30047).
  - Join with Us `join-us-area`: centered H2 "Join with Us" + paragraph +
    "Join Now" pill.
  - Footer `footer-wrapper` bg #301A22: brand + blurb + circular socials;
    Navigation (Home/About/Services/Blog/Contact); Services — source ships
    BASE-TEMPLATE LEFTOVERS (Pet Care/Pet Treatment/Pet Training/Hygienic
    Care) → paraphrase to Fundraising/Volunteers/Donations/Events (note the
    deviation in the PR); Subscribe newsletter — email input + submit
    (client-validated, non-functional); copyright bar → Component Dock link.
- **Design tokens:**
  - Rose-red **#C30047** (top bar, buttons, hovers); sweep **#e6115f**
    (btn ::before scaleX, cubic-bezier(0.5,1.6,0.4,0.7)); hero btn
    **#FF6378**; kicker **#7EA0FF**; plum text **#301A22** (headings +
    body), muted #6A6063; light bgs **#f9f9ff / #f0e9ff / #fbf9ff**; card
    border **#F1F4F8**; footer bg **#301A22**.
  - Fonts: **Roboto** (body/nav 300–900) + **Lora** (headings 400–700;
    section H2 46px w700; hero H1 70px w700).
  - Buttons: pill radius 35px; .btn 22px 32px; .hero-btn 30px 40px;
    .header-btn radius 30px 10px 31px; .boxed-btn white 1px #C30047.
  - Cards radius 10px; section-padding 120px (70px mobile);
    emargency-care 100px vertical; footer-padding 80px.
  - Hero overlay: linear-gradient(to right, rgba(48,26,34,.95),
    transparent) — left on slide 1, right on slide 2.
- **Recreation approach:** warm light theme with rose accents; hero = seeded
  picsum photo + dark plum gradient + Lora H1 + salmon CTA + 3-slide
  index-based slider with vertical dots; cause cards with picsum photos +
  pink tag + Goal/Raised progress; counters over seeded bg photo; lucide
  icon service grid; emergency + join bands; dark footer with newsletter
  form; all images `picsum.photos/seed/meliora-N/w/h`; Google Fonts via
  `<link>`.
- **Picsum subject screening:** hero/counter/emergency backgrounds are
  person-heavy in the source. Picsum verified person/event photos (from the
  replication skill): 1027 (dark-bg portrait), 64 (golden-hour woman), 823
  (woman with camera), 996 (backlit woman), 453 (live band on stage, dark —
  good under overlay). SCREEN each candidate seed with the bright/blue
  pixel metric (sky/landscape heroes score differently) and browser-verify
  the top 1–2 before pinning; update spec + tests + docs together if a seed
  changes.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate components.
- Base implementation: shipped charity/nonprofit apps `apps/altruist`
  (ColorLib Cause), `apps/benefact` (Fundraiser) and `apps/caritas` (Amor)
  are the closest structural references (cause cards + counters + CTA
  bands); `apps/fixly` (Carepair) is another warm-donation-style reference.
  Copy the simplest fit, then extend with the hero slider dots, cause-card
  progress bars and the emergency band.
- NOTE on `npm run spec:validate`: keep the spec's Gherkin blocks in the
  exact format above (## Requirement / #### Scenario / - **GIVEN** etc.) so
  the OpenSpec validator parses them.

## Tasks

- [x] Write `openspec/specs/template-meliora/spec.md` (Gherkin requirements + scenarios + replication findings + verification checklist) — DONE on
      main (prep).
- [ ] Create `apps/meliora` (copy the closest existing app, e.g.
      `apps/benefact`; rename package to `@free-react-templates/meliora`;
      run `npm install` at repo root so package-lock.json registers the
      workspace).
- [ ] TDD: tests first for Header (utility bar + nav + sticky + Donate
      CTA), HeroSlider (3 slides, overlays, dots), CausesCarousel (cards,
      progress, arrows), WhoWeAre, CounterBand, ServicesGrid,
      EmergencyBand, JoinUs, Footer (4 columns + newsletter form +
      Component Dock link), App composition.
- [ ] Implement components (green) at 100% coverage.
- [ ] Screen picsum seeds for hero/counter/emergency backgrounds (person
      subjects), pin and record them.
- [ ] Per-app gate: `scripts/verify-app.sh meliora` + `npm run spec:validate`.
- [ ] Update TEMPLATES.md status `[~]` → `[x]` for BOTH Chariter rows
      (line ~560 "Bootstrap 5" and the "Charity" dup row ~1256) after merge
      (bookkeeping on main; add the meliora.free.componentdock.com URL +
      homepage).
- [ ] Update README structure + `docs/ai-context.md` app list (via
      `npm run readme:status`).
