import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Happy Clients & Feedbacks')).toBeInTheDocument()
  })

  it('renders all testimonial authors', () => {
    render(<Testimonials />)
    expect(screen.getByText('Racky Henderson')).toBeInTheDocument()
    expect(screen.getByText('Henry Dee')).toBeInTheDocument()
    expect(screen.getByText('Mark Huff')).toBeInTheDocument()
    expect(screen.getByText('Rodel Golez')).toBeInTheDocument()
  })
})
