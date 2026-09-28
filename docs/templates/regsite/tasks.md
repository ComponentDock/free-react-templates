# RegSite — Implementation Tasks & Design Notes

Source: ColorLib Regform 6 (colorlib-regform-6)
New name: regsite
Category: Registration Forms
Preview: https://preview.colorlib.com/theme/colorlib-regform-6/ (unreachable — fallback to downloaded source)

## Structure order (section-by-section)

1. App.tsx — wraps everything in dark full-viewport container
2. JobApplicationForm component — single card component
   - CardHeading — transparent bg, white title
   - CardBody — white bg with border, speech-bubble arrow pseudo-element
     - FormRow: Full name (text input)
     - FormRow: Email address (email input with placeholder)
     - FormRow: Message (textarea)
     - FormRow: Upload CV (file picker with styled label)
   - CardFooter — white bg with border, submit button

## Design notes

- **Single-section template** — no navbar, no hero, no footer navigation. Just a centered card form.
- **Speech-bubble arrow**: CSS pseudo-element `::before` on card body, creates a 10px triangle pointing upward at `left: 75px` from the body edge. The arrow has `border-bottom-color: #fff` and `border: solid transparent`.
- **Form layout**: Each row uses flex with a fixed-width label (188px) and flexible input area. On mobile (<768px), rows stack vertically.
- **Focus animation**: Inputs and textarea lift 3px on focus with a subtle box-shadow.
- **File upload**: Hidden `<input type="file">`, styled `<label>` as a gray button (#666), with "No file chosen" info text and a description below.
- **No parallax, no sections beyond the form** — this is a single-purpose template.
- **Font**: Open Sans via Google Fonts (weights 400, 700).
- **All spacing measured from source CSS**: form row padding 24px 55px (30px mobile), card footer padding 50px 55px (30px mobile), card body top padding 30px.

## Implementation checklist

- [ ] Create apps/regsite with standard Vite + React 19 + Tailwind 4 setup
- [ ] Set up Google Fonts link for Open Sans (400, 700)
- [ ] Create dark page wrapper component
- [ ] Build card container (max-width 900px, centered, 3px radius)
- [ ] Build card heading (transparent bg, white title)
- [ ] Build card body with speech-bubble arrow (::before pseudo)
- [ ] Build form row component (label + input flex layout)
- [ ] Build text input with #ccc border, 3px radius, focus lift effect
- [ ] Build email input with placeholder
- [ ] Build textarea (min-height 120px, 1.2 line-height)
- [ ] Build file upload component (hidden input + styled label + info + desc)
- [ ] Build card footer with submit button (#2c6ed5, 5px radius)
- [ ] Add responsive styles (<768px stacking)
- [ ] Add hover state for submit button (#185ac1)
- [ ] Add hover state for file upload label (#1b1b1b)
- [ ] Write tests (100% coverage)
- [ ] Verify with scripts/verify-app.sh regsite
