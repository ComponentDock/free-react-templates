# Template: Plicate (Accordion 05)
<!-- prep-status: shipped-as=expanda -->
> **SHIPPED-UNDER** — the ColorLib `accordion-05` design this prep describes already
> ships as `apps/expanda` (<https://expanda.free.componentdock.com>).
> Do not scaffold `apps/plicate`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-expanda/spec.md`.

## Tasks & Outline

1. **App Scaffold**: Create `apps/plicate` based on template structure.
2. **Components**:
   - `Navbar.tsx` / Header
   - `Hero.tsx` with title and description
   - `AccordionList.tsx` with stateful expandable items and chevrons
   - `Footer.tsx` with Component Dock link (`https://www.componentdock.com/`)
3. **Tests**: Comprehensive unit tests covering header rendering, accordion expand/collapse interactions, and footer link, achieving 100% test coverage.
4. **Verification**: Run `scripts/verify-app.sh plicate`.
