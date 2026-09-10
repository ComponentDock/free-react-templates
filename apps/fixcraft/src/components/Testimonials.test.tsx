import { act, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, afterEach } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders heading', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Happy Clients & Feedbacks/)).toBeDefined()
  })

  it('renders first testimonial', () => {
    render(<Testimonials />)
    expect(screen.getByText(/Roger Scott/)).toBeDefined()
    expect(screen.getByText('Marketing Manager')).toBeDefined()
  })

  it('renders navigation dots', () => {
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /Go to testimonial/ })
    expect(dots).toHaveLength(3)
  })

  it('advances to next testimonial after interval', () => {
    vi.useFakeTimers()
    render(<Testimonials />)
    expect(screen.getByText('Roger Scott')).toBeDefined()
    act(() => {
      vi.advanceTimersByTime(7000)
    })
    expect(screen.getByText('Jessica Moore')).toBeDefined()
  })

  it('allows clicking dots to navigate', async () => {
    const user = userEvent.setup()
    render(<Testimonials />)
    await user.click(screen.getByLabelText('Go to testimonial 3'))
    expect(screen.getByText('James Wilson')).toBeDefined()
  })
})
