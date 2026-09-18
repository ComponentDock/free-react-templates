# Smilewell — Task Outline

## Template

- **New name:** Smilewell
- **Original:** ColorLib "Toothsy" (https://colorlib.com/wp/template/toothsy/)
- **Preview:** https://preview.colorlib.com/theme/toothsy/

## Sections (in order)

1. Header — sticky white bg, split-color logo "Smilewell" (first part cyan, second dark), nav: Home/Services/About Us/Doctors/Testimonials/Blog/Contact, active cyan underline
2. Hero/Welcome — full-width split layout: text left ("Welcome To Smilewell" subtitle, "We Care For Your Smile" cyan heading, description, "Contact Us" cyan button), large smile image right
3. Services — white bg, subtitle "All Kind Of Services", heading "Dental Services", 6 cards in 3x2 grid: Tooth Extraction, Tooth Fillings, Braces Install, Children Clinic, Tooth Cleaning, Patient Records
4. About/Stats — cyan-to-blue gradient bg, video popup placeholder, 4 stat counters: 8+ Experience, 15+ Doctors, 320+ Health Sections, 1500+ Happy Smiles
5. Team — white bg, subtitle "Expert Doctors", heading "Meet Our Team", 3 cards: Bob Carry (Doctor), Jean Smith (Doctor), Ricky Fisher (Dentist) — each with photo, role, desc, social icons
6. Testimonials — light bg #f4f5f9, subtitle "Happy Client Says", heading "Testimonial", carousel with 4 quotes: Ricky Fisher, Ken Davis, Mellisa Griffin, Robert Steward
7. Blog — white bg, subtitle "Latest Blog Posts", heading "Our Blog", split: left featured post "Every Smile Is Precious" + right 4 compact entries
8. Contact — light bg, subtitle "Get In Touch", heading "Contact Us", split: left form (first/last name, email, message, "Send Message" button) + right "Need a call for presentation?" text
9. Footer — dark #333333, 3 columns: About Us text, Features links, Newsletter form + Follow Us social icons; bottom bar with copyright + Component Dock link

## Design Tokens

- Primary cyan: #51eaea (buttons, headings, logo, active nav)
- Secondary blue: #499bea (gradient endpoint, hover)
- Gradient: #51eaea → #499bea (about/stats section)
- Dark: #333333 (footer)
- Dark text: #212529 / #25262a
- Medium text: #737373 / #939393
- Light bg: #f4f5f9 / #f8f9fa
- Font: Nunito (Google Fonts)
- Buttons: sharp corners (no radius), cyan bg white text, py-3 px-5
- Section subtitle: small uppercase gray text above heading

## Fidelity Notes

- Hero is NOT a slider — it's a static split layout with image on right
- About section has a video popup placeholder (play button centered on gradient)
- Stats numbers should animate with count-up on scroll intersection
- Scroll animations (fade-up) on service cards, team cards — use AOS or intersection observer
- Blog layout: left col = featured post with image, right col = 4 compact text-only entries
- Testimonials use owl-carousel (implement as React carousel)
- Contact form: 2-column name fields, full-width email, textarea, submit button
- Footer newsletter: email input + subscribe button in input group
- No ColorLib references in app code; provenance only in spec + TEMPLATES.md

## Status

- [x] Spec written and validated
- [ ] Components implemented
- [ ] Tests written
- [ ] Per-app gate passed
