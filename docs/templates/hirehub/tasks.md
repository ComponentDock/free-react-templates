# Hirehub (Colorlib HireHub) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Blaze PR (#6) awaits review.
> Implementation ships later on `feat/template-hirehub`.

## Design notes (replication findings)

- **Original:** ColorLib "HireHub" — job board / careers marketplace
  template (source: https://colorlib.com/wp/template/hirehub/).
- **Demo DOM analyzed:** https://hirehub-colorlib.pages.dev/ (HTTP 200;
  `https://preview.colorlib.com/theme/hirehub/` returns 404 — preview portal
  loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + Tailwind classes):** modern job-board landing
  — light surfaces with indigo (#4f46e5) primary accents, emerald success
  accents, Inter font, pill buttons, rounded-2xl cards, indigo gradient hero
  (`linear-gradient(90deg,#312e81,#4f46e5)`), full dark mode support.
- **Structure (1:1, section order):**
  1. Navbar: Jobs, Companies, About, Pricing, Blog, Contact + "Post a Job".
  2. Hero: "Find Your Dream Job" + "2,500+ Jobs Available" badge, search
     input + "Search Jobs" / "Advanced Filters", level chips (Entry, Mid,
     Senior, Lead, Executive).
  3. Latest Opportunities: Senior React Developer (TechFlow Inc., SF,
     $140K–$180K), Lead UX Designer (DesignCraft Studio, Remote,
     $120K–$160K), Data Scientist (DataVault Analytics, NY, $130K–$170K),
     DevOps Engineer (CloudPeak Systems, Austin, $125K–$165K), Product
     Marketing Manager (GrowthLab Marketing, Remote, $110K–$145K), Financial
     Analyst (FinEdge Capital, Chicago, $95K–$125K).
  4. Explore by Category: Technology 840, Design 320, Marketing 275,
     Finance 190, Healthcare 210, Education 165, Sales 230, Engineering 310.
  5. Companies Hiring Now: TechFlow Inc. (Software Development), DesignCraft
     Studio (Creative Agency), DataVault Analytics (Data & Analytics),
     CloudPeak Systems (Cloud Infrastructure), GrowthLab Marketing (Digital
     Marketing), FinEdge Capital (Financial Services).
  6. How It Works: For Job Seekers (Create Your Profile, Discover
     Opportunities, Apply & Get Hired) + For Employers (Post Your Opening,
     Review Candidates, Hire Top Talent).
  7. Success Stories (testimonials).
  8. FAQ (5 questions: free for job seekers, post a job, time to get hired,
     remote search, candidate matching).
  9. Newsletter: "Never Miss an Opportunity" + Get Job Alerts.
  10. CTA: "Ready to Take the Next Step?" — Find Jobs Now / Post a Job.
  11. Footer: contact (555-492-3847, hello@hirehub.com, 200 Tech Boulevard
      SF) + For Job Seekers / For Employers / Resources / Company columns +
      copyright + cookie notice.
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **#4f46e5** (indigo-600; scale #6366f1, #818cf8, #4338ca,
    #312e81, #a5b4fc, #c7d2fe, #eef2ff).
  - Accent: emerald **#059669** / #047857.
  - Neutrals: white/gray-50…900/black; dark-mode variants throughout.
  - Font: **"Inter"** (300–800) via Google Fonts.
  - Shapes: rounded-full pills/buttons/badges, rounded-xl logos, rounded-2xl
    cards, rounded-lg inputs.
  - Gradients: `linear-gradient(90deg,#312e81,#4f46e5)`,
    `linear-gradient(90deg,#c7d2fe,#6366f1)`.
- **Recreation name:** Hirehub (kept — matches ColorLib name). App folder
  `apps/hirehub`, package `@free-react-templates/hirehub`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/hirehub-<n>/<w>/<h>`); lucide-react icons; Inter via
  Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer chrome; FAQ
  as accessible disclosure buttons.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-hirehub/spec.md` (Gherkin requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/hirehub` (copy the section-rich landing app pattern —
      Aurora; rename package to `@free-react-templates/hirehub`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-hirehub`, open PR (source template, preview URL,
      design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
