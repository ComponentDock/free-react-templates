# BriefBox — Implementation Tasks

## Phase 1: Setup
- [ ] Create `apps/briefbox/` from simplest existing app scaffold
- [ ] Rename package to `@free-react-templates/briefbox`
- [ ] Set `public/CNAME` to `briefbox.free.componentdock.com`
- [ ] Set `homepage` in package.json to `https://briefbox.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile
- [ ] Add Poppins font via Google Fonts link in index.html
- [ ] Define theme tokens in `src/index.css` (brand-purple, brand-pink, brand-yellow, bg-light, bg-dark)

## Phase 2: Components (TDD)
- [ ] Header.tsx — logo + nav links + hamburger mobile toggle
- [ ] Hero.tsx — background image with overlay, "We're Creative" heading, "Get Started" CTA
- [ ] Features.tsx — 2×2 grid with 4 FeatureCard subcomponents (icon + title + desc)
- [ ] About.tsx — heading + image + tabbed content (History / Mission & Vision)
- [ ] Video.tsx — bg image + purple overlay + heading + play button + description
- [ ] Blog.tsx — 3 BlogCard components with bg thumbnails
- [ ] Story.tsx — purple bg section, white heading + white paragraph
- [ ] Newsletter.tsx — heading + email input + submit button
- [ ] Footer.tsx — nav links + social icons + copyright + Component Dock link

## Phase 3: Assembly
- [ ] App.tsx — compose all sections in order
- [ ] Verify responsive layout (hamburger nav, stacked columns on mobile)

## Phase 4: Verification
- [ ] Typecheck passes
- [ ] Lint passes
- [ ] 100% test coverage
- [ ] Build succeeds
- [ ] Visual fidelity check against preview
- [ ] No ColorLib references in app code
