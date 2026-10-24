# Folds — Implementation Outline & Design Notes
<!-- prep-status: shipped-as=expanda -->
> **SHIPPED-UNDER** — the ColorLib `accordion-05` design this prep describes already
> ships as `apps/expanda` (<https://expanda.free.componentdock.com>).
> Do not scaffold `apps/folds`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-expanda/spec.md`.

## Source & Mapping

- **Source**: ColorLib Accordion 05 (`https://colorlib.com/wp/template/accordion-05/`)
- **New Name**: `folds`
- **Package**: `@free-react-templates/folds`
- **Deploy CNAME**: `folds.free.componentdock.com`

## Structure & Section Order

1. **Header / Title Section**: Centered heading "Accordion #05" over light background.
2. **Main Accordion Container**:
   - Section 1: **Manage** (Icon: User/Cog, items: Account, Settings, Profile)
   - Section 2: **Location** (Icon: MapPin, details)
   - Section 3: **Hobbies** (Icon: Heart, details)
3. **Footer**: Clean attribution linking `https://www.componentdock.com/`.

## Design Notes & Fidelity

- Teal accent color `#75d6d1` for active items and expanded card bodies.
- Clean typography and card shadows matching the preview design.
