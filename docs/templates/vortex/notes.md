# Vortex — Implementation & Research Notes
<!-- prep-status: shipped-as=expanda -->
> **SHIPPED-UNDER** — the ColorLib `accordion-05` design this prep describes already
> ships as `apps/expanda` (<https://expanda.free.componentdock.com>).
> Do not scaffold `apps/vortex`: the unchecked items below are prep history, not work.
> Fidelity reference: `openspec/specs/template-expanda/spec.md`.

## Source Reference

- **Source Template:** ColorLib Bootstrap Accordion V05 (`accordion-05`)
- **Source Preview / Info:** https://colorlib.com/wp/template/accordion-05/
- **Original Preview Image:** `https://colorlib.com/wp/wp-content/uploads/sites/2/accordion-05.jpg`

## Structure & Section Breakdown

1. **Header / Navbar:** Minimalist brand header with title and quick navigation links.
2. **Hero / Banner Section:** Clean introduction explaining the account management accordion interface.
3. **Interactive Accordion Container:** 5 distinct expandable sections:
   - Personal Information & Profile Settings
   - Security, Password & Two-Factor Authentication
   - Email & Push Notification Preferences
   - Billing & Subscription Details
   - Connected Third-Party Accounts
4. **Footer:** Clean footer with copyright and mandatory link to `https://www.componentdock.com/`.

## Design & Styling Notes

- Built using Tailwind CSS 4 utility classes.
- Responsive container layout with centered card max-widths (`max-w-3xl`).
- Accessible keyboard navigation support (Enter / Spacebar toggle).
- Clean icon integration via `lucide-react`.
