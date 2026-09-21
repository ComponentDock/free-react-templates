import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonial } from './Testimonial'

describe('Testimonial', () => {
  it('renders the section heading', () => {
    render(<Testimonial />)
    expect(
      screen.getByRole('heading', { level: 2, name: /What Customers Are Saying/i }),
    ).toBeInTheDocument()
  })

  it('renders all three testimonial cards', () => {
    render(<Testimonial />)
    expect(screen.getByText('Emily Wilson')).toBeInTheDocument()
    expect(screen.getByText('James Rodriguez')).toBeInTheDocument()
    expect(screen.getByText('Sarah Thompson')).toBeInTheDocument()
  })

  it('renders the roles', () => {
    render(<Testimonial />)
    expect(screen.getByText('Business Owner')).toBeInTheDocument()
    expect(screen.getByText('Freelancer')).toBeInTheDocument()
    expect(screen.getByText('Student')).toBeInTheDocument()
  })

  it('renders the testimonial quotes', () => {
    render(<Testimonial />)
    expect(screen.getByText(/seamless/i)).toBeInTheDocument()
    expect(screen.getByText(/flexible terms/i)).toBeInTheDocument()
    expect(screen.getByText(/education loan/i)).toBeInTheDocument()
  })

  it('renders testimonial photos with alt text', () => {
    render(<Testimonial />)
    expect(screen.getByRole('img', { name: 'Emily Wilson' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'James Rodriguez' })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: 'Sarah Thompson' })).toBeInTheDocument()
  })
})
