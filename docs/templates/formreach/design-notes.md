# Formreach — Design Notes

## Source

ColorLib "Contact Form 11" — https://colorlib.com/wp/template/contact-form-11/
Preview (Bootstrap version): https://preview.colorlib.com/theme/bootstrap/contact-form-11/

## Visual Design

- Minimalist white background with bold black typography
- Two-column layout: form on left with right-border divider, sidebar text on right
- Bootstrap-style form inputs (border-bottom only, no border-radius)
- Primary blue submit button, no rounded corners

## Tokens

- Background: #ffffff
- Text: #000000
- Input border: #d9d9d9 (bottom only)
- Button primary: #0d6efd
- Fonts: Poppins (headings), Roboto (body)
- Input/button height: 55px

## Differences from Original

- React + Tailwind CSS 4 instead of Bootstrap
- No jQuery/validation library — native React state
- Placeholder images via picsum.photos where applicable
- Footer branded to Component Dock instead of ColorLib attribution
