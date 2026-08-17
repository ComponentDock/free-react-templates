import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the first testimonial slide by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 2, name: 'Happy Customer' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'John Doe' })).toBeInTheDocument()
    expect(screen.getByText('CEO, Founder')).toBeInTheDocument()
    expect(
      screen.queryByRole('heading', { level: 3, name: 'James Woodland' }),
    ).not.toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Previous testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Next testimonial' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Show testimonial 1' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })

  it('steps forward through all slides and wraps around', () => {
    render(<Testimonials />)
    const next = screen.getByRole('button', { name: 'Next testimonial' })
    fireEvent.click(next)
    expect(screen.getByRole('heading', { level: 3, name: 'James Woodland' })).toBeInTheDocument()
    fireEvent.click(next)
    expect(screen.getByRole('heading', { level: 3, name: 'Rob Smith' })).toBeInTheDocument()
    fireEvent.click(next)
    expect(screen.getByRole('heading', { level: 3, name: 'John Doe' })).toBeInTheDocument()
  })

  it('steps backward and wraps from the first slide', () => {
    render(<Testimonials />)
    const prev = screen.getByRole('button', { name: 'Previous testimonial' })
    fireEvent.click(prev)
    expect(screen.getByRole('heading', { level: 3, name: 'Rob Smith' })).toBeInTheDocument()
    fireEvent.click(prev)
    expect(screen.getByRole('heading', { level: 3, name: 'James Woodland' })).toBeInTheDocument()
    fireEvent.click(prev)
    expect(screen.getByRole('heading', { level: 3, name: 'John Doe' })).toBeInTheDocument()
  })

  it('jumps to a slide when its dot is clicked and marks it active', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Show testimonial 3' }))
    expect(screen.getByRole('heading', { level: 3, name: 'Rob Smith' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Show testimonial 3' })).toHaveAttribute(
      'aria-current',
      'true',
    )
    expect(screen.getByRole('button', { name: 'Show testimonial 1' })).not.toHaveAttribute(
      'aria-current',
    )
  })

  it('renders distinct roles for each testimonial', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Show testimonial 2' }))
    expect(screen.getByText('Designer at Facebook')).toBeInTheDocument()
    fireEvent.click(screen.getByRole('button', { name: 'Show testimonial 3' }))
    expect(screen.getByText('Product Designer at Twitter')).toBeInTheDocument()
  })
})
