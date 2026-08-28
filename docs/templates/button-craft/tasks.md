# ButtonCraft (ColorLib Bootstrap Buttons 12) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships later on `feat/template-button-craft`. Recreation name: **ButtonCraft** (NEW name — the ColorLib source keeps its name "Bootstrap Buttons 12").

## Source mapping

- **ColorLib item:** "Bootstrap Buttons 12" (TEMPLATES.md line 674; section "## Bootstrap Buttons").
- **Source URL:** https://colorlib.com/wp/template/bootstrap-buttons-12/
- **Preview URL:** https://colorlib.com/wp/template/bootstrap-buttons-12/ (Screenshot fallback: dark theme button collection with various shapes, outlines, gradients, and social icons).

## Reference research

### Design tokens

| Token      | Value                                 | Use                               |
| ---------- | ------------------------------------- | --------------------------------- |
| Background | `#121212` / `#1a1a1a`                 | Main dark canvas                  |
| Primary    | `#3b82f6` (Blue) / `#6366f1` (Indigo) | Primary actions & badges          |
| Surface    | `#242424`                             | Card containers & grouping panels |
| Text       | `#f3f4f6` (Light gray)                | Primary headings & copy           |
| Font       | Inter / system sans-serif             | Google Fonts `<link>`             |

## Implementation order (TDD)

1. [ ] Scaffold `apps/button-craft` from simplest existing app, rename package to `@free-react-templates/button-craft`, configure CNAME and package-lock.json.
2. [ ] Write tests (100% coverage): showcase categories, interactive click-to-copy, responsive layout, footer.
3. [ ] Implement sections: Header, Category Filter, Button Grid (Solid, Outline, Gradients, Sizes, Social), Footer with Component Dock credit.
4. [ ] Run `npm run verify:app -- button-craft` until green.
5. [ ] Open PR `feat/template-button-craft` -> merge immediately.
