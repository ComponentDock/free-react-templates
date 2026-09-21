# Template: GritBox (Health & Fitness — Crossfit/Gym)

## Purpose

Recreation of ColorLib **Crossfits** — a crossfit/gym landing page with hero slider, program carousel, trainer spotlight, exercise grid, testimonials, and footer.

- **Source slug:** `crossfits`
- **ColorLib URL:** https://colorlib.com/wp/template/crossfits/
- **Preview URL:** https://preview.colorlib.com/theme/crossfits/
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/crossfits-free-template.jpg
- **Stack:** React 19 · Vite · Tailwind CSS 4 · TypeScript
- **New name:** `gritbox` (no collision with existing apps or specs)

## Design Tokens (extracted from live preview CSS)

| Token               | Value                                              | Usage                                      |
|---------------------|----------------------------------------------------|--------------------------------------------|
| Font family         | "Work Sans" (300–700), sans-serif fallback         | Global body + headings                     |
| Display font        | "Amatic SC" (400, 700) — decorative/handwritten    | Hero heading, section accent text          |
| Brand primary       | `#fd7e14` (vibrant orange)                         | `.btn-primary` bg, active nav, heading underline, links |
| Dark background     | `#1e1e1c` (near-black warm)                        | Footer bg                                  |
| Section bg light    | `#f4f4f4` (light gray)                             | Alternating section backgrounds            |
| White               | `#fff`                                             | Navbar bg, card bg, text on dark           |
| Black               | `#000`                                             | Text, mobile nav overlay                   |
| Text primary        | `#000`                                             | Body text                                  |
| Text muted          | `rgba(0,0,0,0.6)`                                  | Nav links, secondary text                  |
| Border radius       | `30px` (pill shape)                                | Buttons (`.btn-primary`)                   |
| Card border radius  | `7px`                                               | Dropdown menus                             |
| Avatar radius       | `50%`                                               | Trainer/testimonial circular images        |
| Button shape        | Pill/rounded (`border-radius: 30px`), `.px-4` padding | Primary + outline CTAs                  |
| Button outline      | `btn-outline-primary` with `#fd7e14` border        | "Join Our Club" CTA                        |
| Heading underline   | 40px-wide orange bar (`:before` pseudo, `#fd7e14`)  | `.site-section-heading` decorations        |

### Section backgrounds

- **Hero:** Full-viewport parallax background images (OwlCarousel, 2 slides), dark overlay (`rgba(0,0,0,0.6)`), centered white text
- **Popular Program:** White/transparent section, owl-carousel of image+text overlay cards
- **The Club:** White section, split layout (image left 6-col, text right 5-col)
- **Featured Trainer:** Full-width parallax bg image with dark overlay, centered content
- **Crossfit Exercises:** White section, 3×2 grid of bordered icon cards
- **Testimonies:** `#f4f4f4` light gray bg, owl-carousel of testimonial blocks with circular avatars
- **Footer:** `#1e1e1c` dark bg, 3-column layout (About, Quick Menu + Program, Social Icons), copyright line

## Gherkin Requirements

### Navbar
- **Given** the user loads the page, **when** the viewport renders, **then** a white navigation bar appears with the brand "GritBox" (logo: regular + bold word) on the left
- **Given** the navbar, **when** the user sees the links, **then** they see: Program (dropdown), Our Trainers, News, About, Contact
- **Given** the Program dropdown, **when** the user hovers, **then** a nested dropdown appears with: Body Building, Morning Energy, Stretching, Sub Menus (Swimming, Boxing, Running, Jogging)
- **Given** the navbar, **when** the viewport is mobile, **then** a hamburger toggle appears that opens a slide-in mobile menu with black overlay

### Hero Slider
- **Given** the page loads, **when** the hero renders, **then** an OwlCarousel-style slider shows full-viewport background images with dark overlay
- **Given** slide 1, **when** it renders, **then** the heading reads "Welcome To GritBox" with caption "Find The Healthy Way" in white centered text
- **Given** slide 2, **when** it renders, **then** the heading reads "Optimize Your Health" with caption "Effective Program"
- **Given** the slider, **when** auto-rotation occurs, **then** slides transition with a fade animation

