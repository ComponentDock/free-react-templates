# Template: Aegis (Cybersecurity Template)

## Purpose

Aegis is a single-page cybersecurity threat-protection platform landing
template in the free-react-templates monorepo. It is an original React
recreation of the ColorLib free "Shieldnet" website template design
(source: https://colorlib.com/wp/template/shieldnet/), built under a
DIFFERENT name (Aegis — the shield, defense) per the monorepo naming
mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> NOTE (prep-stream 2026-08-08): a stale prep existed at
> `openspec/specs/template-shieldnet/` using the FORBIDDEN ColorLib source
> name; it was deleted and replaced by this fresh prep (new name Aegis),
> matching the Shieldguard→Coverly / Serenity→Hush / Pipelineiq→Dealflow
> precedent. The stale prep's research was re-verified against the live demo
> and corrected: hero badge eyebrow, H1 typewriter tail (Spread / Escalate /
> Damage), hero stats row + dark "Threat Dashboard" mockup column, a second
> JS-animated stats band (static DOM renders zeros), the testimonial
> CAROUSEL (prev/next + slide dots) the stale prep had flattened into a
> static grid, the map embed in Contact, and the cookie-consent dialog +
> back-to-top button in the footer area.

## Design reference (replication findings)

- **Original:** ColorLib "Shieldnet" — cybersecurity / threat protection
  platform landing template (source: https://colorlib.com/wp/template/shieldnet/).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/shieldnet/`
  returns 404; the ColorLib preview portal hosts the demo at
  `https://shieldnet-colorlib.pages.dev/` (HTTP 200, ~73 KB HTML +
  `/_astro/Base.D-cq-pmO.css` ~68 KB parsed for tokens — same
  `<slug>-colorlib.pages.dev` pattern as Coverly/Dealflow/Freightly). The
  TEMPLATES.md screenshot (`shieldnet-template-1771944037639.jpg`) is the
  visual reference: stark white page, vibrant rose/red (#e11d48) primary for
  CTAs/logo/stats, dark-mode dashboard mockup graphic in the hero, pill
  buttons, Inter typography, dark gray footer.
- **Section order (1:1, from live demo DOM):**
  1. Navbar (sticky, white/80 blur): "ShieldNet" shield-check logo + links
     Solutions, Pricing, About, Blog, Contact + "Get Protected" pill CTA;
     dark-mode toggle + mobile hamburger drawer.
  2. Hero (light gradient `from-gray-50 via-primary-50/… to-white`, split
     layout): pill badge "Trusted by 2,000+ Security Teams Worldwide" (with
     dot), H1 "Stop Threats Before They Strike" — the tail word is a
     `text-primary-600` span with a typewriter effect cycling
     ["Spread", "Escalate", "Damage"] (static fallback "Strike"), blurb
     "ShieldNet delivers AI-powered threat detection, automated response,
     and continuous monitoring to protect your endpoints, cloud workloads,
     and identities — all from a single unified platform.", CTAs "Start Free
     Trial" (solid primary pill) + "Watch Demo" (white/border pill), stats
     row (10M+ Endpoints Protected, 500B+ Events Analyzed, 0.001% False
     Positive Rate, 24/7 SOC Coverage); right column: dark
     "Threat Dashboard" mockup card (`rounded-2xl border bg-gray-900
shadow-2xl shadow-primary-900/10`) with header (shield icon + "Threat
     Dashboard", green dot "All Systems Protected"), 3 stat tiles (Threats
     Blocked 2,847 ↑12% today · Active Endpoints 14,329 All healthy · Risk
     Score Low 12/100), and a "Recent Detections" feed (Ransomware attempt
     blocked — endpoint-ws042 · 2 min ago — Critical; Suspicious login from
     new location — user: j.smith · 8 min ago — Medium; Vulnerability
     patched automatically — CVE-2026-1847 · 23 min ago — Resolved).
  3. Stats band (`border-y border-gray-200 bg-gray-50`): 4 JS-animated
     counters — Endpoints Protected, Events Analyzed Daily, False Positive
     Rate, SOC Coverage (static DOM renders "0", counters animate on scroll
     into view; screenshot shows the large rose numbers).
  4. Defense (id="solutions"): kicker pill "Solutions", h2 "Complete Cyber
     Defense", blurb "From endpoint to cloud, our integrated security
     platform protects every layer of your digital infrastructure against
     advanced threats.", 6 icon cards — Endpoint Detection & Response
     (AI-powered EDR, real-time, automated containment + forensic analysis),
     Cloud Security (AWS/Azure/GCP workload protection, runtime visibility,
     misconfiguration detection, compliance), Identity Protection
     (behavioral analytics, MFA enforcement, credential-compromise
     detection), Threat Intelligence (global sources + AI enrichment,
     actionable insights), Vulnerability Management (continuous scanning,
     prioritized remediation, code→cloud), Incident Response (24/7 expert
     team, automated playbooks, forensics, rapid containment).
  5. Testimonials (id="testimonials"): kicker "Testimonials", h2 "Trusted by
     Security Leaders", blurb "See why CISOs and security teams across
     industries choose ShieldNet to protect their organizations.",
     CAROUSEL (prev/next arrow buttons + 4 slide dots) of 6 quote cards —
     Marcus Chen (CISO, Meridian Financial Group), Sarah Blackwell (VP of
     Security, HealthCore Systems), James Okafor (Head of InfoSec, NovaTech
     Industries), Elena Petrova (SOC Manager, Global Logistics Corp), David
     Kim (CISO, Pacific Retail Holdings), Rachel Torres (Director of IT
     Security, Apex Manufacturing) — each with 5-star row, quote, avatar
     initial, name, role.
  6. Contact (id="contact"): kicker "Get In Touch", h2 "Talk to a Security
     Expert", blurb "Ready to strengthen your security posture? Our team of
     cybersecurity experts is available 24/7 to assess your needs and
     recommend the right protection.", lead form (Full Name*, Email
     Address*, Phone Number, Project Type select, Project Details*,
     "Send Message" button) + info column (Phone (555) 567-8901, Email
     security@shieldnet.io, Address 1200 Cyber Defense Blvd, Washington, DC
     20001, Office Hours Mon–Fri 7:00 AM–6:00 PM / Sat 8:00 AM–2:00 PM /
     Sun Closed) + map embed.
  7. FAQ: h2 "Frequently Asked Questions", blurb "Common questions about our
     cybersecurity platform and security services.", 5 accordion items —
     "How quickly can ShieldNet be deployed?" (as little as 24 hours,
     lightweight agent), "Does ShieldNet replace our existing SIEM?"
     (complements; integrates with Splunk, Elastic, etc.), "What is your
     false positive rate?" (0.001%, AI engine), "Do you offer 24/7 managed
     detection and response?" (SOC 24/7/365, triage, containment), "How does
     ShieldNet protect against zero-day attacks?" (behavioral AI models vs
     signatures).
  8. CTA (`bg-gradient-to-br from-primary-600 to-primary-800`): h2 "Ready to
     Secure Your Organization?", blurb "Join thousands of security teams who
     trust ShieldNet to protect their most critical assets. Start your free
     trial today.", buttons "Start Free Trial" (white on gradient) + "Talk
     to Expert" (outline).
  9. Footer (`bg-gray-900`): brand blurb "Advanced threat protection
     platform for modern teams. Detect, prevent, and respond to cyber
     threats in real time.", phone/email/address, socials (Twitter,
     LinkedIn, GitHub), 3 link columns — Solutions (Endpoint Protection,
     Cloud Security, Identity Protection, Threat Intelligence), Resources
     (Documentation, Security Blog, Threat Reports, Webinars), Company
     (About, Careers, Contact, Partners) — Privacy Policy / Terms of
     Service / Style Guide links, copyright, cookie-consent dialog (Decline
     / Accept All), back-to-top button.

