# Dojoly (ColorLib Nova) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-dojoly`.

## Design notes (replication findings)

- **Original:** ColorLib "Nova" — a KIDS MARTIAL ARTS / karate school
  landing page (page title "Nova — Free Bootstrap 5 Website Template by
  Colorlib"; source: https://colorlib.com/wp/template/nova/, appears 2× in
  TEMPLATES.md — line 608 (Bootstrap 5), line 1869; mark ALL `[x]` when
  done). NOTE: the app name "nova" is already taken (Error 404 19 → nova),
  so the new name MUST differ — hence Dojoly.
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/nova/
  (HTTP 200, ~31 KB HTML; `css/style.css` ~61 KB parsed for tokens).
  Stack: Bootstrap 5 + tiny-slider (testimonial carousel) + glightbox
  (video lightbox) + AOS (fade-up scroll animations) + icomoon + flaticon
  icon fonts — recreate ALL interactivity client-side in React.
- **Screenshot:** `nova-free-template.jpg` (1200×946, viewed in browser):
  thin multi-colored strip at top; white "Nova" logo + white nav over the
  hero; hero = centered UPPERCASE white headline "IT'S NEVER TOO LATE TO
  DEFEND YOURSELF" over a photo of five children in white karate uniforms
  (green/orange/white/blue belts) with a circular play button + "Watch
  video"; below the fold a split section — left: "ENCOURAGE YOUR KIDS TO
  LEARN" in red caps, body copy, list (Taekwondo, Brazilian Jiu-Jitsu,
  Muay Thai, Basic Defense), decorative translucent circles bottom-left;
  right: photo of four smiling kids in karate uniforms. Pale white/pink
  page background.
- **New name:** Dojoly ("dojo" + the repo's common `-ly` suffix — the
  template's persona is a martial-arts school). Single lowercase word, no
  collision with `apps/` or existing spec folders. NOT "nova" — never reuse
  the source name (and it is taken anyway).
- **Visual design (DOM + CSS tokens + screenshot):** SIGNATURE BRAND RED
  `#ec0101` on every section h2 (`text-primary`), `.btn-primary` fills,
  `.custom-list` dot bullets, footer links, post-title hovers, social
  hover `#fe2222`. BODY BACKGROUND `#fef7f7` (very pale red-white) — ALL
  sections sit on it, no dark bands. SIGNATURE SHAPES: teacher cards
  `border-radius: 70px` + `border-bottom-right-radius: 200px` (diagonal),
  sec-1 image `border-top-left-radius: 200px` + `border-bottom-right-radius:
200px`; 5-stripe colored top bar (`#007f74`, `#fe5802`, `#025e69`,
  `#464f9e`, `#ec0101`, 20% × 10px each); 80px circular play button (2px
  white border); 30px circular social buttons (`#777` → `#fe2222`).
  Teacher pastels: `#F8EFD4`, `#e6e7f6`, `#ddf8f6`, `#f9e4e4`. Fonts:
  Montserrat (headings + logo) / Open Sans (body). Sections padding 7rem.
  Buttons: 4px radius (NOT pills), Bootstrap padding.

## Section-by-section fidelity notes (build order)

1. **Colored top bar** — `d-flex` row of five 20%-width 10px stripes:
   `#007f74` `#fe5802` `#025e69` `#464f9e` `#ec0101`. Pure decorative;
   easy first component.
2. **Navbar** — absolute/transparent over hero (z-index above), logo left
   ("Dojoly", Montserrat 24px/700 white), links right 14px
   `rgba(255,255,255,0.7)` → white hover; "Home" active. "Dropdown Menu"
   expands submenu (Menu One / Menu Two [Sub Menu One/Two/Three] / Menu
   Three) — click-state React, not hover. Mobile: burger toggler → slide
   panel (site-mobile-menu). `aria-expanded` on toggler.
3. **Hero** — `min-h-screen` bg photo + `bg-black/40` overlay; centered:
   h1 "It's Never Too Late to Defend yourself" — CSS `uppercase` (jsdom
   keeps raw text; query raw, style uppercase), Montserrat 700, ~50px;
   sub-heading faint white "Far far away, behind the word mountains";
   80px circle play button (border-2 border-white, icon ~30px) + "Watch
   video" 18px white. Click → lightbox modal (dark backdrop, video embed,
   close button).
