# FormCraft — Tasks & Implementation Plan

Recreates ColorLib Wizard 28 (`colorlib-wizard-28`).

## Architecture & Components

- `src/App.tsx`: Main container with background gradient (`bg-img-1`), floating header title, and card container.
- `src/components/WizardForm.tsx`: Manages active step state (1, 2, 3), progress percentage (40%, 70%, 100%), and form input values.
- `src/components/StepOne.tsx`: Personal info (Full name, Email, Phone number) + Next button.
- `src/components/StepTwo.tsx`: Address details (Building number, Street, Town, Zip code) + Back & Next buttons.
- `src/components/StepThree.tsx`: Payment details (Card holder name, Card number, CVC, Expiration) + Back & Submit buttons.
- `src/components/Footer.tsx`: Component dock attribution link (`https://www.componentdock.com/`).

## Verification Plan

1. Component unit tests for each step and wizard navigation.
2. Form validation and state management tests.
3. 100% test coverage across all implemented files.
