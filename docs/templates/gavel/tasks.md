# Gavel (ColorLib Judge) — Tasks & Design Notes

> Prep artifact written on `main` by the prep stream so implementers start
> instantly. Implementation ships later on `feat/template-gavel`.

## Design notes (replication findings)

- **Original:** ColorLib "Judge" — law firm / legal services template
  (source: https://colorlib.com/wp/template/judge/).
- **Preview DOM analyzed:** https://preview.colorlib.com/theme/judge/
  (HTTP 200; ~49 KB HTML + `css/style.css` ~74 KB parsed for tokens).
  Title tag: "Judge - Free Bootstrap 4 Template by Colorlib". Bootstrap 4 +
  owl-carousel + flaticon/icomoon icon fonts, AOS animations.
- **Visual design (from screenshot `judge-free-template.jpg`):** dark
  cinematic hero — blurred lawyer in a suit holding a golden scale of
  justice; white bold "The Greatest & Strongest Firm You Can Trust" over a
  black overlay; sage-green accents (logo, subheading); two text-style CTAs
  with arrows. Below: numbered strip 01–04, then split About (Lady Justice
  statue photo left, white text right, green "Welcome to Judge" eyebrow).
  Rest of the page from preview DOM + CSS.
- **Structure (1:1, section order):**
  1. Navbar `.ftco_navbar.bg-dark` — brand "Judge" + span "A Law Firm";
     links: Home, About Us, Practice Areas, Case Studies, Attorneys, Blog,
     Contact; toggler labeled "Menu".
  2. Hero `.hero-wrap.js-fullheight` — bg photo `images/bg_1.jpg` +
     `.overlay` black 0.5; left col-md-6: subheading "Product Liabilty &
     Personal Injury", h1 "The Greatest & Strongest Firm You Can Trust"
     (48px/700 white), CTAs `.btn-custom` "Get Legal Advice →" /
     "Request A Quote →" (16px/500 white, arrow icon, no bg).
  3. Services strip `.services-section` (dark, sits over hero bg) — 4
     cols: 01 Get Your Legal Advice / 02 Work with Expert Lawyers / 03
     Have Great Discounted Rates / 04 Review Your Case Documents; `.num`
     green 18px/600; h3 links white on desktop.
  4. About `.ftco-section.ftco-no-pt.ftco-no-pb` — left: `.img-video`
     (about.jpg) + `.icon-video` 80px green circle with play icon
     (vimeo popup); right: eyebrow "Welcome to Judge" (green 16px/700),
     h2 "We Always Fight For Your Justice to Win" (40px/700), 3 lorem
     paragraphs, counter `.number[data-number=40]` + "Years of
     Experienced" (animateNumber 0→40).
  5. Practice Areas — centered eyebrow + h2 "Practice Areas"; 8 tiles in
     4-col grid (2 rows): Family Law, Business Law, Insurance Law,
     Criminal Law, Property Law, Employment Law, Fire Accident, Financial
     Law. `.practice-area`: padding 25px, hairline borders
     rgba(0,0,0,0.08) (border-left + border-bottom), green 50px icon
     glyph in circle, h3 20px black; hover → icon circle bg white + icon
     black.
  6. Attorneys — centered "Our Attorney" / "Our Legal Attorneys"; 4
     `.block-2` flip cards (front: photo + name + role box; back: quote
     - author row): Richard Anderson/Civil Lawyer, Jefford
       Maxillin/Business Lawyer, Carlos Obing/Criminal Defense, Nathan
       Smith/Insurance Lawyer.
  7. Consultation `.ftco-consultation.img` — bg photo `bg_2.jpg` +
     overlay; right col-md-6: "Booking an Appointment" / "Free
     Consultation"; form: Your Name, Your Email, Subject, Message
     textarea (rows 7), submit `.btn.btn-primary py-3 px-4` "Send
     message".
  8. Case studies — "Explore Case Studies" / "1000+ Completed Cases
     Successfully"; 6 `.case` cards 3-col (height 300px, shadow
     `0 5px 21px -14px rgba(0,0,0,0.14)`): title "Legal Separation" +
     tag "Corporate" over image.
  9. Testimonials `.testimony-section` — "Testimonial" / "Happy Clients";
     owl-carousel of 5 slides: white card (shadow), quote, round avatar,
     name "Roger Scott" + "Marketing Manager".
  10. Blog `.bg-light` (#f8f9fa) — "Our Blog" / "Recent Blog"; 3 cards:
      image, green date chip `.topper` overlapping top-left (day "15" +
      "2019 August" white, triangle notch via border trick), heading
      "All you want to know about industrial laws", blurb.
  11. Gallery `.ftco-gallery` — 6 image tiles (col-md-2), Instagram icon
      overlay on hover.
  12. Newsletter `.bg-primary` — green band, white h2 28px "Subcribe to
      our Newsletter" left; right: email input + "Subscribe" submit.
  13. Footer `.ftco-footer` bg **#222831** — widgets: About Judge (blurb +
      twitter/facebook/instagram icons), Practice Areas links (8, green
      arrows), Business Hours (Opening Days: Mon–Fri 9am to 20pm, Sat
      9am to 17pm; Vacations: All Sunday Days, All Official Holidays),
      Have a Questions? (address "203 Fake St. Mountain View, San
      Francisco, California, USA", phone +2 392 3929 210, email
      info@yourdomain.com); centered copyright bar (ColorLib credit →
      original attribution).
