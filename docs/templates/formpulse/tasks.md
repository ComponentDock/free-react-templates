# FormPulse — Implementation Tasks & Design Notes

Source: ColorLib Contact Form 19
Preview: https://preview.colorlib.com/theme/bootstrap/contact-form-19/
New name: formpulse
App folder: apps/formpulse

## Component structure (suggested order)

```
src/
  main.tsx                  — entry (excluded from coverage)
  App.tsx                   — composes FormPulse page
  index.css                 — Tailwind entry + @theme tokens
  components/
    ContactCard.tsx          — white card container with shadow/border
    ContactForm.tsx          — the form with all fields and submit logic
    FormField.tsx            — reusable underline-style input field
    BudgetSelect.tsx         — budget dropdown with preset ranges
    MessageTextarea.tsx      — multi-line message input
    SubmitButton.tsx         — red pill CTA button
    FormFeedback.tsx         — success/warning message display
  test/
    setup.ts                — vitest setup (jest-dom import)
    ContactCard.test.tsx
    ContactForm.test.tsx
    FormField.test.tsx
    BudgetSelect.test.tsx
    MessageTextarea.test.tsx
    SubmitButton.test.tsx
    FormFeedback.test.tsx
```

## Section-by-section fidelity notes

### Overall layout

- Single centered card on white background
- Card: white bg (#ffffff), subtle box-shadow (0 0px 20px rgba(0,0,0,0.05)), 1px solid #efefef border
- Card padding: 40px
- Content area padding: 7rem 0 (top/bottom)
- Max width: container (Bootstrap default ~1140px), centered

### Heading

- "Get Started" — font-size: 2rem, font-weight: 700, color: #000, margin-bottom: 30px
- Use Tailwind: text-3xl font-bold text-black mb-7

### Name and Email row

- Two columns, each 50% width (col-md-6)
- Labels: "Name *" and "Email *", color: #b3b3b3, font-size: 14px, margin-bottom: 10px
- Inputs: height 45px, no border except bottom (1px solid #cccccc), no border-radius
- Placeholders: "Your name" and "Your email"
- Focus: bottom border changes to #000000

### Budget dropdown

- Full width, label "Budget"
- Default: "Choose..."
- Options: < $1,000 | $2,000 - $5,000 | $5,000 - $15,000 | $15,000 - $25,000 | $25,000 >
- Same height (45px) and underline style as text inputs
- border-radius: 0

### Message textarea

- Full width, label "Message *"
- Placeholder: "Write your message"
- 4 rows, resize: vertical
- Same underline border style

### Submit button

- "Send Message" text, uppercase, letter-spacing: 0.2rem, font-size: 11px
- Background: #ef4339 (vivid red), color: white
- Border-radius: 30px (pill shape)
- Box-shadow: 0 15px 30px 0 rgba(239, 67, 57, 0.2)
- Hover: same red with darker red, white text
- Padding: vertical 0.5rem, horizontal 1rem

### Form feedback

- Success: "Your message was sent, thank you!" — color: #55A44E, font-weight: bold, font-size: 18px
- Warning: hidden by default, color: #B90B0B
- Both containers hidden by default (display: none)

### Form interaction

- Validate required fields (Name, Email, Message) before showing success
- Prevent default form submission
- Show success message on valid submit
- Show warning on validation failure

### Tailwind theme tokens (@theme)

```css
@theme {
  --color-brand-red: #ef4339;
  --color-brand-red-hover: #d43a30;
  --color-label-gray: #b3b3b3;
  --color-body-gray: #8c8c8c;
  --color-input-border: #cccccc;
  --color-card-border: #efefef;
  --color-success-green: #55A44E;
  --color-warning-red: #B90B0B;
}
```