### Design tokens (from `/_astro/Base.D-cq-pmO.css` + DOM)

- **Brand colors — rose/red scale (primary):** #e11d48 (rose-600, primary
  buttons/logo/stats), darker #be123c, #9f1239, #881337 (CTA gradient
  stops, hover), lighter #f43f5e, #fb7185, #fda4af, #fecdd3, #ffe4e6,
  #fff1f2 (badge bg, hero gradient tint).
- **Neutrals — gray scale:** #f9fafb (50), #f3f4f6 (100), #e5e7eb (200),
  #d1d5db (300), #9ca3af (400), #6b7280 (500), #4b5563 (600), #374151
  (700), #1f2937 (800), #111827 (900, footer bg), #030712 (950).
- **Font:** "Inter" (Inter, system-ui, sans-serif), weights 300–800, via
  Google Fonts `<link>`.
- **Shapes:** pill buttons (`rounded-full`), `rounded-2xl` cards, small
  rounded status badges; sections alternate `bg-gray-50` / white with
  generous `py-20 lg:py-28` rhythm; dark mode via `dark:bg-gray-900` /
  `dark:bg-gray-950`.
- **Gradients:** hero `bg-gradient-to-b from-gray-50 via-primary-50/40
to-white`; CTA `bg-gradient-to-br from-primary-600 to-primary-800`;
  dashboard mockup shadow `shadow-2xl shadow-primary-900/10`.

