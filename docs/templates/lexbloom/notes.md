# LexBloom — Implementation Notes

## Source
- ColorLib "TheLawyer": https://colorlib.com/wp/template/thelawyer/
- Preview: https://preview.colorlib.com/theme/thelawyer/
- TEMPLATES.md: line 2136

## Section Build Order (1:1 fidelity)

1. **Navbar** (`src/components/Navbar.tsx`)
   - Sticky header with white background, shadow on scroll
   - Logo image (left), nav links (center), phone button (right)
   - Mobile hamburger menu (SlickNav equivalent → custom React toggle)
   - Blog dropdown submenu on hover
   - Use `window.addEventListener('scroll')` for sticky effect

2. **Hero** (`src/components/Hero.tsx`)
   - Full-width slider with 2 slides, parallax background images
   - Each slide: section label with blue left-line, headline (Rubik font), body text, dark navy button
   - Slider arrows (prev/next) with blue border on hover
   - Use picsum.photos for background images: `picsum.photos/seed/lexbloom-hero-1/1920/900`
   - Implement slider with state (index) + CSS transitions or simple carousel

3. **Practice Areas** (`src/components/PracticeAreas.tsx`)
   - Section with blue-left-line label "OUR PRACTICING AREA"
   - 3-column grid of bordered cards (1px #ddd border)
   - Each card: blue icon (Lucide), title, description, "Read More" link
   - Items: Health Law, Insurance Law, Vehicle Accident

4. **About** (`src/components/About.tsx`)
   - Split layout: left = background image (full height), right = text content
   - Blue-left-line label "ABOUT OUR LAW AGENCY"
   - Heading, two paragraphs, "Learn About Us" button
   - Background image from picsum

5. **ContactForm** (`src/components/ContactForm.tsx`)
   - Dark pattern background (use dark navy + noise or gradient)
   - Centered form wrapper
   - Blue-left-line label "FILL UP TO GET A QUOTE"
   - Fields: Name, Phone, Service (select dropdown), Email, Message (textarea)
   - "Submit Now" button (dark navy, Roboto, uppercase)
   - Form validation with error messages

6. **CaseStudies** (`src/components/CaseStudies.tsx`)
   - Section with blue-left-line label "OUR RECENT WORK"
   - Tabbed navigation: Accident Law, Health Law, Insurance Law
   - Active tab shows 2x2 grid of image cards with captions
   - Tabs: use React state to toggle visible content
   - Cards: image (picsum) + caption span + description link

7. **CtaBanner** (`src/components/CtaBanner.tsx`)
   - Full-width dark section background
   - Centered heading "Are you Searching For a First-Class Consultant?"
   - "Contact Now" button (black/dark style, white text)

8. **Team** (`src/components/Team.tsx`)
   - Section with blue-left-line label "OUR LAWYERS"
   - 3-column grid: photo + name + role
   - Members: Ethan Welch (Chief Lawyer), Trevor Stanley (Junior Lawyer), Allen Guzman (Senior Lawyer)
   - Photos from picsum: `picsum.photos/seed/lexbloom-team-1/400/400`

9. **Testimonials** (`src/components/Testimonials.tsx`)
   - Full-width dark background section
   - Carousel of testimonial slides
   - Each slide: large white quotation mark SVG, quote text, founder photo, name, role
   - Auto-play carousel with dots/indicators

10. **Blog** (`src/components/Blog.tsx`)
    - Section with blue-left-line label "INSIGHT AND TRENDS ARTICLES"
    - 2-column grid of blog cards
    - Each card: image, date, title, excerpt, "Read More" link with blue line

11. **Footer** (`src/components/Footer.tsx`)
    - Dark background, 4-column layout
    - Col 1: Logo + description + phone + email
    - Col 2: "Our Support" link list
    - Col 3: "Quick Link" link list
    - Col 4: Newsletter email subscribe form
    - Bottom bar: copyright + social icons (Twitter, Facebook, Globe, Instagram)
    - MUST include "Made with Component Dock" link to https://www.componentdock.com/

## Design Token Mapping (CSS → Tailwind)

| Original CSS | Tailwind Theme Token | Usage |
|---|---|---|
| `#3957ff` | `blue-primary` / `--color-blue-primary` | Buttons, accents, icons, links |
| `#112957` | `navy-dark` / `--color-navy-dark` | Hero button, post button, submit button |
| `#092c3f` | `heading-dark` / `--color-heading-dark` | h1–h6 color |
| `#250051` | `purple-dark` | Category card headings |
| `#10285d` | `text-body` / `--color-text-body` | Paragraph text |
| `#57667e` | `text-muted` | Card descriptions |
| `#fbf9ff` | `bg-light` / `--color-bg-light` | Section backgrounds |
| `#f0e9ff` | `border-light` | Borders, dividers |
| `#212025` | `text-dark` | Hero paragraph text |

## Font Stack

```html
<link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&family=Rubik:wght@300;400;500;700;900&display=swap" rel="stylesheet">
```

- Headings (h1–h6): `Josefin Sans` (weight 500–600)
- Hero headline: `Rubik` (weight 500, 68px)
- Body text: `Roboto` (weight 400, 16px, line-height 30px)
- Section labels: `Josefin Sans` (weight 500, uppercase, blue)

## Icon Mapping (Flaticon → Lucide)

| Original Flaticon | Lucide Equivalent |
|---|---|
| `flaticon-car` | `Car` |
| `flaticon-doctor` | `Stethoscope` |
| `flaticon-life` | `HeartPulse` |
| `flaticon-handcuffs` | `Link` or `Shield` |
| `flaticon-padlock` | `Lock` |
| `flaticon-folder` | `Folder` |
| Social: `fab fa-twitter` | `Twitter` |
| Social: `fab fa-facebook-f` | `Facebook` |
| Social: `fas fa-globe` | `Globe` |
| Social: `fab fa-instagram` | `Instagram` |

## Fidelity Notes

- The original uses Bootstrap grid (col-xl, col-lg, etc.) → use Tailwind grid/flex equivalents
- The original uses Slick slider for hero → use simple React state-based slider or CSS transitions
- The original uses Owl Carousel for testimonials → use React carousel (state-based)
- The original uses WOW.js for scroll animations → use CSS `animate-on-scroll` or framer-motion
- The original uses jQuery sticky → use React sticky header with scroll listener
- The original uses Nice Select for dropdown → use native `<select>` styled with Tailwind
- Parallax backgrounds → use `background-attachment: fixed` or `bg-fixed`
- Button hover animation (scaleX) → use CSS `::before` pseudo-element or Tailwind group-hover
