# Arcane — Design Notes & Task Outline

Source: ColorLib Wizard 20 (https://colorlib.com/wp/template/colorlib-wizard-20/)
Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-20/index.html
Screenshot: https://colorlib.com/wp/wp-content/uploads/sites/2/colorlib-free-wizard-20.jpg

## Structure Order

This is NOT a scrolling page — it's a single-viewport 3-step wizard. The implementer builds a Wizard container component that shows one step at a time, with a horizontal step indicator.

1. **WizardLayout** — full-viewport container with gradient background + centered white card
2. **StepIndicator** — horizontal row of 3 numbered circles connected by white line
3. **Step1AccountSetup** — email + password + confirm password fields
4. **Step2SocialProfiles** — Twitter + Facebook + Google Plus fields
5. **Step3PersonalDetails** — name + phone + address fields
6. **StepActions** — Previous/Next gradient buttons (Previous hidden on Step 1)

## Section-by-Section Fidelity Notes

### WizardLayout

- Full viewport height (100vh), centered flex container
- Background: CSS gradient (vertical, 0deg): #884d80 → #9795f0 → #2b5876 → #4e4376
- Centered card: 373px wide, white background, 10px border-radius, box-shadow (0px 5px 9.5px 0.5px rgba(0,0,0,0.1))
- Card header: "Account Setup" in white bold text at top of card (Poppins, 12px, bold)
- Vertical padding: 270px top/bottom on .main (large spacing)

### StepIndicator

- Horizontal row at top of form, below "Account Setup" header
- 3 numbered circles (44px diameter, 3px solid white border, 50% border-radius = full circle)
- Inactive circles: #ebebeb background, #999 text color, box-shadow
- Active circle: gradient background (same as page: #a1c4fd → #884d80 → #2b5876 → #4e4376), white text
- Horizontal connecting line: 8px tall, white background, 290px wide, positioned behind circles (z-index: 9)
- Step labels: white bold text, 12px, with text-shadow (3px 4px 5px rgba(0,0,0,0.2))

### Step1AccountSetup

- Section heading: "Creat your account" (original typo — recreate faithfully, note in spec)
- Uppercase, 16px, bold, centered, padding-top: 32px, padding-bottom: 25px
- Email input: placeholder "Eg: aucreative@gmail.com"
- Password input: placeholder "Password"
- Confirm Password input: placeholder "Confirm Password"
- All inputs: transparent background, 1px solid #ebebeb border, 5px border-radius, 40px height, Poppins 500 13px, padding 15px 20px
- Focus state: border-image-source with gradient (#a1c4fd → #884d80 → #2b5876 → #4e4376), border-image-slice: 1, border-radius: 5px

### Step2SocialProfiles

- Section heading: "Social profiles"
- Twitter input: placeholder "Twitter"
- Facebook input: placeholder "Facebook"
- Google Plus input: placeholder "Google Plus"
- Same input styling as Step 1

### Step3PersonalDetails

- Section heading: "Personal Details"
- Your Name input: placeholder "Your name"
- Phone input: placeholder "Phone"
- Address input: placeholder "Address"
- Same input styling as Step 1

### StepActions

- Container: absolute positioned at bottom of form card (bottom: 40px, full width)
- Flex row, centered alignment
- Two buttons: "Previous" and "Next"
- Button styling: 120×40px, gradient background (#a1c4fd → #884d80 → #2b5876 → #4e4376), white text, 5px border-radius, Poppins font
- Hover: solid background #090909
- Previous button: hidden on Step 1 (class "disabled" with display: none)
- Next button always visible

## Key Design Decisions

- **Gradient is the dominant theme:** The purple-to-teal gradient appears on the page background, active step circle, and action buttons — creating visual cohesion
- **White card on gradient:** The form sits in a clean white card that contrasts sharply with the vibrant gradient background
- **Minimal inputs:** No filled backgrounds, just subtle 1px borders; focus state uses gradient border-image for emphasis
- **Step circles with rings:** White 3px ring around circles gives a floating, dimensional feel; active circle fills with the gradient
- **Horizontal wizard:** Unlike some wizard templates that use vertical sidebars, this one uses a horizontal step indicator with connecting line
- **Responsive:** At < 480px, card width becomes calc(100% - 40px) and action buttons shrink to 100px width
