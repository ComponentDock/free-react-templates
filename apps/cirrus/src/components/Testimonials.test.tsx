import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { Testimonials } from './Testimonials'

describe('Testimonials', () => {
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders the heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('What Users Saying')).toBeInTheDocument()
  })

  it('shows the first testimonial by default', () => {
    render(<Testimonials />)
    expect(screen.getByText('Alice Morgan')).toBeInTheDocument()
    expect(screen.getByText('Marketing Manager')).toBeInTheDocument()
  })

  it('navigates to next testimonial', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Brian Foster')).toBeInTheDocument()
    expect(screen.getByText('Interface Designer')).toBeInTheDocument()
  })

  it('navigates to previous testimonial from non-first position', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<Testimonials />)
    // Go to second
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    // Now go back (not wrapping)
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Alice Morgan')).toBeInTheDocument()
  })

  it('wraps from first to last on previous', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /previous testimonial/i }))
    expect(screen.getByText('Elena Price')).toBeInTheDocument()
  })

  it('wraps from last to first on next', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<Testimonials />)
    // Go to last by clicking next 4 times
    for (let i = 0; i < 4; i++) {
      await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    }
    expect(screen.getByText('Elena Price')).toBeInTheDocument()
    // Now wrap to first
    await user.click(screen.getByRole('button', { name: /next testimonial/i }))
    expect(screen.getByText('Alice Morgan')).toBeInTheDocument()
  })

  it('navigates via dot indicators', async () => {
    const user = userEvent.setup({ advanceTimers: vi.advanceTimersByTime })
    render(<Testimonials />)
    await user.click(screen.getByRole('button', { name: /go to testimonial 3/i }))
    expect(screen.getByText('Carla Simmons')).toBeInTheDocument()
  })

  it('renders five dot indicators', () => {
    render(<Testimonials />)
    const dots = screen.getAllByRole('button', { name: /go to testimonial/i })
    expect(dots).toHaveLength(5)
  })

  it('renders testimonial avatar image', () => {
    render(<Testimonials />)
    expect(screen.getByAltText('Alice Morgan')).toBeInTheDocument()
  })
})
