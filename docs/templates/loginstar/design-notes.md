# Loginstar — Design Notes

## Source

ColorLib Login Form V10: https://colorlib.com/wp/template/login-form-v10/
Downloaded ZIP analyzed (preview URL returned 404).

## Section Structure

This is a minimal single-section template — no navbar, no hero, no footer in the
original. Just a centered login form.

1. **Full-page container** — white/transparent background, flex centering
2. **Login card** — 390px white card with 10px border-radius
3. **Form title** — "LOGIN" uppercase, centered, dark purple
4. **Username input** — full-width, gray bg, no border
5. **Password input** — same as username
6. **Remember me + Forgot row** — checkbox left, link right, space-between
7. **Login button** — full-width purple button, uppercase white text
8. **Footer** — "Made with Component Dock" link (new, not in original)

## Fidelity Notes

- **No images in original** — purely CSS-driven form, no decorative illustrations
- **Ubuntu font** from Google Fonts (Ubuntu-Regular + Ubuntu-Bold)
- **Brand color #827ffe** is a soft lavender-purple, not a deep purple
- **Input background #e6e6e6** is a light warm gray
- **Focus animation** uses CSS transform: scale() transition (0.4s) — the focus ring
  scales from 1.1x/1.3x down to 1x with opacity fade-in
- **Custom checkbox** uses hidden native checkbox + styled label pseudo-element
- **Validation errors** appear as tooltip-like bubbles positioned at the right side
  of inputs (red border + text)
- **Form width is narrow** (390px) — typical for login-only templates
- **Card has no shadow** — flat white card against the background

## Component Architecture

```
src/
  main.tsx              — entry (excluded from coverage)
  App.tsx               — composes LoginForm
  index.css             — Tailwind entry + @theme tokens
  components/
    LoginForm.tsx       — main form container with card styling
    FormInput.tsx       — reusable styled input (gray bg, focus ring)
    RememberMe.tsx      — custom checkbox with label
    FormButton.tsx      — full-width purple submit button
  test/
    setup.ts            — vitest setup
```

## Tailwind Theme Mapping

| CSS Token | Tailwind @theme key |
| --- | --- |
| #827ffe | brand-primary |
| #403866 | brand-heading |
| #e6e6e6 | brand-input-bg |
| #8f8fa1 | brand-placeholder |
| #999999 | brand-muted |
| #666666 | brand-body |
| Ubuntu | font-family via Google Fonts link |
