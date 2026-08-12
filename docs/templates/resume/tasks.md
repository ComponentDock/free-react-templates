# Resume (ColorLib Personalportfolio) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream (stream 3). The spec
> folder `openspec/specs/template-resume/` is the claim marker —
> implementers start here.

## Design notes (replication findings)

- **Original:** ColorLib "Personalportfolio" — personal portfolio website
  template (source: https://colorlib.com/wp/template/personalportfolio/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/personalportfolio/
  (HTTP 200, full rendered DOM + `assets/css/style.css` (56KB) + Bootstrap 4 +
  Owl Carousel + Slick + Slicknav + Animated Headline + Magnific Popup + Nice
  Select + Font Awesome 5 + Themify + Flaticon extracted 2026-08-12 during
  prep). Screenshot `personalportfolio-free-template.jpeg` (1200×946, AVIF)
  viewed in browser: light-grey hero, wavy bottom separator, red tagline +
  dark-blue serif headline, red "Learn More" + outlined "Hire Me", smiling
  portrait photo on the right, white two-column about, bold uppercase logo with
  red geometric mark.
- **Visual design:** clean, professional, airy personal portfolio — white /
  light-grey (#f9f9ff) canvas, coral-red (#ec5b53) accents (tagline, buttons,
  icon circles, CTA heading), dark-navy text (#000a2d), deep-blue hero headline
  (#002d5b), serif headings (Rufina) over Rubik sans body, tabbed image mosaic,
  photo CTA band, dark-navy footer (#080827).
- **Structure (1:1, section order):**
  1. Header (`.header-area`, sticky, white): logo left (red mark + uppercase
     "PORTFOLIO" wordmark); centered nav — Home, About, Services, Portfolio,
     **Page** (dropdown: Blog, Blog Details, Element, Portfolio Details),
     Contact; right red `.btn` "Get Free Consultent". Mobile: slicknav
     hamburger with same links.
  2. Hero slider (`.slider-area` > `.slider-active`): 2 identical slides
     `.single-slider.slider-height` (bg `h1_hero.jpg`, min-height 1000px /
     700px mobile): eyebrow "Get Every Single Solutions." (18px uppercase
     #ec5b53), h1 "I'm Designer Haris F. Watson" (70px 700 #002d5b, 60px
     mobile), paragraph, `.hero__btn`: red `.btn` "Learn More" (27px 44px
     padding) + `.border-btn` "Hire Me" (1px solid #e3c6c6, #464d65, radius
     5px, 25px 57px). Portrait photo right; wavy separator bottom.
  3. About (`.about-area section-paddingt30`): 2 text columns — left
     `.about-caption`: h3 "Designing With Passion While Exploring The World."
     (30px 700 #000a2d) + 2 paragraphs; right `.about-caption2`: h3 "Any Type
     Of Query & Discussion." + p "Late talk with me" + `.send-cv` link
     hire@colorlib.com (35px #000a2d underline) + themify arrow.
  4. Services (`.categories-area section-padding3`, shape bg top-left):
     `.section-tittle` h2 "What Services you will Get from me!" (48px 600
     #000a2d) + 3 centered `.single-cat` cards (border 1px #e1ebf7, radius
     6px, padding 61px 22px): `.cat-icon` 100px circle bg #fff4f4, icon 50px
     #ec5b53 (flaticon-pen / flaticon-speaker / flaticon-portfolio), h5 link
     (UI/UX Design, Digital Marketing, Website Design) + description.
  5. Portfolio (`.services-area services-padding`): same section heading +
     `.nav-tabs` (All, Branding, Logo, UI/UX, Web Design; 2px bottom
     underline) + `.tab-content` 5 panes; each pane = mosaic of 6 images
     (services1–6.png; col-lg-8 large + stacked col-lg-4 pair; full-width
     imgs, hover zoom).
  6. CTA band (`.wantToWork-area w-padding2`): bg section_bg02.jpg cover;
     heading "Dont worry for contact i`m available" (48px 700 #ec5b53); red
     "Contact Me Now" button.
  7. Testimonials (`.client-comments section-paddingt30`): heading "Some
     Possitive Feedback That Encourage Us" + slider of 3 cards: photo, name
     "Bradley Erickson", role "UI/UX Designer", quote.
  8. Contact (`.contact-info-area w-padding2`, bg section_bg04.jpg):
     h2 "If Not Now, When? Let's Work Together!" (48px #000a2d) + paragraph +
     form (Full Name / Email Address / Your Message / "Send Message"
     `.submit-btn2` full-width 60px #ec5b53 white 16px) + contact info:
     hireme@portfolio.com, "221B Baker Street, Post office Box 353",
     "Park Road, USA - 215431".
  9. Footer (`.footer-area` bg #080827): centered top — footer logo, email
     hireme@portfolio.com (50px white), address; bottom — copyright "Copyright
     © All rights reserved | This template is made with ♥ by Colorlib"
     (#393a50) + "Stay Connected" + 4 social icons (#848493).
  - Scroll-to-top `#back-top`: fixed 50px circle #ec5b53, white arrow,
    bottom-right.

## Design tokens

- Primary **#ec5b53** (coral red) — `.btn` bg (Learn More / Get Free
  Consultent / Contact Me Now), `.submit-btn2` (Send Message), hero eyebrow
  span, `.cat-icon` icon color, CTA band heading, `#back-top`.
- Hero headline **#002d5b** (deep blue) — `.slider-area .hero__caption h1`
  70px/700 (60px mobile).
- Headings/body **#000a2d** (dark navy) — body, `.section-tittle h2` 48px/600,
  `.about-area h3` 30px/700, `.send-cv a` 35px, `.contact-info` heading.
- Secondary **#999999** / **#888888** / **#464d65** (border-btn label); footer
  text **#393a50**, footer social **#848493**.
- Light surfaces **#f9f9ff** (hero/about tints), **#fff4f4** (icon circles),
  **#e1ebf7** (card borders), **#e3c6c6** (border-btn outline), **#e7ebf2**
  (tab underline track).
- Footer bg **#080827**.
- Fonts: **Rubik** (sans — nav/buttons/body, weights 300–900) + **Rufina**
  (serif — headings, 400/700). Google Fonts `<link>`.
- Buttons: `.btn` #ec5b53 bg / white / capitalize / Rubik / padding 27px 44px /
  radius 0; `.border-btn` 1px #e3c6c6 / #464d65 / radius 5px / 25px 57px,
  hover fills #ec5b53; `.submit-btn2` full-width 60px #ec5b53 white 16px.
- Rhythm: `.slider-height` min-height 1000px (700px mobile); ~100px section
  paddings; `.single-cat` 61px 22px; `.cat-icon` 100px circle.

## Implementation tasks (TDD, 100% coverage)

- [ ] Scaffold `apps/resume` (copy simplest existing app, rename package
      `@free-react-templates/resume`); `index.html` with Rubik + Rufina Google
      Fonts links + title "Resume — Personal Portfolio Template"
- [ ] Spec validation: `npm run spec:validate` (this spec)
- [ ] `@theme` tokens: `--color-brand: #ec5b53`, hero headline #002d5b, text
      scale (#000a2d/#999999/#888888/#464d65), light surfaces (#f9f9ff,
      #fff4f4, #e1ebf7), footer #080827; font-sans Rubik, font-serif Rufina
- [ ] Header (sticky white): logo mark + wordmark, centered nav with Page
      dropdown (Blog, Blog Details, Element, Portfolio Details), red "Get
      Free Consultent" button, mobile hamburger menu
- [ ] Hero slider: full-height photo bg (picsum), eyebrow #ec5b53, h1
      "I'm Designer Haris F. Watson" (serif 70px #002d5b), paragraph,
      "Learn More" (red) + "Hire Me" (outlined) buttons, portrait photo right
      (picsum), wavy separator, 2-slide auto-advance
- [ ] About: 2 columns — heading + 2 paragraphs left; "Any Type Of Query &
      Discussion." + "Late talk with me" + hire@colorlib.com link + ArrowRight
      icon right
- [ ] Services: heading + 3 cards (Pen/PenTool, Megaphone, Briefcase icons in
      #fff4f4 circles) — UI/UX Design, Digital Marketing, Website Design
- [ ] Portfolio: heading + tabs (All, Branding, Logo, UI/UX, Web Design) +
      5 mosaic panes × 6 picsum images (1 large + stacked pair), hover zoom
- [ ] CTA band: photo bg, heading "Dont worry for contact i`m available"
      (#ec5b53 48px), "Contact Me Now" button
- [ ] Testimonials: heading + 3-slide slider (photo, name, role, quote)
- [ ] Contact: photo bg, heading, form (Full Name / Email Address / Your
      Message / Send Message), contact details (email + Baker Street address)
- [ ] Footer: #080827, centered logo/email/address, ColorLib credit +
      "Stay Connected" social icons (lucide Twitter/Facebook/Instagram/Youtube)
- [ ] Scroll-to-top: fixed circular button appears on scroll, scrolls to top
- [ ] Tests for every section (RTL), 100% coverage
- [ ] Verify: `scripts/verify-app.sh resume` (typecheck + lint + knip +
      fallow + coverage + build)
- [ ] PR: `feat: Resume — Personal Portfolio landing template (ColorLib
  Personalportfolio)`, merge immediately with `gh pr merge --squash`;
      record Surge URL + homepage in TEMPLATES.md, mark `[~]`→`[x]` on the
      Personalportfolio row (line 473)
