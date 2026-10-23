# Design Notes: DropForm (Dropdown 07)

- **Source**: ColorLib Dropdown 07 (`https://colorlib.com/wp/template/dropdown-07/`)
- **Preview URL**: `https://preview.colorlib.com/theme/bootstrap/dropdown-07/`
- **Category**: Widget / Dropdown Form

## Design Tokens (from CSS extraction)

- **Brand blue**: `#4d80e4` (button bg, links)
- **Hover blue**: `#2161dd` (button hover)
- **Page background**: `#79a0eb` (solid blue)
- **Text color**: gray (body), `#000` (headings), `#fff` (heading text)
- **Font**: Roboto, Google Fonts, weights 400/500/700
- **Button radius**: `5px`, padding `12px 16px`
- **Button shadow**: `0px 10px 20px -6px rgba(0,0,0,0.12)`
- **Form control height**: `48px`, radius `4px`, border `2px solid rgba(0,0,0,0.05)`
- **Dropdown menu**: white bg, shadow `0px 10px 34px -20px rgba(0,0,0,0.41)`, min-width `20rem`
- **Arrow**: CSS pseudo-element triangle (border hack), white, ~0.7em wide

## Visual Design (from screenshot + preview DOM)

- Full-page centered layout on solid blue background
- Large white heading "Dropdown #07" at top, centered
- Blue "Sign Up" button in center of page
- Clicking opens a white dropdown panel below the button
- Panel has a CSS-drawn upward arrow pointing to the button
- Inside panel: "Create Your Account" heading, three form fields
  (Full Name, Email, Password), a "Remember me" checkbox on left,
  "Sign in" blue button on right
- Clean, minimal widget — no header, no footer in the original (we add footer per conventions)

## Design Structure (section order)

1. Page wrapper (blue background, centered content)
2. Heading section ("Dropdown #07" in white)
3. Button group container
   - "Sign Up" primary button (trigger)
   - Dropdown form panel (initially hidden)
     - "Create Your Account" heading
     - Full Name input
     - Email address input
     - Password input
     - Row: Remember me checkbox (left) + Sign in button (right)
4. Footer with Component Dock branding link

## Implementation Guidelines for Implementers

- Use a controlled React state for dropdown open/close (not Bootstrap JS)
- Use `lucide-react` for any icons if needed (e.g. user icon for heading)
- Ensure 100% test coverage with Vitest and Testing Library
- Register app in `package.json` workspaces and root dependencies
- Run `npm install` at repo root after creating the app workspace
- `apps/dropform/public/CNAME` → `dropform.free.componentdock.com`
- `apps/dropform/package.json` homepage → `https://dropform.free.componentdock.com`
- `apps/dropform/vite.config.ts` must include `injectUiSource()` pattern
- Use Tailwind classes for styling, map the CSS tokens to Tailwind theme values
- For the arrow indicator, use CSS `::before`/`::after` with border hack or
  a rotated square, positioned above the dropdown panel

## Reference tokens (measured 2026-10-23)

**Archive-only evidence.** No live demo exists for this slug: on 2026-10-23
`/theme/contact-form-v8/`, `/theme/bootstrap/`, `/theme/bft/`, `/theme/bb/`,
`/theme/bac/`, `/theme/sidebar/` and `/etc/{regform,bforms}/` all returned 404.
Measured from the official source archive
`https://preview.colorlib.com/downloads/free/contact-form-v8.zip` (HTTP 200,
81,489 B): `index.html` 1,988 B (title `Contact V8`) + `css/style.css`
11,120 B, sha256 `5ed785486f99…`.

| Token | Reference | App (`apps/dropform`) |
| ----- | --------- | --------------------- |
| Brand green | `#57b846` | `#4caf50` (`--color-btn`) |
| Brand hover | `#1b3815` (button flips to near-black green) | `#43a047` (lighter green) |
| Input text | `#1b3815` | `#333333` |
| Field border | `#e6e6e6` 1px | `#cccccc` 1px, `rounded` |
| Field height | `62px` (textarea 199px) | `h-12` (48px) |
| Card | 500px wide, radius `10px`, `padding: 62px 55px 65px`, shadow `0 3px 20px 0 rgba(0,0,0,0.1)` | `max-w-[500px]` ✓, radius ~`4px`, `p-8`, `shadow-lg` |
| Title | `JosefinSans-Bold` 30px `#333333`, left-aligned | Poppins (app font), similar size |
| Inputs font | `JosefinSans-Bold` 15px | Poppins |
| Checkbox | custom 20px square `#e6e6e6`, check glyph `#57b846`, label in `Oswald-Medium` | app has no copy-mail checkbox |
| Focus | animated 1px green stroke drawn around the field | plain `focus:border` |
| Backdrop | full-bleed Google-map iframe behind the card | flat `#e8e8e8` background |

Section order measured in the archive DOM: map iframe → centered card
[`"Contact Us"` → Name / Email / Message → checkbox "Send copy to my-email" →
`Send Email`] → end. No footer in the reference; the app appends the mandatory
Component Dock footer.
