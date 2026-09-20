import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />)
    expect(screen.getAllByText('Eduforge').length).toBeGreaterThanOrEqual(1)
  })

  it('renders all major sections', () => {
    render(<App />)
    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Eduforge')
    // About
    expect(screen.getByText('Welcome to Eduforge')).toBeInTheDocument()
    // Courses
    expect(screen.getByText('Explore Courses')).toBeInTheDocument()
    // Why Us
    expect(screen.getByText('Why Eduforge')).toBeInTheDocument()
    // Contact CTA
    expect(screen.getByText('Contact Us')).toBeInTheDocument()
    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
