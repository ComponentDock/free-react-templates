import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'
import { describe, expect, it } from 'vitest'

describe('Testimonials', () => {
  it('renders the testimonials title', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /what our patients say/i })).toBeInTheDocument()
  })

  it('renders all three testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Cooper')).toBeInTheDocument()
    expect(screen.getByText('Emily Chen')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/ACL surgery/)).toBeInTheDocument()
    expect(screen.getByText(/chronic back pain/)).toBeInTheDocument()
    expect(screen.getByText(/massage therapy sessions/)).toBeInTheDocument()
  })

  it('renders testimonial images', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByAltText('James Cooper')).toBeInTheDocument()
    expect(screen.getByAltText('Emily Chen')).toBeInTheDocument()
  })
})
