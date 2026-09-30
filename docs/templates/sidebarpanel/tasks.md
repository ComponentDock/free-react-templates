# SidebarPanel — Implementation Tasks & Design Notes

Source: ColorLib Sidebar V04
URL: https://colorlib.com/wp/template/colorlib-sidebar-v04/
New name: sidebarpanel
Preview: 404 (unreachable — design from screenshot only)

## Structure order

1. **App.tsx** — Compose layout: blog grid (left) + chat icon + sidebar panel (right)
2. **components/BlogGrid.tsx** — 2-column grid of blog post cards with author photos
3. **components/PostCard.tsx** — Individual post card (author photo, title, date)
4. **components/ChatToggle.tsx** — White speech-bubble icon button, fixed top-right
5. **components/ContactSidebar.tsx** — Right sliding panel with contact form
6. **components/ContactForm.tsx** — Name, email, message fields + SEND button

## Design tokens (recreation notes)

- Main background: muted gray-blue (#6b6e7b) — use `bg-[#6b6e7b]`
- Sidebar background: deep purple (#483d6b) — use `bg-[#483d6b]`
- Text on sidebar: white — use `text-white`
- Form fields: white border, transparent background — use `border-white bg-transparent text-white placeholder-white/60`
- SEND button: white bg, dark text — use `bg-white text-[#222222]`
- Chat icon: white speech bubble — use `lucide-react` MessageCircle icon with `text-white`
- Font: system sans-serif
- Border radius: 0 (sharp corners everywhere)
- Sidebar width: ~350–400px fixed right

## Section-by-section fidelity notes

### Blog post grid
- 2 columns, 4 rows = 8 post cards
- Each card: small square author photo (left, ~60×60px) + title (bold, left of photo) + "Posted: Dec 17, 2019" (gray text below title)
- Background is the muted gray-blue; cards have no visible border or shadow
- Content appears dimmed/muted when sidebar is open (optional overlay)

### Chat icon toggle
- White speech-bubble icon near top-right of viewport
- Fixed position, always visible
- Toggles sidebar open/closed on click
- Use `lucide-react` MessageCircle icon

### Right sidebar contact panel
- Fixed right panel, full viewport height
- Deep purple background (#483d6b)
- "Get in touch" heading: large, bold, white, ~2rem
- Three form fields stacked vertically with spacing:
  - Name input (white border, transparent bg, white placeholder text)
  - Email input (same style)
  - Message textarea (same style, ~3 rows)
- SEND button: full-width, white bg, dark text, uppercase, bold
- Panel slides in from the right when chat icon is clicked

## Replication notes

- Preview URL returns 404 — all design details derived from TEMPLATES.md screenshot
- Screenshot shows the sidebar in an "open" state with the blog grid dimmed behind
- The chat icon is a small white speech bubble near the top-right of the viewport
- Overall aesthetic: clean, minimal, dark sidebar theme
- No parallax, no hero carousel, no newsletter — simple sidebar + form + blog grid
