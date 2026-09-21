# Credova — Design Notes & Task Outline

## Source mapping

- ColorLib source: "Loan" (https://colorlib.com/wp/template/loan/)
- Preview: https://preview.colorlib.com/theme/loan/
- New name: `credova` (apps/credova, @free-react-templates/credova)

## Design tokens (from live preview CSS)

| Token | Value |
|---|---|
| Brand blue | #3589f1 |
| Dark navy | #021a47 |
| Text dark | #000a2d |
| Hero button bg | #0b1416 |
| Light bg | #e0e4f8 |
| Gray text | #7a8290 |
| Font headings | Rufina, serif |
| Font body | Rubik, sans-serif |
| Button radius | 5px |

## Section implementation order

1. **Navbar.tsx** — transparent header, sticky on scroll, logo left, nav links (Home, About, Services, Blog, Contact), "Apply Now" CTA button, mobile hamburger
2. **Hero.tsx** — slider with 2 slides, heading + subtext + CTA + hero image right side, auto-rotation
3. **About.tsx** — two-column layout: image left, heading "Building a Brighter Financial Future & Good Support", body text, "Apply for Loan" CTA
4. **Services.tsx** — heading "High Performance Services For All Industries", 4 service cards with icon + title + description
5. **Support.tsx** — dark section, heading "We Promise Sustainable Future For You", body text, supporting imagery
6. **ApplicationCTA.tsx** — light bg (#e0e4f8), heading "Easy Application Process For Any Types of Loan", prominent "Apply for Loan" button
7. **Team.tsx** — heading "Take a look to our professional team members", 4 team member cards (photo + name + social links)
8. **Testimonials.tsx** — dark navy bg (#021a47), carousel with testimonial text + author
9. **Blog.tsx** — heading "News from around the world selected by us", 2-3 blog cards (image + date + title + excerpt)
10. **Footer.tsx** — dark bg, 3-column layout (Quick Link, New Products, Support), social icons, copyright, Component Dock link

## Fidelity notes

- The original uses Bootstrap grid (col-xl-2/col-lg-2 etc.) — recreate with Tailwind grid/flex
- Hero uses owl.carousel for slider — use CSS transitions or a simple React state-based slider
- Testimonials use a custom carousel — implement with React state
- The original has slicknav for mobile menu — use a React hamburger toggle
- Button hover effect: background slides in from left (::before pseudo-element) — use Tailwind group-hover or CSS transition
- Section backgrounds alternate between white, light (#e0e4f8), and dark (#021a47)
- The "Apply for Loan" CTA appears in multiple sections — extract as a reusable component

## Placeholder assets

- Hero image: `https://picsum.photos/seed/credova-hero/800/600`
- About image: `https://picsum.photos/seed/credova-about/600/400`
- Team photos: `https://picsum.photos/seed/credova-team-1/300/300` (through -4)
- Blog images: `https://picsum.photos/seed/credova-blog-1/400/300` (through -3)
- Service icons: lucide-react (Landmark, Building2, HardHat, Briefcase)
