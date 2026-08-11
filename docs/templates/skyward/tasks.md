# Skyward (ColorLib Ignite) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-skyward`.

## Design notes (replication findings)

- **Original:** ColorLib "Ignite" — web hosting company landing page, "Free
  Bootstrap 4 Template by Colorlib"
  (source: https://colorlib.com/wp/template/ignite/).
- **Preview analyzed:** https://preview.colorlib.com/theme/ignite/ (HTTP 200,
  ~34 KB HTML). Live DOM + `css/style.css` (~74 KB, complete/readable) parsed
  for structure and tokens; screenshot `ignite-free-template.jpg` (1200x946)
  reviewed visually: vibrant blue `#207dff` dominates (navbar area, hero
  overlay, domain band), white text on blue, lime-green `#a1dd70` CTA
  buttons, hero = laptop photo under blue overlay with centered text, blue
  domain-search bar with TLD price row, white grayscale partner-logos strip.
- **Visual design:** bold blue-and-green hosting landing page. Brand blue
  `#207dff` (hero overlay 0.8 opacity, domain band, pricing section, footer,
  `btn-primary`); accent green `#a1dd70` (nav CTA pill, `btn-secondary`,
  active pricing card, active nav link) with hover `#93d85b`. Light sections
  `#f6fafd`. Everything in **Work Sans** (300–700). Buttons: radius 5px,
  soft drop shadow `0 15px 30px -12px rgba(0,0,0,0.2)`; primary hover flips
  to outline (transparent bg, blue text); secondary hover deepens to
  `#93d85b`. Hero headline 54px weight 300 with a bold 700 span; subheading
  uppercase 14px letter-spacing 4px. Footer is solid blue with white text.
- **Structure (1:1, section order, home page):**
  1. Navbar `nav.navbar.navbar-expand-lg.navbar-dark.ftco_navbar.bg-dark`
     (over hero): brand "Ignite" left; links HOME / ABOUT / DOMAIN /
     HOSTING / BLOG / CONTACT (white 70% → white hover, active `#a1dd70`);
     right CTA "Get Started" (green pill radius 5px, hover blue). Mobile
     hamburger collapse.
  2. Hero `div.hero-wrap.js-fullheight.img` (750px, bg image + blue overlay
     `#207dff` opacity .8): centered — subheading "Web Hosting" (14px
     uppercase ls 4px w600 white), h1 "Best Web Hosting For Your Website"
     (54px w300 white, bold span), p "Get best speed for your website.
     Don't lose more clients", green `btn-secondary px-4 py-3` "Get Started
     Now".
  3. Domain band `section.ftco-domain` (bg `#207dff`): `form.domain-form`
     flex — input "Enter your domain name..." + select `.com/.net/.biz/
.co/.me` (300px, chevron icon) + "Search" `btn-primary`; price row
     below: `.com $9.75` · `.net $9.50` · `.biz $8.95` · `.co $7.80` ·
     `.me $7.95`.
  4. Partner logos `section.ftco-section.ftco-partner`: 5–6 grayscale logo
     images in a `col-sm` row.
  5. Why You Should Choose Us `section.services-section.bg-light`
     (`#f6fafd`): h2 + subtext; 3 features (icon + h3 + blurb): **Super
     Fast Server**, **Daily Backups**, **Technical Services**.
  6. Stats counter `section.ftco-counter.bg-light.img` (`#section-counter`):
     h2 "More than 12,000 websites trusted hosted"; 4 counters
     (`block-18`, `strong.number` count-up from 0): **12,000** CMS
     Installation · **100** Awards Won · **10,000** Registered Domains ·
     **9,000** Satisfied Customers.
  7. Our Main Services `section.ftco-no-pt.ftco-no-pb` (white): h2 +
     subtext; 4 services (icon + h3 + blurb): **Cloud VPS**, **Share**,
     **VPS**, **Dedicated**.
  8. Our Best Pricing `section.bg-primary` (`#207dff`): white
     `heading-section-white` h2 + subtext; 4 `block-7` cards:
     - Free `$0/mo` (bg-light) — "100% free. Forever" · 150 GB Bandwidth ·
       100 GB Storage · $1.00/GB Overages · All features · green "Choose
       Plan".
     - Startup `$19/mo` (white) — 450 GB · 400 GB · $2.00/GB · green.
     - Premium `$49/mo` (**ACTIVE: bg `#a1dd70`, black text**) — 250 GB ·
       200 GB · $5.00/GB · **blue** "Choose Plan" (`btn-primary`).
     - Pro `$99/mo` (white) — 450 GB · 400 GB · $20.00/GB · green.
     Price markup `<sup>$</sup><span class="number">N<small>/mo</small>`.
  9. Testimonials `section.testimony-section`: h2 "Our satisfied customer
     says" + subtext; carousel of 5 slides (Mark Web — Marketing Manager /
     Interface Designer / UI Designer / Web Developer / System Analyst):
     quote + yellow stars `#ffc107` + avatar + name + role.
  10. Recent Blog `section.bg-light`: h2 + subtext; 3 `blog-entry` cards
      (col-md-4): image (hover zoom) + meta "Aug 5, 2019 · Admin" + h3
      title + excerpt + "Read More".
  11. Footer `footer.ftco-footer` (bg `#207dff`, padding 5em 0 3em): brand
      "Ignite" + about + socials · "Unseful Links" [sic] (Servers, Windos
      Hosting [sic], Cloud Hosting, OS Servers, Linux Servers, Policy) ·
      "Navigational" (Home, Domain, Hosting, About, Blog, Contact) ·
      "Office" (203 Fake St. Mountain View, San Francisco, California, USA
      · +2 392 3929 210 · info@yourdomain.com). Copyright bar
      (monorepo credit).
