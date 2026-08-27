# StepForge — Replication Notes & Tasks

Recreation of ColorLib Colorlib Wizard 25 (`https://colorlib.com/wp/template/colorlib-wizard-25/`).

## Source Reference

- **ColorLib Slug**: `colorlib-wizard-25`
- **Demo URL**: `https://colorlib.com/etc/bwiz/colorlib-wizard-25/index.html`
- **Category**: Forms / Multi-Step Wizard

## Design & Layout Notes

- **Aesthetic**: Dark slate background (`#383a4f`) with a centered container card (`#525575`) and rounded corners (10px).
- **Step Header**: White background header bar with 3 steps connected by subtle dividers; active/completed steps use vibrant green (`#25b45b`) icons and accents.
- **Form Fields**: Clean white input fields with dark placeholder text (`#999` / `#666`) and 3px border-radius.
- **Summary Step**: Confirmation table displaying full name, email, phone, address, gender, account name, and account number in a structured key-value layout.

## Implementation Tasks for Implementer

1. Scaffold `apps/stepforge` using existing wizard pattern (`@free-react-templates/stepforge`).
2. Implement 3-step state machine with validation for personal info, bank details, and summary review.
3. Apply Tailwind CSS 4 theme tokens matching the dark slate and green palette.
4. Add comprehensive unit and integration tests achieving 100% test coverage.
5. Register workspace in `package.json` and ensure lockfile is updated (`npm install`).
6. Add footer with required link to `https://www.componentdock.com/`.
7. Configure `public/CNAME` (`stepforge.free.componentdock.com`) and `vite.config.ts` with `injectUiSource()`.
