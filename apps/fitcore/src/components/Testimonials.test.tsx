import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the client feedback heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Client Feedback')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent(/What Our Clients Think/)
  })

  it('shows the testimonial quote', () => {
    render(<Testimonials />)
    expect(screen.getByText(/The training programs here transformed/)).toBeInTheDocument()
  })

  it('shows the author name and role', () => {
    render(<Testimonials />)
    expect(screen.getByText('Alex Morgan')).toBeInTheDocument()
    expect(screen.getByText('Gym Member')).toBeInTheDocument()
  })
})
