# Playbook — Implementation Tasks

Source: ColorLib Strategy (https://colorlib.com/wp/template/strategy/)

## Task Breakdown

### Phase 1: Scaffold

- [ ] Copy simplest existing portfolio app as base
- [ ] Rename package to `@free-react-templates/playbook`
- [ ] Update `public/CNAME` → `playbook.free.componentdock.com`
- [ ] Update `package.json` homepage → `https://playbook.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace
- [ ] Verify `grep -c "free-react-templates/playbook" package-lock.json`

### Phase 2: Components

- [ ] `src/components/Navbar.tsx` — Logo "Playbook" left, nav links (Work/About/Blog/Contact) right, hamburger toggle for mobile. Absolute positioned over hero.
- [ ] `src/components/Hero.tsx` — Full-height (90vh, min-height 700px) centered section with large headline "We are Playbook. A digitally minded creative agency based in NYC." and scroll-down arrow link.
- [ ] `src/components/PortfolioGrid.tsx` — 2+3 grid of project items overlapping hero (margin-top: -100px). Each item: image + hover overlay (rgba(220,53,69,0.9)) with title + "View Case Study" subtitle. 5 projects: Canvas Tote Bag, Work Hard Play Hard, Moon High Res, H20 Water Bottle, Creatsy Mailing Box.
- [ ] `src/components/WhatWeDo.tsx` — Left heading "What We Do", right side with description paragraph + 4 service items in 2x2 grid: Web Development (monitor icon), Brand identity (command icon), Copywriting (feather icon), eCommerce (shopping-cart icon). Use lucide-react icons.
- [ ] `src/components/BlogPosts.tsx` — Left heading "Recent Blog Posts", right side with 1 full-width post + 2 side-by-side posts. Each: image + hover overlay with title + date. "Read All Blog Posts" link below.
- [ ] `src/components/CtaSection.tsx` — Full-width section with animated text: "Start a Project." / "Let's chat we are good people." on hover. Red (#dc3545) bg slides up from bottom on hover, text changes to white.
- [ ] `src/components/Footer.tsx` — Copyright left, social icons right (Facebook/Twitter/Dribbble/Instagram via lucide-react), top border #F4F4F4, Component Dock link.

### Phase 3: Styling

- [ ] `src/index.css` — Tailwind entry + `@theme` with brand tokens: `--color-brand: #dc3545`, `--color-dark: #000`, `--color-light-gray: #f8f9fa`
- [ ] No custom Google Font — use system font stack only
- [ ] Hero: 90vh, min-height 700px, centered content, 70px headline on desktop
- [ ] Portfolio overlap: margin-top -100px, red hover overlay (rgba(220,53,69,0.9))
- [ ] CTA: animated bg fill from bottom, text swap on hover
- [ ] Footer: border-top 1px solid #F4F4F4, social icon hover → red, scale 1.7x
- [ ] All sections: padding 7em 0 desktop, 3em 0 mobile
- [ ] Responsive: hamburger nav on mobile, single-column grids

### Phase 4: Tests (TDD)

- [ ] Navbar: renders logo, nav links, hamburger toggle
- [ ] Hero: renders headline, scroll-down arrow, correct sizing
- [ ] PortfolioGrid: renders 5 items, hover overlay visible on hover
- [ ] WhatWeDo: renders 4 service items with icons
- [ ] BlogPosts: renders 3 posts, hover overlay, "Read All" link
- [ ] CtaSection: renders default text, hover changes text and bg
- [ ] Footer: renders copyright, social links, Component Dock link
- [ ] App: composes all sections in correct order
- [ ] 100% line/function/branch/statement coverage

### Phase 5: Verification

- [ ] `npm run verify:app playbook` passes (typecheck + lint + tests + build)
- [ ] No ColorLib references in any app file
- [ ] Footer links to Component Dock
- [ ] CNAME set to playbook.free.componentdock.com
- [ ] Package-lock.json includes @free-react-templates/playbook
