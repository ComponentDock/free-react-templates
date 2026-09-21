import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading and testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Happy Clients')).toBeInTheDocument()
    expect(screen.getByText('Roger Scott')).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('James Rivera')).toBeInTheDocument()
  })

  it('renders testimonial images', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('Roger Scott')).toBeInTheDocument()
    expect(screen.getByAltText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByAltText('James Rivera')).toBeInTheDocument()
  })
})
