# FormSpark — Design Notes

Source: ColorLib Contact Form 04 (slug: `contact-form-04`)
Preview: https://preview.colorlib.com/theme/contact-form-04/ (404 at prep time)
Tokens extracted from: screenshot analysis (pixel color sampling + OCR)

## Layout structure (top to bottom)

1. **Navbar** — white background, minimal (logo left, nav links right). No
   visible brand color in the navbar.
2. **Page title** — "Contact Form #04" centered above the card, dark text on
   white/light background.
3. **Two-column card** — centered, roughly 80% width, with subtle rounded
   corners (~4px):
   - **Left column (~50%)**: Deep purple (#512D97) background. Contains:
     - "Send us a message" heading (Playfair Display, white, centered)
     - Name input (underline-style, white bottom border)
     - Email input (underline-style, white bottom border)
     - Subject input (underline-style, white bottom border)
     - Message textarea (underline-style, white bottom border, taller)
     - "Send Message" button (white text, no distinct background — blends with
       panel; appears as white text on purple)
   - **Right column (~50%)**: White background. Contains:
     - "Contact us" heading (Playfair Display, dark)
     - "We're open for any suggestion or just to have a chat" subtext
     - Address with icon: "198 West 21th Street, Suite 721, New York NY 10016"
     - Phone with icon: "+ 1235 2355 98"
     - Email with icon: "info@yoursite.com"
     - Website with icon: "ysite.com" (globe icon)
4. **Below card** — white space (no additional content sections)
5. **Footer** — light gray, minimal. Replace any ColorLib attribution with
   Component Dock link.

## Section-by-section fidelity notes

### Navbar
- White background, no purple accent.
- Logo on left, navigation links on right.
- Keep simple; no mega-menu or dropdowns visible in screenshot.

### Page title
- "Contact Form #04" — centered, likely a breadcrumb or page heading.
- Dark text (#333), moderate font size.

### Two-column card
- The card is the main visual element. The purple left column is the dominant
  visual feature (~30% of viewport width, ~50% of card width).
- Purple panel has generous vertical padding (~60px top/bottom).
- Form inputs use underline-style borders (white bottom-border, no background),
  not filled/boxed inputs.
- The "Send Message" button appears to blend with the purple background — it's
  white text without a distinct button background color. Could be implemented as
  a text button or a subtle outlined button.
- Right panel is clean white with contact info listed vertically, each item
  preceded by an icon (map pin, phone, envelope, globe).

### Footer
- Light gray (#FAFAFA) background matching the page.
- Minimal content — just the Component Dock attribution link.
- No social media icons or additional links visible.

## Component breakdown

| Component     | File                  | Notes                                      |
| ------------- | --------------------- | ------------------------------------------ |
| Navbar        | `Navbar.tsx`          | White, logo + nav links                    |
| PageTitle     | `PageTitle.tsx`       | "Contact Form #04" centered heading        |
| ContactCard   | `ContactCard.tsx`     | Two-column wrapper (flex or grid)          |
| FormPanel     | `FormPanel.tsx`       | Purple left column with form               |
| ContactInfo   | `ContactInfo.tsx`     | White right column with contact details    |
| InfoItem      | `InfoItem.tsx`        | Reusable icon + text row for contact info  |
| Footer        | `Footer.tsx`          | Component Dock link                        |

## Implementation order

1. Scaffold app from existing template (copy simplest contact form app)
2. Set up theme tokens in `index.css` (brand purple, fonts)
3. Build Navbar + PageTitle
4. Build ContactCard wrapper (two-column flex/grid)
5. Build FormPanel with form fields
6. Build ContactInfo with InfoItem components
7. Build Footer
8. Compose in App.tsx
9. Add responsive styles (stack columns on mobile)
10. Write tests (100% coverage)
11. Verify build + typecheck + lint
