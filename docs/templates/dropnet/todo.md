# DropNet — Implementation Notes

## Source
- ColorLib: Dropdown 18
- URL: https://colorlib.com/wp/template/dropdown-18/
- Preview: https://preview.colorlib.com/theme/bootstrap/dropdown-18/

## New Name
- `dropnet` — app folder `apps/dropnet`, package `@free-react-templates/dropnet`
- Preview URL: https://dropnet.free.componentdock.com

## Structure Order
1. Heading section (centered page title)
2. Profile card section (avatar + name + location + toggle arrow)
3. Dropdown menu (animated, with icon items + badges)
4. Footer (Component Dock link)

## Section-by-Section Fidelity Notes

### 1. Page Wrapper
- Light gray background (#efefef)
- Content padding: 7rem top/bottom
- Centered container (Bootstrap col-md-5 centered via justify-content-center)

### 2. Heading
- Centered text, text-center
- Original uses Bootstrap h2 styling
- We use Tailwind text-2xl font-medium text-center my-5

### 3. Profile Card (dropdown toggle)
- Flex row layout: avatar (50px circle) + text block
- Avatar: 50px × 50px, border-radius 50%, object-cover
- Name: 16px, black text, margin 0
- Location: 13px, block display, margin 0
- Arrow indicator: chevron-down icon, rotates 180° when open
- Transition: 0.3s ease on transform
- Cursor: pointer

### 4. Dropdown Menu
- Background: white (#fff)
- Shadow: 0 15px 30px 0 rgba(0,0,0,0.2)
- Border: 1px solid transparent
- Border-radius: 0 (sharp corners)
- Padding: 0 top/bottom (items handle spacing)
- Animation: opacity 0→1, margin-top -10px→0, visibility hidden→visible
- Transition: 0.3s on margin-top, opacity, visibility

### 5. Dropdown Items
- Layout: flex row, icon left + text + optional badge right
- Padding: 15px 15px
- Font: 14px
- Color: #b2bac1 (muted gray)
- Border-bottom: 1px solid rgba(0,0,0,0.1) (except last item)
- Hover: background #fff, color #000
- Icon: 15px margin-right, inline-block
- Items: User Dashboard, Inbox, Following, Setting, Log out

### 6. Badges
- Background: #fd7e14 (Bootstrap orange)
- Color: #fff
- Padding: 2px 6px
- Font: 11px
- Border-radius: 4px
- Position: absolute, right: 15px, vertically centered

### 7. Footer
- Standard footer with Component Dock link
- Replace any ColorLib attribution with "Made with Component Dock"

## Design Tokens for Tailwind @theme
```
--color-brand-orange: #fd7e14;
--color-bg-page: #efefef;
--color-text-muted: #b2bac1;
--color-dropdown-bg: #ffffff;
```

## Implementation Approach
- Single `App.tsx` composes the sections
- `ProfileDropdown.tsx` component handles toggle state + animation
- Use `useState` for open/close + `useRef` + click-outside detection
- CSS transitions via Tailwind classes or inline style for animation
- Icons from `lucide-react` (Dashboard, Mail, Users, Settings, LogOut)
- Avatar placeholder: `https://picsum.photos/seed/dropnet-person/50/50`
