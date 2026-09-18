# Harbinger — Implementation Tasks

## 1. Scaffold

- [ ] Create `apps/harbinger/` from Novus scaffold
- [ ] Rename package to `@free-react-templates/harbinger`
- [ ] Set up vite.config.ts, vitest.config.ts, tsconfig.json
- [ ] Set up index.html with Google Fonts (Open Sans + Poppins)
- [ ] Create src/index.css with Tailwind + brand tokens

## 2. Components (TDD)

- [ ] `Hero.tsx` — split layout with image + content
- [ ] `EmailForm.tsx` — email input + submit button
- [ ] `SocialIcons.tsx` — 5 social icon circles
- [ ] `Footer.tsx` — Component Dock link

## 3. Tests

- [ ] App.test.tsx — renders, title, footer link
- [ ] Hero.test.tsx — heading, description, form, social
- [ ] EmailForm.test.tsx — input, submit, confirmation
- [ ] SocialIcons.test.tsx — all 5 icons rendered
- [ ] Footer.test.tsx — Component Dock link

## 4. Verification

- [ ] `npm install` at root
- [ ] `bash scripts/verify-app.sh harbinger`
- [ ] `npm run spec:validate`

## 5. Ship

- [ ] PR, merge, bookkeeping
