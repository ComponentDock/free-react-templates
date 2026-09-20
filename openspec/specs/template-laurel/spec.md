---
name: laurel
description: Education/courses template recreation of ColorLib Educrown
colorlib_slug: educrown
colorlib_url: https://colorlib.com/wp/template/educrown/
preview_url: https://preview.colorlib.com/theme/educrown/
new_name: laurel
package_name: '@free-react-templates/laurel'
category: Education
---

# Laurel — Education Template Spec

Recreation of ColorLib Educrown (https://colorlib.com/wp/template/educrown/).

## Design Tokens (extracted from preview CSS)

- **Font**: Poppins (400, 500, 600, 700) via Google Fonts
- **Primary**: #31dc89 (green)
- **Primary light**: #d3ffea
- **Accent**: #0be27a (bright green)
- **Dark**: #171932
- **Body text**: #777777
- **Heading text**: #222222
- **Background white**: #ffffff
- **Gray bg**: #f8f9fa
- **Shadow**: 0 7px 7px #c7c7c7
- **Border radius**: 5-10px
- **Section padding**: 100px (80px top/bottom)

## Sections (in order)

1. **Navbar** — Logo + nav links: Home, Features, Courses, Testimonial, Blog, FAQs, Contact. Sticky on scroll.
2. **Hero** — Full-screen background image with overlay, heading "Develop a passion for learning new things.", subtitle, search input with icon button.
3. **Features** — 4 feature cards in a row with icons (GraduationCap, Users, Rocket, Settings), titles (Certificate, Expert Instructors, Learn from anywhere, Quality Service), descriptions. Cards have white bg, shadow, raised above hero.
4. **About/Trust** — Centered text "Laurel is trusted by 50,000+ students." with description paragraph.
5. **Fun Facts** — Dark background with stats counter: 20k Graduated Students, 124 Expert Instructors, 600k Books in library, 15k Students get employed.
6. **Courses** — 4 course cards in grid: image, title, description, "Enroll the Courses" button + price ($29.99). Cards have rounded corners, shadow.
7. **About Video** — Left: heading "Education is the foundation..." + description. Right: video thumbnail with play button overlay.
8. **Testimonials** — Dark/green bg section. Quote, author image, name, designation. Slider with multiple testimonials.
9. **Blog** — 3 blog cards: image, title, date, author. Grid layout.
10. **FAQs** — 6 FAQ items in 3-column grid with questions and descriptions.
11. **Contact** — Map area (placeholder) + contact form (Name, Email, Subject, Message, Send button).
12. **Clients** — Logo carousel of partner/client logos (placeholder).
13. **Admission CTA** — "Ready to start?" banner with description and Apply Now button.
14. **Footer** — Dark bg. Logo + description, quick links, newsletter subscription form, copyright with Component Dock link.

## Component Architecture

```
src/
  App.tsx
  index.css (Tailwind + theme tokens)
  components/
    Navbar.tsx
    Hero.tsx
    Features.tsx
    TrustBanner.tsx
    FunFacts.tsx
    Courses.tsx
    AboutVideo.tsx
    Testimonials.tsx
    Blog.tsx
    FAQs.tsx
    Contact.tsx
    Clients.tsx
    AdmissionCTA.tsx
    Footer.tsx
```

## Requirements

- All images use picsum.photos with seed placeholders
- All icons use lucide-react (no brand icons — use inline SVG for social)
- Footer MUST link https://www.componentdock.com/ branded "Component Dock"
- No references to ColorLib in app source code
- 100% test coverage enforced
- Uses packages/ui components (Button, ButtonLink) where applicable
