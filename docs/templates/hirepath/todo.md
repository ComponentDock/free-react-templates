# HirePath — Prep Notes

Source: ColorLib **Careers** (slug: `careers`)
Preview: https://preview.colorlib.com/theme/careers/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/careers-free-template.jpg

## Structure order (section-by-section)

1. **Navbar** — Sticky top nav. Logo left, 5 nav links center, Contact Us button right. Mobile hamburger. Copy nav links from preview: Home, Job Listings, About, Services, Blog.

2. **Hero** — Full-width background image with blue overlay (`rgba(22, 68, 186, 0.9)`). Centered headline + subtitle. 4-column search form: text input (job title), 2 selects (location, category), primary blue full-width button. Use `picsum.photos/seed/hirepath-hero-1/1920/1080` for background.

3. **Statistics** — Same hero background with blue overlay. Title "Careers Statistics" + subtitle. 4 counter cards in a row: Candidates (1930), Jobs Posted (54), Jobs Filled (120), Companies (550). Animated count-up on scroll (use IntersectionObserver).

4. **Job Listings** — White background. Title "109,234 Job Listed". Job cards: thumbnail (2-col), info (4-col with badge + title + meta), location (3-col), salary (3-col right-aligned). 3 sample jobs with different types (Freelancer, Full-time, Remote). Badge colors: primary blue for Freelancer, warning/yellow for Full-time, success/green for Remote.

5. **Company Logos** — White background with top border. Title "Our Candidates Work In Company" + subtitle. 4 placeholder company logos (use picsum or simple SVG placeholders).

6. **Testimonials** — Light gray `bg-light` background. Carousel with 2+ testimonials. Each: person image (centered, rounded) + blockquote text + cite with name. Use `picsum.photos/seed/hirepath-person-1/300/300`.

7. **CTA Banner** — Same hero background with blue overlay. "Looking For A Job?" headline + subtitle left-aligned, yellow "Sign Up" button right-aligned (col-md-8 + col-md-3 layout).

8. **Footer** — Dark `#242424` background. 4 columns: Search Trending (6 links), Company (4 links), Support (3 links), Contact Us (4 social icons). Copyright line with "Made with Component Dock" linking to componentdock.com.

## Design token notes

- Font: Import Nunito from Google Fonts in `index.html`
- Primary: `#1644ba` — use as Tailwind theme color in `index.css` via `@theme`
- Overlay: `rgba(22, 68, 186, 0.9)` — apply as absolute-positioned pseudo-element or Tailwind `bg-primary/90`
- Footer: `#242424` bg, links `rgba(255,255,255,0.5)` hover to `#fff`
- Button radius: `0.3rem` — Tailwind `rounded-[0.3rem]`
- Body text: `#7f848c`
- Form inputs: `#ebeef0` background

## Fidelity notes

- Match the 4-column search form layout exactly (2 rows on mobile)
- Counter section uses parallax-style fixed background image
- Job listing cards have horizontal layout with border-bottom separators
- Testimonial carousel can use a simple CSS scroll-snap or manual state
- CTA section layout: 8-col text + 3-col button (offset)
- Social icons in footer: use `lucide-react` (Facebook, Twitter, Instagram, Linkedin)

## Component outline

```
src/
  main.tsx
  App.tsx
  index.css (Nunito import, @theme tokens)
  components/
    Navbar.tsx
    Hero.tsx
    Statistics.tsx
    JobListings.tsx
    CompanyLogos.tsx
    Testimonials.tsx
    CtaBanner.tsx
    Footer.tsx
```
