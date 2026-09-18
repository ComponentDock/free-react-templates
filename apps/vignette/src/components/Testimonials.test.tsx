import { describe, expect, it, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, act, fireEvent } from '@testing-library/react'
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
    expect(screen.getByRole('heading', { name: 'Testimonials' })).toBeInTheDocument()
  })

  it('renders the initial testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByText('Michelle Williams')).toBeInTheDocument()
    expect(screen.getByText(/Nunc pulvinar molestie/)).toBeInTheDocument()
  })

  it('renders slide indicators', () => {
    render(<Testimonials />)
    expect(screen.getByLabelText('Go to testimonial 1')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to testimonial 2')).toBeInTheDocument()
    expect(screen.getByLabelText('Go to testimonial 3')).toBeInTheDocument()
  })

  it('auto-advances to next testimonial', () => {
    render(<Testimonials />)
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText('Sarah Connor')).toBeInTheDocument()
  })

  it('navigates to a specific testimonial on indicator click', () => {
    render(<Testimonials />)
    fireEvent.click(screen.getByLabelText('Go to testimonial 3'))
    expect(screen.getByText('Emily Carter')).toBeInTheDocument()
  })

  it('renders avatar images', () => {
    const { container } = render(<Testimonials />)
    const avatars = container.querySelectorAll('img')
    expect(avatars.length).toBeGreaterThan(0)
    expect(
      Array.from(avatars).some((img) => img.getAttribute('src')?.includes('vignette-avatar')),
    ).toBe(true)
  })
})
