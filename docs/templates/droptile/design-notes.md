# Droptile — Design Notes & Task Outline

**Source:** ColorLib Dropdown V16
**Preview:** https://preview.colorlib.com/theme/bootstrap/dropdown-16/
**New name:** droptile

## Section structure (top → bottom)

The template is a single UI snippet, not a full-page template. It consists of:

1. **Heading** — centered "Dropdown #6" (h2, font-size 20px)
2. **Dropdown trigger** — "Dropdown" text (gray #888) + down-arrow icon, centered
3. **Mega menu panel** (conditionally rendered on click):
   - White card with shadow, 680px min-width, opacity fade-in
   - **Left column (33.33%):** Hero image (landscape) + "PSD Mockups" bold link + "View All Here" muted text
   - **Middle column (33.33%):** Vertical list of 6 category links with counts
   - **Right column (33.33%):** Vertical list of 6 category links with counts

## Implementation tasks

1. Create `apps/droptile/` by copying the simplest existing app scaffold
2. Rename package to `@free-react-templates/droptile`
3. Create `public/CNAME` with `droptile.free.componentdock.com`
4. Set `homepage` in `package.json` to `https://droptile.free.componentdock.com`
5. Build `DropdownTrigger` component (text + arrow icon, click handler, ARIA)
6. Build `MegaMenu` component (3-column flex layout, animation)
7. Build `CategoryList` component (vertical list of links with counts)
8. Build `ImageCard` component (hero image + text link)
9. Wire open/close state (click toggle, outside click dismiss, Escape key)
10. Style with Tailwind tokens: #888 trigger, #000 text, #e83e8c hover accent
11. Add placeholder image from `picsum.photos`
12. Write tests: trigger renders, dropdown opens/closes, columns render, hover states, keyboard
13. Run `npm run verify:app droptile` — must pass 100% coverage

## Design tokens for Tailwind `@theme`

```css
@theme {
  --color-brand-trigger: #888888;
  --color-brand-heading: #000000;
  --color-brand-text: #000000;
  --color-brand-muted: #b3b3b3;
  --color-brand-hover: #e83e8c;
}
```

## Fidelity notes

- The source uses Bootstrap's dropdown JS plugin; replicate with React state + ARIA
- The arrow icon source is `icomoon` font icon → use `lucide-react` ChevronDown
- Hero image is local `images/hero_1.jpg` → use `picsum.photos` placeholder
- The dropdown shadow: `0 15px 30px 0 rgba(0,0,0,0.2)` → Tailwind `shadow-[0_15px_30px_0_rgba(0,0,0,0.2)]`
- Dropdown min-width: 680px → `min-w-[680px]`
- Mega menu is flexbox with 3 equal columns → `flex` + `w-1/3` per column
- Column padding: 10px each side
- Mega menu internal padding: 20px
- Content vertical padding: 7rem (112px)
- The trigger text turns black (#000) when open, arrow rotates 180deg
- Transition: 0.3s all ease on links
- Hover accent color: #e83e8c (pink) on category links
- Category items show count in parentheses, e.g. "Code(5)"
- Title for image card: "PSD Mockups" bold, "View All Here" muted
- All category links are #000, weight 400
