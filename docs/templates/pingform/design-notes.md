# PingForm — Design Notes & Todo

Source: ColorLib Contact Form V11
Preview: https://preview.colorlib.com/theme/contact-form-v11/ (404 at prep time)
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/ContactFrom_v11.jpg

## Section order (top to bottom)

1. **Background** — Full-viewport diagonal gradient (blue→green) with curved
   wave/arc SVG overlays. Not a flat background — the waves give it movement.
2. **Form card** — White, centered, shadowed, rounded corners. Contains all
   form elements vertically stacked.
   - **Heading** — "GET IN TOUCH" bold uppercase, left-aligned
   - **Row 1** — Name (left) + Email (right), side by side, 2-column grid
   - **Row 2** — Website input, full width
   - **Row 3** — Message textarea, full width, tall
   - **Row 4** — SUBMIT button, centered, green gradient bg
3. **Footer** — Dark band spanning full width below card area, white text
   "Call us on +001 345 6178" + Component Dock link

## Fidelity notes

- **Background gradient**: Approximate with Tailwind `bg-gradient-to-br from-blue-500 to-green-500` or exact hex values. The curved waves are SVG shapes overlaid with `absolute` positioning and white or semi-transparent fills.
- **Card**: Use `bg-white rounded-lg shadow-lg` and constrain width (~600-700px max) centered with `mx-auto`.
- **Inputs**: Light gray bg (`bg-gray-100`), no border, slight rounding. Labels above inputs in regular weight dark gray text. Required fields show `*` asterisk.
- **Name + Email row**: Use CSS grid or flexbox 2-column layout. Equal or near-equal widths.
- **Button**: Green gradient matching background palette. White text. Centered below inputs.
- **Footer**: Full-width dark bg (`bg-gray-900` or similar), white text, phone number + Component Dock attribution.
- **Typography**: Use Poppins (Google Fonts) — bold for heading, regular for everything else.
- **No images**: This is a pure form template — no hero images, no icon sets, no illustrations beyond the background gradient/waves.

## Implementation todo

- [ ] Set up app scaffold (copy from simplest existing app, rename to pingform)
- [ ] Configure vite.config.ts with injectUiSource()
- [ ] Set up Google Fonts link for Poppins in index.html
- [ ] Create gradient background component (SVG waves + gradient)
- [ ] Create form card component with heading
- [ ] Create input field components (name, email, website, message)
- [ ] Style inputs with gray bg, no border, rounding
- [ ] Create submit button with green gradient
- [ ] Create footer component with phone + Component Dock link
- [ ] Add form state management (controlled inputs)
- [ ] Add validation (required fields: name, email, message)
- [ ] Write tests for all components (100% coverage)
- [ ] Visual comparison against screenshot
- [ ] Update public/CNAME and package.json homepage
- [ ] Run npm install at root for lockfile registration
- [ ] npm run spec:validate
- [ ] Open PR, merge, deploy
