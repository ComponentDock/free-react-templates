import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getByText('S')).toBeInTheDocument() // Navbar logo
    expect(screen.getByText(/Lorem ipsum dolor sit amet/)).toBeInTheDocument() // Hero
    expect(screen.getByText('Quality Cuisine')).toBeInTheDocument() // Features
    expect(screen.getByText('Our Specialties')).toBeInTheDocument() // Specialties
    expect(screen.getByText('Maxim Smith')).toBeInTheDocument() // Testimonials
    expect(screen.getByText('Feature Menu')).toBeInTheDocument() // FeatureMenu
    expect(screen.getByText('Master Chef')).toBeInTheDocument() // Chef
    expect(screen.getByText('Menu List with Price')).toBeInTheDocument() // MenuPricing
    expect(screen.getByText('Events & News')).toBeInTheDocument() // Events
    expect(screen.getByText('Why Choose Us')).toBeInTheDocument() // WhyChooseUs
    expect(screen.getByText('Seared Restaurant')).toBeInTheDocument() // Footer
  })

  it('sets document title', () => {
    render(<App />)
    expect(document.title).toBe('Seared — Restaurant & Fine Dining Template')
  })
})
