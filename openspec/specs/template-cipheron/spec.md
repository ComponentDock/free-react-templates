# Template: Cipheron (Light Consulting Company)

## Purpose

Recreation of **ColorLib CellOn** (`https://colorlib.com/wp/template/cellon/`).
Live preview: `https://preview.colorlib.com/theme/cellon/`.

Stack: Vite · React 19 · Tailwind CSS 4 · TypeScript.
Package: `@free-react-templates/cipheron`

## Design tokens (extracted from live preview CSS)

| Token            | Value                                  | Usage                                     |
| ---------------- | -------------------------------------- | ----------------------------------------- |
| brand-green      | `#6cbb23`                              | Primary buttons, accents, links, counters |
| body-text        | `#777`                                 | Paragraphs, secondary text                |
| heading-text     | `#222`                                 | Headings, strong text                     |
| body-bg          | `#f6f6fc`                              | Page background (light grey-purple)       |
| white            | `#fff`                                 | Card backgrounds, banner area, footer     |
| font-family      | `"Poppins", sans-serif`               | All text (Google Fonts, weights 100/300/500) |
| border-radius    | `20px` (circle buttons)               | Primary CTA buttons, contact button       |
| green-overlay    | `rgba(108,187,35,0.85)`              | Video, features, contact section overlays |
| icon-bg          | `#f0f8e9`                              | Feature icon background (light green)     |
| contact-input-border | `#a6d477`                        | Contact form input borders (lighter green)|
| feature-card-bg  | `#fff`                                 | Individual feature cards                  |

## Section structure (order from preview)

1. **Navbar** — Absolute-positioned header, logo left, nav links right, mobile hamburger
2. **Banner/Hero** — Fullscreen split layout: left = hero image, right = headline + subtext + CTA button
3. **Video** — Full-width section with background image + green overlay, centered play button, text right-aligned below
4. **About** — Two-column: left text + CTA, right image (placeholder). White background.
5. **Features** — 7-card grid on green overlay background. Each card: icon box (light green bg) + title + description. Cards white bg.
6. **Stats/FAQ** — Two-column: left stats counters (4 items: projects, new projects, tickets, coffee) + right FAQ accordion (3 questions)
7. **Contact** — Green overlay background, centered heading, form (name, email, textarea, submit button)
8. **Footer** — 4-column: Top Product links, Navigation links, Compare links, Quick About (text + phone + email + social icons). White bg. ComponentDock link replaces Colorlib attribution.

## Gherkin requirements

### Navbar
- Renders logo and navigation links (Home, Generic, Elements)
- On mobile (< 768px): hamburger menu toggles nav visibility
- All links are accessible (`<nav>` landmark)

### Banner/Hero
- Shows a headline with emphasis spans (e.g. "Behind Every Success There is a Cactus")
- Renders CTA button styled as primary circle button
- Hero image on left, text on right on desktop; stacked on mobile

### Video
- Full-width background image area with green semi-transparent overlay
- Play button (visual only, no actual video)
- Text: heading + subtitle below play button

### About
- Two-column layout: text left, image right
- Heading with bold span emphasis
- Paragraph text + CTA button (outlined primary-border style)

### Features
- 7 feature cards in a responsive grid (4 cols desktop, 2 cols tablet, 1 col mobile)
- Each card: icon (lucide-react replacement for Linearicons), uppercase title, paragraph description
- Icon container has light green background, hover turns solid green
- Cards have white background with padding

### Stats/FAQ
- Left column: 4 stat counters with large green number + label
- Right column: 3 FAQ items each with uppercase heading + paragraph
- Stats are purely visual (no animation required)

### Contact
- Green overlay background section
- Centered heading "Send Us Message" with bold span
- Form fields: name input, email input (with pattern validation), textarea
- Submit button styled as primary-btn white-bg (circle, green text)
- Form fields have green-tinted borders on transparent background

### Footer
- 4-column grid on white background
- Columns: Top Product (4 links), Navigation (4 links), Compare (3 links), Quick About (text + contact info + social icons)
- Social icons: Facebook, Twitter, Dribbble, Behance (use lucide-react equivalents)
- Bottom bar with Component Dock attribution (replaces Colorlib link)
- Copyright notice with heart icon

## Verification checklist

- [ ] All sections render in correct order (Navbar → Banner → Video → About → Features → Stats/FAQ → Contact → Footer)
- [ ] Poppins font loaded from Google Fonts
- [ ] Brand green `#6cbb23` used consistently for accents, buttons, links, counters
- [ ] Circle border-radius on CTA buttons (20px)
- [ ] Green semi-transparent overlays on Video, Features, Contact sections
- [ ] Feature icon boxes have `#f0f8e9` bg, hover → `#6cbb23` with white icon
- [ ] Contact form inputs have `#a6d477` borders
- [ ] Responsive: stacked layout on mobile, grid columns collapse
- [ ] Footer links to ComponentDock, no ColorLib references in app code
- [ ] All images use `picsum.photos` placeholders
- [ ] 100% test coverage on new components
- [ ] Typecheck + lint pass
