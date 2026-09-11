# Consilium — Prep Notes

Source: ColorLib Consula — https://colorlib.com/wp/template/consula/
Preview: https://preview.colorlib.com/theme/consula/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/consula-free-template.jpg
New name: consilium

## Structure order (top to bottom)

1. TopBar (social icons left, phone + email right, bg-light)
2. Header/Navbar (sticky, white bg, logo "Consilium.", 7 nav links)
3. Hero (bg-image overlay, heading + subtext + CTA button)
4. About (2-col: image with experience badge | text + Learn More)
5. Team (3-col: circular photo, name, position, desc, social icons)
6. How It Works (3-col: Innovate/Create/Scale + checkmark lists)
7. Services (bg-light, border-bottom, 6 icon+text cards)
8. Testimonials (carousel, quote + photo + name)
9. Features (2-col: image | text + 2 capability cards)
10. Blog (3-col: img, title, meta, excerpt, "Continue Reading")
11. Contact (bg-light: form card | info card)
12. CTA Banner (full-width primary bg, "Let's Get Started")
13. Footer (dark bg: about, quick links, follow, newsletter, copyright)
14. Component Dock attribution (replaces Colorlib link)

## Section-by-section fidelity notes

### TopBar
- Left: 4 social icons (Facebook, Twitter, Instagram, LinkedIn) in a horizontal list
- Right: phone icon + number, envelope icon + email — hidden on small screens (d-none d-lg-inline-block)
- Background: bg-light (#f8f9fa)

### Navbar
- Sticky, white bg, z-index: 1999
- Logo: "Consilium." — "Consilium" in black, "." in #46ddb0 primary
- Desktop: horizontal nav links, right-aligned
- Mobile: hamburger icon (icon-menu) slides in a right-side drawer (300px wide)
- Active link color: #46ddb0
- Mobile menu: white bg, 300px width, right side, slide-in transform

### Hero
- Background image with dark overlay (overlay class — ~0.5 opacity)
- Content: left-aligned in a col-md-6 inside col-md-12
- H1: "We Are The Best Consulting Agency" (white text, large)
- Paragraph: white text, Lorem ipsum
- Button: "Get Started", btn-primary (#46ddb0 bg, white text, pill shape)
- AOS: fade-up with 400ms delay

### About
- Two columns: col-md-6 (image) + col-md-5 (text)
- Image: `about_1.jpg` with position-relative
- Experience badge: `.experience` overlay — "50 years" in year span, "of experience" caption. Positioned over image bottom-right with white bg + rounded
- Right side: section-sub-title "About Us" (small caps gray), section-title "Welcome To Consilium", paragraph, "Learn More" button (btn-black--hover: hover → #666666 bg + white text)

### Team
- Border-bottom separator
- Section center: "Team" subtitle, "Our Team" title
- 3 columns (col-md-6 col-lg-4)
- Each person card: circular photo (rounded-circle, w-50), h3 name, p.position.text-muted, description, social icons in ul.ul-social-circle
- Social icons: Facebook, Twitter, LinkedIn, Instagram
- AOS: fade with 100/200/300ms delays

### How It Works
- Section title: "How It Works"
- 3 columns: "Innovate", "Create", "Scale"
- Each: heading (text-black), paragraph, ul-check.primary (3 list items with checkmark icon in #46ddb0)

### Services
- bg-light, border-bottom
- 6 cards in 3-col grid (col-md-6 col-lg-4)
- Each card: .unit-4.d-flex — icon (left, mr-4, text-primary) + text block (h3, p, "Learn More" link)
- Icons from icomoon font (autorenew, backspace, av_timer, beenhere, business_center, cloud_done)
- AOS: fade-up with staggered delays (0–500ms)

### Testimonials
- Centered section: "People Says" subtitle, "Testimonials" title
- Owl Carousel (owl-carousel) with .slide-one-item
- Each slide: blockquote (p with curly quotes), figure with photo (w-50, rounded), name
- Background: white

### Features
- Two columns: col-md-6 (text) + col-md-5 (image)
- Lead paragraph text
- 2 feature items (col-md-12 col-lg-6): .unit-4 with icon (text-primary) + title + desc + "Learn More" link
- Items: "Web & Mobile Specialties" (icon-adb), "Intuitive Thinkers" (icon-assignment)

### Blog
- Centered: "Blog" subtitle, "Our Blog Posts" title
- 3-column blog cards (.h-entry)
- Each: img (fluid), h2.title link, .meta (author + bullet + date + bullet + category link), excerpt, "Continue Reading..." link

### Contact
- bg-light section
- Centered: "Services" subtitle, "Our Services" title (note: original has inconsistent "Services" label here)
- Left col-md-7: white card form (p-5 bg-white) — First Name, Last Name (side by side), Email, Subject, Message (textarea), "Send Message" button (btn-primary)
- Right col-md-5: white card (p-4 mb-3 bg-white) — Address, Phone, Email Address (bold labels, plain values)
- Form inputs: pill-shaped (border-radius: 30px, height: 43px), focus border → #46ddb0

### CTA Banner
- Full-width link (a tag), bg-primary (#46ddb0), py-5
- Container > row > col-md-10 > h2 "Let's Get Started" (white text)

### Footer
- site-footer, dark bg (#333333), 4em/8em padding
- 3 main columns (col-md-9) + 1 right column (col-md-3)
- Left: About Us heading + paragraph, Quick Links (About Us, Services, Testimonials, Contact Us), Follow Us (4 social icon links)
- Right: "Subscribe Newsletter" heading, form with email input (bg-transparent, border-secondary, text-white) + Send button (btn-primary)
- Bottom: copyright line + attribution → REPLACE with "Made with ❤ by Component Dock" linking to https://www.componentdock.com/

## Placeholder images (use picsum.photos)

| Slot | Original | Picsum seed |
|---|---|---|
| Hero bg | hero_2.jpg | picsum.photos/seed/consilium-hero/1920/1080 |
| About image | about_1.jpg | picsum.photos/seed/consilium-about/800/600 |
| Team member 1 | person_2.jpg | picsum.photos/seed/consilium-team1/400/400 |
| Team member 2 | person_3.jpg | picsum.photos/seed/consilium-team2/400/400 |
| Team member 3 | person_4.jpg | picsum.photos/seed/consilium-team3/400/400 |
| Features image | about_1.jpg (reuse) | picsum.photos/seed/consilium-feat/800/600 |
| Blog image 1 | img_1.jpg | picsum.photos/seed/consilium-blog1/800/500 |
| Blog image 2 | img_2.jpg | picsum.photos/seed/consilium-blog2/800/500 |
| Blog image 3 | img_1.jpg (reuse) | picsum.photos/seed/consilium-blog3/800/500 |
| Testimonial photo 1 | person_3.jpg | picsum.photos/seed/consilium-test1/400/400 |
| Testimonial photo 2 | person_2.jpg | picsum.photos/seed/consilium-test2/400/400 |
| Testimonial photo 3 | person_4.jpg | picsum.photos/seed/consilium-test3/400/400 |
| Testimonial photo 4 | person_4.jpg | picsum.photos/seed/consilium-test4/400/400 |

## Dependencies

- Google Fonts: Roboto (weights 300, 400, 900) — load via `<link>` in index.html
- Icons: Use lucide-react (replace icomoon icon font with Lucide equivalents)
  - Social: Facebook, Twitter, Instagram, Linkedin
  - Phone, Mail, Menu, X (close)
  - Services: RefreshCw, Clock, MapPin, Briefcase, Cloud, ArrowRight
  - Features: Smartphone, Lightbulb
- Animations: CSS fade-in or framer-motion (optional, replaces AOS)
- Carousel: Implement with CSS scroll-snap or a lightweight React carousel (embla-carousel)

## Implementation tips

- The original uses Bootstrap 4 grid — translate to Tailwind grid/flex utilities
- The "experience" badge overlay needs position-absolute over the about image
- Newsletter form in footer has transparent inputs with white text — use Tailwind's bg-transparent + text-white + border-secondary
- The dropdown nav uses visibility/opacity transitions — can implement with Tailwind group-hover
- Mobile menu is a right-side slide-in panel — use translate-x with transition
