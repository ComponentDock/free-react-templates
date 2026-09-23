# ArtWave — Implementation Notes

Source: ColorLib Bobsled (https://preview.colorlib.com/theme/bobsled/)
New name: artwave

## Task Outline

1. Scaffold app from simplest existing template (e.g. apps/aurora or similar)
   - Rename package to @free-react-templates/artwave
   - Set up public/CNAME with artwave.free.componentdock.com
   - Set homepage in package.json
2. Set up theme tokens in src/index.css
   - @theme block with brand gradient colors (#3e69fe, #4cd4e3)
   - Poppins font via Google Fonts link in index.html (weights 300, 500, 600)
3. Build components in order:
   a. Navbar — logo + nav links + hamburger toggle (responsive)
   b. Hero — gradient bg, h1 headline, paragraph, CTA button with arrow icon
   c. WorkingProcess — centered title, 4-step horizontal layout with icon boxes + arrows
   d. FeaturedArea — gradient bg, title, 3 cards (image + title + desc + button)
   e. RemarkableWorks — white bg, title, 3 alternating image+text rows
   f. StoryArea — gradient bg, subheading, paragraph, CTA button
   g. Subscription — light bg, title + subtitle left, email input + button right
   h. ContactForm — gradient bg, title, 2-col inputs, textarea, submit button
   i. FooterWidget — 3-col contact info
   j. Footer — logo, copyright, social icons (use lucide-react for social icons)
4. Compose in App.tsx, section by section
5. Write tests for each component (Vitest + Testing Library)
6. Verify 100% coverage, typecheck, lint, build

## Design Notes

### Section Order (faithful to original)
1. Navbar
2. Hero/Banner (gradient)
3. Working Process (white)
4. Featured Area (gradient, dark cards)
5. Remarkable Works (white, alternating rows)
6. Story Area (gradient)
7. Subscription (light #f9f9ff)
8. Contact Form (gradient)
9. Footer Widget (transparent)
10. Footer (transparent)

### Fidelity Notes

- **Hero**: The original has a decorative diagonal `:after` pseudo-element on `.hero-area` (bottom-right, 50% width). Implement with a CSS clip-path or rotated div overlay.
- **Working Process**: Arrow images between steps can be replaced with lucide-react ArrowRight icons or custom SVG arrows. The icon boxes are square with border-radius 8.5px, bg #f9f9ff.
- **Featured Area**: Cards have background-image thumbnails (use picsum.photos). Cards sit on the gradient background — no card bg color, just text + image.
- **Remarkable Works**: Uses Bootstrap grid `no-gutters` for full-bleed images. Implement with Tailwind grid/flex with no gap. Alternating layout: odd rows image-left/text-right, even rows text-left/image-right.
- **Story Area**: Simple text block on gradient bg. The decorative `:after` element creates a subtle diagonal shape.
- **Subscription**: Two-column layout. Left: title + subtitle. Right: email input + button. On mobile, stacks vertically.
- **Contact Form**: Inputs have white placeholder text (on gradient bg). The textarea is full-width. Submit button is right-aligned.
- **Footer Widget**: Three equal columns with address/email/phone info.
- **Footer**: Logo left, copyright center, social icons right. Social icons can use lucide-react equivalents (Facebook, Twitter/X, Dribbble, Behance).
- **Buttons**: All `.primary-btn` instances use border-radius 20px (pill shape), white border, transparent bg with gradient overlay on hover. Use inline-flex with arrow icon.

### Image Placeholders
- Feature thumbnails: `https://picsum.photos/seed/artwave-feat-1/400/300` (3 variants)
- Remarkable works images: `https://picsum.photos/seed/artwave-work-1/700/400` (3 variants)
- Logo: text-based "ArtWave" or simple SVG

### Color Palette Summary
- Primary gradient: #3e69fe → #4cd4e3
- Text dark: #222222
- Text light: #777777
- Light bg: #f9f9ff
- White: #ffffff
