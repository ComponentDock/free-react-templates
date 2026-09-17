# ContactPad (ColorLib Contact Form 15) — Tasks & Design Notes

> Prep artifacts prepared on `main` by the prep stream. Implementation ships
> later on `feat/template-contactpad`. Recreation name: **ContactPad** (NEW name —
> the ColorLib source keeps its name "Contact Form 15").

## Source mapping

- **ColorLib item:** "Contact Form 15" (TEMPLATES.md line 1418; section
  "## Contact Forms" at line 1417). The
  `wp/template/contact-form-15/` slug appears exactly ONCE in TEMPLATES.md.
- **Source URL:** https://colorlib.com/wp/template/contact-form-15/
- **Preview URL — UNREACHABLE (404 at time of prep):**
  `https://preview.colorlib.com/theme/contact-form-15/` returns 404.
  Design tokens extracted from screenshot + ColorLib page metadata.
- **Screenshot:** `contact-form-15.jpg` (1200×972 AVIF → JPEG 1024×829 via
  `-1024x829` variant). Browsed visually during prep.

## Reference research (done — do not redo)

### Screenshot analysis

The template is a **minimal, monospace-styled contact page** on a pure white
background. The layout is:

1. **Info bar** (top): Two columns side by side
   - Left: "NEW YORK" heading + address "9757 Aspen Lane South, Richmond Hill, NY 11419"
   - Right: "CONTACT INFO" heading + "T: +1 (291) 929 9321" + "E: info@mywebsite.com"
2. **Form section** (below): "MESSAGE US" heading
   - Two-column input row: "Your name" (left) + "Email" (right) — underline style
   - Full-width "Write your message" textarea — underline style
   - "Send Message" black button with white text

### Design tokens from screenshot

- **Font:** Monospace (Courier/Consolas/system mono) — all headings are
  uppercase monospace. Body text also appears monospace.
- **Colors:** Pure white `#ffffff` background, black `#000000` headings and
  button, gray `#999999` placeholder text, light gray `#cccccc` input borders.
- **Inputs:** Bottom-border-only underline style. No rounded corners, no
  background fill — just a thin horizontal line beneath the text.
- **Button:** Solid black `#000000` background, white `#ffffff` text, small
  border radius (~4px). No shadow, no gradient.
- **Spacing:** Very generous whitespace — ~80–100px between sections. Content
  centered at ~800–900px max-width.
- **Typography:** Uppercase text-transform on headings. Regular weight (400),
  not bold. All-caps aesthetic throughout.

### ColorLib page metadata

- Title: "Contact Form V15 - Free Trendy Contact Form Template 2026"
- Description: "The best free trendy contact form template that acclimatizes
  to any website theme easily due to its simplicity."
- Category: Contact Form Templates
- Published: 2021-03-06

## Implementation tasks

### Task 1: Scaffold app
- [ ] Create `apps/contactpad/` from simplest existing contact-form app
- [ ] Rename package to `@free-react-templates/contactpad`
- [ ] Set up `vite.config.ts` with `injectUiSource()` helper
- [ ] Add `public/CNAME` with `contactpad.free.componentdock.com`
- [ ] Set `homepage` in `package.json`

### Task 2: Create components
- [ ] `src/components/InfoBar.tsx` — two-column layout (address + contact info)
- [ ] `src/components/ContactForm.tsx` — form with underline inputs + textarea + button
- [ ] `src/components/Footer.tsx` — Component Dock link
- [ ] `src/App.tsx` — compose InfoBar + ContactForm + Footer

### Task 3: Style with Tailwind
- [ ] Configure `src/index.css` with monospace font family token
- [ ] Apply `font-mono` and `uppercase` to all headings
- [ ] Create underline input style (border-b only, no rounded, transparent bg)
- [ ] Black button with white text and `rounded` small radius
- [ ] Generous `py-20` / `py-24` section spacing
- [ ] Responsive: two-column → single-column on mobile

### Task 4: Form logic
- [ ] Controlled inputs with React state
- [ ] Basic validation (name, email, message required)
- [ ] Email format validation
- [ ] Submit handler with success state feedback

### Task 5: Tests (TDD)
- [ ] InfoBar renders address and contact info
- [ ] Form renders all three fields (name, email, message)
- [ ] Form validates required fields
- [ ] Form validates email format
- [ ] Button triggers form submission
- [ ] Success state displayed after submit
- [ ] Responsive layout behavior

### Task 6: Documentation
- [ ] Update `TEMPLATES.md` (implementer sets `[~]` → `[x]`)
- [ ] Add Surge URL to TEMPLATES.md
- [ ] Run `npm run readme:status`

## Fidelity notes

- **Section order:** Info bar (two columns) → Contact form → Footer. Matches
  screenshot exactly.
- **Monospace aesthetic:** This is the defining visual trait. All text appears
  monospace. Use `font-mono` everywhere.
- **Underline inputs:** No input box borders — just a bottom border line.
  This is the key differentiator from other contact forms.
- **Black button:** Simple, flat, no shadow. Just black fill + white text.
- **Generous whitespace:** Very spacious layout with large gaps between elements.
  Don't compress the vertical rhythm.
- **No icons:** Unlike many other contact form templates, this one uses NO
  icons in the info section. Just plain text labels (T:, E:).
- **No images:** Pure text-based template. No hero images, no backgrounds.
  Only placeholder images if needed for any decorative element.
