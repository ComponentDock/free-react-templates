# Threadline — Implementation Tasks & Design Notes

<!-- brief-file-consensus: superseded design -->
> **SUPERSEDED DESIGN** — this file was written for ColorLib `fashion-2` in an
> earlier prep of `threadline`. The spec, the TEMPLATES.md row and the app are
> ColorLib `malefashion`: treat the section list below as history where the two
> disagree (`openspec/specs/template-threadline/spec.md` is authoritative).
> **Source slug:** `malefashion`


<!-- doc-token-reverify:2026-10-22 -->

> **Tokens re-verified against the live sheet (2026-10-22).** The rows below are the values the reference's own stylesheet paints, quoted with the rule that paints them; the sentence further down that carries the older value is a **screenshot approximation and is superseded** where the two differ.  CSS values are canonical over screenshots (`docs/replication.md`), so build the sheet's value.
>
> Live reference: <https://preview.colorlib.com/theme/malefashion/>
>
> | brief says | live sheet paints | evidence |
> | --- | --- | --- |
> | `#ff6363` | `#ff6b6b` | `.footer__copyright__text p a{color: #ff6b6b}` |
>
> If the quoted rule belongs to a different ROLE than the line you are building (a footer link's red is not a CTA's fill), read the sheet's own rule for your role instead of substituting across roles.

<!-- /doc-token-reverify -->

<!-- ref-reverify:2026-10-22 -->

> **Reference re-verified live 2026-10-22** —
> `https://preview.colorlib.com/theme/malefashion/` answers HTTP 200 (56,662
> B; `bootstrap.min.css` 120,349 B, sha256 `2f6a7a13620d`). Any "preview 404
> / design from screenshot" note further down is **superseded**: take CSS
> values from the live sheet (`docs/replication.md`); the screenshot stays
> the layout target. The cited `…/fashion-2/` is a neighbouring slug; this
> prep's own preview is `https://preview.colorlib.com/theme/malefashion/`.

## Source mapping

- **ColorLib slug:** `fashion-2`
- **ColorLib page:** https://colorlib.com/wp/template/fashion-2/
- **Preview (404):** https://preview.colorlib.com/theme/fashion-2/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/fashion-free-template.jpg
- **Research fallback:** Fashion v1 preview CSS tokens used (same design family)

## Structure order (top to bottom)

1. **Navbar** — Sticky top nav with brand name "Threadline", dropdown menus, mobile hamburger
2. **Hero Carousel** — Full-width slider with headline + subtext + CTA per slide, prev/next arrows, auto-advance
3. **Collections Grid** — "Collections" heading, 4+ product category cards in responsive grid
4. **About / Boutique** — "A Fashion Boutique" heading, descriptive text, brand images
5. **Testimonials** — "Testimonials" heading, carousel of customer quotes (3+)
6. **Blog Posts** — "Blog Posts" heading, 3+ post cards (thumbnail, title, date, excerpt)
7. **Newsletter / Connect** — "Connect with us" section, email input + subscribe button, rounded/colored background
8. **Footer** — Brand name, nav columns, Component Dock link, copyright

## Section-by-section fidelity notes

### Navbar
- Sticky/fixed position on scroll
- Brand name on left, nav links on right
- Dropdown menus on hover (desktop)
- Hamburger icon on mobile, slide-out or overlay menu
- Clean white background, no border-bottom (or subtle)

### Hero Carousel
- Full-width, full-viewport-height or large hero
- Background: product/fashion images (use picsum.photos placeholders)
- Overlay text: "Fashion Presents" / "Creative Design" / "Modern Fashion"
- Subtext: brief fashion copy
- CTA button: pill-shaped (#ff6363 bg, white text)
- Prev/next arrows, auto-advance with transition

### Collections Grid
- 4-column grid on desktop, 2 on tablet, 1 on mobile
- Each card: product image (picsum.photos), category name, brief description
- Names from preview: Minimal, Collecta, Nine8, Hut
- Cards have subtle border or shadow, hover effect

### About / Boutique
- Split layout: text on one side, images on the other
- Heading: "A Fashion Boutique"
- Body text: brand story paragraph
- Images: fashion product shots (picsum.photos)

### Testimonials
- Carousel/slider with customer quotes
- Each slide: quote text, customer name
- Names from preview: Adam Aderson, Lukas Devlin, Kayla Bryant
- Clean, centered layout

### Blog Posts
- 3-column grid (responsive)
- Each card: thumbnail image, post title, date, excerpt text
- Cards have subtle hover effect

### Newsletter / Connect
- Distinct section with rounded corners or colored background
- Heading: "Connect with us"
- Email input field + subscribe button
- Clean, centered layout

### Footer
- Multi-column layout
- Brand name, navigation links
- "Made with Component Dock" linking to componentdock.com
- Copyright text
- Dark or light background (match overall aesthetic)

## Design tokens reference

- Headings: "Playfair Display", serif — gives editorial/luxury feel
- Body: "Lato", sans-serif — clean and readable
- Accent: #ff6363 (soft red) — CTAs, highlights
- Text: #303030 (body), #000000 (headings)
- Muted: #7b7b7b
- Backgrounds: #fff, #f8f9fa, #f9f9f9, #ebedee
- Borders: #e6e6e6
- Buttons: pill-shaped (30px radius), #ff6363 bg, white text, hover #ff7777
- Containers: sharp edges (0px radius)

## Placeholder images

- Hero slides: `https://picsum.photos/seed/threadline-hero-1/1920/1080`, `-hero-2/...`, `-hero-3/...`
- Product cards: `https://picsum.photos/seed/threadline-collect-1/400/500`, etc.
- Blog posts: `https://picsum.photos/seed/threadline-blog-1/600/400`, etc.
- About section: `https://picsum.photos/seed/threadline-about/800/600`
