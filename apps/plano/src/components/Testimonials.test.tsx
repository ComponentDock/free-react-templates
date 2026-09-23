import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Working with this team/)).toBeInTheDocument()
    expect(screen.getByText('Robert Thomson')).toBeInTheDocument()
    expect(screen.getByText('Business Owner')).toBeInTheDocument()
  })

  it('renders slide navigation dots', () => {
    render(<Testimonials />)
    expect(screen.getByRole('button', { name: 'Go to testimonial 1' })).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Go to testimonial 2' })).toBeInTheDocument()
  })

  it('auto-advances testimonials', () => {
    render(<Testimonials />)
    act(() => {
      vi.advanceTimersByTime(6000)
    })
    expect(screen.getByText(/attention to detail/)).toBeInTheDocument()
    expect(screen.getByText('Sarah Mitchell')).toBeInTheDocument()
  })

  it('allows manual navigation', () => {
    render(<Testimonials />)
    const dot = screen.getByRole('button', { name: 'Go to testimonial 2' })
    act(() => {
      dot.click()
    })
    expect(screen.getByText(/attention to detail/)).toBeInTheDocument()
  })
})
