import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { testimonials, testimonialsTitle } from '../data'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the first customer on load and marks the other slides hidden', () => {
    const { container } = render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: testimonialsTitle })).toBeInTheDocument()

    const figures = Array.from(container.querySelectorAll('figure'))
    expect(figures).toHaveLength(4)
    figures.forEach((figure, i) => {
      expect(figure.getAttribute('aria-hidden') === 'true').toBe(i !== 0)
    })
    expect(screen.getByText(testimonials[0]!.quote)).toBeInTheDocument()
  })

  it('cycles slides with next, previous and dot navigation', () => {
    const { container } = render(<Testimonials />)
    const activeIndex = () =>
      Array.from(container.querySelectorAll('figure')).findIndex(
        (figure) => figure.getAttribute('aria-hidden') !== 'true',
      )

    expect(activeIndex()).toBe(0)

    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(activeIndex()).toBe(1)

    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(activeIndex()).toBe(0)

    // Previous on the first slide wraps to the last one.
    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(activeIndex()).toBe(3)

    // Next from the last slide wraps back to the first one.
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(activeIndex()).toBe(0)

    // Dot navigation jumps directly to a slide.
    fireEvent.click(screen.getByRole('button', { name: 'Show testimonial 3' }))
    expect(activeIndex()).toBe(2)
    expect(screen.getByRole('button', { name: 'Show testimonial 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
