import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Testimonials')
  })

  it('renders testimonial quotes and names', () => {
    render(<Testimonials />)
    expect(screen.getByText('John Doe')).toBeInTheDocument()
    expect(screen.getByText('Jane Smith')).toBeInTheDocument()
    expect(screen.getByText('Mark Wilson')).toBeInTheDocument()
  })

  it('renders roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('CEO, TechCorp')).toBeInTheDocument()
    expect(screen.getByText('Marketing Director, BizInc')).toBeInTheDocument()
    expect(screen.getByText('Founder, StartupHub')).toBeInTheDocument()
  })
})
