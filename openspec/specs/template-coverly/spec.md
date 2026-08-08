# Template: Coverly (Insurance Template)

## Purpose

Coverly is a single-page insurance company landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "Shieldguard" website template design
(source: https://colorlib.com/wp/template/shieldguard/), built under a
DIFFERENT name (Coverly — coverage, made personal) per the monorepo naming
mandate, with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

> NOTE (prep-stream 2026-08-08): a stale prep existed at
> `openspec/specs/template-shieldguard/` using the FORBIDDEN ColorLib source
> name; it was deleted and replaced by this fresh prep (new name Coverly),
> matching the Pipelineiq→Dealflow / Logitrans→Freightly precedent. The stale
> prep's research was re-verified against the live demo and corrected: hero
> badge + H1 typewriter effect, hero stats row + trust badges, JS-animated
> counters band, rounded-lg (not pill) CTAs, and the Contact section (form +
> info) that the stale prep had missed entirely.

## Design reference (replication findings)

- **Original:** ColorLib "Shieldguard" — insurance company landing template
  (source: https://colorlib.com/wp/template/shieldguard/).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/shieldguard/`
  returns 404; the ColorLib preview portal hosts the demo at
  `https://shieldguard-colorlib.pages.dev/` (HTTP 200, ~79 KB HTML +
  `/_astro/Base.BZ-9KC9t.css` ~63 KB parsed for tokens — same
  `<slug>-colorlib.pages.dev` pattern as Dealflow/Freightly). The TEMPLATES.md
  screenshot (`shieldguard-template-1771943902281.jpg`) is the visual
  reference: airy white-to-ice-blue hero, corporate blue (#2563eb) primary +
  vibrant green (#16a34a) accent, no photography (typography + icons/badges),
  dark navy footer.
- **Section order (1:1, from live demo DOM):**
  1. Navbar (white/80 blur, sticky): "ShieldGuard" shield-icon logo + links
     About, Coverage, Why Us, Process, Testimonials, Pricing, Blog, Services,
     Contact + "Get a Quote" pill CTA; dark-mode toggle + mobile hamburger
     drawer.
  2. Hero (`bg-gradient-to-b from-primary-50 to-white`, centered): pill badge
     "Trusted by 50,000+ Families", H1 "Protection You Can Count On" — the
     tail "Count On" is a gradient `text-gradient` span with a typewriter
     effect cycling ["Depend On", "Trust In", "Rely On"], blurb
     "Comprehensive insurance coverage tailored to your life. From auto and
     home to life and health, we make protecting what matters most simple,
     affordable, and stress-free.", CTAs "Get Free Quote" (solid primary,
     `rounded-lg`, `shadow-lg shadow-primary-600/25`) + "Call (555) 567-8901"
     (white/border secondary), stats row (50,000+ Clients Protected, 98% Claim
     Approval, A+ AM Best Rating, 24/7 Support Available), then 3 small green
     trust badges (BBB Accredited, AM Best Rated, Licensed in 50 States).
  3. Stats band (`border-y border-gray-200 bg-gray-50`): 4 JS-animated
     counters — Claims Paid, Active Policies, Claims Approval, Years Trusted
     (static DOM renders "0", counters animate on scroll into view).
  4. Coverage (id="coverage", `bg-gray-50`): kicker pill "Coverage Options",
     h2 "Insurance for Every Need", blurb, 6 cards — Auto Insurance
     (liability/collision/comprehensive; "Bundle and save up to 25%"), Home
     Insurance, Life Insurance (flexible plans from $15/month), Health
     Insurance, Business Insurance, Umbrella Insurance — each with icon,
     blurb, "Learn More" link.
  5. Why Us (id="why-us", white): kicker "Why ShieldGuard", h2 "The Smart
     Choice for Coverage", 4 cards — Save Up to 35%, Claims in 24 Hours,
     Personal Advisors, Digital First.
  6. Process (id="process", `bg-gray-50`): kicker "How It Works", h2 "Getting
     Covered is Easy", 3 numbered steps (01 Get a Quote, 02 Choose Your Plan,
     03 You're Covered).
  7. Calculator (id="calculator", white): kicker "Savings" (GREEN accent
     pill, unlike the blue kickers elsewhere), h2 "See How Much You Could
     Save", form: Coverage Type (select: Auto/Home/Life/Health), Current
     Monthly Premium ($) number input, Age Range (radio: 18-25, 26-35, 36-50,
     51-65, 65+), "Calculate Savings" button → reveals "Estimated Annual
     Savings / Up to $540/year" + disclaimer "*Estimates are for illustration
     only. For accurate quotes, contact our advisors."
  8. Testimonials (id="testimonials", `bg-gray-50`): kicker "Testimonials",
     h2 "What Our Clients Say", blurb, 6 quote cards with initial avatar,
     quote, name + role (Jennifer Martinez — Homeowner, Austin TX; David
     Thompson — Auto Insurance Client; Patricia Chen — CEO, Bright Ideas LLC;
     Tom & Lisa Park — Homeowner; + 2 more); carousel with round prev/next
     buttons (`rounded-full bg-white p-2 shadow-lg`).
  9. FAQ (id="faq", white): kicker "FAQ", h2 "Common Questions", 6 accordion
     items (coverage types, how to file a claim, bundling discounts, policy
     cancellation, premium calculation, coverage for new drivers/first-time
     homebuyers).
  10. Contact (id="contact", `bg-gray-50`): kicker "Get Started", h2 "Request
      Your Free Quote", blurb "Fill out the form below and one of our
      licensed advisors will get back to you within one business day…", form
      (Full Name, Email Address, Phone Number, Coverage Type select incl.
      Umbrella/Other, Message, submit "Request Free Quote" — GREEN accent
      button `bg-accent-600`) + Contact Information card (Phone
      (555) 567-8901, Email info@shieldguard.com, Office Hours Mon-Fri 8am-6pm
      / Sat 9am-1pm) + "Licensed in All 50 States" note.
  11. Footer (`bg-gray-900`): brand blurb "Comprehensive insurance solutions
      that protect what matters most…", columns Coverage / Resources /
      Company / Contact Us, © 2026 ShieldGuard. All rights reserved., links
      Privacy Policy / Terms of Service / Style Guide.
- **Design tokens (from Base.BZ-9KC9t.css + DOM):**
  - Brand primary (blue scale, Tailwind blue): #2563eb (primary-600, buttons),
    #1d4ed8 (primary-700 hover), #1e3a8a (primary-800), #3b82f6 (500),
    #60a5fa (400, dark:text-primary-400), #dbeafe (primary-100 kicker pills),
    #eff6ff (primary-50 hero gradient top).
  - Accent (green scale, used for calculator submit + savings/trust accents):
    #16a34a (accent-600), #15803d (accent-700), #dcfce7 (accent-100 pills),
    #14532d (accent-900/50 dark pills).
  - Neutrals (Tailwind gray): #f9fafb (50), #f3f4f6 (100), #e5e7eb (200),
    #d1d5db (300), #9ca3af (400), #6b7280 (500), #4b5563 (600), #374151 (700),
    #1f2937 (800), #111827 (900, footer bg), #030712 (950).
  - Font: **"Manrope"** (Manrope, system-ui, sans-serif) via Google Fonts.
  - Shapes: CTAs `rounded-lg` (NOT pill) with `shadow-lg shadow-primary-600/25`
    hover:bg-primary-700; nav CTA pill; cards rounded-2xl; kickers =
    `rounded-full bg-primary-100 px-3 py-1 text-sm` pills; carousel nav +
    dark-toggle + avatars `rounded-full`; FAQ/contact inputs rounded-lg.
  - Rhythm: sections alternate white / `bg-gray-50` with `py-20 lg:py-28`;
    hero gradient `from-primary-50 to-white`; dark mode: full `dark:` variants
    (dark:bg-gray-900 sections, dark:bg-gray-950 hero bottom, dark:border-gray-800).
- **Recreation decisions:** no photography in the reference — keep the
  icon/badge-driven aesthetic; any imagery → seeded picsum placeholders
  (`picsum.photos/seed/coverly-<n>/<w>/<h>`); icons → lucide-react (Shield,
  Car, Home, HeartPulse, Briefcase, Umbrella, Phone, Mail, Clock, Star,
  ChevronDown, Calculator, CheckCircle, Menu, Sun, Moon, Quote); Manrope via
  Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome from
  packages/ui patterns.

Coverly lives in `apps/coverly` and uses shared components from `packages/ui`
(Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a top navigation bar with the site name, anchor links
to the page's sections, a "Get a Quote" button, and a dark-mode toggle button.

#### Scenario: Navbar content

- **GIVEN** the Coverly page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the site name "ShieldGuard" and links to
  Coverage, Why Us, Process, Testimonials, FAQ, and Contact
- **AND** the navbar SHALL show a "Get a Quote" button and a dark-mode toggle
  button

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** the toggle SHALL reflect the current mode

#### Scenario: Mobile navigation

- **GIVEN** the page is rendered at a mobile viewport
- **WHEN** the user presses the hamburger toggle
- **THEN** a navigation drawer SHALL open with the same links and a "Get a
  Quote" button

### Requirement: Hero section

The system SHALL render a hero with a trust badge, a headline, a blurb, two
call-to-action buttons, a stats row, and trust badges.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL contain a badge "Trusted by 50,000+ Families"
- **AND** it SHALL contain a level-1 heading "Protection You Can Count On"
- **AND** it SHALL show a "Get Free Quote" button and a "Call (555) 567-8901"
  link

#### Scenario: Hero stats and trust badges

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the stats "50,000+ Clients Protected", "98% Claim
  Approval", "A+ AM Best Rating", and "24/7 Support Available"
- **AND** it SHALL show the badges "BBB Accredited", "AM Best Rated", and
  "Licensed in 50 States"

### Requirement: Stats band

The system SHALL render a stats band with four counters.

#### Scenario: Stats content

- **GIVEN** the page is rendered
- **WHEN** the stats band is displayed
- **THEN** it SHALL show the labels Claims Paid, Active Policies, Claims
  Approval, and Years Trusted

### Requirement: Coverage section

The system SHALL render a coverage section with six insurance cards.

#### Scenario: Coverage content

- **GIVEN** the page is rendered
- **WHEN** the coverage section is displayed
- **THEN** it SHALL contain a heading "Insurance for Every Need"
- **AND** it SHALL show cards for Auto, Home, Life, Health, Business, and
  Umbrella insurance, each with a "Learn More" link

### Requirement: Why us section

The system SHALL render a why-us section with four value cards.

#### Scenario: Why us content

- **GIVEN** the page is rendered
- **WHEN** the why-us section is displayed
- **THEN** it SHALL contain a heading "The Smart Choice for Coverage"
- **AND** it SHALL show cards for "Save Up to 35%", "Claims in 24 Hours",
  "Personal Advisors", and "Digital First"

### Requirement: Process section

The system SHALL render a process section with three steps.

#### Scenario: Process content

- **GIVEN** the page is rendered
- **WHEN** the process section is displayed
- **THEN** it SHALL contain a heading "Getting Covered is Easy"
- **AND** it SHALL show the steps Get a Quote, Choose Your Plan, and
  You're Covered

### Requirement: Savings calculator

The system SHALL render a savings calculator that reveals an estimate when
activated.

#### Scenario: Calculator content

- **GIVEN** the page is rendered
- **WHEN** the calculator section is displayed
- **THEN** it SHALL contain a heading "See How Much You Could Save"
- **AND** it SHALL show a Coverage Type select, a premium input, age range
  options, and a "Calculate Savings" button

#### Scenario: Calculate savings

- **GIVEN** the calculator is displayed
- **WHEN** the user presses "Calculate Savings"
- **THEN** the section SHALL reveal an estimated annual savings value

### Requirement: Testimonials section

The system SHALL render a testimonials section with at least three quotes.

#### Scenario: Testimonials content

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL contain a heading "What Our Clients Say"
- **AND** it SHALL show at least three testimonial quotes with author names

### Requirement: FAQ section

The system SHALL render an FAQ section with accordion items that expand on
activation.

#### Scenario: FAQ content

- **GIVEN** the page is rendered
- **WHEN** the FAQ section is displayed
- **THEN** it SHALL contain a heading "Common Questions"
- **AND** it SHALL show at least six question items

#### Scenario: Expand answer

- **GIVEN** the FAQ section is displayed
- **WHEN** the user activates a question item
- **THEN** the item's answer SHALL be revealed

### Requirement: Contact section

The system SHALL render a contact section with a quote form and contact
information.

#### Scenario: Contact content

- **GIVEN** the page is rendered
- **WHEN** the contact section is displayed
- **THEN** it SHALL contain a heading "Request Your Free Quote"
- **AND** it SHALL show a form with name, email, phone, coverage type, and
  message fields and a "Request Free Quote" submit button
- **AND** it SHALL show the phone number (555) 567-8901 and the email
  info@shieldguard.com

### Requirement: Footer

The system SHALL render a dark footer with link columns, contact details, and
a copyright line.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show Coverage, Resources, and Company link columns and a
  copyright line
- **AND** it SHALL show a phone number and an email address

### Requirement: Page composition

The system SHALL compose all sections in a single page with a main landmark
and a document title.

#### Scenario: Full page render

- **GIVEN** the Coverly app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Coverly — Insurance Template"

## Verification checklist

- [ ] `npm run verify:app coverly` passes: typecheck, lint, vitest with
      100% coverage (lines/functions/branches/statements), production build
- [ ] All requirements above covered by tests (Gherkin scenarios → vitest +
      Testing Library)
- [ ] Section order matches the reference 1:1 (Navbar → Hero → Stats band →
      Coverage → Why Us → Process → Calculator → Testimonials → FAQ →
      Contact → Footer)
- [ ] Design tokens in `@theme`: primary #2563eb scale, accent #16a34a scale,
      Manrope font, rounded-lg CTAs, alternating white/gray-50 sections
- [ ] Hero headline tail uses the gradient typewriter effect (Depend On /
      Trust In / Rely On) per the live demo
- [ ] Stats band counters animate (scroll-into-view reveal at minimum)
- [ ] All images are seeded picsum placeholders (`coverly-<n>`); no ColorLib
      assets copied
- [ ] Icons from lucide-react; shared components from packages/ui (Button,
      ButtonLink, Badge, Card, cn)
- [ ] README templates-status table updated after merge
      (`npm run readme:status`)
