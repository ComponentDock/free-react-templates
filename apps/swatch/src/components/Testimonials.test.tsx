import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { testimonials } from '../data'

function figureFor(index: number) {
  const quote = testimonials[index]!.quote
  const figure = screen.getByText(quote).closest('figure')
  expect(figure).not.toBeNull()
  return figure as HTMLElement
}

describe('Testimonials', () => {
  it('renders all five quotes with the first slide active', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'Our Successful Students' })).toBeInTheDocument()

    for (const testimonial of testimonials) {
      expect(screen.getByText(testimonial.quote)).toBeInTheDocument()
      // Names/roles appear in the card AND the dot's sr-only label
      expect(screen.getAllByText(testimonial.name).length).toBeGreaterThanOrEqual(1)
      expect(screen.getAllByText(testimonial.role)).toHaveLength(1)
    }

    expect(figureFor(0)).toHaveAttribute('data-active', 'true')
    expect(figureFor(1)).not.toHaveAttribute('data-active')
  })

  it('moves forward, backward and wraps around with controls and dots', () => {
    render(<Testimonials />)

    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(figureFor(1)).toHaveAttribute('data-active', 'true')

    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(figureFor(0)).toHaveAttribute('data-active', 'true')

    // Wraps backward from the first slide to the last
    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(figureFor(testimonials.length - 1)).toHaveAttribute('data-active', 'true')

    // Dots jump straight to a slide
    fireEvent.click(screen.getByRole('button', { name: 'Show testimonial from Amanda Lee' }))
    expect(figureFor(1)).toHaveAttribute('data-active', 'true')
  })
})
