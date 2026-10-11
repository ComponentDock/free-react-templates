import { describe, expect, it } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the light section title on the photo background', () => {
    render(<Testimonials />)
    expect(screen.getByText('Clients Testimonials')).toHaveClass('text-accent')
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('What Our Clients Say!')
    expect(screen.getByRole('heading', { level: 2 })).toHaveClass('text-white')
  })

  it('shows a quote with founder initials, name, and role', () => {
    render(<Testimonials />)
    expect(screen.getByText(/moved our busiest season/)).toBeInTheDocument()
    expect(screen.getByText('Sarah Whitfield')).toBeInTheDocument()
    expect(screen.getByText('Import manager, home goods retailer')).toBeInTheDocument()
  })

  it('advances through three slides with prev/next controls and wraps around', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Victor Lindqvist')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Mara Kowalski')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }))
    expect(screen.getByText('Sarah Whitfield')).toBeInTheDocument()

    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }))
    expect(screen.getByText('Mara Kowalski')).toBeInTheDocument()
  })

  it('renders the white rounded CTA card with a Request a Quote button', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent(
      'Always listening, always understanding.',
    )
    expect(screen.getByRole('link', { name: 'Request a Quote' })).toHaveAttribute('href', '#quote')
  })
})
