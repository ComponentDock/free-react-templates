# Ledgerman — Implementation Notes

Source: ColorLib Jackson (https://preview.colorlib.com/theme/jackson/)
New name: ledgerman

## Section Order (implementation sequence)

1. **Sidebar** — fixed left panel with author photo, name, nav links, social icons, dark mode toggle
2. **Hero** — full-height background image carousel, centered text with CTA buttons
3. **About** — "Who Am I?" with author photo, bio text, social links, counters
4. **Services** — 2×3 grid of service cards (icon + title + description)
5. **Skills** — progress bars with labels and percentage widths
6. **Education** — timeline entries with date ranges
7. **Experience** — timeline entries with date ranges
8. **Work/Portfolio** — filterable gallery with hover overlay, share/view icons
9. **Blog** — blog post cards with featured image, title, excerpt
10. **Contact** — form (Name, Email, Subject, Message) + submit
11. **Footer** — copyright, social icons, Component Dock link

## Fidelity Notes

- **Layout:** Two-panel layout — sidebar fixed on left (w-64 or similar), main content scrolls on right. On mobile, sidebar becomes offcanvas.
- **Sidebar:** Author photo is circular (border-radius: 50%). Nav links are vertical. Social icons use icomoon font (replace with lucide-react).
- **Hero:** Uses flexslider carousel with background images and dark overlay. Multiple slides with different background images. Overlay opacity ~0.5.
- **Services:** 6 items in 2-column grid. Each has an icon (icomoon → lucide-react), h3 title, and short paragraph.
- **Skills:** Progress bars with inline width styles (75%, 60%, 85%, 90%, 70%, 80%). Animate on scroll.
- **Education/Experience:** Timeline layout with date labels and content.
- **Work/Portfolio:** Filterable grid. Items have image background, overlay on hover, share + eye + heart icons with counts. "Load More" button. Filter categories: All, Graphic Design, Web Design, Software, Apps.
- **Blog:** Cards with featured image, date, title, excerpt.
- **Contact:** Standard form with textarea for message.
- **Dark mode:** CSS variables toggle between light/dark. Toggle button in sidebar and footer.
- **Colors:** Primary blue (#0066ff), text dark (#1a1a1a), backgrounds white/light gray.
- **Font:** Inter (Google Fonts) — clean, modern sans-serif.

## Key Differences from Other Templates

- Sidebar-based layout (most templates are full-width)
- Fixed navigation in sidebar rather than top navbar
- Timeline-style education/experience sections
- Portfolio filter with category buttons
- Dark mode toggle integrated into sidebar
