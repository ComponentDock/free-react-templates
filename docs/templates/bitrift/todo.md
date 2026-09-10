# Bitrift — Implementation Todo

Source: ColorLib Bitcoin
Preview: https://preview.colorlib.com/theme/bitcoin/
App: apps/bitrift

## Phase 1: Scaffold
- [ ] Copy simplest existing app as base (e.g. apps/coinly or another minimal template)
- [ ] Rename package to @free-react-templates/bitrift
- [ ] Update public/CNAME to bitrift.free.componentdock.com
- [ ] Update homepage in package.json
- [ ] Update vite.config.ts with injectUiSource()
- [ ] npm install at root to register workspace

## Phase 2: Components (TDD — write test first)
- [ ] Navbar.tsx + Navbar.test.tsx
- [ ] Hero.tsx + Hero.test.tsx
- [ ] Converter.tsx + Converter.test.tsx
- [ ] SimpleServices.tsx + SimpleServices.test.tsx
- [ ] About.tsx + About.test.tsx
- [ ] Features.tsx + Features.test.tsx
- [ ] Stats.tsx + Stats.test.tsx
- [ ] CallToAction.tsx + CallToAction.test.tsx
- [ ] Pricing.tsx + Pricing.test.tsx
- [ ] Blog.tsx + Blog.test.tsx
- [ ] Footer.tsx + Footer.test.tsx

## Phase 3: Assembly
- [ ] App.tsx — compose all sections in order
- [ ] index.css — Tailwind entry + @theme tokens (brand orange, gradient)
- [ ] Verify all 11 sections render

## Phase 4: Verification
- [ ] npm run test:coverage — 100% lines/functions/branches/statements
- [ ] npm run verify:app bitrift (typecheck + lint + tests + build)
- [ ] No ColorLib references in apps/ code
- [ ] Footer links to https://www.componentdock.com/
- [ ] Placeholder images via picsum.photos/seed/bitrift-N/
- [ ] Design tokens in @theme match spec (#f78f3d, gradient, Poppins font)

## Phase 5: Deploy
- [ ] git commit: feat: implement Bitrift (ColorLib Bitcoin)
- [ ] PR + immediate squash merge
- [ ] Verify surge deploy
