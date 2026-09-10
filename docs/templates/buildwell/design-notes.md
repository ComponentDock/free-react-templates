# Buildwell — Design Notes & Task Outline

Source: ColorLib **Balay** → https://preview.colorlib.com/theme/balay/
New name: **buildwell** (construction / architecture portfolio)

## Section order (top to bottom)

1. Sidebar (fixed left, dark)
2. Hero slider (3 slides)
3. About section ("Who We Are")
4. Services section (4 icon cards)
5. Services image grid (5 masonry images)
6. Counter section (parallax + stats)
7. Work / portfolio (6 project cards)
8. Blog section (3 entries)
9. Contact section ("Get in Touch!")
10. Footer (Component Dock)

## Component outline

| Component       | File                     | Notes                                                      |
| --------------- | ------------------------ | ---------------------------------------------------------- |
| App             | `src/App.tsx`            | Layout: sidebar + main content wrapper                     |
| Sidebar         | `src/components/Sidebar.tsx` | Fixed left, dark bg, nav links, logo, social icons     |
| HeroSlider      | `src/components/HeroSlider.tsx` | 3 slides, bg images, overlay text, pill CTA, dots  |
| About           | `src/components/About.tsx` | Two-column: image left, text + value props right        |
| Services        | `src/components/Services.tsx` | 4 service cards with icons, titles, descriptions      |
| ServicesGrid    | `src/components/ServicesGrid.tsx` | 5 masonry bg images                              |
| Counters        | `src/components/Counters.tsx` | Parallax bg + dark overlay + 4 stat counters          |
| Portfolio       | `src/components/Portfolio.tsx` | 6 project cards in grid                              |
| Blog            | `src/components/Blog.tsx` | 3 blog entries with metadata                           |
| Contact         | `src/components/Contact.tsx` | Heading + form/button                                  |
| Footer          | `src/components/Footer.tsx` | Component Dock link                                    |

## Fidelity notes

### Sidebar
- Fixed position, left side, ~20% width on desktop, full-width collapsed on mobile
- Background: solid black `#000000`
- Logo text: "Buildwell" bold uppercase sans-serif
- Nav items: uppercase, letter-spacing: 2px, font-size: 12px
- Active link indicator: yellow underline (`#ffc300`)
- Social icons at bottom: lucide-react icons (Facebook, Twitter, Instagram, LinkedIn)
- Copyright text at very bottom in muted white

### Hero Slider
- 3 slides, each with a full-width background image (architecture/interior)
- Overlay text box positioned lower-right with yellow (`#ffc300`) accent
- Each slide: heading (large, mixed case), subtitle (small, uppercase, letter-spaced), "View Project" pill button
- Button: white bg, black text, 30px border-radius, uppercase, letter-spacing: 2px
- Dots navigation: active dot yellow, inactive white/gray
- Auto-advancing slider with transitions

### About Section
- Two-column layout: left = full-width interior photo, right = text
- "Welcome" in small uppercase letters
- "Who we are" as main heading
- Body text paragraph
- 3 value props as sub-headings with descriptions:
  - "We are passionate"
  - "Honest Dependable"
  - "Always Improving"
- Background: white

### Services Section
- "Here are some of my expertise" heading
- 4 service cards in 2-column grid
- Each card: icon (use lucide-react), title, short description
- Cards: General Constructing, Pre-Construction Design, Building & Modeling, Construction Management
- Hover animation: fadeInLeft effect
- Background: white

### Services Image Grid
- 5 background images in a masonry/irregular grid layout
- Images fill their grid cells (use `picsum.photos` placeholders)
- No text overlay — pure image grid

### Counter Section
- Full-width parallax background image with `background-attachment: fixed`
- Dark overlay: `rgba(0,0,0,0.4)`
- 4 stat counters in a row: Projects, Employees, Constructors, Partners
- Counter numbers animate on scroll (optional)
- Labels in uppercase below numbers

### Work / Portfolio Section
- "My Work" as main heading, "Recent Work" as subheading
- 6 project cards in a 3-column grid
- Each card: background image, project name ("Work 01"–"Work 06"), category tags
- Categories: Building, House/Apartment, Dining Room, etc.
- Cards show dimensions (100 × 49)
- Hover effect on cards

### Blog Section
- "Recent Blog" heading
- 3 blog entry cards side by side
- Each: thumbnail image, date ("April 14, 2018"), category, comment count, title, excerpt
- Background: `#fafafa` or white

### Contact Section
- "Get in Touch!" heading
- Body text paragraph
- "Contact me!" form/button
- Background: white
- Form inputs: name, email, subject, message (standard contact form)

### Footer
- Absolute positioned at bottom of page
- Centered text, `rgba(255,255,255,0.3)` color
- Links to Component Dock: "Made with Component Dock" or "More templates at Component Dock"

## Design tokens to set in index.css `@theme`

```css
@theme {
  --color-brand: #ffc300;
  --color-brand-light: #ffc91a;
  --color-surface-dark: #000000;
  --color-surface-light: #ffffff;
  --color-surface-offwhite: #fafafa;
  --color-text-primary: #000000;
  --color-text-muted: #999999;
}
```

## Placeholder images

Use `https://picsum.photos/seed/buildwell-<n>/<w>/<h>` for all images:
- Hero slides: `buildwell-hero-1/1920/1080`, `buildwell-hero-2/1920/1080`, `buildwell-hero-3/1920/1080`
- About image: `buildwell-about/800/600`
- Service grid: `buildwell-svc-1` through `buildwell-svc-5` at various sizes
- Counter background: `buildwell-counter/1920/800`
- Portfolio: `buildwell-work-1` through `buildwell-work-6` at `800/600`
- Blog thumbnails: `buildwell-blog-1` through `buildwell-blog-3` at `400/300`

## Fonts

Add to `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

## Testing notes

- Sidebar: test nav link rendering, active state, responsive collapse
- HeroSlider: test slide transitions, dot navigation, auto-advance
- About: test heading, value props rendering
- Services: test 4 cards render with correct titles
- Counters: test counter labels and values
- Portfolio: test 6 project cards
- Blog: test 3 blog entries with metadata
- Contact: test form fields, submit handler
- Responsive: test sidebar collapse at mobile breakpoint
