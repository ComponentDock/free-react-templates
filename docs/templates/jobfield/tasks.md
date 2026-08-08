# Jobfield (ColorLib Hirehub) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-jobfield`.

## Source mapping

- **ColorLib item:** "Hirehub" (TEMPLATES.md — THREE copies, lines 146,
  1040, 2915; mark ALL `[x]` when done).
- **Source URL:** https://colorlib.com/wp/template/hirehub/
- **Preview URL:** https://hirehub-colorlib.pages.dev/
  (HTTP 200, ~106 KB DOM — live, analyzed 2026-08-08). NOTE:
  `preview.colorlib.com/theme/hirehub/` returns 404 — the ColorLib preview
  portal maps this slug to `hirehub-colorlib.pages.dev/`. Do not redo this
  lookup.
- **Preview CSS:** `https://hirehub-colorlib.pages.dev/_astro/Base.Bv7s6dFD.css`
  (Tailwind v4 output; tokens extracted below).

## Reference research (done — do not redo)

### Screenshot (`hirehub-template.jpg`; verified via vision on the live demo)

Modern SaaS job-board landing page. Hero: vibrant deep indigo→purple
gradient, centered large bold white headline "Find Your Dream Job" with a
small green pill badge "2500+" above it, wide white pill-shaped search bar
with a purple search button. White navbar with dark text (Jobs/Companies/
About/Pricing/Blog/Contact + purple "Post a Job" button). Dark footer with 4
link columns (For Job Seekers / For Employers / Resources / Company) and
contact info. Clean, minimalist, tech-forward aesthetic.

### Live DOM (primary reference — matches the screenshot)

