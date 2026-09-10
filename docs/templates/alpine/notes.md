# Alpine — Design Notes & Implementation Tasks

## Source

- ColorLib template: **Bobsled** (slug: `bobsled`)
- Preview: https://preview.colorlib.com/theme/bobsled/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bobsled-creative-website-template.jpg

## Section Order (top to bottom)

1. Navbar — Logo + 3 nav links + hamburger icon
2. Hero / Banner — Gradient bg, white heading + subtitle + CTA button, hero illustration (right side)
3. Working Process — White bg, 4 numbered steps in a row
4. Exclusive Features — Gradient bg, 3 feature cards (white text)
5. Remarkable Works — White bg, 3 portfolio items alternating image/description layout
6. Story / Quote — Gradient bg, centered quote + CTA
7. Subscription — Light bg (#f9f9ff), email form with CTA
8. Contact Form — Body gradient (teal→blue), white text, form inputs
9. Footer Widget — Transparent (body gradient), 3-column contact info
10. Footer — Logo + copyright + social icons (Facebook, Twitter, Dribbble, Behance)

## Fidelity Notes

### Color Tokens
- Banner/Featured/Story gradient: `#3e69fe` (blue) → `#4cd4e3` (teal), 0deg direction
- Body/contact gradient: `#4cd4e3` (teal) → `#3e69fe` (blue), 0deg direction (reversed)
- Subscription bg: `#f9f9ff`
- White sections: `#ffffff`
- Text dark: `#222222`, body text: `#777777`
- Accent palette: red `#f44a40`, yellow `#f4e700`, blue `#38a4ff`, green `#73fbaf`, purple `#a367e7`, pink `#e66686`, orange `#f09359`

### Typography
- Font: Poppins (Google Fonts), loaded via `<link>`
- Body: 14px, weight 300, line-height 1.5em
- Section headings: h2 with `font-weight: 600`
- Feature/process captions: h4 with `font-weight: 600`

### Buttons
- All CTAs are pill-shaped: `border-radius: 20px`
- Default: transparent bg, 1px border (white or #222), color #222
- Hover: gradient text fill via `background-clip: text`
- Arrow icon on right side of button text

### Layout
- Max-width container with Bootstrap grid (12 cols)
- Featured/Features: 3 equal columns (col-lg-4)
- Remarkable Works: alternating 7/12 + 5/12 layout
- Subscription: 6/12 + 6/12 split
- Contact: centered 10/12 form
- Footer widget: 3 equal columns (col-md-4)

### Section Backgrounds
- Hero/Banner: gradient overlay (blue→teal), hero illustration via CSS ::after pseudo-element
- Working Process: white
- Features: gradient (blue→teal)
- Remarkable: white
- Story: gradient (blue→teal)
- Subscription: #f9f9ff
- Contact: inherits body gradient (teal→blue)
- Footer: inherits body gradient (teal→blue)

## Implementation Tasks

- [ ] Scaffold app: copy simplest existing app, rename to `alpine`
- [ ] Set up Poppins font in index.html
- [ ] Configure Tailwind theme tokens (brand gradient colors)
- [ ] Implement Navbar component (logo + links + mobile hamburger)
- [ ] Implement Hero/Banner component (gradient bg, heading, subtitle, CTA)
- [ ] Implement WorkingProcess component (4 numbered steps)
- [ ] Implement Features component (3 cards on gradient bg)
- [ ] Implement RemarkableWorks component (alternating portfolio layout)
- [ ] Implement StoryQuote component (centered quote + CTA)
- [ ] Implement Subscription component (email form)
- [ ] Implement ContactForm component (name, email, message, submit)
- [ ] Implement FooterWidget component (3-column contact info)
- [ ] Implement Footer component (logo + copyright + social icons + ComponentDock link)
- [ ] Compose all sections in App.tsx
- [ ] Write tests (100% coverage)
- [ ] Verify with `scripts/verify-app.sh alpine`
