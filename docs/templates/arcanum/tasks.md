# Arcanum Tasks & Design Notes (ColorLib Wizard 26)
<!-- prep-status: shipped-as=stepforge -->
> **SHIPPED-UNDER** — the ColorLib `colorlib-wizard-26` design this prep describes already
> ships as `apps/stepforge` (<https://stepforge.free.componentdock.com>).
> Do not scaffold `apps/arcanum`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-stepforge/spec.md`.

## Source

- ColorLib Template: **Colorlib Wizard 26**
- Source URL: `https://colorlib.com/wp/template/colorlib-wizard-26/`
- Preview URL: `https://preview.colorlib.com/theme/colorlib-wizard-26/`
- Screenshot: `colorlib-free-wizard-26.jpg`

## New Name & Workspace

- App Name: `arcanum`
- Package: `@free-react-templates/arcanum`
- Path: `apps/arcanum`
- Surge Domain: `arcanum.free.componentdock.com`

## Step-by-Step Implementation Outline

1. **Scaffolding (`apps/arcanum`)**:
   - Copy structure from existing wizard template (`apps/sorcery` or `apps/stepforge`).
   - Configure `vite.config.ts` with `injectUiSource()`.
   - Configure `public/CNAME` with `arcanum.free.componentdock.com`.
2. **Components**:
   - `Header.tsx`: Title, subtitle, and step indicator bar.
   - `WizardForm.tsx`: Multi-step state machine (Steps 1, 2, 3) with form inputs, validation, and step switching.
   - `SuccessScreen.tsx`: Confirmation view upon successful completion.
   - `Footer.tsx`: Component Dock attribution (`https://www.componentdock.com/`).
3. **Tests (`App.test.tsx`)**:
   - Full test coverage (100% lines/functions/branches/statements) verifying step navigation, input validation, and submission confirmation.
