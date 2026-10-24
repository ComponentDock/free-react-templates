# Dentora (ColorLib Brightsmile) — Tasks & Design Notes

> **SHIPPED** — this prep's design shipped as `apps/dentora`
> (<https://dentora.free.componentdock.com>). The unchecked items below are
> prep history, not outstanding work.

> Implementation artifact for the `feat/template-dentora` run. Dentora is the
> NEW original name for the recreation of ColorLib "Brightsmile"
> (https://colorlib.com/wp/template/brightsmile/).

## Design notes (replication findings)

- **Original:** ColorLib "Brightsmile" — dental clinic template
  (source: https://colorlib.com/wp/template/brightsmile/).
- **Preview DOM analyzed:** `https://preview.colorlib.com/theme/brightsmile/`
  returned 404 at prep time; the live demo is https://brightsmile-colorlib.pages.dev/
  (HTTP 200 at prep time, Astro + Tailwind, `_astro/Base.*.css` 62 KB parsed for tokens).
  Screenshot `brightsmile-template-1771943701965.jpg` viewed in browser
  (2400×1892): confirms teal/seafoam primary, white navbar, centered hero,
  pill buttons, stats row.

✅ **Pointer status — live reference re-probed 2026-10-13d (bot wall
lifted):** the demo is served by the ColorLib preview host —
`https://preview.colorlib.com/theme/brightsmile/` answers **HTTP 200**,
98,660 B `text/html; charset=utf-8` (90,915 B, sha256 `52f279e7a284…` after
stripping the injected print-media `@font-face` block and the Insights
beacon); its stylesheet
`https://preview.colorlib.com/theme/brightsmile/_astro/Base.C5WGEIoF.css` is
62,334 B sha256 `eecacaeac5e9…`; 6 of the 7 hex tokens recorded below are
present in it (Plus Jakarta Sans) and the remaining 1 are absent from both
the live sheet and the live page — re-check the token table before reusing
them. The Cloudflare Pages mirror `https://brightsmile-colorlib.pages.dev`
is still **NXDOMAIN** (re-checked 2026-10-13d). ⚠️ `apps/dentora` was built
from the mirror's tokens before the migration, so it follows the mirror, not
today's preview host.
- **Design tokens:**
  - Brand teal scale (Tailwind teal): 50 `#f0fdfa`, 100 `#ccfbf1`, 400
    `#2dd4bf`, 500 `#14b8a6`, 600 `#0d9488` (buttons), 700 `#0f766e`,
    800 `#115e59` (gradients). Stars `yellow-400 #facc15`. Light surfaces
    white/`gray-50`; dark surfaces `gray-950/900/800`.
  - Font: **Plus Jakarta Sans** (300–800) via Google Fonts `<link>`.
  - Buttons: `rounded-full` pills; cards `rounded-2xl` + soft shadow.
- **Structure (1:1, section order):**
  1. Sticky navbar (white/80 blur): logo "Dentora" + tooth mark, links
     (Services, Team, Why Us, Testimonials, FAQ, Contact), "Book
     Appointment" pill, dark-mode toggle.
  2. Hero (gradient `from-primary-50`): badge "Now Accepting New
     Patients", H1 "Your Smile Deserves the Best Care", blurb, pills
     "Book Appointment" + "Call (555) 234-5678", stats row (15+ Years
     Experience, 10,000+ Happy Patients, 4.9★ Star Rating, Same-Day
     Appointments), office photo.
  3. Stats strip (border-y, gray-50): Happy Patients / Years Experience /
     Expert Dentists / Satisfaction Rate (animated counters in demo →
     static final values).
  4. Services (gray-50): "Comprehensive Dental Care" + 6 cards (General
     Dentistry, Cosmetic Dentistry, Dental Implants, Orthodontics, Teeth
     Whitening, Emergency Care).
  5. Team (white): "Meet Our Dentists" + 3 cards (Dr. Sarah Mitchell —
     Lead Dentist DDS, UCSF; Dr. James Park — Cosmetic Dentist DMD,
     Columbia; Dr. Maria Santos — Orthodontist DDS MS, Columbia CDM).
  6. Why Us: "Why Choose Us / Modern Care You Can Trust" + 4 features
     (Advanced Technology, Gentle Approach, Flexible Scheduling,
     Insurance Friendly).
  7. Results (white): "See the Difference" + before/after pairs (Teeth
     Whitening, Cosmetic Veneers) with Before/After labels.
  8. Testimonials (gray-50): "What Our Patients Say" — carousel, 6
     reviews, 5 yellow stars each, initial avatar, name + role; prev/next
     arrow controls + dot pagination.
  9. Insurance (white): "We Accept Most Insurance Plans" + 6 plan cards
     (Aetna, Cigna, Delta Dental, MetLife, United Healthcare, Blue Cross
     Blue Shield) all "In-network provider" + "Don't see your insurance
     plan?" note.
  10. Emergency CTA (gradient `from-primary-600 to-primary-800`):
      "Dental Emergency? We're Here for You" + "Call Now" / "Book Online".
  11. FAQ (white): "Frequently Asked Questions" — 5-item accordion.
  12. Contact (gray-50): "Schedule Your Visit" — form (Full Name, Email
      Address, Phone Number, Service Needed select: General Checkup /
      Teeth Cleaning / Cosmetic Consultation / Dental Implants /
      Orthodontics / Teeth Whitening / Emergency Care / Other, Preferred
      Date, Message, "Request Appointment") + info cards (Visit Us 789
      Dental Way, Call Us (555) 234-5678, Email Us, Office Hours Mon–Fri
      8–6 · Sat 9–2 · Sun Closed).
  13. Footer (gray-900/950): brand blurb + Services / Patient Info /
      Clinic / Contact Us columns, socials, copyright + Privacy / Terms /
      Style Guide links.

## Tasks

- [x] Claim: `feat/template-dentora` branch, TEMPLATES.md Brightsmile → `[~]`
- [x] Replication: demo DOM + CSS tokens + screenshot
- [x] Spec: `openspec/specs/template-dentora/spec.md`
- [ ] Scaffold `apps/dentora` (copy apps/fade; rename package; injectUiSource; homepage)
- [ ] TDD: Navbar, Hero, Stats, Services, Team, WhyUs, Results, Testimonials, Insurance, Cta, Faq, Contact, Footer + App tests
- [ ] `npm install` (lockfile) + `grep -c free-react-templates/dentora package-lock.json`
- [ ] `scripts/verify-app.sh dentora` + `npm run spec:validate`
- [ ] PR → merge immediately
- [ ] Bookkeeping: TEMPLATES.md `[x]` + surge URL, homepage, `npm run readme:status`, push

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/dentora/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/dentora/public/CNAME` = `dentora.free.componentdock.com`
  and the package `homepage` = `https://dentora.free.componentdock.com`.
