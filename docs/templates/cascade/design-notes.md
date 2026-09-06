# Cascade — Design Notes & Task Outline

**Source:** ColorLib Dropdown V15
**Preview:** https://preview.colorlib.com/theme/bootstrap/dropdown-15/
**New name:** cascade

## Section structure (top → bottom)

The template is a single UI snippet, not a full-page template. It consists of:

1. **Bell trigger** — bell icon (lucide `Bell`) + circular notification badge
2. **Dropdown panel** (conditionally rendered):
   - **Header row** — "Notifications" title (left) + "Mark all as read" link (right)
   - **Notification list** — scrollable list of 5 items, each:
     - Circular avatar image (40px, `picsum.photos`)
     - Bold name + gray action text
     - Unread items: warm yellow `#fffaef` background
   - **Footer** — centered "View All" link

## Implementation tasks

1. Create `apps/cascade/` by copying the simplest existing app scaffold
2. Rename package to `@free-react-templates/cascade`
3. Create `public/CNAME` with `cascade.free.componentdock.com`
4. Set `homepage` in `package.json` to `https://cascade.free.componentdock.com`
5. Build `NotificationBell` component (bell icon + badge, click handler)
6. Build `NotificationDropdown` component (panel, header, list, footer)
7. Build `NotificationItem` component (avatar, name, text, unread state)
8. Wire open/close state (click toggle, outside click dismiss, Escape key)
9. Style with Tailwind tokens: `#007bff` badge, `#fffaef` unread, `#f9f9f9` hover
10. Add placeholder avatars from `picsum.photos`
11. Write tests: bell renders, dropdown opens/closes, items render, unread highlight, keyboard
12. Run `npm run verify:app cascade` — must pass 100% coverage

## Design tokens for Tailwind `@theme`

```css
@theme {
  --color-brand-primary: #007bff;
  --color-brand-unread: #fffaef;
  --color-brand-hover: #f9f9f9;
  --color-brand-text: #bfbfbf;
  --color-brand-heading: #000;
}
```

## Fidelity notes

- The source uses Bootstrap's dropdown plugin; we replicate with React state + ARIA
- The bell icon source is `icomoon` font icons → use `lucide-react` Bell
- Avatars are local `images/person_*.jpg` → use `picsum.photos` placeholders
- The dropdown shadow: `0 15px 30px 0 rgba(0,0,0,0.2)` → Tailwind `shadow-[0_15px_30px_0_rgba(0,0,0,0.2)]`
- The notification list height: 200px overflow-y scroll
- Dropdown max-width: 380px
- The body has 7rem vertical padding; center the bell in that space
- Title is uppercase, 12px, bold
- "Mark all as read" and "View All" are small links (#888)
