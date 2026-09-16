import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent, act } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByRole('heading', { name: /what our clients say/i })).toBeInTheDocument()
  })

  it('renders the first testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByText(/elevate completely transformed my approach/i)).toBeInTheDocument()
    expect(screen.getByText('Sarah Johnson')).toBeInTheDocument()
    expect(screen.getByText('CEO, TechStart')).toBeInTheDocument()
  })

  it('renders the avatar image', () => {
    render(<Testimonials />)
    const img = screen.getByRole('img', { name: 'Sarah Johnson' })
    expect(img).toHaveAttribute('src', expect.stringContaining('elevate-person-1'))
  })

  it('navigates to next testimonial', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText(/i was stuck in my career for years/i)).toBeInTheDocument()
    expect(screen.getByText('Michael Chen')).toBeInTheDocument()
  })

  it('navigates to previous testimonial', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText(/the business coaching program helped me double/i)).toBeInTheDocument()
    expect(screen.getByText('Emily Rodriguez')).toBeInTheDocument()
  })

  it('auto-advances after 6 seconds', () => {
    render(<Testimonials />)
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText(/i was stuck in my career for years/i)).toBeInTheDocument()
  })
})
