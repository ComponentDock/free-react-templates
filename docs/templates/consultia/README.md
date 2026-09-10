# Consultia — Implementation Task Outline

Source: ColorLib Bizcon (https://preview.colorlib.com/theme/bizcon/)
New name: consultia
Stack: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Section-by-Section Build Order

### 1. Navbar (`Navbar.tsx`)
- Sticky top, white background
- Logo image (placeholder via picsum) left-aligned
- Desktop: horizontal nav links (Home, About, Blog ▾, Page ▾, Contact)
- Mobile: hamburger toggle with collapsible dropdown
- Dropdowns: Blog → Blog, Single Blog; Page → Project, Project Details, Services, Elements
- Active state styling on Home and Contact links

### 2. Hero Banner (`Hero.tsx`)
- White background, container with row
- Left 7 cols: h1 with line breaks "Lead from Front in Business Innovation.", paragraph, coral gradient pill CTA "learn more", video link with play icon + "Intro Video"
- Right side: reserved for optional hero image (empty in original)
- 4–6 floating decorative animated elements (CSS keyframe bouncing shapes)
- Decorative shapes use absolute positioning + keyframe animations (jumping, jumping2, etc.)

### 3. About Section (`About.tsx`)
- White background
- Reversed row: image (col-5) left, text (col-6 + offset) right
- h2 "We Have 24 Year Experience in consulting"
- h4 subtitle, paragraph, coral gradient "read more" pill button
- Decorative animated icons in background (same pattern as hero)

### 4. Services Section (`Services.tsx`)
- Grey background (#f7f7f7)
- Left column (col-4): h2 "We Provide Best Services", paragraph, "Load More" button
- Two service cards (col-4 each):
  - "Business Opportunity": growth icon, description, "Learn More →" with green (#e3f1da) arrow backdrop
  - "Commercial Approach": wallet icon, description, "Learn More →" with green arrow backdrop
- Service cards: icon in colored circle, heading, paragraph, text link with arrow icon

### 5. Testimonials Section (`Testimonials.tsx`)
- White background, padding-top
- Section title "Customer Are Saying" centered
- Thumbnail slider (3 avatar thumbnails, side column)
- Main quote slider: quote icon, review text, client name (h3), role (h5)
- 4 slides (same template content, differentiate in implementation)

### 6. Portfolio Section (`Portfolio.tsx`)
- White background
- Card-columns masonry layout
- 1 large text card: "Explore Our Best Practice Area" h2 + paragraph
- 4 project cards: image top, card-body with h5 title + p text
- All project cards titled "Startup Project" in original

### 7. Second About Section (`SecondAbout.tsx`)
- White background, padding-top
- Same reversed-row layout as About (image left, text right)
- h2 "We Providing high quality adviser service"
- h4 subtitle, paragraph, coral gradient "read more" button
- Decorative animated icons

### 8. Blog Section (`Blog.tsx`)
- White background
- Section title "Update From Blog" centered with subtitle
- 4 blog cards in a row (col-4 each):
  - Image top
  - Category tag + date (inline)
  - h5 title (clickable)
  - ul with comments icon + count, heart icon + like count
- Blog card hover: box-shadow rgba(42,34,123,0.1)

### 9. Footer (`Footer.tsx`)
- White background
- 5 columns: Top Products, Quick Links, Features, Resources (each 4 links), Newsletter (wider col)
- Newsletter: paragraph text + email input + coral gradient "subscribe" button
- Styled as a newsletter signup form

### 10. Copyright Bar (`CopyrightBar.tsx`)
- Full-width bar below footer
- Left: copyright text with current year + "Made with ♥ by Component Dock" (link to componentdock.com)
- Right: social media icon links (Facebook, Twitter, Instagram, Skype) using lucide-react

## Design Notes

### Color System
- All CTAs: linear-gradient(131deg, #feb47b, #ff7e5f) → Tailwind: `bg-gradient-to-br from-[#feb47b] to-[#ff7e5f]`
- Primary headings: #2f373d → `text-[#2f373d]`
- Body text: #646464 → `text-[#646464]`
- Grey section bg: #f7f7f7 → `bg-[#f7f7f7]`
- Service link arrow bg: #e3f1da → use as a pseudo-element or div behind arrow icon
- Blog date accent: #ff8b23
- Link hover: #ff7e5f

### Typography
- Google Fonts link in index.html: Poppins (300–800) + Roboto (300–500)
- Headings (h1–h6): font-family Poppins
- Body (p, spans): font-family Roboto
- Section titles: Poppins 700, ~45px desktop / 25px mobile

### Button Variants
1. **Primary CTA (.btn_1)**: Gradient bg, pill radius 50px, white text, 14px font, padding 14px 40px, hover keeps white
2. **Secondary CTA (.btn_2)**: Same gradient, pill radius, white text, orange shadow (0px 12px 20px rgba(255,126,95,0.15)), padding 13px 47px
3. **Service link (.btn_3)**: Dark text (#2f373d), Poppins font, arrow icon after, green (#e3f1da) rectangle backdrop (radius 5px) on hover

### Animated Decorative Elements
- Absolute-positioned images at various positions in hero/about/second-about
- CSS keyframe animations: jumping, jumping2, jumping3, jumping4 (translateY, translateX, rotate, scale, opacity)
- Hide on mobile (display: none at max-width: 576px)
- Use SVG shapes or lucide icons as substitutes for original PNG decorative assets

### Image Strategy
- Hero/about images: picsum.photos with deterministic seeds
- Client avatars: picsum.photos seed portraits
- Blog images: picsum.photos seed blog
- Portfolio images: picsum.photos seed portfolio
- Decorative floating shapes: CSS-generated shapes or simple SVGs (not copied assets)

### Responsive Breakpoints
- Desktop: ≥1200px (container 1170px max-width)
- Laptop: 992–1199px
- Tablet: 768–991px
- Mobile landscape: 576–767px
- Mobile portrait: <576px
- Section padding: 140px desktop, 70–80px tablet/mobile
