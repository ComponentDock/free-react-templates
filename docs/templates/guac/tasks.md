# Guac — Design Notes & Implementation Tasks

## Source

- ColorLib: Avo
- Preview: https://preview.colorlib.com/theme/avo/
- New name: guac

## Section order (top to bottom)

1. **Navbar** — Dark bg, brand "guac" (styled "v"), nav links (Home, About, Work, Blog, Contact), mobile hamburger
2. **Hero** — Full-width slider (2 slides), background images with dark overlay, counter stats (400 projects / 21 years), heading, subtitle, CTA buttons, video play link, diagonal white cut at bottom (.degree-right)
3. **About / Services** — "About us" heading, 5 service cards in a row with flaticon icons, about block with image + text, "View all projects" button, 3 numbered SEO items (01, 02, 03) with red accent
4. **Portfolio / Our Works** — "Our Works" heading, 4 portfolio items in alternating image/text rows, each with category tag, title, description, author avatar, "View Portfolio" link
5. **Testimonials** — "Clients Says About Us?" heading, carousel with quote icon, testimonial text, user avatar, name, position
6. **CTA Banner** — "Get Started" subheading, heading, description, primary "Get started" button
7. **Blog** — "Recent Blog" heading, 4 blog cards in a row, image + title + date + author + comment count + excerpt, light bg
8. **Footer** — Black bg, brand + social icons, Community/About Us/Company/Contact columns, copyright, Component Dock link

## Design tokens (from CSS)

- **Primary:** #007bff (Bootstrap blue)
- **Accent:** #d1002c (red — subheadings, numbered items)
- **Font:** "Nunito Sans" (Google Fonts, weights 200-900)
- **Heading weight:** 900 (extrabold)
- **Footer:** solid black, white/50% opacity text
- **Hero overlay:** dark semi-transparent on images
- **Diagonal cuts:** 50px white pseudo-elements (.degree-right / .degree-left-footer)
- **Section padding:** 12em 0 (6em mobile)
- **Button radius:** 0.3rem
- **Portfolio row height:** 500px (550px images)
- **Blog bg:** #f7f7f7

## Implementation tasks

### Setup

- [ ] Copy simplest existing app as base (e.g. apps/aurora or similar)
- [ ] Rename package to @free-react-templates/guac
- [ ] Update vite.config.ts with injectUiSource()
- [ ] Create public/CNAME: guac.free.componentdock.com
- [ ] Update package.json homepage: https://guac.free.componentdock.com

### Components

- [ ] src/components/Navbar.tsx — dark sticky nav, brand with styled "v", links, mobile toggle
- [ ] src/components/Hero.tsx — slider with background images, overlay, counter stats, heading, subtitle, CTA, video button, diagonal cut
- [ ] src/components/About.tsx — "About us" heading, 5 service cards, about block with image, numbered services
- [ ] src/components/Portfolio.tsx — "Our Works" heading, 4 alternating items with images, category, title, author, "View Portfolio"
- [ ] src/components/Testimonials.tsx — carousel with quotes, avatars, names
- [ ] src/components/CtaBanner.tsx — subheading, heading, description, primary button
- [ ] src/components/Blog.tsx — "Recent Blog" heading, 4 cards with image, title, meta, excerpt
- [ ] src/components/Footer.tsx — black bg, 6 columns (brand, Community, About Us, Company, Contact, copyright), Component Dock link

### Styling

- [ ] Tailwind theme tokens: primary (#007bff), accent (#d1002c), footer (#000)
- [ ] Nunito Sans via Google Fonts link in index.html
- [ ] Hero diagonal cut: CSS pseudo-elements or Tailwind clip-path
- [ ] Portfolio alternating layout: flexbox row-reverse on even items
- [ ] Blog light bg: #f7f7f7

### Testing

- [ ] Each component: render test, user interaction test
- [ ] Navbar: mobile toggle, active link
- [ ] Hero: slider navigation (if applicable)
- [ ] Portfolio: alternating layout verification
- [ ] Testimonials: carousel rendering
- [ ] Footer: all columns present, Component Dock link
- [ ] Coverage: 100% lines/functions/branches/statements

### Assets

- [ ] Placeholder images via picsum.photos/seed/guac-<n>/<w>/<h>
- [ ] Icons from lucide-react (replace flaticon)
- [ ] No original assets copied

### Verification

- [ ] npm run verify:app guac passes
- [ ] Build succeeds
- [ ] Footer links to componentdock.com
- [ ] No ColorLib references in app code
- [ ] CNAME and homepage configured
