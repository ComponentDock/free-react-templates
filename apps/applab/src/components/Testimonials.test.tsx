import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and four testimonial cards with quotes and names', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Review from our regular users' }),
    ).toBeInTheDocument()

    for (const name of ['Robert Smile', 'Sarah Mitchell', 'James Carter', 'Emma Wilson']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }

    expect(screen.getAllByRole('figure')).toHaveLength(4)
    expect(screen.getAllByLabelText('5 out of 5 stars')).toHaveLength(4)
  })
})