### Recreation decisions

- Photos/graphics → seeded picsum placeholders
  (`https://picsum.photos/seed/aegis-<n>/<w>/<h>`); the hero "Threat
  Dashboard" mockup is built from real DOM (cards + feed), not an image.
- Icons → lucide-react (ShieldCheck, Cloud, Fingerprint, Radar, Bug,
  Siren, Phone, Mail, MapPin, Clock, Star, ChevronDown, ChevronLeft,
  ChevronRight, Send, PlayCircle, Sun, Moon, Menu, X, ArrowUp).
- Copy paraphrased; keep the same kind of content (headline + blurb + CTA,
  card title + blurb, FAQ Q/A, footer columns).
- The source's Project Type select options are construction-themed
  (Residential Construction, Commercial Building, Renovation & Remodeling,
  Interior Design, Other) — a copy-paste artifact from another template;
  replace with cybersecurity-appropriate options (EDR Deployment, Cloud
  Security, Incident Response, Compliance, Other).
- Implement the H1 typewriter tail with a CSS/JS cycling effect over
  ["Spread", "Escalate", "Damage"] with static fallback "Strike"; the stats
  band uses scroll-into-view animated counters starting at 0.
- Repo-standard Navbar (dark-mode toggle) + Footer chrome from `packages/ui`.

Aegis lives in `apps/aegis` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name "Aegis",
anchor links to the page's sections, a "Get Protected" button, a dark-mode
toggle, and a mobile menu.

#### Scenario: Navbar content

- **GIVEN** the Aegis page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "Aegis" with a shield icon
- **AND** the navbar SHALL show links for Solutions, Pricing, About, Blog,
  and Contact
- **AND** the navbar SHALL show a "Get Protected" button and a dark-mode
  toggle button

#### Scenario: Mobile menu

- **GIVEN** the viewport is narrow (mobile)
- **WHEN** the user opens the menu
- **THEN** the navigation links SHALL be revealed in a menu
- **AND** the menu SHALL be dismissible

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

### Requirement: Hero section

The system SHALL render a split hero with an eyebrow badge, a headline, a
blurb, two call-to-action buttons, a stats row, and a threat-dashboard
mockup.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain the badge "Trusted by 2,000+ Security Teams
  Worldwide"
- **AND** it SHALL contain a level-1 heading "Stop Threats Before They
  Strike"
- **AND** it SHALL show a "Start Free Trial" button and a "Watch Demo"
  button

#### Scenario: Hero stats

- **GIVEN** the hero is displayed
- **WHEN** the user reviews the hero stats row
- **THEN** it SHALL show the four stats 10M+ Endpoints Protected, 500B+
  Events Analyzed, 0.001% False Positive Rate, and 24/7 SOC Coverage

#### Scenario: Dashboard mockup

- **GIVEN** the hero is displayed
- **WHEN** the user reviews the right column
- **THEN** it SHALL show a "Threat Dashboard" mockup with a threat count, an
  active-endpoints count, a risk score, and a recent-detections feed

### Requirement: Stats band

The system SHALL render an animated stats band with four counters.

#### Scenario: Stats band content

- **GIVEN** the page is rendered
- **WHEN** the stats band is displayed
- **THEN** it SHALL show the four labels Endpoints Protected, Events
  Analyzed Daily, False Positive Rate, and SOC Coverage

#### Scenario: Counters animate

