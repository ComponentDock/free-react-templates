# Casework — Implementation Tasks & Design Notes

## Template Identity
- **Name:** Casework
- **Source:** ColorLib "Marco 2" (slug: `marco-2`)
- **Preview URL:** https://preview.colorlib.com/theme/marco-2/ (404; falling back to screenshot + GitHub source)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/marco2-free-template.jpg
- **GitHub source:** https://github.com/technext/marco-2
- **Category:** Legal Practice / Personal Brand

## Section Order (top → bottom)

1. **Navbar** — transparent over hero, white on scroll. Brand "Casework". Links: Home, About, Practice Areas, Legal Team, Blog, Contact. Hamburger on mobile.
2. **Hero** — split layout: 40% left (gray #b8b0b0 bg, white text), 60% right (background image with circular video play button).
   - Left: subheading "Hello," → heading "I'm [Name]" → subheading "A Corporate Lawyer" → CTA "Contact Me" (pill button with underline accent).
   - Right: background image, 100px circular white play button with pulse animation, positioned at left edge overlap.
3. **Free Consultation** — bg-light (#fafafa). Horizontal form: "My Free Consultation" heading on left column, form fields on right (Name, Email, Categories dropdown, Message textarea, "Send Message" button).
4. **Practice Areas** — white background. Centered heading "My Legal Practice Areas" / "Services". 4 cards in a row: circular gray icon (100px), title (uppercase, 18px, 500 weight), description.
   - Cards: Family Law, Business Law, Drug Control Law, Criminal Law
5. **Statistics/Counter** — parallax background image with dark overlay. Left: "Interesting Facts" heading. Right: 4 animated counters (Trusted Clients 3500, Solved Cases 2000, Awards Won 800, Winning Cases 2450). Count up on scroll.
6. **About/Assurances** — split: image right (5 cols), text left (7 cols). Heading "I Assure you that you will win" / "Providing". 3 features with icons: Fight for Justice, Best Case Strategy, Experienced Attorneys.
7. **Testimonials** — centered heading "My satisfied customer says" / "Testimony". Carousel of cards: circular avatar, quote icon, testimonial text, name, position.
8. **About Me** — bg-light. Split: video image with play button left (5 cols), text right (7 cols). Heading "Hello I'm [Name]". Bio paragraphs. Social media icons (Twitter, Facebook, Google+, Instagram).
9. **Case Study / Blog** — centered heading "Case Study" / "Our latest update". 3 blog cards: background image, metadata (date, author, comments), title. Links to blog single.
10. **Appointment Form** — bg-light. Split: form left (5 cols), text right (7 cols). Heading "Make An Appointment" / "Appointment". Form fields: Name, Email, Date (date picker), Categories (dropdown), Message, "Make an Appointment" button.
11. **Footer** — dark background. 4 columns: About Me (text + social), Useful Links, Quick Links, Contact (address, phone, email). Copyright line with Component Dock link.

## Key Design Decisions

- **Brand color:** #b8b0b0 (warm gray) — used everywhere as the primary accent: buttons, active nav, service icon circles, hero left panel, accent bars. NOT a typical blue.
- **Typography:** Poppins, 300 (body), 400 (headings), 500 (subheadings, nav), 600-700 (hero name).
- **Button style:** Pill-shaped (border-radius: 30px). Primary buttons: #b8b0b0 bg, white text, transparent on hover with border. CTA in hero has a special underline accent (4px bottom border + extending pseudo-element).
- **Form styling:** Transparent background, thin border (transparent by default), 58px height. Consult form button is NOT pill (border-radius: 0).
- **Service icons:** 100px circles, #b8b0b0 background, white icon (50px), centered.
- **Parallax:** Background image with dark overlay on stats section. Use `background-attachment: fixed` or Tailwind equivalent.
- **Carousel:** Testimonials carousel. Use a React carousel library (e.g., embla-carousel or similar) — no jQuery/owl-carousel.
- **Animations:** AOS (Animate On Scroll) for fade-in/slide effects. Counter animation (count up from 0).
- **No jQuery dependencies** — replace with React equivalents for: carousel, date picker, scroll animations, number counter.

## Fidelity Notes

- **Color mapping:** Original uses `#b8b0b0` as both primary and accent. In React/Tailwind, set `--color-primary: #b8b0b0` in `@theme`.
- **Hero split:** Use CSS grid or flexbox with `40% / 60%` split. Left panel has solid gray bg, right has background image.
- **Play buttons:** Circular (100px), white background, positioned at overlap edges. Use `position: absolute` with negative margins. Pulse animation keyframes.
- **Testimonial avatars:** Circular background-image with a centered quote icon overlay.
- **Blog cards:** `background-image` on a fixed-height div (`.block-20`), with text below.
- **Footer:** 4 equal columns on desktop, stacked on mobile. Dark bg with light text.
- **No parallax JS library** — use CSS `background-attachment: fixed` for the stats section.

## Component Structure (proposed)

```
apps/casework/src/
  App.tsx
  index.css          (Tailwind entry + @theme tokens)
  main.tsx
  components/
    Navbar.tsx       (transparent → white on scroll)
    Hero.tsx         (split layout with video play)
    ConsultForm.tsx  (free consultation horizontal form)
    PracticeAreas.tsx (4 service cards)
    Stats.tsx        (parallax bg + animated counters)
    Assurances.tsx   (split with 3 features)
    Testimonials.tsx (carousel)
    AboutMe.tsx      (split with video + bio + social)
    CaseStudy.tsx    (3 blog cards)
    AppointmentForm.tsx (split with appointment form)
    Footer.tsx       (4-column dark footer)
```

## Placeholder Images

- Hero right: `https://picsum.photos/seed/casework-hero/800/600`
- Assurances image: `https://picsum.photos/seed/casework-about/600/500`
- About Me video: `https://picsum.photos/seed/casework-video/600/500`
- Blog card 1: `https://picsum.photos/seed/casework-blog1/400/250`
- Blog card 2: `https://picsum.photos/seed/casework-blog2/400/250`
- Blog card 3: `https://picsum.photos/seed/casework-blog3/400/250`
- Stats parallax: `https://picsum.photos/seed/casework-stats/1200/600`
- Testimonial avatars: `https://picsum.photos/seed/casework-person1/100/100` etc.

## Icons (lucide-react)

- Family Law: `Users` or `Heart`
- Business Law: `Briefcase` or `TrendingUp`
- Drug Control Law: `Shield` or `ShieldAlert`
- Criminal Law: `Gavel` or `Scale`
- Assurances: `Scale`, `Target`, `Users`
- Footer: `MapPin`, `Phone`, `Mail`
- Social: `Twitter`, `Facebook`, `Instagram`, `Linkedin`
