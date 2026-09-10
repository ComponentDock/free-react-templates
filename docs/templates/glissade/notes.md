# Glissade — Prep Notes

Source: ColorLib Bobsled (https://preview.colorlib.com/theme/bobsled/)
Preview analyzed: 2026-09-10

## Implementation TODO

### Phase 1: Scaffold

- [ ] Copy simplest existing app as base (e.g. apps/bold or similar small app)
- [ ] Rename package to @free-react-templates/glissade
- [ ] Set CNAME to glissade.free.componentdock.com
- [ ] Set homepage in package.json
- [ ] Update vite.config.ts with injectUiSource()
- [ ] Run npm install at repo root to register workspace

### Phase 2: Components (section order)

- [ ] Navbar.tsx — logo + nav links (Home, Generic, Elements) + hamburger mobile
- [ ] Hero.tsx — gradient bg (#3e69fe→#4cd4e3), headline, subtext, "Get Started" button
- [ ] WorkingProcess.tsx — 4 steps with icons + arrow connectors
- [ ] Features.tsx — gradient bg, 3 feature cards (Creative Design, Appropriate UX, Super Clean Code)
- [ ] RemarkableWorks.tsx — white bg, 3 project cards with box-shadow
- [ ] Story.tsx — background image overlay, heading, text, "Read More" button
- [ ] Newsletter.tsx — light gray (#f9f9ff) bg, email form
- [ ] Contact.tsx — gradient bg, "Keep in Touch", form fields
- [ ] Footer.tsx — 3 widget columns + copyright + social icons + Component Dock link

### Phase 3: Styling

- [ ] Set up @theme tokens in index.css: brand gradient colors, Poppins font
- [ ] Tailwind gradient utilities for hero/features/contact/Story sections
- [ ] Button component: rounded 20px, transparent bg, white border, gradient hover
- [ ] Card shadow: 0px 15px 50px rgba(0,0,0,0.1)
- [ ] Section padding: 100px vertical

### Phase 4: Tests

- [ ] App.test.tsx — renders all sections
- [ ] Navbar.test.tsx — links render, mobile toggle
- [ ] Hero.test.tsx — heading, subtext, button render
- [ ] WorkingProcess.test.tsx — 4 steps render
- [ ] Features.test.tsx — 3 cards render
- [ ] RemarkableWorks.test.tsx — 3 cards render
- [ ] Story.test.tsx — heading, text, button
- [ ] Newsletter.test.tsx — form renders
- [ ] Contact.test.tsx — form fields render
- [ ] Footer.test.tsx — widgets, social links, Component Dock link

## Fidelity notes

- **Color palette:** Blue-to-cyan linear gradient (#3e69fe→#4cd43) is the dominant visual element — used on hero, features, story, and contact sections. The gradient is 0deg (bottom to top).
- **Typography:** Poppins with weights 300 (body), 500 (nav/buttons), 600 (headings). Hero heading is uppercase.
- **Buttons:** Pill-shaped (border-radius: 20px), transparent with white border, gradient fill on hover. The gradient text effect on button labels uses background-clip: text.
- **Cards:** Remarkable works cards have significant shadow (0px 15px 50px rgba(0,0,0,0.1)) on white background.
- **Working process:** Linearicons font icons (lnr-funnel, lnr-layers, lnr-settings, lnr-bulb) for the 4 steps. Arrow images connect steps horizontally.
- **Contact form:** Dark gradient background with white text for inputs (placeholder white text), border: none on inputs.
- **Newsletter:** Light gray (#f9f9ff) background, minimal design.
- **Footer:** Simple 3-column layout with Address/Email/Phone widgets, copyright bar, social icons.
- **Overall aesthetic:** Modern creative agency, clean with bold gradients, lots of whitespace, rounded elements.
