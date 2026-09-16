# Formnook — Implementation Notes

## Source mapping

- **ColorLib source:** Contact Form 06
- **Source slug:** `contact-form-06`
- **Source URL:** https://colorlib.com/wp/template/contact-form-06/
- **Preview (404):** https://preview.colorlib.com/theme/contact-form-06/
- **Screenshot analyzed:** https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-06.jpg

## Section order (top to bottom)

1. **Page title** — centered heading above the card (optional; can be the template name or omitted)
2. **Card wrapper** — rounded (10px), large drop shadow, two-column layout
   1. **Left column (form panel)** — white background, padded
      - Heading: "Contact Us" (bold, dark)
      - Form: FULL NAME + EMAIL ADDRESS (side by side), SUBJECT (full width), MESSAGE textarea (full width)
      - Submit button: "Send Message" (dark blue)
   2. **Right column (map panel)** — full-height map image placeholder
3. **Info row** — four circular blue icons with contact details (Address, Phone, Email, Website)
4. **No navbar or separate footer** — self-contained contact section

## Fidelity notes

### Typography
- Load **Poppins** (400, 500, 600, 700) via Google Fonts `<link>` in index.html
- Body: 14px, line-height 1.8, color #666666
- Headings: weight 700, color #000000
- Form labels: uppercase, 13px, font-weight 600, color #000000
- Form inputs: 16px

### Colors & backgrounds
- Page: #f4f4f4
- Card: #ffffff
- Accent (button, links, info circles, input focus): #4e73df
- Button hover: #3b5fc0
- Body text: #666666
- Info text: #666666

### Button
- padding: 12px 24px
- border-radius: 5px
- box-shadow: 0px 10px 20px -6px rgba(0,0,0,0.12)
- Hover shadow: 0px 10px 20px -6px rgba(0,0,0,0.22)
- Background + border: #4e73df, text: white

### Inputs
- Border: 1px solid #e1e1e1
- border-radius: 4px
- Height: 44px
- Placeholder color: rgba(0,0,0,0.4)
- Focus: border-color #4e73df
- textarea: height auto, resize vertical, min-height 120px
- Labels: uppercase, 13px, font-weight 600, margin-bottom: 8px

### Card wrapper
- border-radius: 10px
- box-shadow: 0px 21px 41px -13px rgba(0,0,0,0.18)
- overflow: hidden
- max-width: ~900px, centered

### Right column map
- background-size: cover; background-position: center center
- Use a placeholder map image (e.g. picsum.photos/seed/formnook-map/500/400)
- Or a solid color block with a map icon

### Info row
- Four items in a horizontal flex row, centered, with gap
- Each item: circular div (56px, background #4e73df, border-radius 50%, flex center) + white icon inside
- Below circle: text label (bold) + value/link
- Email and Website values are blue links (#4e73df)
- Responsive: 2x2 grid on mobile

### Responsive
- Two columns at ≥992px (lg), stacked below
- Info row: 4-col on md+, 2x2 grid on mobile
- Card padding adjusts (p-6 md:p-10)

## Implementation tasks

- [ ] Create `apps/formnook/` from simplest existing app template
- [ ] Set package name to `@free-react-templates/formnook`
- [ ] Set public/CNAME to `formnook.free.componentdock.com`
- [ ] Set homepage in package.json
- [ ] Add Poppins font link to index.html
- [ ] Implement Card component (two-column wrapper with shadow/radius)
- [ ] Implement ContactForm component (labeled fields, bordered inputs)
- [ ] Implement MapPanel component (placeholder map image)
- [ ] Implement InfoRow component (4 circular icons + contact details)
- [ ] Implement App.tsx composing all sections
- [ ] Write tests for all components (100% coverage)
- [ ] Verify: typecheck, lint, test:coverage, build all pass
- [ ] Run `npm run spec:validate` against the spec
