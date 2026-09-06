# Groundwork — Implementation Notes

**Source:** ColorLib Bootstrap Footer 04
**Preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-04/
**Spec:** openspec/specs/template-groundwork/spec.md

## Task Outline

1. Create `apps/groundwork/` workspace (copy simplest existing footer app)
2. Update package.json: name `@free-react-templates/groundwork`, homepage
3. Create `public/CNAME` with `groundwork.free.componentdock.com`
4. Set up `src/index.css` with Tailwind v4 + theme tokens (#000 bg, #777 text, #999 links)
5. Create section components:
   - `src/components/Footer.tsx` — main footer container (black bg, 7rem padding)
   - `src/components/FooterColumns.tsx` — four-column grid layout
   - `src/components/FooterBrand.tsx` — logo + description column
   - `src/components/FooterLinks.tsx` — link list with heading (reusable for Shop/Press/About)
   - `src/components/FooterNav.tsx` — separator + policy links + social icons row
   - `src/components/FooterBottom.tsx` — disclaimer paragraph
6. Compose in `src/App.tsx` (optional content area + Footer)
7. Write Vitest tests for each component
8. Verify 100% coverage with `npm run test:coverage`
9. Run `scripts/verify-app.sh groundwork`
10. Commit and push

## Design Notes

### Structure Order (top to bottom)

1. Optional content area (bg-light, 70vh) — demo placeholder, NOT part of footer
2. Footer (black, 7rem padding)
   - Four columns (brand | Shop | Press | About)
   - Separator line + policy links (left) + social icons (right)
   - Bottom disclaimer paragraph

### Section-by-Section Fidelity Notes

**Footer main container:**
- Background: pure black #000
- Text: muted gray #777
- Padding: 7rem top/bottom, auto left/right (Bootstrap container)

**Brand column (col-md-3):**
- Logo: "Groundwork" link, 26px, bold, white, display block, margin-bottom 30px
- Description: paragraph in #777

**Link columns (3x col-md-2):**
- Heading: h3, 16px, white, bold, margin-bottom 20px
- Links: list-unstyled, each li has margin-bottom 10px
- Link color: #999, hover #fff, no underline, transition .3s ease
- Content (keep same structure, paraphrase copy):
  - Shop: Sell online, Features, Examples, Website editors, Online retail
  - Press: Events, News, Awards, Testimonials, Online retail
  - About: Contact, Services, Team, Career, Contacts

**Separator row:**
- Full-width horizontal line: border-top 1px solid rgba(255,255,255,0.2)
- Left side: inline-block policy links (Privacy Policy, Terms & Conditions, Code of Conduct)
  - White text, padding 10px, first child padding-left 0
- Right side: inline-block social icons (Twitter, Instagram, Facebook, Pinterest)
  - #ccc color, padding 10px, last child padding-right 0
  - Use lucide-react icons (Twitter → X, Instagram, Facebook, Pinterest)
  - Hover: white #fff

**Bottom disclaimer:**
- Small text paragraph in #777
- Placeholder lorem ipsum text

### Key Fidelity Points

- Bootstrap grid layout (col-md-3, col-md-2) → use Tailwind grid/flex
- Four columns in a single row at desktop
- Social icons are NOT circular buttons — plain text-style icons with padding
- Separator is a thin rgba line, not solid white
- No CTA banner (unlike footer-01/footwell)
- No email subscribe form (unlike footer-02/pedestal)
- Footer links to Component Dock in bottom or brand column

### Color Token Map (Tailwind @theme)

```
--color-footer-bg: #000000;
--color-footer-text: #777777;
--color-footer-heading: #ffffff;
--color-footer-link: #999999;
--color-footer-link-hover: #ffffff;
--color-footer-social: #cccccc;
--color-footer-social-hover: #ffffff;
--color-footer-separator: rgba(255, 255, 255, 0.2);
```
