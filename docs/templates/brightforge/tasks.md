# Brightforge — Tasks & Design Notes

## Template Info

- **New name:** brightforge
- **Source:** ColorLib Classic
- **Preview:** https://preview.colorlib.com/theme/classic/
- **Category:** One-Page Business / Corporate
- **Layout:** Standard top navbar + full-width hero + alternating white/gray sections

## Implementation Tasks

### 1. Project Setup

- [ ] Copy simplest existing app as starter
- [ ] Rename package to `@free-react-templates/brightforge`
- [ ] Set up `public/CNAME` with `brightforge.free.componentdock.com`
- [ ] Set `homepage` in package.json
- [ ] Add Montserrat + Satisfy font links to `index.html` (Google Fonts)
- [ ] Configure Tailwind theme with brand tokens (#a1c4fd blue, #c2e9fb cyan, #f9f9f9 gray bg, #4f4f4f text)

### 2. Navbar Component

- [ ] Sticky top navbar with dark/transparent bg
- [ ] Brand text "Brightforge" (white, Montserrat bold)
- [ ] Nav links: Home, Services, Portfolio, Team, Price, Blog, Contact
- [ ] Smooth scroll to section anchors
- [ ] Mobile hamburger toggle

### 3. Hero Section

- [ ] Full-width background image (picsum.photos seed: brightforge-hero)
- [ ] Dark overlay (rgba(0,0,0,0.4))
- [ ] Centered heading "We Are Provide Creative Business" (white, large)
- [ ] Dot accent after heading text
- [ ] Italic/script quote "We Make Sure Best Business Solution For Our Client"
- [ ] "Contact Now" large blue gradient CTA button (bttn-lg style)

### 4. About Section ("We Offer Quick")

- [ ] White bg, 2-column layout
- [ ] Left: heading "We Are Provide Creative Business Solution", description paragraph, "Learn More" blue gradient CTA
- [ ] Right: about image (picsum.photos)
- [ ] Centered page title

### 5. Why Choose Us Section

- [ ] Gray bg (#f9f9f9), 2-column layout
- [ ] Left: video thumbnail with play button overlay (YouTube popup modal)
- [ ] Right: tabbed content (Our Mission, Our Vission, Our Support)
- [ ] Each tab: "SINCE WE HAVE 25 YEARS" subtitle, "EXPERIENCE IN THIS PASSION" heading, description, "View More" CTA
- [ ] Tab switching via React state

### 6. Features Section

- [ ] White bg, 3+2 grid of feature cards
- [ ] Cards: Unique Design (lightbulb icon), Clean Layout (code icon), Well Responsive (monitor icon), Pro Developing (terminal icon), Well Documented (file-text icon)
- [ ] Each card: icon with gradient bg (#a1c4fd → #c2e9fb), heading, description, "Read More" link
- [ ] Use lucide-react icons

### 7. Skills Section ("Our Professional Skill")

- [ ] Gray bg, 2-column layout
- [ ] Left: heading, description, 4 circular skill charts
- [ ] Charts: WebDesign 95%, Coding 85%, Photoshop 90%, Marketing 75%
- [ ] Circular progress with percentage counter (CSS or lightweight library)
- [ ] Right: service image (picsum.photos)

### 8. Portfolio Section ("Portfolio Project")

- [ ] White bg, full-width (container-fluid)
- [ ] Filter tabs: All, Graphics, UI/UX, Web Design, Coding, Developing, Photography
- [ ] 4-column grid of 8 portfolio items
- [ ] Each item: background image (picsum.photos) + hover overlay
- [ ] Filter functionality via React state
- [ ] Smooth transitions on filter change

### 9. Team Section ("Our expert team")

- [ ] White bg, 4-column grid
- [ ] 4 team member cards: photo (picsum.photos), name, position
- [ ] Hover overlay with skill bars (Photoshop %, Indesign %, etc.)
- [ ] Members: Roberto Peo (SEO Expert), Hallo Deco (Web Developer), Jone Doe (UI/UX Expert), Aliza France (App Developer)

### 10. Pricing Section ("Pricing Plan")

- [ ] Gray bg, 4-column grid
- [ ] 4 plan cards: Basic ($10/Month), Premium ($50/Month), Business ($80/Month), Ultimate ($100/Month)
- [ ] Each card: price, feature list, "Get Started" CTA button
- [ ] Monthly/Yearly toggle (switches prices)
- [ ] Active/highlighted plan styling

### 11. Blog Section ("Latest Blog")

- [ ] White bg
- [ ] Featured post: large image + title + description (left column)
- [ ] 3 smaller blog list items: thumbnail + title + date (right column)
- [ ] Blog titles: "Business Consultance Meetup" etc.

### 12. Counters Section

- [ ] Gray bg, 4-column grid
- [ ] 4 stat boxes: Project Complete (1172, bag icon), Happy Clients (1000, smile icon), Total Clients (1200, user icon), Awards (320, trophy icon)
- [ ] Each: circular icon (blue gradient bg), animated count number, label
- [ ] Count-up animation on scroll into view

### 13. Contact Section ("Contact Now")

- [ ] White bg, 2-column layout
- [ ] Left: contact form (Full Name, Phone, Email, Subject, Message textarea, "Send Now" button)
- [ ] Right: contact info list (address, phone, email with icons)
- [ ] Social icons below contact info

### 14. Footer

- [ ] Dark bg, 5-column layout:
  - About: "Brightforge" heading, description, social icons (Facebook, Twitter, Google+, LinkedIn)
  - News: links (Subscription, New Apps, Download now)
  - Company: links (Screenshot, Features, Price)
  - Resources: links (Support, Contact, Privacy & Term)
  - Solutions: links (Bug Fixing, Upgrade, Malware Protect)
- [ ] Copyright line
- [ ] "Made with Component Dock" link (componentdock.com)

### 15. Design Tokens & Theme

- [ ] brand-blue: #a1c4fd (primary)
- [ ] brand-cyan: #c2e9fb (secondary gradient)
- [ ] gradient: linear-gradient(#a1c4fd, #c2e9fb) (buttons, icons)
- [ ] text-dark: #4f4f4f (body)
- [ ] text-muted: #898989 (secondary)
- [ ] bg-gray: #f9f9f9 (alternate sections)
- [ ] Font: Montserrat (Google Fonts), Satisfy for accent

## Fidelity Notes

- **One-page layout with alternating white/gray sections** — the pattern is: white → gray → white → gray throughout
- **Blue gradient (#a1c4fd → #c2e9fb)** is the distinctive brand treatment — used on buttons, icons, skill charts, counters
- **Tabbed content in "Why Choose Us"** — 3 tabs (Mission, Vission, Support) with pill-style navigation
- **Portfolio has category filters** — implement with React state, not a library
- **Team cards have hover overlay** with skill bars — CSS transition on hover
- **Pricing has monthly/yearly toggle** — state-driven price switching
- **Counters should animate** on scroll into view (count-up effect)
- **Original uses icofont** — replace with lucide-react equivalents
- **Original uses Bootstrap 4 grid** — replace with Tailwind CSS grid/flex
- **Original uses WOW.js animations** — can skip or use CSS animations
- **Footer has 5 columns** (not 4) — About + News + Company + Resources + Solutions
- **Script font (Satisfy)** used for the hero quote — include via Google Fonts
