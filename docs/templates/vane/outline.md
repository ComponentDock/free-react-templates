# Vane — Implementation Outline

Source: ColorLib Martin (https://preview.colorlib.com/theme/martin/)
New name: vane
Stack: React 19 · Vite · Tailwind CSS 4 · TypeScript

## Section Order (matches source 1:1)

1. **Navbar** — fixed position, hamburger icon top-right, brand "V." top-left. Click opens full-screen blue (#002bdc) overlay with centered nav links: Home, About, Services, Work, Blog, Contact. Social links (Twitter, Facebook, Instagram, Dribbble) at bottom of overlay.
2. **Hero** — full-screen dark (#000) background, centered text. Headline: "I'm a Digital Product Designer & Art Director based in Berlin." Subheadline: "Strategy, design and a bit of magic". Yellow (#ffdd00) "Hire me now" CTA button.
3. **Services** — heading "What I Do" + subheading "Strategy, design and a bit of magic". Three category groups arranged in columns:
   - **Explore:** Design Sprints, Product Strategy, UX Strategy
   - **Create:** Information, UX/UI Design, Branding
   - **Learn:** Prototyping, User Testing, UI Testing
4. **Work/Projects** — heading "Happy spending my time to this projects". Grid of project cards (2-3 columns), each with: image, category tags (e.g. "UI/UX, Art Direction"), title, short description, "See details" link.
5. **Subscribe/Newsletter** — description text + email input + subscribe button.
6. **Footer** — "Lets Talk" heading, description, contact info (email, phone, address), social links (Facebook, Twitter, Dribbble), copyright, Component Dock link.

## Design Notes

### Colors
- Brand primary: #002bdc (vibrant blue) — nav overlay, headings, accents
- Accent/CTA: #ffdd00 (yellow) — buttons, highlights
- Dark: #000 (hero, overlays)
- Light: #f7f7f7, #ebebeb, #e6e6e6 (content section backgrounds)
- Gray: #b7c2c2 (subtle backgrounds)
- Text: #1a1a1a, #333333 primary; #4d4d4d, #999999 secondary

### Typography
- Font: Poppins (Google Fonts) throughout
- Bold headings, regular body text
- Hero headline is large and prominent

### Layout
- Hero: full-viewport, flexbox centered content
- Services: 3-column grid with category headers
- Work: responsive grid of project cards (2-3 cols)
- Subscribe: centered form layout
- Footer: multi-column with contact info and social links

### Interactions
- Hamburger nav → full-screen overlay with scale/fade animation
- Nav links scroll to sections (smooth scroll)
- Project cards may have hover effects
- Subscribe form with email validation

### Assets
- Hero background: picsum.photos/seed/vane-hero/1920/1080
- Project images: picsum.photos/seed/vane-proj-N/600/400
- Icons: lucide-react (replace IcoMoon)
- No copied CSS/images from source

### Fidelity Priorities
1. Full-screen hero with dark bg and yellow CTA
2. Hamburger → full-screen blue overlay navigation
3. 3-category services grid (Explore, Create, Learn)
4. Project cards with category tags and descriptions
5. Bold blue (#002bdc) + yellow (#ffdd00) color scheme
6. Poppins font throughout
7. Sharp 1px button radius (not rounded)
