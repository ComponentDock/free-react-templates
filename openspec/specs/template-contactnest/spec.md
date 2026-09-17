# Template: ContactNest (Contact Form / Modal)

## Purpose

ContactNest is a single-page MODAL CONTACT FORM in the
free-react-templates monorepo. It is an original React recreation of the
ColorLib "Contact Form V6" free template (source:
https://colorlib.com/wp/template/contact-form-v6/), built under a
DIFFERENT name (**ContactNest**), with the monorepo stack: Vite + React 19 +
Tailwind CSS 4 + TypeScript.

The original is a modal/popup contact form: a full-viewport darkened Google
Maps background image with a centered white card that contains a two-column
(Name + Email) and single-column (Message) form, a coral/salmon rounded
pill Submit button, and a 24/7 call center footer line. The modal has a
close (X) button in the top-right corner.

**WHAT MAKES CONTACTNEST DISTINCT (signature behaviors):**

1. **Full-viewport dark map background.** The entire page background is a
   desaturated/grayscale darkened map image (Google Maps of NYC area in the
   original). The card floats centered on top. No header, no navigation,
   no hero — the map IS the page.

2. **Centered white modal card with close button.** A white rounded-corner
   card (~60–70% viewport width, max ~800px) centered both vertically and
   horizontally. A small gray circular close (X) button sits at the
   top-right corner of the card. The card has a subtle drop shadow.

3. **Two-column form layout.** Name and Email fields sit side-by-side in
   a two-column grid row. Message field spans full width below. All fields
   use an underline-only border style (no box border), with a coral/salmon
   active underline on focus.

4. **Coral/salmon brand color.** The primary accent is a warm coral/pink
   (~#ff6b6b). Used on: active input underlines, Submit button background,
   phone number highlight in footer text.

5. **Pill-shaped Submit button.** The Submit button is a large rounded pill
   (high border-radius, ~30px), coral background, white text, with a right
   arrow (→) icon. It sits at the bottom-left of the form, left-aligned.

6. **24/7 call center footer line.** Below the Submit button, a centered
   text line: "For any question contact our 24/7 call center: +001 345 6889"
   where the phone number is highlighted in the coral brand color.

7. **No real submission.** The form has no action endpoint — it is a static
   display template. The recreation should simulate form display only (no
   backend). On submit, show a brief success toast or reset.

## Naming

The ColorLib source name "Contact Form V6" is FORBIDDEN as the app
name. The chosen name is **ContactNest**.

- **App folder:** `apps/contactnest`
- **Package:** `@free-react-templates/contactnest`
- **Source:** ColorLib Contact Form V6 (`contact-form-v6`)
- **Source URL:** https://colorlib.com/wp/template/contact-form-v6/
- **Preview URL:** https://preview.colorlib.com/theme/contact-form-v6/ (returns 404 —
  preview unavailable; design captured from screenshot + page metadata)

## Design Tokens (captured from screenshot + ColorLib page)

| Token             | Value                                  | Source             |
|-------------------|----------------------------------------|--------------------|
| Brand color       | `#ff6b6b` (coral/salmon)              | Screenshot         |
| Page background   | Dark map image (grayscale, ~30% opacity overlay) | Screenshot |
| Card background   | `#ffffff` (white)                     | Screenshot         |
| Card shadow       | `0 10px 40px rgba(0,0,0,0.15)`        | Screenshot estimate |
| Card border-radius| `8px`                                  | Screenshot         |
| Card max-width    | `800px`                                | Screenshot estimate |
| Font family       | `"Open Sans", sans-serif`              | Common ColorLib    |
| Heading color     | `#333333` (dark gray)                 | Screenshot         |
| Label color       | `#999999` (medium gray)               | Screenshot         |
| Input text color  | `#333333`                              | Screenshot         |
| Input underline   | `#e0e0e0` (light gray)                | Screenshot         |
| Input focus underline | `#ff6b6b` (brand)                  | Screenshot         |
| Button background | `#ff6b6b`                              | Screenshot         |
| Button text       | `#ffffff`                              | Screenshot         |
| Button radius     | `30px` (pill)                          | Screenshot         |
| Button padding    | `12px 30px`                            | Screenshot estimate |
| Close button bg   | `#e0e0e0` (light gray circle)         | Screenshot         |
| Close button size | `30px`                                 | Screenshot estimate |
| Footer text color | `#999999`                              | Screenshot         |
| Footer phone color| `#ff6b6b`                              | Screenshot         |

## Sections (order)

1. **Page background** — full-viewport dark map image (use
   `https://picsum.photos/seed/contactnest-map/1920/1080` with dark
   overlay or a CSS gradient approximation)
2. **Modal card** — white rounded card, centered
   - **Close button** — gray circle, top-right
   - **Title** — "Contact Us" (h2, large bold)
   - **Form** — `Name` + `Email` (two-column row) + `Message` (full-width)
     + `Submit` button (left-aligned pill)
   - **Footer text** — "For any question contact our 24/7 call center:
     +001 345 6889"

## Gherkin Requirements

### Scenario: Page renders with dark map background
```
Given the user navigates to ContactNest
Then the page displays a full-viewport dark map background image
And a white card is centered on the page
```

### Scenario: Modal card contains Contact Us heading
```
Given the page has loaded
Then the card displays a "Contact Us" heading in large bold text
```

### Scenario: Name and Email fields are side by side
```
Given the form is visible
Then the Name field and Email field are displayed in a two-column layout
And the Name field has label "Your Name" and placeholder "John Doe"
And the Email field has label "Email" and placeholder "Enter your email address"
```

### Scenario: Message field spans full width
```
Given the form is visible
Then the Message field spans the full width of the form
And the Message field has label "Message" and placeholder "Your message here..."
```

### Scenario: Input focus shows coral underline
```
Given the form is visible
When the user clicks on the Name input field
Then the Name field displays a coral underline
And other fields retain their gray underline
```

### Scenario: Submit button renders as coral pill
```
Given the form is visible
Then the Submit button is rendered with a coral background
And the Submit button text is "Submit" with a right arrow
And the Submit button has a pill shape (high border-radius)
```

### Scenario: Footer displays call center info
```
Given the card is visible
Then the card displays "For any question contact our 24/7 call center: +001 345 6889"
And the phone number is highlighted in the coral brand color
```

### Scenario: Close button exists
```
Given the card is visible
Then a close (X) button is displayed at the top-right corner of the card
And clicking the close button dismisses the modal (or resets the view)
```

### Scenario: Form is responsive
```
Given the user views the template on a mobile viewport (375px)
Then the Name and Email fields stack vertically
And the card fills the available width with appropriate padding
```

## Verification checklist

- [ ] Dark map background fills the entire viewport
- [ ] White card is centered vertically and horizontally
- [ ] Close button (gray circle X) is at card top-right
- [ ] "Contact Us" heading is large, bold, dark
- [ ] Name and Email fields are in a two-column row
- [ ] Message textarea spans full width
- [ ] All inputs use underline-only borders (no box)
- [ ] Focused input shows coral underline
- [ ] Submit button is coral, pill-shaped, left-aligned
- [ ] Footer text with phone number is centered below button
- [ ] Phone number is coral-colored
- [ ] Responsive: fields stack on mobile
- [ ] No reference to ColorLib anywhere in app code
- [ ] Footer links to https://www.componentdock.com/
- [ ] `public/CNAME` contains `contactnest.free.componentdock.com`
- [ ] Package name is `@free-react-templates/contactnest`
