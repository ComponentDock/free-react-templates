# Synapse (ColorLib Nexus) — Tasks & Design Notes

> **SHIPPED** — this prep's design shipped as `apps/synapse`
> (<https://synapse.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

> Recreation of ColorLib "Nexus" (https://colorlib.com/wp/template/nexus/)
> under the NEW name **Synapse** (naming rule: must differ from the ColorLib
> slug; the older `template-nexus` prep was superseded by this folder).
> Implementation ships on `feat/template-synapse`.

## Design notes (replication findings — live preview + CSS fetched)

- **Original:** ColorLib "Nexus" — SaaS software landing page
  (source: https://colorlib.com/wp/template/nexus/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/nexus/
  (HTTP 200, full rendered DOM + `css/style.css` (66KB) extracted).
- **Visual design (from DOM + CSS tokens):** SaaS landing with a **blue**
  brand (`#3bacf0` + cyan `#62ddff`), Heebo + Roboto fonts, a "Mass People
  Oriented Software" hero, how-it-works tiles, repeated CTA splits,
  screenshots, pricing, testimonials, and a final impress CTA.
- **Structure (1:1, section order from live DOM):**
  1. Navbar: logo + Home, About, Services, Pages, Pricing, Elements, Blog,
     Contact + **Free Trial**.
  2. Hero: h1 "Mass People Oriented Software" + blurb + **Get Started /
     Download**.
  3. How It Works: "How It work for you" + blurb + 3 tiles — **Easy to use,
     Unlimited Colors, Unique Features**.
  4. CTA split: "We've made a life that will change you" + "We are here to
     listen from you deliver exellence" + **Get Started Now**.
  5. Screenshots: "Unique Screens that work perfectly" + image row.
  6. CTA split (repeat).
  7. Pricing: "Choose Your Price Plan" + plans **Real Basic $39 / Real
     Standard $69 / Real Premium** (2.5/10 GB Space, Secure Online Transfer,
     Unlimited Styles, Customer Service) + **Get Started**.
  8. Testimonials: "Feedback from Customers" + quotes by **Mark Alviro Wiens**.
  9. CTA split (white variant).
  10. Impress: "Got Impressed to our features?" + **Request Free Demo**.
  11. Footer: columns + social + copyright.
- **Design tokens extracted from `css/style.css` (66KB):**
  - Primary **blue `#3bacf0`**; cyan `#62ddff`; deep blue `#4dabff`;
    yellow `#f8b600` accent.
  - Dark `#222222`; light `#f9f9ff`.
  - Fonts: **"Heebo"** + **"Roboto"** (Google Fonts `<link>`).
  - Blue buttons with white text.
- **Recreation name:** Synapse (NEW — differs from ColorLib slug "nexus";
  no existing app/spec collision).
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/synapse-<n>/<w>/<h>`); lucide-react icons; Heebo +
  Roboto via Google Fonts; blue primary in `@theme`; repo-standard Navbar
  (dark-mode toggle) + Footer chrome.

## Tasks

- [ ] Write spec `openspec/specs/template-synapse/spec.md` (done — draft)
- [ ] Scaffold `apps/synapse` (copy simplest existing app, rename package)
- [ ] Tests (red) for every component
- [ ] Implement Navbar, Hero, HowItWorks, CtaSplit, Screenshots, Pricing,
      Testimonials, Impress, Footer
- [ ] `npm run test:coverage` at 100%
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow
- [ ] `npm install` at root (lockfile registers workspace) + `grep -c`
      lockfile check
- [ ] TEMPLATES.md `[~]` on branch; `[x]` + Surge URL after merge
- [ ] PR: "feat: Synapse — SaaS landing template (ColorLib Nexus)" → merge
- [ ] Bookkeeping: homepage, README status (`node scripts/update-readme-status.mjs`)

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/synapse/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/synapse/public/CNAME` = `synapse.free.componentdock.com`
  and the package `homepage` = `https://synapse.free.componentdock.com`.
