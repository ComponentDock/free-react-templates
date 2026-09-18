# Studioforge — Design Notes & Task Outline

## Source
- ColorLib: "Ilene Berg" — https://colorlib.com/wp/template/ilene-berg/
- Preview: https://preview.colorlib.com/theme/ilene-berg/

## Section-by-section fidelity notes

### 1. Header
- Transparent header overlaying the banner
- Logo left-aligned, nav links right (Home, Generic, Elements)
- Hamburger menu icon (lnr-menu) — on mobile: nav slides in
- React implementation: fixed/sticky header with state for mobile menu toggle

### 2. Banner (Fullscreen Hero)
- Background image (use picsum.photos/seed/studioforge-banner/1920/1080)
- Purple overlay: `rgba(132, 96, 246, 0.8)` → Tailwind: `bg-purple-600/80`
- Centered text: h1 (60px, weight 100) + paragraph + pill CTA button
- Button: border-radius 20px, white border, transparent bg, white text, uppercase
- Arrow icon on right (lucide-react ArrowRight)
- Full height via `min-h-screen` with flex centering

### 3. History
- Grey background `#f2f5f7` → `bg-gray-100`
- Section title centered: "Glorious History"
- Two-column layout: thumbnail image (col-4) + tabbed content (col-6 offset)
- Tabs: History / Mission / Vision with icons (Map, Megaphone, Sun from lucide-react)
- Tab content: heading + paragraph text, controlled via React state
- Image: picsum.photos/seed/studioforge-history/400/350

### 4. Service Area
- Pink background `#f3487f` → `bg-pink-500` custom or use token
- 4-column grid, each card has:
  - Top half: white bg, centered icon + title (260px height)
  - Bottom half: description text
- Columns 1 & 3: icon+title on top, text on bottom (normal)
- Columns 2 & 4: text on top, icon+title on bottom (reversed via flex-col-reverse)
- Services: Software (Wand), Wordpress (Book), Front End (MousePointer), UX Design (Gem)
- Icons: lucide-react equivalents

### 5. Experience
- White background
- Section title: "Beautiful Experiences"
- 3-column: 2 image columns (v1.jpg, v2.jpg) + 6-col text content
- Content: h3 "Vector Illustration", h4 subtitle, paragraph, "View Details" button
- Button: white-bg variant (white bg, purple text, hover: purple bg white text)
- Images: picsum.photos/seed/studioforge-exp1/300/350 and /seed/studioforge-exp2/300/350

### 6. Projects
- Teal background `#5dd1e3` → `bg-cyan-400` custom or token
- Section title white: "Some Projects"
- Carousel: each slide is 8/4 column split (image left, text right)
- Image as background-image on div, text in content block
- Can use simple CSS scroll snap or state-based carousel
- Slide image: picsum.photos/seed/studioforge-project/800/500

### 7. Contact Form
- White background
- Section title: "Keep in Touch"
- 2-column layout: name + email side by side (col-5 each), textarea full width (col-10)
- "Send Message" button: white-bg variant with arrow
- Form validation: required fields, email pattern
- Use controlled inputs with React state

### 8. Newsletter/Subscription
- Yellow background `#f9c400` → `bg-yellow-400` custom or token
- Heading white: "Together, Let's Make this happen"
- Email input: pill shape (border-radius 25px), light bg `#f9f9ff`
- "Get Started" white-bg button positioned absolutely inside input area
- Relative positioning for button overlay

### 9. Footer
- Dark blue-grey background `#4e5375` → custom token
- 4-column layout: About Agency, Navigation Links ×2, Instafeed
- Instafeed: 8 small images in 2×4 grid (25% width each)
- Footer bottom: copyright + social icons (Facebook, Twitter, Dribbble, Behance)
- Social icons: border, 30×30px, yellow hover bg
- **Must include Component Dock attribution link**

## Component structure

```
apps/studioforge/
  src/
    main.tsx
    App.tsx
    index.css           (Tailwind + theme tokens)
    components/
      Header.tsx
      Banner.tsx
      History.tsx
      ServiceArea.tsx
      Experience.tsx
      Projects.tsx
      Contact.tsx
      Newsletter.tsx
      Footer.tsx
    test/
      setup.ts
```

## Token mapping for Tailwind @theme

```css
@theme {
  --color-brand: #8560f6;
  --color-pink-accent: #f3487f;
  --color-yellow-accent: #f9c400;
  --color-teal-accent: #5dd1e3;
  --color-footer-bg: #4e5375;
  --color-history-bg: #f2f5f7;
  --font-sans: "Poppins", sans-serif;
}
```
