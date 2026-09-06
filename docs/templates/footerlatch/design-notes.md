# FooterLatch — Design Notes

**Source:** ColorLib Bootstrap Footer 19 (`bootstrap-footer-19`)
**Preview:** https://preview.colorlib.com/theme/bft/bootstrap-footer-19/
**New name:** footerlatch

## Structure Order (top → bottom)

1. **Page heading** — centered "Footer #09" text (for preview only; skip in implementation — the actual template IS the footer)
2. **Footer container** (`.footer-09`) — full-width, purple gradient background
   - **4-column grid row** (Bootstrap `col-md-6 col-lg-3`)
     - Column 1: About — heading + circular icon, contact list (pin/call/send icons), subscribe form
     - Column 2: Latest News — heading + circular icon, 2× blog post cards (thumbnail + title + meta)
     - Column 3: Information — heading + circular icon, vertical link list
     - Column 4: Instagram — heading + circular icon, 2×3 photo grid
   - **Bottom row** (`border-top`) — copyright left, attribution right

## Section-by-Section Fidelity Notes

### About Column
- Heading: "About" with circular icon badge (ion-logo-ionic → use `lucide-react` icon like `Zap` or `Info`)
- Contact list: `<ul>` with `<li>` items, each has icon + text
  - Pin icon → `MapPin`
  - Call icon → `Phone`
  - Send icon → `Mail`
- Subscribe form: text input (placeholder "Enter email address") + submit button (send icon)
  - Input: `border: 2px solid #fe8ce3`, dark transparent background
  - Button: `#fe8ce3` background, white icon, 52×52px, square (no border-radius)

### Latest News Column
- Heading: "Latest News" with circular icon badge (ion-ios-list-box → `lucide-react` `List`)
- Blog cards: flex row with thumbnail (rounded, background-image) + text block
  - Title link (white at 50% opacity → full white on hover)
  - Meta row: date (calendar icon), author (person icon), comments (chat icon)
  - Use `picsum.photos/seed/footerlatch-<n>/80/80` for thumbnails

### Information Column
- Heading: "Information" with circular icon badge (ion-ios-document → `FileText`)
- Simple `<ul class="list-unstyled">` with vertical links
- Links: white at 50% opacity → white on hover

### Instagram Column
- Heading: "Instagram" with circular icon badge (ion-logo-instagram → `Instagram`)
- 2×3 grid: `row no-gutters` with `col-4` cells, each containing a square thumbnail
- Use `picsum.photos/seed/footerlatch-insta-<n>/150/150` for thumbnails

### Bottom Bar
- `border-top: 1px solid rgba(255, 255, 255, 0.1)`
- Left: copyright text with dynamic year
- Right: "made with ♥ by Component Dock" (replaces Colorlib attribution)

## Color Palette Summary

```
Background gradient: #2a1a5e → #5126a7 (45deg)
Brand accent:        #fe59d7 (hot pink)
Brand accent light:  #fe8ce3 (subscribe button)
Text primary:        #ffffff
Text secondary:      rgba(255, 255, 255, 0.5)
Text tertiary:       rgba(255, 255, 255, 0.3)
Border:              rgba(255, 255, 255, 0.1)
```

## Component Mapping

| Original class | React component | Notes |
|----------------|-----------------|-------|
| `.footer-09` | `<Footer>` | Root component, gradient bg via Tailwind `bg-gradient-to-br` |
| `.footer-heading` | `<FooterHeading>` | Icon badge + text, reusable |
| `.block-23` | `<ContactList>` | Address/phone/email items |
| `.subscribe-form` | `<SubscribeForm>` | Input + button, form handling with useState |
| `.block-21` | `<BlogCard>` | Thumbnail + title + meta |
| `.block-24` | `<InstagramGrid>` | 2×3 photo grid |
| Bottom row | `<FooterBottom>` | Copyright + attribution |

## Icon Replacement (Ionicons → lucide-react)

| Ionicons | lucide-react | Usage |
|----------|-------------|-------|
| `ion-logo-ionic` | `Zap` or `Info` | About heading badge |
| `ion-ios-pin` | `MapPin` | Address |
| `ion-ios-call` | `Phone` | Phone number |
| `ion-ios-send` | `Mail` | Email |
| `ion-ios-send` (form) | `Send` | Subscribe button |
| `ion-ios-list-box` | `List` | Latest News badge |
| `ion-ios-document` | `FileText` | Information badge |
| `ion-logo-instagram` | `Instagram` | Instagram badge |
| `icon-calendar` | `Calendar` | Blog meta date |
| `icon-person` | `User` | Blog meta author |
| `icon-chat` | `MessageCircle` | Blog meta comments |
| `ion-ios-heart` | `Heart` | Attribution |

## Responsive Behavior

- 4 columns on `lg` (≥992px)
- 2 columns on `md` (≥768px)
- 1 column (stacked) on `sm` (<768px)
- Instagram grid stays 3-per-row even on mobile (col-4)
