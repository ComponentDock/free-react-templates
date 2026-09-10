# ExecSuite (ColorLib Corporate) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-execsuite`. Recreation name: **ExecSuite** (NEW name —
> the ColorLib source keeps its name "Corporate").

## Source mapping

- **ColorLib item:** "Corporate" (TEMPLATES.md line 957; section starting
  around line 956).
- **Source URL:** https://colorlib.com/wp/template/corporate/
- **Preview URL:** https://preview.colorlib.com/theme/corporate/
- **Preview CSS:** `css/main.css` (37,211 bytes) + `css/bootstrap.css`,
  `css/font-awesome.min.css`, `css/linearicons.css` (linearicons icon font
  — REPLACE with lucide-react, do not ship). Also `css/owl.carousel.css`,
  `css/magnific-popup.css`, `css/nice-select.css`, `css/animate.min.css`.
- **Fonts:** Google Fonts Poppins (weights 100-700 via `@font-face` in inline
  `<style>` block); icon fonts are linearicons + Font Awesome (replace with
  lucide-react).

## Reference research (done — do not redo)

### Screenshot (`corporate-free-corporate-website-template.jpg`)

Full corporate/business landing page with:
- Transparent navbar overlaying hero with white text
- Full-screen hero: modern office photo, dark overlay, "Build Your Dream"
  heading, "Discover the Colorful World" subtitle, purple pill CTA button
- About section: split layout, cactus/plant image left, heading with purple
  accent "Interior" text, two feature icons (diamond + phone)
- 4-column services grid with icons and border buttons
- Dark feature section with alternating image/text columns
- Portfolio masonry grid with 6 images
- Gradient statistics counter strip (5 numbers)
- 3 recent work cards with background images
- Brand logos row
- Contact section: map left, form right
- Dark footer: 3 columns + newsletter + social icons

### Design tokens (live stylesheet `css/main.css`, verified)

| Token | Value | Use |
|---|---|---|
| Brand gradient | `#5f36ff` → `#b719f6` | Primary buttons, accent text (via `-webkit-background-clip: text`), facts-area bg |
| Brand solid | `#6434fe` | Footer primary buttons, footer links, social hover |
| Overlay | `rgba(0,0,0,0.5)` (`.overlay-bg`) | Hero banner, feature area |
| Text heading | `#222` | Main headings, footer body, service button text |
| Text body | `#777` | Paragraphs, service icons default state |
| Text white | `#fff` | Hero text, button text, feature text, footer headings |
| About bg | `#f9f9ff` | About section background |
| Feature bg | `#222` | Feature area background |
| Footer bg | `#222` | Footer area background |
| Social bg | `#111` | Social icon button backgrounds |
| Border light | `#eee` | Service "View Details" button border |
| Font | Poppins 100-700 (Google Fonts) | All text |
| Button radius | 25px (pill) | `.primary-btn` |
| Footer button radius | 57px | `.genric-btn`, newsletter submit |
| Button line-height | 42px | `.primary-btn` |
| Button padding | 30px left, 60px right | `.primary-btn` |
| Section spacing | `.section-gap` class | Consistent vertical spacing between sections |

## Implementation order (TDD, section-by-section)

1. [ ] Scaffold `apps/execsuite` from the simplest existing app
       (`cp -r apps/<simplest> apps/execsuite`), rename package to
       `@free-react-templates/execsuite`, add Poppins 400/500/600/700
       Google Fonts `<link>` in index.html, set `public/CNAME` =
       `execsuite.free.componentdock.com` + `"homepage"`. Register the
       workspace in package-lock.json.
2. [ ] Write the spec-traceable test suite FIRST (Vitest + Testing
       Library, 100% coverage): Navbar (links, sticky behavior), Hero
       (heading, subtitle, CTA button click scrolls), About (split
       layout, heading gradient text, two feature items), Services (4
       cards, icons, hover state), Features (4-column alternating
       layout, dark bg), Portfolio (6 images, hover overlay), Stats (5
       counters, animate-on-scroll), Recent Work (3 cards, author
       info), Brand Logos (5 logos, hover color transition), Contact
       (form fields, submit handling), Footer (3 columns, newsletter,
       social icons, Component Dock link), App (landmarks, title).
3. [ ] Define Tailwind `@theme` tokens: brand gradient as CSS custom
       properties (`--color-brand-start: #5f36ff; --color-brand-end:
       #b719f6;`), dark bg (`--color-dark: #222`), about bg
       (`--color-about: #f9f9ff`), font-family Poppins.
