import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and at least two testimonial cards with quotes and names', () => {
    render(<Testimonials />)
    expect(
      screen.getByRole('heading', { level: 2, name: 'What Our Customers Have to Say' }),
    ).toBeInTheDocument()

    for (const name of ['Sarah Johnson', 'Michael Chen', 'Emily Rodriguez', 'David Kim']) {
      expect(screen.getByText(name)).toBeInTheDocument()
    }

    expect(screen.getByText(/boosted our productivity/)).toBeInTheDocument()
    expect(screen.getByText(/seamless onboarding/)).toBeInTheDocument()
  })
})
