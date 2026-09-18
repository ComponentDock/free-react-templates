import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Testimonial')
  })

  it('renders testimonial author names', () => {
    render(<Testimonials />)
    expect(screen.getByText('John Anderson')).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })

  it('renders company names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Anderson Development Co.')).toBeInTheDocument()
    expect(screen.getByText('Mitchell Properties')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/exceptional experience/)).toBeInTheDocument()
    expect(screen.getByText(/on time and within budget/)).toBeInTheDocument()
  })

  it('renders avatar images', () => {
    render(<Testimonials />)
    const avatars = screen.getAllByRole('img')
    expect(avatars.length).toBeGreaterThanOrEqual(2)
    expect(avatars[0]).toHaveAttribute('alt', 'John Anderson')
    expect(avatars[1]).toHaveAttribute('alt', 'Sarah Mitchell')
  })
})
