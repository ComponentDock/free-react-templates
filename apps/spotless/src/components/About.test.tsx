import { render, screen } from '@testing-library/react'
import { About } from './About'
import { describe, expect, it } from 'vitest'

describe('About', () => {
  it('renders the photo, section title, copy, and Learn More button', () => {
    render(<About />)
    expect(screen.getByText('About cleaning company')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { level: 2, name: 'Better life for everyone' }),
    ).toBeInTheDocument()
    expect(screen.getByText(/At Spotless, it is our duty/)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Learn More' })).toHaveClass('btn-pill')
    expect(screen.getByAltText('Professional cleaner giving a thumbs up')).toHaveAttribute(
      'src',
      expect.stringContaining('spotless-cleaner'),
    )
  })
})
