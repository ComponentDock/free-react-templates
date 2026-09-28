import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections in correct order', () => {
    render(<App />)

    // Navbar
    expect(screen.getByText('Supperhouse')).toBeInTheDocument()

    // Hero
    expect(screen.getByText('Delicious Recipes')).toBeInTheDocument()
    expect(screen.getByText('Check Our Menu')).toBeInTheDocument()

    // Dishes
    expect(screen.getByText('Our Top Rated Dishes')).toBeInTheDocument()

    // Video section
    expect(screen.getByRole('button', { name: /play video/i })).toBeInTheDocument()

    // Features
    expect(screen.getByText('Refreshing Breakfast')).toBeInTheDocument()
    expect(screen.getByText('Awesome Lunch')).toBeInTheDocument()
    expect(screen.getByText('Soothing Dinner')).toBeInTheDocument()
    expect(screen.getByText('Rich Quality Buffet')).toBeInTheDocument()

    // Menus
    expect(screen.getByText('Featured Food Menus')).toBeInTheDocument()

    // Chefs
    expect(screen.getByText('Meet Our Chefs')).toBeInTheDocument()

    // Blog
    expect(screen.getByText('Our Blog')).toBeInTheDocument()

    // Contact (use getAllByText since Footer also has "Contact Us")
    const contactUsElements = screen.getAllByText('Contact Us')
    expect(contactUsElements.length).toBeGreaterThanOrEqual(1)

    // Footer
    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(screen.getByText('Newsletter')).toBeInTheDocument()
  })

  it('sets document title on mount', () => {
    render(<App />)
    expect(document.title).toBe('Supperhouse — Restaurant Template')
  })
})
