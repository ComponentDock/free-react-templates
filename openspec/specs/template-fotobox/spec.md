# Template: Fotobox (Photography Portfolio)

## Purpose

Recreation of ColorLib "Photography 2" template as a React 19 + Vite + Tailwind 4 + TypeScript app. Ultra-minimalist photography portfolio with fullscreen hero slider, thumbnail gallery view, and blog.

- **Source:** [ColorLib Photography 2](https://colorlib.com/wp/template/photography-2/)
- **Preview URL:** https://preview.colorlib.com/theme/photography-2/ (UNREACHABLE — 404; analysis based on screenshot + template page description)
- **Stack:** React 19, Vite, Tailwind CSS 4, TypeScript (strict)
- **Screenshots:** `https://colorlib.com/wp/wp-content/uploads/sites/2/photography-2-free-template-1.jpg`

## Reference analysis note

The live preview at `preview.colorlib.com/theme/photography-2/` returned 404. All design tokens and structure are extracted from:
1. The template screenshot (AVIF → converted to PNG for analysis)
2. The ColorLib template description page content
3. The ColorLib preview wrapper page which references `#photography-2`

The screenshot shows a complete view of the template's front page.

## Design tokens

Extracted from screenshot visual analysis:

### Colors

| Token | Value | Usage |
|-------|-------|-------|
| `brand` | `#4ecdc4` | Logo dot accent, active nav link, contact email color (teal/green) |
| `white` | `#ffffff` | Page background, hero text |
| `text-dark` | `#333333` | Logo text, nav links, body text |
| `text-light` | `#777777` | Secondary text |
| `slider-overlay` | `rgba(0,0,0,0.3)` | Semi-transparent dark overlay on slider nav arrows |
| `nav-arrow-bg` | `rgba(0,0,0,0.5)` | Dark semi-transparent circular nav arrows |

### Typography

- **Font family:** Clean sans-serif (likely Montserrat or similar — matches the geometric, modern style)
- **Logo:** "Foto." in bold black with a teal/green period
- **Hero heading:** Extra-large bold white text, centered on slider image
- **Nav links:** Regular weight, dark text, uppercase or normal case
- **CTA text:** Underlined uppercase text ("VIEW PROJECTS", "SHOW THUMBNAILS")

### Buttons / CTAs

- **"VIEW PROJECTS":** White text, underlined, uppercase, no background — text-only CTA on the hero slider
- **"SHOW THUMBNAILS":** Dark text, underlined, uppercase, centered in footer area — toggles gallery thumbnail view
- **Nav arrows:** Semi-transparent dark circles with white chevron icons (< >), positioned on left/right of slider

### Layout

- Full-width, single-page layout
- Hero slider takes up most of the viewport (near full-height)
- Minimal footer with copyright + social icons
- The "SHOW THUMBNAILS" feature likely expands a grid of project thumbnails below the slider

## Gherkin requirements

### Navbar

Scenario: Clean white navbar with logo and nav links
  - The navbar is positioned at the top with a white background
  - Logo "Foto." on the left — bold dark text with a teal/green dot accent
  - Navigation links: Home (active, highlighted in teal/green), Portfolio, Blog, About, Contact
  - Contact email address on the far right in teal/green text (e.g. "CONTACT@COLORLIB.COM")
  - Links are horizontally aligned, evenly spaced
  - The navbar is clean and minimal — no hamburger menu on desktop

### Hero Slider

Scenario: Fullscreen image slider with overlay text
  - The hero section is a large image slider (near full viewport height)
  - Each slide has a full-bleed background image (landscape photography)
  - Each slide has a centered large white heading (e.g. "Red kayaks")
  - Each slide has a white underlined "VIEW PROJECTS" CTA link below the heading
  - Left/right navigation arrows (semi-transparent dark circles with white chevrons)
  - Slide counter at the bottom center (e.g. "1 / 2")
  - Slider auto-plays or supports manual navigation
  - Images are high-quality photography with dramatic landscapes

### Thumbnail Gallery View

Scenario: Toggle thumbnail grid below slider
  - "SHOW THUMBNAILS" text link in the footer area, underlined, uppercase
  - Clicking it reveals/toggles a grid of project thumbnails
  - Thumbnails are arranged in a responsive grid layout
  - Each thumbnail is a clickable image linking to a project detail view

### Footer

Scenario: Minimal footer with copyright and social links
  - Copyright text on the left: "Copyright ©[year] All rights reserved | This template is made with ♥ by [attribution]"
  - "SHOW THUMBNAILS" toggle link in the center
  - Social media icons on the right: Facebook, Twitter, Instagram, Behance, Pinterest
  - Clean, minimal layout with adequate spacing
  - Footer replaces ColorLib attribution with Component Dock link

## Verification checklist

- [ ] App folder: `apps/fotobox`
- [ ] Package: `@free-react-templates/fotobox`
- [ ] No ColorLib references in app code (only in spec + TEMPLATES.md)
- [ ] Footer links to `https://www.componentdock.com/` ("Component Dock")
- [ ] `public/CNAME` contains `fotobox.free.componentdock.com`
- [ ] `homepage` in package.json: `https://fotobox.free.componentdock.com`
- [ ] `npm install` run at root to register workspace in package-lock.json
- [ ] `vite.config.ts` registers `injectUiSource()` for Tailwind v4.3
- [ ] Design tokens applied via `@theme` in `index.css`
- [ ] All sections match original structure and order 1:1
- [ ] 100% test coverage (Vitest + Testing Library)
- [ ] Conventional commit: `feat: add Fotobox template (ColorLib Photography 2)`
