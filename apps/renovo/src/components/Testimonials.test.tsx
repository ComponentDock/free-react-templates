import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Feedback from our real clients')).toBeInTheDocument()
  })

  it('renders all testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('Emily Chen')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/fixed our entire fleet/)).toBeInTheDocument()
    expect(screen.getByText(/completely dead after water damage/)).toBeInTheDocument()
    expect(screen.getByText(/Professional, fast, and affordable/)).toBeInTheDocument()
  })

  it('renders roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('IT Manager, TechCorp')).toBeInTheDocument()
    expect(screen.getByText('Small Business Owner')).toBeInTheDocument()
    expect(screen.getByText('Freelance Designer')).toBeInTheDocument()
  })

  it('renders avatar images', () => {
    render(<Testimonials />)
    const avatars = screen.getAllByRole('img')
    expect(avatars.length).toBeGreaterThanOrEqual(3)
  })
})
