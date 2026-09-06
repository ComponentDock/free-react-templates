# FooterLume — Implementation Tasks

**Source:** Bootstrap Footer 17 (ColorLib)
**Preview:** https://preview.colorlib.com/theme/bootstrap-footer-17/ (404 — screenshot-based design)
**New name:** footer-lume

## Task Breakdown

### 1. Scaffold
- [ ] Create `apps/footer-lume/` by copying the simplest existing footer app (e.g., footerwell)
- [ ] Rename package to `@free-react-templates/footer-lume`
- [ ] Update `vite.config.ts` to register `injectUiSource()`
- [ ] Update `public/CNAME` to `footer-lume.free.componentdock.com`
- [ ] Update `package.json` homepage to `https://footer-lume.free.componentdock.com`
- [ ] Run `npm install` at repo root to register workspace

### 2. Design Tokens (index.css)
- [ ] Set `--color-primary: #121212` (dark footer background)
- [ ] Set font family to Poppins
- [ ] Define muted text colors: `rgba(255,255,255,0.5)`, `rgba(255,255,255,0.3)`, `rgba(255,255,255,0.7)`

### 3. Components
- [ ] `src/components/ContentArea.tsx` — white background area with centered "Footer #17" heading (demo content)
- [ ] `src/components/FooterNav.tsx` — navigation menu links section (Home, About, Services, Portfolio, Blog, Contact)
- [ ] `src/components/SocialIcons.tsx` — circular social media icons (Facebook, Twitter, Instagram, LinkedIn, YouTube)
- [ ] `src/components/CopyrightBar.tsx` — copyright text with top border separator
- [ ] `src/components/Footer.tsx` — composes FooterNav, SocialIcons, CopyrightBar with dark background
- [ ] `src/App.tsx` — composes ContentArea + Footer

### 4. Styling Notes
- Footer background: #121212 (near-black)
- Text: muted white rgba(255,255,255,0.5) for body, rgba(255,255,255,0.7) for links
- Social icons: 40px circles, transparent background, border on hover → white
- Copyright: small text, rgba(255,255,255,0.3), top border rgba(255,255,255,0.1)
- Headings: uppercase, 14px, letter-spacing 2px, white
- Responsive: stack menu vertically below 768px

### 5. Testing
- [ ] Write tests for each component (100% coverage)
- [ ] Verify responsive behavior in tests
- [ ] Ensure no ColorLib references in any app file

### 6. Verification
- [ ] Run `scripts/verify-app.sh footer-lume`
- [ ] Commit: `docs: prep FooterLume (ColorLib Bootstrap Footer 17) spec + research`

## Design Fidelity Notes

- **Simplest footer in the series:** no newsletter, no product categories, no images
- Pure typography + spacing + social icons
- Minimal dark aesthetic — almost no accent colors
- Based on screenshot analysis (preview was 404)
- The screenshot shows white space above the footer (demo page layout)
- Footer occupies bottom ~40% of viewport in the screenshot
