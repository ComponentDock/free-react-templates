# Roadline — Implementation Todo

**Source:** ColorLib "Carries" (https://colorlib.com/wp/template/carries/)
**Name:** roadline
**Spec:** openspec/specs/template-roadline/spec.md

## Phase 1: Scaffold

- [ ] Copy simplest existing app as base (e.g. apps/aurora or similar)
- [ ] Rename package to @free-react-templates/roadline
- [ ] Update public/CNAME to roadline.free.componentdock.com
- [ ] Update homepage in package.json
- [ ] Run npm install at root to register workspace

## Phase 2: Theme Tokens

- [ ] Set up Tailwind @theme tokens in index.css:
  - brand: #f39c12
  - heading: #3c4a62
  - body: #687284
  - dark: #5d6b82
  - gray-bg: #f7f9fc
  - overlay: #3c4147
- [ ] Add Google Fonts link for Roboto in index.html

## Phase 3: Components (in section order)

- [ ] Navbar.tsx — fixed, transparent→solid, logo + nav links + utility icons
- [ ] Hero.tsx — fullscreen slider with overlay, headline, 2 CTA buttons
- [ ] FreightServices.tsx — 3-card grid on gray bg
- [ ] AboutQuote.tsx — 2-col: quote form + about content + stats
- [ ] ServiceArea.tsx — cards grid + Why Choose Us + 4 stat boxes on dark bg
- [ ] PromoFeatures.tsx — icon grid + parallax CTA bar
- [ ] Testimonials.tsx — carousel with client quotes
- [ ] Footer.tsx — newsletter bar + 4-col info + copyright

## Phase 4: Tests (TDD)

- [ ] Navbar.test.tsx — links, utility icons, scroll behavior
- [ ] Hero.test.tsx — headline, buttons, hover states
- [ ] FreightServices.test.tsx — 3 cards rendered
- [ ] AboutQuote.test.tsx — form fields, stats counters
- [ ] ServiceArea.test.tsx — cards, Why Choose Us, stat boxes
- [ ] PromoFeatures.test.tsx — feature items, CTA bar
- [ ] Testimonials.test.tsx — slider content
- [ ] Footer.test.tsx — newsletter, columns, Component Dock link
- [ ] App.test.tsx — all sections compose correctly
- [ ] Achieve 100% coverage

## Phase 5: Verification

- [ ] npm run verify:app roadline (typecheck + lint + test:coverage + build)
- [ ] Visual comparison with preview
- [ ] No ColorLib references in apps/ code
- [ ] Footer links to componentdock.com
- [ ] Placeholder images: picsum.photos/seed/roadline-*

## Phase 6: Ship

- [ ] Commit as feat: add Roadline (ColorLib Carries) template
- [ ] Push branch feat/template-roadline
- [ ] Open PR, merge immediately (squash)
- [ ] Update TEMPLATES.md: mark Carries [~] → [x]
