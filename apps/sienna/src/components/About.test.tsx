import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from './About'

describe('About', () => {
  it('shows the kicker, heading, supporting copy, and a Learn More link', () => {
    render(<About />)

    expect(screen.getByText('About Us')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: 'We Are Artist, Hair Is My Canvas' }),
    ).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveAttribute('href', '#services')
    expect(screen.getAllByRole('paragraph').length).toBeGreaterThan(0)
  })
})
