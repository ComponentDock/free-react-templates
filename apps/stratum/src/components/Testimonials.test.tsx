import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders testimonials heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Testimonial')).toBeInTheDocument()
  })

  it('renders all 4 testimonials', () => {
    render(<Testimonials />)
    expect(screen.getByText('Ricky Fisher')).toBeInTheDocument()
    expect(screen.getByText('Ken Davis')).toBeInTheDocument()
    expect(screen.getByText('Mellisa Griffin')).toBeInTheDocument()
    expect(screen.getByText('Robert Steward')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Stratum has been instrumental/)).toBeInTheDocument()
    expect(screen.getByText(/Working with the Stratum team/)).toBeInTheDocument()
  })

  it('renders testimonial images', () => {
    render(<Testimonials />)
    const images = screen.getAllByRole('img')
    expect(images.length).toBeGreaterThanOrEqual(4)
  })
})
