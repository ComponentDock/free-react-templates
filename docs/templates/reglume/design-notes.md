# Reglume — Design Notes

## Source

- **ColorLib template:** Reg Form V31 (`colorlib-regform-31`)
- **URL:** https://colorlib.com/wp/template/colorlib-regform-31/
- **Demo:** https://colorlib.com/etc/regform/colorlib-regform-31/

## Design Analysis

A simple, single-card registration form centered on a teal full-page background. The original uses Roboto font and features icon-adorned input fields.

### Key Design Decisions

1. **Single card layout** — Unlike RegForm 30 (split panel), this is a simple centered card with form fields stacked vertically
2. **Teal background** — `#5eb2b3` full-viewport background creates a calm, professional feel
3. **Blue accent** — `#3786bd` used for heading underline and register button, creating visual hierarchy
4. **Icon fields** — Each input has a lucide-react icon (User, Mail, Lock) for visual clarity
5. **Responsive** — At ≤767px, the card switches from centered to margin-based layout

### Fidelity Notes

- Matched card dimensions (670px width, 8px radius, 30px/45px padding)
- Matched heading underline decoration (50px wide, 2px, #3786bd)
- Matched input styling (border, radius, font size, placeholder color)
- Matched register button (180px width, shadow, hover color)
- Used Roboto font via Google Fonts (matching original)
- Used lucide-react icons replacing inline SVGs from original
- Footer replaced with Component Dock branding (per project rules)
