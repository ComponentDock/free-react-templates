# Incept — Design Notes & Task Outline

## Source
- ColorLib: Create (slug: `create`)
- Preview: https://preview.colorlib.com/theme/create/
- Category: Portfolio (89)

## Section Order (from preview DOM)

1. **TopBar** — dark bg (#000), phone + email on left, social icons on right
2. **Navbar** — white bg, sticky, logo "Incept." (period teal), nav links: Home, Work, Services, About (dropdown: Specialties, Our Team), Blog, Contact
3. **Hero** — parallax bg image, dark overlay, "We Love To Build [typed]" with rotating words (Web Apps, WordPress, Mobile Apps), "Watch Video" teal pill CTA
4. **ServicesOverview** — 3 columns (01. Innovate, 02. Create, 03. Scale), each with teal heading, description, teal checkmark list
5. **PortfolioGrid** — "Our Works" heading, 3x2 grid, images with dark hover overlay (title + category)
6. **Features** — full-width black bg, image left, 4 blocks right (Strategy, Web Dev, Art Direction, Copywriting) with Material icons
7. **Testimonials** — carousel, avatar + name + blockquote
8. **OurServices** — "Our Services" heading, service card grid
9. **AboutUs** — image + text side-by-side
10. **OurTeam** — 3 team cards (photo, name, role, social icons)
11. **Blog** — 3 article cards (image, title, date, category, excerpt, "Continue Reading...")
12. **Contact** — bg-light, form (First Name, Last Name, Email, Subject, Message, Send) + info card (Address, Phone, Email)
13. **CtaBanner** — full-width teal (#32dbc6) bg, "Let's Get Started"
14. **Footer** — dark gray (#333333), 3 cols (About Us, Features links, Follow Us) + newsletter signup + copyright + Component Dock link

## Fidelity Notes

- **Font:** Quicksand from Google Fonts (300, 400, 500, 700, 900) — must load in index.html
- **Brand color:** #32dbc6 (teal/mint) — use as primary Tailwind color in @theme
- **Button style:** pill (border-radius: 30px), uppercase, letter-spacing 0.1em, padding 15px 30px
- **Form inputs:** pill shape (border-radius: 30px), 43px height, focus border #32dbc6
- **Hero:** use picsum.photos for background, implement Typed.js equivalent with React state
- **Portfolio hover:** dark overlay with opacity transition on hover
- **Features section:** black bg, Material-style icons (use lucide-react)
- **Testimonials:** carousel — can use simple React state carousel (no owl carousel dependency)
- **Footer newsletter:** email input + Send button, teal primary
- **No ColorLib references** in any app code — replace with design-token comments
- **Footer must link** https://www.componentdock.com/ as "Component Dock"
