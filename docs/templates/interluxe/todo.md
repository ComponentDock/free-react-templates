# Interluxe — Prep Notes

Source: ColorLib Balay
Preview: https://preview.colorlib.com/theme/balay/
New name: interluxe
Slug: balay

## Structure order (from preview)

1. Sidebar (left, fixed) — logo + nav + footer
2. Hero slider (full-width, 3 slides)
3. About section ("Who we are")
4. Services section ("Here are some of my expertise")
5. Blog section ("Read our articles")
6. Contact section ("Get in touch")
7. Footer (Component Dock)

## Section-by-section fidelity notes

### 1. Sidebar navigation

- Dark charcoal background (#2C2C2C)
- Logo text: "Interluxe" (we rename from "Balay")
- Nav links: Home, Project, About, Services, Blog, Contact
- Active link: gold (#FFC300) with underline animation
- Default link: rgba(255,255,255,0.5)
- Footer: copyright text (rgba(255,255,255,0.3)) + social icons (Facebook, Twitter, Instagram, LinkedIn)
- Mobile: collapses to hamburger toggle

### 2. Hero slider

- Full-width, 3 slides with background images + dark overlay
- Slide 1: "An Inspiring Built Space"
- Slide 2: "Interior Design Studio"
- Slide 3: "The National Gallery"
- Each slide: heading + subtext + "View Project →" CTA button
- CTA: gold (#FFC300) background, white text, arrow icon
- Auto-advancing slider (FlexSlider → use Swiper or custom in React)

### 3. About section

- 2-column layout: image left, text right
- Meta label: "Welcome" (gold #FFC300)
- Heading: "Who we are"
- Description paragraphs
- 3 feature boxes in a row with check icons:
  - "We are passionate" (active/highlighted)
  - "Honest Dependable"
  - "Always Improving"
- Each box: icon circle + heading text

### 4. Services section

- Meta label: "What I do?" (gold)
- Heading: "Here are some of my expertise"
- 2-column grid of service items
- Each service: icon (flaticon) + heading + description
- Services: General Contracting, Interior Design, Consultancy, Building

### 5. Blog section

- Meta label: "Blog" (gold)
- Heading: "Read our articles"
- 3-column grid of blog cards
- Each card: image + date badge + title + description + "Read more" link
- Placeholder images via picsum.photos

### 6. Contact section

- Meta label: "Contact" (gold)
- Heading: "Get in touch"
- Contact form: name, email, subject, message textarea, submit button
- Submit button: gold (#FFC300) background

### 7. Footer (Component Dock)

- "Made with Component Dock" or similar
- Link to https://www.componentdock.com/

## Implementation approach

- Create `apps/interluxe/` directory
- Copy simplest existing app as scaffold
- Build custom Sidebar component (collapsible on mobile)
- Use Swiper.js or custom slider for hero
- Use Tailwind for styling + @theme for brand tokens
- Google Fonts: Quicksand via <link> in index.html
- Icons: lucide-react (replace flaticon/icomoon)
- Placeholder images: https://picsum.photos/seed/interluxe-n/WxH
