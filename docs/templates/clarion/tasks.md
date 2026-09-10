# Clarion — Prep Notes & Task Outline

Source: ColorLib CellOn (https://colorlib.com/wp/template/cellon/)
Preview: https://preview.colorlib.com/theme/cellon/
Category: Consulting / Coaching landing page

## Task outline

1. Scaffold app: copy simplest existing app, rename to `clarion`, set package name `@free-react-templates/clarion`
2. Register workspace: `npm install` at root, verify lockfile
3. Add Poppins font link in `index.html`
4. Build `src/index.css` with `@theme` tokens (brand #6cbb23, text #777, headings #222, overlay rgba(108,187,35,0.85))
5. Implement Navbar component: logo + 3 nav links + hamburger toggle (useState)
6. Implement Hero component: two-column split, heading with green accent span, CTA button
7. Implement VideoPromo component: dark overlay, play button, heading, subtext
8. Implement About component: two-column, heading with span accent, paragraph, outlined CTA
9. Implement Features component: 7 cards in grid, icon bg #f0f8e9, heading, description
10. Implement Stats component: 4 counters with animated numbers, green text
11. Implement FAQ component: 3 items with toggle expand/collapse (useState)
12. Implement Contact component: form with name/email/message, validation, submit handler
13. Implement Footer component: 4-column layout, social icons, copyright with Component Dock link
14. Compose all in App.tsx
15. Write tests for each component (100% coverage)
16. Run verify-app.sh, fix any issues

## Design notes

### Section order (from preview DOM)

1. Navbar (header.default-header) — absolute positioned over hero
2. Hero (section.banner-area) — fullscreen row, image left, text right
3. Video (section.video-area) — bg image + green overlay, play button
4. About (section.about-area) — white bg, text left, image right
5. Features (section.feature-area) — bg image + green overlay, 7 white cards
6. Stats + FAQ (section.faq-area) — white bg, left stats column, right FAQ column
7. Contact (section.contact-area) — bg image + green overlay, form
8. Footer (footer.section-gap) — white bg, 4 cols, copyright bar

### Key styling details

- `.oz-body-wrap` gives the page a box-shadow frame effect (margin: 50px desktop)
- Buttons: `.genric-btn.circle` = border-radius 20px, `.primary` = bg #6cbb23
- Feature icons: 100px font-size, inside `.icon` container with #f0f8e9 bg
- Feature cards: white bg, 30px padding, 30px bottom margin
- Counter numbers: 48px font, weight 100, color #6cbb23
- FAQ headings: 18px, weight 600, letter-spacing 3px
- Contact form: transparent bg, white text, green borders (#a6d477)
- Footer social icons: 30px square, #f9f9ff bg, hover = #6cbb23 bg + white icon
- Dark sections use background image + rgba(108,187,35,0.85) overlay

### Fidelity notes

- The original uses Bootstrap grid (col-lg-4, col-lg-6, etc.) → recreate with Tailwind grid/flex
- Overlay pattern: position relative parent + absolute overlay div with semi-transparent green bg
- Feature cards have hover effect on icon (green bg + white icon)
- FAQ items toggle visibility (accordion pattern, no external lib needed)
- Contact form validation: HTML5 required + pattern attributes → use zod + react-hook-form
- Hamburger menu toggles nav visibility (CSS scale transform in original)
