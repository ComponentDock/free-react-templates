# EcoPulse — Implementation Task Outline

## Source
- ColorLib: Environmentalorganization
- Preview: https://preview.colorlib.com/theme/environmentalorganization/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/environmentalorganization-free-template.jpg

## Design Notes

### Color Palette
- Primary green: #09cc7f (accents, hovers, progress bars)
- Green gradient: #46C0BE → #6DD56F → #46C0BE (CTA buttons)
- Section subtitle: #70D76A (uppercase green text)
- Headings: #425140 (dark green-gray)
- Body text: #10285d (dark navy)
- Nav links: #072366 (dark blue)
- Hero overlay: rgba(35, 39, 35, 0.4)
- Light section bg: #EEFFFA
- Footer bg: dark (extract from CSS)

### Typography
- Font: Montserrat (Google Fonts, weights 200–700)
- Hero h1: 115px desktop, 80px tablet, 50px mobile
- Section headings: 55px desktop, 35–40px responsive
- Body: 16px, line-height 30px

### Button Styles
- Primary CTA (`.btn`): pill (30px radius), gradient background, white text, shadow, hover slides gradient
- Hero button: white border pill, transparent bg, hover fills white
- Outline button (`.border-btn`): green border pill, transparent bg, hover fills green
- Header button: same as primary `.btn`

### Component Architecture
```
src/
  App.tsx              — Section composition
  components/
    Header.tsx         — Sticky nav with logo, links, CTA
    HeroSlider.tsx     — Image carousel with overlay, heading, CTA, dots
    AboutSection.tsx   — Split layout, #EEFFFA bg, video play button
    Services.tsx       — 3-column service cards with icons
    SupportStats.tsx   — Split layout with counters (animated numbers)
    CasesSection.tsx   — 3 case cards with progress bars
    BlogSection.tsx    — 2-column blog post cards
    Footer.tsx         — Multi-column footer with social, links, copyright
  index.css            — Tailwind + @theme tokens
```

## Section-by-Section Fidelity Notes

### 1. Header
- Sticky white header with bottom shadow
- Logo left, nav center-right, CTA button far right
- Mobile: hamburger menu (no desktop nav)
- Nav links: Home, About, What We Do, Projects, Blog, Contact
- CTA: "Make a Donation" pill button

### 2. Hero Slider
- Full-width background images (use picsum.photos seeds)
- Dark semi-transparent overlay (rgba(35,39,35,0.4))
- Large white heading (115px), subtitle, CTA button
- Dot navigation on right side (vertical)
- 3 slides with fadeInUp animations
- Min-height: 790px

### 3. About / Visit Tailor
- Background: #EEFFFA (very light green)
- Split layout: text left, image right
- Section subtitle in green uppercase
- Heading + paragraph
- Image has a circular video play button overlay (green gradient, 60px, pulsing border animation)
- Responsive: stacks on mobile

### 4. Services
- 3-column grid
- Each card: icon (use lucide-react), title, description
- Titles: "Clean Water", "Renewable Energy", "Protect Animals"
- Section padding: ~130px top

### 5. Support Company / Why Join
- Split layout: text left, image right
- Left: section subtitle + heading + paragraph + "Join Us Now" outline button
- Right: image with two floating stat badges (absolute positioned)
  - "950" + "Poaching cases"
  - "230" + "Volunteers worldwide"
- Badges have white bg, green accent

### 6. Our Cases
- Section heading centered + paragraph
- 3-column grid of case cards
- Each card: image top, content below
  - Title (h3 link), description paragraph
  - Animated progress bar (green fill, gradient)
  - Stat text: "47,589 of 74,574" style
- Progress percentages: 70%, 25%, 50%

### 7. Blog / Latest News
- Section heading centered + paragraph
- 2-column grid
- Each card: image (with hover zoom), title link, excerpt
- Cards have subtle shadow/border

### 8. Footer
- Dark background
- 4-column layout: logo+description+social | Our Solutions | Company | Contact Us
- Social: Twitter, Facebook, Pinterest icons
- Copyright bar at bottom
- "Component Dock" attribution replacing original footer text

## Implementation Order
1. Header (sticky nav + CTA)
2. HeroSlider (3-slide carousel with overlay)
3. AboutSection (split layout + video button)
4. Services (3 cards)
5. SupportStats (split layout + counters)
6. CasesSection (progress bars)
7. BlogSection (2 cards)
8. Footer (multi-column)
9. Mobile responsiveness pass
10. Tests (100% coverage)
