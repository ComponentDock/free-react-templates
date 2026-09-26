import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders testimonials heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Testimonials')
  })

  it('renders four testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Chad Hawkins')).toBeInTheDocument()
    expect(screen.getByText('Ayisha Atherton')).toBeInTheDocument()
    expect(screen.getByText('Marcus Webb')).toBeInTheDocument()
    expect(screen.getByText('Sarah Chen')).toBeInTheDocument()
  })

  it('renders customer roles', () => {
    render(<Testimonials />)
    const roles = screen.getAllByText('Customer')
    expect(roles.length).toBe(4)
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/incredible experience from start to finish/)).toBeInTheDocument()
    expect(screen.getByText(/Professional, creative, and detail-oriented/)).toBeInTheDocument()
  })

  it('renders client photos', () => {
    render(<Testimonials />)
    const photos = screen.getAllByAltText(/Chad|Ayisha|Marcus|Sarah/)
    expect(photos).toHaveLength(4)
  })
})
