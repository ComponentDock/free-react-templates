# Dropcall — Design Notes

## Source
- ColorLib template: Dropdown 12
- Preview URL: https://preview.colorlib.com/theme/bootstrap/dropdown-12/
- Source page: https://colorlib.com/wp/template/dropdown-12/
- Description: A wide two-column Bootstrap dropdown with icon-labeled items (Settings, Account, Notification)

## Structure Order (from preview)

1. Page heading ("Dropdown #2") — centered, h2, 20px
2. Centered container (col-md-5)
3. Dropdown button ("Privacy Settings" + cog icon)
4. Wide dropdown menu (min-width 700px, centered, two columns)
   - Column 1: Settings (cog icon), Account (person icon)
   - Column 2: Settings (cog icon), Notification (person icon)
5. Footer with Component Dock link

## Component Breakdown

### DropdownButton
- Same pattern as Fallshift: cog icon (lucide-react Settings) + "Privacy Settings"
- Font: Roboto, 14px, color #888
- Hover → active: color changes to #000

### DropdownMenu (Two-Column)
- Wide layout: min-width 700px, centered via translateX(-50%)
- Uses flexbox (d-flex in Bootstrap)
- Two half-columns (50% each, 20px padding)
- Each column has 2 menu items

### MenuItem
- Icon (cog or person) in purple #c3a1fa, 30px font-size
- Title: h3, 16px, #000, letter-spacing .05rem, margin 5px 0 10px 0
- Description: p, 14px, #b3b3b3, font-weight 300
- Separator: border-bottom 1px solid #efefef (except last item)
- Items are block-level links (display: block)

### Animation
- Same as Fallshift: opacity 0→1, margin-top 40px→50px, 0.3s ease
- Menu starts invisible (opacity 0, visibility hidden)
- On open: add .active class (opacity 1, visibility visible, margin-top 50px)

## Fidelity Notes

- The two-column layout is the KEY differentiator from Dropdown 11
- Menu is horizontally centered under the button (translateX(-50%))
- Menu items have purple icons (#c3a1fa) — use lucide-react icons
- Item titles use letter-spacing .05rem
- The menu has generous padding (20px per column)
- Items separated by light gray borders (#efefef)
- Background: white. Content padding: 7rem 0 (py-28)

## Tailwind Theme Tokens

```css
@theme {
  --color-dropcall-text: #888888;
  --color-dropcall-hover: #000000;
  --color-dropcall-border: #efefef;
  --color-dropcall-icon: #c3a1fa;
  --color-dropcall-paragraph: #b3b3b3;
  --color-dropcall-title: #000000;
}
```

## Placeholder Images
None needed — this is a UI component snippet.
