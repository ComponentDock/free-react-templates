import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { App } from './App'

describe('App', () => {
  it('renders all sections with the correct title', () => {
    render(<App />)

    expect(document.title).toBe('Airy — Business Agency Template')

    // Navbar brand (first "Airy" link)
    const airyLinks = screen.getAllByText('Airy')
    expect(airyLinks.length).toBeGreaterThanOrEqual(2)

    // Hero
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
      'We Help to Build You the Product',
    )

    // About
    expect(screen.getByText('What We Can Do for You')).toBeInTheDocument()

    // Services
    expect(screen.getByText('Business Strategy')).toBeInTheDocument()

    // Counter
    expect(screen.getByText('Interesting Facts')).toBeInTheDocument()

    // Projects
    expect(screen.getByText('Recent Projects')).toBeInTheDocument()

    // Testimony
    expect(screen.getByText('What Our Clients Say')).toBeInTheDocument()

    // Pricing
    expect(screen.getByText('Our Best Pricing')).toBeInTheDocument()

    // Footer
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
  })
})
