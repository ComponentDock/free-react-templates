# Prismark — Implementation Notes

## Source
- ColorLib: Jonson
- Preview: https://preview.colorlib.com/theme/jonson/
- New name: prismark

## Section order (from preview DOM)

1. **Navbar** — transparent, sticky; Logo + nav links (Home, About, Portfolio, Blog [dropdown], Contact) + "Let's Talk" CTA button
2. **Hero** — cream background (#FFEFAE); large name "Prismark" + "Digital Product Designer" + animated headline cycling company names
3. **About** — two-column: left = heading "About" + 2 bio paragraphs; right = about image; bottom = 3 stat cards (06 years, $40M+, Multiple awards)
4. **Experience** — two sub-sections: "Experience" heading with 3 work entries (role, date, company link) + "Education" heading with 2 education entries
5. **Expertise** — cream background (#FFEFAE); heading "My Expertise" + 3 service cards (Experience Design, Interaction Design, Front-end Design)
6. **Gallery** — heading "Selected Portfolios" + 4 portfolio images in 2x2 offset grid with hover overlay (circular plus icon)
7. **Footer CTA** — heading "Do you want to know more about me?" + "Download CV" button
8. **Contact Form** — heading "Contact Me" + form (name, email, subject, message textarea, "Send Message" submit)
9. **Footer Bottom** — social links (Twitter, Facebook, Pinterest, Globe, Instagram) + copyright + Component Dock link

## Design notes

- **Hero background:** solid cream (#FFEFAE), no image — text-only hero
- **Header:** transparent, becomes sticky on scroll; white bg when scrolled
- **Buttons:** sharp corners (border-radius 0), maroon bg (#670000) with cream text, hover gradient
- **Submit button:** cream bg (#FFEFAE), maroon text, full-width, 60px height
- **Expertise cards:** white bg, no border-radius, no icons — just heading + text
- **Gallery:** 2-column offset grid (offset-xl-1 on first column), images with hover overlay, circular icon
- **Footer top:** maroon/dark background area for CTA
- **Footer bottom:** dark background, social icons in maroon, copyright text

## Component structure

```
apps/prismark/src/
  main.tsx
  App.tsx
  index.css
  components/
    Navbar.tsx
    Hero.tsx
    About.tsx
    Experience.tsx
    Expertise.tsx
    Gallery.tsx
    FooterCta.tsx
    ContactForm.tsx
    Footer.tsx
  test/
    setup.ts
```

## Fidelity notes

- Match section order exactly as listed above
- Animated headline: use CSS keyframe animation for cycling text (no heavy JS library)
- Gallery overlay: use Tailwind group-hover for the hover effect
- Stat cards: simple text layout, no progress bars or charts
- Contact form: basic form with placeholders, no validation logic needed (just the visual)
- Social icons: use lucide-react equivalents or inline SVGs
- Use picsum.photos/seed/prismark-1 through prismark-4 for gallery images
- Use picsum.photos/seed/prismark-about for the about image
