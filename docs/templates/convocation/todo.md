# Convocation — Design Notes & Task Outline

Source: ColorLib "Confe" → https://preview.colorlib.com/theme/confe/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/confe-free-template.jpg
New name: convocation
Spec: openspec/specs/template-convocation/spec.md

## Structure order (match 1:1)

1. Navbar (fixed, transparent → white on scroll)
2. Hero (full-width bg image, dark overlay, CTA)
3. About The Conference (countdown + copy + CTA)
4. Image Pair 1 (50/50 side-by-side bg images)
5. Speakers (3-col grid, 6 cards)
6. Image Pair 2 (50/50 side-by-side bg images)
7. Why Us (3 feature columns with icons)
8. Sponsors (dark section, card + CTA)
9. Conference Events (3-col grid, 6 event cards)
10. Footer (dark overlay, 3 columns)

## Section-by-section fidelity notes

### 1. Navbar
- Logo: "Convocation" (was "Confe.") — font-weight: 200, font-size: 26px
- Nav links: uppercase, letter-spacing 0.05em, font-size 15px
- Desktop: inline horizontal list, right-aligned
- Mobile: hamburger icon (icon-menu), slide-in right panel (300px wide, white bg, shadow)
- Scroll behavior: fixed position, padding shrinks, background transitions to white with box-shadow, text to dark
- Implement via IntersectionObserver on hero section or scroll event listener toggling a `.scrolled` class

### 2. Hero
- Full-width background image with dark overlay (`site-blocks-cover overlay`)
- Parallax-like effect via `data-stellar-background-ratio="0.5"` — can use CSS `background-attachment: fixed` or JS parallax
- Text: white, centered, vertically aligned
- Title: large bold heading
- Subtitle: date + location, regular font size
- CTA: red pill button (`#f23a2e`, border-radius 30px, padding 12px 16px, uppercase)
- Secondary link: white text, regular weight, "Learn More"

### 3. About The Conference
- White background
- Heading: left-aligned at col-md-7, uppercase, mb-5
- Sub-heading: "Conference Begins In", uppercase
- Countdown timer: placeholder div (can render static text or minimal countdown component)
- Two body text paragraphs
- CTA button: primary red, px-4 py-2

### 4. Image Pair 1 & 6. Image Pair 2
- Flex row, two equal children (`site-block-half d-flex images`)
- Each child: full-height background image with dark overlay (`rgba(0,0,0,0.4)`)
- Use picsum.photos with different seeds for each image
- No text content — purely visual separator

### 5. Speakers
- Section heading: centered, uppercase, mb-5
- Grid: 3 columns on lg, 2 on md, 1 on sm (col-md-6 col-lg-4)
- 6 speaker cards: each has thumbnail (d-block mb-3), name (first name in <span> for emphasis/weight), title/company line
- Thumbnail links to a detail page (use # for now)
- Use picsum.photos for speaker portraits

### 7. Why Us
- Section heading: centered, uppercase
- 3 columns (col-md-4)
- Each: icon (display-3 size, text-primary color), heading, description
- Original icons: flaticon-chat-1, flaticon-paper-plane, flaticon-speaker
- Replace with lucide-react: MessageSquare, Send, Heart (or similar)
- Icon color: primary brand (#f23a2e)

### 8. Sponsors
- Dark background section
- Centered layout (col-md-7 mx-auto)
- Heading: "Your Company Here"
- Description paragraph
- CTA: pill button, primary red, "Become a Sponsor"

### 9. Conference Events
- Section heading: centered, uppercase
- Grid: 3 columns on lg, 2 on md (col-md-6 col-lg-4)
- 6 event cards: image, title (heading mb-0), date + author line, excerpt paragraph
- Use picsum.photos for event images

### 10. Footer
- Background image with dark overlay (`rgba(0,0,0,0.8)`)
- 3 columns:
  - About: heading, description, Read More link
  - Quick Menu: two sub-lists (About/Venue/Sponsors/Get Ticket/News + Contact/Event/Be a Sponsor)
  - Social Icons: Facebook, Twitter, Instagram, Vimeo (use lucide-react icons)
- Copyright: replace "Colorlib" with "Component Dock", link to componentdock.com

## Token summary for index.css @theme

```css
@theme {
  --color-primary: #f23a2e;
  --color-primary-hover: #d93225;
  --font-body: "Work Sans", sans-serif;
  --font-display: "Amatic SC", cursive;
  --radius-pill: 9999px;
}
```

## Component files plan

```
apps/convocation/
├── src/
│   ├── main.tsx
│   ├── App.tsx                    # Composes all sections in order
│   ├── index.css                  # Tailwind entry + @theme tokens
│   ├── components/
│   │   ├── Navbar.tsx             # Fixed navbar with scroll behavior
│   │   ├── Hero.tsx               # Full-width hero with CTA
│   │   ├── About.tsx              # Conference description + countdown
│   │   ├── ImagePair.tsx          # Reusable 50/50 image pair (used twice)
│   │   ├── Speakers.tsx           # 3-col speaker grid
│   │   ├── WhyUs.tsx              # 3-col features with icons
│   │   ├── Sponsors.tsx           # Dark sponsor CTA section
│   │   ├── Events.tsx             # 3-col event cards grid
│   │   └── Footer.tsx             # 3-column footer
│   └── test/
│       └── setup.ts
├── index.html                     # Google Fonts: Work Sans + Amatic SC
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tailwind.config.ts
├── public/
│   └── CNAME                      # convocation.free.componentdock.com
└── README.md
```

## Dependencies
- Google Fonts: Work Sans (300, 400, 700), Amatic SC (400, 700)
- Icons: lucide-react (replace flaticon)
- Images: picsum.photos with deterministic seeds
- Shared: packages/ui components (Button, ButtonLink, cn)