4. **Kids section (`sec-1`)** — split: left col = divider image (small
   placeholder, mb-2), h2 red "Encourage Your Kids to Learn", paragraph,
   custom list (4 red dot bullets: Taekwondo, Brazilian Jiu-Jitsu, Muay
   Thai, Basic Defense), red "Enroll now" btn-primary; right col = photo
   with 200px top-left/bottom-right radius, `right: -20px` offset.
   Decorative `circle.png` → large translucent circle behind
   (`left: -200px; top: 200px; z-index: -1`) — optional if hard; note it.
5. **Our Teachers** — centered divider + red h2; row of 4 cards:
   pastels in order `#F8EFD4` `#e6e7f6` `#ddf8f6` `#f9e4e4`, radius
   70px/200px, 100px circular photo, bold name (Maria Jones, James
   Campbell, Rob Smith, Kaye Hamilton), "Instructor" line, paragraph.
6. **Our Services** — centered divider + red h2; 3-col grid × 6 cards:
   lucide icon (70px, brand-red or black — source flaticon is red/black
   line art; pick red for brand consistency) + bold title (Won Medal,
   Wear Kimono, Martial Arts, Wear Kimono 2, Martial Arts Kids, Martial
   Arts) + paragraph + "Learn More" black→red link. Icon mapping:
   Medal → `Medal`, Wear Kimono → `Shirt`, Martial Arts → `Swords`/
   `PersonStanding`, Martial Arts Kids → `Dumbbell`/`Baby` (probe exports
   with typeof first — lucide renames silently).
7. **Testimonials** — centered divider + red h2; carousel (index state,
   prev/next chevron buttons), 3 slides reusing teacher-card style
   (pastel bg, circular photo, name, position) + `font-serif italic`
   ~20px blockquote with quoted text. Only active slide visible.
8. **Blog Posts** — centered divider + red h2; 3 cards: photo, meta
   "July 17, 2019 by Admin", 20px bold black title (red hover), paragraph,
   "Read more".
9. **Footer** — transparent, 14px `#888`: "About Foundation." (red period)
   - paragraph; Connect: 6 inline-SVG brand circles (Instagram, Twitter,
     Facebook, LinkedIn, Pinterest, Dribbble — lucide HAS NO brand icons);
     Links + Company lists; Contact: address "43 Raymouth Rd. Baltemoer,
     London 3910", 2 phone links, email. Copyright line → Component Dock
     link (https://www.componentdock.com/) — replace ColorLib attribution.
     NEVER write literal `tel:` URIs (secret-scan redaction) — build hrefs
     at runtime from spaced strings or use plain text.

## Tasks

- [ ] Scaffold app (copy simplest existing app; `@free-react-templates/dojoly`;
      `public/CNAME` = `dojoly.free.componentdock.com`; homepage
      `https://dojoly.free.componentdock.com`; register workspace +
      `npm install --package-lock-only`; injectUiSource in vite.config)
- [ ] index.css `@theme`: `--color-brand: #ec0101`, `--color-brand-dark:
    #c90101`, `--color-brand-bright: #fe2222`, pastel tokens; Montserrat +
      Open Sans `<link>` in index.html
- [ ] Colored top bar component + test
- [ ] Navbar (dropdown + burger + mobile panel) + tests
- [ ] Hero (overlay, play button) + video lightbox modal + tests
- [ ] Kids section (list, enroll button, diagonal image) + tests
- [ ] Teachers section (4 pastel cards) + tests
- [ ] Services section (6 icon cards) + tests
- [ ] Testimonials carousel (cycling + controls) + tests
- [ ] Blog posts section + tests
- [ ] Footer (widgets + social SVGs + Component Dock link) + tests
- [ ] App composition + section-order test; picsum seed subject check
- [ ] `scripts/verify-app.sh dojoly` green (typecheck/lint/knip/fallow/
      coverage/build)
- [ ] PR → squash merge → TEMPLATES.md lines 608 + 1869 `[x]` +
      `dojoly.free.componentdock.com` + `npm run readme:status` + surge
      verify (200 + title + bundle hash)
