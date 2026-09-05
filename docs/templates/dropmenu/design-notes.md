# DropMenu — Design Notes

## Source
- ColorLib: Dropdown 12
- Slug: `dropdown-12`
- Preview: https://preview.colorlib.com/theme/dropdown-12/ (404 — HTML retrieved via CDN cache)
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/dropdown-12.jpg

## Visual analysis (from HTML structure + font declarations)

This is a **UI component snippet**, not a full-page template. The original is a
Bootstrap-based dropdown widget showing a "Privacy Settings" trigger that opens
a two-column menu with icon+text items.

### Layout structure (section order)
1. **Page heading** — centered h2: "Dropdown #2"
2. **Dropdown widget** — centered in a single column (col-md-5)
   - Trigger link with gear icon + "Privacy Settings"
   - Dropdown menu: two columns (half-col flex layout)
     - Left column: Settings (cog icon), Account (person icon)
     - Right column: Settings (cog icon), Notification (person icon)

### Design tokens (inferred — CSS unreachable)
- **Fonts:** Roboto (300/400), Poppins (300/400/500), Source Serif Pro (400/600)
- **Colors:** Bootstrap 4 defaults — primary blue (#007bff), white backgrounds, gray muted text (#6c757d)
- **Spacing:** Bootstrap grid spacing (container, row, col-md-5)
- **Icons:** Icomoon icon font (cog, person glyphs)

### Fidelity notes for implementer
- This is a small component, not a full page. The app should wrap it in a simple
  centered layout with the heading and the dropdown widget.
- Use Tailwind classes to replicate the Bootstrap grid behavior (max-w-md mx-auto
  for centering, flex for two-column menu).
- Replace Bootstrap's data-toggle dropdown with React state (useState for open/close).
- Use lucide-react icons (Settings, User) instead of icomoon.
- Keep the two-column layout on desktop, single column on mobile (responsive).
- The trigger should be a button with proper aria-expanded, aria-haspopup attributes.
- Menu items should be links (<a>) with icon + text, matching the original structure.

### What to adapt
- "Dropdown #2" heading → can keep or adapt to "Privacy Settings Menu"
- Lorem ipsum descriptions → keep or use similar placeholder text
- No actual images needed — icons only
