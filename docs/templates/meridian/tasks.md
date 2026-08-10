# Meridian (ColorLib Consulting) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-meridian` by an implementer stream.

## Design notes (replication findings)

- **Original:** ColorLib "Consulting" — free Bootstrap 4 consulting-agency
  website template (source: https://colorlib.com/wp/template/consulting/;
  preview title "Consulting &mdash; Website Template by Colorlib"). Listed
  in TEMPLATES.md under Bootstrap (line 364; slug repeats at line 952 under
  Business — one recreation covers both dup rows). New name: **meridian**
  (a line of longitude / peak — fits a consulting brand; "vantage" is
  unavailable: `apps/vantage` + `template-vantage` are the ColorLib
  "Konstruct" corporate page).
- **Live preview REACHABLE:** `https://preview.colorlib.com/theme/consulting/`
  (HTTP 200, ~18.6KB). CSS: `css/style.css` (~19.5KB custom theme) +
  themed `bootstrap.min.css` (`.bg-primary{background-color:#1fab89!important}`),
  owl.carousel, fancybox, aos, eticons + icomoon + flaticon icon fonts.
  Fonts: **Poppins** + **Source Serif Pro** (Google Fonts). Screenshot
  downloaded (`consulting-free-template.jpg`, actually AVIF, ~108KB);
  vision check + live-render computed styles both confirm: headline on
  white above the team photo band (the photo is LIGHT — pale concrete wall
  — so black text works over it).
- **Structure (1:1, section order from the DOM):**
  1. Navbar (`header.site-navbar`): absolute, transparent over hero; brand
     "Meridian" left (Poppins uppercase, black → `#1fab89` when sticky);
     links Home / About / Services / Blog / Contact (Poppins,
     `rgba(0,0,0,.7)`, hover `#000`). Sticky: white bg + shadow
     `4px 0 20px -5px rgba(0,0,0,.2)`. Mobile: hamburger → slide-in menu.
     NO CTA button.
  2. Hero text band (`div.site-section-cover`, white, ~450px desktop):
     centered h1 "We are consulting agency based in New York City" — Poppins
     64px/900 black. Text only.
  3. Photo band (`div.site-section-cover.full-screen`): EMPTY div,
     `height: 100vh; min-height: 755px`, inline
     `background-image: url('images/hero_1.jpg')`, cover, center — full-bleed
     team photo, no content.
  4. Services (`div.site-section`): header row `mb-5` — col-md-4 eyebrow
     `h5.heading-caps` "Services" (13px/700 uppercase ls .2rem `#1fab89`) +
     h2 (32px/700 black) — and col-md-8 row of THREE `col-md-4`
     `service-29191.d-flex` cards: `wrap-icon` span (eticons glyph 4rem
     `#d1d1d1`; et-toolbox / et-genius / et-chat) + h3 (20px/900 black) +
     lorem p (Source Serif Pro 300 16px `#6c7b95`). Items: Consultation /
     Innovative Ideas / 24/7 Support. Source repeats the SAME lorem ×3 →
     distinct paragraphs.
  5. Testimonials (`div.site-section.bg-dark`, `#343a40`): owl-carousel of
     FOUR `media-29191` slides — blockquote Poppins 20px white (pb 40px mb
     40px + 40×3px `rgba(255,255,255,.5)` underline :after) + `vcard-91123`
     row: 60px circular avatar (`border-radius: 50%`) + "by <Name>" + role.
     Source repeats the same quote + "by John Freeman — CEO Co-Founder" ×4 →
     distinct quotes + names. Owl dots: 10px circles, bottom -3rem.
  6. Office Gallery (`div.site-section.pb-0`): same header pattern —
     eyebrow "Office Gallery" + h2 + slate paragraph; then
     `container-fluid.px-0 > row.no-gutters` of SIX `col-md-4` photos
     (img_1..6), edge-to-edge 3-up grid.
  7. Footer (`footer.site-section.pb-0.bg-primary`, bg `#1fab89`): row —
     col-md-3 `site-logo-footer` "Meridian" (Poppins uppercase bold, WHITE
     on the rendered page — the raw CSS says `#1fab89` but a later rule
     overrides to white) + col-md-8 ml-auto row of THREE col-md-4 columns
     (`h3.footer-heading` white 16px uppercase + `ul.list-unstyled.links`):
     Contact Info (Contact Us / hello@mydomain.com / +1 829 2293 382 /
     Support) · Nav Links (Home/Blog/Services/About Us) · Navigation
     (Home/Blog/Services/About Us). Links white, some `rgba(255,255,255,.5)`.
  8. Bottom bar (`div.py-5.bg-primary`): centered col-md-7 paragraph —
     lorem + "Copyright ©2024 All rights reserved | This template is made
     with by Colorlib" (missing heart) → paraphrase, drop Colorlib credit.
