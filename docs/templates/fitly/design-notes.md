# Fitly — Prep Notes

**Source:** ColorLib "Gutim" (https://colorlib.com/wp/template/gutim/)
**Preview:** https://preview.colorlib.com/theme/gutim/
**New name:** fitly
**Stack:** Vite + React 19 + Tailwind CSS 4 + TypeScript

---

## Section Order (from live DOM, 1:1 match)

1. Header/Navbar
2. Hero Section (parallax bg image, BMI Calculator CTA)
3. About Section (2-col: image+video popup | text + CTA)
4. Services Section (dark bg, 2-col: large image | 4 service cards)
5. Classes Section (carousel of class cards)
6. Trainer Section (3 trainer cards, light bg)
7. Testimonial Section (carousel with quotes)
8. Banner/CTA Section (parallax bg, person image)
9. Membership Plans (3 pricing tiers)
10. Register Section (form + image)
11. Latest Blog (3 post cards)
12. Footer Banners (2-col with bg images)
13. Footer (contact info, subscribe, social, copyright)

---

## Section-by-Section Fidelity Notes

### Header
- Brand accent color `#f15d44` background
- Logo image on left, nav links in center, "Sign Up Today" primary-btn on right
- Mobile: hamburger menu (SlickNav)

### Hero
- Full-width parallax background image (`data-setbg`)
- Left-aligned (col-lg-8): span "FITNESS ELEMENTS" + h1 "BMI CALCULATOR" + p + primary-btn
- Hero text is white over dark image

### About
- 2-col grid: left has image with play-btn overlay (video popup), right has h2 "Story About Us" + two paragraphs + primary-btn
- Section padding: 100px top/bottom (`.spad`)

### Services
- Split layout: left col-lg-6 is a full-height image, right col-lg-6 has 2×2 grid of service cards
- Card backgrounds: dark (#141414 / #1e1e1e)
- Each card: icon image + h4 title + paragraph

### Classes
- Section title "UNLIMITED CLASSES"
- Owl Carousel of cards, each card has bg image + dark overlay + h4 class name + trainer info with user icon
- Classes: Yoga, Running, Personal Training, Karate, Dance, Weight Loss

### Trainers
- Section title "EXPERT TRAINERS"
- 3 cards in a row (col-lg-4): photo on top, text block below (h5 name, span role, p description)
- Social icons: Facebook, Instagram, Twitter, Pinterest
- Light gray bg (#f5f5f5)

### Testimonials
- Section title "success stories"
- Owl Carousel with testimonial items: quote text, circular avatar, author h4 + role
- Background image (testimonial-bg.png)

### Banner/CTA
- Full-width parallax background image
- Left col-lg-6: heading "Get training today", paragraph, primary-btn "Contact Now"
- Right col-lg-5: person image (banner-person.png)

### Membership
- Section title "MEMBERSHIP PLANS"
- 3 pricing cards (col-lg-4): each has title bar with gradient bg, large price, feature list (ul), "Start Now" primary-btn
- Plans: Basic ($17/mo), Standard ($57/mo), Premium ($98/mo)
- Feature rows: Duration, Personal trainer, Amount of people, Number of visits

### Register
- 2-col: left (col-lg-8) has form, right (col-lg-4) has image
- Form: h2 "Register Now" + subtitle, 4 fields (First Name, Email, Last Name, Mobile) in 2×2 grid
- "Get Started" submit button with gradient

### Blog
- Section title "Latest Blog"
- 3 cards (col-lg-4): image, date + category tag, h4 post title
- Tags: #Gym, #Sport, #Body

### Footer Banners
- 2-col (col-lg-6 each): bg image + dark overlay + span + h2 + p + primary-btn
- Left: "New member" / "7 days for free"
- Right: "contact us" / "09 746 204"

### Footer
- 3 contact columns (Phone, Address, Email)
- Subscribe bar: bg image, h4 + p + email input + send button
- Copyright + social icons (Facebook, Twitter, Instagram, Dribbble)
- **MUST replace Colorlib attribution with Component Dock link**

---

## Component Outline

```
src/
  App.tsx          — compose all sections
  components/
    Navbar.tsx     — sticky header, logo, nav links, CTA button
    Hero.tsx       — parallax bg, text overlay, CTA
    About.tsx      — 2-col with video popup
    Services.tsx   — dark bg, image + 4 service cards
    Classes.tsx    — carousel of class cards
    Trainers.tsx   — 3 trainer cards with social
    Testimonials.tsx — carousel with quotes
    Banner.tsx     — CTA banner with parallax
    Membership.tsx — 3 pricing tiers
    Register.tsx   — registration form
    Blog.tsx       — 3 blog cards
    FooterBanners.tsx — 2-column promo banners
    Footer.tsx     — contact, subscribe, social, copyright
```

---

## Key Decisions

- Use `https://picsum.photos/seed/fitly-<n>/<w>/<h>` for placeholder images
- Load Poppins via Google Fonts link in index.html
- Use lucide-react for icons (replace Font Awesome icons)
- Owl Carousel → implement as simple CSS-only carousel or use a React carousel library
- Video popup → use a simple modal or skip (not critical for landing page)
- SlickNav mobile menu → implement with a React hamburger toggle
