import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('sets document title and renders all sections', () => {
    render(<App />)
    expect(document.title).toBe('Innovex — Digital Agency Template')

    // TopBar
    expect(screen.getByText(/Phone/)).toBeInTheDocument()

    // Navbar
    expect(screen.getAllByText('Innovex').length).toBeGreaterThanOrEqual(1)

    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'Digital Innovation Company',
    )

    // Services
    expect(screen.getByText('We Shape The Perfect Solutions')).toBeInTheDocument()

    // About
    expect(screen.getByText('Highest Creative Standards')).toBeInTheDocument()

    // Counter
    expect(screen.getByText('4800')).toBeInTheDocument()

    // FAQ
    expect(screen.getByText('Frequently Ask Question')).toBeInTheDocument()

    // Team
    expect(screen.getByText('Professional Creative Team Members')).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getByText('Component Dock')).toBeInTheDocument()
  })
})
