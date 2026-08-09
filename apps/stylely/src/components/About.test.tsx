import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows the kicker, heading, supporting copy, and a Read More link', () => {
    render(<About />)

    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'Connect with your dream style' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /Read More/ })).toHaveAttribute('href', '#services')
    expect(screen.getAllByRole('paragraph').length).toBeGreaterThan(0)
  })
})
