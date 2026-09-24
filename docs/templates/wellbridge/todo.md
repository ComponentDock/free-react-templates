# Wellbridge — Implementation Notes

Source: ColorLib CareMed
Preview: https://preview.colorlib.com/theme/caremed/

## Section Order (top to bottom)

1. Header (top bar + nav + floating logo)
2. Hero Slider (3 slides, background images, headline + CTA)
3. Info Boxes (3 cards: Working Hours, Appointments, Emergency Cases)
4. About (text left, image right)
5. Departments (parallax bg, 4 department cards)
6. Services (3×2 grid, 6 service cards)
7. CTA (parallax bg, heading + button)
8. Footer (3 columns + copyright bar)

## Structure & Fidelity Notes

### Header
- Top bar: full-width navy (#283290), white text. Left: FAQ + "Request an Appointment" links. Right: emergency phone in red (#ff0030) highlight block.
- Nav: white bg, 5 links (Home, About us, Services, News, Contact), dark text.
- Logo: floating box with box-shadow, absolute positioned overlapping header top. "Well" in navy, "bridge" in green accent. Green "+" box mark. "Health Care Center" subtitle in gray.

### Hero
- Full-width image slider (900px height in original). Use picsum.photos backgrounds.
- Dark text overlay: "Medicine made with care" h1 (69px, weight 900).
- Subtitle paragraph in gray (#747474).
- "read more" button: navy bg, uppercase, green bottom-border animation on hover.
- Green 2px progress bar at bottom.

### Info Boxes
- 3 cards overlapping hero bottom (negative margin -59px).
- Navy (#283290) background, green 4px bottom border.
- Box 1: Working Hours — alarm clock icon, schedule list.
- Box 2: Appointments — phone icon, description text.
- Box 3: Emergency Cases — bell icon, phone number, description.
- Hover: box-shadow.

### About
- 2-column, equal height row.
- Left: section title with green accent line above ("A great medical team to help your needs"), paragraph, "read more" button.
- Right: illustration/image (use picsum.photos).

### Departments
- Parallax background image (use picsum.photos/seed/wellbridge-dept/1920x400).
- Section title "Our Medical Departments" in white.
- 4 cards: 3 with image + department name + doctor name, 1 with text + "read more" button.

### Services
- White background, centered section title "Our Featured Services".
- 3×2 grid of service cards. Each: icon (lucide-react), title, paragraph.
- Services: Free Checkups, Screening Exams, RMI Services, Dentistry, Neonatology, Biochemistry.

### CTA
- Parallax background (use picsum.photos/seed/wellbridge-cta/1920x400).
- White text: "Need a personal health plan?" + description + "request a plan" button.
- Button: same style as other CTAs (navy bg, green accent).

### Footer
- Dark bg (#232323 or similar).
- 3 columns:
  - Col 1: Logo + subtitle + description + contact list (phone, email, address with icons).
  - Col 2: "Useful Links" — list of nav links.
  - Col 3: "Recent News" — 3 news items with title + date.
- Copyright bar: copyright text + social media icons (Pinterest, Facebook, Twitter, Dribbble, Behance, LinkedIn via lucide-react or Font Awesome equivalents) + "Component Dock" link.

## Component Map

| Section | Component File |
|---|---|
| Header | `components/Header.tsx` |
| Hero Slider | `components/HeroSlider.tsx` |
| Info Boxes | `components/InfoBoxes.tsx` |
| About | `components/About.tsx` |
| Departments | `components/Departments.tsx` |
| Services | `components/Services.tsx` |
| CTA | `components/CTA.tsx` |
| Footer | `components/Footer.tsx` |

## Tailwind Theme Tokens (for index.css @theme)

```css
@theme {
  --color-brand: #283290;
  --color-accent: #20d34a;
  --color-emergency: #ff0030;
}
```

## Dependencies

No new dependencies needed. Use:
- `lucide-react` for icons (phone, mail, map-pin, clock, stethoscope, etc.)
- `cn()` from packages/ui for class composition
- Placeholder images: `https://picsum.photos/seed/wellbridge-<n>/<w>/<h>`
