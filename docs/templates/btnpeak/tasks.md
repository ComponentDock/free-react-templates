# BtnPeak — Implementation Tasks & Design Notes

## Source Reference

- **ColorLib Template**: Bootstrap Buttons 19 (`bootstrap-buttons-19`)
- **Live Preview URL**: `https://preview.colorlib.com/theme/bb/bootstrap-buttons-19/`
- **New App Name**: `btnpeak`
- **Package Name**: `@free-react-templates/btnpeak`

## Design & Structure Notes

1. **Hero / Header**: Section #09 title and "Pick Your Color" subtitle with primary, secondary, tertiary, and gradient buttons.
2. **Stat Cards Row 1**: White background buttons (`btn-white`) with left-aligned 60px colored icon boxes (`icon-primary`, `icon-secondary`, `icon-tertiary`, `icon-quarternary`) and right-aligned numeric metrics.
3. **Stat Cards Row 2**: White background buttons with left-aligned text and right-aligned 60px colored icon boxes.
4. **Stat Cards Row 3**: Solid colored background buttons (`btn-primary`, `btn-secondary`, `btn-tertiary`, `btn-quarternary`) with left-aligned icon boxes and right-aligned metrics.
5. **Stat Cards Row 4**: Solid colored background buttons with left-aligned text and right-aligned icon boxes.
6. **Footer**: Clean footer featuring Component Dock attribution link (`https://www.componentdock.com/`).

## Task Breakdown for Implementers

- [ ] Scaffold `apps/btnpeak` following standard app layout.
- [ ] Configure `vite.config.ts` with `injectUiSource()`.
- [ ] Implement components (`Navbar`, `ButtonShowcase`, `StatGrid`, `Footer`).
- [ ] Add unit tests covering all Gherkin requirements with 100% test coverage.
- [ ] Run `scripts/verify-app.sh btnpeak` and verify surge deployment.
