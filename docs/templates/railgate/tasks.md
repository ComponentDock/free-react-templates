# Railgate — Implementation Tasks & Design Notes

## Structure order (top to bottom)

1. **Sidebar (left panel, fixed 300px, full viewport height)**
   - Toggle button (positioned outside sidebar right edge)
   - Profile section (background image + overlay + avatar + name)
   - Navigation list (7 items, icon + label)
2. **Main content (right panel, flex-grow)**
   - Heading
   - Body paragraphs
   - Footer (Component Dock link)

## Component breakdown

| Component     | File                         | Notes                                            |
| ------------- | ---------------------------- | ------------------------------------------------ |
| `App.tsx`     | `src/App.tsx`                | Root flex container: sidebar + content wrapper   |
| `Sidebar.tsx` | `src/components/Sidebar.tsx` | Sidebar panel: profile + nav + toggle button     |
| `Profile.tsx` | `src/components/Profile.tsx` | Background image, overlay, circular avatar, name |
| `NavList.tsx` | `src/components/NavList.tsx` | 7 nav items with icons, hover/active states      |
| `Content.tsx` | `src/components/Content.tsx` | Main content: heading + paragraphs + footer      |
| `Footer.tsx`  | `src/components/Footer.tsx`  | Component Dock attribution link                  |

## Design notes — section-by-section fidelity

### Sidebar

- Width: exactly 300px (min-width and max-width)
- Background: #32373d (dark charcoal)
- Position: relative (not fixed/absolute — flexbox handles it)
- Transition: all 0.3s for collapse/expand
- Collapse: margin-left: -300px (class-based toggle)
- Mobile (< 992px): hidden by default, toggle at top:10px, right:-60px

### Toggle button

- Size: 30×30px square
- Background: #2f89fc (blue)
- Border: transparent
- Color: #000 (but icon is white via FontAwesome replacement)
- Position: absolute, top:20px, right:0 with margin-right:-35px (extends outside)
- Icon: FontAwesome right-arrow (▶) when expanded, left-arrow (◀) when collapsed
- Use lucide-react `ChevronRight` / `ChevronLeft` instead of FontAwesome
- Mobile: top:10px, right:-60px

### Profile section

- Full sidebar width background image (mountain landscape)
- Use placeholder: `https://picsum.photos/seed/railgate-bg/300/200`
- Dark overlay: pseudo-element with background #000, opacity 0.3
- Centered content: avatar + name
- Avatar: 100×100px, border-radius 50%, `https://picsum.photos/seed/railgate-avatar/100/100`
- Name: h3, white, 18px, Poppins, font-weight 400

### Navigation

- `<ul>` with no padding, no list-style
- 7 items: Home, Download, Gift Code, Top Review, Settings, Support, Sign Out
- Icons: lucide-react equivalents:
  - Home → `Home`
  - Download → `Download` + notification badge
  - Gift Code → `Gift`
  - Top Review → `Trophy`
  - Settings → `Settings`
  - Support → `Headphones`
  - Sign Out → `LogOut`
- Item padding: 15px 30px
- Border-bottom: 1px solid rgba(255,255,255,0.05)
- Default: color rgba(255,255,255,0.6), no background
- Hover: color #fff, background #2f89fc, border-bottom #2f89fc
- Active: color #fff, background transparent
- Notification badge (Download only): red circle, 12px, "5" in 8px text
- Font: Poppins, 16px

### Content area

- Background: #fff (white)
- Width: 100% (flex-grow in the wrapper)
- Min-height: 100vh
- Padding: 1.5rem (mobile), 3rem (desktop, ≥768px)
- Top padding: 3rem
- Heading: h2, "Sidebar #09" → rename to "Railgate" in the recreation
- Heading style: black (#000), font-weight 400, Poppins, font-size 2rem
- Body: two lorem ipsum paragraphs in gray, 14px, 1.8 line height
- Transition: all 0.3s

### Footer

- At bottom of content area
- Links to https://www.componentdock.com/
- Branded as "Component Dock"
- Simple text link, no complex footer layout needed

## CSS notes

- Primary font: Poppins from Google Fonts (weights 400, 500, 700)
- No Bootstrap — the original uses Bootstrap-like utility classes (cl- prefixed)
  but we recreate with Tailwind
- The cl-* utility classes in the original are custom Bootstrap abstractions;
  replace entirely with Tailwind equivalents
- Transition timing: 0.3s all ease (for sidebar toggle)

## Tailwind theme tokens (for src/index.css @theme)

```css
@theme {
  --color-sidebar: #32373d;
  --color-accent: #2f89fc;
  --color-accent-hover: #0069d9;
}
```

## Gotchas

- The original CSS uses `all: revert` reset — we use Tailwind's preflight instead
- FontAwesome icons → replace with lucide-react
- Background images → use picsum.photos placeholders
- "Catriona Henderson" is a ColorLib artifact — replace with generic name
- "Sidebar #09" heading is a ColorLib artifact — replace with "Railgate"
- The toggle button icon content changes via CSS (`content: "\f053"` /
  `content: "\f054"`) — we use React state + conditional rendering
