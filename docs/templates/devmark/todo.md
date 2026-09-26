# DevMark — Implementation Tasks & Design Notes

Source: ColorLib Martin (https://preview.colorlib.com/theme/martin/)
New name: devmark

## Structure order (1:1 with original)

1. **Navbar** — Sticky top bar with logo "D." + hamburger toggle
2. **Hero** — Owl-carousel style: split 3/4 image + 1/4 text panel, auto-play
3. **Services** — "What I Do" heading + 3-column card grid with icons
4. **Work** — "Work" heading + carousel of case study cards (image + text)
5. **Subscribe** — Overlay bg, intro text, resume link, email form
6. **Footer** — Blue (#002bdc) bg, Lets Talk + Info columns, social icons, copyright

## Section-by-section fidelity notes

### 1. Navbar
- Logo: "D." (styled like "M." in original — bold, minimal)
- Hamburger icon triggers full-screen overlay nav
- Nav links: Home, About, Services, Work, Blog, Contact
- On desktop: fixed header with logo + hamburger (original pattern)
- Mobile: full-screen overlay with centered vertical links

### 2. Hero
- Split layout: 75% background image + 25% narrow text panel
- Background image via picsum.photos/seed/devmark-{1,2}/1200/800
- Right panel: headline "I'm a developer from Berlin." + "Hire me now →"
- CTA: uppercase, letter-spacing: 7px, black text, no bg (link style)
- Social links vertical on left edge: Twitter, Facebook, Instagram, Dribbble
- Carousel: 2 slides with different images and headlines
- Use Framer Motion or CSS transitions for slide animation

### 3. Services
- Section heading: span "What I Do" + h2 "Strategy, design and a bit of magic"
- 3 columns (md:4 each), centered text
- Each card: circle icon container + h3 title + h4 list of services
- Icons: lucide-react equivalents (Search, Layers, Lightbulb)
- White background (colorlib-bg-white pattern)

### 4. Work/Case Studies
- Section heading: span "Work" + h2 "Happy spending my time to this projects"
- Carousel of case study cards
- Each card: 50% image + 50% text panel
- Text: tag pills + h3 title + description + "See details" button
- Button: yellow (#ffdd00) bg, black text, 2px border-radius
- Images via picsum.photos/seed/devmark-work-{n}/600/400

### 5. Subscribe/Newsletter
- Dark overlay background (rgba(0,0,0,0.4) or similar)
- Intro paragraph text
- "Read my resume here" link with document icon
- Heading: "Subscribe Newsletter"
- Subheading: "Subscribe our newsletter and get latest update"
- Form: email input (60% width) + "Subscribe Now" button (30% width)
- Button: yellow (#ffdd00) bg, black text

### 6. Footer
- Background: #002bdc (accent blue)
- Left column: "Lets Talk" h3 (70px, 800 weight) + description + yellow button
- Right column: "Info" h3 + email/phone/address
- Social icons: Facebook, Twitter, Dribbble with yellow (#ffdd00) icon color
- Copyright: "© {year} All rights reserved | Made with ♥ by Component Dock"
- Button in footer: yellow bg, black text, 2px border-radius

## Design token summary for Tailwind @theme

```
--color-brand: #ffdd00;
--color-accent: #002bdc;
--color-body: #f7f7f7;
--color-text: #1a1a1a;
--color-text-muted: rgba(114,114,114,0.8);
--font-family: "Poppins", sans-serif;
```

## Component architecture

- `src/App.tsx` — Compose all sections
- `src/components/Navbar.tsx` — Sticky nav with hamburger
- `src/components/Hero.tsx` — Carousel with split slides
- `src/components/Services.tsx` — 3-column service cards
- `src/components/Work.tsx` — Case study carousel
- `src/components/Subscribe.tsx` — Newsletter form
- `src/components/Footer.tsx` — Blue footer with columns
