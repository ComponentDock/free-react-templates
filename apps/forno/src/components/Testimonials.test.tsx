import { fireEvent, render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows the first quote with a five-star rating', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { name: 'Happy Customer' })).toBeInTheDocument()
    expect(screen.getByText('Testimony')).toBeInTheDocument()
    expect(screen.getByText(/Far far away, behind the word mountains/)).toBeInTheDocument()
    expect(screen.getByText('Jason McClean')).toBeInTheDocument()
    expect(screen.getByText('Customer')).toBeInTheDocument()
    // 5 stars + 2 chevrons
    expect(document.querySelectorAll('svg')).toHaveLength(7)
  })

  it('cycles quotes with next, prev and dots', () => {
    render(<Testimonials />)

    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/Separated they live in Bookmarksgrove/)).toBeInTheDocument()
    expect(screen.getByText('Mark Stevenson')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText(/A small river named Duden/)).toBeInTheDocument()
    expect(screen.getByText('Rose Henderson')).toBeInTheDocument()

    // Next wraps to the first quote
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Jason McClean')).toBeInTheDocument()

    // Prev wraps to the last quote
    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Rose Henderson')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Show testimonial 2' }))
    expect(screen.getByText('Mark Stevenson')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Show testimonial 2' })).toHaveAttribute(
      'aria-current',
      'true',
    )
  })
})
