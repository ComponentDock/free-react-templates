# Hopefoundation (Colorlib Hopefoundation) — Tasks & Design Notes

> Prep artifacts prepared on `main` while the Blaze PR (#6) awaits review.
> Implementation ships later on `feat/template-hopefoundation`.

## Design notes (replication findings)

- **Original:** ColorLib "Hopefoundation" — church / faith community website
  template (source: https://colorlib.com/wp/template/hopefoundation/).
- **Demo DOM analyzed:** https://hopefoundation-colorlib.pages.dev/ (HTTP
  200; `https://preview.colorlib.com/theme/hopefoundation/` returns 404 —
  preview portal loads demos from `<slug>-colorlib.pages.dev`, confirmed via
  `preview.colorlib.com/assets/js/products.js`).
- **Visual design (from DOM + Tailwind classes):** warm, welcoming church
  landing — dark charcoal surfaces with amber (#f59e0b) accents, Outfit
  font, rounded cards, pill buttons, testimonial section, full dark mode.
- **Structure (1:1, section order):**
  1. Navbar: About, Watch, Connect, Give + "Plan Your Visit".
  2. Hero: "Everyone is welcome here." + Watch Online / Join Us.
  3. Service Times: Sunday (9:00 AM & 11:00 AM), Wednesday (7:00 PM) + Our
     Location (1200 Grace Avenue, Austin, TX 78701).
  4. You're Invited: Welcoming Community, Engaging Worship, Relevant
     Teaching, Great Kids Programs.
  5. Recent Messages: Peace in the Storm (Unshakeable series), Faith Over
     Fear, Built to Last, The Gift of Hope — with pastor/date/duration.
  6. Ways to Connect: Plan Your Visit, Join a Group, Serve with Us, Next
     Steps.
  7. Success Stories: 3 testimonials ("Member since 2019/2022/2021").
  8. CTA: "Your story isn't over." + Watch a Message + stats (10+ Years
     Serving Austin, Weekly Attendance).
  9. Footer: Visit / Connect / Resources / Location / Contact / Service
     Times + (555) 234-5678, hello@hopecitychurch.com, © 2025.
- **Design tokens extracted from the DOM + CSS:**
  - Brand color: **#f59e0b** (amber-500; scale #fbbf24, #fcd34d, #d97706,
    #b45309).
  - Neutrals: white/gray (#e3e3e3, #a4a4a4, #818181, #515151, #434343,
    #383838, #1a1a1a)/black.
  - Font: **"Outfit"** (300–800) via Google Fonts.
  - Shapes: rounded-lg/xl cards, pill buttons.
- **Recreation name:** Hopefoundation (kept — matches ColorLib name). App
  folder `apps/hopefoundation`, package
  `@free-react-templates/hopefoundation`.
- **Recreation approach:** seeded picsum placeholders
  (`picsum.photos/seed/hopefoundation-<n>/<w>/<h>`); lucide-react icons;
  Outfit via Google Fonts; repo-standard Navbar (dark-mode toggle) + Footer
  chrome.
- Reuse `packages/ui` (Button, ButtonLink, Badge, Card, cn).

## Tasks

- [x] Write `openspec/specs/template-hopefoundation/spec.md` (Gherkin
      requirements + scenarios reflecting the REAL sections above).
- [ ] Validate spec: `npm run spec:validate`.
- [ ] Create `apps/hopefoundation` (copy the section-rich landing app
      pattern — Aurora; rename package to
      `@free-react-templates/hopefoundation`).
- [ ] TDD: tests first for each section component; run red.
- [ ] Implement components (green) at 100% coverage.
- [ ] Full gate: typecheck → lint → test:coverage → build → knip → fallow →
      spec:validate.
- [ ] Push `feat/template-hopefoundation`, open PR (source template,
      preview URL, design tokens, what differs).
- [ ] After merge: TEMPLATES.md `[~]` → `[x]` + Surge URL + homepage
      (bookkeeping on main, state D).
