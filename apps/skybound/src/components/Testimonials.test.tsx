import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the quote carousel with author blocks and no image column', () => {
    render(<Testimonials />)
    const region = screen.getByRole('region', { name: 'Testimonials' })
    expect(region).toHaveAttribute('data-index', '0')
    expect(screen.getAllByRole('heading', { level: 5, name: 'Marvel Maison' })).toHaveLength(2)
    expect(screen.getAllByText('Chief Executive, Amazon')).toHaveLength(2)
    expect(screen.queryAllByRole('img')).toHaveLength(0)
  })

  it('steps the quotes with arrows and dots, clamping at the ends', () => {
    render(<Testimonials />)
    const region = screen.getByRole('region', { name: 'Testimonials' })
    const previous = screen.getByRole('button', { name: 'Previous testimonial' })
    const next = screen.getByRole('button', { name: 'Next testimonial' })
    expect(previous).toBeDisabled()

    fireEvent.click(next)
    expect(region).toHaveAttribute('data-index', '1')
    expect(next).toBeDisabled()

    fireEvent.click(previous)
    expect(region).toHaveAttribute('data-index', '0')

    fireEvent.click(screen.getByRole('button', { name: 'Show testimonial 2' }))
    expect(region).toHaveAttribute('data-index', '1')
    expect(screen.getByRole('button', { name: 'Show testimonial 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
