# Signpost — Implementation Tasks

Source: ColorLib Wizard 30
Preview: https://colorlib.com/etc/bwiz/colorlib-wizard-30/index.html
Spec: openspec/specs/template-signpost/spec.md

## Structure order (top → bottom)

1. Full-page background container
2. Centered white wizard card (850px, border-radius 8px, shadow)
3. Blue header bar ("FORM WIZARD")
4. Step progress indicator (3 circles + connecting lines)
5. Form content area (step-dependent)
6. Action buttons (Previous / Next or Submit)

## Section-by-section fidelity notes

### Background & card layout
- Full-viewport background image (use `picsum.photos/seed/signpost-bg/1920/1080`)
- Card centered both vertically and horizontally
- Card: white bg, 850px max-width, 8px border-radius, shadow `0px 8px 20px 0px rgba(0,0,0,0.15)`
- On mobile: width 90%, reduced margins

### Header
- Blue (#3760e5) background, top corners rounded (8px)
- "FORM WIZARD" in white, 28px, bold Montserrat
- Padding: 13px 50px

### Step indicator
- 3 circular nodes (60px diameter), connected by horizontal lines
- Inactive: #ccc background, white number
- Active/Current: #3760e5 background, white number
- Completed: #3760e5 background
- Connector lines: #e5e5e5, 2px height, positioned between circles
- Numbers: 24px, weight 600, centered in circles
- Centered horizontally with flexbox

### Form steps
- Content padding: 0 80px
- Two-column layout for fields (flex, gap 20px)
- Labels: #333, 16px, bold, block display, 10px bottom padding
- Inputs: full width, 14.5px vertical / 15px horizontal padding, 1px solid #e5e5e5 border, 5px border-radius, Montserrat 16px weight 600, #333 text
- Select: transparent background, custom chevron icon (Material Design Iconic Font), #666 placeholder text
- Step 1: First Name + Last Name (text inputs)
- Step 2: Email (type email) + Password (type password)
- Step 3: Subject (select: Finance/Marketing/IT Support) + Comment (text input)

### Action buttons
- Container margin: 20px 80px 60px
- Buttons: inline-flex, 50px height × 160px width, border-radius 25px (pill)
- Background: #3760e5, white text, Montserrat 15px weight 600
- Hover: background darkens to #2b4ab3
- Previous button hidden on step 1
- On step 3, Next becomes Submit

### Responsive breakpoints
- ≤1199px: card margin reduces
- ≤991px: form rows stack vertically (flex-direction column)
- ≤768px: form-holder width becomes 100%
- ≤575px: card width 90%, content padding 0 40px, step circles shrink (50px), connector lines shorter

### Fonts
- Montserrat (Google Fonts): weights 400, 500, 600, 700
- Material Design Iconic Font for chevron icon in select dropdown

### Icons
- Chevron-down icon for select dropdown (use lucide-react ChevronDown)

### Footer
- "More templates at Component Dock" linking to https://www.componentdock.com/

## Implementation notes

- Use React state to track current step (0-2) and form data
- No jQuery Steps plugin — implement wizard logic in React
- Step transitions can use CSS transitions for smoothness
- Form validation: required fields per step before advancing
- The original uses jQuery Steps plugin; replace with React state management
- Use `picsum.photos/seed/signpost-bg/1920/1080` for background image
- Google Fonts link for Montserrat in index.html
