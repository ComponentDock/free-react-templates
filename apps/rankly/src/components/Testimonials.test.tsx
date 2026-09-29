import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/transformed our online presence/)).toBeInTheDocument()
    expect(screen.getByText(/Professional team with deep expertise/)).toBeInTheDocument()
  })

  it('renders author names and roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
    expect(screen.getByText('Marketing Director at TechCorp')).toBeInTheDocument()
    expect(screen.getByText('James Wilson')).toBeInTheDocument()
    expect(screen.getByText('CEO at GrowthHub')).toBeInTheDocument()
  })
})
