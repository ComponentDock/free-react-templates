import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('What Parents Say')).toBeInTheDocument()
  })

  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Tadpole has been incredible/)).toBeInTheDocument()
    expect(screen.getByText('Jennifer Adams')).toBeInTheDocument()
  })

  it('navigates to next testimonial', () => {
    render(<Testimonials />)
    const nextButton = screen.getByLabelText('Next testimonial')
    fireEvent.click(nextButton)
    expect(screen.getByText('Michael Brown')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', () => {
    render(<Testimonials />)
    const prevButton = screen.getByLabelText('Previous testimonial')
    fireEvent.click(prevButton)
    expect(screen.getByText('Sarah Davis')).toBeInTheDocument()
  })

  it('renders dot indicators', () => {
    render(<Testimonials />)
    const dots = screen.getAllByLabelText(/Go to testimonial/)
    expect(dots).toHaveLength(3)
  })

  it('navigates via dot indicators', () => {
    render(<Testimonials />)
    const dot = screen.getByLabelText('Go to testimonial 3')
    fireEvent.click(dot)
    expect(screen.getByText('Sarah Davis')).toBeInTheDocument()
  })
})
