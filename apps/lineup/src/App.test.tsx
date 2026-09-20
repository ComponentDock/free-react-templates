import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections', () => {
    render(<App />)

    // Navbar
    expect(screen.getAllByRole('navigation').length).toBeGreaterThanOrEqual(1)
    expect(screen.getAllByText('Lineup').length).toBeGreaterThanOrEqual(1)

    // Hero
    expect(screen.getByText(/We have the best events/)).toBeInTheDocument()
    expect(screen.getByText('Order here')).toBeInTheDocument()

    // About
    expect(screen.getByText(/What is Lineup and why choose our services/)).toBeInTheDocument()

    // Featured Events
    expect(screen.getByText('Michael Smith in concert')).toBeInTheDocument()
    expect(screen.getByText('Street art fest')).toBeInTheDocument()

    // Next Events
    expect(screen.getByText('Our next events')).toBeInTheDocument()
    expect(screen.getByText('U2 Concert in Detroit')).toBeInTheDocument()

    // Regional Events
    expect(screen.getByText(/Events in New York/)).toBeInTheDocument()

    // Newsletter
    expect(screen.getByText(/Subscribe to our newsletter/)).toBeInTheDocument()

    // Footer
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
