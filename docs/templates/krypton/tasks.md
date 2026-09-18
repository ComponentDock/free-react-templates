# Krypton — Implementation Tasks & Design Notes

Source: ColorLib Labs (https://colorlib.com/wp/template/labs/)
Preview: https://preview.colorlib.com/theme/labs/ (404 at prep time)
New name: krypton
Package: @free-react-templates/krypton

## Section-by-Section Implementation Order

### 1. Navigation Bar
- Sticky/fixed top nav, white background
- Left: brand logo (text or placeholder image)
- Center: nav links — Home, About, Services, Portfolio, Blog, Contact
- Right: CTA button (e.g., "Get Started") with purple bg (#6420b1)
- Mobile: hamburger toggle, slide-in menu

### 2. Hero Slider
- Full-width, ~600px height on desktop
- Background images with dark overlay (rgba(0,0,0,0.5))
- Centered content: headline (h1), subtitle (p), CTA button
- Simple state-based slider (no external carousel lib)
- 2–3 slides with different headlines

### 3. Features / Services
- Section heading "Our Services" or "What We Do"
- 3 or 4 service cards in a grid (col-3 or col-4)
- Each card: icon (lucide-react), title, short description
- Icons colored with purple accent
- Light background (#f8f9fa)

### 4. About / Stats
- Two-column layout: image left, text right
- Company intro paragraph
- Counter stats row: Projects Completed, Happy Clients, Awards Won, Team Members
- Stats use large numbers with labels

### 5. Portfolio / Work
- Section heading "Our Work" or "Portfolio"
- Image grid (3 columns on desktop, 2 on tablet, 1 on mobile)
- Hover overlay with project title
- Use picsum.photos for thumbnails
- Optional: filter tabs by category

### 6. Team
- Section heading "Meet the Team"
- Grid of team member cards (3–4 per row)
- Each card: photo (circular or rounded), name, role, social icons (lucide-react)
- Social icons: LinkedIn, Twitter, GitHub

### 7. Testimonials
- Section heading "Testimonials" or "What Clients Say"
- Carousel with 3 testimonials
- Each: quote text, author photo (circular), author name, company/role
- Navigation dots or arrows

### 8. Blog / News
- Section heading "Latest News" or "From Our Blog"
- Grid of 3 blog post cards
- Each card: thumbnail image, date, title, excerpt text, "Read More" link
- Cards have subtle shadow/border

### 9. Contact Form
- Two-column: form left, company info right
- Form fields: Name, Email, Subject, Message (textarea)
- Submit button with purple accent
- Company info: address, phone, email with icons
- Form validation with error messages

### 10. Footer
- Dark or purple background
- 3–4 columns: About text, Quick Links, Services, Newsletter
- Newsletter: email input + Subscribe button
- Social media icons row
- Copyright line + Component Dock link
- MUST link to https://www.componentdock.com/

## Design Fidelity Notes

- Brand color: purple #6420b1 — use as primary in Tailwind @theme
- Secondary: blue #5d80c0
- Clean, modern digital agency aesthetic
- Light section backgrounds alternating with white
- Cards with subtle shadows (shadow-sm or shadow-md)
- Rounded corners on cards (border-radius: 8px or 12px)
- Hero: dark overlay for text readability
- Typography: clean sans-serif (Inter or similar via Google Fonts)
- CTAs: solid purple buttons with white text, hover darkens

## Placeholder Image Strategy

- Hero slides: `https://picsum.photos/seed/krypton-hero-1/1920/600`, `krypton-hero-2`, `krypton-hero-3`
- About image: `https://picsum.photos/seed/krypton-about/600/400`
- Portfolio: `https://picsum.photos/seed/krypton-work-1/600/400` through `krypton-work-6`
- Team: `https://picsum.photos/seed/krypton-team-1/300/300` through `krypton-team-4`
- Testimonial avatars: `https://picsum.photos/seed/krypton-avatar-1/100/100` through `krypton-avatar-3`
- Blog: `https://picsum.photos/seed/krypton-blog-1/600/400` through `krypton-blog-3`
