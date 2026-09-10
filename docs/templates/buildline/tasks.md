# BuildLine — Implementation Tasks

**Source:** Consto (https://colorlib.com/wp/template/consto/)
**Preview:** https://preview.colorlib.com/theme/consto/
**New name:** buildline
**Category:** Construction / Contractor

## Structure order (section-by-section)

The template renders top-to-bottom in this order:

1. **Top header bar** — three-segment layout (dark logo | white nav | orange phone)
2. **Hero slider** — full-width bg image, left text + CTA, right translucent promo bar
3. **About section** — white bg, two-column (image left, text right)
4. **Services section** — dark bg image, left title + CTA, right 3 service cards
5. **Projects carousel** — centered heading, owl-carousel of project cards with overlay
6. **More Projects CTA** — dark bg, centered "All Project" outlined button
7. **Testimonials** — dark bg (`#2D0A31`), carousel with quotes + founder info
8. **Contact form** — dark bg, form with name/email/topic/message + submit
9. **CTA banner** — "Any help needed?" with "Contact Us" outlined button
10. **Footer** — light gray bg, 4-column layout + newsletter + copyright

## Design fidelity notes

### Header
- Three-segment split: left = dark block with logo, middle = white with nav links, right = orange (`#FF5E14`) with phone
- Sticky on scroll
- Mobile: collapse to hamburger

### Hero
- Full-width background image with dark overlay for text readability
- Left-aligned: large white heading, lighter subtext, orange CTA button (sharp corners)
- Right sidebar: translucent orange (`rgba(255, 94, 20, 0.2)`) with secondary "Explore Now" CTA
- Use a carousel/slider for multiple hero slides (match original owl-carousel behavior)

### About
- White background
- Two-column: large image left (with orange border accent on front image), text right
- Section title with no underline (unlike some other ColorLib templates)
- "Learn More" button — primary orange style

### Services
- Dark background section with background image overlay
- Left column: section title + description + "Get Free Quote" primary button
- Right column: 3 service cards (image + h5 title + description + "Explore Now" browse link)
- Browse links use animated orange underline on hover
- Services: General Contracting, Project Planning, Interior Design

### Projects
- Centered heading "Projects we have Done" with subtext
- Carousel of project cards, each with:
  - Full image
  - Dark overlay at bottom with title + "View Project" pill button (`border-radius: 25px`)
- Below carousel: centered "All Project" outlined button (`border: 1px solid #FF5E14`)

### Testimonials
- Dark purple-plum background (`#2D0A31`)
- Carousel of testimonials, each with:
  - Quote icon (use lucide-react Quote icon)
  - Quote text in italics
  - Founder avatar + name + role
- Use a carousel/slider

### Contact
- Dark background section with background image
- Form with: name input, email input, topic select/dropdown, message textarea, "Send Message" button
- Left-aligned form (not centered)

### CTA Banner
- Dark background (`#2D0A31` via background image overlay)
- "Any help needed?" heading + subtext
- "Contact Us" outlined button (`border: 1px solid #FF5E14`)

### Footer
- Light gray background (`#F5F6F7`)
- 4-column layout:
  1. Logo + description + phone + email + social icons (Twitter, Facebook, LinkedIn, Pinterest)
  2. Navigation links (Home, About, Services, Blog, Contact)
  3. Services links (Drone Mapping, Real State, Commercial, Construction)
  4. Newsletter subscription (email input + submit icon button)
- Copyright bar at bottom with Component Dock link

## Component breakdown

| Component | File | Notes |
|-----------|------|-------|
| TopBar | `src/components/TopBar.tsx` | Three-segment header with logo, nav, phone |
| Hero | `src/components/Hero.tsx` | Slider with bg image, text, CTA, right sidebar |
| About | `src/components/About.tsx` | Two-column with image + text |
| Services | `src/components/Services.tsx` | Dark bg with 3 service cards |
| Projects | `src/components/Projects.tsx` | Carousel of project cards |
| Testimonials | `src/components/Testimonials.tsx` | Dark bg carousel with quotes |
| ContactForm | `src/components/ContactForm.tsx` | Form with name/email/topic/message |
| CtaBanner | `src/components/CtaBanner.tsx` | "Any help needed?" CTA |
| Footer | `src/components/Footer.tsx` | 4-column footer + newsletter |

## Image placeholders

| Use | Placeholder URL |
|-----|-----------------|
| Hero bg | `https://picsum.photos/seed/buildline-hero/1920/800` |
| About image | `https://picsum.photos/seed/buildline-about/800/600` |
| Service images | `https://picsum.photos/seed/buildline-svc-1/600/400` (etc.) |
| Project images | `https://picsum.photos/seed/buildline-proj-1/600/400` (etc.) |
| Testimonial avatar | `https://picsum.photos/seed/buildline-avatar-1/80/80` (etc.) |
| Footer bg | `https://picsum.photos/seed/buildline-footer-bg/1920/400` |

## Pitfalls to watch

1. **Three-segment header** is unusual — most templates have a simple centered
   nav. Pay attention to the dark logo block + white nav + orange phone layout.
2. **Section-bg2 uses `data-background` attribute** for background images, not
   CSS `background-image` inline styles. In React, use inline `style` or a
   custom hook for lazy background loading.
3. **Service cards have large images** next to small text — make sure the grid
   layout matches the original 7/5 column split.
4. **Projects carousel** needs a slider component — consider using a simple CSS
   snap scroll or a lightweight carousel to avoid heavy dependencies.
5. **Contact form** uses a topic dropdown — make sure the select element is
   styled consistently with the rest of the form.
6. **Newsletter in footer** has an icon-only submit button — match with a lucide
   Send icon.
