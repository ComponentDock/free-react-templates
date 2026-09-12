# Passage (ColorLib Immigration) — Task Outline

> Prep artifacts (spec + research) prepared on `main` by the prep stream.
> Implementation ships later on `feat/template-passage` by an implementer
> stream — this folder is the handoff.

## 1. Spec creation

1. [ ] Create `openspec/specs/template-passage/spec.md` with Gherkin
       requirements for all 11 sections.
2. [ ] Validate spec: `npm run spec:validate`.

## 2. App scaffold setup

3. [ ] Copy simplest existing app → `apps/passage/`.
4. [ ] Rename package to `@free-react-templates/passage`.
5. [ ] Set `"homepage": "https://passage.free.componentdock.com"` in
       `package.json`.
6. [ ] Create `public/CNAME` with `passage.free.componentdock.com`.
7. [ ] Register `injectUiSource()` in `vite.config.ts`.
8. [ ] Copy MemoryStorage polyfill from `apps/cura/src/test/setup.ts`
       into `src/test/setup.ts`.
9. [ ] `index.html`: title "Passage — Immigration Consulting"; Google
       Fonts `<link>` for Poppins (300/400/500/600/700).
10. [ ] `src/index.css`: Tailwind `@theme` tokens — brand `#f6214b`,
        body text `#777777`, heading `#222222`, light bg `#f9f9ff`,
        white `#ffffff`, footer bg `#222222` (dark), overlay
        `rgba(0,0,0,0.8)`, star `orange`.
11. [ ] Root `npm install` so `package-lock.json` registers the package.

## 3. Component implementation (11 components)

All components are TDD — write tests first (100% lines/functions/branches/statements).

12. [ ] `Navbar` — Top bar (tagline left, logo center, phone right) + horizontal nav menu (Home, About, Immigration, Course, Country,
        Blog, Contact, Elements). Sticky on scroll.
13. [ ] `HeroBanner` — Full-viewport red (`#f6214b`) banner. Left-aligned
        h6 "Process Visa without within hours", h1 "Immigrations &
        Visa Consultation", CTA "Book Consultancy" (pill button).
        Right-aligned hero image (placeholder).
14. [ ] `CallToTop` — Light gray (`#f9f9ff`) section. Three-column
        layout: left "Start planning your New Dream" (30px, weight 100,
        "planning"/"Dream" bold), center lorem paragraph, right red
        "Request Free Consultancy" button.
15. [ ] `ServiceCards` — Centered heading "Requirements to be Immigrants" + subtitle. Four cards (US, Canada, Germany, Australia): each
        with image, dark tag badge, h4 title, short description. Hover:
        tag → red, title → red, image scale.
16. [ ] `BookingForm` — Dark overlay background image section. Left
        column: white h1 "Globally Connected by Large Network", h4
        subtitle, paragraph, red "View Details" button. Right column:
        white card with "Book Free Consultancy!" form (name, email,
        phone, visa select, textarea, red submit button).
17. [ ] `Features` — White background. Centered heading "Our Unique
        Features that can impress you" + subtitle. Six feature cards
        in 3×2 grid: icon (lucide-react), h4 title, paragraph.
        Titles: Expert Technicians, Professional Service, Great Support,
        Technical Skills, Highly Recommended, Positive Reviews.
18. [ ] `Testimonials` — Light gray (`#f9f9ff`) section. Centered
        heading "How Our Customers Treat Us" + subtitle. Carousel
        with 4 reviews: avatar image, reviewer name, star rating
        (3/5 filled), review text. Two reviewer names cycle
        (Fannie Rowe, Hulda Sutton, Fannie Rowe, Hulda Sutton).
19. [ ] `BrandLogos` — White section. Row of 5 grayscale partner logos.
        Hover → color restored. Use placeholder images.
20. [ ] `Blog` — Centered heading "Latest News from our Blog" +
        subtitle. Two blog cards side-by-side: featured image,
        tag pills (Travel, Life style), h4 title, short description,
        post date. Hover: image scale.
21. [ ] `CTABottom` — Dark overlay background section. Centered white
        h1 "No Look Further. Try us today!", paragraph, red "Apply
        For Visa" button.
22. [ ] `Footer` — Dark bg. Four columns: About Us (text), Contact Us
        (text + phone numbers), Newsletter (text + email subscribe form
        with arrow button), fourth column (social icons). Bottom bar:
        copyright left, social icons right (Facebook, Twitter, Dribbble,
        Behance). Mandatory Component Dock attribution link.

## 4. Test coverage

23. [ ] Write Vitest + RTL tests for every component (100% coverage).
24. [ ] Test responsive behavior at mobile/tablet/desktop breakpoints.
25. [ ] Test form validation on booking form (required fields).
26. [ ] Test navbar sticky behavior.
27. [ ] Test testimonial carousel navigation.

## 5. Verification

28. [ ] `scripts/verify-app.sh passage` green (typecheck + lint +
        vitest 100% + build).

## 6. PR creation

29. [ ] Commit on `feat/template-passage` branch:
        `feat: add Passage (immigration consulting) template`.
30. [ ] Open PR with description: real preview URL
        (`preview.colorlib.com/theme/immigration/`), design tokens,
        brand color `#f6214b`, Poppins font, 11 sections mapped,
        paraphrased copy.
31. [ ] Immediate squash merge, delete branch.

## 7. Bookkeeping

32. [ ] TEMPLATES.md line 1053 (Business) `[~]` → `[x]` with surge
        URL + homepage.
33. [ ] TEMPLATES.md line 1385 (Consulting) `[~]` → `[x]` with surge
        URL + homepage.
34. [ ] Run `npm run readme:status`.
