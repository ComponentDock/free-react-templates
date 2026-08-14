# Orenda (ColorLib Onlineedu) — Tasks & Design Notes

> Prep artifacts (spec + research) prepared on `main` by the prep stream.
> Implementation ships later on `feat/template-orenda` by an implementer
> stream — this folder is the handoff.

## Design notes

- **Original:** ColorLib "Onlineedu" — free **online education** one-page
  template (Bootstrap 4 + jQuery/slick/owl, CC BY 3.0),
  source: https://colorlib.com/wp/template/onlineedu/
- **Live preview analyzed:** https://preview.colorlib.com/theme/onlineedu/
  (DOM + `assets/css/style.css` fetched and parsed for this prep; screenshot
  at https://colorlib.com/wp/wp-content/uploads/sites/2/onlineedu-free-template.jpeg
  reviewed in-browser — dark-indigo top bar, white header with search,
  light-blue hero with white bold headline + student photo, white category
  cards with icon + subtle border).
- **Recreation name:** Orenda (a word for inner power/inspiration — a fresh
  education brand). App folder `apps/orenda`, package
  `@free-react-templates/orenda`.
- **Brand tokens:** primary indigo `#2d3092` (buttons, card hover fill),
  dark indigo `#1f2b7b` (topbar), hover sweep `#3e44ec`; section titles
  `#030431` 49px/600 (white on dark bgs); light bgs `#f9f9ff`/`#f0e9ff`;
  footer `#0b0b1d`; square buttons (radius 0, padding ~27px 44px,
  letter-spacing 1px, sweep animation on hover); fonts Josefin Sans (body)
  - Sen (headings). Put the primary in Tailwind `@theme` and use via classes.

## Section order (1:1 from the live DOM)

1. Header: dark-indigo utility bar (social icons left, email
   needhelp@gmail.com + phone, Login/Register right) + white main bar (logo
   "Orenda" with graduation-cap icon, nav: Home, About, Courses,
   Instructors, Blog, Contact, search input) + mobile slide-out menu.
2. Hero slider (`slider-area`): 2 slides on `h1_hero.png`-style light-blue
   image bg (min-height ~840px) — sub-heading "Popular Online Courses",
   h1 "The New Way To Learn Properly in With Us!" (white, 60px/700; fix the
   original's "in With" typo in the recreation copy), square indigo "Get
   Started" button, student photo + floating dots/lines graphic on the
   right. Prev/next + dots controls.
3. Categories (`categories-area`): "Let's Browse All Categories" (fix
   original typos) + 4–5 cards — Web Design, App Development, Video
   Editing, Digital Marketing, SEO Marketing — icon + title + copy +
   "Read More >"; hover fills card `#2d3092`, text turns white (border
   1px #ddd, bg white/`#f9f9ff`, generous padding).
4. Stats (`count-down-area section-bg`): four counters "1050+ Topics" etc.
   — big indigo numbers + labels.
5. Popular courses: "Most Popular Course of This Week / Our Popular Course"
   - 3 course cards (Graphic Design, Web Development, Digital Marketing) —
     image, review count ("52 Review"), price ("Free"), category tag +
     "Find More Courses" square indigo button.
6. Faculty (`team-area section-bg`): "More About Our Faculty / Our Best
   Teachers" + 4 teacher cards (photo, name, "Faculty" role) + "View All
   Faculty" button.
7. About (`about-area section-padding2`): "More About Our Company / Want to
   know more" + paragraph + 3-point checklist (Creative ideas base /
   passages... / randomised words — paraphrase) + "More About Us" button.
8. Testimonials (`testimonial-area section-bg`): background-image strip +
   carousel of 2 quotes — "You can't succeed if you just do what others
   do..." — Clifford Frazier (author + attribution).
9. Blog (`home-blog-area section-padding30`): "Our Latest News From Our
   Blog / Latest News From Blog" + 2 post cards — image, date badge
   ("24 Now"), category ("Properties"), title ("Footprints in Time is
   perfect House in Kurashiki" — paraphrase), "Read more »".
10. Footer (`footer-area footer-bg`, #0b0b1d): "Stay Updated / Subscribe
    Now" newsletter (email + square indigo button), "Let's Get Social"
    icons, 4 link columns (About Us: Online Learning, About Us, Careers,
    Press Center, Become an Instructor, Campus; Our Plans: Free Trial,
    Academic Solutions, Business Solutions, Government Solutions, Study;
    Admissions: Policy, Getting Started, Online Application, Visa
    Information, Tuition Calculator; Support: Contact Us, System
    Requirements, Register Activation Key, Site feedback — trim to 4–5
    links each). Bottom bar: copyright + **"Component Dock" link to
    https://www.componentdock.com/** (replaces "made with Colorlib" —
    REQUIRED, see conventions).

## Fidelity notes

- Flat, bold, generous whitespace; indigo accents pop against white/light
  sections; heavy (600/700) heading weights; square CTAs with the sweep
  hover (scaleX reveal of `#3e44ec` — approximate with a pseudo-element or
  a Tailwind `before:` scale-x transition).
- Placeholder images: `https://picsum.photos/seed/orenda-<n>/<w>/<h>`
  (hero: portrait of a student, e.g. seed orenda-1 800×840; course/blog
  thumbs 400×300; faculty portraits 350×450).
- Icons: `lucide-react` (graduation cap logo, search, social, category
  icons, chevrons, checkmarks).
- Fonts: "Josefin Sans" + "Sen" via Google Fonts `<link>` in `index.html`.
- Reuse `packages/ui` (Button, ButtonLink, cn) — do NOT duplicate.
- Base implementation on a simple existing one-pager app for conventions;
  keep the suite-standard dark-mode toggle (`.dark` class) — template is
  light by default.
- No ColorLib strings in any app file; provenance only in spec/TEMPLATES/PR.

## Tasks

- [ ] Write `openspec/specs/template-orenda/spec.md` (Gherkin requirements +
      scenarios) — DONE on main (this prep).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/orenda` (copy simplest existing app; rename package to
      `@free-react-templates/orenda`; `public/CNAME` =
      `orenda.free.componentdock.com`; homepage accordingly; `npm install`
      at root to register the workspace in package-lock.json).
- [ ] `index.html`: title "Orenda — Online Education Template", Josefin
      Sans + Sen font links.
- [ ] TDD: tests first for Header (utility bar, nav, search, mobile menu,
      aria-expanded), HeroSlider (slides, controls), Categories (cards,
      hover fill), Stats, PopularCourses, Faculty, About (checklist),
      Testimonials (carousel), Blog, Footer (newsletter, columns,
      Component Dock link), App composition; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Gate: `bash scripts/verify-app.sh orenda` + `npm run spec:validate`.
- [ ] PR: open `feat/template-orenda` → merge immediately (squash). PR body:
      source (ColorLib Onlineedu), preview URL, tokens, renames/placeholders.
- [ ] TEMPLATES.md bookkeeping on main after merge: Onlineedu `[ ]` → `[x]`
      (implementer, per FAST_MODE state D); update README structure +
      `docs/ai-context.md` app list.
