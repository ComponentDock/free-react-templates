# Dropwell — Design Notes

> Recreation of ColorLib Dropdown 07

## ColorLib reference

- Preview: https://preview.colorlib.com/theme/dropdown-07/
- Screenshot: TEMPLATES.md line 762

## Design tokens

| Token        | Value                              | Usage                   |
| ------------ | ---------------------------------- | ----------------------- |
| brand        | #20c997                            | Button bg, hover states |
| brand-hover  | #1aa179                            | Button hover            |
| bg-page      | #f8f9fa                            | Page background         |
| bg-menu      | #ffffff                            | Dropdown menu bg        |
| text-body    | #6c757d                            | Body text               |
| text-heading | #212529                            | Headings                |
| shadow-menu  | 0 10px 34px -20px rgba(0,0,0,0.41) | Menu shadow             |

## Component architecture

- `App.tsx` — layout shell (title + dropdown + footer)
- `NestedDropdown.tsx` — main dropdown with expandable submenus
- `DropdownItem.tsx` — individual menu item (with optional submenu)
- `Footer.tsx` — Component Dock branded footer

## Differentiation from other dropdown apps

- dropkit: 4-direction showcase grid
- menubox: profile avatar button
- gust: weather-themed
- chime: notification bell
- cartwell: shopping cart
- passkey: sign-in form
- **dropwell**: multi-level nested menu with expandable submenus

## Files to create

```
apps/dropwell/
├── package.json
├── public/CNAME
├── index.html
├── vite.config.ts
├── tsconfig.json
├── vitest.config.ts
└── src/
    ├── main.tsx
    ├── App.tsx
    ├── App.test.tsx
    ├── index.css
    ├── test/setup.ts
    └── components/
        ├── NestedDropdown.tsx
        ├── NestedDropdown.test.tsx
        ├── DropdownItem.tsx
        ├── DropdownItem.test.tsx
        ├── Footer.tsx
        └── Footer.test.tsx
```
