import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

const quoteOf = (index: number): RegExp => new RegExp(testimonials[index]!.quote.slice(0, 24))

describe('Testimonials', () => {
  it('renders the heading and the first slide with quote, name, and role', () => {
    render(<Testimonials />)

    expect(screen.getByText('Testimonial')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Happy People' })).toBeInTheDocument()

    const first = testimonials[0]!
    expect(screen.getByText(quoteOf(0))).toBeInTheDocument()
    expect(screen.getByText(first.name)).toBeInTheDocument()
    expect(screen.getByText(first.role)).toBeInTheDocument()
  })

  it('navigates between slides with the labeled dots', () => {
    render(<Testimonials />)

    const firstDot = screen.getByRole('button', {
      name: 'Go to testimonial 1',
    })
    expect(firstDot).toHaveAttribute('aria-current', 'true')

    fireEvent.click(screen.getByRole('button', { name: 'Go to testimonial 2' }))
    expect(screen.getByText(quoteOf(1))).toBeInTheDocument()
    expect(firstDot.getAttribute('aria-current')).toBeNull()
    expect(screen.getByRole('button', { name: 'Go to testimonial 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )

    const dots = screen.getAllByRole('button', { name: /Go to testimonial/ })
    expect(dots).toHaveLength(testimonials.length)
  })

  it('moves back to an earlier slide', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Go to testimonial 3' }))
    expect(screen.getByText(quoteOf(2))).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Go to testimonial 1' }))
    expect(screen.getByText(quoteOf(0))).toBeInTheDocument()
  })
})
