# NovaSide — Design Notes & Task Outline

Source: ColorLib Sidebar V03 (`colorlib-sidebar-v03`)
Preview: https://preview.colorlib.com/theme/sidebar/colorlib-sidebar-v03/
New name: novaside

## Section order (top to bottom)

1. **Hamburger toggle** — fixed position top-right, three horizontal bars, animates to X
2. **Main content: Post grid** — 2-column responsive grid, each post = thumbnail (80x80) + title + date
3. **Sidebar panel** — fixed right, 380px wide, slides in on toggle
   - Heading: "Share Your Article to the World" (bold, 3rem)
   - Description paragraph (white text)
   - Email signup form: transparent input (white text) + white full-width button

## Fidelity notes

### Sidebar
- Position: fixed right, transform translateX(100%) → translateX(0)
- Background: `#3f2ef8` (indigo-violet), white text
- Transition: 1s cubic-bezier(0.23, 1, 0.32, 1)
- Shadow when open: `10px 0 30px 0 rgba(0,0,0,0.1)`
- Width: 380px

### Hamburger
- Positioned absolutely at left:0, top:0 of sidebar (but outside the panel, translateX(-100%))
- Three bars: height 2px, black (#000), border-radius 2px
- Animation: middle bar fades out, top/bottom rotate 45deg to form X
- z-index: 99

### Post grid
- 2-column layout using flexbox grid
- Each post entry: flex row, thumbnail (80x80, no border-radius) + content (h3 title + meta)
- Post meta: 15px, color #ccc
- Post content h3: 18px
- Container: centered, max-width ~720px (col-md-9 of Bootstrap grid)

### Form elements
- Email input: no border-radius, height 56px, transparent background, white text/border
- Submit button: no border-radius, height 56px, white bg, black text, uppercase, bold, letter-spacing 0.2rem

### Typography
- Font: Roboto (300, 400, 700)
- Body: weight 300, color #212529
- Paragraphs: color #b3b3b3, weight 300
- Links: #007bff, hover #0056b3

### Colors
- Brand/sidebar: #3f2ef8
- Body bg: #fcfcfc
- Text: #212529
- Paragraph: #b3b3b3
- Link: #007bff

## Implementation tasks

1. Create app scaffold (copy simplest existing sidebar template, rename to novaside)
2. Implement Sidebar component with slide-in animation
3. Implement Hamburger toggle with animated X transformation
4. Implement PostGrid component with 2-column responsive layout
5. Implement PostCard component (thumbnail + title + date)
6. Implement SignupForm inside sidebar (email input + button)
7. Add overlay backdrop when sidebar is open
8. Wire up toggle state (sidebar open/close)
9. Add Roboto font via Google Fonts link
10. Set up Tailwind theme tokens (brand color, fonts)
11. Add accessibility (aria-expanded, aria-label, focus-visible)
12. Write tests for all components
13. Add footer with Component Dock link
14. Update CNAME and homepage
15. Run coverage check (100%)
