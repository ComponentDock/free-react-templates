import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Working with this team transformed/)).toBeInTheDocument()
    expect(screen.getByText(/The results speak for themselves/)).toBeInTheDocument()
    expect(screen.getByText(/Professional, responsive/)).toBeInTheDocument()
  })

  it('renders person names', () => {
    render(<Testimonials />)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('Christine Aguilar')).toBeInTheDocument()
    expect(screen.getByText('Robert Spears')).toBeInTheDocument()
  })
})
