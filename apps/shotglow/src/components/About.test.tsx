import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('renders the about section subtitle and heading', () => {
    render(<About />)
    expect(screen.getByText('About our studio')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /The Camera Is An Instrument/i }),
    ).toBeInTheDocument()
    expect(screen.getByText(/end of summer/i)).toBeInTheDocument()
  })

  it('renders the read more button', () => {
    render(<About />)
    expect(screen.getByRole('link', { name: /Read More/i })).toHaveAttribute('href', '#services')
  })
})
