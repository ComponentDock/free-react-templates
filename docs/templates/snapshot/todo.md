# Snapshot — Implementation Todo

Source: ColorLib "Credo" (https://colorlib.com/wp/template/credo/)
Preview: https://preview.colorlib.com/theme/credo/
New name: snapshot (apps/snapshot, @free-react-templates/snapshot)

## Design Notes

### Section Order (fidelity reference)

1. Navbar — sticky header, logo "Snapshot" left, nav links (Home, About, Services, Photography, Blog, Contact), hamburger for mobile
2. Hero Cover — full-viewport bg image with overlay, centered white text (name, "Photographer | Speaker", paragraph, "Contact Me" golden button), portrait image right-center
3. Services — light gray bg, centered "Services" heading, 2-col grid of 4 items (Wedding, Events, Conferences, Culture) with golden circle icons
4. About Me — split layout: left image + paragraphs, right 4 progress bars (Photographer 89%, Wedding 75%, Events 94%, Conferences 94%)
5. Photography Gallery — centered "My Photography" heading, 3-col masonry grid of 12 images, hover overlay with search icon
6. Testimonials — golden (#fab95b) bg, centered "What Client Are Saying" white heading, carousel of 3 blockquotes
7. Blog Posts — light gray bg, centered "Blog Posts" heading, 3-col grid of blog cards (image + white card body)
8. Contact — golden (#fab95b) bg, centered "Say Hello" white heading, form (first name, full name, email, subject, textarea, "Send Message" dark button)
9. Footer — light gray bg, 4-col layout (info, services, resources, quick links + social icons, copyright with Component Dock)

### Color Palette

- Brand accent: #fab95b (golden amber) — buttons, icons, progress bars, links, section title underlines
- Brand hover: #f89911 / #f8a42a (darker amber)
- Heading/body text: #212529 (Bootstrap default dark)
- Muted text: #6c757d
- Page background: #fff
- Section light bg: #f8f9fa (Bootstrap bg-light)
- Section primary bg: #fab95b (Bootstrap bg-primary customized)
- White text on primary: #fff
- Button primary: #fab95b bg, #fff text
- Button primary hover: #000 bg, #fff text
- Button dark: #343a40 bg (contact send button)
- Progress bar fill: #fab95b
- Service icon bg: #fab95b circle
- Section title underline: 2px #fab95b, 50px wide

### Typography

- All text: Nunito (Google Fonts, Bootstrap override via --font-family-sans-serif)
- Headings: font-weight 500
- Body: font-weight 400
- Lead text: font-weight 300, font-size 1.3rem
- Section titles have golden underline pseudo-element (2px, 50px wide)

### Button Styles

- Primary: #fab95b bg, white text, border-radius 30px (pill), no visible border
- Primary hover: black (#000) bg, white text
- Dark: #343a40 bg, white text (contact "Send Message")
- Dark hover: #23272b bg
- All buttons use pill shape (border-radius 30px)
- Form inputs also use border-radius 30px (pill shape)

### Layout Notes

- Hero: full-viewport (100vh), background image with overlay, portrait image absolutely positioned at center-right
- Services: Bootstrap grid (col-md-6), flex layout per service item (icon circle + text)
- About: Bootstrap grid (col-lg-6 order-2/3), image left, progress bars right
- Photography: Bootstrap grid (col-md-6 col-lg-4), masonry-like layout
- Testimonials: owl-carousel with blockquotes
- Blog: Bootstrap grid (col-md-6 col-lg-4), blog_entry cards
- Contact: Bootstrap grid, form with row/col layout
- Footer: Bootstrap grid (col-md-3 + col-md-5 + col-md-3)

### Component Breakdown

- `Navbar.tsx` — sticky header, logo, nav links, hamburger icon
- `Hero.tsx` — full-viewport cover, bg image, centered text, portrait image
- `Services.tsx` — light gray bg, heading, 2-col grid of ServiceItem components
- `ServiceItem.tsx` — golden circle icon + heading + description
- `About.tsx` — split layout, image + text left, progress bars right
- `SkillBar.tsx` — labeled progress bar with golden fill
- `Gallery.tsx` — centered heading, 3-col masonry grid of gallery images with hover overlay
- `Testimonials.tsx` — golden bg, heading, carousel of blockquotes
- `BlogPosts.tsx` — light gray bg, heading, 3-col grid of BlogCard components
- `BlogCard.tsx` — image + white card body (title, date, excerpt, "Read More")
- `Contact.tsx` — golden bg, heading, form (first name, full name, email, subject, textarea, dark send button)
- `Footer.tsx` — light gray bg, 4-col layout, social icons, copyright with Component Dock

### Images

- Hero background: `https://picsum.photos/seed/snapshot-hero/1920/1080`
- Hero portrait: `https://picsum.photos/seed/snapshot-portrait/400/500`
- About image: `https://picsum.photos/seed/snapshot-about/600/400`
- Gallery images 1–12: `https://picsum.photos/seed/snapshot-gallery{n}/400/400`
- Blog images 1–3: `https://picsum.photos/seed/snapshot-blog{n}/400/300`

### Key Fidelity Points

- Golden (#fab95b) as the dominant accent color throughout — buttons, icons, progress bars, links, section underlines
- Nunito font family (Google Fonts) — applied via Bootstrap CSS variable override
- Pill-shaped buttons and inputs (border-radius 30px) — distinctive rounded aesthetic
- Full-viewport hero with portrait image positioned center-right
- Progress bars in About section with golden fill
- Golden background sections for Testimonials and Contact (not dark/black)
- Service icons in golden circles (50px diameter, border-radius 50%)
- Section titles have golden underline pseudo-element (2px, 50px wide, centered on text-center)
- Blog cards use white card body on light gray section background
- Contact form inputs are transparent background with white text on golden bg
- Sticky navbar with smooth scroll to sections
