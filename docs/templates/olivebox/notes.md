# OliveBox — Design Notes & Task Outline

Source: ColorLib **Contact Form 14** (slug: `contact-form-14`)
Preview: https://preview.colorlib.com/theme/bootstrap/contact-form-14/
New name: **olivebox** (not the ColorLib name)

---

## Structure (section order, 1:1 with source)

1. **Full-page olive green background** — no header, no navbar, no footer at the
   source level (footer will be ComponentDock branded per repo rules)
2. **Content area** — Bootstrap-style two-column grid:
   - **Left column (~40%):** Text panel with heading + paragraphs + email link
   - **Right column (~60%):** White card (`.box`) with form

The entire template is a **single-page, single-section** design — just the
contact area filling the viewport.

---

## Section-by-section fidelity notes

### Full-page background

- Olive green: `#697c37`
- No gradient, no pattern — solid flat color
- Body font: "Roboto" (Google Fonts), text color: `rgba(255,255,255,0.5)`
- Line height: 2 (generous spacing)

### Left column — text panel

- Heading: "Let's work together" — Poppins, `2rem`, `700` weight, white `#fff`
- Two paragraphs of lorem ipsum body text in semi-transparent white
- Email link at the bottom: `info@mywebsite.com`, underlined, white text
- Link transitions on hover (0.3s ease)
- No icons, no image — just text content

### Right column — form card

- White background card with `padding: 40px`
- Box shadow: `box-shadow: -30px 30px 0px 0 rgba(0,0,0,0.08)` — this is the
  signature visual: a prominent offset shadow shifted down and to the LEFT
- Sub-heading: "How Can We Help?" — uppercase, `#888`, letter-spacing 0.05rem,
  14px font, `font-weight: 400`, centered

### Form fields (6 fields)

| Field               | Type         | Label                  | Placeholder              | Required | Width   |
| ------------------- | ------------ | ---------------------- | ------------------------ | -------- | ------- |
| Name                | text         | "Name *"              | "Your name"             | yes      | 50%     |
| Organization        | text         | "Organization"        | "Your organization"     | no       | 50%     |
| Email               | text         | "Email *"             | "Your email address"    | yes      | 100%    |
| Project Description | textarea     | "Project Description *"| (empty)                 | yes      | 100%    |
| Budget              | select       | "Budget"              | N/A (dropdown)          | no       | 50%     |
| Target Launch       | text         | "Target Lunch"        | "Example: January 15th" | no       | 50%     |

- Name + Organization are side-by-side (same row)
- Budget + Target Launch are side-by-side (same row)
- All form controls: `height: 50px`, `border: 1px solid #ccc`, `border-radius: 4px`
- Labels: black `#000`
- Focus state: border turns black `#000`, no box-shadow

### Submit button

- Text: "Send Message"
- Full-width (`.btn-block`)
- Bootstrap `.btn-primary` blue
- `border-radius: 4px`, `box-shadow: 0 1px 5px 0 rgba(0,0,0,0.1)`
- Height 50px, white text
- On focus: shadow removed

### Form feedback

- Success: "Your message was sent, thank you!" — color `#55A44E`, bold, 18px
- Warning: red `#B90B0B`
- Error labels: red, 12px font
- Both success and warning hidden by default (`display: none`)

---

## Implementation tasks

1. **Scaffold** — Create `apps/olivebox/` from simplest existing app, rename
   package to `@free-react-templates/olivebox`
2. **Theme tokens** — Add Tailwind `@theme` block in `index.css`:
   - `--color-brand`: `#697c37`
   - `--color-brand-text`: `rgba(255,255,255,0.5)`
   - `--font-heading`: "Poppins"
   - `--font-body`: "Roboto"
3. **Components** — Build:
   - `ContactPanel.tsx` — left column (heading + paragraphs + email link)
   - `ContactForm.tsx` — right column (card + form with all 6 fields)
   - `App.tsx` — compose both columns in a two-column grid layout
4. **Form logic** — react-hook-form or controlled state with validation:
   - Required field validation for Name, Email, Project Description
   - Submit handler (mock) with success/warning message display
5. **Styling fidelity** — Ensure:
   - Offset box shadow on form card (`-30px 30px 0 0`)
   - Uppercase gray sub-heading for "How Can We Help?"
   - Full-width submit button with primary blue
   - Side-by-side field rows
6. **Footer** — Add ComponentDock branded footer per repo rules
7. **CNAME + homepage** — Set `public/CNAME` to `olivebox.free.componentdock.com`
   and `homepage` in `package.json`
8. **Font loading** — Add Google Fonts `<link>` for Poppins + Roboto in `index.html`
9. **Tests** — TDD: write tests for each component before implementation
10. **Verification** — Run `scripts/verify-app.sh olivebox` for typecheck + lint
    + coverage + build