- **Tokens (from style.css + computed render):** brand green `#1fab89`
  (eyebrows, active nav, sticky logo, footer bg, form focus); charcoal
  `#343a40` (testimonial section); slate `#6c7b95` body (Source Serif Pro
  300 16px); headings black Poppins (h1 64px/900, h2 32px/700, h3 20px/900);
  icon gray `#d1d1d1` 4rem; nav links `rgba(0,0,0,.7)`; footer white /
  `rgba(255,255,255,.5)`; sections `padding: 2.5em 0`; eyebrow 13px/700
  uppercase ls .2rem; testimonials underline 40×3px white-50%; avatars 60px
  circles; owl dots 10px; sticky shadow `4px 0 20px -5px rgba(0,0,0,.2)`.
  `.btn` = pill (radius 30px, padding 10px 20px) but **never used on the
  page — no CTAs anywhere**.
- **Caveats to fix in recreation:** distinct testimonial quotes + author
  names (source repeats ×4); distinct service paragraphs (source repeats
  lorem ×3); placeholder email/phone in Contact Info; copyright line
  paraphrased without Colorlib credit; all `href="#"` → real placeholder
  hrefs; wordmark "Consulting" → "Meridian". Do NOT add buttons.

## Tasks (implementation order)

1. Scaffold `apps/meridian` from the simplest existing app (copy app, rename
   package to `@free-react-templates/meridian`); `bun install` at root to
   register the workspace in the lockfile; verify
   `grep -c "free-react-templates/meridian" package-lock.json`.
2. `index.html`: title "Meridian — Business Consulting", Google Fonts
   `<link>` for Poppins (400–900) + Source Serif Pro (300).
3. `src/index.css` `@theme` tokens (see Verification checklist in spec):
   brand `#1fab89`, ink `#6c7b95`, charcoal `#343a40`, icon `#d1d1d1`;
   `--font-sans: Poppins`, `--font-serif: "Source Serif Pro"`; eyebrow
   utility (13px uppercase ls .2rem brand), sticky-nav shadow utility.
4. Components with colocated tests (TDD, 100% coverage):
   - `Navbar` — transparent absolute over hero; brand; 5 links (Home
     active); sticky → white bg + shadow, logo turns green; mobile
     hamburger + slide-in menu with aria-expanded; no CTA.
   - `HeroText` — white band, centered h1 (Poppins 64px/900 black).
   - `PhotoBand` — 100vh / min-755px cover image band, empty content.
   - `Services` — eyebrow "Services" + h2 + 3 icon cards (Wrench, Lightbulb,
     MessageCircle from lucide-react; 4rem `#d1d1d1`; distinct copy).
   - `Testimonials` — `#343a40` carousel, 4 distinct slides (quote +
     blockquote underline, 60px circular avatar, name/role), dots.
   - `Gallery` — eyebrow "Office Gallery" + h2 + paragraph + 6-photo
     no-gutters grid (3-up → responsive).
   - `Footer` — green `#1fab89`, white "Meridian" wordmark, Contact Info /
     Nav Links / Navigation columns, centered copyright bottom bar.
5. `App.tsx`: Navbar → HeroText → PhotoBand → Services → Testimonials →
   Gallery → Footer.
6. Images: `https://picsum.photos/seed/meridian-<n>/<w>/<h>` only (photo
   band 1600×900, gallery 6 × 800×600, avatars 120×120); no ColorLib
   assets.
7. Verify: `npm run verify:app meridian` (typecheck + lint + vitest 100% +
   build). PR: branch `feat/template-meridian`, conventional commits, merge
   immediately with `gh pr merge --squash --delete-branch`.
8. PR description must include: source (Consulting), preview URL
   (`https://preview.colorlib.com/theme/consulting/`), design tokens,
   renames, placeholder images, distinct testimonial/service copy, dup-row
   note (line 952 covered by the same recreation).
