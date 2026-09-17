# Reachpoint — Design Notes & Task Outline

## Source
- **ColorLib**: Contact Form V11
- **Preview**: https://preview.colorlib.com/theme/bootstrap/contact-form-11/
- **Screenshot**: https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-11.jpg

## Structure (top to bottom)

1. **Content wrapper** — Full-width white background, generous vertical padding (7rem)
2. **Container** — Centered, max-width (col-md-10 equivalent ~830px)
3. **Two-column row** (align-items-center):
   - **Left column (col-lg-7)**: Contact form
     - Heading: "Fill the form. It's easy." (Poppins bold, 3.5rem, black)
     - Form with right border separator:
       - Row 1: First name + Last name (col-md-6 each, side by side)
       - Row 2: Email (full width)
       - Row 3: Message textarea (full width, 7 rows)
       - Row 4: "Send Message" button (coral, square corners)
     - Success message area (hidden by default)
   - **Right column (col-lg-4, ml-auto)**: Sidebar text
     - Heading: "Let's talk about everything." (Poppins bold, 2rem, black)
     - Paragraph: placeholder lorem ipsum
     - "Read more" link (coral color)
4. **Footer** — Component Dock link

## Fidelity Notes

### Layout
- Bootstrap grid system: row > col-md-10 > row > col-lg-7 + col-lg-4
- Centered container with generous whitespace
- Two columns vertically centered (align-items-center)
- Right border on form element acts as visual separator

### Colors
- Brand/accent: Coral/salmon (~#e86b5a) — button background + link color
- Pure white background (#ffffff)
- Black text for headings (#000000)
- Light gray for input borders (#d9d9d9)
- No gradients, no shadows, no background images — completely flat

### Typography
- Headings: Poppins (Google Fonts), weight 700
- Body/inputs: Roboto (Google Fonts), weight 400
- Large heading size (3.5rem) creates strong visual hierarchy
- Clean, modern sans-serif aesthetic

### Form Styling
- Inputs: no visible border except bottom (1px solid #d9d9d9)
- Border-radius: 0 on all elements (square corners throughout)
- Input height: 55px
- Placeholder text in light gray
- Focus state: border changes to black, no box-shadow
- Button: solid coral fill, white text, square corners, same 55px height

### Responsive Behavior
- Below 992px: columns stack vertically
- Form right border removed on mobile
- Side-by-side name fields remain (col-md-6)
- Generous padding maintained

### What Differs from Original
- No jQuery/form validation library — use React state + simple validation
- No Bootstrap CSS — use Tailwind utilities for equivalent styling
- No external fonts via CDN links in CSS — load Poppins + Roboto via `<link>` in index.html
- Placeholder images if any needed (none in this template — it's form-only)
- Footer replaced with Component Dock link

## Tasks

1. [ ] Create `apps/reachpoint/` workspace (copy simplest existing contact form app)
2. [ ] Set up `vite.config.ts` with `injectUiSource()`
3. [ ] Create `src/index.css` with Tailwind entry + theme tokens (`--brand: #e86b5a`)
4. [ ] Create `src/App.tsx` — main layout component
5. [ ] Create `src/components/ContactForm.tsx` — the form with validation
6. [ ] Create `src/components/Sidebar.tsx` — right column text content
7. [ ] Create `src/components/Footer.tsx` — Component Dock link
8. [ ] Load Poppins + Roboto fonts in `index.html`
9. [ ] Write tests for each component (TDD — tests first)
10. [ ] Run `npm run test:coverage` — verify 100% coverage
11. [ ] Run `npm run typecheck` and `npm run lint`
12. [ ] Create `public/CNAME` with `reachpoint.free.componentdock.com`
13. [ ] Update `package.json` homepage
14. [ ] Run `npm install` at repo root to register workspace
15. [ ] Commit and push
