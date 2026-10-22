# Threadline — Design Notes

<!-- doc-token-reverify:2026-10-22 -->

> **Tokens re-verified against the live sheet (2026-10-22).** The rows below are the values the reference's own stylesheet paints, quoted with the rule that paints them; the sentence further down that carries the older value is a **screenshot approximation and is superseded** where the two differ.  CSS values are canonical over screenshots (`docs/replication.md`), so build the sheet's value.
>
> Live reference: <https://preview.colorlib.com/theme/malefashion/>
>
> | brief says | live sheet paints | evidence |
> | --- | --- | --- |
> | `#e53e3e` | `#e53637` | `.header__menu ul li a:after{background: #e53637}` |
>
> If the quoted rule belongs to a different ROLE than the line you are building (a footer link's red is not a CTA's fill), read the sheet's own rule for your role instead of substituting across roles.

<!-- /doc-token-reverify -->

## Original: ColorLib Malefashion

- Slug: malefashion
- Preview: https://preview.colorlib.com/theme/malefashion/
- Category: Fashion / E-Commerce

## Visual Design

- Dark/black header with white text, red accent color (#e53e3e)
- Nunito Sans typeface throughout
- Hero: large background image with overlay text, red CTA button
- Category banners: 3-column grid with hover effects
- Product cards: image, name, price, compare checkbox, add-to-cart
- Hot deal: countdown timer with red/dark theme
- Instagram: 6-image grid with centered text overlay
- Blog: 3-column cards with image, date, title
- Footer: dark background, 4-column layout

## Color Palette

- Primary red: #e53e3e
- Dark bg: #1a1a1a / #111111
- Light section bg: #f5f5f5
- White: #ffffff
- Text primary: #1a1a1a
- Text secondary: #666666

## Fonts

- Nunito Sans: 300, 400, 600, 700, 800, 900
