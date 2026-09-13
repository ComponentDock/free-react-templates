import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'Happy Clients' })).toBeInTheDocument()
  })

  it('renders all three testimonial cards with names', () => {
    render(<Testimonials />)

    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Cooper')).toBeInTheDocument()
    expect(screen.getByText('Emily Watson')).toBeInTheDocument()
  })

  it('renders star ratings', () => {
    render(<Testimonials />)

    const stars = screen.getAllByLabelText('5 out of 5 stars')
    expect(stars).toHaveLength(3)
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)

    expect(screen.getByText(/transformed our backyard/)).toBeInTheDocument()
    expect(screen.getByText(/Reliable, efficient/)).toBeInTheDocument()
    expect(screen.getByText(/office grounds have never looked better/)).toBeInTheDocument()
  })
})
