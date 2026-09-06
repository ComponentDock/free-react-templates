# FootStack — Design Notes & Task Outline

**Source:** ColorLib Bootstrap Footer V06  
**Preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-06/  
**New name:** footstack  
**Spec:** openspec/specs/template-footstack/spec.md

## Section order (fidelity map)

1. Content area (demo hero) — light bg, centered heading
2. Footer — link columns → divider → bottom bar

## Section-by-section fidelity notes

### Content area
- Original: 70vh, bg-light, centered "Footer #6" heading
- React: simple hero/content area with light background, can show a generic heading or site preview
- Purpose: provides visual context above the footer (not the main deliverable)

### Footer link columns (Row A)
- 5 columns: Discover, About, Services, Buy, Help
- Bootstrap grid: col-sm-6 col-md (wraps to 2-col on mobile, 5-col on desktop)
- Container: col-md-8, centered (justify-content-center)
- Each column: h3 (16px bold, 20px mb) + ul.list-unstyled with nav-links
- Links: 14px, #777, block, 10px mb, hover → #4200ff
- Use Poppins font for footer section

### Divider (Row B)
- Simple border-top line
- Bootstrap's default border color (gray)

### Bottom bar (Row C)
- 3 equal columns: social | copyright | app links
- Social: Twitter + Facebook icons, #ccc, hover → #4200ff, inline-block, 10px padding
- Copyright: centered, small text
- App links: Apple + Google icons + labels, 13px, #ccc, hover → #4200ff
- Vertical centering: align-items-center

## Design tokens summary

```
--footstack-brand: #4200ff;       /* indigo hover color */
--footstack-text: #777;           /* nav link default */
--footstack-social: #ccc;         /* social icon default */
--footstack-bg: #f8f9fa;          /* Bootstrap bg-light */
--footstack-font: "Poppins", sans-serif;
--footstack-body-font: "Roboto", sans-serif;
--footstack-heading-size: 16px;
--footstack-link-size: 14px;
--footstack-app-size: 13px;
--footstack-footer-padding: 7rem 0;
```

## Implementation tasks

1. Create app scaffold: copy simplest existing footer app, rename package to `@free-react-templates/footstack`
2. Set up `vite.config.ts` with `injectUiSource()`
3. Create `src/index.css` with Tailwind v4 + theme tokens
4. Build `src/components/ContentArea.tsx` — demo hero section
5. Build `src/components/FooterColumns.tsx` — 5-column link grid
6. Build `src/components/BottomBar.tsx` — social + copyright + app links
7. Build `src/components/Footer.tsx` — composes FooterColumns + divider + BottomBar
8. Build `src/App.tsx` — composes ContentArea + Footer
9. Add placeholder images via `picsum.photos/seed/footstack-*`
10. Footer link: componentdock.com (branded "Component Dock")
11. Write tests for each component (Vitest + Testing Library)
12. Verify 100% coverage
13. Typecheck + lint + build
14. Commit and push
