# Tasks & Research Notes: Wizstep (Colorlib Wizard 6)

## Research Summary

- **Source**: Colorlib Wizard 6 (`https://colorlib.com/wp/template/colorlib-wizard-6/`)
- **Preview URL**: `https://preview.colorlib.com/theme/colorlib-wizard-6/` — returned 404; screenshot was sole reference
- **New Name**: `wizstep`
- **Description from ColorLib**: "A very convenient and highly flexible free account creation snippet that comes as a 3-step wizard with multiple different options."
- **Category**: Bootstrap Wizard Templates / Account Creation

## Design Tokens (from Screenshot)

| Token                      | Value                          |
| -------------------------- | ------------------------------ |
| Background gradient top    | #e8d5f5 (light lavender)       |
| Background gradient bottom | #f5c6d0 (soft pink)            |
| Card background            | #ffffff (white)                |
| Card border-radius         | ~20px                          |
| Card shadow                | 0 10px 40px rgba(0,0,0,0.1)    |
| Button background          | #7e8bd4 (muted periwinkle)     |
| Button text                | #ffffff (white)                |
| Button border-radius       | ~8px                           |
| Input background           | #f5f5f5 (light gray)           |
| Input border-radius        | ~8px                           |
| Label text                 | #333333 (dark gray), uppercase |
| Heading text               | Semi-transparent white         |
| Status indicator active    | #e87ca0 (pink filled circle)   |
| Status indicator inactive  | Outlined circle                |
| Font family                | Sans-serif (Inter or similar)  |

## Section Implementation Plan

1. **Full-page gradient background**: Pastel lavender→pink gradient covering the viewport. Use a `linear-gradient` in Tailwind theme or inline style.

2. **Centered wizard card**: White floating card with rounded corners and drop shadow, centered vertically and horizontally. Max-width ~480px.

3. **Heading area**: Large semi-transparent white heading at top of page, above the card.

4. **Profile picture upload (Step 1)**: Circular placeholder with camera icon, "CHOOSE PICTURE" label. Use file input + preview. Replace with selected image.

5. **Form fields (Step 1)**: First Name, Last Name, Team Name, Email, Password. Uppercase labels, light gray input backgrounds, rounded corners. Small pink/outlined status circles next to fields.

6. **Step indicator**: Three dots centered below the card. Active dot filled, completed dots filled, future dots outlined.

7. **Continue button**: Periwinkle blue, uppercase "CONTINUE →" with right arrow icon. Full-width or centered.

8. **Step 2**: Additional team/account details fields (role, bio, etc.). Same card layout.

9. **Step 3**: Confirmation/summary view with terms checkbox and Submit button.

10. **Success screen**: "Complete!" header, "Registration Complete" message, "Start Over" button.

11. **Footer**: "More templates at Component Dock" with link to `https://www.componentdock.com/`.

## Fidelity Notes

- Match the pastel gradient background exactly (lavender → pink)
- Match the floating white card with soft shadow and rounded corners
- Match the dot-based step indicators (not numbers, not lines)
- Match the periwinkle blue button color
- Match the uppercase labels and clean sans-serif typography
- Match the circular profile picture placeholder with camera icon
- Match the overall minimalist, user-centric aesthetic
- Use `https://picsum.photos/seed/wizstep-<n>/<w>/<h>` for placeholder images
- Use `lucide-react` for icons (camera, arrow-right, check)
- Footer must link Component Dock — replace any ColorLib attribution