Section order: sticky header (`sticky top-0 z-50 w-full border-b
border-gray-200 bg-white/80 backdrop-blur-lg`; brand + 6 links + dark-mode
toggle + "Post a Job" `rounded-lg bg-primary-600 px-5 py-2.5 text-sm
font-medium text-white hover:bg-primary-700`; hamburger/drawer with stacked
links + full-width CTA) → hero (`relative overflow-hidden bg-gradient-to-br
from-primary-600 via-primary-700 to-purple-800 py-20 lg:py-32`; floating
blur circles `bg-white/5` / `bg-purple-400/10` / `bg-primary-400/10` with
`animate-hero-float`; emerald pill `rounded-full bg-accent-100 px-3 py-1
text-xs font-semibold text-accent-700` "2500+"; H1 `text-4xl font-extrabold
text-white sm:text-5xl lg:text-6xl` "Find Your Dream Job"; sub
`text-primary-100`; white `rounded-2xl` search card — textbox "Job title,
keyword, or company" + textbox "City, state, or remote" + category select
(All Categories / Technology / Design / Marketing / Finance / Healthcare /
Education / Sales / Engineering) + "Search Jobs" primary button; "Advanced
Filters" ghost `text-primary-100 hover:text-white`; trending links row:
React Developer, Product Manager, Data Scientist, UX Designer, DevOps
Engineer, Marketing Lead) → stats row (4 `data-counter` animated counters:
**2,500+ Active Jobs, 500+ Companies, 50K+ Successful Hires, 4.8 User
Rating**; the standalone `data-counter="2500"` above the headline is the
badge) → featured jobs (`border-y border-gray-200 bg-gray-50 py-16 lg:py-20`;
H2 "Latest Opportunities"; 6 job cards: Senior React Developer / TechFlow
Inc. / San Francisco CA / $140K–$180K / 2 days ago / React·TypeScript·Node.js,
Lead UX Designer / DesignCraft Studio / Remote / $120K–$160K / 1 day ago /
Figma·User Research·Design Systems, Data Scientist / DataVault Analytics /
New York NY / $130K–$170K / 3 days ago / Python·Machine Learning·SQL, DevOps
Engineer / CloudPeak Systems / Austin TX / $125K–$165K / 1 day ago /
AWS·Kubernetes·Terraform, Product Marketing Manager / GrowthLab Marketing /
Remote / $110K–$145K / 4 days ago / SaaS·Content Strategy·Analytics,
Financial Analyst / FinEdge Capital / Chicago IL / $95K–$125K / 2 days ago /
Financial Modeling·Excel·Python; each card: logo img, H3 `text-lg
font-semibold`, "Full-time" badge (emerald pill; featured card primary
pill), MapPin + location, salary, "X days ago", tag chips `rounded-md
bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600`, "Apply Now →"
`text-sm font-semibold text-primary-600 hover:text-primary-700`; "View All
Jobs" + "Browse Categories") → categories (`bg-white py-20 lg:py-28`; H2
"Explore by Category"; 8 cards — icon tile `flex h-12 w-12 items-center
justify-center rounded-xl bg-<hue>-100 text-<hue>-600 dark:bg-<hue>-900/50
dark:text-<hue>-400` (each a different hue), H3, "840 open positions":
Technology 840, Design 320, Marketing 275, Finance 190, Healthcare 210,
Education 165, Sales 230, Engineering 310) → companies (`bg-gray-50 py-20
lg:py-28`; H2 "Companies Hiring Now"; 6 cards — logo, name, industry,
location, "24 open positions" link; live pulse dot `absolute inline-flex
h-full w-full animate-ping rounded-full bg-accent-400 opacity-75` over
`bg-accent-500` dot; TechFlow Inc. Software Development San Francisco CA 24,
DesignCraft Studio Creative Agency New York NY 12, DataVault Analytics Data
& Analytics Seattle WA 18, CloudPeak Systems Cloud Infrastructure Austin TX
31, GrowthLab Marketing Digital Marketing Remote 9, FinEdge Capital
Financial Services Chicago IL 15; "View All Companies") → how it works
(`bg-white py-20 lg:py-28`; H2 "Your Path to Success"; tabs "For Job
Seekers"/"For Employers" — active `rounded-lg bg-primary-600 py-3 text-sm
font-semibold text-white`, inactive `bg-gray-100 text-gray-900
dark:bg-gray-800 dark:text-white`; job-seeker steps: Create Your Profile /
Discover Opportunities / Apply & Get Hired; employer steps: Post Your
Opening / Review Candidates / Hire Top Talent; each with numbered 01/02/03
badge + icon tile + title + description) → testimonials (`bg-gray-50 py-20
lg:py-28`; H2 "Success Stories"; carousel — quote card with 5 stars
`text-yellow-400`, quote, author + role + round avatar `h-12 w-12
rounded-full`, prev/next round white buttons `rounded-full bg-white p-2.5
shadow-lg hover:bg-gray-50`, 4 slide dots; quotes: "I found my dream job as
a Senior Engineer at a top startup within two weeks of joining…", "HireHub
has transformed our recruitment process…") → FAQ (`bg-white py-20 lg:py-28`;
H2 "Frequently Asked Questions"; 5-item accordion — Is HireHub free for job
seekers? / How do I post a job on HireHub? / How long does it take to get
hired? / Can I search for remote jobs specifically? / How does the candidate
matching work? — button + chevron, expanding answer) → job alerts (`bg-gradient-to-br
from-primary-600 via-primary-700 to-purple-800 py-20 lg:py-28`; H2 "Never
Miss an Opportunity" white + sub; email form `flex flex-col items-center
justify-center gap-4 sm:flex-row` — textbox "Enter your email" + "Get Job
Alerts" button; microcopy "Free forever. Unsubscribe anytime. No spam.") →
CTA (`bg-white py-20 lg:py-28`; H2 "Ready to Take the Next Step?" + sub; two
buttons "Find Jobs Now" primary + "Post a Job" secondary) → footer
(`bg-gray-900 pt-16 text-gray-300 lg:pt-24`; brand + blurb "Connect with
your next career opportunity. HireHub is the modern job board platform for
top talent and leading employers."; contact (555) 492-3847 / hello@hirehub.com
/ 200 Tech Boulevard, San Francisco, CA 94105; socials Twitter/LinkedIn/
Facebook/Instagram; columns FOR JOB SEEKERS (Browse Jobs, Companies, Career
Tips, Salary Guide), FOR EMPLOYERS (Post a Job, Pricing, For Employers,
Hiring Resources), RESOURCES (Blog, About Us, Features, Style Guide),
COMPANY (About, Contact, Privacy Policy, Terms of Service)) → bottom bar
(`border-t border-gray-200 bg-white px-4 py-4`; copyright + Privacy Policy /
Terms of Service / Style Guide / Find Jobs / Post a Job) → extras: cookie
consent dialog (Decline / Accept All), back-to-top floating button (`fixed
bottom-6 right-6 z-50 h-12 w-12 rounded-full bg-primary-600 text-white
shadow-lg shadow-primary-600/25 hover:bg-primary-700`).

## Design tokens (from `Base.Bv7s6dFD.css`)

- **Primary (indigo scale, Tailwind):** 100 #e0e7ff · 200 #c7d2fe · 300
  #a5b4fc · 400 #818cf8 (blobs) · 500 #6366f1 · 600 #4f46e5 (buttons,
  links, search) · 700 #4338ca (hover) · 800 #3730a3 · 900 #312e81 (dark
  gradient start) · 950 #1e1b4b (dark gradient via). → `@theme` as
  `--color-primary-*`.
- **Accent (emerald scale):** 100 #d1fae5 (badge/tile bg) · 300 #6ee7b7 ·
  400 #34d399 (ping) · 500 #10b981 (pulse dot) · 600 #059669 (tile text) ·
  700 #047857 (badge text) · 900 #064e3b (dark tile bg).
- **Gradient partner:** purple-400 #c084fc (blob) · purple-800 #6b21a8
  (hero/newsletter gradient end).
- **Category tile hues (100 bg / 400–600 text; dark `-900/50` bg / `-400`
  text):** blue (#dbeafe/#2563eb) · pink (#fce7f3/#db2777) · orange
  (#ffedd5/#ea580c) · emerald (accent) · red (#fee2e2/#dc2626) · purple
  (#f3e8ff/#9333ea) · yellow (#fef9c3/#ca8a04) · teal (#ccfbf1/#0d9488).
- **Stars:** yellow-400 #facc15 (testimonial ratings).
- **Grays:** 50 #f9fafb · 100 #f3f4f6 (inactive tab, chips) · 200 #e5e7eb
  (borders) · 300 #d1d5db · 400 #9ca3af · 500 #6b7280 · 600 #4b5563 (tag
  text) · 700 #374151 · 800 #1f2937 (dark borders/chips) · 900 #111827
  (footer/dark sections) · 950 #030712 (dark gradient end).
- **Font:** Inter only (300–800). Google Fonts `<link>`:
  `family=Inter:wght@300;400;500;600;700;800&display=swap`. Headings
  `font-bold`/`font-extrabold` — no serif anywhere.
- **Radii:** rounded-lg (buttons, job/company cards, tabs) · rounded-xl
  (icon tiles) · rounded-2xl (hero search card) · rounded-full (badges,
  avatars, arrows, back-to-top, pulse dots).
- **Buttons:** primary solid `rounded-lg bg-primary-600 px-5 py-2.5 text-sm
font-medium text-white transition-colors hover:bg-primary-700` (header
  Post a Job); search `px-6 py-3 text-sm font-semibold`; CTA `px-6 py-3
text-base`; ghost `text-primary-100 hover:text-white` (Advanced Filters);
  tab active `bg-primary-600 text-white` / inactive `bg-gray-100
text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white
dark:hover:bg-gray-700`; text link `text-sm font-semibold text-primary-600
hover:text-primary-700`; nav link `text-sm font-medium text-gray-700
hover:text-primary-600 dark:text-gray-300 dark:hover:text-white`.
- **Sections:** hero + job alerts gradient `bg-gradient-to-br from-primary-600
via-primary-700 to-purple-800`; white/gray-50 alternate (`py-20 lg:py-28`,
  container `mx-auto max-w-7xl px-4 lg:px-8`); featured jobs
  `border-y border-gray-200 bg-gray-50 py-16 lg:py-20`; footer bg-gray-900
  pt-16 lg:pt-24; bottom bar border-t bg-white px-4 py-4.
- **Dark mode:** `dark:` variants on every section/card; toggle flips `.dark`
  on `<html>` and persists.

## Implementation tasks (TDD order)

1. Scaffold `apps/jobfield` (copy simplest app, rename package
   `@free-react-templates/jobfield`, register `injectUiSource()` in
   `vite.config.ts`, run `npm install` at root so package-lock registers
   the workspace; `grep -c "free-react-templates/jobfield"
package-lock.json` ≥ 1).
2. `index.css`: `@theme` — `--color-primary-*` indigo scale + `--color-accent-*`
   emerald scale; import Inter in `index.html`.
3. Components: `Navbar` (sticky blurred, links, dark toggle, Post a Job,
   mobile drawer w/ aria-expanded), `Hero` (gradient, blobs, badge, H1,
   search card w/ 3 fields + select, Advanced Filters, trending links),
   `Stats` (4 animated `data-counter` counters), `FeaturedJobs` (6 cards),
   `Categories` (8 hue-tiled cards), `Companies` (6 cards + pulse dots),
   `HowItWorks` (tabbed 3+3 steps), `Testimonials` (carousel: prev/next +
   dots), `Faq` (accordion), `JobAlerts` (email form), `Cta`, `Footer` (4
   columns + contact + bottom bar), `CookieConsent` (Decline/Accept All),
   `BackToTop`. Compose in `App.tsx`.
4. Tests per component mirroring the spec scenarios (100% coverage; watch
   for duplicate nav links in drawer → `getAllByRole` and index; carousel
   slides → `getByRole('button', {name: 'Go to slide N'})`).
5. Icons: lucide-react `Briefcase`, `Search`, `MapPin`, `Menu`, `X`,
   `Moon`, `Sun`, `ChevronDown`, `ChevronLeft`, `ChevronRight`, `ArrowRight`,
   `ArrowUp`, `Star`, `Building2`, `Users`, `Rocket`, `FileText`,
   `CheckCircle2`, `Mail`, `Phone`, `Filter`; Twitter/X, LinkedIn, Facebook,
   Instagram → inline SVG.
6. Images: `picsum.photos/seed/jobfield-<n>/<w>/<h>` — company logos 96×96,
   job/company card logos 56×56 or 400×300, testimonial avatars 100×100.
7. Verify: `scripts/verify-app.sh jobfield`; push PR, squash-merge
   immediately, then `[~]`→`[x]` on ALL THREE TEMPLATES.md lines (146,
   1040, 2915) + surge URL + `npm run readme:status`.

## Fidelity notes

- Section order + headings are the fidelity contract — keep 1:1.
- The indigo→purple hero gradient + white search card + emerald "2500+"
  badge are the signature look — do not flatten the gradient or recolor.
- Inter-only typography (no serif) — headings are bold/extrabold Inter.
- `data-counter` stats animate from 0 on scroll — implement with a small
  `useInView`/IntersectionObserver counter hook.
- Category icon tiles each need a DIFFERENT hue (blue/pink/orange/emerald/
  red/purple/yellow/teal) — 100 bg / 600 text, dark `-900/50` / `-400`.
- Multi-page routes (Jobs/Companies/About/Pricing/Blog/Contact) collapse to
  single-page anchors; keep the nav link LABELS unchanged.
- Rebrand copy: "HireHub" → "Jobfield", `hello@hirehub.com` →
  `hello@jobfield.com`. Keep the same _kind_ of content everywhere else.
