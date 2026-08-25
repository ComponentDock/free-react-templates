# Orbiter — Design Notes

## Source mapping

| Field       | Value                                                                       |
| ----------- | --------------------------------------------------------------------------- |
| New name    | orbiter                                                                     |
| Source      | Stodeo (ColorLib)                                                           |
| Source slug | stodeo                                                                      |
| Preview URL | https://preview.colorlib.com/theme/stodeo/                                  |
| Screenshot  | https://colorlib.com/wp/wp-content/uploads/sites/2/stodeo-free-template.jpg |

## Structure order (implementation order)

1. `Navbar.tsx` — Sticky top nav, logo text, horizontal links with dropdown, mobile hamburger
2. `Hero.tsx` — Full-width centered hero, subheading + heading + paragraph + CTA button
3. `Welcome.tsx` — 2-col split (image left, text + button right), no gap
4. `WhyChooseUs.tsx` — Asymmetric layout: aside stats box + main heading/feature-cards section
5. `Services.tsx` — 2-col split (image left, dark content right), service items + CTA
6. `Blog.tsx` — Asymmetric: empty left + heading/cards right, 3 post cards
7. `Testimonials.tsx` — Centered testimonial slider with 4 items
8. `Footer.tsx` — 4-col footer with About, Navigation, Services, Contact + social icons + copyright

## Section-by-section fidelity notes

### Navbar

- Logo text "Orbiter" left-aligned, nav links right-aligned (`float-end` in original)
- Desktop: horizontal inline menu. Mobile: hamburger → slide-in mobile menu
- Dropdown on "Why Orbiter" with 3 sub-items (2 regular + 1 nested dropdown)
- Sticky positioning (site-nav has `position: relative` with sticky behavior in original CSS)

### Hero

- White background, generous padding (`7rem` top/bottom in original)
- Centered layout (`col-lg-7 text-center`)
- Subheading in `#00aaff` cyan, uppercase, 14px
- Heading in `#081b46`, bold weight 700
- Primary button `#3369e7` background, white text, no border-radius
- AOS `fade-up` on subheading, heading, paragraph, button (staggered delays)

### Welcome

- 2-column no-gap layout (`row g-0`)
- Left: full-height image (`img-wrap` with overflow hidden)
- Right: text + "About us →" button, bottom-aligned (`align-self-end`)
- Button: outline dark bg with arrow icon (`has-arrow` class, `icon-keyboard_backspace`)
- AOS: `fade-right` on image, `fade-up` on text

### Why Choose Us

- Asymmetric: right aside-box (col-lg-3, pushed via `ms-auto`) with paragraph + stats + CTA
- Left main box (col-lg-9): subheading "Why Orbiter?", heading, paragraph
- Stats: "12" years of experience, "34" team members (counter-up animation in original)
- 4 feature cards in `row g-0`: icon (flaticon classes), title, arrow
- Feature cards: Web Design, Web Development, Branding & Identity, Graphic Design
- Original flaticon icons → replace with `lucide-react` equivalents
- AOS staggered `fade-up` with increasing delays

### Services (sec-3)

- 2-column no-gap (`row g-0`)
- Left: image
- Right: dark background box-wrap, white heading "Grow your business", muted paragraph
- 2 service items in `col-md-6` each: icon + title + description
- "Our services →" outline button with arrow
- Box-wrap has relative positioning (used for background overlay in original)

### Blog (sec-posts)

- Asymmetric: left col-lg-3 empty (spacer), right col-lg-9
- Subheading "Our Blogs", heading "Recent Blog Posts"
- 3 post cards in `col-lg-4` each: date, title link, excerpt paragraph
- Cards have `post-entry` class
- AOS `fade-up` staggered

### Testimonials

- Centered: heading "Happy Clients"
- tiny-slider based carousel with 4 items
- Each item: circular person image, blockquote with quote text, strong name, position span
- Use a React carousel library or CSS scroll-snap for the slider
- Person images from `picsum.photos`

### Footer

- Light gray background `#efefef`, padding 70px
- 4-column layout:
  - Col 1 (col-lg-4): "About Orbiter." widget + "Connect" social icons
  - Col 2 (col-lg-2): "Navigation" links list
  - Col 3 (col-lg-2): "Services" links list
  - Col 4 (col-lg-3): "Contact" address + phone + email
- Social icons: Instagram, Twitter, Facebook, LinkedIn, Pinterest, Dribbble → use `lucide-react`
- Copyright line centered at bottom
- Footer links: `#777`, widget headings: black `#000`
- Must include link to https://www.componentdock.com/

## Design token notes for Tailwind

```css
@theme {
  --color-brand-primary: #3369e7;
  --color-brand-primary-hover: #2b59c4;
  --color-brand-secondary: #00aaff;
  --color-heading: #081b46;
  --color-footer-bg: #efefef;
  --color-footer-text: #888;
  --color-footer-heading: #000;
  --font-family-sans: 'Noto Sans JP', sans-serif;
}
```

## Image strategy

- Hero: no image (text only)
- Welcome: `https://picsum.photos/seed/orbiter-welcome/800/600`
- Services: `https://picsum.photos/seed/orbiter-services/800/600`
- Testimonials: `https://picsum.photos/seed/orbiter-person-{1..4}/200/200`
