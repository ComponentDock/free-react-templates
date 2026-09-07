# Ledgerly (ColorLib Book Keeping) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-ledgerly`. Recreation name: **Ledgerly** (NEW name —
> the ColorLib source keeps its name "Book Keeping").

## Source mapping

- **ColorLib item:** "Book Keeping" (TEMPLATES.md line 915; section
  "## Business" at line 896).
- **Source URL:** https://colorlib.com/wp/template/book-keeping/
- **Preview URL — UNREACHABLE (404 verified 2026-09-07):**
  `https://preview.colorlib.com/theme/book-keeping/` returns HTTP 404.
  The alternative `https://colorlib.com/etc/bookkeeping/` also returns 404.
  **Fallback: screenshot only** (`bookkeeping-free-template.jpg`, 1200×946 JPEG).
  No live CSS/JS available — tokens derived from pixel analysis of the screenshot.

## Reference research (done — do not redo)

### Screenshot (`bookkeeping-free-template.jpg`, 1200×946 JPEG)

Pixel analysis performed via PIL. Visual design: this is a FULL WEBSITE template
(not a wizard/form). Layout from top to bottom:

1. **Navigation bar** (0-8%): Off-white background (#f9f9f9), logo left, menu links right,
   subtle bottom border
2. **Hero section** (8-70%): Large background image showing a person working at a desk
   (warm skin tones left, blue/dark clothing center-right). Text overlay with headline
   and CTA button (gold accent). The hero takes up ~60% of the viewport.
3. **Content sections** (70-88%): White background with gold/amber accent elements
   (icons or decorative elements visible at ~30% width position). Likely services
   or features cards.
4. **Footer** (88-100%): Light gray background (#f5f5f5 area), footer content.

**Color palette from pixel analysis:**
- Primary gold: `#b8823a` (warm amber/gold) — accent icons, buttons, CTAs
- Navy text: `#30415b` — headings, navigation
- Blue secondary: `#4768b9` — links, secondary accents
- Body gray: `#6B6B6B` — paragraph text (from source CSS `<style>` tag)
- White: `#ffffff` — page background, cards
- Off-white: `#f9f9f9` — navigation background
- Light gray: `#f5f5f5` — footer background

**Fonts from source HTML (Yoast/Sparkling theme):**
- Open Sans (400, 600, 700) — body text, defined in inline CSS
- Roboto Slab (400, 700) — headings, loaded via Cloudflare fonts
- Font size: 14px base, from inline CSS `font-size:14px`

### Design tokens (from screenshot + inline CSS in source page)

| Token | Value | Use |
| --- | --- | --- |
| Page bg | `#ffffff` | Main content background |
| Nav bg | `#f9f9f9` | Top navigation bar |
| Brand primary | `#30415b` | Dark navy — headings, nav text |
| Brand gold | `#b8823a` | Warm gold — accents, icons, CTAs |
| Brand blue | `#4768b9` | Medium blue — links, secondary |
| Body text | `#6B6B6B` | Paragraph text |
| Heading text | `#333333` | Section headings |
| Footer bg | `#f5f5f5` | Footer background |
| Body font | Open Sans 400/600/700 | Google Fonts, 14px base |
| Heading font | Roboto Slab 400/700 | Google Fonts |
| Button bg | `#b8823a` | Primary CTA buttons |
| Button hover | `#a0722e` | Darker gold on hover |
| Border radius | `4px` | Buttons, cards |
| Container max | `1170px` | Content container width |

### Section structure (inferred from screenshot)

1. **Navbar**: Logo + menu links (Home, About, Services, Pages, Blog, Contact)
2. **Hero**: Full-width background image, headline text, CTA button
3. **Services**: 3-column grid with gold icons, headings, descriptions
4. **About/Features**: Alternating icon+text layout
5. **Content/CTA**: Information section with action button
6. **Footer**: Multi-column with contact info, links, Component Dock credit

### Icon mapping (lucide — probe ALL with `typeof` before use)

Since no live preview is available, use generic business/accounting icons:
| Use | lucide icon |
| --- | --- |
| Services icons | `Calculator`, `TrendingUp`, `Shield` |
| Feature icons | `CheckCircle`, `Clock`, `Users` |
| Navigation | `Menu` (mobile hamburger), `X` (close) |
| Footer social | Various social icons |

### Picsum placeholder plan

**Hero image:** Use `https://picsum.photos/seed/ledgerly-hero/1200/600` for the
hero background (business/desk working aesthetic). All other images are icons
(lucide) — no additional placeholders needed.

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/ledgerly` from the simplest existing app
       (`cp -r apps/<simplest> apps/ledgerly`), rename package to
       `@free-react-templates/ledgerly`, add Open Sans 400/600/700
       and Roboto Slab 400/700 Google Fonts `<link>` in index.html,
       set `public/CNAME` = `ledgerly.free.componentdock.com` + `"homepage"`.
       Register the workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Navbar (logo, menu links, mobile hamburger
       toggle), Hero (background image, headline, CTA button), Services
       (3 cards with icons, headings, descriptions), Features (alternating
       layout), About (heading + paragraphs), CTA (heading + button),
       Footer (contact info, links, Component Dock credit), App (landmarks,
       responsive behavior).
3. [ ] Layout shell: white page background, responsive container (max-w
       1170px, mx-auto, px-4), section padding (py-20).
4. [ ] Navbar: off-white bg (#f9f9f9), flex justify-between items-center,
       px-6 py-4, logo left, menu links right (hidden on mobile), hamburger
       icon for mobile (Menu/X toggle). Nav links: Home, About, Services,
       Pages, Blog, Contact.
5. [ ] Hero section: full-width, min-h-[500px], background image
       (picsum seed), flex items-center justify-center, dark overlay
       (bg-black/50), white text centered, headline (Roboto Slab 40px
       bold), subtext (Open Sans 16px), gold CTA button (bg-[#b8823a],
       hover:bg-[#a0722e], rounded, px-8 py-3).
6. [ ] Services section: 3-column grid (gap-8), each card: white bg,
       p-8, rounded, shadow-sm, gold icon (48px, color-[#b8823a]),
       heading (Roboto Slab 18px), description (Open Sans 14px, gray).
       Icons: Calculator, TrendingUp, Shield.
7. [ ] Features section: alternating layout (icon-left/text-right,
       text-left/icon-right), max-w-4xl mx-auto, gap-12, each feature:
       gold icon + heading + description.
8. [ ] About section: white bg, max-w-4xl mx-auto, heading + 2 paragraphs
       of bookkeeping-related content.
9. [ ] CTA section: light gray bg (#f5f5f5), centered heading + gold CTA
       button.
10. [ ] Footer: light gray bg (#f5f5f5), 3-column grid (company info,
       quick links, contact), bottom bar with Component Dock link
       (https://www.componentdock.com/).
11. [ ] Run `npm run verify:app -- ledgerly` (typecheck → lint → vitest
       100% → build) and fix until green.
12. [ ] Open PR `feat/template-ledgerly` → merge immediately
       (`gh pr merge --squash --delete-branch`); PR description must
       include: source URL, preview status (UNREACHABLE, screenshot only),
       token list (gold `#b8823a`, navy `#30415b`, blue `#4768b9`,
       Open Sans + Roboto Slab, 1170px container), and what differs
       (renamed "Ledgerly", picsum hero placeholder, lucide icons,
       Component Dock footer).
13. [ ] Bookkeeping after merge: mark TEMPLATES.md line 915 `[x]` + surge
       URL (`https://ledgerly.free.componentdock.com`), `npm run
       readme:status`, push.
