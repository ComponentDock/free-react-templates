# Nectar — Design Notes

Recreation of ColorLib Bee (https://colorlib.com/wp/template/bee/).
Preview: https://preview.colorlib.com/theme/bee/

## Section structure (top → bottom)

1. **TopBar** — Flex row: email icon + address, phone icon + number, "Request A Quote" button. Light background, mobile stacks vertically.
2. **Navbar** — Dark bg, logo "Nectar." with bee icon, nav links (Home, About, Project, Blog, Contact), search input right, hamburger toggle mobile.
3. **HeroSlider** — 2-slide carousel, full-width bg images with parallax + dark overlay, right-aligned text: h1 (with `<span>` accent) + subheading + "Request A Quote" secondary button.
4. **QuoteAndAbout** — Two-column: left = "Request A Quote" form (yellow header, fields: first name, last name, service select, phone, message, submit); right = heading + body text + "Read More" button.
5. **Services** — "Experience Great Services" heading. 3 service cards: icon + title + description + social link row. White bg.
6. **CTABanner** — Full-width parallax bg image with dark overlay.
7. **TeamMembers** — 4 cards: avatar, name, role, social icons (twitter, facebook, google-plus, instagram).
8. **ProjectGallery** — 3-col grid of project images. Hover: yellow overlay fades in, name slides up, circular zoom icon appears.
9. **CounterStats** — Full-width yellow bg overlay (`#fda729`), parallax bg image. 4 stats: 30 Years, 1500 Projects, 100 Experts, 300 Customers. Numbers animate on scroll.
10. **ServicesAndTestimonials** — Two-column: left = service flow list (3 items, icon+title+desc); right = "Satisfied Customer" heading + testimonial carousel (quote, text, name, role, avatar).
11. **Blog** — Light gray bg. "Recent Blog" heading. 3 cards: image with date badge overlay, title, excerpt, "Read More" button, author + comment count.
12. **Footer** — Dark brown bg (`#3c312e`). 4 columns: (a) logo "Nectar." + social icons, (b) services list, (c) recent blog thumbnails, (d) newsletter form. Copyright line bottom.

## Design fidelity notes

- Brand color is `#fda729` (golden amber). Use as primary in `@theme`.
- Fonts: Poppins (headings, nav, buttons, counter labels) + Nunito Sans (body, paragraphs). Load via Google Fonts `<link>` in index.html.
- Buttons use Bootstrap defaults (small border-radius ~0.25rem). Primary buttons are `#fda729` bg with white text.
- Hero slider: use embla-carousel-react or swiper instead of OwlCarousel. 2 slides with parallax bg images + dark overlay.
- Counter section: numbers animate from 0 to target. Use IntersectionObserver + CSS transitions or framer-motion.
- Project gallery hover effect: yellow overlay fade + text slide-up + icon circle. Use CSS transitions.
- Testimonials: carousel/slider. Use embla-carousel-react or swiper instead of OwlCarousel.
- Team members: 4 cards in a row, social icon links below each member.
- Blog date badge: yellow (`#fda729`) with black text, positioned over the image.
- Footer background is dark brown `#3c312e` (not pure black).
- Parallax on hero, CTA banner, and counter bg images. Use CSS `background-attachment: fixed` or a React parallax library.
- Form inputs: 52px height, `#fff` bg, `1px solid rgba(0,0,0,0.1)` border, focus border `#000`.
- Newsletter form in footer: transparent bg inputs, white text, white submit button.
- Responsive: hamburger nav on mobile, single-column stacking for all grids.

## Component outline

```
src/
  App.tsx              — compose all sections
  components/
    TopBar.tsx         — contact info strip + CTA button
    Navbar.tsx         — dark nav with logo, links, search, hamburger
    HeroSlider.tsx     — carousel with 2 slides, parallax bg, overlay
    QuoteAndAbout.tsx  — two-column: quote form + about text
    Services.tsx       — 3 service cards with icons + social links
    CTABanner.tsx      — parallax background CTA section
    TeamMembers.tsx    — 4 team member cards with social icons
    ProjectGallery.tsx — 3-col grid with hover overlay
    CounterStats.tsx   — 4 animated stat blocks on yellow bg
    Testimonials.tsx   — services flow list + testimonial carousel
    Blog.tsx           — 3 blog cards with date badges
    Footer.tsx         — 4-column dark footer + newsletter + copyright
  index.css            — Tailwind entry + theme tokens (@theme brand: #fda729)
  main.tsx             — entry point
```

## Key implementation notes

- Copy the simplest existing app as scaffold, rename package to `@free-react-templates/nectar`.
- Replace all ColorLib provenance with design-token notes (no `colorlib.com` in app code).
- Footer MUST link `https://www.componentdock.com/` (branded "Component Dock").
- `public/CNAME` → `nectar.free.componentdock.com`.
- `package.json` `"homepage"` → `https://nectar.free.componentdock.com`.
- Placeholder images: `https://picsum.photos/seed/nectar-<n>/<w>/<h>`.
- Run `npm install` at repo root to register workspace in lockfile.
