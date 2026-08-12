# Semester (ColorLib Courses) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-semester` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Courses" — education / online-learning platform
  landing page (page title "Courses | Education"; source:
  https://colorlib.com/wp/template/courses/). Listed in TEMPLATES.md under
  Education (line 1626) — dup row also at line 366 under Bootstrap; one
  recreation covers both rows, mark both `[x]` with the same surge URL at
  bookkeeping time (do NOT re-implement the dup).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/courses/`
  (HTTP 200, ~40KB HTML). DOM + `assets/css/style.css` (65KB,
  Bootstrap + owl-carousel based) extracted and analyzed. Screenshot
  `courses-free-template.jpg` + live preview viewed in browser: flat-design
  SaaS-style education aesthetic; hero = full-screen indigo→magenta gradient
  with faint cloud shapes, transparent white header, left-aligned white
  headline/subtext, orange "Join for Free" CTA; right side is a flat vector
  illustration (person + giant phone with video UI + books); indigo
  `#4255A4` footer.
- **Brand color is indigo `#4255A4`, NOT Bootstrap blue** — headings,
  footer bg, topic hover overlay `rgba(66,85,164,0.7)`, card-button text.
  Accent orange `#FF9F67` for primary buttons / play button / outline
  borders. Hover purples `#AE59FF` (btn sweep) + `#C86FFF` (secondary).
  Sticky header gradient `#c054ff → #5274ff`; icon circle gradient
  `#eae2fe → #a376ff → #ea68ff`.
- **Fonts:** Josefin Sans (headings; section h2 42px weight 600; hero h1
  60px weight 700 white) + Mulish (body 16px; `p` 16px/30px `#10285d`).
- **Buttons:** `.btn` orange 5px radius padding 25px 38px weight 600, hover
  scaleX sweep `#AE59FF`; `.btn.btn3` (Log in) transparent 1px white
  border; `.border-btn` 1px orange / orange text, radius 5px, padding
  17px 42px, hover scaleY sweep fill; `.border-btn2` full-width 1px
  `#E2E4FF` / text `#4255A4` (course-card "Find out more").
- **Hero** = single slide (NOT a slider on this template — `slider-area`
  with one `.hero__caption`; the `slider-area2`/hero2 variant is unused on
  the home page). min-height 854px, bg image cover. Recreation: CSS
  gradient (indigo `#4255A4` → magenta `#C86FFF`/`#AE59FF`), text left,
  picsum image in a rounded frame on the right (original vector
  illustration is not copyable) or omit the right visual.
- **Featured courses:** owl carousel of 4 `.properties` cards — recreation
  as a responsive grid (4 cols on xl, 2 on md, 1 on sm). Each card: image
  with dark top overlay (rgba(0,1,2,0.5), radius 10px top), category tag,
  title link, blurb, star rating "(4.5) based on 120", price "$135",
  full-width "Find out more" outline button.
- **Learn new skills (about-area1):** text LEFT (purple icon circle +
  h2 + paragraph + 3 checkmark rows), image RIGHT with 60px orange round
  play button + faint orange halo. **Learner outcomes (about-area3):**
  image LEFT, text RIGHT (h2 + 3 checkmark rows). **CTA (about-area2):**
  image LEFT, text RIGHT (h2 + paragraph + orange "Join now for Free").
  Checkmark icon: `assets/img/icon/right-icon.svg` → lucide `Check` in a
  small circle.
- **Top subjects:** 8 tiles (4-col grid), rounded images (12px), centered
  white uppercase label (20px/700), hover = indigo overlay. "View More
  Subjects" outline button below.
- **Community experts:** 5 centered cards (photo, name, role). Names in
  the original: Mr. Urela / Mr. Uttom / Mr. Shakil / Mr. Arafat /
  Mr. saiful — paraphrase freely, keep the same kind of content.
- **Footer:** solid indigo `#4255A4`; wordmark + blurb + socials
  (Twitter/Facebook/Pinterest) | Our solutions column | Support column
  (same 5 links: Design & creatives, Telecommunication, Restaurant,
  Programing, Architecture) | centered copyright bar with ♥ credit.
  Footer MUST link https://www.componentdock.com/ per repo conventions;
  NO Colorlib reference anywhere in app code (provenance lives only in
  spec/TEMPLATES/PR).

## Tasks (implementation order)

1. Scaffold `apps/semester` (copy the simplest existing app; rename package
   to `@free-react-templates/semester`; `npm install --package-lock-only` at
   root; set `public/CNAME` = `semester.free.componentdock.com`, `homepage`
   in package.json).
2. `index.html`: Google Fonts links — Josefin Sans (300–700) + Mulish
   (400–700); `src/index.css` `@theme` tokens: `--color-brand` `#4255A4`,
   `--color-body` `#10285d`, `--color-accent` `#FF9F67`,
   `--color-hover` `#AE59FF`, `--color-purple` `#C86FFF`,
   `--color-card-border` `#E2E4FF`.
3. `Navbar` — wordmark + links + Join/Log in buttons + mobile toggle
   (aria-expanded). Sticky gradient on scroll (optional).
4. `Hero` — gradient bg, h1/subtext/CTA, optional right-side picsum image
   (rounded frame).
5. `Services` — 3 icon cards (lucide icons; text paraphrased).
6. `FeaturedCourses` — 4 course cards (grid), rating stars (lucide `Star` /
   `StarHalf`), price, "Find out more" button.
7. `LearnNewSkills` — split; purple icon circle + h2 + p + 3 check rows +
   image with decorative play button.
8. `TopSubjects` — 8 tiles + hover overlay + "View More Subjects" button.
9. `LearnerOutcomes` — split, image + h2 + 3 check rows.
10. `CommunityExperts` — 5 instructor cards.
11. `NextStepCta` — split, image + h2 + p + "Join now for Free" button.
12. `Footer` — indigo bg, wordmark + blurb + socials (inline SVG brand
    icons — lucide has none), Our solutions + Support columns, copyright
    bar with Component Dock link.
13. Tests per section (Gherkin scenarios from the spec), 100% coverage;
    `npm run verify:app semester`.
14. Bookkeeping after merge: `[x]` both Courses rows (lines 366 + 1626)
    with `https://semester.free.componentdock.com`, `npm run
readme:status`, README status row.

## Fidelity checkpoints

- [ ] Gradient hero with white left-aligned text, orange CTA — not a photo
      hero
- [ ] 4 course cards with rating + price + full-width outline button
- [ ] Checkmark rows in both split sections; play button decorative
- [ ] 8 subject tiles with uppercase white labels + indigo hover
- [ ] Footer indigo `#4255A4`, Component Dock link present