- **Design tokens extracted from the preview CSS:**
  - Font: **Poppins** (300/400/500/600/700), Google Fonts. (Playfair
    Display @font-face loaded in head but unused in style.css — skip.)
  - Brand sage green: **#83b582** — buttons (.btn.btn-primary fill;
    hover transparent + green text), newsletter band (.bg-primary),
    section eyebrows (16px/700), services numbers (18px/600), practice
    icons (50px), video button (80px circle), blog date chip + notch,
    nav hover/active, footer link arrows.
  - Dark: **#222831** footer; hero/consultation overlay black 0.5; navbar
    dark. Light section bg **#f8f9fa** (blog).
  - Headings: h1 48px/700 white (hero); h2 40px/700 black (sections);
    h3 20px black (practice tiles); widget titles 20px/400 white.
  - Body grays: #6c757d / #666666; hero subheading white 0.9 opacity.
  - Buttons: Bootstrap 4 base (padding 0.375rem 0.75rem, radius
    **0.25rem**, 1px border); hero CTAs text-style with arrow icons;
    consultation submit py-3 px-4 green fill.
  - Radii: 0.25rem buttons; 50% circles (video, icons, avatars). No pill
    shapes.
  - Hairline grid borders rgba(0,0,0,0.08); card shadow
    `0 5px 21px -14px rgba(0,0,0,0.14)`.
- **Recreation decisions:** hero/consultation photos → seeded picsum with
  `bg-black/50` overlay; icons → lucide (practice: Scale, Briefcase,
  Shield, Handcuffs, Home, Users, Flame, Banknote; Play for video;
  Instagram for gallery; ArrowRight for CTAs/footer links); brand social
  icons → inline SVG (lucide removed brand icons); people/case/blog/gallery
  imagery → `picsum.photos/seed/gavel-<n>/<w>/<h>`; Poppins via Google
  Fonts `<link>`; #83b582/#222831/#f8f9fa in `@theme`; no assets copied.

## Implementation tasks

1. Scaffold `apps/gavel` (copy the simplest existing app, rename package to
   `@free-react-templates/gavel`), register workspace + `npm install` at
   root (lockfile!), `injectUiSource()` in vite.config.ts.
2. `src/index.css`: `@theme` tokens — `--color-brand: #83b582`,
   `--color-ink: #222831`, `--color-mist: #f8f9fa`; font
   `--font-sans: "Poppins", sans-serif`.
