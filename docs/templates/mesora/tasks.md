# Mesora — Prep Notes

**Source:** ColorLib Contact Form V18
**Preview:** https://preview.colorlib.com/theme/contact-form-v18/ (404 — screenshot used as sole reference)
**Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v18.jpg

## Structure (section order)

1. Split Hero + Contact Form Panel (single full-viewport section)

## Design notes

- **Layout:** 50/50 split. Left = full-height background image. Right = white panel with form.
- **Background image:** Dark overhead desk photography (laptop, notebook, phone, coffee). Use a placeholder: `https://picsum.photos/seed/mesora-desk/960/1080` or similar.
- **Form panel:** White (#ffffff), vertically centered content, generous padding.
- **Heading:** "Send Us A Message" — dark charcoal (#333333), large sans-serif font.
- **Form fields:** Three fields stacked vertically.
  - Each has an uppercase label (small, muted) above the input.
  - Inputs have light gray borders (#e0e0e0), rounded corners, generous padding.
  - Placeholders in muted gray (#999999).
- **Dropdown:** Native `<select>` or custom dropdown. Highlighted option uses brand indigo (#6366f1).
- **Submit button:** Full-width, indigo (#6366f1) background, white text, slightly rounded (border-radius ~4px), bold uppercase "SEND".
- **Social icons:** Three circular icons (Facebook blue #3b5998, Twitter/X sky #1da1f2, YouTube red #ff0000). Centered below the form, ~36px each.

## Fidelity notes

- Match the exact field labels (FULL NAME, EMAIL ADDRESS, WHAT DO YOU NEED?).
- Match the placeholder text exactly ("Enter your name...", "Enter your email...").
- Match the dropdown options exactly (including "Please chooses" and "eCommerce Bussiness" typos from original).
- The button says "SEND" (all caps).
- Social icons use brand colors, not the template's indigo.
- On mobile: stack vertically, image on top, form below.
