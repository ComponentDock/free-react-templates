import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('shows Client Feedback heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2, name: /client/i })).toBeInTheDocument()
  })

  it('displays testimonial entries', () => {
    render(<Testimonials />)
    expect(screen.getByText(/sarah mitchell/i)).toBeInTheDocument()
    expect(screen.getByText(/james cooper/i)).toBeInTheDocument()
    expect(screen.getByText(/emily chen/i)).toBeInTheDocument()
  })

  it('shows testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/amazing work/i)).toBeInTheDocument()
    expect(screen.getByText(/professional, punctual/i)).toBeInTheDocument()
  })

  it('shows role for each testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByText('Marketing Director')).toBeInTheDocument()
    expect(screen.getByText('Event Coordinator')).toBeInTheDocument()
    expect(screen.getByText('Brand Manager')).toBeInTheDocument()
  })
})
