# Basalt — Implementation Todo

Source: ColorLib "Bootstrap Footer 10"
Preview: https://preview.colorlib.com/theme/bft/bootstrap-footer-10/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/bootstrap-footer-10.jpg

## Tasks

- [ ] Create `apps/basalt/` from simplest existing footer-only app
- [ ] Rename package to `@free-react-templates/basalt`
- [ ] Create `public/CNAME` with `basalt.free.componentdock.com`
- [ ] Set `homepage` in package.json to `https://basalt.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace in lockfile
- [ ] Write `src/components/ContentHeader.tsx` — centered "Footer #10" on bg-light
- [ ] Write `src/components/Footer.tsx` — 4-column footer with Store, About, Legal, Subscribe
- [ ] Write `src/components/SubscribeForm.tsx` — pill input + embedded Send button
- [ ] Write `src/components/CopyrightBar.tsx` — copyright + social icons
- [ ] Write `src/components/SocialIcons.tsx` — lucide-react icon set (Facebook, Twitter, Pinterest, Instagram, Behance)
- [ ] Compose in `src/App.tsx`
- [ ] Add theme tokens in `src/index.css`: brand purple #614ad3, footer text #9d9d9d, input bg #e6e6e6
- [ ] Set up `vite.config.ts` with `injectUiSource()`
- [ ] Write tests for each component (100% coverage)
- [ ] Add Component Dock footer attribution link
- [ ] Verify: typecheck + lint + test:coverage + build

## Section-by-section fidelity notes

### Content Header
- Full viewport height section (70vh)
- Background: light gray (Tailwind: `bg-gray-100`)
- Centered "Footer #10" heading — large, centered both horizontally and vertically
- Simple flex centering

### Footer (4-column grid)
- 7rem vertical padding
- 4 columns on desktop (col-md + col-md-4 for Subscribe)
- Each column has a bold black heading (font-weight 900, 16px, color #000)
- Link lists: unstyled, block display, 10px vertical spacing
- Link color: #9d9d9d, hover: #614ad3, transition 0.3s
- Subscribe column: description paragraph + form
  - Input: bg #e6e6e6, border-radius 30px, height 50px, no border
  - Send button: absolute-positioned inside input (top 5px, right 5px)
  - Button: bg #614ad3, white text, border-radius 30px, font-weight bold
  - Button shadow: 0 2px 2px 0 rgba(0,0,0,0.2)

### Copyright Bar
- Horizontal border-top separator (margin 2rem 0)
- Left: "© All Rights Reserved" small text
- Right: Social icons — inline-block, 10px padding each
- Icons: Facebook, Twitter, Pinterest, Instagram, Behance
- Icon color: #9d9d9d, hover: #614ad3
- Use lucide-react equivalents (Facebook, Twitter, Instagram, etc.)

### Component Dock Attribution
- Footer bottom: "Made with Component Dock" link
- Links to https://www.componentdock.com/
- Replaces any external ColorLib attribution

## Design tokens for Tailwind @theme

```
--color-brand: #614ad3;
--color-footer-text: #9d9d9d;
--color-footer-heading: #000000;
--color-input-bg: #e6e6e6;
--color-input-placeholder: #b3b3b3;
--font-family-body: 'Roboto', sans-serif;
--border-radius-pill: 9999px;
```
