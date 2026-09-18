# Pranava — Design Notes & Implementation Tasks

## Source
- ColorLib template: Namaste
- Preview: https://preview.colorlib.com/theme/namaste/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/namaste-free-template.jpg

## Section Order (top to bottom)
1. Header (logo + social icons + nav menu)
2. Hero (bg image, heading, paragraph, CTA, floating figure)
3. Courses (3-column grid: Yoga, Hatha, Pilates)
4. Meditation (bg image, text + CTA left, floating image right)
5. Timetable (schedule list left, progress bars right)
6. Testimonial (bg image, quote icon, text, author, decorative figures)
7. Contact (map left, info right)
8. Gallery (carousel of 5 images)
9. Footer (gradient bg, icon, Component Dock link)

## Design Tokens (quick reference)
- Font: Montserrat (Google Fonts)
- Headings: #493365 (deep purple)
- Body text / spans: #938e99 (muted mauve)
- CTA button: #f7ffa0 bg, #493365 text, 9px radius, uppercase bold
- Gradient: #7364b0 → #ffb8e7 (purple to pink) — used on footer, active states, progress bars
- Dark button: #5a496a bg, white text
- Section padding: 99px top/bottom (spad)
- Subtitle labels: 12px uppercase, 1px letter-spacing

## Component Breakdown

### Header
- Logo image (left-aligned)
- Social icon links: Pinterest, Facebook, Twitter, Dribbble, Behance
- Nav menu: Home (active), About Us, Classes, Blog, Contact

### Hero
- Full-width bg image via background-image
- Centered content: decorative icon, heading with accent span, paragraph, CTA
- Floating hero figure at bottom-right (absolute or relative positioning)

### Courses
- 3-column grid (col-md-4 each)
- Each card: flaticon icon, "Beginner & Advanced" span, h4 title, p description
- No borders or shadows — clean text cards

### Meditation
- Full-width bg image section
- Left content (lg-7): subtitle span, h4 heading, paragraph, CTA button
- Right: floating meditation figure image

### Timetable
- Split row: lg-5 schedule, lg-7 text + progress bars
- Schedule: 7 `<li>` items, each with `<span>` day name + time text
- Progress bars: 3 items, each with percentage label, animated fill

### Testimonial
- Full-width bg image section
- Centered: quote icon img, subtitle span, heading
- Centered testimonial paragraph + author name (h6) + subtitle (span)
- Two decorative figure images positioned left and right

### Contact
- Split row: map iframe (col-lg-6) + info card (col-lg-6 offset-lg-6)
- Info: subtitle, heading, paragraph, "Information" subheading, 3-item list

### Gallery
- Owl-carousel horizontal slider
- 5 gallery item images

### Footer
- Gradient bg (#7364b0 → #ffb8e7)
- Centered: footer icon img, copyright text with Component Dock link

## Implementation Tasks
1. Create `apps/pranava/` from a minimal app template (e.g. copy apps/abode)
2. Set up `src/index.css` with Tailwind entry + @theme tokens (#493365, #938e99, #f7ffa0, #7364b0, #ffb8e7, #5a496a)
3. Add Google Fonts link for Montserrat in `index.html`
4. Build `src/components/Header.tsx`
5. Build `src/components/Hero.tsx`
6. Build `src/components/Courses.tsx`
7. Build `src/components/Meditation.tsx`
8. Build `src/components/Timetable.tsx`
9. Build `src/components/Testimonial.tsx`
10. Build `src/components/Contact.tsx`
11. Build `src/components/Gallery.tsx`
12. Build `src/components/Footer.tsx`
13. Compose all in `src/App.tsx`
14. Write tests for each component (TDD: test first)
15. Run `scripts/verify-app.sh pranava` for local gate
16. Commit, PR, merge, deploy

## Fidelity Notes
- Match the original's section order exactly (Header → Hero → Courses → Meditation → Timetable → Testimonial → Contact → Gallery → Footer)
- Hero "CHI" text should be in the accent/lime color (#f7ffa0 or gradient)
- Progress bars should animate on scroll or on load
- Gallery should use a carousel (Embla or similar) — owl-carousel is jQuery-based
- Contact map: use a placeholder Google Maps embed or a static map image
- All images: use picsum.photos with deterministic seeds
- Footer: replace Colorlib attribution with "Component Dock" link
- Social icons: use lucide-react icons instead of Font Awesome
- Flaticon icons in courses: use lucide-react equivalents (YinYang, Sparkles, Activity or similar)
