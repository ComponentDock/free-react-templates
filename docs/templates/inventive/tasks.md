# Inventive (ColorLib Creativex 3) — Tasks & Design Notes

> Prep artifacts prepared on `main`; implementation ships on
> `feat/template-inventive`. Supersedes the bootstrap-era `template-creativex`
> prep (which illegally reused the ColorLib source name and had incorrect
> tokens) — removed in the same commit.

## Design notes (replication findings)

- **Original:** ColorLib "Creativex 3" — creative agency template
  (source: https://colorlib.com/wp/template/creativex-3/).
- **Preview analyzed:** `https://preview.colorlib.com/theme/creativex-3/`
  returns 404; the official demo per the ColorLib preview portal
  (`assets/js/products.js` entry for "creativex") is hosted on Cloudflare
  Pages at **https://creativex-colorlib.pages.dev/** (HTTP 200, "Pixel
  Studio | Creative Digital Agency"). Live DOM + `/_astro/Base.BjbRLE8f.css`
  (41 KB) parsed for structure and tokens; screenshot
  `creativex-template-1770211073725.jpg` (2400×1892) reviewed visually.
- **Visual design:** modern creative-agency landing with a soft
  lavender→peach gradient hero background, **fuchsia/magenta** primary
  `#d946ef` (logo, gradient "Bold Digital" text, "View Our Work" pill
  button, "Start a Project" header button) and **orange** secondary
  `#f97316` (background gradient, "Experiences" text). Clean Inter
  sans-serif, pill-shaped buttons, centered hero with "Award-Winning
  Creative Agency" badge, four-stat row, "SCROLL" mouse indicator, awards
  strip, dark mode.
- **Structure (1:1, section order, home page):**
  1. Navbar `header` (fixed top, white/95 blur): wordmark "Pixel Studio" (→
     "Inventive"), links Work / Services / About / Contact, "Start a
     Project" pill CTA (primary bg), dark-mode toggle, mobile menu toggle.
  2. Hero (`relative overflow-hidden bg-gray-50`): pill badge
     "Award-Winning Creative Agency" (primary-50 bg) · h1 "We Create **Bold
     Digital** Experiences" (span gradient primary→accent) · subhead "We
     craft bold digital experiences that captivate audiences and drive
     results." · CTAs "View Our Work" (primary pill + arrow) and "Start a
     Project" (white outline pill) · stats row "150+ Projects Delivered ·
     50+ Happy Clients · 12 Team Members · 8 Years Experience" · "Scroll"
     mouse indicator. Soft lavender→peach gradient bg (from screenshot).
  3. Awards strip (`border-y border-gray-200 bg-white py-8`): Awwwards Site
     of the Day 2024 · CSS Design Awards 2024 · FWA of the Month 2023 ·
     Webby Awards Honoree 2023.
  4. Services "What We Do" (`bg-white py-20 lg:py-28`): intro + 4 cards
     (icon, title, blurb, 4 checklist items, "Learn More" link):
     - Web Design — Custom Design, Responsive Development, CMS Integration,
       SEO Optimization.
     - Mobile Apps — iOS & Android, React Native, UI/UX Design, App Store
       Launch.
     - Brand Identity — Logo Design, Brand Guidelines, Visual Identity,
       Brand Strategy.
     - Digital Marketing — Social Media, Content Strategy, PPC Advertising,
       Analytics & Reporting.
  5. Selected Work "Selected Work" (`bg-gray-50 py-20 lg:py-28`): intro +
     3 project cards (image, category tag, title, blurb, link): Branding /
     Nova Fintech Rebrand ("Complete brand overhaul for a leading fintech
     company.") · Mobile App / Mindful Wellness App ("A meditation and
     wellness app designed to help users build healthy daily habits.") ·
     Web Design / Urban Eats Platform ("A food delivery platform connecting
     local restaurants with hungry customers.") · "View All Projects"
     button.
  6. Testimonials "What Clients Say" (`bg-white py-20 lg:py-28`): intro
     "Don't just take our word for it. Here's what our clients have to say
     about working with us." + 3 quote cards (5 yellow stars, quote, name +
     role): CEO, Nova Financial · Founder, Mindful Inc. · Marketing
     Director, Urban Eats.
  7. Contact "Let's Work Together" (`bg-gray-50 py-20 lg:py-28`): intro
     "Have a project in mind? We'd love to hear about it. Fill out the form
     below and we'll get back to you within 24 hours." + 4 info cards (Email
     Us `hello@pixelstudio.com` · Call Us `(555) 987-6543` · Visit Us street
     address · Follow Us socials). Form: Name, Email, Company (optional),
     Service Interested In (select: Select a service / Web Design / Mobile
     Apps / Brand Identity / Digital Marketing / Other), Budget Range
     (select: Select a budget range / $5,000 - $10,000 / $10,000 - $25,000 /
     $25,000 - $50,000 / $50,000+), Project Details (textarea), submit
     "Send Message".
  8. Footer (`border-t border-gray-200 bg-gray-50`): 3 link columns
     (Navigation: Work / Services / About / Contact · Services: Web Design /
     Mobile Apps / Brand Identity / Digital Marketing · Contact: email +
     phone), socials (Twitter, Instagram, LinkedIn, Dribbble), legal links
     (Privacy Policy, Terms of Service), copyright line (monorepo credit).
- **Design tokens extracted from the preview CSS:**
  - Primary fuchsia/magenta `#d946ef` (`primary-500`; hover `#c026d3`
    `primary-600`; tints `primary-50`/`primary-100`; dark hover
    `primary-400` `#e879f9`; focus ring `primary-500/20`).
  - Accent orange `#f97316` (`accent-500`; headline gradient
    `from-primary-500 to-accent-500`).
  - Stars yellow-400 `oklch(85.2% .199 91.936)`.
  - Neutrals: `#111827` headings, `#374151`, `#6b7280` body, `#9ca3af`
    muted, `#e5e7eb`/`#d1d5db` borders, `#f3f4f6`/`#f9fafb` light section
    bg, white cards; dark: `gray-950` bg, `gray-900` sections, `gray-800`
    surfaces.
  - Font: Inter 400/500/600/700/800 (Google Fonts).
  - Buttons: pill (`rounded-full`), primary bg `#d946ef` white text hover
    `#c026d3`; secondary white bg + `gray-300` border; focus ring
    `primary-500/20`.
  - Cards `rounded-2xl`; sections `py-20 lg:py-28`; container `max-w-7xl`;
    hero `overflow-hidden` + soft lavender→peach gradient.
- **Recreation name:** Inventive (NEW — never reuse "Creativex"; the old
  bootstrap-era `template-creativex` folder used the banned source name and
  was deleted). App folder `apps/inventive`, package
  `@free-react-templates/inventive`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/inventive-<n>/<w>/<h>`); lucide-react icons
  (ArrowRight, Check, Star, Menu, Moon, Sun, Mail, Phone, MapPin, Share2,
  ArrowUpRight); brand socials (Twitter/X, Instagram, LinkedIn, Dribbble) as
  inline SVG (lucide-react removed brand icons); Inter via Google Fonts
  `<link>` in `index.html`; fuchsia primary + orange accent in `@theme` so
  shared Button/ButtonLink `primary` variants resolve to fuchsia pills.
  Paraphrase demo copy (same kinds); demo site name "Pixel Studio" →
  "Inventive". Repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn); remember
  `injectUiSource()` in `vite.config.ts` (docs/conventions.md).

## Tasks

- [x] Write `openspec/specs/template-inventive/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [x] Remove superseded bootstrap-era prep
      `openspec/specs/template-creativex/` + `docs/templates/creativex/`
      (illegal source-name reuse, wrong tokens).
- [ ] Create `apps/inventive` (copy the section-rich landing app pattern —
      e.g. Clamor/Edition if merged, else a landing app; rename package to
      `@free-react-templates/inventive`; run `npm install` at root + verify
      `grep -c free-react-templates/inventive package-lock.json` before
      commit).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage: Navbar (links + CTA +
      dark toggle + mobile menu), Hero (badge, gradient headline, subhead,
      CTAs, stats, scroll indicator, gradient bg), Awards strip, Services
      (4 cards with checklists), Selected Work (3 project cards + View All),
      Testimonials (3 quote cards with stars), Contact (info cards + form
      with selects + validation + success state), Footer (columns, socials,
      legal, copyright).
- [ ] Per-app gate: `bash scripts/verify-app.sh inventive` (typecheck +
      lint + coverage + build) + `npm run spec:validate`.
- [ ] Push `feat/template-inventive`, open PR (source template, preview
      URL, design tokens, what differs), merge immediately.
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` for all "Creativex 3" copies + Surge URL + homepage (bookkeeping on main, state D).
