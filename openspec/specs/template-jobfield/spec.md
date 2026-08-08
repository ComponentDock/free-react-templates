# Template: Jobfield (Job Board Template)

## Purpose

Jobfield is a single-page job-board landing template in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib free "HireHub" website template design (see TEMPLATES.md — THREE
copies: lines 146, 1040, 2915; mark ALL `[x]` when done), built under a
different name with the monorepo stack: Vite + React 19 + Tailwind CSS 4 +
TypeScript.

## Design reference (replication findings)

- **Original:** ColorLib "HireHub" — modern job-board landing template
  (source: https://colorlib.com/wp/template/hirehub/). The ColorLib template
  page describes it as an Astro + Tailwind 4.x design with a job search
  hero, featured jobs, categories, companies, how-it-works tabs, success
  stories carousel, FAQ accordion, job alerts newsletter and dark mode.
- **Preview URL:** `https://preview.colorlib.com/theme/hirehub/` returns
  HTTP 404 (confirmed 2026-08-08). The live rendered demo is hosted on
  Cloudflare Pages: `https://hirehub-colorlib.pages.dev/` (HTTP 200,
  ~106 KB HTML; Astro stylesheet `/_astro/Base.Bv7s6dFD.css` ~60 KB parsed
  for tokens). TEMPLATES.md screenshot (`hirehub-template.jpg`) viewed in
  the browser; the pages.dev demo matches the screenshot 1:1 (same
  indigo→purple gradient hero, "Find Your Dream Job" white headline, green
  "2500+" pill badge, white pill search bar, dark footer with 4 link
  columns).
- **Visual design (from screenshot + live demo):** modern SaaS job board.
  Hero = vibrant indigo→purple gradient (`bg-gradient-to-br from-primary-600
via-primary-700 to-purple-800`) with floating decorative blur circles
  (`bg-white/5`, `bg-purple-400/10`, `bg-primary-400/10` with
  `animate-hero-float`), small **emerald pill badge "2500+"** above the
  centered white bold headline "Find Your Dream Job", sub-paragraph, a wide
  **white rounded-2xl search bar** (keyword input + location input +
  category select + indigo "Search Jobs" button), an "Advanced Filters"
  ghost button, and a row of trending job links (React Developer, Product
  Manager, Data Scientist, UX Designer, DevOps Engineer, Marketing Lead).
  Below the hero: a stats row with animated counters (**2,500+ Active Jobs,
  500+ Companies, 50K+ Successful Hires, 4.8 User Rating** — `data-counter`
  animation). Signature look: **indigo primary** (`#4f46e5`) for buttons,
  links and the hero/newsletter gradients; **emerald accent** (`#059669`,
  `#34d399`) for badges, live-dot pulses and some icon tiles; **Inter**
  sans for everything (headings are bold Inter, no serif); `rounded-lg`
  buttons/cards, `rounded-xl` icon tiles, `rounded-full` pills; body
  sections alternate `bg-white` / `bg-gray-50`. Full dark mode (`dark:`
  variants) with a `.dark` class toggle in the navbar. Sections: navbar →
  hero → stats → featured jobs → categories → companies → how it works →
  testimonials → FAQ → job alerts → CTA → footer.
- **Section order (1:1):**
  1. Header (`header.sticky.top-0.z-50.w-full.border-b.border-gray-200.bg-white/80.backdrop-blur-lg.transition-all`, dark: `dark:border-gray-800 dark:bg-gray-950/80`): brand wordmark left (logo mark + "HireHub" → "Jobfield"); center links `text-sm font-medium text-gray-700 hover:text-primary-600` — Jobs, Companies, About, Pricing, Blog, Contact; right: dark-mode toggle button (icon-only, `aria-label`), "Post a Job" button (`rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700`); mobile hamburger revealing a drawer (`border-t border-gray-200 bg-white px-4 py-4 dark:border-gray-800 dark:bg-gray-950`) with stacked links `block py-3 text-base font-medium text-gray-900 dark:text-white` and a full-width "Post a Job" CTA.
  2. Hero (`section.relative.overflow-hidden.bg-gradient-to-br.from-primary-600.via-primary-700.to-purple-800.py-20.lg:py-32`, dark: `dark:from-primary-900 dark:via-primary-950 dark:to-gray-950`): decorative blurred circles (absolute, `animate-hero-float` / `animate-hero-float-reverse`); centered content — emerald pill badge (`rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-700` "2500+"), H1 `text-4xl font-extrabold text-white sm:text-5xl lg:text-6xl` "Find Your Dream Job", sub-paragraph `text-primary-100` "Search thousands of opportunities from top companies worldwide. Your next career move starts here."; search form (`flex flex-col gap-3 sm:flex-row sm:items-center` inside a white `rounded-2xl` card) — textbox "Job title, keyword, or company" (search icon), textbox "City, state, or remote" (map-pin icon), category `<select>` (All Categories, Technology, Design, Marketing, Finance, Healthcare, Education, Sales, Engineering), "Search Jobs" button (`rounded-lg bg-primary-600 px-6 py-3 text-sm font-semibold text-white hover:bg-primary-700`); below: "Advanced Filters" ghost button (`text-primary-100 hover:text-white`) + trending links row (text-white/90 with `#` separators or chips).
  3. Stats row (same gradient section, bottom): 4 animated counters — **2,500+** Active Jobs, **500+** Companies, **50K+** Successful Hires, **4.8** User Rating (`data-counter` animation from 0, white bold numbers + `text-primary-100` labels).
  4. Featured Jobs (`section.border-y.border-gray-200.bg-gray-50.py-16.lg:py-20`, dark: `dark:border-gray-800 dark:bg-gray-900`): centered H2 `text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white` "Latest Opportunities" + sub-paragraph; grid of 6 job cards — company logo image, "Full-time" badge (some cards `rounded-full bg-accent-100 px-3 py-0.5 text-xs font-semibold text-accent-700`, featured card uses `bg-primary-600 text-white`), H3 title (`text-lg font-semibold text-gray-900 dark:text-white`), company name, location (MapPin icon), salary range, "X days ago", skill tag chips (`rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300`), "Apply Now →" link (`text-sm font-semibold text-primary-600 hover:text-primary-700`). Jobs: Senior React Developer (TechFlow Inc., San Francisco CA, $140K–$180K, 2 days, React/TypeScript/Node.js), Lead UX Designer (DesignCraft Studio, Remote, $120K–$160K, 1 day, Figma/User Research/Design Systems), Data Scientist (DataVault Analytics, New York NY, $130K–$170K, 3 days, Python/Machine Learning/SQL), DevOps Engineer (CloudPeak Systems, Austin TX, $125K–$165K, 1 day, AWS/Kubernetes/Terraform), Product Marketing Manager (GrowthLab Marketing, Remote, $110K–$145K, 4 days, SaaS/Content Strategy/Analytics), Financial Analyst (FinEdge Capital, Chicago IL, $95K–$125K, 2 days, Financial Modeling/Excel/Python). Links below: "View All Jobs" (primary) + "Browse Categories".
  5. Categories (`section.bg-white.py-20.lg:py-28`, dark: `dark:bg-gray-950`): H2 "Explore by Category" + sub-paragraph; grid of 8 category cards — icon tile (`flex h-12 w-12 items-center justify-center rounded-xl bg-<hue>-100 text-<hue>-600 dark:bg-<hue>-900/50 dark:text-<hue>-400`; each category a different hue: blue, pink, orange, emerald(accent), red, purple, yellow, teal), H3 title (`text-lg font-semibold`), "840 open positions" count (`text-sm text-gray-500 dark:text-gray-400`). Categories: Technology 840, Design 320, Marketing 275, Finance 190, Healthcare 210, Education 165, Sales 230, Engineering 310.
  6. Companies (`section.bg-gray-50.py-20.lg:py-28`, dark: `dark:bg-gray-900`): H2 "Companies Hiring Now" + sub-paragraph; grid of 6 company cards — logo image, company name (`text-lg font-semibold`), industry, location, "24 open positions" link (`text-sm font-semibold text-primary-600`); some cards have a live pulse dot (`absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-400 opacity-75` over an `bg-accent-500` dot). Companies: TechFlow Inc. (Software Development, San Francisco CA, 24), DesignCraft Studio (Creative Agency, New York NY, 12), DataVault Analytics (Data & Analytics, Seattle WA, 18), CloudPeak Systems (Cloud Infrastructure, Austin TX, 31), GrowthLab Marketing (Digital Marketing, Remote, 9), FinEdge Capital (Financial Services, Chicago IL, 15). "View All Companies" link below.
  7. How It Works (`section.bg-white.py-20.lg:py-28`, dark: `dark:bg-gray-950`): H2 "Your Path to Success" + sub-paragraph; two tab buttons "For Job Seekers" / "For Employers" (active: `rounded-lg bg-primary-600 text-white`, inactive: `bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-white`) switching 3 steps: Job seekers — **Create Your Profile** ("Build a standout profile showcasing your skills, experience, and career goals. Upload your resume and let employers find you."), **Discover Opportunities** ("Search and filter thousands of jobs by role, location, salary, and more. Get personalized recommendations."), **Apply & Get Hired** ("Apply with one click, track your applications, and connect directly with hiring managers."); Employers — **Post Your Opening** ("Create compelling job listings in minutes. Specify requirements, benefits, and company culture."), **Review Candidates** ("Access a curated pool of pre-screened talent. Use smart filters to find candidates that fit."), **Hire Top Talent** ("Schedule interviews, collaborate with your team, and make offers — all within the platform."). Each step: numbered badge (01/02/03) + icon tile + title + description.
  8. Testimonials (`section.bg-gray-50.py-20.lg:py-28`, dark: `dark:bg-gray-900`): H2 "Success Stories" + sub-paragraph; carousel — quote card (5-star row `text-yellow-400`, quote text, author + role + round avatar `h-12 w-12 rounded-full`), prev/next round buttons (`rounded-full bg-white p-2.5 shadow-lg hover:bg-gray-50`), 4 slide dots (Go to slide 1–4). Quotes include a job-seeker and an employer testimonial ("I found my dream job as a Senior Engineer at a top startup within two weeks of joining…", "HireHub has transformed our recruitment process…").
  9. FAQ (`section.bg-white.py-20.lg:py-28`, dark: `dark:bg-gray-950`): H2 "Frequently Asked Questions" + sub-paragraph; accordion of 5 items — "Is HireHub free for job seekers?", "How do I post a job on HireHub?", "How long does it take to get hired?", "Can I search for remote jobs specifically?", "How does the candidate matching work?" — each a button with question + chevron, expanding to reveal the answer paragraph.
  10. Job Alerts (`section.bg-gradient-to-br.from-primary-600.via-primary-700.to-purple-800.py-20.lg:py-28`, dark: `dark:from-primary-900 dark:via-primary-950 dark:to-gray-950`): centered H2 white "Never Miss an Opportunity" + sub-paragraph `text-primary-100`; email form (`flex flex-col items-center justify-center gap-4 sm:flex-row`) — textbox "Enter your email" (white rounded-lg) + "Get Job Alerts" button (white bg, primary-700 text, or primary-700 bg); microcopy "Free forever. Unsubscribe anytime. No spam."
  11. CTA (`section.bg-white.py-20.lg:py-28`, dark: `dark:bg-gray-950`): H2 "Ready to Take the Next Step?" + sub-paragraph; two buttons — "Find Jobs Now" (`rounded-lg bg-primary-600 px-6 py-3 text-white hover:bg-primary-700`) and "Post a Job" (outline/gray variant).
  12. Footer (`footer.bg-gray-900.pt-16.text-gray-300.lg:pt-24`): brand wordmark + blurb "Connect with your next career opportunity. Jobfield is the modern job board platform for top talent and leading employers."; contact block — phone `(555) 492-3847`, email `hello@hirehub.com` → `hello@jobfield.com`, address "200 Tech Boulevard, San Francisco, CA 94105"; social icons (Twitter/X, LinkedIn, Facebook, Instagram — inline SVG); 4 link columns with uppercase H3s `text-sm font-semibold text-white` — **FOR JOB SEEKERS** (Browse Jobs, Companies, Career Tips, Salary Guide), **FOR EMPLOYERS** (Post a Job, Pricing, For Employers, Hiring Resources), **RESOURCES** (Blog, About Us, Features, Style Guide), **COMPANY** (About, Contact, Privacy Policy, Terms of Service).
  13. Bottom bar (`div.border-t.border-gray-200.bg-white.px-4.py-4`, dark: `dark:border-gray-800 dark:bg-gray-950`): copyright line + links Privacy Policy, Terms of Service, Style Guide, Find Jobs, Post a Job.
  14. Extras: dark-mode toggle (persists via localStorage), cookie-consent dialog ("We use cookies to enhance your experience…" with Decline / Accept All buttons), floating back-to-top button (`fixed bottom-6 right-6 z-50 h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg hover:bg-primary-700`, `aria-label="Back to top"`). The demo is a multi-page Astro site (Jobs / Companies / About / Pricing / Blog / Contact are real routes); our recreation is single-page — keep nav links as anchors to the on-page sections (`#jobs`, `#companies`) and map the rest to `#` placeholders so the structure matches 1:1.
- **Design tokens extracted from the demo CSS (`Base.Bv7s6dFD.css`, Tailwind v4 utilities — `--color-primary-*` scale, indigo family):**
  - Brand primary (Tailwind **indigo** scale — put in `@theme` as `--color-primary-*`): **primary-100 #e0e7ff** (hover backgrounds), **primary-200 #c7d2fe**, **primary-300 #a5b4fc**, **primary-400 #818cf8** (decorative blobs), **primary-500 #6366f1**, **primary-600 #4f46e5** (solid primary buttons, links, "Post a Job", search button), **primary-700 #4338ca** (hover states), **primary-800 #3730a3**, **primary-900 #312e81** (dark hero gradient start), **primary-950 #1e1b4b** (dark hero gradient via).
  - Brand accent (Tailwind **emerald** scale — `--color-accent-*`): **accent-100 #d1fae5** (badges, icon-tile bg), **accent-300 #6ee7b7**, **accent-400 #34d399** (live pulse dot, ping), **accent-500 #10b981** (pulse dot base), **accent-600 #059669** (icon-tile text), **accent-700 #047857** (badge text), **accent-900 #064e3b** (dark icon-tile bg).
  - Gradient partner: **purple-400 #c084fc** (blob), **purple-800 #6b21a8** (hero/newsletter gradient end).
  - Category tile hues (100 bg / 400–600 text pairs, dark: `-900/50` bg / `-400` text): blue (#dbeafe/#2563eb), pink (#fce7f3/#db2777), orange (#ffedd5/#ea580c), emerald (accent), red (#fee2e2/#dc2626), purple (#f3e8ff/#9333ea), yellow (#fef9c3/#ca8a04), teal (#ccfbf1/#0d9488).
  - Grays: **gray-50 #f9fafb** (alternate section bg), **gray-100 #f3f4f6** (inactive tab, tag chips, field bg), **gray-200 #e5e7eb** (borders: header, featured-jobs border-y, bottom bar), **gray-300 #d1d5db**, **gray-400 #9ca3af** (muted text), **gray-500 #6b7280**, **gray-600 #4b5563** (tag text, secondary text), **gray-700 #374151**, **gray-800 #1f2937** (dark borders, dark tag chips), **gray-900 #111827** (footer bg, dark section bg), **gray-950 #030712** (dark hero gradient end, dark bottom bar).
  - Star color: **yellow-400 #facc15** (testimonial star ratings), **yellow-900** (dark star chip bg).
  - Font (Google Fonts `<link>` in `index.html`): **Inter** (weights 300–800) for everything — headings `font-bold`/`font-extrabold`, body `font-normal`/`font-medium`, buttons `font-medium`/`font-semibold`.
  - Radii: **rounded-lg** (0.5rem — buttons, job/company cards, tabs), **rounded-xl** (0.75rem — icon tiles), **rounded-2xl** (1rem — hero search card), **rounded-full** (badges, avatars, arrow buttons, back-to-top, pulse dots).
  - Buttons/links: solid primary `rounded-lg bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-700` (header "Post a Job" `px-5 py-2.5 text-sm`, hero search `px-6 py-3 text-sm font-semibold`, CTA `px-6 py-3 text-base`); ghost `text-primary-100 hover:text-white` (hero "Advanced Filters"); tab toggle active `rounded-lg bg-primary-600 py-3 text-sm font-semibold text-white`, inactive `bg-gray-100 py-3 text-sm font-semibold text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700`; text links `text-sm font-semibold text-primary-600 hover:text-primary-700`; nav links `text-sm font-medium text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white`.
  - Section backgrounds: hero + job alerts gradient `bg-gradient-to-br from-primary-600 via-primary-700 to-purple-800`; body alternates `bg-white` / `bg-gray-50` with `py-20 lg:py-28` (dark: `dark:bg-gray-950` / `dark:bg-gray-900`); featured jobs `border-y border-gray-200 bg-gray-50 py-16 lg:py-20`; footer `bg-gray-900 pt-16 text-gray-300 lg:pt-24`; bottom bar `border-t border-gray-200 bg-white px-4 py-4`.
  - Container: `mx-auto max-w-7xl px-4 lg:px-8` (section-padding pattern).
- **Recreation decisions:** brand wordmark "Jobfield" (lucide `Briefcase` icon) instead of "HireHub"; tagline/contact email re-branded (`hello@jobfield.com`). Copy keeps the same _kind_ of content: job listings, categories, companies, how-it-works steps, testimonials, FAQ, newsletter microcopy. Company/logo images → seeded picsum (`picsum.photos/seed/jobfield-<n>/<w>/<h>`: company logos 96×96, job/company card images 400×300 or 56×56, testimonial avatars 100×100). Icons → lucide-react (Briefcase, Search, MapPin, Menu, X, Moon, Sun, ChevronDown, ChevronLeft, ChevronRight, ArrowRight, Star, Building2, Users, Rocket, FileText, CheckCircle2, Mail, Phone, ArrowUp, Filter); brand social icons (Twitter/X, LinkedIn, Facebook, Instagram) are NOT in lucide-react → inline SVG paths (like existing apps). The demo's multi-page routes collapse to single-page anchors. No assets copied; brand indigo #4f46e5 → #4338ca in `@theme` primary-600/700.

Jobfield lives in `apps/jobfield` and uses shared components from
`packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Requirements

### Requirement: Navigation bar

The system SHALL render a sticky top navigation bar with the brand wordmark,
section links, a dark-mode toggle, a "Post a Job" button and a mobile menu.

#### Scenario: Navbar content

- **GIVEN** the Jobfield page is rendered
- **WHEN** the page loads
- **THEN** the navbar SHALL show the wordmark "Jobfield" on the left
- **AND** SHALL show links for Jobs, Companies, About, Pricing, Blog and
  Contact
- **AND** SHALL show a dark-mode toggle button and a "Post a Job" indigo
  button on the right
- **AND** the header SHALL be sticky with a blurred translucent background

#### Scenario: Mobile menu

- **GIVEN** the page is rendered at a mobile viewport width
- **WHEN** the user opens the menu
- **THEN** a collapsible drawer SHALL show the same nav links and the "Post
  a Job" CTA
- **AND** the toggle SHALL expose the menu state via aria-expanded

### Requirement: Hero section

The system SHALL render a gradient hero with an emerald badge, a headline,
a job search form, an advanced-filters button and trending job links.

#### Scenario: Hero content

- **GIVEN** the page is rendered
- **WHEN** the hero is displayed
- **THEN** it SHALL show the indigo-to-purple gradient background with
  decorative floating circles
- **AND** SHALL show the emerald pill badge "2500+"
- **AND** SHALL show the headline "Find Your Dream Job" in white bold text
- **AND** SHALL show the sub-paragraph about searching thousands of
  opportunities

#### Scenario: Search form

- **GIVEN** the hero is displayed
- **WHEN** the search form is visible
- **THEN** it SHALL show a job title/keyword textbox, a location textbox and
  a category select (All Categories, Technology, Design, Marketing, Finance,
  Healthcare, Education, Sales, Engineering)
- **AND** SHALL show a "Search Jobs" button and an "Advanced Filters" button
- **AND** SHALL show trending job links (React Developer, Product Manager,
  Data Scientist, UX Designer, DevOps Engineer, Marketing Lead)

### Requirement: Stats row

The system SHALL render four animated counters below the hero.

#### Scenario: Stats content

- **GIVEN** the hero section is displayed
- **WHEN** the stats row scrolls into view
- **THEN** it SHALL animate four counters from 0 to their targets
- **AND** SHALL show the labels Active Jobs (2,500+), Companies (500+),
  Successful Hires (50K+) and User Rating (4.8)

### Requirement: Featured jobs section

The system SHALL render a "Latest Opportunities" section with six job cards.

#### Scenario: Featured jobs content

- **GIVEN** the page is rendered
- **WHEN** the featured jobs section is displayed
- **THEN** it SHALL show the heading "Latest Opportunities"
- **AND** SHALL show six job cards, each with a company logo, job title,
  company name, employment badge, location, salary range, posted time, skill
  tags and an "Apply Now" link
- **AND** SHALL show "View All Jobs" and "Browse Categories" links

### Requirement: Categories section

The system SHALL render an "Explore by Category" section with eight category
cards.

#### Scenario: Categories content

- **GIVEN** the page is rendered
- **WHEN** the categories section is displayed
- **THEN** it SHALL show the heading "Explore by Category"
- **AND** SHALL show eight categories with icon tiles, names and open-position
  counts: Technology 840, Design 320, Marketing 275, Finance 190, Healthcare
  210, Education 165, Sales 230, Engineering 310
- **AND** each icon tile SHALL use a distinct hue pair (100/600)

### Requirement: Companies section

The system SHALL render a "Companies Hiring Now" section with six company
cards.

#### Scenario: Companies content

- **GIVEN** the page is rendered
- **WHEN** the companies section is displayed
- **THEN** it SHALL show the heading "Companies Hiring Now"
- **AND** SHALL show six companies with logo, name, industry, location and
  open-positions count
- **AND** SHALL show a "View All Companies" link

### Requirement: How It Works section

The system SHALL render a "Your Path to Success" section with tabbed steps
for job seekers and employers.

#### Scenario: Tab switching

- **GIVEN** the page is rendered
- **WHEN** the user clicks the "For Job Seekers" tab
- **THEN** three steps SHALL be shown: Create Your Profile, Discover
  Opportunities, Apply & Get Hired
- **AND** when the user clicks the "For Employers" tab
- **THEN** three steps SHALL be shown: Post Your Opening, Review Candidates,
  Hire Top Talent
- **AND** the active tab SHALL be highlighted with the indigo primary color

### Requirement: Testimonials section

The system SHALL render a "Success Stories" carousel with quotes, star
ratings, avatars and slide controls.

#### Scenario: Carousel behavior

- **GIVEN** the page is rendered
- **WHEN** the testimonials section is displayed
- **THEN** it SHALL show the heading "Success Stories"
- **AND** SHALL show a testimonial quote card with yellow star ratings, a
  quote, an author with role and a round avatar
- **AND** SHALL provide previous/next buttons and slide indicator dots

### Requirement: FAQ section

The system SHALL render a "Frequently Asked Questions" accordion with five
questions.

#### Scenario: Accordion behavior

- **GIVEN** the page is rendered
- **WHEN** the user clicks a FAQ question
- **THEN** the answer SHALL expand and the chevron SHALL rotate
- **AND** SHALL show questions about pricing, posting jobs, time-to-hire,
  remote search and candidate matching

### Requirement: Job alerts section

The system SHALL render a gradient "Never Miss an Opportunity" section with
an email subscription form.

#### Scenario: Job alerts content

- **GIVEN** the page is rendered
- **WHEN** the job alerts section is displayed
- **THEN** it SHALL show the heading "Never Miss an Opportunity" in white on
  the indigo-to-purple gradient
- **AND** SHALL show an email textbox and a "Get Job Alerts" button
- **AND** SHALL show the microcopy "Free forever. Unsubscribe anytime. No
  spam."

### Requirement: CTA section

The system SHALL render a "Ready to Take the Next Step?" section with two
action buttons.

#### Scenario: CTA content

- **GIVEN** the page is rendered
- **WHEN** the CTA section is displayed
- **THEN** it SHALL show the heading "Ready to Take the Next Step?"
- **AND** SHALL show a "Find Jobs Now" primary button and a "Post a Job"
  secondary button

### Requirement: Footer

The system SHALL render a dark footer with a brand blurb, contact details,
social icons, four link columns and a copyright bar.

#### Scenario: Footer content

- **GIVEN** the page is rendered
- **WHEN** the footer is displayed
- **THEN** it SHALL show the brand wordmark, blurb, phone, email and address
- **AND** SHALL show social icon links
- **AND** SHALL show the columns For Job Seekers, For Employers, Resources
  and Company with their links
- **AND** SHALL show a bottom bar with copyright and Privacy Policy / Terms
  of Service / Style Guide links

### Requirement: Dark mode

The system SHALL support a class-based dark mode that toggles `.dark` on the
document root and persists the choice.

#### Scenario: Dark mode toggle

- **GIVEN** the page is rendered
- **WHEN** the user presses the dark-mode toggle
- **THEN** the `.dark` class SHALL be toggled on the document root element
- **AND** section backgrounds and cards SHALL switch to the dark variants

### Requirement: Extras

The system SHALL render a cookie-consent dialog and a back-to-top button.

#### Scenario: Cookie consent

- **GIVEN** the page is rendered
- **WHEN** the page loads
- **THEN** a cookie-consent dialog SHALL be shown with Decline and Accept All
  buttons

#### Scenario: Back to top

- **GIVEN** the page is scrolled down
- **WHEN** the user clicks the floating button
- **THEN** the page SHALL scroll back to the top

### Requirement: Page composition

The system SHALL compose all sections in a single page with a banner, a main
landmark and a contentinfo landmark.

#### Scenario: Full page render

- **GIVEN** the Jobfield app is rendered
- **WHEN** the page loads
- **THEN** the page SHALL compose the Navbar in the banner landmark, all
  sections in the main landmark, and the Footer in the contentinfo landmark
- **AND** the document title SHALL be "Jobfield — Job Board Template"

## Verification checklist

- [ ] `npm run typecheck` passes for `apps/jobfield`
- [ ] `npm run lint` passes for `apps/jobfield`
- [ ] `scripts/verify-app.sh jobfield` passes (typecheck + lint + 100%
      coverage tests + build)
- [ ] Full `npm run gate` passes in CI (knip + fallow included)
- [ ] Navbar: wordmark, 6 links, dark-mode toggle, "Post a Job" indigo
      button, mobile drawer with CTA
- [ ] Hero: indigo→purple gradient + floating blur circles, emerald "2500+"
      badge, "Find Your Dream Job" headline, sub-paragraph, white search
      card (keyword + location + category select + Search Jobs), "Advanced
      Filters", trending job links
- [ ] Stats: 4 animated counters (2,500+ Active Jobs, 500+ Companies, 50K+
      Successful Hires, 4.8 User Rating)
- [ ] Featured Jobs: "Latest Opportunities" + 6 job cards (logo, title,
      company, badge, location, salary, posted, tags, Apply Now) + View All
      Jobs / Browse Categories
- [ ] Categories: "Explore by Category" + 8 cards with distinct hue icon
      tiles and counts
- [ ] Companies: "Companies Hiring Now" + 6 company cards + View All
      Companies
- [ ] How It Works: "Your Path to Success" + job-seeker/employer tabs, 3
      steps each
- [ ] Testimonials: "Success Stories" carousel — stars, quote, avatar,
      prev/next + dots
- [ ] FAQ: "Frequently Asked Questions" accordion — 5 questions, expandable
- [ ] Job alerts: gradient section, "Never Miss an Opportunity", email form + Get Job Alerts, microcopy
- [ ] CTA: "Ready to Take the Next Step?" + Find Jobs Now / Post a Job
- [ ] Footer: bg-gray-900, blurb + contact + socials, 4 columns, bottom bar
      with legal links
- [ ] Dark mode toggles `.dark` and persists
- [ ] Cookie-consent dialog + back-to-top floating button
- [ ] Placeholder images via seeded picsum (`seed/jobfield-<n>/<w>/<h>`)
- [ ] No copied ColorLib assets; brand indigo #4f46e5 → #4338ca in `@theme`
