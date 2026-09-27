# EduSlot — Task Checklist

## Pre-Implementation
- [x] Spec written (openspec/specs/template-eduslot/spec.md)
- [x] Design notes documented (docs/templates/eduslot/design-notes.md)
- [x] Screenshot analyzed — education appointment form, full-viewport bg, left white card
- [x] Preview URL confirmed 404 — fell back to screenshot analysis

## Implementation Tasks (for implementer)
- [ ] Create apps/eduslot/ from template (copy simplest existing app)
- [ ] Rename package to @free-react-templates/eduslot
- [ ] Create public/CNAME with eduslot.free.componentdock.com
- [ ] Set homepage in package.json
- [ ] Create Background.tsx with full-bleed image + overlay
- [ ] Create FormCard.tsx container (left-aligned, white, no border-radius)
- [ ] Create AppointmentForm.tsx with all form fields
- [ ] Style text inputs with bottom-border-only pattern
- [ ] Style Course Type dropdown with chevron
- [ ] Style contact preference section with two dropdowns
- [ ] Style Terms & Conditions checkbox with link
- [ ] Style purple submit button (#6c63ff)
- [ ] Add responsive behavior (card expands on mobile)
- [ ] Add footer with ComponentDock link
- [ ] Write tests (Vitest + Testing Library)
- [ ] Achieve 100% coverage
- [ ] Run verify-app.sh eduslot
- [ ] Commit and push
