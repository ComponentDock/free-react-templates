import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section title', () => {
    render(<Testimonials />)
    expect(screen.getByText('Client Testimonial')).toBeInTheDocument()
  })

  it('renders all three testimonial names', () => {
    render(<Testimonials />)
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('David Chen')).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('renders all three testimonial roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('CEO at TechFlow')).toBeInTheDocument()
    expect(screen.getByText('Founder at LaunchPad')).toBeInTheDocument()
    expect(screen.getByText('Product Lead at GrowthHub')).toBeInTheDocument()
  })
})
