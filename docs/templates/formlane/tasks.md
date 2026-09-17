# Formlane — Implementation Tasks

## 1. Scaffold
- [ ] Create `apps/formlane/` (copy simplest existing app, rename package)
- [ ] Rename package to `@free-react-templates/formlane`
- [ ] Run `npm install` at repo root to register workspace
- [ ] Set `public/CNAME` to `formlane.free.componentdock.com`
- [ ] Set `homepage` in `package.json` to `https://formlane.free.componentdock.com`
- [ ] Add `injectUiSource()` to `vite.config.ts`

## 2. Components
- [ ] `MapPanel.tsx` — full-viewport map embed + floating phone pill
- [ ] `ContactForm.tsx` — title, fields, validation, Send button
- [ ] `FormInput.tsx` — reusable label + underline input + focus indicator
- [ ] `Footer.tsx` — Component Dock link
- [ ] `App.tsx` — compose all sections

## 3. Styling
- [ ] Set up Tailwind theme tokens (colors, fonts) in `index.css`
- [ ] Implement split-screen layout (map left, form right)
- [ ] Implement underline input style with focus gradient
- [ ] Implement pill-shaped gradient button with hover animation
- [ ] Implement floating phone pill on map
- [ ] Responsive breakpoints (1200px, 768px)

## 4. Tests (TDD)
- [ ] MapPanel renders with map area and phone pill
- [ ] ContactForm renders all four fields
- [ ] Field labels and placeholders match spec
- [ ] Focus indicator appears on field focus
- [ ] Send button renders with gradient and pill shape
- [ ] Form validates required fields (Name, Email, Message)
- [ ] Email format validation
- [ ] Footer links to Component Dock
- [ ] Mobile layout (full-width card, hidden map)
- [ ] 100% coverage

## 5. Verification
- [ ] `npm run verify:app formlane` passes
- [ ] No ColorLib references in app code
- [ ] Footer links Component Dock
- [ ] Push as `docs: prep Formlane (ColorLib Contact Form 13) spec + research`
