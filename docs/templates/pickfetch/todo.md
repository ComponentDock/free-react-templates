# Pickfetch — Implementation Todo

## Template info

- **New name:** Pickfetch
- **Source:** ColorLib Multiselect 12
- **Preview URL:** https://preview.colorlib.com/theme/bootstrap/multiselect-12/
- **Listing URL:** https://colorlib.com/wp/template/multiselect-12/

## Structure (section order)

1. Page wrapper — full viewport, light gray background (#efefef)
2. Content section — centered, 7rem vertical padding
3. Heading — "Multi-Select #2", 20px, centered, default black
4. Instructional text — "State separate with comma \",\"", gray #b3b3b3
5. Multi-select component — centered in col-7 column
   - Select2-style dropdown with live search
   - Multiple selection mode
   - Selected items as coral pink chip/pills
6. Footer — Component Dock attribution link

## Design tokens (from css/style.css)

- **Brand color:** #f67280 (coral pink) — used for chips, highlighted options
- **Page background:** #efefef (light gray)
- **Text muted:** #b3b3b3 (paragraph text)
- **Font:** "Roboto" (weights 300, 400, 500)
- **Dropdown hover:** #f4f4f4 (unselected option hover)
- **Dropdown shadow:** 0 15px 30px 0 rgba(0, 0, 0, 0.2)
- **Dropdown radius:** 7px

## Component notes

### Multi-select dropdown

- 8 options: Alaska, Hawaii, California, Nevada, Oregon, Washington,
  Alabama, Utah
- Selected chip style: #f67280 bg, white text, 14px, 2px 10px padding
- Chip remove icon: rgba(255, 255, 255, 0.5), hover: #fff
- Search filters options in real time (case-insensitive)
- Dropdown shows highlighted selected option with #f67280 bg

### Comparison with Picktag (Multiselect 11)

- Picktag uses #65587f (purple) brand, Pickfetch uses #f67280 (coral pink)
- Picktag heading: "Multi-Select #1", Pickfetch: "Multi-Select #2"
- Picktag options: Design, HTML5, CSS3, jQuery, BS4, Bootstrap, WordPress, FrontEnd
- Pickfetch options: Alaska, Hawaii, California, Nevada, Oregon, Washington, Alabama, Utah
- Picktag page bg: #fff, Pickfetch: #efefef
- Pickfetch has 7px border-radius on dropdown and box-shadow
- Picktag has bottom-border input, Pickfetch has no visible border
