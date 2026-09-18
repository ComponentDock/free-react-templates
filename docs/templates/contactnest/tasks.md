# ContactNest (ColorLib Contact Form V6) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-contactnest`. Recreation name: **ContactNest**
> (NEW name — the ColorLib source keeps its name "Contact Form V6").

## Source mapping

- **ColorLib item:** "Contact Form V6" (TEMPLATES.md line 1440; section
  "## Contact Forms" area).
- **Source URL:** https://colorlib.com/wp/template/contact-form-v6/
- **Preview URL — UNREACHABLE (verified 2026-09-17):**
  `https://preview.colorlib.com/theme/contact-form-v6/` returns 404.
  Design captured from the ColorLib page screenshot + metadata.
- **Description:** "A super creative way of displaying a contact form on your
  website featuring an animated icon that opens a functional pop-up."

## Reference research (done — do not redo)

### Screenshot (ContactFrom_v6.jpg, 1920×939 AVIF)

Browsed visually (2026-09-17). Full-viewport layout:
- **Background:** Darkened/grayscale Google Maps image of NYC metro area
  (streets, neighborhood labels visible but muted). The map is the entire
  page — no header, nav, or other chrome.
- **Modal card:** White rounded-corner card (~70% viewport width, centered
  both axes). Subtle drop shadow. Gray circular close (X) button at
  top-right corner.
- **Card interior (top to bottom):**
  1. "Contact Us" — large bold sans-serif heading, dark gray/black.
  2. Two-column row: Name field (label "Your Name", placeholder "Join Doe")
     and Email field (label "Email", placeholder "Enter your email
     address"). Both use underline-only borders (thin gray line below).
     The Name field shows a coral/pink active underline (focused state).
  3. Message textarea — full width, label "Message", placeholder "Your
     message here...", underline border.
  4. Submit button — coral/salmon pill-shaped button, white text "Submit →",
     left-aligned.
  5. Footer text — centered below button: "For any question contact our
     24/7 call center: +001 345 6889" (phone in coral/pink).

### Design tokens extracted

| Element            | Token/Value                       |
|--------------------|-----------------------------------|
| Brand accent       | `#ff6b6b` coral/salmon            |
| Card background    | `#ffffff` white                   |
| Card shadow        | `0 10px 40px rgba(0,0,0,0.15)`   |
| Card border-radius | `8px`                             |
| Card max-width     | `800px`                           |
| Font               | `"Open Sans", sans-serif` (est.) |
| Heading color      | `#333333`                         |
| Label color        | `#999999`                         |
| Input text         | `#333333`                         |
| Underline default  | `#e0e0e0`                         |
| Underline focus    | `#ff6b6b`                         |
| Button bg          | `#ff6b6b`                         |
| Button text        | `#ffffff`                         |
| Button radius      | `30px` pill                       |
| Close button bg    | `#e0e0e0` circle                  |
| Footer text        | `#999999`                         |
| Footer phone       | `#ff6b6b`                         |

### Visual aesthetic

Minimal, clean, modern contact form. The dark map background creates
dramatic contrast with the bright white card. The coral accent adds warmth.
No imagery beyond the map — placeholder images not needed for the card
content itself, but a map-like background image (picsum seed or CSS
gradient) is needed for the page background.

## Implementation tasks

1. **Scaffold app** — `apps/contactnest/` from a minimal existing app
   (copy structure, rename package to `@free-react-templates/contactnest`).
2. **Page background** — full-viewport dark map image with overlay. Use
   `https://picsum.photos/seed/contactnest-map/1920/1080` with a dark
   semi-transparent overlay, or a dark gradient fallback.
3. **Modal card component** — centered white card with shadow, close button.
4. **Form fields** — Name + Email (two-column grid), Message (full-width).
   Underline-only borders, coral focus state.
5. **Submit button** — coral pill, left-aligned, arrow icon from lucide-react.
6. **Footer text** — centered, phone number in coral.
7. **Responsive** — stack columns on mobile, adjust card padding.
8. **Footer ComponentDock link** — "Made with Component Dock" linking
   to https://www.componentdock.com/.
9. **Tests** — Vitest + Testing Library, 100% coverage on new code.
10. **Verification** — `scripts/verify-app.sh contactnest` passes.
