# Aegis (ColorLib Shieldnet) — Tasks & Design Notes

> Recreation of ColorLib "Shieldnet"
> (https://colorlib.com/wp/template/shieldnet/) under the NEW name
> **Aegis** (the shield), per the monorepo naming mandate (never reuse the
> ColorLib source name). Replaces the stale `template-shieldnet` prep
> (forbidden source name), same as Shieldguard→Coverly and Serenity→Hush.

## Design notes (replication findings)

- **Original:** ColorLib "Shieldnet" — cybersecurity / threat protection
  platform landing Astro template.
- **Demo DOM analyzed:** https://shieldnet-colorlib.pages.dev/ (HTTP 200,
  ~73 KB HTML + `/_astro/Base.D-cq-pmO.css` ~68 KB parsed for tokens; the
  official `https://preview.colorlib.com/theme/shieldnet/` returns 404 —
  demo hosted on Cloudflare Pages per the ColorLib preview portal, same
  pattern as Coverly/Dealflow/Freightly).
- **Visual design (screenshot `shieldnet-template-1771944037639.jpg`):**
  stark white page, vibrant rose/red (#e11d48) primary for CTAs, logo,
  stats and the H1 highlight word; dark-mode "Threat Dashboard" mockup in
  the hero right column; pill buttons; Inter typography; light gray
  alternating section bands; dark gray footer. No photography — icon +
  typography driven.
- **Structure (1:1, section order):**
  1. Navbar (sticky, white/80 blur): shield-check logo "ShieldNet" → name
     "Aegis", links Solutions/Pricing/About/Blog/Contact, "Get Protected"
     pill CTA, dark-mode toggle, mobile hamburger drawer.
  2. Hero (split, `bg-gradient-to-b from-gray-50 via-primary-50/40
to-white`): pill badge "Trusted by 2,000+ Security Teams Worldwide"
     (red dot), H1 "Stop Threats Before They Strike" (tail word is a
     rose span with typewriter cycling Spread / Escalate / Damage),
     blurb, "Start Free Trial" (solid rose pill) + "Watch Demo" (white
     bordered pill) buttons, stats row (10M+ Endpoints Protected / 500B+
     Events Analyzed / 0.001% False Positive Rate / 24/7 SOC Coverage);
     right: dark `rounded-2xl bg-gray-900 shadow-2xl shadow-primary-900/10`
     "Threat Dashboard" mockup — header (shield icon + green-dot "All
     Systems Protected"), 3 stat tiles (Threats Blocked 2,847 ↑12% today ·
     Active Endpoints 14,329 All healthy · Risk Score Low 12/100), Recent
     Detections feed (Ransomware attempt blocked — endpoint-ws042 · 2 min
     ago — Critical; Suspicious login — user: j.smith · 8 min ago — Medium;
     Vulnerability patched — CVE-2026-1847 · 23 min ago — Resolved).
  3. Stats band (`border-y border-gray-200 bg-gray-50`): 4 JS-animated
     counters (static DOM renders "0"): Endpoints Protected, Events
     Analyzed Daily, False Positive Rate, SOC Coverage — animate on scroll
     into view.
  4. Defense (kicker "Solutions"): h2 "Complete Cyber Defense", 6 icon
     cards — Endpoint Detection & Response, Cloud Security, Identity
     Protection, Threat Intelligence, Vulnerability Management, Incident
     Response (each: icon + title + blurb).
  5. Testimonials (kicker "Testimonials"): h2 "Trusted by Security
     Leaders", CAROUSEL with prev/next arrows + 4 slide dots over 6 quote
     cards: Marcus Chen (CISO, Meridian Financial Group), Sarah Blackwell
     (VP of Security, HealthCore Systems), James Okafor (Head of InfoSec,
     NovaTech Industries), Elena Petrova (SOC Manager, Global Logistics
     Corp), David Kim (CISO, Pacific Retail Holdings), Rachel Torres
     (Director of IT Security, Apex Manufacturing). Each: 5 stars, quote,
     avatar initial, name, role.
  6. Contact (kicker "Get In Touch"): h2 "Talk to a Security Expert",
     form (Full Name*, Email Address*, Phone Number, Project Type select,
     Project Details*, "Send Message") + info column (Phone (555)
     567-8901, Email security@shieldnet.io, Address 1200 Cyber Defense
     Blvd, Washington, DC 20001, Office Hours Mon–Fri 7–6 / Sat 8–2 / Sun
     Closed) + map embed.
  7. FAQ: h2 "Frequently Asked Questions", 5 accordion items (24h
     deployment, SIEM complement, 0.001% false positive, 24/7 MDR,
     zero-day behavioral AI).
  8. CTA (`bg-gradient-to-br from-primary-600 to-primary-800`): h2 "Ready
     to Secure Your Organization?", "Start Free Trial" (white) + "Talk to
     Expert" (outline).
  9. Footer (`bg-gray-900`): brand blurb, phone/email/address, socials
     (Twitter/LinkedIn/GitHub), columns Solutions (Endpoint Protection,
     Cloud Security, Identity Protection, Threat Intelligence), Resources
     (Documentation, Security Blog, Threat Reports, Webinars), Company
     (About, Careers, Contact, Partners), Privacy/Terms/Style Guide links,
     cookie dialog (Decline / Accept All), back-to-top.
- **Tokens:** primary rose scale #e11d48→#fff1f2 (hover #be123c/#9f1239,
  CTA stops #881337), gray scale #f9fafb→#030712 (footer #111827), Inter
  300–800, pill buttons, rounded-2xl cards, py-20 lg:py-28 rhythm, dark
  mode `dark:bg-gray-900/950`.

## Implementation tasks (implementer stream)

- [ ] Scaffold `apps/aegis` (copy simplest existing app; rename package to
      `@free-react-templates/aegis`; `injectUiSource()` in vite.config.ts)
- [ ] `npm install` at root; verify `grep -c "free-react-templates/aegis"
    package-lock.json` before committing
- [ ] `src/index.css`: `@theme` with `--color-primary-*` rose scale, Inter
      font link in index.html
- [ ] Navbar (logo, links, Get Protected, dark toggle, mobile menu)
- [ ] Hero (badge, H1 + typewriter tail, blurb, 2 CTAs, stats row,
      dashboard mockup)
- [ ] Stats band (animated counters on scroll)
- [ ] Defense (6 cards)
- [ ] Testimonials carousel (arrows + dots)
- [ ] Contact (form + validation + info + map embed)
- [ ] FAQ accordion
- [ ] CTA (gradient)
- [ ] Footer (+ cookie dialog + back-to-top)
- [ ] Tests per section; 100% coverage via `npm run verify:app aegis`
- [ ] Commit `feat: Aegis — security template (ColorLib Shieldnet)`,
      PR → merge immediately, deploy to Surge, update TEMPLATES.md + README
