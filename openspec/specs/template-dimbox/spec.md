# Template: DimBox (Confirmation Modal)

## Purpose

Recreation of ColorLib **Modal 08** — a confirmation/modal dialog component
for newsletter subscriptions and account confirmations.

- **Source**: https://colorlib.com/wp/template/modal-08/
- **Preview URL**: https://preview.colorlib.com/theme/bootstrap/modal-08/
- **Stack**: Vite + React 19 + Tailwind CSS 4 + TypeScript

## Design tokens (extracted from preview CSS)

| Token               | Value                                      | Notes                                     |
| ------------------- | ------------------------------------------ | ----------------------------------------- |
| Font family         | `"Poppins", sans-serif`                    | Google Fonts, weights 300–800             |
| Brand color         | `#fb8691` (salmon pink)                    | Primary button bg, focus borders          |
| Gradient start      | `#915eff` (vivid purple)                   | Modal header background                   |
| Gradient end        | `#ff8e59` (orange)                         | Modal header background, 45deg            |
| Body text           | `#212529` (near-black)                     | Body copy                                 |
| Background          | `#ffffff` (white)                          | Page and modal body                       |
| Close button        | `#ffffff` on gradient header               | X icon, top-right, 40×40px                |
| Button radius       | `40px` (pill)                              | All primary buttons                       |
| Button bg           | `#fb8691`                                  | Filled state                              |
| Button border       | `1px solid #fb8691`                        | Outline on hover → transparent bg         |
| Button text         | `#ffffff`                                  |                                           |
| Modal shadow        | `0 10px 34px -15px rgba(0,0,0,0.24)`       | Elevated card feel                        |
| Modal max-width     | `600px`                                    |                                           |
| Modal header height | `230px`                                    | Gradient bar with skewed dividers         |
| Icon circle         | `200×200px, border-radius: 50%`            | Centered email/envelope icon              |
| Skewed decorations  | `::before` / `::after` skewY ±10deg, white | Angular separator between header and body |
| Transition          | `0.3s all ease`                            | On buttons and links                      |

## Visual description (from ColorLib screenshot)

The template shows a centered modal dialog on a white page. The top portion
of the modal is a vivid gradient header (purple→orange, 45deg) with an X
close button in the top-right corner. Below the header, the modal body is
white with centered text: "You've Got Mail!" in bold white over the gradient,
followed by a circular icon area (email envelope SVG), a subtitle
"We sent confirmation link to:", and the email address in bold. The launch
button on the page background is a pill-shaped salmon-pink button with white
text. Two skewed white triangle decorations create angular separators between
the gradient header and the white body.

## Structure (section order)

1. **Page section**: centered container with title "DimBox" and a pill button
   that triggers the modal
2. **Modal overlay**: semi-transparent dark backdrop
3. **Modal header**: gradient background (purple→orange), close button
4. **Modal body**: circular icon, heading, subtext, email address display
5. **Footer**: Component Dock link (required)

## Gherkin requirements

```gherkin
Feature: DimBox confirmation modal

  Background:
    Given the user is on the DimBox page

  Scenario: page renders with title and trigger button
    Then I should see the heading "DimBox"
    And I should see a button labeled "Open Confirmation Modal"

  Scenario: modal opens on button click
    When I click the "Open Confirmation Modal" button
    Then a modal dialog should be visible
    And the modal should display "You've Got Mail!" heading
    And the modal should show an email icon
    And the modal should display "We sent confirmation link to:"
    And the modal should show "johndoe@gmail.com"

  Scenario: modal closes on close button click
    Given the modal is open
    When I click the close button
    Then the modal should not be visible

  Scenario: modal closes on backdrop click
    Given the modal is open
    When I click outside the modal
    Then the modal should not be visible

  Scenario: modal closes on Escape key
    Given the modal is open
    When I press the Escape key
    Then the modal should not be visible

  Scenario: modal is accessible
    Given the modal is open
    Then the modal should have role="dialog"
    And the close button should have aria-label="Close"

  Scenario: page is responsive
    When I resize the viewport to 375px width
    Then the modal should still be visible and centered
    And the button should be fully visible

  Scenario: footer contains Component Dock link
    Then I should see a link to "https://www.componentdock.com/"
    And the link text should include "Component Dock"
```

## Verification checklist

- [ ] `npm run verify:app dimbox` passes (typecheck + lint + knip + fallow + test:coverage + build)
- [ ] Spec folder exists: `openspec/specs/template-dimbox/spec.md`
- [ ] Docs folder exists: `docs/templates/dimbox/tasks.md`
- [ ] No references to `colorlib.com` or `preview.colorlib.com` in `apps/dimbox/`
- [ ] Footer links to `https://www.componentdock.com/`
- [ ] `public/CNAME` contains `dimbox.free.componentdock.com`
- [ ] `package.json` homepage is `https://dimbox.free.componentdock.com`
- [ ] Modal has correct gradient: `linear-gradient(45deg, #915eff, #ff8e59)`
- [ ] Buttons are pill-shaped (`border-radius: 9999px`)
- [ ] Font is Poppins (loaded via Google Fonts link in index.html)
- [ ] Icon uses `lucide-react` Mail icon (not copied SVG)
- [ ] Placeholder image via `https://picsum.photos/seed/dimbox-1/200/200` if needed
- [ ] All 8 Gherkin scenarios pass
- [ ] Coverage: 100% lines/functions/branches/statements
