# Bracify — Implementation Notes

**Source:** ColorLib "Toothsy" → https://preview.colorlib.com/theme/toothsy/
**New name:** Bracify

## Section-by-Section Fidelity Notes

### 1. Navbar
- Sticky on scroll (use `position: sticky; top: 0`)
- Logo: "Bracify" — split brand color on "Bra" prefix, black on rest (or similar split)
- Centered nav links with underline active state (`border-bottom: 2px solid #51eaea`)
- Mobile: hamburger icon, off-canvas slide-in menu
- Links: Home, Services, About, Doctors, Testimonials, Blog, Contact

### 2. Hero
- Full-viewport-height cover section with background image (picsum placeholder)
- Semi-transparent dark overlay for text readability
- Left-aligned content: heading + subtext + CTA button
- Button: `bg-[#51eaea] text-white py-3 px-5 rounded`
- Use AOS-style fade-up animation (can skip, focus on layout)

### 3. Services
- White background, section padding
- Section heading: small gray subheading + bold black heading
- 3×2 grid of icon cards (CSS Grid or Tailwind grid)
- Each card: flaticon-style icon (use lucide-react), title, 1-line description
- Icons on brand color background circles

### 4. About
- Gradient background: `bg-gradient-to-b from-[#51eaea] to-[#499bea]`
- Centered video embed placeholder (aspect-ratio box with play icon overlay)
- 4-column stat counter row (numbers with `+` suffix)
- White text on gradient background

### 5. Team
- White background, section padding
- 3 equal-width cards on desktop, stacked on mobile
- Each card: circular photo (`rounded-full`), name, role (uppercase gray), bio, social icon buttons
- Social buttons: outlined style, border on hover turns brand color

### 6. Testimonials
- Light gray background (`bg-[#f4f5f9]`)
- Carousel/slider of testimonial cards
- Each card: blockquote text, circular avatar, name
- Can implement as a simple auto-scrolling carousel or static grid

### 7. Blog
- White background, section padding
- Two-column layout:
  - Left (60%): featured post with large image, title, meta (date + author), excerpt, "Read More" link
  - Right (40%): 4 compact post entries, each with title + meta line

### 8. Contact
- Light gray background (`bg-[#f4f5f9]`)
- Two columns: form (left, wider) + text (right)
- Form fields: First Name, Last Name (side by side), Email, Message (textarea), Submit
- Submit button: `bg-[#51eaea] text-white py-3 px-5 rounded`
- Right column: heading + paragraph

### 9. Footer
- Dark background (`bg-[#333]`)
- Top section: About Us (text column), Features (link list), Newsletter form (input + button), Follow Us (social icons)
- Bottom section: copyright text + "Made with ❤️ by Component Dock" link
- Links: all `text-[#999]`, hover white

## Design Token Summary for Tailwind Theme

```css
/* index.css @theme */
--color-brand: #51eaea;
--color-brand-dark: #499bea;
--color-surface: #f4f5f9;
--color-footer: #333333;
--color-text-body: #939393;
--color-text-subtle: #b8b8b8;
--font-family-heading: "Nunito", sans-serif;
--font-family-body: "Nunito", sans-serif;
```

## Component Plan

| Component | Source |
|-----------|--------|
| `Navbar.tsx` | New |
| `Hero.tsx` | New |
| `Services.tsx` | New |
| `About.tsx` | New |
| `Team.tsx` | New |
| `Testimonials.tsx` | New |
| `Blog.tsx` | New |
| `Contact.tsx` | New |
| `Footer.tsx` | New |

## TODO

- [ ] Create `apps/bracify/` from template starter
- [ ] Set up `package.json` with `@free-react-templates/bracify`
- [ ] Write `index.html` with Nunito Google Fonts link
- [ ] Write `src/index.css` with Tailwind theme tokens
- [ ] Implement Navbar component
- [ ] Implement Hero component
- [ ] Implement Services component
- [ ] Implement About component
- [ ] Implement Team component
- [ ] Implement Testimonials component
- [ ] Implement Blog component
- [ ] Implement Contact component
- [ ] Implement Footer component
- [ ] Compose in App.tsx
- [ ] Write tests (100% coverage)
- [ ] Run `scripts/verify-app.sh bracify`
- [ ] Create `public/CNAME` with `bracify.free.componentdock.com`
- [ ] Set `homepage` in `package.json`
