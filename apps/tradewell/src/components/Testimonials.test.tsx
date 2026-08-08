import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the section heading', () => {
    render(<Testimonials />)

    expect(
      screen.getByRole('heading', { name: 'Loved by 12 Million+ Investors' }),
    ).toBeInTheDocument()
  })

  it('shows at least three testimonial quotes with metrics', () => {
    render(<Testimonials />)

    const quotes = screen.getAllByRole('figure')
    expect(quotes.length).toBeGreaterThanOrEqual(3)
    expect(screen.getByText('Portfolio Growth')).toBeInTheDocument()
    expect(screen.getByText('+47%')).toBeInTheDocument()
    expect(screen.getByText('Trades/Month')).toBeInTheDocument()
    expect(screen.getByText('500+')).toBeInTheDocument()
  })
})
