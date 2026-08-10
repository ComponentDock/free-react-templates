import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and three couple quotes', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 1, name: 'Feedback from our happy couples' }),
    ).toBeInTheDocument()
    expect(screen.getByText('Emma & James')).toBeInTheDocument()
    expect(screen.getByText('Sofia & Daniel')).toBeInTheDocument()
    expect(screen.getByText('Mia & Oliver')).toBeInTheDocument()
  })

  it('renders quote text for each couple', () => {
    render(<Testimonials />)
    expect(screen.getByText(/planned every detail/i)).toBeInTheDocument()
    expect(screen.getByText(/dream wedding/i)).toBeInTheDocument()
    expect(screen.getByText(/with such care and warmth/i)).toBeInTheDocument()
  })
})
