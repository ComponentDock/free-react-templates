# Bellpush — Design Notes & Implementation Todo

Source: ColorLib Modal 10
Preview: https://preview.colorlib.com/theme/bootstrap/modal-10/
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/modal-10.jpg

## Structure Order (top to bottom)

1. **Full-page section** — white background, centered vertically
   - Heading: "Modal 10" (h2, font-weight 400)
   - Launch button: "Launch Modal 10" (Bootstrap primary, pill shape 40px radius)

2. **Modal overlay** — semi-transparent dark backdrop

3. **Modal dialog** — 500px max-width, centered, no border, drop shadow
   - **Modal header** — 230px tall
     - Background image (use picsum.photos placeholder)
     - Gradient overlay: `linear-gradient(45deg, #dd00ff, #3e65ff)` at 30% opacity
     - Close button: 40×40px, absolute top-right, white X
   - **Modal body** — overlaps header by 180px (margin-top: -180px)
     - Circular icon: 200×200px, border-radius 50%, `rgba(255,255,255,0.2)` bg
       - Envelope SVG icon (use lucide-react Mail icon)
     - Heading: "Newsletter" (h2, bold 700, white)
     - Subtext: "Subscribe to our newsletter" (h4, 18px)
     - Subscribe form:
       - Email input: rounded-left, `rgba(0,0,0,0.05)` bg, placeholder text
       - Subscribe button: 130×52px, `#3e64ff` bg, white text, rounded-right

## Section-by-Section Fidelity Notes

### Full-page section

- White `.ftco-section` fills viewport
- Centered layout (Bootstrap `justify-content-center`, `text-center`)
- Heading is plain h2, no special styling beyond Poppins font
- Button uses Bootstrap `.btn-primary` with custom pill radius (40px)

### Modal dialog

- Standard Bootstrap `.modal-dialog-centered` for vertical centering
- Custom `.modal-content`: no border, white bg, box-shadow
- The key visual is the gradient overlay on the header — 30% opacity lets the
  background image show through with a magenta-to-blue color wash

### Modal body overlap

- The negative margin (-180px) creates the "card rising from the gradient" effect
- The icon, heading, and form sit on a white card-like area that overlaps
  the gradient header — this is the signature visual

### Subscribe form

- Inline flex layout: email input + submit button side by side
- Email input has no visible border, light gray background
- Submit button is fixed 130px wide, brand blue
- Both are 52px tall for a cohesive look

### Close button

- Absolute positioned in the modal header area
- White text, transparent background
- Uses Ionicons `ion-ios-close` in original — use lucide-react X icon

## Token Map for Tailwind @theme

```css
@theme {
  --color-brand: #3e64ff;
  --color-brand-gradient-start: #dd00ff;
  --color-brand-gradient-end: #3e65ff;
  --font-family-heading: 'Poppins', Arial, sans-serif;
}
```

## Component Breakdown

| Component         | Props             | Notes                                |
| ----------------- | ----------------- | ------------------------------------ |
| `BellpushPage`    | —                 | Full page with launch button + modal |
| `LaunchButton`    | `onClick`         | Pill-shaped primary button           |
| `NewsletterModal` | `isOpen, onClose` | The modal dialog with all content    |
| `ModalHeader`     | —                 | Gradient overlay + background image  |
| `ModalBody`       | —                 | Icon + heading + form                |
| `SubscribeForm`   | `onSubmit`        | Email input + subscribe button       |
| `CloseButton`     | `onClick`         | White X in top-right                 |
| `CircularIcon`    | —                 | 200×200px circle with envelope icon  |

## Assets

- Background image: `https://picsum.photos/seed/bellpush-header/500/230`
- Envelope icon: `lucide-react` `Mail` icon
- Close icon: `lucide-react` `X` icon

## Dependencies

- No new dependencies needed — all from `packages/ui` and `lucide-react`
- Use `cn()` from `packages/ui` for class composition

## Delivery contract (repo rules — non-negotiable)

- **Footer credit.** The footer — or, when the design ships no footer, the page's
  last band — SHALL link [Component Dock](https://www.componentdock.com/). That is
  the only attribution line the recreation carries.
- **Source credit is reading, not copy.** Where the research above quotes the
  source's own credit string ("… made with ♥ by …"), it is what the source band
  renders: the recreation replaces it with the Component Dock credit.
- **Provenance ban.** No file under `apps/bellpush/` may name the source designer,
  carry a `colorlib.com` URL, or reuse the source template's name — code,
  comments, CSS, markup, metadata and filenames included (AGENTS.md rule 5).
- **Deploy identity.** `apps/bellpush/public/CNAME` = `bellpush.free.componentdock.com`
  and the package `homepage` = `https://bellpush.free.componentdock.com`.

## Reference tokens (measured 2026-10-23)

Evidence: slug-only `https://preview.colorlib.com/theme/modal-10/` returns **HTTP 404**; the live demo is https://preview.colorlib.com/theme/bootstrap/modal-10/ — **HTTP 200** on 2026-10-23, title "Modal 10". Its `css/style.css` is byte-identical (sha256 `7fea63534e8a8c9f...`, 22,678 bytes) to `modal-10/css/style.css` in `https://preview.colorlib.com/downloads/free/modal-10.zip`, so the archive is the live demo's un-versioned twin.

- Hex census: `#dd00ff` 8, `#3e64ff` 7, `#3e65ff` 7, `#6c757d` 4, `#212529` 3 (count = rules containing the literal).
- Typefaces: All UI: `Poppins`; Heading: Poppins semibold, centred.
- Radii: `0` (4), `0.25rem` (2), `0.3rem` (1), `5px` (1), `40px` (1).
- Section order (shipped): `LaunchSection -> NewsletterModal -> Footer`.

### Deltas measured against the shipped app

- None measured.
