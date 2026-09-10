import { describe, expect, it } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'Happy Clients' })).toBeInTheDocument()
  })

  it('renders all testimonials with names and roles', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: 'John Smith' })).toBeInTheDocument()
    expect(screen.getByText('Business Traveler')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Sarah Johnson' })).toBeInTheDocument()
    expect(screen.getByText('Vacationer')).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Mike Wilson' })).toBeInTheDocument()
    expect(screen.getByText('Daily Commuter')).toBeInTheDocument()
  })

  it('renders testimonial quotes', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Excellent service!/)).toBeInTheDocument()
    expect(screen.getByText(/Great selection/)).toBeInTheDocument()
    expect(screen.getByText(/Reliable cars/)).toBeInTheDocument()
  })

  it('renders avatar images', () => {
    render(<Testimonials />)
    const avatars = screen.getAllByRole('img')
    expect(avatars.length).toBeGreaterThanOrEqual(3)
  })
})
