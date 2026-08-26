import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading', () => {
    render(<Testimonials />)
    expect(screen.getByText("Enjoy our Client's Feedback")).toBeInTheDocument()
  })

  it('shows first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('Fannie Rowe')).toBeInTheDocument()
    expect(screen.getByText(/care I received was exceptional/)).toBeInTheDocument()
  })

  it('navigates to next testimonial', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: /Next testimonial/i }))
    expect(screen.getByText('Mark Wilson')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: /Previous testimonial/i }))
    // Wraps to last
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })

  it('navigates via dot buttons', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: /Go to testimonial 3/i }))
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
  })
})
