# BizPulse — Implementation Notes

Source: ColorLib BizPro (https://colorlib.com/wp/template/bizpro/)
New name: BizPulse
Category: Classic Business (one-page corporate)

## Section Order (top → bottom)

1. Navbar (transparent → sticky on scroll)
2. Hero (full-viewport carousel, 3 slides, parallax images)
3. About (4 circular icons with hover fill)
4. Services (3×2 grid of icon + title + description cards)
5. Portfolio (filterable image grid with hover overlay)
6. Middle Banner (parallax CTA strip)
7. Team (3 members with photo hover overlay + social links)
8. Skills (split layout: image left, 5 progress bars right)
9. Clients (testimonial slider)
10. Pricing (3-column cards: Basic / Advanced / Premium)
11. Blog (3-column cards with image + excerpt)
12. Contact (2-column: info + map, then form below)
13. Footer (dark bg, logo, social icons, copyright)

## Component Map

- `Navbar.tsx` — sticky nav, transparent-to-solid transition on scroll
- `Hero.tsx` — carousel with 3 slides, auto-advance, arrow navigation
- `About.tsx` — 4-column circular icon grid with hover animation
- `Services.tsx` — 3×2 grid of service cards
- `Portfolio.tsx` — filterable gallery with mixitup-style filtering
- `MiddleBanner.tsx` — parallax strip with CTA button
- `Team.tsx` — 3-member row with hover overlay
- `Skills.tsx` — split layout with animated progress bars
- `Clients.tsx` — testimonial carousel/slider
- `Pricing.tsx` — 3 pricing cards in a row
- `Blog.tsx` — 3-column blog post cards
- `Contact.tsx` — 2-column contact info + form
- `Footer.tsx` — dark footer with social icons

## Fidelity Notes

- **Navbar:** Transparent bg overlaying hero, becomes solid (white or dark) on scroll. Links are all-caps. Active link uses brand color. Logo uses script/cursive font — use a Google Font like "Great Vibes" or "Dancing Script" for the logo text "BizPulse".
- **Hero:** 3-slide carousel with full-viewport background images. Dark overlay (rgba(0,0,0,0.5)). Centered white text. Ghost button (white border, transparent fill, white text, 5px radius).
- **About:** 4 circular icons with thin coral border. On hover, fill becomes coral. Section title has a small coral underline (`before` pseudo-element).
- **Services:** 3-column on desktop, stacks on mobile. Each card: icon (lucide-react equivalent), bold title, description text.
- **Portfolio:** Filter tabs at top (pill-style buttons). Grid of images. Hover shows dark overlay with centered title + breadcrumb tags. Use CSS grid with `aspect-ratio`.
- **Middle Banner:** Full-width parallax image with `background-attachment: fixed`. Dark overlay `rgba(0,0,0,0.8)`. Centered white text + coral accent in headline. CTA button: white border, transparent fill.
- **Team:** 3 cards. Photo with dark hover overlay showing name/role/description. Below: name, role, 4 social icon circles (Facebook, Twitter, Pinterest, LinkedIn).
- **Skills:** Two-column layout. Left: image. Right: 5 skill bars. Each bar: label on left, percentage on right, colored progress fill. Use Tailwind width + transition for animation.
- **Clients:** Testimonial slider. Each item: circular avatar, blockquote text, client name with dashes.
- **Pricing:** 3 cards. Each: plan name, tagline, large price with "/monthly", 5-item feature list, coral CTA button. Cards have 15px border-radius.
- **Blog:** 3-column cards. Each: image with hover overlay (link icon), title, "Posted by admin at date", excerpt with "Read More" link. Cards have 5px border-radius.
- **Contact:** Top row: left column with heading + paragraph + 3 info items (address, phone, email) each with circular coral icon. Right column: heading + map placeholder. Below: form with 3-column first row (First Name, Last Name, Email), full-width Subject, full-width textarea, coral submit button.
- **Footer:** Dark background (#232a34). Centered logo, 8 social icon circles, copyright text with Component Dock link.

## Design Token Summary

```
--brand: #d73e4d        /* coral-red accent */
--heading: #373a3f      /* dark charcoal */
--body: #696f78          /* medium gray */
--body-light: #808489    /* lighter gray */
--white: #ffffff
--section-alt: #f9f9f9   /* alternate section bg */
--footer-bg: #232a34     /* dark navy */
--font-family: 'Raleway', sans-serif
--radius-icon: 50%       /* circular icons */
--radius-card: 15px      /* pricing/blog cards */
--radius-button: 5px     /* CTA buttons */
```

## Images

Use deterministic placeholder images:
- Hero slides: `https://picsum.photos/seed/bizpulse-hero-1/1920/1080` etc.
- About icons: lucide-react icons (no images needed)
- Services: lucide-react icons
- Portfolio: `https://picsum.photos/seed/bizpulse-proj-1/600/400` etc. (6 items)
- Team: `https://picsum.photos/seed/bizpulse-team-1/400/500` etc. (3 items)
- Skills: `https://picsum.photos/seed/bizpulse-skill/600/500` (1 image)
- Clients: `https://picsum.photos/seed/bizpulse-client-1/100/100` (avatars)
- Blog: `https://picsum.photos/seed/bizpulse-blog-1/600/400` etc. (3 items)
- Middle banner: `https://picsum.photos/seed/bizpulse-banner/1920/600`
