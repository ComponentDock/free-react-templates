# SideQuest — Implementation Notes

## Source
- **ColorLib template:** Sidebar V07
- **ColorLib slug:** colorlib-sidebar-v07
- **Preview URL:** https://preview.colorlib.com/theme/colorlib-sidebar-v07/ (404 — not live)
- **Reference:** Screenshot from TEMPLATES.md only

## Structure order (from screenshot)

1. **Root layout** — full-height two-panel split (flex row on desktop, column on mobile)
2. **Content panel (left)** — dark slate background (#3d454d), contains:
   - Close (X) button — top-right, white icon
   - Blog post list — 4+ rows, each row: title + date (left) + circular avatar (right)
3. **Sidebar panel (right)** — white background, full height, contains:
   - "GET STARTED" heading — uppercase, bold, dark
   - Progress bar — horizontal, 25% filled, green (#66bb6a) on light gray track
   - "25%" label — right-aligned next to progress bar
   - Steps list — 7 items, each with title + description text
     - Items 1–2: completed (green checkmark icon)
     - Items 3–7: pending (no icon)
   - User profile — circular avatar + "Dan Smith" name, bottom of sidebar

## Section-by-section fidelity notes

### Content panel
- Background: dark slate (~#3d454d). Full viewport height.
- Close button: white X icon in absolute top-right corner. Should toggle sidebar visibility on mobile.
- Post list: rows with title (white, ~16px, semi-bold), date (lighter gray ~12px), circular avatar (~60px, right-aligned).
- All 4 visible posts have identical placeholder content ("How the gut microbes you're born with affect your lifelong health", "Posted: Dec 17, 2019").

### Sidebar panel
- Background: white, full height.
- Heading: "GET STARTED" — uppercase, small bold text, dark color.
- Progress bar: ~8px height, rounded ends, green fill ~25%, light gray track.
- Percentage: "25%" right of bar, small dark text.
- Steps: 7 items, each with a title (dark, ~14px, semi-bold) and description (gray ~12px). First 2 have green checkmark icons; remaining 5 have no icon.
- User profile at bottom: circular avatar (~40px) + "Dan Smith" in dark text.

## Component breakdown

| Component    | Description                                           |
| ------------ | ----------------------------------------------------- |
| `App.tsx`    | Root two-panel layout                                 |
| `ContentPanel.tsx` | Dark panel with close button and post list     |
| `PostRow.tsx` | Single blog post row (title, date, avatar)          |
| `Sidebar.tsx` | White sidebar with onboarding checklist              |
| `ProgressBar.tsx` | Green progress bar with percentage label          |
| `StepItem.tsx` | Single onboarding step (checkmark, title, desc)    |
| `UserProfile.tsx` | Circular avatar + name at sidebar bottom          |
| `Footer.tsx` | "Made with Component Dock" footer                    |

## Placeholder assets
- Post avatars: `https://picsum.photos/seed/sidequest-post-<n>/60/60`
- User profile avatar: `https://picsum.photos/seed/sidequest-user/40/40`

## Notes
- Preview was 404; all tokens derived from screenshot only.
- Font: Open Sans (Google Fonts) — consistent with other ColorLib sidebar templates.
- The close button should control sidebar visibility on mobile (slide in/out).
