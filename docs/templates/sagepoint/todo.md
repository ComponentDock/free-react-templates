# Sagepoint — Implementation Todo + Design Notes

**Source:** ColorLib "Buson" (https://colorlib.com/wp/template/buson/)
**Preview:** https://preview.colorlib.com/theme/buson/
**New name:** sagepoint (apps/sagepoint, @free-react-templates/sagepoint)
**Deploy target:** sagepoint.free.componentdock.com

---

## Section order (fidelity 1:1)

1. **Header** — Sticky: top navy bar (address + email + social icons),
   bottom white bar (logo + nav links + coral "Contact Now" CTA button).
   Dropdown menus with coral top border.
2. **Hero slider** — Full-bleed background image, navy uppercase h1
   "We help you to grow your business", coral eyebrow "Welcome to Sagepoint",
   coral solid "Learn More" button. Slider dots.
3. **Team Profile** — Light blue `#f6f9fe` background, 3-column grid:
   two team cards (photo + title + description, photo hover → coral
   border + scale), one bordered "What we do for you" CTA card.
4. **We Trusted** — 7/5 split: large image left, "We are more trusted"
   heading + description + coral "Learn More" button right.
5. **Our Services** — Centered section title, 3 icon cards (Strategic
   Planning, Trades & Stocks, Audit & Assurance) with outline
   "More Services" button below.
6. **Completed Cases** — 4/8 split: left text column + "See more"
   outline button, right Owl carousel of case study cards with
   hover overlay captions (title, description, category tag).
7. **Testimonials** — Centered quote text, 5-star rating (coral),
   author name + attribution. Carousel of at least 2 testimonials.
8. **Our Recent News** — Centered section title, 3 blog cards
   (image + category tag + title + date).
9. **Request for Call Back** — 4/7 split: heading + description left,
   contact form right (name, phone, services dropdown, coral send button).
10. **Footer** — 4-column: logo + description + social icons, Company
    links, Services links, Get in Touch info. Bottom copyright bar →
    "Made with Component Dock" link to componentdock.com.

## Design tokens to apply in Tailwind @theme

```
--color-brand: #ff656a        /* coral/salmon primary */
--color-navy: #002d5b         /* dark navy secondary */
--color-heading: #0b1c39      /* dark heading text */
--color-body: #506172         /* muted body text */
--color-card-bg: #f6f9fe      /* light blue card/section bg */
--font-family: "Poppins", sans-serif
--radius-button: 5px
```

## Implementation notes

- Copy `apps/academia` or another simple single-page template as starting
  point; rename package to `@free-react-templates/sagepoint`.
- Use `https://picsum.photos/seed/sagepoint-hero/1920/830` for hero bg,
  `picsum.photos/seed/sagepoint-team-1/400/400` etc. for team photos,
  `picsum.photos/seed/sagepoint-trusted/700/500` for trusted image,
  `picsum.photos/seed/sagepoint-case-1/600/400` etc. for case studies,
  `picsum.photos/seed/sagepoint-blog-1/400/300` etc. for blog images.
- Lucide icons for service icons (checklist, audit, etc.) — no
  flaticon dependency.
- Slider: can use a simple React state-based carousel or a lightweight
  library; dot navigation required.
- Case carousel: React state carousel with prev/next arrows and overlay
  captions.
- Testimonial carousel: simple React state carousel with prev/next.
- Form: controlled inputs, no backend needed; on-submit just prevent
  default and optionally show a success toast.
- Footer: replace Colorlib attribution with "Made with Component Dock"
  linking to https://www.componentdock.com/.
