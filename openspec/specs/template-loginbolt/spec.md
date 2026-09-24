# Template: LoginBolt (Login Form)

## Purpose

Recreation of ColorLib **Login Form V17** as a React 19 + Vite + Tailwind CSS 4 + TypeScript template.

- **Source:** https://colorlib.com/wp/template/login-form-v17/
- **Preview URL:** https://preview.colorlib.com/theme/login-form-v17/ (unreachable at prep time — 404; design tokens extracted from downloaded source zip)
- **Screenshot:** https://colorlib.com/wp/wp-content/uploads/sites/2/Login_v17.jpg
- **New name:** `loginbolt` (app folder `apps/loginbolt`, package `@free-react-templates/loginbolt`)
- **Deploy URL:** https://loginbolt.free.componentdock.com

## Requirements

### Requirement: Split-screen layout

The login page SHALL display a split-screen layout with a form panel on the left and an image panel on the right, centered on a light gray (#f2f2f2) background.

#### Scenario: Desktop layout

- **WHEN** the viewport is wider than 768px
- **THEN** the card shows a form on the left and an image on the right
- **AND** the image has a dark semi-transparent overlay (rgba(0,0,0,0.3))
- **AND** the card is vertically and horizontally centered

#### Scenario: Mobile layout

- **WHEN** the viewport is 768px or narrower
- **THEN** the form and image stack vertically
- **AND** the form occupies full width

### Requirement: Form title

The form SHALL display the title "Account Login" in uppercase with letter spacing (#555555).

#### Scenario: Title appearance

- **WHEN** the page loads
- **THEN** the form displays the title "Account Login"
- **AND** the title is uppercase with letter spacing
- **AND** the title text color is #555555

### Requirement: Input fields

The form SHALL display username and password input fields side by side on desktop and stacked on mobile.

#### Scenario: Desktop input layout

- **WHEN** the viewport is wider than 576px
- **THEN** the username and password inputs are displayed side by side
- **AND** each input occupies 50% of the form width

#### Scenario: Mobile input layout

- **WHEN** the viewport is 576px or narrower
- **THEN** the username and password inputs are stacked vertically

#### Scenario: Input field appearance

- **WHEN** the page loads
- **THEN** each input has a 1px solid #e6e6e6 border
- **AND** the input height is 55px
- **AND** the input font is Poppins Regular 18px
- **AND** the placeholder text color is #999999

#### Scenario: Input focus effect

- **WHEN** the user focuses an input field
- **THEN** a green (#00ad5f) border appears around the input
- **AND** the border animates in with a scale transition over 0.4s

### Requirement: Sign In button

The form SHALL display a full-width "Sign In" button with green background.

#### Scenario: Button appearance

- **WHEN** the page loads
- **THEN** a full-width "Sign In" button is displayed below the inputs
- **AND** the button background is #00ad5f
- **AND** the button text is white, uppercase, Montserrat Bold 12px
- **AND** the button has a 3px border radius
- **AND** the button height is 50px

#### Scenario: Button hover

- **WHEN** the user hovers over the Sign In button
- **THEN** the button background changes to #333333

### Requirement: Forgot password and Sign Up links

The form SHALL display a forgot password row and a Sign Up link.

#### Scenario: Forgot password row

- **WHEN** the page loads
- **THEN** a "Forgot" text is displayed in gray (#999999)
- **AND** a "User name / password?" link follows in green (#00ad5f)

#### Scenario: Sign Up link

- **WHEN** the page loads
- **THEN** a "Sign Up" link is displayed at the bottom of the form
- **AND** the link text is green (#00ad5f), uppercase

### Requirement: Form validation

The form SHALL validate that both username and password are provided before submission.

#### Scenario: Empty username validation

- **WHEN** the user clicks Sign In without entering a username
- **THEN** a validation message "Type user name" appears near the username input

#### Scenario: Empty password validation

- **WHEN** the user clicks Sign In without entering a password
- **THEN** a validation message "Type password" appears near the password input

### Requirement: Footer

The page footer SHALL link to Component Dock.

#### Scenario: Footer link

- **WHEN** the page loads
- **THEN** the page footer links to https://www.componentdock.com/
- **AND** the footer text reads "Made with Component Dock"
