# CVStack — Implementation Tasks & Design Notes

## Source
- ColorLib: Vcard2 (https://colorlib.com/wp/template/vcard2/)
- Preview: https://preview.colorlib.com/theme/vcard2/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/vcard2-free-template.jpg

## Design Notes

### Overall Layout
- Full viewport (100vw × 100vh), overflow hidden, padded frame (40px L/R, 97px top, 45px bottom)
- Two-column flex layout: fixed sidebar (473px) + flex-grow main content
- On mobile: single column, sidebar stacks above content

### Color Palette (from CSS analysis)
- Brand accent: #8583e1 (periwinkle/indigo) — active nav, buttons, scrollbar, logo dot
- Dark base: #100f3a — sidebar bg, headings, nav inactive, logo text
- Content bg: #f5f0f0 — warm light gray
- Body text: #a5a5a5, paragraphs: #838293, muted: #7a798c
- Link hover: #ffa07f (salmon), active: #FF6347 (tomato)
- Nav bar bg: #9f9fb0
- Social icons: #8d8b9b

### Typography
- Font: Montserrat (Google Fonts, weights 300-900)
- Logo: 36px weight 800, dark navy, colored dot
- Name heading: 92px weight 800
- Subtitle: 30px weight 500
- Nav tabs: 16px weight 400, uppercase active
- Body: 14px weight 400

### Section-by-Section Notes

1. **Header**: Fixed position. Logo left, nav tabs center, CTA button right. Tabs are individual square cells in a row, each with dark bg, brand bg on active/hover. Header collapses on scroll (smooth transition). Hamburger menu for mobile.

2. **Sidebar**: Fixed 473px width, dark navy bg. Profile photo top (square, full width of sidebar). General info list below with icon + label + value. Social links row at bottom. Content scrolls within sidebar (custom scrollbar).

3. **Main Content**: Flex-grow area. Title container at top (subtitle + name), then scrollable content. About section has description + 4 circular skill loaders in a row. Other sections are tab-switched (not scrolled).

4. **Skills**: 4 circular progress indicators (195px diameter). Use SVG circle with stroke-dasharray animation. Skills: intuition 75%, creativity 85%, pure luck 25%, awesomeness 95%.

5. **Services**: List of service offerings with icons and descriptions.

6. **Experience**: Timeline-style list of work positions.

7. **Education**: Timeline-style list of education entries.

8. **Portfolio**: Image grid (2-3 columns) with hover overlay effect.

9. **Testimonials**: Quote cards with author name and role.

10. **Contact**: Form with name, email, subject, message textarea, submit button. Form validation via react-hook-form + zod.

11. **Footer**: Simple centered copyright with Component Dock link.

## Implementation Tasks

- [ ] Scaffold app from existing template (copy simplest app, rename package)
- [ ] Set up index.css with Montserrat font import and @theme tokens
- [ ] Create App.tsx with two-column layout (sidebar + main)
- [ ] Build Header component (logo, nav tabs, CTA, scroll behavior)
- [ ] Build Sidebar component (profile image, info list, social links)
- [ ] Build About section (description text, 4 skill loaders)
- [ ] Build Skills section (SVG circular progress indicators)
- [ ] Build Services section (service cards)
- [ ] Build Experience section (timeline entries)
- [ ] Build Education section (timeline entries)
- [ ] Build Portfolio section (image grid with hover)
- [ ] Build Testimonials section (quote cards)
- [ ] Build Contact section (validated form)
- [ ] Build Footer component (Component Dock link)
- [ ] Add responsive behavior (sidebar stack, hamburger menu)
- [ ] Add dark mode toggle
- [ ] Write tests for all components (100% coverage)
- [ ] Set up CNAME and homepage
- [ ] Run verify-app.sh gate
