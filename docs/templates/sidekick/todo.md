# Sidekick — Implementation Notes

**Source:** ColorLib Bootstrap Sidebar 10
**Preview:** https://colorlib.com/etc/bootstrap-sidebar/sidebar-10/
**New name:** sidekick

## Structure Order

1. `App.tsx` — Layout shell: sidebar + main content side by side
2. `Sidebar.tsx` — The sidebar panel (logo, nav, newsletter, footer)
3. `SidebarToggle.tsx` — Hamburger button to collapse/expand sidebar
4. `MainContent.tsx` — The content area to the right of sidebar
5. `NewsletterForm.tsx` — Email input + subscribe form (in sidebar)

## Section-by-Section Fidelity Notes

### Layout Shell (`App.tsx`)
- Flexbox: `flex` with `min-h-screen`
- Sidebar fixed at `w-[300px]` with `min-w-[300px] max-w-[300px]`
- Content area takes remaining width: `flex-1`
- Toggle state managed via `useState<boolean>(true)` (open by default)

### Sidebar (`Sidebar.tsx`)
- Background: dark image (`picsum.photos/seed/sidekick/300/1200`) with
  semi-transparent black overlay (`bg-black/40`)
- Text color: white (`text-white`)
- Logo: "Sidekick" in `text-3xl font-bold` + subtitle in smaller text
- Nav links: `py-4 px-8 block` with `border-b border-white/10`
  - Icons: `lucide-react` (Home, User, FileText, Settings, Send)
  - Hover: `bg-[#2f89fc]` transition 0.3s
  - Active state: `bg-[#2f89fc]` with `text-white`
- Newsletter form section below nav:
  - Heading "Subscribe for newsletter"
  - Email input with placeholder
  - Submit button
- Footer at bottom: copyright text, link to componentdock.com

### Sidebar Toggle (`SidebarToggle.tsx`)
- Absolute positioned at `left-0 top-2.5 -ml-15`
- Hamburger icon (3 bars), clicks toggle sidebar open/closed
- Controls sidebar margin: open = `ml-0`, collapsed = `-ml-[300px]`
- Content area transition: `transition-all duration-300`

### Main Content (`MainContent.tsx`)
- Padding: `p-6 md:px-10 md:py-12 pt-12`
- Heading: "Explore Our Platform" (paraphrased from "Sidebar #04")
- Two paragraphs of descriptive content
- Clean white background

### Newsletter Form (`NewsletterForm.tsx`)
- Wrapped in a div with margin below nav
- Input: white bg, border, rounded
- Button: brand blue bg, white text

## Design Tokens (Tailwind classes)

| Token | Tailwind |
| --- | --- |
| Brand blue | `#2f89fc` — use as `[color:--brand-blue]` in @theme |
| Font | Poppins via Google Fonts `<link>` in index.html |
| Sidebar bg | `bg-[url('...')] bg-cover bg-center` + `bg-black/40` overlay |
| Sidebar width | `w-[300px]` fixed |
| Link border | `border-b border-white/10` |
| Transition | `transition-all duration-300` |
| Content bg | `bg-white` |
| Body text | `text-gray-900` (#212529) |
