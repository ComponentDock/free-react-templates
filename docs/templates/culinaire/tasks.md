# Culinaire — Implementation Tasks & Design Notes

Source: ColorLib "Buri" (https://colorlib.com/wp/template/buri/)
Preview: https://preview.colorlib.com/theme/buri/

## Component structure (in order of rendering)

```
apps/culinaire/
├── src/
│   ├── main.tsx              # entry
│   ├── App.tsx               # composes all sections
│   ├── index.css             # Tailwind v4 + @theme tokens
│   ├── test/
│   │   └── setup.ts          # jest-dom import
│   └── components/
│       ├── Navbar.tsx         # sticky nav: logo + links + social icons
│       ├── HeroBanner.tsx     # full-width bg image, heading, subtitle, CTA
│       ├── About.tsx          # 2-col: text (brand h5, h2, paragraphs, btn) + image
│       ├── FoodMenu.tsx       # section title + 2-col grid of 6 menu items
│       ├── IntroVideo.tsx     # dark bg with centered play button
│       ├── Testimonials.tsx   # carousel of review cards (quote, image, name, stars)
│       ├── Contact.tsx        # bg image, white card with 3 info blocks
│       └── Footer.tsx         # dark 3-col: brand, links, newsletter, copyright
├── public/
│   ├── CNAME                 # culinaire.free.componentdock.com
│   └── (placeholder images via picsum)
├── package.json
└── vite.config.ts
```

## Design notes — section-by-section

### 1. Navbar
- Sticky header, white/transparent bg, logo left, nav center-right
- Links: Home, About, Menu, Blog (with dropdown), Pages (with dropdown), Contact
- Social icons (Facebook, Instagram) on far right (desktop only)
- Mobile: hamburger toggler, collapsible menu
- Use lucide-react icons for social (or equivalent)

### 2. Hero Banner
- Full-width background image (placeholder: picsum with warm/restaurant seed)
- Height: 1080px desktop, 650px tablet/mobile
- Text left-aligned (col-lg-7): small subtitle in white, large heading in white,
  CTA button (#d6ad86 bg, sharp corners)
- Text centered on mobile
- Consider a semi-transparent dark overlay for text readability

### 3. About Section
- Negative margin-top (-250px desktop, -100px tablet) overlapping hero
- White background card
- Left col (7/12): h5 subtitle in brand color #d6ad86, h2 heading,
  2 paragraphs, .btn_3 (black bg, white text, sharp corners)
- Right col (5/12): food/restaurant image (picsum placeholder)
- Stacks to single column on mobile

### 4. Food Menu
- Section title: centered, h5 subtitle + h2 heading
- 2-column grid of 6 menu items
- Each item: food image left, text right (h3 name, p description, h5 price)
- All prices shown as "From $40.00"
- Stacks to single column on small screens
- Use picsum placeholders for food images with different seeds

### 5. Intro Video
- Full-width dark background image (parallax-like)
- Height: 550px desktop, 350px mobile
- Centered play button (circular or styled icon)
- On click: could link to YouTube or show a modal
- Use lucide-react Play icon for the button

### 6. Testimonials
- Section title: centered, h5 subtitle + h2 heading
- Carousel/slider of review cards (3+ items)
- Each card: quote text, circular client image, client name, 5-star rating
- Auto-play carousel (can use simple CSS scroll-snap or state-based)
- Use lucide-react Star icon for ratings

### 7. Contact
- Full-width background image
- White overlay card (padding: 50px)
- Heading "Contact Us"
- 3 info blocks in a row: Address, WE ARE OPEN (hours), RESERVATION
- Each block: icon + heading + text
- Use lucide-react icons (MapPin, Clock, Phone)

### 8. Footer
- Dark background: #1c1a18
- 3-column layout on desktop:
  - Col 1: Logo image, phone number, email, social icons
  - Col 2: "Quick links" heading + list of nav links
  - Col 3: "Subscribe newsletter" heading + email input + send button + description text
- Copyright bar at bottom: centered text linking to Component Dock
- Stacks vertically on mobile

## Color palette (for @theme)

```
brand:      #d6ad86  (warm gold/tan — accents, subtitles, primary CTA bg)
brand-hover: #ffb830  (golden yellow — button hover)
dark:       #2c3033  (near-black — headings, text)
footer-bg:  #1c1a18  (very dark brown — footer)
footer-text: #a9a9a9 (light gray — footer paragraphs)
light-bg:   #fafafa  (near-white — section backgrounds)
white:      #fff
black:      #000  (secondary button bg)
```

## Fonts

- Body/UI: Montserrat (Google Fonts)
- Display headings: Playfair Display (Google Fonts)

## Key implementation notes

- No border-radius on buttons (sharp rectangles)
- About section uses negative margin to overlap hero
- Contact section uses a white card overlay on a background image
- Carousel can be implemented with CSS scroll-snap or a lightweight state-based slider
- All placeholder images: https://picsum.photos/seed/culinaire-N/W/H
- No ColorLib references in any app code
- Footer MUST link to https://www.componentdock.com/
