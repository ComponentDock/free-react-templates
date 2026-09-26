# Likeness — Design Notes

## Source

- ColorLib: Personify (https://colorlib.com/wp/template/personify/)
- Preview: https://preview.colorlib.com/theme/personify/
- Type: Personal/VCard Website Template (multi-page, consolidated to SPA)

## Structure order

The React app consolidates 4 original pages into tab-activated sections within a single layout:

1. **Layout wrapper** — Split layout (content left, profile photo right)
2. **Navbar / Off-Canvas Menu** — "Menu" toggle + slide-in panel
3. **Bio section** (default) — Name, title, bio text, social links
4. **Portfolio section** — Project list with hover overlays
5. **Resume section** — Experience and education timeline
6. **Contact section** — Contact form
7. **Footer** — Component Dock attribution

## Section-by-section fidelity notes

### Layout wrapper
- Split 50/50 layout on desktop (min-width 576px)
- Profile photo on right side, fixed/sticky position
- On mobile: profile photo becomes a 400px banner above content
- Main content has 7% padding all around
- Use Tailwind grid or flexbox for the split

### Navbar / Off-Canvas Menu
- "Menu" button fixed top-right, uppercase, letter-spacing 0.1em, font-size 13px
- Slide-in menu from right: 240px width, background #283149
- Menu links: Bio, Portfolio, Resume, Contact (uppercase, letter-spacing 0.2em, font-size 12px)
- Active link color: #F73859
- Social icons below nav links (Twitter, Facebook, Instagram)
- On mobile (<768px): navbar gets black background
- Overlay behind menu when open

### Bio section (default)
- h1: person's name (Playfair Display, black)
- Subtitle: job title ("Web Designer & Developer")
- Two paragraphs of bio text (Open Sans, #b3b3b3)
- Social link buttons: Twitter, Facebook, Instagram (text links with margin)

### Portfolio section
- h1: "Portfolio" (Playfair Display)
- List of project items, each in a bordered container (1px solid #e6e6e6)
- Each item: image + overlay with project name and "Visit Website"
- Hover: pink overlay (#F73859), white text, subtle shadow
- Use picsum.photos for placeholder images

### Resume section
- h1: "Experience" followed by experience list
- h1: "Education" followed by education list
- Each item: job title/institution (h3, Playfair Display), date range (gray, opacity 0.6), description paragraph
- Simple vertical list, no timeline graphics

### Contact section
- h1: "Contact Me" (Playfair Display)
- Form fields: Full Name, Email Address, Phone, Message (textarea)
- Submit button: "Send Message", btn-primary style
- Button: square corners, uppercase, letter-spacing 0.2em, 2px border, background #F73859 on hover
- Form inputs: 50px height, 2px border, no shadow

### Footer
- Component Dock link (mandatory per conventions)
- Copyright text

## Design tokens to set in @theme

```
--color-brand: #F73859;
--color-brand-hover: #f96982;
--color-navy: #283149;
--color-body-text: #b3b3b3;
--color-heading: #000000;
--font-heading: "Playfair Display", serif;
--font-body: "Open Sans", sans-serif;
```

## Implementation tasks

1. Create app scaffold: `apps/likeness/` from template, rename package
2. Set up theme tokens in `src/index.css` (@theme block)
3. Build `Layout.tsx` — split layout wrapper (content + profile photo)
4. Build `Navbar.tsx` — off-canvas toggle + slide-in menu
5. Build `BioSection.tsx` — name, title, bio text, social links
6. Build `PortfolioSection.tsx` — project list with hover overlays
7. Build `ResumeSection.tsx` — experience and education lists
8. Build `ContactSection.tsx` — contact form
9. Build `App.tsx` — section routing/visibility state
10. Write tests for each component (Vitest + RTL)
11. Verify 100% coverage
12. Add public/CNAME, update package.json homepage
13. Run spec:validate, verify-app.sh
