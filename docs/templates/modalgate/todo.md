# ModalGate — Design Notes & Implementation Outline

## Source

- ColorLib slug: `modal-17`
- Preview: https://preview.colorlib.com/theme/bootstrap/modal-17/
- Category: Bootstrap Modal Templates
- Description: Responsive log-in modal with orange accent border and single-column form

## Section Structure (order)

1. **PageLayout** — Full-viewport centered container (100vh)
2. **PageContent** — Title heading ("Modal #7") + launch button
3. **ModalDialog** — Overlay/backdrop + centered modal box (medium size)
4. **ModalHeader** — Orange top-border accent bar (4px solid #ed5107)
5. **ModalForm** — Single-column form: heading, description, inputs, submit

## Design Notes

- Sharp corners (no border-radius) on modal-content — defining feature vs other modal templates
- Orange top-border accent (4px solid #ed5107) provides the visual focal point
- Modal body has light gray (#efefef) background, NOT white
- Strong shadow treatment: 0 10px 50px -10px rgba(0,0,0,0.9)
- Form inputs: no visible border, transparent background, subtle box-shadow (0 1px 3px 0 rgba(0,0,0,0.2))
- Login button: Bootstrap primary (blue), px-5 horizontal padding
- Launch button: Bootstrap secondary (gray), px-4 py-3
- "Forgot password" link sits inline next to the login button
- "Sign up here" note in light gray (#999) with dark link (#555, font-weight 900)
- Heading font: Roboto, paragraph weight 300
- Modal is medium-width (modal-md), not full-width or small
- Single-column layout (unlike split-screen modal-16)
- Responsive: adapts to mobile via Bootstrap grid

## Key Differences from Sibling Modals

- Modal-16 (ModalDrift): split-screen image+form, rounded corners (7px)
- Modal-17 (ModalGate): single-column form, sharp corners (0px), orange top accent
- Modal-18+: check specs as they are prepped

## Implementation Notes

- Use Bootstrap modal pattern in React (state-driven open/close)
- Accessible: role="dialog", aria-labelledby, aria-hidden, tabindex="-1"
- Modal close: ESC key, backdrop click, X button (all should work)
- Form validation: required fields for email/password
- Tailwind @theme for orange accent color (#ed5107)