### Popular Program
- **Given** the user scrolls to the programs section, **when** the heading renders, **then** it reads "Popular Program" with an orange underline decoration
- **Given** the programs section, **when** the carousel renders, **then** 6 program cards appear: Body Building, Body Combat, Push Up, Weight Lifting, Body Combat (x2)
- **Given** each program card, **when** it renders, **then** it shows a background image with an overlaid body containing a title, description paragraph, and orange "Learn More" pill button
- **Given** the carousel, **when** the user navigates, **then** cards scroll horizontally with owl-carousel behavior

### The Club
- **Given** the user scrolls to the club section, **when** the layout renders, **then** a split layout appears: image on the left (6 cols), text on the right (5 cols)
- **Given** the club section, **when** the heading renders, **then** it reads "The Club"
- **Given** the club section, **when** the text renders, **then** two paragraphs of description appear with a "Join Our Club" outline-primary pill button

### Featured Trainer
- **Given** the user scrolls to the trainer section, **when** the parallax background renders, **then** a full-width background image appears with a dark overlay
- **Given** the trainer section, **when** the content renders, **then** a circular trainer photo appears centered above the name "Shane Green"
- **Given** the trainer section, **when** the quote renders, **then** a blockquote testimonial appears in white text
- **Given** the trainer section, **when** the CTA renders, **then** an orange "Make Me Your Trainer" pill button appears centered

### Crossfit Exercises
- **Given** the user scrolls to the exercises section, **when** the heading renders, **then** it reads "Crossfit Exercises" with an orange underline decoration
- **Given** the exercises section, **when** the grid renders, **then** a 3×2 grid of bordered icon cards appears
- **Given** each exercise card, **when** it renders, **then** it shows an orange icon, a title, a description, and a "Learn More" link
- **Given** the exercise titles, **when** they render, **then** they are: Weight Lifting, Walking Exercise, Belly Crunches, Weight Lifting Partner, Exercise Rolling, Lunge Plunk

### Testimonies
- **Given** the user scrolls to the testimonials section, **when** the section renders, **then** a light gray (`#f4f4f4`) background appears
- **Given** the testimonials section, **when** the heading renders, **then** it reads "Testimonies" with an orange underline decoration
- **Given** the testimonials carousel, **when** items render, **then** each shows a circular avatar photo, a name, and a blockquote
- **Given** the testimonial names, **when** they render, **then** they are: Katie Johnson, Jane Mars, Shane Holmes, Mark Johnson

### Footer
- **Given** the user scrolls to the footer, **when** the dark section renders, **then** a `#1e1e1c` background appears
- **Given** the footer layout, **when** the columns render, **then** they show: About (description + "Read More" button), Quick Menu (Home, About, Our Trainers, News, Contacts, The Club, Privacy), Program (Body Building, Morning Energy, Stretching, Weight Lifting), Social Icons (Facebook, Twitter, Instagram, Vimeo)
- **Given** the footer, **when** the copyright line renders, **then** it shows the current year and "Component Dock" attribution link (replacing Colorlib attribution)
- **Given** the footer, **when** links are rendered, **then** they use `rgba(255,255,255,0.3)` color with white on hover

## Verification Checklist

- [ ] Navbar renders with brand, dropdown, and mobile hamburger
- [ ] Hero slider auto-rotates between 2 slides with fade transition
- [ ] Popular Program carousel shows 6 program cards with image overlays
- [ ] The Club section renders split layout (image + text + CTA)
- [ ] Featured Trainer shows parallax bg, circular photo, quote, CTA
- [ ] Exercises grid shows 3×2 bordered icon cards
- [ ] Testimonials carousel shows 4 items with circular avatars
- [ ] Footer has 3 columns, social icons, copyright with Component Dock link
- [ ] All sections use orange `#fd7e14` brand color consistently
- [ ] Buttons are pill-shaped (border-radius: 30px)
- [ ] Section headings have orange underline bar decoration
- [ ] Parallax backgrounds render with dark overlays
- [ ] No ColorLib references in app code
- [ ] `public/CNAME` contains `gritbox.free.componentdock.com`
- [ ] `homepage` in `package.json` set correctly