- **GIVEN** the stats band is visible in the viewport
- **WHEN** the counters animate
- **THEN** each counter SHALL display a non-zero value that increases toward
  its target

### Requirement: Defense section

The system SHALL render a cyber defense section with six capability cards.

#### Scenario: Defense content

- **GIVEN** the page is rendered
- **WHEN** the defense section is displayed
- **THEN** it SHALL contain the kicker "Solutions" and a heading "Complete
  Cyber Defense"
- **AND** it SHALL show cards for Endpoint Detection & Response, Cloud
  Security, Identity Protection, Threat Intelligence, Vulnerability
  Management, and Incident Response

### Requirement: Testimonials carousel

The system SHALL render a testimonials section as a carousel with quotes,
author details, navigation arrows, and slide indicators.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "Trusted by Security Leaders"
- **AND** it SHALL show at least one testimonial quote with a five-star row
  and an author name and role

#### Scenario: Navigate testimonials

- **GIVEN** the testimonials carousel is displayed
- **WHEN** the user presses the previous or next arrow
- **THEN** the visible testimonial SHALL change
- **AND** the slide indicator SHALL reflect the current position

### Requirement: Contact section

The system SHALL render a contact section with a lead form, contact details,
and a map embed.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain a heading "Talk to a Security Expert"
- **AND** it SHALL show a form with Full Name, Email Address, Phone Number,
  and Project Details fields and a "Send Message" button

#### Scenario: Form validation

- **GIVEN** the contact form is displayed
- **WHEN** the user submits with required fields empty or invalid
- **THEN** the form SHALL show per-field errors and SHALL NOT submit

#### Scenario: Contact details

- **GIVEN** the contact section is displayed
- **WHEN** the user reviews the contact information
- **THEN** it SHALL show a phone number, an email address, an address, and
  office hours (Mon–Fri, Sat, Sun Closed)

### Requirement: FAQ section

The system SHALL render an FAQ section with accordion items that expand on
activation.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Frequently Asked Questions"
- **AND** it SHALL show at least five question items about deployment, SIEM
  integration, false positive rate, 24/7 response, and zero-day protection

#### Scenario: Expand answer

- **GIVEN** the FAQ section is displayed
- **WHEN** the user activates a question item
- **THEN** the item's answer SHALL be revealed
- **AND** activating another item SHALL collapse the previous one

### Requirement: Call to action

The system SHALL render a closing gradient CTA with a headline and two
buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL contain a heading "Ready to Secure Your Organization?"
- **AND** it SHALL show "Start Free Trial" and "Talk to Expert" buttons

### Requirement: Footer

The system SHALL render a dark footer with link columns, contact details,
legal links, a cookie-consent dialog, and a back-to-top control.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show a brand blurb, the phone number, the email address,
  and the street address
- **AND** it SHALL show link columns Solutions, Resources, and Company
- **AND** it SHALL show Privacy Policy, Terms of Service, and Style Guide
  links and a copyright line

#### Scenario: Cookie consent

- **GIVEN** the page is rendered
- **WHEN** the cookie-consent dialog is shown
- **THEN** the user SHALL be able to accept or decline the consent
- **AND** the dialog SHALL disappear after a choice is made

#### Scenario: Back to top

- **GIVEN** the page is scrolled down
- **WHEN** the user presses the back-to-top button
- **THEN** the page SHALL scroll to the top

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Aegis app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Aegis — Security Template"

## Verification checklist

- [ ] `npm run verify:app aegis` (typecheck + lint + vitest 100% coverage +
      build) passes locally
- [ ] Sections render in the exact order: Navbar → Hero → Stats band →
      Defense → Testimonials → Contact → FAQ → CTA → Footer
- [ ] Design tokens match the reference: rose #e11d48 primary, gray scale,
      Inter font, pill buttons, rounded-2xl cards, hero + CTA gradients
- [ ] All copy paraphrased from the Shieldnet demo (same kind of content);
      no ColorLib assets copied
- [ ] `apps/aegis` package registered in `package-lock.json`
      (`grep -c "free-react-templates/aegis" package-lock.json`)
- [ ] README Templates status section regenerated after the PR merge
- [ ] TEMPLATES.md Shieldnet item flipped to `[x]` with the live Surge URL
      (by the implementer stream, after deploy)
