# Taskfly — Implementation Notes

## Source

- **ColorLib template:** Virtualassistant
- **Preview:** https://preview.colorlib.com/theme/virtualassistant/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/virtualassistant-free-template.jpg

## Section order (implementation sequence)

1. **Navbar** — `Navbar.tsx`
   - Dark solid background (`bg-black`), brand text, 7 nav links, CTA button
   - Use `cn()` for nav link hover states
   - CTA: `btn-primary` → `bg-blue-500 hover:bg-blue-600 text-white`

2. **Hero** — `Hero.tsx`
   - Full-width section with dark overlay (`bg-black/60`) over placeholder image
   - Headline: "Save Your Precious Time & Outsource Daily Tasks"
   - Mouse scroll indicator (CSS animation, small mouse icon with scrolling wheel)

3. **About** — `AboutSection.tsx`
   - Two-column split: image left, text right
   - Heading: "Top Reason Why We Need to Get Virtual Assistant"
   - 4 items with lucide-react icons (Clock, Target, Scale, Zap or similar)
   - Fidelity: keep the asymmetric column layout (7/5 or 6/6)

4. **Services** — `ServicesSection.tsx`
   - Heading: "Our Services & Offers"
   - 2-column × 4-row grid of service cards
   - Each card: icon (lucide-react), title, short description, "Get Started" button
   - Green accent `#21bf73` on icons
   - Cards: white bg, slight shadow, `rounded` border

5. **Comparison** — `ComparisonSection.tsx`
   - Heading: "Get Your Own Highly Skilled Virtual Assistant"
   - Two-column: left = "Regular Office Employee" (75% bar), right = "Virtual Assistant Employee" (higher %)
   - Animated progress bars with blue primary color

6. **HowItWorks** — `HowItWorksSection.tsx`
   - Heading: "How It Works"
   - 4-column layout, each with icon + title
   - Steps: Handling The Task, Creating To-Do List, Schedule A Meeting, Affordable Packages

7. **Testimonials** — `TestimonialsSection.tsx`
   - Parallax-style background image (use `bg-fixed` or `bg-attachment-fixed`)
   - Testimonial cards with quotes, names, and avatar images (picsum)

8. **Blog** — `BlogSection.tsx`
   - Heading: "Recent Blog"
   - 3-column card grid
   - Each card: thumbnail (picsum), date, author badge, post title link
   - All posts share the same title "Why Lead Generation is Key for Business Growth" (paraphrase for variety)

9. **Contact** — `ContactSection.tsx`
   - Full-width background image section
   - Heading: "Send a Message & Get in touch!"
   - Form: Name, Email, Subject, Message textarea, Submit button
   - Use zod + react-hook-form for validation

10. **Footer** — `Footer.tsx`
    - Dark background, 4-column grid
    - Col 1: Brand + short description
    - Col 2: Explore (About, Contact, What We Do, Plans & Pricing)
    - Col 3: Company (About Us, Blog, Contact, Careers)
    - Col 4: Contact info (address, phone) + "Have a Questions?"
    - Bottom: "Made with Component Dock" linking to componentdock.com

## Design token mapping (Tailwind @theme)

```
--color-primary: #007bff;        /* Bootstrap blue — buttons, links */
--color-primary-hover: #0069d9;  /* Darker blue for hover */
--color-accent: #21bf73;         /* Green accent — icons, highlights */
--color-accent-light: #8eebbe;   /* Light green */
--color-surface: #ffffff;        /* Card / section bg */
--color-surface-alt: #f7f7f7;    /* Alternating section bg */
--color-dark: #000000;           /* Navbar, overlays, footer */
--color-text: #1a1a1a;           /* Body text */
--color-text-muted: #999999;     /* Meta text */
```

## Key fidelity notes

- The original uses Bootstrap 4 grid. Recreate with Tailwind grid/flex utilities.
- Font Awesome icons → replace with lucide-react equivalents.
- Owl Carousel (testimonials) → use a simple CSS-only or minimal carousel.
- Parallax backgrounds: `bg-fixed` on the testimonials section.
- No actual form submission — form is visual only with client-side validation.
- All images use `picsum.photos/seed/<template>-<n>/<w>/<h>` for deterministic placeholders.
