# ConfWell — Implementation Tasks & Design Notes

## Source

- **ColorLib**: Colorlib Wizard 3
- **Slug**: `colorlib-wizard-3`
- **Preview**: `https://colorlib.com/etc/bwiz/colorlib-wizard-3/index.html`
- **Category**: Forms / Multi-step Event Registration Wizard

## Section Order (fidelity)

1. **Split-screen wrapper** — Full viewport height, flex layout
2. **Image panel (left)** — 65.78% width, full-height event/conference background image
3. **Form panel (right)** — 34.22% width, dark textured background, padded 4.3% on sides
4. **Step indicator** — Centered, arrow-connected step numbers
5. **Step 1: Event Information** — Display-only event details with icons (date, time, venue, address, website)
6. **Step 2: Set The Event** — Price display, people dropdown, name/email/phone/address inputs
7. **Step 3: Request from You** — Special request, staff questions, terms checkbox
8. **Navigation buttons** — Previous/Next (outlined style)
9. **Social links** — Bottom of form panel, 4 icons

## Fidelity Notes

- **Font**: Arvo-Regular — load via Google Fonts `<link>` in index.html
- **Layout**: Split-screen 65.78% / 34.22%, full viewport height
- **Background**: Left panel uses event image, right panel uses dark textured image — use `https://picsum.photos/seed/confwell-left/1200/900` and `https://picsum.photos/seed/confwell-right/600/900`
- **Inputs**: Bottom-border only (1px solid rgba(255,255,255,0.4)), transparent background, white text, 25px height
- **Buttons**: Outlined (1px solid #fff, transparent bg), 42×96px, Times New Roman font, hover = white bg + dark text
- **Headings**: 32px, white, font-weight 400, centered
- **Labels**: #ccc (light gray)
- **Social**: Material Design Iconic Font icons, 17px, white, positioned absolute at bottom
- **Responsive**: Stacks vertically ≤1199px, further adjustments ≤991px and ≤767px

## Tasks

- [ ] Create `apps/confwell/` with Vite + React 19 + Tailwind 4 + TypeScript
- [ ] Set up package.json (`@free-react-templates/confwell`), public/CNAME, vite.config.ts with `injectUiSource()`
- [ ] Load Arvo-Regular font via Google Fonts link in index.html
- [ ] Implement Wizard component with 3-step state management
- [ ] Implement StepIndicator component (arrow-connected steps)
- [ ] Implement StepEventInfo component (display-only event details with icons)
- [ ] Implement StepSetEvent component (price, dropdown, form inputs)
- [ ] Implement StepRequest component (special request, staff questions, checkbox)
- [ ] Implement NavigationButtons component (Previous/Next outlined style)
- [ ] Implement SocialLinks component (4 social icons)
- [ ] Style with Tailwind using design tokens from spec
- [ ] Add responsive styles (stack vertically on mobile)
- [ ] Write tests with Vitest + Testing Library (100% coverage)
- [ ] Add footer with Component Dock link
- [ ] Run `npm run spec:validate` and `scripts/verify-app.sh confwell`
- [ ] Commit as `feat: add confwell template (ColorLib wizard-3)`

## Component Structure

```
apps/confwell/
  src/
    main.tsx
    App.tsx
    components/
      Wizard.tsx              — Main wizard container, manages step state
      StepIndicator.tsx       — Arrow-connected step numbers
      StepEventInfo.tsx       — Step 1: display-only event details
      StepSetEvent.tsx        — Step 2: price, dropdown, form inputs
      StepRequest.tsx         — Step 3: special request, staff questions, checkbox
      NavigationButtons.tsx   — Previous/Next outlined buttons
      SocialLinks.tsx         — 4 social icons at bottom
    index.css
    test/
      setup.ts
  public/
    CNAME (confwell.free.componentdock.com)
  package.json
  vite.config.ts
  tsconfig.json
```
