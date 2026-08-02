# Replication — building templates close to identical

How to recreate a ColorLib template faithfully in React. **Every template
implementation MUST follow this process** — the original is the reference, not
the imagination.

## Reference sources (all self-serve, no manual steps)

For any template slug in `TEMPLATES.md`:

1. **Live preview DOM** — fetch and analyze:
   `https://preview.colorlib.com/theme/<slug>/`
   (e.g. Maze → https://preview.colorlib.com/theme/maze/)
   - This is the REAL rendered template: section order, headings, copy,
     buttons, forms, links. Parse it (curl + grep, or the browser for a visual).
2. **Screenshot** — already in `TEMPLATES.md` next to each item
   (`![preview](https://colorlib.com/wp/wp-content/uploads/sites/2/...jpg)`).
   Open it in the browser and describe the visual design (colors, layout,
   aesthetic) before writing any code.
3. **CSS tokens** — fetch the stylesheet(s) referenced by the preview HTML
   (usually `css/main.css`) and extract:
   - brand colors (`background: #...` on `.banner-area`, `.newsletter-area`, etc.)
   - font family (e.g. `font-family: "Poppins", sans-serif`)
   - button/link styling (radius, padding, hover)
   - section backgrounds (solid, gradient, image)

## Fidelity rules

- Match the **section structure and order** 1:1 (navbar → hero → cards →
  parallax → gallery → features → newsletter → footer).
- Match the **design tokens**: brand color(s), font, button shapes, spacing
  rhythm, dark/light treatment. Put the brand color in `@theme` and use it via
  Tailwind classes.
- Match **layout**: split heroes, column counts, grid patterns.
- **Never copy assets** (images, fonts files, icons, CSS files). Use:
  - placeholder images: `https://picsum.photos/seed/<template>-<n>/<w>/<h>`
    (deterministic per template, like the marketplace project)
  - system/Google fonts via `<link>` in `index.html`
  - icons from `lucide-react`
- Copy text is fine to paraphrase, but keep the same _kind_ of content
  (headline + subtext + CTA, card title + blurb + link, etc.).
- If the preview is unreachable, fall back to the screenshot as the sole
  reference and say so in the PR description.

## Workflow per template

1. Fetch preview HTML + CSS; save to `/tmp`; extract structure + tokens
   (document them in the spec).
2. View the screenshot (browser) and note the visual design in the spec.
3. Write/update `openspec/specs/template-<name>/spec.md` with the REAL section
   list and scenarios.
4. TDD: tests → implementation → 100% coverage.
5. PR description must include: source template, preview URL, design tokens
   used, and what differs (renames, placeholder images).
