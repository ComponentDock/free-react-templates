# Keepsake — Design Notes

## Template structure (section order)

1. **Navbar** — sticky top, brand "Keeps.", 7 nav links (Home, About, Services, Experiences, Works, Blog, Contact), hamburger on mobile
2. **Hero** — full viewport height, split layout: background image left (portrait), solid #d5c455 gold overlay right 50%, heading "I'm <Name>", subheading "UI/UX Designer & Developer", two CTA buttons
3. **About** — heading "About Me", personal description, stats/details sidebar
4. **Services** — heading "My Services", 2x2 grid of icon + title + description cards
5. **Experiences** — heading "My Experiences", vertical timeline of work entries
6. **Works** — heading "My Works", image grid of portfolio projects
7. **Blog** — heading "Recent Blog", 3 blog post cards (image, date, title, excerpt)
8. **Contact** — heading with contact form (Name, Email, Subject, Message, Send button)
9. **Footer** — dark background, "Made with Component Dock" link, social icons

## Fidelity notes

- **Hero split**: The original has a background photo on the left 50% and a solid #d5c455 overlay on the right 50% covering the hero section. On mobile the overlay is hidden (opacity 0).
- **Brand color**: #d5c455 is the defining color — used for the hero overlay, primary button backgrounds, and accent elements. It's a muted gold/mustard yellow.
- **Font**: Poppins (weights 300, 400, 500, 600) — clean geometric sans-serif.
- **Buttons**: Rounded pill shape (border-radius 0.25rem), primary = gold bg + white text, secondary = white bg + dark text. Both have arrow-forward icons.
- **Section backgrounds**: Alternating white (#fff) and light gray (#f8f8f8) — clean minimal aesthetic.
- **Footer**: Dark background, Component Dock attribution replaces original Colorlib link.
- **Placeholder images**: Use `https://picsum.photos/seed/keepsake-<n>/<w>/<h>` pattern.
- **Animations**: Original uses AOS (Animate On Scroll) — use Tailwind animate classes or framer-motion for fade-in effects.

## Component mapping

| Original section | React component | Notes |
|-----------------|-----------------|-------|
| navbar | `Navbar.tsx` | Sticky, collapse on mobile |
| hero-wrap | `Hero.tsx` | Split layout, background image + overlay |
| about | `About.tsx` | Two-column: text + stats |
| services | `Services.tsx` | 2x2 grid of ServiceCard |
| experiences | `Experiences.tsx` | Vertical timeline entries |
| works | `Works.tsx` | Image grid |
| blog | `Blog.tsx` | 3 blog post cards |
| contact | `Contact.tsx` | Form with validation |
| footer | `Footer.tsx` | Dark, Component Dock link |
