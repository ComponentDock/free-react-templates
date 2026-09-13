import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Some statistics/i })).toBeInTheDocument()
  })

  it('displays at least 3 testimonial quotes', () => {
    render(<Testimonials />)
    const quotes = screen.getAllByText(
      /Working with this team|They understood our vision|Professional, creative/i,
    )
    expect(quotes.length).toBeGreaterThanOrEqual(3)
  })

  it('displays testimonial names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Cooper')).toBeInTheDocument()
    expect(screen.getByText('Emma Rodriguez')).toBeInTheDocument()
  })
})