4. [ ] Navbar component: transparent overlay, logo (text + icon), nav
       links, sticky on scroll via IntersectionObserver or
       `position: sticky`.
5. [ ] Hero section: full-screen bg image (picsum), dark overlay
       (`bg-black/50`), subtitle, heading, "Discover Now" pill button
       with gradient (`bg-gradient-to-r from-[#5f36ff] to-[#b719f6]`,
       `rounded-full`).
6. [ ] About section: two-column grid, left = image, right = heading
       with gradient text (`bg-gradient-to-r ... bg-clip-text
       text-transparent`), paragraph, 2 feature boxes with lucide icons.
7. [ ] Services section: 4-column grid, each card = lucide icon + h4 +
       p + "View Details" border button (`border border-gray-200
       rounded-full`).
8. [ ] Feature images: dark `bg-[#222]` section, 4-column alternating
       image/text layout.
9. [ ] Portfolio: masonry-style grid (8/4, 4/4, 8/4), images with
       hover overlay (`bg-black/50` + lucide `Maximize2` icon).
10. [ ] Statistics: gradient bg, 5-column grid of counter numbers +
        labels, animate on scroll with `useInView` or IntersectionObserver.
11. [ ] Recent Work: 3-column grid, each card = bg image (picsum) +
        overlay content (h4, p, author row with avatar + name + date).
12. [ ] Brand Logos: horizontal row of 5 grayscale logos, hover to
        color (`filter: grayscale(100%)` → `grayscale(0%)` on hover).
13. [ ] Contact: split layout (map placeholder left, form right),
        4 fields + submit button.
14. [ ] Footer: dark `bg-[#222]`, 3-column grid (About Us, Contact Us
        with phone numbers, Newsletter with email input), bottom bar
        with copyright + Component Dock link + social icons (lucide).
15. [ ] Run `npm run verify:app -- execsuite` (typecheck → lint → vitest
        100% → build) and fix until green.
16. [ ] Open PR `feat/template-execsuite` → merge immediately
        (`gh pr merge --squash --delete-branch`); PR description must
        include: source URL, preview URL, token list (Poppins,
        `#5f36ff`→`#b719f6` gradient, `#222` dark sections, 25px pill
        buttons), and what differs (renamed "ExecSuite", Poppins via
        Google Fonts, lucide icons replacing linearicons + Font Awesome,
        Component Dock footer).
17. [ ] Bookkeeping after merge: mark TEMPLATES.md line 957 `[x]` +
        surge URL (`https://execsuite.free.componentdock.com`),
        `npm run readme:status`, push.

## Design notes

### Icon mapping (lucide-react)
| Source icon (linearicons/FA) | Recreation |
|---|---|
| `lnr-diamond` (Expert Services) | lucide `Gem` |
| `lnr-phone` (Great Support) | lucide `Headphones` |
| `lnr-rocket` (User friendly Admin) | lucide `Rocket` |
| `lnr-magic-wand` (Full Responsive) | lucide `Wand2` |
| `lnr-gift` (Full Documentation) | lucide `Gift` |
| `lnr-phone` (Reasonable Pricing) | lucide `Phone` |
| `lnr-frame-expand` (portfolio hover) | lucide `Maximize2` |
| `lnr-arrow-right` (button arrow) | lucide `ArrowRight` |
| `fa-facebook` / `fa-twitter` / `fa-dribbble` / `fa-behance` | lucide `Facebook` / `Twitter` / `Dribbble` / `Figma` |

### Picsum placeholder plan
- Hero background: `https://picsum.photos/seed/execsuite-hero/1920/1080`
- About image: `https://picsum.photos/seed/execsuite-about/800/600`
- Feature images (2): `https://picsum.photos/seed/execsuite-feat-1/600/400`, `...feat-2...`
- Portfolio images (6): `https://picsum.photos/seed/execsuite-portfolio-1/800/600` through `...-6...`
- Recent work backgrounds (3): `https://picsum.photos/seed/execsuite-work-1/400/500` through `...-3...`
- Brand logos: Use text-based SVG placeholders or simple colored rectangles
- Author avatars: `https://picsum.photos/seed/execsuite-author-1/50/50` through `...-3...`

### Contact map
Replace the Google Maps embed with a simple placeholder (colored div with
a map icon) — no API key needed. Document the placeholder in the spec.
