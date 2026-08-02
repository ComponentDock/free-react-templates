# Spark (Colorlib Appco) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Vista PR (#4) awaits review.
> Implementation ships later on `feat/template-spark`.

## Design notes (replication findings)

- **Original:** ColorLib "Appco" — app landing page
  (source: https://colorlib.com/wp/template/appco/).
- **Demo DOM analyzed:** https://preview.colorlib.com/theme/appco/
  (HTTP 200, full rendered DOM + `assets/css/style.css` (137KB) extracted).
- **Visual design (from DOM + CSS tokens):** app-product landing with a
  **purple** brand (`#8f1bdc`) and pink accent (`#f9218d`), "Nunito" +
  "Poppins" fonts, light (`#f9f9ff`, `#f0e9ff`) sections, feature icon
  cards, a video-demo band, 3-tier pricing, testimonial cards, an
  accordion FAQ, integration logos, and a metrics strip.
- **Structure (1:1, section order):**
  1. Navbar: logo + links Home, Feature, Services, Pricing, Blog, Contact
     (demo has Pages/Blog Details/Element extras).
  2. Hero: kicker "App Landing Page", h1 "Get things done with Appco",
     blurb, **Download** button(s).
  3. Features (`best-features-area`): "Some of the best features Of Our
     App!" + 4 cards — **Easy to Costomize, Extreme Security, Customer
     Support, Creative Design** — icon + title + blurb.
  4. Services (`service-area sky-blue`): "How Can We HelpYour with Appco!"
     - 3 — **Easily Manage, Get Payments Easily, Quick Messaging**.
  5. Video demo (`video-demo-area`): "See Appco in Action" / "Watch our
     quick demo…" + badges ("2 min watch", "Subtitles available",
     "Multiple languages") + "Applic Apps Screenshot" gallery.
  6. Pricing (`best-pricing`): "Choose Your Very Best Pricing Plan." + 3
     plans — **Starter $9/month** (For individuals), **Professional
     $29/month** (Most Popular, For growing teams), **Enterprise
     $99/month** — features (1/10 User accounts, 5/50 GB Storage, Email or
     Priority support, Basic/Advanced analytics, API access, Custom
     integrations) + **Get Started**.
  7. Testimonials: "What Our Customers Have to Say" + 4 quotes — **Sarah
     Johnson** (Product Manager at TechCorp), **Michael Chen** (CEO at
     StartupX), **Emily Rodriguez**, **David Kim**.
  8. FAQ (`faq-area`): "Frequently Asked Questions" + 6 Q&As (How do I get
     started…, free trial, switch plans, data secure, payment methods,
     contact support).
  9. CTA: "Our App Available For Any Device Download now" + blurb +
     Download buttons.
  10. Integrations (`integrations-area`): "Say Hello To The Collaboration
      Hub." + **Contact Us** + "Integrates With Your Favorite Tools" + 8
      logos — Slack, Google, Dropbox, Trello, GitHub, Microsoft, Figma,
      Stripe.
  11. Metrics (`metrics-area`): **50K+ Active Users, 250K+, 4.9, 120+**.
  12. Footer: brand + **Quick Links** (Home, Features, Pricing, Services,
      Contact), **Support** (Report a Bug, Privacy Policy, Terms &
      Conditions, Blog, FAQs), **Newsletter** widget + social icons +
      copyright.
- **Design tokens extracted from `style.css`:**
  - Primary **purple `#8f1bdc`** (buttons, headings, accents); accent pink
    `#f9218d`.
  - Fonts: **"Nunito"** + **"Poppins"** (Google Fonts via `<link>`).
  - Light section bgs `#f9f9ff`, `#f0e9ff`; dark text `#222222`.
  - Buttons: purple bg, white text, rounded.
- **Recreation name:** Spark (app-themed, distinct from "Appco" and all
  existing names). App folder `apps/spark`, package
  `@free-react-templates/spark`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/spark-<n>/<w>/<h>`); lucide-react icons (replaces
  flaticon/fontawesome); Nunito + Poppins via Google Fonts; FAQ as
  accessible disclosure; forms prevent default (no backend); purple primary
  in `@theme`; repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-spark/spec.md` (Gherkin requirements +
      scenarios reflecting the REAL sections above).
- [x] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/spark` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/spark`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-spark`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
