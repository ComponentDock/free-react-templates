# Vagabond — Implementation Notes

## Template overview

Two-column sidebar layout for a travel agency site. Fixed left sidebar with
purple-to-pink gradient over landscape photo, icon-based nav, newsletter
signup. Right content area is white with heading + body text.

## Structure order (top to bottom)

1. **App shell** — Flexbox row: Sidebar (fixed 300px) + Content area (flex-1)
2. **Sidebar**
   - Brand block: "Travel" (h1/bold) + "Travel Agency" (subtitle)
   - Navigation list: 6 items with Lucide icons (Home, About, Destination, Blog, Services, Contacts)
   - Newsletter section: heading + email input + submit
   - Footer: copyright + Component Dock link
3. **Content area**
   - Page heading
   - Body text paragraphs

## Section-by-section fidelity notes

### Sidebar background
- Gradient: purple (#9b59b6) → pink (#e84393) → magenta, applied as overlay
- Background image: landscape/mountain photo (use picsum.photos placeholder)
- Apply gradient via CSS `background: linear-gradient(...)` over the image

### Navigation
- Each item: flex row, icon (left) + label (right)
- Icons: Lucide React — Home, User, MapPin, FileText, Settings, Mail
- White text and icons, subtle hover effect (semi-transparent white background)
- Active state: slightly brighter or underlined

### Newsletter
- Heading: "Subscribe for newsletter" in white
- Input: white background, rounded corners, "Enter Email Address" placeholder
- Submit: styled button (white or transparent with border)

### Content area
- White background, generous padding
- Heading: large, dark text
- Body: standard paragraph styling, dark gray (#333)

### Footer (sidebar)
- Small text, white, copyright notice
- "Component Dock" link → https://www.componentdock.com/

## Component tree (proposed)

```
App
├── Sidebar
│   ├── SidebarBrand ("Travel" + "Travel Agency")
│   ├── SidebarNav (6 NavItem components)
│   ├── SidebarNewsletter (input + button)
│   └── SidebarFooter (copyright + link)
└── ContentArea
    ├── ContentHeading
    └── ContentBody (paragraphs)
```

## Design tokens to define in @theme

```css
@theme {
  --color-sidebar-gradient-start: #9b59b6;
  --color-sidebar-gradient-mid: #c471ed;
  --color-sidebar-gradient-end: #e84393;
  --color-body-text: #333333;
  --color-content-bg: #ffffff;
  --font-family-sidebar: "Poppins", sans-serif;
  --width-sidebar: 300px;
}
```

## Responsive strategy

- Below 768px: sidebar becomes a slide-over overlay toggled by hamburger icon
- Content area takes full width on mobile
- Use Tailwind responsive utilities (md: breakpoint)

## Assets

- Placeholder landscape image: `https://picsum.photos/seed/vagabond-landscape/600/1200`
- Icons: Lucide React (no external icon files)
- Font: Google Fonts Poppins via `<link>` in index.html
