# Sonority — Implementation Notes

**Source:** ColorLib "MusicLab" — https://preview.colorlib.com/theme/musiclab/
**New name:** Sonority
**Spec:** openspec/specs/template-sonority/spec.md

## Section order (1:1 fidelity)

1. **Header/Navbar** — transparent, sticky, dark gradient background
   - Logo text "Sonority" (left)
   - Nav links: Home, Features, Pricing, Download, Blog, Contact
   - "Sign In" button (right, gradient outline style)
   - Mobile hamburger menu

2. **Hero** — full-width, dark gradient `#161a1a` background
   - Subtitle: "Intuitive. Powerful. Runs everywhere" (blue #42B5F2)
   - H1: "Open the world of music. It's all here."
   - Two CTA buttons side by side:
     - "Download For Desktop" — gradient fill (purple→blue)
     - "Download For Mobile" — transparent, white border, white text
   - Desktop app screenshot below (picsum placeholder)

3. **About 1** — white background, 2-column layout
   - Left: placeholder image (picsum seed sonority-about1)
   - Right: sound icon, heading "Listen to a personalized mix of tracks",
     3 numbered items (1, 2, 3) with icons + text

4. **About 2** — section-bg (#F5F7F9), reversed 2-column layout
   - Left: heading "We are tender heart charity foundation" + 3 finder
     icon items with text
   - Right: placeholder image (picsum seed sonority-about2)

5. **Features Grid** — white background, 4-column grid
   - Centered heading: "Get ready for seamless online music"
   - Subheading paragraph
   - 4 cards: Offline mode, High quality audio, No ads, Unlimited skips
   - Each card: icon image (picsum), title, short description

6. **Pricing** — section-bg (#F5F7F9), centered
   - Heading: "Listen free or subscribe to Premium"
   - Subheading paragraph
   - 2 pricing cards (col-4 each):
     - Free: $0.00/month, feature list, "Get Free" button
     - Premium: $9.99/month, feature list, "Get Premium" button
   - Cards: white bg, border #DDE4E8, border-radius 8px
   - Card hover: bg → #262929 (dark)

7. **Testimonials** — white background, carousel
   - Heading: "Customers are loving Sonority"
   - Carousel of 4 testimonial cards:
     - Avatar (picsum seed), name, title, quote, 5-star rating

8. **Footer** — dark bg #262929, 4-column layout
   - Col 1: Logo + description + social icons (FB, LinkedIn, IG, YT)
   - Col 2: Quick Links (Work, Services, Products, Tips & Tricks)
   - Col 3: Support (Home, About, Services, Blog, Contact)
   - Col 4: Navigation (Work, Services, Products, Tips & Tricks)
   - Bottom bar: copyright + "Made with ❤ by Component Dock" link

## Design tokens (from CSS)

| Token            | Value                                                         |
| ---------------- | ------------------------------------------------------------- |
| Font family      | "Inter", sans-serif                                           |
| Brand blue       | #42B5F2                                                       |
| Gradient button  | linear-gradient(to right, #ca42f2, #6a42f2, #4294f2, #42b5f2) |
| Hero bg          | linear-gradient(to bottom, #161a1a, rgba(38,41,41,0.99))      |
| Heading color    | #262929                                                       |
| Body text        | #6D6D6D                                                       |
| Section bg       | #F5F7F9                                                       |
| Footer bg        | #262929                                                       |
| Card border      | #DDE4E8, border-radius 8px                                    |
| Card hover bg    | #262929                                                       |
| Button radius    | 30px (pill shape)                                             |
| Button transform | uppercase                                                     |

## Fidelity notes

- The original uses Bootstrap grid — recreate with Tailwind flex/grid.
- Original has slick carousel for testimonials — use a simple CSS-based
  carousel or a lightweight React carousel.
- Numbered items (1,2,3) use SVG number icons — recreate as styled spans
  or lucide icons.
- The "finder" icons in About 2 are repeated SVG check/finder icons —
  use lucide CheckCircle or similar.
- The hero desktop screenshot is a product mockup — use a picsum
  placeholder with appropriate aspect ratio.
- The gradient button is the signature design element — must match the
  purple-to-blue gradient exactly.
- Pricing cards hover to dark (#262929) with text color inversion.
