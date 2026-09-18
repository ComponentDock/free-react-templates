# TouchBase — Implementation Notes

## Source

- ColorLib: "Contact Form V12" — https://colorlib.com/wp/template/contact-form-12/
- Preview: https://preview.colorlib.com/theme/bootstrap/contact-form-12/
- Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/contact-form-12.jpg

## Structure (section order)

1. **ContactSection** — the entire page content (single section, no navbar/hero/footer unless added)
   - Two-column container (Bootstrap-style row with col-md-5 + col-md-6)
   - Left: Heading + paragraph + contact details list
   - Right: Form + success/error messages
2. **Footer** — ComponentDock attribution (per AGENTS.md rule 5)

## Section-by-section fidelity notes

### ContactSection

- **Layout:** Two flex columns. Left column takes ~45% width, right ~55%. On mobile, stack vertically.
- **Left column:**
  - h2 "Contact Us": Poppins, 700 weight, ~3.5rem, black. Large and bold.
  - Description paragraph: Roboto, #999, line-height 2. Generous bottom margin (mb-5).
  - Company details: Unstyled list (no bullets), each item is a flex row with icon + text. Icons from lucide-react: MapPin, Phone, Mail. Text is black (#000). Each item has mb-2 spacing.
- **Right column:**
  - Form with three fields: Name (text), Email (text), Message (textarea).
  - Each field: visible `<label>` above input (black, col-form-label style).
  - Inputs: full width, height 55px, 1px solid #d9d9d9 border, no border-radius (square). On focus: border turns black (#000), no shadow.
  - Textarea: resizable vertically, ~7 rows.
  - Submit button: "Send Message", Bootstrap primary blue (#0d6efd), square corners, height 55px, white text, py-2 px-4 padding.
  - Success message: hidden by default, shows "Your message was sent, thank you!" in green (#55A44E), bold, 18px.
  - Error message: hidden by default, red (#B90B0B).

### Footer

- Simple footer with ComponentDock link. Keep minimal.

## Design decisions

- Use lucide-react icons instead of icomoon (original uses icomoon icon font).
- Use picsum.photos for any placeholder images if needed (none in this template).
- Form validation: use native HTML5 required attributes or a lightweight zod schema. Keep it simple — this is a single-page contact form, not a complex multi-step form.
- The original has no navbar, no hero, no parallax — it's just the contact section. Keep it that way for fidelity.
- Spacing: generous padding (7rem top/bottom on the content container).

## Component breakdown

```
src/
  App.tsx              — renders ContactSection + Footer
  components/
    ContactSection.tsx — the full two-column contact layout
    ContactForm.tsx    — the form (Name, Email, Message, Submit)
    ContactDetails.tsx — address, phone, email list with icons
    SuccessMessage.tsx — green success notification
    ErrorMessage.tsx   — red error notification
  index.css            — Tailwind entry + @theme tokens
```

## Tailwind @theme tokens

```css
@theme {
  --color-brand: #0d6efd;
  --color-text-body: #999999;
  --color-text-heading: #000000;
  --color-border-input: #d9d9d9;
  --color-border-focus: #000000;
  --color-success: #55A44E;
  --color-error: #B90B0B;
  --font-heading: "Poppins", sans-serif;
  --font-body: "Roboto", sans-serif;
}
```
