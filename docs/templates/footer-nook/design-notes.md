# FooterNook — Design Notes

## Source

- **ColorLib template:** Bootstrap Footer 18 (V18)
- **Slug:** `bootstrap-footer-18`
- **Preview URL:** https://preview.colorlib.com/theme/bft/bootstrap-footer-18/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-18.jpg
- **Category:** Footer / Contact Form
- **Best for:** Portfolio sites

## Visual Design Analysis

### Layout Structure

The template has two main visual areas:

1. **Hero section** (`ftco-section`): A tall padded area (12em vertical padding) with a centered heading "Footer #08". This serves as a visual spacer/hero before the footer.

2. **Footer** (`footer.footer-08`): Two-column layout:
   - **Left column (9/12 width):** Contains a row of four sub-columns:
     - "About us" (4 cols): heading + paragraph + social icons
     - "Discover" (4 cols): link list
     - "About" (4 cols): link list
     - "Resources" (4 cols): link list
     - Copyright line at bottom
   - **Right column (3/12 width):** Green sidebar with contact form
     - Uses `aside-stretch-right` class with `::after` pseudo-element to extend green background infinitely to the right

### Color Palette

| Element              | Color                    | Notes                              |
|----------------------|--------------------------|------------------------------------|
| Footer background    | `#f1f6f5`               | Very light mint/off-white          |
| Sidebar background  | `#12cc94`               | Vibrant teal-green (brand accent)  |
| Sidebar extends via  | `::after` pseudo-element | Covers full remaining width        |
| Submit button        | `#2f89fc`               | Bright blue                        |
| Links                | `#12cc94`               | Same as sidebar (brand green)      |
| Paragraphs           | `rgba(0,0,0,0.3)`       | Very muted black                   |
| Link lists           | `rgba(0,0,0,0.3)`       | Same muted tone                    |
| Social icon bg       | `rgba(0,0,0,0.05)`      | Almost transparent dark            |
| Form inputs          | `#fff`                  | White                              |
| Footer heading-white | `#fff`                  | White on green sidebar             |

### Typography

- **Font:** Poppins (Google Fonts CDN), weights 300-900
- **Heading size:** 18px for `.footer-heading`
- **Body/input size:** 14px for contact form inputs
- **Social icons:** Ionicons font, 20px size

### Component Details

**Social icons:**
- 40×40px circular containers (`border-radius: 50%`)
- Background: `rgba(0,0,0,0.05)`
- On hover: white color
- Icons centered via absolute positioning + transform

**Contact form inputs:**
- Height: 50px
- Border-radius: 5px
- No visible border
- White background
- Placeholder color: `rgba(0,0,0,0.3)`
- No box-shadow on focus

**Submit button:**
- Full-width (`.form-control.submit`)
- Background: `#2f89fc` (blue)
- Text: white
- No custom border-radius (inherits Bootstrap default)

### Responsive Behavior

At `max-width: 767.98px`:
- Sidebar background becomes transparent
- `::after` pseudo-element is hidden (display: none)
- Layout stacks vertically

## Implementation Notes

### Component Structure

```
App.tsx
├── HeroSection.tsx        — centered heading, padded section
└── Footer.tsx
    ├── FooterLeft.tsx     — about + link columns + copyright
    │   ├── AboutColumn.tsx    — heading, paragraph, social icons
    │   ├── LinkColumn.tsx     — reusable: heading + ul of links
    │   └── Copyright.tsx      — dynamic year, muted text
    └── FooterRight.tsx    — green sidebar with contact form
        └── ContactForm.tsx    — name, email, subject, message, submit
```

### Tailwind Theme Tokens

```css
@theme {
  --color-brand: #12cc94;
  --color-footer-bg: #f1f6f5;
  --color-submit-blue: #2f89fc;
  --color-text-muted: rgba(0, 0, 0, 0.3);
  --color-social-bg: rgba(0, 0, 0, 0.05);
}
```

### Key Implementation Decisions

1. **Sidebar stretch effect:** The original uses `::after` with `width: 360%` and `position: absolute` + `left: 100%`. In Tailwind, use `after:absolute after:left-full after:bottom-0 after:top-0 after:w-[360%] after:bg-brand` on the sidebar container.

2. **Social icons:** Use `lucide-react` icons (Twitter → X, Facebook, Instagram) instead of Ionicons. Keep the circular 40×40 container.

3. **Form inputs:** Custom height (50px), no border, 5px radius. Use Tailwind `h-[50px] rounded-[5px] border-none bg-white` classes.

4. **Font:** Load Poppins via Google Fonts `<link>` in `index.html`.

5. **Footer links:** Replace Colorlib attribution with Component Dock link per conventions.

### Fidelity Notes

- The hero section is just a padded heading — minimal content, but keep it for visual parity
- The green sidebar extends infinitely to the right via pseudo-element — this is the signature visual element
- The muted text color `rgba(0,0,0,0.3)` is very light — ensure contrast is acceptable
- The contact form is purely visual (no actual submission logic needed for a template)
