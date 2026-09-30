# SignupNova — Prep Notes

## Source
- ColorLib: Signup Form 16
- URL: https://colorlib.com/wp/template/signup-form-16/
- Preview: https://preview.colorlib.com/theme/signup-form-16/ (404 — research from screenshot)

## Design notes (from screenshot analysis)

### Overall layout
- Full-page light gray background (#f5f5f5)
- Centered card (max-width ~900px, rounded corners, subtle shadow)
- Two columns: left = image hero with purple overlay, right = white form panel

### Left panel
- Purple-to-dark-purple gradient overlay on mountain background image
- Placeholder: use `https://picsum.photos/seed/signupnova-hero/600/800`
- Heading: "Welcome to signup form" — white, bold, ~24px, Poppins
- Description: white, ~14px, paragraph text
- Panel has equal height to right panel (CSS flexbox row)

### Right panel
- White background, padding ~40px
- "Signup with this services" — dark text, centered, ~18px, bold
- Social icons row: Google (G), Facebook (f), Twitter (bird) — use lucide-react icons
- "or" divider: two horizontal lines with "or" text centered
- Form fields:
  - Full Name + Username: 2-column grid (1fr 1fr), labels above inputs
  - Email Address: full width, label above
  - Password: full width, label above
  - Inputs: light gray background (#f8f8f8), light border (#e0e0e0), padding ~12px, no visible border-radius (square)
- Checkbox: "I Agree All Statements In Terms Of Service" — purple accent, checked by default or optional
- Button: "Create an account" — solid purple (#7c3aed), white text, rounded corners (~4px), padding ~12px 30px
- Footer: "I'm already a member! Sign In" — centered, "Sign In" as purple link

### Typography
- Primary font: Poppins (Google Fonts)
- Heading: bold, ~18-24px
- Body: regular, ~14px
- Labels: medium weight, ~13px

### Component structure (suggested)
```
src/
  App.tsx              — renders SignupCard
  components/
    SignupCard.tsx     — main two-panel card container
    HeroPanel.tsx      — left panel (gradient overlay + text)
    SignupForm.tsx     — right panel (heading + social + form + CTA)
    SocialLogin.tsx    — social icon row
    FormDivider.tsx    — "or" divider with lines
    FormField.tsx      — reusable label + input component
    TermsCheckbox.tsx  — checkbox with terms text
    CtaButton.tsx      — styled button
    FooterLink.tsx     — "I'm already a member! Sign In"
```

### Responsive behavior
- Desktop (>768px): side-by-side columns
- Mobile (<768px): stacked — hero panel on top, form below (or hero collapses to thin header)
