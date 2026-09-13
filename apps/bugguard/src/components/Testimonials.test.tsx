import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders heading and rating', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Testimonials')
    expect(screen.getByText('4.7')).toBeInTheDocument()
    expect(screen.getByText('3000 Rating')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/eliminated our ant problem/)).toBeInTheDocument()
    expect(screen.getByText(/using BugGuard for our office/)).toBeInTheDocument()
    expect(screen.getByText(/Fast response, fair pricing/)).toBeInTheDocument()
  })

  it('renders author names', () => {
    render(<Testimonials />)
    expect(screen.getByText('By John Smith')).toBeInTheDocument()
    expect(screen.getByText('By Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('By Mike Davis')).toBeInTheDocument()
  })

  it('renders navigation dots', () => {
    render(<Testimonials />)
    const section = screen.getByText('Testimonials').closest('section')!
    const dots = section.querySelectorAll('.rounded-full')
    expect(dots.length).toBeGreaterThanOrEqual(3)
  })
})
