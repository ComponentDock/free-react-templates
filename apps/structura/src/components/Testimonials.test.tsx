import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /Customer Feedback/i })).toBeInTheDocument()
  })

  it('displays all 3 testimonial authors', () => {
    render(<Testimonials />)
    expect(screen.getByText('Landy Drammer')).toBeInTheDocument()
    expect(screen.getByText('Alex Smit')).toBeInTheDocument()
    expect(screen.getByText('Jony Andarson')).toBeInTheDocument()
  })

  it('displays locations', () => {
    render(<Testimonials />)
    expect(screen.getByText('Newyork City')).toBeInTheDocument()
    expect(screen.getByText('London')).toBeInTheDocument()
    expect(screen.getByText('USA')).toBeInTheDocument()
  })
})
