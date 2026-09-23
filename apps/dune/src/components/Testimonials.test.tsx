import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading and testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Our client says/i })).toBeInTheDocument()
    expect(screen.getByText('Daniel Heart')).toBeInTheDocument()
    expect(screen.getByText('Sarah Williams')).toBeInTheDocument()
    expect(screen.getByText('James Cooper')).toBeInTheDocument()
  })

  it('displays testimonial text', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Give may saying meat there from heaven/i)).toBeInTheDocument()
  })
})
