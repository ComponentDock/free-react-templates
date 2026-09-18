# Kinfolk — Design Notes & Implementation Tasks

Source: ColorLib BrotherlyLove (https://preview.colorlib.com/theme/brotherlylove/)

## Structure order (component-by-component)

### 1. TopBar
- Secondary nav: left-aligned links (Home, About Us, Ministries)
- Social icons right-aligned (Facebook, Twitter, LinkedIn, Instagram)
- Light gray background (#e9ecef)
- Use `packages/ui` social icon components if available

### 2. Navbar
- Brand: "Kinfolk" + heart icon (♥, use lucide-react Heart)
- Nav items: Home (active), Ministries (dropdown), Sermons (dropdown), Events, About, Contact
- White background, collapsible on mobile
- Active state uses brand purple (#6c5b7b)
- Dropdown menus: border-radius 0, brand purple hover

### 3. Hero
- Full-width background image (use picsum.photos/seed/kinfolk-hero-1/1920/1080)
- Dark overlay (rgba(0,0,0,0.1))
- Centered heading: "Let your light so shine before men." (60-70px, font-weight 300)
- CTA button "About Us" (pill shape #6c5b7b bg, white text)
- Secondary link "Visit Our Church" with location icon

### 4. LatestSermonBar
- Overlapping section (negative margin to pull over hero)
- "Latest Sermon:" label
- Bold sermon title, pastor name, date
- Media icons: video, headphones, download, book (use lucide-react equivalents)

### 5. Welcome
- Two-column split: text left, video right
- Heading: "Welcome To Kinfolk"
- Paragraph + pastor attribution
- Video thumbnail with play button (Vimeo popup style)
- Use picsum.photos for video thumbnail

### 6. Features
- Three-column cards
- "Connect With God" (book icon), "Come As You Are" (user icon), "Brotherly Love" (heart icon)
- Each: icon wrapper + heading + paragraph
- Icons: lucide-react BookOpen, User, Heart
- Brand purple on icons

### 7. ServicesCarousel
- "Church Services" heading
- Horizontal carousel (owl-carousel style)
- 3+ service cards: image + heading + description + "Read More" link
- Use a simple horizontal scroll or CSS snap for carousel

### 8. SermonsAndEvents
- Two-column grid
- Left: "Latest Sermons" — 3 items, each with thumbnail + title + meta + media icons
- Right: "Latest Events" — 2 items, each with thumbnail + title + meta + description + "Read More"

### 9. Testimonials
- "Change Lives" heading
- 3 testimonial cards: blockquote + person name + location + avatar
- Light background (#e9ecef)
- Use picsum.photos for avatars

### 10. Footer
- Brand purple background (#6c5b7b)
- Three columns: Quick Links, Events, Contact
- Quick Links: 3 sub-columns of ministry/info links
- Events: 3 recent event entries with date, author, comments count
- Contact: address, phone, email with icons
- Copyright bar + social icons
- MUST link to https://www.componentdock.com/

## Component file mapping

```
src/App.tsx              — compose all sections
src/components/TopBar.tsx
src/components/Navbar.tsx
src/components/Hero.tsx
src/components/LatestSermonBar.tsx
src/components/Welcome.tsx
src/components/Features.tsx
src/components/ServicesCarousel.tsx
src/components/SermonsAndEvents.tsx
src/components/Testimonials.tsx
src/components/Footer.tsx
```

## Design notes from live preview

- The hero uses a church interior photo with slight parallax and dark overlay
- The sermon bar overlaps the hero by ~10px, creating a layered effect
- Feature icons are circular wrappers with brand purple icons
- The services carousel auto-scrolls (owl-carousel with no loop setting)
- Sermons list has thumbnails on left, text + media icons on right
- Testimonials use a large blockquote style with rounded avatar
- Footer has generous padding, white text on purple background
- All buttons are pill-shaped (border-radius: 100px) except dropdown menus
- Font is Rubik throughout, light weight (300) for body and hero headings
