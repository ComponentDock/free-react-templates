# Cognita — Online Learning Template

Recreation of ColorLib **Eskwela** (https://colorlib.com/wp/template/eskwela/).

## Feature: UpperBar

Scenario: Renders social icons and Apply Now link
Given the page is loaded
Then social icon links for Twitter, Facebook, LinkedIn, and Dribbble are visible
And an "Apply Now" link is visible

## Feature: Navbar

Scenario: Renders logo, navigation links, and Join Now CTA
Given the page is loaded
Then a "Cognita" logo link is visible
And the following nav links are present: "Home", "Courses", "About", "Events", "News", "Contact"
And a "Join Now" CTA button is visible

Scenario: Toggles mobile menu
Given the page is loaded
When I click the "Open menu" button
Then a "Close menu" button is visible
And mobile navigation links are displayed

## Feature: Hero Section

Scenario: Displays headline, subtitle, and Start Learning button
Given the page is loaded
Then the hero heading "Best Online Learning System" is visible
And the subtitle "Start your journey to knowledge today" is visible
And a "Start Learning" button is visible

## Feature: Intro Features

Scenario: Shows three feature cards
Given the page is loaded
Then headings for "Learn Courses Online", "Online Library Store", "50% off in all selected Courses" are visible

## Feature: Welcome Section

Scenario: Displays welcome heading and accordion panels
Given the page is loaded
Then a "Welcome to Cognita" heading is visible
And accordion panels exist for FAQ items
And the first panel content is visible by default

Scenario: Toggles accordion panel
Given the page is loaded
When I click the "How do I enroll?" button
Then the enrollment content is visible
And the first panel content is hidden

## Feature: Features

Scenario: Shows four feature items
Given the page is loaded
Then headings for "Professional Courses", "Experienced Instructor", "Practical Training", "Validated Certificate" are visible

## Feature: Classes

Scenario: Shows course cards with images, prices, and enroll links
Given the page is loaded
Then a "Our Classes" heading is visible
And 6 course cards are rendered
And each course shows an "Enroll Now" link

## Feature: Testimonials

Scenario: Shows student testimonials with names and roles
Given the page is loaded
Then a "What Students Say" heading is visible
And testimonial cards for "Sarah Johnson", "Michael Chen", "Emily Davis" are rendered

## Feature: Professors

Scenario: Shows instructor cards with names and specialties
Given the page is loaded
Then a "Our Experienced Professors" heading is visible
And 4 instructor names are shown: "Olivia Young", "Daniel Anderson", "David Brook", "Brigeth Smith"

## Feature: Events

Scenario: Shows event cards with dates and descriptions
Given the page is loaded
Then a "Upcoming Events" heading is visible
And at least 3 event cards are rendered

## Feature: Footer

Scenario: Renders footer with Component Dock link and newsletter
Given the page is loaded
Then a link to componentdock.com is visible with text "Component Dock"
And a newsletter form with email input is visible
And copyright text is visible
