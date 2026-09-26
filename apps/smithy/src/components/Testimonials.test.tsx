import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /client say about me/i })).toBeInTheDocument()
  })

  it('renders both testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/outstanding website/)).toBeInTheDocument()
    expect(screen.getByText(/fantastic experience/)).toBeInTheDocument()
  })

  it('renders client names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
  })

  it('renders avatar images', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByAltText('Michael Chen')).toBeInTheDocument()
  })
})
