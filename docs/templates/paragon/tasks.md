# Paragon (ColorLib Ideal) — Tasks & Design Notes

> Prep artifacts for the PREP stream. Implementation ships later on
> `feat/template-paragon` by an implementer stream.

## Design notes

- **Original:** ColorLib "Ideal" — free interior design / architecture
  website template. Source: https://colorlib.com/wp/template/ideal/.
  TEMPLATES.md line 419 (Bootstrap category; also duplicated at lines 1048
  Business and 1970 Interior Design — mark ALL THREE `[x]` when done).
- **Live preview DOM analyzed:** `https://preview.colorlib.com/theme/ideal/`
  (HTTP 200, 20.0KB) + stylesheet `css/style.css` (23.7KB, SCSS-compiled) +
  bootstrap.min.css (for `.btn-primary`/`.text-primary`). Full rendered DOM +
  accessibility tree extracted; computed styles checked in a real browser
  (navbar transparent over hero, logo #207561, active link green). Screenshot
  `ideal-free-template.jpg` (1200×946) confirms the visual design: transparent
  navbar over a bright interior photo (dining table, black chairs, shelf
  plants), lowercase green "ideal" logo centered, white nav links; hero slide
  "The Best Interior Design" white over photo + green "Get A Quote" square
  button + 3 carousel dots; white two-column intro (left uppercase mission
  heading + green "More About Us" arrow; right green-bordered box "The Best
  In Interior Design" / "YEARS OF EXPERIENCE" / huge "75" with light-green
  circle). Minimalist architectural aesthetic, DM Sans, sage green on white.
  NOTE: the screenshot's top "search bar" is browser chrome, NOT part of the
  template.
- **Structure observed (1:1):**
  1. `header.site-navbar` in `div.sticky-wrapper` (absolute, top 0, full
     width, z-index 1999, padding 1rem): 3-col row — left nav Home
     (active) / Project / Services; center `.site-logo` "Ideal" (1.7rem,
     lowercase, #207561); right nav About / Blog / Contact; mobile
     hamburger (white icon) + `.site-mobile-menu` slide-in (300px right,
     white, shadow -10px 0 20px -10px rgba(0,0,0,0.1)).
  2. `div.owl-carousel.owl-1` — hero: 3 × `ftco-blocks-cover-1 >
.ftco-cover-1` (min-height 600px, bg photo cover), centered
     `col-lg-6`: h1 white 3rem — "Welcome to Ideal." / "Enhance Human
     Experience" / "The Best Interior Design" (brand name in green span),
     lorem p, `a.btn.btn-primary.px-4.py-2.rounded-0` "Get A Quote"
     (SQUARE corners); `.owl-1 .owl-dots` bottom 50px, inactive #fff,
     active #207561.
  3. `div.site-section` — intro: left `col-md-5` `h2.heading-39291`
     uppercase 20px bold #000 "We Create Building, and Interior Design
     That Enhance The Human Experience" + lorem `p.mb-5` + `a.more-39291`
     "More About Us"; right `col-md-4.ml-auto` `.year-experience-99301`
     (4px solid #207561 border, padding 40px, white bg, green-tinted
     offset block rgba(32,117,97,0.1) top -31 / left -31): heading +
     "YEARS OF EXPERIENCE" (uppercase 14px #888 bold lh 1) + `.number`
     "75" (5rem bold #000, 70px circle rgba(32,117,97,0.5) behind).
  4. `div.site-section` — featured services: `h2.heading-39291` "Our
     Featured Services" (br split) + lorem + "Learn More" link; 2×2 grid
     `.media-92812` (col-md-6 pairs): image + caption label (Architecture,
     Gym & Arena, Interior Design, Product Design) + `h3 > a` uppercase
     title + "Learn More" arrow link.
  5. `div.site-section` — latest projects: `h2.heading-39291` "Latest
     Projects" + right-aligned "View All Projects" link; `.media-29191`
     (margin 0 10px): `.owl-2` carousel (3 photos) + `.text` (white,
     padding 50px, margin-top -100px, z-index 9): caption "Interior
     Design" (#b3b3b3), `h3` uppercase "Obcaecati Architecto", lorem,
     "View This Project" link.
  6. `div.site-section.section-4` (white bg) — testimonials: centered
     `.slide-one-item` slider — 3 blockquotes (green quote icon 2rem,
     p 1.5rem, author "James Smith / Mike Dorney — CEO and Co-Founder");
     `.slide-one-item .owl-dots` bottom -20px, inactive #ccc, active
     #207561.
  7. `div.site-section` — blog: `h2.heading-39291` "Blog and Updates" +
     lorem; 4 × `.post-entry-1.h-100` (col-lg-3 col-md-6 mb-5): image
     (hover: green #207561 overlay `:before` opacity 0→1) +
     `.post-entry-1-contents` (white, padding 20px): date "July 17,
     2019", `h2` uppercase "Iusto Quos Veniam Magni Totam",
     "Continue Reading" link.
  8. `footer.site-footer` (padding 8em 0 desktop / 4em mobile, bg
     dot-grid.png light pattern): "About Us" (lorem) | "Features" links
     (About Us, Testimonials, Terms of Service, Privacy, Contact Us) |
     "Subscribe to Newsletter" form (input height 55px placeholder
     "Enter Email" + green Subscribe button) | "Follow Us" 4 social
     icons; bottom `border-top` (rgba(255,255,255,0.1)) copyright bar
     (Colorlib credit → repo-standard).
- **Tokens (from css/style.css):** brand green #207561 (23 uses: `.text-
primary`, `.btn-primary` bg, logo, active/hover links, arrows, active
  dots, borders, circles rgba(32,117,97,0.5), offset block
  rgba(32,117,97,0.1), quote icon, blog hover overlay; btn hover #185748,
  active #154d40, focus ring rgba(65,138,121,0.5)); ink #000 headings/body
  (22 uses); whites #fff / #f8f9fa / #f7f7f7 / #e6e6e6 / #e3e3e3; dots #ccc;
  borders #ced4da / #dee2e6; captions #b3b3b3; labels #888; dark teal-gray
  #364d59; font 'DM Sans' everywhere; `.btn-primary` = bg #207561 white
  text, hero variant rounded-0 (square); `.more-39291` = uppercase 12px bold
  - arrow (icomoon \e317 rotated 180°) → lucide; `.heading-39291` =
    uppercase 20px bold #000 mb 30px; hero h1 3rem white; logo 1.7rem;
    footer-heading 16px; testimonial p 1.5rem; number 5rem; navbar states:
    transparent over hero (links rgba(255,255,255,0.7), active #207561) →
    `.sticky-wrapper.is-sticky` white bg + shadow 4px 0 20px -5px
    rgba(0,0,0,0.2) + black links + green active; `.site-section` padding
    2.5em 0; hero min-height 600px; media-29191 text mt -100px padding 50px;
    year-experience border 4px padding 40px; post contents padding 20px.
- **Recreation decisions:** name "Paragon" (wordmark "Paragon" lowercase,
  package @free-react-templates/paragon, app apps/paragon). Transparent
  navbar over hero → white sticky + shadow + black links on scroll; split
  menus (Home active / Project / Services | About / Blog / Contact); mobile
  slide-in menu. Hero slider (3 slides, auto-advance + dots + prev/next,
  600px) with centered white headline (green brand span) + square green
  "Get A Quote" button. Intro 2-col with green-bordered experience box
  ("75" + circle + offset block). Featured services 2×2 cards (category
  labels Architecture / Gym & Arena / Interior Design / Product Design).
  Latest projects carousel + overlapping white caption panel. Testimonials
  centered slider (green quote icon, authors "… — CEO and Co-Founder").
  Blog 4 cards (green hover overlay, date, uppercase title). Footer light
  dot-grid pattern (CSS radial-gradient), About Us / Features / Subscribe
  form (email + green button) / Follow Us icons, repo-standard credit
  "© 2026 Paragon. All rights reserved." + "recreation of ColorLib Ideal".
  Images picsum-seeded (picsum.photos/seed/paragon-N/w/h); Google Fonts DM
  Sans via <link>; lucide-react icons.

## Task outline (implementer)

- [ ] Scaffold `apps/paragon` (copy simplest existing app; package
      `@free-react-templates/paragon`; vite.config injectUiSource()).
- [ ] `src/data.ts` — nav links (Home active / Project / Services | About /
      Blog / Contact), hero slides (3: headline, subtext), service cards
      (4: category, title), project slides + caption, testimonials (3:
      quote, author), blog posts (4: date, title), footer links + socials.
- [ ] `Navbar.tsx` — transparent over hero (white links, green active),
      sticky white + shadow + black links on scroll, centered green "Paragon"
      logo, split menus, mobile hamburger slide-in (aria-expanded).
- [ ] `Hero.tsx` — full-width photo slider (auto-advance + dots, 600px),
      centered white headline with green brand span, subtext, square green
      "Get A Quote" button.
- [ ] `Intro.tsx` — left uppercase mission heading + "More About Us" arrow
      link; right green-bordered experience box ("The Best In Interior
      Design", "YEARS OF EXPERIENCE", "75" + translucent green circle +
      offset green-tinted block).
- [ ] `Services.tsx` — "Our Featured Services" heading + 2×2 cards (photo,
      category label, uppercase title, "Learn More" arrow link).
- [ ] `Projects.tsx` — "Latest Projects" + "View All Projects" link;
      carousel with overlapping white caption panel (mt -100px) + "View
      This Project" link.
- [ ] `Testimonials.tsx` — centered slider (green quote icon, 1.5rem text,
      author "… — CEO and Co-Founder", green dots).
- [ ] `Blog.tsx` — "Blog and Updates" + 4 post cards (photo w/ green hover
      overlay, date, uppercase title, "Continue Reading").
- [ ] `Footer.tsx` — light dot-grid bg, About Us / Features links /
      Subscribe form (email + green button) / Follow Us socials, copyright
      bar with repo-standard credit.
- [ ] `App.tsx` — compose sections 1:1; document title "Paragon — Interior
      Design".
- [ ] Tests (100% coverage, scenario-style per spec); gate:
      `npm run verify:app -- paragon`.
- [ ] Commit `feat: add Paragon (ColorLib Ideal) recreation`; PR with source
      slug, preview URL, tokens, renames; squash-merge immediately.
- [ ] After merge: mark TEMPLATES.md lines 419, 1048, 1970 `[x]` + surge URL + homepage, `npm run readme:status`.
