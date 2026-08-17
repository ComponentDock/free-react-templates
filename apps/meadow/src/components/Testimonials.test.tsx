import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

function quoteActive(quote: string): string | null | undefined {
  const slide = screen.getByText(quote).closest('[data-slide]')
  return slide?.getAttribute('aria-hidden')
}

describe('Testimonials', () => {
  it('shows the Testimonial eyebrow and Happy Customers heading on the light band', () => {
    render(<Testimonials />)
    const section = screen.getByTestId('testimonial-section')
    expect(section).toHaveClass('bg-mist')
    expect(screen.getByText('Testimonial')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Happy Customers' })).toBeInTheDocument()
  })

  it('renders distinct customer cards and switches them via dot navigation', () => {
    render(<Testimonials />)
    expect(quoteActive(testimonials[0]!.quote)).not.toBe('true')

    const names = testimonials.map((item) => item.name)
    expect(new Set(names).size).toBe(3)
    const positions = testimonials.map((item) => item.position)
    expect(new Set(positions).size).toBe(3)

    fireEvent.click(screen.getByRole('button', { name: 'Go to testimonial 2' }))
    expect(quoteActive(testimonials[1]!.quote)).not.toBe('true')
    expect(quoteActive(testimonials[0]!.quote)).toBe('true')
    expect(screen.getByRole('button', { name: 'Go to testimonial 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
