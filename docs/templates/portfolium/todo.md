# Portfolium — Implementation Notes

Source: ColorLib "Niko" — https://preview.colorlib.com/theme/niko/
Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section order (must match 1:1)

1. Navbar (sticky, dark/transparent → dark on scroll)
2. Hero (split: left text + right image)
3. About (split: left image + right text + counter)
4. Skills (progress bars, 2-col grid, light bg)
5. Services (3-column icon cards, light bg)
6. Hire-me banner (full-width blue)
7. Projects (masonry image grid)
8. Blog (3-column cards, light bg)
9. Contact (split: left image + right form)
10. Footer (4-column, dark)

## Design tokens

- Brand: `#0075f6` (blue)
- Font: Poppins (Google Fonts)
- Section heading pattern: uppercase `span.subheading` label + `h2` title + `p` description
- Hero subheading: black, bold, 14px, letter-spacing 3px, uppercase
- Hero button: `border: 1px solid #0075f6`, padding 5px 20px, uppercase, 12px, letter-spacing 3px
- Hire-me banner: `background: #0075f6`, white text, bold "Available" in h2
- Counter block: `bg-primary` (Bootstrap blue), white text
- Footer: dark background, 4-column layout
- Light section bg: `#f8f9fa` (Bootstrap light)
- Images: use `picsum.photos/seed/portfolium-<n>` placeholders

## Component plan

| Section        | Component file       | Notes |
|----------------|----------------------|-------|
| Navbar         | Navbar.tsx           | Sticky, scroll-aware dark bg, hamburger for mobile |
| Hero           | Hero.tsx             | Split layout, background image right, text left, play button overlay |
| About          | About.tsx            | Two-column, counter block, service items |
| Skills         | Skills.tsx           | 6 progress bars, animated on scroll |
| Services       | Services.tsx         | 3-column icon cards |
| HireBanner     | HireBanner.tsx       | Full-width blue bar |
| Projects       | Projects.tsx         | Masonry grid with overlay hover text |
| Blog           | Blog.tsx             | 3-column cards |
| Contact        | Contact.tsx          | Split layout with form |
| Footer         | Footer.tsx           | 4-column dark footer, links to componentdock.com |

## Fidelity notes

- Original uses Bootstrap 4 + Owl Carousel. Replace Owl with a simple
  carousel or static hero (single slide is fine for the React version).
- Original uses `ftco-animate` CSS animations. Replace with Tailwind
  `animate-` utilities or intersection observer based fade-in.
- Progress bars should animate to their target width on scroll into view.
- The play button overlay on the hero is decorative (links to Vimeo).
  Keep it as a visual element with a placeholder href.
- Contact form is purely visual (no backend). Keep it uncontrolled or
  simple controlled state.
- Social icons in footer: use lucide-react icons.
- Original nav links: Home, About, Skills, Projects, My Blog, Contact.
  Keep the same set.