- **Design tokens extracted from the preview CSS:**
  - Brand blue `#207dff`; accent green `#a1dd70` (hover `#93d85b`);
    star yellow `#ffc107`; muted `#6c757d` / `#b3b3b3`.
  - Surfaces: `.bg-light` `#f6fafd`, `.bg-primary`/footer/domain `#207dff`,
    pricing cards white / bg-light / active green.
  - Font: "Work Sans" 300–700 (Google Fonts) + Arial fallback.
  - Buttons: radius 5px, shadow `0 15px 30px -12px rgba(0,0,0,0.2)`;
    primary `#207dff` white text, hover outline; secondary `#a1dd70`
    white text, hover `#93d85b`.
  - Hero: h1 54px w300 (span w700), subheading 14px uppercase ls 4px,
    paragraph `rgba(255,255,255,0.8)`, overlay `#207dff` opacity .8.
  - Nav: links `rgba(255,255,255,0.7)` → white, active `#a1dd70`, CTA
    pill radius 5px.
  - Footer: headings 17–20px w500 white; links `rgba(255,255,255,0.7)` →
    white.
- **Recreation name:** Skyward (NEW name — never reuse "Ignite"). App folder
  `apps/skyward`, package `@free-react-templates/skyward`. NOTE: `apps/ignite`
  already exists (ColorLib Youthconnect recreation) — do not confuse.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/skyward-<n>/<w>/<h>`); lucide-react icons (Server,
  Database, Wrench, Cloud, Share2, HardDrive, Star, ChevronDown, Menu,
  Facebook, Twitter, Instagram, MapPin, Phone, Mail, Heart, ArrowRight,
  Globe); Work Sans via Google Fonts `<link>` in `index.html`; brand blue +
  green in `@theme`; shared Button/ButtonLink `primary` = blue, local
  `secondary` style = green, both 5px radius. Paraphrase demo copy (same
  kinds); fix typos ("Unseful Links" → "Useful Links", "Windos Hosting" →
  "Windows Hosting"). Counter numbers animate 0 → target on scroll into
  view; testimonial carousel simple auto-advance + controls.
- Reuse `packages/ui` (Button, ButtonLink, Card, cn); adapt the repo chrome:
  dark navbar with green CTA pill, blue 4-column footer with copyright bar.

## Tasks

- [x] Write `openspec/specs/template-skyward/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/skyward` (copy the closest existing landing app — e.g.
      Clamor or any deployed hosting/landing app; rename package to
      `@free-react-templates/skyward`; run `npm install` at root + verify
      `grep -c free-react-templates/skyward package-lock.json` before
      commit).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: Navbar (dark + links +
      green CTA + mobile menu), Hero (blue overlay bg + subheading + h1 +
      green CTA), Domain band (form + TLD price row), Partners (grayscale
      logo strip), Features (3 columns), Stats counter (4 animated count-up
      counters), Services (4 columns), Pricing (4 cards, Premium green
      active), Testimonials (carousel + stars), Blog (3 cards), Footer (4
      columns + copyright).
- [ ] Per-app gate: `bash scripts/verify-app.sh skyward` (typecheck + lint +
      coverage + build) + `npm run spec:validate`.
- [ ] Push `feat/template-skyward`, open PR (source template, preview URL,
      design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D). NOTE: "Ignite" appears 3× in
      TEMPLATES.md (lines 420, 1049, 3061 — same ColorLib template in
      different category sections); mark all three.
