import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all major sections', () => {
    render(<App />)
    expect(screen.getAllByText('Voyager').length).toBeGreaterThan(0)
    expect(screen.getByText('Amazing Maldives Tour')).toBeInTheDocument()
    expect(screen.getByText('Find Flights')).toBeInTheDocument()
    expect(screen.getByText('Amazing Travel')).toBeInTheDocument()
    expect(screen.getByText('Popular Destination')).toBeInTheDocument()
    expect(screen.getByText('Recent Blog')).toBeInTheDocument()
    expect(screen.getByText('45')).toBeInTheDocument()
    expect(screen.getByText('Recommended Hotels')).toBeInTheDocument()
    expect(screen.getByText('Our Satisfied Guests Says')).toBeInTheDocument()
    expect(screen.getByText('Most Popular Travel Countries')).toBeInTheDocument()
    expect(screen.getByText('Sign Up for a Newsletter')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })

  it('sets the page title', () => {
    render(<App />)
    expect(document.title).toBe('Voyager — Travel Agency Template')
  })
})
