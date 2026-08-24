# Scholar — Online Courses Template

> Recreation of the ColorLib "Onedu" design for the free-react-templates monorepo.

## Feature: Navbar

Scenario: Renders logo, search, nav links, cart, and sign-in button
Given the page is loaded
Then the navbar shows the "Scholar" logo link
And a search input is visible
And the following nav links are present: "Home", "Browse Courses", "About", "Blog", "Contact"
And a cart icon with badge is visible
And a "Sign In" button is visible

## Feature: Hero Section

Scenario: Displays headline, subtext, and search form
Given the page is loaded
Then the hero heading "Learn new skills online with top educators" is visible
And the subtext "Learn 100% online with world-class universities and industry experts." is visible
And a search form with a search button is visible
And a hero image is displayed

## Feature: Popular Courses

Scenario: Shows course cards with images, prices, titles, instructors, and ratings
Given the page is loaded
Then the heading "The world's largest selection of courses" is visible
And 5 course cards are rendered
And each course card shows a price "$118"
And each course card shows a star rating "4.9"

## Feature: About Split

Scenario: Displays heading, description, and browse button with an image
Given the page is loaded
Then the heading "The world's largest selection of online courses" is visible
And a "Browse Courses" button is visible
And an about image is displayed

## Feature: Students Viewing

Scenario: Shows "Students are viewing" heading and course cards
Given the page is loaded
Then the heading "Students are viewing" is visible
And 5 course cards are rendered in the students section

## Feature: Testimonial

Scenario: Shows student testimonial with quote, avatar, name, and role
Given the page is loaded
Then the heading "Student says about us" is visible
And the quote text is visible
And the name "Petey Cruiser" is visible
And the role "Student at Scholar" is visible

## Feature: Categories Grid

Scenario: Displays category cards with images and view-courses links
Given the page is loaded
Then the heading "Explore top categories" is visible
And 8 category cards are rendered
And each category card has a "View Courses" link
And the categories include "Programming", "VFX", "App Development", "Technology", "Graphics Design", "Music", "Product Design", "Video Editing"

## Feature: Become Instructor

Scenario: Shows heading, description, features, and CTA button
Given the page is loaded
Then the heading "Become an Instructor" is visible in the instructor section
And 3 checkmark features are visible
And a "Become an Instructor" button is visible
And a "Watch Video" link is visible

## Feature: Footer

Scenario: Displays columns, newsletter form, and Component Dock link
Given the page is loaded
Then the footer content info is visible
And a newsletter form with email input and subscribe button is visible
And a link to "https://www.componentdock.com/" branded "Component Dock" is visible
And the copyright text is visible
And the footer contains "Subjects", "Community", and "Company" column headings

## Feature: Back to Top

Scenario: Button appears after scrolling and scrolls to top on click
Given the page is loaded
Then the back-to-top button is not visible
When the user scrolls down
Then the back-to-top button becomes visible
When the user clicks the back-to-top button
Then the page scrolls to the top
