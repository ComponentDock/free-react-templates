# Fallshift — Design Notes

## Source
- ColorLib template: Dropdown 11
- Preview URL: https://preview.colorlib.com/theme/bootstrap/dropdown-11/
- Source page: https://colorlib.com/wp/template/dropdown-11/
- Description: A simple Bootstrap dropdown button snippet for settings/privacy UI

## Structure Order (from preview)

1. Page heading ("Dropdown #1") — centered, h2, 20px
2. Centered container (col-md-5)
3. Dropdown button ("Privacy Settings" + cog icon)
4. Dropdown menu (Account, Privacy & Security, Password, Notification)
5. Footer with Component Dock link

## Component Breakdown

### DropdownButton
- Toggle button with cog icon (lucide-react Settings icon) + "Privacy Settings" text
- Border-radius: 4px
- Padding: 4px 7px
- Font: Roboto, 14px, color #888
- Hover: border #efefef, subtle box-shadow
- Active (menu open): bg #f8f9fa, inset box-shadow

### DropdownMenu
- Position absolute below button
- Border: 1px transparent
- Box-shadow: 0 15px 30px 0 rgba(0,0,0,0.2)
- Animation: opacity 0→1, margin-top 0→10px, 0.3s ease
- Menu items: font 14px, color #888, hover → #000

### Interaction (from main.js)
- jQuery show.bs.dropdown → add .active class after 100ms delay
- jQuery hide.bs.dropdown → remove .active class
- React equivalent: useState boolean, useEffect for transitions

## Fidelity Notes

- The original is a tiny snippet, not a full page. We expand it to a full React
  app page with centered layout, heading, and the dropdown component.
- The cog icon uses icomoon font in original; we use lucide-react Settings icon.
- The original uses jQuery + Bootstrap JS for dropdown toggling; we use React
  state + CSS transitions.
- The animated reveal (opacity + margin) must be preserved — this is the key
  visual feature of the template.
- Background: white. Content padding: 7rem 0 (use py-28 in Tailwind).
- Heading: "Dropdown #1", centered, 20px font-size (use text-center text-lg or
  similar Tailwind class matching 20px).

## Tailwind Theme Tokens

```css
@theme {
  --color-dropdown-text: #888888;
  --color-dropdown-hover: #000000;
  --color-dropdown-border: #efefef;
  --color-dropdown-bg-active: #f8f9fa;
  --color-dropdown-paragraph: #b3b3b3;
}
```

## Placeholder Images
None needed — this is a UI component snippet, not a multi-section page.
