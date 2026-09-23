# Cardwell — Design Notes & Implementation Outline

## Source

- **ColorLib source:** Noah (slug: `noah`)
- **Preview:** https://preview.colorlib.com/theme/noah/
- **New name:** cardwell

## Section Order (1:1 with source)

1. **Navbar** — Hamburger toggle → slides right sidebar
   - Sidebar: search input, nav links (Home, Services, Work, Blog, About, Contact), mini gallery thumbnails
   - Header: brand logo split-style "Card" + "well" on black square

2. **About** — Two columns
   - Left (col-5): Image carousel (2 images, owl-carousel style)
   - Right (col-6, push-1): Name/title text carousel + bio paragraph + social icons + "Contact Me!" outline button
   - Rotated "About" label on left
   - 250px watermark "About" heading behind

3. **Services** — Two-column flex layout
   - Left (one-third): Intro heading ("My Services" / "Here Are Some of My Skills") + 4 service cards in 2-col grid
   - Right (one-forth): Background image
   - Rotated "Services" label
   - 250px watermark "Services" heading

4. **Portfolio (Works)** — Stacked full-width entries
   - 4 work entries, each: full-width background image with hover overlay + title, description + "View details" below
   - Rotated "Portfolio" label
   - 250px watermark "Portfolio" heading

5. **Blog** — Carousel of article cards
   - 3 article cards: image with dark overlay + "Read more" on hover, date, title, excerpt
   - Owl-carousel style horizontal scroll
   - Rotated "Blog" label
   - 250px watermark "Blog" heading

6. **Testimonials** — Carousel of blockquotes
   - 3 testimonials: quote text + attribution name
   - Centered layout
   - Rotated "Testimonies" label
   - 250px watermark "Testimonies" heading

7. **Footer** — 3-column
   - Col 1: "Let's Talk" — contact text, email, social icons (FB, Twitter, G+, Dribbble)
   - Col 2: "Latest Blog" — 3 featured entries (thumbnail + date + title)
   - Col 3: "Newsletter" — email input (pill shape) + Subscribe button (pill shape)
   - Copyright with Component Dock link

## Key Design Details

- **Rotated label pattern:** Absolutely positioned, rotated 90deg, Karla font 14px uppercase letter-spacing 1em. Has a ::after black horizontal line (40px wide, 1px tall).
- **Watermark heading:** `.bold` class — 250px, #f0f0f0, weight 700, absolutely positioned at top of each section.
- **Nav sidebar:** 360px wide, white bg, slides from right. Menu toggle transitions the main content with scale(0.99) + dark overlay.
- **Logo:** Two spans inside an anchor — "Card" (bold?) + "well" on black background, white text.
- **Buttons:** Near-square (border-radius 1px), uppercase, letter-spacing 2px, font-size 13px. Primary = filled purple; outline = transparent + gray border.
- **Newsletter form:** Pill-shaped inputs/buttons (border-radius 30px).

## Component Breakdown

| Component | File | Notes |
|---|---|---|
| Navbar | `Navbar.tsx` | Hamburger toggle, sidebar with search/nav/gallery |
| Logo | `Logo.tsx` | Split-style brand mark |
| About | `About.tsx` | Two-column: image carousel + bio |
| Services | `Services.tsx` | Flex layout: service list + image |
| Portfolio | `Portfolio.tsx` | Full-width stacked work entries |
| Blog | `Blog.tsx` | Carousel of article cards |
| Testimonials | `Testimonials.tsx` | Carousel of blockquotes |
| Footer | `Footer.tsx` | 3-column: contact, latest blog, newsletter |

## Tailwind Theme Tokens

```css
@theme {
  --font-body: "Karla", Arial, sans-serif;
  --font-heading: "Playfair Display", Georgia, serif;
  --color-brand: #CA82F8;
  --color-brand-hover: #d49af9;
  --color-bg: #fafafa;
  --color-heading: rgba(0, 0, 0, 0.8);
  --color-watermark: #f0f0f0;
  --color-text-body: gray;
}
```

## Fidelity Checklist

- [ ] Split-style logo (black bg, white text, two name parts)
- [ ] Hamburger → right sidebar with nav + search + gallery
- [ ] Main content scales down when sidebar open
- [ ] 250px watermark headings on every section
- [ ] Rotated vertical labels with black line on every section
- [ ] About: image carousel left, name carousel + bio + social + CTA right
- [ ] Services: 4 numbered service cards + side image
- [ ] Portfolio: 4 full-width work entries with hover overlay
- [ ] Blog: 3 article cards in carousel with hover overlay
- [ ] Testimonials: 3 blockquotes in carousel
- [ ] Footer: 3-column (contact, blog, newsletter)
- [ ] Newsletter input: pill-shaped (30px radius)
- [ ] Buttons: near-square (1px radius), uppercase, letter-spacing 2px
- [ ] Karla body font, Playfair Display headings
- [ ] #CA82F8 accent throughout
- [ ] #fafafa page background
- [ ] Footer links to Component Dock
- [ ] No ColorLib references in app code
- [ ] Responsive: mobile nav, stacking columns, smaller watermark text
