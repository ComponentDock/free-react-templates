# Dropmark — Design Notes

## Source
- ColorLib template: Dropdown 13
- Preview URL: https://preview.colorlib.com/theme/bootstrap/dropdown-13/
- Source page: https://colorlib.com/wp/template/dropdown-13/
- Description: A Bootstrap filetype dropdown with blue accent hover animation

## Structure Order (from preview)

1. Page heading ("Dropdown #3") — centered, h2, 20px
2. Centered container (col-md-5)
3. Dropdown button ("Filetype" + file-text icon) — gray bg, turns blue when open
4. Dropdown menu with 4 items, each with icon + label
5. Footer with Component Dock link

## Component Breakdown

### DropdownButton
- File-text icon (lucide-react FileText) + "Filetype" text
- Default: bg #f8f9fa, text #888, font-size 15px, padding 8px 15px
- Active (menu open): bg #007bff, text #fff
- Transition: 0.3s all ease

### DropdownMenu
- Standard Bootstrap-style menu
- Shadow: 0 15px 30px 0 rgba(0,0,0,0.2)
- Animation: opacity 0→1, margin-top 0→20px, 0.3s ease

### MenuItem
- Icon (left) + label (right) — inline layout
- Font: 14px, color #888
- Padding: 10px top/bottom, 15px left (default)
- Border-bottom: 1px solid #efefef (except last)
- Hover: text #000, padding-left 20px
- Hover blue left-bar: ::before pseudo-element, width 0→6px, bg #007bff
- The left-bar uses position absolute, full height, z-index 2

### Icons (from icomoon font in original)
- Markup HTML → lucide-react FileCode
- Photoshop PDF → lucide-react FileText
- Illustrator AI → lucide-react Pen or similar
- Sketch → lucide-react Compass or similar

## Fidelity Notes

- The BLUE accent color (#007bff) is the key differentiator from Dropdown 11/12
- Button color change on open is important — must toggle bg + text color
- The hover left-bar animation (width 0→6px) must be preserved
- Items indent on hover (padding-left 15→20px) — subtle but visible
- The menu items have border-bottom separators (#efefef)
- Background: white. Content padding: 7rem 0 (py-28)

## Tailwind Theme Tokens

```css
@theme {
  --color-dropmark-text: #888888;
  --color-dropmark-hover: #000000;
  --color-dropmark-accent: #007bff;
  --color-dropmark-border: #efefef;
  --color-dropmark-btn-bg: #f8f9fa;
}
```

## Placeholder Images
None needed — this is a UI component snippet.
