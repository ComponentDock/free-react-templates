# Inception — Implementation Notes

## Source
- ColorLib: https://colorlib.com/wp/template/create/
- Preview: https://preview.colorlib.com/theme/create/
- Name: inception (replaces "Create")

## Section Order (top to bottom)

1. **Top Bar** — dark bg (#000), phone + email left, social icons right. Hidden on mobile.
2. **Navbar** — sticky, white bg. Brand "inception." with teal dot. Links: Home, Work, Services, About (dropdown: Specialties, Our Team), Blog, Contact. Hamburger on mobile.
3. **Hero** — full viewport, bg image + dark overlay. Heading "We Love To Build [typed words]". Typed words: "Web Apps", "WordPress", "Mobile Apps" cycling. "Watch Video" CTA button (teal, pill-shaped).
4. **Numbered Boxes** — 3 columns: 01. Innovate, 02. Create, 03. Scale. Large faded number behind heading. Teal headings. Each has description + 3-item checklist with teal checkmarks.
5. **Work / Portfolio** — centered "Our Works" heading. 3-column grid of 6 images. Each image has overlay with title + category. Lightbox on click.
6. **Services** — centered "Our Services" heading. 3-column grid of service cards. Each has teal icon, title, description, "Learn More" link.
7. **About Us** — heading left, image right. Description text + specialty sub-items (teal icons, titles, descriptions, "Learn More" links).
8. **Team** — centered "Our Team" heading, bottom border. 3 member cards: circular avatar, name, position, social icons.
9. **Blog** — centered "Blog" heading. 3 post cards: image, title, meta (author, date, category), excerpt, "Continue Reading...".
10. **Contact Us** — centered "Contact Us" on light bg. Form (F name, L name, email, subject, message, "Send Message" button). Info card right (address, phone, email).
11. **CTA Banner** — full-width teal (#32dbc6) bg. "Let's Get Started" in white.
12. **Footer** — dark (#333333). Columns: About Us text, Features links, Follow Us social icons, Subscribe Newsletter (email + Send). Copyright at bottom with Component Dock link.

## Key Fidelity Notes

- Font: Quicksand (Google Fonts, weights 300–900). Original uses Quicksand throughout.
- Primary color: #32dbc6 (teal/mint). This is the ONLY accent color. Used everywhere: buttons, active nav, icons, checkmarks, CTA banner.
- Buttons: Bootstrap .btn-primary overridden to teal, .btn-md = padding 15px 30px, 12px uppercase, letter-spacing .1em, border-radius 30px (pill).
- Hero: full viewport height (100vh), background-size cover, dark semi-transparent overlay (::before pseudo-element).
- Typed text animation: cycle through strings at 80ms speed, backspeed 80ms, loop. Use a lightweight typed library or CSS animation.
- Portfolio images: 6 items in 3-col grid. Overlay appears on hover with title + category. Use fancybox-style lightbox or React equivalent.
- Team avatars: circular (border-radius 50%), width 50% of card.
- Footer: #333 bg, headings white, body text #737373, links #999.
- No scroll-to-top button in original.
- Mobile: hamburger menu at < 1200px, stacked columns.

## Component Structure (suggested)

```
App.tsx
├── TopBar.tsx         (dark bar, phone/email, social icons)
├── Navbar.tsx         (sticky, brand, nav links, mobile toggle)
├── Hero.tsx           (bg image, overlay, typed text, CTA)
├── NumberedBoxes.tsx  (3 columns: Innovate/Create/Scale)
├── Work.tsx           (portfolio grid, 6 images, overlay)
├── Services.tsx       (3-col service cards)
├── About.tsx          (2-col: text left, image right, specialties)
├── Team.tsx           (3 member cards, circular avatars)
├── Blog.tsx           (3 post cards)
├── Contact.tsx        (form + info card)
├── CtaBanner.tsx      (full-width teal banner)
└── Footer.tsx         (dark footer, columns, newsletter)
```

## Placeholder Assets

- Hero bg: `https://picsum.photos/seed/inception-hero/1920/1080`
- Portfolio: `https://picsum.photos/seed/inception-work-{1-6}/600/400`
- About image: `https://picsum.photos/seed/inception-about/600/500`
- Team avatars: `https://picsum.photos/seed/inception-person-{1-3}/400/400`
- Blog images: `https://picsum.photos/seed/inception-blog-{1-3}/600/400`

## Implementation Priority

1. Project setup (Vite + React 19 + Tailwind 4 + TypeScript)
2. TopBar + Navbar (with sticky behavior)
3. Hero (typed text animation)
4. NumberedBoxes (simple 3-col layout)
5. Work/Portfolio (image grid + hover overlay)
6. Services (icon cards)
7. About (2-col layout)
8. Team (avatar cards)
9. Blog (post cards)
10. Contact (form + info)
11. CTA Banner + Footer
12. Tests (100% coverage)
