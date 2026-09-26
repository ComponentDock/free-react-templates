import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonials')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/ForgeHub transformed our digital presence/)).toBeInTheDocument()
    expect(screen.getByText(/Working with ForgeHub was an absolute pleasure/)).toBeInTheDocument()
  })

  it('renders author names', () => {
    render(<Testimonials />)
    expect(screen.getByText('John Smith')).toBeInTheDocument()
    expect(screen.getByText('Christine Aguilar')).toBeInTheDocument()
    expect(screen.getByText('Robert Spears')).toBeInTheDocument()
  })
})
