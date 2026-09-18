# Discoverly — Implementation Tasks

Recreation of ColorLib "Listed2" directory/listing template.
Source: https://colorlib.com/wp/template/listed2/
Preview: https://preview.colorlib.com/theme/listed2/

## Section order (1:1 fidelity)

1. **Navbar** — sticky top bar, "Discoverly" brand, anchor links, dark-mode toggle
2. **Hero** — full-width bg image, H1 heading, description, "Sign Up" CTA
3. **Most Visited Places** — heading + 3 listing cards (image, title, description)
4. **Popular Categories** — heading + category grid (icon, name, count)
5. **Why Us** — heading + feature items (icon, title, description)
6. **Testimonials** — heading + testimonial cards (quote, name, role)
7. **Our Blog** — heading + blog cards (image, title, date, description)
8. **How To List Your Property** — heading + numbered steps
9. **FAQ** — heading + expandable accordion items
10. **CTA** — "Let's get started" heading + "Sign Up" button
11. **Footer** — columns (Quick Links, Products, Features), Follow Us, Newsletter form, ComponentDock link

## Design tokens

- Primary: #7971ea (violet), dark: #645be7
- Accent: #f23a2e (red), green: #8bc34a
- Body text: #25262a, headings: #000, on-primary: #fff
- Backgrounds: #f8f9fa, #f4f5f9, #e9ecef
- Font: Quicksand (Google Fonts)
- Border-radius: 4px (cards), 30px (pill buttons), 7px (inputs), 50% (avatars)
- Background images: hero bg (picsum placeholder)

## Fidelity notes

- Match section order exactly as listed above
- Use Quicksand font from Google Fonts (link in index.html)
- Violet #7971ea as primary — all buttons, links, accents
- Pill-shaped buttons (border-radius: 30px) for CTAs
- Cards with subtle border-radius (4px) and light backgrounds
- FAQ section uses expand/collapse pattern (aria-expanded, toggle state)
- Testimonials on light background (#f8f9fa)
- Footer has dark background with white text
- Newsletter form: email input + submit button, prevent default
- Placeholder images via picsum.photos/seed/discoverly-<n>/<w>/<h>
- Icons via lucide-react
- No ColorLib references in app code; provenance only in spec
- Footer links to componentdock.com

## Component plan

- src/components/Navbar.tsx
- src/components/Hero.tsx
- src/components/MostVisited.tsx
- src/components/PopularCategories.tsx
- src/components/WhyUs.tsx
- src/components/Testimonials.tsx
- src/components/Blog.tsx
- src/components/HowToList.tsx
- src/components/FAQ.tsx
- src/components/CallToAction.tsx
- src/components/Footer.tsx
