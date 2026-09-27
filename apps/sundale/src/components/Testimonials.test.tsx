import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('Client testimonials')).toBeInTheDocument()
  })

  it('renders subtitle', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Suspendisse dictum/)).toBeInTheDocument()
  })

  it('renders 3 testimonial cards', () => {
    render(<Testimonials />)
    expect(screen.getByText('Perfect Home for me')).toBeInTheDocument()
    expect(screen.getByText('Excellent Service')).toBeInTheDocument()
    expect(screen.getByText('Highly Recommended')).toBeInTheDocument()
  })

  it('renders author names', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Daiane Smith/)).toBeInTheDocument()
    expect(screen.getByText(/Michael Torres/)).toBeInTheDocument()
    expect(screen.getByText(/Sarah Chen/)).toBeInTheDocument()
  })

  it('renders author roles', () => {
    render(<Testimonials />)
    expect(screen.getByText('Customer')).toBeInTheDocument()
    expect(screen.getByText('Buyer')).toBeInTheDocument()
    expect(screen.getByText('Investor')).toBeInTheDocument()
  })

  it('renders author avatars', () => {
    render(<Testimonials />)
    const avatars = screen.getAllByRole('img')
    const authorAvatars = avatars.filter((img) =>
      img.getAttribute('alt')?.match(/Daiane|Michael|Sarah/),
    )
    expect(authorAvatars.length).toBe(3)
  })
})
