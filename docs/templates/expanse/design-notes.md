# Expanse — Design Notes

## Template structure (section order)

1. **Navigation** — split layout: left links (Home, Portfolio, About) | centered logo "Expanse." | right links (Services, Skills, Testimonial, Journal, Contact) + theme toggle icon. Hamburger on mobile.
2. **Hero / Cover** — full viewport, dark parallax background image, large bold white heading "Expanse", subheading, scroll-down mouse indicator at bottom center
3. **Portfolio** — heading "Portfolio", grid of project items with image + title overlay, filter tabs for categories, hover reveals red (#D63447) overlay with details
4. **Client Logos** — row of partner/client logos (static or scrolling)
5. **About** — heading "About", description text with accompanying image
6. **Services** — heading "Services", list of services with icon + title + description
7. **Skills / Counters** — heading "Skills", animated number counters (projects, clients, etc.), green (#8cba51) accent on numbers
8. **Testimonials** — heading "Testimonial", carousel of quotes with name/role, navigation dots/arrows
9. **Journal** — heading "Journal", 3 blog post cards (image, date, title, excerpt)
10. **Contact** — heading "Contact", form with Name, Email, Subject, Message, Send button
11. **Footer** — dark (#191919) background, Component Dock attribution, social links

## Fidelity notes

- **Nav split**: Desktop has a unique split navigation — logo centered, with nav links on BOTH the left and right sides. This is the signature layout of the Unfold design. On mobile, collapses to a standard hamburger menu.
- **Dark theme default**: The original defaults to dark theme with a `[data-bs-theme="dark"]` attribute. Light mode is available via toggle. Implement dark-first.
- **Brand color**: #D63447 (vibrant red) is the defining accent — used for portfolio item hover overlays and interactive accents.
- **Fonts**: Arimo (body text), Raleway (headings/display), Georgia (serif accent). Load all three from Google Fonts.
- **Hero**: Full viewport height, parallax background image, very large bold heading (5rem/900 weight), scroll indicator with mouse icon animation.
- **Portfolio hover**: Items show a red (#D63447) overlay on hover with project details. Filter tabs allow category filtering.
- **Skill counters**: Animated counting numbers on scroll. Green (#8cba51) accent on counter values.
- **Footer**: Dark (#191919), fixed position on desktop (relative on mobile), Component Dock link replaces original Colorlib attribution.
- **Placeholder images**: Use `https://picsum.photos/seed/expanse-<n>/<w>/<h>` pattern.

## Component mapping

| Original section | React component | Notes |
|-----------------|-----------------|-------|
| nav | `Navbar.tsx` | Split centered logo layout, theme toggle |
| cover-v1 | `Hero.tsx` | Full viewport parallax, mouse scroll indicator |
| portfolio-section | `Portfolio.tsx` | Grid + filter tabs + hover overlays |
| client logos | `ClientLogos.tsx` | Logo row/carousel |
| about-section | `About.tsx` | Text + image layout |
| services-section | `Services.tsx` | Service cards with icons |
| skills-section | `Skills.tsx` | Animated counters |
| testimonial-section | `Testimonials.tsx` | Carousel with dots/arrows |
| journal-section | `Journal.tsx` | 3 blog post cards |
| contact-section | `Contact.tsx` | Form with validation |
| footer | `Footer.tsx` | Dark, Component Dock link |
| theme-toggle | `ThemeToggle.tsx` | Dark/light mode switcher |
