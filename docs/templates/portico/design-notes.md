# Portico — Design Notes

**Source:** ColorLib Login Form 01
**Preview URL:** https://preview.colorlib.com/theme/login-form-01/ (unreachable at implementation time)
**Fallback:** Screenshot analysis only

## Layout

Split-screen layout:

- **Left panel (50%):** White background, vertically centered login form
- **Right panel (50%):** Full-height city photo (hidden on mobile)
- On mobile (< 640px): only the form panel shows

## Design Tokens

| Token            | Value                        | Source                       |
| ---------------- | ---------------------------- | ---------------------------- |
| Brand blue       | #3b82f6                      | Button color from screenshot |
| Card white       | #ffffff                      | Left panel background        |
| Border gray      | #d1d5db                      | Input borders                |
| Placeholder gray | #6b7280                      | Labels and placeholder text  |
| Ink dark         | #1f2937                      | Heading and input text       |
| Muted            | #4b5563                      | Subtitle text                |
| Font             | Poppins (300, 400, 500, 600) | Google Fonts                 |

## Form Elements

- Username input with label above
- Password input with label above (masked)
- "Remember me" checkbox (unchecked by default)
- "Forgot Password" link (right-aligned)
- Full-width blue "Log In" button

## Placeholder Image

- City street photo: `https://picsum.photos/seed/portico-city/1200/900`

## Differences from Original

- "Login to Colorlib" → "Login to Portico"
- City photo replaced with picsum.photos placeholder
- No "colorlib" references in source code
- Footer links to Component Dock instead of any attribution
