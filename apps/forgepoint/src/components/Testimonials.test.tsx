import { describe, expect, it, vi } from 'vitest'
import { render, screen, act } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  it('renders a testimonial quote', () => {
    render(<Testimonials />)
    expect(screen.getByText(/logistics operator providing full range/i)).toBeInTheDocument()
  })

  it('renders the founder name and role', () => {
    render(<Testimonials />)
    expect(screen.getByText('Jessya Inn')).toBeInTheDocument()
    expect(screen.getByText('Co Founder')).toBeInTheDocument()
  })

  it('renders the quote icon via CSS selector', () => {
    render(<Testimonials />)
    const quoteIcon = document.querySelector('.lucide-quote')
    expect(quoteIcon).toBeInTheDocument()
  })

  it('renders navigation dots', () => {
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /go to testimonial/i })
    expect(dots.length).toBeGreaterThanOrEqual(1)
  })

  it('advances to next testimonial on dot click', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    const dot2 = screen.getByRole('button', { name: /go to testimonial 2/i })
    await user.click(dot2)
    expect(screen.getByText('Mark Johnson')).toBeInTheDocument()
  })

  it('auto-advances after interval', () => {
    vi.useFakeTimers()
    render(<Testimonials />)
    expect(screen.getByText('Jessya Inn')).toBeInTheDocument()
    act(() => {
      vi.advanceTimersByTime(5000)
    })
    expect(screen.getByText('Mark Johnson')).toBeInTheDocument()
    vi.useRealTimers()
  })
})
