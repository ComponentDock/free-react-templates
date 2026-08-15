# Ascent (ColorLib "Startup 2") — Tasks & Design Notes

> Prep artifact. Implementation ships on `feat/template-ascent`.

## Design notes (replication findings)

- **Original:** ColorLib "Startup 2" — free startup & agency HTML template
  (page title "StartUp"; source: https://colorlib.com/wp/template/startup-2/).
  Listed in TEMPLATES.md under Bootstrap category (line 503; duplicate rows
  at line 2089 and line 2861 — same template, one app only).
- **Preview REACHABLE (HTTP 200):**
  `https://preview.colorlib.com/theme/startup2/`. DOM fetched
  (`/tmp/startup2-preview.html`, 32,498 bytes) + stylesheet `css/style.css`
  (`/tmp/startup2-style.css`, 144,147 bytes) + screenshot
  (`startup2-free-template.jpg`, 1200×946, viewed in browser). All
  references verified live; screenshot cross-checks the DOM (dark hero with
  purple/black overlay, indigo #615CFD CTAs, 3 bordered service cards).
- **Structure (top → bottom, single page):**
  1. Header — transparent-over-hero bar: wordmark "Ascent", nav (Home,
     Services, Portfolio, Pages, Blog, Contact), "Say Hello" CTA right
     (indigo boxed button).
  2. Hero — full-width dark cover image + indigo/black gradient overlay;
     headline "Startup you can build a website online using the Bootstrap
     builder." (reword) + "Visit Our Works" indigo CTA.
  3. Services — white; label "Services" (indigo 14px), heading "With more
     than 20 years of experience we can deliver the best product design.",
     3 cards (Graphic design / Web design / Mobile app): line icon (lucide:
     `Palette`, `Layout`, `Smartphone`), title, muted p; 2px #E8E8E8
     border, 5px radius, hover → indigo border.
  4. About — dark #1F1F1F band; photo left, text right (label "About Us"
     white, heading "Empowering individuals", paragraph + quote, "About Us"
     indigo button).
  5. Portfolio — white; "Featured Works" + muted p; 5 work cards (first
     col-lg-8 large): photo + hover overlay (category "App Design"-style,
     title, "View" button).
  6. How we work — light; "How we work" heading, quote line, paragraph,
     play button + "Watch Video" label.
  7. Team — white; "Our Creative Team" + muted p; 4 cards: Brandon Yeald
     (Founder & CEO), Calvin Anderson (Graphics Designer), Roman Solo
     (Wordpress Developer), Yeald Kin (Software Engineer); photo + hover
     social overlay (facebook, twitter, instagram).
  8. Testimonials — dark cover-image band; 3 slides: quote mark, paragraph,
     author thumb + Robert Thomson / Business Owner; prev/next + autoplay.
  9. Contact — white; "Get in Touch" + muted p; form: Your Name, Email,
     Subject (2-col row), Message textarea, "Send Message" indigo button;
     zod validation + success confirmation.
  10. Footer — dark; wordmark left, menu links center (About, Services,
      Portfolio, Pages, Blog, Contact), social icons right; "Made with
      Component Dock" line.
- **Design tokens (from css/style.css):** brand indigo #615CFD (CTAs,
  labels, hover); dark ink #1F1F1F (about bg, headings); border #E8E8E8
  (service cards); muted #999999; fonts Muli (body) + Roboto (headings,
  labels, team names) via Google Fonts; buttons `padding: 12px 33px` flat
  indigo, hover transparent + indigo border; section titles 40px/52px 400
  Roboto; hero 900px tall.

## Tasks

- [x] Fetch preview DOM + CSS; extract structure + tokens (this file + spec)
- [x] View screenshot; note visual design (spec)
- [x] Write openspec/specs/template-ascent/spec.md
- [ ] Scaffold apps/ascent (copy sonata: data.ts, icons.tsx, setup polyfill)
- [ ] TDD: tests → implementation for Navbar, Hero, Services, About,
      Portfolio, HowWeWork, Team, Testimonials, Contact, Footer, App
- [ ] 100% coverage; bash scripts/verify-app.sh ascent
- [ ] npm run spec:validate
- [ ] PR + immediate merge; bookkeeping ([x] + URL + homepage + README)