3. `src/components/Navbar.tsx` — dark navbar: "Gavel" + "A Law Firm"
   tagline left; links (Home, About Us, Practice Areas, Case Studies,
   Attorneys, Blog, Contact; hover/active → green); mobile toggle with
   "Menu" label + collapsible menu.
4. `src/components/Hero.tsx` — min-h-screen bg (picsum seed gavel-1) +
   black/50 overlay: eyebrow "Product Liability & Personal Injury" (white
   ~90%), h1 48px/700, two text CTAs "Get Legal Advice" / "Request A
   Quote" with ArrowRight icons.
5. `src/components/Services.tsx` — 4 numbered items (01–04, green nums,
   white headings) in a dark 4-col strip.
6. `src/components/About.tsx` — split: left image + green 80px play button
   (links to video); right eyebrow "Welcome to Gavel", h2 "We Always Fight
   For Your Justice to Win", paragraphs, count-up counter "40 Years of
   Experienced".
7. `src/components/PracticeAreas.tsx` — 8 tiles in a 4-col bordered grid
   (hairline borders), green lucide icon medallion, h3 + blurb; hover →
   white circle + black icon.
8. `src/components/Attorneys.tsx` — 4 cards (photo, name, role; flip/hover
   reveals quote + author).
9. `src/components/Consultation.tsx` — dark bg + overlay, right half:
   "Booking an Appointment" / "Free Consultation" + form (Name, Email,
   Subject, Message) with green "Send message" submit; prevent default.
10. `src/components/CaseStudies.tsx` — "Explore Case Studies" / "1000+
    Completed Cases Successfully" + 6 image cards (3-col, ~300px, shadow,
    centered title + "Corporate" tag).
11. `src/components/Testimonials.tsx` — "Testimonial" / "Happy Clients" +
    slider (5 slides: quote, round avatar, name + role; arrows/dots).
12. `src/components/Blog.tsx` — bg #f8f9fa; "Our Blog" / "Recent Blog" +
    3 cards with green date chip (day + month/year, triangle notch).
13. `src/components/Gallery.tsx` — 6 image tiles, Instagram icon on hover.
14. `src/components/Newsletter.tsx` — green band: white headline left,
    email input + "Subscribe" right; prevent default.
15. `src/components/Footer.tsx` — bg #222831: About + social (inline SVG),
    Practice Areas links (green arrows), Business Hours, Have a
    Questions? (address/phone/email — compute tel: href at runtime, no
    literal tel: URIs in source); copyright bar with original attribution.
16. `src/App.tsx` — compose Navbar (banner) + main(Hero, Services, About,
    PracticeAreas, Attorneys, Consultation, CaseStudies, Testimonials,
    Blog, Gallery, Newsletter) + Footer (contentinfo); document title
    "Gavel — Law Firm Template".
17. Tests (TDD, 100% coverage): Navbar (brand, links, hover, mobile menu),
    Hero (eyebrow, headline, CTAs), Services (4 items, numbers),
    About (play button, counter), PracticeAreas (8 tiles, hover),
    Attorneys (4 cards, flip), Consultation (form fields, submit
    prevention), CaseStudies (6 cards, tags), Testimonials (slides,
    cycling), Blog (cards, date chip), Gallery (6 tiles), Newsletter
    (form, submit prevention), Footer (widgets, hours, contact,
    copyright), App composition + landmark roles.
18. Gate: `npm run verify:app -- gavel`; PR to main, merge immediately,
    TEMPLATES.md `[~]`→`[x]` + surge URL + `npm run readme:status`.

## Verification checklist (spec)

- `npm run spec:validate` passes
- 100% coverage on `apps/gavel`
- `npm run verify:app -- gavel` green
- Full gate green in CI on merge
- Section order 1:1 vs preview; tokens #83b582/#222831/#f8f9fa, Poppins
  via `@theme`
- No ColorLib assets copied (picsum + Google Fonts + lucide + inline SVG
  brand icons only)
