import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the heading and at least two testimonial cards with quotes and names', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { level: 2, name: 'Happy Clients & Feedbacks' }),
    ).toBeInTheDocument()

    expect(screen.getByText(/left my golden retriever with them/)).toBeInTheDocument()
    expect(screen.getByText('Sofia Martinez')).toBeInTheDocument()
    expect(screen.getByText(/They groomed my cat beautifully/)).toBeInTheDocument()
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
  })
})
