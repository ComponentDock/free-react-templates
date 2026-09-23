# Splithaven — Implementation Notes

## Source
- ColorLib: Login Form V01
- URL: https://colorlib.com/wp/template/login-form-01/
- Preview: https://preview.colorlib.com/theme/bootstrap/login-form-01/
- Stack: Bootstrap 5 + jQuery 3.3.1 + icomoon icons

## Structure order (sections to implement)

1. **SplitContainer** — full-viewport flex wrapper
   - `d-lg-flex half` pattern: flex row on lg+, column on mobile
   - `height: 100vh` on desktop
2. **ImagePanel** — right side (desktop) / top (mobile)
   - `order-1 order-md-2` (shows first on mobile, second on desktop)
   - Background image: `background-size: cover; background-position: center`
   - Mobile: `height: 500px` at `< 992px` breakpoint
   - Use `https://picsum.photos/seed/splithaven-bg/800/1200` as placeholder
3. **FormPanel** — left side (desktop) / bottom (mobile)
   - `order-2 order-md-1`
   - Vertically + horizontally centered content
   - `col-md-7` inner column (~58% of left panel)
   - Components:
     - **Heading**: "Login to **ComponentDock**" (h3, Roboto)
     - **Subtext**: gray paragraph (Roboto 300, #b3b3b3)
     - **FieldSet**: bordered card containing username + password
       - Outer wrapper: `border: 1px solid #efefef; border-radius: 7px` (top corners on first, bottom on last)
       - Each field: label (12px #b3b3b3) + input (20px, no border, no border-radius, no focus ring)
     - **CheckboxRow**: flex, remember-me checkbox (custom, 20×20, 4px radius) + forgot-password link (ml-auto)
     - **SubmitButton**: full-width, 54px height, #007bff, white text, standard border-radius

## Fidelity notes

- **Font**: Roboto (weights 300 + 400) via Google Fonts link in index.html
- **Primary color**: #007bff (Bootstrap blue) — use as `--color-primary` in @theme
- **Form card**: the bordered fieldset is the key visual — must look like one
  card with rounded corners only at the very top and very bottom, no
  visible divider between username and password fields
- **Checkbox**: custom indicator — NOT a native checkbox. Use a hidden
  input + visual div, lucide-react Check icon for the check state
- **Button**: full-width (`w-full`), 54px height (`h-[54px]`), rounded
  corners (use Tailwind `rounded` or `rounded-md` for ~4px matching Bootstrap)
- **No footer in original**: add a minimal Component Dock footer per
  conventions (the original has zero footer — just the split screen)
- **Mobile breakpoint**: Bootstrap's lg = 992px. In Tailwind use `lg:` prefix
  (1024px) or custom breakpoint to match the original's 991.98px behavior
- **Placeholder brand name**: replace "Colorlib" with "ComponentDock" in
  the heading. Use a different real-sounding brand name if preferred
  (e.g. "Login to Your Account")

## Testing notes

- Test the split layout renders correctly (both panels visible on desktop)
- Test mobile stacking (image above form at narrow viewport)
- Test form field rendering (labels, inputs, placeholders)
- Test checkbox toggle behavior
- Test submit button renders full-width
- Test the Component Dock footer link
- Test no ColorLib references in the app

## Dependencies

- No new npm dependencies needed
- Use `packages/ui` components where applicable (Button, etc.)
- Use lucide-react for the check icon in the custom checkbox
