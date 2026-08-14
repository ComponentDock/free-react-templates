# Counsel (ColorLib Solicitor) — Tasks & Design Notes

> Recreation of ColorLib "Solicitor" — free Bootstrap 5 law-firm /
> legal-services website template (https://colorlib.com/wp/template/solicitor/)
> under the NEW name **Counsel** ("counsel" — a lawyer or firm giving legal
> advice, fitting a solicitor / investigative-litigation brand; single
> lowercase word, no collision with `apps/`, `openspec/specs/` or
> `docs/templates/` — verified 2026-08-14), per the monorepo naming mandate
> (never reuse the ColorLib source name). Full spec:
> `openspec/specs/template-counsel/spec.md`.

## Design notes (replication findings)

- **Original:** ColorLib "Solicitor" — law firm / private investigation
  template (solicitors' firm: investigative services, security
  consultations, criminal defense, due diligence). Bootstrap 5 based
  (bootstrap bundle + aos) + custom `css/style.css` (~56 KB) + icon fonts
  icomoon + flaticon. Brand name used in the source copy: "Solicitor".
  TEMPLATES.md category: **Bootstrap 5 (89)**, first occurrence at line 625
  (`- [ ]`, source NOT shipped anywhere). DUP-ROW TRAP: the `solicitor`
  slug also appears at line 2133 (**Lawyer (23)**) — BOTH `- [ ]` rows of
  the SAME template; ONE implementation covers both rows (mark all `[x]`
  with the same surge URL at bookkeeping).
- **Live preview DOM analyzed (verified 2026-08-14):**
  `https://preview.colorlib.com/theme/solicitor/` — HTTP 200, ~41 KB HTML
  (REACHABLE). The index page carries the FULL single-page layout (navbar +
  hero + about + services + why-us + tabs + practice area + testimonials +
  resources + CTA + contact form + footer — all parsed from the live DOM).
  Subpages (`practicing-area.html`, `services.html`, `about.html`,
  `contact.html`) all HTTP 200 but OUT OF SCOPE for the single-page
  recreation. Custom CSS `css/style.css` (~56 KB, fully extracted for
  tokens). Screenshot `solicitor-free-template.jpg` (1200×946, viewed in
  browser): DARK charcoal design — hero = grayscale photo of a man in a
  suit at a desk (white brick wall), right-aligned headline "Meet all your
  investigative and litigation needs", solid blue **Our services** +
  white-outline **Contact us** buttons; below, the "I'm Jon Campbell"
  about section with the same man's portrait overlapping the hero's bottom
  edge; serif headings, white text, blue CTAs, desaturated photography.
- **Visual design:** dark theme throughout — page bg `#1b1c1e`, white
  Roboto 14px body text, **Playfair Display serif** headings (`.section
.heading` 45px/700, mobile 30px), **brand blue `#037ef3`** for every
  accent (primary buttons with BLACK text, 50px circle behind service
  icons, practice-card hover bg, footer link underline hover). Near-black
  `#0f0f11` panels (practice cards, about decorative band) vs subtle white
  bands `rgba(255,255,255,0.02)` (services, resources box). Muted copy
  `rgba(255,255,255,0.5)`, nav links `rgba(255,255,255,0.7)`, footer links
  `#777`. Buttons: radius 4px, padding 15px 30px, right arrow
  (`has-arrow` padding-right 50px). Hero: 100vh (min 780px), photo cover +
  `rgba(0,0,0,0.4)` overlay.
- **Section order (1:1, verified from live DOM):**
  1. **Navbar** (`nav.site-nav`, absolute top 40px, z-9, transparent over
     hero): brand **"Solicitor"** (Playfair 24px) left; links **Home ·
     Practicing Area · Menu One (dropdown) · Services · About · Contact
     Us** (14px `rgba(255,255,255,0.7)` → white hover, padding 10px);
     right phone **123-489-9381**. Recreation: "Counsel", same links
     (dropdown optional/simplified), phone, hamburger + mobile panel.
  2. **Hero** (`.hero.overlay`, 100vh, `hero_1.jpg` + `rgba(0,0,0,0.4)`
     overlay): right col (col-lg-5 ms-auto): h1.heading **"Meet all your
     investigative and litigation needs"** (white), p.text-white-50,
     **Our services** (btn-primary) + **Contact us** (btn-outline-white),
     both has-arrow.
  3. **About** (`.sec-about-me`): h3 **"I'm Jon Campbell"**; left col-lg-4
     — 2 paragraphs + **Our services**; right col-lg-6 `.bg-1` —
     portrait `about_2.png` in `.img-wrap` (`margin-top: -150px`,
     overlaps hero) + `#0f0f11` band 300px behind (z-index -1).
  4. **Our Services** (`.py-5.bg-custom-light`, `rgba(255,255,255,0.02)`):
     h3 **"Our Services"**; 6 cards (col-sm-6 col-lg-4): **Councel ·
     Legal Dept · Compliance · Identity · Hall of Justice · Law Abiding**;
     white icon + **50px blue circle** (`.circle:after` `#037ef3`,
     left -20px, z -1), h4 title, lorem.
  5. **Why us** (`.sec-why-us`): h3 **"Security Consultants"**; photo
     `hero_3.jpg` left (col-lg-7 rounded), right col-lg-4: h3 **"Justice
     serves"** + p + **Read more**.
  6. **Investigative tabs** (`.sec-3`): 3 tab links (col-4, white, active
     white bottom border): **Investigative Services · Security
     Consultations · Criminal Defense Investigations**; each pane:
     col-lg-3 (h3 + p + **Read more**) + col-lg-7 photo
     (`hero_1/2/3.jpg`).
  7. **Practice Area** (`.sec-4`): h3 **"Practice Area"**; 12 numbered
     `.media-2` cards (col-6 col-md-4 col-lg-4, bg `#0f0f11`, padding 20 /
     pb 80): **01 Asset Searches · 02 Background Investigations · 03
     Business Due Diligence · 04 Civil Investigations · 05 Criminal
     Defense Investigations** + 06–12 repeat (06/07/08/09/10 =
     Asset/Background/Business/Civil/Criminal again, 11 Background, 12
     Business); number + h3 + arrow; **hover → blue `#037ef3`** + arrow
     fades in.
  8. **Testimonials** (`.py-5.sec-testimonial`): h3 **"Testimonials"**;
     left vertical pill nav with round avatars (`person_2/1/3.jpg`):
     **Angela Smith CEO, Co-Founder · Joshua Hamilton Web Designer ·
     Janice Bruce Web Designer**; right blockquote quote 30px (18px
     mobile).
  9. **Resources** (`.sec-list`): h3 **"Resources"** + intro right
     (col-lg-5); `.box` (`rgba(255,255,255,0.02)`, padding 40): **4
     columns** × 6 links each.
  10. **CTA band** (`.py-0`): reversed split — photo `hero_2.jpg` right
      (col-lg-7 order-lg-2, rounded), left col-lg-4: h3 **"Peace &
      order"** + p + **Read more**.
  11. **Write to us** (`.sec-6`): h3 **"Write to us"**; form: Full Name +
      Email (col-lg-6), Phone Number + Choose a Service (col-lg-6),
      textarea "Write your message" (col-lg-12), **Send Message**
      (btn-primary, col-lg-12); focus border `#81bff9`.
  12. **Footer** (`.site-footer`, 70px 0, 14px): **Contact** (43 Raymouth
      Rd. Baltemoer, London 3910 · +1(123)-456-7890 ×2 · info@mydomain.com),
      **Sources** (2×6 links), **Links** (3 links); bottom bar "© <year>
      All rights reserved | This template is made with ♥ by Colorlib" →
      **Component Dock link (mandatory)**.
- **Design tokens (from `style.css`):** page bg `#1b1c1e`; brand blue
  `#037ef3` (btn-primary bg + BLACK text, hover `#2991f5`/`#1c8bf4`,
  `.circle:after` 50px icon circle, `.media-2:hover` bg, footer link
  underline hover, `#81bff9` form focus); dark panels `#0f0f11` (media-2
  cards, about band); subtle bands `rgba(255,255,255,0.02)`; muted
  `rgba(255,255,255,0.5)` / nav `rgba(255,255,255,0.7)` / footer `#777`;
  headings Playfair Display serif (`.heading` 45px/700, mobile 30px);
  body Roboto 14px; buttons radius 4px padding 15px 30px + has-arrow 50px;
  hero 100vh min 780px + rgba(0,0,0,0.4) overlay; sections 7rem 0
  (py-5 = 3rem); about portrait overlap -150px; footer 70px 0.

## Implementation tasks (TDD, in order)

- [ ] Scaffold: copy simplest existing app → `apps/counsel`, rename package
      `@free-react-templates/counsel`, register workspace
      (`npm install --package-lock-only`), `public/CNAME` =
      `counsel.free.componentdock.com`, homepage
      `https://counsel.free.componentdock.com`; footer MUST link
      `https://www.componentdock.com/`
- [ ] `@theme` tokens: `--color-brand: #037ef3`, `--color-ink: #1b1c1e`
      (page bg), `--color-panel: #0f0f11`, `--color-band:
    rgba(255,255,255,0.02)`, `--color-muted: rgba(255,255,255,0.5)`,
      `--color-faint: rgba(255,255,255,0.7)`, `--color-foot: #777`,
      `--color-focus: #81bff9`; fonts Playfair Display + Roboto via Google
      Fonts `<link>` in `index.html`
- [ ] Navbar (transparent absolute over hero, COUNSEL brand +
      Home/Practicing Area/Services/About/Contact Us + phone link,
      hamburger → mobile panel)
- [ ] Hero (100vh photo + `rgba(0,0,0,0.4)` overlay, right-aligned serif
      h1, muted p, blue **Our services** + outline **Contact us** with
      arrow icons)
- [ ] About (heading "I'm Jon Campbell", 2 muted paragraphs + blue button;
      portrait overlapping hero with `#0f0f11` band behind; overlap off on
      mobile)
- [ ] Services (6 cards in 3-col grid: Councel/Legal Dept/Compliance/
      Identity/Hall of Justice/Law Abiding; white icon + 50px blue circle)
- [ ] Why us (Security Consultants; rounded photo left, Justice serves +
      Read more right)
- [ ] Investigative tabs (3 tabs w/ white active underline; 3 panes: h3 +
      p + Read more + photo; tab switching state)
- [ ] Practice Area (12 numbered dark cards, 3-col grid; hover → blue +
      arrow fade-in)
- [ ] Testimonials (3 avatar pills + 30px quote, switching on click)
- [ ] Resources (4-col link box inside subtle band)
- [ ] CTA band (reversed split: photo right, Peace & order + Read more
      left)
- [ ] Write to us (4 inputs + textarea + Send Message; zod/RHF
      validation; dead-end submit)
- [ ] Footer (3 widgets Contact/Sources/Links + bottom bar with Component
      Dock link)
- [ ] Placeholder images: `picsum.photos/seed/counsel-<n>/<w>/<h>` — 1 hero
      photo, 1 about portrait, 1 why-us photo, 3 tab photos, 1 CTA photo,
      3 avatars; screen seeds before pinning (seed-screening method;
      verified person picsum IDs 1027/64/823/996 for portraits/avatars)
- [ ] Icons: lucide-react — ArrowRight (all has-arrow buttons) + 6
      distinct law/justice icons for services (candidates: Gavel, Scale,
      Landmark, Fingerprint, ScrollText, BookOpen — probe `typeof` each
      import first; pick 6 that exist)
- [ ] Tests: navbar (links + mobile toggle), hero CTAs, about overlap,
      services cards, tab switching, practice hover, testimonial
      switching, form validation, footer Component Dock link, responsive
      stacking — 100% coverage (MemoryStorage polyfill NOT needed — no
      localStorage in this template)
- [ ] Run `scripts/verify-app.sh counsel` until green (typecheck + lint +
      vitest 100% + build)
- [ ] PR: source template, preview URL, design tokens, deviations (renames,
      placeholder images, single-page vs multi-page source, simplified
      dropdown)
- [ ] Bookkeeping on merge: mark BOTH `- [ ]` rows (line 625 Bootstrap 5,
      line 2133 Lawyer) `[x]` with `https://counsel.free.componentdock.com` + `npm run readme:status`
