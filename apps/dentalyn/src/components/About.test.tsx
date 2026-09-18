import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows heading and skill bar labels', () => {
    render(<About />)

    expect(screen.getByRole('heading', { name: 'About Us' })).toBeInTheDocument()
    expect(screen.getByText('Experience Dentist')).toBeInTheDocument()
    expect(screen.getByText('Modern Equipment')).toBeInTheDocument()
    expect(screen.getByText('Friendly Staff')).toBeInTheDocument()
  })

  it('renders the about image', () => {
    render(<About />)

    expect(screen.getByAltText('About our dental clinic')).toBeInTheDocument()
  })

  it('renders skill bars with animated widths', () => {
    render(<About />)

    // The skill bars should render with width transitions
    const fills = document.querySelectorAll('[style*="width"]')
    expect(fills.length).toBeGreaterThanOrEqual(3)
  })

  it('cleans up timers on unmount', () => {
    const { unmount } = render(<About />)
    unmount()
    // No errors from cleanup of setTimeout in useEffect
  })
})
