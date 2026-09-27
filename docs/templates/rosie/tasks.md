# Rosie (Colorlib Regform 20) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later. Recreation name: **Rosie** (NEW name — the ColorLib source keeps its
> name "Colorlib Reg Form V20").

## Source mapping

- **ColorLib item:** "Colorlib Regform 20" (TEMPLATES.md line 2637; section
  "## Registration Forms" group). The slug `colorlib-regform-20` appears in
  TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/colorlib-regform-20/
- **Preview URL — UNREACHABLE (404 at prep time):**
  `https://preview.colorlib.com/theme/colorlib-regform-20/` returned 404.
  Design captured from the ColorLib screenshot:
  https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-reg-form-20.jpg
  (1200×972 AVIF, converted to PNG for analysis).
- **Description:** Free online signup form template — a single-page registration
  form with a feminine beauty/cosmetics aesthetic.

## Reference research (done — do not redo)

### Screenshot analysis (`colorlib-reg-form-20.jpg`)

Full-viewport soft pink background (#f5cac3 approx). Centered white card with
subtle shadow and ~12px rounded corners. Two-column split layout:

**Left column — decorative image collage:**
- Overlapping images: a portrait of a woman (beauty/fashion), floral magnolia
  blossoms, and cosmetic product bottles with green leaves
- Pink square frame overlays (hollow rectangles) layered among the images for
  decoration
- Images are arranged in a casual, overlapping collage style

**Right column — sign-up form:**
- Heading: "Sign Up" in an elegant serif/script font, coral pink (#e88e8e)
- Three input fields, each preceded by a small pink dot (bullet):
  - NAME (uppercase placeholder, gray)
  - E-MAIL (uppercase placeholder, gray)
  - PASSWORD (uppercase placeholder, gray)
- Inputs: pill-shaped (25px radius), light gray background (#f5f5f5), no border
- Below password: checkbox "I agree all statement in Terms & Conditions"
  - "Terms & Conditions" is a coral pink link
  - Checkbox accent is coral pink
- "SIGN UP" button: coral pink pill-shaped button, white uppercase text
- "Already Have account? Login" — "Login" in coral pink

### Design tokens extracted

| Token | Value |
|---|---|
| Page background | #f5cac3 (soft salmon/blush pink) |
| Card background | #ffffff |
| Card shadow | 0 4px 20px rgba(0,0,0,0.08) |
| Card border-radius | 12px |
| Brand/accent pink | #e88e8e |
| Input background | #f5f5f5 |
| Input border-radius | 25px (pill) |
| Placeholder color | #999999 (uppercase) |
| Body text | #333333 |
| Font — heading | Serif/script (Playfair Display recommended) |
| Font — body | Sans-serif (Poppins recommended) |
| Button background | #e88e8e |
| Button text | #ffffff |
| Button border-radius | 25px (pill) |

## Section-by-section implementation notes

### 1. Full-viewport pink background
- Set `min-h-screen` and `bg-[#f5cac3]` on the page wrapper
- Center the card with flexbox (`flex items-center justify-center`)

### 2. White card
- White bg, `rounded-xl`, `shadow-lg`, `max-w-4xl` or similar width
- Two-column flex layout on desktop, stacked on mobile
- Left column ~45% width, right column ~55%

### 3. Left column — image collage
- Use `picsum.photos/seed/rosie-<n>` for 3 placeholder images
- Position with relative/absolute to create overlapping collage
- Add pink square frame overlays (absolute positioned hollow divs with
  pink borders)
- Hide on mobile, show on md+ breakpoints

### 4. Right column — form
- Center form content with padding
- "Sign Up" heading: Playfair Display font, text-3xl, coral pink
- Each field: pink dot (small div, rounded-full, bg-[#e88e8e]) + input
- Inputs: `rounded-full bg-[#f5f5f5] px-5 py-3 w-full uppercase
  placeholder:text-[#999] placeholder:uppercase placeholder:text-sm`
- No visible border (use bg color distinction)

### 5. Terms checkbox
- Custom styled checkbox with coral pink accent
- "Terms & Conditions" as a link styled in coral pink

### 6. Sign Up button
- Full-width or auto-width coral pink pill button
- `rounded-full bg-[#e88e8e] text-white px-8 py-3 uppercase tracking-wider`

### 7. Login link
- Inline text "Already Have account? " + "Login" link in coral pink

### 8. Footer
- Minimal footer with Component Dock link
- Follow existing footer pattern from other templates

### 9. Responsive behavior
- Mobile: card stacks vertically, image collage hidden or shown as single image
- Tablet+: two-column split as designed

## Files to create

- `apps/rosie/` — full app folder (copy simplest existing app, rename package)
- `apps/rosie/src/App.tsx` — compose sections
- `apps/rosie/src/components/SignUpForm.tsx` — the form section
- `apps/rosie/src/components/ImageCollage.tsx` — decorative images
- `apps/rosie/src/index.css` — Tailwind + theme tokens
- `apps/rosie/public/CNAME` — `rosie.free.componentdock.com`
- `apps/rosie/package.json` — `@free-react-templates/rosie`
