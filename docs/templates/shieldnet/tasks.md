# Shieldnet (Colorlib Shieldnet) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Cloud PR (#7) awaits review.
> Implementation ships later on `feat/template-shieldnet`.

## Design notes (replication findings)

- **Original:** ColorLib "Shieldnet" — cybersecurity / threat protection
  platform landing template
  (source: https://colorlib.com/wp/template/shieldnet/).
- **Demo DOM analyzed:** https://shieldnet-colorlib.pages.dev/ (HTTP 200,
  full rendered DOM + `/_astro/Base.D-cq-pmO.css` (68KB, minified)
  extracted; `https://preview.colorlib.com/theme/shieldnet/` returns 404 —
  preview portal loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + CSS tokens):** modern cybersecurity landing on
  a light gray-rose gradient hero, **rose/red** brand color (`#e11d48`
  rose-600 scale), Inter typography, rounded cards, pill buttons,
  alternating gray-50/white sections, dark-gray (`#111827`) footer, full
  dark mode.
- **Structure (1:1, section order):**
  1. Sticky navbar (white/80 blur): "ShieldNet" logo + Solutions, Pricing,
     About, Blog, Contact + "Get Protected".
  2. Hero (`bg-gradient-to-b from-gray-50 via-primary-50/... to-white`):
     "Stop Threats Before They Strike" + "Start Free Trial" / "Watch Demo".
  3. Defense grid: "Complete Cyber Defense" — 6 cards (Endpoint Detection &
     Response, Cloud Security, Identity Protection, Threat Intelligence,
     Vulnerability Management, Incident Response) with blurbs.
  4. Social proof: "Trusted by Security Leaders" — 6 testimonial cards
     (Marcus Chen, Sarah Blackwell, James Okafor, Elena Petrova, David Kim,
     Rachel Torres).
  5. Contact: "Talk to a Security Expert" — lead form (Full Name, Email
     Address, Phone Number, Project Type select, Project Details) + "Send
     Message"; contact column (Phone, Email, Address, Office Hours).
  6. FAQ: "Frequently Asked Questions" — 5 accordions (deployment speed,
     SIEM replacement, false positive rate, 24/7 MDR, zero-day).
  7. CTA (`bg-gradient-to-br from-primary-600 to-primary-800`): "Ready to
     Secure Your Organization?" + "Start Free Trial" / "Talk to Expert".
  8. Footer (`bg-gray-900`): blurb + Solutions / Resources / Company +
     phone/email + copyright; cookie banner (Accept All / Decline).
- **Design tokens extracted from the DOM + CSS:**
  - Brand colors: **rose/red scale** — #e11d48 primary (dark: #be123c,
    #9f1239; light: #f43f5e, #fb7185, #fda4af, #fecdd3, #ffe4e6, #fff1f2);
    hero gradient gray-50 → primary-50 → white; CTA gradient primary-600 →
    primary-800.
  - Neutrals: gray scale — #f9fafb → #111827 (footer bg), #030712.
  - Fonts: **"Inter"** (Inter, system-ui, sans-serif) via Google Fonts.
  - Shapes: rounded cards, pill buttons; section padding `py-20 lg:py-28`.
- **Recreation name:** Shieldnet (kept — matches ColorLib name). App folder
  `apps/shieldnet`, package `@free-react-templates/shieldnet`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/shieldnet-<n>/<w>/<h>`); lucide-react icons
  (ShieldCheck, Cloud, Fingerprint, Radar, Bug, Siren, Phone, Mail, MapPin,
  Clock, Star, ChevronDown, Send, PlayCircle); Inter via Google Fonts;
  repo-standard Navbar (dark-mode toggle) + Footer chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-shieldnet/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/shieldnet` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/shieldnet`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-shieldnet`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
