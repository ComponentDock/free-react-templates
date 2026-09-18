import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the Testimonials heading', () => {
    render(<Testimonials />)

    expect(screen.getByRole('heading', { level: 2, name: /Testimonials/i })).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)

    expect(screen.getByText(/Our stay at Seaview was absolutely magical/)).toBeInTheDocument()
    expect(screen.getByText(/From the moment we checked in/)).toBeInTheDocument()
    expect(screen.getByText(/A perfect family vacation/)).toBeInTheDocument()
  })

  it('renders author names', () => {
    render(<Testimonials />)

    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('renders 3 testimonial cards', () => {
    render(<Testimonials />)

    const clientLabels = screen.getAllByText('Client')
    expect(clientLabels).toHaveLength(3)
  })
})
